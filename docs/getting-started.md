---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /getting-started
---

It takes less than 5 minutes to get started with Zeplo.

  1. [Sign up](/signup) to Zeplo - it's free for the first 2,000 requests

  2. Obtain your [API token](#api-token)

  3. Send a HTTPS request by prefixing it with `zeplo.to/` and adding your [API token](#api-token) as a query parameter `?_token=<token>`.


Try running the following command in your terminal/browser, and then visit the [console](/w) to see logged request!

```
curl -X POST zeplo.to/postman-echo.com/post?_token=<insert_your_api_token>
```
