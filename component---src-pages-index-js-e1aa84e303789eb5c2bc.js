(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(141),o=a(134),s=a(145),l=function(){return r.a.createElement("section",{className:"intro"},r.a.createElement("h1",null,"Hi! My name is Roos and I’m an self-motivated UX designer based in Amsterdam."),r.a.createElement("p",{className:"h2"},"I’m passionate about creating meaning and positivity to peoples lives. I use my psychological background and my UX-knowledge to seamlessly adapt digital products to the needs of users. Feel free to send me an ",r.a.createElement("a",{href:"mailto:roosvangreevenbroek@gmail.com",className:"link"},"e-mail"),", link up at ",r.a.createElement("a",{href:"https://www.linkedin.com/in/roos-van-greevenbroek-7b1a24101/",target:"_blank",rel:"noopener noreferrer",className:"link"},"LinkedIn")," or read more ",r.a.createElement(o.Link,{to:"/about",className:"link"},"about me"),"."),r.a.createElement(s.a,{anchor:"#portfolio"}))},c=(a(28),a(148)),u=a.n(c),d=a(152),m=a.n(d),f=function(e){var t=e.fm,a=t.image.childImageSharp;return r.a.createElement("section",{className:"project-showcase"},r.a.createElement(o.Link,{to:t.path,className:"project-showcase__image"},r.a.createElement(u.a,{sizes:Object.assign({},a.sizes,{aspectRatio:1.5}),className:"",imgStyle:{transition:"transform .2s ease-out"}})),r.a.createElement("div",{className:"project-showcase__content"},r.a.createElement("h3",null,t.supertitle),r.a.createElement("h2",null,t.title),r.a.createElement(o.Link,{to:t.path,className:"link"},"View project",r.a.createElement("img",{src:m.a,alt:"",className:"link__icon"})),r.a.createElement("div",{className:"project-showcase__additional-info"},r.a.createElement("div",null,r.a.createElement("h4",null,"My role"),t.role_expanded),r.a.createElement("div",null,r.a.createElement("h4",null,"Main goal"),t.goal))))},g=(a(170),a(30),function(e){if(e)return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}),p=function(e){var t=e.title;return r.a.createElement("header",{className:"section-header",id:g(t)},r.a.createElement("h4",null,t))},h=function(e){var t=e.number,a=e.title,n=e.text;return r.a.createElement("div",{className:"process-block"},r.a.createElement("h4",{className:"process-block__title"},r.a.createElement("span",{style:{color:t.color}},t.number),a),r.a.createElement("p",{className:"process-block__text"},n))},b=a(172),I=a.n(b);a(173);a.d(t,"query",function(){return y});t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(l,null),r.a.createElement(p,{title:"Portfolio"}),t.allMarkdownRemark.edges.map(function(e){var t=e.node,a=t.frontmatter;return r.a.createElement(f,{key:t.id,fm:a})}),r.a.createElement(p,{title:"Process"}),r.a.createElement("section",null,r.a.createElement("div",{className:"content--small mb-6"},r.a.createElement("img",{src:I.a,alt:"",className:""})),r.a.createElement("div",{className:"process-block-container"},r.a.createElement("div",null,r.a.createElement(h,{number:{number:"01",color:"#263eb6"},title:"Research",text:"To understand the problem, I’ll first conduct market research and work together with you to understand your goals and view."}),r.a.createElement(h,{number:{number:"02",color:"#5e5c9d"},title:"Empathize with user",text:"I rely on my psychological skills to discover and understand the (unmet) needs, thoughts and behaviour of users during interviews, user tests and usability evaluation."}),r.a.createElement(h,{number:{number:"03",color:"#85788e"},title:"Define problem",text:"While translating the collected data into the actual flow your user is following, I’ll accentuate their goals and pain-points to frame and define the problem by making persona’s, user journeys and empathy maps."}),r.a.createElement(h,{number:{number:"04",color:"#efc66f"},title:"Develop solutions",text:"To define concepts for solutions, I’ll use the feedback from users, stakeholders, and team brainstorm sessions to sketch my ideas. After a lot of sketching, I create a storyboard with the best suited solution and new improved interaction."})),r.a.createElement("div",null,r.a.createElement(h,{number:{number:"05",color:"#9db48b"},title:"Visualize interaction",text:"To communicate the solutions to the user, I’ll create wireframes as early as possible and, depending which stage, low or high fidelity prototypes so I can get perspective and test the new interactions with users."}),r.a.createElement(h,{number:{number:"06",color:"#6ba9a1"},title:"Test prototype",text:"People often don’t know what they want exactly. To collect usefull and honest feedback about the prototype, I mainly observe users behaviour during the usertest. This often reflects their needs more than what users express verbally. I’ll also ask users to think out loud and note their expectations and thoughts about the prototype."}),r.a.createElement(h,{number:{number:"07",color:"#5892a4"},title:"Design UI",text:"Once the prototype is refined after multiple iterations, I’ll focus on the visual design, adding colour and typography, matching your brand and purpose."}),r.a.createElement(h,{number:{number:"08",color:"#3e68ad"},title:"Test UI",text:"Because the UI can affect the view of your user, I’ll perform another test and check if the users needs are met."})))),r.a.createElement(s.a,{anchor:"#top",direction:"up",classes:"mt-4"}))};var y="1797031944"},134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(133),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(135),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(29);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,a){var n;e.exports=(n=a(136))&&n.default||n},136:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(47),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},137:function(e){e.exports={data:{site:{siteMetadata:{title:"Roos van Greevenbroek | UX designer"}}}}},138:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAABV1JREFUWIWdl79vHEUUxz+zu7d7P9c2IXA6uYIQJEeigaCIBtwGyRJNmlQI8Q/QRnIRKUUo6KjT4MaNJaOkoUhrKVChuAqd5ThKgh3nzvdjfwzFvOcZLgFMVlrdztzMe9/5vp9jOPPzMIV4FcZrUK9ANYByABGQ7kNjHxq7wDZ8eB/M7CxSzX8v2exDax3y69DKoQIaQAyMgVrEpPI2gOQYqg2ob8KlgzcEcC+D4gYk30HccQojUZqJsgJI5I1kLpYxQDGC8gdYugUfTP8HgLt9mGyBueJOFMnSEpiK4gxYkDcCZjh2jLDQkO8xMNkBvoLVV9h4DYDtj6C4C/WyE9KVExU4uhEQyIlbwVwhDLSAJt5MBWD2YHwVrv7+LwA2+1A8gHLZbWoAPTltJa8VQE1RpGY5lt9I5hdk3VTYARjvQXUZrp0yEXnl9zJ4sQXFsqO6AibAM3nHwIkomuDWzOR0lfyG44nseSl7hsBkGU62nK5XAPxxw9k8DqhNA0UJ0BY2AEbAU+AIb5pQ5FQAj2XtUL5nV+DljTkT3OnD4SNodpwAK8qaAsDggZlA6AyDwZ6KSgRgIjIKAVKJuobIXRhB+wKsHji45sk6pu64zU0Rdgz8KVRafBhaEeYAWTMG8xjMMzCj4OQvgMNToP68Fqg6EK/LzGYKT55CN3fKT4TaQsA0cZGQCwM2OFElbEzk1GGCOsJHSxPo4PNHFzh3DAvnE+JfV6l6ubNjLYLOC+qZoK7kuwzYmE8+uP/NCdgSiDCkAFgyUZ4JkByIc7CrCVVrzSFqBkp0YQMffkN8LtAYN3gHlNNZBdzCMpP/W/JmcvquzI/WEnh7xcWsEdo0lAiER3JidbRYhCnlGnpqY3Ays2Bezbko8iZAtJJAb+AGVaBAE06Mdz4Nr1pYCp2yDkClOD+a4VNyFrCgfmSAepDA8wHGgq3xMT7B53QFpvVAaVchWnhivKP1ZJzj03gqDCjoDBgPEjgEO0OTjyE7JdGbQGeUiRBQLOsiAaxpeBFYkr1H+DKu4BPA2gSG+1BfNFis0OlANGWDDQBYoV9PrGuUMTWZCdY0gn2lmEfny8cJdPfBXrQmA5tgScAUTqht4B8tSuqESzIXOqayUQqoaWDKVMYWX6rZTwzv7lrqL4ytJV6bYCe4DKadThlQp9RraKpt64AJ3TOV9RU+AbVkTQHMdiNLtQ0GyxCXfktZnOHydle+NTFp6zXfoBT4glPiquAz4DkuJR/JnKblCGhvSyo+eAoHuRO6gPPmEu9YE9nYFto1tSL/aaHSNZ2Afk1omiMS4C2gdwz5+QiuzYANQx/DuUBBC58TDC6kmoFtNUK0D1DWZjhHU1amwXp1zhIoN8DMZOb7PjQeQaPjwqcjdJ3Ihjqwn3qzhpzWjyX5HgvoREBpKs/lcBGQjqB3Ad45kCryyxDzWROqz73jxHiPVbu3Zawdk6ZXzXgW34KdxrrI0yRUAOVteO9n9QT3vL90C6IdokruFBrX4MOvxlfGir+34Cc4RzvCd0IT2buIb27rHWjdUrVzTemdPjQeQCJNqdpSqdPyqywtyhgBNBLFWqRS2ZsrQ3sQXw4vK0FPCPD1AYy/hMmeN0OIU/sB9XQNQxOI0lLexteNMfB8Dw6vzt+U/uFi8mMf8i3IrvheX39VsG7t4kK3wse59gtqynQHytdeTOL5CffcG8K3P0FhofcJDFMHYEEAaC7v4uM8bFDUf6IRcBsG38DHL16n6QyX07t9eLkO9XWIct/hZHjqNVISpLc4hvYGxDfh0ze9nM4/D1P4bRUma5CvuEYmHUjPINfz9i6YbWjeh0tnup7/BaU72wplR6n2AAAAAElFTkSuQmCC"},139:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI1IDE4Ij4KICAgIDxnIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNXYySDB6TTAgOGgyNXYySDB6TTAgMTZoMjV2MkgweiIvPgogICAgPC9nPgo8L3N2Zz4K"},140:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIzIDI0Ij4KICAgIDxnIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS4xMjkgMjEuNjc0TDIxLjE3NC42MjlsMS42OTcgMS42OTdMMS44MjYgMjMuMzcxeiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xLjgyNi42MjlsMjEuMDQ1IDIxLjA0NS0xLjY5NyAxLjY5N0wuMTI5IDIuMzI2eiIvPgogICAgPC9nPgo8L3N2Zz4K"},141:function(e,t,a){"use strict";var n=a(137),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(143),c=a.n(l),u=a(134),d=a(138),m=a.n(d),f=a(144),g=a.n(f),p=a(6),h=a.n(p),b=a(139),I=a.n(b),y=a(140),v=a.n(y),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}h()(t,e);var a=t.prototype;return a.toggleMenu=function(){this.setState({isOpen:!this.state.isOpen},this.toggleNoScroll)},a.toggleNoScroll=function(){this.state.isOpen?(document.body.classList.add("overflow-hidden"),document.documentElement.classList.add("overflow-hidden")):(document.body.classList.remove("overflow-hidden"),document.documentElement.classList.remove("overflow-hidden"))},a.handleNavClick=function(){this.state.isOpen&&this.toggleMenu()},a.render=function(){var e=this;return i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"menu__overlay"+(this.state.isOpen?" is-open":"")},i.a.createElement("div",{className:"menu__header"},i.a.createElement("h2",{className:"font-medium"},i.a.createElement(u.Link,{to:"/"},"roos van ",i.a.createElement("br",null),"greevenbroek")),i.a.createElement("button",{className:"button",onClick:function(){return e.toggleMenu()}},i.a.createElement("img",{src:v.a,alt:""}))),i.a.createElement("nav",{className:"menu__nav",onClick:function(){return e.handleNavClick()}},this.props.children)),i.a.createElement("button",{className:"menu__button button",onClick:function(){return e.toggleMenu()}},i.a.createElement("img",{src:I.a,alt:""})))},t}(i.a.Component),w=function(e){e.siteTitle;return i.a.createElement("header",{className:"site-header",id:"top"},i.a.createElement(g.a,{pinStart:30},i.a.createElement("div",{className:"site-header__inner"},i.a.createElement("h1",{className:"site-header__logo"},i.a.createElement(u.Link,{to:"/"},"roos van ",i.a.createElement("br",null),"greevenbroek")),i.a.createElement(E,null,i.a.createElement(u.Link,{to:"#portfolio"},"portfolio"),i.a.createElement(u.Link,{to:"#process"},"process"),i.a.createElement(u.Link,{to:"/about"},"about")))))},A=function(e){e.siteTitle;return i.a.createElement("footer",{className:"site-footer"},i.a.createElement("div",{className:"site-footer__inner"},i.a.createElement("span",null,"© ",(new Date).getFullYear()," Roos van Greevenbroek"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/roos-van-greevenbroek-7b1a24101/",className:"link",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:roosvangreevenbroek@gmail.com",className:"link"},"Email")))))},k=function(e){var t=e.children,a=e.classes;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"shortcut icon",type:"image/png",href:""+m.a}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",{className:"content--large relative "+a},t),i.a.createElement(A,null))},data:n})};k.propTypes={children:s.a.node.isRequired};t.a=k},142:function(e,t,a){var n=a(23),r=a(21),i=a(22),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},145:function(e,t,a){"use strict";a(150);var n=a(0),r=a.n(n),i=a(151),o=a.n(i);t.a=function(e){var t=e.anchor,a=e.direction,n=void 0===a?"down":a,i=e.classes;return r.a.createElement("a",{href:t,className:"arrow-button arrow-button--"+n+" "+i},r.a.createElement("img",{src:o.a,alt:"Arrow"}))}},148:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(6)),o=n(a(46)),s=n(a(146)),l=n(a(147)),c=n(a(0)),u=n(a(4)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m={},f=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!m[a]||(m[a]=!0,!1)},g=[];var p=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),g.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!0,i=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!1,i=!0),"undefined"==typeof window&&(n=!1,r=!1),t.critical&&(n=!0,r=!1,i=!1);var u=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:r,IOSupported:i,fadeIn:s,hasNoScript:u,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,g=e.fluid,p=e.fixed,I=e.backgroundColor,y=e.Tag,v="boolean"==typeof I?"lightgray":I,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,m),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),A={title:t,alt:this.state.isVisible?"":a,style:E,className:f};if(g){var k=g;return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&c.default.createElement(b,(0,l.default)({src:k.base64},A)),k.tracedSVG&&c.default.createElement(b,(0,l.default)({src:k.tracedSVG},A)),v&&c.default.createElement(y,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),c.default.createElement(b,{alt:a,title:t,src:k.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},k))}}))}if(p){var M=p,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete N.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},M.base64&&c.default.createElement(b,(0,l.default)({src:M.base64},A)),M.tracedSVG&&c.default.createElement(b,(0,l.default)({src:M.tracedSVG},A)),v&&c.default.createElement(y,{title:t,style:{backgroundColor:v,width:M.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:M.height}}),this.state.isVisible&&c.default.createElement("picture",null,M.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),c.default.createElement("source",{srcSet:M.srcSet,sizes:M.sizes}),c.default.createElement(b,{alt:a,title:t,width:M.width,height:M.height,src:M.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:M.width,height:M.height},M))}}))}return null},t}(c.default.Component);I.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),v=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});I.propTypes={resolutions:y,sizes:v,fixed:y,fluid:v,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,Tag:u.default.string};var E=I;t.default=E},150:function(e,t,a){"use strict";a(142)("anchor",function(e){return function(t){return e(this,"a","name",t)}})},151:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgdmlld0JveD0iMCAwIDUyIDUyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPgogICAgICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjI1IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0yNS4xOTIgMzAuMjYzbC4zNTUtLjM1NSA2LjM2MS02LjM2YS41LjUgMCAxIDAtLjcwNy0uNzA3bC02LjAwOSA2LjAwOC02LjAwOC02LjAwOGEuNS41IDAgMSAwLS43MDcuNzA3bDYuMzYgNi4zNi4wMDIuMDAyLjM1My4zNTN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},152:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMyIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDMzIDIwIj4KICAgIDxnIGZpbGw9IiMxMzI0QzQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMTMyNEM0IiBzdHJva2Utd2lkdGg9IjEuMTkiPgogICAgICAgIDxwYXRoIGQ9Ik0uNTk1IDkuNDA1aDIyLjYxOXYxLjE5SC41OTV6TTIzLjgxIDE4LjMzM1YxLjY2N0wzMi4xNDMgMTB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},156:function(e,t,a){"use strict";var n=a(10);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},170:function(e,t,a){"use strict";a(171);var n=a(10),r=a(156),i=a(14),o=/./.toString,s=function(e){a(15)(RegExp.prototype,"toString",e,!0)};a(21)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},171:function(e,t,a){a(14)&&"g"!=/./g.flags&&a(24).f(RegExp.prototype,"flags",{configurable:!0,get:a(156)})},172:function(e,t,a){e.exports=a.p+"static/process-eb3b310c5314e2c0763f6d9b43cc2d61.jpg"},173:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-e1aa84e303789eb5c2bc.js.map