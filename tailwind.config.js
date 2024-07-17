/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)', 
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },

      letterSpacing: {
        'extra-wide': '0.3em', // Defina o valor que você deseja
      },
    },
  },
  plugins: [],
}
