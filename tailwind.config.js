/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html, js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E7D32',
        'secondary': '#E3F4D1',
        'accent': '#4169E1',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}