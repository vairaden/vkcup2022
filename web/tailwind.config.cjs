/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blackBg: "#19191A",
        darkGray: "#232324",
        grayBg: "#F6F7F8",
        grayHover: "#00103D0A",
        grayAlpha: "#00103D12",
        electricBlue: "#005FF9",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
      },
    },
    screens: {
      sm: "768px",
      md: "1366px",
      lg: "1920px",
    },
  },
  plugins: [],
};
