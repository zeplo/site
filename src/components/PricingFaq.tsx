import React from 'react'
import { css } from '@emotion/react'
import Link from '@docusaurus/Link'
import { Row, Col } from 'react-flexbox-grid'

export default function PricingFaq () {
  return (
    <Row>
      <PricingFaqItem title='Do you offer discounts at scale?'>
        Yes, we offer discounts and tailored packages for larger use cases. Contact us at&nbsp;
        <a href='mailto:hi@zeplo.io'>hi@ralley.io</a>.
      </PricingFaqItem>
      <PricingFaqItem title='What counts as a request?'>
        Any request you push into the queue (the same as a job in a tradational queue), and any request made as a result of a&nbsp;
        <Link to='/docs#schedule'>scheduled request</Link> job.
      </PricingFaqItem>
      <PricingFaqItem title='Do you offer a trial?'>
        You can try our developer plan, which includes 2K free requests every month for free forever. If you need more requests before going live, send us an e-mail.
      </PricingFaqItem>
      <PricingFaqItem title='What payment do you accept?'>
        We accept payments via Visa, MasterCard, American Express, Diners, and JCB. We do not accept PayPal or Purchase Orders.
      </PricingFaqItem>
      <PricingFaqItem title='How much are additional users?'>
        Additional users are charged at $15 per user on the Developer and Pro plans, and $29 on the Business plan.
      </PricingFaqItem>
      <PricingFaqItem title='Can I cap my spending?'>
        Yes, you can put a limit on the number of requests that can be processed per month, which will limit the total monthly charge.
      </PricingFaqItem>
    </Row>
  )
}

export interface PricingFaqProps {
  title: string
  children: React.ReactNode
}

function PricingFaqItem ({ title, children }: PricingFaqProps) {
  return (
    <Col xs={6} css={styles.item}>
      <h4>{title}</h4>
      <p>{children}</p>
    </Col>
  )
}

const styles = {
  item: css`
    font-size: 1.1em;
    margin-bottom: 3em;
    padding: 0 1em;
    p {
      color: #777;
    }
  `,
}
