import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'

import Page from '../components/Page'

import 'katex/dist/katex.min.css'

const BlogTitle = styled.h2``

export default function PostPage({ data }: { data: any }): JSX.Element {
    const {
        body,
        frontmatter: { title },
    } = data.mdx

    return (
        <Page>
            <BlogTitle>{title}</BlogTitle>
            <MDXRenderer>{body}</MDXRenderer>
        </Page>
    )
}

export const query = graphql`
    query POST_QUERY($id: String) {
        mdx(id: { eq: $id }) {
            body
            id
            slug
            frontmatter {
                date(formatString: "YYYY-MM-DD")
                title
            }
        }
    }
`
