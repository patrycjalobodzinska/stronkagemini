/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        dunes: "url('/public/back.jpg')",
      }),
      colors: {
        primary: '#fcdf2a',
        brand: {
          navy: '#002c59',
          50: '#f4f7fb',
          100: '#e8eef5',
          800: '#1e3a52',
          900: '#0f2740',
        },
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(15, 39, 64, 0.08), 0 4px 6px -4px rgba(15, 39, 64, 0.06)',
        lift: '0 12px 40px -12px rgba(15, 39, 64, 0.15)',
      },
    },
  },
  plugins: [],
};
