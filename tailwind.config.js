/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'black-opc-50':'rgba(0, 0, 0, 0.8)',
        'white-opc-50':'rgba(255, 255, 255, 0.8)',
      },
    },
    fontFamily: {
      bricolage: ["Bricolage Grotesque", "sans-serif"],
    },
  },
  plugins: [],
};
