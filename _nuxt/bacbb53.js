(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{387:function(t,n,o){"use strict";o.r(n);var e={name:"OauthPage",auth:!1,data:function(){return{facebookLoginUrl:""}},mounted:function(){},methods:{FBlogin:function(){this.$auth.loginWith("facebook")}}},r=o(49),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("h1",[t._v("Welcome to your nuxt app")]),t._v(" "),o("div",{staticClass:"flex items-center"},[o("button",{staticClass:"btn-primary w-44 mt-4 text-center",on:{click:t.FBlogin}},[t._v("\n      Facebook Login（用heroku 登入）\n    ")]),t._v(" "),o("a",{staticClass:"ml-4",attrs:{href:"https://homeworkmirror.herokuapp.com/Oauth"}},[t._v("heroku連結點我")])]),t._v(" "),o("div",[o("button",{staticClass:"btn-primary w-44 mt-4 text-center",on:{click:function(n){return t.$auth.loginWith("google")}}},[t._v("\n      Google Login (目前無法拿到userInfo)\n    ")])]),t._v(" "),o("div",{staticClass:"mt-4"},[o("span",[t._v("登入成功資料：")]),t._v("\n    "+t._s(t.$auth.user)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports}}]);