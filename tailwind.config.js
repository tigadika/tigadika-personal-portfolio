import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      base: "20px",
      full: "9999px",
    },
    boxShadow: {
      light: "3px 3px 0px 0px #000",
      dark: "3px 3px 0px 0px #000",
      none: "0",
    },
    translate: {
      boxShadowX: "3px",
      boxShadowY: "3px",
      reverseBoxShadowX: "-3px",
      reverseBoxShadowY: "-3px",
    },
    fontWeight: {
      base: "500",
      heading: "700",
    },
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      fontFamily: {
        title: ["Rubik Mono One", "monospace"],
      },
      animation: {
        blob: "blob 7s infinite",
        updown: "updown 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        updown: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "50%": {
            transform: "translate(0px, 30px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
