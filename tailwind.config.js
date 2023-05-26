/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      wider: '0.5em',
      widest: '1.5em'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

