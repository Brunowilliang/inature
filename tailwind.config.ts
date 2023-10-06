import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#232E26',
        primaryDark: '#131C16',
        primaryLight: '#3C4A3E',
        secondary: '#D9EFDE',
        secondaryDark: '#B0D4B7',
        secondaryLight: '#F2F9F5',
        // ...defaultTheme.colors,
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
export default config
