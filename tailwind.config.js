/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        purple: "#8785FF",
        "light-gray": "#E0E0E0",
        gray: "#828282",
        "dark-gray": "#4F4F4F",
        orange: "#F8B76B",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
