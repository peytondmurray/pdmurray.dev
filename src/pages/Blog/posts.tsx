import {
    Box,
    Heading,
    Link,
    ListItem,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import PostLayout from './Layout'
const posts = import.meta.globEager('./content/**/*.mdx')

const customComponents = {
    h1: (props: any) => <Heading as="h1" size="2xl" {...props} />,
    h2: (props: any) => <Heading as="h2" size="lg" {...props} />,
    h3: (props: any) => <Heading as="h3" size="md" {...props} />,
    h4: (props: any) => <Heading as="h4" size="sm" {...props} />,
    a: Link,
    ol: OrderedList,
    ul: UnorderedList,
    li: ListItem,
}

const blogPosts = Object.entries(posts).map(
    ([globPattern, { default: PostMdx, title }]) => {
        const regexp = /^\.\/content\/(?<postName>.*)\/.*\.mdx$/
        const postName = globPattern.match(regexp)?.groups?.postName
        return {
            path: `/blog/${postName}`,
            key: `/blog/${postName}`,
            element: (
                <PostLayout title={title}>
                    <Box textAlign="justify">
                        <PostMdx components={customComponents} />
                    </Box>
                </PostLayout>
            ),
        }
    }
)

export default blogPosts
