import * as React from "react"
import "../../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./SkewDrawer.scss"
import { Link } from "gatsby"

interface Props {
  isOpen: Boolean
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>
  content?: JSX.Element | React.ReactNode
}

const SkewDrawerComp: React.FC<Props> = ({ isOpen, setIsOpen, content }) => {
  const closeSideDrawerHandler = (): void => {
    setIsOpen(false)
  }

  console.log("Skew Drawer open")
  return (
    <>
      <div
        className="sidedrawer__container"
        style={{
          transform: isOpen
            ? "skew(-7deg) translateX(42px)"
            : "skew(-7deg) translateX(120%)",
        }}
      >
        <div className="sidedrawer__content">
          {content}

          <Link to="/toolbox" className="sidedrawer__btn">
            <FontAwesomeIcon icon={["fa", "wrench"]} color="#A662C1" />
            <span style={{ paddingLeft: "4px" }}>ToolBox</span>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="backdrop" onClick={closeSideDrawerHandler}></div>
      )}
    </>
  )
}

export const SkewDrawer = React.memo(SkewDrawerComp);