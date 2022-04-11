import { Center } from '@chakra-ui/react'
// import PlotlyReactPlot from 'react-plotly.js'

import { VegaLite } from 'react-vega'
import theme from '../Theme'

function mergeDeep(a: any, b: any): any {
    const isObject = (obj: any) => obj && typeof obj === 'object'

    if (isObject(b) && isObject(b)) {
        let output = Object.assign({}, a)
        Object.keys(b).forEach((key) => {
            if (key in a) {
                output[key] = mergeDeep(a[key], b[key])
            } else {
                output[key] = b[key]
            }
        })
        return output
    } else if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b]
    } else {
        console.log('mergeDeep called with invalid arguments: a: ', a, 'b: ', b)
    }
}

// export default function Plot({
//     data,
//     layout,
// }: {
//     data: any
//     layout: any
// }): JSX.Element {
//     const defaultLayout = {
//         margin: {
//             r: 50,
//             l: 50,
//             t: 50,
//             b: 50,
//         },
//         paper_bgcolor: '#00000000',
//         plot_bgcolor: '#00000000',
//         font: {
//             color: theme.colors.primary,
//             size: 16,
//         },
//         xaxis: {
//             showgrid: false,
//         },
//         yaxis: {
//             showgrid: false,
//         },
//     }
//     return (
//         <Center>
//             <PlotlyReactPlot
//                 data={data}
//                 layout={mergeDeep(layout, defaultLayout)}
//                 config={{ displaylogo: false }}
//             />
//         </Center>
//     )
// }

// export default function Plot({
//     data,
//     layout,
// }: {
//     data: any
//     layout: any
// }): JSX.Element {
//     const spec = {
//         width: 400,
//         height: 400,
//         mark: 'line',
//         encoding: {
//             x: { field: 'a', type: 'ordinal' },
//             y: { field: 'a', type: 'quantitative' },
//         }
//     }
//     return (
//         <Center>
//             <VegaLite spec={spec} data={data}/>
//         </Center>
//     )
// }
