/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        amber: {
          50: "#6117ef",
          100: "#6117ef",
          200: "#6117ef",
          300: "#6117ef",
          400: "#6117ef",
          500: "#6117ef",
          600: "#6117ef",
          700: "#6117ef",
          800: "#6117ef",
          900: "#6117ef",
        },
        teal: {
          50: "#f33fb0",
          100: "#f33fb0",
          200: "#f33fb0",
          300: "#f33fb0",
          400: "#f33fb0",
          500: "#f33fb0",
          600: "#f33fb0",
          700: "#f33fb0",
          800: "#f33fb0",
          900: "#f33fb0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [],
};
