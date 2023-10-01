/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "370px",
        sm: "480px",
        ce: "600px",
        md: "840px",
        lg: "976px",
        xl: "1100px",
      },
      colors: {
        primary: "#047AED",
        secondary: "#002240",
        tertiary: "#F4F4F4",
        green: "#5CB85C",
        darkBlue: "#046ED5",
      },
      animation: {
        slideInLeft: "leftIn 1s ease-out",
        slideInRight: "rightIn 1s ease-out",
        slideInBottom: "bottomIn 1s ease-out",
        slideInTop: "topIn 1s ease-out",
      },
      keyframes: {
        leftIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        topIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        rightIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        bottomIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
