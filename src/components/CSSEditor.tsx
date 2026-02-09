import React, { useEffect, useState } from 'react';
import { FloatingPanel } from './FloatingPanel';
import { ColorPicker } from './ColorPicker';
import { useEditorStore } from '../stores/editorStore';
import { CSSAnalysisEngine } from '../core/CSSAnalysisEngine';
import { ColorExtractor } from '../core/ColorExtractor';
import { InspectModeHandler } from '../core/InspectModeHandler';
import { useStyleInjector } from '../hooks/useStyleInjector';
import type { ColorInfo } from '../types/editor.types';
import '../styles.css';

export interface CSSEditorProps {
  /**
   * Whether to analyze CSS on mount
   * @default true
   */
  autoAnalyze?: boolean;

  /**
   * Initial panel visibility
   * @default true
   */
  initiallyOpen?: boolean;
}

// Helper to normalize colors for comparison
const normalizeColorForComparison = (color: string): string => {
  const temp = document.createElement('div');
  temp.style.color = color;
  document.body.appendChild(temp);
  const computed = getComputedStyle(temp).color;
  document.body.removeChild(temp);
  return computed;
};

export const CSSEditor: React.FC<CSSEditorProps> = ({
  autoAnalyze = true,
  initiallyOpen = true,
}) => {
  const { isPanelOpen, setPanelOpen, setColors, colors, isInspectMode, setInspectMode, addChange } = useEditorStore();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedColorForEdit, setSelectedColorForEdit] = useState<ColorInfo | null>(null);
  const [inspectHandler] = useState(() => new InspectModeHandler());
  const [parsedRules, setParsedRules] = useState<any[]>([]);
  const styleInjector = useStyleInjector();

  useEffect(() => {
    // Set initial panel state
    setPanelOpen(initiallyOpen);

    // Auto-analyze CSS on mount
    if (autoAnalyze) {
      analyzeCSS();
    }

    // Cleanup on unmount
    return () => {
      console.log('[CSS Editor] Unmounting');
      // TODO: Clean up event listeners, injected styles, etc.
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const analyzeCSS = async () => {
    setIsAnalyzing(true);
    console.log('[CSS Editor] Starting CSS analysis...');

    try {
      const analyzer = new CSSAnalysisEngine();
      const parsed = await analyzer.analyzeDocument();

      console.log('[CSS Editor] Parsed CSS:', parsed);

      // Store parsed rules for selector lookup during color changes
      setParsedRules(parsed.rules);

      const extractor = new ColorExtractor();
      const extractedColors = extractor.extractAndRankColors(parsed.rules);

      console.log('[CSS Editor] Extracted colors:', extractedColors);

      setColors(extractedColors);
    } catch (error) {
      console.error('[CSS Editor] Analysis error:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const toggleInspectMode = () => {
    if (!isInspectMode) {
      // Enable inspect mode
      inspectHandler.enable({
        onSelected: (element, similar) => {
          console.log('[Inspect] Selected:', element, 'Similar:', similar);
          setInspectMode(false);
          // TODO: Show editing UI for selected element
        },
        onHovered: (info) => {
          console.log('[Inspect] Hovering:', info.selector);
        }
      });
      setInspectMode(true);
    } else {
      // Disable inspect mode
      inspectHandler.disable();
      setInspectMode(false);
    }
  };

  // Generate a unique CSS selector for an element
  const generateSelector = (el: HTMLElement): string => {
    // Try ID first
    if (el.id && !el.id.startsWith('live-css-editor')) {
      return `#${CSS.escape(el.id)}`;
    }

    // Build selector from tag + classes
    const tag = el.tagName.toLowerCase();
    const classes = Array.from(el.classList)
      .filter(c => !c.startsWith('live-css-editor'))
      .map(c => `.${CSS.escape(c)}`)
      .join('');

    if (classes) return `${tag}${classes}`;

    // Fallback: nth-child
    const parent = el.parentElement;
    if (parent) {
      const index = Array.from(parent.children).indexOf(el) + 1;
      const parentSelector = generateSelector(parent);
      return `${parentSelector} > ${tag}:nth-child(${index})`;
    }

    return tag;
  };

  const handleColorChange = (color: ColorInfo, newColorValue: string) => {
    console.log('[Color Change]', color.property, ':', color.value, '->', newColorValue);

    // Strategy 1: CSS Variables (works great in Lovable/shadcn)
    if (color.isCSSVariable && color.cssVariableName) {
      styleInjector.applyCSSVariable(color.cssVariableName, newColorValue);

      addChange({
        selector: ':root',
        property: color.cssVariableName,
        value: newColorValue,
        mode: 'cssVariable'
      });

      console.log('[Color Change] Applied CSS variable:', color.cssVariableName);
    } else {
      // Strategy 2: Find matching selectors from parsed CSS rules
      const normalizedSearchColor = normalizeColorForComparison(color.value);
      const matchingSelectors: string[] = [];

      parsedRules.forEach(rule => {
        Object.entries(rule.declarations).forEach(([prop, info]: [string, any]) => {
          if (prop === color.property || (color.property === 'background-color' && prop === 'background')) {
            const ruleColorNormalized = normalizeColorForComparison(info.value);
            if (ruleColorNormalized === normalizedSearchColor) {
              matchingSelectors.push(rule.selector);
            }
          }
        });
      });

      console.log('[Color Change] Found', matchingSelectors.length, 'matching CSS selectors');

      // Inject global CSS rules for matched selectors
      if (matchingSelectors.length > 0) {
        const combinedSelector = matchingSelectors.join(', ');
        styleInjector.applyInjectedRule(combinedSelector, color.property, newColorValue);
        console.log('[Color Change] Injected CSS rule for:', combinedSelector);
      }

      // Strategy 3: Scan DOM elements and generate selectors for any we missed
      const additionalSelectors: string[] = [];
      document.querySelectorAll('*').forEach(el => {
        if (el.closest('[data-css-editor-panel]')) return;

        const computed = getComputedStyle(el as HTMLElement);
        const currentValue = computed.getPropertyValue(color.property);

        if (currentValue) {
          const normalizedCurrent = normalizeColorForComparison(currentValue);
          if (normalizedCurrent === normalizedSearchColor) {
            const selector = generateSelector(el as HTMLElement);
            additionalSelectors.push(selector);
          }
        }
      });

      console.log('[Color Change] Found', additionalSelectors.length, 'elements via DOM scan');

      if (additionalSelectors.length > 0) {
        // Deduplicate
        const uniqueSelectors = [...new Set(additionalSelectors)];
        const combinedSelector = uniqueSelectors.join(', ');
        styleInjector.applyInjectedRule(
          combinedSelector,
          color.property,
          newColorValue
        );
        console.log('[Color Change] Injected CSS rule for', uniqueSelectors.length, 'element selectors');
      }

      addChange({
        selector: `/* ${matchingSelectors.length} rules + ${additionalSelectors.length} elements */`,
        property: color.property,
        value: newColorValue,
        mode: 'injectedRule'
      });
    }

    // Update the color in the store
    const updatedColors = colors.map(c =>
      c.value === color.value ? { ...c, value: newColorValue } : c
    );
    setColors(updatedColors);
  };

  return (
    <>
      {/* Floating Trigger Button - shows when panel is closed */}
      {!isPanelOpen && (
        <button
          onClick={() => setPanelOpen(true)}
          data-css-editor-panel
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            zIndex: 2147483647,
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s, background-color 0.2s',
            fontFamily: 'Arial, sans-serif',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#3b82f6';
          }}
          title="Open CSS Editor"
          aria-label="Open CSS Editor"
        >
          🎨
        </button>
      )}

      <FloatingPanel>
        <div>
          <h3 style={{ marginTop: 0 }}>Live CSS Editor</h3>

          {/* Inspect Mode Toggle */}
          <div style={{ marginBottom: '16px' }}>
            <button
              onClick={toggleInspectMode}
              style={{
                width: '100%',
                padding: '8px 16px',
                backgroundColor: isInspectMode ? '#ef4444' : '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              {isInspectMode ? '🔍 Inspect Mode (Click to disable)' : '🎯 Enable Inspect Mode'}
            </button>
            {isInspectMode && (
              <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#6b7280' }}>
                Click any element on the page to select it
              </p>
            )}
          </div>

          {isAnalyzing ? (
            <p style={{ color: '#6b7280', fontSize: '13px' }}>
              Analyzing CSS...
            </p>
          ) : (
            <>
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                  Colors ({colors.length})
                </h4>
                <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#6b7280' }}>
                  Click a color to edit it
                </p>
                {colors.slice(0, 10).map((color, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedColorForEdit(color)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '4px',
                      fontSize: '12px',
                      padding: '4px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: color.value,
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <code style={{ fontSize: '11px' }}>{color.value}</code>
                      <div style={{ fontSize: '10px', color: '#999' }}>
                        {color.category} • {color.property}
                      </div>
                    </div>
                  </div>
                ))}
                {colors.length > 10 && (
                  <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#6b7280' }}>
                    + {colors.length - 10} more colors
                  </p>
                )}
              </div>

              <button
                onClick={analyzeCSS}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                Re-analyze
              </button>
            </>
          )}
        </div>
      </FloatingPanel>

      {/* Color Picker Modal */}
      {selectedColorForEdit && (
        <ColorPicker
          color={selectedColorForEdit}
          onColorChange={(newColor) => handleColorChange(selectedColorForEdit, newColor)}
          onClose={() => setSelectedColorForEdit(null)}
        />
      )}
    </>
  );
};
