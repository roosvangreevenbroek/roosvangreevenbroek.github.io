import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <nav>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/process">process</Link>
      <Link to="/about">about</Link>
    </nav>
  </header>
)

export default Header
