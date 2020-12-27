goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58032 = arguments.length;
var i__4737__auto___58033 = (0);
while(true){
if((i__4737__auto___58033 < len__4736__auto___58032)){
args__4742__auto__.push((arguments[i__4737__auto___58033]));

var G__58034 = (i__4737__auto___58033 + (1));
i__4737__auto___58033 = G__58034;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq57835){
var G__57836 = cljs.core.first(seq57835);
var seq57835__$1 = cljs.core.next(seq57835);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57836,seq57835__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__57837 = cljs.core.seq(sources);
var chunk__57838 = null;
var count__57839 = (0);
var i__57840 = (0);
while(true){
if((i__57840 < count__57839)){
var map__57847 = chunk__57838.cljs$core$IIndexed$_nth$arity$2(null,i__57840);
var map__57847__$1 = (((((!((map__57847 == null))))?(((((map__57847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57847):map__57847);
var src = map__57847__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57847__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57847__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57847__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57847__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57849){var e_58038 = e57849;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58038);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58038.message)].join('')));
}

var G__58039 = seq__57837;
var G__58040 = chunk__57838;
var G__58041 = count__57839;
var G__58042 = (i__57840 + (1));
seq__57837 = G__58039;
chunk__57838 = G__58040;
count__57839 = G__58041;
i__57840 = G__58042;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57837);
if(temp__5735__auto__){
var seq__57837__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57837__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57837__$1);
var G__58043 = cljs.core.chunk_rest(seq__57837__$1);
var G__58044 = c__4556__auto__;
var G__58045 = cljs.core.count(c__4556__auto__);
var G__58046 = (0);
seq__57837 = G__58043;
chunk__57838 = G__58044;
count__57839 = G__58045;
i__57840 = G__58046;
continue;
} else {
var map__57850 = cljs.core.first(seq__57837__$1);
var map__57850__$1 = (((((!((map__57850 == null))))?(((((map__57850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57850):map__57850);
var src = map__57850__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57852){var e_58047 = e57852;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58047);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58047.message)].join('')));
}

var G__58048 = cljs.core.next(seq__57837__$1);
var G__58049 = null;
var G__58050 = (0);
var G__58051 = (0);
seq__57837 = G__58048;
chunk__57838 = G__58049;
count__57839 = G__58050;
i__57840 = G__58051;
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
var seq__57853 = cljs.core.seq(js_requires);
var chunk__57854 = null;
var count__57855 = (0);
var i__57856 = (0);
while(true){
if((i__57856 < count__57855)){
var js_ns = chunk__57854.cljs$core$IIndexed$_nth$arity$2(null,i__57856);
var require_str_58055 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58055);


var G__58056 = seq__57853;
var G__58057 = chunk__57854;
var G__58058 = count__57855;
var G__58059 = (i__57856 + (1));
seq__57853 = G__58056;
chunk__57854 = G__58057;
count__57855 = G__58058;
i__57856 = G__58059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57853);
if(temp__5735__auto__){
var seq__57853__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57853__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57853__$1);
var G__58060 = cljs.core.chunk_rest(seq__57853__$1);
var G__58061 = c__4556__auto__;
var G__58062 = cljs.core.count(c__4556__auto__);
var G__58063 = (0);
seq__57853 = G__58060;
chunk__57854 = G__58061;
count__57855 = G__58062;
i__57856 = G__58063;
continue;
} else {
var js_ns = cljs.core.first(seq__57853__$1);
var require_str_58064 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58064);


var G__58065 = cljs.core.next(seq__57853__$1);
var G__58066 = null;
var G__58067 = (0);
var G__58068 = (0);
seq__57853 = G__58065;
chunk__57854 = G__58066;
count__57855 = G__58067;
i__57856 = G__58068;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__57858){
var map__57859 = p__57858;
var map__57859__$1 = (((((!((map__57859 == null))))?(((((map__57859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57859):map__57859);
var msg = map__57859__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57859__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57859__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57861(s__57862){
return (new cljs.core.LazySeq(null,(function (){
var s__57862__$1 = s__57862;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57862__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__57870 = cljs.core.first(xs__6292__auto__);
var map__57870__$1 = (((((!((map__57870 == null))))?(((((map__57870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57870):map__57870);
var src = map__57870__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57870__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57870__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__57862__$1,map__57870,map__57870__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__57859,map__57859__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57861_$_iter__57863(s__57864){
return (new cljs.core.LazySeq(null,((function (s__57862__$1,map__57870,map__57870__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__57859,map__57859__$1,msg,info,reload_info){
return (function (){
var s__57864__$1 = s__57864;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57864__$1);
if(temp__5735__auto____$1){
var s__57864__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57864__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57864__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57866 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57865 = (0);
while(true){
if((i__57865 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__57865);
cljs.core.chunk_append(b__57866,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58074 = (i__57865 + (1));
i__57865 = G__58074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57866),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57861_$_iter__57863(cljs.core.chunk_rest(s__57864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57866),null);
}
} else {
var warning = cljs.core.first(s__57864__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57861_$_iter__57863(cljs.core.rest(s__57864__$2)));
}
} else {
return null;
}
break;
}
});})(s__57862__$1,map__57870,map__57870__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__57859,map__57859__$1,msg,info,reload_info))
,null,null));
});})(s__57862__$1,map__57870,map__57870__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__57859,map__57859__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57861(cljs.core.rest(s__57862__$1)));
} else {
var G__58078 = cljs.core.rest(s__57862__$1);
s__57862__$1 = G__58078;
continue;
}
} else {
var G__58079 = cljs.core.rest(s__57862__$1);
s__57862__$1 = G__58079;
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
var seq__57873_58080 = cljs.core.seq(warnings);
var chunk__57874_58081 = null;
var count__57875_58082 = (0);
var i__57876_58083 = (0);
while(true){
if((i__57876_58083 < count__57875_58082)){
var map__57883_58084 = chunk__57874_58081.cljs$core$IIndexed$_nth$arity$2(null,i__57876_58083);
var map__57883_58085__$1 = (((((!((map__57883_58084 == null))))?(((((map__57883_58084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57883_58084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57883_58084):map__57883_58084);
var w_58086 = map__57883_58085__$1;
var msg_58087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57883_58085__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57883_58085__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57883_58085__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57883_58085__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58090)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58088),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58089),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58087__$1)].join(''));


var G__58091 = seq__57873_58080;
var G__58092 = chunk__57874_58081;
var G__58093 = count__57875_58082;
var G__58094 = (i__57876_58083 + (1));
seq__57873_58080 = G__58091;
chunk__57874_58081 = G__58092;
count__57875_58082 = G__58093;
i__57876_58083 = G__58094;
continue;
} else {
var temp__5735__auto___58098 = cljs.core.seq(seq__57873_58080);
if(temp__5735__auto___58098){
var seq__57873_58099__$1 = temp__5735__auto___58098;
if(cljs.core.chunked_seq_QMARK_(seq__57873_58099__$1)){
var c__4556__auto___58100 = cljs.core.chunk_first(seq__57873_58099__$1);
var G__58101 = cljs.core.chunk_rest(seq__57873_58099__$1);
var G__58102 = c__4556__auto___58100;
var G__58103 = cljs.core.count(c__4556__auto___58100);
var G__58104 = (0);
seq__57873_58080 = G__58101;
chunk__57874_58081 = G__58102;
count__57875_58082 = G__58103;
i__57876_58083 = G__58104;
continue;
} else {
var map__57885_58105 = cljs.core.first(seq__57873_58099__$1);
var map__57885_58106__$1 = (((((!((map__57885_58105 == null))))?(((((map__57885_58105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57885_58105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57885_58105):map__57885_58105);
var w_58107 = map__57885_58106__$1;
var msg_58108__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57885_58106__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57885_58106__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57885_58106__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57885_58106__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58111)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58109),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58110),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58108__$1)].join(''));


var G__58113 = cljs.core.next(seq__57873_58099__$1);
var G__58114 = null;
var G__58115 = (0);
var G__58116 = (0);
seq__57873_58080 = G__58113;
chunk__57874_58081 = G__58114;
count__57875_58082 = G__58115;
i__57876_58083 = G__58116;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__57857_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__57857_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__57889){
var map__57890 = p__57889;
var map__57890__$1 = (((((!((map__57890 == null))))?(((((map__57890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57890):map__57890);
var msg = map__57890__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57890__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__57892 = cljs.core.seq(updates);
var chunk__57894 = null;
var count__57895 = (0);
var i__57896 = (0);
while(true){
if((i__57896 < count__57895)){
var path = chunk__57894.cljs$core$IIndexed$_nth$arity$2(null,i__57896);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57938_58120 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57942_58121 = null;
var count__57943_58122 = (0);
var i__57944_58123 = (0);
while(true){
if((i__57944_58123 < count__57943_58122)){
var node_58124 = chunk__57942_58121.cljs$core$IIndexed$_nth$arity$2(null,i__57944_58123);
if(cljs.core.not(node_58124.shadow$old)){
var path_match_58125 = shadow.cljs.devtools.client.browser.match_paths(node_58124.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58125)){
var new_link_58126 = (function (){var G__57951 = node_58124.cloneNode(true);
G__57951.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58125),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57951;
})();
(node_58124.shadow$old = true);

(new_link_58126.onload = ((function (seq__57938_58120,chunk__57942_58121,count__57943_58122,i__57944_58123,seq__57892,chunk__57894,count__57895,i__57896,new_link_58126,path_match_58125,node_58124,path,map__57890,map__57890__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58124);
});})(seq__57938_58120,chunk__57942_58121,count__57943_58122,i__57944_58123,seq__57892,chunk__57894,count__57895,i__57896,new_link_58126,path_match_58125,node_58124,path,map__57890,map__57890__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58125], 0));

goog.dom.insertSiblingAfter(new_link_58126,node_58124);


var G__58128 = seq__57938_58120;
var G__58129 = chunk__57942_58121;
var G__58130 = count__57943_58122;
var G__58131 = (i__57944_58123 + (1));
seq__57938_58120 = G__58128;
chunk__57942_58121 = G__58129;
count__57943_58122 = G__58130;
i__57944_58123 = G__58131;
continue;
} else {
var G__58133 = seq__57938_58120;
var G__58134 = chunk__57942_58121;
var G__58135 = count__57943_58122;
var G__58136 = (i__57944_58123 + (1));
seq__57938_58120 = G__58133;
chunk__57942_58121 = G__58134;
count__57943_58122 = G__58135;
i__57944_58123 = G__58136;
continue;
}
} else {
var G__58137 = seq__57938_58120;
var G__58138 = chunk__57942_58121;
var G__58139 = count__57943_58122;
var G__58140 = (i__57944_58123 + (1));
seq__57938_58120 = G__58137;
chunk__57942_58121 = G__58138;
count__57943_58122 = G__58139;
i__57944_58123 = G__58140;
continue;
}
} else {
var temp__5735__auto___58141 = cljs.core.seq(seq__57938_58120);
if(temp__5735__auto___58141){
var seq__57938_58142__$1 = temp__5735__auto___58141;
if(cljs.core.chunked_seq_QMARK_(seq__57938_58142__$1)){
var c__4556__auto___58143 = cljs.core.chunk_first(seq__57938_58142__$1);
var G__58144 = cljs.core.chunk_rest(seq__57938_58142__$1);
var G__58145 = c__4556__auto___58143;
var G__58146 = cljs.core.count(c__4556__auto___58143);
var G__58147 = (0);
seq__57938_58120 = G__58144;
chunk__57942_58121 = G__58145;
count__57943_58122 = G__58146;
i__57944_58123 = G__58147;
continue;
} else {
var node_58148 = cljs.core.first(seq__57938_58142__$1);
if(cljs.core.not(node_58148.shadow$old)){
var path_match_58149 = shadow.cljs.devtools.client.browser.match_paths(node_58148.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58149)){
var new_link_58150 = (function (){var G__57952 = node_58148.cloneNode(true);
G__57952.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58149),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57952;
})();
(node_58148.shadow$old = true);

(new_link_58150.onload = ((function (seq__57938_58120,chunk__57942_58121,count__57943_58122,i__57944_58123,seq__57892,chunk__57894,count__57895,i__57896,new_link_58150,path_match_58149,node_58148,seq__57938_58142__$1,temp__5735__auto___58141,path,map__57890,map__57890__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58148);
});})(seq__57938_58120,chunk__57942_58121,count__57943_58122,i__57944_58123,seq__57892,chunk__57894,count__57895,i__57896,new_link_58150,path_match_58149,node_58148,seq__57938_58142__$1,temp__5735__auto___58141,path,map__57890,map__57890__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58149], 0));

goog.dom.insertSiblingAfter(new_link_58150,node_58148);


var G__58153 = cljs.core.next(seq__57938_58142__$1);
var G__58154 = null;
var G__58155 = (0);
var G__58156 = (0);
seq__57938_58120 = G__58153;
chunk__57942_58121 = G__58154;
count__57943_58122 = G__58155;
i__57944_58123 = G__58156;
continue;
} else {
var G__58157 = cljs.core.next(seq__57938_58142__$1);
var G__58158 = null;
var G__58159 = (0);
var G__58160 = (0);
seq__57938_58120 = G__58157;
chunk__57942_58121 = G__58158;
count__57943_58122 = G__58159;
i__57944_58123 = G__58160;
continue;
}
} else {
var G__58161 = cljs.core.next(seq__57938_58142__$1);
var G__58162 = null;
var G__58163 = (0);
var G__58164 = (0);
seq__57938_58120 = G__58161;
chunk__57942_58121 = G__58162;
count__57943_58122 = G__58163;
i__57944_58123 = G__58164;
continue;
}
}
} else {
}
}
break;
}


var G__58165 = seq__57892;
var G__58166 = chunk__57894;
var G__58167 = count__57895;
var G__58168 = (i__57896 + (1));
seq__57892 = G__58165;
chunk__57894 = G__58166;
count__57895 = G__58167;
i__57896 = G__58168;
continue;
} else {
var G__58169 = seq__57892;
var G__58170 = chunk__57894;
var G__58171 = count__57895;
var G__58172 = (i__57896 + (1));
seq__57892 = G__58169;
chunk__57894 = G__58170;
count__57895 = G__58171;
i__57896 = G__58172;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57892);
if(temp__5735__auto__){
var seq__57892__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57892__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57892__$1);
var G__58173 = cljs.core.chunk_rest(seq__57892__$1);
var G__58174 = c__4556__auto__;
var G__58175 = cljs.core.count(c__4556__auto__);
var G__58176 = (0);
seq__57892 = G__58173;
chunk__57894 = G__58174;
count__57895 = G__58175;
i__57896 = G__58176;
continue;
} else {
var path = cljs.core.first(seq__57892__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57953_58177 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57957_58178 = null;
var count__57958_58179 = (0);
var i__57959_58180 = (0);
while(true){
if((i__57959_58180 < count__57958_58179)){
var node_58181 = chunk__57957_58178.cljs$core$IIndexed$_nth$arity$2(null,i__57959_58180);
if(cljs.core.not(node_58181.shadow$old)){
var path_match_58182 = shadow.cljs.devtools.client.browser.match_paths(node_58181.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58182)){
var new_link_58183 = (function (){var G__57966 = node_58181.cloneNode(true);
G__57966.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58182),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57966;
})();
(node_58181.shadow$old = true);

(new_link_58183.onload = ((function (seq__57953_58177,chunk__57957_58178,count__57958_58179,i__57959_58180,seq__57892,chunk__57894,count__57895,i__57896,new_link_58183,path_match_58182,node_58181,path,seq__57892__$1,temp__5735__auto__,map__57890,map__57890__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58181);
});})(seq__57953_58177,chunk__57957_58178,count__57958_58179,i__57959_58180,seq__57892,chunk__57894,count__57895,i__57896,new_link_58183,path_match_58182,node_58181,path,seq__57892__$1,temp__5735__auto__,map__57890,map__57890__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58182], 0));

goog.dom.insertSiblingAfter(new_link_58183,node_58181);


var G__58184 = seq__57953_58177;
var G__58185 = chunk__57957_58178;
var G__58186 = count__57958_58179;
var G__58187 = (i__57959_58180 + (1));
seq__57953_58177 = G__58184;
chunk__57957_58178 = G__58185;
count__57958_58179 = G__58186;
i__57959_58180 = G__58187;
continue;
} else {
var G__58188 = seq__57953_58177;
var G__58189 = chunk__57957_58178;
var G__58190 = count__57958_58179;
var G__58191 = (i__57959_58180 + (1));
seq__57953_58177 = G__58188;
chunk__57957_58178 = G__58189;
count__57958_58179 = G__58190;
i__57959_58180 = G__58191;
continue;
}
} else {
var G__58192 = seq__57953_58177;
var G__58193 = chunk__57957_58178;
var G__58194 = count__57958_58179;
var G__58195 = (i__57959_58180 + (1));
seq__57953_58177 = G__58192;
chunk__57957_58178 = G__58193;
count__57958_58179 = G__58194;
i__57959_58180 = G__58195;
continue;
}
} else {
var temp__5735__auto___58196__$1 = cljs.core.seq(seq__57953_58177);
if(temp__5735__auto___58196__$1){
var seq__57953_58197__$1 = temp__5735__auto___58196__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57953_58197__$1)){
var c__4556__auto___58198 = cljs.core.chunk_first(seq__57953_58197__$1);
var G__58199 = cljs.core.chunk_rest(seq__57953_58197__$1);
var G__58200 = c__4556__auto___58198;
var G__58201 = cljs.core.count(c__4556__auto___58198);
var G__58202 = (0);
seq__57953_58177 = G__58199;
chunk__57957_58178 = G__58200;
count__57958_58179 = G__58201;
i__57959_58180 = G__58202;
continue;
} else {
var node_58203 = cljs.core.first(seq__57953_58197__$1);
if(cljs.core.not(node_58203.shadow$old)){
var path_match_58204 = shadow.cljs.devtools.client.browser.match_paths(node_58203.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58204)){
var new_link_58205 = (function (){var G__57968 = node_58203.cloneNode(true);
G__57968.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58204),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57968;
})();
(node_58203.shadow$old = true);

(new_link_58205.onload = ((function (seq__57953_58177,chunk__57957_58178,count__57958_58179,i__57959_58180,seq__57892,chunk__57894,count__57895,i__57896,new_link_58205,path_match_58204,node_58203,seq__57953_58197__$1,temp__5735__auto___58196__$1,path,seq__57892__$1,temp__5735__auto__,map__57890,map__57890__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58203);
});})(seq__57953_58177,chunk__57957_58178,count__57958_58179,i__57959_58180,seq__57892,chunk__57894,count__57895,i__57896,new_link_58205,path_match_58204,node_58203,seq__57953_58197__$1,temp__5735__auto___58196__$1,path,seq__57892__$1,temp__5735__auto__,map__57890,map__57890__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58204], 0));

goog.dom.insertSiblingAfter(new_link_58205,node_58203);


var G__58206 = cljs.core.next(seq__57953_58197__$1);
var G__58207 = null;
var G__58208 = (0);
var G__58209 = (0);
seq__57953_58177 = G__58206;
chunk__57957_58178 = G__58207;
count__57958_58179 = G__58208;
i__57959_58180 = G__58209;
continue;
} else {
var G__58210 = cljs.core.next(seq__57953_58197__$1);
var G__58211 = null;
var G__58212 = (0);
var G__58213 = (0);
seq__57953_58177 = G__58210;
chunk__57957_58178 = G__58211;
count__57958_58179 = G__58212;
i__57959_58180 = G__58213;
continue;
}
} else {
var G__58214 = cljs.core.next(seq__57953_58197__$1);
var G__58215 = null;
var G__58216 = (0);
var G__58217 = (0);
seq__57953_58177 = G__58214;
chunk__57957_58178 = G__58215;
count__57958_58179 = G__58216;
i__57959_58180 = G__58217;
continue;
}
}
} else {
}
}
break;
}


var G__58218 = cljs.core.next(seq__57892__$1);
var G__58219 = null;
var G__58220 = (0);
var G__58221 = (0);
seq__57892 = G__58218;
chunk__57894 = G__58219;
count__57895 = G__58220;
i__57896 = G__58221;
continue;
} else {
var G__58222 = cljs.core.next(seq__57892__$1);
var G__58223 = null;
var G__58224 = (0);
var G__58225 = (0);
seq__57892 = G__58222;
chunk__57894 = G__58223;
count__57895 = G__58224;
i__57896 = G__58225;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__57969){
var map__57970 = p__57969;
var map__57970__$1 = (((((!((map__57970 == null))))?(((((map__57970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57970):map__57970);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57970__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__57982){
var map__57983 = p__57982;
var map__57983__$1 = (((((!((map__57983 == null))))?(((((map__57983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57983):map__57983);
var _ = map__57983__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57983__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__57985,done,error){
var map__57986 = p__57985;
var map__57986__$1 = (((((!((map__57986 == null))))?(((((map__57986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57986):map__57986);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57986__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__57990,done,error){
var map__57991 = p__57990;
var map__57991__$1 = (((((!((map__57991 == null))))?(((((map__57991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57991):map__57991);
var msg = map__57991__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__57993){
var map__57994 = p__57993;
var map__57994__$1 = (((((!((map__57994 == null))))?(((((map__57994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57994):map__57994);
var src = map__57994__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57994__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__57996 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__57996) : done.call(null,G__57996));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__57997){
var map__57998 = p__57997;
var map__57998__$1 = (((((!((map__57998 == null))))?(((((map__57998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57998):map__57998);
var msg__$1 = map__57998__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e58013){var ex = e58013;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__58014){
var map__58015 = p__58014;
var map__58015__$1 = (((((!((map__58015 == null))))?(((((map__58015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58015):map__58015);
var env = map__58015__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58015__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__58017){
var map__58018 = p__58017;
var map__58018__$1 = (((((!((map__58018 == null))))?(((((map__58018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58018):map__58018);
var msg = map__58018__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58018__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__58023){
var map__58024 = p__58023;
var map__58024__$1 = (((((!((map__58024 == null))))?(((((map__58024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58024):map__58024);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58024__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58024__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__58026){
var map__58027 = p__58026;
var map__58027__$1 = (((((!((map__58027 == null))))?(((((map__58027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58027):map__58027);
var svc = map__58027__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58027__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
