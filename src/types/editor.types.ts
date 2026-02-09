export interface ColorInfo {
  value: string; // hex, rgb, etc.
  category: 'background' | 'foreground' | 'brand' | 'text' | 'accent' | 'other';
  property: string; // 'background-color', 'color', etc.
  usageCount: number;
  score: number;
  isCSSVariable: boolean;
  cssVariableName?: string;
}

export interface StyleChange {
  id: string;
  selector: string;
  property: string;
  value: string;
  mode: 'cssVariable' | 'injectedRule' | 'inline';
  timestamp: number;
}

export interface ElementInfo {
  element: HTMLElement;
  selector: string;
  styles: CSSStyleDeclaration;
  rect?: DOMRect;
}

export type PropagationScope = 'single' | 'similar' | 'class' | 'tag' | 'all';

export interface ExportFormat {
  type: 'css' | 'css-variables' | 'tailwind-config' | 'sass-variables';
  code: string;
}
