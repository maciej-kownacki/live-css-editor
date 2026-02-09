import chroma from 'chroma-js';
import type { ColorInfo } from '../types/editor.types';
import type { CSSRule } from '../types/css.types';

export class ColorExtractor {
  extractAndRankColors(rules: CSSRule[]): ColorInfo[] {
    const colorMap = new Map<string, Partial<ColorInfo>>();

    // Phase 1: Extract colors from parsed CSS
    rules.forEach(rule => {
      Object.entries(rule.declarations).forEach(([prop, info]) => {
        if (this.isColorProperty(prop)) {
          const normalizedColor = this.normalizeColor(info.value);
          if (normalizedColor) {
            const existing = colorMap.get(normalizedColor);

            colorMap.set(normalizedColor, {
              value: normalizedColor,
              property: prop,
              usageCount: (existing?.usageCount || 0) + 1,
              isCSSVariable: this.isCSSVariable(info.value),
              cssVariableName: this.isCSSVariable(info.value)
                ? this.extractVarName(info.value)
                : undefined,
            });
          }
        }
      });
    });

    // Phase 2: Calculate scores
    const colorsWithScores: ColorInfo[] = [];

    colorMap.forEach((colorInfo, color) => {
      const score = this.calculateImportanceScore(colorInfo);
      const category = this.categorizeColor(colorInfo, score);

      colorsWithScores.push({
        value: color,
        category,
        property: colorInfo.property || '',
        usageCount: colorInfo.usageCount || 0,
        score,
        isCSSVariable: colorInfo.isCSSVariable || false,
        cssVariableName: colorInfo.cssVariableName,
      });
    });

    // Phase 3: Sort by score descending
    return colorsWithScores.sort((a, b) => b.score - a.score);
  }

  private normalizeColor(value: string): string | null {
    try {
      // Handle CSS variables
      if (value.includes('var(')) {
        // Extract the variable value
        const computed = getComputedStyle(document.documentElement);
        const varMatch = value.match(/var\((--[^,)]+)/);
        if (varMatch) {
          const varValue = computed.getPropertyValue(varMatch[1]).trim();
          if (varValue) {
            value = varValue;
          }
        }
      }

      // Normalize using chroma
      const color = chroma(value);
      return color.hex();
    } catch {
      return null; // Invalid color
    }
  }

  private calculateImportanceScore(colorInfo: Partial<ColorInfo>): number {
    let score = 0;

    // Property weight
    const propertyWeights: Record<string, number> = {
      'background-color': 10,
      background: 10,
      color: 8,
      fill: 6,
      'border-color': 5,
      stroke: 4,
    };

    score += (propertyWeights[colorInfo.property || ''] || 1) * 10;

    // Usage frequency
    score += (colorInfo.usageCount || 0) * 2;

    // CSS variable boost
    if (colorInfo.isCSSVariable) {
      score *= 1.5;
    }

    return Math.round(score);
  }

  private categorizeColor(
    colorInfo: Partial<ColorInfo>,
    score: number
  ): ColorInfo['category'] {
    const prop = colorInfo.property || '';

    // Background colors
    if (prop.includes('background')) {
      return 'background';
    }

    // Text colors
    if (prop === 'color') {
      return 'foreground';
    }

    // High score non-background = likely brand color
    if (score > 50 && !prop.includes('background')) {
      return 'brand';
    }

    // Default
    return 'other';
  }

  private isColorProperty(prop: string): boolean {
    const colorProps = [
      'color',
      'background-color',
      'background',
      'border-color',
      'fill',
      'stroke',
    ];

    return colorProps.some(p => prop.includes(p));
  }

  private isCSSVariable(value: string): boolean {
    return value.includes('var(--');
  }

  private extractVarName(value: string): string | undefined {
    const match = value.match(/var\((--[^,)]+)/);
    return match ? match[1] : undefined;
  }
}
