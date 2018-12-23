(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return A}),n.d(t,"StaticQueryContext",function(){return g}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(133),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(135),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var g=r.a.createContext({}),m=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function A(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,n){var a;e.exports=(a=n(140))&&a.default||a},136:function(e,t,n){"use strict";var a=n(142),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(152),s=n.n(c),u=n(134),d=n(143),g=n.n(d),m=(n(144),n(156)),A=n.n(m),p=n(6),h=n.n(p),f=n(145),I=n.n(f),v=n(146),E=n.n(v),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n}h()(t,e);var n=t.prototype;return n.toggleMenu=function(){this.setState({isOpen:!this.state.isOpen},this.toggleNoScroll)},n.toggleNoScroll=function(){this.state.isOpen?(document.body.classList.add("overflow-hidden"),document.documentElement.classList.add("overflow-hidden")):(document.body.classList.remove("overflow-hidden"),document.documentElement.classList.remove("overflow-hidden"))},n.handleNavClick=function(){this.state.isOpen&&this.toggleMenu()},n.render=function(){var e=this;return i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"menu__overlay"+(this.state.isOpen?" is-open":"")},i.a.createElement("div",{className:"menu__header"},i.a.createElement("h2",{className:"font-medium"},i.a.createElement(u.Link,{to:"/"},"roos van ",i.a.createElement("br",null),"greevenbroek")),i.a.createElement("button",{className:"button",onClick:function(){return e.toggleMenu()}},i.a.createElement("img",{src:E.a,alt:""}))),i.a.createElement("nav",{className:"menu__nav",onClick:function(){return e.handleNavClick()}},this.props.children)),i.a.createElement("button",{className:"menu__button button",onClick:function(){return e.toggleMenu()}},i.a.createElement("img",{src:I.a,alt:""})))},t}(i.a.Component),C=function(e){e.siteTitle;return i.a.createElement("header",{className:"site-header",id:"top"},i.a.createElement(A.a,{pinStart:30},i.a.createElement("div",{className:"site-header__inner"},i.a.createElement("h1",{className:"site-header__logo"},i.a.createElement(u.Link,{to:"/"},"roos van ",i.a.createElement("br",null),"greevenbroek")),i.a.createElement(y,null,i.a.createElement(u.Link,{to:"#portfolio"},"portfolio"),i.a.createElement(u.Link,{to:"#process"},"process"),i.a.createElement(u.Link,{to:"/about"},"about")))))},M=function(e){e.siteTitle;return i.a.createElement("footer",{className:"site-footer"},i.a.createElement("div",{className:"site-footer__inner"},i.a.createElement("span",null,"© ",(new Date).getFullYear()," Roos van Greevenbroek"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/roos-van-greevenbroek-7b1a24101/",className:"link",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:roosvangreevenbroek@gmail.com",className:"link"},"Email")))))},N=function(e){var t=e.children,n=e.classes;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"shortcut icon",type:"image/png",href:""+g.a}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",{className:"content--large relative "+n},t),i.a.createElement(M,null))},data:a})};N.propTypes={children:l.a.node.isRequired};t.a=N},140:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(49),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Roos van Greevenbroek | UX designer"}}}}},143:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAABV1JREFUWIWdl79vHEUUxz+zu7d7P9c2IXA6uYIQJEeigaCIBtwGyRJNmlQI8Q/QRnIRKUUo6KjT4MaNJaOkoUhrKVChuAqd5ThKgh3nzvdjfwzFvOcZLgFMVlrdztzMe9/5vp9jOPPzMIV4FcZrUK9ANYByABGQ7kNjHxq7wDZ8eB/M7CxSzX8v2exDax3y69DKoQIaQAyMgVrEpPI2gOQYqg2ob8KlgzcEcC+D4gYk30HccQojUZqJsgJI5I1kLpYxQDGC8gdYugUfTP8HgLt9mGyBueJOFMnSEpiK4gxYkDcCZjh2jLDQkO8xMNkBvoLVV9h4DYDtj6C4C/WyE9KVExU4uhEQyIlbwVwhDLSAJt5MBWD2YHwVrv7+LwA2+1A8gHLZbWoAPTltJa8VQE1RpGY5lt9I5hdk3VTYARjvQXUZrp0yEXnl9zJ4sQXFsqO6AibAM3nHwIkomuDWzOR0lfyG44nseSl7hsBkGU62nK5XAPxxw9k8DqhNA0UJ0BY2AEbAU+AIb5pQ5FQAj2XtUL5nV+DljTkT3OnD4SNodpwAK8qaAsDggZlA6AyDwZ6KSgRgIjIKAVKJuobIXRhB+wKsHji45sk6pu64zU0Rdgz8KVRafBhaEeYAWTMG8xjMMzCj4OQvgMNToP68Fqg6EK/LzGYKT55CN3fKT4TaQsA0cZGQCwM2OFElbEzk1GGCOsJHSxPo4PNHFzh3DAvnE+JfV6l6ubNjLYLOC+qZoK7kuwzYmE8+uP/NCdgSiDCkAFgyUZ4JkByIc7CrCVVrzSFqBkp0YQMffkN8LtAYN3gHlNNZBdzCMpP/W/JmcvquzI/WEnh7xcWsEdo0lAiER3JidbRYhCnlGnpqY3Ays2Bezbko8iZAtJJAb+AGVaBAE06Mdz4Nr1pYCp2yDkClOD+a4VNyFrCgfmSAepDA8wHGgq3xMT7B53QFpvVAaVchWnhivKP1ZJzj03gqDCjoDBgPEjgEO0OTjyE7JdGbQGeUiRBQLOsiAaxpeBFYkr1H+DKu4BPA2gSG+1BfNFis0OlANGWDDQBYoV9PrGuUMTWZCdY0gn2lmEfny8cJdPfBXrQmA5tgScAUTqht4B8tSuqESzIXOqayUQqoaWDKVMYWX6rZTwzv7lrqL4ytJV6bYCe4DKadThlQp9RraKpt64AJ3TOV9RU+AbVkTQHMdiNLtQ0GyxCXfktZnOHydle+NTFp6zXfoBT4glPiquAz4DkuJR/JnKblCGhvSyo+eAoHuRO6gPPmEu9YE9nYFto1tSL/aaHSNZ2Afk1omiMS4C2gdwz5+QiuzYANQx/DuUBBC58TDC6kmoFtNUK0D1DWZjhHU1amwXp1zhIoN8DMZOb7PjQeQaPjwqcjdJ3Ihjqwn3qzhpzWjyX5HgvoREBpKs/lcBGQjqB3Ad45kCryyxDzWROqz73jxHiPVbu3Zawdk6ZXzXgW34KdxrrI0yRUAOVteO9n9QT3vL90C6IdokruFBrX4MOvxlfGir+34Cc4RzvCd0IT2buIb27rHWjdUrVzTemdPjQeQCJNqdpSqdPyqywtyhgBNBLFWqRS2ZsrQ3sQXw4vK0FPCPD1AYy/hMmeN0OIU/sB9XQNQxOI0lLexteNMfB8Dw6vzt+U/uFi8mMf8i3IrvheX39VsG7t4kK3wse59gtqynQHytdeTOL5CffcG8K3P0FhofcJDFMHYEEAaC7v4uM8bFDUf6IRcBsG38DHL16n6QyX07t9eLkO9XWIct/hZHjqNVISpLc4hvYGxDfh0ze9nM4/D1P4bRUma5CvuEYmHUjPINfz9i6YbWjeh0tnup7/BaU72wplR6n2AAAAAElFTkSuQmCC"},144:function(e,t,n){},145:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI1IDE4Ij4KICAgIDxnIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNXYySDB6TTAgOGgyNXYySDB6TTAgMTZoMjV2MkgweiIvPgogICAgPC9nPgo8L3N2Zz4K"},146:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIzIDI0Ij4KICAgIDxnIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS4xMjkgMjEuNjc0TDIxLjE3NC42MjlsMS42OTcgMS42OTdMMS44MjYgMjMuMzcxeiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xLjgyNi42MjlsMjEuMDQ1IDIxLjA0NS0xLjY5NyAxLjY5N0wuMTI5IDIuMzI2eiIvPgogICAgPC9nPgo8L3N2Zz4K"},149:function(e,t,n){var a=n(24),r=n(21),i=n(23),o=/"/g,l=function(e,t,n,a){var r=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=1-a02afa561e76e1fe034c.js.map