import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import '../assets/styles/main.scss'

const IndexPage = ({ data }) => (

  <Layout>

    <ul>
      {
        data.allMarkdownRemark.edges.map(({ node }) => {
          const fm = node.frontmatter;

          return (
            <li key={node.id}>
              <Link to={fm.path}>{ fm.supertitle }</Link>
            </li>
          )
        })
      }
    </ul>
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
          }
        }
      }
    }
  }
`
