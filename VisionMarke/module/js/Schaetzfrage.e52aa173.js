(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Schaetzfrage"],{"1ede":function(t,e,s){t.exports=s.p+"img/info-orange.fffcde7d.svg"},"4a13":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page page__04 chapter03"},[a("div",{staticClass:"content content-full flex justify-center  relative"},[a("div",{staticClass:"slider"},[a("swiper",{ref:"slider",attrs:{options:t.swiperOptions}},[a("swiper-slide",[a("img",{staticClass:"header__tent",attrs:{src:s("6cf7")}}),a("div",{staticClass:"relative"},[a("div",{staticClass:"badge badge__small mt-12"},[t._v(" Schätzfrage ")])]),a("div",{staticClass:"flex justify-center items-center container mx-auto flex-grow fade-up"},[a("div",{staticClass:"instructors gloria"},[a("img",{attrs:{src:s("ce05")}})]),a("div",[a("p",[t._v(" Achtung, jetzt kommt eine Schätzfrage für Sie, "+t._s(t.name)+":"),a("br",{staticClass:"wordspacer"}),a("br",{staticClass:"wordspacer"}),t._v(" Was ist für die meisten Menschen am wichtigsten,"),a("br"),t._v(" damit das Einkaufen ein schönes Erlebnis wird?“ ")])])])]),a("swiper-slide",[a("img",{staticClass:"header__tent",attrs:{src:s("6cf7")}}),a("div",{staticClass:"relative"},[a("div",{staticClass:"badge badge__small mt-12"},[t._v(" Schätzfrage ")])]),a("div",{staticClass:"flex justify-center items-center container mx-auto  flex-grow fade-up"},[a("div",{staticClass:"instructors gloria"},[a("img",{attrs:{src:s("ce05")}})]),a("div",[a("p",[t._v(" „Ich gebe Ihnen einen Tipp:"),a("br"),t._v(" Über die Hälfte aller GLOBUS-Kunden haben so geantwortet."),a("br"),t._v(" Genauer gesagt waren es 58,5 Prozent!“ ")])])])]),a("swiper-slide",[a("img",{staticClass:"header__tent",attrs:{src:s("6cf7")}}),a("div",{staticClass:"relative"},[a("div",{staticClass:"badge badge__small mt-12"},[t._v(" Schätzfrage ")])]),a("div",{staticClass:"flex justify-center items-center container mx-auto  flex-grow fade-up"},[a("div",{staticClass:"instructors gloria"},[a("img",{attrs:{src:s("ce05")}})]),a("div",[a("p",[t._v(" „Noch ein Tipp, "+t._s(t.name)+"?"),a("br"),t._v(" Es ist nicht der Preis. Und auch nicht die Auswahl."),a("br"),t._v(" Vielmehr hat es etwas mit Ihnen zu tun …!“ ")])])])]),a("swiper-slide",[a("img",{staticClass:"header__tent",attrs:{src:s("6cf7")}}),a("div",{staticClass:"relative"},[a("div",{staticClass:"badge badge__small mt-12"},[t._v(" Auflösung Schätzfrage ")])]),a("div",{staticClass:"flex justify-center items-center container mx-auto  flex-grow fade-up mt-12 xl:mt-0 mb-28 xl:mb-0"},[a("div",{staticClass:"instructors paul"},[a("img",{attrs:{src:s("5be2")}})]),a("div",[a("p",[t._v(" „Das ist doch leicht: Es sind die Menschen wie "+t._s(t.name)+","),a("br"),t._v(" die bei GLOBUS arbeiten! Weil sie freundlich sind"),a("br"),t._v(" und richtig viel Ahnung haben. Dann kaufen die Leute gern ein!“ ")]),a("div",{staticClass:"mt-8 xl:mt-14 flex justify-start items-start"},[a("img",{staticClass:"mr-4",attrs:{src:s("1ede")}}),a("div",[a("h2",{staticClass:"text-black mb-4"},[t._v("Tatsächlich:")]),a("p",[t._v("Treiber Nr. 1 für das Einkaufserlebnis sind freundliche und kompetente Mitarbeiter!")])])])])]),a("div",{staticClass:"chapter__end fade-up"},[a("router-link",{staticClass:"end__btn to_overview",attrs:{to:"/overview"}},[t._v("Zur Übersicht")]),a("router-link",{staticClass:"end__btn to_chapter",attrs:{to:"/chapter04"}},[t._v("Zum nächsten Kapitel")])],1)]),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)]),a("div",{staticClass:"footer__border"})])},i=[],r=s("cffa"),n=s("f179"),c={name:"Page01",data:function(){return{swiperOptions:{allowTouchMove:!1,slidesPerView:1,centeredSlides:!0,pagination:{clickable:!0,el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{swiper:function(){return this.$refs.slider.$swiper},name:function(){var t=window.localStorage.getItem("name");return t},status:function(){var t=window.localStorage.getItem("status");return t}},methods:{setStatus:function(t){var e=window.localStorage.getItem("status");e=parseFloat(e),e<t&&(window.localStorage.setItem("status",t),n["a"].setStatus(t).then((function(t){console.log("Set status",t)})).catch((function(t){console.log("There was an error:",t.response)})))}},mounted:function(){var t=document.querySelectorAll(".fade-up");r["a"].set(t,{y:80,opacity:0});var e=document.querySelectorAll(".fade-up-staggered");r["a"].set(e,{y:80,opacity:0});var s=document.querySelectorAll(".badge");r["a"].set(s,{x:-80,opacity:0});var a=document.querySelectorAll(".swiper-slide-active .fade-up"),i=document.querySelectorAll(".swiper-slide-active .fade-up-staggered"),n=document.querySelectorAll(".swiper-slide-active .badge");r["a"].to(a,{opacity:1,y:0,duration:1.35}),r["a"].to(i,{opacity:1,y:0,duration:1.35,stagger:2.25}),r["a"].to(n,{opacity:1,x:0,duration:1.35}),this.swiper.on("slideChangeTransitionEnd",(function(){var t=document.querySelectorAll(".swiper-slide-active .badge");r["a"].to(t,{opacity:1,x:0,duration:.75});var e=document.querySelectorAll(".swiper-slide-active .fade-up");r["a"].to(e,{opacity:1,y:0,duration:.75});var s=document.querySelectorAll(".swiper-slide-active .fade-up-staggered");r["a"].to(s,{opacity:1,y:0,duration:1.5,stagger:2})}))}},l=c,o=s("2877"),d=Object(o["a"])(l,a,i,!1,null,null,null);e["default"]=d.exports},"5be2":function(t,e,s){t.exports=s.p+"img/talking-big.9f358382.svg"},ce05:function(t,e,s){t.exports=s.p+"img/talking-big.793fd401.svg"}}]);
//# sourceMappingURL=Schaetzfrage.e52aa173.js.map