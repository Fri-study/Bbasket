/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      fontSize:{
        xs:['12px',{lineHeight:'18px'}],
        sm:['14px',{lineHeight: '22px'}],
        base:['16px',{lineHeight:'22px'}],
        lg:['18px',{lineHeight:'24px'}],
        xl:['28px',{lineHeight:'40px'}],
      }
    },
  },
  plugins: [],
}
 