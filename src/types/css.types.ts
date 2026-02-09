export interface CSSRule {
  selector: string;
  declarations: Record<string, DeclarationInfo>;
  specificity: number;
  source?: {
    file?: string;
    line?: number;
  };
}

export interface DeclarationInfo {
  value: string;
  important: boolean;
  source?: {
    file?: string;
    line?: number;
  };
}

export interface CSSVariable {
  name: string;
  value: string;
  scope: 'root' | 'scoped';
  element?: HTMLElement;
}

export interface ParsedCSS {
  rules: CSSRule[];
  variables: Map<string, CSSVariable>;
  colors: string[];
  fonts: string[];
}
