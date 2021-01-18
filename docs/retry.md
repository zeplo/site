---
id: retry
title: Retry
sidebar_label: Retry
slug: /retry
---


You can automatically retry requests that fail by adding the `_retry` query parameter or `X-Zeplo-Retry` header.

```
zeplo.to/your_url.com?_retry=3
```

### Retry Backoff

By default, retries will be attempted at a fixed interval of 1 second. You can specify how retries should be attempted by adding one of the following backoff approaches:

 * `immediate` - runs the retry requests immediately after the initial request
 * `exponential,<seconds>` - exponentially increases the backoff by `seconds^2`. E.g. if set to 2, the first it would be 1 (1^2), 4 (2^2), 9 (3^2) seconds... and so on.
 * `fixed,<seconds>` - interval remains constant

 For example:

 ```
zeplo.to/your_url.com?_retry=3|immediate
zeplo.to/your_url.com?_retry=3|fixed|1
zeplo.to/your_url.com?_retry=3|exponential|1
 ```

 With a retry of `3` a maximum of 4 calls will be made to your endpoint - 1 for the original request, and 3 retry requests.


### What is considered a failed attempt?

If we received a HTTP response status code greater than or equal to 400.