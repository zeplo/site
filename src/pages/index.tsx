import React from 'react'
import Layout from '@theme/Layout'
import Home from '../components/Home'

function HomePage () {
  return (
    <Layout
      title={'Magical request queues for serverless'}
      description={'Turn any API into a message queue, just add zeplo.to/ prefix - supports retry, delays, cron and more.'}
    >
       <Home />
    </Layout>
  )
}

export default HomePage
