(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),r=(a(0),a(96));const b={id:"cli",title:"@build-tracker/cli",sidebar_label:"@build-tracker/cli"},i={unversionedId:"packages/cli",id:"packages/cli",isDocsHomePage:!1,title:"@build-tracker/cli",description:"Adding the @build-tracker/cli package includes a command-line utility, bt-cli for interacting with the Build Tracker API. It can be run with yarn bt-cli or npx bt-cli",source:"@site/docs/packages/cli.md",slug:"/packages/cli",permalink:"/docs/packages/cli",editUrl:"https://github.com/paularmstrong/build-tracker/edit/main/docs/docs/packages/cli.md",version:"current",sidebar_label:"@build-tracker/cli",sidebar:"docs",previous:{title:"@build-tracker/build",permalink:"/docs/packages/build"},next:{title:"@build-tracker/comparator",permalink:"/docs/packages/comparator"}},c=[{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"CLI",id:"cli",children:[{value:"<code>upload-build</code>",id:"upload-build",children:[]},{value:"<code>create-build</code>",id:"create-build",children:[]},{value:"<code>stat-artifacts</code>",id:"stat-artifacts",children:[]},{value:"<code>get-build</code>",id:"get-build",children:[]},{value:"<code>version</code>",id:"version",children:[]}]}],l={rightToc:c};function o({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Adding the ",Object(r.b)("inlineCode",{parentName:"p"},"@build-tracker/cli")," package includes a command-line utility, ",Object(r.b)("inlineCode",{parentName:"p"},"bt-cli")," for interacting with the Build Tracker API. It can be run with ",Object(r.b)("inlineCode",{parentName:"p"},"yarn bt-cli")," or ",Object(r.b)("inlineCode",{parentName:"p"},"npx bt-cli")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Important note:")," Set up the Build Tracker CLI close to your application's code (in the same repository and workspace). Remember that the configuration for the CLI is ",Object(r.b)("strong",{parentName:"p"},"not")," the same as the configuration for the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/packages/server"}),"server"),".")),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @build-tracker/cli@latest\n# or\nnpm install --save @build-tracker/cli@latest\n")),Object(r.b)("p",null,"To list all commands and help, run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn bt-cli --help")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The Build Tracker CLI uses the same configuration as the ",Object(r.b)("inlineCode",{parentName:"p"},"@build-tracker/api-client"),". For more information, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"api-client#configuration"}),"api-client configuration"),"."),Object(r.b)("h2",{id:"cli"},"CLI"),Object(r.b)("h3",{id:"upload-build"},Object(r.b)("inlineCode",{parentName:"h3"},"upload-build")),Object(r.b)("p",null,"This command will read your configuration file, and upload the current build meta and artifact stats to your server. In most scenarios, this should be all you need."),Object(r.b)("p",null,"Beside the arguments below, if you're running your server with a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"server#securing-your-api"}),Object(r.b)("inlineCode",{parentName:"a"},"BT_API_AUTH_TOKEN")," environment variable"),", ensure you run this command with that variable available as well."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"BT_API_AUTH_TOKEN=my-secret-token bt-cli upload-build\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option, alias"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--branch"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-b")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the branch name and do not attempt to read from git"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current git working branch")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--config"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-c")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set path to the build-tracker API config file"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"api-client#configuration"}),"Found via cosmiconfig"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--meta")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON-encoded extra meta information to attach to the build"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--parent-revision")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manually set the parent revision for the comparison."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determined via git-merge-base")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--skip-dirty-check")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip the git work tree state check"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("h3",{id:"create-build"},Object(r.b)("inlineCode",{parentName:"h3"},"create-build")),Object(r.b)("p",null,"This command will create a Build object for the current available build. If run independently, it will only output information, but not upload it anywhere. For that, you only need to run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn bt-cli upload-build"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option, alias"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--branch"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-b")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the branch name and do not attempt to read from git"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current git working branch")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--config"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-c")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set path to the build-tracker API config file"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"api-client#configuration"}),"Found via cosmiconfig"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--meta")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON-encoded extra meta information to attach to the build"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--out"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-o")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Write the build to stdout"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--parent-revision")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manually set the parent revision for the comparison."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determined via git-merge-base")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--skip-dirty-check")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip the git work tree state check"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("h3",{id:"stat-artifacts"},Object(r.b)("inlineCode",{parentName:"h3"},"stat-artifacts")),Object(r.b)("p",null,"Lower-level than ",Object(r.b)("inlineCode",{parentName:"p"},"create-build"),", this command will get artifact stats for the current build files and output a JSON representation of them."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option, alias"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--config"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-c")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set path to the build-tracker API config file"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"api-client#configuration"}),"Found via cosmiconfig"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--out"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-o")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Write the stats to stdout"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true"))))),Object(r.b)("h3",{id:"get-build"},Object(r.b)("inlineCode",{parentName:"h3"},"get-build")),Object(r.b)("p",null,"Retrieve a build by revision"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option, alias"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--config"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-c")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set path to the build-tracker API config file"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"api-client#configuration"}),"Found via cosmiconfig"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"--revision"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-r")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get the build using revision"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h3",{id:"version"},Object(r.b)("inlineCode",{parentName:"h3"},"version")),Object(r.b)("p",null,"Output the version number of the ",Object(r.b)("inlineCode",{parentName:"p"},"bt-cli"),"."))}o.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,j=p["".concat(i,".").concat(O)]||p[O]||u[O]||b;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);