/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB997", // apricot utama
        secondary: "#FFE5D9", // apricot muda
        accent: "#D17A58", // apricot tua
        base: "#FFF9F6", // background lembut
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
