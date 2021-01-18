import { BillingPlan } from '@ralley/types/billing'

const plans: { [key: string]: BillingPlan } = {
  developer: {
    id: 'developer',
    name: 'Developer',
    type: 'selfserve',
    rank: 0,
    price: 0,
    items: {
      base: {
        type: 'fixed',
        price: 0,
      },
      requests: {
        type: 'metered',
        priceId: 'price_1GzmGPEx9r9EKFKctIgKpwPG',
        testPriceId: 'price_1H0FOTEx9r9EKFKcP1F3oYOv',
        included: 2000,
        price: 0.000012,
        roundup: 1000000,
      },
      users: {
        type: 'metered',
        priceId: 'price_1H2QCBEx9r9EKFKcrt2X1kZJ',
        testPriceId: 'price_1H0F7sEx9r9EKFKclkCvw9Ex',
        included: 1,
        price: 15,
      },
      logs: {
        type: 'fixed',
        limit: 7,
      },
    },
  },
  'pro-2020': {
    id: 'pro-2020',
    name: 'Pro',
    type: 'selfserve',
    trial: 14,
    rank: 50,
    price: 39,
    items: {
      base: {
        type: 'fixed',
        priceId: 'price_1GzmHtEx9r9EKFKcZovh7lcW',
        testPriceId: 'price_1H0FB6Ex9r9EKFKcCmEfhvf5',
        price: 39,
      },
      requests: {
        type: 'metered',
        priceId: 'price_1GzqAwEx9r9EKFKcLgvJiqKf',
        testPriceId: 'price_1H0FB6Ex9r9EKFKcCmEfhvf5',
        included: 10000000,
        price: 0.00001, // $10
        roundup: 1000000,
      },
      users: {
        type: 'metered',
        priceId: 'price_1H2Q9uEx9r9EKFKc8KYO0B3J',
        testPriceId: 'price_1H0FA5Ex9r9EKFKcp69FZet4',
        included: 1,
        price: 15,
      },
      logs: {
        type: 'fixed',
        limit: 30,
      },
    },
  },
  'business-2020': {
    id: 'business-2020',
    name: 'Business',
    type: 'sales',
    rank: 100,
    price: 1500,
    trial: 14,
    items: {
      base: {
        type: 'fixed',
        price: 39,
      },
      users: {
        type: 'metered',
        included: 1,
        price: 29,
      },
    },
  },
}

export default plans
