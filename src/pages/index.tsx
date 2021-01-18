import React from 'react'
import Layout from '@theme/Layout'
import Home from '../components/Home'

function HomePage () {
  return (
    <Layout
      title={'Zero configuration message queue'}
      desc={'Turn any API into a message queue, just add ralley.to/ prefix - supports job tracing, retries, delays and scheduling'}
    >
       <Home />
    </Layout>
  )
}

export default HomePage
