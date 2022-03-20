import { ThemeProvider } from 'theme-ui'

import Theme from './theme'
import MainPage from './pages/MainPage'

export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <MainPage />
        </ThemeProvider>
    )
}
