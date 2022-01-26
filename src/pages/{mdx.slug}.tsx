import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'

import Page from '../components/Page'

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
    query POST_QUERY($slug: String) {
        mdx(slug: { eq: $slug }) {
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
