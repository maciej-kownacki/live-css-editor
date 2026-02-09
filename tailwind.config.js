/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Prefix all Tailwind classes to avoid conflicts with user's app
  prefix: 'lce-',
  theme: {
    extend: {},
  },
  plugins: [],
  // Prevent Tailwind from affecting user's app
  corePlugins: {
    preflight: false,
  },
}
