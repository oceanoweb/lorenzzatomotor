import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import SEO from "../components/Seo"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go home</Link>.
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
