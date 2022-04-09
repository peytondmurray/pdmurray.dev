// import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraProvider,
    Heading,
    Link,
    ListItem,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { useRoutes } from 'react-router-dom'

import MainPage from './pages/MainPage'
import Blog from './pages/Blog'
import About from './pages/About'
import Research from './pages/Research'
import theme from './Theme'
import blogPosts from './pages/Blog/posts'

import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-okaidia.css'
import './components/Fonts/fonts.css'
import './styles/styles.css'
import { MDXProvider } from '@mdx-js/react'

const customComponents = {
    h1: (props: any) => <Heading as="h1" {...props} />,
    h2: (props: any) => <Heading as="h2" {...props} />,
    h3: (props: any) => <Heading as="h3" {...props} />,
    h4: (props: any) => <Heading as="h4" {...props} />,
    a: Link,
    ol: OrderedList,
    ul: UnorderedList,
    li: ListItem,
}

export default function App(): JSX.Element {
    const routes = useRoutes([
        { path: '/', element: <MainPage /> },
        { path: '/about', element: <About /> },
        { path: '/research', element: <Research /> },
        {
            path: '/blog',
            children: [{ path: '/blog', element: <Blog /> }, ...blogPosts],
        },
    ])

    return (
        <ChakraProvider theme={theme}>
            <MDXProvider components={customComponents}>{routes}</MDXProvider>
        </ChakraProvider>
    )
}
