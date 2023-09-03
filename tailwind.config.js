/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: "Merriweather",
        phudu: 'Phudu'
      },
      colors: {
        "black-bg": "#211F20",
        "white-bg": "#DEE0DF",
        "green-light": "#7DE3D4",
        "blue-light": "#7CB9FF",
        "violet-light": "#893DEC",
        "green-dark": "419b85",
        "blue-dark": "#33658A",
        "violet-dark": "#4D2482",
      }
    },
  },
  plugins: [],
};
