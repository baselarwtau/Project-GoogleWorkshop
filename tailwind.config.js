/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" }
    },
    extend: {
      colors: {
        amber: { 200: "#fee280", "200_01": "#fde280" },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_7f": "#0000007f" },
        gray: { 400: "#c8c8c8", 900: "#1c1c1c" },
        white: { a700: "#ffffff" }
      },
      boxShadow: {
        xs: "0 0 22px -2px #0000003f",
        sm: "0 0 8px 2px #0000003f",
        md: "0 0 14px 4px #0000003f",
        lg: "0 0 6px 3px #0000003f"
      },
      fontFamily: {
        casaygontext: "CA SaygonText",
        quicksand: "Quicksand",
        casaygon: "CA Saygon",
        cheesesauce: "Cheese Sauce",
        generalsans: "General Sans"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
};
