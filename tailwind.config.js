/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          400:"#292929",
          300:'#80808057',
          250:'#808080af',
          280:'#8a959e',
          200:'#353535',
          350:"[#ffffff60]"
        }
      }
    },
  },
  plugins: [],
}

