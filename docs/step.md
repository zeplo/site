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

It's often useful to run a series of requests in sequence or parallel, and use the response from one job as the input for another.

The following diagram shows an example of some steps that you might want to complete after receiving an order:

<img
  style={{ background: '#f1f1f1', maxWidth: '400px', borderRadius: 6 }}
  src={require('./img/steps-flow.png').default}
  alt="Steps Flow"
/>

In order to achieve this, we must first assign a `step` name to each of the steps in the flow. Each step must also specify which other steps it depends on by specifying a list of step names as `_requires` parameter (or `X-Zeplo-Requires`).

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
  ]
}>
<TabItem value="js">

```js
import request from 'axios'

request.post('step', [{
  step: 'A'
  url: 'https://url.com/a',
}, {
  step: 'B',
  url: 'https://url.com/b?_requires=A',
}, {
  step: 'C'
  url: 'https://url.com/c?_requires=A',
}, {
  step: 'D',
  url: 'https://url.com/d?_requires=B',
}, {
  step: 'E',
  url: 'https://url.com/e?_requires=D,C',
}, {
  step: 'F',
  requires: ['E'],
  url: 'https://url.com/f?_requires=E',
}])
```

</TabItem>
</Tabs>


### Passing input between steps

Each step is passed the a response from each of the steps that were marked as `_requires`. If you added `_requires=A,B` then you would receive a request with the following body.

```js
{
  'A': { id: "30e771cc-c816-413d-c1bb-407234b46ee3-iow", body: { x: 1 }, headers: { ... }, ... },
  'B': { id: "1ab9797f-db05-48b8-c861-b649115734d9-iow", body: { y: 2 }, headers: { ... }, ... },
}
```

:::note
You will only receive a value in the body if the response value is a string or JSON. Otherwise body will be set to `null`.
:::
