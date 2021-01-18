import React from 'react'
import { css } from '@emotion/react'
import PricingPlans from './PricingPlans'
import PricingFaq from './PricingFaq'

function Pricing () {
  return (
    <div css={styles.pricing}>
      <div css={styles.splash}>
        <h1>Pricing</h1>
        <p>Simple pricing, infinitely scalable.</p>
      </div>
      <div css={css`margin-top: 4em;`}>
        <PricingPlans
          onPlanClick={(plan) => {
            if (plan.type === 'sales') {
              window.location.href = 'https://ralley.typeform.com/to/cLjadaIA'
            }
          }}
        />
      </div>
      <div css={styles.faq}>
        <h2>FAQ</h2>
        <PricingFaq />
      </div>
    </div>
  )
}

const styles = {
  pricing: css`
    h3 {
      font-weight: 600;
    }
    h4 {
      font-weight: 600;
    }
  `,
  splash: css`
    margin-top: 3em;
    h1 {
      text-align: center;
      font-weight: 600;
      font-size: 2.4em;
      margin-bottom: 0.4em;
    }
    p {
      color: #919191;
      font-size: 1.2em;
      line-height: 1.5;
      text-align: center;
    }
  `,
  free: css`
    border-radius: 3px;
    background: #199F90;
    color: #fff;
    padding: 0.5em 1em;
    margin: 4em auto 0;
    width: 300px;
    text-align: center;
    font-weight: 600;
    font-size: 1.1em;

  `,
  line: css`
    background: #eee;
    width: 3px;
    height: 40px;
    margin: 0 auto;
  `,
  price: css`
    text-align: center;
    width: 300px;
    border-radius: 3px;
    border: 1px solid #eee;
    padding: 2em 3em;
    margin: 0 auto;
    h2 {
      color: #199F90;
      font-weight: 600;
      font-size: 6em;
      line-height: 1;
      margin: 0;
    }
    p {
      color: #A0A0A0;
      font-weight: 600;
      font-size: 1.1em;
      line-height: 1;
      margin-top: 1em;
      margin-bottom: 0;
    }
  `,
  faq: css`
    max-width: 800px;
    margin: 10em auto 10em;
    h2 {
      font-weight: 600;
      text-align: center;
      margin-bottom: 2em;
      font-size: 1.8em;
    }
  `,
}

export default Pricing
