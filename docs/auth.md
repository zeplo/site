---
id: auth
title: Authentication
sidebar_label: Authentication
slug: /auth
---

You will need to provide your API token with every request. You can [obtain your API token from the console](/settings/tokens) (once you've [signed up](/signup)). 

You can provide the API token as a `?_token` query parameter OR as a header `X-Zeplo-Token`. You should keep this token secret at all times, and refresh it if it becomes compromised.