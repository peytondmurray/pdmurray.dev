import React from 'react'

import { Box } from '@chakra-ui/react'

import Sidebar from './Sidebar'
import Header from './Header'

// import 'katex/dist/katex.min.css'

export default function Page(props: any): JSX.Element {
    return (
        <main>
            <Header />
            <Box display="flex" flexDirection="row">
                <Sidebar />
                <Box flexGrow="1">{props.children}</Box>
            </Box>
        </main>
    )
}
