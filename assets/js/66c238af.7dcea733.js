"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1073],{776:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(2735),o=r(8349);const l={tableOfContentsInline:"tableOfContentsInline_moAP"};function s(e){let{toc:n,minHeadingLevel:r,maxHeadingLevel:s}=e;return t.createElement("div",{className:l.tableOfContentsInline},t.createElement(o.Z,{toc:n,minHeadingLevel:r,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null}))}},8349:(e,n,r)=>{r.d(n,{Z:()=>u});var t=r(11),o=r(2735),l=r(7585),s=r(2555),a=r(9712);function i(e){let{toc:n,className:r,linkClassName:t,isChild:l}=e;return n.length?o.createElement("ul",{className:l?void 0:r},n.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(i,{isChild:!0,toc:e.children,className:r,linkClassName:t}))))):null}const c=o.memo(i);function u(e){let{toc:n,className:r="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:p,maxHeadingLevel:f,...d}=e;const m=(0,l.L)(),g=p??m.tableOfContents.minHeadingLevel,h=f??m.tableOfContents.maxHeadingLevel,v=(0,s.b)({toc:n,minHeadingLevel:g,maxHeadingLevel:h}),y=(0,o.useMemo)((()=>{if(i&&u)return{linkClassName:i,linkActiveClassName:u,minHeadingLevel:g,maxHeadingLevel:h}}),[i,u,g,h]);return(0,a.S)(y),o.createElement(c,(0,t.Z)({toc:v,className:r,linkClassName:i},d))}},9712:(e,n,r)=>{r.d(n,{S:()=>i});var t=r(2735),o=r(7585);function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function s(e,n){let{anchorTopOffset:r}=n;const t=e.find((e=>l(e).top>=r));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function a(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function i(e){const n=(0,t.useRef)(void 0),r=a();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:a}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:r}=e;const t=[];for(let o=n;o<=r;o+=1)t.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),c=s(i,{anchorTopOffset:r.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}},2555:(e,n,r)=>{r.d(n,{a:()=>l,b:()=>a});var t=r(2735);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),r=Array(7).fill(-1);n.forEach(((e,n)=>{const t=r.slice(2,e.level);e.parentIndex=Math.max(...t),r[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:r,...o}=e;r>=0?n[r].children.push(o):t.push(o)})),t}function l(e){return(0,t.useMemo)((()=>o(e)),[e])}function s(e){let{toc:n,minHeadingLevel:r,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:r,maxHeadingLevel:t});return function(e){return e.level>=r&&e.level<=t}(e)?[{...e,children:n}]:n}))}function a(e){let{toc:n,minHeadingLevel:r,maxHeadingLevel:l}=e;return(0,t.useMemo)((()=>s({toc:o(n),minHeadingLevel:r,maxHeadingLevel:l})),[n,r,l])}},1127:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=r(11),o=(r(2735),r(9530)),l=r(776);const s={sidebar_position:2},a="Resources",i={unversionedId:"blueprints-api/resources",id:"blueprints-api/resources",title:"Resources",description:"Resource References allow you use external files in Blueprints",source:"@site/docs/09-blueprints-api/04-resources.md",sourceDirName:"09-blueprints-api",slug:"/blueprints-api/resources",permalink:"/wordpress-playground/blueprints-api/resources",draft:!1,editUrl:"https://github.com/WordPress/wordpress-playground/tree/trunk/packages/docs/site/docs/09-blueprints-api/04-resources.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Using Blueprints",permalink:"/wordpress-playground/blueprints-api/using-blueprints"},next:{title:"Steps",permalink:"/wordpress-playground/blueprints-api/steps"}},c={},u=[{value:"URLReference",id:"urlreference",level:3},{value:"CoreThemeReference",id:"corethemereference",level:3},{value:"CorePluginReference",id:"corepluginreference",level:3},{value:"VFSReference",id:"vfsreference",level:3},{value:"LiteralReference",id:"literalreference",level:3}],p={toc:u},f="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(f,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Resource References allow you use external files in Blueprints"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"installPlugin")," step in the example above, we reference the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://downloads.wordpress.org/plugins/friends.latest-stable.zip")," file by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress.org/plugins")," resource reference."),(0,o.kt)("p",null,"The following resource references are available:"),(0,o.kt)(l.Z,{toc:u,mdxType:"TOCInline"}),(0,o.kt)("h3",{id:"urlreference"},"URLReference"),(0,o.kt)("p",null,"The URLReference resource is used to reference files that are stored on a remote server. The URLReference resource is defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type URLReference = {\n    resource: 'url';\n    url: string;\n};\n")),(0,o.kt)("p",null,'To use the URLReference resource, you need to provide the URL of the file. For example, to reference a file named "index.html" that is stored on a remote server, you can create a URLReference as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resource": "url",\n    "url": "https://example.com/index.html"\n}\n')),(0,o.kt)("h3",{id:"corethemereference"},"CoreThemeReference"),(0,o.kt)("p",null,"The CoreThemeReference resource is used to reference WordPress core themes. The CoreThemeReference resource is defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type CoreThemeReference = {\n    resource: 'wordpress.org/themes';\n    slug: string;\n    version?: string;\n};\n")),(0,o.kt)("p",null,'To use the CoreThemeReference resource, you need to provide the slug of the theme. For example, to reference the "Twenty Twenty-One" theme, you can create a CoreThemeReference as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resource": "wordpress.org/themes",\n    "slug": "twentytwentyone"\n}\n')),(0,o.kt)("h3",{id:"corepluginreference"},"CorePluginReference"),(0,o.kt)("p",null,"The CorePluginReference resource is used to reference WordPress core plugins. The CorePluginReference resource is defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type CorePluginReference = {\n    resource: 'wordpress.org/plugins';\n    slug: string;\n    version?: string;\n};\n")),(0,o.kt)("p",null,'To use the CorePluginReference resource, you need to provide the slug of the plugin. For example, to reference the "Akismet" plugin, you can create a CorePluginReference as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resource": "wordpress.org/plugins",\n    "slug": "akismet"\n}\n')),(0,o.kt)("h3",{id:"vfsreference"},"VFSReference"),(0,o.kt)("p",null,"The VFSReference resource is used to reference files that are stored in a virtual file system (VFS). The VFS is a file system that is stored in memory and can be used to store files that are not part of the file system of the operating system. The VFSReference resource is defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type VFSReference = {\n    resource: 'vfs';\n    path: string;\n};\n")),(0,o.kt)("p",null,'To use the VFSReference resource, you need to provide the path to the file in the VFS. For example, to reference a file named "index.html" that is stored in the root of the VFS, you can create a VFSReference as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resource": "vfs",\n    "path": "/index.html"\n}\n')),(0,o.kt)("h3",{id:"literalreference"},"LiteralReference"),(0,o.kt)("p",null,"The LiteralReference resource is used to reference files that are stored as literals in the code. The LiteralReference resource is defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type LiteralReference = {\n    resource: 'literal';\n    name: string;\n    contents: string | Uint8Array;\n};\n")),(0,o.kt)("p",null,'To use the LiteralReference resource, you need to provide the name of the file and its contents. For example, to reference a file named "index.html" that contains the text "Hello, World!", you can create a LiteralReference as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resource": "literal",\n    "name": "index.html",\n    "contents": "Hello, World!"\n}\n')))}d.isMDXComponent=!0},9530:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(2735);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||l;return r?t.createElement(m,s(s({ref:n},u),{},{components:r})):t.createElement(m,s({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);