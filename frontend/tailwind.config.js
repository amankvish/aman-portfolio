/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        "background-subtle": "#0E1424",
        "accent-blue": "#4F8CFF",
        "accent-cyan": "#22D3EE",
        "accent-violet": "#7C3AED"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(79, 140, 255, 0.5)",
      }
    },
  },
  plugins: [],
};