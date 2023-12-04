(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{63:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var o=r(2),n=(r(0),r(96));const a={id:"heroku",title:"Deploy to Heroku",sidebar_label:"Deploy to Heroku"},i={unversionedId:"guides/heroku",id:"guides/heroku",isDocsHomePage:!1,title:"Deploy to Heroku",description:"Prerequisites",source:"@site/docs/guides/heroku.md",slug:"/guides/heroku",permalink:"/docs/guides/heroku",editUrl:"https://github.com/paularmstrong/build-tracker/edit/main/docs/docs/guides/heroku.md",version:"current",sidebar_label:"Deploy to Heroku"},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"1. Create a new repository from the template",id:"1-create-a-new-repository-from-the-template",children:[]},{value:"2. Update the <code>build-tracker.config.js</code> file",id:"2-update-the-build-trackerconfigjs-file",children:[]},{value:"3. Deploy to Heroku",id:"3-deploy-to-heroku",children:[]},{value:"4. Configure on Heroku",id:"4-configure-on-heroku",children:[]}],u={rightToc:c};function p({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)("p",null,"This documentation assumes that you have an active Heroku account."),Object(n.b)("h2",{id:"1-create-a-new-repository-from-the-template"},"1. Create a new repository from the template"),Object(n.b)("p",null,"On GitHub, ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/paularmstrong/build-tracker-heroku/generate"}),"create a new repository using the template")," from ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/paularmstrong/build-tracker-heroku"}),"paularmstrong/build-tracker-heroku"),"."),Object(n.b)("h2",{id:"2-update-the-build-trackerconfigjs-file"},"2. Update the ",Object(n.b)("inlineCode",{parentName:"h2"},"build-tracker.config.js")," file"),Object(n.b)("p",null,"This is the ",Object(n.b)("inlineCode",{parentName:"p"},"@build-tracker/server")," configuration. The most important thing to do here is to set up your ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/budgets"}),"performance budgets"),". There are also ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/packages/server#configuration"}),"more options")," available that you may want to set as well. It is not recommended to change any of the presets other than the ",Object(n.b)("inlineCode",{parentName:"p"},"artifacts")," option."),Object(n.b)("h2",{id:"3-deploy-to-heroku"},"3. Deploy to Heroku"),Object(n.b)("p",null,"If you are set up as a public GitHub repository, simply click the ",Object(n.b)("em",{parentName:"p"},"Deploy to Heroku")," button at the top of the README.md file while viewing it on GitHub."),Object(n.b)("p",null,"If you are using a private repository, update the ",Object(n.b)("inlineCode",{parentName:"p"},"README.md")," link to use the ",Object(n.b)("inlineCode",{parentName:"p"},"?template=")," argument, replacing the repository ",Object(n.b)("inlineCode",{parentName:"p"},"my-org/my-repository")," in this string with the correct organization and repository path:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"https://heroku.com/deploy?template=https://github.com/my-org/my-repository/tree/master\n")),Object(n.b)("p",null,"Once that URL is updated, you may click it any time."),Object(n.b)("h2",{id:"4-configure-on-heroku"},"4. Configure on Heroku"),Object(n.b)("p",null,"Follow the instructions provided on Heroku to deploy your Build Tracker application. Take special note that the ",Object(n.b)("inlineCode",{parentName:"p"},"BT_URL")," option must be provided with the same application name if you plan on using a herokuapp.com domain. If you are going to configure any other domain, enter that instead."))}p.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),d=o,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return r?n.a.createElement(m,c(c({ref:t},p),{},{components:r})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);