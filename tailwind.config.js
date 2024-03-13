/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        68: "17rem",
      },
      transitionDelay: {
        '20': '20ms',
      },
      colors: {
        "Brand/50": "#F9F5FF",
        "Brand/100": "#F4EBFF",
        "Brand/200": "#E9D7FE",
        "Brand/700": "#6941C6",
        "Error/100": "#FEE4E2",
        "Error/500": "#F04438",
        "Success/100": "#D1FADF",
        "Success/700": "#027A48",
        "Gray/100": "#F2F4F7",
        "Gray/200": "#EAECF0",
        "Gray/300": "#D0D5DD",
        "Gray/400": "#98A2B3",
        "Gray/500": "#667085",
        "Gray/600": "#475467",
        "Gray/700": "#344054",
        "Gray/900": "#101828",
        "Blue/600": "#1570EF",
      },

      fontFamily: {
        RobotoBlack: "Roboto-Black",
        RobotoBoldItalic: "Roboto-BoldItalic",
        RobotoItalic: "Roboto-Italic",
        RobotoLight: "Roboto-Light",
        RobotoLightItalic: "Roboto-LightItalic",
        RobotoMedium: "Roboto-Medium",
        RobotoMediumItalic: "Roboto-MediumItalic",
        RobotoRegular: "Roboto-Regular",
        RobotoThin: "Roboto-Thin",
        RobotoThinItalic: "Roboto-ThinItalic",
        RAmitaBold: "RAmita-Bold",
        AmitaRegular: "Amita-Regular",
      },
    },
  },
  plugins: [],
};
