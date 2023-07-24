"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9567],{3411:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(11),a=(t(2735),t(9530));const o={title:"FAQ",slug:"/faq"},i="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"Wait, where is PHP running?",source:"@site/docs/16-faq.md",sourceDirName:".",slug:"/faq",permalink:"/wordpress-playground/faq",draft:!1,editUrl:"https://github.com/WordPress/wordpress-playground/tree/trunk/packages/docs/site/docs/16-faq.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"FAQ",slug:"/faq"},sidebar:"tutorialSidebar",previous:{title:"Links and Resources",permalink:"/wordpress-playground/links-and-resources"}},l={},p=[{value:"Wait, where is PHP running?",id:"wait-where-is-php-running",level:2},{value:"Is WordPress Playground available in another language?",id:"is-wordpress-playground-available-in-another-language",level:2},{value:"Will wp-cli be supported?",id:"will-wp-cli-be-supported",level:2}],u={toc:p},c="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"wait-where-is-php-running"},"Wait, where is PHP running?"),(0,a.kt)("p",null,"In your browser! It is mindblowing, isn't it? There's a new technology called WebAssembly that makes it possible. You can learn more in ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/wordpress-playground/"},"this article on web.dev"),"."),(0,a.kt)("h2",{id:"is-wordpress-playground-available-in-another-language"},"Is WordPress Playground available in another language?"),(0,a.kt)("p",null,"Yes! Although it requires some work at the moment. You need to tell Playground to download and install the translation files and one way to do it is using ",(0,a.kt)("a",{parentName:"p",href:"https://wordpress.github.io/wordpress-playground/pages/blueprints-getting-started.html"},"the Blueprints API"),". There is no step-by-step tutorial yet, but you can learn by reading the source of ",(0,a.kt)("a",{parentName:"p",href:"https://translate.wordpress.org/projects/wp-plugins/friends/dev/en-gb/default/playground/"},"Playground+Translations plugin")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/akirk/wp-glotpress-playground/blob/main/index.php"},"(GitHub link)"),"."),(0,a.kt)("h2",{id:"will-wp-cli-be-supported"},"Will wp-cli be supported?"),(0,a.kt)("p",null,"Yes! Some commands already work if you include ",(0,a.kt)("inlineCode",{parentName:"p"},"wp-cli.phar")," in the executed PHP code, and support for others is work in progress. The documentation will be progressively updated to reflect the progress."))}d.isMDXComponent=!0},9530:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(2735);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,f=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);