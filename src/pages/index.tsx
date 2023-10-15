import * as React from "react"
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby"

import Form from "../components/Form"
import Info from "../components/Info"
import SEO from "../components/Seo"
import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          email
          mobilePhone
          comPhone
          city
          facebook
          instagram
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: {
        title,
        description,
        email,
        mobilePhone,
        comPhone,
        city,
        facebook,
        instagram,
      },
    },
  } = data

  return (
    <Layout>
      <SEO title="Home" />
      <Info
        title={title}
        description={description}
        email={email}
        mobilePhone={mobilePhone}
        comPhone={comPhone}
        city={city}
        facebook={facebook}
        instagram={instagram}
      />
      <Form />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
