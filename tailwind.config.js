/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightestSm: "-0.006em",
    },
    dropShadow: {
      navShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    extend: {
      fontSize: {
        tiny: "0.6rem",
        smaller: "0.67rem",
        "4.5xl": "2.48rem",
      },
      translate: {
        minus50: "-50%",
      },
      screens: {
        hero: "1600px",
        "2lg": "1385px",
        footer: "948px",
        mobileXl: "600px",
        mobile: "430px",
        mobileSm: "350px",
        "395Break": "395px",
      },
      colors: {
        slate: {
          150: "#eee",
        },
        blue: {
          350: "#327CDF",
          450: "#317CE0",
          550: "#003D8F",
          650: "#1E6DEB",
          750: "#003d8f",
          850: "#00193C",
          150: "#F4F9FF",
        },
        green: {
          350: "#96CA5B",
          450: "#96CA5B",
        },
        gray: {
          550: "#31364A",
          650: "#616D92",
          750: "#616D92",
          850: "#323847",
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
        "550px": "34.375 rem",
        "850px": "850px"
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
      width: {
        "95%": "95%",
        "550px": "34.375 rem"
      },
      margin: {
        "8.6rem": "8.6rem",
        textareaRem: "11.7rem",
        timeRequiredRem: "4.3rem",
        subjectRem: "6.5rem",
      },
      padding: {
        navRem: "3.75rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        button: ["DM Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        monsterrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
