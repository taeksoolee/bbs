/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: require('tailwindcss/colors').white,
      black: require('tailwindcss/colors').black,
      light: require('tailwindcss/colors').slate[100],
      dark: require('tailwindcss/colors').slate[700],
      primary: {
        ...require('tailwindcss/colors').slate,
        active: require('tailwindcss/colors').slate[500],
      },
      // {
      //   DEFAULT: '#F00',
      //   100: '#F10',
      // },
      secondary: require('tailwindcss/colors').indigo,
      danger: require('tailwindcss/colors').red,
    }
  },
  plugins: [],
}
