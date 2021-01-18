---
id: api
title: API
sidebar_label: API
slug: /api
---

You can read the status of a job by using the `/requests/<id>` endpoint (you'll need to include your `_token`). The ID is returned in the response when you add a job to the queue.

  * `/requests [GET]` - list requests all requests. Filters can be provided - e.g. `?filters={ field: "value" }`
  
  * `/requests/<id> [GET]` - get a single request log

  * `/requests/<id>/inactive [PATCH]` - pause a request, only allowed if job is in `pending` or `active` state
  
  * `/requests/<id>/active [PATCH]` - unpause a request, only allowed if job is in `inactive`

  * `/requests/<id>/request.body [GET]` - read the request body
  
  * `/requests/<id>/response.body [GET]` - read the response to the proxied request


### Request Object

The following is an example output from the `/request/<id>` API endpoint:

```js
{
  "id": "49b5fa70-32bb-493f-9f53-140da97a0a85-iow",
  "workspace": "zeplo",
  "key": "default",
  "trace": "713e3428-40c5-4b29-cbe5-e0d591de830a-iow",
  "status": "SUCCESS",
  "source": "SCHEDULE",
  "start": 1610986500,
  "end": 1610986500.407,
  "duration": 0.407,
  "env": "production",
  "request": {
    "method": "POST",
    "url": "https://api.zeplo.io/sources/sync?x=1",
    "headers": {
      "accept": "application/json, text/plain, */*",
      "user-agent": "axios/0.19.2",
      "content-type": "application/json;charset=utf-8",
      "content-length": "51",
      "x-cloud-trace-context": "745a56f71b3ea481a923fb322a75628d/171973945206328;o=1"
    },
    "scheme": "https",
    "host": "api.zeplo.io",
    "path": "/sources/sync",
    "params": {
      "x": "1"
    },
    "hasbody": true,
    "start": 1610841409.119
  },
  "response": {
    "status": 204,
    "statustext": "No Content",
    "headers": {
      "date": "Mon, 18 Jan 2021 16:15:00 GMT",
      "etag": "W/\"a-bAsFyilMr4Ra1hIU5PyoyFRunpI\"",
      "server": "Google Frontend",
      "connection": "close",
      "content-type": "text/html",
      "content-length": "0",
      "x-cloud-trace-context": "745a56f71b3ea481a923fb322a75628d/12639389939611967624;o=1, 745a56f71b3ea481a923fb322a75628d;o=1",
      "access-control-allow-origin": "*"
    },
    "hasbody": true,
    "body": { "x": 1 } // only JSON or string values will appear
  },
  "attempts": 1,
  "timezone": "UTC",
  "received": 1610985600.018
}
```