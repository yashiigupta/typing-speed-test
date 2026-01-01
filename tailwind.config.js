/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        starBlink: {
          "0%, 100%": { transform: "scale(0)", opacity: "0"},
          "50%": { transform: "scale(1)", opacity: "1"}
        },
      },
      animation: {
        "star-blink": "starBlink 3s ease-in-out infinite",
        "star-blink-slow": "starBlink 4.5s ease-in-out infinite"
      },
    },
  },
  plugins: [],
}