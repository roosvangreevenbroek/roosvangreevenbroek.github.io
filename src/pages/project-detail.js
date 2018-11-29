import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const ProjectDetail = () => (
  <Layout>
    <PageHeader
      superTitle="Designtool for Correctbook"
      title="Creating a designtool that inspires companies to customize their endlessly reusable notebook. "
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectDetail
