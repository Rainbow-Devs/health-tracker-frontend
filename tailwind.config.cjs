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
      fontSize: {
        sm: '16px'
      },
      colors: {
        "alert-green": "#007200",
        "alert-orange": "#EB6600",
        "alert-red": "#BC1C21",
        "dark": "#090E34",
        gray: {
          100: "#BFBFBF",
          200: "#637381",
          300: '#252a30',
          400: '#171b1e',
          500: "#151828",
        },
        "primary": "#3056D3",
        "secondary": "#6F35A5",
        "white": "#FFF"
      }
    }
  },
  plugins: []
};
