/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(var(--color-primaryBg) / <alpha-value>)",
        headerBg: "rgb(var(--color-headerBg) / <alpha-value>)",
        menuText: "rgb(var(--color-menuText) / <alpha-value>)",
        blackBg: "#19191A",
        darkGray: "#232324",
        grayBg: "#F6F7F8",
        separatorGray: "#DADCE0",
        textGray: "#87898F",
        darkHover: "#FFFFFF0A",
        textPrimaryWhite: "#E7E8EA",
        grayHover: "#00103D0A",
        grayAlpha: "#00103D12",
        electricBlue: "#005FF9",
        linkBlue: "#589BFF",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
      },
    },
    screens: {
      md: "769px",
      lg: "1367px",
      xl: "1920px",
    },
  },
  plugins: [],
};
