import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Home from '../components/Home'

function HomePage () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={'Zero configuration message queue'}>
       <Home />
    </Layout>
  )
}

export default HomePage
