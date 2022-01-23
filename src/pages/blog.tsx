import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import { Heading } from 'theme-ui'

import Page from '../components/Page'

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
    {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                id
                slug
                excerpt(pruneLength: 100)
                frontmatter {
                    title
                    date(formatString: "YYYY-MM-DD")
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
    children: JSX.Element
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
                {data.allMdx.nodes.map(
                    ({
                        id,
                        excerpt,
                        slug,
                        frontmatter: { title, date },
                    }: {
                        id: string
                        excerpt: string
                        slug: string
                        frontmatter: {
                            title: string
                            date: string
                        }
                    }) => {
                        return (
                            <PostLink
                                title={title}
                                to={`/${slug}`}
                                date={date}
                                excerpt={excerpt}
                                key={id}
                            ></PostLink>
                        )
                    }
                )}
            </PostLayout>
        </Page>
    )
}
