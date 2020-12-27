goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__65165){
var map__65166 = p__65165;
var map__65166__$1 = (((((!((map__65166 == null))))?(((((map__65166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65166):map__65166);
var m = map__65166__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65166__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__65168_65269 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65169_65270 = null;
var count__65170_65271 = (0);
var i__65171_65272 = (0);
while(true){
if((i__65171_65272 < count__65170_65271)){
var f_65273 = chunk__65169_65270.cljs$core$IIndexed$_nth$arity$2(null,i__65171_65272);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_65273], 0));


var G__65274 = seq__65168_65269;
var G__65275 = chunk__65169_65270;
var G__65276 = count__65170_65271;
var G__65277 = (i__65171_65272 + (1));
seq__65168_65269 = G__65274;
chunk__65169_65270 = G__65275;
count__65170_65271 = G__65276;
i__65171_65272 = G__65277;
continue;
} else {
var temp__5735__auto___65278 = cljs.core.seq(seq__65168_65269);
if(temp__5735__auto___65278){
var seq__65168_65279__$1 = temp__5735__auto___65278;
if(cljs.core.chunked_seq_QMARK_(seq__65168_65279__$1)){
var c__4556__auto___65280 = cljs.core.chunk_first(seq__65168_65279__$1);
var G__65281 = cljs.core.chunk_rest(seq__65168_65279__$1);
var G__65282 = c__4556__auto___65280;
var G__65283 = cljs.core.count(c__4556__auto___65280);
var G__65284 = (0);
seq__65168_65269 = G__65281;
chunk__65169_65270 = G__65282;
count__65170_65271 = G__65283;
i__65171_65272 = G__65284;
continue;
} else {
var f_65285 = cljs.core.first(seq__65168_65279__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_65285], 0));


var G__65286 = cljs.core.next(seq__65168_65279__$1);
var G__65287 = null;
var G__65288 = (0);
var G__65289 = (0);
seq__65168_65269 = G__65286;
chunk__65169_65270 = G__65287;
count__65170_65271 = G__65288;
i__65171_65272 = G__65289;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_65290 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_65290], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_65290)))?cljs.core.second(arglists_65290):arglists_65290)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__65172_65291 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65173_65292 = null;
var count__65174_65293 = (0);
var i__65175_65294 = (0);
while(true){
if((i__65175_65294 < count__65174_65293)){
var vec__65186_65295 = chunk__65173_65292.cljs$core$IIndexed$_nth$arity$2(null,i__65175_65294);
var name_65296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65186_65295,(0),null);
var map__65189_65297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65186_65295,(1),null);
var map__65189_65298__$1 = (((((!((map__65189_65297 == null))))?(((((map__65189_65297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65189_65297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65189_65297):map__65189_65297);
var doc_65299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65189_65298__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_65300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65189_65298__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_65296], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_65300], 0));

if(cljs.core.truth_(doc_65299)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_65299], 0));
} else {
}


var G__65301 = seq__65172_65291;
var G__65302 = chunk__65173_65292;
var G__65303 = count__65174_65293;
var G__65304 = (i__65175_65294 + (1));
seq__65172_65291 = G__65301;
chunk__65173_65292 = G__65302;
count__65174_65293 = G__65303;
i__65175_65294 = G__65304;
continue;
} else {
var temp__5735__auto___65305 = cljs.core.seq(seq__65172_65291);
if(temp__5735__auto___65305){
var seq__65172_65306__$1 = temp__5735__auto___65305;
if(cljs.core.chunked_seq_QMARK_(seq__65172_65306__$1)){
var c__4556__auto___65307 = cljs.core.chunk_first(seq__65172_65306__$1);
var G__65308 = cljs.core.chunk_rest(seq__65172_65306__$1);
var G__65309 = c__4556__auto___65307;
var G__65310 = cljs.core.count(c__4556__auto___65307);
var G__65311 = (0);
seq__65172_65291 = G__65308;
chunk__65173_65292 = G__65309;
count__65174_65293 = G__65310;
i__65175_65294 = G__65311;
continue;
} else {
var vec__65191_65312 = cljs.core.first(seq__65172_65306__$1);
var name_65313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65191_65312,(0),null);
var map__65194_65314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65191_65312,(1),null);
var map__65194_65315__$1 = (((((!((map__65194_65314 == null))))?(((((map__65194_65314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65194_65314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65194_65314):map__65194_65314);
var doc_65316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65194_65315__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_65317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65194_65315__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_65313], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_65317], 0));

if(cljs.core.truth_(doc_65316)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_65316], 0));
} else {
}


var G__65318 = cljs.core.next(seq__65172_65306__$1);
var G__65319 = null;
var G__65320 = (0);
var G__65321 = (0);
seq__65172_65291 = G__65318;
chunk__65173_65292 = G__65319;
count__65174_65293 = G__65320;
i__65175_65294 = G__65321;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__65196 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__65197 = null;
var count__65198 = (0);
var i__65199 = (0);
while(true){
if((i__65199 < count__65198)){
var role = chunk__65197.cljs$core$IIndexed$_nth$arity$2(null,i__65199);
var temp__5735__auto___65322__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___65322__$1)){
var spec_65323 = temp__5735__auto___65322__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_65323)], 0));
} else {
}


var G__65324 = seq__65196;
var G__65325 = chunk__65197;
var G__65326 = count__65198;
var G__65327 = (i__65199 + (1));
seq__65196 = G__65324;
chunk__65197 = G__65325;
count__65198 = G__65326;
i__65199 = G__65327;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__65196);
if(temp__5735__auto____$1){
var seq__65196__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__65196__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65196__$1);
var G__65328 = cljs.core.chunk_rest(seq__65196__$1);
var G__65329 = c__4556__auto__;
var G__65330 = cljs.core.count(c__4556__auto__);
var G__65331 = (0);
seq__65196 = G__65328;
chunk__65197 = G__65329;
count__65198 = G__65330;
i__65199 = G__65331;
continue;
} else {
var role = cljs.core.first(seq__65196__$1);
var temp__5735__auto___65332__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___65332__$2)){
var spec_65333 = temp__5735__auto___65332__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_65333)], 0));
} else {
}


