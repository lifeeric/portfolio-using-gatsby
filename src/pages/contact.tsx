import * as React from "react"
import { useState } from "react"
import { Layout } from "../layout/layout"
import { HeadingTitle } from "../components/HeadingTitle/HeadingTitle"
import Obfuscate from "react-obfuscate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { CircleButton } from "../components/CircleButton/CircleButton"
import { SkewDrawer } from "../components/SkewDrawer/SkewDrawer"
import { SEO } from "../components/SEO/SEO"

const contact__icon = css`
  padding: 4px 0;
  font-size: 16px;

  a {
    color: #a662c1;
    padding: 0 10px;
  }

  .icon {
    color: #666666;
  }
`

const contact__message = css`
  font-weight: 400;
  color: #666666;
  font-size: 35px;
`

export default () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  const sideDrawerHandler = (): void => {
    setIsOpen(true)
  }

  const siteContent = (
    <React.Fragment>
      <h1>Hi there</h1>
      <p>Before you leave</p>
      <p>
        I want you to remember that at present, I am open to full time on-site
        job offers (Warsaw or London).
      </p>
      <p>
        If you realize that I would be a good fit, drop me a message at
        <strong> hi@ericgit.me</strong>.
      </p>
      <p>
        Thank you, <br /> <strong>Eric</strong>
      </p>
    </React.Fragment>
  )

  return (
    <Layout>
      <SEO title={"Ericlife Contact us"} />
      <HeadingTitle sm>
        <span className="bold">You can get in touch</span> anytime through
      </HeadingTitle>

      <div css={contact__icon}>
        <FontAwesomeIcon className="icon" icon={["fas", "phone"]} />
        <Obfuscate tel="(504) 384-5021" />
      </div>

      <div css={contact__icon}>
        <FontAwesomeIcon className="icon" icon={["fas", "envelope"]} />
        <Obfuscate
          email="hi@ericgit.me"
          headers={{
            cc: "",
            bcc: "",
            subject: "",
            body: "",
          }}
        />
      </div>

      <div css={contact__icon}>
        <FontAwesomeIcon className="icon" icon={["fab", "whatsapp"]} />
        <Obfuscate target={"_blank"} href="https://wa.me/15043845021">
          Chat On WhatsApp
        </Obfuscate>
      </div>

      <h1 css={contact__message}>
        Do not forget{" "}
        <CircleButton icon={["fa", "info"]} onOpen={sideDrawerHandler} />
      </h1>
      <SkewDrawer isOpen={isOpen} setIsOpen={setIsOpen} content={siteContent} />
    </Layout>
  )
}
