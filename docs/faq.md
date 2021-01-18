---
id: faq
title: FAQ
sidebar_label: FAQ
slug: /faq
---

### Why can't I access XYZ query parameter?

All Zeplo query parameters (e.g. `?_token`, `?_delay=300`, etc) are stripped from the request before it is relayed to your endpoint. Therefore, you should not try to access these parameters. If you need access to them, simply duplicate them without the `_` prefix and they will appear at your endpoint.


### How can I prevent conflict with Zeplo query parameters?

By default, Zeplo query parameters (e.g. `_delay`, `_cron`, etc) are stripped from the request before it is forwarded to your endpoint. In the unlikely case that you need to use one of these parameters in your own code, you can specify the following header `X-Zeplo-No-Conflict` to `1`. In this mode, you should use the headers (e.g. `X-Zeplo-Delay` instead of the query parameters) to set the required Zeplo parameters.


### What if `zeplo.to` is not allowed by our company firewall?

You can access our service using the alternative domain `zeploto.com`. Simply replace `zeplo.to` in the instructions above with this domain instead.

