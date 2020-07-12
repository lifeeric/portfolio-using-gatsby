import * as React from "react"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

import "./layout.scss"

type Props = {
  children: JSX.Element[] | JSX.Element
}

export const Layout: React.FC<Props> = ({ children }) => (
  <main>
    <Header />
    <div className="contentBox">{children}</div>
    <Footer />
  </main>
)
