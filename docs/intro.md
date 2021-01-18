---
id: intro
title: Intro
sidebar_label: Intro
slug: /
---

Hello 👋

Zeplo is an infinitely scalable managed message queue (queue as a service), which requires zero configuration. 

It works like any other queue, but instead of pushing jobs, ***you push requests***.

Simply prefix a request with `zeplo.to/` and we'll queue and forward the request with the exact same method/body/headers/query. 

No additional configuration for your endpoint, requests can be sent directly to your API as normal (sync) or via the Zeplo queue (async).


You can use Zeplo to:

 * [**retry**](/docs/retry) requests that error automatically or manually

 * [**schedule/cron**](/docs/schedule) requests at regular interval
 
 * [**delay**](/docs/delay) requests for a given time (e.g. send a request after 30 mins)

It works great in combination with serverless platforms like [Vercel (/Zeit)](https://vercel.com/). If you have any questions at all, feel free to contact us at [hi@zeplo.io](mailto:hi@zeplo.io).

