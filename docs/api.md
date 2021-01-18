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


