/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#F6F7F8",
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
