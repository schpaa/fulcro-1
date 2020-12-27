goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
/**
 * Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__60317 = arguments.length;
switch (G__60317) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__60318){
var map__60319 = p__60318;
var map__60319__$1 = (((((!((map__60319 == null))))?(((((map__60319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60319):map__60319);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__4126__auto__ = app__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__60324 = app__$2;
var G__60324__$1 = (((G__60324 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__60324));
var G__60324__$2 = (((G__60324__$1 == null))?null:cljs.core.deref(G__60324__$1));
if((G__60324__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__60324__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4115__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4115__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__60326_60512 = app__$2;
var G__60327_60513 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__60326_60512,G__60327_60513) : schedule_render_BANG_.call(null,G__60326_60512,G__60327_60513));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,441181341);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options."], null);
}),null)),null,87875104);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__60341 = arguments.length;
switch (G__60341) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__60345){
var map__60346 = p__60345;
var map__60346__$1 = (((((!((map__60346 == null))))?(((((map__60346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60346):map__60346);
var options = map__60346__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__4126__auto__ = app__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,1696940550);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options."], null);
}),null)),null,1507929917);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__60362 = app__$1;
var G__60362__$1 = (((G__60362 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__60362));
if((G__60362__$1 == null)){
return null;
} else {
return cljs.core.deref(G__60362__$1);
}
})();
var known_roots = (function (){var G__60365 = app__$1;
var G__60365__$1 = (((G__60365 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__60365));
var G__60365__$2 = (((G__60365__$1 == null))?null:cljs.core.deref(G__60365__$1));
if((G__60365__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__60365__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__60369 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__60371 = null;
var count__60372 = (0);
var i__60373 = (0);
while(true){
if((i__60373 < count__60372)){
var k = chunk__60371.cljs$core$IIndexed$_nth$arity$2(null,i__60373);
var cls_60536 = com.fulcrologic.fulcro.components.registry_key__GT_class(k);
var query_60537 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_60536,state_map);
var root_props_60538 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_60537,state_map,state_map);
var seq__60390_60541 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__60391_60542 = null;
var count__60392_60543 = (0);
var i__60393_60544 = (0);
while(true){
if((i__60393_60544 < count__60392_60543)){
var root_60546 = chunk__60391_60542.cljs$core$IIndexed$_nth$arity$2(null,i__60393_60544);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_60546,root_props_60538);


var G__60547 = seq__60390_60541;
var G__60548 = chunk__60391_60542;
var G__60549 = count__60392_60543;
var G__60550 = (i__60393_60544 + (1));
seq__60390_60541 = G__60547;
chunk__60391_60542 = G__60548;
count__60392_60543 = G__60549;
i__60393_60544 = G__60550;
continue;
} else {
var temp__5735__auto___60553 = cljs.core.seq(seq__60390_60541);
if(temp__5735__auto___60553){
var seq__60390_60554__$1 = temp__5735__auto___60553;
if(cljs.core.chunked_seq_QMARK_(seq__60390_60554__$1)){
var c__4556__auto___60555 = cljs.core.chunk_first(seq__60390_60554__$1);
var G__60556 = cljs.core.chunk_rest(seq__60390_60554__$1);
var G__60557 = c__4556__auto___60555;
var G__60558 = cljs.core.count(c__4556__auto___60555);
var G__60559 = (0);
seq__60390_60541 = G__60556;
chunk__60391_60542 = G__60557;
count__60392_60543 = G__60558;
i__60393_60544 = G__60559;
continue;
} else {
var root_60560 = cljs.core.first(seq__60390_60554__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_60560,root_props_60538);


var G__60561 = cljs.core.next(seq__60390_60554__$1);
var G__60562 = null;
var G__60563 = (0);
var G__60564 = (0);
seq__60390_60541 = G__60561;
chunk__60391_60542 = G__60562;
count__60392_60543 = G__60563;
i__60393_60544 = G__60564;
continue;
}
} else {
}
}
break;
}


var G__60565 = seq__60369;
var G__60566 = chunk__60371;
var G__60567 = count__60372;
var G__60568 = (i__60373 + (1));
seq__60369 = G__60565;
chunk__60371 = G__60566;
count__60372 = G__60567;
i__60373 = G__60568;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60369);
if(temp__5735__auto__){
var seq__60369__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60369__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60369__$1);
var G__60571 = cljs.core.chunk_rest(seq__60369__$1);
var G__60572 = c__4556__auto__;
var G__60573 = cljs.core.count(c__4556__auto__);
var G__60574 = (0);
seq__60369 = G__60571;
chunk__60371 = G__60572;
count__60372 = G__60573;
i__60373 = G__60574;
continue;
} else {
var k = cljs.core.first(seq__60369__$1);
var cls_60575 = com.fulcrologic.fulcro.components.registry_key__GT_class(k);
var query_60576 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_60575,state_map);
var root_props_60577 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_60576,state_map,state_map);
var seq__60396_60578 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__60397_60579 = null;
var count__60398_60580 = (0);
var i__60399_60581 = (0);
while(true){
if((i__60399_60581 < count__60398_60580)){
var root_60587 = chunk__60397_60579.cljs$core$IIndexed$_nth$arity$2(null,i__60399_60581);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_60587,root_props_60577);


var G__60588 = seq__60396_60578;
var G__60589 = chunk__60397_60579;
var G__60590 = count__60398_60580;
var G__60591 = (i__60399_60581 + (1));
seq__60396_60578 = G__60588;
chunk__60397_60579 = G__60589;
count__60398_60580 = G__60590;
i__60399_60581 = G__60591;
continue;
} else {
var temp__5735__auto___60592__$1 = cljs.core.seq(seq__60396_60578);
if(temp__5735__auto___60592__$1){
var seq__60396_60593__$1 = temp__5735__auto___60592__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60396_60593__$1)){
var c__4556__auto___60594 = cljs.core.chunk_first(seq__60396_60593__$1);
var G__60595 = cljs.core.chunk_rest(seq__60396_60593__$1);
var G__60596 = c__4556__auto___60594;
var G__60597 = cljs.core.count(c__4556__auto___60594);
var G__60598 = (0);
seq__60396_60578 = G__60595;
chunk__60397_60579 = G__60596;
count__60398_60580 = G__60597;
i__60399_60581 = G__60598;
continue;
} else {
var root_60600 = cljs.core.first(seq__60396_60593__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_60600,root_props_60577);


var G__60603 = cljs.core.next(seq__60396_60593__$1);
var G__60604 = null;
var G__60605 = (0);
var G__60606 = (0);
seq__60396_60578 = G__60603;
chunk__60397_60579 = G__60604;
count__60398_60580 = G__60605;
i__60399_60581 = G__60606;
continue;
}
} else {
}
}
break;
}


var G__60607 = cljs.core.next(seq__60369__$1);
var G__60608 = null;
var G__60609 = (0);
var G__60610 = (0);
seq__60369 = G__60607;
chunk__60371 = G__60608;
count__60372 = G__60609;
i__60373 = G__60610;
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
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__60407 = app__$1;
var map__60407__$1 = (((((!((map__60407 == null))))?(((((map__60407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60407):map__60407);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60408 = cljs.core.deref(runtime_atom);
var map__60408__$1 = (((((!((map__60408 == null))))?(((((map__60408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60408):map__60408);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60408__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__60414 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__60414__$1 = (((((!((map__60414 == null))))?(((((map__60414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60414):map__60414);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,true);
var seq__60419 = cljs.core.seq(limited_idents);
var chunk__60420 = null;
var count__60421 = (0);
var i__60422 = (0);
while(true){
if((i__60422 < count__60421)){
var i = chunk__60420.cljs$core$IIndexed$_nth$arity$2(null,i__60422);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__60617 = seq__60419;
var G__60618 = chunk__60420;
var G__60619 = count__60421;
var G__60620 = (i__60422 + (1));
seq__60419 = G__60617;
chunk__60420 = G__60618;
count__60421 = G__60619;
i__60422 = G__60620;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60419);
if(temp__5735__auto__){
var seq__60419__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60419__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60419__$1);
var G__60623 = cljs.core.chunk_rest(seq__60419__$1);
var G__60624 = c__4556__auto__;
var G__60625 = cljs.core.count(c__4556__auto__);
var G__60626 = (0);
seq__60419 = G__60623;
chunk__60420 = G__60624;
count__60421 = G__60625;
i__60422 = G__60626;
continue;
} else {
var i = cljs.core.first(seq__60419__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__60628 = cljs.core.next(seq__60419__$1);
var G__60629 = null;
var G__60630 = (0);
var G__60631 = (0);
seq__60419 = G__60628;
chunk__60420 = G__60629;
count__60421 = G__60630;
i__60422 = G__60631;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 *   This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 *   (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 *   will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 *   ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 *   events that should really only affect a known set of components (like the input field).
 * 
 *   This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__60427 = arguments.length;
switch (G__60427) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__60439){
var map__60440 = p__60439;
var map__60440__$1 = (((((!((map__60440 == null))))?(((((map__60440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60440):map__60440);
var options = map__60440__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60440__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60440__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4126__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e60448){var e = e60448;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1622129027);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
goog.object.extend(cls.prototype,React.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__60282__auto__ = (function (){var or__4126__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return fulcro_app;
}
})();
var d__60283__auto__ = (function (){var or__4126__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var _STAR_app_STAR__orig_val__60465 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__60466 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__60467 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_app_STAR__temp_val__60468 = app__60282__auto__;
var _STAR_shared_STAR__temp_val__60469 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__60282__auto__);
var _STAR_depth_STAR__temp_val__60470 = d__60283__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__60468);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__60469);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__60470);

try{var _STAR_denormalize_time_STAR__orig_val__60472 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__60473 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(fulcro_app)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__60473);

try{var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(UIRoot);
var state_map = (function (){var G__60474 = fulcro_app;
var G__60474__$1 = (((G__60474 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__60474));
if((G__60474__$1 == null)){
return null;
} else {
return cljs.core.deref(G__60474__$1);
}
})();
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__60475 = props;
var G__60476 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__60475,G__60476) : ui_root.call(null,G__60475,G__60476));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__60472);
}}finally {(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__60467);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__60466);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__60465);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__60482 = arguments.length;
switch (G__60482) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var _STAR_denormalize_time_STAR__orig_val__60490 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__60491 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__60491);

try{var state_map = (function (){var G__60493 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__60493__$1 = (((G__60493 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__60493));
if((G__60493__$1 == null)){
return null;
} else {
return cljs.core.deref(G__60493__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__60496 = (function (){var or__4126__auto__ = props;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__60497 = com.fulcrologic.fulcro.components.props(this$);
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__60496,G__60497) : ui_factory.call(null,G__60496,G__60497));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__60490);
}});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
