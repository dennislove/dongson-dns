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
      },
      colors:{
       
      },
     keyframes:{
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
      slideIn: 'slideIn .5s ease-in-out forwards',
     }
    },

  },
  plugins: [
  
  ],
}