const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "20%": "20%",
        "70%": "70%",
        "80%": "80%",
        430: "430px",
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "320/440": "320 / 440",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      darkblue: "#335EEA",
      lightgray: "#E5E5E5",
      graycopy: "#6B7C93",
      pagination: "#D9E2EF",
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
