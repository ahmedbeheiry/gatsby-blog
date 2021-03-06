const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `GatsLog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#faa`,
        theme_color: `cyan`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `PT Sans`,
            variants: [`400`],
          },
          {
            family: `PT Serif`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
