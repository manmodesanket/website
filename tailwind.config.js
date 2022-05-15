module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#233554",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
