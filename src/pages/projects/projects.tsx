import { graphql, Link } from 'gatsby'

import Page from '../../components/Page'

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

export default function Projects({ data }: any): JSX.Element {
    return <Page>foobar</Page>
}
