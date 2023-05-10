/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Hanken: ["Hanken Grotesk", "serif"],
      },
      colors: {
        /* Primary */
        main: {
          red: "hsl(0, 100%, 67%)",
          orangey: "hsl(39, 100%, 56%)",
          "green-teal": "hsl(166, 100%, 37%)",
          cobalt: "hsl(234, 85%, 45%)",
        },
        /* Secundary */
        secondary: {
          "slate-blue": "hsl(252, 100%, 67%)",
          "royal-blue": "hsl(241, 81%, 54%)",
          "persian-blue": "hsla(241, 72%, 46%, 0)",
          "violet-blue": "hsla(256, 72%, 46%, 1)",
        },
        /* Neutral */
        neutral: {
          "pale-blue": "hsl(221, 100%, 96%)",
          lavender: "hsl(241, 100%, 89%)",
          "dark-blue": "hsl(224, 30%, 27%)",
        },
      },
    },
  },
  plugins: [],
};
