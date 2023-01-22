const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'lgMaxWidth': '1248px',
        'smMaxW': '90%',
      },
      fontFamily: {
        'mont': ['"Montserrat"', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'lgTitle': '48px',
        'smTitle': '40px',
        'lgHeroDesc': '24px',
        'smHeroDesc': '10px',
        'normalText': '18px',
        'lgCatDetails': '16px',
        'lgCatPageTitle': '36px',
      },
      lineHeight: {
        'lgTitleLeading': '59px',
        'smTitleLeading': '49px',
        'lgHeroDescLeading': '29px',
        'smHeroDescLeading': '12px',
        'lgCatPageTitleLeading': '44px',
        'textCatsPage': '22px',
      },
      colors: {
        'breedsBg': '#E3E1DC',
        'normalTextColor': '#291507',
        'filledLevel': '#544439',
        'notFilledLevel': '#E0E0E0',
      }
    },
  },
  plugins: [],
}