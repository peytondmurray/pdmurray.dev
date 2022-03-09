import Loadable from 'react-loadable'
import Centered from '../../src/components/Centered'
import { useThemeUI } from 'theme-ui'

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
        console.log("mergeDeep called with invalid arguments: a: ", a, "b: ", b)
    }
}

const LoadablePlot = Loadable({
    loader: () => import('react-plotly.js'),
    loading() {
        return <div>Loading...</div>
    },
})

export default function Plot({
    data,
    layout,
}: {
    data: any
    layout: any
}): JSX.Element {
    const { theme } = useThemeUI()
    const defaultLayout = {
        margin: {
            r: 50,
            l: 50,
            t: 50,
            b: 50,
        },
        paper_bgcolor: '#00000000',
        plot_bgcolor: '#00000000',
        font: {
            color: theme.rawColors.primary,
            size: 16,
        },
        xaxis: {
            showgrid: false,
        },
        yaxis: {
            showgrid: false,
        },
    }
    console.log(mergeDeep(layout, defaultLayout))
    return (
        <Centered>
            <LoadablePlot
                data={data}
                layout={mergeDeep(layout, defaultLayout)}
                // layout={layout}
            />
        </Centered>
    )
}
