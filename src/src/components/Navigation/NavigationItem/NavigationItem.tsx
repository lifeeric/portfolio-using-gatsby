import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./NavigationItem.scss"

interface Props {
  name: string
  icon: any
  to: string;
}

export const NavigationItem: React.FC<Props> = ({ name, icon, to }) => {
  return (
    <li className="navigation__item">
      <Link className="navigation__link" activeClassName="navigation__link--active" to={to}>
        <FontAwesomeIcon icon={icon} />
        <span className="navigation__link--text">{name}</span>
      </Link>
    </li>
  )
}
