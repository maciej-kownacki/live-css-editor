import React, { useState } from 'react';
import { useEditorStore } from '../stores/editorStore';

export interface FloatingPanelProps {
  children?: React.ReactNode;
}

const EDITOR_Z_INDEX = 2147483647; // Max z-index

export const FloatingPanel: React.FC<FloatingPanelProps> = ({ children }) => {
  const { isPanelOpen, setPanelOpen } = useEditorStore();
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!isPanelOpen) return null;

  return (
    <div
      className="live-css-editor-root"
      data-css-editor-panel
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: isCollapsed ? '60px' : '400px',
        maxHeight: '90vh',
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        zIndex: EDITOR_Z_INDEX,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f9fafb',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          {!isCollapsed && 'CSS Editor'}
        </h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
              fontSize: '18px',
            }}
            title={isCollapsed ? 'Expand' : 'Collapse'}
          >
            {isCollapsed ? '▶' : '◀'}
          </button>
          <button
            onClick={() => setPanelOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
              fontSize: '18px',
            }}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Content */}
      {!isCollapsed && (
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            padding: '16px',
          }}
        >
          {children || <div>No content</div>}
        </div>
      )}
    </div>
  );
};
