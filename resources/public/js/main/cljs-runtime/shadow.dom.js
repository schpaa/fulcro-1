goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_56032 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_56032(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_56033 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_56033(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__55302 = coll;
var G__55303 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__55302,G__55303) : shadow.dom.lazy_native_coll_seq.call(null,G__55302,G__55303));
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
var G__55317 = arguments.length;
switch (G__55317) {
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
var G__55321 = arguments.length;
switch (G__55321) {
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
var G__55350 = arguments.length;
switch (G__55350) {
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
var G__55356 = arguments.length;
switch (G__55356) {
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
var G__55365 = arguments.length;
switch (G__55365) {
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
var G__55377 = arguments.length;
switch (G__55377) {
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
}catch (e55381){if((e55381 instanceof Object)){
var e = e55381;
return console.log("didnt support attachEvent",el,e);
} else {
throw e55381;

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
var seq__55383 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__55384 = null;
var count__55385 = (0);
var i__55386 = (0);
while(true){
if((i__55386 < count__55385)){
var el = chunk__55384.cljs$core$IIndexed$_nth$arity$2(null,i__55386);
var handler_56075__$1 = ((function (seq__55383,chunk__55384,count__55385,i__55386,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55383,chunk__55384,count__55385,i__55386,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56075__$1);


var G__56076 = seq__55383;
var G__56077 = chunk__55384;
var G__56078 = count__55385;
var G__56079 = (i__55386 + (1));
seq__55383 = G__56076;
chunk__55384 = G__56077;
count__55385 = G__56078;
i__55386 = G__56079;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55383);
if(temp__5735__auto__){
var seq__55383__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55383__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55383__$1);
var G__56080 = cljs.core.chunk_rest(seq__55383__$1);
var G__56081 = c__4556__auto__;
var G__56082 = cljs.core.count(c__4556__auto__);
var G__56083 = (0);
seq__55383 = G__56080;
chunk__55384 = G__56081;
count__55385 = G__56082;
i__55386 = G__56083;
continue;
} else {
var el = cljs.core.first(seq__55383__$1);
var handler_56084__$1 = ((function (seq__55383,chunk__55384,count__55385,i__55386,el,seq__55383__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55383,chunk__55384,count__55385,i__55386,el,seq__55383__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56084__$1);


var G__56085 = cljs.core.next(seq__55383__$1);
var G__56086 = null;
var G__56087 = (0);
var G__56088 = (0);
seq__55383 = G__56085;
chunk__55384 = G__56086;
count__55385 = G__56087;
i__55386 = G__56088;
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
var G__55402 = arguments.length;
switch (G__55402) {
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
var seq__55406 = cljs.core.seq(events);
var chunk__55407 = null;
var count__55408 = (0);
var i__55409 = (0);
while(true){
if((i__55409 < count__55408)){
var vec__55416 = chunk__55407.cljs$core$IIndexed$_nth$arity$2(null,i__55409);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55416,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55416,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56117 = seq__55406;
var G__56118 = chunk__55407;
var G__56119 = count__55408;
var G__56120 = (i__55409 + (1));
seq__55406 = G__56117;
chunk__55407 = G__56118;
count__55408 = G__56119;
i__55409 = G__56120;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55406);
if(temp__5735__auto__){
var seq__55406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55406__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55406__$1);
var G__56121 = cljs.core.chunk_rest(seq__55406__$1);
var G__56122 = c__4556__auto__;
var G__56123 = cljs.core.count(c__4556__auto__);
var G__56124 = (0);
seq__55406 = G__56121;
chunk__55407 = G__56122;
count__55408 = G__56123;
i__55409 = G__56124;
continue;
} else {
var vec__55421 = cljs.core.first(seq__55406__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55421,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55421,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56125 = cljs.core.next(seq__55406__$1);
var G__56126 = null;
var G__56127 = (0);
var G__56128 = (0);
seq__55406 = G__56125;
chunk__55407 = G__56126;
count__55408 = G__56127;
i__55409 = G__56128;
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
var seq__55427 = cljs.core.seq(styles);
var chunk__55428 = null;
var count__55429 = (0);
var i__55430 = (0);
while(true){
if((i__55430 < count__55429)){
var vec__55442 = chunk__55428.cljs$core$IIndexed$_nth$arity$2(null,i__55430);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55442,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56132 = seq__55427;
var G__56133 = chunk__55428;
var G__56134 = count__55429;
var G__56135 = (i__55430 + (1));
seq__55427 = G__56132;
chunk__55428 = G__56133;
count__55429 = G__56134;
i__55430 = G__56135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55427);
if(temp__5735__auto__){
var seq__55427__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55427__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55427__$1);
var G__56136 = cljs.core.chunk_rest(seq__55427__$1);
var G__56137 = c__4556__auto__;
var G__56138 = cljs.core.count(c__4556__auto__);
var G__56139 = (0);
seq__55427 = G__56136;
chunk__55428 = G__56137;
count__55429 = G__56138;
i__55430 = G__56139;
continue;
} else {
var vec__55445 = cljs.core.first(seq__55427__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55445,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56140 = cljs.core.next(seq__55427__$1);
var G__56141 = null;
var G__56142 = (0);
var G__56143 = (0);
seq__55427 = G__56140;
chunk__55428 = G__56141;
count__55429 = G__56142;
i__55430 = G__56143;
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
var G__55450_56144 = key;
var G__55450_56145__$1 = (((G__55450_56144 instanceof cljs.core.Keyword))?G__55450_56144.fqn:null);
switch (G__55450_56145__$1) {
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
var ks_56152 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_56152,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_56152,"aria-");
}
})())){
el.setAttribute(ks_56152,value);
} else {
(el[ks_56152] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__55468){
var map__55470 = p__55468;
var map__55470__$1 = (((((!((map__55470 == null))))?(((((map__55470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55470):map__55470);
var props = map__55470__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__55474 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55474,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55474,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55474,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__55477 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__55477,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__55477;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__55483 = arguments.length;
switch (G__55483) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__55488){
var vec__55490 = p__55488;
var seq__55491 = cljs.core.seq(vec__55490);
var first__55492 = cljs.core.first(seq__55491);
var seq__55491__$1 = cljs.core.next(seq__55491);
var nn = first__55492;
var first__55492__$1 = cljs.core.first(seq__55491__$1);
var seq__55491__$2 = cljs.core.next(seq__55491__$1);
var np = first__55492__$1;
var nc = seq__55491__$2;
var node = vec__55490;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55496 = nn;
var G__55497 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55496,G__55497) : create_fn.call(null,G__55496,G__55497));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55498 = nn;
var G__55499 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55498,G__55499) : create_fn.call(null,G__55498,G__55499));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__55500 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55500,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55500,(1),null);
var seq__55504_56174 = cljs.core.seq(node_children);
var chunk__55505_56175 = null;
var count__55506_56176 = (0);
var i__55507_56177 = (0);
while(true){
if((i__55507_56177 < count__55506_56176)){
var child_struct_56181 = chunk__55505_56175.cljs$core$IIndexed$_nth$arity$2(null,i__55507_56177);
var children_56182 = shadow.dom.dom_node(child_struct_56181);
if(cljs.core.seq_QMARK_(children_56182)){
var seq__55536_56183 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56182));
var chunk__55538_56184 = null;
var count__55539_56185 = (0);
var i__55540_56186 = (0);
while(true){
if((i__55540_56186 < count__55539_56185)){
var child_56187 = chunk__55538_56184.cljs$core$IIndexed$_nth$arity$2(null,i__55540_56186);
if(cljs.core.truth_(child_56187)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56187);


var G__56188 = seq__55536_56183;
var G__56189 = chunk__55538_56184;
var G__56190 = count__55539_56185;
var G__56191 = (i__55540_56186 + (1));
seq__55536_56183 = G__56188;
chunk__55538_56184 = G__56189;
count__55539_56185 = G__56190;
i__55540_56186 = G__56191;
continue;
} else {
var G__56192 = seq__55536_56183;
var G__56193 = chunk__55538_56184;
var G__56194 = count__55539_56185;
var G__56195 = (i__55540_56186 + (1));
seq__55536_56183 = G__56192;
chunk__55538_56184 = G__56193;
count__55539_56185 = G__56194;
i__55540_56186 = G__56195;
continue;
}
} else {
var temp__5735__auto___56196 = cljs.core.seq(seq__55536_56183);
if(temp__5735__auto___56196){
var seq__55536_56197__$1 = temp__5735__auto___56196;
if(cljs.core.chunked_seq_QMARK_(seq__55536_56197__$1)){
var c__4556__auto___56198 = cljs.core.chunk_first(seq__55536_56197__$1);
var G__56199 = cljs.core.chunk_rest(seq__55536_56197__$1);
var G__56200 = c__4556__auto___56198;
var G__56201 = cljs.core.count(c__4556__auto___56198);
var G__56202 = (0);
seq__55536_56183 = G__56199;
chunk__55538_56184 = G__56200;
count__55539_56185 = G__56201;
i__55540_56186 = G__56202;
continue;
} else {
var child_56203 = cljs.core.first(seq__55536_56197__$1);
if(cljs.core.truth_(child_56203)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56203);


var G__56204 = cljs.core.next(seq__55536_56197__$1);
var G__56205 = null;
var G__56206 = (0);
var G__56207 = (0);
seq__55536_56183 = G__56204;
chunk__55538_56184 = G__56205;
count__55539_56185 = G__56206;
i__55540_56186 = G__56207;
continue;
} else {
var G__56208 = cljs.core.next(seq__55536_56197__$1);
var G__56209 = null;
var G__56210 = (0);
var G__56211 = (0);
seq__55536_56183 = G__56208;
chunk__55538_56184 = G__56209;
count__55539_56185 = G__56210;
i__55540_56186 = G__56211;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56182);
}


var G__56212 = seq__55504_56174;
var G__56213 = chunk__55505_56175;
var G__56214 = count__55506_56176;
var G__56215 = (i__55507_56177 + (1));
seq__55504_56174 = G__56212;
chunk__55505_56175 = G__56213;
count__55506_56176 = G__56214;
i__55507_56177 = G__56215;
continue;
} else {
var temp__5735__auto___56219 = cljs.core.seq(seq__55504_56174);
if(temp__5735__auto___56219){
var seq__55504_56220__$1 = temp__5735__auto___56219;
if(cljs.core.chunked_seq_QMARK_(seq__55504_56220__$1)){
var c__4556__auto___56221 = cljs.core.chunk_first(seq__55504_56220__$1);
var G__56222 = cljs.core.chunk_rest(seq__55504_56220__$1);
var G__56223 = c__4556__auto___56221;
var G__56224 = cljs.core.count(c__4556__auto___56221);
var G__56225 = (0);
seq__55504_56174 = G__56222;
chunk__55505_56175 = G__56223;
count__55506_56176 = G__56224;
i__55507_56177 = G__56225;
continue;
} else {
var child_struct_56226 = cljs.core.first(seq__55504_56220__$1);
var children_56227 = shadow.dom.dom_node(child_struct_56226);
if(cljs.core.seq_QMARK_(children_56227)){
var seq__55547_56228 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56227));
var chunk__55549_56229 = null;
var count__55550_56230 = (0);
var i__55551_56231 = (0);
while(true){
if((i__55551_56231 < count__55550_56230)){
var child_56232 = chunk__55549_56229.cljs$core$IIndexed$_nth$arity$2(null,i__55551_56231);
if(cljs.core.truth_(child_56232)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56232);


var G__56233 = seq__55547_56228;
var G__56234 = chunk__55549_56229;
var G__56235 = count__55550_56230;
var G__56236 = (i__55551_56231 + (1));
seq__55547_56228 = G__56233;
chunk__55549_56229 = G__56234;
count__55550_56230 = G__56235;
i__55551_56231 = G__56236;
continue;
} else {
var G__56237 = seq__55547_56228;
var G__56238 = chunk__55549_56229;
var G__56239 = count__55550_56230;
var G__56240 = (i__55551_56231 + (1));
seq__55547_56228 = G__56237;
chunk__55549_56229 = G__56238;
count__55550_56230 = G__56239;
i__55551_56231 = G__56240;
continue;
}
} else {
var temp__5735__auto___56241__$1 = cljs.core.seq(seq__55547_56228);
if(temp__5735__auto___56241__$1){
var seq__55547_56242__$1 = temp__5735__auto___56241__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55547_56242__$1)){
var c__4556__auto___56243 = cljs.core.chunk_first(seq__55547_56242__$1);
var G__56244 = cljs.core.chunk_rest(seq__55547_56242__$1);
var G__56245 = c__4556__auto___56243;
var G__56246 = cljs.core.count(c__4556__auto___56243);
var G__56247 = (0);
seq__55547_56228 = G__56244;
chunk__55549_56229 = G__56245;
count__55550_56230 = G__56246;
i__55551_56231 = G__56247;
continue;
} else {
var child_56248 = cljs.core.first(seq__55547_56242__$1);
if(cljs.core.truth_(child_56248)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56248);


var G__56249 = cljs.core.next(seq__55547_56242__$1);
var G__56250 = null;
var G__56251 = (0);
var G__56252 = (0);
seq__55547_56228 = G__56249;
chunk__55549_56229 = G__56250;
count__55550_56230 = G__56251;
i__55551_56231 = G__56252;
continue;
} else {
var G__56253 = cljs.core.next(seq__55547_56242__$1);
var G__56254 = null;
var G__56255 = (0);
var G__56256 = (0);
seq__55547_56228 = G__56253;
chunk__55549_56229 = G__56254;
count__55550_56230 = G__56255;
i__55551_56231 = G__56256;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56227);
}


var G__56257 = cljs.core.next(seq__55504_56220__$1);
var G__56258 = null;
var G__56259 = (0);
var G__56260 = (0);
seq__55504_56174 = G__56257;
chunk__55505_56175 = G__56258;
count__55506_56176 = G__56259;
i__55507_56177 = G__56260;
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
var seq__55568 = cljs.core.seq(node);
var chunk__55569 = null;
var count__55570 = (0);
var i__55571 = (0);
while(true){
if((i__55571 < count__55570)){
var n = chunk__55569.cljs$core$IIndexed$_nth$arity$2(null,i__55571);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56261 = seq__55568;
var G__56262 = chunk__55569;
var G__56263 = count__55570;
var G__56264 = (i__55571 + (1));
seq__55568 = G__56261;
chunk__55569 = G__56262;
count__55570 = G__56263;
i__55571 = G__56264;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55568);
if(temp__5735__auto__){
var seq__55568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55568__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55568__$1);
var G__56265 = cljs.core.chunk_rest(seq__55568__$1);
var G__56266 = c__4556__auto__;
var G__56267 = cljs.core.count(c__4556__auto__);
var G__56268 = (0);
seq__55568 = G__56265;
chunk__55569 = G__56266;
count__55570 = G__56267;
i__55571 = G__56268;
continue;
} else {
var n = cljs.core.first(seq__55568__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56269 = cljs.core.next(seq__55568__$1);
var G__56270 = null;
var G__56271 = (0);
var G__56272 = (0);
seq__55568 = G__56269;
chunk__55569 = G__56270;
count__55570 = G__56271;
i__55571 = G__56272;
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
var G__55585 = arguments.length;
switch (G__55585) {
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
var G__55589 = arguments.length;
switch (G__55589) {
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
var G__55610 = arguments.length;
switch (G__55610) {
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
var len__4736__auto___56297 = arguments.length;
var i__4737__auto___56298 = (0);
while(true){
if((i__4737__auto___56298 < len__4736__auto___56297)){
args__4742__auto__.push((arguments[i__4737__auto___56298]));

var G__56299 = (i__4737__auto___56298 + (1));
i__4737__auto___56298 = G__56299;
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
var seq__55622_56300 = cljs.core.seq(nodes);
var chunk__55623_56301 = null;
var count__55624_56302 = (0);
var i__55625_56303 = (0);
while(true){
if((i__55625_56303 < count__55624_56302)){
var node_56304 = chunk__55623_56301.cljs$core$IIndexed$_nth$arity$2(null,i__55625_56303);
fragment.appendChild(shadow.dom._to_dom(node_56304));


var G__56305 = seq__55622_56300;
var G__56306 = chunk__55623_56301;
var G__56307 = count__55624_56302;
var G__56308 = (i__55625_56303 + (1));
seq__55622_56300 = G__56305;
chunk__55623_56301 = G__56306;
count__55624_56302 = G__56307;
i__55625_56303 = G__56308;
continue;
} else {
var temp__5735__auto___56309 = cljs.core.seq(seq__55622_56300);
if(temp__5735__auto___56309){
var seq__55622_56310__$1 = temp__5735__auto___56309;
if(cljs.core.chunked_seq_QMARK_(seq__55622_56310__$1)){
var c__4556__auto___56329 = cljs.core.chunk_first(seq__55622_56310__$1);
var G__56330 = cljs.core.chunk_rest(seq__55622_56310__$1);
var G__56331 = c__4556__auto___56329;
var G__56332 = cljs.core.count(c__4556__auto___56329);
var G__56333 = (0);
seq__55622_56300 = G__56330;
chunk__55623_56301 = G__56331;
count__55624_56302 = G__56332;
i__55625_56303 = G__56333;
continue;
} else {
var node_56334 = cljs.core.first(seq__55622_56310__$1);
fragment.appendChild(shadow.dom._to_dom(node_56334));


var G__56335 = cljs.core.next(seq__55622_56310__$1);
var G__56336 = null;
var G__56337 = (0);
var G__56338 = (0);
seq__55622_56300 = G__56335;
chunk__55623_56301 = G__56336;
count__55624_56302 = G__56337;
i__55625_56303 = G__56338;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq55616){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55616));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__55626_56339 = cljs.core.seq(scripts);
var chunk__55627_56340 = null;
var count__55628_56341 = (0);
var i__55629_56342 = (0);
while(true){
if((i__55629_56342 < count__55628_56341)){
var vec__55636_56343 = chunk__55627_56340.cljs$core$IIndexed$_nth$arity$2(null,i__55629_56342);
var script_tag_56344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55636_56343,(0),null);
var script_body_56345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55636_56343,(1),null);
eval(script_body_56345);


var G__56346 = seq__55626_56339;
var G__56347 = chunk__55627_56340;
var G__56348 = count__55628_56341;
var G__56349 = (i__55629_56342 + (1));
seq__55626_56339 = G__56346;
chunk__55627_56340 = G__56347;
count__55628_56341 = G__56348;
i__55629_56342 = G__56349;
continue;
} else {
var temp__5735__auto___56350 = cljs.core.seq(seq__55626_56339);
if(temp__5735__auto___56350){
var seq__55626_56351__$1 = temp__5735__auto___56350;
if(cljs.core.chunked_seq_QMARK_(seq__55626_56351__$1)){
var c__4556__auto___56352 = cljs.core.chunk_first(seq__55626_56351__$1);
var G__56353 = cljs.core.chunk_rest(seq__55626_56351__$1);
var G__56354 = c__4556__auto___56352;
var G__56355 = cljs.core.count(c__4556__auto___56352);
var G__56356 = (0);
seq__55626_56339 = G__56353;
chunk__55627_56340 = G__56354;
count__55628_56341 = G__56355;
i__55629_56342 = G__56356;
continue;
} else {
var vec__55644_56357 = cljs.core.first(seq__55626_56351__$1);
var script_tag_56358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55644_56357,(0),null);
var script_body_56359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55644_56357,(1),null);
eval(script_body_56359);


var G__56360 = cljs.core.next(seq__55626_56351__$1);
var G__56361 = null;
var G__56362 = (0);
var G__56363 = (0);
seq__55626_56339 = G__56360;
chunk__55627_56340 = G__56361;
count__55628_56341 = G__56362;
i__55629_56342 = G__56363;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__55647){
var vec__55648 = p__55647;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55648,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55648,(1),null);
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
var G__55654 = arguments.length;
switch (G__55654) {
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
var seq__55711 = cljs.core.seq(style_keys);
var chunk__55712 = null;
var count__55713 = (0);
var i__55714 = (0);
while(true){
if((i__55714 < count__55713)){
var it = chunk__55712.cljs$core$IIndexed$_nth$arity$2(null,i__55714);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56378 = seq__55711;
var G__56379 = chunk__55712;
var G__56380 = count__55713;
var G__56381 = (i__55714 + (1));
seq__55711 = G__56378;
chunk__55712 = G__56379;
count__55713 = G__56380;
i__55714 = G__56381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55711);
if(temp__5735__auto__){
var seq__55711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55711__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55711__$1);
var G__56382 = cljs.core.chunk_rest(seq__55711__$1);
var G__56383 = c__4556__auto__;
var G__56384 = cljs.core.count(c__4556__auto__);
var G__56385 = (0);
seq__55711 = G__56382;
chunk__55712 = G__56383;
count__55713 = G__56384;
i__55714 = G__56385;
continue;
} else {
var it = cljs.core.first(seq__55711__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56386 = cljs.core.next(seq__55711__$1);
var G__56387 = null;
var G__56388 = (0);
var G__56389 = (0);
seq__55711 = G__56386;
chunk__55712 = G__56387;
count__55713 = G__56388;
i__55714 = G__56389;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k55740,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__55754 = k55740;
var G__55754__$1 = (((G__55754 instanceof cljs.core.Keyword))?G__55754.fqn:null);
switch (G__55754__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55740,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__55755){
var vec__55756 = p__55755;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55756,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55756,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55739){
var self__ = this;
var G__55739__$1 = this;
return (new cljs.core.RecordIter((0),G__55739__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55741,other55742){
var self__ = this;
var this55741__$1 = this;
return (((!((other55742 == null)))) && ((this55741__$1.constructor === other55742.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55741__$1.x,other55742.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55741__$1.y,other55742.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55741__$1.__extmap,other55742.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__55739){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__55769 = cljs.core.keyword_identical_QMARK_;
var expr__55770 = k__4388__auto__;
if(cljs.core.truth_((pred__55769.cljs$core$IFn$_invoke$arity$2 ? pred__55769.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__55770) : pred__55769.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__55770)))){
return (new shadow.dom.Coordinate(G__55739,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55769.cljs$core$IFn$_invoke$arity$2 ? pred__55769.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__55770) : pred__55769.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__55770)))){
return (new shadow.dom.Coordinate(self__.x,G__55739,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__55739),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__55739){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__55739,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__55752){
var extmap__4419__auto__ = (function (){var G__55781 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55752,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__55752)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55781);
} else {
return G__55781;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__55752),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__55752),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k55785,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__55789 = k55785;
var G__55789__$1 = (((G__55789 instanceof cljs.core.Keyword))?G__55789.fqn:null);
switch (G__55789__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55785,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__55791){
var vec__55792 = p__55791;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55792,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55792,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55784){
var self__ = this;
var G__55784__$1 = this;
return (new cljs.core.RecordIter((0),G__55784__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55786,other55787){
var self__ = this;
var this55786__$1 = this;
return (((!((other55787 == null)))) && ((this55786__$1.constructor === other55787.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55786__$1.w,other55787.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55786__$1.h,other55787.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55786__$1.__extmap,other55787.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__55784){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__55833 = cljs.core.keyword_identical_QMARK_;
var expr__55834 = k__4388__auto__;
if(cljs.core.truth_((pred__55833.cljs$core$IFn$_invoke$arity$2 ? pred__55833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__55834) : pred__55833.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__55834)))){
return (new shadow.dom.Size(G__55784,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55833.cljs$core$IFn$_invoke$arity$2 ? pred__55833.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__55834) : pred__55833.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__55834)))){
return (new shadow.dom.Size(self__.w,G__55784,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__55784),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__55784){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__55784,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__55788){
var extmap__4419__auto__ = (function (){var G__55848 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55788,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__55788)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55848);
} else {
return G__55848;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__55788),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__55788),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__56444 = (i + (1));
var G__56445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__56444;
ret = G__56445;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55867){
var vec__55868 = p__55867;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55868,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55868,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__55881 = arguments.length;
switch (G__55881) {
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
var G__56466 = ps;
var G__56467 = (i + (1));
el__$1 = G__56466;
i = G__56467;
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
var vec__55902 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55902,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55902,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55902,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__55905_56476 = cljs.core.seq(props);
var chunk__55906_56477 = null;
var count__55907_56478 = (0);
var i__55908_56479 = (0);
while(true){
if((i__55908_56479 < count__55907_56478)){
var vec__55919_56480 = chunk__55906_56477.cljs$core$IIndexed$_nth$arity$2(null,i__55908_56479);
var k_56481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55919_56480,(0),null);
var v_56482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55919_56480,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_56481);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56481),v_56482);


var G__56483 = seq__55905_56476;
var G__56484 = chunk__55906_56477;
var G__56485 = count__55907_56478;
var G__56486 = (i__55908_56479 + (1));
seq__55905_56476 = G__56483;
chunk__55906_56477 = G__56484;
count__55907_56478 = G__56485;
i__55908_56479 = G__56486;
continue;
} else {
var temp__5735__auto___56487 = cljs.core.seq(seq__55905_56476);
if(temp__5735__auto___56487){
var seq__55905_56488__$1 = temp__5735__auto___56487;
if(cljs.core.chunked_seq_QMARK_(seq__55905_56488__$1)){
var c__4556__auto___56489 = cljs.core.chunk_first(seq__55905_56488__$1);
var G__56490 = cljs.core.chunk_rest(seq__55905_56488__$1);
var G__56491 = c__4556__auto___56489;
var G__56492 = cljs.core.count(c__4556__auto___56489);
var G__56493 = (0);
seq__55905_56476 = G__56490;
chunk__55906_56477 = G__56491;
count__55907_56478 = G__56492;
i__55908_56479 = G__56493;
continue;
} else {
var vec__55926_56494 = cljs.core.first(seq__55905_56488__$1);
var k_56495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55926_56494,(0),null);
var v_56496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55926_56494,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_56495);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56495),v_56496);


var G__56497 = cljs.core.next(seq__55905_56488__$1);
var G__56498 = null;
var G__56499 = (0);
var G__56500 = (0);
seq__55905_56476 = G__56497;
chunk__55906_56477 = G__56498;
count__55907_56478 = G__56499;
i__55908_56479 = G__56500;
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
var vec__55933 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55933,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55933,(1),null);
var seq__55936_56503 = cljs.core.seq(node_children);
var chunk__55938_56504 = null;
var count__55939_56505 = (0);
var i__55940_56506 = (0);
while(true){
if((i__55940_56506 < count__55939_56505)){
var child_struct_56507 = chunk__55938_56504.cljs$core$IIndexed$_nth$arity$2(null,i__55940_56506);
if((!((child_struct_56507 == null)))){
if(typeof child_struct_56507 === 'string'){
var text_56508 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56508),child_struct_56507].join(''));
} else {
var children_56509 = shadow.dom.svg_node(child_struct_56507);
if(cljs.core.seq_QMARK_(children_56509)){
var seq__55973_56510 = cljs.core.seq(children_56509);
var chunk__55975_56511 = null;
var count__55976_56512 = (0);
var i__55977_56513 = (0);
while(true){
if((i__55977_56513 < count__55976_56512)){
var child_56514 = chunk__55975_56511.cljs$core$IIndexed$_nth$arity$2(null,i__55977_56513);
if(cljs.core.truth_(child_56514)){
node.appendChild(child_56514);


var G__56515 = seq__55973_56510;
var G__56516 = chunk__55975_56511;
var G__56517 = count__55976_56512;
var G__56518 = (i__55977_56513 + (1));
seq__55973_56510 = G__56515;
chunk__55975_56511 = G__56516;
count__55976_56512 = G__56517;
i__55977_56513 = G__56518;
continue;
} else {
var G__56519 = seq__55973_56510;
var G__56520 = chunk__55975_56511;
var G__56521 = count__55976_56512;
var G__56522 = (i__55977_56513 + (1));
seq__55973_56510 = G__56519;
chunk__55975_56511 = G__56520;
count__55976_56512 = G__56521;
i__55977_56513 = G__56522;
continue;
}
} else {
var temp__5735__auto___56524 = cljs.core.seq(seq__55973_56510);
if(temp__5735__auto___56524){
var seq__55973_56525__$1 = temp__5735__auto___56524;
if(cljs.core.chunked_seq_QMARK_(seq__55973_56525__$1)){
var c__4556__auto___56526 = cljs.core.chunk_first(seq__55973_56525__$1);
var G__56528 = cljs.core.chunk_rest(seq__55973_56525__$1);
var G__56529 = c__4556__auto___56526;
var G__56530 = cljs.core.count(c__4556__auto___56526);
var G__56531 = (0);
seq__55973_56510 = G__56528;
chunk__55975_56511 = G__56529;
count__55976_56512 = G__56530;
i__55977_56513 = G__56531;
continue;
} else {
var child_56532 = cljs.core.first(seq__55973_56525__$1);
if(cljs.core.truth_(child_56532)){
node.appendChild(child_56532);


var G__56533 = cljs.core.next(seq__55973_56525__$1);
var G__56534 = null;
var G__56535 = (0);
var G__56536 = (0);
seq__55973_56510 = G__56533;
chunk__55975_56511 = G__56534;
count__55976_56512 = G__56535;
i__55977_56513 = G__56536;
continue;
} else {
var G__56537 = cljs.core.next(seq__55973_56525__$1);
var G__56538 = null;
var G__56539 = (0);
var G__56540 = (0);
seq__55973_56510 = G__56537;
chunk__55975_56511 = G__56538;
count__55976_56512 = G__56539;
i__55977_56513 = G__56540;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56509);
}
}


var G__56541 = seq__55936_56503;
var G__56542 = chunk__55938_56504;
var G__56543 = count__55939_56505;
var G__56544 = (i__55940_56506 + (1));
seq__55936_56503 = G__56541;
chunk__55938_56504 = G__56542;
count__55939_56505 = G__56543;
i__55940_56506 = G__56544;
continue;
} else {
var G__56546 = seq__55936_56503;
var G__56547 = chunk__55938_56504;
var G__56548 = count__55939_56505;
var G__56549 = (i__55940_56506 + (1));
seq__55936_56503 = G__56546;
chunk__55938_56504 = G__56547;
count__55939_56505 = G__56548;
i__55940_56506 = G__56549;
continue;
}
} else {
var temp__5735__auto___56550 = cljs.core.seq(seq__55936_56503);
if(temp__5735__auto___56550){
var seq__55936_56551__$1 = temp__5735__auto___56550;
if(cljs.core.chunked_seq_QMARK_(seq__55936_56551__$1)){
var c__4556__auto___56552 = cljs.core.chunk_first(seq__55936_56551__$1);
var G__56553 = cljs.core.chunk_rest(seq__55936_56551__$1);
var G__56554 = c__4556__auto___56552;
var G__56555 = cljs.core.count(c__4556__auto___56552);
var G__56556 = (0);
seq__55936_56503 = G__56553;
chunk__55938_56504 = G__56554;
count__55939_56505 = G__56555;
i__55940_56506 = G__56556;
continue;
} else {
var child_struct_56557 = cljs.core.first(seq__55936_56551__$1);
if((!((child_struct_56557 == null)))){
if(typeof child_struct_56557 === 'string'){
var text_56559 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56559),child_struct_56557].join(''));
} else {
var children_56561 = shadow.dom.svg_node(child_struct_56557);
if(cljs.core.seq_QMARK_(children_56561)){
var seq__55979_56562 = cljs.core.seq(children_56561);
var chunk__55981_56563 = null;
var count__55982_56564 = (0);
var i__55983_56565 = (0);
while(true){
if((i__55983_56565 < count__55982_56564)){
var child_56567 = chunk__55981_56563.cljs$core$IIndexed$_nth$arity$2(null,i__55983_56565);
if(cljs.core.truth_(child_56567)){
node.appendChild(child_56567);


var G__56569 = seq__55979_56562;
var G__56570 = chunk__55981_56563;
var G__56571 = count__55982_56564;
var G__56572 = (i__55983_56565 + (1));
seq__55979_56562 = G__56569;
chunk__55981_56563 = G__56570;
count__55982_56564 = G__56571;
i__55983_56565 = G__56572;
continue;
} else {
var G__56574 = seq__55979_56562;
var G__56575 = chunk__55981_56563;
var G__56576 = count__55982_56564;
var G__56577 = (i__55983_56565 + (1));
seq__55979_56562 = G__56574;
chunk__55981_56563 = G__56575;
count__55982_56564 = G__56576;
i__55983_56565 = G__56577;
continue;
}
} else {
var temp__5735__auto___56578__$1 = cljs.core.seq(seq__55979_56562);
if(temp__5735__auto___56578__$1){
var seq__55979_56579__$1 = temp__5735__auto___56578__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55979_56579__$1)){
var c__4556__auto___56580 = cljs.core.chunk_first(seq__55979_56579__$1);
var G__56581 = cljs.core.chunk_rest(seq__55979_56579__$1);
var G__56582 = c__4556__auto___56580;
var G__56583 = cljs.core.count(c__4556__auto___56580);
var G__56584 = (0);
seq__55979_56562 = G__56581;
chunk__55981_56563 = G__56582;
count__55982_56564 = G__56583;
i__55983_56565 = G__56584;
continue;
} else {
var child_56585 = cljs.core.first(seq__55979_56579__$1);
if(cljs.core.truth_(child_56585)){
node.appendChild(child_56585);


var G__56586 = cljs.core.next(seq__55979_56579__$1);
var G__56587 = null;
var G__56588 = (0);
var G__56589 = (0);
seq__55979_56562 = G__56586;
chunk__55981_56563 = G__56587;
count__55982_56564 = G__56588;
i__55983_56565 = G__56589;
continue;
} else {
var G__56590 = cljs.core.next(seq__55979_56579__$1);
var G__56591 = null;
var G__56592 = (0);
var G__56593 = (0);
seq__55979_56562 = G__56590;
chunk__55981_56563 = G__56591;
count__55982_56564 = G__56592;
i__55983_56565 = G__56593;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56561);
}
}


var G__56595 = cljs.core.next(seq__55936_56551__$1);
var G__56596 = null;
var G__56597 = (0);
var G__56598 = (0);
seq__55936_56503 = G__56595;
chunk__55938_56504 = G__56596;
count__55939_56505 = G__56597;
i__55940_56506 = G__56598;
continue;
} else {
var G__56599 = cljs.core.next(seq__55936_56551__$1);
var G__56600 = null;
var G__56601 = (0);
var G__56602 = (0);
seq__55936_56503 = G__56599;
chunk__55938_56504 = G__56600;
count__55939_56505 = G__56601;
i__55940_56506 = G__56602;
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
var len__4736__auto___56614 = arguments.length;
var i__4737__auto___56615 = (0);
while(true){
if((i__4737__auto___56615 < len__4736__auto___56614)){
args__4742__auto__.push((arguments[i__4737__auto___56615]));

var G__56616 = (i__4737__auto___56615 + (1));
i__4737__auto___56615 = G__56616;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq55992){
var G__55993 = cljs.core.first(seq55992);
var seq55992__$1 = cljs.core.next(seq55992);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55993,seq55992__$1);
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
var G__55997 = arguments.length;
switch (G__55997) {
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
var c__53396__auto___56621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_56011){
var state_val_56012 = (state_56011[(1)]);
if((state_val_56012 === (1))){
var state_56011__$1 = state_56011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56011__$1,(2),once_or_cleanup);
} else {
if((state_val_56012 === (2))){
var inst_56008 = (state_56011[(2)]);
var inst_56009 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56011__$1 = (function (){var statearr_56013 = state_56011;
(statearr_56013[(7)] = inst_56008);

return statearr_56013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56011__$1,inst_56009);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__53342__auto__ = null;
var shadow$dom$state_machine__53342__auto____0 = (function (){
var statearr_56014 = [null,null,null,null,null,null,null,null];
(statearr_56014[(0)] = shadow$dom$state_machine__53342__auto__);

(statearr_56014[(1)] = (1));

return statearr_56014;
});
var shadow$dom$state_machine__53342__auto____1 = (function (state_56011){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_56011);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e56016){var ex__53345__auto__ = e56016;
var statearr_56017_56628 = state_56011;
(statearr_56017_56628[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_56011[(4)]))){
var statearr_56019_56629 = state_56011;
(statearr_56019_56629[(1)] = cljs.core.first((state_56011[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56631 = state_56011;
state_56011 = G__56631;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
shadow$dom$state_machine__53342__auto__ = function(state_56011){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__53342__auto____0.call(this);
case 1:
return shadow$dom$state_machine__53342__auto____1.call(this,state_56011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__53342__auto____0;
shadow$dom$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__53342__auto____1;
return shadow$dom$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_56022 = f__53397__auto__();
(statearr_56022[(6)] = c__53396__auto___56621);

return statearr_56022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
