import React from 'react'

const EducationBlock = ({date, title, description, organisation}) => (
  <div className="lh-18 mb-3">
    <span className="font-medium">{ date }</span><br />
    <span>{ title }</span><br />
    <em>{ description }</em><br />
    <a href={ organisation.link}
      className="link"
      target="_blank"
      rel="noopener noreferrer">
      { organisation.title }
    </a>
  </div>
)

export default EducationBlock
