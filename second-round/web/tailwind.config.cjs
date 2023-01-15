/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(var(--color-primaryBg) / <alpha-value>)",
        headerBg: "rgb(var(--color-headerBg) / <alpha-value>)",
        menuText: "rgb(var(--color-menuText) / <alpha-value>)",
        separator: "rgb(var(--color-separator) / <alpha-value>)",
        elementBg: "rgb(var(--color-elementBg) / <alpha-value>)",
        primaryText: "rgb(var(--color-primaryText) / <alpha-value>)",
        hover: "rgba(var(--color-hover) / <alpha-value>)",
        darkGray: "#232324",
        grayBg: "#F6F7F8",
        darkHover: "#FFFFFF0A",
        grayHover: "#00103D0A",
        grayAlpha: "#00103D12",
        electricBlue: "#005FF9",
        linkBlue: "#589BFF",
        textGray: "#87898F",
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
