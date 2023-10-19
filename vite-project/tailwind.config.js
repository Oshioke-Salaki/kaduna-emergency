/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#624af5",
        secondaryColor: "#981806",
        greyLight: "#F9F6F6",
      },
    },
  },
  plugins: [],
};