var G__65334 = cljs.core.next(seq__65196__$1);
var G__65335 = null;
var G__65336 = (0);
var G__65337 = (0);
seq__65196 = G__65334;
chunk__65197 = G__65335;
count__65198 = G__65336;
i__65199 = G__65337;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__65338 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__65339 = cljs.core.ex_cause(t);
via = G__65338;
t = G__65339;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__65202 = datafied_throwable;
var map__65202__$1 = (((((!((map__65202 == null))))?(((((map__65202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65202):map__65202);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65202__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65202__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65202__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__65203 = cljs.core.last(via);
var map__65203__$1 = (((((!((map__65203 == null))))?(((((map__65203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65203):map__65203);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__65204 = data;
var map__65204__$1 = (((((!((map__65204 == null))))?(((((map__65204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65204):map__65204);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65204__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65204__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65204__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__65205 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__65205__$1 = (((((!((map__65205 == null))))?(((((map__65205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65205):map__65205);
var top_data = map__65205__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65205__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__65210 = phase;
var G__65210__$1 = (((G__65210 instanceof cljs.core.Keyword))?G__65210.fqn:null);
switch (G__65210__$1) {
case "read-source":
var map__65211 = data;
var map__65211__$1 = (((((!((map__65211 == null))))?(((((map__65211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65211):map__65211);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65211__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65211__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__65213 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__65213__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65213,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__65213);
var G__65213__$2 = (cljs.core.truth_((function (){var fexpr__65214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__65214.cljs$core$IFn$_invoke$arity$1 ? fexpr__65214.cljs$core$IFn$_invoke$arity$1(source) : fexpr__65214.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__65213__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__65213__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65213__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__65213__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__65215 = top_data;
var G__65215__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65215,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__65215);
var G__65215__$2 = (cljs.core.truth_((function (){var fexpr__65216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__65216.cljs$core$IFn$_invoke$arity$1 ? fexpr__65216.cljs$core$IFn$_invoke$arity$1(source) : fexpr__65216.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__65215__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__65215__$1);
var G__65215__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65215__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__65215__$2);
var G__65215__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65215__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__65215__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65215__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__65215__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__65217 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65217,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65217,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65217,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65217,(3),null);
var G__65220 = top_data;
var G__65220__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65220,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__65220);
var G__65220__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65220__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__65220__$1);
var G__65220__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65220__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__65220__$2);
var G__65220__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65220__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__65220__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65220__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__65220__$4;
}

break;
case "execution":
var vec__65221 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65221,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65221,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65221,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65221,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__65201_SHARP_){
var or__4126__auto__ = (p1__65201_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__65225 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__65225.cljs$core$IFn$_invoke$arity$1 ? fexpr__65225.cljs$core$IFn$_invoke$arity$1(p1__65201_SHARP_) : fexpr__65225.call(null,p1__65201_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__65226 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__65226__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65226,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__65226);
var G__65226__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65226__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__65226__$1);
var G__65226__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65226__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__65226__$2);
var G__65226__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65226__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__65226__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65226__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__65226__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65210__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__65229){
var map__65230 = p__65229;
var map__65230__$1 = (((((!((map__65230 == null))))?(((((map__65230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65230):map__65230);
var triage_data = map__65230__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__65232 = phase;
var G__65232__$1 = (((G__65232 instanceof cljs.core.Keyword))?G__65232.fqn:null);
switch (G__65232__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__65233 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__65234 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65235 = loc;
var G__65236 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__65237_65342 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__65238_65343 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__65239_65344 = true;
var _STAR_print_fn_STAR__temp_val__65240_65345 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65239_65344);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65240_65345);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65227_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__65227_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65238_65343);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65237_65342);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__65233,G__65234,G__65235,G__65236) : format.call(null,G__65233,G__65234,G__65235,G__65236));

break;
case "macroexpansion":
var G__65241 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__65242 = cause_type;
var G__65243 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65244 = loc;
var G__65245 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__65241,G__65242,G__65243,G__65244,G__65245) : format.call(null,G__65241,G__65242,G__65243,G__65244,G__65245));

break;
case "compile-syntax-check":
var G__65246 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__65247 = cause_type;
var G__65248 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65249 = loc;
var G__65250 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__65246,G__65247,G__65248,G__65249,G__65250) : format.call(null,G__65246,G__65247,G__65248,G__65249,G__65250));

break;
case "compilation":
var G__65251 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__65252 = cause_type;
var G__65253 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65254 = loc;
var G__65255 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__65251,G__65252,G__65253,G__65254,G__65255) : format.call(null,G__65251,G__65252,G__65253,G__65254,G__65255));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__65256 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__65257 = symbol;
var G__65258 = loc;
var G__65259 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__65260_65346 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__65261_65347 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__65262_65348 = true;
var _STAR_print_fn_STAR__temp_val__65263_65349 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65262_65348);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65263_65349);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65228_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__65228_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65261_65347);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65260_65346);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__65256,G__65257,G__65258,G__65259) : format.call(null,G__65256,G__65257,G__65258,G__65259));
} else {
var G__65264 = "Execution error%s at %s(%s).\n%s\n";
var G__65265 = cause_type;
var G__65266 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__65267 = loc;
var G__65268 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__65264,G__65265,G__65266,G__65267,G__65268) : format.call(null,G__65264,G__65265,G__65266,G__65267,G__65268));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65232__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
