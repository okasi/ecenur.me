/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: [
        "var(--font-gochi-hand)",
        "Trebuchet MS",
        "Arial",
        "sans-serif",
      ],
      sans: ["var(--font-lexend)", "Trebuchet MS", "Arial", "sans-serif"],
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      "brand-primary": "#624673",
      "brand-secondary": "#0D5979",
      "brand-tertiary": "#F5DBDB",
      "accent-green": "#B8C69A",
      "accent-beige": "#D6BBA9",
      "accent-dark": "#132B2F",
      "accent-orange": "#E9A385",
      "neutral-base": "#F5F5F0",
      "neutral-black": "#060606",
      "neutral-grey": "#757575",
      "light-blue": "#B6CDD6",
      "light-pink": "#FEFBFB",
      "light-green": "#E3E8D7",
      "light-beige": "#EFE4DD",
    },
    borderRadius: {
      none: "0",
      "2xl": "1rem",
      full: "9999px",
    },
  },
  plugins: [],
};
