(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[1316],{4940:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});s(6204);var r=s(541),i=s(3188);function c(e){let{children:t,fallback:s}=e;return(0,r.Z)()?(0,i.jsx)(i.Fragment,{children:t?.()}):s??null}},4537:(e,t,s)=>{"use strict";s.d(t,{M:()=>n});var r=s(6204),i=s(5186),c=s(3188);const a=()=>{return e={width:"16",height:"16",viewbox:"0 0 50 58",path:"M22.5581 50.9938V30.1717L4.65116 19.869V31.7386L12.8536 36.4939V45.4198L22.5581 50.9938ZM27.2093 51.1162L37.0931 45.4226V36.2851L45.3488 31.501V19.7801L27.2093 30.2529V51.1162ZM42.9633 15.7867L33.4288 10.2615L25.0571 15.1193L16.6219 10.2567L7.00237 15.8557L24.9542 26.1842L42.9633 15.7867ZM0 43.4008V14.5498L24.9974 0L50 14.4887V43.3552L24.9969 57.7584L0 43.4008Z"},(0,c.jsx)("svg",{height:e.height,width:e.width,viewBox:e.viewbox,focusable:!1,className:"dockview-svg",children:(0,c.jsx)("path",{d:e.path})});var e},n=e=>{const t=r.useMemo((()=>e.id?`https://codesandbox.io/s/github/mathuo/dockview/tree/master/packages/docs/sandboxes/${e.id}`:""),[e.id]);return(0,c.jsxs)(c.Fragment,{children:[!e.hideThemePicker&&(0,c.jsx)(i.JE,{}),(0,c.jsxs)("span",{className:"codesandbox-button",style:{display:"flex",alignItems:"center"},children:[(0,c.jsx)("span",{className:"codesandbox-button-pretext",children:"Open in "}),(0,c.jsxs)("a",{href:t,target:"_blank",rel:"noopener",className:"codesandbox-button-content",children:[(0,c.jsx)("span",{style:{fontWeight:"bold",paddingRight:"4px"},children:"CodeSandbox"}),(0,c.jsx)(a,{})]})]})]})}},5186:(e,t,s)=>{"use strict";s.d(t,{Qj:()=>v,JE:()=>x});var r=s(6204),i=s(4537),c=s(6261),a=s(3188);const n=()=>(0,a.jsxs)("div",{className:"lds-ellipsis",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]});var o=s(4940);const l=e=>(0,a.jsx)("img",{style:{marginRight:"0px 4px"},height:e.height,width:e.width,src:(0,c.Z)("img/react-icon.svg")}),d=e=>(0,a.jsx)("img",{style:{marginRight:"0px 4px"},height:e.height,width:e.width,src:(0,c.Z)("img/js-icon.svg")}),h=["dockview-theme-abyss","dockview-theme-dark","dockview-theme-light","dockview-theme-vs","dockview-theme-dracula","dockview-theme-replit"];function p(e,t){const[s,i]=r.useState(localStorage.getItem(e));return r.useEffect((()=>{const t=t=>{i(localStorage.getItem(e))};return window.addEventListener("storage",t),i(localStorage.getItem(e)),()=>{window.removeEventListener("storage",t)}}),[e]),null===s?t:s}const x=()=>{const[e,t]=r.useState(localStorage.getItem("dv-theme-class-name")||h[0]);return r.useEffect((()=>{localStorage.setItem("dv-theme-class-name",e),window.dispatchEvent(new StorageEvent("storage"))}),[e]),(0,a.jsxs)("div",{style:{height:"20px",display:"flex",alignItems:"center",padding:"0px 0px 0px 4px"},children:[(0,a.jsx)("span",{style:{paddingRight:"4px"},children:"Theme: "}),(0,a.jsx)("select",{style:{backgroundColor:"inherit",color:"inherit"},onChange:e=>t(e.target.value),value:e,children:h.map((e=>(0,a.jsx)("option",{value:e,children:e},e)))})]})};const u=e=>{const t=r.useRef(null),[s,c]=r.useState("React"),[o,h]=r.useState(!1),x=p("dv-theme-class-name","dockview-theme-abyss");r.useEffect((()=>{h(!0),setTimeout((()=>{h(!1)}),500)}),[s]),r.useEffect((()=>{if(t.current&&"Javascript"===s){const s=e.typescript(t.current);return()=>{s.dispose()}}}),[e.typescript,s]);const u=r.useMemo((()=>"Javascript"===s?`javascript/${e.sandboxId}`:e.sandboxId),[e.sandboxId,s]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{ref:t,style:{position:"relative",height:e.height?`${e.height}px`:"300px"},children:[o&&(0,a.jsx)("div",{style:{background:"rgba(30,30,30)",position:"absolute",zIndex:9999,top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(n,{})}),"React"===s&&(0,a.jsx)(e.react,{theme:x})]}),(0,a.jsxs)("div",{style:{margin:"2px 0px",padding:"2px 0px",display:"flex",alignItems:"center",fontSize:"14px",height:"24px"},children:[(0,a.jsxs)("div",{className:"framework-button",style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[e.typescript&&("React"===s?(0,a.jsx)(l,{height:16,width:16}):(0,a.jsx)(d,{height:16,width:16})),e.typescript&&(0,a.jsxs)("select",{style:{border:"none",fontWeight:"bold",backgroundColor:"inherit",cursor:"inherit",color:"inherit",height:"24px"},onChange:e=>{const t=e.target;c(t.value)},children:[(0,a.jsx)("option",{value:"React",children:"React"}),(0,a.jsx)("option",{value:"Javascript",children:"Javascript"})]})]}),(0,a.jsx)("span",{style:{flexGrow:1}}),(0,a.jsx)(i.M,{id:u,hideThemePicker:e.hideThemePicker})]})]})},v=e=>(0,a.jsx)(o.Z,{children:()=>(0,a.jsx)(u,{...e})})},5945:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(6204),i=s(4537),c=s(4940),a=s(3188);const n=e=>{const t=r.useMemo((()=>r.lazy((()=>s(3086)(`./${e.framework}/${e.id}/src/app`)))),[e.framework,e.id]);return(0,a.jsx)(c.Z,{children:()=>(0,a.jsx)(r.Suspense,{children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1},children:[(0,a.jsx)("div",{style:{height:e.height??"500px",flexGrow:1,display:"flex",flexDirection:"column"},children:(0,a.jsx)(t,{theme:e.theme})}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,a.jsx)("span",{style:{width:"220px"},children:(0,a.jsx)(i.M,{id:`${e.framework}/${e.id}`,hideThemePicker:!0})})})]})})})}},7335:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=s(3188),i=s(7832),c=s(5945);const a={title:"Scrolling"},n=void 0,o={id:"core/scrollbars",title:"Scrolling",description:"It's important to understand how to configure the scrollbar within a panel.",source:"@site/docs/core/scrollbars.mdx",sourceDirName:"core",slug:"/core/scrollbars",permalink:"/docs/core/scrollbars",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core/scrollbars.mdx",tags:[],version:"current",frontMatter:{title:"Scrolling"},sidebar:"tutorialSidebar",previous:{title:"Locked",permalink:"/docs/core/locked"},next:{title:"Watermark",permalink:"/docs/core/watermark"}},l={},d=[{value:"Live Examples",id:"live-examples",level:2}];function h(e){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"It's important to understand how to configure the scrollbar within a panel."}),"\n",(0,r.jsxs)(t.p,{children:["A panel will appear with a scrollbar if the the contents of your view has a fixed height.\nIf you are using a relative height such as ",(0,r.jsx)(t.code,{children:"100%"})," you will need a child container\nwith the appropiate ",(0,r.jsx)(t.code,{children:"overflow"})," value to allow for scrollbars."]}),"\n",(0,r.jsx)(t.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,r.jsx)(t.p,{children:"The following example contains three views:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Panel 1"})," (",(0,r.jsx)(t.code,{children:"height: 100%"}),"): No scrollbar appears and the content is clipped."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Panel 2"})," (",(0,r.jsx)(t.code,{children:"height: 2000px"}),"): A scrollbar does appear since a fixed height has been used."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Panel 3"}),": ",(0,r.jsx)(t.code,{children:"height: 100%"})," and a child component with ",(0,r.jsx)(t.code,{children:"overflow: auto"})," which will enable scrollbars."]}),"\n"]}),"\n",(0,r.jsx)(c.Z,{framework:"react",id:"dockview/scrollbars"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3086:(e,t,s)=>{var r={"./javascript/fullwidthtab-dockview/src/app":[1800,532,1800],"./javascript/simple-dockview/src/app":[6807,6807],"./javascript/tabheight-dockview/src/app":[1977,532,1977],"./javascript/vanilla-dockview/src/app":[9094,9094],"./react/dockview/constraints/src/app":[9920,9920],"./react/dockview/demo-dockview/src/app":[3158,532,3158],"./react/dockview/dnd-events/src/app":[9944,9944],"./react/dockview/floating-groups/src/app":[9518,9582],"./react/dockview/group-actions/src/app":[9980,532,9980],"./react/dockview/layout/src/app":[601,8787],"./react/dockview/locked/src/app":[4156,4156],"./react/dockview/maximize-group/src/app":[7729,7729],"./react/dockview/popout-group/src/app":[9502,8678,6835,9502],"./react/dockview/render-mode/src/app":[7787,532,7787],"./react/dockview/resize-container/src/app":[5093,5093],"./react/dockview/resize/src/app":[6149,532,6149],"./react/dockview/scrollbars/src/app":[8029,532,8029],"./react/dockview/update-parameters/src/app":[3215,3215],"./react/dockview/update-title/src/app":[9070,9070],"./react/dockview/watermark/src/app":[4074,4074]};function i(e){if(!s.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(s.e)).then((()=>s(i)))}i.keys=()=>Object.keys(r),i.id=3086,e.exports=i},7832:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n,a:()=>a});var r=s(6204);const i={},c=r.createContext(i);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
//# sourceMappingURL=20435d4c.e5f3764c.js.map