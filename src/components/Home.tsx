import React from 'react'
import { Global, css } from '@emotion/react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useThemeContext from '@theme/hooks/useThemeContext'
import LazyLoad from 'react-lazyload'
import { Row, Col } from 'react-flexbox-grid'
import Button from '../components/Button'
import HomeUseCases from '../components/HomeUseCases'
import HomeRun from '../components/HomeRun'

function Home () {
  const { isDarkTheme } = useThemeContext()
  return (
    <div>
      <Global
        styles={{
          body: {
            background: `url(${useBaseUrl(isDarkTheme ? 'img/background-dark.svg' : 'img/background.svg')}) repeat-x;`,
          },
        }}
      />
      <div css={styles.splash}>
        <h1>Zero config<br /> message queue</h1>
        <p>Turn any API into a message queue, just add <code>ralley.to/</code> prefix - supports job tracing, delays and scheduling `</p>
        <div css={styles.next}>
          <Link to='https://console.zeplo.io/signup'><Button primary size='large'>Get Started</Button></Link>
          <Link to='/docs'><Button size='large' css={styles.demobtn}>Docs</Button></Link>
        </div>
      </div>

      <div css={[styles.section, styles.features(isDarkTheme)]}>
        <div css={css`max-width: 1000px; margin: 0 auto; padding: 0 2em;`}>
          <h2>Powerful Features</h2>
          <h5>
            To enhance productivity
          </h5>
          <div css={css`margin: 0 -2em;`}>
            <Row>
              <Col xs={12} sm={4}>
                <div css={styles.feature}>
                  <h3><span css={styles.number}>1</span>Delay and Schedule</h3>
                  <p>Schedule a job to run after a given time, or at regular intervals (CRON, time or RRULE).</p>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div css={styles.feature}>
                  <h3><span css={styles.number}>2</span>Auto Retry</h3>
                  <p>Specify how many times to retry the request before failing, with customizable backoff.</p>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div css={[styles.feature]}>
                  <h3><span css={styles.number}>3</span>Tracing</h3>
                  <p>Every job is traced, including all headers and body for enhanced debugging.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
                <div css={styles.feature}>
                  <h3><span css={styles.number}>4</span>Rate Limit</h3>
                  <p>Auto-handles rate limit response headers, automatically retrying after the requested backoff.</p>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div css={styles.feature}>
                  <h3><span css={styles.number}>5</span>Manual Retry</h3>
                  <p>Fix and reprocess failed records in the console to ensure your jobs are always completed.</p>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div css={[styles.feature]}>
                  <h3><span css={styles.number}>6</span>Bulk Push</h3>
                  <p>Push multiple jobs to the queue at once, ensuring transaction safe queueing.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div css={[styles.section, styles.http2]}>
        <h2 css={css`font-size: 3em;`}>Just add a prefix</h2>
        <h4>
          Prefix any URL with <code>zeplo.to/</code> and we’ll queue the request, and proxy it to your server with the exact same headers, method and body.
        </h4>
        <div css={css`max-width: 620px; margin: 3em auto;`}>
          <HomeRun config={{ params: { _token: 'demo' } }} />
        </div>
        <div css={css`text-align: center; margin-top: 2em; margin-bottom: 1em;`}>
          <img src={useBaseUrl('img/home/how.svg')} alt='how-it-works' css={css`max-width: 700px; width: 100%;`} />
        </div>
        <div css={css`margin: 4em auto;`}>
          <Row>
            <Col xs={12} sm={4}>
              <div css={styles.feature}>
                <h3><span css={styles.number}>1</span>Scale with ease</h3>
                <p>Existing queues scale in a different way to your HTTPS services, so you have to maintain two distinct architectures that doubles the devops workload.</p>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div css={[styles.feature, styles.featurealt]}>
                <h3><span css={styles.number}>2</span>Reuse your HTTPS API</h3>
                <p>You already have a HTTPS API, so creating a second interface and API for every service and method to make it asynchronous adds duplication and complexity.</p>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div css={styles.feature}>
                <h3><span css={styles.number}>3</span>De-couple services</h3>
                <p>The consumer service no longer needs to know whether it will be called async or sync. It’s the publishing/calling service that gets to decide.</p>
              </div>
            </Col>
          </Row>
        </div>

        <div css={styles.lang}>
          <h3>Support for every language</h3>
          <LazyLoad height={100} once offset={200}>
            <div>
              <img src={useBaseUrl('img/code/bash.svg')} alt='bash' />
              <img src={useBaseUrl('img/code/js.svg')} alt='js' />
              <img src={useBaseUrl('img/code/python.svg')} alt='python' />
              <img src={useBaseUrl('img/code/ruby.svg')} alt='ruby' />
              <img src={useBaseUrl('img/code/php.svg')} alt='php' />
              <img src={useBaseUrl('img/code/go.svg')} alt='go' />
              <img src={useBaseUrl('img/code/java.svg')} alt='java' />
            </div>
          </LazyLoad>
        </div>
      </div>

      {/* <div css={[styles.section, styles.latency]}>
        <Row className='gutter-row'>
          <Col span={12} xs={24} sm={24} md={12}>
            <h2>Ultra low latency</h2>
            <h5>GLOBAL EDGE NETWORK</h5>
            <div css={[styles.feature, styles.featurealt, css`margin-right: 4em;`]}>
              <p>All traffic is automatically routed to the nearest edge message queue server, so your edge servers can now benefit from a co-located queue.</p>
            </div>
          </Col>
          <Col span={12} xs={24} sm={24} md={12}>
            <img alt='map' src={mapImg} css={css`max-width: 550px; width: 100%;`} />
          </Col>
        </Row>
      </div> */}

      <div css={[styles.section, styles.latency]}>
        <Row className='gutter-row'>
          <Col xs={12} sm={12} md={6}>
            <h2>Track every job</h2>
            <h5>UNBEATABLE VISIBILITY</h5>
            <div css={[styles.feature, css`margin-right: 4em; padding: 0;`]}>
              <p>Every job is logged in the Zeplo console, allowing you to see exactly what’s happening in your queue and to respond to any problems.</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <img alt='log' src={useBaseUrl('img/home/log.png')} css={css`max-width: 450px; width: 100%;`} />
          </Col>
        </Row>
      </div>

      <div css={[styles.section, styles.latency]}>
        <Row className='gutter-row'>
          <Col xs={12} sm={12} md={6}>
            <img alt='alert' src={useBaseUrl('img/home/alert.png')} css={css`max-width: 450px; width: 100%; margin-bottom: 2em;`} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div css={css`margin-left: 2em;`}>
              <h2>Alert on exception</h2>
              <h5>WITH SMART ALERTING RULES</h5>
              <div css={[styles.feature, css`margin-right: 4em; padding: 0;`]}>
                <p>Cut above the noise and get alerts when things aren’t right. Setup custom alert filters and get notified by e-mail, Slack or PagerDuty.</p>
              </div>
            </div>
          </Col>

        </Row>
      </div>

      <div css={[styles.section, styles.latency]}>
        <Row className='gutter-row'>
          <Col xs={12} sm={12} md={6}>
            <h2>Fix and re-process</h2>
            <h5>DETAILED ERROR LOGGING</h5>
            <div css={[styles.feature, css`margin-right: 4em; padding: 0;`]}>
              <p>Once you’ve discovered an error, you can review the complete request to diagnose the problem, and once its fixed your can reprocess the record.</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <img alt='alert' src={useBaseUrl('img/home/fix.png')} css={css`max-width: 450px; width: 100%;`} />
          </Col>
        </Row>
      </div>

      <div css={styles.section}>
        <h2>Use cases</h2>
        <div css={css`margin: 3em auto; max-width: 640px;`}>
          <HomeUseCases />
          <div css={styles.note}>
            *Zeplo doesn’t run the code itself, but instead sends a HTTPS request to your endpoint at the exact time it needs to run (and can automatically or manually retry it if it fails).
          </div>
        </div>
      </div>

      <div css={styles.section}>
        <h2>Get Started</h2>
        <p css={styles.subtitle}>Try Zeplo for free, and get started in under 5 minutes!</p>
        <div css={[styles.next, css`text-align: center;`]}>
          <Link to='https://console.zeplo.io/signup'><Button primary size='large'>Get Started</Button></Link>
          <Link to='/docs'><Button size='large'>Docs</Button></Link>
        </div>
      </div>
    </div>
  )
}

const styles = {
  section: css`
    margin: 10em auto;
    margin-top: 10em;
    margin-bottom: 10em;
    padding: 1em 2em;
    max-width: 1000px;
    h2 {
      text-align: center;
      font-size: 2.8em;
      font-weight: 600;
      margin-bottom: 1em;
      letter-spacing: -1px;
      margin-left: -1px;
    }
    h4 {
      margin: 1em;
      color: #919191;
      font-size: 1.3em;
      line-height: 1.5;
    }
    h5 {
      color: #008F65;
      text-transform: uppercase;
      font-size: 1.1em;
      margin-top: -2em;
    }
    p {
      font-size: 1.1em;
    }
  `,
  subtitle: css`
    text-align: center;
    color: #919191;
    font-size: 1.2em;
    line-height: 1.5;
    font-weight: 600;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  `,
  splash: css`
    margin: 0 auto;
    max-width: 900px;
    margin-top: 3em;
    h1 {
      max-width: 500px;
      font-size: 4em;
      font-weight: 600;
      line-height: 1.1;
      margin-top: 2em;
      margin-bottom: 0.4em;
      letter-spacing: -2px;
      margin-left: -2px;
    }
    p {
      color: var(--ifm-color-secondary-darkest);
      font-size: 1.2em;
      line-height: 1.5;
      max-width: 400px;
    }
  `,
  demobtn: css`
    background: #F6F6F6;
    border: 0;
    color: #818181;
    :hover {
      background: #f1f1f1;
      color: #444;
    }
  `,
  run: css`
    margin: 0 auto;
    max-width: 550px;
    margin-top: 5em;
  `,
  http2: css`
    margin-top: 12em;
    h2 {
      text-align: center;
      border-radius: 6px;
      padding: 0.1em;
      margin-bottom: 0.3em;
    }
    h4 {
      max-width: 670px;
      margin: 0 auto;
      text-align: center;
    }
  `,
  lang: css`
    text-align: center;
    img {
      margin: 0 1em;
    }
  `,
  next: css`
    button {
      height: 45px;
      width: 150px;
      margin: 1em 1em 2em 0;
      font-weight: 600;
    }
  `,
  latency: css`
    h2 {
      text-align: left;
    }
  `,
  stack: css`
    margin-top: 4em;
    text-align: center;
    p {
      font-weight: 600;
      color:#757575;
      font-size: 0.9em;
    }
    img {
      margin: 0 auto;
      width: 300px;
    }
  `,
  how: css`
    margin-left: auto;
    margin-right: auto;
    max-width: 680px;
    h2 {
      text-align: left;
    }
  `,
  desc: css`
    p {
      font-weight: 600;
      font-size: 1.3em;
      color: #757575;
      margin-top: 2em;
      margin-bottom: 2em;
    }
  `,
  features: (dark: boolean) => css`
    max-width: 100%;
    background: ${dark ? '#28312f' : '#F4F8F7'};
    padding: 4em 0 2em;
    h2 {
      text-align: left;
    }
    h3 {
      margin-top: 1em;
      font-weight: 600;
    }
    p {
      color: #757575;
      font-size: 1.1em;
    }
  `,
  feature: css`
    margin: 0 auto;
    margin-bottom: 2em;
    padding: 1em 2em;
    border-radius: 7px;
    p {
      color: #757575;
      margin: 0;
      padding: 0;
      line-height: 1.9;
    }
  `,
  featurealt: css`
    background: #F4F8F7;
  `,
  number: css`
    height: 24px;
    width: 24px;
    border-radius: 24px;
    line-height: 24px;
    font-size: 0.95em;
    color: #fff;
    background: #00B682;
    display: inline-block;
    text-align: center;
    margin-right: 0.5em;
  `,
  icon: css`
    height: 75px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    justify-content: center;
    svg {
      width: 60px;
    }
  `,
  note: css`
    font-weight: 600;
    font-size: 1em;
    color: #919191;
  `,
  box: css`
    background: #F4F8F7;
    padding: 4em 0 2em;
  `,
}

export default Home
