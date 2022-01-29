module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgDark: '#090909',
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      'dancingScript': ['Dancing Script'],
      'sourceSerifPro': ['Source Serif Pro'],
      "fontVollkorn": ['Vollkorn']
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}