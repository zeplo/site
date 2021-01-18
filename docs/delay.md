---
id: delay
title: Delay
sidebar_label: Delay
slug: /delay
---

You can delay a request (or if scheduled the start of the schedule) by providing the `_delay` parameter (or `X-Zeplo-Delay` header) and a number of seconds to delay by. For example, you may want to send an e-mail 50 minutes after a new user signs up, or delete an accounts data after 30 days.

A `_delay=600` would be a delay of 10 minutes.

```
zeplo.to/your_url.com?_delay=600
```


### Delay Until

Alternatively, you can specify `_delay_until` query parameter  (or `X-Zeplo-Delay-Until` header) to set the [unix timestamp](https://www.unixtimestamp.com) of the time to run the request.

```
zeplo.to/your_url.com?_delay_until=1592998014
```