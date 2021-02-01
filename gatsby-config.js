const path = require('path')

module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/src/pages`,
        },
      },
      'gatsby-transformer-remark',
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          defaultLayouts: { default: path.resolve('./src/templates/post.js')}
        }
      }
    ]
}
