"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[401],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,u=m["".concat(l,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={},l="\u524d\u7aef\u90e8\u7f72",s={unversionedId:"quickstart/deploy/web",id:"quickstart/deploy/web",title:"\u524d\u7aef\u90e8\u7f72",description:"\u6211\u4eec\u5efa\u8bae\u901a\u8fc7 docker \u90e8\u7f72\uff0c\u89e3\u51b3\u73af\u5883\u5b89\u88c5\u7684\u70e6\u607c",source:"@site/docs/quickstart/deploy/web.md",sourceDirName:"quickstart/deploy",slug:"/quickstart/deploy/web",permalink:"/Taier/docs/quickstart/deploy/web",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/deploy/web.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u540e\u7aef\u90e8\u7f72",permalink:"/Taier/docs/quickstart/deploy/backend"},next:{title:"docker \u90e8\u7f72",permalink:"/Taier/docs/quickstart/deploy/docker"}},d=[{value:"\u51c6\u5907\u524d\u7aef\u90e8\u7f72\u73af\u5883",id:"\u51c6\u5907\u524d\u7aef\u90e8\u7f72\u73af\u5883",children:[],level:2},{value:"\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56",id:"\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u524d\u7aef\u90e8\u7f72"},"\u524d\u7aef\u90e8\u7f72"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6211\u4eec\u5efa\u8bae\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"/Taier/docs/quickstart/deploy/docker"},"docker \u90e8\u7f72"),"\uff0c\u89e3\u51b3\u73af\u5883\u5b89\u88c5\u7684\u70e6\u607c"))),(0,i.kt)("h2",{id:"\u51c6\u5907\u524d\u7aef\u90e8\u7f72\u73af\u5883"},"\u51c6\u5907\u524d\u7aef\u90e8\u7f72\u73af\u5883"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"li"},"Node.js")," \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ wget https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64.tar.xz\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5176\u4ed6\u7248\u672c\u5b89\u88c5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u5b89\u88c5\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," \u7684\u7248\u672c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"v16.14.0"),", \u5982\u679c\u9700\u8981\u4e0b\u8f7d\u4e0d\u540c\u7684\u7248\u672c\u6216\u5176\u4ed6\u5e73\u53f0\u7684 Node.js \u5b89\u88c5\u5305\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/download/"},"https://nodejs.org/zh-cn/download/")," \u67e5\u8be2\u5176\u4ed6\u7248\u672c\u3002"),(0,i.kt)("p",{parentName:"div"},"\u6211\u4eec\u5efa\u8bae ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," \u7684\u7248\u672c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"12.18.0")," \u53ca\u4ee5\u4e0a\u3002"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u89e3\u538b\u6e90\u7801\u6587\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ xz -d node-v16.14.0-linux-x64.tar.xz\n$ tar xvf node-v16.14.0-linux-x64.tar\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u7f16\u8f91\u73af\u5883\u53d8\u91cf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim /etc/profile\n")),(0,i.kt)("p",null,"\u6253\u5f00 vim \u7f16\u8f91\u5668\u540e\uff0c\u5728\u6587\u4ef6\u6700\u4e0b\u9762\u7c98\u8d34\u5982\u4e0b\u5185\u5bb9:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#set for nodejs\nexport NODE_HOME=/usr/local/node/16.14.0\nexport PATH=$NODE_HOME/bin:$PATH\n")),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},":wq")," \u4fdd\u5b58\u5e76\u9000\u51fa\uff0c\u9000\u51fa\u540e\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u4f7f\u4e4b\u751f\u6548:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ source /etc/profile\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u5b89\u88c5")),(0,i.kt)("p",null,"\u901a\u8fc7\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"node -v")," \u662f\u5426\u8f93\u51fa Node.js \u7684\u7248\u672c\u4fe1\u606f\u5224\u65ad\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ node -v\nv16.14.0\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6765\u7ba1\u7406\u524d\u7aef\u9879\u76ee\u4f9d\u8d56")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn"))),(0,i.kt)("p",null,"\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," \u7684\u540c\u65f6\uff0c\u4f1a\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),"\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," \u6765\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm -v\n6.14.13\n$ npm install -g yarn\n")),(0,i.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u786e\u8ba4\u662f\u5426\u5b89\u88c5\u6210\u529f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn -v\n1.22.10\n")),(0,i.kt)("h2",{id:"\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56"},"\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56"),(0,i.kt)("p",null,"\u5c06\u5f53\u524d\u8def\u5f84\u5207\u6362\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"taier-ui")," \u6587\u4ef6\u5939\u4e0b\uff0c\u7136\u540e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," \u5f00\u59cb\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ pwd\n~/Your-Project-Path/Taier/taier-ui\n$ yarn\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5207\u6362\u6dd8\u5b9d\u6e90")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u56fd\u5185\u7528\u6237\u5728\u5b89\u88c5\u4f9d\u8d56\u7684\u65f6\u5019\u4f1a\u6bd4\u8f83\u6162\uff0c\u53ef\u4ee5\u5728\u5b89\u88c5\u4e4b\u524d\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684\u6e90\u6362\u6210\u6dd8\u5b9d\u6e90."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn config set registry https://registry.npm.taobao.org/\n")))),(0,i.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5f53\u524d\u8def\u5f84\u4e0b\u4f1a\u65b0\u589e ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u6587\u4ef6\u5939 \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn.lock")," \u6587\u4ef6\uff0c\u524d\u8005\u662f\u4fdd\u5b58\u5f53\u524d\u9879\u76ee\u7684\u4f9d\u8d56\uff0c\u540e\u8005\u662f\u8bb0\u5f55\u5f53\u524d\u9879\u76ee\u7684\u4f9d\u8d56\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u6210\u529f\u540e\uff0c\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn build")," \u5bf9\u9879\u76ee\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn build\n")),(0,i.kt)("p",null,"\u9879\u76ee\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4f1a\u5c06\u7f16\u8bd1\u540e\u7684\u7ed3\u679c\u5b58\u653e\u5728\u5f53\u524d\u76ee\u5f55\u7684 dist \u6587\u4ef6\u5939\u4e0b\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 cup.config.js\n\u251c\u2500\u2500 dist # \u7f16\u8bd1\u7ed3\u679c\u6587\u4ef6\n\u251c\u2500\u2500 node_modules # \u9879\u76ee\u4f9d\u8d56\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pom.xml\n\u251c\u2500\u2500 public\n\u251c\u2500\u2500 scripts\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 tailwind.config.js\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 typings.d.ts\n\u2514\u2500\u2500 yarn.lock\n")),(0,i.kt)("p",null,"\u7136\u540e\u8fd9\u91cc\u6211\u4eec\u501f\u52a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"mini-cup")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"pm2")," \u7684\u80fd\u529b\u6765\u542f\u52a8\u670d\u52a1\u5668\uff0c\u9996\u5148\u5148\u5168\u5c40\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"mini-cup")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"pm2"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn global add pm2 mini-cup\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pm2"},(0,i.kt)("inlineCode",{parentName:"a"},"PM2"))," is a production process manager for Node.js applications with a built-in load balancer."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/wewoor/cup"},(0,i.kt)("inlineCode",{parentName:"a"},"mini-cup"))," is a lightweight web server for web applications."))),(0,i.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"taier-ui"),"\u76ee\u5f55\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8\u670d\u52a1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ pwd\n/Your-Project-Path/Taier/taier-ui\n$ pm2 start cup\n")),(0,i.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u540e\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165 http://localhost:8080/ \u5373\u53ef\u770b\u5230\u9875\u9762\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5efa\u8bae\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"hosts")," \u8fdb\u884c\u5f00\u53d1"))),(0,i.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u67e5\u627e\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"cup.config.js")," \u6587\u4ef6\uff0c\u5e76\u5c06\u8be5\u6587\u4ef6\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\u670d\u52a1\u5668\uff0c\u8be5\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="cup.config.js"',title:'"cup.config.js"'},'const publicURL = "http://taier.dtstack.cn"; // \u8df3\u8f6c\u5230\u540e\u7aef\u90e8\u7f72\u7684\u76ee\u5f55\n\nmodule.exports = {\n  name: "taier",\n  listen: 8080, // \u670d\u52a1\u542f\u52a8\u7aef\u53e3\n  root: "./dist", // \u670d\u52a1\u542f\u52a8\u7684\u6839\u76ee\u5f55\n  proxyTable: {\n    // \u670d\u52a1\u542f\u52a8\u540e\u7684\u8bf7\u6c42\u4ee3\u7406\u8f6c\u53d1\n    "/taier": {\n      target: `${publicURL}:8090`,\n      changeOrigin: true,\n      secure: false,\n    },\n  },\n};\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"mini-cup")," \u670d\u52a1\u5668\u4ec5\u7528\u4f5c\u672c\u5730\u5feb\u901f\u90e8\u7f72\uff0c\u5728\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," \u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u3002"))),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," \u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e00\u4efd\u914d\u7f6e\u6587\u4ef6",(0,i.kt)("strong",{parentName:"p"},"\u4ec5\u4f9b\u53c2\u8003"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx",metastring:'title="taier.conf"',title:'"taier.conf"'},"upstream taier{\n  server Your-Server-IP:Your-Server-PORT;\n}\n\n\nserver {\n  listen *:80;\n  listen [::]:80;\n  # The host name to respond to\n  server_name .taier.dtstack.com .taier.dtstack.cn;\n  client_max_body_size  100m;\n\n  proxy_set_header   cache-control no-cache;\n  proxy_ignore_headers Cache-Control Expires;\n  proxy_set_header   Referer $http_referer;\n  proxy_set_header   Host   $host;\n  proxy_set_header   Cookie $http_cookie;\n  proxy_set_header   X-Real-IP  $remote_addr;\n  proxy_set_header X-Forwarded-Host $host;\n  proxy_set_header X-Forwarded-Server $host;\n  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n\n  location / {\n    proxy_set_header X-Real-IP  $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header Host $host;\n    proxy_pass http://Your-address-ip:8080;\n  }\n\n  location /taier {\n    proxy_set_header X-Real-IP  $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header Host $host;\n    proxy_pass http://taier;\n  }\n}\n")))}m.isMDXComponent=!0}}]);