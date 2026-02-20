/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          500: '#10b981',
          900: '#064e3b',
        },
      },
    },
  },
  plugins: [],
}
