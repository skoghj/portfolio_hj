/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        primary: { 50: "#EDEDED" },
        secondary: { 50: "#14161B" },
        accent: { 50: "#EA5E02" },
        feature3: { 50: "#FED366" },
        feature2: { 50: "#49A068" },
        feature1: { 50: "#EA5E02" },
      },
      fontFamily: {
        display: ["SkModernist", "sans-serif", "cursive"],
        title: ["Helvetica Neue", "sans-serif"],
        body: ["Helvetica Neue", "sans-serif"],
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    function ({ addUtilities }) {
      addUtilities({
        ".preserve-3d": { "transform-style": "preserve-3d" },
      });
    },
  ],
};
