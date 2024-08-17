/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        purple: "#8785FF",
        "light-purple": "#EEDCFF",
        "dark-purple": "#9B51E0",
        "light-gray": "#E0E0E0",
        gray: "#828282",
        "dark-gray": "#4F4F4F",
        orange: "#F8B76B",
        "light-orange": "#FCEED3",
        "dark-orange": "#E5A443",
        "light-blue": "#E9F3FF",
        red: "#EB5757",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
