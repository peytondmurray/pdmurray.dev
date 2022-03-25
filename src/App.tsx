import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// import theme from './Theme'
import MainPage from './pages/MainPage'

export default function App(): JSX.Element {
    return (
        <ChakraProvider>
            <MainPage />
        </ChakraProvider>
    )
}
