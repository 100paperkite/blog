(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3165],{1640:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return r(9863)}])},5828:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),s=r(1664),a=r(2826),l=r(9583),c=function(){return(0,n.jsxs)("nav",{className:"flex justify-between sticky top-0 z-50 space-x-4 py-2 font-medium mx-2 md:mx-6 my-1 md:my-2 p-2",children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{className:"text-neutral-800 hover:text-neutral-600 text-lg md:text-xl",children:a.TN})}),(0,n.jsx)("div",{className:"flex gap-x-3",children:(0,n.jsx)(s.default,{href:"/tags",passHref:!0,legacyBehavior:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(l.YxP,{className:"hover:cursor-pointer w-6 h-6 text-neutral-700"})})})})]})},u=r(4578),i=function(){return(0,n.jsxs)("footer",{className:"font-title py-4 sm:py-8 flex flex-col items-center text-neutral-600",children:[(0,n.jsx)("div",{className:"flex flex-row my-2",children:(0,n.jsxs)("div",{className:"flex items-center py-1",children:[(0,n.jsx)("a",{className:"m-2 ",href:a.bW,children:(0,n.jsx)(u.MG0,{className:"w-7 h-7"})}),(0,n.jsx)("a",{className:"m-2",href:"mailto:".concat(a.Do),children:(0,n.jsx)(u.cee,{className:"w-7 h-7"})})]})}),(0,n.jsxs)("span",{className:"text-sm text-neutral-500",children:[a.v," \xa9 ","".concat((new Date).getFullYear())]})]})},o=function(e){var t=e.children;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)(c,{}),(0,n.jsx)("main",{className:"max-w-screen-md px-4 w-full mx-auto flex-grow font-body",children:t}),(0,n.jsx)(i,{})]})}},1074:function(e,t,r){"use strict";var n=r(5893),s=r(3659),a=r(5828),l=r(6756);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}t.Z=function(e){var t=e.mdxSource,r=i(e,["mdxSource"]);return(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"px-2 md:px-4 py-2 md:py-4",children:[(0,n.jsx)(l.Fb,u({},r)),(0,n.jsx)("article",{className:"max-w-none prose prose-neutral sm:prose-h1:text-[2.5rem] sm:prose-h2:text-[2rem] sm:prose-h3:text-2xl sm:prose-h4:text-xl",children:(0,n.jsx)(s.R,u({},t,{components:{Image:l.Ee,Callout:l.UW,pre:l.dn}}))}),(0,n.jsx)(l.Hr,{})]})})}},8584:function(e,t,r){"use strict";var n=r(5893),s=r(1163);t.Z=function(e){var t=e.name,r=e.selected,a=void 0!==r&&r,l=(0,s.useRouter)();return(0,n.jsx)("button",{onClick:function(){return l.push({pathname:"/tags/",query:{q:t}})},className:a?"text-neutral-800 font-bold":"text-neutral-500 font-bold",children:"#"+t})}},6756:function(e,t,r){"use strict";r.d(t,{UW:function(){return h},Zb:function(){return i},dn:function(){return f},Fb:function(){return c},Ee:function(){return x},Hr:function(){return b}});var n=r(5893),s=r(2826),a=r(8584),l=function(e){return new Date(e).toLocaleDateString(s.local,{year:"numeric",month:"long",day:"numeric"})},c=function(e){var t=e.title,r=e.uploaded,s=e.updated,c=e.tags,u=l(r),i=l(s);return(0,n.jsxs)("div",{className:"border-b border-1 mb-4 sm:mb-6 border-dashed border-neutral-300",children:[(0,n.jsx)("div",{className:"flex items-center my-1 md:my-2 gap-x-2",children:c.map((function(e,t){return(0,n.jsx)(a.Z,{className:"mr-2",name:e},t)}))}),(0,n.jsx)("h1",{className:"text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 mt-6 sm:mt-10",children:t}),(0,n.jsxs)("div",{className:"flex py-2 md:py-3 pl-1 text-neutral-500",children:[(0,n.jsxs)("small",{className:"",children:[u,"\uc5d0 \uc791\uc131"]}),u<i&&(0,n.jsxs)("small",{className:"",children:[" \xb7 ",i,"\uc5d0 \ubcc0\uacbd\ub428"]})]})]})},u=r(1664),i=function(e){var t=e.title,r=e.uploaded,s=e.tags,l=e.slug,c=new Date(r).toISOString().substring(0,10).replaceAll("-","."),i=0!==(null!==s&&void 0!==s?s:[]).length;return(0,n.jsxs)("article",{className:"my-5 rounded-2xl md:rounded-2xl",children:[(0,n.jsx)("h3",{className:"font-medium md:text-lg mb-auto pb-1 text-neutral-800 hover:text-neutral-500 hover:duration-150",children:(0,n.jsx)(u.default,{href:"/posts/".concat(l),children:(0,n.jsx)("a",{children:t})})}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("span",{className:"text-xs mr-2 mb-auto text-neutral-500",children:c}),i&&(0,n.jsx)("span",{className:"text-xs flex flex-wrap gap-x-2 my-auto",children:s.map((function(e){return(0,n.jsx)(a.Z,{name:e,className:"text-neutral-500 font-bold"},e)}))})]})]})},o=r(1801),m=r(6671),f=function(e){var t=e.children.props,r=t.className,s=t.children,a=null===r||void 0===r?void 0:r.split("-")[1];return(0,n.jsx)(o.Z,{language:a,style:m.A1,children:s.trim()})},d=r(5675),x=function(e){var t=e.src,r=e.alt,s=e.width,a=e.height,l=e.sourceHref,c=e.source;return(0,n.jsxs)("div",{className:"text-center pt-1 sm:pt-2 md:pt-3",children:[(0,n.jsx)(d.default,{className:"max-w-full h-auto",src:t,alt:r,width:s||700,height:a,unoptimized:!0}),(0,n.jsx)("a",{className:" text-xs underline text-neutral-500",href:l,children:c||l})]})},p=r(3750),h=function(e){var t=e.children.props.children;return(0,n.jsxs)("div",{className:"bg-rose-50 p-2 md:p-3 rounded-lg flex space-x-3",children:[(0,n.jsx)(p.sud,{className:"w-7 h-7 text-rose-800"}),(0,n.jsx)("div",{className:"",children:t})]})},b=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("hr",{className:"border-t border-neutral-300 my-8 sm:my-16"}),(0,n.jsx)("section",{ref:function(e){if(e){var t=document.createElement("script");t.setAttribute("src","https://utteranc.es/client.js"),t.setAttribute("repo","100paperkite/100paperkite.github.io"),t.setAttribute("issue-term","title"),t.setAttribute("label","\ud83d\udcac"),t.setAttribute("theme","github-light"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("async","true"),e.replaceChildren(t)}}})]})};r(1074)},7106:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),s=r(7294),a=r(6756);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=e.postInfos;return(0,n.jsx)(n.Fragment,{children:t.sort((function(e,t){return e.uploaded<t.uploaded?1:-1})).map((function(e,t){return(0,s.createElement)(a.Zb,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},e,{key:t}))}))})}},9863:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return m},default:function(){return f}});var n=r(5893),s=r(7294),a=r(1163),l=r(5828),c=r(8584),u=r(7106);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=!0;function f(e){var t=e.postInfos,r=(0,s.useState)(),i=r[0],m=r[1],f=(0,a.useRouter)(),d=f.query.q,x=(0,s.useMemo)((function(){return o(new Set(t.map((function(e){return e.tags})).flat())).sort()}),[t]);return(0,s.useEffect)((function(){f.isReady&&m(d)}),[d,f.isReady]),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("div",{className:"flex flex-wrap gap-x-3 gap-y-1 my-3",children:x.map((function(e){return(0,n.jsx)(c.Z,{name:e,selected:e==i},e)}))}),(0,n.jsx)(u.Z,{postInfos:t.filter((function(e){return!i||e.tags.includes(i)}))})]})}}},function(e){e.O(0,[5445,2013,2876,5386,9774,2888,179],(function(){return t=1640,e(e.s=t);var t}));var t=e.O();_N_E=t}]);