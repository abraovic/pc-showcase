(function(){var u="undefined"===typeof global?self:global;if("function"!==typeof u.require){var r={},e={},p={},m={}.hasOwnProperty,A=/^\.\.?(\/|$)/,b=function(d,g){for(var D=[],b,n=(A.test(g)?d+"/"+g:g).split("/"),m=0,l=n.length;m<l;m++)b=n[m],".."===b?D.pop():"."!==b&&""!==b&&D.push(b);return D.join("/")},n=function(d){return function(g){g=b(d.split("/").slice(0,-1).join("/"),g);return u.require(g,d)}},k=function(d){return p[d]?k(p[d]):d},V=function(d,g){return k(b(d.split("/").slice(0,-1).join("/"),
g))},l=function(d,g){null==g&&(g="/");var b=k(d);if(m.call(e,b))return e[b].exports;if(m.call(r,b)){var D=r[b],l=P&&P.createHot(b),l={id:b,exports:{},hot:l};e[b]=l;D(l.exports,n(b),l);return l.exports}throw Error("Cannot find module '"+d+"' from '"+g+"'");};l.alias=function(d,g){p[g]=d};var d=/\.[^.\/]+$/,g=/\/index(\.[^\/]+)?$/;l.register=l.define=function(b,n){if(b&&"object"===typeof b)for(var k in b)m.call(b,k)&&l.register(k,b[k]);else r[b]=n,delete e[b],d.test(b)&&(k=b.replace(d,""),m.call(p,
k)&&p[k].replace(d,"")!==k+"/index"||(p[k]=b)),g.test(b)&&(k=b.replace(g,""),m.call(p,k)||(p[k]=b))};l.list=function(){var d=[],b;for(b in r)m.call(r,b)&&d.push(b);return d};var P=u._hmr&&new u._hmr(V,l,r,e);l._cache=e;l.hmr=P&&P.wrap;l.brunch=!0;u.require=l}})();
(function(){var u=function(r,e,p){var m={},A=function(b,n){var k;try{return k=r(n+"/node_modules/"+b)}catch(l){if(-1===l.toString().indexOf("Cannot find module"))throw l;if(-1!==n.indexOf("node_modules")){k=n.split("/");var e=k.lastIndexOf("node_modules");k=k.slice(0,e).join("/");return A(b,k)}}return m};return function(b){b in e&&(b=e[b]);if(b){if("."!==b[0]&&p){var n=A(b,p);if(n!==m)return n}return r(b)}}};require.register("@fdaciuk/ajax/dist/ajax.min.js",function(r,e,p){e=u(e,{},"@fdaciuk/ajax");
(function(){!function(m,e){"function"==typeof define&&define.amd?define("ajax",e):"object"==typeof r?r=p.exports=e():m.ajax=e()}(this,function(){function e(d,b,k,l){var g=["then","catch","always"].reduce(function(d,b){return d[b]=function(g){return d[b]=g,d},d},{}),e=new XMLHttpRequest;return e.open(d,b,!0),e.withCredentials=l.hasOwnProperty("withCredentials"),p(e,l.headers),e.addEventListener("readystatechange",n(g,e),!1),e.send(r(k)),g.abort=function(){return e.abort()},g}function p(d,g){g=g||{};
b(g)||(g["Content-Type"]="application/x-www-form-urlencoded");Object.keys(g).forEach(function(b){g[b]&&d.setRequestHeader(b,g[b])})}function b(b){return Object.keys(b).some(function(b){return"content-type"===b.toLowerCase()})}function n(b,g){return function D(){g.readyState===g.DONE&&(g.removeEventListener("readystatechange",D,!1),b.always.apply(b,k(g)),200<=g.status&&300>g.status?b.then.apply(b,k(g)):b["catch"].apply(b,k(g)))}}function k(b){var d;try{d=JSON.parse(b.responseText)}catch(P){d=b.responseText}return[d,
b]}function r(b){return"[object Object]"===Object.prototype.toString.call(b)?l(b):b}function l(b){return Object.keys(b).reduce(function(d,e){return(d?d+"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(b[e])},"")}return function(b){var g=["get","post","put","delete"];return b=b||{},b.baseUrl=b.baseUrl||"",b.method&&b.url?e(b.method,b.baseUrl+b.url,b.data||null,b):g.reduce(function(g,d){return g[d]=function(g,n){return e(d,b.baseUrl+g,n||null,b)},g},{})}})})()});require.register("riot-observable/dist/observable.js",
function(r,e,p){e=u(e,{},"riot-observable");(function(){(function(e,A){var b=function(b){b=b||{};var e={},n=Array.prototype.slice;Object.defineProperties(b,{on:{value:function(l,d){"function"==typeof d&&(e[l]=e[l]||[]).push(d);return b},enumerable:!1,writable:!1,configurable:!1},off:{value:function(l,d){if("*"!=l||d)if(d)for(var g=e[l],k=0,n;n=g&&g[k];++k)n==d&&g.splice(k--,1);else delete e[l];else e={};return b},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,d){function g(){b.off(e,
g);d.apply(b,arguments)}return b.on(e,g)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(l){var d=arguments.length-1,g=Array(d),k,m;for(m=0;m<d;m++)g[m]=arguments[m+1];d=n.call(e[l]||[],0);for(m=0;k=d[m];++m)k.apply(b,g);e["*"]&&"*"!=l&&b.trigger.apply(b,["*",l].concat(g));return b},enumerable:!1,writable:!1,configurable:!1}});return b};"object"===typeof r?p.exports=b:"function"===typeof define&&define.amd?define(function(){return b}):e.observable=b})("undefined"!=typeof window?
window:void 0)})()});require.register("riot-route/index.js",function(r,e,p){e=u(e,{},"riot-route");(function(){function m(b){return b.split(/[/?#]/)}function r(b,g){var d=g.replace(/\?/g,"\\?").replace(/\*/g,"([^/?#]+?)").replace(/\.\./,".*");if(d=b.match(new RegExp("^"+d+"$")))return d.slice(1)}function b(b,g){var d;return function(){clearTimeout(d);d=setTimeout(b,g)}}function n(e){G=b(d,1);B.addEventListener("popstate",G);B.addEventListener("hashchange",G);F.addEventListener(W,g);e&&d(!0)}function k(){this.$=
[];D(this);M.on("stop",this.s.bind(this));M.on("emit",this.e.bind(this))}function V(b){return b.replace(/^\/|\/$/,"")}function l(b){return"#"===H[0]?(b||J.href||"").split(H)[1]||"":(J?(b||J.href).replace(u,""):b||"").replace(H,"")}function d(b){var d=0===X;if(!(3<=X)&&(X++,ea.push(function(){var d=l();if(b||d!==Q)M.trigger("emit",d),Q=d}),d)){for(;d=ea.shift();)d();X=0}}function g(b){if(!(1!==b.which||b.metaKey||b.ctrlKey||b.shiftKey||b.defaultPrevented)){for(var d=b.target;d&&"A"!==d.nodeName;)d=
d.parentNode;!d||"A"!==d.nodeName||d.hasAttribute("download")||!d.hasAttribute("href")||d.target&&"_self"!==d.target||-1===d.href.indexOf(J.href.match(u)[0])||d.href!==J.href&&(d.href.split("#")[0]===J.href.split("#")[0]||"#"!==H[0]&&0!==(d.href||J.href).replace(u,"").indexOf(H)||"#"===H[0]&&d.href.split(H)[0]!==J.href.split(H)[0]||!P(l(d.href),d.title||F.title))||b.preventDefault()}}function P(b,g,e){if(!O)return M.trigger("emit",l(b));b=H+V(b);g=g||F.title;e?O.replaceState(null,g,b):O.pushState(null,
g,b);F.title=g;v=!1;d();return v}var D=function(b){return b&&"object"===typeof b&&"default"in b?b["default"]:b}(e("riot-observable")),u=/^.+?\/\/+[^\/]+/,B="undefined"!=typeof window&&window,F="undefined"!=typeof document&&document,O=B&&history,J=B&&(O.location||B.location),q=k.prototype,W=F&&F.ontouchstart?"touchstart":"click",M=D(),R=!1,v=!1,G,H,Q,x,C,ea=[],X=0;q.m=function(b,d,g){"string"!=typeof b||d&&"string"!=typeof d?d?this.r(b,d):this.r("@",b):P(b,d,g||!1)};q.s=function(){this.off("*");this.$=
[]};q.e=function(b){this.$.concat("@").some(function(d){var g=("@"===d?x:C)(V(b),V(d));if("undefined"!=typeof g)return this.trigger.apply(null,[d].concat(g)),v=!0},this)};q.r=function(b,d){"@"!==b&&(b="/"+V(b),this.$.push(b));this.on(b,d)};q=new k;q=q.m.bind(q);q.create=function(){var b=new k,d=b.m.bind(b);d.stop=b.s.bind(b);return d};q.base=function(b){H=b||"#";Q=l()};q.exec=function(){d(!0)};q.parser=function(b,d){b||d||(x=m,C=r);b&&(x=b);d&&(C=d)};q.query=function(){var b={};(J.href||Q).replace(/[?&](.+?)=([^&]*)/g,
function(d,g,e){b[g]=e});return b};q.stop=function(){R&&(B&&(B.removeEventListener("popstate",G),B.removeEventListener("hashchange",G),F.removeEventListener(W,g)),M.trigger("stop"),R=!1)};q.start=function(b){R||(B&&("complete"===document.readyState?n(b):B.addEventListener("load",function(){setTimeout(function(){n(b)},1)})),R=!0)};q.base();q.parser();p.exports=q})()});require.register("riot/riot.js",function(r,e,p){e=u(e,{},"riot");(function(){(function(e,A){"object"===typeof r&&"undefined"!==typeof p?
A(r):"function"===typeof define&&define.amd?define(["exports"],A):A(e.riot=e.riot||{})})(this,function(e){function m(a){return Ua.test(a)}function b(a){return"function"===typeof a}function n(a){return a&&"object"===typeof a}function k(a){return"undefined"===typeof a}function r(a){return"string"===typeof a}function l(a){return k(a)||null===a||""===a}function d(a){return Array.isArray(a)||a instanceof Array}function g(a,c){var f=Object.getOwnPropertyDescriptor(a,c);return k(a[c])||f&&f.writable}function p(a){return za.test(a)}
function D(a,c){return(c||document).querySelectorAll(a)}function u(a,c){return(c||document).querySelector(a)}function B(){return document.createDocumentFragment()}function F(){return document.createTextNode("")}function O(a){return document.createElement(a)}function J(a,c){if(k(a.innerHTML)){var f=(new DOMParser).parseFromString(c,"application/xml"),f=a.ownerDocument.importNode(f.documentElement,!0);a.appendChild(f)}else a.innerHTML=c}function q(a,c,f){var b=Va.exec(c);b&&b[1]?a.setAttributeNS("http://www.w3.org/1999/xlink",
b[1],f):a.setAttribute(c,f)}function W(a,c,f){a.insertBefore(c,f.parentNode&&f)}function M(a,c){if(a)for(var f;f=Wa.exec(a);)c(f[1].toLowerCase(),f[2]||f[3]||f[4])}function R(a,c,f){if(a){f=c(a,f);var b;if(!1!==f)for(a=a.firstChild;a;)b=a.nextSibling,R(a,c,f),a=b}}function v(a,c){for(var f=a?a.length:0,b=0;b<f;++b)c(a[b],b);return a}function G(a,c){return-1!==a.indexOf(c)}function H(a){return a.replace(/-(\w)/g,function(a,f){return f.toUpperCase()})}function Q(a,c){return a.slice(0,c.length)===c}
function x(a,c,f,b){Object.defineProperty(a,c,C({value:f,enumerable:!1,writable:!1,configurable:!0},b));return a}function C(a){for(var c,b=arguments,t=1;t<b.length;++t)if(c=b[t])for(var h in c)g(a,h)&&(a[h]=c[h]);return a}function ea(a,c,b){var f=this.__.parent,h=this.__.item;if(!h)for(;f&&!h;)h=f.__.item,f=f.__.parent;g(b,"currentTarget")&&(b.currentTarget=a);g(b,"target")&&(b.target=b.srcElement);g(b,"which")&&(b.which=b.charCode||b.keyCode);b.item=h;c.call(this,b);b.preventUpdate||(a=S(this),a.isMounted&&
a.update())}function X(a,b){var c=E(a.value,b),t,h,d;a.tag&&a.tagName===c?a.tag.update():(t="VIRTUAL"===a.dom.tagName,a.tag&&(t&&(h=a.tag.__.head,d=F(),h.parentNode.insertBefore(d,h)),a.tag.unmount(!0)),a.impl=K[c],a.tag=oa(a.impl,{root:a.dom,parent:b,hasImpl:!0,tagName:c},a.dom.innerHTML,b),v(a.attrs,function(b){return q(a.tag.root,b.name,b.value)}),a.tagName=c,a.tag.mount(),t&&pa(a.tag,d||a.tag.root),b.__.onUnmount=function(){var b=a.tag.opts.dataIs,c=a.tag.__.parent.tags;N(a.tag.parent.tags,b,
a.tag);N(c,b,a.tag);a.tag.unmount()})}function Sa(a){if(!this.root||!this.root.getAttribute("virtualized")){var c=a.dom,f=a.attr,t=G(["show","hide"],f),h=E(a.expr,this),d="riot-value"===f,e=a.root&&"VIRTUAL"===a.root.tagName,g=c&&(a.parent||c.parentNode);if(a.bool)h=h?f:!1;else if(k(h)||null===h)h="";if(a._riot_id)a.isMounted?a.update():(a.mount(),e&&pa(a,a.root));else if(e=a.value,a.value=h,a.update)a.update();else{if(a.isRtag&&h)return X(a,this);if(e!==h&&(!d||c.value!==h))if(f)if(a.isAttrRemoved&&
h||(c.removeAttribute(f),a.isAttrRemoved=!0),b(h))a=f,f=ea.bind(this,c,h),c[a]=null,h=a.replace(Xa,""),c._riotEvents||(c._riotEvents={}),c._riotEvents[a]&&c.removeEventListener(h,c._riotEvents[a]),c._riotEvents[a]=f,c.addEventListener(h,f,!1);else if(t)"hide"===f&&(h=!h),c.style.display=h?"":"none";else if(d)c.value=h;else if(Q(f,"riot-")&&"data-is"!==f)f=f.slice(5),Aa[f]&&(f=Aa[f]),null!=h&&q(c,f,h);else{if(a.bool&&(c[f]=h,!h))return;(0===h||h&&"object"!==typeof h)&&q(c,f,h)}else h+="",g&&(a.parent=
g,"TEXTAREA"===g.tagName?(g.value=h,qa||(c.nodeValue=h)):c.nodeValue=h)}}}function ma(a){v(a,Sa.bind(this))}function na(a,b,f,t){t=t?Object.create(t):{};t[a.key]=b;a.pos&&(t[a.pos]=f);return t}function Ta(a,b){for(var c=b.length,t=a.length;c>t;)c--,Ya.apply(b[c],[b,c])}function Ya(a,b){a.splice(b,1);this.unmount();N(this.parent,this,this.__.tagName,!0)}function Za(a){var b=this;v(Object.keys(this.tags),function(c){Ba.apply(b.tags[c],[c,a])})}function $a(a,b,f){f?Ca.apply(this,[a,b]):W(a,this.root,
b.root)}function ab(a,b,f){f?ga.apply(this,[a,b]):W(a,this.root,b.root)}function bb(a,b){b?ga.call(this,a):a.appendChild(this.root)}function cb(a,b,f){a.removeAttribute("each");var c;(c="string"!==typeof a.getAttribute("no-reorder"))||(a.removeAttribute("no-reorder"),c=void 0);var h=c,g=ha(a),e=K[g];c=a.parentNode;var L=F(),k=ia(a),l=a.getAttribute("if"),n=[],m=[],p,q=!K[g],y="VIRTUAL"===a.tagName;f=E.loopKeys(f);f.isLoop=!0;l&&a.removeAttribute("if");c.insertBefore(L,a);c.removeChild(a);f.update=
function(){var c=E(f.val,b),t=B(),T=!d(c)&&!r(c),fa=L.parentNode;T?c=(p=c||!1)?Object.keys(c).map(function(a){return na(f,c[a],a)}):[]:p=!1;l&&(c=c.filter(function(a,c){return f.key&&!T?!!E(l,na(f,a,c,b)):!!E(l,C(Object.create(b),a))}));v(c,function(d,w){var T=h&&"object"===typeof d&&!p,L=m.indexOf(d),l=-1===L,L=!l&&T?L:w,z=n[L],Da=w>=m.length,l=T&&l||!T&&!z;d=!p&&f.key?na(f,d,w):d;l?(z=new Y(e,{parent:b,isLoop:!0,isAnonymous:q,tagName:g,root:a.cloneNode(q),item:d,index:w},a.innerHTML),z.mount(),
Da?bb.apply(z,[t||fa,y]):ab.apply(z,[fa,n[w],y]),Da||m.splice(w,0,d),n.splice(w,0,z),k&&Z(b.tags,g,z,!0)):L!==w&&T&&(G(c,m[L])&&($a.apply(z,[fa,n[w],y]),n.splice(w,0,n.splice(L,1)[0]),m.splice(w,0,m.splice(L,1)[0])),f.pos&&(z[f.pos]=w),!k&&z.tags&&Za.call(z,w));z.__.item=d;z.__.index=w;z.__.parent=b;l||z.update(d)});Ta(c,n);m=c.slice();fa.insertBefore(t,L)};f.unmount=function(){v(n,function(a){a.unmount()})};return f}function Ea(a,b,f){var c=this;b={parent:{children:b}};R(a,function(b,d){var h=b.nodeType,
t=d.parent,g,e;if(!f&&b===a)return{parent:t};3===h&&"STYLE"!==b.parentNode.tagName&&E.hasExpr(b.nodeValue)&&t.children.push({dom:b,expr:b.nodeValue});if(1!==h)return d;h="VIRTUAL"===b.tagName;if(g=b.getAttribute("each"))return h&&q(b,"loopVirtual",!0),t.children.push(cb(b,c,g)),!1;if(g=b.getAttribute("if"))return t.children.push(Object.create(db).init(b,c,g)),!1;if((e=b.getAttribute("data-is"))&&E.hasExpr(e))return t.children.push({isRtag:!0,expr:e,dom:b,attrs:[].slice.call(b.attributes)}),!1;e=ia(b);
h&&(b.getAttribute("virtualized")&&b.parentElement.removeChild(b),e||b.getAttribute("virtualized")||b.getAttribute("loopVirtual")||(e={tmpl:b.outerHTML}));if(e&&(b!==a||f))if(h&&!b.getAttribute("data-is"))q(b,"virtualized",!0),e=new Y({tmpl:b.outerHTML},{root:b,parent:c},b.innerHTML),t.children.push(e);else return t.children.push(oa(e,{root:b,parent:c,hasImpl:!0},b.innerHTML,c)),!1;ra.apply(c,[b,b.attributes,function(a,b){b&&t.children.push(b)}]);return{parent:t}},b);return{tree:b,root:a}}function ra(a,
b,f){var c=this;v(b,function(b){var d=b.name,t=m(d),h;G(eb,d)?h=Object.create(Fa).init(a,c,d,b.value):E.hasExpr(b.value)&&(h={dom:a,expr:b.value,attr:b.name,bool:t});f(b,h)})}function fb(a,b){if(!gb.test(a))return a;var c={};b=b&&b.replace(hb,function(a,b,f){c[b]=c[b]||f;return""}).trim();return a.replace(ib,function(a,b,f){return c[b]||f||""}).replace(jb,function(a,c){return b||c||""})}function kb(a,b){var c=a&&a.match(/^\s*<([-\w]+)/),c=c&&c[1].toLowerCase(),d=O(lb);a=fb(a,b);if(mb.test(c)){var h=
d,e="o"===c[0],d=e?"select>":"table>";h.innerHTML="<"+d+a.trim()+"</"+d;d=h.firstChild;e?d.selectedIndex=-1:(c=nb[c])&&1===d.childElementCount&&(d=u(c,d))}else J(d,a);return d}function Ga(a,b){var c=this.name,d=this.tmpl,h=this.css,e=this.attrs,g=this.onCreate;K[c]||(sa(c,d,h,e,g),K[c]["class"]=this.constructor);ta(a,c,b,this);h&&aa.inject();return this}function sa(a,c,f,d,h){b(d)&&(h=d,/^[\w\-]+\s?=/.test(f)?(d=f,f=""):d="");f&&(b(f)?h=f:aa.add(f));a=a.toLowerCase();K[a]={name:a,tmpl:c,attrs:d,fn:h};
return a}function Ha(a,b,f,d,h){f&&aa.add(f,a);K[a]={name:a,tmpl:b,attrs:d,fn:h};return a}function Ia(a,b,f){function c(a){if(a.tagName){var h=a.getAttribute("data-is");b&&h!==b&&(h=b,q(a,"data-is",b));(a=ta(a,h||a.tagName.toLowerCase(),f))&&d.push(a)}else a.length&&v(a,c)}var d=[];aa.inject();n(b)&&(f=b,b=0);var e;r(a)&&(a=(a="*"===a?e=ca():a+ca(a.split(/, */)))?D(a):[]);if("*"===b){b=e||ca();if(a.tagName)a=D(b,a);else{var g=[];v(a,function(a){return g.push(D(b,a))});a=g}b=0}c(a);return d}function da(a,
c,f){if(n(a))da("__unnamed_"+ob++,a,!0);else{f=f?pb:Ja;if(!c){if(k(f[a]))throw Error("Unregistered mixin: "+a);return f[a]}f[a]=b(c)?C(c.prototype,f[a]||{})&&c:C(f[a]||{},c)}}function Ka(){return v(ba,function(a){return a.update()})}function La(a){delete K[a]}function Ma(a,b,f,d,h){if(!a||!f){var c=!f&&a?this:b||this;v(h,function(a){a.expr&&ma.call(c,[a.expr]);d[H(a.name)]=a.expr?a.expr.value:a.value})}}function Y(a,c,f){void 0===a&&(a={});void 0===c&&(c={});var d=C({},c.opts),h=c.parent,e=c.isLoop,
g=!!c.isAnonymous,l=Na.skipAnonymousTags&&g,n=ua(c.item),k=c.index,m=[],p=[],u=[],I=c.root,y=c.tagName||ha(I),A="virtual"===y,w=[],z;l||va(this);a.name&&I._tag&&I._tag.unmount(!0);this.isMounted=!1;x(this,"__",{isAnonymous:g,instAttrs:m,innerHTML:f,tagName:y,index:k,isLoop:e,virts:[],tail:null,head:null,parent:null,item:null});x(this,"_riot_id",++qb);x(this,"root",I);C(this,{opts:d},n);x(this,"parent",h||null);x(this,"tags",{});x(this,"refs",{});z=e&&g?I:kb(a.tmpl,f,e);x(this,"update",function(a){var c=
{},f=this.isMounted&&!l;a=ua(a);C(this,a);Ma.apply(this,[e,h,g,c,m]);if(this.isMounted&&b(this.shouldUpdate)&&!this.shouldUpdate(a,c))return this;e&&g&&Oa.apply(this,[this.parent,w]);C(d,c);f&&this.trigger("update",a);ma.call(this,u);f&&this.trigger("updated");return this}.bind(this));x(this,"mixin",function(){var a=this;v(arguments,function(c){var f,d,h=[],e=["init","__proto__"];c=r(c)?da(c):c;f=b(c)?new c:c;var g=Object.getPrototypeOf(f);do h=h.concat(Object.getOwnPropertyNames(d||f));while(d=Object.getPrototypeOf(d||
f));v(h,function(c){if(!G(e,c)){var d=Object.getOwnPropertyDescriptor(f,c)||Object.getOwnPropertyDescriptor(g,c),h=d&&(d.get||d.set);!a.hasOwnProperty(c)&&h?Object.defineProperty(a,c,d):a[c]=b(f[c])?f[c].bind(a):f[c]}});f.init&&f.init.bind(a)()});return this}.bind(this));x(this,"mount",function(){var b=this;I._tag=this;ra.apply(h,[I,I.attributes,function(a,c){!g&&Fa.isPrototypeOf(c)&&(c.tag=b);a.expr=c;m.push(a)}]);p=[];M(a.attrs,function(a,b){p.push({name:a,value:b})});ra.apply(this,[I,p,function(a,
b){b?u.push(b):q(I,a.name,a.value)}]);Ma.apply(this,[e,h,g,d,m]);var c=da("__global_mixin");if(c&&!l)for(var f in c)c.hasOwnProperty(f)&&b.mixin(c[f]);a.fn&&a.fn.call(this,d);l||this.trigger("before-mount");Ea.apply(this,[z,u,g]);this.update(n);if(!g)for(;z.firstChild;)I.appendChild(z.firstChild);x(this,"root",I);x(this,"isMounted",!0);if(!l)return this.parent?(c=S(this.parent),c.one(c.isMounted?"updated":"mount",function(){b.trigger("mount")})):this.trigger("mount"),this}.bind(this));x(this,"unmount",
function(b){var c=this,f=this.root,d=f.parentNode,e,g=ba.indexOf(this);l||this.trigger("before-unmount");M(a.attrs,function(a){Q(a,"riot-")&&(a=a.slice(5));I.removeAttribute(a)});-1!==g&&ba.splice(g,1);if(d||A){if(h)e=S(h),A?Object.keys(this.tags).forEach(function(a){N(e.tags,a,c.tags[a])}):(N(e.tags,y,this),h!==e&&N(h.tags,y,this));else for(;f.firstChild;)f.removeChild(f.firstChild);d&&(b?d.removeAttribute("data-is"):d.removeChild(f))}this.__.virts&&v(this.__.virts,function(a){a.parentNode&&a.parentNode.removeChild(a)});
ja(u);v(m,function(a){return a.expr&&a.expr.unmount&&a.expr.unmount()});if(this.__.onUnmount)this.__.onUnmount();l||(this.trigger("unmount"),this.off("*"));x(this,"isMounted",!1);delete this.root._tag;return this}.bind(this))}function ia(a){return a.tagName&&K[a.getAttribute("data-is")||a.getAttribute("data-is")||a.tagName.toLowerCase()]}function Oa(a,b){var c=this;v(Object.keys(a),function(f){var d=!p(f)&&G(b,f);if(k(c[f])||d)d||b.push(f),c[f]=a[f]})}function Ba(a,b){var c=this.parent,e;c&&(e=c.tags[a],
d(e)?e.splice(b,0,e.splice(e.indexOf(this),1)[0]):Z(c.tags,a,this))}function oa(a,b,f,d){a=new Y(a,b,f);f=b.tagName||ha(b.root,!0);var c=S(d);x(a,"parent",c);a.__.parent=d;Z(c.tags,f,a);c!==d&&Z(d.tags,f,a);b.root.innerHTML="";return a}function S(a){for(;a.__.isAnonymous&&a.parent;)a=a.parent;return a}function ja(a){v(a,function(a){a instanceof Y?a.unmount(!0):a.unmount&&a.unmount()})}function ha(a,b){var c=ia(a),d=!b&&a.getAttribute("data-is");return d&&!E.hasExpr(d)?d:c?c.name:a.tagName.toLowerCase()}
function ua(a){if(!(a instanceof Y||a&&b(a.trigger)))return a;var c={},d;for(d in a)za.test(d)||(c[d]=a[d]);return c}function Z(a,b,f,e,h){var c=a[b],g=d(c),t=!k(h);c&&c===f||(!c&&e?a[b]=[f]:c?g?(a=c.indexOf(f),a!==h&&(-1!==a&&c.splice(a,1),t?c.splice(h,0,f):c.push(f))):a[b]=[c,f]:a[b]=f)}function N(a,b,f,e){d(a[b])?(f=a[b].indexOf(f),-1!==f&&a[b].splice(f,1),a[b].length?1!==a[b].length||e||(a[b]=a[b][0]):delete a[b]):delete a[b]}function ta(a,b,d,e){var c=K[b];b=K[b]["class"];e=e||(b?Object.create(b.prototype):
{});b=a._innerHTML=a._innerHTML||a.innerHTML;a.innerHTML="";d=C({root:a,opts:d},{parent:d?d.parent:null});c&&a&&Y.apply(e,[c,d,b]);e&&e.mount&&(e.mount(!0),G(ba,e)||ba.push(e));return e}function pa(a,b){var c=B();ga.call(a,c);b.parentNode.replaceChild(c,b)}function ga(a,b){var c=F(),d=F(),e=B();this.root.insertBefore(c,this.root.firstChild);this.root.appendChild(d);this.__.head=c;for(this.__.tail=d;c;)d=c.nextSibling,e.appendChild(c),this.__.virts.push(c),c=d;b?a.insertBefore(e,b.__.head):a.appendChild(e)}
function Ca(a,b){for(var c=this.__.head,d=B(),e;c;)if(e=c.nextSibling,d.appendChild(c),c=e,c===this.__.tail){d.appendChild(c);a.insertBefore(d,b.__.head);break}}function ca(a){return a?a.filter(function(a){return!/[^-\w]/.test(a)}).reduce(function(a,b){var c=b.trim().toLowerCase();return a+',[data-is="'+c+'"]'},""):(a=Object.keys(K),a+ca(a))}var ba=[],K={},eb=["ref","data-ref"],Va=/^xlink:(\w+)/,ka="undefined"===typeof window?void 0:window,rb=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
sb=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,za=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|refs|parent|opts|trigger|o(?:n|ff|ne))$/,Wa=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,Aa={viewbox:"viewBox"},Ua=/^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,
qa=(ka&&ka.document||{}).documentMode|0,tb=Object.freeze({isBoolAttr:m,isFunction:b,isObject:n,isUndefined:k,isString:r,isBlank:l,isArray:d,isWritable:g,isReservedName:p}),ub=Object.freeze({$$:D,$:u,createFrag:B,createDOMPlaceholder:F,mkEl:O,setInnerHTML:J,remAttr:function(a,b){a.removeAttribute(b)},getAttr:function(a,b){return a.getAttribute(b)},setAttr:q,safeInsert:W,walkAttrs:M,walkNodes:R}),la,wa,xa={},Pa=[],ya=!1;ka&&(la=function(){var a=O("style");q(a,"type","text/css");var b=u("style[type=riot]");
b?(b.id&&(a.id=b.id),b.parentNode.replaceChild(a,b)):document.getElementsByTagName("head")[0].appendChild(a);return a}(),wa=la.styleSheet);var aa={styleNode:la,add:function(a,b){b?xa[b]=a:Pa.push(a);ya=!0},inject:function(){if(ka&&ya){ya=!1;var a=Object.keys(xa).map(function(a){return xa[a]}).concat(Pa).join("\n");wa?wa.cssText=a:la.innerHTML=a}}},U=function(a){function b(a){return a}function d(a,b){b||(b=y);return new RegExp(a.source.replace(/{/g,b[2]).replace(/}/g,b[3]),a.global?"g":"")}function e(a){if("{ }"===
a)return q;var b=a.split(" ");if(2!==b.length||m.test(a))throw Error('Unsupported brackets "'+a+'"');b=b.concat(a.replace(p,"\\").split(" "));b[4]=d(1<b[1].length?/{[\S\s]*?}/:q[4],b);b[5]=d(3<a.length?/\\({|})/g:q[5],b);b[6]=d(q[6],b);b[7]=RegExp("\\\\("+b[3]+")|([[({])|("+b[3]+")|"+k,"g");b[8]=a;return b}function g(a){return a instanceof RegExp?A(a):y[a]}function l(a){(a||(a="{ }"))!==y[8]&&(y=e(a),A="{ }"===a?b:d,y[9]=A(q[9]));u=a}var n=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,
k=n.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,m=/[\x00-\x1F<>a-zA-Z0-9'",;\\]/,p=/(?=[[\]()*+?.^$|])/g,r={"(":RegExp("([()])|"+k,"g"),"[":RegExp("([[\\]])|"+k,"g"),"{":RegExp("([{}])|"+k,"g")},q=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+k,"g"),"{ }",/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],u=a,A,y=[],
v;g.split=function(a,b,c){function d(a){b||h?e.push(a&&a.replace(c[5],"$1")):e.push(a)}function f(a,b,c){var d,f=r[b];f.lastIndex=c;for(c=1;(d=f.exec(a))&&(!d[1]||(d[1]===b?++c:--c)););return c?a.length:f.lastIndex}c||(c=y);var e=[],g,h,w,l,k=c[6];for(h=w=k.lastIndex=0;g=k.exec(a);){l=g.index;if(h){if(g[2]){k.lastIndex=f(a,g[2],k.lastIndex);continue}if(!g[3])continue}g[1]||(d(a.slice(w,l)),w=k.lastIndex,k=c[6+(h^=1)],k.lastIndex=w)}a&&w<a.length&&d(a.slice(w));return e};g.hasExpr=function(a){return y[4].test(a)};
g.loopKeys=function(a){var b=a.match(y[9]);return b?{key:b[1],pos:b[2],val:y[0]+b[3].trim()+y[1]}:{val:a.trim()}};g.array=function(a){return a?e(a):y};Object.defineProperty(g,"settings",{set:function(a){var b;a=a||{};b=a.brackets;Object.defineProperty(a,"brackets",{set:l,get:function(){return u},enumerable:!0});v=a;l(b)},get:function(){return v}});g.settings="undefined"!==typeof riot&&riot.settings||{};g.set=l;g.R_STRINGS=n;g.R_MLCOMMS=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g;g.S_QBLOCKS=k;return g}(),
E=function(){function a(a,c){return a?(k[a]||(k[a]=d(a))).call(c,b):a}function b(b,c){b.riotData={tagName:c&&c.__&&c.__.tagName,_riot_id:c&&c._riot_id};a.errorHandler?a.errorHandler(b):"undefined"!==typeof console&&"function"===typeof console.error&&(b.riotData.tagName&&console.error("Riot template error thrown in the <%s> tag",b.riotData.tagName),console.error(b))}function d(a){a=e(a);"try{return "!==a.slice(0,11)&&(a="return "+a);return new Function("E",a+";")}function e(a){var b=[],c=U.split(a.replace(q,
'"'),1);if(2<c.length||c[0]){var d,f,e=[];for(d=f=0;d<c.length;++d)(a=c[d])&&(a=d&1?g(a,1,b):'"'+a.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(e[f++]=a);a=2>f?e[0]:"["+e.join(",")+'].join("")'}else a=g(c[1],0,b);b[0]&&(a=a.replace(r,function(a,c){return b[c].replace(/\r/g,"\\r").replace(/\n/g,"\\n")}));return a}function g(a,b,c){function d(b,c){var d,f=1,e=u[b];for(e.lastIndex=c.lastIndex;d=e.exec(a);)if(d[0]===b)++f;else if(!--f)break;c.lastIndex=f?a.length:e.lastIndex}
if(a=a.replace(p,function(a,b){return 2<a.length&&!b?n+(c.push(a)-1)+"~":a}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var f=[],e=0,g;a&&(g=a.match(m))&&!g.index;){var h,k,t=/,|([[{(])|$/g;a=RegExp.rightContext;for(h=g[2]?c[g[2]].slice(1,-1).trim().replace(/\s+/g," "):g[1];k=(g=t.exec(a))[1];)d(k,t);k=a.slice(0,g.index);a=RegExp.rightContext;f[e++]=l(k,1,h)}a=e?1<e?"["+f.join(",")+'].join(" ").trim()':f[0]:l(a,b)}return a}function l(a,b,c){var d;a=a.replace(v,function(a,
b,c,f,e){c&&(f=d?0:f+a.length,"this"!==c&&"global"!==c&&"window"!==c?(a=b+'("'+c+A+c,f&&(d="."===(e=e[f])||"("===e||"["===e)):f&&(d=!x.test(e.slice(f))));return a});d&&(a="try{return "+a+"}catch(e){E(e,this)}");c?a=(d?"function(){"+a+"}.call(this)":"("+a+")")+'?"'+c+'":""':b&&(a="function(v){"+(d?a.replace("return ","v="):"v=("+a+")")+';return v||v===0?v:""}.call(this)');return a}var k={};a.hasExpr=U.hasExpr;a.loopKeys=U.loopKeys;a.clearCache=function(){k={}};a.errorHandler=null;var n=String.fromCharCode(8279),
m=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,p=RegExp(U.S_QBLOCKS,"g"),q=/\u2057/g,r=/\u2057(\d+)~/g,u={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},A='"in this?this:'+("object"!==typeof window?"global":"window")+").",v=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,x=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;a.version=U.version="v3.0.3";return a}(),va=function(a){a=a||{};var b={},d=
Array.prototype.slice;Object.defineProperties(a,{on:{value:function(c,d){"function"==typeof d&&(b[c]=b[c]||[]).push(d);return a},enumerable:!1,writable:!1,configurable:!1},off:{value:function(c,d){if("*"!=c||d)if(d)for(var f=b[c],e=0,g;g=f&&f[e];++e)g==d&&f.splice(e--,1);else delete b[c];else b={};return a},enumerable:!1,writable:!1,configurable:!1},one:{value:function(b,c){function d(){a.off(b,d);c.apply(a,arguments)}return a.on(b,d)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(c){var f=
arguments,e=arguments.length-1,g=Array(e),k;for(k=0;k<e;k++)g[k]=f[k+1];f=d.call(b[c]||[],0);for(k=0;e=f[k];++k)e.apply(a,g);b["*"]&&"*"!=c&&a.trigger.apply(a,["*",c].concat(g));return a},enumerable:!1,writable:!1,configurable:!1}});return a},vb=Object.freeze({each:v,contains:G,toCamel:H,startsWith:Q,defineProperty:x,extend:C}),Na=C(Object.create(U.settings),{skipAnonymousTags:!0}),Xa=/^on/,db={init:function(a,b,d){a.removeAttribute("if");this.tag=b;this.expr=d;this.stub=document.createTextNode("");
this.pristine=a;b=a.parentNode;b.insertBefore(this.stub,a);b.removeChild(a);return this},update:function(){var a=E(this.expr,this.tag);a&&!this.current?(this.current=this.pristine.cloneNode(!0),this.stub.parentNode.insertBefore(this.current,this.stub),this.expressions=[],Ea.apply(this.tag,[this.current,this.expressions,!0])):!a&&this.current&&(ja(this.expressions),this.current._tag?this.current._tag.unmount():this.current.parentNode&&this.current.parentNode.removeChild(this.current),this.current=
null,this.expressions=[]);a&&ma.call(this.tag,this.expressions)},unmount:function(){ja(this.expressions||[]);delete this.pristine;delete this.parentNode;delete this.stub}},Fa={init:function(a,b,d,e){this.dom=a;this.attr=d;this.rawValue=e;this.parent=b;this.hasExp=E.hasExpr(e);this.firstRun=!0;return this},update:function(){var a=this.rawValue;this.hasExp&&(a=E(this.rawValue,this.parent));if(this.firstRun||a!==this.value){var b=this.parent&&S(this.parent),d=this.tag||this.dom;!l(this.value)&&b&&N(b.refs,
this.value,d);l(a)?this.dom.removeAttribute(this.attr):(b&&Z(b.refs,a,d,null,this.parent.__.index),q(this.dom,this.attr,a));this.value=a;this.firstRun=!1}},unmount:function(){var a=this.tag||this.dom,b=this.parent&&S(this.parent);!l(this.value)&&b&&N(b.refs,this.value,a);delete this.dom;delete this.parent}},gb=/<yield\b/i,jb=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,hb=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,ib=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
nb={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},mb=qa&&10>qa?rb:sb,lb="div",Ja={},pb=Ja.__global_mixin={},ob=0,wb=Object.freeze({Tag:Ga,tag:sa,tag2:Ha,mount:Ia,mixin:da,update:Ka,unregister:La,version:"v3.3.2"}),qb=0,xb=Object.freeze({getTag:ia,inheritFrom:Oa,moveChildTag:Ba,initChildTag:oa,getImmediateCustomParentTag:S,unmountAll:ja,getTagName:ha,cleanUpData:ua,arrayishAdd:Z,arrayishRemove:N,mountTo:ta,makeReplaceVirtual:pa,makeVirtual:ga,moveVirtual:Ca,selectTags:ca}),Qa=Na,Ra={tmpl:E,brackets:U,
styleManager:aa,vdom:ba,styleNode:aa.styleNode,dom:ub,check:tb,misc:vb,tags:xb},yb=sa,zb=da,Ab=va,Bb=C({},wb,{observable:va,settings:Qa,util:Ra});e.settings=Qa;e.util=Ra;e.Tag=Ga;e.tag=yb;e.tag2=Ha;e.mount=Ia;e.mixin=zb;e.update=Ka;e.unregister=La;e.observable=Ab;e["default"]=Bb;Object.defineProperty(e,"__esModule",{value:!0})})})()});require.register("components/CardsComp.tag",function(r,e,p){riot.tag2("comp-cards",'<div class="CardsComp" ref="comp"> <comp-search ref="search"></comp-search> <div class="container"> <div class="cards-list"> <div class="empty" if="{displayCards.length < 1}"> <h1>No projects found.</h1> </div> <div class="card" each="{displayCards}"> <div class="image"> <img if="{imageUrl}" riot-src="imgs/projects/{imageUrl}" alt="{name}"> </div> <div class="title">{name}</div> <div class="description">{description}</div> <hr> <div class="action-buttons"> <a href="{link}" class="btn"> Visit Project </a> <div class="btn outline" onclick="{openDonationPopup}"> Donate </div> </div> <div class="donation-popup {on: popupOpen}"> <img src="imgs/icon-close.svg" class="close" alt="Close Popup" onclick="{closeDonationPopup}"> <h1>Donate to <b>{name}</b></h1> <div class="list" if="{donation.length > 0}"> <div class="item" each="{donation}"> <div class="title">{symbol} address</div> <div class="address">{address}</div> </div> </div> <h2 if="{donation.length < 1}">No donation addresses. :-(</h2> </div> </div> </div> </div> </div>',
"","",function(e){var m=this;this.cards=[];this.displayCards=[];this.isFilterActive=!0;this.on("mount",function(){m.fetchCardsData();window.onscroll=m.onscroll});this.createCardObj=function(){return{name:null,description:null,descriptionFull:null,imageUrl:null,link:null,tags:[],donation:[]}}.bind(this);this.onscroll=function(b){console.log(this.isFilterActive);if(this.isFilterActive){this.cardsCompTop=this.refs.comp.getBoundingClientRect().top;var e=Math.floor(window.scrollY/912);e>(this.lastchunk||
0)?(this.displayCards=this.cards.slice(0,16*(e+1)),this.lastchunk=e,this.update()):b.preventUpdate=!0}}.bind(this);this.fetchCardsData=function(){var b=this;ajax().get("coins-whitelist.json").then(function(e,k){console.log(e);ajax().get("projects.json").then(function(k,l){k.forEach(function(d){var g=b.createCardObj();g.name=d.name;g.description=d.description;g.descriptionFull=d.descriptionFull;g.imageUrl=d.imageUrl;g.link=d.link;g.tags=d.tags||[];g.donation=b.handleDonationWhiteList(d.donation||[],
e);b.cards.push(g)});b.cards.reverse();b.displayCards=b.cards.slice(0,16);b.update()})})}.bind(this);this.actionDetails=function(b){b=b.item;var e=document.createElement("COMP-SIDEBAR");document.body.append(e);riot.mount(e,b)}.bind(this);this.openDonationPopup=function(b){b.item.popupOpen=!0;this.update()}.bind(this);this.closeDonationPopup=function(b){b.item.popupOpen=!1;this.update()}.bind(this);this.handleDonationWhiteList=function(b,e){return b.filter(function(b){return-1<e.indexOf(b.symbol.toUpperCase())?
!0:!1})||[]}.bind(this)})});require.register("components/FooterComp.tag",function(r,e,p){riot.tag2("comp-footer",'<div class="container"> <div class="FooterComp"> <div class="logo"> <img src="imgs/logo.svg" alt="Showcase"> </div> <nav class="menu"> <ul> <li><a href="https://github.com/kazzkiq/pc-showcase#submit-a-project">Submit a Project</a></li> <li><a href="https://peercoin.net/">About Peercoin</a></li> <li><a href="https://peerassets.github.io/WhitePaper/">PeerAssets</a></li> </ul> </nav> </div> </div>',
"","",function(e){})});require.register("components/MainComp.tag",function(r,e,p){riot.tag2("comp-main",'<comp-topbar></comp-topbar> <div class="hero"> <img src="imgs/hero-icons.png" class="hero-img" alt="Create anything with PeerAssets!"> <h1>Project showcase</h1> <h2>You can browse projects, or <a href="https://github.com/kazzkiq/pc-showcase#submit-a-project" class="primary">submit</a> your own.</h2> </div> <comp-cards></comp-cards>',"","",function(e){})});require.register("components/SearchComp.tag",
function(r,e,p){riot.tag2("comp-search",'<div class="SearchComp"> <input type="text" placeholder="Search..." oninput="{filter}"> </div>',"","",function(e){this.cards=this.parent.cards;this.filter=function(e){var b=e.target.value;1>b.length?(this.parent.lastchunk=0,this.parent.displayCards=this.parent.cards.slice(0,16),this.parent.isFilterActive=!0):(console.log(this.cards,1),e=this.cards.filter(function(e){e.tags=e.tags||[];return-1<(e.name+e.tags.join("")).toLowerCase().indexOf(b.toLowerCase())?
!0:!1}),this.parent.isFilterActive=!1,this.parent.displayCards=e);this.parent.update()}.bind(this)})});require.register("components/SideBarComp.tag",function(r,e,p){riot.tag2("comp-sidebar",'<div class="SideBarComp"> <div class="overlay {on: opened}" onclick="{close}" ref="overlay"></div> <div class="sidebar {on: opened}"> <h1 class="title">{opts.name}</h1> <div class="description">{opts.descriptionFull || opts.description}</div> <hr> <virtual if="{opts.tags.length > 0}"> <div class="description">{opts.tags.join(\', \')}</div> <hr> </virtual> <a if="{opts.link}" href="{opts.link}" class="btn">Visit Project</a> </div> </div>',
"","",function(e){var m=this;this.on("mount",function(){setTimeout(function(){m.open()},100)});this.open=function(){document.body.classList.add("no-scroll");document.querySelector("main").classList.add("off");this.opened=!0;this.update()}.bind(this);this.close=function(){var b=this;this.refs.overlay.addEventListener("transitionend",function(){b.unmount()});document.querySelector("main").classList.remove("off");this.opened=!1;this.update();document.body.classList.remove("no-scroll")}.bind(this)})});
require.register("components/TopBarComp.tag",function(r,e,p){riot.tag2("comp-topbar",'<div class="container"> <header class="TopBarComp"> <a class="logo" href="{window.location.href}"> <img src="imgs/logo.svg" alt="Showcase"> </a> <nav class="menu"> <ul> <li><a href="https://github.com/kazzkiq/pc-showcase#submit-a-project">Submit a Project</a></li> <li><a href="https://peercoin.net/">About Peercoin</a></li> <li><a href="https://peerassets.github.io/WhitePaper/">PeerAssets</a></li> </ul> </nav> </header> </div>',
"","",function(e){})});require.register("initialize.js",function(r,e,p){e("./components/MainComp");e("./components/TopBarComp");e("./components/CardsComp");e("./components/FooterComp");e("./components/SideBarComp");e("./components/SearchComp");document.addEventListener("DOMContentLoaded",function(){window.appMain=riot.mount("comp-main")[0];window.appFooter=riot.mount("comp-footer")[0]})});require.alias("@fdaciuk/ajax/dist/ajax.min.js","@fdaciuk/ajax");require.alias("riot/riot.js","riot");require.alias("riot-observable/dist/observable.js",
"riot-observable");require.register("___globals___",function(r,e,p){window.riot=e("riot");window.route=e("riot-route");window.ajax=e("@fdaciuk/ajax")})})();require("___globals___");require("initialize");