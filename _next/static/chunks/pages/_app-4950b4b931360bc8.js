(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{2962:function(e,t,o){"use strict";o.d(t,{dX:function(){return g},lX:function(){return l},PB:function(){return h}});var a=o(9008),r=o(7294);const n={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},i=(e,t=[],{defaultWidth:o,defaultHeight:a}={})=>t.reduce(((t,n,i)=>(t.push(r.createElement("meta",{key:`og:${e}:0${i}`,property:`og:${e}`,content:n.url})),n.alt&&t.push(r.createElement("meta",{key:`og:${e}:alt0${i}`,property:`og:${e}:alt`,content:n.alt})),n.secureUrl&&t.push(r.createElement("meta",{key:`og:${e}:secure_url0${i}`,property:`og:${e}:secure_url`,content:n.secureUrl.toString()})),n.type&&t.push(r.createElement("meta",{key:`og:${e}:type0${i}`,property:`og:${e}:type`,content:n.type.toString()})),n.width?t.push(r.createElement("meta",{key:`og:${e}:width0${i}`,property:`og:${e}:width`,content:n.width.toString()})):o&&t.push(r.createElement("meta",{key:`og:${e}:width0${i}`,property:`og:${e}:width`,content:o.toString()})),n.height?t.push(r.createElement("meta",{key:`og:${e}:height${i}`,property:`og:${e}:height`,content:n.height.toString()})):a&&t.push(r.createElement("meta",{key:`og:${e}:height${i}`,property:`og:${e}:height`,content:a.toString()})),t)),[]),p=e=>{const t=[];e.titleTemplate&&(n.templateTitle=e.titleTemplate);let o="";e.title?(o=e.title,n.templateTitle&&(o=n.templateTitle.replace(/%s/g,(()=>o)))):e.defaultTitle&&(o=e.defaultTitle),o&&t.push(r.createElement("title",{key:"title"},o));const a=e.noindex||n.noindex||e.dangerouslySetAllPagesToNoIndex,p=e.nofollow||n.nofollow||e.dangerouslySetAllPagesToNoFollow;let l="";if(e.robotsProps){const{nosnippet:t,maxSnippet:o,maxImagePreview:a,maxVideoPreview:r,noarchive:n,noimageindex:i,notranslate:p,unavailableAfter:h}=e.robotsProps;l=`${t?",nosnippet":""}${o?`,max-snippet:${o}`:""}${a?`,max-image-preview:${a}`:""}${n?",noarchive":""}${h?`,unavailable_after:${h}`:""}${i?",noimageindex":""}${r?`,max-video-preview:${r}`:""}${p?",notranslate":""}`}if(a||p?(e.dangerouslySetAllPagesToNoIndex&&(n.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(n.nofollow=!0),t.push(r.createElement("meta",{key:"robots",name:"robots",content:`${a?"noindex":"index"},${p?"nofollow":"follow"}${l}`}))):t.push(r.createElement("meta",{key:"robots",name:"robots",content:`index,follow${l}`})),e.description&&t.push(r.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(r.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((e=>{t.push(r.createElement("link",{rel:"alternate",key:`languageAlternate-${e.hrefLang}`,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(r.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(r.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(r.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(r.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(e.openGraph?.title||o)&&t.push(r.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph?.title||o})),(e.openGraph?.description||e.description)&&t.push(r.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph?.description||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(r.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){const o=e.openGraph.type.toLowerCase();t.push(r.createElement("meta",{key:"og:type",property:"og:type",content:o})),"profile"===o&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(r.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(r.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(r.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(r.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===o&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(((e,o)=>{t.push(r.createElement("meta",{key:`book:author:0${o}`,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(r.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(r.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(((e,o)=>{t.push(r.createElement("meta",{key:`book:tag:0${o}`,property:"book:tag",content:e}))}))):"article"===o&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(r.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(r.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(r.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(((e,o)=>{t.push(r.createElement("meta",{key:`article:author:0${o}`,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(r.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(((e,o)=>{t.push(r.createElement("meta",{key:`article:tag:0${o}`,property:"article:tag",content:e}))}))):"video.movie"!==o&&"video.episode"!==o&&"video.tv_show"!==o&&"video.other"!==o||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(((e,o)=>{e.profile&&t.push(r.createElement("meta",{key:`video:actor:0${o}`,property:"video:actor",content:e.profile})),e.role&&t.push(r.createElement("meta",{key:`video:actor:role:0${o}`,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(((e,o)=>{t.push(r.createElement("meta",{key:`video:director:0${o}`,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(((e,o)=>{t.push(r.createElement("meta",{key:`video:writer:0${o}`,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(r.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(r.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(((e,o)=>{t.push(r.createElement("meta",{key:`video:tag:0${o}`,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(r.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(n.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(n.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&t.push(...i("image",e.openGraph.images,{defaultWidth:n.defaultOpenGraphImageWidth,defaultHeight:n.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(n.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(n.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&t.push(...i("video",e.openGraph.videos,{defaultWidth:n.defaultOpenGraphVideoWidth,defaultHeight:n.defaultOpenGraphVideoHeight})),e.openGraph.locale&&t.push(r.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(r.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(r.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((e=>{t.push(r.createElement("meta",{key:`meta:${e.keyOverride??e.name??e.property??e.httpEquiv}`,...e}))})),e.additionalLinkTags?.length&&e.additionalLinkTags.forEach((e=>{t.push(r.createElement("link",{key:`link${e.keyOverride??e.href}${e.rel}`,...e}))})),t};class l extends r.Component{render(){const{title:e,titleTemplate:t,defaultTitle:o,dangerouslySetAllPagesToNoIndex:n=!1,dangerouslySetAllPagesToNoFollow:i=!1,description:l,canonical:h,facebook:c,openGraph:s,additionalMetaTags:d,twitter:u,defaultOpenGraphImageWidth:m,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:f,defaultOpenGraphVideoHeight:y,mobileAlternate:G,languageAlternates:k,additionalLinkTags:b,robotsProps:v}=this.props;return r.createElement(a.default,null,p({title:e,titleTemplate:t,defaultTitle:o,dangerouslySetAllPagesToNoIndex:n,dangerouslySetAllPagesToNoFollow:i,description:l,canonical:h,facebook:c,openGraph:s,additionalMetaTags:d,twitter:u,defaultOpenGraphImageWidth:m,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:f,defaultOpenGraphVideoHeight:y,mobileAlternate:G,languageAlternates:k,additionalLinkTags:b,robotsProps:v}))}}class h extends r.Component{render(){const{title:e,noindex:t=!1,nofollow:o,robotsProps:n,description:i,canonical:l,openGraph:h,facebook:c,twitter:s,additionalMetaTags:d,titleTemplate:u,mobileAlternate:m,languageAlternates:g,additionalLinkTags:f}=this.props;return r.createElement(a.default,null,p({title:e,noindex:t,nofollow:o,robotsProps:n,description:i,canonical:l,facebook:c,openGraph:h,additionalMetaTags:d,twitter:s,titleTemplate:u,mobileAlternate:m,languageAlternates:g,additionalLinkTags:f}))}}const c=(e,t)=>{const{id:o}=t,a={...o?{"@id":t.id}:{},...t};return delete a.id,{__html:JSON.stringify({"@context":"https://schema.org","@type":e,...a})}};function s({type:e="Thing",keyOverride:t,scriptKey:o,scriptId:n,...i}){return r.createElement(a.default,null,r.createElement("script",{type:"application/ld+json",id:n,dangerouslySetInnerHTML:c(e,{...i}),key:`jsonld-${o}${t?`-${t}`:""}`}))}function d(e){return Array.isArray(e)?e.map((e=>({"@type":"Person",name:e}))):e?{"@type":"Person",name:e}:void 0}function u(e){if(e)return{"@type":"ImageObject",url:e}}function m(e,t){if(e)return{"@type":"Organization",name:e,logo:u(t)}}function g({type:e="Article",keyOverride:t,url:o,title:a,images:n,datePublished:i,dateModified:p,authorName:l,publisherName:h,publisherLogo:c,description:u}){const g={datePublished:i,description:u,mainEntityOfPage:{"@type":"WebPage","@id":o},headline:a,image:n,dateModified:p||i,author:d(l),publisher:m(h,c)};return r.createElement(s,{type:e,keyOverride:t,...g,scriptKey:"article"})}},1780:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(6957)}])},6957:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}});var a=o(5893),r=(o(906),o(7294)),n=(o(4298),o(1163)),i=o(2962),p=o(2826),l=p.jI;function h(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),a.forEach((function(t){h(e,t,o[t])}))}return e}var s=function(e){var t=e.Component,o=e.pageProps,h=(0,n.useRouter)();return(0,r.useEffect)((function(){var e=function(e){!function(e){window.gtag("config",l,{page_path:e})}(e)};return h.events.on("routeChangeComplete",e),function(){h.events.off("routeChangeComplete",e)}}),[h.events]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.lX,{openGraph:{type:"website",locale:p.SP,url:p.HQ,site_name:p.TN}}),(0,a.jsx)(t,c({},o))]})}},906:function(){},9008:function(e,t,o){e.exports=o(5443)},1163:function(e,t,o){e.exports=o(387)},4298:function(e,t,o){o(699)},2826:function(e){"use strict";e.exports=JSON.parse('{"TN":"Baek Jiyeon","WL":"\ubc31\uc9c0\uc5f0\uc758 \uac1c\ubc1c \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.","v":"Baek Jiyeon","SP":"ko-KR","Do":"100.paperkite@gmail.com","bW":"https://github.com/100paperkite","HQ":"https://100paperkite.github.io","jI":"G-FFSLQ27YMJ"}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(1780),t(387)}));var o=e.O();_N_E=o}]);