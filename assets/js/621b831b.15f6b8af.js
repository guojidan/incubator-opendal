"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4551],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5810:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9496),r=n(5924);const l={tabItem:"tabItem_mw14"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},8750:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(8126),r=n(9496),l=n(5924),o=n(3053),i=n(3442),s=n(9356),c=n(4634),u=n(6038);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,c]=k({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var b=n(5667);const h={tabList:"tabList_r_eZ",tabItem:"tabItem_ZrSx"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},9600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>k});var a=n(8126),r=(n(9496),n(9613));const l={toc:[{value:"Notes",id:"notes",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:3}]},o="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As known as ",(0,r.kt)("inlineCode",{parentName:"p"},"abfs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"azdls")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"azdls"),"."),(0,r.kt)("p",null,"This service will visit the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-abfs-driver"},"ABFS")," URI supported by ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"},"Azure Data Lake Storage Gen2"),"."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"azdls")," is different from ",(0,r.kt)("inlineCode",{parentName:"p"},"azfile")," service which used to visit ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/storage/files/"},"Azure File Storage"),"."),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"This service can be used to:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","rename"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","list"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("del",{parentName:"li"},"scan")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","presign"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","blocking")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root"),": Set the work dir for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filesystem"),": Set the filesystem name for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),": Set the endpoint for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account_name"),": Set the account_name for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account_key"),": Set the account_key for backend.")),(0,r.kt)("p",null,"Refer to public API docs for more information."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"via-builder"},"Via Builder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Azdls;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create azdls backend builder.\n    let mut builder = Azdls::default();\n    // Set the root for azdls, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/path/to/dir");\n    // Set the filesystem name, this is required.\n    builder.filesystem("test");\n    // Set the endpoint, this is required.\n    //\n    // For examples:\n    // - "https://accountname.dfs.core.windows.net"\n    builder.endpoint("https://accountname.dfs.core.windows.net");\n    // Set the account_name and account_key.\n    //\n    // OpenDAL will try load credential from the env.\n    // If credential not set and no valid credential in env, OpenDAL will\n    // send request without signing like anonymous user.\n    builder.account_name("account_name");\n    builder.account_key("account_key");\n\n    // `Accessor` provides the low level APIs, we will use `Operator` normally.\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n')))}i.isMDXComponent=!0;var s=n(8750),c=n(5810);const u={title:"Azdls"},p=void 0,d={unversionedId:"services/azdls",id:"services/azdls",title:"Azdls",description:"Azure Data Lake Storage Gen2 Support.",source:"@site/docs/services/azdls.mdx",sourceDirName:"services",slug:"/services/azdls",permalink:"/docs/services/azdls",draft:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/azdls.mdx",tags:[],version:"current",lastUpdatedBy:"ran",lastUpdatedAt:1706451349,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"Azdls"},sidebar:"docs",previous:{title:"Azblob",permalink:"/docs/services/azblob"},next:{title:"Cacache",permalink:"/docs/services/cacache"}},m={},k=[{value:"Via Config",id:"via-config",level:3}],f={toc:k},b="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Azure Data Lake Storage Gen2 Support."),(0,r.kt)(i,{components:n.components,mdxType:"Docs"}),(0,r.kt)("h3",{id:"via-config"},"Via Config"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("filesystem".to_string(), "test".to_string());\n    map.insert("endpoint".to_string(), "https://accountname.dfs.core.windows.net".to_string());\n    map.insert("account_name".to_string(), "account_name".to_string());\n    map.insert("account_key".to_string(), "account_key".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Azdls, map)?;\n    Ok(())\n}\n'))),(0,r.kt)(c.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("azdls", {\n    root: "/path/to/dir",\n    filesystem: "test",\n    endpoint: "https://accountname.dfs.core.windows.net",\n    account_name: "account_name",\n    account_key: "account_key",\n  });\n}\n'))),(0,r.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("azdls",\n    root="/path/to/dir",\n    filesystem="test",\n    endpoint="https://accountname.dfs.core.windows.net",\n    account_name="account_name",\n    account_key="account_key",\n)\n')))))}h.isMDXComponent=!0}}]);