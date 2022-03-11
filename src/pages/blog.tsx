import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import { Heading } from 'theme-ui'

import Page from '../components/Page'

export const query = graphql`
    query MyQuery {
        allFile(
            filter: {
                sourceInstanceName: { eq: "content" }
                extension: { eq: "mdx" }
            }
            sort: { fields: childrenMdx___frontmatter___date, order: DESC }
        ) {
            edges {
                node {
                    childMdx {
                        id
                        body
                        frontmatter {
                            title
                            date(formatString: "YYYY-MM-DD")
                        }
                        slug
                        excerpt(pruneLength: 100)
                    }
                }
            }
        }
    }
`

const PostLayout = styled.div`
    display: flex;
    flex-direction: column;
`

function PostLink({
    children,
    title,
    to,
    date,
    excerpt,
}: {
    children: JSX.Element | null
    title: string
    to: string
    date: string
    excerpt: string
}): JSX.Element {
    return (
        <Link
            to={to}
            sx={{
                textDecoration: 'none',
                color: 'primary',
            }}
        >
            <Heading as="h2">
                {title} [{date}]
            </Heading>
            {children}
            <p>{excerpt}</p>
        </Link>
    )
}

export default function Blog({ data }: any): JSX.Element {
    return (
        <Page>
            <PostLayout>
                {data.allFile.edges.map(({ node }: { node: any }) => {
                    const {
                        childMdx: {
                            id,
                            excerpt,
                            slug,
                            frontmatter: { title, date },
                        },
                    } = node
                    return (
                        <PostLink
                            title={title}
                            to={`/${slug}`}
                            date={date}
                            excerpt={excerpt}
                            key={id}
                        />
                    )
                })}
            </PostLayout>
        </Page>
    )
}
