(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{319:function(t,e,r){"use strict";r(212),r(22),r(37);var n="https://giancarmelopittala.com",title="Blog personale, programmazione e molto altro 1",o="Blog di Giancarmelo pittalà, Web developer",c="https://source.unsplash.com/U0tBTn8UR8I";e.a=function(meta){return[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"keywords",name:"keywords",content:meta&&meta.keywords||title.trim()},{hid:"description",name:"description",content:meta&&meta.description||o},{property:"og:site_name",content:meta&&meta.type||title},{hid:"og:type",property:"og:type",content:meta&&meta.type||"website"},{hid:"og:url",property:"og:url",content:meta&&meta.url||n},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||o},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||c},{property:"og:image:width",content:"740"},{property:"og:image:height",content:"300"},{name:"twitter:site",content:"@Giancarmelo_Pittalà"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:"@Giancarmelo_Pittalà"},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||n},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||o},{hid:"twitter:image",name:"twitter:image",content:meta&&meta.mainImage||c}]}},325:function(t,e,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("837e15a8",content,!0,{sourceMap:!1})},342:function(t,e,r){"use strict";r(325)},343:function(t,e,r){var n=r(54)(!1);n.push([t.i,"form>div[data-v-1f5c88e6]{display:flex;align-items:center;justify-content:flex-end;margin-bottom:10px}form>div label[data-v-1f5c88e6]{font-size:.875rem;line-height:1.25rem;padding:0 15px;width:110px}form>div input[type=email][data-v-1f5c88e6],form>div input[type=text][data-v-1f5c88e6]{width:100%;padding:20px 20px 10px}form>div input[type=email][data-v-1f5c88e6]:active,form>div input[type=email][data-v-1f5c88e6]:focus,form>div input[type=email][data-v-1f5c88e6]:hover,form>div input[type=text][data-v-1f5c88e6]:active,form>div input[type=text][data-v-1f5c88e6]:focus,form>div input[type=text][data-v-1f5c88e6]:hover{border:none;outline:none}form>div input[type=submit][data-v-1f5c88e6]{cursor:pointer;font-size:1.25rem;line-height:1.75rem;font-weight:800;--tw-bg-opacity:1;background-color:rgba(6,95,70,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(243,244,246,var(--tw-text-opacity));border-radius:1.5rem;padding:15px 30px}form>div input[type=submit][data-v-1f5c88e6]:hover{--tw-bg-opacity:1;background-color:rgba(4,120,87,var(--tw-bg-opacity))}",""]),t.exports=n},373:function(t,e,r){"use strict";r.r(e);r(32),r(22),r(31),r(49),r(26),r(50);var n=r(17),o=r(48),c=r(60),l=r(319);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{image:"https://source.unsplash.com/random/300x300/?user",nickname:"",email:""}},beforeCreate:function(){},beforeMount:function(){this.$auth.loggedIn||(this.$router.push("/user/signin"),this.$toast.error("Per accedere a questa sezione devi essere autenticato"))},created:function(){},head:function(){return{title:"User Page",meta:Object(o.a)(this.meta),link:[{hid:"canonical",rel:"canonical",href:"https://giancarmelopittala.com/user/"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({meta:function(t){t.$route;var e={type:"website",title:"User Page",description:"Pagina utente",url:"https://giancarmelopittala.com/user/",mainImage:"https://source.unsplash.com/DoWZMPZ-M9s",keywords:"giancarmelopittala user, user giancarmelopittala,giancarmelopittala user page, user page giancarmelopittala, "};return this.metaData=e,Object(l.a)(e)}},Object(c.c)({img:"user/getImg",name:"user/getName"}))},f=(r(342),r(9)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto text-gray-100 "},[r("client-only"),t._v(" "),r("div",{staticClass:"bg-gray-100 p-5 flex flex-col items-center gap-y-3 lg:flex-row lg:gap-x-5"},[r("aside",{staticClass:"shadow-2xl p-4  lg:p-0 rounded-xl",staticStyle:{"min-width":"300px"}},[r("img",{staticClass:"rounded-full object-cover object-center",staticStyle:{width:"300px",height:"300px"},attrs:{src:t.img,alt:"avatar"}})]),t._v(" "),r("div",{staticClass:"text-gray-800 lg:border-l-2 lg:border-gray-400 lg:pl-5 w-full"},[r("form",{staticClass:" p-2 lg:p-5",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.updateMe(e)}}},[r("div",[r("label",{attrs:{for:"nickname"}},[t._v("Nickname")]),t._v(" "),r("input",t._b({attrs:{type:"text",name:"nickname",id:"nickname",placeholder:"nickname"}},"input",t.nickname,!1))]),t._v(" "),r("div",[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",t._b({attrs:{type:"text",name:"email",id:"email",placeholder:"email"}},"input",t.email,!1))]),t._v(" "),t._m(0)])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{attrs:{type:"submit",value:"Save"}})])}],!1,null,"1f5c88e6",null);e.default=component.exports}}]);