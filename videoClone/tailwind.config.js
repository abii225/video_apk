/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        md: { min: "600px" },
      },
      fontFamily: {
        primary: "Saira Semi Condensed, sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
