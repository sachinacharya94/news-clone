/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appgreen: "#26B060",
        applightgreen: "#E2F2E9",
        appgreenhover: "#1b8247",
        footergray: "#E6E7E9",
        appgray: "#E6E7E9",
        categorygreen: "#BFE9D1",
      },
      spacing: {
        commonwidth: "1200px",
      },
      screens: {
        xsm: "10px",
      },
    },
  },
  plugins: [],
};
