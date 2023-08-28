/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  vatiants: {
    extend: {
      animation: {
          mr: "mr 7s infinite",
      },
      keyframes:{
          mr: {
            "0%" : {
              transform: "translation(0px, 0px) scale(1)"
            },
            "33%" : {
              transofrm: "translation(30px, -50px) scale(1.1)"
            },
            "66%": { 
              transofrm: "translation(-20px, 20px) scale(0.9)"
            },
            "100%": { 
              transofrm: "translation(0px, 0px) scale(1)"
            }
          }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
