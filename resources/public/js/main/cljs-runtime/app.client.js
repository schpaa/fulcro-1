goog.provide('app.client');
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined')){
} else {
app.client.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}

var options__58777__auto___65383 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"TODO",com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(props))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Root = (function app$client$Root(props__58778__auto__){
var this__58779__auto__ = this;
var temp__5733__auto___65384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__58777__auto___65383,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___65384)){
var init_state__58780__auto___65385 = temp__5733__auto___65384;
(this__58779__auto__.state = (function (){var obj65378 = ({"fulcro$state":(function (){var G__65379 = this__58779__auto__;
var G__65380 = goog.object.get(props__58778__auto__,"fulcro$value");
return (init_state__58780__auto___65385.cljs$core$IFn$_invoke$arity$2 ? init_state__58780__auto___65385.cljs$core$IFn$_invoke$arity$2(G__65379,G__65380) : init_state__58780__auto___65385.call(null,G__65379,G__65380));
})()});
return obj65378;
})());
} else {
(this__58779__auto__.state = (function (){var obj65382 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj65382;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__58777__auto___65383);
/**
 * Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build.
 */
app.client.init = (function app$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

return console.log("Loaded");
});
goog.exportSymbol('app.client.init', app.client.init);
/**
 * During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn
 */
app.client.refresh = (function app$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(app.client.app);

return console.log("Hot reload");
});
goog.exportSymbol('app.client.refresh', app.client.refresh);

//# sourceMappingURL=app.client.js.map
