// import { ChakraProvider } from '@chakra-ui/react'
import {
  ChakraProvider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import { useRoutes } from 'react-router-dom'

import MainPage from './pages/MainPage'
import Blog from './pages/Blog'
import About from './pages/About'
import Research from './pages/Research'
import Projects from './pages/Projects'
import theme from './Theme'
import blogPosts from './pages/Blog/posts'

import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-okaidia.css'
import './components/Fonts/fonts.css'
import './styles/styles.css'
import { MDXProvider } from '@mdx-js/react'

export default function App(): JSX.Element {
  const routes = useRoutes([
    { path: '/', element: <MainPage /> },
    { path: '/about', element: <About /> },
    { path: '/research', element: <Research /> },
    { path: '/projects', element: <Projects /> },
    {
      path: '/blog',
      children: [{ path: '/blog', element: <Blog /> }, ...blogPosts],
    },
  ])

  return (
    <ChakraProvider theme={theme}>
      <MDXProvider>
        <Helmet>
          <title>peytondmurray.github.io</title>
        </Helmet>
        {routes}
      </MDXProvider>
    </ChakraProvider>
  )
}
