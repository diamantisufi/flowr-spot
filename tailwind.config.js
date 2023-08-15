/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#df9186',
        secondary: '#949ea0',
        gray: '#334144',
        inputBorder: '#dfe5ea',
        inputBackground: '#f5f6f7',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
