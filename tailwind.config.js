/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
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