window.Modernizr=function(e,t,i){function o(e){w.cssText=e}function n(e,t){return o(x.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function r(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var o in e){var n=e[o];if(!r(n,"-")&&w[n]!==i)return"pfx"==t?n:!0}return!1}function l(e,t,o){for(var n in e){var r=t[e[n]];if(r!==i)return o===!1?e[n]:s(r,"function")?r.bind(o||t):r}return!1}function c(e,t,i){var o=e.charAt(0).toUpperCase()+e.slice(1),n=(e+" "+$.join(o+" ")+o).split(" ");return s(t,"string")||s(t,"undefined")?a(n,t):(n=(e+" "+C.join(o+" ")+o).split(" "),l(n,t,i))}function d(){h.input=function(i){for(var o=0,n=i.length;n>o;o++)z[i[o]]=!!(i[o]in b);return z.list&&(z.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),z}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var o,n,s,r=0,a=e.length;a>r;r++)b.setAttribute("type",n=e[r]),o="text"!==b.type,o&&(b.value=k,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&b.style.WebkitAppearance!==i?(v.appendChild(b),s=t.defaultView,o=s.getComputedStyle&&"textfield"!==s.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,v.removeChild(b)):/^(search|tel)$/.test(n)||(o=/^(url|email)$/.test(n)?b.checkValidity&&b.checkValidity()===!1:b.value!=k)),E[e[r]]=!!o;return E}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u,p,f="2.8.3",h={},g=!0,v=t.documentElement,m="modernizr",y=t.createElement(m),w=y.style,b=t.createElement("input"),k=":)",S={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",$=T.split(" "),C=T.toLowerCase().split(" "),P={svg:"http://www.w3.org/2000/svg"},A={},E={},z={},H=[],O=H.slice,V=function(e,i,o,n){var s,r,a,l,c=t.createElement("div"),d=t.body,u=d||t.createElement("body");if(parseInt(o,10))for(;o--;)a=t.createElement("div"),a.id=n?n[o]:m+(o+1),c.appendChild(a);return s=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),c.id=m,(d?c:u).innerHTML+=s,u.appendChild(c),d||(u.style.background="",u.style.overflow="hidden",l=v.style.overflow,v.style.overflow="hidden",v.appendChild(u)),r=i(c,e),d?c.parentNode.removeChild(c):(u.parentNode.removeChild(u),v.style.overflow=l),!!r},j=function(t){var i=e.matchMedia||e.msMatchMedia;if(i)return i(t)&&i(t).matches||!1;var o;return V("@media "+t+" { #"+m+" { position: absolute; } }",function(t){o="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),o},M=function(){function e(e,n){n=n||t.createElement(o[e]||"div"),e="on"+e;var r=e in n;return r||(n.setAttribute||(n=t.createElement("div")),n.setAttribute&&n.removeAttribute&&(n.setAttribute(e,""),r=s(n[e],"function"),s(n[e],"undefined")||(n[e]=i),n.removeAttribute(e))),n=null,r}var o={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;p=s(L,"undefined")||s(L.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var i=O.call(arguments,1),o=function(){if(this instanceof o){var n=function(){};n.prototype=t.prototype;var s=new n,r=t.apply(s,i.concat(O.call(arguments)));return Object(r)===r?r:s}return t.apply(e,i.concat(O.call(arguments)))};return o}),A.flexbox=function(){return c("flexWrap")},A.flexboxlegacy=function(){return c("boxDirection")},A.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},A.canvastext=function(){return!(!h.canvas||!s(t.createElement("canvas").getContext("2d").fillText,"function"))},A.webgl=function(){return!!e.WebGLRenderingContext},A.touch=function(){var i;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?i=!0:V(["@media (",x.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){i=9===e.offsetTop}),i},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!e.postMessage},A.websqldatabase=function(){return!!e.openDatabase},A.indexedDB=function(){return!!c("indexedDB",e)},A.hashchange=function(){return M("hashchange",e)&&(t.documentMode===i||t.documentMode>7)},A.history=function(){return!(!e.history||!history.pushState)},A.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},A.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},A.rgba=function(){return o("background-color:rgba(150,255,150,.5)"),r(w.backgroundColor,"rgba")},A.hsla=function(){return o("background-color:hsla(120,40%,100%,.5)"),r(w.backgroundColor,"rgba")||r(w.backgroundColor,"hsla")},A.multiplebgs=function(){return o("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(w.background)},A.backgroundsize=function(){return c("backgroundSize")},A.borderimage=function(){return c("borderImage")},A.borderradius=function(){return c("borderRadius")},A.boxshadow=function(){return c("boxShadow")},A.textshadow=function(){return""===t.createElement("div").style.textShadow},A.opacity=function(){return n("opacity:.55"),/^0.55$/.test(w.opacity)},A.cssanimations=function(){return c("animationName")},A.csscolumns=function(){return c("columnCount")},A.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return o((e+"-webkit- ".split(" ").join(t+e)+x.join(i+e)).slice(0,-e.length)),r(w.backgroundImage,"gradient")},A.cssreflections=function(){return c("boxReflect")},A.csstransforms=function(){return!!c("transform")},A.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in v.style&&V("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,i){e=9===t.offsetLeft&&3===t.offsetHeight}),e},A.csstransitions=function(){return c("transition")},A.fontface=function(){var e;return V('@font-face {font-family:"font";src:url("https://")}',function(i,o){var n=t.getElementById("smodernizr"),s=n.sheet||n.styleSheet,r=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(r)&&0===r.indexOf(o.split(" ")[0])}),e},A.generatedcontent=function(){var e;return V(["#",m,"{font:0/0 a}#",m,':after{content:"',k,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},A.video=function(){var e=t.createElement("video"),i=!1;try{(i=!!e.canPlayType)&&(i=new Boolean(i),i.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),i.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),i.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(o){}return i},A.audio=function(){var e=t.createElement("audio"),i=!1;try{(i=!!e.canPlayType)&&(i=new Boolean(i),i.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),i.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),i.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),i.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return i},A.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},A.webworkers=function(){return!!e.Worker},A.applicationcache=function(){return!!e.applicationCache},A.svg=function(){return!!t.createElementNS&&!!t.createElementNS(P.svg,"svg").createSVGRect},A.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==P.svg},A.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(S.call(t.createElementNS(P.svg,"animate")))},A.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(S.call(t.createElementNS(P.svg,"clipPath")))};for(var F in A)p(A,F)&&(u=F.toLowerCase(),h[u]=A[F](),H.push((h[u]?"":"no-")+u));return h.input||d(),h.addTest=function(e,t){if("object"==typeof e)for(var o in e)p(e,o)&&h.addTest(o,e[o]);else{if(e=e.toLowerCase(),h[e]!==i)return h;t="function"==typeof t?t():t,"undefined"!=typeof g&&g&&(v.className+=" "+(t?"":"no-")+e),h[e]=t}return h},o(""),y=b=null,function(e,t){function i(e,t){var i=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return i.innerHTML="x<style>"+t+"</style>",o.insertBefore(i.lastChild,o.firstChild)}function o(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function n(e){var t=m[e[g]];return t||(t={},v++,e[g]=v,m[v]=t),t}function s(e,i,o){if(i||(i=t),d)return i.createElement(e);o||(o=n(i));var s;return s=o.cache[e]?o.cache[e].cloneNode():h.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!s.canHaveChildren||f.test(e)||s.tagUrn?s:o.frag.appendChild(s)}function r(e,i){if(e||(e=t),d)return e.createDocumentFragment();i=i||n(e);for(var s=i.frag.cloneNode(),r=0,a=o(),l=a.length;l>r;r++)s.createElement(a[r]);return s}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(i){return y.shivMethods?s(i,e,t):t.createElem(i)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var o=n(e);return!y.shivCSS||c||o.hasCSS||(o.hasCSS=!!i(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||a(e,o),e}var c,d,u="3.7.0",p=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,m={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(i){c=!0,d=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:p.shivCSS!==!1,supportsUnknownElements:d,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:s,createDocumentFragment:r};e.html5=y,l(t)}(this,t),h._version=f,h._prefixes=x,h._domPrefixes=C,h._cssomPrefixes=$,h.mq=j,h.hasEvent=M,h.testProp=function(e){return a([e])},h.testAllProps=c,h.testStyles=V,h.prefixed=function(e,t,i){return t?c(e,t,i):c(e,"pfx")},v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+H.join(" "):""),h}(this,this.document);