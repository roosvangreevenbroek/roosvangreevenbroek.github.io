import React from 'react'

const ProcessBlock = ({ number, title, text }) => (
  <div className="process-block">
    <h4 className="process-block__title">
      <span style={{color: number.color}}>{ number.number }</span>
      { title }
    </h4>
    <p className="process-block__text">{ text }</p>
  </div>
)

export default ProcessBlock
