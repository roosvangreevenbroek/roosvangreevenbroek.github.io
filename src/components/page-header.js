import React from 'react'
import TitleDash from '../components/title-dash'

const PageHeader = ({ title, superTitle }) => (
  <div className="page-header">
    <TitleDash />
    <h3 className="font-medium">{ superTitle }</h3>
    <h1 className="font-heavy lh-14">{ title }</h1>
  </div>
)

export default PageHeader
