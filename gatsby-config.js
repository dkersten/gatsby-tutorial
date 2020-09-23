module.exports = {
    siteMetadata: {
        title: 'Front End Masters Gatsby Workshop',
        description: 'Site working with Gatsby and GraphQL'
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                },
            },
        },
    ],
}