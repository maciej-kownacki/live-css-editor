import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Standalone build config - bundles everything including React
export default defineConfig({
  plugins: [react()],
  define: {
    // Define global variables for browser environment
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
  },
  build: {
    outDir: 'dist-standalone',
    lib: {
      entry: resolve(__dirname, 'src/standalone.tsx'),
      name: 'LiveCSSEditor',
      formats: ['iife'], // Immediately Invoked Function Expression
      fileName: () => 'live-css-editor.standalone.js'
    },
    rollupOptions: {
      output: {
        // Inline everything - no externals
        inlineDynamicImports: true,
      }
    },
    // Don't minify for easier debugging (can enable for production)
    minify: false,
  }
});
