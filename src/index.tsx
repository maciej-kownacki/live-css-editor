// Main entry point for the library
export { CSSEditor } from './components/CSSEditor';
export type { CSSEditorProps } from './components/CSSEditor';

// Export types for advanced usage
export type {
  ColorInfo,
  StyleChange,
  ElementInfo,
  PropagationScope,
  ExportFormat,
} from './types/editor.types';

export type {
  CSSRule,
  DeclarationInfo,
  CSSVariable,
  ParsedCSS,
} from './types/css.types';

// Export store hook for advanced customization
export { useEditorStore } from './stores/editorStore';
