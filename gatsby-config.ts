require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Lorenzzato Motor`,
    description: `Revendedora de automóveis`,
    email: `lorenzzatomotor@hotmail.com`,
    mobilePhone: `(11) 95202-5501`,
    comPhone: `(11) 4109-9899`,
    city: `S.B.Campo - SP`,
    author: `@marquinhusgonc`,
    siteUrl: `https://lorenzzatomotor.com.br`,
    facebook: `https://www.facebook.com/LorenzzatoMotor/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["GA-TRACKING_ID", "AW-CONVERSION_ID"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}

export default config
