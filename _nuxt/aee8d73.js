(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11],{317:function(t,e,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("44cbea98",content,!0,{sourceMap:!1})},318:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("1cdf85c7",content,!0,{sourceMap:!1})},319:function(t,e,r){var n=r(61)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},320:function(t,e,r){var content=r(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("2fba213c",content,!0,{sourceMap:!1})},321:function(t,e,r){var n=r(61)(!1);n.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=n},324:function(t,e,r){"use strict";r.r(e);var n=r(383),o=r(352),c=r(382),l={props:["projecte","numeroSeccion","numeroProyecto"]},d=(r(329),r(74)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return t.projecte?e("div",{staticStyle:{"margin-top":"100px","margin-bottom":"200px"}},[e("h2",[t._v(t._s(t.projecte.titol))]),t._v(" "),e("p",{staticClass:"text-projecte"},[t._v(t._s(t.projecte.text))]),t._v(" "),e("a",{attrs:{href:t.projecte.enlace,target:"blank"}},[t._v("Visitar proyecto")]),t._v(" "),e(c.a,{staticStyle:{height:"100vh"}},t._l(t.projecte.imagen,(function(t,r){return e(n.a,{key:r,attrs:{cols:"6"}},[e(o.a,{staticClass:"imagen-proyecto",attrs:{"aspect-ratio":"2",src:t,alt:"foto proyecto"}})],1)})),1)],1):t._e()}),[],!1,null,"2b21b92a",null);e.default=component.exports},329:function(t,e,r){"use strict";r(317)},330:function(t,e,r){var n=r(61)(!1);n.push([t.i,".imagen-proyecto[data-v-2b21b92a]{box-shadow:0 -3em 3em rgba(0,0,0,.1),0 0 0 2px #fff,.3em .3em 1em rgba(0,0,0,.3);margin-top:20px}a[data-v-2b21b92a]{text-decoration:none;background-color:#000;color:#fff;font-weight:500;padding:5px}",""]),t.exports=n},331:function(t,e,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("44177332",content,!0,{sourceMap:!1})},342:function(t,e,r){"use strict";r(331)},343:function(t,e,r){var n=r(61)(!1);n.push([t.i,".indice-proyectos[data-v-012678e5]{font-size:8rem;font-weight:100;margin-bottom:-30px}.titulo-proyecto[data-v-012678e5]{font-size:2rem;font-weight:500}",""]),t.exports=n},352:function(t,e,r){"use strict";var n=r(22);r(219),r(88),r(220),r(51),r(65),r(318),r(6);function o(t,e,r){var n,o=null===(n=t._observe)||void 0===n?void 0:n[r.context._uid];o&&(o.observer.unobserve(t),delete t._observe[r.context._uid])}var c={inserted:function(t,e,r){if("undefined"!=typeof window&&"IntersectionObserver"in window){var c=e.modifiers||{},l=e.value,d="object"===Object(n.a)(l)?l:{handler:l,options:{}},h=d.handler,m=d.options,v=new IntersectionObserver((function(){var n,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,m=null===(n=t._observe)||void 0===n?void 0:n[r.context._uid];if(m){var v=l.some((function(t){return t.isIntersecting}));!h||c.quiet&&!m.init||c.once&&!v&&!m.init||h(l,d,v),v&&c.once?o(t,e,r):m.init=!0}}),m);t._observe=Object(t._observe),t._observe[r.context._uid]={init:!1,observer:v},v.observe(t)}},unbind:o},l=c,d=(r(320),r(10)),h=r(0).a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(d.d)(this.height),r=Object(d.d)(this.minHeight),n=Object(d.d)(this.minWidth),o=Object(d.d)(this.maxHeight),c=Object(d.d)(this.maxWidth),l=Object(d.d)(this.width);return e&&(t.height=e),r&&(t.minHeight=r),n&&(t.minWidth=n),o&&(t.maxHeight=o),c&&(t.maxWidth=c),l&&(t.width=l),t}}}),m=r(155),v=Object(m.a)(h).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(d.g)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),f=r(156),_=r(157),S=r(40),y="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(m.a)(v,f.a).extend({name:"v-img",directives:{intersect:l},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!y||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(S.b)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=v.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){var slot=Object(d.g)(this,"placeholder");if(slot){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},slot)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=v.options.render.call(this,t),data=Object(_.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:y?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},369:function(t,e,r){"use strict";r.r(e);var n=r(383),o=r(382),c={components:{Proyectos:r(324).default},props:["lista"]},l=(r(342),r(74)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(o.a,[e(n.a,t._l(t.lista,(function(element,r){return e("div",{key:r},[e("p",{staticClass:"indice-proyectos"},[t._v("0"+t._s(r+1))]),t._v(" "),e("p",{staticClass:"titulo-proyecto"},[t._v(t._s(element.titol))]),t._v(" "),t._l(element.projectes,(function(t,n){return e("div",{key:n},[e("Proyectos",{attrs:{projecte:t,numeroSeccion:r,numeroProyecto:n}})],1)}))],2)})),0)],1)],1)}),[],!1,null,"012678e5",null);e.default=component.exports;installComponents(component,{Proyectos:r(324).default})}}]);