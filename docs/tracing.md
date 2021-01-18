---
id: tracing
title: Tracing
sidebar_label: Tracing
slug: /tracing
---

You can add a trace ID to any request using `?_trace` query parameter (or `X-Zeplo-Trace` header), and that request will be linked as a child of the request with the trace ID you provided. This does not effect how your request will be queued, but simply helps connect the two items for discoverability in the Zeplo console.

```
zeplo.to/your_url.com?_trace=<id_obtained_from_another_request>
```
