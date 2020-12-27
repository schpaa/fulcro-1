goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_56068 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_56068(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_56072 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_56072(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__55220 = coll;
var G__55221 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__55220,G__55221) : shadow.dom.lazy_native_coll_seq.call(null,G__55220,G__55221));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__55250 = arguments.length;
switch (G__55250) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__55259 = arguments.length;
switch (G__55259) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__55268 = arguments.length;
switch (G__55268) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__55280 = arguments.length;
switch (G__55280) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__55303 = arguments.length;
switch (G__55303) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__55319 = arguments.length;
switch (G__55319) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e55338){if((e55338 instanceof Object)){
var e = e55338;
return console.log("didnt support attachEvent",el,e);
} else {
throw e55338;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__55350 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__55351 = null;
var count__55352 = (0);
var i__55353 = (0);
while(true){
if((i__55353 < count__55352)){
var el = chunk__55351.cljs$core$IIndexed$_nth$arity$2(null,i__55353);
var handler_56087__$1 = ((function (seq__55350,chunk__55351,count__55352,i__55353,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55350,chunk__55351,count__55352,i__55353,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56087__$1);


var G__56088 = seq__55350;
var G__56089 = chunk__55351;
var G__56090 = count__55352;
var G__56091 = (i__55353 + (1));
seq__55350 = G__56088;
chunk__55351 = G__56089;
count__55352 = G__56090;
i__55353 = G__56091;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55350);
if(temp__5735__auto__){
var seq__55350__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55350__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55350__$1);
var G__56092 = cljs.core.chunk_rest(seq__55350__$1);
var G__56093 = c__4556__auto__;
var G__56094 = cljs.core.count(c__4556__auto__);
var G__56095 = (0);
seq__55350 = G__56092;
chunk__55351 = G__56093;
count__55352 = G__56094;
i__55353 = G__56095;
continue;
} else {
var el = cljs.core.first(seq__55350__$1);
var handler_56096__$1 = ((function (seq__55350,chunk__55351,count__55352,i__55353,el,seq__55350__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55350,chunk__55351,count__55352,i__55353,el,seq__55350__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56096__$1);


var G__56097 = cljs.core.next(seq__55350__$1);
var G__56098 = null;
var G__56099 = (0);
var G__56100 = (0);
seq__55350 = G__56097;
chunk__55351 = G__56098;
count__55352 = G__56099;
i__55353 = G__56100;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__55378 = arguments.length;
switch (G__55378) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__55394 = cljs.core.seq(events);
var chunk__55395 = null;
var count__55396 = (0);
var i__55397 = (0);
while(true){
if((i__55397 < count__55396)){
var vec__55414 = chunk__55395.cljs$core$IIndexed$_nth$arity$2(null,i__55397);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55414,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56103 = seq__55394;
var G__56104 = chunk__55395;
var G__56105 = count__55396;
var G__56106 = (i__55397 + (1));
seq__55394 = G__56103;
chunk__55395 = G__56104;
count__55396 = G__56105;
i__55397 = G__56106;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55394);
if(temp__5735__auto__){
var seq__55394__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55394__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55394__$1);
var G__56109 = cljs.core.chunk_rest(seq__55394__$1);
var G__56110 = c__4556__auto__;
var G__56111 = cljs.core.count(c__4556__auto__);
var G__56112 = (0);
seq__55394 = G__56109;
chunk__55395 = G__56110;
count__55396 = G__56111;
i__55397 = G__56112;
continue;
} else {
var vec__55422 = cljs.core.first(seq__55394__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55422,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55422,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56114 = cljs.core.next(seq__55394__$1);
var G__56115 = null;
var G__56116 = (0);
var G__56117 = (0);
seq__55394 = G__56114;
chunk__55395 = G__56115;
count__55396 = G__56116;
i__55397 = G__56117;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__55432 = cljs.core.seq(styles);
var chunk__55434 = null;
var count__55435 = (0);
var i__55436 = (0);
while(true){
if((i__55436 < count__55435)){
var vec__55454 = chunk__55434.cljs$core$IIndexed$_nth$arity$2(null,i__55436);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55454,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56124 = seq__55432;
var G__56125 = chunk__55434;
var G__56126 = count__55435;
var G__56127 = (i__55436 + (1));
seq__55432 = G__56124;
chunk__55434 = G__56125;
count__55435 = G__56126;
i__55436 = G__56127;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55432);
if(temp__5735__auto__){
var seq__55432__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55432__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55432__$1);
var G__56130 = cljs.core.chunk_rest(seq__55432__$1);
var G__56131 = c__4556__auto__;
var G__56132 = cljs.core.count(c__4556__auto__);
var G__56133 = (0);
seq__55432 = G__56130;
chunk__55434 = G__56131;
count__55435 = G__56132;
i__55436 = G__56133;
continue;
} else {
var vec__55458 = cljs.core.first(seq__55432__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55458,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55458,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56136 = cljs.core.next(seq__55432__$1);
var G__56137 = null;
var G__56138 = (0);
var G__56139 = (0);
seq__55432 = G__56136;
chunk__55434 = G__56137;
count__55435 = G__56138;
i__55436 = G__56139;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__55470_56140 = key;
var G__55470_56141__$1 = (((G__55470_56140 instanceof cljs.core.Keyword))?G__55470_56140.fqn:null);
switch (G__55470_56141__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_56146 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_56146,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_56146,"aria-");
}
})())){
el.setAttribute(ks_56146,value);
} else {
(el[ks_56146] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__55489){
var map__55490 = p__55489;
var map__55490__$1 = (((((!((map__55490 == null))))?(((((map__55490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55490):map__55490);
var props = map__55490__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55490__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__55494 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55494,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55494,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55494,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__55497 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__55497,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__55497;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__55502 = arguments.length;
switch (G__55502) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__55512){
var vec__55514 = p__55512;
var seq__55515 = cljs.core.seq(vec__55514);
var first__55516 = cljs.core.first(seq__55515);
var seq__55515__$1 = cljs.core.next(seq__55515);
var nn = first__55516;
var first__55516__$1 = cljs.core.first(seq__55515__$1);
var seq__55515__$2 = cljs.core.next(seq__55515__$1);
var np = first__55516__$1;
var nc = seq__55515__$2;
var node = vec__55514;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55521 = nn;
var G__55522 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55521,G__55522) : create_fn.call(null,G__55521,G__55522));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55524 = nn;
var G__55525 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55524,G__55525) : create_fn.call(null,G__55524,G__55525));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__55529 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55529,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55529,(1),null);
var seq__55532_56164 = cljs.core.seq(node_children);
var chunk__55533_56165 = null;
var count__55534_56166 = (0);
var i__55535_56167 = (0);
while(true){
if((i__55535_56167 < count__55534_56166)){
var child_struct_56168 = chunk__55533_56165.cljs$core$IIndexed$_nth$arity$2(null,i__55535_56167);
var children_56169 = shadow.dom.dom_node(child_struct_56168);
if(cljs.core.seq_QMARK_(children_56169)){
var seq__55561_56171 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56169));
var chunk__55563_56172 = null;
var count__55564_56173 = (0);
var i__55565_56174 = (0);
while(true){
if((i__55565_56174 < count__55564_56173)){
var child_56176 = chunk__55563_56172.cljs$core$IIndexed$_nth$arity$2(null,i__55565_56174);
if(cljs.core.truth_(child_56176)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56176);


var G__56177 = seq__55561_56171;
var G__56178 = chunk__55563_56172;
var G__56179 = count__55564_56173;
var G__56180 = (i__55565_56174 + (1));
seq__55561_56171 = G__56177;
chunk__55563_56172 = G__56178;
count__55564_56173 = G__56179;
i__55565_56174 = G__56180;
continue;
} else {
var G__56183 = seq__55561_56171;
var G__56184 = chunk__55563_56172;
var G__56185 = count__55564_56173;
var G__56186 = (i__55565_56174 + (1));
seq__55561_56171 = G__56183;
chunk__55563_56172 = G__56184;
count__55564_56173 = G__56185;
i__55565_56174 = G__56186;
continue;
}
} else {
var temp__5735__auto___56187 = cljs.core.seq(seq__55561_56171);
if(temp__5735__auto___56187){
var seq__55561_56188__$1 = temp__5735__auto___56187;
if(cljs.core.chunked_seq_QMARK_(seq__55561_56188__$1)){
var c__4556__auto___56190 = cljs.core.chunk_first(seq__55561_56188__$1);
var G__56191 = cljs.core.chunk_rest(seq__55561_56188__$1);
var G__56192 = c__4556__auto___56190;
var G__56193 = cljs.core.count(c__4556__auto___56190);
var G__56194 = (0);
seq__55561_56171 = G__56191;
chunk__55563_56172 = G__56192;
count__55564_56173 = G__56193;
i__55565_56174 = G__56194;
continue;
} else {
var child_56195 = cljs.core.first(seq__55561_56188__$1);
if(cljs.core.truth_(child_56195)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56195);


var G__56196 = cljs.core.next(seq__55561_56188__$1);
var G__56197 = null;
var G__56198 = (0);
var G__56199 = (0);
seq__55561_56171 = G__56196;
chunk__55563_56172 = G__56197;
count__55564_56173 = G__56198;
i__55565_56174 = G__56199;
continue;
} else {
var G__56202 = cljs.core.next(seq__55561_56188__$1);
var G__56203 = null;
var G__56204 = (0);
var G__56205 = (0);
seq__55561_56171 = G__56202;
chunk__55563_56172 = G__56203;
count__55564_56173 = G__56204;
i__55565_56174 = G__56205;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56169);
}


var G__56206 = seq__55532_56164;
var G__56207 = chunk__55533_56165;
var G__56208 = count__55534_56166;
var G__56209 = (i__55535_56167 + (1));
seq__55532_56164 = G__56206;
chunk__55533_56165 = G__56207;
count__55534_56166 = G__56208;
i__55535_56167 = G__56209;
continue;
} else {
var temp__5735__auto___56212 = cljs.core.seq(seq__55532_56164);
if(temp__5735__auto___56212){
var seq__55532_56214__$1 = temp__5735__auto___56212;
if(cljs.core.chunked_seq_QMARK_(seq__55532_56214__$1)){
var c__4556__auto___56215 = cljs.core.chunk_first(seq__55532_56214__$1);
var G__56216 = cljs.core.chunk_rest(seq__55532_56214__$1);
var G__56217 = c__4556__auto___56215;
var G__56218 = cljs.core.count(c__4556__auto___56215);
var G__56219 = (0);
seq__55532_56164 = G__56216;
chunk__55533_56165 = G__56217;
count__55534_56166 = G__56218;
i__55535_56167 = G__56219;
continue;
} else {
var child_struct_56222 = cljs.core.first(seq__55532_56214__$1);
var children_56223 = shadow.dom.dom_node(child_struct_56222);
if(cljs.core.seq_QMARK_(children_56223)){
var seq__55598_56225 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56223));
var chunk__55600_56226 = null;
var count__55601_56227 = (0);
var i__55602_56228 = (0);
while(true){
if((i__55602_56228 < count__55601_56227)){
var child_56229 = chunk__55600_56226.cljs$core$IIndexed$_nth$arity$2(null,i__55602_56228);
if(cljs.core.truth_(child_56229)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56229);


var G__56230 = seq__55598_56225;
var G__56231 = chunk__55600_56226;
var G__56232 = count__55601_56227;
var G__56233 = (i__55602_56228 + (1));
seq__55598_56225 = G__56230;
chunk__55600_56226 = G__56231;
count__55601_56227 = G__56232;
i__55602_56228 = G__56233;
continue;
} else {
var G__56235 = seq__55598_56225;
var G__56236 = chunk__55600_56226;
var G__56237 = count__55601_56227;
var G__56238 = (i__55602_56228 + (1));
seq__55598_56225 = G__56235;
chunk__55600_56226 = G__56236;
count__55601_56227 = G__56237;
i__55602_56228 = G__56238;
continue;
}
} else {
var temp__5735__auto___56239__$1 = cljs.core.seq(seq__55598_56225);
if(temp__5735__auto___56239__$1){
var seq__55598_56240__$1 = temp__5735__auto___56239__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55598_56240__$1)){
var c__4556__auto___56241 = cljs.core.chunk_first(seq__55598_56240__$1);
var G__56242 = cljs.core.chunk_rest(seq__55598_56240__$1);
var G__56243 = c__4556__auto___56241;
var G__56244 = cljs.core.count(c__4556__auto___56241);
var G__56245 = (0);
seq__55598_56225 = G__56242;
chunk__55600_56226 = G__56243;
count__55601_56227 = G__56244;
i__55602_56228 = G__56245;
continue;
} else {
var child_56248 = cljs.core.first(seq__55598_56240__$1);
if(cljs.core.truth_(child_56248)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56248);


var G__56249 = cljs.core.next(seq__55598_56240__$1);
var G__56250 = null;
var G__56251 = (0);
var G__56252 = (0);
seq__55598_56225 = G__56249;
chunk__55600_56226 = G__56250;
count__55601_56227 = G__56251;
i__55602_56228 = G__56252;
continue;
} else {
var G__56254 = cljs.core.next(seq__55598_56240__$1);
var G__56255 = null;
var G__56256 = (0);
var G__56257 = (0);
seq__55598_56225 = G__56254;
chunk__55600_56226 = G__56255;
count__55601_56227 = G__56256;
i__55602_56228 = G__56257;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56223);
}


var G__56259 = cljs.core.next(seq__55532_56214__$1);
var G__56260 = null;
var G__56261 = (0);
var G__56262 = (0);
seq__55532_56164 = G__56259;
chunk__55533_56165 = G__56260;
count__55534_56166 = G__56261;
i__55535_56167 = G__56262;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__55627 = cljs.core.seq(node);
var chunk__55628 = null;
var count__55629 = (0);
var i__55630 = (0);
while(true){
if((i__55630 < count__55629)){
var n = chunk__55628.cljs$core$IIndexed$_nth$arity$2(null,i__55630);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56269 = seq__55627;
var G__56270 = chunk__55628;
var G__56271 = count__55629;
var G__56272 = (i__55630 + (1));
seq__55627 = G__56269;
chunk__55628 = G__56270;
count__55629 = G__56271;
i__55630 = G__56272;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55627);
if(temp__5735__auto__){
var seq__55627__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55627__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55627__$1);
var G__56274 = cljs.core.chunk_rest(seq__55627__$1);
var G__56275 = c__4556__auto__;
var G__56276 = cljs.core.count(c__4556__auto__);
var G__56277 = (0);
seq__55627 = G__56274;
chunk__55628 = G__56275;
count__55629 = G__56276;
i__55630 = G__56277;
continue;
} else {
var n = cljs.core.first(seq__55627__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56278 = cljs.core.next(seq__55627__$1);
var G__56279 = null;
var G__56280 = (0);
var G__56281 = (0);
seq__55627 = G__56278;
chunk__55628 = G__56279;
count__55629 = G__56280;
i__55630 = G__56281;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__55643 = arguments.length;
switch (G__55643) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__55648 = arguments.length;
switch (G__55648) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__55659 = arguments.length;
switch (G__55659) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56307 = arguments.length;
var i__4737__auto___56308 = (0);
while(true){
if((i__4737__auto___56308 < len__4736__auto___56307)){
args__4742__auto__.push((arguments[i__4737__auto___56308]));

var G__56309 = (i__4737__auto___56308 + (1));
i__4737__auto___56308 = G__56309;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__55682_56310 = cljs.core.seq(nodes);
var chunk__55683_56311 = null;
var count__55684_56312 = (0);
var i__55685_56313 = (0);
while(true){
if((i__55685_56313 < count__55684_56312)){
var node_56314 = chunk__55683_56311.cljs$core$IIndexed$_nth$arity$2(null,i__55685_56313);
fragment.appendChild(shadow.dom._to_dom(node_56314));


var G__56320 = seq__55682_56310;
var G__56321 = chunk__55683_56311;
var G__56322 = count__55684_56312;
var G__56323 = (i__55685_56313 + (1));
seq__55682_56310 = G__56320;
chunk__55683_56311 = G__56321;
count__55684_56312 = G__56322;
i__55685_56313 = G__56323;
continue;
} else {
var temp__5735__auto___56325 = cljs.core.seq(seq__55682_56310);
if(temp__5735__auto___56325){
var seq__55682_56326__$1 = temp__5735__auto___56325;
if(cljs.core.chunked_seq_QMARK_(seq__55682_56326__$1)){
var c__4556__auto___56327 = cljs.core.chunk_first(seq__55682_56326__$1);
var G__56329 = cljs.core.chunk_rest(seq__55682_56326__$1);
var G__56330 = c__4556__auto___56327;
var G__56331 = cljs.core.count(c__4556__auto___56327);
var G__56332 = (0);
seq__55682_56310 = G__56329;
chunk__55683_56311 = G__56330;
count__55684_56312 = G__56331;
i__55685_56313 = G__56332;
continue;
} else {
var node_56333 = cljs.core.first(seq__55682_56326__$1);
fragment.appendChild(shadow.dom._to_dom(node_56333));


var G__56334 = cljs.core.next(seq__55682_56326__$1);
var G__56335 = null;
var G__56336 = (0);
var G__56337 = (0);
seq__55682_56310 = G__56334;
chunk__55683_56311 = G__56335;
count__55684_56312 = G__56336;
i__55685_56313 = G__56337;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq55679){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55679));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__55701_56339 = cljs.core.seq(scripts);
var chunk__55702_56340 = null;
var count__55703_56341 = (0);
var i__55704_56342 = (0);
while(true){
if((i__55704_56342 < count__55703_56341)){
var vec__55716_56343 = chunk__55702_56340.cljs$core$IIndexed$_nth$arity$2(null,i__55704_56342);
var script_tag_56344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55716_56343,(0),null);
var script_body_56345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55716_56343,(1),null);
eval(script_body_56345);


var G__56346 = seq__55701_56339;
var G__56347 = chunk__55702_56340;
var G__56348 = count__55703_56341;
var G__56349 = (i__55704_56342 + (1));
seq__55701_56339 = G__56346;
chunk__55702_56340 = G__56347;
count__55703_56341 = G__56348;
i__55704_56342 = G__56349;
continue;
} else {
var temp__5735__auto___56350 = cljs.core.seq(seq__55701_56339);
if(temp__5735__auto___56350){
var seq__55701_56352__$1 = temp__5735__auto___56350;
if(cljs.core.chunked_seq_QMARK_(seq__55701_56352__$1)){
var c__4556__auto___56353 = cljs.core.chunk_first(seq__55701_56352__$1);
var G__56354 = cljs.core.chunk_rest(seq__55701_56352__$1);
var G__56355 = c__4556__auto___56353;
var G__56356 = cljs.core.count(c__4556__auto___56353);
var G__56357 = (0);
seq__55701_56339 = G__56354;
chunk__55702_56340 = G__56355;
count__55703_56341 = G__56356;
i__55704_56342 = G__56357;
continue;
} else {
var vec__55724_56359 = cljs.core.first(seq__55701_56352__$1);
var script_tag_56360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55724_56359,(0),null);
var script_body_56361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55724_56359,(1),null);
eval(script_body_56361);


var G__56362 = cljs.core.next(seq__55701_56352__$1);
var G__56363 = null;
var G__56364 = (0);
var G__56365 = (0);
seq__55701_56339 = G__56362;
chunk__55702_56340 = G__56363;
count__55703_56341 = G__56364;
i__55704_56342 = G__56365;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__55727){
var vec__55728 = p__55727;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55728,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55728,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__55741 = arguments.length;
switch (G__55741) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__55758 = cljs.core.seq(style_keys);
var chunk__55759 = null;
var count__55760 = (0);
var i__55761 = (0);
while(true){
if((i__55761 < count__55760)){
var it = chunk__55759.cljs$core$IIndexed$_nth$arity$2(null,i__55761);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56378 = seq__55758;
var G__56379 = chunk__55759;
var G__56380 = count__55760;
var G__56381 = (i__55761 + (1));
seq__55758 = G__56378;
chunk__55759 = G__56379;
count__55760 = G__56380;
i__55761 = G__56381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55758);
if(temp__5735__auto__){
var seq__55758__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55758__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55758__$1);
var G__56386 = cljs.core.chunk_rest(seq__55758__$1);
var G__56387 = c__4556__auto__;
var G__56388 = cljs.core.count(c__4556__auto__);
var G__56389 = (0);
seq__55758 = G__56386;
chunk__55759 = G__56387;
count__55760 = G__56388;
i__55761 = G__56389;
continue;
} else {
var it = cljs.core.first(seq__55758__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56390 = cljs.core.next(seq__55758__$1);
var G__56391 = null;
var G__56392 = (0);
var G__56393 = (0);
seq__55758 = G__56390;
chunk__55759 = G__56391;
count__55760 = G__56392;
i__55761 = G__56393;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k55770,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__55780 = k55770;
var G__55780__$1 = (((G__55780 instanceof cljs.core.Keyword))?G__55780.fqn:null);
switch (G__55780__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55770,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__55783){
var vec__55784 = p__55783;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55784,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55784,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55769){
var self__ = this;
var G__55769__$1 = this;
return (new cljs.core.RecordIter((0),G__55769__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55771,other55772){
var self__ = this;
var this55771__$1 = this;
return (((!((other55772 == null)))) && ((this55771__$1.constructor === other55772.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55771__$1.x,other55772.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55771__$1.y,other55772.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55771__$1.__extmap,other55772.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__55769){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__55798 = cljs.core.keyword_identical_QMARK_;
var expr__55799 = k__4388__auto__;
if(cljs.core.truth_((pred__55798.cljs$core$IFn$_invoke$arity$2 ? pred__55798.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__55799) : pred__55798.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__55799)))){
return (new shadow.dom.Coordinate(G__55769,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55798.cljs$core$IFn$_invoke$arity$2 ? pred__55798.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__55799) : pred__55798.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__55799)))){
return (new shadow.dom.Coordinate(self__.x,G__55769,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__55769),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__55769){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__55769,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__55773){
var extmap__4419__auto__ = (function (){var G__55803 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55773,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__55773)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55803);
} else {
return G__55803;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__55773),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__55773),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k55815,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__55821 = k55815;
var G__55821__$1 = (((G__55821 instanceof cljs.core.Keyword))?G__55821.fqn:null);
switch (G__55821__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55815,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__55825){
var vec__55826 = p__55825;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55826,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55826,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55814){
var self__ = this;
var G__55814__$1 = this;
return (new cljs.core.RecordIter((0),G__55814__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55816,other55817){
var self__ = this;
var this55816__$1 = this;
return (((!((other55817 == null)))) && ((this55816__$1.constructor === other55817.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55816__$1.w,other55817.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55816__$1.h,other55817.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55816__$1.__extmap,other55817.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__55814){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__55848 = cljs.core.keyword_identical_QMARK_;
var expr__55849 = k__4388__auto__;
if(cljs.core.truth_((pred__55848.cljs$core$IFn$_invoke$arity$2 ? pred__55848.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__55849) : pred__55848.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__55849)))){
return (new shadow.dom.Size(G__55814,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55848.cljs$core$IFn$_invoke$arity$2 ? pred__55848.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__55849) : pred__55848.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__55849)))){
return (new shadow.dom.Size(self__.w,G__55814,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__55814),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__55814){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__55814,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__55819){
var extmap__4419__auto__ = (function (){var G__55869 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55819,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__55819)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55869);
} else {
return G__55869;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__55819),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__55819),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__56476 = (i + (1));
var G__56477 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__56476;
ret = G__56477;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55888){
var vec__55889 = p__55888;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55889,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__55895 = arguments.length;
switch (G__55895) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__56491 = ps;
var G__56492 = (i + (1));
el__$1 = G__56491;
i = G__56492;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__55926 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55926,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55926,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55926,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__55930_56496 = cljs.core.seq(props);
var chunk__55931_56497 = null;
var count__55932_56498 = (0);
var i__55933_56499 = (0);
while(true){
if((i__55933_56499 < count__55932_56498)){
var vec__55945_56500 = chunk__55931_56497.cljs$core$IIndexed$_nth$arity$2(null,i__55933_56499);
var k_56501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55945_56500,(0),null);
var v_56502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55945_56500,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_56501);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56501),v_56502);


var G__56508 = seq__55930_56496;
var G__56509 = chunk__55931_56497;
var G__56510 = count__55932_56498;
var G__56511 = (i__55933_56499 + (1));
seq__55930_56496 = G__56508;
chunk__55931_56497 = G__56509;
count__55932_56498 = G__56510;
i__55933_56499 = G__56511;
continue;
} else {
var temp__5735__auto___56512 = cljs.core.seq(seq__55930_56496);
if(temp__5735__auto___56512){
var seq__55930_56513__$1 = temp__5735__auto___56512;
if(cljs.core.chunked_seq_QMARK_(seq__55930_56513__$1)){
var c__4556__auto___56514 = cljs.core.chunk_first(seq__55930_56513__$1);
var G__56516 = cljs.core.chunk_rest(seq__55930_56513__$1);
var G__56517 = c__4556__auto___56514;
var G__56518 = cljs.core.count(c__4556__auto___56514);
var G__56519 = (0);
seq__55930_56496 = G__56516;
chunk__55931_56497 = G__56517;
count__55932_56498 = G__56518;
i__55933_56499 = G__56519;
continue;
} else {
var vec__55949_56522 = cljs.core.first(seq__55930_56513__$1);
var k_56523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55949_56522,(0),null);
var v_56524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55949_56522,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_56523);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56523),v_56524);


var G__56525 = cljs.core.next(seq__55930_56513__$1);
var G__56526 = null;
var G__56527 = (0);
var G__56528 = (0);
seq__55930_56496 = G__56525;
chunk__55931_56497 = G__56526;
count__55932_56498 = G__56527;
i__55933_56499 = G__56528;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__55959 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55959,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55959,(1),null);
var seq__55963_56529 = cljs.core.seq(node_children);
var chunk__55965_56530 = null;
var count__55966_56531 = (0);
var i__55967_56532 = (0);
while(true){
if((i__55967_56532 < count__55966_56531)){
var child_struct_56535 = chunk__55965_56530.cljs$core$IIndexed$_nth$arity$2(null,i__55967_56532);
if((!((child_struct_56535 == null)))){
if(typeof child_struct_56535 === 'string'){
var text_56538 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56538),child_struct_56535].join(''));
} else {
var children_56539 = shadow.dom.svg_node(child_struct_56535);
if(cljs.core.seq_QMARK_(children_56539)){
var seq__55991_56540 = cljs.core.seq(children_56539);
var chunk__55993_56541 = null;
var count__55994_56542 = (0);
var i__55995_56543 = (0);
while(true){
if((i__55995_56543 < count__55994_56542)){
var child_56544 = chunk__55993_56541.cljs$core$IIndexed$_nth$arity$2(null,i__55995_56543);
if(cljs.core.truth_(child_56544)){
node.appendChild(child_56544);


var G__56550 = seq__55991_56540;
var G__56551 = chunk__55993_56541;
var G__56552 = count__55994_56542;
var G__56553 = (i__55995_56543 + (1));
seq__55991_56540 = G__56550;
chunk__55993_56541 = G__56551;
count__55994_56542 = G__56552;
i__55995_56543 = G__56553;
continue;
} else {
var G__56554 = seq__55991_56540;
var G__56555 = chunk__55993_56541;
var G__56556 = count__55994_56542;
var G__56557 = (i__55995_56543 + (1));
seq__55991_56540 = G__56554;
chunk__55993_56541 = G__56555;
count__55994_56542 = G__56556;
i__55995_56543 = G__56557;
continue;
}
} else {
var temp__5735__auto___56558 = cljs.core.seq(seq__55991_56540);
if(temp__5735__auto___56558){
var seq__55991_56559__$1 = temp__5735__auto___56558;
if(cljs.core.chunked_seq_QMARK_(seq__55991_56559__$1)){
var c__4556__auto___56560 = cljs.core.chunk_first(seq__55991_56559__$1);
var G__56561 = cljs.core.chunk_rest(seq__55991_56559__$1);
var G__56562 = c__4556__auto___56560;
var G__56563 = cljs.core.count(c__4556__auto___56560);
var G__56564 = (0);
seq__55991_56540 = G__56561;
chunk__55993_56541 = G__56562;
count__55994_56542 = G__56563;
i__55995_56543 = G__56564;
continue;
} else {
var child_56565 = cljs.core.first(seq__55991_56559__$1);
if(cljs.core.truth_(child_56565)){
node.appendChild(child_56565);


var G__56566 = cljs.core.next(seq__55991_56559__$1);
var G__56567 = null;
var G__56568 = (0);
var G__56569 = (0);
seq__55991_56540 = G__56566;
chunk__55993_56541 = G__56567;
count__55994_56542 = G__56568;
i__55995_56543 = G__56569;
continue;
} else {
var G__56570 = cljs.core.next(seq__55991_56559__$1);
var G__56571 = null;
var G__56572 = (0);
var G__56573 = (0);
seq__55991_56540 = G__56570;
chunk__55993_56541 = G__56571;
count__55994_56542 = G__56572;
i__55995_56543 = G__56573;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56539);
}
}


var G__56574 = seq__55963_56529;
var G__56575 = chunk__55965_56530;
var G__56576 = count__55966_56531;
var G__56577 = (i__55967_56532 + (1));
seq__55963_56529 = G__56574;
chunk__55965_56530 = G__56575;
count__55966_56531 = G__56576;
i__55967_56532 = G__56577;
continue;
} else {
var G__56578 = seq__55963_56529;
var G__56579 = chunk__55965_56530;
var G__56580 = count__55966_56531;
var G__56581 = (i__55967_56532 + (1));
seq__55963_56529 = G__56578;
chunk__55965_56530 = G__56579;
count__55966_56531 = G__56580;
i__55967_56532 = G__56581;
continue;
}
} else {
var temp__5735__auto___56582 = cljs.core.seq(seq__55963_56529);
if(temp__5735__auto___56582){
var seq__55963_56583__$1 = temp__5735__auto___56582;
if(cljs.core.chunked_seq_QMARK_(seq__55963_56583__$1)){
var c__4556__auto___56584 = cljs.core.chunk_first(seq__55963_56583__$1);
var G__56585 = cljs.core.chunk_rest(seq__55963_56583__$1);
var G__56586 = c__4556__auto___56584;
var G__56587 = cljs.core.count(c__4556__auto___56584);
var G__56588 = (0);
seq__55963_56529 = G__56585;
chunk__55965_56530 = G__56586;
count__55966_56531 = G__56587;
i__55967_56532 = G__56588;
continue;
} else {
var child_struct_56589 = cljs.core.first(seq__55963_56583__$1);
if((!((child_struct_56589 == null)))){
if(typeof child_struct_56589 === 'string'){
var text_56590 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56590),child_struct_56589].join(''));
} else {
var children_56593 = shadow.dom.svg_node(child_struct_56589);
if(cljs.core.seq_QMARK_(children_56593)){
var seq__56004_56596 = cljs.core.seq(children_56593);
var chunk__56006_56597 = null;
var count__56007_56598 = (0);
var i__56008_56599 = (0);
while(true){
if((i__56008_56599 < count__56007_56598)){
var child_56601 = chunk__56006_56597.cljs$core$IIndexed$_nth$arity$2(null,i__56008_56599);
if(cljs.core.truth_(child_56601)){
node.appendChild(child_56601);


var G__56602 = seq__56004_56596;
var G__56603 = chunk__56006_56597;
var G__56604 = count__56007_56598;
var G__56605 = (i__56008_56599 + (1));
seq__56004_56596 = G__56602;
chunk__56006_56597 = G__56603;
count__56007_56598 = G__56604;
i__56008_56599 = G__56605;
continue;
} else {
var G__56606 = seq__56004_56596;
var G__56607 = chunk__56006_56597;
var G__56608 = count__56007_56598;
var G__56609 = (i__56008_56599 + (1));
seq__56004_56596 = G__56606;
chunk__56006_56597 = G__56607;
count__56007_56598 = G__56608;
i__56008_56599 = G__56609;
continue;
}
} else {
var temp__5735__auto___56610__$1 = cljs.core.seq(seq__56004_56596);
if(temp__5735__auto___56610__$1){
var seq__56004_56611__$1 = temp__5735__auto___56610__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56004_56611__$1)){
var c__4556__auto___56612 = cljs.core.chunk_first(seq__56004_56611__$1);
var G__56613 = cljs.core.chunk_rest(seq__56004_56611__$1);
var G__56614 = c__4556__auto___56612;
var G__56615 = cljs.core.count(c__4556__auto___56612);
var G__56616 = (0);
seq__56004_56596 = G__56613;
chunk__56006_56597 = G__56614;
count__56007_56598 = G__56615;
i__56008_56599 = G__56616;
continue;
} else {
var child_56617 = cljs.core.first(seq__56004_56611__$1);
if(cljs.core.truth_(child_56617)){
node.appendChild(child_56617);


var G__56618 = cljs.core.next(seq__56004_56611__$1);
var G__56619 = null;
var G__56620 = (0);
var G__56621 = (0);
seq__56004_56596 = G__56618;
chunk__56006_56597 = G__56619;
count__56007_56598 = G__56620;
i__56008_56599 = G__56621;
continue;
} else {
var G__56622 = cljs.core.next(seq__56004_56611__$1);
var G__56623 = null;
var G__56624 = (0);
var G__56625 = (0);
seq__56004_56596 = G__56622;
chunk__56006_56597 = G__56623;
count__56007_56598 = G__56624;
i__56008_56599 = G__56625;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56593);
}
}


var G__56626 = cljs.core.next(seq__55963_56583__$1);
var G__56627 = null;
var G__56628 = (0);
var G__56629 = (0);
seq__55963_56529 = G__56626;
chunk__55965_56530 = G__56627;
count__55966_56531 = G__56628;
i__55967_56532 = G__56629;
continue;
} else {
var G__56631 = cljs.core.next(seq__55963_56583__$1);
var G__56632 = null;
var G__56633 = (0);
var G__56634 = (0);
seq__55963_56529 = G__56631;
chunk__55965_56530 = G__56632;
count__55966_56531 = G__56633;
i__55967_56532 = G__56634;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56643 = arguments.length;
var i__4737__auto___56644 = (0);
while(true){
if((i__4737__auto___56644 < len__4736__auto___56643)){
args__4742__auto__.push((arguments[i__4737__auto___56644]));

var G__56645 = (i__4737__auto___56644 + (1));
i__4737__auto___56644 = G__56645;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq56024){
var G__56026 = cljs.core.first(seq56024);
var seq56024__$1 = cljs.core.next(seq56024);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56026,seq56024__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__56037 = arguments.length;
switch (G__56037) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__53542__auto___56665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_56046){
var state_val_56047 = (state_56046[(1)]);
if((state_val_56047 === (1))){
var state_56046__$1 = state_56046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56046__$1,(2),once_or_cleanup);
} else {
if((state_val_56047 === (2))){
var inst_56043 = (state_56046[(2)]);
var inst_56044 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56046__$1 = (function (){var statearr_56050 = state_56046;
(statearr_56050[(7)] = inst_56043);

return statearr_56050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56046__$1,inst_56044);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__53243__auto__ = null;
var shadow$dom$state_machine__53243__auto____0 = (function (){
var statearr_56052 = [null,null,null,null,null,null,null,null];
(statearr_56052[(0)] = shadow$dom$state_machine__53243__auto__);

(statearr_56052[(1)] = (1));

return statearr_56052;
});
var shadow$dom$state_machine__53243__auto____1 = (function (state_56046){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_56046);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e56053){var ex__53246__auto__ = e56053;
var statearr_56055_56669 = state_56046;
(statearr_56055_56669[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_56046[(4)]))){
var statearr_56056_56670 = state_56046;
(statearr_56056_56670[(1)] = cljs.core.first((state_56046[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56671 = state_56046;
state_56046 = G__56671;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
shadow$dom$state_machine__53243__auto__ = function(state_56046){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__53243__auto____0.call(this);
case 1:
return shadow$dom$state_machine__53243__auto____1.call(this,state_56046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__53243__auto____0;
shadow$dom$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__53243__auto____1;
return shadow$dom$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_56059 = f__53543__auto__();
(statearr_56059[(6)] = c__53542__auto___56665);

return statearr_56059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
