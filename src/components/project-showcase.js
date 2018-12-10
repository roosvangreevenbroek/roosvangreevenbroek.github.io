import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import arrowRight from '../assets/images/arrow-right.svg'

const ProjectShowcase = ({ fm }) => {
  const image = fm.image.childImageSharp;

  return (
    <section className="project-showcase">
      <Link to={fm.path} className="project-showcase__image">
        <Img sizes={{ ...image.sizes, aspectRatio: 3/2 }} className="" imgStyle={{transition: 'transform .2s ease-out'}} />
      </Link>
      <div className="project-showcase__content">
        <h3>{ fm.supertitle }</h3>
        <h2>{ fm.title }</h2>
        <Link to={fm.path} className="link">
          View project
          <img src={arrowRight} alt="" className="link__icon" />
        </Link>

        <div className="project-showcase__additional-info">
          <div>
            <h4>My role</h4>
            {fm.goal}
          </div>
          <div>
            <h4>Main goal</h4>
            {fm.goal}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
