// cmocean "tempo" colormap

const colormap = [
    '#FFF6F5',
    '#F4EFE8',
    '#E9E7DD',
    '#DEE0D2',
    '#D1D9C6',
    '#C5D2BB',
    '#B9CCB2',
    '#ADC6A9',
    '#9EC0A0',
    '#91BA98',
    '#83B592',
    '#74B08D',
    '#63A988',
    '#53A484',
    '#439E82',
    '#339880',
    '#23907F',
    '#18897D',
    '#12827B',
    '#107A78',
    '#137275',
    '#166A71',
    '#18636D',
    '#1A5B69',
    '#1B5364',
    '#1C4B5F',
    '#1C445B',
    '#1B3D56',
    '#193451',
    '#182D4C',
    '#162548',
    '#151D43',
]

const theme = {
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace',
    },
    colors: {
        text: colormap[0],
        background: colormap[31],
        primary: colormap[12],
        secondary: colormap[18],
        accent: colormap[25],
    },
    styles: {
        a: {
            color: colormap[20],
            fontWeight: 'bold',
            textDecoration: 'none',
        },
        SidebarLayout: {
            background: colormap[16],
        },
    },
}

export default theme
export { colormap }
