/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        '1': '0.25rem',   // Equivalent to 4px
        '2': '0.5rem',    // Equivalent to 8px
        '3': '0.75rem',   // Equivalent to 12px
        '4': '1rem',      // Equivalent to 16px
        '8': '2rem',      // Equivalent to 32px
        '12': '3rem',     // Equivalent to 48px
        '16': '4rem',     // Equivalent to 64px
        '20': '5rem',     // Equivalent to 80px
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#072c2f",
      dark: "#182f4c",
      primary: "#008b94",
      yellow: "#FBB040",
      "body-color": "#959CB1",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... } 1 rem

      sm: "575px",
      // => @media (min-width: 576px) { ... } 1 rem

      md: "768px",
      // => @media (min-width: 768px) { ... } 1 rem

      lg: "992px",
      // => @media (min-width: 992px) { ... } 5rem

      xl: "1200px",
      // => @media (min-width: 1200px) { ... } 10rem

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... } 10 rem
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
