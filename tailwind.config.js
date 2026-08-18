/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{html,ejs,js}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#07080A',
          card: '#0E1015',
          cardLight: '#141720',
          gold: '#F59E0B',
          goldLight: '#FCD34D',
          goldDark: '#B45309',
          orange: '#EA580C',
          silver: '#E2E8F0',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        heading: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
