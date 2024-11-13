/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0px 5px 5px rgba(255, 255, 255, 255)',
      }
    },
  },
  plugins: [],
}