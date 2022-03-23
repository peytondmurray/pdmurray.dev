import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './Theme'

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
        </ThemeProvider>
    )
}
