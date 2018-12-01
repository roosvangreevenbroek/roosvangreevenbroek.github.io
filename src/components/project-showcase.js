import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const ProjectShowcase = ({ fm }) => {
  const image = fm.image.childImageSharp;

  return (
    <section className="project-showcase">
      <Img sizes={{ ...image.sizes, aspectRatio: 3/2 }} className="project-showcase__image" />
      <div className="project-showcase__content">
        <h3>{ fm.supertitle }</h3>
        <h2 className="h1">{ fm.title }</h2>
        <Link to={fm.path} className="link">View project</Link>
      </div>
    </section>
  )
}

export default ProjectShowcase
