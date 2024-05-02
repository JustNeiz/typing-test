/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        timberwolf: '#dad7cd',
        sage: '#a3b18a',
        'fern': '#588157',
        'hunter': '#3a5a40',
        'brunswick': '#344e41',
      }
    },
  },
  plugins: [],
}

