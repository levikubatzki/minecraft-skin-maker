/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: { 100:"#C5A3FF",200:"#A675FF",300:"#8A4DFF",400:"#6F2BFF",500:"#5B21FF" },
        cyber: { bg:"#0c0c14", panel:"#141428", edge:"#1f1f3f" }
      },
      boxShadow:{ neon:"0 0 18px rgba(115,40,255,.35), inset 0 0 12px rgba(115,40,255,.2)" },
      borderRadius:{ xl2:"1.25rem" }
    }
  },
  plugins: []
}
