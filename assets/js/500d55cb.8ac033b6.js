"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[7489],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5810:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(9496),n=a(5924);const l={tabItem:"tabItem_mw14"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},8750:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(8126),n=a(9496),l=a(5924),i=a(3053),s=a(3442),o=a(9356),u=a(4634),c=a(6038);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,u]=b({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=a(5667);const y={tabList:"tabList_r_eZ",tabItem:"tabItem_ZrSx"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==s&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function h(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(h,(0,r.Z)({key:String(t)},e))}},48:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>b});var r=a(8126),n=(a(9496),a(9613));const l={toc:[{value:"Capabilities",id:"capabilities",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:3}]},i="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"capabilities"},"Capabilities"),(0,n.kt)("p",null,"This service can be used to:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","rename"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"list")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","scan"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"presign")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","blocking")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"root"),": Set the working directory of ",(0,n.kt)("inlineCode",{parentName:"li"},"OpenDAL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"connection_string"),": Set the connection string of postgres server"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"table"),": Set the table of postgresql"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key_field"),": Set the key field of postgresql"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value_field"),": Set the value field of postgresql")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"via-builder"},"Via Builder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::services::Postgresql;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Postgresql::default();\n    builder.root("/");\n    builder.connection_string("postgresql://you_username:your_password@127.0.0.1:5432/your_database");\n    builder.table("your_table");\n    // key field type in the table should be compatible with Rust\'s &str like text\n    builder.key_field("key");\n    // value field type in the table should be compatible with Rust\'s Vec<u8> like bytea\n    builder.value_field("value");\n\n    let op = Operator::new(builder)?.finish();\n    Ok(())\n}\n')))}s.isMDXComponent=!0;var o=a(8750),u=a(5810);const c={title:"PostgreSQL"},p=void 0,d={unversionedId:"services/postgresql",id:"services/postgresql",title:"PostgreSQL",description:"PostgreSQL services support.",source:"@site/docs/services/postgresql.mdx",sourceDirName:"services",slug:"/services/postgresql",permalink:"/docs/services/postgresql",draft:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/postgresql.mdx",tags:[],version:"current",lastUpdatedBy:"ran",lastUpdatedAt:1706451349,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"PostgreSQL"},sidebar:"docs",previous:{title:"Persy",permalink:"/docs/services/persy"},next:{title:"Redb",permalink:"/docs/services/redb"}},m={},b=[{value:"Via Config",id:"via-config",level:3}],f={toc:b},k="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," services support."),(0,n.kt)(s,{components:a.components,mdxType:"Docs"}),(0,n.kt)("h3",{id:"via-config"},"Via Config"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::services::Postgresql;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    \n    let mut map = HashMap::new();\n    map.insert("connection_string".to_string(), "postgresql://you_username:your_password@127.0.0.1:5432/your_database".to_string());\n    map.insert("table".to_string(), "your_table".to_string());\n    map.insert("key_field".to_string(), "your_key_field".to_string());\n    map.insert("value_field".to_string(), "your_value_field".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Postgresql, map)?;\n    Ok(())\n}\n'))),(0,n.kt)(u.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Operator } from  require('opendal');\n\nasync function main() {\n    const op = new Operator(\"postgresql\", {\n        connection_string: 'postgresql://you_username:your_password@127.0.0.1:5432/your_database',\n        table: 'your_table',\n        key_field: 'your_key_field',\n        value_field: 'your_value_field',\n    });\n}\n"))),(0,n.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("postgresql", {\n    "connection_string": "postgresql://you_username:your_password@127.0.0.1:5432/your_database",\n    "table": "your_table",\n    "key_field": "your_key_field",\n    "value_field": "your_value_field",\n})\n')))))}y.isMDXComponent=!0}}]);