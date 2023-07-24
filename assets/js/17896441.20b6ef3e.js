"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[7918,5182],{4498:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(2735),l=a(421),r=a(8647);function s(){const{metadata:e,frontMatter:t,assets:a}=(0,r.k)();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var o=a(45),i=a(601),c=a(2335);function d(){const{metadata:e}=(0,r.k)();return n.createElement(c.default,{previous:e.previous,next:e.next})}var m=a(1303),u=a(7253),E=a(4094),h=a(937),g=a(1497),p=a(8316),v=a(6590);const f={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(E.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(E.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=f[e.versionMetadata.banner];return n.createElement(t,e)}function k(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(E.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(u.default,{to:a,onClick:l},n.createElement(E.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function U(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,m.default)(),{pluginId:r}=(0,h.useActivePlugin)({failfast:!0}),{savePreferredVersionName:s}=(0,p.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:c}=(0,h.useDocVersionSuggestions)(r),d=i??(u=c).docs.find((e=>e.id===u.mainDocId));var u;return n.createElement("div",{className:(0,o.Z)(t,g.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(k,{versionLabel:c.label,to:d.path,onClick:()=>s(c.name)})))}function _(e){let{className:t}=e;const a=(0,v.E)();return a.banner?n.createElement(U,{className:t,versionMetadata:a}):null}var L=a(7778);function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(E.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function w(e){let{lastUpdatedBy:t}=e;return n.createElement(E.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:g.k.common.lastUpdated},n.createElement(E.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(T,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(w,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var y=a(11);const Z={iconEdit:"iconEdit_ayDX"};function M(e){let{className:t,...a}=e;return n.createElement("svg",(0,y.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(Z.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function A(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:g.k.common.editThisPage},n.createElement(M,null),n.createElement(E.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const C={tag:"tag_vGdz",tagRegular:"tagRegular_nwg7",tagWithCount:"tagWithCount_k49s"};function I(e){let{permalink:t,label:a,count:l}=e;return n.createElement(u.default,{href:t,className:(0,o.Z)(C.tag,l?C.tagWithCount:C.tagRegular)},a,l&&n.createElement("span",null,l))}const V={tags:"tags_pnIT",tag:"tag_qqdV"};function B(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(E.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,o.Z)(V.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:V.tag},n.createElement(I,{label:t,permalink:a}))}))))}const D={lastUpdated:"lastUpdated_qB_V"};function x(e){return n.createElement("div",{className:(0,o.Z)(g.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function S(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,o.Z)(g.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(A,{editUrl:t})),n.createElement("div",{className:(0,o.Z)("col",D.lastUpdated)},(a||l)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function q(){const{metadata:e}=(0,r.k)(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:s,tags:i}=e,c=i.length>0,d=!!(t||a||s);return c||d?n.createElement("footer",{className:(0,o.Z)(g.k.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(x,{tags:i}),d&&n.createElement(S,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:l})):null}var F=a(3916);const H={tocMobile:"tocMobile_qs2S"};function R(){const{toc:e,frontMatter:t}=(0,r.k)();return n.createElement(F.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,o.Z)(g.k.docs.docTocMobile,H.tocMobile)})}var P=a(185);function z(){const{toc:e,frontMatter:t}=(0,r.k)();return n.createElement(P.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var W=a(1142),G=a(4228);function J(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=(0,r.k)();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,o.Z)(g.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(W.default,{as:"h1"},a)),n.createElement(G.default,null,t))}var X=a(4235);const O={docItemContainer:"docItemContainer_JFP9",docItemCol:"docItemCol_Xiwq"};function $(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=(0,r.k)(),a=(0,i.i)(),l=e.hide_table_of_contents,s=!l&&t.length>0;return{hidden:l,mobile:s?n.createElement(R,null):void 0,desktop:!s||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(z,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,o.Z)("col",!a.hidden&&O.docItemCol)},n.createElement(_,null),n.createElement("div",{className:O.docItemContainer},n.createElement("article",null,n.createElement(X.default,null),n.createElement(L.default,null),a.mobile,n.createElement(J,null,t),n.createElement(q,null)),n.createElement(d,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function j(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(r.b,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(s,null),n.createElement($,null,n.createElement(a,null))))}},7503:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(2735);const l={React:n,...n,css:{textarea:{width:"100%",height:"8lh",display:"block"}},HTML:e=>{let{children:t}=e;return n.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}}}}]);