import React from 'react';
import ReactDOM from 'react-dom/client';
import { CSSEditor } from '../src/index';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CSSEditor autoAnalyze={true} initiallyOpen={true} />
    </React.StrictMode>
  );
}
