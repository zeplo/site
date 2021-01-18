import React, { useState } from 'react'
import { css } from '@emotion/react'
import map from 'lodash/map'
import merge from 'lodash/merge'

const { REACT_APP_QUEUE_ENDPOINT } = process.env

const modes = [{
  name: 'Queue',
  url: { method: 'POST' },
  explain: (config: UrlConfig) => <span>Queue request and immediately forward <code>{config.method}</code> request to <code className='code'>{config.url}</code>.</span>,
}, {
  name: 'Delay',
  url: { params: { _delay: 300 }, method: 'PUT' },
  explain: (config: UrlConfig) => <span>Wait 5 minutes and then forward <code>{config.method}</code> request to <code className='code'>{config.url}</code>.</span>,
}, {
  name: 'Retry',
  url: { params: { _retry: 3 } },
  explain: (config: UrlConfig) => <span>Forward the <code>{config.method}</code> request to <code className='code'>{config.url}</code>, if response status code <code>&gt;=400</code> retry the request up to 3 times.</span>,
}, {
  name: 'CRON',
  url: { params: { _cron: '*|*|*|*|*' } },
  explain: (config: UrlConfig) => <span>Forward the <code>{config.method}</code> request to <code className='code'>{config.url}</code> every minute from now until the end of time.</span>,
}]

export interface UrlConfig {
  url: string
  method: string
  params: any
}

export interface HomeRunProps {
  config?: Partial<UrlConfig>
}

function HomeRun ({ config = {} }: HomeRunProps) {
  const [index, setIndex] = useState(0)

  const navEl = modes.map(({ name }, i) => {
    return (
      <div
        key={name}
        css={[styles.item, i === index ? styles.active : '']}
        onClick={() => setIndex(i)}
      >
        {name}
      </div>
    )
  })

  const selected = modes[index]
  const urlConfig = merge({
    url: 'anyurl.com',
    method: 'GET',
    params: {},
  }, selected.url, config)

  return (
    <div>
      <div css={styles.nav}>
        {navEl}
      </div>
      <div css={styles.code} className='code'>
        <HomeRunUrl config={urlConfig} />
      </div>
      <p css={styles.explain}>
        {selected.explain(urlConfig)}
      </p>
    </div>
  )
}

export interface HomeRunUrlProps {
  config?: Partial<UrlConfig>
}

function HomeRunUrl ({ config }: HomeRunUrlProps) {
  const { method, url, params } = config || {}
  const paramsStr = map(params, (val, key) => `${key}=${val}`).join('&')
  return (
    <span>
      curl {method !== 'GET' ? `-X ${method}` : ''} &quot;{REACT_APP_QUEUE_ENDPOINT}/<strong>{url}{paramsStr ? '?' : ''}{paramsStr}&quot;</strong>
    </span>
  )
}

const styles = {
  nav: css`
    font-size: 0.95em;
    display: flex;
    font-weight: 600;
  `,
  item: css`
    cursor: pointer;
    border-radius: 15px;
    padding: 0.3em 1em;
    margin-right: 0.2em;
    color: #999;
    :hover {
      background: #F9F9F9;
    }
  `,
  active: css`
    background: #EEEEEE !important;
    color: #777;
  `,
  code: css`
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    border-radius: 0.5em;
    background: #F9F9F9;
    margin-top: 1em;
    padding: 1em 1em;
    color: #999;
    word-break: break-all;
    strong {
      color: #333;
    }
  `,
  explain: css`
    margin: 1em;
    line-height: 1.5;
    color: #8B8B8B;
  `,
}

export default HomeRun
