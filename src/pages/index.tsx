import * as React from "react"
import "./index.scss"
import { Layout } from "../layout/layout"
import { HeadingTitle } from "../components/HeadingTitle/HeadingTitle"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { CircleButton } from "../components/CircleButton/CircleButton"
import { SkewDrawer } from "../components/SkewDrawer/SkewDrawer"
import "../utils/fontawesome"
import { SEO } from "../components/SEO/SEO"

// Styling
const content__name = css({
  fontWeight: 200,
  color: "#666666",
})

const content__about = css`
  color: #666666;
  font-weight: 300;
  font-size: 30px;
`

const siteContent = (
  <>
    <h1>I'm glad</h1>
    <p>that you're interested in my stuff.</p>
    <p>
      There's something I want you to remember while you're going over the
      website.
    </p>

    <p>
      At present, I'm open to full time on-site job offers (Warsaw or London).
    </p>
    <p>
      If you realize that I would be a good fit, drop me a message at
      <strong> hi@ericgit.me</strong>.
    </p>
    <p>Thank you. Now, you're free to go further.</p>
  </>
)

export default function App() {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false)

  const sideDrawerHandler = () => {
    setIsOpen(true)
  }

  return (
    <Layout>
      <SEO
        title={"I am a front-end developer"}
        description={[
          {
            name: "description",
            content: `I build web interfaces using: JavaScrip, ES2015, Babel, HTML5, CSS, CSS3, BEM, React, Gatsby, Webpack ...`,
          },
        ]}
      />
      <div className="content">
        <h2 css={content__name}>Hi, it's Eric</h2>
        <HeadingTitle>I'm front-end web developer</HeadingTitle>
        <h2 css={content__about}>
          I build web interfaces{" "}
          <CircleButton icon={["fa", "info"]} onOpen={sideDrawerHandler} />
        </h2>
        <SkewDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          content={siteContent}
        />
      </div>
    </Layout>
  )
}
