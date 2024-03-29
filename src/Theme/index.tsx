import { extendTheme } from '@chakra-ui/react'

// cmocean "tempo" colormap
const colormap = [
  '#EAFCFD',
  '#DBF4F5',
  '#CDECEE',
  '#BEE4E7',
  '#ADDCE0',
  '#9ED4DB',
  '#8FCCD6',
  '#83C4D3',
  '#76BBCF',
  '#6DB3CB',
  '#64AAC8',
  '#5CA2C5',
  '#5498C1',
  '#4E90BE',
  '#4887BC',
  '#447FB9',
  '#4075B5',
  '#3E6CB1',
  '#3E63AC',
  '#3E5AA6',
  '#3E509C',
  '#3E4891',
  '#3C4185',
  '#393A78',
  '#343369',
  '#2E2D5B',
  '#28264F',
  '#222042',
  '#1A1935',
  '#121329',
  '#0A0C1E',
  '#030512',
]

const colors = {
  text: colormap[12],
  background: colormap[31],
  primary: colormap[12],
  secondary: colormap[18],
  accent: colormap[25],
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors,
  components: {
    Heading: {
      baseStyle: {
        color: colors.text,
      },
    },
    Link: {
      baseStyle: {
        textDecoration: 'none',
        '&:hover, &:hover, &:visited, &:link, &:active': {
          textDecoration: 'none',
        },
        fontWeight: 'bold',
        color: colors.text,
      },
    },
  },
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
  },
  styles: {
    global: ({ colorMode }: any) => ({
      svg: {
        fill:
          colorMode === 'dark'
            ? colors.text
            : colormap[colormap.length - 1 - 6],
      },
    }),
  },
})

export default theme
export { colormap }
