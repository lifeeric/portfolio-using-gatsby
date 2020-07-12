import * as React from "react"
import NProgress from "nprogress"
import { Layout } from "../layout/layout"
import { HeadingTitle } from "../components/HeadingTitle/HeadingTitle"

export default () => {
  /** Start Loading page */
  NProgress.start()
  React.useEffect(() => {
    NProgress.done()
    return () => {
      NProgress.remove()
    }
  })
  return (
    <Layout>
      <HeadingTitle>PlayGround</HeadingTitle>
    </Layout>
  )
}
