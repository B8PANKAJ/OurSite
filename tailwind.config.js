/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("./node_modules/tailwindcss-animated")],
};
