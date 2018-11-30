import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const ProjectDetail = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter: fm, html } = markdownRemark

  return (
    <Layout>
      <PageHeader
        superTitle={ fm.supertitle }
        title={ fm.title }
      />

      <div
        className="content__inner"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Link to="/">Go back</Link>
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
      }
    }
  }
`
