(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],p=0,l=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("weight-tracker",{attrs:{msg:"Would you like to track your weight"}})],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weight"},[n("h1",[e._v(e._s(e.msg))]),n("h2",[e._v(e._s(e.weightMessage))])])},u=[],c={name:"WeightTracker",data:function(){return{weightMessage:""}},props:{msg:String},mounted:function(){var e=this;this.$weight_api.getWeightMessage().then((function(t){e.weightMessage=t.message}))}},s=c,f=(n("639b"),n("2877")),p=Object(f["a"])(s,i,u,!1,null,"2d77df58",null),l=p.exports,g={name:"app",components:{WeightTracker:l}},h=g,d=(n("034f"),Object(f["a"])(h,o,a,!1,null,null,null)),v=d.exports,b=n("bc3a"),y=n.n(b),m="api",w={getWeightMessage:function(){return y.a.get(m).then((function(e){return e.data}))}};r["a"].config.productionTip=!1,r["a"].prototype.$weight_api=w,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},"639b":function(e,t,n){"use strict";var r=n("7caf"),o=n.n(r);o.a},"7caf":function(e,t,n){},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.adc87c28.js.map