/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      lightcreme: "#FEFCF8",
      pink: " #E28F83",
      green: "#8E9775",
      maintext: "#3F414E",
      subtext: "#A1A4B2",
      circle: "#FAF2DA",
    },
    extend: {
      backgroundImage: {
        landingImg: "url('/image/FrameLanding.png')",
        getStartedImg: "url('/image/getStartedImg.png')",
        SilentMoonLogo: "url('/image/SilentMoonLogo.png')",
      },
      boxShadow: {
        topshadow: "0px 1px 10px rgba(153,153,153)",
      },
      width: {
        410: "410px",
        357: "357px",
        420: "420px",
      },
    },
  },
  plugins: [],
};
