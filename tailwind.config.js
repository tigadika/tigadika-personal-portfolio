import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "zinc-920": "#141410",
      },
      animation: {
        blob: "blob 7s infinite",
        updown: "updown 7s infinite",
        shine: "shine 10s infinite",
      },
      keyframes: {
        shine: {
          "0%": {
            transform: "rotate(25deg) translate(180px, -70px)",
          },
          "50%": {
            transform: "rotate(25deg) translate(-180px)",
          },
          "100%": {
            transform: "rotate(25deg) translate(180px, -70px)",
          },
        },
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
