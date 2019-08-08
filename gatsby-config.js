module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
     'gatsby-transformer-remark',
     `gatsby-plugin-postcss`,
     `gatsby-plugin-react-helmet`
     
    
  ],
}
