// import type { Theme } from 'theme-ui'
// import nightOwl from '@theme-ui/prism/presets/night-owl.json'

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

const theme = {
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace',
    },
    colors: {
        text: colormap[12],
        background: colormap[31],
        primary: colormap[12],
        secondary: colormap[18],
        accent: colormap[25],
    },
    styles: {
        a: {
            color: colormap[6],
            fontWeight: 'bold',
            textDecoration: 'none',
        },
        SidebarLayout: {
            background: colormap[16],
        },
        // code: {
        //     ...nightOwl,
        // },
    },
}

export default theme
export { colormap }
