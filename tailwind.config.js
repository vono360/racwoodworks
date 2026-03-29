/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wood-dark': '#1a1612',
        'wood-surface': '#252017',
        'amber-wood': '#c8882a',
        'amber-muted': '#8b6914',
        'wood-text': '#f0e8d8',
        'wood-muted': '#a89880',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['96px', { lineHeight: '1.1' }],
        'display': ['64px', { lineHeight: '1.2' }],
        'heading': ['48px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
