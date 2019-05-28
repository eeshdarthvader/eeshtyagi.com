import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Eesh Tyagi"
      keywords={[`gatsby`, `personal website`, `react`]}
    />
    <Hero />
  </Layout>
)

export default IndexPage
