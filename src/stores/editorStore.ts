import { create } from 'zustand';
import type { ColorInfo, StyleChange, ElementInfo } from '../types/editor.types';

interface EditorState {
  // Colors
  colors: ColorInfo[];
  selectedColor: ColorInfo | null;

  // Fonts
  fonts: string[];
  selectedFont: string | null;

  // Border radius
  borderRadius: string;

  // Changes tracking
  changes: StyleChange[];
  undoStack: StyleChange[];
  redoStack: StyleChange[];

  // Inspect mode
  isInspectMode: boolean;
  hoveredElement: ElementInfo | null;
  selectedElement: ElementInfo | null;
  similarElements: HTMLElement[];

  // UI state
  isPanelOpen: boolean;
  activeTab: 'colors' | 'typography' | 'border-radius' | 'themes' | 'export';

  // Actions
  setColors: (colors: ColorInfo[]) => void;
  setSelectedColor: (color: ColorInfo | null) => void;

  setFonts: (fonts: string[]) => void;
  setSelectedFont: (font: string | null) => void;

  setBorderRadius: (radius: string) => void;

  addChange: (change: Omit<StyleChange, 'id' | 'timestamp'>) => void;
  undo: () => void;
  redo: () => void;
  clearChanges: () => void;

  setInspectMode: (enabled: boolean) => void;
  setHoveredElement: (element: ElementInfo | null) => void;
  setSelectedElement: (element: ElementInfo | null, similar?: HTMLElement[]) => void;

  setPanelOpen: (open: boolean) => void;
  setActiveTab: (tab: EditorState['activeTab']) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  // Initial state
  colors: [],
  selectedColor: null,

  fonts: [],
  selectedFont: null,

  borderRadius: '0px',

  changes: [],
  undoStack: [],
  redoStack: [],

  isInspectMode: false,
  hoveredElement: null,
  selectedElement: null,
  similarElements: [],

  isPanelOpen: false, // Default closed - show only floating button
  activeTab: 'colors',

  // Actions
  setColors: (colors) => set({ colors }),
  setSelectedColor: (color) => set({ selectedColor: color }),

  setFonts: (fonts) => set({ fonts }),
  setSelectedFont: (font) => set({ selectedFont: font }),

  setBorderRadius: (radius) => set({ borderRadius: radius }),

  addChange: (changeData) => set((state) => {
    const change: StyleChange = {
      ...changeData,
      id: `${Date.now()}-${Math.random()}`,
      timestamp: Date.now(),
    };

    return {
      changes: [...state.changes, change],
      undoStack: [...state.undoStack, change],
      redoStack: [], // Clear redo stack on new change
    };
  }),

  undo: () => set((state) => {
    if (state.undoStack.length === 0) return state;

    const lastChange = state.undoStack[state.undoStack.length - 1];
    const newUndoStack = state.undoStack.slice(0, -1);
    const newChanges = state.changes.filter(c => c.id !== lastChange.id);

    return {
      undoStack: newUndoStack,
      redoStack: [...state.redoStack, lastChange],
      changes: newChanges,
    };
  }),

  redo: () => set((state) => {
    if (state.redoStack.length === 0) return state;

    const lastRedone = state.redoStack[state.redoStack.length - 1];
    const newRedoStack = state.redoStack.slice(0, -1);

    return {
      redoStack: newRedoStack,
      undoStack: [...state.undoStack, lastRedone],
      changes: [...state.changes, lastRedone],
    };
  }),

  clearChanges: () => set({ changes: [], undoStack: [], redoStack: [] }),

  setInspectMode: (enabled) => set({ isInspectMode: enabled }),
  setHoveredElement: (element) => set({ hoveredElement: element }),
  setSelectedElement: (element, similar = []) => set({
    selectedElement: element,
    similarElements: similar
  }),

  setPanelOpen: (open) => set({ isPanelOpen: open }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
