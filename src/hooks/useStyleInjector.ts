import { useEffect, useRef } from 'react';
import type { StyleChange } from '../types/editor.types';

const INJECTED_STYLE_ID = 'live-css-editor-injected';

export const useStyleInjector = () => {
  const styleElementRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    // Create or get injected style element
    let styleEl = document.getElementById(INJECTED_STYLE_ID) as HTMLStyleElement;

    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = INJECTED_STYLE_ID;
      styleEl.setAttribute('data-css-editor', 'injected-styles');
      document.head.appendChild(styleEl);
    }

    styleElementRef.current = styleEl;

    // Cleanup on unmount
    return () => {
      if (styleEl && styleEl.parentNode) {
        styleEl.remove();
      }
    };
  }, []);

  const applyStyle = (change: Omit<StyleChange, 'id' | 'timestamp'>) => {
    const { selector, property, value, mode } = change;

    switch (mode) {
      case 'cssVariable':
        applyCSSVariable(property, value);
        break;

      case 'injectedRule':
        applyInjectedRule(selector, property, value);
        break;

      case 'inline':
        applyInlineStyle(selector, property, value);
        break;
    }
  };

  const applyCSSVariable = (varName: string, value: string) => {
    // Apply CSS variable to :root
    document.documentElement.style.setProperty(varName, value);
  };

  const applyInjectedRule = (selector: string, property: string, value: string) => {
    if (!styleElementRef.current) return;

    // Add rule with high specificity using !important
    const rule = `${selector} { ${property}: ${value} !important; }`;

    // Check if rule already exists, if so, replace it
    const existingRules = styleElementRef.current.textContent || '';
    const ruleRegex = new RegExp(`${selector}\\s*\\{[^}]*${property}:[^}]*\\}`, 'g');

    if (ruleRegex.test(existingRules)) {
      // Replace existing rule
      styleElementRef.current.textContent = existingRules.replace(ruleRegex, rule);
    } else {
      // Add new rule
      styleElementRef.current.textContent += '\n' + rule;
    }
  };

  const applyInlineStyle = (selector: string, property: string, value: string) => {
    // Apply inline styles to all matching elements
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        // Skip CSS Editor elements
        if (el.closest('[data-css-editor-panel]')) return;

        el.style.setProperty(property, value);
      }
    });
  };

  const clearAllStyles = () => {
    if (styleElementRef.current) {
      styleElementRef.current.textContent = '';
    }

    // Clear CSS variables
    const rootStyle = document.documentElement.style;
    for (let i = rootStyle.length - 1; i >= 0; i--) {
      const prop = rootStyle[i];
      if (prop.startsWith('--')) {
        document.documentElement.style.removeProperty(prop);
      }
    }
  };

  return {
    applyStyle,
    applyCSSVariable,
    applyInjectedRule,
    applyInlineStyle,
    clearAllStyles,
  };
};
