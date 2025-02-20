const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      boxShadow: {},
      fontSize: {
        "10x14": ["10px", "14px"],
        "12x16": ["12px", "16px"],
        "14x18": ["14px", "18px"],
        "16x20": ["16px", "20px"],
        "16x22": ["16px", "22px"],
        "18x22": ["18px", "22px"],
        "18x24": ["18px", "24px"],
        "18x28": ["18px", "28px"],
        "20x24": ["20px", "24px"],
        "24x32": ["24px", "32px"],
        "28x36": ["28px", "36px"],
        "36x44": ["36px", "44px"],
        h4: ["20px", "28px"],
        h3: ["24px", "32px"],
        h2: ["34px", "44px"],
        h1: ["48px", "58px"],
      },
      colors: {
        neutral: {
          100: "#1A1A1A",
          90: "#484848",
          80: "#616161",
          70: "#757575",
          60: "#9E9E9E",
          50: "#C2C2C2",
          40: "#E0E0E0",
          30: "#EDEDED",
          20: "#F5F5F5",
          10: "#FFFFFF",
        },
        dark: {
          500: "#101316",
        },
        primary: {
          pressed: "#075E45",
          hover: "#289E65",
          main: "#2DB976",
          border: "#78C5A0",
          focus: "#A0D8BD",
          light: "#C8ECDA",
          bg_color: "#EFFFF8",
        },
        secondary: {
          pressed: "#00645C",
          hover: "#00847A",
          main: "#00A499",
          border: "#3CBBB2",
          focus: "#79D1CB",
          light: "#B5E8E4",
          bg_color: "#F2FFFD",
        },
        warning: {
          pressed: "#B77D09",
          hover: "#E39F17",
          main: "#FFB41F",
          border: "#F7C86A",
          focus: "#FBE0A9",
          bg_color: "#FFF8EB",
        },
        danger: {
          pressed: "#920101",
          hover: "#C60808",
          main: "#EF1414",
          border: "#F35353",
          focus: "#FDABAB",
          bg_color: "#FFF6F6",
        },
        info: {
          pressed: "#014E81",
          hover: "#016BB3",
          main: "#0088E4",
          border: "#4FADED",
          focus: "#C1D9FD ",
          bg_color: "#F2F7FF",
          light: "#ECF7FF"
        },
        orange: {
          pressed: "#A14603",
          hover: "#CF5C08",
          main: "#FF740F",
          border: "#FE9244",
          focus: "#FEC79F",
          bg_color: "#FFF9F4",
          tag: "#FEF6E9"
        },
        purple: {
          pressed: "#413C7D",
          hover: "#554F99",
          main: "#6963B5",
          border: "#9591CE",
          focus: "#C1BFE6",
          bg_color: "#EEECFF ",
        },
        green: {
          pressed: "#155E25",
          hover: "#198C32",
          main: "#17B63A",
          border: "#82EB99",
          focus: "#C4F6CF",
          bg_color: "#F6FFF8",
        },
      },
      boxShadowColor: {
        "2x12": "0px_2px_4px_0px_rgba(0,0,0,0.12)",
        "4x10": "0px 4px 8px 0px rgba(0,0,0,0.10)",
        "6x10": "0px 6px 12px 0px rgba(0,0,0,0.10)",
        "8x8": "0px 8px 16px 0px rgba(0,0,0,0.08)",
      },
      margin: {
        "2px": "2px",
      },
      animation: {
        translateRight: "translateRight 0.7s ease-in-out",
      },
      keyframes: {
        translateRight: {
          "0%": { transform: "translateX(100px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
      },
      screens: {
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
};
