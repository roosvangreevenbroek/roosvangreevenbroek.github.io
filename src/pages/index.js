import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectShowcase from '../components/project-showcase'

import '../assets/styles/main.scss'

const IndexPage = ({ data }) => (

  <Layout>

    {
      data.allMarkdownRemark.edges.map(({ node }) => {
        const fm = node.frontmatter;

        return (
          <ProjectShowcase key={node.id} fm={fm} />
        )
      })
    }

  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 12
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            supertitle
            image {
              childImageSharp {
                sizes(maxWidth: 600, quality:100) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
