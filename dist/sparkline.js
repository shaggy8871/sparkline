var sparkline=function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var n=r(2),a=r(3),i=r(4);t.exports=function(t){return n(t)||a(t)||i()}},function(t,e,r){"use strict";r.r(e),r.d(e,"sparkline",function(){return c});var n=r(0),a=r.n(n);function i(t,e,r,n){return parseFloat((e-n*e/t+r).toFixed(2))}function o(t){return t.value}function u(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)r.setAttribute(n,e[n]);return r}function c(t,e,r){var n;if(n=t,a()(n.querySelectorAll("*")).forEach(function(t){return n.removeChild(t)}),!(e.length<=1)){r=r||{},"number"==typeof e[0]&&(e=e.map(function(t){return{value:isNaN(t)?0:t}}));var c=r.onmousemove,s=r.onmouseout,l="interactive"in r?r.interactive:!!c,f=r.spotRadius||2,p=2*f,d=r.cursorWidth||2,v=parseFloat(t.attributes["stroke-width"].value),b=r.fetch||o,h=e.map(function(t){return b(t)}),y=parseFloat(t.attributes.width.value)-2*p,x=parseFloat(t.attributes.height.value),m=x-2*v-p,g=Math.max.apply(Math,a()(h));g=isNaN(g)?0:g;var A=-1e3,w=h.length-1,j=y/w,k=[],O=i(g,m,v+f,h[0]);O=isNaN(O)?m:O;var N="M".concat(p," ").concat(O);h.forEach(function(t,r){var n=r*j+p,a=i(g,m,v+f,t);a=isNaN(a)?m:a,k.push(Object.assign({},e[r],{index:r,x:n,y:a})),N+=" L ".concat(n," ").concat(a)});var S=u("path",{class:"sparkline--line",d:N,fill:"none"}),M=u("path",{class:"sparkline--fill",d:"".concat(N," V ").concat(x," L ").concat(p," ").concat(x," Z"),stroke:"none"});if(t.appendChild(M),t.appendChild(S),l){var C=u("line",{class:"sparkline--cursor",x1:A,x2:A,y1:0,y2:x,"stroke-width":d}),E=u("circle",{class:"sparkline--spot",cx:A,cy:A,r:f});t.appendChild(C),t.appendChild(E);var _=u("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});t.appendChild(_),_.addEventListener("mouseout",function(t){C.setAttribute("x1",A),C.setAttribute("x2",A),E.setAttribute("cx",A),s&&s(t)}),_.addEventListener("mousemove",function(t){var e=t.offsetX,r=k.find(function(t){return t.x>=e});r||(r=k[w]);var n,a=k[k.indexOf(r)-1],i=(n=a?a.x+(r.x-a.x)/2<=e?r:a:r).x,o=n.y;E.setAttribute("cx",i),E.setAttribute("cy",o),C.setAttribute("x1",i),C.setAttribute("x2",i),c&&c(t,n)})}}}e.default=c},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);
//# sourceMappingURL=sparkline.js.map