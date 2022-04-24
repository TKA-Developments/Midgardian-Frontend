module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "scenery-dimmed":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/scenery-min.png')",
      },
      colors: {
        primary: "#ECB365",
        "typography-primary": "#FFF",
        background: "#141e27",
        secondary: "#203239",
        discord: "#5865F2",
        opensea: "#2081E2",
      },
      fontFamily: {
        "special-elite": ["Special Elite", "cursive"],
        dragonwick: ["Dragonwick"],
      },
    },
  },
  plugins: [],
};
