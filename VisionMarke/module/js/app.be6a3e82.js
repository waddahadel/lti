(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function r(t){return o.p+"js/"+({Intro01:"Intro01","Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision":"Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision",Intro02:"Intro02",Leistung:"Leistung",Marke:"Marke",Mission:"Mission",Quiz:"Quiz",Schaetzfrage:"Schaetzfrage",Vision:"Vision",Overview:"Overview"}[t]||t)+"."+{Intro01:"bf5c713c","Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision":"bd98f547",Intro02:"64f7b3a9",Leistung:"b364bee3",Marke:"12425358",Mission:"a0b75e0b",Quiz:"dded1467",Schaetzfrage:"33e13b70",Vision:"743553c6",Overview:"ed6f37c4"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/testprovider/module/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2450:function(t,e,n){t.exports=n.p+"img/menu.101de4fb.svg"},"71ab":function(t,e,n){t.exports=n.p+"img/Globus-Logo-1.95f64128.svg"},9258:function(t,e,n){t.exports=n.p+"img/chapter-done.60e8576c.svg"},"9d41":function(t,e,n){t.exports=n.p+"img/menu-close.9db62836.svg"},a966:function(t,e,n){t.exports=n.p+"img/chapter-open.1a3d8f29.svg"},b5a1:function(t,e,n){t.exports=n.p+"img/chapter-disabled.002e95d0.svg"},ccba:function(t,e,n){t.exports=n.p+"img/logo_with_bg.12f67f43.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,i,s=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loggedIn?a("div",{attrs:{id:"app"}},[a("div",{staticClass:"info__modal",class:[t.windowOrientation?"hide":""]},[a("img",{attrs:{src:n("ccba")}}),a("p",{staticClass:"text-center"},[t._v("Für eine optimale Darstellung wechseln Sie bitte in den Landscapemodus")])]),a("Header"),t.showBreadcrumb?a("div",{staticClass:"breadcrumb"},[t._v(" "+t._s(t.breadcrumbContent)+" ")]):t._e(),a("router-view")],1):t._e()},o=[],c=n("d4ec"),u=n("262e"),l=n("2caf"),p=(n("b0c0"),n("1b40")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation"},[a("router-link",{staticClass:"logo",attrs:{to:"/overview"}},[a("img",{attrs:{src:n("71ab")}})]),a("div",{staticClass:"menu",on:{click:function(e){t.navOpen=!t.navOpen,t.getStatus()}}},[t._m(0),a("div",{staticClass:"menu__description"},[t._v(" Menu ")])]),a("div",{staticClass:"nav__wrapper",class:{active:t.navOpen}},[a("div",{staticClass:"nav__sickle"},[a("div",{staticClass:"mobile__close",on:{click:function(e){t.navOpen=!1}}},[a("img",{attrs:{src:n("9d41")}})]),a("img",{staticClass:"sickle",attrs:{src:n("2450")}}),a("div",{staticClass:"nav__wrapper--inner"},[a("h2",{staticClass:"text-white"},[t._v("MODUL 1")]),a("p",{staticClass:"font-18"},[t._v("Positionierung und Marke")]),a("div",{staticClass:"nav-item flex mt-2 xl:mt-10"},[a("div",{staticClass:"nav-item__status"},[1==t.chapterStatus[0]?a("img",{attrs:{src:n("9258")}}):t._e(),2==t.chapterStatus[0]?a("img",{attrs:{src:n("a966")}}):t._e(),3==t.chapterStatus[0]?a("img",{attrs:{src:n("b5a1")}}):t._e()]),a("router-link",{staticClass:"nav-item__info",class:{disabled:3==t.chapterStatus[0]},attrs:{to:"/chapter01"},on:{click:function(e){t.navOpen=!1}}},[a("div",{staticClass:"nav-item__headline"},[t._v("01 Vision")])])],1),a("div",{staticClass:"nav-item flex mt-2 xl:mt-10"},[a("div",{staticClass:"nav-item__status"},[1==t.chapterStatus[1]?a("img",{attrs:{src:n("9258")}}):t._e(),2==t.chapterStatus[1]?a("img",{attrs:{src:n("a966")}}):t._e(),3==t.chapterStatus[1]?a("img",{attrs:{src:n("b5a1")}}):t._e()]),a("router-link",{staticClass:"nav-item__info",class:{disabled:3==t.chapterStatus[1]},attrs:{to:"/chapter02"},on:{click:function(e){t.navOpen=!1}}},[a("div",{staticClass:"nav-item__headline"},[t._v("02 Mission")])])],1),a("div",{staticClass:"nav-item flex mt-2 xl:mt-10"},[a("div",{staticClass:"nav-item__status"},[1==t.chapterStatus[2]?a("img",{attrs:{src:n("9258")}}):t._e(),2==t.chapterStatus[2]?a("img",{attrs:{src:n("a966")}}):t._e(),3==t.chapterStatus[2]?a("img",{attrs:{src:n("b5a1")}}):t._e()]),a("router-link",{staticClass:"nav-item__info",class:{disabled:3==t.chapterStatus[2]},attrs:{to:"/chapter04"},on:{click:function(e){t.navOpen=!1}}},[a("div",{staticClass:"nav-item__headline"},[t._v("03 Markenpyramide")])])],1),a("div",{staticClass:"nav-item flex mt-2 xl:mt-10"},[a("div",{staticClass:"nav-item__status"},[1==t.chapterStatus[3]?a("img",{attrs:{src:n("9258")}}):t._e(),2==t.chapterStatus[3]?a("img",{attrs:{src:n("a966")}}):t._e(),3==t.chapterStatus[3]?a("img",{attrs:{src:n("b5a1")}}):t._e()]),a("router-link",{staticClass:"nav-item__info",class:{disabled:3==t.chapterStatus[3]},attrs:{to:"/chapter05"},on:{click:function(e){t.navOpen=!1}}},[a("div",{staticClass:"nav-item__headline"},[t._v("04 Leistungen")])])],1),a("div",{staticClass:"nav-item flex mt-2 xl:mt-10"},[a("div",{staticClass:"nav-item__status"},[1==t.chapterStatus[4]?a("img",{attrs:{src:n("9258")}}):t._e(),2==t.chapterStatus[4]?a("img",{attrs:{src:n("a966")}}):t._e(),3==t.chapterStatus[4]?a("img",{attrs:{src:n("b5a1")}}):t._e()]),a("router-link",{staticClass:"nav-item__info",class:{disabled:3==t.chapterStatus[4]},attrs:{to:"/chapter06"},on:{click:function(e){t.navOpen=!1}}},[a("div",{staticClass:"nav-item__headline"},[t._v("Quiz")])])],1)])])])],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu__icon"},[n("div"),n("div"),n("div")])}],h={name:"Header",data:function(){return{navOpen:!1,status:0}},computed:{chapterStatus:function(){var t=parseFloat(this.status),e=[1,3,3,3,3];return.2==t?e=[1,2,3,3,3]:.4==t?e=[1,1,2,3,3]:.6==t?e=[1,1,1,2,3]:.8==t?e=[1,1,1,1,2]:1==t&&(e=[1,1,1,1,1]),e}},methods:{getStatus:function(){this.status=window.localStorage.getItem("status")}},watch:{$route:function(t,e){this.navOpen=!1},status:function(t,e){this.status=t}}},m=h,v=n("2877"),g=Object(v["a"])(m,d,f,!1,null,"b11d6028",null),b=g.exports,_=n("f179"),w=(a=Object(p["a"])({components:{Header:b},data:function(){return{windowOrientation:null,windowWidth:0,windowHeight:0,loggedIn:!1}},created:function(){var t=this;_["a"].checkLogin().then((function(e){t.loggedIn=!0})).catch((function(t){console.log("There was an error:",t.response),window.location="https://www.meine-globus-lernwelt.de/login.php"}))},mounted:function(){_["a"].getName().then((function(t){console.log(t);var e=t.data;window.localStorage.setItem("name",e)})).catch((function(t){console.log("There was an error:",t.response)})),_["a"].getStatus().then((function(t){console.log(t);var e=t.data;window.localStorage.setItem("status",e)})).catch((function(t){console.log("There was an error:",t.response)}))},computed:{showBreadcrumb:function(){return"Intro01"!=this.$route.name},breadcrumbContent:function(){var t="";switch(this.$route.name){case"Intro02":t="Modul 1 / Vision und Marke / Begrüßung";break;case"Overview":t="Modul 1 / Markthalle";break;case"Vision":t="Modul 1 / Vision und Marke / Konzept Markthalle";break;case"Mission":t="Modul 1 / Vision und Marke / Unsere Mission";break;case"Schaetzfrage":t="Modul 1 / Vision und Marke / Schätzfrage";break;case"Marke":t="Modul 1 / Vision und Marke / Markenpyramide";break;case"Leistung":t="Modul 1 / Vision und Marke /  Leistungen";break;case"Quiz":t="Modul 1 / Vision und Marke / Quiz";break}return t}}}),a(i=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(p["b"]))||i),M=w,k=Object(v["a"])(M,r,o,!1,null,null,null),S=k.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));s["default"].use(C["a"]);var O=[{path:"/",name:"Intro01",component:function(){return n.e("Intro01").then(n.bind(null,"4082"))}},{path:"/intro-02",name:"Intro02",component:function(){return Promise.all([n.e("Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision"),n.e("Intro02")]).then(n.bind(null,"7d38"))}},{path:"/overview",name:"Overview",component:function(){return n.e("Overview").then(n.bind(null,"2226"))}},{path:"/chapter01",name:"Vision",component:function(){return Promise.all([n.e("Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision"),n.e("Vision")]).then(n.bind(null,"4c5b"))}},{path:"/chapter02",name:"Mission",component:function(){return Promise.all([n.e("Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision"),n.e("Mission")]).then(n.bind(null,"495e"))}},{path:"/chapter03",name:"Schaetzfrage",component:function(){return Promise.all([n.e("Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision"),n.e("Schaetzfrage")]).then(n.bind(null,"4a13"))}},{path:"/chapter04",name:"Marke",component:function(){return Promise.all([n.e("Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision"),n.e("Marke")]).then(n.bind(null,"9170"))}},{path:"/chapter05",name:"Leistung",component:function(){return Promise.all([n.e("Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision"),n.e("Leistung")]).then(n.bind(null,"dcf0"))}},{path:"/chapter06",name:"Quiz",component:function(){return Promise.all([n.e("Intro02~Leistung~Marke~Mission~Quiz~Schaetzfrage~Vision"),n.e("Quiz")]).then(n.bind(null,"3244"))}}],z=new C["a"]({routes:O}),I=z,V=n("7212"),x=n.n(V);n("a7a3"),n("fb98");s["default"].config.productionTip=!1,s["default"].use(x.a),new s["default"]({router:I,render:function(t){return t(S)}}).$mount("#app")},f179:function(t,e,n){"use strict";var a=n("bc3a"),i=n.n(a),s=i.a.create({baseUrl:"http://localhost:3000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={checkLogin:function(){return s.get("https://www.meine-globus-lernwelt.de/Modules/VisionMarke/api.php",{params:{action:"checkLogin"}})},setStatus:function(t){return s.get("https://www.meine-globus-lernwelt.de/Modules/VisionMarke/api.php",{params:{action:"setStatus",status:t}})},getStatus:function(){return s.get("https://www.meine-globus-lernwelt.de/Modules/VisionMarke/api.php",{params:{action:"getStatus"}})},getName:function(){return s.get("https://www.meine-globus-lernwelt.de/Modules/VisionMarke/api.php",{params:{action:"getName"}})}}},fb98:function(t,e,n){}});
//# sourceMappingURL=app.be6a3e82.js.map