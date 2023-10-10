import { extendTheme, ThemeOverride } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    'primary': '#232E26',
    primaryDark: '#131C16',
    primaryLight: '#3C4A3E',
    secondary: '#D9EFDE',
    secondaryDark: '#B0D4B7',
    secondaryLight: '#F2F9F5',
  },
  fontFamily: {
    montserrat: 'var(--font-montserrat)',
  },
  components: {

  },
} as const)

export type ThemeType = typeof theme;
export default theme;