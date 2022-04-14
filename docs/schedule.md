---
id: schedule
title: Schedule
sidebar_label: Schedule
slug: /schedule
---


You can schedule a request to repeat at a specified interval. There are two ways of creating a scheduled request:

 * Interval - runs every specified interval (e.g. every 10 minutes)
 * CRON - runs at given cron schedule (e.g. 5 14 * * *`)

Only one schedule is supported per request.

### Interval

You can add an interval, which will run the request at every given interval using the `_interval` query parameter (or `X-Zeplo-Interval` header). The interval must be provided in seconds. For example, `300` would be 5 minutes. 

```
zeplo.to/your_url.com?_interval=300
```

### CRON

You can also create a schedule using the [CRON syntax](https://crontab.guru/) and the `_cron` query parameter (or `X-Zeplo-Cron` header). For example, a CRON value of `5 14 * * *` would result in a request being made every day at 2.05pm.

```
zeplo.to/your_url.com?_cron=5|14|*|*|*
zeplo.to/your_url.com?_cron=5 14 * * *
```

Either space (` `) or pipe (`|`) can be used as the separator.

You can also provide a `_timezone` query parameter (or `X-Zeplo-Timezone` header) in [`tz` format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for the CRON schedule. Your CRON schedule will then be applied in that timezone (this takes into account daylight saving clock changes, so when timezone is provided a non-standard interval may occur when the clocks change).


### Additional Request Headers

When a scheduled request is sent to the URL, the following additional request header is added:

  * `X-Zeplo-Start` - this allows you to ensure any time based logic is executed based on the correct interval

When you combine the [delay](/docs/delay) (or delay until) with a schedule, then the schedule will not commence until the specified delay has passed. Subsequent scheduled requests will not have any delay applied and will be run at the given interval.

When you combine [retry](/docs/retry) with a schedule, then the retry parameters will be passed to each subsequent scheduled request. 
