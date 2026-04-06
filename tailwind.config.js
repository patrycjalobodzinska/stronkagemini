/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes: "url('/public/back.jpg')",
      }),
      colors: {
        primary: "#fcdf2a",
      },
    },
  },
  plugins: [],
};
