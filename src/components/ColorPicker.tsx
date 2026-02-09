import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import type { ColorInfo } from '../types/editor.types';

interface ColorPickerProps {
  color: ColorInfo;
  onColorChange: (newColor: string) => void;
  onClose: () => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  onColorChange,
  onClose,
}) => {
  const [tempColor, setTempColor] = useState(color.value);

  const handleApply = () => {
    onColorChange(tempColor);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2147483647,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          minWidth: '300px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>
          Edit Color
        </h3>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ marginBottom: '8px', fontSize: '13px', color: '#6b7280' }}>
            Property: <code>{color.property}</code>
          </div>
          <div style={{ marginBottom: '8px', fontSize: '13px', color: '#6b7280' }}>
            Category: <strong>{color.category}</strong>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <HexColorPicker color={tempColor} onChange={setTempColor} />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <input
            type="text"
            value={tempColor}
            onChange={(e) => setTempColor(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'monospace',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 16px',
              backgroundColor: '#e5e7eb',
              color: '#374151',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
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
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
