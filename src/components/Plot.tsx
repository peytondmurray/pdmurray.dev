import Loadable from 'react-loadable';
import Centered from '../../src/components/Centered'
import { useThemeUI } from 'theme-ui'

const LoadablePlot = Loadable({
    loader: () => import('react-plotly.js'),
    loading() {
        return <div>Loading...</div>
    },
});

export default function Plot({
    data,
    layout
}: {
    data: any,
    layout: any
}): JSX.Element {
    const { theme } = useThemeUI()
    return (
        <Centered>
            <LoadablePlot
                data={data}
                layout={{
                    margin: {
                        r: 25,
                        l: 25,
                        t: 25,
                        b: 25,
                    },
                    paper_bgcolor: '#00000000',
                    plot_bgcolor: '#00000000',
                    font: {
                        color: theme.rawColors.primary,
                        size: 16,
                    },
                    xaxis: {
                        gridcolor: theme.rawColors.primary,
                    },
                    yaxis: {
                        gridcolor: theme.rawColors.primary,
                    },
                    ...layout,
                }}
            />
        </Centered>
    )
}
