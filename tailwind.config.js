module.exports = {
  purge: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'  //包含了src文件夹下所有的vue,js等等文件
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'themeOrange': '#E66717',
        'themePurple': '#6069FF',
        'themeBlue':'#246ADD',
        'cardYellow':'#CA9A2F',
        'cardPurple':'#9673BB',
        'cardGreen':'#32889A'
      },
      borderColor:{
        'themeOrange': '#E66717',
        'themePurple': '#6069FF',
        'themeBlue':'#246ADD',
        
      },
      backgroundColor:{
        'themeOrange': '#E66717',
        'themePurple2': '#7F87FF',
        'themeBlue':'#246ADD',
        'cardYellow':'#FEF8E0'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
