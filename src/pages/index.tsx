import React from 'react'
import Layout from '@theme/Layout'
import Home from '../components/Home'

function HomePage () {
  return (
    <Layout
      title={'Magical request queues for serverless'}
      description={'Push any HTTP request into a queue — just prefix with zeplo.to/. Supports retry, delays, cron and more.'}
    >
       <Home />
    </Layout>
  )
}

export default HomePage
