/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        'dtSkyBlue': '#007AFF',
        'dtDarkBlue': '#0E1133',
        'dtgraybg': '#505056'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

