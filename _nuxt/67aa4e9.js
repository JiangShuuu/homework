(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{395:function(t,e,r){"use strict";r.r(e);var n=r(13),c=(r(54),{name:"IndexPage",auth:!1,data:function(){return{hexschoolData:[],startWarData:[]}},mounted:function(){this.startAPI()},methods:{hexAPI:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("api/v2/api/johntext/admin/products/?page=1");case 3:data=e.sent,t.hexschoolData=data.products,e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert("請先登入"),t.$router.push("/login");case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},startAPI:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("people");case 2:data=e.sent,t.startWarData=data.results;case 4:case"end":return e.stop()}}),e)})))()}}}),o=r(49),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex space-x-4"},[r("div",{staticClass:"flex-1"},[r("br"),t._v(" "),r("div",{staticClass:"flex"},[r("h2",[t._v("Products(有token)")]),t._v(" "),r("button",{staticClass:"btn-primary ml-4",on:{click:t.hexAPI}},[t._v("\n        點我拿資料\n      ")])]),t._v(" "),r("br"),t._v(" "),t._l(t.hexschoolData,(function(e){return r("div",{key:e.id},[r("h3",[t._v(t._s(e.title))]),t._v(" "),r("span",[t._v(t._s(e.category))]),t._v(" "),r("hr")])}))],2),t._v(" "),r("div",{staticClass:"flex-1"},[r("br"),t._v(" "),r("h2",[t._v("StartWar(無token)")]),t._v(" "),r("br"),t._v(" "),t._l(t.startWarData,(function(e){return r("div",{key:e.id},[r("h3",[t._v(t._s(e.name))]),t._v(" "),r("span",[t._v(t._s(e.birth_year))]),t._v(" "),r("hr")])}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);