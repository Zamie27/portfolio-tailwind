/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        primary: "#38bdf8",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
