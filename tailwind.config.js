/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#006D77'
      },
      backgroundImage: {
        'register': "url('/src/images/register.png')",
        'banner': "url('/src/images/Banner.png')",
      }
    },
  },
  plugins: [],
}