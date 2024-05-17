/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins, sans-serif"],
      },
      colors: {
        primary: "#0051B4",
        secondary: "#D2EDFF",
      },
      backgroundImage: {
        "p-background": "url('/img/backg.svg')",
        "about-background": "url('/img/bg-hero-about-us.svg')",
        "career-background": "url('/img/career-bg.svg')",
      },
    },
  },
  plugins: [],
};
