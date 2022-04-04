/*! @dotburo/form-digger 1.0.0 | dotburo <code@dotburo.org> (https://dotburo.org) !*/
var Paginator=function(){"use strict";var t="object"==typeof global&&global&&global.Object===Object&&global,e="object"==typeof self&&self&&self.Object===Object&&self,r=t||e||Function("return this")(),n=r.Symbol,o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=n?n.toStringTag:void 0;var c=Object.prototype.toString;var s=n?n.toStringTag:void 0;function l(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?function(t){var e=i.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[u]=r:delete t[u]),o}(t):function(t){return c.call(t)}(t)}function f(t){return null!=t&&"object"==typeof t}var p=Array.isArray,h=/\s/;var v=/^\s+/;function y(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&h.test(t.charAt(e)););return e}(t)+1).replace(v,""):t}function _(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var d=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,g=/^0o[0-7]+$/i,j=parseInt;function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||f(t)&&"[object Symbol]"==l(t)}(t))return NaN;if(_(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=_(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=y(t);var r=b.test(t);return r||g.test(t)?j(t.slice(2),r?2:8):d.test(t)?NaN:+t}var O=1/0;function w(t){return t?(t=m(t))===O||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function x(t){return t}function A(t){if(!_(t))return!1;var e=l(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}var z,P=r["__core-js_shared__"],$=(z=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"";var S=Function.prototype.toString;var M=/^\[object .+?Constructor\]$/,T=Function.prototype,F=Object.prototype,k=T.toString,E=F.hasOwnProperty,I=RegExp("^"+k.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function U(t){return!(!_(t)||(e=t,$&&$ in e))&&(A(t)?I:M).test(function(t){if(null!=t){try{return S.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function N(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return U(r)?r:void 0}var B=Object.create,C=function(){function t(){}return function(e){if(!_(e))return{};if(B)return B(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function D(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var L=Date.now;var R,q,K,G=function(){try{var t=N(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),H=G,V=H?function(t,e){return H(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:x,W=(R=V,q=0,K=0,function(){var t=L(),e=16-(t-K);if(K=t,e>0){if(++q>=800)return arguments[0]}else q=0;return R.apply(void 0,arguments)}),J=W,Q=/^(?:0|[1-9]\d*)$/;function X(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Q.test(t))&&t>-1&&t%1==0&&t<e}function Y(t,e,r){"__proto__"==e&&H?H(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function Z(t,e){return t===e||t!=t&&e!=e}var tt=Object.prototype.hasOwnProperty;function et(t,e,r){var n=t[e];tt.call(t,e)&&Z(n,r)&&(void 0!==r||e in t)||Y(t,e,r)}var rt=Math.max;function nt(t,e){return J(function(t,e,r){return e=rt(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=rt(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(a),D(t,this,u)}}(t,e,x),t+"")}function ot(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function it(t){return null!=t&&ot(t.length)&&!A(t)}function at(t,e,r){if(!_(r))return!1;var n=typeof e;return!!("number"==n?it(r)&&X(e,r.length):"string"==n&&e in r)&&Z(r[e],t)}var ut=Object.prototype;function ct(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ut)}function st(t){return f(t)&&"[object Arguments]"==l(t)}var lt=Object.prototype,ft=lt.hasOwnProperty,pt=lt.propertyIsEnumerable,ht=st(function(){return arguments}())?st:function(t){return f(t)&&ft.call(t,"callee")&&!pt.call(t,"callee")},vt=ht;var yt="object"==typeof exports&&exports&&!exports.nodeType&&exports,_t=yt&&"object"==typeof module&&module&&!module.nodeType&&module,dt=_t&&_t.exports===yt?r.Buffer:void 0,bt=(dt?dt.isBuffer:void 0)||function(){return!1},gt={};gt["[object Float32Array]"]=gt["[object Float64Array]"]=gt["[object Int8Array]"]=gt["[object Int16Array]"]=gt["[object Int32Array]"]=gt["[object Uint8Array]"]=gt["[object Uint8ClampedArray]"]=gt["[object Uint16Array]"]=gt["[object Uint32Array]"]=!0,gt["[object Arguments]"]=gt["[object Array]"]=gt["[object ArrayBuffer]"]=gt["[object Boolean]"]=gt["[object DataView]"]=gt["[object Date]"]=gt["[object Error]"]=gt["[object Function]"]=gt["[object Map]"]=gt["[object Number]"]=gt["[object Object]"]=gt["[object RegExp]"]=gt["[object Set]"]=gt["[object String]"]=gt["[object WeakMap]"]=!1;var jt="object"==typeof exports&&exports&&!exports.nodeType&&exports,mt=jt&&"object"==typeof module&&module&&!module.nodeType&&module,Ot=mt&&mt.exports===jt&&t.process,wt=function(){try{var t=mt&&mt.require&&mt.require("util").types;return t||Ot&&Ot.binding&&Ot.binding("util")}catch(t){}}(),xt=wt&&wt.isTypedArray,At=xt?function(t){return function(e){return t(e)}}(xt):function(t){return f(t)&&ot(t.length)&&!!gt[l(t)]},zt=At,Pt=Object.prototype.hasOwnProperty;function $t(t,e){var r=p(t),n=!r&&vt(t),o=!r&&!n&&bt(t),i=!r&&!n&&!o&&zt(t),a=r||n||o||i,u=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=u.length;for(var s in t)!e&&!Pt.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||X(s,c))||u.push(s);return u}var St=Object.prototype.hasOwnProperty;function Mt(t){if(!_(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=ct(t),r=[];for(var n in t)("constructor"!=n||!e&&St.call(t,n))&&r.push(n);return r}function Tt(t){return it(t)?$t(t,!0):Mt(t)}var Ft=N(Object,"create");var kt=Object.prototype.hasOwnProperty;var Et=Object.prototype.hasOwnProperty;function It(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ut(t,e){for(var r=t.length;r--;)if(Z(t[r][0],e))return r;return-1}It.prototype.clear=function(){this.__data__=Ft?Ft(null):{},this.size=0},It.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},It.prototype.get=function(t){var e=this.__data__;if(Ft){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return kt.call(e,t)?e[t]:void 0},It.prototype.has=function(t){var e=this.__data__;return Ft?void 0!==e[t]:Et.call(e,t)},It.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Ft&&void 0===e?"__lodash_hash_undefined__":e,this};var Nt=Array.prototype.splice;function Bt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Bt.prototype.clear=function(){this.__data__=[],this.size=0},Bt.prototype.delete=function(t){var e=this.__data__,r=Ut(e,t);return!(r<0)&&(r==e.length-1?e.pop():Nt.call(e,r,1),--this.size,!0)},Bt.prototype.get=function(t){var e=this.__data__,r=Ut(e,t);return r<0?void 0:e[r][1]},Bt.prototype.has=function(t){return Ut(this.__data__,t)>-1},Bt.prototype.set=function(t,e){var r=this.__data__,n=Ut(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var Ct=N(r,"Map");function Dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Lt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Lt.prototype.clear=function(){this.size=0,this.__data__={hash:new It,map:new(Ct||Bt),string:new It}},Lt.prototype.delete=function(t){var e=Dt(this,t).delete(t);return this.size-=e?1:0,e},Lt.prototype.get=function(t){return Dt(this,t).get(t)},Lt.prototype.has=function(t){return Dt(this,t).has(t)},Lt.prototype.set=function(t,e){var r=Dt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var Rt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object),qt=Rt,Kt=Function.prototype,Gt=Object.prototype,Ht=Kt.toString,Vt=Gt.hasOwnProperty,Wt=Ht.call(Object);function Jt(t){var e=this.__data__=new Bt(t);this.size=e.size}Jt.prototype.clear=function(){this.__data__=new Bt,this.size=0},Jt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},Jt.prototype.get=function(t){return this.__data__.get(t)},Jt.prototype.has=function(t){return this.__data__.has(t)},Jt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Bt){var n=r.__data__;if(!Ct||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Lt(n)}return r.set(t,e),this.size=r.size,this};var Qt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Xt=Qt&&"object"==typeof module&&module&&!module.nodeType&&module,Yt=Xt&&Xt.exports===Qt?r.Buffer:void 0,Zt=Yt?Yt.allocUnsafe:void 0;var te=r.Uint8Array;function ee(t,e){var r,n,o=e?(r=t.buffer,n=new r.constructor(r.byteLength),new te(n).set(new te(r)),n):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}var re,ne=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),a=i.length;a--;){var u=i[re?a:++n];if(!1===e(o[u],u,o))break}return t};function oe(t,e,r){(void 0!==r&&!Z(t[e],r)||void 0===r&&!(e in t))&&Y(t,e,r)}function ie(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}function ae(t){return function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=n?n(r[u],t[u],u,r,t):void 0;void 0===c&&(c=t[u]),o?Y(r,u,c):et(r,u,c)}return r}(t,Tt(t))}function ue(t,e,r,n,o,i,a){var u=ie(t,r),c=ie(e,r),s=a.get(c);if(s)oe(t,r,s);else{var h,v=i?i(u,c,r+"",t,e,a):void 0,y=void 0===v;if(y){var d=p(c),b=!d&&bt(c),g=!d&&!b&&zt(c);v=c,d||b||g?p(u)?v=u:f(h=u)&&it(h)?v=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(u):b?(y=!1,v=function(t,e){if(e)return t.slice();var r=t.length,n=Zt?Zt(r):new t.constructor(r);return t.copy(n),n}(c,!0)):g?(y=!1,v=ee(c,!0)):v=[]:function(t){if(!f(t)||"[object Object]"!=l(t))return!1;var e=qt(t);if(null===e)return!0;var r=Vt.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&Ht.call(r)==Wt}(c)||vt(c)?(v=u,vt(u)?v=ae(u):_(u)&&!A(u)||(v=function(t){return"function"!=typeof t.constructor||ct(t)?{}:C(qt(t))}(c))):y=!1}y&&(a.set(c,v),o(v,c,n,i,a),a.delete(c)),oe(t,r,v)}}function ce(t,e,r,n,o){t!==e&&ne(e,(function(i,a){if(o||(o=new Jt),_(i))ue(t,e,a,r,ce,n,o);else{var u=n?n(ie(t,a),i,a+"",t,e,o):void 0;void 0===u&&(u=i),oe(t,a,u)}}),Tt)}var se,le=(se=function(t,e,r){ce(t,e,r)},nt((function(t,e){var r=-1,n=e.length,o=n>1?e[n-1]:void 0,i=n>2?e[2]:void 0;for(o=se.length>3&&"function"==typeof o?(n--,o):void 0,i&&at(e[0],e[1],i)&&(o=n<3?void 0:o,n=1),t=Object(t);++r<n;){var a=e[r];a&&se(t,a,r,o)}return t}))),fe=Math.ceil,pe=Math.max;var he=function(t){return function(e,r,n){return n&&"number"!=typeof n&&at(e,r,n)&&(r=n=void 0),e=w(e),void 0===r?(r=e,e=0):r=w(r),function(t,e,r,n){for(var o=-1,i=pe(fe((e-t)/(r||1)),0),a=Array(i);i--;)a[n?i:++o]=t,t+=r;return a}(e,r,n=void 0===n?e<r?1:-1:w(n),t)}}(),ve=he;const ye={elements:[],handler:()=>{},ellipsis:"&hellip;",responseKeys:{current:"current_page",total:"total",perPage:"per_page"}};function _e(t){let e=1;var r;this._options=le({},ye,t),this._options.elements=(r=t.elements,Array.isArray(r)?r:r.nodeType?[r]:[...r]),de.call(this,this._options.elements),Object.defineProperty(this,"_current",{get:()=>e,set:t=>{this._options.handler(e=t)}})}function de(t){t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),this.current(parseInt(t.target.textContent,10))}),!1)}))}_e.prototype.onChange=function(t){this._options.handler=t},_e.prototype.render=function(t){if((t=be(t,this._options.responseKeys)).total<=0)return;let e=Math.round(t.total/t.perPage),r=ge(t.current,e,this._options.ellipsis);r=r.map((e=>function(t,e){if(!t.current&&t.index!==e)return`<li class="page-item"><a class="page-link" href="${t.url}">${t.index}</a></li>`;if(t.index===e)return`<li class="page-item"><span class="page-link">${t.index}</span></li>`;return`<li class="page-item active" aria-current="page"><span class="page-link">${t.index}</span></li>`}({current:e===t.current,index:e,url:window.location.href.replace(/(page=)\d+/,"$1"+e)},this._options.ellipsis))),this._options.elements.forEach((e=>{e.innerHTML=(t.current,`<ol class="pagination">${r.join("")}</ol>`)}))},_e.prototype.current=function(t){return t?this._current=t:this._current};const be=(t,e)=>(e=Object.assign({},e),Object.keys(e).forEach((r=>{e[r]=t[e[r]]})),e),ge=(t,e,r="...")=>{let n;n=e<=7?7:t>4&&t<e-3?2:4;const o={start:Math.round(t-n/2),end:Math.round(t+n/2)};o.start-1!=1&&o.end+1!==e||(o.start+=1,o.end+=1);let i=t>n?ve(Math.min(o.start,e-n),Math.min(o.end,e)+1):ve(1,Math.min(e,n+1)+1);const a=(t,r)=>i.length+1!==e?r:[t];return 1!==i[0]&&(i=a(1,[1,r]).concat(i)),i[i.length-1]<e&&(i=i.concat(a(e,[r,e]))),i};return _e}();
//# sourceMappingURL=paginator-min.js.map
