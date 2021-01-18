---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /getting-started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

It takes less than 5 minutes to get started with Zeplo.

  1. [Sign up](https://console.zeplo.io/signup) to Zeplo - it's free for the first 2,000 requests

  2. Obtain your [API token](/docs/auth)

  3. Send a HTTPS request by prefixing it with `zeplo.to/` and adding your [API token](/docs/auth) as a query parameter `?_token=<token>`.


Try running the following command in your terminal/browser, and then visit the [console](https://console.zeplo.io) to see logged request!

<Tabs
  defaultValue="bash"
  values={[
    { label: 'Bash', value: 'bash', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
<TabItem value="bash">

```bash
curl -X POST zeplo.to/postman-echo.com/post?_token=<insert_your_api_token>
```

</TabItem>
<TabItem value="js">

```js
import request from 'axios'

request({
  method: 'POST',
  url: 'zeplo.to/postman-echo.com/post',
  params: {
    _token: "<insert_your_api_token>",
  }
})
```

</TabItem>
</Tabs>
