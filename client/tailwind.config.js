module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkWhite: {
          light: "#F4F4F4",
          DEFAULT: "#F4F4F4",
          dark: "#F4F4F4",
        },
      },
      screens: {
        xs: { max: "639px" },
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        mada: ["Mada", "sans-serif"],
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
