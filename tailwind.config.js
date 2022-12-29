/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#686868',
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
