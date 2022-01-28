module.exports = {
    siteMetadata: {
        siteUrl: 'https://peytondmurray.github.io',
        title: 'peytondmurray.github.io',
    },
    plugins: [
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-116925699-1',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    placeholder: 'blurred',
                },
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                            strict: `ignore`,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/`,
                name: `content`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
            __key: 'pages',
        },
        'gatsby-plugin-theme-ui',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.svg$/,
                },
            },
        },
    ],
}
