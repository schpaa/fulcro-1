goog.provide('com.fulcrologic.fulcro.rendering.keyframe_render');
/**
 * Render the UI. The keyframe render runs a full UI query and then asks React to render the root component.
 *   The optimizations for this kind of render are purely those provided by `defsc`'s default
 *   shouldComponentUpdate, which causes component to act like React PureComponent (though the props compare in cljs
 *   is often faster).
 * 
 *   If `:hydrate?` is true it will use the React hydrate functionality (on browsers) to render over
 *   server-rendered content in the DOM.
 * 
 *   If `:force-root? true` is included in the options map then not only will this do a keyframe update, it will also
 *   force all components to return `true` from `shouldComponentUpdate`.
 */
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$keyframe_render$render_BANG_(app__$1,p__59170){
var map__59171 = p__59170;
var map__59171__$1 = (((((!((map__59171 == null))))?(((((map__59171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59171):map__59171);
var options = map__59171__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var hydrate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185));
var _STAR_blindly_render_STAR__orig_val__59175 = com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__59176 = force_root_QMARK_;
(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__59176);

try{var map__59178 = app__$1;
var map__59178__$1 = (((((!((map__59178 == null))))?(((((map__59178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59178):map__59178);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__59179 = cljs.core.deref(runtime_atom);
var map__59179__$1 = (((((!((map__59179 == null))))?(((((map__59179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59179):map__59179);
var root_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var mount_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672));
var r_BANG_ = (cljs.core.truth_(hydrate_QMARK_)?(function (){var or__4126__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"hydrate-root!","hydrate-root!",-184171028));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ReactDOM.hydrate;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return ReactDOM.render;
}
}
})():(function (){var or__4126__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ReactDOM.render;
}
})());
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map):state_map);
var app_root = (cljs.core.truth_(root_factory)?(function (){var G__59190 = (root_factory.cljs$core$IFn$_invoke$arity$1 ? root_factory.cljs$core$IFn$_invoke$arity$1(data_tree) : root_factory.call(null,data_tree));
var G__59191 = mount_node;
return (r_BANG_.cljs$core$IFn$_invoke$arity$2 ? r_BANG_.cljs$core$IFn$_invoke$arity$2(G__59190,G__59191) : r_BANG_.call(null,G__59190,G__59191));
})():null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005),app_root);

return app_root;
}finally {(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__59175);
}});

//# sourceMappingURL=com.fulcrologic.fulcro.rendering.keyframe_render.js.map
