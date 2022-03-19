import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'

import Page from '../components/Page'

import 'katex/dist/katex.min.css'
import './styles.css'

const BlogTitle = styled.h2``

export default function PostPage({
    pageContext,
}: {
    pageContext: any
}): JSX.Element {
    const { title, body } = pageContext

    return (
        <Page>
            <BlogTitle>{title}</BlogTitle>
            <MDXRenderer>{body}</MDXRenderer>
        </Page>
    )
}
