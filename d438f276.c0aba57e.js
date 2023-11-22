(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(96)),o={id:"contributing",title:"Contributing to Build Tracker",sidebar_label:"Contributing"},c={unversionedId:"guides/contributing",id:"guides/contributing",isDocsHomePage:!1,title:"Contributing to Build Tracker",description:"Thank you for your interest in helping out with Build Tracker! This is a project done with joy and care, out of our free time. Before getting started, please familiarize yourself with the Contributor Covenant Code of Conduct.",source:"@site/docs/guides/contributing.md",slug:"/guides/contributing",permalink:"/docs/guides/contributing",editUrl:"https://github.com/paularmstrong/build-tracker/edit/main/docs/docs/guides/contributing.md",version:"current",sidebar_label:"Contributing"},l=[{value:"Getting started",id:"getting-started",children:[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Make your changes",id:"make-your-changes",children:[]},{value:"Open a pull request",id:"open-a-pull-request",children:[]}]},{value:"Monorepo",id:"monorepo",children:[{value:"Package workspace structure",id:"package-workspace-structure",children:[]}]},{value:"Development",id:"development",children:[{value:"Adding a dependency to a package",id:"adding-a-dependency-to-a-package",children:[]},{value:"Don&#39;t abstract too early",id:"dont-abstract-too-early",children:[]}]},{value:"Typescript",id:"typescript",children:[]},{value:"Dev environment",id:"dev-environment",children:[]},{value:"Code integrity",id:"code-integrity",children:[]},{value:"Documentation",id:"documentation",children:[{value:"Running the docs locally",id:"running-the-docs-locally",children:[]},{value:"Updating documentation",id:"updating-documentation",children:[]},{value:"Updating other pages",id:"updating-other-pages",children:[]},{value:"Submitting your PR",id:"submitting-your-pr",children:[]},{value:"Other help",id:"other-help",children:[]}]},{value:"Publishing",id:"publishing",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Thank you for your interest in helping out with Build Tracker! This is a project done with joy and care, out of our free time. Before getting started, please familiarize yourself with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paularmstrong/build-tracker/blob/master/CODE_OF_CONDUCT.md"}),"Contributor Covenant Code of Conduct"),".")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("p",null,"Fork and pull the repository from Github. If you're unsure how to fork a repository, read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/en/articles/fork-a-repo"}),"getting started docs here"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git clone git@github.com:<myuser>/build-tracker.git\n")),Object(i.b)("h3",{id:"install-dependencies"},"Install dependencies"),Object(i.b)("p",null,"Build Tracker is a monorepo managed by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://yarnpkg.com"}),"Yarn"),". Start by installing dependencies for all packages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cd build-tracker\nyarn\n")),Object(i.b)("h3",{id:"make-your-changes"},"Make your changes"),Object(i.b)("p",null,"Always work on features in a separate branch from the main ",Object(i.b)("em",{parentName:"p"},"master")," branch."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git checkout -b my-feature\n")),Object(i.b)("p",null,"Now that you're on a branch, make changes directly to the code related to your feature or bug fix."),Object(i.b)("p",null,"Ensure to always add tests, preferrably before you start making changes. This helps both you and any future reviewer verify that the code's intentions work correctly."),Object(i.b)("p",null,"Run tests using the main script from the root of the repository:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn test\n")),Object(i.b)("p",null,"Once you've completed your changes and all of your tests pass, commit and push your branch to your fork:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'git commit -am "[bugfix] a short description of what I did"\ngit push\n')),Object(i.b)("h3",{id:"open-a-pull-request"},"Open a pull request"),Object(i.b)("p",null,"Finally, open a pull request on the main ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paularmstrong/build-tracker"}),"Build Tracker repository"),"."),Object(i.b)("h2",{id:"monorepo"},"Monorepo"),Object(i.b)("p",null,"The Build Tracker git repository is a monorepo that is composed of many publishable packages. This has been done so that it's easier to iterate on cross-functional dependencies without requiring premature publishing steps."),Object(i.b)("p",null,"The tool for managing these packages is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/lerna/lerna"}),"Lerna")," with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://yarnpkg.com/en/docs/workspaces"}),"Yarn workspaces"),"."),Object(i.b)("h3",{id:"package-workspace-structure"},"Package workspace structure"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plaintext"}),"\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u251c\u2500\u2500 blog\n\u2502\xa0\xa0 \u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 static\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 with-mariadb\n\u2502\xa0\xa0 \u2514\u2500\u2500 with-postgres\n\u2514\u2500\u2500 src\n \xa0\xa0 \u251c\u2500\u2500 api-errors\n \xa0\xa0 \u251c\u2500\u2500 app\n \xa0\xa0 \u251c\u2500\u2500 build\n \xa0\xa0 \u251c\u2500\u2500 cli\n \xa0\xa0 \u251c\u2500\u2500 comparator\n \xa0\xa0 \u251c\u2500\u2500 fixtures\n \xa0\xa0 \u251c\u2500\u2500 formatting\n \xa0\xa0 \u251c\u2500\u2500 server\n \xa0\xa0 \u2514\u2500\u2500 types\n")),Object(i.b)("h4",{id:"source-src"},"Source ",Object(i.b)("inlineCode",{parentName:"h4"},"./src")),Object(i.b)("p",null,"All core Build Tracker packages reside here."),Object(i.b)("p",null,"All folder names should be mapped as the publishable name without the ",Object(i.b)("inlineCode",{parentName:"p"},"@build-tracker")," scope. For example: ",Object(i.b)("inlineCode",{parentName:"p"},"@build-tracker/app")," is in the path ",Object(i.b)("inlineCode",{parentName:"p"},"src/app"),", while ",Object(i.b)("inlineCode",{parentName:"p"},"@build-tracker/server")," is at ",Object(i.b)("inlineCode",{parentName:"p"},"src/server"),"."),Object(i.b)("h4",{id:"plugins-plugins"},"Plugins ",Object(i.b)("inlineCode",{parentName:"h4"},"./plugins")),Object(i.b)("p",null,"All implementation-specific code for various integrations should be kept here, instead of in the ",Object(i.b)("inlineCode",{parentName:"p"},"src")," directory."),Object(i.b)("p",null,"All folder names should be mapped as the publishable name without the ",Object(i.b)("inlineCode",{parentName:"p"},"@build-tracker/plugin-")," scope. For example: ",Object(i.b)("inlineCode",{parentName:"p"},"@build-tracker/plugin-with-mariadb")," is in the path ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/with-mariadb"),"."),Object(i.b)("p",null,"Some local configs are available for development purposes. To use them, it's recommended to use a Docker container, since it's easy to seed and throw away:"),Object(i.b)("h5",{id:"mariadb"},"MariaDB"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run -p 3307:3306 --name bt-mariadb -e MYSQL_ROOT_PASSWORD=tacos -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=buildtracker -d mariadb --default-authentication-plugin=mysql_native_password\nyarn ts-node src/server/src/index.ts setup -c ./config/mariadb.js\nyarn ts-node src/server/src/index.ts seed -c ./config/mariadb.js\nyarn dev:mariadb\n")),Object(i.b)("h5",{id:"mysql"},"MySQL"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run -p 3306:3306 --name bt-mysql -e MYSQL_ROOT_PASSWORD=tacos -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=buildtracker -d mysql --default-authentication-plugin=mysql_native_password\nyarn ts-node src/server/src/index.ts setup -c ./config/mysql.js\nyarn ts-node src/server/src/index.ts seed -c ./config/mysql.js\nyarn dev:mysql\n")),Object(i.b)("h5",{id:"postgres"},"Postgres"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run --name pg -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=buildtracker -p 54320:5432 -d postgres\nyarn ts-node src/server/src/index.ts setup -c ./config/postgres.js\nyarn ts-node src/server/src/index.ts seed -c ./config/postgres.js\nyarn dev:postgres\n")),Object(i.b)("h4",{id:"docs-docs"},"Docs ",Object(i.b)("inlineCode",{parentName:"h4"},"./docs")),Object(i.b)("p",null,"This directory holds packages related to the documentation website"),Object(i.b)("h2",{id:"development"},"Development"),Object(i.b)("p",null,"Here are some things to keep in mind while working in a monorepo:"),Object(i.b)("h3",{id:"adding-a-dependency-to-a-package"},"Adding a dependency to a package"),Object(i.b)("p",null,"To add a third-party dependency to a sub-package in the Build Tracker repository, ensure that it's done from the specific sub-package using the ",Object(i.b)("inlineCode",{parentName:"p"},"yarn workspace")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# To add to the @build-tracker/app package\n$ yarn workspace @build-tracker/app add <some-third-party-module>\n")),Object(i.b)("h3",{id:"dont-abstract-too-early"},"Don't abstract too early"),Object(i.b)("p",null,"Repeating code is not inherently bad. If some logic clearly fits in one of the already published packages, that's probably the right place for it. If there isn't a package available for something that is reusable, use your best judgement about complexity and scope of functions to determine if a new package is warranted."),Object(i.b)("h2",{id:"typescript"},"Typescript"),Object(i.b)("p",null,"Build Tracker is written in Typescript throughout all workspaces. Please do not add code that is not written in Typescript or change to another language."),Object(i.b)("h2",{id:"dev-environment"},"Dev environment"),Object(i.b)("p",null,"To run the development environment, first, run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn build")," to prebuild some static sources. Once that is done you can run one of the pre-configured test/dev environments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn dev")," Run the server and application in a hot-reloadable environment using pre-seeded builds on the filesystem"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn dev:large")," This is the same as ",Object(i.b)("inlineCode",{parentName:"li"},"yarn:dev"),", but with a larger dataset. More builds and many more artifacts in each."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn dev:maria")," Run the server using a local MariaDB instance (see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#mariadb"}),"plugins")," for more requirements)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn dev:postgres")," Run the server using a local Postgres instance (see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#postgres"}),"plugins")," for more requirements)")),Object(i.b)("h2",{id:"code-integrity"},"Code integrity"),Object(i.b)("p",null,"The following conformance checks can be run manually and will be automatically run on ",Object(i.b)("inlineCode",{parentName:"p"},"pre-commit")," as well as during the pull-request verification flow via Github Actions."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn lint")," Lint and auto-format code"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn test")," Jest tests"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yarn tsc")," Typescript type check")),Object(i.b)("h2",{id:"documentation"},"Documentation"),Object(i.b)("p",null,"Documentation is a great place to get started contributing to the Build Tracker project because writing good docs is difficult. For that reason, your help is ",Object(i.b)("em",{parentName:"p"},"always")," appreciated."),Object(i.b)("h3",{id:"running-the-docs-locally"},"Running the docs locally"),Object(i.b)("p",null,"To run the documentation with hot reloading from your local machine, simple run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ yarn docs\n# \u2026 webpack may need a moment to build\n\u2714 Client\n  Compiled successfully in 15.58s\n\n\u2139 \uff62wds\uff63: Project is running at http://localhost:3000/\n\u2139 \uff62wds\uff63: webpack output is served from /\n\u2139 \uff62wds\uff63: Content not from webpack is served from /Users/parmstrong/Development/build-tracker/docs\n\u2139 \uff62wds\uff63: 404s will fallback to /index.html\n")),Object(i.b)("p",null,"Your browser should automatically be opened to the documentation site running locally. If it is not, you can visit ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," (or swap the port ",Object(i.b)("inlineCode",{parentName:"p"},"3000")," with whatever is on the last line of the output above)"),Object(i.b)("h3",{id:"updating-documentation"},"Updating documentation"),Object(i.b)("p",null,"To update any documentation pages, open the appropriate Markdown files in ",Object(i.b)("inlineCode",{parentName:"p"},"./docs/docs"),". Make any changes you\u2019d like."),Object(i.b)("h3",{id:"updating-other-pages"},"Updating other pages"),Object(i.b)("p",null,"All pages and templates are written with React.js and can be found in ",Object(i.b)("inlineCode",{parentName:"p"},"src/pages"),"."),Object(i.b)("h3",{id:"submitting-your-pr"},"Submitting your PR"),Object(i.b)("p",null,"After your changes look the way you want on your local documentation server. You can close the server down (",Object(i.b)("inlineCode",{parentName:"p"},"CTRL+C"),"). Commit your changes to a local feature branch, push them to your fork on GitHub, and open a PR on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paularmstrong/build-tracker"}),"Build Tracker repository"),"."),Object(i.b)("h3",{id:"other-help"},"Other help"),Object(i.b)("p",null,"Build Tracker uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io"}),"Docusaurus")," for generating it's docs. If you're unfamiliar with any of the internals of how the docs are built, structured, or how to add a feature to them, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io"}),"official docs")," are the best place to start."),Object(i.b)("h2",{id:"publishing"},"Publishing"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"yarn build")," - Build all packages"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"yarn lerna publish")," - Lerna will request a new version and publish only the changed packages")))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);