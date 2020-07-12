import * as React from "react"
import { ToggleLayer, Arrow } from "react-laag"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./SkillList.scss"

interface Props {
  label: string
  description: string
  comment?: string
}

export const SkillList: React.FC<Props> = ({ label, description, comment }) => {
  const [active, setActive] = React.useState(false)

  const openTooltip = (): void => {
    setActive(active => !active)
  }

  /** GraphQL */
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ToggleLayer
      renderLayer={({ isOpen, layerProps, arrowStyle, layerSide }) =>
        isOpen && (
          <div
            ref={layerProps.ref}
            className="layer"
            style={{
              ...layerProps.style,
            }}
          >
            <div className="tooltip__info">
              {description}

              {comment && (
                <div className="tooltip__comment">
                  <Img
                    className="tooltip__image"
                    fixed={file.childImageSharp.fixed}
                  />
                  <div className="tooltip__body">{comment}</div>
                </div>
              )}
            </div>
            <Arrow
              style={arrowStyle}
              layerSide={layerSide}
              backgroundColor="#a662c1"
              borderWidth={1}
              borderColor="#a662c1"
              roundness={0.5}
            />
          </div>
        )
      }
      closeOnOutsideClick
      closeOnDisappear="partial"
      placement={{
        autoAdjust: true,
      }}
    >
      {({ isOpen, triggerRef, toggle }) => (
        <button
          ref={triggerRef}
          className={`tooltip__item ${isOpen && `active`}`}
          onClick={toggle}
        >
          {label}
        </button>
      )}
    </ToggleLayer>
  )
}
