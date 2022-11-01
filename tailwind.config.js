/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "footer": "948px",
      },
      colors: {
        slate: {
          150: "#eee",
        },
        blue: {
          350: "#327CDF",
          550: "#003D8F",
          850: "#00193C"
        },
        green: {
          350: "#96CA5B",
        },
      },
      height: {
        "25vh": "25vh",
        "33vh": "33vh",
        "50vh": "50vh",
        "66vh": "66vh",
        "75vh": "75vh",
        "90vh": "90vh",
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
      fontFamily: {
        "poppins": ["poppins"],
        "merriweather": ["Merriweather Sans", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
};
