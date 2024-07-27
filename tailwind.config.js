/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/index.html","./src/script.js"],
    theme: {
      extend: {
        colors: {
          'light-blue': '#A0D7FF',
          'dark-blue': '#004473',
          'almostWite': '#F7F8FB',
          'btnBlue': '#ADD8FF',
          'btnBlu': 'rgb(173,216,255,0.28)',
          'numBlue': '#29A8FF',
          
        },
        fontFamily: {
          'roboto': ['Roboto','sans-serif'],
        },
        height:{
          '100vh': '100vh',
          '10vh':'10vh',
          '80vh':'80vh',
          '70vh':'70vh',
          '10vh':'10vh',
          'hei':'512px',
          '90vh':'90vh'
        },
        width:{
          '100vw': '100vw',
          '10vw':'10vw',
          '40vw':'40vw',
          '45vw':'45vw',
          '50vw':'50vw',
          '49vw':'49vw',
          '90vw':'90vw',
          'wid':'268px',
        },
        borderRadius:{
          '4xl': '18px',
        },
        backgroundColor:{
          // "glass": "rgba(255,255,255,0.25)",
          "glass": "#17181A",
          "glassB": "rgba(0,0,0,0.25)",
          "glassM": "rgba(119,230,249,0.25)",
          "btnBlack": "#005DB2",
          "btnMiddle": "#ADE2FF",
        }
      },
    },
    plugins: [],
  }