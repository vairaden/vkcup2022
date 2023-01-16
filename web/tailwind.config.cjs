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
        menuSeparator: "rgb(var(--color-menuSeparator))",
        elementBg: "rgb(var(--color-elementBg) / <alpha-value>)",
        primaryText: "rgb(var(--color-primaryText) / <alpha-value>)",
        hover: "rgb(var(--color-hover))",
        altHover: "rgb(var(--color-altHover))",
        selected: "rgb(var(--color-selected))",
        altSelected: "rgb(var(--color-altSelected))",
        electricBlue: "#005FF9",
        linkBlue: "#589BFF",
        textGray: "#87898F",
        darkGray: "#A5A7AD",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
      },
      fontSize: {
        sm: "0.9375rem", // 15px
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
