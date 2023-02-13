"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[6503],{5567:(e,a,t)=>{t.d(a,{b:()=>o});var n=t(3757),i=t(2784);const l={default:e=>i.createElement("div",{style:{padding:"20px"}},e.params.title)},o=()=>i.createElement(n.tu,{components:l,onReady:e=>{const a=e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}});a.group.locked=!0,a.group.header.hidden=!0,e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),e.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}});e.api.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}});e.api.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"}}),e.api.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"}})},className:"dockview-theme-abyss"})},645:(e,a,t)=>{t.d(a,{X:()=>o});var n=t(3757),i=t(2784);const l={default:e=>i.createElement("div",{style:{padding:"20px"}},e.params.title)},o=()=>i.createElement(n.$R,{components:l,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"}}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"}}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"}}),e.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},position:{referencePanel:"panel_1",direction:"right"}}),e.api.addPanel({id:"panel_5",component:"default",params:{title:"Panel 5"},position:{referencePanel:"panel_3",direction:"right"}}),e.api.addPanel({id:"panel_6",component:"default",params:{title:"Panel 6"},position:{referencePanel:"panel_5",direction:"below"},minimumWidth:10}),e.api.addPanel({id:"panel_7",component:"default",params:{title:"Panel 7"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10}),e.api.addPanel({id:"panel_8",component:"default",params:{title:"Panel 8"},position:{referencePanel:"panel_6",direction:"right"},minimumWidth:10})},proportionalLayout:!1,orientation:n.i5.VERTICAL,className:"dockview-theme-abyss"})},5197:(e,a,t)=>{t.d(a,{p:()=>d});var n=t(3757),i=t(2784);const l={default:e=>i.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},e.params.title)},o={myHeaderComponent:e=>{const[a,t]=i.useState(e.api.isExpanded);i.useEffect((()=>{const a=e.api.onDidExpansionChange((e=>{t(e.isExpanded)}));return()=>{a.dispose()}}),[]);return i.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},i.createElement("a",{onClick:()=>{e.api.setExpanded(!a)},className:a?"expanded":"collapsed"}),i.createElement("span",null,e.params.title))}},d=()=>i.createElement(n.Vm,{components:l,headerComponents:o,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},title:"Panel 1"}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},title:"Panel 2"}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},title:"Panel 3"})},className:"dockview-theme-abyss"})},1029:(e,a,t)=>{t.d(a,{B:()=>o});var n=t(3757),i=t(2784);const l={default:e=>i.createElement("div",{style:{padding:"20px"}},e.params.title)},o=e=>i.createElement(n.TU,{components:l,proportionalLayout:e.proportional,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},minimumSize:100}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},minimumSize:100}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},minimumSize:100})},orientation:n.i5.HORIZONTAL,className:"dockview-theme-abyss"})},2092:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var n=t(7896),i=(t(2784),t(876));t(1029),t(645),t(5197),t(5567);const l={sidebar_position:4,description:"Dockview examples"},o="Examples",d={unversionedId:"examples",id:"examples",title:"Examples",description:"Dockview examples",source:"@site/docs/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/docs/next/examples",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Dockview examples"},sidebar:"tutorialSidebar",previous:{title:"Theme",permalink:"/docs/next/theme"},next:{title:"Components",permalink:"/docs/next/category/components"}},p={},r=[],s={toc:r};function m(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/dockview-template-mdc9f7?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRaduis:"4px",overflow:"hidden"},title:"dockview-template",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=67500d10.75cebd64.js.map