import React from 'react'
import map from 'lodash/map'
import { css } from '@emotion/react'
import Link from '@docusaurus/Link'
import { Row, Col } from 'react-flexbox-grid'
import Tag from './Tag'

const TAG_LINK_MAP = {
  Retry: '/docs#retry',
  Delay: '/docs#delay',
  Schedule: '/docs#schedule',
  Queue: '/docs#getting-started',
  Bulk: '/docs#bulk',
} as any

const useCases = [{
  title: 'Make a payment request, and retry 3 times on failure',
  tags: ['Retry'],
  code: 'zeplo.to/<your_url>?_retry=3',
}, {
  title: 'Send a customized email 50 mins after the user signs up',
  tags: ['Delay'],
  code: 'zeplo.to/<your_url>?_delay=3000',
}, {
  title: 'Send a Slack reminder every day to join the team standup',
  tags: ['Schedule'],
  code: 'zeplo.to/<your_url>?_cron=0|8|*|*|*',
}, {
  title: 'Delete all user data 30 days after the user closes account',
  tags: ['Delay'],
  code: 'zeplo.to/<your_url>?_delay=2592000',
}, {
  title: 'Queue incoming webhooks for reliable processing',
  tags: ['Queue'],
  code: 'zeplo.to/<your_url>',
}, {
  title: 'Update master and cache databases together',
  tags: ['Bulk'],
  code: 'zeplo.to/bulk>',
}]

function HomeUseCases () {
  const even = map(useCases.filter((_, i) => i % 2 === 0), ({ title, tags, code }) => (
    <UseCase key={title} title={title} tags={tags} code={code} />
  ))

  const odd = map(useCases.filter((_, i) => i % 2 !== 0), ({ title, tags, code }) => (
    <UseCase key={title} title={title} tags={tags} code={code} />
  ))

  return (
    <Row>
      <Col xs={12} sm={6} className='gutter-row'>
        {even}
      </Col>
      <Col xs={12} sm={6} className='gutter-row'>
        {odd}
      </Col>

    </Row>
  )
}

interface UseCaseProps {
  title: string
  tags: string[]
  code: string
}

function UseCase ({ title, tags, code }: UseCaseProps) {
  const tagsEl = map(tags, (tag) => <Link to={TAG_LINK_MAP[tag]}><Tag color='green'>{tag}</Tag></Link>)
  return (
    <div css={styles.box}>
      <h3 css={styles.title}>{title}</h3>
      <div css={styles.tags}>{tagsEl}</div>
      <div css={styles.code}>
        {code}
      </div>
    </div>
  )
}

const styles = {
  box: css`
    border-radius: 2px;
    border: 1px solid #dfdfdf;
    margin-bottom: 2em;
    padding: 1em;
    box-shadow: rgba(84, 84, 84, 0.1) 0 2px 4px;
  `,
  title: css`
    font-weight: 600;
  `,
  tags: css`
    margin: 1em 0;
    a .ant-tag {
      cursor: pointer;
    }
  `,
  code: css`
    margin-top: 0.3em;
    background: #fafafa;
    border-radius: 2px;
    padding: 1em;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    color: #777;
    font-weight: 600;
  `,
}

export default HomeUseCases
