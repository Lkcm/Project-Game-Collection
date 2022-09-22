/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Gugi', 'cursive']
    },
    extend: {
      gameImage: {
        mineImage: "url('/GameImg.png')"
      },
      backgroundImage: {
        mineback: "url('/Fundo.png')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
