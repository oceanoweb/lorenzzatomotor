import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import Info from "../components/Info"
import Form from "../components/Form"

const IndexPage = () => {
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
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { title, description, email, mobilePhone, comPhone, city },
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
      />
      <Form />
    </Layout>
  )
}

export default IndexPage
