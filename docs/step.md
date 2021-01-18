---
id: step
title: Step
sidebar_label: Step
slug: /step
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::caution
This feature is currently in **ALPHA** preview, and must be enabled on your account before use. Please contact hi@zeplo.io if you would like to use this feature.
:::

The `/step` API allows you to send a series of requests in sequence or parallel, and use the response from one request job as the input for another.

For example, the following diagram shows some steps that you might want to complete after receiving an order:

<img
  style={{ background: '#f1f1f1', maxWidth: '400px', borderRadius: 6 }}
  src={require('./img/steps-flow.png').default}
  alt="Steps Flow"
/>

### Creating the stepped flow

In order to achieve this, we must first assign a step name to each of the steps using the `_step` parameter (or `X-Zeplo-Step`). Each step can then specify which other steps it depends on, by specifying a list of step names using the `_requires=A,B` parameter (or `X-Zeplo-Requires`).

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
  ]
}>
<TabItem value="js">

```js
import axios from 'axios'

axios.post('zeplo.to/step', [{
  url: 'https://url.com/a?_step=A',
}, {
  url: 'https://url.com/b?_step=B&_requires=A',
}, {
  url: 'https://url.com/c?_step=C&_requires=A',
}, {
  url: 'https://url.com/d?_step=D&_requires=B',
}, {
  url: 'https://url.com/e?_step=E&_requires=C,D',
}, {
  url: 'https://url.com/f?_requires=E',
}])
```

</TabItem>
</Tabs>

:::note
You can only send `body` values as JSON or string values for step requests.
:::

### Using the output from required steps

If you add a `_requires` parameter (or `X-Zeplo-Requires` header), then additional headers will be automatically added that provide the response output from each of the required steps. These headers are formatted as a JSON string and are passed in the `X-Zeplo-Step-<step_name>` header property.

For example, if you have a step with the URL `https://url.com/e?_step=E&_requires=C,D`, then you would receive the following two additional headers:

```bash
X-Zeplo-Step-C: '{ id: "1ab9797f-db05-48b8-c861-b649115734d9-iow", response: { body: { y: 2 }, headers: { ... }, ... } },'
X-Zeplo-Step-D: '{ id: "30e771cc-c816-413d-c1bb-407234b46ee3-iow", response: { body: { x: 1 }, headers: { ... }, ... } }'
```

These headers will be formatted as a JSON string, and you will need to parse the JSON string to obtain the values. The `response` value will be formatted in the same way as returned from the [request API](/docs/api#request-object).

:::note
You will only receive a value for `response.body` if the response value is a string or JSON. Otherwise `body` will be set to `null`. You can still access the raw body content using the request `id` and the [request API](/docs/api).
:::

