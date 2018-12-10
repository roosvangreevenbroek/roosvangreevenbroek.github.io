import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import Menu from './menu'

const SiteHeader = ({ siteTitle }) => (
  <header className="site-header">
    <Headroom pinStart={30}>
      <div className="site-header__inner">
        <h1>
          <Link to="/">roos van <br />greevenbroek</Link>
        </h1>

        <Menu>
          <Link to="#portfolio">portfolio</Link>
          <Link to="#process">process</Link>
          <Link to="/about">about</Link>
        </Menu>
      </div>
    </Headroom>


  </header>
)

export default SiteHeader
