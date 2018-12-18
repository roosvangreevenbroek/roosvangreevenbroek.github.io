import React from 'react'
import { Link } from 'gatsby'

import buttonImage from '../assets/images/arrow-down.svg'

const Intro = () => (
  <section className="intro">
    <h1>Hi! My name is Roos and I’m an self-motivated UX designer based in Amsterdam.</h1>

    <p className="h2">
      I’m passionate about creating meaning and positivity to peoples lives.
      I use my psychological background and my UX-knowledge to seamlessly adapt
      digital products to the needs of users. Feel free to send me an <a
        href="mailto:roosvangreevenbroek@gmail.com"
        className="link">e-mail</a>,
      link up at <a
        href="https://www.linkedin.com/in/roos-van-greevenbroek-7b1a24101/"
        target="_blank"
        rel="noopener noreferrer"
        className="link">
        LinkedIn
      </a> or read more <Link to="/about" className="link">about me</Link>.
    </p>

    <a href="#portfolio" className="intro__arrow">
      <img src={buttonImage} alt="" />
    </a>
  </section>
)

export default Intro
