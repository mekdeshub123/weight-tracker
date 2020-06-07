(function(e){function t(t){for(var n,o,i=t[0],c=t[1],d=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"03de":function(e,t,r){},"0932":function(e,t,r){"use strict";var n=r("0e05"),a=r.n(n);a.a},"09e6":function(e,t,r){},"0e05":function(e,t,r){},3247:function(e,t,r){"use strict";var n=r("4ebd"),a=r.n(n);a.a},"375a":function(e,t,r){"use strict";var n=r("09e6"),a=r.n(n);a.a},"4ebd":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("WeightTracker",{on:{"record-added":e.newRecordAdded}}),r("WeightTable",{attrs:{records:e.records},on:{"delete-record":e.recordDeleted}}),r("WeightMessage",{attrs:{message:e.message,date:e.date}}),r("Footer")],1)},s=[],o=(r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.errors&&e.errors.length>0,expression:"errors && errors.length > 0"}],staticClass:"alert alert-danger"},e._l(e.errors,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0),r("div",{staticClass:"card add-weight m-2 p-2"},[r("form",{attrs:{id:"form-weight"},on:{submit:function(t){return t.preventDefault(),e.addRecord(t)}}},[e._m(0),r("div",{staticClass:"form-group side"},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newDate,expression:"newDate",modifiers:{trim:!0}}],ref:"date",staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.newDate},on:{input:function(t){t.target.composing||(e.newDate=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group side"},[e._m(2),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newWeight,expression:"newWeight",modifiers:{trim:!0}}],ref:"weight",staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.newWeight},on:{input:function(t){t.target.composing||(e.newWeight=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("diV",{staticClass:"side"},[r("button",{staticClass:"btn btn-primary",on:{click:function(t){return t.preventDefault(),e.addRecord(t)}}},[e._v("Add ")])])],1)])])}),i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h4",{staticClass:"card-title"},[r("b",[e._v("Add current weight")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"date"}},[r("b",[e._v("Enter date")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"weight"}},[r("b",[e._v("Your weight")])])}],c={name:"WeightTracker",data:function(){return{newDate:"",newWeight:"",wLoss:"",errors:[]}},methods:{addRecord:function(){if(this.errors=[],this.newDate&&this.newWeight){var e={date:this.newDate,weight:this.newWeight,wLoss:this.wLoss};this.$emit("record-added",e),this.newDate="",this.newWeight="",this.wLoss="",this.$record_api.addRecord(e)}else this.errors.push("Date and Weight is required")}}},d=c,u=(r("375a"),r("2877")),l=Object(u["a"])(d,o,i,!1,null,"716ef60a",null),f=l.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("div",{staticClass:"edit-table-toggle form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(e.editTable)?e._i(e.editTable,null)>-1:e.editTable},on:{change:function(t){var r=e.editTable,n=t.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&(e.editTable=r.concat([s])):o>-1&&(e.editTable=r.slice(0,o).concat(r.slice(o+1)))}else e.editTable=a}}}),r("label",{staticClass:"form-check-lable",attrs:{for:"edit-table"}},[e._v("Edit Record?")]),r("div",{attrs:{id:"record-table"}},[r("table",{staticClass:"table"},[r("tr",[r("th",[e._v("Date")]),r("th",[e._v("Weight")]),r("th",[e._v("wLoss")]),r("th",{directives:[{name:"show",rawName:"v-show",value:e.editTable,expression:"editTable"}]},[e._v("Delete")])]),e._l(e.records,(function(t){return r("tr",{key:t.date,staticClass:"record-row",class:"wLoss-"+t.wLoss},[r("td",[e._v(e._s(t.date))]),r("td",[e._v(e._s(t.weight))]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.wLoss,expression:"record.wLoss"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.wLoss)?e._i(t.wLoss,null)>-1:t.wLoss},on:{change:[function(r){var n=t.wLoss,a=r.target,s=!!a.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);a.checked?i<0&&e.$set(t,"wLoss",n.concat([o])):i>-1&&e.$set(t,"wLoss",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(t,"wLoss",s)},function(r){return e.checked(t)}]}})])])})),e._l(e.records,(function(t){return r("RecordRow",{key:t.date,attrs:{record:t,edit:e.editTable},on:{"record-wLost":e.recordLostOrGain,"delete-record":e.recordDeleted}})}))],2)])])])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card record-list m-2 p-2"},[r("h3",{staticClass:"card-title"},[e._v(" Weight Records")])])}],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"record-row",class:"wLoss-"+e.record.wLoss},[n("td",[e._v(e._s(e.record.date))]),n("td",[e._v(e._s(e.record.weight))]),n("td",[e._v(e._s(e.record.wLoss))]),n("td",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]},[n("img",{staticClass:"delete-icon",attrs:{src:r("ed3a")},on:{click:function(t){return e.deleteRecord(e.record)}}})])])},v=[],g={name:"RecordRow",data:function(){return{edit:!0}},props:{record:Object},methods:{checked:function(e){this.$emit("record-wLoss",e)},deleteRecord:function(e){confirm("Delete ".concat(e.date,"?"))&&this.$emit("delete-record",e)}}},w=g,A=(r("e16d"),Object(u["a"])(w,p,v,!1,null,"71e6b486",null)),b=A.exports,_={name:"WeightTable",components:{RecordRow:b},data:function(){return{editTable:!1}},props:{records:Array},methods:{recordDeleted:function(e){this.$emit("delete-record",e)},checked:function(e){this.$emit("record-wLost",e)}}},y=_,k=(r("5c21"),Object(u["a"])(y,h,m,!1,null,"c30238d2",null)),C=k.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("transition",{attrs:{name:"fade"}},[e.seeMessage?r("div",{staticClass:"alert alert-class"},[e._v(e._s(e.message)+" "+e._s(e.weight))]):e._e()])],1)},R=[],O={name:"WeightMessage",data:function(){return{seeMessage:!1}},props:{message:String,weight:String},dwatch:{message:function(){var e=this;this.seeMessage=!0,setTimeout((function(){e.seeMessage=!1}),3e3)}}},T=O,P=(r("0932"),Object(u["a"])(T,L,R,!1,null,"59eff198",null)),x=P.exports,z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"jumbotron"},[r("h1",{staticClass:"display-4",attrs:{id:"title"}},[r("b",[e._v("Weight Tracker")])])])])}],E={name:"Header"},J=E,M=(r("cf44"),Object(u["a"])(J,z,D,!1,null,"68ac2550",null)),j=M.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer"},[r("div",{staticClass:"m-2"},[r("span",{staticClass:"p-3"},[r("router-link",{attrs:{to:"/home"}},[e._v("home")])],1),r("span",{staticClass:"p-3"},[r("router-link",{attrs:{to:"/about"}},[e._v("About this site")])],1)]),e._m(0)])},W=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-right p-2"},[e._v("Header image by "),r("a",{attrs:{href:"https://unsplash.com/photos/iLKK0eFTywU"}},[e._v("@graphicnode via unsplash.")])])}],X={name:"Footer",data:function(){return{}}},H=X,F=(r("3247"),Object(u["a"])(H,B,W,!1,null,"7b4b746f",null)),S=F.exports,U={name:"app",data:function(){return{records:[],message:"",weight:"",date:""}},components:{WeightTracker:f,WeightTable:C,WeightMessage:x,Header:j,Footer:S},mounted:function(){this.updateRecord()},methods:{newRecordAdded:function(e){this.records.push(e)},recordLostOrGain:function(e){var t=this;this.$record_api.updateRecord(e).then((function(){t.message=e.lost?"Congratulation,":"Sorry, ",t.date=e.date,t.updateRecord()}))},recordDeleted:function(e){this.records=this.records.filter((function(t){return t!=e}))},updateRecord:function(){var e=this;this.$record_api.getAllRecords().then((function(t){e.records=t}))}}},Q=U,K=(r("034f"),Object(u["a"])(Q,a,s,!1,null,null,null)),Z=K.exports,V=r("5f5b"),q=r("bc3a"),I=r.n(q),N="/api/record",G={getAllRecords:function(){return I.a.get(N).then((function(e){return e.data}))},addRecord:function(e){return I.a.post(N,e).then((function(e){return e.data}))},updateRecord:function(e){return I.a.patch("".concat(N,"/ ").concat(e.date),e).then((function(e){return e.data}))},deleteRecord:function(e){return I.a.delete("".concat(N,"/").concat(e)).then((function(e){return e.data}))}};r("f9e3"),r("2dd8");n["default"].use(V["a"]),n["default"].prototype.$record_api=G,new n["default"]({render:function(e){return e(Z)}}).$mount("#app")},"5c21":function(e,t,r){"use strict";var n=r("fc15"),a=r.n(n);a.a},"85ec":function(e,t,r){},cf44:function(e,t,r){"use strict";var n=r("03de"),a=r.n(n);a.a},d10f:function(e,t,r){},e16d:function(e,t,r){"use strict";var n=r("d10f"),a=r.n(n);a.a},ed3a:function(e,t){e.exports="data:image/png;base64,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"},fc15:function(e,t,r){}});
//# sourceMappingURL=app.a97eab31.js.map