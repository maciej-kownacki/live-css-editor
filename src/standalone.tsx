/**
 * Standalone version - bundles React and all dependencies
 * Can be used as a single <script> tag
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CSSEditor } from './components/CSSEditor';
import './styles.css';

// Global API for standalone usage
window.LiveCSSEditor = {
  /**
   * Initialize the CSS Editor
   * @param options Configuration options
   */
  init: (options?: {
    autoAnalyze?: boolean;
    initiallyOpen?: boolean;
    containerId?: string;
  }) => {
    const {
      autoAnalyze = true,
      initiallyOpen = false, // Default: show only floating button
      containerId = 'live-css-editor-root'
    } = options || {};

    // Create container if it doesn't exist
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      document.body.appendChild(container);
    }

    // Render the editor
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <CSSEditor autoAnalyze={autoAnalyze} initiallyOpen={initiallyOpen} />
      </React.StrictMode>
    );

    console.log('[Live CSS Editor] Initialized');

    return {
      unmount: () => {
        root.unmount();
        console.log('[Live CSS Editor] Unmounted');
      }
    };
  }
};

// Auto-initialize if data-auto-init is present
if (document.currentScript?.hasAttribute('data-auto-init')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.LiveCSSEditor.init();
    });
  } else {
    window.LiveCSSEditor.init();
  }
}

// TypeScript declarations
declare global {
  interface Window {
    LiveCSSEditor: {
      init: (options?: {
        autoAnalyze?: boolean;
        initiallyOpen?: boolean;
        containerId?: string;
      }) => {
        unmount: () => void;
      };
    };
  }
}

export {};
