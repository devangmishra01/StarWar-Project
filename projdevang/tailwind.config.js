/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: {
          "100": "rgba(249, 250, 253, 0.3)",
          "200": "rgba(249, 250, 253, 0)",
          "300": "rgba(249, 250, 253, 0.2)",
        },
        "white-1": "#fff",
        "white-2": "#fafafb",
        "grey-2": "#696974",
        midnightblue: {
          "100": "#03123d",
          "200": "#03123b",
        },
        black: "#000",
        mediumvioletred: "#cb1a80",
        "grey-stroke": "#dedede",
        "grey-1": "#252c32",
        "propacity-blue": "#0062ff",
        gray: "rgba(255, 255, 255, 0)",
        "blue-highlight": "#e5efff",
        darkslateblue: "#001b47",
      },
      spacing: {},
      fontFamily: {
        "heading-semi-bold": "Inter",
        avalon: "Avalon",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
