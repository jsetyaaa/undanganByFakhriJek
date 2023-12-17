/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "emas": "#6E522F",
        "button": "#9D8971",
      },
      fontFamily: {
        monte: ['MonteCarlo', 'serif'],
        serrat:['Montserrat', 'serif'],
        pf:['Playfair Display SC', 'serif'],
      },
    },
  },
  plugins: [],
}

