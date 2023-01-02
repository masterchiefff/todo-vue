/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      'bg-dark': '#0F172A',
      'card-dark': '#1E293B',
      'blue': '#1fb6ff',
      'black': '#000',
      'purple': '#7e5bef',
      'green': '#13ce66',
      'red': '#E64848',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#686868',
      'grey-dark-xs': '#77777D',
      'white': '#ffffff',
      'grey-light-md': '#F1EFE8',
      'gray-light': '#D1D1D1',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}
