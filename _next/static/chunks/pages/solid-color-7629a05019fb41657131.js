(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{9542:function(e,r,t){"use strict";var n=t(5893),o=t(9906);r.Z=function(e){var r=e.color;return(0,n.jsx)(o.Z,{style:{backgroundColor:r},"data-test-id":"display-solid-color"})}},9906:function(e,r,t){"use strict";var n=t(5893),o=t(6156),c=t(7375);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=(0,t(7294).forwardRef)((function(e,r){var t=e.style,o=(0,c.Z)(e,["style"]);return(0,n.jsx)("div",l({ref:r,style:l(l({},t),{},{width:"100%",height:"100%"})},o))}));r.Z=a},6858:function(e,r,t){"use strict";var n=t(5893),o=t(6156),c=t(7375);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=(0,t(7294).forwardRef)((function(e,r){var t=e.style,o=(0,c.Z)(e,["style"]);return(0,n.jsx)("div",l({ref:r,style:l(l({},t),{},{width:"100vw",height:"100vh"})},o))}));r.Z=a},6071:function(e,r,t){"use strict";var n=t(3038),o=t(862);r.default=void 0;var c=o(t(7294)),i=t(1689),l=t(2441),a=t(5749),u={};function s(e,r,t,n){if(e&&(0,i.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,t=(0,l.useRouter)(),o=t&&t.asPath||"/",f=c.default.useMemo((function(){var r=(0,i.resolveHref)(o,e.href,!0),t=n(r,2),c=t[0],l=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):l||c}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,j=e.shallow,O=e.scroll,b=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var y=c.Children.only(h),g=y&&"object"===typeof y&&y.ref,w=(0,a.useIntersection)({rootMargin:"200px"}),x=n(w,2),m=x[0],P=x[1],E=c.default.useCallback((function(e){m(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,m]);(0,c.useEffect)((function(){var e=P&&r&&(0,i.isLocalURL)(d),n="undefined"!==typeof b?b:t&&t.locale,o=u[d+"%"+p+(n?"%"+n:"")];e&&!o&&s(t,d,p,{locale:n})}),[p,d,P,b,r,t]);var C={ref:E,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,c,l,a){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=n.indexOf("#")<0),r[o?"replace":"push"](t,n,{shallow:c,locale:a,scroll:l}))}(e,t,d,p,v,j,O,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var L="undefined"!==typeof b?b:t&&t.locale,_=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);C.href=_||(0,i.addBasePath)((0,i.addLocale)(p,L,t&&t.defaultLocale))}return c.default.cloneElement(y,C)};r.default=f},5749:function(e,r,t){"use strict";var n=t(3038);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,a=(0,o.useRef)(),u=(0,o.useState)(!1),s=n(u,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=l.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,c=n.observer,i=n.elements;return i.set(e,r),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),c=t(8391),i="undefined"!==typeof IntersectionObserver;var l=new Map},6225:function(e,r,t){"use strict";t.r(r),t.d(r,{DEFAULT_COLOR:function(){return h},PARAM_COLOR:function(){return p},default:function(){return v}});var n=t(5893),o=t(5988),c=t(9008),i=t(244),l=t(6156),a=t(9542),u=t(6858);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,l.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(e){return(0,n.jsx)(u.Z,{children:(0,n.jsx)(a.Z,f({},e))})},p="color",h="#000000",v=function(){var e=(0,i.U)(),r=String(e[p]||"")||h;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.default,{children:(0,n.jsx)("title",{className:"jsx-523904812",children:"Solid Color | Mood Light"})}),(0,n.jsx)(o.default,{id:"523904812",children:["*{overscroll-behavior:none;}"]}),(0,n.jsx)(d,{color:r})]})}},3564:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(7294),c=t(9008),i=t(1664),l=t(9542),a=t(6225);r.default=function(){var e="/solid-color/full",r=(0,o.useState)(a.DEFAULT_COLOR),t=r[0],u=r[1],s={color:t};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.default,{children:(0,n.jsx)("title",{children:"Solid Color | Mood Light"})}),(0,n.jsxs)("form",{action:e,method:"get",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"SolidColorIndex-color",children:"Color"}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{id:"SolidColorIndex-color",type:"color",name:a.PARAM_COLOR,value:t,onChange:function(e){u(e.currentTarget.value)}})]}),(0,n.jsx)("div",{style:{width:"20em",height:"20em"},children:(0,n.jsx)(l.Z,{color:t})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:{pathname:e,query:s},children:(0,n.jsx)("a",{target:"_self",children:"Open in current tab"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:{pathname:e,query:s},children:(0,n.jsx)("a",{target:"_blank",children:"Open in new tab"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:{pathname:e,query:s},children:(0,n.jsx)("a",{onClick:function(e){e.preventDefault(),window.open(e.currentTarget.href,null,"width=800,height=500")},children:"Open in new window"})})})]})]})]})}},244:function(e,r,t){"use strict";t.d(r,{U:function(){return i}});var n=t(7673),o=t(1163),c=t(7294),i=function(){var e=(0,o.useRouter)(),r=(0,c.useState)(e.query),t=r[0],i=r[1];return(0,c.useEffect)((function(){var e=(0,n.J)(location.search.replace(/^\?/,""));i(e)}),["object"]),t}},9785:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solid-color",function(){return t(3564)}])},1664:function(e,r,t){e.exports=t(6071)}},function(e){e.O(0,[118,774,888,179],(function(){return r=9785,e(e.s=r);var r}));var r=e.O();_N_E=r}]);