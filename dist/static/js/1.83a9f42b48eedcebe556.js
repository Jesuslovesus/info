webpackJsonp([1],{"0nTL":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("q6S8"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var a=e("ghhZ"),r=function(t){e("ojMM")},c=e("VU/8")(s.a,a.a,!1,r,"data-v-f24352f6",null);n.default=c.exports},"3LR4":function(t,n,e){"use strict";var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-wrap-list"},[e("list-box",{directives:[{name:"show",rawName:"v-show",value:!t.showContent,expression:"!showContent"}],attrs:{data:t.data},on:{listClick:t.listClick}}),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showContent?e("list-details",{attrs:{data:t.contentData,title:t.contentTitle}}):t._e()],1),t._v(" "),t.showContent?e("el-button",{attrs:{icon:"el-icon-back",circle:""},on:{click:t.goBack}}):t._e()],1)},staticRenderFns:[]};n.a=i},"3iUv":function(t,n){},8506:function(t,n,e){t.exports=e.p+"static/img/religion.4aee01c.jpg"},"A/2Y":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("hF5D"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var a=e("cwZm"),r=function(t){e("3iUv")},c=e("VU/8")(s.a,a.a,!1,r,"data-v-15f910d0",null);n.default=c.exports},AsWV:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("qOyB"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var a=e("kvgE"),r=function(t){e("RLzF")},c=e("VU/8")(s.a,a.a,!1,r,"data-v-01208d72",null);n.default=c.exports},FNdV:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("qRhf"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var a=e("3LR4"),r=function(t){e("YvdL")},c=e("VU/8")(s.a,a.a,!1,r,"data-v-20c907ae",null);n.default=c.exports},Jg9E:function(t,n){},Kfnb:function(t,n,e){function i(t){return e(s(t))}function s(t){var n=o[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var o={"./foods.jpg":"SXtf","./history.jpg":"ZrWy","./religion.jpg":"8506"};i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id="Kfnb"},RLzF:function(t,n){},RirU:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("mF2x"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var a=e("nQ92"),r=function(t){e("Jg9E"),e("f7Mf")},c=e("VU/8")(s.a,a.a,!1,r,"data-v-1eaba9a6",null);n.default=c.exports},SXtf:function(t,n,e){t.exports=e.p+"static/img/foods.4aee01c.jpg"},YvdL:function(t,n){},ZrWy:function(t,n,e){t.exports=e.p+"static/img/history.4aee01c.jpg"},cwZm:function(t,n,e){"use strict";var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list-box"},t._l(t.data,function(n,i){return e("div",{key:i,staticClass:"list-child"},[e("ul",{on:{click:function(e){t.listClick(n)}}},[e("li",{style:{"background-image":"url("+t.bgImg(n.value)+")"}}),t._v(" "),e("li",[e("div",[e("p",[t._v(t._s(n.name))]),t._v(" "),e("p",[t._v(t._s(n.value))])])])])])}))},staticRenderFns:[]};n.a=i},f7Mf:function(t,n){},ghhZ:function(t,n,e){"use strict";var i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"minority-intro"},[n("p",{staticClass:"a-content-text"},[this._v("\n    "+this._s(this.data)+"\n  ")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"bottom-end"},[n("i",[this._v("-- 到底了 --")])])}]};n.a=i},hF5D:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["data"],name:"",data:function(){return{}},components:{},mounted:function(){},methods:{bgImg:function(t){try{return e("Kfnb")("./"+t+".jpg")}catch(t){return e("SXtf")}},listClick:function(t){this.$emit("listClick",t)}}}},kvgE:function(t,n,e){"use strict";var i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"list-content-box"},[n("h2",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),n("p",{staticClass:"a-content-text"},[this._v("\n  "+this._s(this.data)+"\n  ")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"bottom-end"},[n("i",[this._v("-- 到底了 --")])])}]};n.a=i},mF2x:function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(e("Dd8w")),o=e("NYxO"),a=i(e("0nTL")),r=i(e("FNdV")),c=e("5reh");n.default={name:"",computed:(0,s.default)({},(0,o.mapGetters)(["minorityContent"])),data:function(){return{statusType:!0,showContents:!1}},components:{allContent:a.default,listContent:r.default},watch:{minorityContent:function(){document.title=this.minorityContent.label}},mounted:function(){this.$store.commit(c.APP_MENU_BTN_COLOR,"#303133")},methods:{typeBtn:function(){this.statusType=!this.statusType},showContent:function(t){this.showContents=t}},destroyed:function(){this.$store.commit(c.APP_MENU_BTN_COLOR,"#DCDFE6")}}},nQ92:function(t,n,e){"use strict";var i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"minority-content-wrap"},[n("transition",{attrs:{name:"fade"}},[this.statusType?n("all-content",{attrs:{data:this.minorityContent}}):this._e()],1),this._v(" "),n("transition",{attrs:{name:"fade"}},[this.statusType?this._e():n("list-content",{attrs:{data:this.minorityContent.content},on:{showContent:this.showContent}})],1),this._v(" "),this.statusType?n("el-button",{attrs:{type:"primary",circle:""},on:{click:this.typeBtn}},[this._v("分类")]):this._e(),this._v(" "),this.statusType||this.showContents?this._e():n("el-button",{attrs:{type:"success",circle:""},on:{click:this.typeBtn}},[this._v("概括")])],1)},staticRenderFns:[]};n.a=i},ojMM:function(t,n){},q6S8:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["data"],name:"",data:function(){return{}},components:{},mounted:function(){}}},qOyB:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["data","title"],name:"",data:function(){return{}},components:{},mounted:function(){},methods:{}}},qRhf:function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var s=i(e("A/2Y")),o=i(e("AsWV"));n.default={props:["data"],name:"",data:function(){return{contentData:null,contentTitle:null,showContent:!1}},components:{listBox:s.default,listDetails:o.default},mounted:function(){},methods:{listClick:function(t){this.contentData=t.content,this.contentTitle=t.name,this.showContent=!0,this.$emit("showContent",this.showContent)},goBack:function(){this.showContent=!1,this.$emit("showContent",!1)}}}}});