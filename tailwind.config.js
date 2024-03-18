/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "brand-primary": "#624673",
        "brand-secondary": "#0D5979",
        "accent-green": "#B8C69A",
        "accent-beige": "#D6BBA9",
        "accent-dark": "#132B2F",
        "accent-orange": "#E9A385",
      },
    },
  },
  plugins: [],
};