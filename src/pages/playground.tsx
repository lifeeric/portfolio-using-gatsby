import * as React from "react"
import { Layout } from "../layout/layout"
import { HeadingTitle } from "../components/HeadingTitle/HeadingTitle"
import { SEO } from "../components/SEO/SEO"

export default () => {
  return (
    <Layout>
      <SEO title={"Ericlife Playground"} />

      <HeadingTitle>PlayGround</HeadingTitle>
    </Layout>
  )
}
