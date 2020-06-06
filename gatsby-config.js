require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Lorenzzato Motor`,
    description: `Revendedora de automóveis`,
    email: `lorenzzatomotor@hotmail.com`,
    mobilePhone: `(11) 95202-5501`,
    comPhone: `(11) 4109-9899`,
    city: `S.B.Campo - SP`,
    author: `@marquinhusgonc`,
    siteUrl: `https://lorenzzatomotor.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/car-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
