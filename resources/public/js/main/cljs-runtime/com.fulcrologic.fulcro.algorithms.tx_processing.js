goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing');


/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remotes(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517)], null);

return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remote_names(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$extract_parallel(sends){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60428){
return cljs.core.vector_QMARK_(G__60428);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null))], null);

var parallel_QMARK_ = (function (p__60430){
var map__60431 = p__60430;
var map__60431__$1 = (((((!((map__60431 == null))))?(((((map__60431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60431):map__60431);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60431__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__60429 = cljs.core.group_by(parallel_QMARK_,sends);
var map__60429__$1 = (((((!((map__60429 == null))))?(((((map__60429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60429):map__60429);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60429__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60429__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$every_ast_QMARK_(ast_node_or_tree,test){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null,ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$mutation_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__60442_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__60442_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$query_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__60447_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__60447_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$sort_queue_writes_before_reads(send_queue){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null);

var vec__60453 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60453,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60453,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__60456 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,id){
var vec__60458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__60459 = cljs.core.seq(vec__60458);
var first__60460 = cljs.core.first(seq__60459);
var seq__60459__$1 = cljs.core.next(seq__60459);
var map__60461 = first__60460;
var map__60461__$1 = (((((!((map__60461 == null))))?(((((map__60461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60461):map__60461);
var n = map__60461__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60461__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__60459__$1;
var cluster = vec__60458;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__60456__$1 = (((((!((map__60456 == null))))?(((((map__60456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60456):map__60456);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60456__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60456__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$top_keys(p__60477){
var map__60478 = p__60477;
var map__60478__$1 = (((((!((map__60478 == null))))?(((((map__60478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60478):map__60478);
var ast = map__60478__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60480){
return cljs.core.coll_QMARK_(G__60480);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796))], null),null)], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$combine_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60492){
return cljs.core.map_QMARK_(G__60492);
}),(function (G__60492){
return cljs.core.contains_QMARK_(G__60492,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__60492){
return ((cljs.core.map_QMARK_(G__60492)) && (cljs.core.contains_QMARK_(G__60492,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

var vec__60515 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60515,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60515,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__60518 = cljs.core.split_with((function (p1__60484_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__60484_SHARP_));
}),send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60518,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60518,(1),null);
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__60524){
var map__60525 = p__60524;
var map__60525__$1 = (((((!((map__60525 == null))))?(((((map__60525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60525):map__60525);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60525__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
}),cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (p__60527){
var map__60528 = p__60527;
var map__60528__$1 = (((((!((map__60528 == null))))?(((((map__60528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60528):map__60528);
var combined_result = map__60528__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__60530 = cljs.core.seq(to_send);
var chunk__60531 = null;
var count__60532 = (0);
var i__60533 = (0);
while(true){
if((i__60533 < count__60532)){
var map__60569 = chunk__60531.cljs$core$IIndexed$_nth$arity$2(null,i__60533);
var map__60569__$1 = (((((!((map__60569 == null))))?(((((map__60569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60569):map__60569);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60569__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__61336 = seq__60530;
var G__61337 = chunk__60531;
var G__61338 = count__60532;
var G__61339 = (i__60533 + (1));
seq__60530 = G__61336;
chunk__60531 = G__61337;
count__60532 = G__61338;
i__60533 = G__61339;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60530);
if(temp__5735__auto__){
var seq__60530__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60530__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60530__$1);
var G__61342 = cljs.core.chunk_rest(seq__60530__$1);
var G__61343 = c__4556__auto__;
var G__61344 = cljs.core.count(c__4556__auto__);
var G__61345 = (0);
seq__60530 = G__61342;
chunk__60531 = G__61343;
count__60532 = G__61344;
i__60533 = G__61345;
continue;
} else {
var map__60583 = cljs.core.first(seq__60530__$1);
var map__60583__$1 = (((((!((map__60583 == null))))?(((((map__60583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60583):map__60583);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60583__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__61350 = cljs.core.next(seq__60530__$1);
var G__61351 = null;
var G__61352 = (0);
var G__61353 = (0);
seq__60530 = G__61350;
chunk__60531 = G__61351;
count__60532 = G__61352;
i__60533 = G__61353;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__60599){
var map__60601 = p__60599;
var map__60601__$1 = (((((!((map__60601 == null))))?(((((map__60601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60601):map__60601);
var combined_result = map__60601__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60601__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__60611_61356 = cljs.core.seq(to_send);
var chunk__60612_61357 = null;
var count__60613_61358 = (0);
var i__60614_61359 = (0);
while(true){
if((i__60614_61359 < count__60613_61358)){
var map__60639_61362 = chunk__60612_61357.cljs$core$IIndexed$_nth$arity$2(null,i__60614_61359);
var map__60639_61363__$1 = (((((!((map__60639_61362 == null))))?(((((map__60639_61362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60639_61362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60639_61362):map__60639_61362);
var ast_61364__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639_61363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_61365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639_61363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_61368 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_61364__$1)):body);
var result_61369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_61368);
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4115__auto__;
}
})())){
try{var map__60644_61372 = result_61369;
var map__60644_61373__$1 = (((((!((map__60644_61372 == null))))?(((((map__60644_61372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60644_61372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60644_61372):map__60644_61372);
var status_code_61374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60644_61373__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_61375__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60644_61373__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_61374)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_61375__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_61374));
}
}catch (e60643){var e_61380 = e60643;
}} else {
}

(result_handler_61365.cljs$core$IFn$_invoke$arity$1 ? result_handler_61365.cljs$core$IFn$_invoke$arity$1(result_61369) : result_handler_61365.call(null,result_61369));


var G__61381 = seq__60611_61356;
var G__61382 = chunk__60612_61357;
var G__61383 = count__60613_61358;
var G__61384 = (i__60614_61359 + (1));
seq__60611_61356 = G__61381;
chunk__60612_61357 = G__61382;
count__60613_61358 = G__61383;
i__60614_61359 = G__61384;
continue;
} else {
var temp__5735__auto___61385 = cljs.core.seq(seq__60611_61356);
if(temp__5735__auto___61385){
var seq__60611_61386__$1 = temp__5735__auto___61385;
if(cljs.core.chunked_seq_QMARK_(seq__60611_61386__$1)){
var c__4556__auto___61388 = cljs.core.chunk_first(seq__60611_61386__$1);
var G__61390 = cljs.core.chunk_rest(seq__60611_61386__$1);
var G__61391 = c__4556__auto___61388;
var G__61392 = cljs.core.count(c__4556__auto___61388);
var G__61393 = (0);
seq__60611_61356 = G__61390;
chunk__60612_61357 = G__61391;
count__60613_61358 = G__61392;
i__60614_61359 = G__61393;
continue;
} else {
var map__60649_61394 = cljs.core.first(seq__60611_61386__$1);
var map__60649_61395__$1 = (((((!((map__60649_61394 == null))))?(((((map__60649_61394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60649_61394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60649_61394):map__60649_61394);
var ast_61396__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649_61395__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_61397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649_61395__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_61402 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_61396__$1)):body);
var result_61403 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_61402);
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4115__auto__;
}
})())){
try{var map__60653_61404 = result_61403;
var map__60653_61405__$1 = (((((!((map__60653_61404 == null))))?(((((map__60653_61404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60653_61404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60653_61404):map__60653_61404);
var status_code_61406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60653_61405__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_61407__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60653_61405__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_61406)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_61407__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_61406));
}
}catch (e60652){var e_61414 = e60652;
}} else {
}

(result_handler_61397.cljs$core$IFn$_invoke$arity$1 ? result_handler_61397.cljs$core$IFn$_invoke$arity$1(result_61403) : result_handler_61397.call(null,result_61403));


var G__61415 = cljs.core.next(seq__60611_61386__$1);
var G__61416 = null;
var G__61417 = (0);
var G__61418 = (0);
seq__60611_61356 = G__61415;
chunk__60612_61357 = G__61416;
count__60613_61358 = G__61417;
i__60614_61359 = G__61418;
continue;
}
} else {
}
}
break;
}

return (com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if(cljs.core.seq(to_send)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_defer], 0)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$net_send_BANG_(app__$1,send_node,remote_name){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var b2__46154__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__46154__auto__)){
var remote = b2__46154__auto__;
var b2__46154__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__46154__auto____$1)){
var transmit_BANG_ = b2__46154__auto____$1;
try{if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4115__auto__;
}
})())){
try{var tx_61427 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),tx_61427);
}catch (e60663){var e_61428 = e60663;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node) : transmit_BANG_.call(null,remote,send_node));
}catch (e60657){var e = e60657;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception for tx:",com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node))], null);
}),null)),null,2051122272);

try{if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4115__auto__;
}
})())){
try{com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),"Transmit Exception");
}catch (e60660){var e_61433__$1 = e60660;
}} else {
}

var G__60662 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__60661 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__60661.cljs$core$IFn$_invoke$arity$1 ? fexpr__60661.cljs$core$IFn$_invoke$arity$1(G__60662) : fexpr__60661.call(null,G__60662));
}catch (e60659){var e__$1 = e60659;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing",null,161,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
}),null)),null,245481959);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
}),null)),null,-491273051);

var G__60665 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__60664 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__60664.cljs$core$IFn$_invoke$arity$1 ? fexpr__60664.cljs$core$IFn$_invoke$arity$1(G__60665) : fexpr__60664.call(null,G__60665));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
}),null)),null,-1420178606);

var G__60667 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__60666 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__60666.cljs$core$IFn$_invoke$arity$1 ? fexpr__60666.cljs$core$IFn$_invoke$arity$1(G__60667) : fexpr__60666.call(null,G__60667));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_send_queues_BANG_(p__60668){
var map__60669 = p__60668;
var map__60669__$1 = (((((!((map__60669 == null))))?(((((map__60669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60669):map__60669);
var app__$1 = map__60669__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60669__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807)], null);

var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__60671 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60671,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60671,(1),null);
var front = cljs.core.first(serial);
var seq__60674_61446 = cljs.core.seq(p);
var chunk__60675_61447 = null;
var count__60676_61448 = (0);
var i__60677_61449 = (0);
while(true){
if((i__60677_61449 < count__60676_61448)){
var item_61450 = chunk__60675_61447.cljs$core$IIndexed$_nth$arity$2(null,i__60677_61449);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__60674_61446,chunk__60675_61447,count__60676_61448,i__60677_61449,item_61450,send_queue,vec__60671,p,serial,front,send_queues,remote_names,operations,map__60669,map__60669__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_61450,remote);
});})(seq__60674_61446,chunk__60675_61447,count__60676_61448,i__60677_61449,item_61450,send_queue,vec__60671,p,serial,front,send_queues,remote_names,operations,map__60669,map__60669__$1,app__$1,runtime_atom))
);


var G__61451 = seq__60674_61446;
var G__61452 = chunk__60675_61447;
var G__61453 = count__60676_61448;
var G__61454 = (i__60677_61449 + (1));
seq__60674_61446 = G__61451;
chunk__60675_61447 = G__61452;
count__60676_61448 = G__61453;
i__60677_61449 = G__61454;
continue;
} else {
var temp__5735__auto___61455 = cljs.core.seq(seq__60674_61446);
if(temp__5735__auto___61455){
var seq__60674_61456__$1 = temp__5735__auto___61455;
if(cljs.core.chunked_seq_QMARK_(seq__60674_61456__$1)){
var c__4556__auto___61457 = cljs.core.chunk_first(seq__60674_61456__$1);
var G__61458 = cljs.core.chunk_rest(seq__60674_61456__$1);
var G__61459 = c__4556__auto___61457;
var G__61460 = cljs.core.count(c__4556__auto___61457);
var G__61461 = (0);
seq__60674_61446 = G__61458;
chunk__60675_61447 = G__61459;
count__60676_61448 = G__61460;
i__60677_61449 = G__61461;
continue;
} else {
var item_61464 = cljs.core.first(seq__60674_61456__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__60674_61446,chunk__60675_61447,count__60676_61448,i__60677_61449,item_61464,seq__60674_61456__$1,temp__5735__auto___61455,send_queue,vec__60671,p,serial,front,send_queues,remote_names,operations,map__60669,map__60669__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_61464,remote);
});})(seq__60674_61446,chunk__60675_61447,count__60676_61448,i__60677_61449,item_61464,seq__60674_61456__$1,temp__5735__auto___61455,send_queue,vec__60671,p,serial,front,send_queues,remote_names,operations,map__60669,map__60669__$1,app__$1,runtime_atom))
);


var G__61467 = cljs.core.next(seq__60674_61456__$1);
var G__61468 = null;
var G__61469 = (0);
var G__61470 = (0);
seq__60674_61446 = G__61467;
chunk__60675_61447 = G__61468;
count__60676_61448 = G__61469;
i__60677_61449 = G__61470;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__60678 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote,serial);
var map__60678__$1 = (((((!((map__60678 == null))))?(((((map__60678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60678):map__60678);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60678__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60678__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,(function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node,remote);
}));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

var seq__60680_61474 = cljs.core.seq(cljs.core.deref(operations));
var chunk__60681_61475 = null;
var count__60682_61476 = (0);
var i__60683_61477 = (0);
while(true){
if((i__60683_61477 < count__60682_61476)){
var op_61479 = chunk__60681_61475.cljs$core$IIndexed$_nth$arity$2(null,i__60683_61477);
(op_61479.cljs$core$IFn$_invoke$arity$0 ? op_61479.cljs$core$IFn$_invoke$arity$0() : op_61479.call(null));


var G__61480 = seq__60680_61474;
var G__61481 = chunk__60681_61475;
var G__61482 = count__60682_61476;
var G__61483 = (i__60683_61477 + (1));
seq__60680_61474 = G__61480;
chunk__60681_61475 = G__61481;
count__60682_61476 = G__61482;
i__60683_61477 = G__61483;
continue;
} else {
var temp__5735__auto___61486 = cljs.core.seq(seq__60680_61474);
if(temp__5735__auto___61486){
var seq__60680_61487__$1 = temp__5735__auto___61486;
if(cljs.core.chunked_seq_QMARK_(seq__60680_61487__$1)){
var c__4556__auto___61488 = cljs.core.chunk_first(seq__60680_61487__$1);
var G__61490 = cljs.core.chunk_rest(seq__60680_61487__$1);
var G__61491 = c__4556__auto___61488;
var G__61492 = cljs.core.count(c__4556__auto___61488);
var G__61493 = (0);
seq__60680_61474 = G__61490;
chunk__60681_61475 = G__61491;
count__60682_61476 = G__61492;
i__60683_61477 = G__61493;
continue;
} else {
var op_61495 = cljs.core.first(seq__60680_61487__$1);
(op_61495.cljs$core$IFn$_invoke$arity$0 ? op_61495.cljs$core$IFn$_invoke$arity$0() : op_61495.call(null));


var G__61496 = cljs.core.next(seq__60680_61487__$1);
var G__61497 = null;
var G__61498 = (0);
var G__61499 = (0);
seq__60680_61474 = G__61496;
chunk__60681_61475 = G__61497;
count__60682_61476 = G__61498;
i__60683_61477 = G__61499;
continue;
}
} else {
}
}
break;
}

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$tx_node(var_args){
var G__60685 = arguments.length;
switch (G__60685) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
}))),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.algorithms.tx_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$build_env(var_args){
var G__60687 = arguments.length;
switch (G__60687) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__60688,addl){
var map__60689 = p__60688;
var map__60689__$1 = (((((!((map__60689 == null))))?(((((map__60689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60689):map__60689);
var tx_node = map__60689__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60689__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

var map__60691 = options;
var map__60691__$1 = (((((!((map__60691 == null))))?(((((map__60691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60691):map__60691);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60691__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60691__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__60693 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__60693__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60693,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__60693);
var G__60693__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60693__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__60693__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60693__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__60693__$2;
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__60694){
var map__60695 = p__60694;
var map__60695__$1 = (((((!((map__60695 == null))))?(((((map__60695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60695):map__60695);
var tx_node = map__60695__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60695__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$lang$maxFixedArity = 3);

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements(tx_node,env,dispatch_fn){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e60697){var e = e60697;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch for mutation",(function (){var G__60698 = env__$1;
var G__60698__$1 = (((G__60698 == null))?null:new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(G__60698));
if((G__60698__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(G__60698__$1);
}
})(),"failed with an exception. No dispatch generated."], null);
}),null)),null,-1318524277);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_dispatch_STAR_(p__60699){
var map__60700 = p__60699;
var map__60700__$1 = (((((!((map__60700 == null))))?(((((map__60700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60700):map__60700);
var ele = map__60700__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60700__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__60702 = original_ast_node;
var map__60702__$1 = (((((!((map__60702 == null))))?(((((map__60702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60702):map__60702);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__60704 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60704,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__60704;
}
});
var dispatch_all = (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.application_rendered_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$application_rendered_BANG_(p__60706,options){
var map__60707 = p__60706;
var map__60707__$1 = (((((!((map__60707 == null))))?(((((map__60707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60707):map__60707);
var app__$1 = map__60707__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60707__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.some((function (p1__60705_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"after-render?","after-render?",595994030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(p1__60705_SHARP_)));
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0)) : com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.call(null,app__$1,(0)));
} else {
return null;
}
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$activate_submissions_BANG_(p__60711){
var map__60712 = p__60711;
var map__60712__$1 = (((((!((map__60712 == null))))?(((((map__60712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60712):map__60712);
var app__$1 = map__60712__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60712__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__60714 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var map__60714__$1 = (((((!((map__60714 == null))))?(((((map__60714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60714):map__60714);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,false);
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60709_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__60709_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__60709_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),(function (p1__60710_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__60710_SHARP_,dispatched_nodes);
})),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.vec(blocked));
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_activation_BANG_(var_args){
var G__60717 = arguments.length;
switch (G__60717) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_queue_processing_BANG_(var_args){
var G__60719 = arguments.length;
switch (G__60719) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_sends_BANG_(var_args){
var G__60721 = arguments.length;
switch (G__60721) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$advance_actions_BANG_(app__$1,p__60722){
var map__60723 = p__60722;
var map__60723__$1 = (((((!((map__60723 == null))))?(((((map__60723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60723):map__60723);
var node = map__60723__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60725,element){
var map__60726 = p__60725;
var map__60726__$1 = (((((!((map__60726 == null))))?(((((map__60726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60726):map__60726);
var acc = map__60726__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60726__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__60728 = element;
var map__60728__$1 = (((((!((map__60728 == null))))?(((((map__60728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60728):map__60728);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__60729 = dispatch;
var map__60729__$1 = (((((!((map__60729 == null))))?(((((map__60729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60729):map__60729);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__4115__auto__ = action;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((function (){var or__4126__auto__ = done_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})());
} else {
return and__4115__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__4115__auto__ = (function (){var or__4126__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__4115__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e60732){var e_61581 = e60732;
var mutation_symbol_61582 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,340,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61581,"The `action` section of mutation",mutation_symbol_61582,"threw an exception."], null);
}),null)),null,-1762186482);
}
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4115__auto__;
}
})())){
try{var tx_61585 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_61585], null));
}catch (e60733){var e_61592 = e60733;
}} else {
}
} else {
}

return new_acc;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$run_actions_BANG_(app__$1,p__60734){
var map__60735 = p__60734;
var map__60735__$1 = (((((!((map__60735 == null))))?(((((map__60735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60735):map__60735);
var node = map__60735__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_elements,element){
var map__60737 = element;
var map__60737__$1 = (((((!((map__60737 == null))))?(((((map__60737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60737):map__60737);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60737__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60737__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60737__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60737__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__60738 = dispatch;
var map__60738__$1 = (((((!((map__60738 == null))))?(((((map__60738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60738):map__60738);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60738__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__4115__auto__ = action;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024))));
} else {
return and__4115__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e60741){var e_61607 = e60741;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,373,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61607,"The `action` section threw an exception for mutation: ",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node)], null);
}),null)),null,1110088656);
}
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4115__auto__;
}
})())){
try{var tx_61612 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_61612], null));
}catch (e60742){var e_61615 = e60742;
}} else {
}
} else {
}

return new_acc;
}),cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$fully_complete_QMARK_(app__$1,p__60743){
var map__60744 = p__60743;
var map__60744__$1 = (((((!((map__60744 == null))))?(((((map__60744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60744):map__60744);
var tx_node = map__60744__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var element_complete_QMARK_ = (function (p__60746){
var map__60747 = p__60746;
var map__60747__$1 = (((((!((map__60747 == null))))?(((((map__60747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60747):map__60747);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60747__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60747__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$remove_send_BANG_(p__60749,remote,txn_id,ele_idx){
var map__60750 = p__60749;
var map__60750__$1 = (((((!((map__60750 == null))))?(((((map__60750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60750):map__60750);
var app__$1 = map__60750__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__60752 = cljs.core.deref(runtime_atom);
var map__60752__$1 = (((((!((map__60752 == null))))?(((((map__60752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60752):map__60752);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var old_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue = cljs.core.filterv((function (p__60754){
var map__60755 = p__60754;
var map__60755__$1 = (((((!((map__60755 == null))))?(((((map__60755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60755):map__60755);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$record_result_BANG_(var_args){
var G__60763 = arguments.length;
switch (G__60763) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__60767,txn_id,ele_idx,remote,result,result_key){
var map__60768 = p__60767;
var map__60768__$1 = (((((!((map__60768 == null))))?(((((map__60768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60768):map__60768);
var app__$1 = map__60768__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60768__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__60770){
var map__60771 = p__60770;
var map__60771__$1 = (((((!((map__60771 == null))))?(((((map__60771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60771):map__60771);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60771__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,421,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue!"], null);
}),null)),null,304694858);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Add the ::desired-ast-nodes and ::transmitted-ast-nodes for `remote` to the tx-element based on the dispatch for the `remote` of the original mutation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$compute_desired_ast_node(app__$1,remote,tx_node,tx_element){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

var map__60782 = tx_element;
var map__60782__$1 = (((((!((map__60782 == null))))?(((((map__60782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60782):map__60782);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var desired_ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,442,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire], null);
}),null)),null,468107427);

return remote_desire;
})()

))));
var query_transform = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var ast = (cljs.core.truth_((function (){var and__4115__auto__ = desired_ast;
if(cljs.core.truth_(and__4115__auto__)){
return query_transform;
} else {
return and__4115__auto__;
}
})())?(query_transform.cljs$core$IFn$_invoke$arity$1 ? query_transform.cljs$core$IFn$_invoke$arity$1(desired_ast) : query_transform.call(null,desired_ast)):desired_ast);
var G__60789 = tx_element;
var G__60789__$1 = (cljs.core.truth_(desired_ast)?cljs.core.assoc_in(G__60789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425),remote], null),desired_ast):G__60789);
if(cljs.core.truth_(ast)){
return cljs.core.assoc_in(G__60789__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null),ast);
} else {
return G__60789__$1;
}
});
/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG_(p__60796,p__60797,ele_idx,remote){
var map__60798 = p__60796;
var map__60798__$1 = (((((!((map__60798 == null))))?(((((map__60798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60798):map__60798);
var app__$1 = map__60798__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60798__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60799 = p__60797;
var map__60799__$1 = (((((!((map__60799 == null))))?(((((map__60799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60799):map__60799);
var tx_node = map__60799__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60799__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60799__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null);

var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_result_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__60808){
var map__60809 = p__60808;
var map__60809__$1 = (((((!((map__60809 == null))))?(((((map__60809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60809):map__60809);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60809__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60809__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60809__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK_(p__60821){
var map__60822 = p__60821;
var map__60822__$1 = (((((!((map__60822 == null))))?(((((map__60822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60822):map__60822);
var tx_node = map__60822__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60822__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.every_QMARK_((function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__60825){
var map__60826 = p__60825;
var map__60826__$1 = (((((!((map__60826 == null))))?(((((map__60826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60826):map__60826);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60826__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60826__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
}),elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$element_with_work(remote_names,p__60835){
var map__60836 = p__60835;
var map__60836__$1 = (((((!((map__60836 == null))))?(((((map__60836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60836):map__60836);
var element = map__60836__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),null)], null);

var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_next_send_BANG_(app__$1,p__60850){
var map__60851 = p__60850;
var map__60851__$1 = (((((!((map__60851 == null))))?(((((map__60851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60851):map__60851);
var tx_node = map__60851__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60851__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

if(com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_sends_BANG_(app__$1,p__60858){
var map__60862 = p__60858;
var map__60862__$1 = (((((!((map__60862 == null))))?(((((map__60862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60862):map__60862);
var tx_node = map__60862__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60862__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60862__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_(app__$1,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__60869,remote){
var map__60872 = p__60869;
var map__60872__$1 = (((((!((map__60872 == null))))?(((((map__60872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60872):map__60872);
var tx_element = map__60872__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_61715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_61716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_61716)){
var env_61719 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_61715], null));
try{(handler_61716.cljs$core$IFn$_invoke$arity$1 ? handler_61716.cljs$core$IFn$_invoke$arity$1(env_61719) : handler_61716.call(null,env_61719));
}catch (e60881){var e_61720 = e60881;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,574,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61720,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception."], null);
}),null)),null,-783857421);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__60886){
var map__60887 = p__60886;
var map__60887__$1 = (((((!((map__60887 == null))))?(((((map__60887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60887):map__60887);
var tx_element = map__60887__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_results_BANG_(app__$1,p__60889){
var map__60891 = p__60889;
var map__60891__$1 = (((((!((map__60891 == null))))?(((((map__60891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60891):map__60891);
var tx_node = map__60891__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
}),elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG_(app__$1,p__60900){
var map__60902 = p__60900;
var map__60902__$1 = (((((!((map__60902 == null))))?(((((map__60902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60902):map__60902);
var tx_node = map__60902__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60902__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var get_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,p__60908){
var map__60909 = p__60908;
var map__60909__$1 = (((((!((map__60909 == null))))?(((((map__60909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60909):map__60909);
var element = map__60909__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60909__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60909__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60909__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60909__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var seq__60911_61743 = cljs.core.seq(progress);
var chunk__60912_61744 = null;
var count__60913_61745 = (0);
var i__60914_61746 = (0);
while(true){
if((i__60914_61746 < count__60913_61745)){
var vec__60928_61749 = chunk__60912_61744.cljs$core$IIndexed$_nth$arity$2(null,i__60914_61746);
var remote_61750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60928_61749,(0),null);
var value_61751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60928_61749,(1),null);
var env_61752 = get_env(remote_61750,value_61751);
var action_61753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_61753)){
try{(action_61753.cljs$core$IFn$_invoke$arity$1 ? action_61753.cljs$core$IFn$_invoke$arity$1(env_61752) : action_61753.call(null,env_61752));
}catch (e60932){var e_61754 = e60932;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,614,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60911_61743,chunk__60912_61744,count__60913_61745,i__60914_61746,e_61754,env_61752,action_61753,vec__60928_61749,remote_61750,value_61751,map__60909,map__60909__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__60902,map__60902__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61754,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node)], null);
});})(seq__60911_61743,chunk__60912_61744,count__60913_61745,i__60914_61746,e_61754,env_61752,action_61753,vec__60928_61749,remote_61750,value_61751,map__60909,map__60909__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__60902,map__60902__$1,tx_node,elements))
,null)),null,-1271074924);
}} else {
}


var G__61760 = seq__60911_61743;
var G__61761 = chunk__60912_61744;
var G__61762 = count__60913_61745;
var G__61763 = (i__60914_61746 + (1));
seq__60911_61743 = G__61760;
chunk__60912_61744 = G__61761;
count__60913_61745 = G__61762;
i__60914_61746 = G__61763;
continue;
} else {
var temp__5735__auto___61765 = cljs.core.seq(seq__60911_61743);
if(temp__5735__auto___61765){
var seq__60911_61766__$1 = temp__5735__auto___61765;
if(cljs.core.chunked_seq_QMARK_(seq__60911_61766__$1)){
var c__4556__auto___61767 = cljs.core.chunk_first(seq__60911_61766__$1);
var G__61768 = cljs.core.chunk_rest(seq__60911_61766__$1);
var G__61769 = c__4556__auto___61767;
var G__61770 = cljs.core.count(c__4556__auto___61767);
var G__61771 = (0);
seq__60911_61743 = G__61768;
chunk__60912_61744 = G__61769;
count__60913_61745 = G__61770;
i__60914_61746 = G__61771;
continue;
} else {
var vec__60942_61772 = cljs.core.first(seq__60911_61766__$1);
var remote_61773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60942_61772,(0),null);
var value_61774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60942_61772,(1),null);
var env_61777 = get_env(remote_61773,value_61774);
var action_61778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_61778)){
try{(action_61778.cljs$core$IFn$_invoke$arity$1 ? action_61778.cljs$core$IFn$_invoke$arity$1(env_61777) : action_61778.call(null,env_61777));
}catch (e60945){var e_61780 = e60945;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,614,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__60911_61743,chunk__60912_61744,count__60913_61745,i__60914_61746,e_61780,env_61777,action_61778,vec__60942_61772,remote_61773,value_61774,seq__60911_61766__$1,temp__5735__auto___61765,map__60909,map__60909__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__60902,map__60902__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61780,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node)], null);
});})(seq__60911_61743,chunk__60912_61744,count__60913_61745,i__60914_61746,e_61780,env_61777,action_61778,vec__60942_61772,remote_61773,value_61774,seq__60911_61766__$1,temp__5735__auto___61765,map__60909,map__60909__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__60902,map__60902__$1,tx_node,elements))
,null)),null,-2078670843);
}} else {
}


var G__61784 = cljs.core.next(seq__60911_61766__$1);
var G__61785 = null;
var G__61786 = (0);
var G__61787 = (0);
seq__60911_61743 = G__61784;
chunk__60912_61744 = G__61785;
count__60913_61745 = G__61786;
i__60914_61746 = G__61787;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_tx_node_BANG_(app__$1,p__60947){
var map__60948 = p__60947;
var map__60948__$1 = (((((!((map__60948 == null))))?(((((map__60948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60948):map__60948);
var tx_node = map__60948__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),null)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_(app__$1,(function (){var G__60953 = tx_node;
var G__60953__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,G__60953):G__60953);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_(app__$1,G__60953__$1);
} else {
return G__60953__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$requested_refreshes(app__$1,queue){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60956){
return cljs.core.coll_QMARK_(G__60956);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378))], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.set_QMARK_], null);


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,element){
var map__60961 = element;
var map__60961__$1 = (((((!((map__60961 == null))))?(((((map__60961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60961):map__60961);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60961__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
}),outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$remotes_active_on_node(p__60969,remotes){
var map__60970 = p__60969;
var map__60970__$1 = (((((!((map__60970 == null))))?(((((map__60970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60970):map__60970);
var tx_node = map__60970__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

var active_on_element = (function (p__60974){
var map__60975 = p__60974;
var map__60975__$1 = (((((!((map__60975 == null))))?(((((map__60975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60975):map__60975);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
}),cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$active_remotes(queue,remotes){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG_(p__60989){
var map__60990 = p__60989;
var map__60990__$1 = (((((!((map__60990 == null))))?(((((map__60990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60990):map__60990);
var app__$1 = map__60990__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60990__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60990__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5733__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5733__auto__)){
var new_node = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : schedule_render_BANG_.call(null,app__$1));

return null;
});
/**
 * Run the optimistic action(s) of a transaction synchronously. It is primarily used to deal with controlled inputs, since they
 * have issues working asynchronously, so ideally the mutation in question will *not* have remote action (though they
 * are allowed to).
 * 
 * NOTE: any *remote* behaviors of `tx` will *still be async*.
 * 
 * This function:
 * 
 * * Runs the optimistic side of the mutation(s)
 * * IF (and only if) one or more of the mutations has more sections than just an `action` then it submits the mutation to the normal transaction queue,
 *   but with the optimistic part already done.
 * * This functions *does not* queue a render refresh (though if the normal transaction queue is updated, it will queue tx remote processing, which will trigger a UI refresh).
 * 
 * If you pass it an on-screen instance that has a query and ident, then this function tunnel updated UI props synchronously to that
 * component so it can refresh immediately and avoid DOM input issues.
 * 
 * Returns the new component props or the final state map if no component was used in the transaction.
 * 
 */
com.fulcrologic.fulcro.algorithms.tx_processing.transact_sync_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$transact_sync_BANG_(app__$1,tx,p__61009){
var map__61012 = p__61009;
var map__61012__$1 = (((((!((map__61012 == null))))?(((((map__61012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61012):map__61012);
var options = map__61012__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var mutation_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(tx));
var ast_node__GT_operation = cljs.core.zipmap(mutation_nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ast_node){
return com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast_node], null));
}),mutation_nodes));
var map__61016 = cljs.core.group_by((function (p1__61004_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),null], null), null),cljs.core.set(cljs.core.keys((ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1 ? ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1(p1__61004_SHARP_) : ast_node__GT_operation.call(null,p1__61004_SHARP_)))));
}),mutation_nodes);
var map__61016__$1 = (((((!((map__61016 == null))))?(((((map__61016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61016):map__61016);
var optimistic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,true);
var mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,false);
var optimistic_tx_node = ((cljs.core.seq(optimistic))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),optimistic], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var mixed_tx_node = ((cljs.core.seq(mixed))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),mixed], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var resulting_node_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(optimistic_tx_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,optimistic_tx_node);
} else {
}

if(cljs.core.truth_(mixed_tx_node)){
var node_61836 = com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,mixed_tx_node);
var runtime_atom_61837 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.reset_BANG_(resulting_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node_61836));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom_61837,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_61836], 0));

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(20));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = component;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = (com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component));
if(cljs.core.truth_(and__4115__auto____$1)){
return com.fulcrologic.fulcro.components.has_ident_QMARK_(component);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
com.fulcrologic.fulcro.components.refresh_component_BANG_(component);
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,743,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synchronous transaction was submitted on the app or a component without an ident. No UI refresh will happen."], null);
}),null)),null,-151623795);
} else {
}
}

return cljs.core.deref(resulting_node_id);
});
/**
 * Default (Fulcro-2 compatible) transaction submission. The options map can contain any additional options
 *   that might be used by the transaction processing (or UI refresh).
 * 
 *   Some that may be supported (depending on application settings):
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   WARNING: `:only-refresh` can cause missed refreshes because rendering is debounced. If you are using this for
 *         rapid-fire updates like drag-and-drop it is recommended that on the trailing edge (e.g. drop) of your sequence you
 *         force a normal refresh via `app/render!`.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   NOTE: Fulcro 2 'follow-on reads' are supported and are added to the `:refresh` entries. Your choice of rendering
 *   algorithm will influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$default_tx_BANG_(var_args){
var G__61036 = arguments.length;
switch (G__61036) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__61043,tx,p__61044){
var map__61045 = p__61043;
var map__61045__$1 = (((((!((map__61045 == null))))?(((((map__61045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61045):map__61045);
var app__$1 = map__61045__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61045__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__61046 = p__61044;
var map__61046__$1 = (((((!((map__61046 == null))))?(((((map__61046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61046):map__61046);
var options = map__61046__$1;
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61046__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

if(cljs.core.truth_(synchronous_QMARK_)){
return com.fulcrologic.fulcro.algorithms.tx_processing.transact_sync_BANG_(app__$1,tx,options);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1);

var map__61053 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),true], null),options], 0));
var map__61053__$1 = (((((!((map__61053 == null))))?(((((map__61053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61053):map__61053);
var options__$1 = map__61053__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61053__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61053__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61053__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61034_SHARP_){
return (((p1__61034_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__61034_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__61059 = cljs.core.set(refresh);
var G__61059__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__61059,follow_on_reads):G__61059);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__61059__$1,ref);
} else {
return G__61059__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__61062 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (v,n){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(v),n);
}),node);
var G__61062__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61062,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__61062);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61062__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__61062__$1;
}
}));

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Abort any elements in the given send-queue that have the given abort id.
 * 
 *   Aborting will cause the network to abort (which will report a result), or if the item is not yet active a
 *   virtual result will still be sent for that node.
 * 
 *   Returns a new send-queue that no longer contains the aborted nodes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_elements_BANG_(p__61066,send_queue,abort_id){
var map__61068 = p__61066;
var map__61068__$1 = (((((!((map__61068 == null))))?(((((map__61068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61068):map__61068);
var remote = map__61068__$1;
var abort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(abort_BANG_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__61074){
var map__61075 = p__61074;
var map__61075__$1 = (((((!((map__61075 == null))))?(((((map__61075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61075):map__61075);
var send_node = map__61075__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61075__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61075__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61075__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var aid = (function (){var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aid,abort_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,send_node);
} else {
if(cljs.core.truth_(active_QMARK_)){
(abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(remote,abort_id) : abort_BANG_.call(null,remote,abort_id));

return result;
} else {
var G__61081_61871 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__61081_61871) : result_handler.call(null,G__61081_61871));

return result;

}
}
}),cljs.core.PersistentVector.EMPTY,send_queue);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,821,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot abort network requests. The remote has no abort support!"], null);
}),null)),null,1131319087);

return send_queue;
}
});
/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_BANG_(app__$1,abort_id){
var map__61086 = com.fulcrologic.fulcro.components.any__GT_app(app__$1);
var map__61086__$1 = (((((!((map__61086 == null))))?(((((map__61086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61086):map__61086);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__61087 = runtime_state;
var map__61087__$1 = (((((!((map__61087 == null))))?(((((map__61087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61087):map__61087);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var remote_names = cljs.core.keys(send_queues);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,remote_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,remote_name,com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(remotes,remote_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote_name),abort_id));
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);
});
/**
 * Cause everything in the active network queue for remote to be cancelled. Any result that (finally) appears for aborted
 *   items will be ignored. This will cause a hard error to be "received" as the result for everything
 *   that is in the send queue of the given remote.
 * 
 *   This function is mainly meant for use in development mode when dealing with a buggy remote implementation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_remote_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_remote_BANG_(app_ish,remote){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var map__61099 = com.fulcrologic.fulcro.components.any__GT_app(app__$1);
var map__61099__$1 = (((((!((map__61099 == null))))?(((((map__61099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61099):map__61099);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61099__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61099__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__61101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote], null));
var map__61101__$1 = (((((!((map__61101 == null))))?(((((map__61101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61101):map__61101);
var the_remote = map__61101__$1;
var abort_network_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61101__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
var old_send_queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remote], 0));

var seq__61108 = cljs.core.seq(old_send_queue);
var chunk__61115 = null;
var count__61116 = (0);
var i__61117 = (0);
while(true){
if((i__61117 < count__61116)){
var map__61202 = chunk__61115.cljs$core$IIndexed$_nth$arity$2(null,i__61117);
var map__61202__$1 = (((((!((map__61202 == null))))?(((((map__61202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61202):map__61202);
var send_node = map__61202__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__61118_61894 = cljs.core.seq((function (){var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})());
var chunk__61119_61895 = null;
var count__61120_61896 = (0);
var i__61121_61897 = (0);
while(true){
if((i__61121_61897 < count__61120_61896)){
var aid_61900 = chunk__61119_61895.cljs$core$IIndexed$_nth$arity$2(null,i__61121_61897);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_61900) : abort_network_BANG_.call(null,the_remote,aid_61900));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,861,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61118_61894,chunk__61119_61895,count__61120_61896,i__61121_61897,seq__61108,chunk__61115,count__61116,i__61117,aid_61900,map__61202,map__61202__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear."], null);
});})(seq__61118_61894,chunk__61119_61895,count__61120_61896,i__61121_61897,seq__61108,chunk__61115,count__61116,i__61117,aid_61900,map__61202,map__61202__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-26034366);
}
} else {
}

var G__61223_61905 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__61223_61905) : result_handler.call(null,G__61223_61905));
}catch (e61220){var e_61910 = e61220;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,867,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61118_61894,chunk__61119_61895,count__61120_61896,i__61121_61897,seq__61108,chunk__61115,count__61116,i__61117,e_61910,aid_61900,map__61202,map__61202__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61910,"Failed to abort send node"], null);
});})(seq__61118_61894,chunk__61119_61895,count__61120_61896,i__61121_61897,seq__61108,chunk__61115,count__61116,i__61117,e_61910,aid_61900,map__61202,map__61202__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,180896750);
}

var G__61913 = seq__61118_61894;
var G__61914 = chunk__61119_61895;
var G__61915 = count__61120_61896;
var G__61916 = (i__61121_61897 + (1));
seq__61118_61894 = G__61913;
chunk__61119_61895 = G__61914;
count__61120_61896 = G__61915;
i__61121_61897 = G__61916;
continue;
} else {
var temp__5735__auto___61919 = cljs.core.seq(seq__61118_61894);
if(temp__5735__auto___61919){
var seq__61118_61920__$1 = temp__5735__auto___61919;
if(cljs.core.chunked_seq_QMARK_(seq__61118_61920__$1)){
var c__4556__auto___61921 = cljs.core.chunk_first(seq__61118_61920__$1);
var G__61924 = cljs.core.chunk_rest(seq__61118_61920__$1);
var G__61925 = c__4556__auto___61921;
var G__61926 = cljs.core.count(c__4556__auto___61921);
var G__61927 = (0);
seq__61118_61894 = G__61924;
chunk__61119_61895 = G__61925;
count__61120_61896 = G__61926;
i__61121_61897 = G__61927;
continue;
} else {
var aid_61930 = cljs.core.first(seq__61118_61920__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_61930) : abort_network_BANG_.call(null,the_remote,aid_61930));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,861,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61118_61894,chunk__61119_61895,count__61120_61896,i__61121_61897,seq__61108,chunk__61115,count__61116,i__61117,aid_61930,seq__61118_61920__$1,temp__5735__auto___61919,map__61202,map__61202__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear."], null);
});})(seq__61118_61894,chunk__61119_61895,count__61120_61896,i__61121_61897,seq__61108,chunk__61115,count__61116,i__61117,aid_61930,seq__61118_61920__$1,temp__5735__auto___61919,map__61202,map__61202__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1181232045);
}
} else {
}

var G__61231_61935 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__61231_61935) : result_handler.call(null,G__61231_61935));
}catch (e61228){var e_61938 = e61228;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,867,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61118_61894,chunk__61119_61895,count__61120_61896,i__61121_61897,seq__61108,chunk__61115,count__61116,i__61117,e_61938,aid_61930,seq__61118_61920__$1,temp__5735__auto___61919,map__61202,map__61202__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61938,"Failed to abort send node"], null);
});})(seq__61118_61894,chunk__61119_61895,count__61120_61896,i__61121_61897,seq__61108,chunk__61115,count__61116,i__61117,e_61938,aid_61930,seq__61118_61920__$1,temp__5735__auto___61919,map__61202,map__61202__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1340160635);
}

var G__61941 = cljs.core.next(seq__61118_61920__$1);
var G__61942 = null;
var G__61943 = (0);
var G__61944 = (0);
seq__61118_61894 = G__61941;
chunk__61119_61895 = G__61942;
count__61120_61896 = G__61943;
i__61121_61897 = G__61944;
continue;
}
} else {
}
}
break;
}

var G__61945 = seq__61108;
var G__61946 = chunk__61115;
var G__61947 = count__61116;
var G__61948 = (i__61117 + (1));
seq__61108 = G__61945;
chunk__61115 = G__61946;
count__61116 = G__61947;
i__61117 = G__61948;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61108);
if(temp__5735__auto__){
var seq__61108__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61108__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61108__$1);
var G__61953 = cljs.core.chunk_rest(seq__61108__$1);
var G__61954 = c__4556__auto__;
var G__61955 = cljs.core.count(c__4556__auto__);
var G__61956 = (0);
seq__61108 = G__61953;
chunk__61115 = G__61954;
count__61116 = G__61955;
i__61117 = G__61956;
continue;
} else {
var map__61236 = cljs.core.first(seq__61108__$1);
var map__61236__$1 = (((((!((map__61236 == null))))?(((((map__61236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61236):map__61236);
var send_node = map__61236__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__61110_61959 = cljs.core.seq((function (){var or__4126__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})());
var chunk__61111_61960 = null;
var count__61112_61961 = (0);
var i__61113_61962 = (0);
while(true){
if((i__61113_61962 < count__61112_61961)){
var aid_61965 = chunk__61111_61960.cljs$core$IIndexed$_nth$arity$2(null,i__61113_61962);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_61965) : abort_network_BANG_.call(null,the_remote,aid_61965));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,861,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61110_61959,chunk__61111_61960,count__61112_61961,i__61113_61962,seq__61108,chunk__61115,count__61116,i__61117,aid_61965,map__61236,map__61236__$1,send_node,active_QMARK_,options,result_handler,seq__61108__$1,temp__5735__auto__,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear."], null);
});})(seq__61110_61959,chunk__61111_61960,count__61112_61961,i__61113_61962,seq__61108,chunk__61115,count__61116,i__61117,aid_61965,map__61236,map__61236__$1,send_node,active_QMARK_,options,result_handler,seq__61108__$1,temp__5735__auto__,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1053939686);
}
} else {
}

var G__61261_61970 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__61261_61970) : result_handler.call(null,G__61261_61970));
}catch (e61258){var e_61975 = e61258;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,867,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61110_61959,chunk__61111_61960,count__61112_61961,i__61113_61962,seq__61108,chunk__61115,count__61116,i__61117,e_61975,aid_61965,map__61236,map__61236__$1,send_node,active_QMARK_,options,result_handler,seq__61108__$1,temp__5735__auto__,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61975,"Failed to abort send node"], null);
});})(seq__61110_61959,chunk__61111_61960,count__61112_61961,i__61113_61962,seq__61108,chunk__61115,count__61116,i__61117,e_61975,aid_61965,map__61236,map__61236__$1,send_node,active_QMARK_,options,result_handler,seq__61108__$1,temp__5735__auto__,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-338097013);
}

var G__61976 = seq__61110_61959;
var G__61977 = chunk__61111_61960;
var G__61978 = count__61112_61961;
var G__61979 = (i__61113_61962 + (1));
seq__61110_61959 = G__61976;
chunk__61111_61960 = G__61977;
count__61112_61961 = G__61978;
i__61113_61962 = G__61979;
continue;
} else {
var temp__5735__auto___61982__$1 = cljs.core.seq(seq__61110_61959);
if(temp__5735__auto___61982__$1){
var seq__61110_61983__$1 = temp__5735__auto___61982__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61110_61983__$1)){
var c__4556__auto___61984 = cljs.core.chunk_first(seq__61110_61983__$1);
var G__61985 = cljs.core.chunk_rest(seq__61110_61983__$1);
var G__61986 = c__4556__auto___61984;
var G__61987 = cljs.core.count(c__4556__auto___61984);
var G__61988 = (0);
seq__61110_61959 = G__61985;
chunk__61111_61960 = G__61986;
count__61112_61961 = G__61987;
i__61113_61962 = G__61988;
continue;
} else {
var aid_61990 = cljs.core.first(seq__61110_61983__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_61990) : abort_network_BANG_.call(null,the_remote,aid_61990));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,861,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61110_61959,chunk__61111_61960,count__61112_61961,i__61113_61962,seq__61108,chunk__61115,count__61116,i__61117,aid_61990,seq__61110_61983__$1,temp__5735__auto___61982__$1,map__61236,map__61236__$1,send_node,active_QMARK_,options,result_handler,seq__61108__$1,temp__5735__auto__,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear."], null);
});})(seq__61110_61959,chunk__61111_61960,count__61112_61961,i__61113_61962,seq__61108,chunk__61115,count__61116,i__61117,aid_61990,seq__61110_61983__$1,temp__5735__auto___61982__$1,map__61236,map__61236__$1,send_node,active_QMARK_,options,result_handler,seq__61108__$1,temp__5735__auto__,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1546502284);
}
} else {
}

var G__61270_61994 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__61270_61994) : result_handler.call(null,G__61270_61994));
}catch (e61268){var e_61997 = e61268;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,867,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__61110_61959,chunk__61111_61960,count__61112_61961,i__61113_61962,seq__61108,chunk__61115,count__61116,i__61117,e_61997,aid_61990,seq__61110_61983__$1,temp__5735__auto___61982__$1,map__61236,map__61236__$1,send_node,active_QMARK_,options,result_handler,seq__61108__$1,temp__5735__auto__,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_61997,"Failed to abort send node"], null);
});})(seq__61110_61959,chunk__61111_61960,count__61112_61961,i__61113_61962,seq__61108,chunk__61115,count__61116,i__61117,e_61997,aid_61990,seq__61110_61983__$1,temp__5735__auto___61982__$1,map__61236,map__61236__$1,send_node,active_QMARK_,options,result_handler,seq__61108__$1,temp__5735__auto__,app__$1,map__61099,map__61099__$1,state_atom,runtime_atom,map__61101,map__61101__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1461852340);
}

var G__62002 = cljs.core.next(seq__61110_61983__$1);
var G__62003 = null;
var G__62004 = (0);
var G__62005 = (0);
seq__61110_61959 = G__62002;
chunk__61111_61960 = G__62003;
count__61112_61961 = G__62004;
i__61113_61962 = G__62005;
continue;
}
} else {
}
}
break;
}

var G__62006 = cljs.core.next(seq__61108__$1);
var G__62007 = null;
var G__62008 = (0);
var G__62009 = (0);
seq__61108 = G__62006;
chunk__61115 = G__62007;
count__61116 = G__62008;
i__61117 = G__62009;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.js.map
