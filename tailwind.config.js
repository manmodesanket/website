module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#233554",
        grey: "rgb(var(--color-ascent))",
        blue: "rgb(var(----color-blue))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
