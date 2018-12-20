import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const ProjectDetail = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter: fm, html } = markdownRemark
  const image = fm.image.childImageSharp

  const renderProjectProp = (prop, title) => {
    if (prop) {
      return (
        <div className="project-header__prop">
          <h5>{ title }</h5>
          <p className="font-medium lh-18">{ prop }</p>
        </div>
      )
    }
  }

  return (
    <Layout>
      <section className="project-header">
        <PageHeader
          superTitle={ fm.supertitle }
          title={ fm.title }
        />

        <Img sizes={{ ...image.sizes, aspectRatio: 5/3 }} className="" />

        <div className="project-header__intro">
          <p>{ fm.intro }</p>
          <div className="project-header__props">
            { renderProjectProp(fm.company, 'Company') }
            { renderProjectProp(fm.team, 'Team') }
            { renderProjectProp(fm.type, 'Type') }
            { renderProjectProp(fm.role, 'Role') }
            { renderProjectProp(fm.timeline, 'Timeline') }
          </div>
        </div>
      </section>

      <section className="content--small project-content">
        <div
          className="content__inner"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>

    </Layout>
  )
}

export default ProjectDetail

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        supertitle
        intro
        company
        team
        type
        role
        timeline
        image {
          childImageSharp {
            sizes(quality:100) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`
