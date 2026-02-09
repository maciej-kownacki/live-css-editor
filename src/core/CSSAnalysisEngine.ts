import postcss from 'postcss';
import type { CSSRule, CSSVariable, ParsedCSS } from '../types/css.types';

export class CSSAnalysisEngine {
  async analyzeDocument(): Promise<ParsedCSS> {
    const cssText = this.collectAllCSS();
    const parsedRules = await this.parseCSS(cssText);
    const variables = this.detectCSSVariables();

    const colors: string[] = [];
    const fonts: string[] = [];

    // Extract colors and fonts from rules
    parsedRules.forEach(rule => {
      Object.entries(rule.declarations).forEach(([prop, info]) => {
        if (this.isColorProperty(prop)) {
          colors.push(info.value);
        }
        if (prop === 'font-family') {
          fonts.push(info.value);
        }
      });
    });

    return {
      rules: parsedRules,
      variables,
      colors: [...new Set(colors)], // Remove duplicates
      fonts: [...new Set(fonts)],
    };
  }

  private collectAllCSS(): string {
    let cssText = '';

    // Collect from all stylesheets
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const sheet = document.styleSheets[i];

        // Skip our own injected styles
        if (
          sheet.ownerNode &&
          (sheet.ownerNode as Element).getAttribute?.('data-css-editor')
        ) {
          continue;
        }

        // Try to access rules (may fail for CORS)
        if (sheet.cssRules) {
          for (let j = 0; j < sheet.cssRules.length; j++) {
            cssText += sheet.cssRules[j].cssText + '\n';
          }
        }
      } catch (e) {
        // CORS error - skip this stylesheet
        console.warn('Cannot access stylesheet:', e);
      }
    }

    // Collect inline styles from <style> tags
    document.querySelectorAll('style').forEach(style => {
      if (!style.getAttribute('data-css-editor')) {
        cssText += style.textContent || '';
      }
    });

    return cssText;
  }

  private async parseCSS(cssText: string): Promise<CSSRule[]> {
    const rules: CSSRule[] = [];

    try {
      const root = postcss.parse(cssText);

      root.walkRules(rule => {
        const declarations: Record<string, any> = {};

        rule.walkDecls(decl => {
          declarations[decl.prop] = {
            value: decl.value,
            important: decl.important,
          };
        });

        rules.push({
          selector: rule.selector,
          declarations,
          specificity: this.calculateSpecificity(rule.selector),
        });
      });
    } catch (error) {
      console.error('CSS parsing error:', error);
    }

    return rules;
  }

  private detectCSSVariables(): Map<string, CSSVariable> {
    const variables = new Map<string, CSSVariable>();

    // Get all CSS custom properties from :root
    const rootStyle = getComputedStyle(document.documentElement);

    for (let i = 0; i < rootStyle.length; i++) {
      const prop = rootStyle[i];
      if (prop.startsWith('--')) {
        variables.set(prop, {
          name: prop,
          value: rootStyle.getPropertyValue(prop).trim(),
          scope: 'root',
        });
      }
    }

    // Scan all elements for scoped variables
    document.querySelectorAll('*').forEach(el => {
      if (el.getAttribute('data-css-editor-panel')) return; // Skip editor

      const style = getComputedStyle(el);
      for (let i = 0; i < style.length; i++) {
        const prop = style[i];
        if (prop.startsWith('--')) {
          const existing = variables.get(prop);
          if (!existing || existing.scope === 'root') {
            variables.set(prop, {
              name: prop,
              value: style.getPropertyValue(prop).trim(),
              scope: 'scoped',
              element: el as HTMLElement,
            });
          }
        }
      }
    });

    return variables;
  }

  private calculateSpecificity(selector: string): number {
    // Simple specificity calculation
    // IDs: 100, classes/attributes: 10, elements: 1
    let score = 0;

    // Count IDs
    score += (selector.match(/#[a-zA-Z]/g) || []).length * 100;

    // Count classes and attributes
    score += (selector.match(/\.[a-zA-Z]/g) || []).length * 10;
    score += (selector.match(/\[[^\]]+\]/g) || []).length * 10;

    // Count elements
    score += (selector.match(/^[a-zA-Z]+|\s[a-zA-Z]+/g) || []).length;

    return score;
  }

  private isColorProperty(prop: string): boolean {
    const colorProps = [
      'color',
      'background-color',
      'background',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'outline-color',
      'fill',
      'stroke',
    ];

    return colorProps.includes(prop);
  }
}
