import * as React from "react"
import { useCallback } from "react"

import Burger from "react-css-burger"
import '../../utils/fontawesome'
import { NavigationItem } from "./NavigationItem/NavigationItem"
import "./Navigation.scss"

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false)

  const items = [
    {
      name: "Home",
      icon: ["fa", "home"],
      link: '/'
    },
    {
      name: "Toolbox",
      icon: ["fa", "wrench"],
      link: '/toolbox'
    },
    {
      name: "Playground",
      icon: ["fa", "paper-plane"],
      link: '/playground'
    },
    {
      name: "Contact",
      icon: ["fa", "envelope"],
      link: '/contact'
    },
  ]

  // Burger Toggle
  const burgerHandler = useCallback((): void => {
    setIsOpen(isOpen => !isOpen)
  }, [isOpen])

  return (
    <>
      <ul
        className="navigation__list"
        style={isOpen ? { left: "0px" } : { left: "-300px" }}
      >
        <span
          className="navigation__burger"
          style={isOpen ? { right: "10px" } : { left: "300px" }}
        >
          <Burger color="#b100c2" onClick={burgerHandler} active={isOpen} />
        </span>
        {items.map(item => (
          <NavigationItem
            key={item.name}
            to={item.link}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </ul>
    </>
  )
}
