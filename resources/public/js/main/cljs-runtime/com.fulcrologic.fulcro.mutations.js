goog.provide('com.fulcrologic.fulcro.mutations');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__59808){
return cljs.core.map_QMARK_(G__59808);
}),(function (G__59808){
return cljs.core.contains_QMARK_(G__59808,new cljs.core.Keyword(null,"app","app",-560961707));
})], null),(function (G__59808){
return ((cljs.core.map_QMARK_(G__59808)) && (cljs.core.contains_QMARK_(G__59808,new cljs.core.Keyword(null,"app","app",-560961707))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app","app",-560961707)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),com.fulcrologic.fulcro.components.component_class_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
com.fulcrologic.fulcro.mutations.Mutation = (function (sym){
this.sym = sym;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.fulcrologic.fulcro.mutations.Mutation.prototype.call = (function (unused__11610__auto__){
var self__ = this;
var self__ = this;
var G__59810 = (arguments.length - (1));
switch (G__59810) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.apply = (function (self__,args59809){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args59809)));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__59811 = cljs.core.PersistentArrayMap.EMPTY;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__59811) : this$.call(null,G__59811));
}));

(com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (args){
var self__ = this;
var this$ = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,args,null,(1),null)),(2),null));
}));

(com.fulcrologic.fulcro.mutations.Mutation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$type = true);

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorStr = "com.fulcrologic.fulcro.mutations/Mutation");

(com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.fulcrologic.fulcro.mutations/Mutation");
}));

/**
 * Positional factory function for com.fulcrologic.fulcro.mutations/Mutation.
 */
com.fulcrologic.fulcro.mutations.__GT_Mutation = (function com$fulcrologic$fulcro$mutations$__GT_Mutation(sym){
return (new com.fulcrologic.fulcro.mutations.Mutation(sym));
});

/**
 * A handler for mutation network results that will place an error, if detected in env, on the data at `ref`.
 *   Errors are placed at `k` (defaults to `::m/mutation-error`).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Swaps against app state and returns `env`.
 */
com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_ = (function com$fulcrologic$fulcro$mutations$update_errors_on_ui_component_BANG_(var_args){
var G__59813 = arguments.length;
switch (G__59813) {
case 1:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978));
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
var map__59814 = env;
var map__59814__$1 = (((((!((map__59814 == null))))?(((((map__59814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59814):map__59814);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59814__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59814__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59814__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59814__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(ref)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core.truth_((function (){var G__59816 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env);
return (remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59816) : remote_error_QMARK_.call(null,G__59816));
})())){
return cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,k),result);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,ref,cljs.core.dissoc,k);
}
}));
} else {
}

return env;
}));

