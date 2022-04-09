import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

const basename =
    typeof import.meta.env.PUBLIC_URL !== 'undefined'
        ? (import.meta.env.PUBLIC_URL as string)
        : '/'

ReactDOM.render(
    <React.StrictMode>
        <Router basename={basename}>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
