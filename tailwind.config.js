/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      'pm': '368px',
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    
    extend: {
      
      fontFamily:{
        oxa: 'SVN-Hemi Head',
        pop: 'Poppins',
        inter :'Inter'
      },
      colors:{
       
      },
      keyframes: {
        rippleblue:{
          '0%': { boxShadow: ' 0 0 0 0 #1dc07130, 0 0 0 10px #1dc07130, 0 0 0 20px #1dc07130' },
          '100%': {  boxShadow: ' 0 0 0 10px #1dc07130, 0 0 0 20px #1dc07130, 0 0 0 30px #1dc07100' },
        },
      showContent:{
        to:{
          transform:' translateY(50px)',
          filter: 'blur(0px)',
          opacity: 0
      }
      
      },
      slideIn: {
        '0%': { transform: 'translateY(-3rem)' },  // -translate-y-20 corresponds to -5rem if 1rem = 4
        '100%': { transform: 'translateY(0)' },
      },
     },
     animation:{
      showContent:'showContent .5s 1s linear 1 forwards',
       slideIn: 'slideIn 1s ease-in-out forwards',
       rippleblue: 'rippleblue 1s linear infinite',
     }
    },

  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}