(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * When there is a `global-error-action` defined on the application, this function will checks for errors in the given
 *   mutation `env`. If any are found then it will call the global error action function with `env`.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Always returns `env`.
 */
com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_ = (function com$fulcrologic$fulcro$mutations$trigger_global_error_action_BANG_(env){
var map__59817 = env;
var map__59817__$1 = (((((!((map__59817 == null))))?(((((map__59817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59817):map__59817);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var b2__46471__auto___60029 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
if(cljs.core.truth_(b2__46471__auto___60029)){
var global_error_action_60030 = b2__46471__auto___60029;
var b2__46471__auto___60031__$1 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(b2__46471__auto___60031__$1)){
var remote_error_QMARK__60032 = b2__46471__auto___60031__$1;
var b2__46471__auto___60033__$2 = (remote_error_QMARK__60032.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK__60032.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK__60032.call(null,result));
if(cljs.core.truth_(b2__46471__auto___60033__$2)){
var __60034 = b2__46471__auto___60033__$2;
(global_error_action_60030.cljs$core$IFn$_invoke$arity$1 ? global_error_action_60030.cljs$core$IFn$_invoke$arity$1(env) : global_error_action_60030.call(null,env));
} else {
}
} else {
}
} else {
}

return env;
});
/**
 * Looks for network mutation result in `env`, checks it against the global definition of remote errors.  If there
 *   is an error and the mutation has defined an `error-action` section, then it calls it; otherwise, if the mutation
 *   has an `ok-action` it calls that.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_ = (function com$fulcrologic$fulcro$mutations$dispatch_ok_error_actions_BANG_(env){
var map__59819 = env;
var map__59819__$1 = (((((!((map__59819 == null))))?(((((map__59819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59819):map__59819);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59819__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59819__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59819__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__59820 = dispatch;
var map__59820__$1 = (((((!((map__59820 == null))))?(((((map__59820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59820):map__59820);
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59820__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59820__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
if(cljs.core.truth_(error_action)){
(error_action.cljs$core$IFn$_invoke$arity$1 ? error_action.cljs$core$IFn$_invoke$arity$1(env) : error_action.call(null,env));
} else {
}
} else {
if(cljs.core.truth_(ok_action)){
(ok_action.cljs$core$IFn$_invoke$arity$1 ? ok_action.cljs$core$IFn$_invoke$arity$1(env) : ok_action.call(null,env));
} else {
}
}

return env;
});
/**
 * Rewrites tempids in state and places a tempid->realid map into env for further use by the mutation actions.
 */
com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_ = (function com$fulcrologic$fulcro$mutations$rewrite_tempids_BANG_(env){
var map__59823 = env;
var map__59823__$1 = (((((!((map__59823 == null))))?(((((map__59823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59823):map__59823);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__59824 = result;
var map__59824__$1 = (((((!((map__59824 == null))))?(((((map__59824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59824):map__59824);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59824__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rid__GT_tid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(body);
com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids_BANG_(app__$1,body);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"tempid->realid","tempid->realid",1168652437),rid__GT_tid);
});
/**
 * If there is a successful result from the remote mutation in `env` this function will merge it with app state
 *   (if there was a mutation join query), and will also rewrite any tempid remaps that were returned
 *   in all of the possible locations they might be in both app database and runtime application state (e.g. network queues).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_ = (function com$fulcrologic$fulcro$mutations$integrate_mutation_return_value_BANG_(env){
var map__59827 = env;
var map__59827__$1 = (((((!((map__59827 == null))))?(((((map__59827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59827):map__59827);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59827__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59827__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59827__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var mutation_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59827__$1,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891));
var transmitted_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59827__$1,new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690));
var map__59828 = result;
var map__59828__$1 = (((((!((map__59828 == null))))?(((((map__59828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59828):map__59828);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59828__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59828__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var mark_query = (cljs.core.truth_(transmitted_ast)?com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(transmitted_ast):transaction);
var body__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = body;
if(cljs.core.truth_(and__4115__auto__)){
return mark_query;
} else {
return and__4115__auto__;
}
})())?com.fulcrologic.fulcro.algorithms.merge.mark_missing(body,mark_query):body);
var eql = (function (){var or__4126__auto__ = transaction;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var and__4115__auto__ = mutation_ast;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(mutation_ast,true)], null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return mark_query;
}
}
})();
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins,eql,body__$1);
}

return env;
});
/**
 * The default Fulcro result action for `defmutation`, which can be overridden when you create your `app/fulcro-app`.
 * 
 *   This function is the following composition of operations from this same namespace:
 * 
 * ```
 *   (-> env
 *  (update-errors-on-ui-component! ::mutation-error)
 *  (integrate-mutation-return-value!)
 *  (trigger-global-error-action!)
 *  (dispatch-ok-error-actions!))
 * ```
 * 
 *   This function returns `env`, so it can be used as part of the chain in your own definition of a "default"
 *   mutation result action.
 *   
 */
com.fulcrologic.fulcro.mutations.default_result_action_BANG_ = (function com$fulcrologic$fulcro$mutations$default_result_action_BANG_(env){
return com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_(com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_(com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_(com.fulcrologic.fulcro.mutations.rewrite_tempids_BANG_(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978))))));
});
com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_ = (function com$fulcrologic$fulcro$mutations$mutation_declaration_QMARK_(expr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.mutations.Mutation,cljs.core.type(expr));
});
/**
 * Return the real symbol (for mutation dispatch) of `mutation`, which can be a symbol (this function is then identity)
 * or a mutation-declaration.
 */
com.fulcrologic.fulcro.mutations.mutation_symbol = (function com$fulcrologic$fulcro$mutations$mutation_symbol(mutation){
if(com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_(mutation)){
return cljs.core.first((mutation.cljs$core$IFn$_invoke$arity$0 ? mutation.cljs$core$IFn$_invoke$arity$0() : mutation.call(null)));
} else {
return mutation;
}
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations.mutate !== 'undefined')){
} else {
com.fulcrologic.fulcro.mutations.mutate = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59831 = cljs.core.get_global_hierarchy;
return (fexpr__59831.cljs$core$IFn$_invoke$arity$0 ? fexpr__59831.cljs$core$IFn$_invoke$arity$0() : fexpr__59831.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.mutations","mutate"),(function (env){
return new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
/**
 * 
 *   mutation: A convenience helper, generally used 'bit twiddle' the data on a particular database table (using the component's ident).
 *   Specifically, merge the given `params` into the state of the database object at the component's ident.
 *   In general, it is recommended this be used for ui-only properties that have no real use outside of the component.
 *   
 */
com.fulcrologic.fulcro.mutations.set_props = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__59832){
var map__59833 = p__59832;
var map__59833__$1 = (((((!((map__59833 == null))))?(((((map__59833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59833):map__59833);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59833__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59833__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__59835_60042 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59836_60043 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59836_60043);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,234,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui/set-props requires component to have an ident."], null);
}),null)),null,1058582970);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,(function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
}));
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59835_60042);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59837 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59838 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59838);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59837);
}})], null);
}));
/**
 * mutation: A helper method that toggles the true/false nature of a component's state by ident.
 *    Use for local UI data only. Use your own mutations for things that have a good abstract meaning. 
 */
com.fulcrologic.fulcro.mutations.toggle = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),(function (fulcro_mutation_env_symbol){
var map__59839 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59839__$1 = (((((!((map__59839 == null))))?(((((map__59839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59839):map__59839);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59839__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$mutations$action(p__59841){
var map__59842 = p__59841;
var map__59842__$1 = (((((!((map__59842 == null))))?(((((map__59842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59842):map__59842);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__59844_60045 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59845_60046 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59845_60046);

try{if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,243,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui/toggle requires component to have an ident."], null);
}),null)),null,-306053370);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59844_60045);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59846 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59847 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59847);

try{var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59846);
}})], null);
}));
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__59848){
var map__59849 = p__59848;
var map__59849__$1 = (((((!((map__59849 == null))))?(((((map__59849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59849):map__59849);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59849__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown app state mutation. Have you required the file with your mutations?",new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], null);
}),null)),null,-704974618);
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG_(comp,field){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Like toggle!, but synchronously refreshes `comp` and nothing else.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG__BANG_(comp,field){
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG_(component,field,value){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Just like set-value!, but synchronously updates `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG__BANG_(component,field,value){
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
com.fulcrologic.fulcro.mutations.ensure_integer = (function com$fulcrologic$fulcro$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60058 = arguments.length;
var i__4737__auto___60059 = (0);
while(true){
if((i__4737__auto___60059 < len__4736__auto___60058)){
args__4742__auto__.push((arguments[i__4737__auto___60059]));

var G__60060 = (i__4737__auto___60059 + (1));
i__4737__auto___60059 = G__60060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__59854){
var map__59855 = p__59854;
var map__59855__$1 = (((((!((map__59855 == null))))?(((((map__59855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59855):map__59855);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59855__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59855__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq59851){
var G__59852 = cljs.core.first(seq59851);
var seq59851__$1 = cljs.core.next(seq59851);
var G__59853 = cljs.core.first(seq59851__$1);
var seq59851__$2 = cljs.core.next(seq59851__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59852,G__59853,seq59851__$2);
}));

/**
 * Just like set-integer!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60073 = arguments.length;
var i__4737__auto___60074 = (0);
while(true){
if((i__4737__auto___60074 < len__4736__auto___60073)){
args__4742__auto__.push((arguments[i__4737__auto___60074]));

var G__60075 = (i__4737__auto___60074 + (1));
i__4737__auto___60074 = G__60075;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__59860){
var map__59861 = p__59860;
var map__59861__$1 = (((((!((map__59861 == null))))?(((((map__59861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59861):map__59861);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59861__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59861__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_integer_BANG__BANG_.cljs$lang$applyTo = (function (seq59857){
var G__59858 = cljs.core.first(seq59857);
var seq59857__$1 = cljs.core.next(seq59857);
var G__59859 = cljs.core.first(seq59857__$1);
var seq59857__$2 = cljs.core.next(seq59857__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59858,G__59859,seq59857__$2);
}));

com.fulcrologic.fulcro.mutations.ensure_double = (function com$fulcrologic$fulcro$mutations$ensure_double(v){
var rv = parseFloat(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given double on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60083 = arguments.length;
var i__4737__auto___60084 = (0);
while(true){
if((i__4737__auto___60084 < len__4736__auto___60083)){
args__4742__auto__.push((arguments[i__4737__auto___60084]));

var G__60085 = (i__4737__auto___60084 + (1));
i__4737__auto___60084 = G__60085;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__59866){
var map__59867 = p__59866;
var map__59867__$1 = (((((!((map__59867 == null))))?(((((map__59867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59867):map__59867);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59867__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59867__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$applyTo = (function (seq59863){
var G__59864 = cljs.core.first(seq59863);
var seq59863__$1 = cljs.core.next(seq59863);
var G__59865 = cljs.core.first(seq59863__$1);
var seq59863__$2 = cljs.core.next(seq59863__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59864,G__59865,seq59863__$2);
}));

/**
 * Just like set-double!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60086 = arguments.length;
var i__4737__auto___60087 = (0);
while(true){
if((i__4737__auto___60087 < len__4736__auto___60086)){
args__4742__auto__.push((arguments[i__4737__auto___60087]));

var G__60088 = (i__4737__auto___60087 + (1));
i__4737__auto___60087 = G__60088;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__59872){
var map__59873 = p__59872;
var map__59873__$1 = (((((!((map__59873 == null))))?(((((map__59873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59873):map__59873);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59873__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59873__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_double_BANG__BANG_.cljs$lang$applyTo = (function (seq59869){
var G__59870 = cljs.core.first(seq59869);
var seq59869__$1 = cljs.core.next(seq59869);
var G__59871 = cljs.core.first(seq59869__$1);
var seq59869__$2 = cljs.core.next(seq59869__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59870,G__59871,seq59869__$2);
}));

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60089 = arguments.length;
var i__4737__auto___60090 = (0);
while(true){
if((i__4737__auto___60090 < len__4736__auto___60089)){
args__4742__auto__.push((arguments[i__4737__auto___60090]));

var G__60092 = (i__4737__auto___60090 + (1));
i__4737__auto___60090 = G__60092;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__59878){
var map__59879 = p__59878;
var map__59879__$1 = (((((!((map__59879 == null))))?(((((map__59879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59879):map__59879);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59879__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59879__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq59875){
var G__59876 = cljs.core.first(seq59875);
var seq59875__$1 = cljs.core.next(seq59875);
var G__59877 = cljs.core.first(seq59875__$1);
var seq59875__$2 = cljs.core.next(seq59875__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59876,G__59877,seq59875__$2);
}));

/**
 * Just like set-string!, but synchronously refreshes `component` and nothing else.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60096 = arguments.length;
var i__4737__auto___60097 = (0);
while(true){
if((i__4737__auto___60097 < len__4736__auto___60096)){
args__4742__auto__.push((arguments[i__4737__auto___60097]));

var G__60098 = (i__4737__auto___60097 + (1));
i__4737__auto___60097 = G__60098;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__59884){
var map__59885 = p__59884;
var map__59885__$1 = (((((!((map__59885 == null))))?(((((map__59885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59885):map__59885);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var and__4115__auto____$1 = event;
if(cljs.core.truth_(and__4115__auto____$1)){
return value;
} else {
return and__4115__auto____$1;
}
})());
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG__BANG_(component,field,value__$1);
}));

(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.mutations.set_string_BANG__BANG_.cljs$lang$applyTo = (function (seq59881){
var G__59882 = cljs.core.first(seq59881);
var seq59881__$1 = cljs.core.next(seq59881);
var G__59883 = cljs.core.first(seq59881__$1);
var seq59881__$2 = cljs.core.next(seq59881__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59882,G__59883,seq59881__$2);
}));

/**
 * Indicate the the remote operation will return a value of the given component type.
 * 
 *   `env` - The env of the mutation
 *   `class` - A component class that represents the return type.  You may supply a fully-qualified symbol instead of the
 *   actual class, and this method will look up the class for you (useful to avoid circular references).
 * 
 *   Returns an update `env`, and is a valid return value from mutation remote sections.
 */
com.fulcrologic.fulcro.mutations.returning = (function com$fulcrologic$fulcro$mutations$returning(env,class$){
var class$__$1 = (((((class$ instanceof cljs.core.Keyword)) || ((class$ instanceof cljs.core.Symbol))))?com.fulcrologic.fulcro.components.registry_key__GT_class(class$):class$);
var map__59888 = env;
var map__59888__$1 = (((((!((map__59888 == null))))?(((((map__59888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59888):map__59888);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59888__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__59889 = ast;
var map__59889__$1 = (((((!((map__59889 == null))))?(((((map__59889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59889):map__59889);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59889__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59889__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59889__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var updated_query = (function (){var G__59892 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(class$__$1,cljs.core.deref(state));
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__59892,(function (p1__59887_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__59887_SHARP_], 0));
}));
} else {
return G__59892;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),updated_query])], null)));
});
/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 * 
 *   `env` - The mutation env (you can thread together `returning` and `with-target`)
 *   `target` - A vector path, or any special target defined in `data-targeting` such as `append-to`.
 * 
 *   Returns an updated env (which is a valid return value from remote sections of mutations).
 *   
 */
com.fulcrologic.fulcro.mutations.with_target = (function com$fulcrologic$fulcro$mutations$with_target(p__59893,target){
var map__59894 = p__59893;
var map__59894__$1 = (((((!((map__59894 == null))))?(((((map__59894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59894):map__59894);
var env = map__59894__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59894__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__59896 = ast;
var map__59896__$1 = (((((!((map__59896 == null))))?(((((map__59896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59896):map__59896);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59896__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59896__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59896__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var targeted_query = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),targeted_query])], null)));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument. Overwrites
 * any existing params of the mutation.
 * 
 * `env` - the mutation environment
 * `params` - A new map to use as the mutations parameters
 * 
 * Returns an updated `env`, which can be used as the return value from a remote section of a mutation.
 */
com.fulcrologic.fulcro.mutations.with_params = (function com$fulcrologic$fulcro$mutations$with_params(env,params){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null),params);
});
/**
 * Modify the AST in env so that the request is sent such that an alternate low-level XHRIO response type is used.
 *   Only works with HTTP remotes. See goog.net.XhrIO.  Supported response types are :default, :array-buffer,
 *   :text, and :document.
 */
com.fulcrologic.fulcro.mutations.with_response_type = (function com$fulcrologic$fulcro$mutations$with_response_type(env,response_type){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878)], null),response_type);
});
com.fulcrologic.fulcro.mutations.with_server_side_mutation = (function com$fulcrologic$fulcro$mutations$with_server_side_mutation(env,mutation_symbol){

return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),mutation_symbol,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mutation_symbol], 0));
});

//# sourceMappingURL=com.fulcrologic.fulcro.mutations.js.map
