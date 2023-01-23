/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        source: ["Source Sans Pro", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        spline: ["Spline Sans Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
