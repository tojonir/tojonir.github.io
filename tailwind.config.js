/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        transparent: "#00000000",
        balck: "#000000",
        white: "#ffffff",
        orange: "#FFCC00",
        blue: "#0096EB",
        bleuDark: "#110630",
        bleuSky: "#00DEFF",
        grey: "#B9C2C8",
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
