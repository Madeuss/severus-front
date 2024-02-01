/** @type {import('tailwindcss').Config} */
const colors = require('./colors')

module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Montserrat-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
