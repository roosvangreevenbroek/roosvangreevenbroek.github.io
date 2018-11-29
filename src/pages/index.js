import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import '../assets/styles/main.scss'

const IndexPage = () => (
  <Layout>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
