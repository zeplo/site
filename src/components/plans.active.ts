import plans from './plans'

export interface WebPlan {
  color: string
  subtitle: string
  promotedFeatures: string[]
  nextStep?: string
  plan: any
}

const pricing: WebPlan[] = [{
  color: '#00A8B5',
  subtitle: 'Free forever',
  nextStep: 'Get Started',
  promotedFeatures: [
    '2K requests included',
    '$12/1 million extra requests',
    '1 member included',
    '7 day log retention',
    '1MB request limit',
    'Email support',
    'Cloud only',
  ],
  plan: plans.developer,
}, {
  color: '#F3AE4B',
  subtitle: 'Pro developers with scale',
  nextStep: 'Start 14 Day Trial',
  promotedFeatures: [
    '1M requests included',
    '$10/1 million extra requests',
    '3 members included',
    '30 day log retention',
    '15MB request limit',
    'Priority email support',
    'Cloud only',
  ],
  plan: plans['pro-2020'],
}, {
  color: '#54a2e0',
  subtitle: 'Tailored to your business',
  nextStep: 'Contact Sales',
  promotedFeatures: [
    '10M requests included',
    '$8/1 million extra requests',
    '5 members included',
    'Custom log retention',
    'Custom request limit',
    'Custom support and SLA',
    'Cloud or on-premise',
  ],
  plan: plans['business-2020'],
}]

export default pricing
