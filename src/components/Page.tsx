import { Box } from '@chakra-ui/react'

import Sidebar from './Sidebar'
import Header from './Header'

export default function Page(props: any): JSX.Element {
    return (
        <Box marginRight="1em">
            <Header />
            <Box display="flex" flexDirection="row">
                <Sidebar />
                <Box>{props.children}</Box>
            </Box>
        </Box>
    )
}
