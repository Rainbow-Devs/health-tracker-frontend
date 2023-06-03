/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "alert-green": "#007200",
        "alert-orange": "#EB6600",
        "alert-red": "#BC1C21",
        "dark": "#090E34",
        "light-gray": "#637381",
        "primary": "#3056D3",
        "secondary": "#6F35A5",
        "white": "#FFF"
      }
    }
  },
  plugins: []
};