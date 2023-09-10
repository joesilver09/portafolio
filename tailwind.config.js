/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        phudu: 'Phudu'
      },
      colors: {
        "pro-black": "#211F20",
        "pro-white": "#DEE0DF",
        "pro-gray": "#848478",
        "pro-green": "#85edac",
        "pro-blue": "#3c83f4",
        "pro-violet": "#9035ea",
        "pro-oscure-green": "#62b879",
        "pro-oscure-blue": "#3362c9",
        "pro-oscure-violet": "#682eb4",
      }
    },
  },
  plugins: [],
};
