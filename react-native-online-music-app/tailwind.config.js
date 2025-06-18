/* eslint-disable no-undef */
/* eslint-disable quotes */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require("./src/core/constants/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
