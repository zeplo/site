---
id: bulk
title: Bulk
sidebar_label: Bulk
slug: /bulk
---

The `/bulk` API allows you to send multiple request jobs to Zeplo at once in a single transaction. Once the request is accepted, it's guaranteed that all your jobs have been queued in Zeplo. All jobs are run in parallel, if you need to run jobs sequentially use [step requests](/docs/step) instead.

Send a `POST` request to the `zeplo.to/bulk?_token=<your_token>` API with a JSON body array of requests you'd like to send (and add `Content-Type: "application/json"` header).

Only the `url` property is required. If not provided, `method` will default to `POST`. If you provide an object/array as the body property, then a `Content-Type` header of `application/json` will be set automatically, otherwise `Content-Type` will be `text/plain`.

```
[{
  url: "anyurl.com",
  method: "POST",
  headers: {},
  params: {
    _delay: 3000,
  },
  body: 'Body of request', # string or json
}, {
  ...
}]
```

The response will be an array of IDs:

```
[{
  id: 1
}, {
  ...
}]
```

:::note
You can only send `body` values as JSON or string values for bulk requests.
:::
