(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(96)),i={id:"advanced-ci",title:"Continuous Integration"},c={unversionedId:"guides/advanced-ci",id:"guides/advanced-ci",isDocsHomePage:!1,title:"Continuous Integration",description:"Uploading a new build",source:"@site/docs/guides/advanced-ci.md",slug:"/guides/advanced-ci",permalink:"/docs/guides/advanced-ci",editUrl:"https://github.com/paularmstrong/build-tracker/edit/main/docs/docs/guides/advanced-ci.md",version:"current"},l=[{value:"Uploading a new build",id:"uploading-a-new-build",children:[{value:"Reporting budget results",id:"reporting-budget-results",children:[]},{value:"Linking directly to a build comparison",id:"linking-directly-to-a-build-comparison",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"uploading-a-new-build"},"Uploading a new build"),Object(o.b)("p",null,"Using the API integration from ",Object(o.b)("inlineCode",{parentName:"p"},"@build-tracker/cli"),", once you've set up your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/api-client#configuration"}),"configuration file")," you can upload a new build with a single command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn bt-cli upload-build\n")),Object(o.b)("h3",{id:"reporting-budget-results"},"Reporting budget results"),Object(o.b)("p",null,"The response from the Build Tracker API is sent back to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/api-client#oncompare-data-apiresponse-promise-void"}),Object(o.b)("inlineCode",{parentName:"a"},"onCompare"))," callback function in your configuration and has many useful pieces of information."),Object(o.b)("p",null,"There are two items that are particularly useful here: ",Object(o.b)("inlineCode",{parentName:"p"},"groupDeltas")," and ",Object(o.b)("inlineCode",{parentName:"p"},"artifactDeltas"),". We can use these and filter on those with failing budgets to format a nice message."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Comparator = require('@build-tracker/comparator').default;\n\nconst applicationUrl = 'https://my-application-url.local';\n\nconst last = (xs) => xs[xs.length - 1];\n\nmodule.exports = {\n  applicationUrl,\n  // ... other config options\n  onCompare: async (data) => {\n    const { comparatorData, summary } = data;\n    // Reconstruct a comparator from the serialized data\n    const comparator = Comparator.deserialize(comparatorData);\n\n    const build = last(comparator.builds);\n\n    const table = comparator.toMarkdown({ artifactFilter });\n    const revisions = `${build.getMetaValue('parentRevision')}/${build.getMetaValue('revision')}`;\n    const output = `${summary.join('\\n')}\n\n${table}\n\nSee the full comparison at [${applicationUrl}/builds/${revisions}](${applicationUrl}/builds/${revisions})`;\n\n    // Post the constructed markdown as a comment\n    return await GithubApi.postComment(output);\n  },\n};\n\n// Filter out any rows from the markdown table that are not failing or did not have a hash change\nconst artifactFilter = (row) => {\n  return row.some((cell) => {\n    if (cell.type === 'delta') {\n      return cell.failingBudgets.length > 0 || cell.hashChanged;\n    }\n    return false;\n  });\n};\n")),Object(o.b)("h3",{id:"linking-directly-to-a-build-comparison"},"Linking directly to a build comparison"),Object(o.b)("p",null,"The Build Tracker web application accept links directly to a comparison of one or more builds in the format: ",Object(o.b)("inlineCode",{parentName:"p"},"/builds/:revisions+"),"."),Object(o.b)("p",null,"For example, to link to a comparison of two builds:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://build-tracker-demo.herokuapp.com/builds/ee6e071ef38eabf07a0f88d27bc6a0c9fce95e73/ffef391677992f0fae65702b94ec993bb7fb1744"}),"/builds/ee6e071ef38eabf07a0f88d27bc6a0c9fce95e73/ffef391677992f0fae65702b94ec993bb7fb1744")))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(f,c(c({ref:t},u),{},{components:n})):r.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);