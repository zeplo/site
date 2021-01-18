---
id: environments
title: Environments
sidebar_label: Environments
slug: /environments
---


You often want to run your queue in a development or test environment. You can add a `_env` query parameter (or `X-Zeplo-Env` header) to your requests to specify which environment the request is running in. This will then appear in the console, and can be used to filter requests.


### Running in development

The easiest way to run Zeplo in your development environment is to simply remove the `zeplo.to/` prefix based on an environment variable. Below is an example of how you might setup a utility function to handle this.

```ts
import axios from 'axios'

const { RALLEY_TOKEN, NODE_ENV } = process.env

export default function queue (url: string, data: any) {
  return axios(url, {
    method: 'POST',
    data,
    params: { 
      _token: RALLEY_TOKEN,
      _env: NODE_ENV,
    },
    baseURL: NODE_ENV === 'production' ? `https://zeplo.to/` : '',
  })
}
```

This approach has the advantage that in development, errors are thrown directly which can lead to easier debugging 🙌.


### Running in production

The easiest way to run Zeplo in production is to expose the endpoint you want to call to the internet. Simply [create a secret token](https://zelark.github.io/nano-id-cc/) which can then passed along with every request.

```js
import express from 'express'

const { SECRET_TOKEN } = process.env

const app = express()

app.get('/my-service', (req) => {
  if (req.query.secret !== SECRET_TOKEN) {
    throw new Error('Not allowed!')
  }
  ...
})
```

You would then call this service with:

```
zeplo.to/my-url.com/my-service?secret=s123&_token=<zeplo_token>
```

**Note:** all Zeplo parameters are stripped from the URL before being relayed, so you cannot check for presence of `?_token`.


### On premise (running Zeplo behind your firewall)

[Contact sales](https://ralley.typeform.com/to/cLjadaIA) for running on-premise solution.
