/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "#00000000",
        balck: "#000000",
        white: "#ffffff",
        orange: "#FFCC00",
        bleuDark: "#110630",
        bleySky: "#04B6E9",
        grey: "#B9C2C8",
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
