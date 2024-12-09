/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        0.6: "0.6px", // Custom border width
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        skyblue: "#5CD2DD",
        pink: "#FFF3F9",
        blue: "#0093D0",
        "light-cream": "#F8F6F4",
        "gray-100": "#9C9C9C",
        "gray-500": "#6B7280",
      },
    },
  },
  plugins: [],
};
