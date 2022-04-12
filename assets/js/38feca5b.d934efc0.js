"use strict";(self.webpackChunk_zeplo_docs=self.webpackChunk_zeplo_docs||[]).push([[6509],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"schedule",title:"Schedule",sidebar_label:"Schedule",slug:"/schedule"},u=void 0,c={unversionedId:"schedule",id:"schedule",title:"Schedule",description:"You can schedule a request to repeat at a specified interval. There are two ways of creating a scheduled request:",source:"@site/docs/schedule.md",sourceDirName:".",slug:"/schedule",permalink:"/docs/schedule",editUrl:"https://github.com/zeplo/site/edit/master/docs/schedule.md",tags:[],version:"current",frontMatter:{id:"schedule",title:"Schedule",sidebar_label:"Schedule",slug:"/schedule"},sidebar:"someSidebar",previous:{title:"Delay",permalink:"/docs/delay"},next:{title:"Bulk",permalink:"/docs/bulk"}},s={},d=[{value:"Interval",id:"interval",level:3},{value:"CRON",id:"cron",level:3},{value:"Additional Request Headers",id:"additional-request-headers",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can schedule a request to repeat at a specified interval. There are two ways of creating a scheduled request:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Interval - runs every specified interval (e.g. every 10 minutes)"),(0,l.kt)("li",{parentName:"ul"},"CRON - runs at given cron schedule (e.g. 5 14 * * *`)")),(0,l.kt)("p",null,"Only one schedule is supported per request."),(0,l.kt)("h3",{id:"interval"},"Interval"),(0,l.kt)("p",null,"You can add an interval, which will run the request at every given interval using the ",(0,l.kt)("inlineCode",{parentName:"p"},"_interval")," query parameter (or ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Zeplo-Interval")," header). The interval must be provided in seconds. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"300")," would be 5 minutes. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"zeplo.to/your_url.com?_interval=300\n")),(0,l.kt)("h3",{id:"cron"},"CRON"),(0,l.kt)("p",null,"You can also create a schedule using the ",(0,l.kt)("a",{parentName:"p",href:"https://crontab.guru/"},"CRON syntax")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"_cron")," query parameter (or ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Zeplo-Cron")," header). For example, a CRON value of ",(0,l.kt)("inlineCode",{parentName:"p"},"5 14 * * *")," would result in a request being made every day at 2.05pm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"zeplo.to/your_url.com?_cron=5|14|*|*|*\nzeplo.to/your_url.com?_cron=5 14 * * *\n")),(0,l.kt)("p",null,"Either space (",(0,l.kt)("inlineCode",{parentName:"p"}," "),") or pipe (",(0,l.kt)("inlineCode",{parentName:"p"},"|"),") can be used as the separator."),(0,l.kt)("p",null,"You can also provide a ",(0,l.kt)("inlineCode",{parentName:"p"},"_timezone")," query parameter (or ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Zeplo-Timezone")," header) in ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},(0,l.kt)("inlineCode",{parentName:"a"},"tz")," format")," for the CRON schedule. Your CRON schedule will then be applied in that timezone (this takes into account daylight saving clock changes, so when timezone is provided a non-standard interval may occur when the clocks change)."),(0,l.kt)("h3",{id:"additional-request-headers"},"Additional Request Headers"),(0,l.kt)("p",null,"When a scheduled request is sent to the URL, the following additional request header is added:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Zeplo-Start")," - this allows you to ensure any time based logic is executed based on the correct interval")),(0,l.kt)("p",null,"When you combine the ",(0,l.kt)("a",{parentName:"p",href:"/docs/delay"},"delay")," (or delay until) with a schedule, then the schedule will not commence until the specified delay has passed. Subsequent scheduled requests will not have any delay applied and will be run at the given interval."),(0,l.kt)("p",null,"When you combine retry ",(0,l.kt)("a",{parentName:"p",href:"/docs/retry"},"retry")," with a schedule, then the retry parameters will be passed to each subsequent scheduled request."))}h.isMDXComponent=!0}}]);