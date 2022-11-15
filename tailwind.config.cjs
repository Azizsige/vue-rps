/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBC923",
        secondary:
          "linear-gradient(52.14deg, rgba(88, 181, 251, 0.2) 28.07%, rgba(147, 105, 251, 0.2) 100%), linear-gradient(127.99deg, #58B5FB 0%, #9369FB 71.86%)",
      },
      backgroundImage: {
        body: "linear-gradient(52.14deg, rgba(88, 181, 251, 0.2) 28.07%, rgba(147, 105, 251, 0.2) 100%), linear-gradient(127.99deg, #58B5FB 0%, #9369FB 71.86%)",
      },
    },
  },
  plugins: [],
};
