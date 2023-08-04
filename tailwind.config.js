/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "bgColor":"#fffefa",
        "textColor":"#1f1f1f",
        "accentColor":"#da4933",
        "secondaryColor":"#ffffff"
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8,50px)',
        '10': 'repeat(10,60px)',
      }
    },
  },
  plugins: [],
}
