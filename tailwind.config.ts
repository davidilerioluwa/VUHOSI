import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#242E42",
        deeperBlue:"#2E3B52",
        orange: "#F56630",
        lightOrange:"#fcd2c2",
        grey300:"#D0D5DD",
        grey400:"#98A2B3",
        grey500:"#667185",
        grey600:"#475367"
      },
    },
  },
  plugins: [],
};
export default config;
