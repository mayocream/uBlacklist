"use strict";(self.webpackChunkublacklist_website=self.webpackChunkublacklist_website||[]).push([[8],{5318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3879:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(5773),r=a(808),i=(a(7378),a(5318)),l=["components"],o={title:"Advanced Features",sidebar_position:2},s=void 0,p={unversionedId:"advanced-features",id:"advanced-features",title:"Advanced Features",description:"Rules",source:"@site/docs/advanced-features.md",sourceDirName:".",slug:"/advanced-features",permalink:"/ublacklist/docs/advanced-features",draft:!1,editUrl:"https://github.com/iorate/ublacklist/edit/master/website/docs/advanced-features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Advanced Features",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/ublacklist/docs/getting-started"}},d={},u=[{value:"Rules",id:"rules",level:2},{value:"Match patterns",id:"match-patterns",level:3},{value:"Regular expressions",id:"regular-expressions",level:3},{value:"Regular expressions for page titles",id:"regular-expressions-for-page-titles",level:3},{value:"Unblock rules",id:"unblock-rules",level:3},{value:"Highlighting rules",id:"highlighting-rules",level:3},{value:"Comments",id:"comments",level:3},{value:"Other search engines",id:"other-search-engines",level:2},{value:"Bing",id:"bing",level:3},{value:"DuckDuckGo",id:"duckduckgo",level:3},{value:"Ecosia",id:"ecosia",level:3},{value:"Qwant",id:"qwant",level:3},{value:"Startpage.com",id:"startpagecom",level:3},{value:"Yahoo! JAPAN",id:"yahoo-japan",level:3},{value:"Yandex",id:"yandex",level:3},{value:"Sync",id:"sync",level:2},{value:"Google Drive",id:"google-drive",level:3},{value:"Dropbox",id:"dropbox",level:3},{value:"Subscription",id:"subscription",level:2},{value:"Publish a subscription",id:"publish-a-subscription",level:3}],c={toc:u};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("p",null,'You can edit rules to block sites in the options page, as well as in the "Block this site" dialog.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rule editor",src:a(5787).Z,width:"840",height:"692"})),(0,i.kt)("p",null,"You can write rules by ",(0,i.kt)("a",{parentName:"p",href:"#match-patterns"},"match patterns")," or ",(0,i.kt)("a",{parentName:"p",href:"#regular-expressions"},"regular expressions"),"."),(0,i.kt)("h3",{id:"match-patterns"},"Match patterns"),(0,i.kt)("p",null,"Match patterns are URLs including wildcards. You can see the details in ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"},"MDN web docs"),"."),(0,i.kt)("p",null,"Here are examples of ",(0,i.kt)("strong",{parentName:"p"},"valid")," match patterns."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,i.kt)("th",{parentName:"tr",align:null},"Example matches"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*://example.com/*"),(0,i.kt)("br",null),(0,i.kt)("br",null),"(URLs hosted at ",(0,i.kt)("inlineCode",{parentName:"td"},"example.com"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://example.com/"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"https://example.com/hoge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*://*.example.net/*"),(0,i.kt)("br",null),(0,i.kt)("br",null),"(URLs hosted at ",(0,i.kt)("inlineCode",{parentName:"td"},"example.net")," or its subdomain)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://example.net/"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"https://foo.example.net/hoge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*://example.org/hoge/*"),(0,i.kt)("br",null),(0,i.kt)("br",null),"(URLs hosted at ",(0,i.kt)("inlineCode",{parentName:"td"},"example.org")," and whose path starts with ",(0,i.kt)("inlineCode",{parentName:"td"},"/hoge/"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://example.org/hoge/fuga.html"))))),(0,i.kt)("p",null,"Here are examples of ",(0,i.kt)("strong",{parentName:"p"},"invalid")," match patterns."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Invalid pattern"),(0,i.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*://www.qinterest.*/")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*")," is not at the start. Use ",(0,i.kt)("a",{parentName:"td",href:"#regular-expressions"},"regular expressions")," instead.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<all_urls>")),(0,i.kt)("td",{parentName:"tr",align:null},"Not supported.")))),(0,i.kt)("h3",{id:"regular-expressions"},"Regular expressions"),(0,i.kt)("p",null,"You can write more flexible rules by ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expressions"),"."),(0,i.kt)("p",null,"Note that regular expression rules shall be regular expression ",(0,i.kt)("strong",{parentName:"p"},"literals")," in JavaScript, surrounded by ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/example\\.(net|org)/"),")."),(0,i.kt)("p",null,"Here are examples of ",(0,i.kt)("strong",{parentName:"p"},"valid")," regular expressions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Regular expression"),(0,i.kt)("th",{parentName:"tr",align:null},"Example matches"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/^https:\\/\\/www\\.qinterest\\./"),(0,i.kt)("br",null),(0,i.kt)("br",null),"(URLs starting with ",(0,i.kt)("inlineCode",{parentName:"td"},"https://www.qinterest."),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://www.qinterest.com/"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"https://www.qinterest.jp/hoge"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/^https?:\\/\\/([^/.]+\\.)*?xn--/"),(0,i.kt)("br",null),(0,i.kt)("br",null),"(URLs including internationalized domain names)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://\u4f8b.\u30c6\u30b9\u30c8/"))))),(0,i.kt)("p",null,"Here are examples of ",(0,i.kt)("strong",{parentName:"p"},"invalid")," regular expressions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Invalid regular expressions"),(0,i.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"^https?:\\/\\/example\\.com\\/")),(0,i.kt)("td",{parentName:"tr",align:null},"Not surrounded by ",(0,i.kt)("inlineCode",{parentName:"td"},"/"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/^https?://example\\.com//")),(0,i.kt)("td",{parentName:"tr",align:null},"Inner ",(0,i.kt)("inlineCode",{parentName:"td"},"/")," are not escaped.")))),(0,i.kt)("h3",{id:"regular-expressions-for-page-titles"},"Regular expressions for page titles"),(0,i.kt)("p",null,"To block sites with specific titles, use regular expressions preceded by ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"title/example domain/i"),' blocks sites which titles include "example domain" in a case-insensitive manner.'),(0,i.kt)("h3",{id:"unblock-rules"},"Unblock rules"),(0,i.kt)("p",null,"Match patterns or regular expressions preceded by ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," mean that the specified sites are not blocked."),(0,i.kt)("p",null,"They can be used to unblock sites that are blocked by ",(0,i.kt)("a",{parentName:"p",href:"#subscription"},"subscriptions"),". For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"http://example.com/")," is blocked by a subscription, you can unblock it by ",(0,i.kt)("inlineCode",{parentName:"p"},"@*://example.com/*"),"."),(0,i.kt)("h3",{id:"highlighting-rules"},"Highlighting rules"),(0,i.kt)("p",null,"Match patterns or regular expressions preceded by ",(0,i.kt)("inlineCode",{parentName:"p"},"@N")," (N=1,2,3,...) mean that the specified sites are highlighted."),(0,i.kt)("p",null,"For example, you can highlight GitHub by ",(0,i.kt)("inlineCode",{parentName:"p"},"@1*://github.com/*"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"highlight GitHub",src:a(6453).Z,width:"840",height:"480"})),(0,i.kt)("p",null,"By default, only ",(0,i.kt)("inlineCode",{parentName:"p"},"@1"),' (blue) is available. To change or add highlighting colors, see the "Appearance" section in the options page.'),(0,i.kt)("h3",{id:"comments"},"Comments"),(0,i.kt)("p",null,"Comments begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),". Although any line that cannot be interpreted as a rule is effectively a comment, a ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," comment is better in two ways."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"#")," comments are guaranteed to be comments even if new syntax is introduced in the future."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"#")," comments can be placed after rules.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Block pages which URLs are hosted at example.com or its subdomain\n*://*.example.com/*\n\n/example\\.(net|org)/ # Block pages which URLs contain example.net or example.org\n")),(0,i.kt)("h2",{id:"other-search-engines"},"Other search engines"),(0,i.kt)("p",null,"This extension supports ",(0,i.kt)("a",{parentName:"p",href:"#bing"},"Bing"),", ",(0,i.kt)("a",{parentName:"p",href:"#duckduckgo"},"DuckDuckGo"),", ",(0,i.kt)("a",{parentName:"p",href:"#ecosia"},"Ecosia")," (partially), ",(0,i.kt)("a",{parentName:"p",href:"#qwant"},"Qwant"),", ",(0,i.kt)("a",{parentName:"p",href:"#startpagecom"},"Startpage.com"),", ",(0,i.kt)("a",{parentName:"p",href:"#yahoo-japan"},"Yahoo! JAPAN")," (partially) and ",(0,i.kt)("a",{parentName:"p",href:"#yandex"},"Yandex")," (partially). This feature is disabled by default and can be enabled in the options page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"other search engines",src:a(3367).Z,width:"840",height:"420"})),(0,i.kt)("h3",{id:"bing"},"Bing"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bing",src:a(6332).Z,width:"840",height:"500"})),(0,i.kt)("h3",{id:"duckduckgo"},"DuckDuckGo"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"duckduckgo",src:a(1512).Z,width:"840",height:"420"})),(0,i.kt)("h3",{id:"ecosia"},"Ecosia"),(0,i.kt)("p",null,'For now, search scopes other than "Web" (e.g. "Images" and "Videos") are not supported.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ecosia",src:a(7013).Z,width:"840",height:"500"})),(0,i.kt)("h3",{id:"qwant"},"Qwant"),(0,i.kt)("p",null,'"Videos" search will only work if you disable qwant custom links by clicking on "Always read on Qwant.com".'),(0,i.kt)("p",null,"With the lite version of Qwant, the extension only work with web search not news, images, videos as the link used a proxy."),(0,i.kt)("h3",{id:"startpagecom"},"Startpage.com"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"startpage",src:a(1963).Z,width:"840",height:"500"})),(0,i.kt)("h3",{id:"yahoo-japan"},"Yahoo! JAPAN"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"yahoo-japan",src:a(4401).Z,width:"2230",height:"987"})),(0,i.kt)("h3",{id:"yandex"},"Yandex"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"yandex",src:a(9652).Z,width:"1277",height:"629"})),(0,i.kt)("h2",{id:"sync"},"Sync"),(0,i.kt)("p",null,"You can synchronize rulesets among devices using Google Drive or Dropbox."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For technical reasons, sync is not available in Firefox for Android."))),(0,i.kt)("p",null,'To turn on sync, click the "Turn on sync" button in the options page and select a cloud.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"turn on sync",src:a(3960).Z,width:"840",height:"500"})),(0,i.kt)("p",null,"Follow the instructions on the dialog to authenticate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"authenticate",src:a(4265).Z,width:"840",height:"600"})),(0,i.kt)("p",null,"Once authentication succeeds, your ruleset will be regularly synchronized with the selected cloud."),(0,i.kt)("h3",{id:"google-drive"},"Google Drive"),(0,i.kt)("p",null,"If you use Firefox or its derivative, you will be required to permit access to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://www.googleapis.com"),"."),(0,i.kt)("p",null,"The ruleset is saved in the application data folder on your Google Drive. It is hidden from you, although you can delete it in the settings page of Google Drive."),(0,i.kt)("h3",{id:"dropbox"},"Dropbox"),(0,i.kt)("p",null,"The ruleset is saved in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Apps/uBlacklist/")," folder on your Dropbox. The folder name may be different depending on your language."),(0,i.kt)("h2",{id:"subscription"},"Subscription"),(0,i.kt)("p",null,"You can subscribe to public rulesets."),(0,i.kt)("p",null,'To add a subscription, click the "Add subscription" button and enter the name and URL. You will be required to permit access to the origin of the URL.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"add subscription",src:a(6800).Z,width:"840",height:"480"})),(0,i.kt)("p",null,"You can show, update or remove a subscription."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"manage subscription",src:a(6269).Z,width:"840",height:"480"})),(0,i.kt)("h3",{id:"publish-a-subscription"},"Publish a subscription"),(0,i.kt)("p",null,"To publish a ruleset as a subscription, place a ruleset file encoded in UTF-8 on a suitable HTTP(S) server, and publish the URL."),(0,i.kt)("p",null,"It is a good idea to host your subscription on GitHub. Make sure that you publish the ",(0,i.kt)("strong",{parentName:"p"},"raw")," URL (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/iorate/ublacklist-example-subscription/master/uBlacklist.txt"},"https://raw.githubusercontent.com/iorate/ublacklist-example-subscription/master/uBlacklist.txt"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"raw url",src:a(6345).Z,width:"840",height:"400"})))}m.isMDXComponent=!0},6332:function(e,t,a){t.Z=a.p+"assets/images/bing-6189bb0d95c701f289b3d0ad12e233e3.png"},1512:function(e,t,a){t.Z=a.p+"assets/images/duckduckgo-a4a6ec74c9f53caf5e4e42039e7d2b72.png"},7013:function(e,t,a){t.Z=a.p+"assets/images/ecosia-209fd307ebdb36855a758098f1b7d675.png"},6453:function(e,t,a){t.Z=a.p+"assets/images/highlight-59f6b6de12cce6ab491fedcf495cf1a4.png"},3367:function(e,t,a){t.Z=a.p+"assets/images/other-search-engines-1-cdda1a219d8845db300c14f6c83712c4.png"},5787:function(e,t,a){t.Z=a.p+"assets/images/rules-1-d3d371ce9e1f408d82eaa3dcb5803231.png"},1963:function(e,t,a){t.Z=a.p+"assets/images/startpage-0787173feec50ebcde5d46193505c22d.png"},6800:function(e,t,a){t.Z=a.p+"assets/images/subscription-1-82885e6afffb080cc2b32a2080e18263.png"},6269:function(e,t,a){t.Z=a.p+"assets/images/subscription-2-ed1cd9c9408204d0f9c0213b362b5d56.png"},6345:function(e,t,a){t.Z=a.p+"assets/images/subscription-3-82ea441ac6a3ea38e20dff1d5650b881.png"},3960:function(e,t,a){t.Z=a.p+"assets/images/sync-1-f402431e921dc19245398403d191dd26.png"},4265:function(e,t,a){t.Z=a.p+"assets/images/sync-2-74d5a77c3465fc782c884a7e54da6f0d.png"},4401:function(e,t,a){t.Z=a.p+"assets/images/yahoo-japan-aed025b86050424298a08a0e53ce6259.png"},9652:function(e,t,a){t.Z=a.p+"assets/images/yandex-e40f04cbd3155f63543caa1b93e086cf.png"}}]);