module.exports = {
    siteMetadata: {
        siteUrl: 'https://peytondmurray.github.io',
        title: 'peytondmurray.github.io',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-image',
            options: {
                placeholder: 'blurred',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-116925699-1',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-embed-video',
                        options: {
                            beginMarker: `{{`,
                            endMarker: `}}`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
                remarkPlugins: [require('remark-math')],
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
                name: 'templates',
                path: `${__dirname}/src/templates/`,
            },
            __key: 'templates',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'heroPages',
                path: `${__dirname}/src/heroPages/`,
            },
            __key: 'heroPages',
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
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icons/ml.svg',
                include_favicon: true,
            },
        },
    ],
}
