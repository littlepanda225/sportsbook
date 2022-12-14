const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'midenite-blue': '#000040',
        'navy-blue1': '#01005F',
        'navy-blue2': '#00005D',
      }
    },
  },
  plugins: [],
});
