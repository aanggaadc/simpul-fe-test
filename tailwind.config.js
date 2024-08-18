/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
