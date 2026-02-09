# Live CSS Editor

A React component library for live CSS editing with export capabilities. Perfect for designers, developers, and anyone working with CSS in React applications.

## Installation

### Option 1: NPM Package (React Projects)

```bash
npm install @live-css-editor/react
# or
yarn add @live-css-editor/react
```

**Usage:**
```tsx
import { CSSEditor } from '@live-css-editor/react';
import '@live-css-editor/react/styles.css';

function App() {
  return (
    <>
      {/* Your app content */}
      <YourApp />

      {/* Add CSS Editor - recommended for development only */}
      {process.env.NODE_ENV === 'development' && <CSSEditor />}
    </>
  );
}
```

### Option 2: Standalone Script (No Build Required) 🎯

**Perfect for Lovable.ai projects or any website!**

Just add these two lines to your HTML:

```html
<link rel="stylesheet" href="live-css-editor-style.css">
<script src="live-css-editor.standalone.js" data-auto-init></script>
```

**[📖 Full Lovable Integration Guide](./LOVABLE-INTEGRATION.md)**

Build the standalone version:
```bash
npm run build:standalone
# Files will be in dist-standalone/
```

## Features

### ✅ Implemented

- **🎨 Automatic CSS Analysis**: Scans your document and extracts all colors with intelligent importance ranking
- **🖌️ Live Color Editing**: Click any detected color to edit it with a visual color picker
- **🔍 Inspect Mode**: Point-and-click element selection to identify and edit specific elements
- **⚡ Real-time Updates**: Changes apply instantly to your DOM via CSS variable injection or style rules
- **📊 Smart Color Detection**: Analyzes CSS properties, variables, and computed styles to find all colors
- **🎯 No CORS Issues**: Runs directly in your app context - no iframe needed

### 🚧 Coming Soon

- **Typography Control**: Change fonts with Google Fonts integration
- **Border Radius Editor**: Adjust border radius globally
- **Export**: Generate CSS, CSS Variables, or Tailwind config
- **WCAG Compliance**: Automatic contrast checking
- **Theme Presets**: Pre-built color themes with one-click application

## How It Works

1. **Analysis**: On mount, the CSS Editor analyzes all stylesheets in your document using PostCSS
2. **Color Extraction**: Extracts and ranks colors by importance (background, foreground, brand colors)
3. **Live Editing**: Click any color to open a color picker and change it in real-time
4. **Inspect Mode**: Enable inspect mode to click on any element and see its styles
5. **Style Injection**: Changes are applied via CSS variables (preferred) or injected style rules

### Current Demo

The library includes a demo page with various colored elements. Run `npm run dev` and open http://localhost:5173/ to see it in action.

**Try it:**
- Click the "Enable Inspect Mode" button and click any element on the page
- Click any detected color to change it with the color picker
- Watch your changes apply instantly to the page

## Development

This library is currently in active development.

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

## License

MIT
