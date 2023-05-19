/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F06E80",
        primary: "#0F46B3",
        secondary: "#F0F3FB",
        success: "#6CCFAE",
        danger: "#EE0202",
        warning: "#FECA1F",
        white: "#FFFFFF",
      },
      fontFamily: {
        inter: {
          100: "Inter",
          200: "Inter",
          300: "Inter",
          400: "Inter",
          500: "Inter",
          600: "Inter",
          700: "Inter",
          800: "Inter",
          900: "Inter",
        },
      },
    },
  },
  plugins: [],
};
