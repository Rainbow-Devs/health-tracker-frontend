/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '16px'
      },
      colors: {
        "alert-green": "#007200",
        "alert-orange": "#EB6600",
        "alert-red": "#BC1C21",
        "dark": "#090E34",
        "dark-gray": "#637381",
        "light-gray": "#BFBFBF",
        "medium-gray": "#151828",
        "primary": "#3056D3",
        "secondary": "#6F35A5",
        "white": "#FFF"
      }
    }
  },
  plugins: []
};
