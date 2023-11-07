(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(96)),l={id:"budgets",title:"Setting performance budgets",sidebar_label:"Setting budgets"},b={unversionedId:"budgets",id:"budgets",isDocsHomePage:!1,title:"Setting performance budgets",description:"What is a performance budget?",source:"@site/docs/budgets.md",slug:"/budgets",permalink:"/docs/budgets",editUrl:"https://github.com/paularmstrong/build-tracker/edit/main/docs/docs/budgets.md",version:"current",sidebar_label:"Setting budgets",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"@build-tracker/api-client",permalink:"/docs/packages/api-client"}},o=[{value:"What is a performance budget?",id:"what-is-a-performance-budget",children:[{value:"<code>level</code>",id:"level",children:[]},{value:"<code>maximum</code>",id:"maximum",children:[]},{value:"<code>sizeKey</code>",id:"sizekey",children:[]},{value:"<code>type</code>",id:"type",children:[]}]},{value:"Setting performance budgets with Build Tracker",id:"setting-performance-budgets-with-build-tracker",children:[{value:"Budgets for individual and every artifact",id:"budgets-for-individual-and-every-artifact",children:[]},{value:"Budgets for groups",id:"budgets-for-groups",children:[]},{value:"Budgets for overall totals",id:"budgets-for-overall-totals",children:[]}]}],c={rightToc:o};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-a-performance-budget"},"What is a performance budget?"),Object(i.b)("p",null,"Performance budgets are limits set on various metrics that affect site and application performance. With Build Tracker, we are most focused on how the size of your build assets affects your app\u2019s loading speed."),Object(i.b)("p",null,"A Build Tracker ",Object(i.b)("em",{parentName:"p"},"Budget")," consists of 4 items: ",Object(i.b)("inlineCode",{parentName:"p"},"level"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sizeKey"),", ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"maximum"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"{\n  level: BudgetLevel.ERROR,\n  maximum: 150000,\n  sizeKey: 'gzip',\n  type: BudgetType.SIZE,\n}\n")),Object(i.b)("h3",{id:"level"},Object(i.b)("inlineCode",{parentName:"h3"},"level")),Object(i.b)("p",null,"A budget level can either be ",Object(i.b)("inlineCode",{parentName:"p"},"BudgetLevel.ERROR")," (",Object(i.b)("inlineCode",{parentName:"p"},"'error'"),") or ",Object(i.b)("inlineCode",{parentName:"p"},"BudgetLevel.WARN")," (",Object(i.b)("inlineCode",{parentName:"p"},"'warn'"),"). The determination of which level you'd like to use is up to you. They're mostly cosmetic for reporting. You can import these from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/packages/types"}),Object(i.b)("inlineCode",{parentName:"a"},"@build-tracker/types")),";"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { BudgetLevel } = require('@build-tracker/types');\n")),Object(i.b)("h3",{id:"maximum"},Object(i.b)("inlineCode",{parentName:"h3"},"maximum")),Object(i.b)("p",null,"This is a numerical value that has different meaning based on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#type"}),"type")," of budget you've defined."),Object(i.b)("h3",{id:"sizekey"},Object(i.b)("inlineCode",{parentName:"h3"},"sizeKey")),Object(i.b)("p",null,"Out of the box, Build Tracker comes with three possible size measurements. Depending on how you're serving you're app, you will want to choose one of these for each budget."),Object(i.b)("p",null,"Available size keys are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'stat'"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The full stat size of an artifact as it is on-disk"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'gzip'"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If you're serving with the ",Object(i.b)("em",{parentName:"li"},"gzip")," compression type. Most services include this."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'brotli'"),"*",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If you're serving with the newer ",Object(i.b)("em",{parentName:"li"},"brotli")," compression type."),Object(i.b)("li",{parentName:"ul"},"*","Requires Node 10.16.0 or greater")))),Object(i.b)("h3",{id:"type"},Object(i.b)("inlineCode",{parentName:"h3"},"type")),Object(i.b)("p",null,"Build Tracker supports three kinds of budgets, allowing you to have the most fine-grained control over your build reports. You can import these from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/packages/types"}),Object(i.b)("inlineCode",{parentName:"a"},"@build-tracker/types")),";"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { BudgetType } = require('@build-tracker/types');\n")),Object(i.b)("h4",{id:"budgettypesize"},Object(i.b)("inlineCode",{parentName:"h4"},"BudgetType.SIZE")),Object(i.b)("p",null,"A size budget is an absolute limite on the total size of an artifact. This is the most simple budget, because passing or failing can be seen with a single build and no math."),Object(i.b)("p",null,"For this budget type, ",Object(i.b)("inlineCode",{parentName:"p"},"maximum")," should be a whole number, in ",Object(i.b)("em",{parentName:"p"},"bytes"),"."),Object(i.b)("h4",{id:"budgettypedelta"},Object(i.b)("inlineCode",{parentName:"h4"},"BudgetType.DELTA")),Object(i.b)("p",null,"A budget delta is a limit on the amount of change allowed for one or more artifacts from one build to the next."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"First build"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Second build"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u0394 (delta)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"main.js"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40 KiB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"48 KiB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+8 KiB")))),Object(i.b)("p",null,"For this budget type, ",Object(i.b)("inlineCode",{parentName:"p"},"maximum")," is a ",Object(i.b)("em",{parentName:"p"},"maximum")," number of bytes allowed for the delta."),Object(i.b)("h4",{id:"budgettypepercent_delta"},Object(i.b)("inlineCode",{parentName:"h4"},"BudgetType.PERCENT_DELTA")),Object(i.b)("p",null,"The percent delta budget is a limit on the artifacts total size percent change from one build to the next. For this, we divide the delta by the size of the first build:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: this is a simplified version of the formula that does not account for edge cases")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function percentDelta(firstSize, secondSize) {\n  return (secondSize - firstSize) / firstSize;\n}\n\npercentDelta(40, 48);\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"First build"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Second build"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u0394% (percent delta)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"main.js"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40 KiB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"48 KiB"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+ 20%")))),Object(i.b)("p",null,"For this budget type, ",Object(i.b)("inlineCode",{parentName:"p"},"maximum")," is a float value where ",Object(i.b)("inlineCode",{parentName:"p"},"1.0")," is a 100% delta increase."),Object(i.b)("h2",{id:"setting-performance-budgets-with-build-tracker"},"Setting performance budgets with Build Tracker"),Object(i.b)("p",null,"Using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"packages/server#basic-configuration"}),Object(i.b)("inlineCode",{parentName:"a"},"@build-tracker/server configuration")),", there are a number of possible ways to set budgets: on individual artifacts, every artifact, groups of artifacts, and all artifacts."),Object(i.b)("h3",{id:"budgets-for-individual-and-every-artifact"},"Budgets for individual and every artifact"),Object(i.b)("p",null,"In your server config file, you can add an ",Object(i.b)("inlineCode",{parentName:"p"},"artifacts.budgets")," object and define budgets by artifact name. Each artifact can be configured with an array of 1 or more budget."),Object(i.b)("p",null,"To set a single budget for an artifact with the filename ",Object(i.b)("inlineCode",{parentName:"p"},"main.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { BudgetLevel, BudgetType } = require('@build-tracker/types');\n\nmodule.exports = {\n  artifacts: {\n    budgets: {\n      'main.js': [\n        {\n          level: BudgetLevel.ERROR,\n          sizeKey: 'gzip',\n          type: BudgetType.SIZE,\n          maximum: 150000,\n        },\n      ],\n    },\n  },\n};\n")),Object(i.b)("p",null,"If you'd like to set a single budget that applies to each artifact without knowing every single artifact's filename, you can use the special asterisk key ",Object(i.b)("inlineCode",{parentName:"p"},"'*'"),". When using the asterisk, the budgets defined will be applied to every single artifact. This can be useful if you want to call out major changes so they are more noticeable."),Object(i.b)("p",null,"In this example, we will receive ",Object(i.b)("em",{parentName:"p"},"warning")," any time the ",Object(i.b)("em",{parentName:"p"},"percent delta")," of any artifact exceeds 50%."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { BudgetLevel, BudgetType } = require('@build-tracker/types');\n\nmodule.exports = {\n  artifacts: {\n    budgets: {\n      '*': [\n        {\n          level: BudgetLevel.WARN,\n          sizeKey: 'gzip',\n          type: BudgetType.PERCENT_DELTA,\n          maximum: 0.5,\n        },\n      ],\n    },\n  },\n};\n")),Object(i.b)("h3",{id:"budgets-for-groups"},"Budgets for groups"),Object(i.b)("p",null,"Groups are a set of Artifacts that you can define in your server's configuration to group together one or more artifacts by name or regular expression. These are useful for reporting when you know what artifacts are required for certain areas of your application or site, like a Home page."),Object(i.b)("p",null,"To create a group, add a ",Object(i.b)("inlineCode",{parentName:"p"},"artifacts.groups")," array with one or more ",Object(i.b)("inlineCode",{parentName:"p"},"group")," configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { BudgetLevel, BudgetType } = require('@build-tracker/types');\n\nmodule.exports = {\n  artifacts: {\n    groups: [\n      {\n        // An array of strings that match your artifacts\n        artifactNames: ['main', 'shared', 'vendor'],\n        // Optional, a regular expression to match artifact names\n        artifactMatch: /^i18n/,\n        // An array of budgets\n        budgets: [{ level: BudgetLevel.ERROR, sizeKey: 'gzip', type: BudgetType.SIZE, maximum: 150000 }],\n        // A name for the group\n        name: 'Initial',\n      },\n    ],\n  },\n};\n")),Object(i.b)("h3",{id:"budgets-for-overall-totals"},"Budgets for overall totals"),Object(i.b)("p",null,"It is also possible to define budgets for the overall sum of artifacts. To do this, you can add an array of one or more budgets to a ",Object(i.b)("inlineCode",{parentName:"p"},"budgets")," key on the server's configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { BudgetLevel, BudgetType } = require('@build-tracker/types');\n\nmodule.exports = {\n  budgets: [\n    {\n      level: BudgetLevel.ERROR,\n      sizeKey: 'brotli',\n      type: BudgetType.SIZE,\n      maximum: 1000000,\n    },\n  ],\n};\n")))}u.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return a?r.a.createElement(m,b(b({ref:t},c),{},{components:a})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);