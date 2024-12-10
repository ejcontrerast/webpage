/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.1em',
      regular: '.05em',

    },
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline': {
              'textDecoration': 'underline',
              'text-decoration-color': '#ffe002',
          },
      }
      addUtilities(extendUnderline)
    }
  ],
};