/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./insights.html",
    "./js/**/*.js",
    "./_layouts/**/*.html",
    "./_projects/**/*.md",
    "./_posts/**/*.md"
  ],
  safelist: [
    {
      pattern: /(bg|text|border|from|to)-(blue|violet|pink|cyan|emerald|amber)-500(\/20|\/10|\/30)?/,
    }
  ],
  theme: {
    extend: {
      colors: { 
        navy: { 
          '950': '#0A0F1E', 
          '900': '#111827', 
          '800': '#1A2236', 
          '700': '#1E293B' 
        } 
      }, 
      fontFamily: { 
        inter: ['Inter', 'sans-serif'], 
        mono: ['Fira Code', 'monospace'] 
      }
    },
  },
  plugins: [],
}
