(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,9],{319:function(t,e,r){"use strict";r(212),r(22),r(37);var o="https://giancarmelopittala.com",title="Blog personale, programmazione e molto altro 1",n="Blog di Giancarmelo pittalà, Web developer",l="https://source.unsplash.com/U0tBTn8UR8I";e.a=function(meta){return[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"keywords",name:"keywords",content:meta&&meta.keywords||title.trim()},{hid:"description",name:"description",content:meta&&meta.description||n},{property:"og:site_name",content:meta&&meta.type||title},{hid:"og:type",property:"og:type",content:meta&&meta.type||"website"},{hid:"og:url",property:"og:url",content:meta&&meta.url||o},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||n},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||l},{property:"og:image:width",content:"740"},{property:"og:image:height",content:"300"},{name:"twitter:site",content:"@Giancarmelo_Pittalà"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:"@Giancarmelo_Pittalà"},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||o},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||n},{hid:"twitter:image",name:"twitter:image",content:meta&&meta.mainImage||l}]}},320:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{fullColor:["hover:text-gray-200 hover:bg-green-500 bg-green-400 text-gray-700","hover:text-gray-200 hover:bg-green-400 bg-green-300 text-gray-700","hover:text-gray-200 hover:bg-red-400 bg-red-300 text-gray-700","hover:text-gray-200 hover:bg-red-500 bg-red-400 text-gray-700","hover:text-gray-200 hover:bg-blue-400 bg-blue-300 text-gray-700","hover:text-gray-200 hover:bg-blue-500 bg-blue-400 text-gray-700","hover:text-gray-200 hover:bg-yellow-400 bg-yellow-300 text-gray-700","hover:text-gray-200 hover:bg-yellow-500 bg-yellow-400 text-gray-700","hover:text-gray-200 hover:bg-indigo-400 bg-indigo-300 text-gray-700","hover:text-gray-200 hover:bg-indigo-500 bg-indigo-400 text-gray-700","hover:text-gray-200 hover:bg-purple-400 bg-purple-300 text-gray-700","hover:text-gray-200 hover:bg-purple-500 bg-purple-400 text-gray-700"]}},props:{randomColor:{type:Boolean},testo:{type:String,required:!0},bg:{type:String,default:""},hBg:{type:String,default:""},text:{type:String,default:""},hText:{type:String,default:""}},methods:{genRandomColor:function(){return this.fullColor[Math.floor(Math.random()*this.fullColor.length)]}}},n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"px-2 py-1 cursor-pointer font-bold rounded  uppercase",class:[t.bg,t.text,t.hBg,t.hText,t.randomColor?t.genRandomColor():""]},[t._v("\n  "+t._s(t.testo)+"\n")])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,r){var content=r(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("583a350b",content,!0,{sourceMap:!1})},333:function(t,e,r){"use strict";r.r(e);var o=r(3),n=(r(30),r(47),r(140),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("div",{staticClass:"w-full flex my-3 max-w-4xl"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"w-full p-3 ",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})]),t._v(" "),t.articles.length?r("ul",{staticClass:"absolute bg-white w-full z-50"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"py-3 px-2 hover:bg-blue-300 cursor-pointer"},[r("NuxtLink",{attrs:{to:{name:"blog-articles-slug",params:{slug:article.slug}}}},[r("p",{staticClass:"border-l-4 border-blue-600 pl-2"},[t._v("\n          "+t._s(article.title)+"\n\n        ")])])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,r){"use strict";r(324)},341:function(t,e,r){var o=r(54)(!1);o.push([t.i,".tooltip .tooltip-text[data-v-09a3de11]{visibility:hidden;padding:1rem;position:absolute;z-index:50;font-size:.875rem;line-height:1.25rem;border-radius:.5rem;--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.tooltip:hover .tooltip-text[data-v-09a3de11]{visibility:visible}",""]),t.exports=o},371:function(t,e,r){"use strict";r.r(e);r(32),r(22),r(31),r(49),r(26),r(50);var o=r(3),n=r(17),l=r(48),c=(r(30),r(60)),d=r(319);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var meta=Object(d.a)({type:"website",url:"https://giancarmelopittala.com/blog",title:"Blog personale, programmazione e molto altro",description:"Blog main Page ",mainImage:"https://source.unsplash.com/asytdeogTDE"}),v={head:{title:"Giancarmelo Pittalà - Blog",meta:Object(l.a)(meta),link:[{hid:"canonical",rel:"canonical",href:"https://giancarmelopittala.com/blog/"}]},methods:m(m({getArticleByUesr:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$content("articles").where({author:{$contains:t}}).fetch();case 2:(o=r.sent)&&(e.articles=o);case 4:case"end":return r.stop()}}),r)})))()},pBack:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").without(["body"]).sortBy("cAt","desc").skip((t.currentPage-2)*t.limitPerPage).limit(t.limitPerPage).fetch();case 2:(r=e.sent).length>0?(t.articles=r,t.currentPage--,t.previusDeActive=!0,t.nextDeActive=!1):t.nextDeActive=!0;case 4:case"end":return e.stop()}}),e)})))()},pNext:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").without(["body"]).sortBy("cAt","desc").skip(t.currentPage*t.limitPerPage).limit(t.limitPerPage).fetch();case 2:(r=e.sent).length>0?(t.articles=r,t.currentPage++,t.previusDeActive=!t.previusDeActive):t.nextDeActive=!t.nextDeActive;case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(t).toLocaleDateString("en",e)},cercaPerCategoria:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$content("articles",{}).where({category:{$contains:t}}).fetch();case 2:o=r.sent,e.articles=o;case 4:case"end":return r.stop()}}),r)})))()}},Object(c.d)({setFilterCategory:"search/setfilterCategory",removefilterCategory:"search/removefilterCategory",setLimitPerPage:"search/setLimitPerPage",setContent:"search/setContent"})),{},{setLimit:function(t){this.setLimitPerPage(t.target.value),this.$store.dispatch("search/getArticles")},setCategory:function(t){this.setFilterCategory(t),this.$store.dispatch("search/getArticles")},removeCategory:function(t){this.removefilterCategory(t),this.$store.dispatch("search/getArticles")}}),beforeMount:function(){this.setContent(this.$content)},mounted:function(){this.$store.dispatch("search/getArticles"),this.$store.dispatch("search/getCategories"),this.$store.dispatch("search/getUsers")},computed:m({},Object(c.c)({articles:"search/articles",categories:"search/categories",users:"search/users",limitPerPage:"search/limitPerPage",filterCategory:"search/filterCategory"}))},f=(r(340),r(9)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto"},[r("div",{staticClass:"bg-gray-100 overflow-x-hidden relative"},[r("div",{staticClass:"px-6 py-8"},[r("div",{staticClass:"flex justify-between container mx-auto"},[r("div",{staticClass:"w-full lg:w-8/12"},[r("AppSearchInput"),t._v(" "),r("div",{staticClass:"max-w-4xl shadow-lg p-2 my-2"},[r("div",{staticClass:"flex items-center justify-between flex-wrap"},[r("h2",{staticClass:"font-bold text-gray-700  md:text-2xl "},[t._v("Filtri")]),t._v(" "),r("div",[r("label",{staticClass:"mb-2 uppercase font-bold text-lg text-grey-darkest",attrs:{for:"maxPerPage"}},[t._v("max:")]),t._v(" "),r("input",{staticClass:"w-20 border py-2 px-3 text-grey-darkest",attrs:{id:"maxPerPage",type:"text"},domProps:{value:t.limitPerPage},on:{keyup:t.setLimit}})])]),t._v(" "),r("div",{staticClass:"relative flex flex-wrap gap-3 items-center pt-6 my-2"},[r("small",{staticClass:"absolute top-0.5"},[t._v("Categorie")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:0==t.filterCategory.length,expression:"filterCategory.length == 0"}],staticClass:"cursor-pointer hover:bg-gray-800 hover:text-gray-100 flex items-center rounded-2xl border-2 border-gray-800 px-2 py-1"},[t._v(" All")]),t._v(" "),t._l(t.filterCategory,(function(e,i){return r("div",{key:"fcat"+i,staticClass:"cursor-pointer hover:bg-gray-800 hover:text-gray-100 flex items-center rounded-2xl border-2 border-gray-800 px-2 py-1",on:{click:function(r){return t.removeCategory(e)}}},[t._v("\n                "+t._s(e)+"\n                "),r("svg",{staticClass:"ml-1 w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 24 24",stroke:"#000"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}})])])}))],2)]),t._v(" "),t._m(0),t._v(" "),t._l(this.$store.state.search.articles,(function(article){return r("div",{key:article.slug,staticClass:"mt-6"},[r("div",{staticClass:"max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md"},[r("div",{staticClass:"flex justify-between items-center relative"},[r("span",{staticClass:"font-light text-gray-600"},[t._v("\n                  "+t._s(t.formatDate(article.cAt))+" \n                ")]),t._v(" "),r("p",{staticClass:"tooltip"},[r("i",{staticClass:"fas fa-info-circle h-8 w-8 rounded-full p-2 text-black",staticStyle:{"font-family":"'fontawesome'"},attrs:{title:"categorie"}}),t._v(" "),r("span",{staticClass:"tooltip-text flex flex-wrap gap-3 justify-around bg-blue-200 p-3 -top-15 right-0 rounded w-1/2 "},[r("h4",{staticClass:"block w-full text-xl font-bold"},[t._v("Categorie")]),t._v(" "),t._l(article.category,(function(e,i){return r("span",{key:"category"+i,staticClass:"px-2 py-1  bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 uppercase",on:{click:function(r){return t.cercaPerCategoria(e)}}},[t._v("\n                        "+t._s(e)+"  \n                        ")])}))],2)])]),t._v(" "),r("div",{staticClass:"mt-2"},[r("NuxtLink",{staticClass:"text-2xl text-gray-700 font-bold hover:underline",attrs:{to:{name:"blog-articles-slug",params:{slug:article.slug}}}},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"mt-2 text-gray-600"},[t._v(t._s(article.description))])],1),t._v(" "),r("div",{staticClass:"flex justify-between items-center mt-4"},[r("NuxtLink",{staticClass:"text-blue-500 hover:underline",attrs:{to:{name:"blog-articles-slug",params:{slug:article.slug}}}},[t._v("\n                    Read more\n                ")]),t._v(" "),r("div",[r("NuxtLink",{staticClass:"flex items-center",attrs:{to:{name:"blog-users-slug",params:{slug:article.author.toLowerCase()||"".toLowerCase()}}}},[r("img",{staticClass:"mx-4 w-10 h-10 object-cover rounded-full",attrs:{src:article.userImage,alt:"avatar"}}),t._v(" "),r("h2",{staticClass:"text-gray-700 font-bold hover:underline"},[t._v(t._s(article.author))])])],1)],1)])])}))],2),t._v(" "),r("div",{staticClass:"-mx-8 w-4/12 hidden lg:block"},[r("div",{staticClass:"px-8"},[r("h2",{staticClass:"mb-4 text-xl font-bold text-gray-700"},[t._v("Authors")]),t._v(" "),r("div",{staticClass:"flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md"},[r("ul",{staticClass:"-mx-4 grid grid-cols-1 gap-2"},t._l(t.users,(function(e,i){return r("li",{key:i,staticClass:"flex items-center"},[r("img",{staticClass:"w-10 h-10 object-cover rounded-full mx-4",attrs:{src:e.image,alt:"avatar"}}),t._v(" "),r("p",[r("span",{staticClass:"text-gray-700 font-bold mx-1 hover:underline"},[t._v("\n                          "+t._s(e.author)+"\n                        ")]),t._v(" "),r("span",{staticClass:"text-gray-700 text-sm font-light"},[t._v("\n                          Created "+t._s(e.nPosts)+" Posts\n                        ")])])])})),0)])]),t._v(" "),r("div",{staticClass:"mt-10 px-8"},[r("h2",{staticClass:"mb-4 text-xl font-bold text-gray-700"},[t._v("Categories")]),t._v(" "),r("div",{staticClass:" bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md"},[r("ul",{staticClass:"flex flex-wrap gap-2"},t._l(t.categories,(function(e,i){return r("li",{key:"Tag"+i,staticClass:"cursor-pointer p-0 m-0"},[r("Pill",{attrs:{testo:e,randomColor:!0},nativeOn:{click:function(r){return t.setCategory(e)}}})],1)})),0)])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex max-w-4xl"},[r("h2",{staticClass:"text-xl font-bold text-gray-700 md:text-2xl"},[t._v("Ultimi articoli")])])}],!1,null,"09a3de11",null);e.default=component.exports;installComponents(component,{AppSearchInput:r(333).default,Pill:r(320).default})}}]);