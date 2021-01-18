import React from 'react'
import { css } from '@emotion/react'
import Link from '@docusaurus/Link'
import { Row, Col } from 'react-flexbox-grid'
import Button from './Button'
import pricing from './plans.active'

const FEATURE_COUNT = 7

interface PricingPlansProps {
  compact?: boolean
  onPlanClick: (plan: any) => void
}

function PricingPlans ({ compact, onPlanClick }: PricingPlansProps) {
  // Check if the user is logged in!
  const tiersEl = pricing.map(({ subtitle, nextStep, plan, promotedFeatures }) => {
    const featuresEl = Array(FEATURE_COUNT).fill(1).map((_, i) => {
      const feat = promotedFeatures[i]
      return (
        <div css={styles.featuresItem} key={feat || i}>
          {feat || ''}
        </div>
      )
    })

    const actionBtnTitle = nextStep || 'Get Started'
    const color = '#00B682'
    const theme = {}

    return (
      <Col xs={12} sm={compact ? 12 : 4} md={4} key={plan.id}>
        <div css={styles.box(theme)}>
          <div css={styles.header(theme)}>
            <div css={styles.price(theme, !!compact)}>
              <div>{plan.name}</div>
              <div css={css`color: ${color}; display: ${compact ? 'block' : 'inline'}; margin: 0.5em 0 0em;`}>
                ${plan.price} <span css={css`color: #bbb; font-size: 0.${compact ? '6' : '8'}em;`}>/ month</span>
              </div>
            </div>
            {!compact && (
              <h4>
                {subtitle}
              </h4>
            )}
            <div css={css`position: absolute; left: 0; right: 0; bottom: -14px;`}>
              <div css={css`margin: 0 auto; background: ${color}; padding: 0.2em; color: #fff; border-radius: 15px; width: 180px; max-width: 80%; font-weight: 600;`}>
                {promotedFeatures[0]}
              </div>
            </div>
          </div>
          <div css={styles.features(theme)}>
            {featuresEl.slice(1)}
          </div>
          <a href='https://console.zeplo.io/signup' >
            <Button
              size='large'
              block
              primary
              onClick={() => onPlanClick(plan)}
              css={styles.button}
            >
              {actionBtnTitle}
            </Button>
          </a>
        </div>
      </Col>
    )
  })

  return (
    <div css={styles.container}>
      <Row>
        {tiersEl}
      </Row>
    </div>
  )
}

const styles = {
  container: css`
    padding: 0 1em;
    max-width: 1000px;
    margin: 0 auto;
  `,
  box: (theme: any) => css`
    border-radius: 3px;
    margin-bottom: 1em;
    border: 1px solid #eee;
    // box-shadow: rgba(84, 84, 84, 0.1) 0 2px 4px;
  `,
  header: (theme: any) => css`
    text-align: center;
    padding: 1em;
    padding-bottom: 2.5em;
    position: relative;
    & h4 {
      font-size: 0.85em;
      margin: 0;
      margin-top: 0.5em;
      font-weight: 600;
      color: var(--ifm-color-secondary-darkest);
    }
  `,
  price: (theme: any, compact: boolean) => css`
    font-size: 2.${compact ? '1' : '3'}em;
    // color: var(--ifm-color-secondary-darkest);
    font-weight: 600;
    div {
      margin-bottom: 0.5em;
    }
    margin-top: 0.4em;
    margin-bottom: 0.5em;
    line-height: 1;
  `,
  features: (theme: any) => css`
    text-align: center;
    background: var(--ifm-color-secondary);
    padding: 2em 0 1em;
    border-radius: 0.25em;
    & div {
      padding: 1em;
      font-size: 0.95em;
    }
  `,
  button: css`
    border: none;
    border-radius: 0 0 2px 2px;
    font-size: 1em;
    font-weight: 600;
  `,
  featuresItem: css`
    padding: 2em 1em;
    font-weight: 600;
  `,
}

export default PricingPlans
