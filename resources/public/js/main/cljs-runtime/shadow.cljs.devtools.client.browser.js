goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58211 = arguments.length;
var i__4737__auto___58212 = (0);
while(true){
if((i__4737__auto___58212 < len__4736__auto___58211)){
args__4742__auto__.push((arguments[i__4737__auto___58212]));

var G__58213 = (i__4737__auto___58212 + (1));
i__4737__auto___58212 = G__58213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq57876){
var G__57877 = cljs.core.first(seq57876);
var seq57876__$1 = cljs.core.next(seq57876);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57877,seq57876__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__57886 = cljs.core.seq(sources);
var chunk__57887 = null;
var count__57888 = (0);
var i__57889 = (0);
while(true){
if((i__57889 < count__57888)){
var map__57909 = chunk__57887.cljs$core$IIndexed$_nth$arity$2(null,i__57889);
var map__57909__$1 = (((((!((map__57909 == null))))?(((((map__57909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57909):map__57909);
var src = map__57909__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57909__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57909__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57909__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57909__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57911){var e_58219 = e57911;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58219);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58219.message)].join('')));
}

var G__58223 = seq__57886;
var G__58224 = chunk__57887;
var G__58225 = count__57888;
var G__58226 = (i__57889 + (1));
seq__57886 = G__58223;
chunk__57887 = G__58224;
count__57888 = G__58225;
i__57889 = G__58226;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57886);
if(temp__5735__auto__){
var seq__57886__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57886__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57886__$1);
var G__58230 = cljs.core.chunk_rest(seq__57886__$1);
var G__58231 = c__4556__auto__;
var G__58232 = cljs.core.count(c__4556__auto__);
var G__58233 = (0);
seq__57886 = G__58230;
chunk__57887 = G__58231;
count__57888 = G__58232;
i__57889 = G__58233;
continue;
} else {
var map__57912 = cljs.core.first(seq__57886__$1);
var map__57912__$1 = (((((!((map__57912 == null))))?(((((map__57912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57912):map__57912);
var src = map__57912__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57912__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57912__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57912__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57912__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57917){var e_58236 = e57917;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58236);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58236.message)].join('')));
}

var G__58237 = cljs.core.next(seq__57886__$1);
var G__58238 = null;
var G__58239 = (0);
var G__58240 = (0);
seq__57886 = G__58237;
chunk__57887 = G__58238;
count__57888 = G__58239;
i__57889 = G__58240;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__57921 = cljs.core.seq(js_requires);
var chunk__57922 = null;
var count__57923 = (0);
var i__57924 = (0);
while(true){
if((i__57924 < count__57923)){
var js_ns = chunk__57922.cljs$core$IIndexed$_nth$arity$2(null,i__57924);
var require_str_58243 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58243);


var G__58244 = seq__57921;
var G__58245 = chunk__57922;
var G__58246 = count__57923;
var G__58247 = (i__57924 + (1));
seq__57921 = G__58244;
chunk__57922 = G__58245;
count__57923 = G__58246;
i__57924 = G__58247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57921);
if(temp__5735__auto__){
var seq__57921__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57921__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57921__$1);
var G__58249 = cljs.core.chunk_rest(seq__57921__$1);
var G__58250 = c__4556__auto__;
var G__58251 = cljs.core.count(c__4556__auto__);
var G__58252 = (0);
seq__57921 = G__58249;
chunk__57922 = G__58250;
count__57923 = G__58251;
i__57924 = G__58252;
continue;
} else {
var js_ns = cljs.core.first(seq__57921__$1);
var require_str_58253 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58253);


var G__58255 = cljs.core.next(seq__57921__$1);
var G__58256 = null;
var G__58257 = (0);
var G__58258 = (0);
seq__57921 = G__58255;
chunk__57922 = G__58256;
count__57923 = G__58257;
i__57924 = G__58258;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__57937){
var map__57938 = p__57937;
var map__57938__$1 = (((((!((map__57938 == null))))?(((((map__57938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57938):map__57938);
var msg = map__57938__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57938__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57938__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57940(s__57941){
return (new cljs.core.LazySeq(null,(function (){
var s__57941__$1 = s__57941;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57941__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__57947 = cljs.core.first(xs__6292__auto__);
var map__57947__$1 = (((((!((map__57947 == null))))?(((((map__57947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57947):map__57947);
var src = map__57947__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57947__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57947__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__57941__$1,map__57947,map__57947__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__57938,map__57938__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57940_$_iter__57942(s__57943){
return (new cljs.core.LazySeq(null,((function (s__57941__$1,map__57947,map__57947__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__57938,map__57938__$1,msg,info,reload_info){
return (function (){
var s__57943__$1 = s__57943;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57943__$1);
if(temp__5735__auto____$1){
var s__57943__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57943__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57943__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57945 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57944 = (0);
while(true){
if((i__57944 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__57944);
cljs.core.chunk_append(b__57945,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58265 = (i__57944 + (1));
i__57944 = G__58265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57945),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57940_$_iter__57942(cljs.core.chunk_rest(s__57943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57945),null);
}
} else {
var warning = cljs.core.first(s__57943__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57940_$_iter__57942(cljs.core.rest(s__57943__$2)));
}
} else {
return null;
}
break;
}
});})(s__57941__$1,map__57947,map__57947__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__57938,map__57938__$1,msg,info,reload_info))
,null,null));
});})(s__57941__$1,map__57947,map__57947__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__57938,map__57938__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57940(cljs.core.rest(s__57941__$1)));
} else {
var G__58266 = cljs.core.rest(s__57941__$1);
s__57941__$1 = G__58266;
continue;
}
} else {
var G__58267 = cljs.core.rest(s__57941__$1);
s__57941__$1 = G__58267;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__57952_58269 = cljs.core.seq(warnings);
var chunk__57953_58270 = null;
var count__57954_58271 = (0);
var i__57955_58272 = (0);
while(true){
if((i__57955_58272 < count__57954_58271)){
var map__57960_58273 = chunk__57953_58270.cljs$core$IIndexed$_nth$arity$2(null,i__57955_58272);
var map__57960_58274__$1 = (((((!((map__57960_58273 == null))))?(((((map__57960_58273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57960_58273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57960_58273):map__57960_58273);
var w_58275 = map__57960_58274__$1;
var msg_58276__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57960_58274__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57960_58274__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57960_58274__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57960_58274__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58279)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58277),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58278),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58276__$1)].join(''));


var G__58280 = seq__57952_58269;
var G__58281 = chunk__57953_58270;
var G__58282 = count__57954_58271;
var G__58283 = (i__57955_58272 + (1));
seq__57952_58269 = G__58280;
chunk__57953_58270 = G__58281;
count__57954_58271 = G__58282;
i__57955_58272 = G__58283;
continue;
} else {
var temp__5735__auto___58286 = cljs.core.seq(seq__57952_58269);
if(temp__5735__auto___58286){
var seq__57952_58287__$1 = temp__5735__auto___58286;
if(cljs.core.chunked_seq_QMARK_(seq__57952_58287__$1)){
var c__4556__auto___58288 = cljs.core.chunk_first(seq__57952_58287__$1);
var G__58289 = cljs.core.chunk_rest(seq__57952_58287__$1);
var G__58290 = c__4556__auto___58288;
var G__58291 = cljs.core.count(c__4556__auto___58288);
var G__58292 = (0);
seq__57952_58269 = G__58289;
chunk__57953_58270 = G__58290;
count__57954_58271 = G__58291;
i__57955_58272 = G__58292;
continue;
} else {
var map__57963_58293 = cljs.core.first(seq__57952_58287__$1);
var map__57963_58294__$1 = (((((!((map__57963_58293 == null))))?(((((map__57963_58293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57963_58293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57963_58293):map__57963_58293);
var w_58295 = map__57963_58294__$1;
var msg_58297__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57963_58294__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57963_58294__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57963_58294__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57963_58294__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58300)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58298),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58299),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58297__$1)].join(''));


var G__58302 = cljs.core.next(seq__57952_58287__$1);
var G__58303 = null;
var G__58304 = (0);
var G__58305 = (0);
seq__57952_58269 = G__58302;
chunk__57953_58270 = G__58303;
count__57954_58271 = G__58304;
i__57955_58272 = G__58305;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__57934_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__57934_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__57966){
var map__57967 = p__57966;
var map__57967__$1 = (((((!((map__57967 == null))))?(((((map__57967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57967):map__57967);
var msg = map__57967__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57967__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__57969 = cljs.core.seq(updates);
var chunk__57971 = null;
var count__57972 = (0);
var i__57973 = (0);
while(true){
if((i__57973 < count__57972)){
var path = chunk__57971.cljs$core$IIndexed$_nth$arity$2(null,i__57973);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58020_58314 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58024_58315 = null;
var count__58025_58316 = (0);
var i__58026_58317 = (0);
while(true){
if((i__58026_58317 < count__58025_58316)){
var node_58320 = chunk__58024_58315.cljs$core$IIndexed$_nth$arity$2(null,i__58026_58317);
if(cljs.core.not(node_58320.shadow$old)){
var path_match_58322 = shadow.cljs.devtools.client.browser.match_paths(node_58320.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58322)){
var new_link_58323 = (function (){var G__58047 = node_58320.cloneNode(true);
G__58047.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58322),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58047;
})();
(node_58320.shadow$old = true);

(new_link_58323.onload = ((function (seq__58020_58314,chunk__58024_58315,count__58025_58316,i__58026_58317,seq__57969,chunk__57971,count__57972,i__57973,new_link_58323,path_match_58322,node_58320,path,map__57967,map__57967__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58320);
});})(seq__58020_58314,chunk__58024_58315,count__58025_58316,i__58026_58317,seq__57969,chunk__57971,count__57972,i__57973,new_link_58323,path_match_58322,node_58320,path,map__57967,map__57967__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58322], 0));

goog.dom.insertSiblingAfter(new_link_58323,node_58320);


var G__58325 = seq__58020_58314;
var G__58326 = chunk__58024_58315;
var G__58327 = count__58025_58316;
var G__58328 = (i__58026_58317 + (1));
seq__58020_58314 = G__58325;
chunk__58024_58315 = G__58326;
count__58025_58316 = G__58327;
i__58026_58317 = G__58328;
continue;
} else {
var G__58329 = seq__58020_58314;
var G__58330 = chunk__58024_58315;
var G__58331 = count__58025_58316;
var G__58332 = (i__58026_58317 + (1));
seq__58020_58314 = G__58329;
chunk__58024_58315 = G__58330;
count__58025_58316 = G__58331;
i__58026_58317 = G__58332;
continue;
}
} else {
var G__58333 = seq__58020_58314;
var G__58334 = chunk__58024_58315;
var G__58335 = count__58025_58316;
var G__58336 = (i__58026_58317 + (1));
seq__58020_58314 = G__58333;
chunk__58024_58315 = G__58334;
count__58025_58316 = G__58335;
i__58026_58317 = G__58336;
continue;
}
} else {
var temp__5735__auto___58337 = cljs.core.seq(seq__58020_58314);
if(temp__5735__auto___58337){
var seq__58020_58338__$1 = temp__5735__auto___58337;
if(cljs.core.chunked_seq_QMARK_(seq__58020_58338__$1)){
var c__4556__auto___58339 = cljs.core.chunk_first(seq__58020_58338__$1);
var G__58340 = cljs.core.chunk_rest(seq__58020_58338__$1);
var G__58341 = c__4556__auto___58339;
var G__58342 = cljs.core.count(c__4556__auto___58339);
var G__58343 = (0);
seq__58020_58314 = G__58340;
chunk__58024_58315 = G__58341;
count__58025_58316 = G__58342;
i__58026_58317 = G__58343;
continue;
} else {
var node_58344 = cljs.core.first(seq__58020_58338__$1);
if(cljs.core.not(node_58344.shadow$old)){
var path_match_58345 = shadow.cljs.devtools.client.browser.match_paths(node_58344.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58345)){
var new_link_58347 = (function (){var G__58053 = node_58344.cloneNode(true);
G__58053.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58345),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58053;
})();
(node_58344.shadow$old = true);

(new_link_58347.onload = ((function (seq__58020_58314,chunk__58024_58315,count__58025_58316,i__58026_58317,seq__57969,chunk__57971,count__57972,i__57973,new_link_58347,path_match_58345,node_58344,seq__58020_58338__$1,temp__5735__auto___58337,path,map__57967,map__57967__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58344);
});})(seq__58020_58314,chunk__58024_58315,count__58025_58316,i__58026_58317,seq__57969,chunk__57971,count__57972,i__57973,new_link_58347,path_match_58345,node_58344,seq__58020_58338__$1,temp__5735__auto___58337,path,map__57967,map__57967__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58345], 0));

goog.dom.insertSiblingAfter(new_link_58347,node_58344);


var G__58348 = cljs.core.next(seq__58020_58338__$1);
var G__58349 = null;
var G__58350 = (0);
var G__58351 = (0);
seq__58020_58314 = G__58348;
chunk__58024_58315 = G__58349;
count__58025_58316 = G__58350;
i__58026_58317 = G__58351;
continue;
} else {
var G__58352 = cljs.core.next(seq__58020_58338__$1);
var G__58353 = null;
var G__58354 = (0);
var G__58355 = (0);
seq__58020_58314 = G__58352;
chunk__58024_58315 = G__58353;
count__58025_58316 = G__58354;
i__58026_58317 = G__58355;
continue;
}
} else {
var G__58357 = cljs.core.next(seq__58020_58338__$1);
var G__58358 = null;
var G__58359 = (0);
var G__58360 = (0);
seq__58020_58314 = G__58357;
chunk__58024_58315 = G__58358;
count__58025_58316 = G__58359;
i__58026_58317 = G__58360;
continue;
}
}
} else {
}
}
break;
}


var G__58361 = seq__57969;
var G__58362 = chunk__57971;
var G__58363 = count__57972;
var G__58364 = (i__57973 + (1));
seq__57969 = G__58361;
chunk__57971 = G__58362;
count__57972 = G__58363;
i__57973 = G__58364;
continue;
} else {
var G__58365 = seq__57969;
var G__58366 = chunk__57971;
var G__58367 = count__57972;
var G__58368 = (i__57973 + (1));
seq__57969 = G__58365;
chunk__57971 = G__58366;
count__57972 = G__58367;
i__57973 = G__58368;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57969);
if(temp__5735__auto__){
var seq__57969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57969__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57969__$1);
var G__58370 = cljs.core.chunk_rest(seq__57969__$1);
var G__58371 = c__4556__auto__;
var G__58372 = cljs.core.count(c__4556__auto__);
var G__58373 = (0);
seq__57969 = G__58370;
chunk__57971 = G__58371;
count__57972 = G__58372;
i__57973 = G__58373;
continue;
} else {
var path = cljs.core.first(seq__57969__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58055_58375 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58059_58376 = null;
var count__58060_58377 = (0);
var i__58061_58378 = (0);
while(true){
if((i__58061_58378 < count__58060_58377)){
var node_58379 = chunk__58059_58376.cljs$core$IIndexed$_nth$arity$2(null,i__58061_58378);
if(cljs.core.not(node_58379.shadow$old)){
var path_match_58380 = shadow.cljs.devtools.client.browser.match_paths(node_58379.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58380)){
var new_link_58381 = (function (){var G__58089 = node_58379.cloneNode(true);
G__58089.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58380),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58089;
})();
(node_58379.shadow$old = true);

(new_link_58381.onload = ((function (seq__58055_58375,chunk__58059_58376,count__58060_58377,i__58061_58378,seq__57969,chunk__57971,count__57972,i__57973,new_link_58381,path_match_58380,node_58379,path,seq__57969__$1,temp__5735__auto__,map__57967,map__57967__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58379);
});})(seq__58055_58375,chunk__58059_58376,count__58060_58377,i__58061_58378,seq__57969,chunk__57971,count__57972,i__57973,new_link_58381,path_match_58380,node_58379,path,seq__57969__$1,temp__5735__auto__,map__57967,map__57967__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58380], 0));

goog.dom.insertSiblingAfter(new_link_58381,node_58379);


var G__58384 = seq__58055_58375;
var G__58385 = chunk__58059_58376;
var G__58386 = count__58060_58377;
var G__58387 = (i__58061_58378 + (1));
seq__58055_58375 = G__58384;
chunk__58059_58376 = G__58385;
count__58060_58377 = G__58386;
i__58061_58378 = G__58387;
continue;
} else {
var G__58389 = seq__58055_58375;
var G__58390 = chunk__58059_58376;
var G__58391 = count__58060_58377;
var G__58392 = (i__58061_58378 + (1));
seq__58055_58375 = G__58389;
chunk__58059_58376 = G__58390;
count__58060_58377 = G__58391;
i__58061_58378 = G__58392;
continue;
}
} else {
var G__58393 = seq__58055_58375;
var G__58394 = chunk__58059_58376;
var G__58395 = count__58060_58377;
var G__58396 = (i__58061_58378 + (1));
seq__58055_58375 = G__58393;
chunk__58059_58376 = G__58394;
count__58060_58377 = G__58395;
i__58061_58378 = G__58396;
continue;
}
} else {
var temp__5735__auto___58398__$1 = cljs.core.seq(seq__58055_58375);
if(temp__5735__auto___58398__$1){
var seq__58055_58399__$1 = temp__5735__auto___58398__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58055_58399__$1)){
var c__4556__auto___58400 = cljs.core.chunk_first(seq__58055_58399__$1);
var G__58401 = cljs.core.chunk_rest(seq__58055_58399__$1);
var G__58402 = c__4556__auto___58400;
var G__58403 = cljs.core.count(c__4556__auto___58400);
var G__58404 = (0);
seq__58055_58375 = G__58401;
chunk__58059_58376 = G__58402;
count__58060_58377 = G__58403;
i__58061_58378 = G__58404;
continue;
} else {
var node_58405 = cljs.core.first(seq__58055_58399__$1);
if(cljs.core.not(node_58405.shadow$old)){
var path_match_58407 = shadow.cljs.devtools.client.browser.match_paths(node_58405.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58407)){
var new_link_58408 = (function (){var G__58094 = node_58405.cloneNode(true);
G__58094.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58407),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58094;
})();
(node_58405.shadow$old = true);

(new_link_58408.onload = ((function (seq__58055_58375,chunk__58059_58376,count__58060_58377,i__58061_58378,seq__57969,chunk__57971,count__57972,i__57973,new_link_58408,path_match_58407,node_58405,seq__58055_58399__$1,temp__5735__auto___58398__$1,path,seq__57969__$1,temp__5735__auto__,map__57967,map__57967__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58405);
});})(seq__58055_58375,chunk__58059_58376,count__58060_58377,i__58061_58378,seq__57969,chunk__57971,count__57972,i__57973,new_link_58408,path_match_58407,node_58405,seq__58055_58399__$1,temp__5735__auto___58398__$1,path,seq__57969__$1,temp__5735__auto__,map__57967,map__57967__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58407], 0));

goog.dom.insertSiblingAfter(new_link_58408,node_58405);


var G__58411 = cljs.core.next(seq__58055_58399__$1);
var G__58412 = null;
var G__58413 = (0);
var G__58414 = (0);
seq__58055_58375 = G__58411;
chunk__58059_58376 = G__58412;
count__58060_58377 = G__58413;
i__58061_58378 = G__58414;
continue;
} else {
var G__58415 = cljs.core.next(seq__58055_58399__$1);
var G__58416 = null;
var G__58417 = (0);
var G__58418 = (0);
seq__58055_58375 = G__58415;
chunk__58059_58376 = G__58416;
count__58060_58377 = G__58417;
i__58061_58378 = G__58418;
continue;
}
} else {
var G__58419 = cljs.core.next(seq__58055_58399__$1);
var G__58420 = null;
var G__58421 = (0);
var G__58422 = (0);
seq__58055_58375 = G__58419;
chunk__58059_58376 = G__58420;
count__58060_58377 = G__58421;
i__58061_58378 = G__58422;
continue;
}
}
} else {
}
}
break;
}


var G__58424 = cljs.core.next(seq__57969__$1);
var G__58425 = null;
var G__58426 = (0);
var G__58427 = (0);
seq__57969 = G__58424;
chunk__57971 = G__58425;
count__57972 = G__58426;
i__57973 = G__58427;
continue;
} else {
var G__58428 = cljs.core.next(seq__57969__$1);
var G__58429 = null;
var G__58430 = (0);
var G__58431 = (0);
seq__57969 = G__58428;
chunk__57971 = G__58429;
count__57972 = G__58430;
i__57973 = G__58431;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__58113){
var map__58116 = p__58113;
var map__58116__$1 = (((((!((map__58116 == null))))?(((((map__58116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58116):map__58116);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58116__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__58127){
var map__58128 = p__58127;
var map__58128__$1 = (((((!((map__58128 == null))))?(((((map__58128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58128):map__58128);
var _ = map__58128__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__58132,done,error){
var map__58133 = p__58132;
var map__58133__$1 = (((((!((map__58133 == null))))?(((((map__58133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58133):map__58133);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__58138,done,error){
var map__58139 = p__58138;
var map__58139__$1 = (((((!((map__58139 == null))))?(((((map__58139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58139):map__58139);
var msg = map__58139__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58149){
var map__58151 = p__58149;
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var src = map__58151__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__58166 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__58166) : done.call(null,G__58166));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__58167){
var map__58168 = p__58167;
var map__58168__$1 = (((((!((map__58168 == null))))?(((((map__58168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58168):map__58168);
var msg__$1 = map__58168__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e58170){var ex = e58170;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__58173){
var map__58174 = p__58173;
var map__58174__$1 = (((((!((map__58174 == null))))?(((((map__58174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58174):map__58174);
var env = map__58174__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58174__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__58188){
var map__58189 = p__58188;
var map__58189__$1 = (((((!((map__58189 == null))))?(((((map__58189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58189):map__58189);
var msg = map__58189__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__58197){
var map__58198 = p__58197;
var map__58198__$1 = (((((!((map__58198 == null))))?(((((map__58198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58198):map__58198);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__58202){
var map__58203 = p__58202;
var map__58203__$1 = (((((!((map__58203 == null))))?(((((map__58203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58203):map__58203);
var svc = map__58203__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
