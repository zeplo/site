---
id: queue
title: Queue
sidebar_label: Queue
slug: /queue
---

To a queue a request, simply prefix a request with `zeplo.to/` and we'll queue and forward the request with the exact same method/body/headers/query. 

```
zeplo.to/your_url.com?_token=<insert_token>
```


In addition, to help with the processing of the queued request, we add the following additional headers:

 * `X-Zeplo-Start` - this denotes the time the request started (this is particularly useful for [scheduled](/docs#schedule) requests)
 * `X-Zeplo-Id` - this is the ID of the queued request job
