/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lime: "hsl(61, 70%, 52%)",
          red: "hsl(4, 69%, 50%)",
        },
        transparent: {
          primary: "hsla(61, 70%, 52%, 0.15)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
          950: "hsl(202, 56%, 12%)",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
