import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import arrowRight from '../assets/images/arrow-right.svg'

const ProjectShowcase = ({ fm }) => {
  const image = fm.image.childImageSharp;

  return (
    <section className="project-showcase">
      <Img sizes={{ ...image.sizes, aspectRatio: 3/2 }} className="project-showcase__image" />
      <div className="project-showcase__content">
        <h3>{ fm.supertitle }</h3>
        <h2>{ fm.title }</h2>
        <Link to={fm.path} className="link">
          View project
          <img src={arrowRight} alt="" className="link__icon" />
        </Link>
      </div>
    </section>
  )
}

export default ProjectShowcase
