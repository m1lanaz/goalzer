/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Anton': ['Anton', 'sans-serif'],
      'Nunito': ['Nunito Sans', 'sans-serif'],
    },
    colors: {
      'myGreen': '#3AAFB9',
      'myBlack': '#23272A',
      'white': '#FFF',
    },
    extend: {},
    textColor: {
      'myGreen': '#3AAFB9',
      'white': "#FFF",
      'myBlack': '#23272A',
    },
    screens: {
      '2xl': {'max': '1400px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},  
      },
  },
  plugins: [require("daisyui")],
}