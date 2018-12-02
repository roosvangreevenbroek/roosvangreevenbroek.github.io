import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Intro from '../components/intro'
import ProjectShowcase from '../components/project-showcase'
import SectionHeader from '../components/section-header'

import '../assets/styles/main.scss'

const IndexPage = ({ data }) => (

  <Layout>

    <Intro />

    <SectionHeader title="Portfolio" />
    {
      data.allMarkdownRemark.edges.map(({ node }) => {
        const fm = node.frontmatter;

        return (
          <ProjectShowcase key={node.id} fm={fm} />
        )
      })
    }

    <SectionHeader title="Process" />

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
