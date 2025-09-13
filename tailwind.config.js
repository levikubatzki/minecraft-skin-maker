/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          100: "#C5A3FF",
          200: "#A675FF",
          300: "#8A4DFF",
          400: "#6F2BFF",
          500: "#5B21FF"
        },
        cyber: {
          bg: "#0b0b17",
          panel: "#141427",
          edge: "#1f1f3d",
          glow: "#7328ff"
        }
      },
      boxShadow: {
        neon: "0 0 20px rgba(115,40,255,0.45), inset 0 0 10px rgba(115,40,255,0.25)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
}
