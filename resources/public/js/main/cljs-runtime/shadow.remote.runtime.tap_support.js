goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__57068,p__57069){
var map__57070 = p__57068;
var map__57070__$1 = (((((!((map__57070 == null))))?(((((map__57070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57070):map__57070);
var svc = map__57070__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57070__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57070__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57070__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__57071 = p__57069;
var map__57071__$1 = (((((!((map__57071 == null))))?(((((map__57071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57071):map__57071);
var msg = map__57071__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57071__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57071__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57071__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57071__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__57084,p__57085){
var map__57086 = p__57084;
var map__57086__$1 = (((((!((map__57086 == null))))?(((((map__57086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57086):map__57086);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57086__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__57087 = p__57085;
var map__57087__$1 = (((((!((map__57087 == null))))?(((((map__57087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57087):map__57087);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57087__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__57096,p__57097){
var map__57098 = p__57096;
var map__57098__$1 = (((((!((map__57098 == null))))?(((((map__57098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57098):map__57098);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57098__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57098__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__57100 = p__57097;
var map__57100__$1 = (((((!((map__57100 == null))))?(((((map__57100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57100):map__57100);
var msg = map__57100__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57100__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__57114,tid){
var map__57117 = p__57114;
var map__57117__$1 = (((((!((map__57117 == null))))?(((((map__57117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57117):map__57117);
var svc = map__57117__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57117__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__57137 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__57138 = null;
var count__57139 = (0);
var i__57140 = (0);
while(true){
if((i__57140 < count__57139)){
var vec__57157 = chunk__57138.cljs$core$IIndexed$_nth$arity$2(null,i__57140);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57157,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57157,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57249 = seq__57137;
var G__57250 = chunk__57138;
var G__57251 = count__57139;
var G__57252 = (i__57140 + (1));
seq__57137 = G__57249;
chunk__57138 = G__57250;
count__57139 = G__57251;
i__57140 = G__57252;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57137);
if(temp__5735__auto__){
var seq__57137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57137__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57137__$1);
var G__57254 = cljs.core.chunk_rest(seq__57137__$1);
var G__57255 = c__4556__auto__;
var G__57256 = cljs.core.count(c__4556__auto__);
var G__57257 = (0);
seq__57137 = G__57254;
chunk__57138 = G__57255;
count__57139 = G__57256;
i__57140 = G__57257;
continue;
} else {
var vec__57172 = cljs.core.first(seq__57137__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57172,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57172,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57262 = cljs.core.next(seq__57137__$1);
var G__57263 = null;
var G__57264 = (0);
var G__57265 = (0);
seq__57137 = G__57262;
chunk__57138 = G__57263;
count__57139 = G__57264;
i__57140 = G__57265;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__57121_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__57121_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__57122_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__57122_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__57123_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__57123_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__57124_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__57124_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__57183){
var map__57188 = p__57183;
var map__57188__$1 = (((((!((map__57188 == null))))?(((((map__57188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57188):map__57188);
var svc = map__57188__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57188__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57188__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
