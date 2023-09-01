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
      },
    },
  } = data

  return (
    <Layout>
      <Info
        title={title}
        description={description}
        email={email}
        mobilePhone={mobilePhone}
        comPhone={comPhone}
        city={city}
        facebook={facebook}
      />
      <Form />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <SEO title="Home" />
    <script src="https://www.google.com/recaptcha/api.js?render=6Lccg-0nAAAAAFmCdefGBIUPLaYk386nczhBhJD9"></script>
  </>
)
