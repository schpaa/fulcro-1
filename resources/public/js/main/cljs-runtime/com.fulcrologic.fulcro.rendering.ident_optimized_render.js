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
var map__60280 = app__$1;
var map__60280__$1 = (((((!((map__60280 == null))))?(((((map__60280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60280):map__60280);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60280__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
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
}),null)),null,-655478156);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-596468776);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__60287 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__60288 = null;
var count__60289 = (0);
var i__60290 = (0);
while(true){
if((i__60290 < count__60289)){
var c = chunk__60288.cljs$core$IIndexed$_nth$arity$2(null,i__60290);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__60633 = seq__60287;
var G__60634 = chunk__60288;
var G__60635 = count__60289;
var G__60636 = (i__60290 + (1));
seq__60287 = G__60633;
chunk__60288 = G__60634;
count__60289 = G__60635;
i__60290 = G__60636;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60287);
if(temp__5735__auto__){
var seq__60287__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60287__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60287__$1);
var G__60637 = cljs.core.chunk_rest(seq__60287__$1);
var G__60638 = c__4556__auto__;
var G__60639 = cljs.core.count(c__4556__auto__);
var G__60640 = (0);
seq__60287 = G__60637;
chunk__60288 = G__60638;
count__60289 = G__60639;
i__60290 = G__60640;
continue;
} else {
var c = cljs.core.first(seq__60287__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__60643 = cljs.core.next(seq__60287__$1);
var G__60644 = null;
var G__60645 = (0);
var G__60646 = (0);
seq__60287 = G__60643;
chunk__60288 = G__60644;
count__60289 = G__60645;
i__60290 = G__60646;
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

var map__60296 = app__$1;
var map__60296__$1 = (((((!((map__60296 == null))))?(((((map__60296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60296):map__60296);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60296__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60297 = cljs.core.deref(runtime_atom);
var map__60297__$1 = (((((!((map__60297 == null))))?(((((map__60297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60297):map__60297);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60297__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__60298 = indexes;
var map__60298__$1 = (((((!((map__60298 == null))))?(((((map__60298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60298):map__60298);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__60305 = cljs.core.seq(classes);
var chunk__60306 = null;
var count__60307 = (0);
var i__60308 = (0);
while(true){
if((i__60308 < count__60307)){
var class$ = chunk__60306.cljs$core$IIndexed$_nth$arity$2(null,i__60308);
var seq__60330_60667 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__60332_60668 = null;
var count__60333_60669 = (0);
var i__60334_60670 = (0);
while(true){
if((i__60334_60670 < count__60333_60669)){
var component_60671 = chunk__60332_60668.cljs$core$IIndexed$_nth$arity$2(null,i__60334_60670);
var component_ident_60672 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_60671);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_60672,component_60671);


var G__60673 = seq__60330_60667;
var G__60674 = chunk__60332_60668;
var G__60675 = count__60333_60669;
var G__60676 = (i__60334_60670 + (1));
seq__60330_60667 = G__60673;
chunk__60332_60668 = G__60674;
count__60333_60669 = G__60675;
i__60334_60670 = G__60676;
continue;
} else {
var temp__5735__auto___60677 = cljs.core.seq(seq__60330_60667);
if(temp__5735__auto___60677){
var seq__60330_60678__$1 = temp__5735__auto___60677;
if(cljs.core.chunked_seq_QMARK_(seq__60330_60678__$1)){
var c__4556__auto___60679 = cljs.core.chunk_first(seq__60330_60678__$1);
var G__60680 = cljs.core.chunk_rest(seq__60330_60678__$1);
var G__60681 = c__4556__auto___60679;
var G__60682 = cljs.core.count(c__4556__auto___60679);
var G__60683 = (0);
seq__60330_60667 = G__60680;
chunk__60332_60668 = G__60681;
count__60333_60669 = G__60682;
i__60334_60670 = G__60683;
continue;
} else {
var component_60684 = cljs.core.first(seq__60330_60678__$1);
var component_ident_60724 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_60684);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_60724,component_60684);


var G__60725 = cljs.core.next(seq__60330_60678__$1);
var G__60726 = null;
var G__60727 = (0);
var G__60728 = (0);
seq__60330_60667 = G__60725;
chunk__60332_60668 = G__60726;
count__60333_60669 = G__60727;
i__60334_60670 = G__60728;
continue;
}
} else {
}
}
break;
}


var G__60729 = seq__60305;
var G__60730 = chunk__60306;
var G__60731 = count__60307;
var G__60732 = (i__60308 + (1));
seq__60305 = G__60729;
chunk__60306 = G__60730;
count__60307 = G__60731;
i__60308 = G__60732;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60305);
if(temp__5735__auto__){
var seq__60305__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60305__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60305__$1);
var G__60733 = cljs.core.chunk_rest(seq__60305__$1);
var G__60734 = c__4556__auto__;
var G__60735 = cljs.core.count(c__4556__auto__);
var G__60736 = (0);
seq__60305 = G__60733;
chunk__60306 = G__60734;
count__60307 = G__60735;
i__60308 = G__60736;
continue;
} else {
var class$ = cljs.core.first(seq__60305__$1);
var seq__60340_60737 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__60342_60738 = null;
var count__60343_60739 = (0);
var i__60344_60740 = (0);
while(true){
if((i__60344_60740 < count__60343_60739)){
var component_60741 = chunk__60342_60738.cljs$core$IIndexed$_nth$arity$2(null,i__60344_60740);
var component_ident_60742 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_60741);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_60742,component_60741);


var G__60743 = seq__60340_60737;
var G__60744 = chunk__60342_60738;
var G__60745 = count__60343_60739;
var G__60746 = (i__60344_60740 + (1));
seq__60340_60737 = G__60743;
chunk__60342_60738 = G__60744;
count__60343_60739 = G__60745;
i__60344_60740 = G__60746;
continue;
} else {
var temp__5735__auto___60747__$1 = cljs.core.seq(seq__60340_60737);
if(temp__5735__auto___60747__$1){
var seq__60340_60748__$1 = temp__5735__auto___60747__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60340_60748__$1)){
var c__4556__auto___60749 = cljs.core.chunk_first(seq__60340_60748__$1);
var G__60750 = cljs.core.chunk_rest(seq__60340_60748__$1);
var G__60751 = c__4556__auto___60749;
var G__60752 = cljs.core.count(c__4556__auto___60749);
var G__60753 = (0);
seq__60340_60737 = G__60750;
chunk__60342_60738 = G__60751;
count__60343_60739 = G__60752;
i__60344_60740 = G__60753;
continue;
} else {
var component_60754 = cljs.core.first(seq__60340_60748__$1);
var component_ident_60755 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_60754);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_60755,component_60754);


var G__60756 = cljs.core.next(seq__60340_60748__$1);
var G__60757 = null;
var G__60758 = (0);
var G__60759 = (0);
seq__60340_60737 = G__60756;
chunk__60342_60738 = G__60757;
count__60343_60739 = G__60758;
i__60344_60740 = G__60759;
continue;
}
} else {
}
}
break;
}


var G__60760 = cljs.core.next(seq__60305__$1);
var G__60761 = null;
var G__60762 = (0);
var G__60763 = (0);
seq__60305 = G__60760;
chunk__60306 = G__60761;
count__60307 = G__60762;
i__60308 = G__60763;
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
var map__60351 = app__$1;
var map__60351__$1 = (((((!((map__60351 == null))))?(((((map__60351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60351):map__60351);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60351__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60352 = cljs.core.deref(runtime_atom);
var map__60352__$1 = (((((!((map__60352 == null))))?(((((map__60352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60352):map__60352);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60352__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__60353 = indexes;
var map__60353__$1 = (((((!((map__60353 == null))))?(((((map__60353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60353):map__60353);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60353__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60353__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__60349_SHARP_,p2__60350_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__60349_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__60350_SHARP_) : class__GT_components.call(null,p2__60350_SHARP_)));
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
var map__60362 = app__$1;
var map__60362__$1 = (((((!((map__60362 == null))))?(((((map__60362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60362):map__60362);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__60363 = cljs.core.deref(runtime_atom);
var map__60363__$1 = (((((!((map__60363 == null))))?(((((map__60363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60363):map__60363);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__60364 = indexes;
var map__60364__$1 = (((((!((map__60364 == null))))?(((((map__60364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60364):map__60364);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__60372 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__60372__$1 = (((((!((map__60372 == null))))?(((((map__60372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60372):map__60372);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__60375_60833 = cljs.core.seq(limited_to_render);
var chunk__60377_60834 = null;
var count__60378_60835 = (0);
var i__60379_60836 = (0);
while(true){
if((i__60379_60836 < count__60378_60835)){
var c_60837 = chunk__60377_60834.cljs$core$IIndexed$_nth$arity$2(null,i__60379_60836);
var ident_60838 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_60837);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_60838,c_60837);


var G__60839 = seq__60375_60833;
var G__60840 = chunk__60377_60834;
var G__60841 = count__60378_60835;
var G__60842 = (i__60379_60836 + (1));
seq__60375_60833 = G__60839;
chunk__60377_60834 = G__60840;
count__60378_60835 = G__60841;
i__60379_60836 = G__60842;
continue;
} else {
var temp__5735__auto___60847 = cljs.core.seq(seq__60375_60833);
if(temp__5735__auto___60847){
var seq__60375_60848__$1 = temp__5735__auto___60847;
if(cljs.core.chunked_seq_QMARK_(seq__60375_60848__$1)){
var c__4556__auto___60850 = cljs.core.chunk_first(seq__60375_60848__$1);
var G__60851 = cljs.core.chunk_rest(seq__60375_60848__$1);
var G__60852 = c__4556__auto___60850;
var G__60853 = cljs.core.count(c__4556__auto___60850);
var G__60854 = (0);
seq__60375_60833 = G__60851;
chunk__60377_60834 = G__60852;
count__60378_60835 = G__60853;
i__60379_60836 = G__60854;
continue;
} else {
var c_60855 = cljs.core.first(seq__60375_60848__$1);
var ident_60856 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_60855);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_60856,c_60855);


var G__60857 = cljs.core.next(seq__60375_60848__$1);
var G__60858 = null;
var G__60859 = (0);
var G__60860 = (0);
seq__60375_60833 = G__60857;
chunk__60377_60834 = G__60858;
count__60378_60835 = G__60859;
i__60379_60836 = G__60860;
continue;
}
} else {
}
}
break;
}

var seq__60382 = cljs.core.seq(limited_idents);
var chunk__60383 = null;
var count__60384 = (0);
var i__60385 = (0);
while(true){
if((i__60385 < count__60384)){
var i = chunk__60383.cljs$core$IIndexed$_nth$arity$2(null,i__60385);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__60872 = seq__60382;
var G__60873 = chunk__60383;
var G__60874 = count__60384;
var G__60875 = (i__60385 + (1));
seq__60382 = G__60872;
chunk__60383 = G__60873;
count__60384 = G__60874;
i__60385 = G__60875;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60382);
if(temp__5735__auto__){
var seq__60382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60382__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60382__$1);
var G__60877 = cljs.core.chunk_rest(seq__60382__$1);
var G__60878 = c__4556__auto__;
var G__60879 = cljs.core.count(c__4556__auto__);
var G__60880 = (0);
seq__60382 = G__60877;
chunk__60383 = G__60878;
count__60384 = G__60879;
i__60385 = G__60880;
continue;
} else {
var i = cljs.core.first(seq__60382__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__60881 = cljs.core.next(seq__60382__$1);
var G__60882 = null;
var G__60883 = (0);
var G__60884 = (0);
seq__60382 = G__60881;
chunk__60383 = G__60882;
count__60384 = G__60883;
i__60385 = G__60884;
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
var map__60386 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__60386__$1 = (((((!((map__60386 == null))))?(((((map__60386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60386):map__60386);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60386__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60386__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__60399_60911 = cljs.core.seq(all_idents);
var chunk__60400_60912 = null;
var count__60401_60913 = (0);
var i__60402_60914 = (0);
while(true){
if((i__60402_60914 < count__60401_60913)){
var i_60915 = chunk__60400_60912.cljs$core$IIndexed$_nth$arity$2(null,i__60402_60914);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_60915);


var G__60916 = seq__60399_60911;
var G__60917 = chunk__60400_60912;
var G__60918 = count__60401_60913;
var G__60919 = (i__60402_60914 + (1));
seq__60399_60911 = G__60916;
chunk__60400_60912 = G__60917;
count__60401_60913 = G__60918;
i__60402_60914 = G__60919;
continue;
} else {
var temp__5735__auto___60920 = cljs.core.seq(seq__60399_60911);
if(temp__5735__auto___60920){
var seq__60399_60921__$1 = temp__5735__auto___60920;
if(cljs.core.chunked_seq_QMARK_(seq__60399_60921__$1)){
var c__4556__auto___60922 = cljs.core.chunk_first(seq__60399_60921__$1);
var G__60923 = cljs.core.chunk_rest(seq__60399_60921__$1);
var G__60924 = c__4556__auto___60922;
var G__60925 = cljs.core.count(c__4556__auto___60922);
var G__60926 = (0);
seq__60399_60911 = G__60923;
chunk__60400_60912 = G__60924;
count__60401_60913 = G__60925;
i__60402_60914 = G__60926;
continue;
} else {
var i_60927 = cljs.core.first(seq__60399_60921__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_60927);


var G__60928 = cljs.core.next(seq__60399_60921__$1);
var G__60929 = null;
var G__60930 = (0);
var G__60931 = (0);
seq__60399_60911 = G__60928;
chunk__60400_60912 = G__60929;
count__60401_60913 = G__60930;
i__60402_60914 = G__60931;
continue;
}
} else {
}
}
break;
}

var seq__60544 = cljs.core.seq(extra_to_force);
var chunk__60545 = null;
var count__60546 = (0);
var i__60547 = (0);
while(true){
if((i__60547 < count__60546)){
var c = chunk__60545.cljs$core$IIndexed$_nth$arity$2(null,i__60547);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__60932 = seq__60544;
var G__60933 = chunk__60545;
var G__60934 = count__60546;
var G__60935 = (i__60547 + (1));
seq__60544 = G__60932;
chunk__60545 = G__60933;
count__60546 = G__60934;
i__60547 = G__60935;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60544);
if(temp__5735__auto__){
var seq__60544__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60544__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60544__$1);
var G__60936 = cljs.core.chunk_rest(seq__60544__$1);
var G__60937 = c__4556__auto__;
var G__60938 = cljs.core.count(c__4556__auto__);
var G__60939 = (0);
seq__60544 = G__60936;
chunk__60545 = G__60937;
count__60546 = G__60938;
i__60547 = G__60939;
continue;
} else {
var c = cljs.core.first(seq__60544__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__60940 = cljs.core.next(seq__60544__$1);
var G__60941 = null;
var G__60942 = (0);
var G__60943 = (0);
seq__60544 = G__60940;
chunk__60545 = G__60941;
count__60546 = G__60942;
i__60547 = G__60943;
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
var G__60552 = arguments.length;
switch (G__60552) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__60574){
var map__60575 = p__60574;
var map__60575__$1 = (((((!((map__60575 == null))))?(((((map__60575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60575):map__60575);
var options = map__60575__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60575__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60575__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e60582){var e = e60582;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1331793992);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
