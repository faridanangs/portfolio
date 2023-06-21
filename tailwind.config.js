/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hebo: ['Heebo', 'sans-serif'],
        carter: ['Carter One', 'cursive'],
        bigshot: ['Bigshot One', 'cursive'],

      },
      keyframes: {
        translateAtas: {
          '0%': { 'transform' : 'translatey(0px)' },
          '50%': { 'transform' : 'translatey(-15px)' },
          '100%': { 'transform' : 'translatey(0px)' },
        }
      },
      animation: {
        'icon': 'translateAtas 5s ease forwards infinite'
      },
      boxShadow: {
        bayang: '0 2px 3px rgba(255,255,255,.3)'
      }
    },
  },
  plugins: [],
}

