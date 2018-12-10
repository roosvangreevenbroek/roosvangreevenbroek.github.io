import React from 'react'
import { Link } from 'gatsby'

const SiteFooter = ({ siteTitle }) => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <span>© {(new Date).getFullYear()} Roos van Greevenbroek</span>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/roos-van-greevenbroek-7b1a24101/"
            className="link"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:roosvangreevenbroek@gmail.com" className="link">
            Email
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default SiteFooter
