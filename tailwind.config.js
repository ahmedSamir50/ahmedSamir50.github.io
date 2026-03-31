/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
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
