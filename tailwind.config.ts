import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#70B4C3",
        secondary: "#848484",
        accent: "#F4AB22",
        darkBlue: "#18495C",
        lightBlue: "#F1F8F9",
        black: "#141414",
        deepBlue: "#042A38",
        gray: "#E3E7E8",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        druk: ["Druk", "sans-serif"],
        fontAwesome: ["Font Awesome 5 Free", "sans-serif"],
      },
      fontSize: {
        12: "12px",
        13: "13px",
        16: "16px",
        18: "18px",
        22: "22px",
        40: "40px",
      },
      lineHeight: {
        15: "15px",
        18: "18px",
        21: "21px",
        24: "24px",
        26: "26px",
        48: "48px",
      },
      letterSpacing: {
        0: "0px",
        "-0-24": "-0.24px",
        "-0-54": "-0.54px",
        "-0-66": "-0.66px",
        "-0-39": "-0.39px",
        "-0-32": "-0.32px",
      },
      extend: {
        typography: {
          1: {
            fontFamily: "fontAwesome",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "15px",
            letterSpacing: "-0-24",
            color: "deepBlue",
          },
        },
      },
    },
  },
  plugins: [],
};
