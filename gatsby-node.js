const path = require('path')

exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: '@babel/plugin-transform-react-jsx',
        options: {
            runtime: 'automatic',
            importSource: 'theme-ui',
        },
    })
}

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query MyQuery {
            allFile(
                filter: {
                    sourceInstanceName: { eq: "content" }
                    extension: { eq: "mdx" }
                }
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
                        }
                    }
                }
            }
        }
    `)

    data.allFile.edges.forEach(({ node }) => {
        actions.createPage({
            path: node.childMdx.slug,
            component: path.resolve(__dirname, './src/templates/page.tsx'),
            context: {
                id: node.childMdx.id,
                title: node.childMdx.frontmatter.title,
                body: node.childMdx.body,
            },
        })
    })

    actions.createPage({
        path: 'about',
        component: path.resolve(__dirname, './src/pages/about/about.tsx'),
    })

    actions.createPage({
        path: 'research',
        component: path.resolve(__dirname, './src/pages/research/research.tsx'),
    })

    // actions.createPage({
    //     path: 'projects',
    //     component: path.resolve(__dirname, './src/pages/projects/projects.tsx'),
    //     context: {
    //         id: node.childMdx.id,
    //         title: node.childMdx.frontmatter.title,
    //         body: node.childMdx.body,
    //     }
    // })
}
