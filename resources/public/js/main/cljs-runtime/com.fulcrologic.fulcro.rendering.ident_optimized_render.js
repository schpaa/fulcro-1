goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4115__auto__ = c;
if(cljs.core.truth_(and__4115__auto__)){
return ident;
} else {
return and__4115__auto__;
}
})())){
var map__59267 = app__$1;
var map__59267__$1 = (((((!((map__59267 == null))))?(((((map__59267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59267):map__59267);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59267__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4126__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = com.fulcrologic.fulcro.components.computed(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident),prior_computed);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
}),null)),null,-2038422575);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1879931840);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__59269 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__59270 = null;
var count__59271 = (0);
var i__59272 = (0);
while(true){
if((i__59272 < count__59271)){
var c = chunk__59270.cljs$core$IIndexed$_nth$arity$2(null,i__59272);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59445 = seq__59269;
var G__59446 = chunk__59270;
var G__59447 = count__59271;
var G__59448 = (i__59272 + (1));
seq__59269 = G__59445;
chunk__59270 = G__59446;
count__59271 = G__59447;
i__59272 = G__59448;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59269);
if(temp__5735__auto__){
var seq__59269__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59269__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59269__$1);
var G__59449 = cljs.core.chunk_rest(seq__59269__$1);
var G__59450 = c__4556__auto__;
var G__59451 = cljs.core.count(c__4556__auto__);
var G__59452 = (0);
seq__59269 = G__59449;
chunk__59270 = G__59450;
count__59271 = G__59451;
i__59272 = G__59452;
continue;
} else {
var c = cljs.core.first(seq__59269__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59455 = cljs.core.next(seq__59269__$1);
var G__59456 = null;
var G__59457 = (0);
var G__59458 = (0);
seq__59269 = G__59455;
chunk__59270 = G__59456;
count__59271 = G__59457;
i__59272 = G__59458;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__59274 = app__$1;
var map__59274__$1 = (((((!((map__59274 == null))))?(((((map__59274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59274):map__59274);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59274__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59275 = cljs.core.deref(runtime_atom);
var map__59275__$1 = (((((!((map__59275 == null))))?(((((map__59275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59275):map__59275);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59275__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59276 = indexes;
var map__59276__$1 = (((((!((map__59276 == null))))?(((((map__59276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59276):map__59276);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59276__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59276__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59276__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4126__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__59286 = cljs.core.seq(classes);
var chunk__59287 = null;
var count__59288 = (0);
var i__59289 = (0);
while(true){
if((i__59289 < count__59288)){
var class$ = chunk__59287.cljs$core$IIndexed$_nth$arity$2(null,i__59289);
var seq__59319_59477 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59321_59478 = null;
var count__59322_59479 = (0);
var i__59323_59480 = (0);
while(true){
if((i__59323_59480 < count__59322_59479)){
var component_59484 = chunk__59321_59478.cljs$core$IIndexed$_nth$arity$2(null,i__59323_59480);
var component_ident_59486 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59484);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59486,component_59484);


var G__59487 = seq__59319_59477;
var G__59488 = chunk__59321_59478;
var G__59489 = count__59322_59479;
var G__59490 = (i__59323_59480 + (1));
seq__59319_59477 = G__59487;
chunk__59321_59478 = G__59488;
count__59322_59479 = G__59489;
i__59323_59480 = G__59490;
continue;
} else {
var temp__5735__auto___59492 = cljs.core.seq(seq__59319_59477);
if(temp__5735__auto___59492){
var seq__59319_59493__$1 = temp__5735__auto___59492;
if(cljs.core.chunked_seq_QMARK_(seq__59319_59493__$1)){
var c__4556__auto___59494 = cljs.core.chunk_first(seq__59319_59493__$1);
var G__59495 = cljs.core.chunk_rest(seq__59319_59493__$1);
var G__59496 = c__4556__auto___59494;
var G__59497 = cljs.core.count(c__4556__auto___59494);
var G__59498 = (0);
seq__59319_59477 = G__59495;
chunk__59321_59478 = G__59496;
count__59322_59479 = G__59497;
i__59323_59480 = G__59498;
continue;
} else {
var component_59499 = cljs.core.first(seq__59319_59493__$1);
var component_ident_59500 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59499);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59500,component_59499);


var G__59501 = cljs.core.next(seq__59319_59493__$1);
var G__59502 = null;
var G__59503 = (0);
var G__59504 = (0);
seq__59319_59477 = G__59501;
chunk__59321_59478 = G__59502;
count__59322_59479 = G__59503;
i__59323_59480 = G__59504;
continue;
}
} else {
}
}
break;
}


var G__59505 = seq__59286;
var G__59506 = chunk__59287;
var G__59507 = count__59288;
var G__59508 = (i__59289 + (1));
seq__59286 = G__59505;
chunk__59287 = G__59506;
count__59288 = G__59507;
i__59289 = G__59508;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59286);
if(temp__5735__auto__){
var seq__59286__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59286__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59286__$1);
var G__59509 = cljs.core.chunk_rest(seq__59286__$1);
var G__59510 = c__4556__auto__;
var G__59511 = cljs.core.count(c__4556__auto__);
var G__59512 = (0);
seq__59286 = G__59509;
chunk__59287 = G__59510;
count__59288 = G__59511;
i__59289 = G__59512;
continue;
} else {
var class$ = cljs.core.first(seq__59286__$1);
var seq__59339_59514 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59341_59515 = null;
var count__59342_59516 = (0);
var i__59343_59517 = (0);
while(true){
if((i__59343_59517 < count__59342_59516)){
var component_59518 = chunk__59341_59515.cljs$core$IIndexed$_nth$arity$2(null,i__59343_59517);
var component_ident_59519 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59518);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59519,component_59518);


var G__59520 = seq__59339_59514;
var G__59521 = chunk__59341_59515;
var G__59522 = count__59342_59516;
var G__59523 = (i__59343_59517 + (1));
seq__59339_59514 = G__59520;
chunk__59341_59515 = G__59521;
count__59342_59516 = G__59522;
i__59343_59517 = G__59523;
continue;
} else {
var temp__5735__auto___59526__$1 = cljs.core.seq(seq__59339_59514);
if(temp__5735__auto___59526__$1){
var seq__59339_59527__$1 = temp__5735__auto___59526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59339_59527__$1)){
var c__4556__auto___59528 = cljs.core.chunk_first(seq__59339_59527__$1);
var G__59529 = cljs.core.chunk_rest(seq__59339_59527__$1);
var G__59530 = c__4556__auto___59528;
var G__59531 = cljs.core.count(c__4556__auto___59528);
var G__59532 = (0);
seq__59339_59514 = G__59529;
chunk__59341_59515 = G__59530;
count__59342_59516 = G__59531;
i__59343_59517 = G__59532;
continue;
} else {
var component_59534 = cljs.core.first(seq__59339_59527__$1);
var component_ident_59536 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59534);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59536,component_59534);


var G__59537 = cljs.core.next(seq__59339_59527__$1);
var G__59538 = null;
var G__59539 = (0);
var G__59540 = (0);
seq__59339_59514 = G__59537;
chunk__59341_59515 = G__59538;
count__59342_59516 = G__59539;
i__59343_59517 = G__59540;
continue;
}
} else {
}
}
break;
}


var G__59543 = cljs.core.next(seq__59286__$1);
var G__59544 = null;
var G__59545 = (0);
var G__59546 = (0);
seq__59286 = G__59543;
chunk__59287 = G__59544;
count__59288 = G__59545;
i__59289 = G__59546;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__59357 = app__$1;
var map__59357__$1 = (((((!((map__59357 == null))))?(((((map__59357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59357):map__59357);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59357__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59358 = cljs.core.deref(runtime_atom);
var map__59358__$1 = (((((!((map__59358 == null))))?(((((map__59358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59358):map__59358);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59358__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59359 = indexes;
var map__59359__$1 = (((((!((map__59359 == null))))?(((((map__59359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59359):map__59359);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59359__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59359__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__59354_SHARP_,p2__59355_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__59354_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__59355_SHARP_) : class__GT_components.call(null,p2__59355_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__59372 = app__$1;
var map__59372__$1 = (((((!((map__59372 == null))))?(((((map__59372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59372):map__59372);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59372__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59372__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__59373 = cljs.core.deref(runtime_atom);
var map__59373__$1 = (((((!((map__59373 == null))))?(((((map__59373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59373):map__59373);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__59374 = indexes;
var map__59374__$1 = (((((!((map__59374 == null))))?(((((map__59374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59374):map__59374);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59374__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59374__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59374__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59374__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__59385 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__59385__$1 = (((((!((map__59385 == null))))?(((((map__59385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59385):map__59385);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59385__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59385__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__59388_59565 = cljs.core.seq(limited_to_render);
var chunk__59390_59566 = null;
var count__59391_59567 = (0);
var i__59392_59568 = (0);
while(true){
if((i__59392_59568 < count__59391_59567)){
var c_59569 = chunk__59390_59566.cljs$core$IIndexed$_nth$arity$2(null,i__59392_59568);
var ident_59570 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59569);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59570,c_59569);


var G__59573 = seq__59388_59565;
var G__59574 = chunk__59390_59566;
var G__59575 = count__59391_59567;
var G__59576 = (i__59392_59568 + (1));
seq__59388_59565 = G__59573;
chunk__59390_59566 = G__59574;
count__59391_59567 = G__59575;
i__59392_59568 = G__59576;
continue;
} else {
var temp__5735__auto___59577 = cljs.core.seq(seq__59388_59565);
if(temp__5735__auto___59577){
var seq__59388_59578__$1 = temp__5735__auto___59577;
if(cljs.core.chunked_seq_QMARK_(seq__59388_59578__$1)){
var c__4556__auto___59579 = cljs.core.chunk_first(seq__59388_59578__$1);
var G__59580 = cljs.core.chunk_rest(seq__59388_59578__$1);
var G__59581 = c__4556__auto___59579;
var G__59582 = cljs.core.count(c__4556__auto___59579);
var G__59583 = (0);
seq__59388_59565 = G__59580;
chunk__59390_59566 = G__59581;
count__59391_59567 = G__59582;
i__59392_59568 = G__59583;
continue;
} else {
var c_59585 = cljs.core.first(seq__59388_59578__$1);
var ident_59586 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59585);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59586,c_59585);


var G__59588 = cljs.core.next(seq__59388_59578__$1);
var G__59589 = null;
var G__59590 = (0);
var G__59591 = (0);
seq__59388_59565 = G__59588;
chunk__59390_59566 = G__59589;
count__59391_59567 = G__59590;
i__59392_59568 = G__59591;
continue;
}
} else {
}
}
break;
}

var seq__59398 = cljs.core.seq(limited_idents);
var chunk__59399 = null;
var count__59400 = (0);
var i__59401 = (0);
while(true){
if((i__59401 < count__59400)){
var i = chunk__59399.cljs$core$IIndexed$_nth$arity$2(null,i__59401);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59593 = seq__59398;
var G__59594 = chunk__59399;
var G__59595 = count__59400;
var G__59596 = (i__59401 + (1));
seq__59398 = G__59593;
chunk__59399 = G__59594;
count__59400 = G__59595;
i__59401 = G__59596;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59398);
if(temp__5735__auto__){
var seq__59398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59398__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59398__$1);
var G__59599 = cljs.core.chunk_rest(seq__59398__$1);
var G__59600 = c__4556__auto__;
var G__59601 = cljs.core.count(c__4556__auto__);
var G__59602 = (0);
seq__59398 = G__59599;
chunk__59399 = G__59600;
count__59400 = G__59601;
i__59401 = G__59602;
continue;
} else {
var i = cljs.core.first(seq__59398__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59604 = cljs.core.next(seq__59398__$1);
var G__59605 = null;
var G__59606 = (0);
var G__59607 = (0);
seq__59398 = G__59604;
chunk__59399 = G__59605;
count__59400 = G__59606;
i__59401 = G__59607;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4126__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__59405 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__59405__$1 = (((((!((map__59405 == null))))?(((((map__59405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59405):map__59405);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59405__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59405__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__59410_59612 = cljs.core.seq(all_idents);
var chunk__59411_59613 = null;
var count__59412_59614 = (0);
var i__59413_59615 = (0);
while(true){
if((i__59413_59615 < count__59412_59614)){
var i_59616 = chunk__59411_59613.cljs$core$IIndexed$_nth$arity$2(null,i__59413_59615);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59616);


var G__59617 = seq__59410_59612;
var G__59618 = chunk__59411_59613;
var G__59619 = count__59412_59614;
var G__59620 = (i__59413_59615 + (1));
seq__59410_59612 = G__59617;
chunk__59411_59613 = G__59618;
count__59412_59614 = G__59619;
i__59413_59615 = G__59620;
continue;
} else {
var temp__5735__auto___59621 = cljs.core.seq(seq__59410_59612);
if(temp__5735__auto___59621){
var seq__59410_59622__$1 = temp__5735__auto___59621;
if(cljs.core.chunked_seq_QMARK_(seq__59410_59622__$1)){
var c__4556__auto___59623 = cljs.core.chunk_first(seq__59410_59622__$1);
var G__59626 = cljs.core.chunk_rest(seq__59410_59622__$1);
var G__59627 = c__4556__auto___59623;
var G__59628 = cljs.core.count(c__4556__auto___59623);
var G__59629 = (0);
seq__59410_59612 = G__59626;
chunk__59411_59613 = G__59627;
count__59412_59614 = G__59628;
i__59413_59615 = G__59629;
continue;
} else {
var i_59630 = cljs.core.first(seq__59410_59622__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59630);


var G__59631 = cljs.core.next(seq__59410_59622__$1);
var G__59632 = null;
var G__59633 = (0);
var G__59634 = (0);
seq__59410_59612 = G__59631;
chunk__59411_59613 = G__59632;
count__59412_59614 = G__59633;
i__59413_59615 = G__59634;
continue;
}
} else {
}
}
break;
}

var seq__59422 = cljs.core.seq(extra_to_force);
var chunk__59423 = null;
var count__59424 = (0);
var i__59425 = (0);
while(true){
if((i__59425 < count__59424)){
var c = chunk__59423.cljs$core$IIndexed$_nth$arity$2(null,i__59425);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__59635 = seq__59422;
var G__59636 = chunk__59423;
var G__59637 = count__59424;
var G__59638 = (i__59425 + (1));
seq__59422 = G__59635;
chunk__59423 = G__59636;
count__59424 = G__59637;
i__59425 = G__59638;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59422);
if(temp__5735__auto__){
var seq__59422__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59422__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59422__$1);
var G__59639 = cljs.core.chunk_rest(seq__59422__$1);
var G__59640 = c__4556__auto__;
var G__59641 = cljs.core.count(c__4556__auto__);
var G__59642 = (0);
seq__59422 = G__59639;
chunk__59423 = G__59640;
count__59424 = G__59641;
i__59425 = G__59642;
continue;
} else {
var c = cljs.core.first(seq__59422__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__59643 = cljs.core.next(seq__59422__$1);
var G__59644 = null;
var G__59645 = (0);
var G__59646 = (0);
seq__59422 = G__59643;
chunk__59423 = G__59644;
count__59424 = G__59645;
i__59425 = G__59646;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__59432 = arguments.length;
switch (G__59432) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__59434){
var map__59436 = p__59434;
var map__59436__$1 = (((((!((map__59436 == null))))?(((((map__59436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59436):map__59436);
var options = map__59436__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59436__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59436__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4126__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e59439){var e = e59439;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,816538612);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
