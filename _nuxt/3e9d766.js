(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5],{314:function(t,e,n){"use strict";var o=n(2),r=n(222);o({target:"String",proto:!0,forced:n(223)("small")},{small:function(){return r(this,"small","","")}})},316:function(t,e,n){"use strict";n.r(e);var o=n(353),r={props:["titol","llista"]},c=n(74),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v(t._s(t.titol))]),t._v(" "),t._l(t.llista,(function(element,n){return e("div",{key:n},[e(o.a,[t._v(t._s(element.icono))]),t._v(t._s(element.text)+"\n  ")],1)}))],2)}),[],!1,null,"2b3e201a",null);e.default=component.exports},322:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("6b715e77",content,!0,{sourceMap:!1})},323:function(t,e,n){var o=n(61)(!1);o.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=o},325:function(t,e,n){"use strict";n.r(e);var o={props:{titol:{type:String,default:"Sobre mi"},llista:{}}},r=n(74),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v(t._s(t.titol))]),t._v(" "),t._l(t.llista,(function(element){return e("div",{key:element.text},[t._v(t._s(element.text)+" \n    "),t._l(element.estrellas,(function(n){return e("span",{key:n.index,staticStyle:{"margin-left":"5px"}},[t._v(" *\n    ")])}))],2)}))],2)}),[],!1,null,"cb8b75d0",null);e.default=component.exports},333:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3fa660da",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";n(333)},347:function(t,e,n){var o=n(61)(!1);o.push([t.i,".sobreMi[data-v-2a978698]{font-size:2rem;font-weight:700;line-height:50px;line-height:30px;margin-bottom:-30px}.descripcio[data-v-2a978698],.sobreMi[data-v-2a978698]{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-o-pre-wrap}.descripcio[data-v-2a978698]{padding-left:100px;width:85%}.contact h3[data-v-2a978698]{padding-bottom:10px}.contact p[data-v-2a978698]{line-height:8px}.col-competencias[data-v-2a978698]{padding-left:70px}",""]),t.exports=o},353:function(t,e,n){"use strict";n(26),n(28),n(30),n(41),n(29),n(42);var o=n(17),r=(n(314),n(6),n(63),n(64),n(31),n(219),n(108),n(221),n(52),n(322),n(0));function c(t){return function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(e,o)||this.$delete(this.$data[t],o);for(var r in e)this.$set(this.$data[t],r,e[r])}}var l=r.a.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",c("attrs$"),{immediate:!0}),this.$watch("$listeners",c("listeners$"),{immediate:!0})}}),f=n(11),d=(n(87),n(40)),h=n(58);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x,y=r.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(d.a)("style must be an object",this),data):"string"==typeof data.class?(Object(d.a)("class must be an object",this),data):(Object(h.d)(t)?data.style=m(m({},data.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(data.class=m(m({},data.class),{},Object(o.a)({},t,!0))),data)},setTextColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(d.a)("style must be an object",this),data;if("string"==typeof data.class)return Object(d.a)("class must be an object",this),data;if(Object(h.d)(t))data.style=m(m({},data.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var e=t.toString().trim().split(" ",2),n=Object(f.a)(e,2),r=n[0],c=n[1];data.class=m(m({},data.class),{},Object(o.a)({},r+"--text",!0)),c&&(data.class["text--"+c]=!0)}return data}}}),O=r.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}}),_=n(156),j=n(10),w=n(155);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(x||(x={}));var k=Object(w.a)(l,y,O,_.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(j.k)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(j.h)(t).find((function(e){return t[e]}));return e&&x[e]||Object(j.d)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:S({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=S(S({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=S(S({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),c=r<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=r.a.extend({name:"v-icon",$_wrapperFor:k,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(k,data,o?[o]:n)}})},370:function(t,e,n){"use strict";n.r(e);var o=n(383),r=n(382),c=n(325),l=n(316),f={components:{Competencias:c.default,Contacte:l.default},props:["informacio"]},d=(n(346),n(74)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{staticStyle:{"padding-top":"100px","margin-bottom":"100px"}},[e(o.a,[e("h1",{staticClass:"sobreMi",attrs:{cols:"12",md:"8"}},[t._v(t._s(t.informacio.titol))]),t._v(" "),e("p",{staticClass:"descripcio"},[t._v(t._s(t.informacio.descripcio))])]),t._v(" "),t.informacio?e(o.a,{staticClass:"col-competencias",attrs:{cols:"'12",md:"4"}},[e("Competencias",{attrs:{titol:t.informacio.c1.titol,llista:t.informacio.c1.llista}}),t._v(" "),e("br"),t._v(" "),e("Competencias",{attrs:{titol:t.informacio.c2.titol,llista:t.informacio.c2.llista}}),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"contact"},[e("Contacte",{attrs:{titol:t.informacio.informacioContacte.titol,llista:t.informacio.informacioContacte.llista}})],1)],1):t._e()],1)],1)}),[],!1,null,"2a978698",null);e.default=component.exports;installComponents(component,{Competencias:n(325).default,Contacte:n(316).default})}}]);