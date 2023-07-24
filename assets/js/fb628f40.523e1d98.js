"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[5886],{4483:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(11),o=(t(2735),t(9530));const s={sidebar_position:1,title:"Code Contributions"},a="Code Contributions",i={unversionedId:"contributing/code",id:"contributing/code",title:"Code Contributions",description:"The WordPress Playground project uses GitHub for managing code and tracking issues. The main repository is at//github.com/WordPress/wordpress-playground.",source:"@site/docs/13-contributing/02-code.md",sourceDirName:"13-contributing",slug:"/contributing/code",permalink:"/wordpress-playground/contributing/code",draft:!1,editUrl:"https://github.com/WordPress/wordpress-playground/tree/trunk/packages/docs/site/docs/13-contributing/02-code.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Code Contributions"},sidebar:"tutorialSidebar",previous:{title:"Start Contributing",permalink:"/wordpress-playground/contributing/index"},next:{title:"Coding standards",permalink:"/wordpress-playground/contributing/coding-standards"}},u={},p=[],l={toc:p},c="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-contributions"},"Code Contributions"),(0,o.kt)("p",null,"The WordPress Playground project uses GitHub for managing code and tracking issues. The main repository is at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WordPress/wordpress-playground"},"https://github.com/WordPress/wordpress-playground"),"."),(0,o.kt)("p",null,"To contribute Pull Requests, you'll need to fork the Playground repository and clone it to your local machine. You can then create a branch, make changes, and submit a pull request."),(0,o.kt)("p",null,"Once you have a fork, you can clone it as follows \u2013 just replace ",(0,o.kt)("inlineCode",{parentName:"p"},"WordPress/wordpress-playground")," with your GitHub username and repository name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b trunk --single-branch --depth 1 git@github.com:WordPress/wordpress-playground.git\ncd wordpress-playground\nnvm use # You'll need Node 16 or later\nnpm install\nnpm run dev\n")),(0,o.kt)("p",null,"That's it, WordPress Playground is now running on your machine and you're ready to contribute!"),(0,o.kt)("p",null,"Browse ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wordpress/wordpress-playground/issues"},"the issues list")," to find issues to work on. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wordpress/wordpress-playground/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+First+Issue%22"},"good first issue")," labels are good starting points."),(0,o.kt)("p",null,"Be sure to also review the following resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wordpress-playground/contributing/coding-standards"},"Coding Standards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wordpress-playground/contributing/packages-and-projects"},"Packages and projects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/WordPress/wordpress-playground/issues/472"},"Vision and Philosophy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/WordPress/wordpress-playground/issues/525"},"Roadmap"))))}d.isMDXComponent=!0},9530:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(2735);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=o,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||s;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=g;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);