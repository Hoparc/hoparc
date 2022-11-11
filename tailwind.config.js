/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        "minus50": '-50%',
      },
      screens: {
        "2lg": "1385px",
        "footer": "948px",
        "mobileXl": "600px",
        "mobile": "420px",
        "mobileSm": "350px"
      },
      colors: {
        slate: {
          150: "#eee",
        },
        blue: {
          350: "#327CDF",
          550: "#003D8F",
          850: "#00193C",
          150: "#F4F9FF"
        },
        green: {
          350: "#96CA5B",
        },
      },
      height: {
        "5.8rem": "5.8rem",
        "25vh": "25vh",
        "33vh": "33vh",
        "50vh": "50vh",
        "66vh": "66vh",
        "75vh": "75vh",
        "90vh": "90vh",
        "34rem": "44rem",
        "200px": "200px",
      },
      minHeight: {
        "25vh": "25vh",
        "33vh": "33vh",
        "50vh": "50vh",
        "66vh": "66vh",
        "75vh": "75vh",
        "90vh": "90vh",
      },
      maxHeight: {
        "25vh": "25vh",
        "33vh": "33vh",
        "50vh": "50vh",
        "66vh": "66vh",
        "75vh": "75vh",
        "90vh": "90vh",
      },
      width:{
        "95%": "95%"
      },
      margin:{
        "8.6rem": "8.6rem",
      },
      fontFamily: {
        poppins: ["poppins"],
        merriweather: ["Merriweather Sans", "sans-serif"],
        roboto: "Roboto",
        button: ["DM Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
