!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=49)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){t.exports=!r(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(9),o=r(16);t.exports=r(1)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(6);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var n=r(12)("wks"),o=r(11),i=r(0).Symbol,a="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=n},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(0),o=r(2),i=r(10),a=r(11)("src"),s=r(22),c=(""+s).split("toString");r(8).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,r,s){var u="function"==typeof r;u&&(i(r,"name")||o(r,"name",e)),t[e]!==r&&(u&&(i(r,a)||o(r,a,t[e]?""+t[e]:c.join(String(e)))),t===n?t[e]=r:s?t[e]?t[e]=r:o(t,e,r):(delete t[e],o(t,e,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||s.call(this)})},function(t,e){var r=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(3),o=r(19),i=r(20),a=Object.defineProperty;e.f=r(1)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){var n=r(8),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(17)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(6),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=!1},function(t,e,r){var n=r(14),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){t.exports=!r(1)&&!r(5)(function(){return 7!=Object.defineProperty(r(15)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(6);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},,function(t,e,r){t.exports=r(12)("native-function-to-string",Function.toString)},function(t,e,r){var n=r(13);t.exports=function(t){return Object(n(t))}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(0),o=r(8),i=r(2),a=r(7),s=r(26),c=function(t,e,r){var u,l,p,f,d=t&c.F,h=t&c.G,g=t&c.S,m=t&c.P,b=t&c.B,v=h?n:g?n[e]||(n[e]={}):(n[e]||{}).prototype,y=h?o:o[e]||(o[e]={}),x=y.prototype||(y.prototype={});for(u in h&&(r=e),r)p=((l=!d&&v&&void 0!==v[u])?v:r)[u],f=b&&l?s(p,n):m&&"function"==typeof p?s(Function.call,p):p,v&&a(v,u,p,t&c.U),y[u]!=p&&i(y,u,f),m&&x[u]!=p&&(x[u]=p)};n.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){var n=r(27);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports={}},function(t,e,r){var n=r(54),o=r(13);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(12)("keys"),o=r(11);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e){t.exports="<style>\r\n    p{\r\n        color:red;\r\n    }\r\n</style>\r\n\r\n<p>Proto works</p>"},,,,,function(t,e,r){var n=r(59),o=r(37);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(9).f,o=r(10),i=r(4)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e){t.exports='<style>\r\n    .theme-switch{\r\n        position:relative;   \r\n    }\r\n    .theme-switch__trigger svg {\r\n        width: 24px;\r\n        height: 24px;\r\n    }\r\n    \r\n    .theme-switch__trigger {\r\n        width:36px;\r\n        height: 36px;\r\n        margin:0;\r\n        border:0;\r\n        outline:0;\r\n        display:flex;\r\n        justify-content:center;\r\n        align-items:center;\r\n        border-radius:50%;\r\n        background-color: #fefefe;\r\n        box-shadow: 0px 2px 5px -3px #323232;\r\n        cursor:pointer;\r\n    }\r\n    \r\n    .theme-switch__trigger:hover{\r\n        background-color:#eeeeee;\r\n    }\r\n    \r\n    .theme-switch__trigger:active{\r\n        background-color:#dadada;\r\n    }\r\n    .theme-switch__options {\r\n        position: absolute;\r\n        top: 8px;\r\n        left: -60px;\r\n        padding: 8px;\r\n        background-color: #fefefe;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        width: 120px;\r\n        margin-top: 16px;\r\n        box-sizing:border-box;\r\n        border-radius:2px;\r\n        box-shadow: 0 2px 7px -4px #323232;\r\n        transition: transform 0ms ease 200ms, opacity 200ms ease;\r\n        transform: scale(0);\r\n        transform-origin: top center;\r\n        opacity: 0;\r\n    }\r\n\r\n    \r\n    \r\n    .theme-switch__option {\r\n        width: 36px;\r\n        height: 36px;\r\n        margin: 8px;\r\n        border-radius:50%;\r\n        position:relative; \r\n        transition: transform 200ms ease 100ms, opacity 200ms ease 100ms;\r\n        opacity: 0;\r\n        transform: translateY(1rem);\r\n        border:none;\r\n        outline:none;\r\n        cursor:pointer;    \r\n        box-shadow: 0px 2px 5px -3px #323232;\r\n        background-size: cover;\r\n        background-position: center center;\r\n    }\r\n\r\n    .theme-switch__option[theme="default"]{\r\n        background-image: linear-gradient(90deg, rgba(50,50,50,0.4),rgba(50,50,50,0.6)), url("/assets/wallpapers/rawpixel_black_paint.jpg");\r\n    }\r\n\r\n    .theme-switch__option[theme="primary"]{\r\n        background-image:linear-gradient(90deg, rgba(2, 78, 173, 0.2),rgba(2,78,173,0.2)), url("/assets/wallpapers/rawpixel_vector.jpg")\r\n    }\r\n    .theme-switch__option[theme="secondary"]{\r\n        background-image: linear-gradient(90deg,#ad2a3b,rgba(230, 82, 102, .5)),url("/assets/wallpapers/rawpixel_red_smoke.jpg");\r\n    }\r\n    .theme-switch__option[theme="tertiary"]{\r\n        background-image:linear-gradient(90deg,rgba(0,0,0,0.2) 0% 50%,rgba(0,0,0,0.4) 50% 100%),url("/assets/wallpapers/rawpixel_happy_vacation.jpg");\r\n    }\r\n    .theme-switch__options:before {\r\n        content: "";\r\n        top: -16px;\r\n        left: 50%;\r\n        border: 16px solid #fefefe;\r\n        position: absolute;\r\n        border-right-color: transparent;\r\n        border-top-width: 0;\r\n        border-left-color: transparent;\r\n        transform:translateX(-50%);\r\n    }\r\n\r\n    .theme-switch.active .theme-switch__options{\r\n        opacity: 1;\r\n        transform: scale(1);\r\n        transition: transform 200ms ease, opacity 200ms ease;\r\n    }\r\n    .theme-switch.active .theme-switch__option{\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n    button.theme-switch__option.active::before{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    content: "";\r\n    border: 2px solid #009fff;\r\n    transform: scale(1.3);\r\n    border-radius: 50%;\r\n    }\r\n</style>\r\n<div class="theme-switch">\r\n\x3c!--\r\n    <button class="theme-switch__trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M112 264c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm32-112c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 0c-16.9 0-34.2 1.6-51.7 5C104.9 24.4 24.8 104.3 5.2 203.4-29.4 378.5 116.4 512 239.5 512c8.3 0 16.5-.6 24.6-1.9 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.6 113.9 397.1 0 256 0zm191.1 288h-79.7c-35.3 0-67.4 17.9-85.7 47.8-18.2 29.7-19.6 66-3.7 97.2 4.9 9.6 4.8 21.6-.1 31.3-2.4 4.6-7.9 12.6-18.7 14.3-6.3 1-12.9 1.5-19.7 1.5-54.6 0-114.1-31.3-155.5-81.6-44-53.6-60.9-120.6-47.4-188.7 17.1-86.6 87-156.2 173.9-173.2 15.2-3 30.5-4.5 45.5-4.5 123.1 0 223.6 99.9 224 222.6 0 18.3-14.8 33.3-32.9 33.3zM368 136c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM240 88c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/></svg></button>--\x3e\r\n    <div class="theme-switch__options">\r\n        <button class="theme-switch__option active" theme="default"></button>\r\n        <button class="theme-switch__option" theme="primary"></button>\r\n        <button class="theme-switch__option" theme="secondary"></button>\r\n        <button class="theme-switch__option" theme="tertiary"></button>\r\n    </div>\r\n</div>'},,,,,,,,,,function(t,e,r){t.exports=r(65)},function(t,e,r){for(var n=r(51),o=r(36),i=r(7),a=r(0),s=r(2),c=r(28),u=r(4),l=u("iterator"),p=u("toStringTag"),f=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(d),g=0;g<h.length;g++){var m,b=h[g],v=d[b],y=a[b],x=y&&y.prototype;if(x&&(x[l]||s(x,l,f),x[p]||s(x,p,b),c[b]=f,v))for(m in n)x[m]||i(x,m,n[m],!0)}},function(t,e,r){"use strict";var n=r(52),o=r(53),i=r(28),a=r(29);t.exports=r(55)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e,r){var n=r(4)("unscopables"),o=Array.prototype;null==o[n]&&r(2)(o,n,{}),t.exports=function(t){o[n][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){var n=r(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(17),o=r(25),i=r(7),a=r(2),s=r(28),c=r(56),u=r(38),l=r(63),p=r(4)("iterator"),f=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,r,h,g,m,b){c(r,e,h);var v,y,x,w=function(t){if(!f&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},_=e+" Iterator",S="values"==g,k=!1,j=t.prototype,O=j[p]||j["@@iterator"]||g&&j[g],L=O||w(g),T=g?S?w("entries"):L:void 0,M="Array"==e&&j.entries||O;if(M&&(x=l(M.call(new t)))!==Object.prototype&&x.next&&(u(x,_,!0),n||"function"==typeof x[p]||a(x,p,d)),S&&O&&"values"!==O.name&&(k=!0,L=function(){return O.call(this)}),n&&!b||!f&&!k&&j[p]||a(j,p,L),s[e]=L,s[_]=d,g)if(v={values:S?L:w("values"),keys:m?L:w("keys"),entries:T},b)for(y in v)y in j||i(j,y,v[y]);else o(o.P+o.F*(f||k),e,v);return v}},function(t,e,r){"use strict";var n=r(57),o=r(16),i=r(38),a={};r(2)(a,r(4)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(a,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){var n=r(3),o=r(58),i=r(37),a=r(30)("IE_PROTO"),s=function(){},c=function(){var t,e=r(15)("iframe"),n=i.length;for(e.style.display="none",r(62).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[i[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(s.prototype=n(t),r=new s,s.prototype=null,r[a]=t):r=c(),void 0===e?r:o(r,e)}},function(t,e,r){var n=r(9),o=r(3),i=r(36);t.exports=r(1)?Object.defineProperties:function(t,e){o(t);for(var r,a=i(e),s=a.length,c=0;s>c;)n.f(t,r=a[c++],e[r]);return t}},function(t,e,r){var n=r(10),o=r(29),i=r(60)(!1),a=r(30)("IE_PROTO");t.exports=function(t,e){var r,s=o(t),c=0,u=[];for(r in s)r!=a&&n(s,r)&&u.push(r);for(;e.length>c;)n(s,r=e[c++])&&(~i(u,r)||u.push(r));return u}},function(t,e,r){var n=r(29),o=r(18),i=r(61);t.exports=function(t){return function(e,r,a){var s,c=n(e),u=o(c.length),l=i(a,u);if(t&&r!=r){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}}},function(t,e,r){var n=r(14),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(10),o=r(23),i=r(30)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},,function(t,e,r){"use strict";r.r(e);var n=r(31),o=r.n(n);r(50);var i=r(39),a=r.n(i);const s={default:{"--theme-color-default":"#323232","--theme-bg-default":'linear-gradient(90deg, rgba(50,50,50,0.4),rgba(50,50,50,0.6)), url("/assets/wallpapers/rawpixel_black_paint.jpg")',"--dark-section-bg":"linear-gradient(90deg,#323232 0% 80%,#515151 80% 100%)"},primary:{"--theme-color-default":"#1e8e97","--theme-bg-default":'linear-gradient(90deg, rgba(2, 78, 173, 0.2),rgba(2,78,173,0.2)), url("/assets/wallpapers/rawpixel_vector.jpg")',"--dark-section-bg":"linear-gradient(45deg, #c76362 0% 5%,#1e8e97 5% 25%,#0b193f 25% 75%, #1e8e97 75% 95%, #C76363 95% 100%)"},secondary:{"--theme-color-default":"#e65266","--theme-bg-default":'linear-gradient(90deg,#ad2a3b,rgba(230, 82, 102, .5)),url("/assets/wallpapers/rawpixel_red_smoke.jpg")',"--dark-section-bg":"linear-gradient(90deg,#ad2a3b 0% 25%,#e65266 25%)"},tertiary:{"--theme-color-default":"#323232","--theme-bg-default":'linear-gradient(90deg,rgba(0,0,0,0.2) 0% 50%,rgba(0,0,0,0.4) 50% 100%),url("/assets/wallpapers/rawpixel_happy_vacation.jpg")',"--dark-section-bg":'linear-gradient(25deg,rgba(0,0,0,0.2) 0% 50%,rgba(0,0,0,0.4) 50% 100%),url("/assets/wallpapers/rawpixel_road.jpg")'}};window.customElements.define("c-proto",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),console.log(this,o.a)}connectedCallback(){console.log("connected"),this.shadowRoot.innerHTML=o.a}disconnectedCallback(){}adoptedCallback(){}attributeChangedCallback(t,e,r){console.log("[PROTO] attributes changed.",{name:t,oldValue:e,newValue:r})}}),window.customElements.define("c-theme-switch",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.id=this.getAttribute("id"),console.log(this.id)}connectedCallback(){console.log("connected"),this.shadowRoot.innerHTML=a.a;let t=this.shadowRoot.querySelector(".theme-switch"),e=this.shadowRoot.querySelector(".theme-switch__trigger");document.querySelectorAll('[trigger-for="'.concat(this.id,'"]')).forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active")})),this.shadowRoot.querySelectorAll(".theme-switch__option").forEach((t,e)=>{t.style.transitionDelay="".concat(25*e+100,"ms"),t.addEventListener("click",e=>{var r=t.getAttribute("theme"),n=this.shadowRoot.querySelector(".theme-switch__option.active");n&&n.classList.remove("active"),r in s&&(t.classList.add("active"),this.setAttribute("active-theme",r))})}),e&&t&&e.addEventListener("click",e=>{t.classList.toggle("active")})}disconnectedCallback(){}adoptedCallback(){}switchTheme(t){const e=s[t];Object.keys(e).forEach(t=>document.body.style.setProperty(t,e[t]))}attributeChangedCallback(t,e,r){let n={"active-theme":this.switchTheme};t in n&&e&&e!=r&&(console.log("[THEME SWITCH] attributes changed.",{name:t,oldValue:e,newValue:r}),n[t].call(this,r))}static get observedAttributes(){return["active-theme"]}})}]);