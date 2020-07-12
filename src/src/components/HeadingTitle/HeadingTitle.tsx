import * as React from "react"
import { ReactNode, useEffect, useState } from "react"
import { motion } from "framer-motion"

import "./HeadingTitle.scss"

type Props = {
  children?: JSX.Element | ReactNode
  sm?: boolean
}

export const HeadingTitle: React.FC<Props> = ({ children, sm }) => {
  const [animation, setAnimation] = useState({})
  useEffect(() => {
    setTimeout(
      () =>
        setAnimation({
          scale: [1, 1.03, 1],
          x: [0, 10, 0],
        }),
      100
    )
  }, [])

  return (
    <motion.h1
      animate={animation}
      transition={{ duration: 0.3 }}
      className={sm ? "sm content__header" : "content__header"}
    >
      {children}
    </motion.h1>
  )
}
