"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[3405],{4940:(e,t,n)=>{n.d(t,{Z:()=>r});n(6204);var s=n(541),a=n(3188);function r(e){let{children:t,fallback:n}=e;return(0,s.Z)()?(0,a.jsx)(a.Fragment,{children:t?.()}):n??null}},6281:(e,t,n)=>{n.d(t,{Z:()=>v});var s=n(6204),a=n(489),r=n(6223),i=n(7393),l=n(1210),o=n(667),c=n(5905),d=n(7392);function m(e){const{pathname:t}=(0,c.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_RYHo",sidebarItemTitle:"sidebarItemTitle_sRjx",sidebarItemList:"sidebarItemList_uMtB",sidebarItem:"sidebarItem_rygH",sidebarItemLink:"sidebarItemLink_EKgd",sidebarItemLinkActive:"sidebarItemLinkActive_hRXJ"};var h=n(3188);function g(e){let{sidebar:t}=e;const n=m(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.Z)(u.sidebarItemList,"clean-list"),children:n.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=n(7104);function p(e){let{sidebar:t}=e;const n=m(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(x.Zo,{component:p,props:e})}function f(e){let{sidebar:t}=e;const n=(0,i.i)();return t?.items.length?"mobile"===n?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function v(e){const{sidebar:t,toc:n,children:s,...i}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.Z,{...i,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(f,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),n&&(0,h.jsx)("div",{className:"col col--2",children:n})]})})})}},2331:(e,t,n)=>{n.d(t,{Z:()=>A});n(6204);var s=n(489),a=n(1516),r=n(6261),i=n(3188);function l(e){let{children:t,className:n}=e;const{frontMatter:s,assets:l,metadata:{description:o}}=(0,a.C)(),{withBaseUrl:c}=(0,r.C)(),d=l.image??s.image,m=s.keywords??[];return(0,i.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,i.jsx)("meta",{itemProp:"description",content:o}),d&&(0,i.jsx)("link",{itemProp:"image",href:c(d,{absolute:!0})}),m.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:m.join(",")}),t]})}var o=n(1210);const c={title:"title_cIQJ"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,a.C)(),{permalink:l,title:d}=n,m=r?"h1":"h2";return(0,i.jsx)(m,{className:(0,s.Z)(c.title,t),itemProp:"headline",children:r?d:(0,i.jsx)(o.Z,{itemProp:"url",to:l,children:d})})}var m=n(667),u=n(8413);const h={container:"container_PuMg"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.c)();return t=>{const n=Math.ceil(t);return e(n,(0,m.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function p(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,a.C)(),{date:r,formattedDate:l,readingTime:o}=n;return(0,i.jsxs)("div",{className:(0,s.Z)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(x,{date:r,formattedDate:l}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{}),(0,i.jsx)(g,{readingTime:o})]})]})}function f(e){return e.href?(0,i.jsx)(o.Z,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function v(e){let{author:t,className:n}=e;const{name:a,title:r,url:l,imageURL:o,email:c}=t,d=l||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,s.Z)("avatar margin-bottom--sm",n),children:[o&&(0,i.jsx)(f,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:a,itemProp:"image"})}),a&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(f,{href:d,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:a})})}),r&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const b={authorCol:"authorCol_q_iI",imageOnlyAuthorRow:"imageOnlyAuthorRow_les7",imageOnlyAuthorCol:"imageOnlyAuthorCol_uMKf"};function Z(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,a.C)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,s.Z)(!l&&"col col--6",l?b.imageOnlyAuthorCol:b.authorCol),children:(0,i.jsx)(v,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(d,{}),(0,i.jsx)(j,{}),(0,i.jsx)(Z,{})]})}var _=n(4277),P=n(8517);function k(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,a.C)();return(0,i.jsx)("div",{id:r?_.blogPostContainerID:void 0,className:(0,s.Z)("markdown",n),itemProp:"articleBody",children:(0,i.jsx)(P.Z,{children:t})})}var C=n(2303),T=n(4336);function y(){return(0,i.jsx)("b",{children:(0,i.jsx)(m.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function w(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(o.Z,{"aria-label":(0,m.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(y,{})})}const I={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_bikM"};function F(){const{metadata:e,isBlogPostPage:t}=(0,a.C)(),{tags:n,title:r,editUrl:l,hasTruncateMarker:o}=e,c=!t&&o,d=n.length>0;return d||c||l?(0,i.jsxs)("footer",{className:(0,s.Z)("row docusaurus-mt-lg",t&&I.blogPostFooterDetailsFull),children:[d&&(0,i.jsx)("div",{className:(0,s.Z)("col",{"col--9":c}),children:(0,i.jsx)(T.Z,{tags:n})}),t&&l&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(C.Z,{editUrl:l})}),c&&(0,i.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":d}),children:(0,i.jsx)(w,{blogPostTitle:r,to:e.permalink})})]}):null}function A(e){let{children:t,className:n}=e;const r=function(){const{isBlogPostPage:e}=(0,a.C)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,s.Z)(r,n),children:[(0,i.jsx)(N,{}),(0,i.jsx)(k,{children:t}),(0,i.jsx)(F,{})]})}},2303:(e,t,n)=>{n.d(t,{Z:()=>d});n(6204);var s=n(667),a=n(3651),r=n(1210),i=n(489);const l={iconEdit:"iconEdit_UohW"};var o=n(3188);function c(e){let{className:t,...n}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(l.iconEdit,t),"aria-hidden":"true",...n,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(r.Z,{to:t,className:a.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},1446:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(6204),a=n(5353),r=n(7348),i=n(3188);function l(e){return(0,i.jsx)("code",{...e})}var o=n(1210);var c=n(489),d=n(2439),m=n(541),u=n(6491);const h={details:"details_B4FW",isBrowser:"isBrowser_Cof9",collapsibleContent:"collapsibleContent_VYua"};function g(e){return!!e&&("SUMMARY"===e.tagName||g(e.parentElement))}function x(e,t){return!!e&&(e===t||x(e.parentElement,t))}function p(e){let{summary:t,children:n,...a}=e;(0,d.Z)().collectAnchor(a.id);const r=(0,m.Z)(),l=(0,s.useRef)(null),{collapsed:o,setCollapsed:p}=(0,u.u)({initialState:!a.open}),[j,f]=(0,s.useState)(a.open),v=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...a,ref:l,open:j,"data-collapsed":o,className:(0,c.Z)(h.details,r&&h.isBrowser,a.className),onMouseDown:e=>{g(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;g(t)&&x(t,l.current)&&(e.preventDefault(),o?(p(!1),f(!0)):p(!0))},children:[v,(0,i.jsx)(u.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),f(!e)},children:(0,i.jsx)("div",{className:h.collapsibleContent,children:n})})]})}const j={details:"details_SZgV"},f="alert alert--info";function v(e){let{...t}=e;return(0,i.jsx)(p,{...t,className:(0,c.Z)(f,j.details,t.className)})}function b(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)(v,{...e,summary:n,children:a})}var Z=n(347);function N(e){return(0,i.jsx)(Z.Z,{...e})}const _={containsTaskList:"containsTaskList__YnT"};function P(e){if(void 0!==e)return(0,c.Z)(e,e?.includes("contains-task-list")&&_.containsTaskList)}const k={img:"img__Ss2"};var C=n(6811),T=n(336);const y={Head:a.Z,details:b,Details:b,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(l,{...e}):(0,i.jsx)(r.Z,{...e})},a:function(e){return(0,i.jsx)(o.Z,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:P(e.className)})},li:function(e){return(0,d.Z)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,c.Z)(t,k.img))});var t},h1:e=>(0,i.jsx)(N,{as:"h1",...e}),h2:e=>(0,i.jsx)(N,{as:"h2",...e}),h3:e=>(0,i.jsx)(N,{as:"h3",...e}),h4:e=>(0,i.jsx)(N,{as:"h4",...e}),h5:e=>(0,i.jsx)(N,{as:"h5",...e}),h6:e=>(0,i.jsx)(N,{as:"h6",...e}),admonition:C.Z,mermaid:T.Z}},8517:(e,t,n)=>{n.d(t,{Z:()=>i});n(6204);var s=n(7832),a=n(1743),r=n(3188);function i(e){let{children:t}=e;return(0,r.jsx)(s.Z,{components:a.Z,children:t})}},5364:(e,t,n)=>{n.d(t,{Z:()=>i});n(6204);var s=n(489),a=n(1210),r=n(3188);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,r.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},5478:(e,t,n)=>{n.d(t,{Z:()=>l});n(6204);var s=n(489),a=n(1210);const r={tag:"tag_qE9H",tagRegular:"tagRegular_aHXt",tagWithCount:"tagWithCount_UC8q"};var i=n(3188);function l(e){let{permalink:t,label:n,count:l}=e;return(0,i.jsxs)(a.Z,{href:t,className:(0,s.Z)(r.tag,l?r.tagWithCount:r.tagRegular),children:[n,l&&(0,i.jsx)("span",{children:l})]})}},4336:(e,t,n)=>{n.d(t,{Z:()=>o});n(6204);var s=n(489),a=n(667),r=n(5478);const i={tags:"tags_q74f",tag:"tag_lSC7"};var l=n(3188);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.Z)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.Z,{label:t,permalink:n})},n)}))})]})}},1516:(e,t,n)=>{n.d(t,{C:()=>o,n:()=>l});var s=n(6204),a=n(381),r=n(3188);const i=s.createContext(null);function l(e){let{children:t,content:n,isBlogPostPage:a=!1}=e;const l=function(e){let{content:t,isBlogPostPage:n}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:a});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,s.useContext)(i);if(null===e)throw new a.i6("BlogPostProvider");return e}},1512:(e,t,n)=>{n.d(t,{X:()=>r});var s=n(6204),a=n(3188);function r(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:r.length>0?(0,a.jsx)(a.Fragment,{children:r}):null}}(e.children),r=e.title??t;return{...e,...r&&{title:r},children:n}}},8413:(e,t,n)=>{n.d(t,{c:()=>c});var s=n(6204),a=n(5136);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=n.select(t),r=n.pluralForms.indexOf(a);return s[Math.min(r,s.length-1)]}(n,t,e)}}}}]);
//# sourceMappingURL=3405.66b2dbda.js.map