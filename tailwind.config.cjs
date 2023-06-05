/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        "alert-green": "#007200",
        "alert-orange": "#EB6600",
        "alert-red": "#BC1C21",
        darkBlue: "#090E34",
        fitGray: {
          100: "#bfbfbf",
          200: "#a7abaf",
          300: "#9199a0",
          400: "#798590",
          500: "#637381",
          600: "#4e5b69",
          700: "#3c4554",
          800: "#282e3d",
          900: "#151828"
        },
        primary: "#3056D3",
        secondary: "#6F35A5",
        white: "#FFF"
      }
    }
  },
  plugins: []
};
