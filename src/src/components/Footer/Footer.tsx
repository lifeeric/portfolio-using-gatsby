import * as React from "react"

import "./Footer.scss"
export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        Build with <span className="colorful">Gatsby</span> and{" "}
        <span className="colorful">React</span>. Hosted on{" "}
        <span className="colorful">Netlify</span>. The code is open source and
        available at <span className="colorful">Github</span>.
      </p>
    </footer>
  )
}
