/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e90b0",
        secondary: "#a5cddf",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
