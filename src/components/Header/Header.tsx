import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./Header.scss"
import { Navigation } from "../Navigation/Navigation"

export const Header: React.FC = () => {
  /** GraphQL */
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="header-container">
      <nav className="navigation">
        <div className="navigation__profile">
          <Img
            className="navigation__profile__img"
            fixed={file.childImageSharp.fixed}
          />
        </div>
        <Navigation />
      </nav>
    </header>
  )
}
