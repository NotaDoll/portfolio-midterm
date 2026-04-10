/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These match the colors in your App.vue
        lavender: '#E6E6FA', 
        blush: '#FFD1DC',
        cream: '#F5F2EE',
        dark: '#1A1A1A',
        brown: '#5D4037',
        purple: '#8A2BE2', 
        neutral: '#D1D1D1',
      },
      fontFamily: {
        serif: ['Montserrat', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}