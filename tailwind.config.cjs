/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowColor: "#FDC500",
        purpleColor: "#7B2CBF",
        greenColor: "#16DB65",
        whiteColor: "#FFFFFF",
        blackColor: "#08000D",
        purpleDarkColor: "#220135",
        grayColor: "#212529",
        redColor: "#EF233C",
        blueColor: "#48CAE4",
      },
      fontFamily: {
        audioWide: "Audiowide",
        firaCode: "Fira Code",
      },
      animation: {
        showYellowBall: "showBall 1s linear 0.5s forwards",
        showBorderAnimate: "showBorder 1s linear 3s forwards",
      },
      keyframes: {
        showBall: {
          "100%": { opacity: "initial", scale: 1.05 },
        },
        showBorder: {
          "100%": { borderColor: "#fff" },
        },
      },
      boxShadow: {
        inicioShadow: "0px 0px 10px rgba(123, 44, 191, 0.14)",
      },
    },
  },
  plugins: [],
};
