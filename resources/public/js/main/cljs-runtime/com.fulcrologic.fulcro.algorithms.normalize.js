goog.provide('com.fulcrologic.fulcro.algorithms.normalize');
com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_ = (function com$fulcrologic$fulcro$algorithms$normalize$normalize_STAR_(query,data,refs,union_seen,transform){
var data__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = transform;
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.vector_QMARK_(data)));
} else {
return and__4115__auto__;
}
})())?(transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(query,data) : transform.call(null,query,data)):data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,data__$1);
if((!((ident == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__59026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__59027 = data__$1;
var G__59028 = refs;
var G__59029 = union_seen;
var G__59030 = transform;
return (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(G__59026,G__59027,G__59028,G__59029,G__59030) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,G__59026,G__59027,G__59028,G__59029,G__59030));
})(),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.normalize","tag","com.fulcrologic.fulcro.algorithms.normalize/tag",313912943),cljs.core.first(ident));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Union components must have an ident",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_(data__$1)){
return data__$1;
} else {
var q = cljs.core.seq(query);
var ret = data__$1;
while(true){
if((!((q == null)))){
var expr = cljs.core.first(q);
if(com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(expr)){
var vec__59042 = com.fulcrologic.fulcro.algorithms.do_not_use.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59042,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59042,(1),null);
var recursive_QMARK_ = com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_(sel);
var union_entry = ((com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?(((!((union_seen == null))))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if(((recursive_QMARK_) && (edn_query_language.core.ident_QMARK_(v)))){
var G__59056 = cljs.core.next(q);
var G__59057 = ret;
q = G__59056;
ret = G__59057;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(sel__$1,v,refs,union_entry,transform) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,sel__$1,v,refs,union_entry,transform));
if((!((((class$ == null)) || ((!(com.fulcrologic.fulcro.components.has_ident_QMARK_(class$)))))))){
var i = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,x);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__59059 = cljs.core.next(q);
var G__59060 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__59059;
ret = G__59060;
continue;
} else {
var G__59061 = cljs.core.next(q);
var G__59062 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__59061;
ret = G__59062;
continue;
}
} else {
if(((cljs.core.vector_QMARK_(v)) && ((!(edn_query_language.core.ident_QMARK_(v)))) && ((!(edn_query_language.core.ident_QMARK_(cljs.core.first(v))))))){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (p1__59024_SHARP_){
return (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(sel__$1,p1__59024_SHARP_,refs,union_entry,transform) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,sel__$1,p1__59024_SHARP_,refs,union_entry,transform));
});})(q,ret,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
),v);
if((!((((class$ == null)) || ((!(com.fulcrologic.fulcro.components.has_ident_QMARK_(class$)))))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (p1__59025_SHARP_){
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,p1__59025_SHARP_);
});})(q,ret,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (m,p__59045){
var vec__59046 = p__59045;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59046,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59046,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1){
return (function (ret__$1,p__59049){
var vec__59050 = p__59049;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59050,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59050,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__59042,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr,data__$1))
);
}

var G__59065 = cljs.core.next(q);
var G__59066 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__59065;
ret = G__59066;
continue;
} else {
var G__59067 = cljs.core.next(q);
var G__59068 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__59067;
ret = G__59068;
continue;
}
} else {
if((v == null)){
var G__59069 = cljs.core.next(q);
var G__59070 = ret;
q = G__59069;
ret = G__59070;
continue;
} else {
var G__59071 = cljs.core.next(q);
var G__59072 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__59071;
ret = G__59072;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if((v == null)){
var G__59073 = cljs.core.next(q);
var G__59074 = ret;
q = G__59073;
ret = G__59074;
continue;
} else {
var G__59075 = cljs.core.next(q);
var G__59076 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__59075;
ret = G__59076;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db = (function com$fulcrologic$fulcro$algorithms$normalize$tree__GT_db(var_args){
var G__59054 = arguments.length;
switch (G__59054) {
case 2:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(x,data,merge_idents,null);
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4 = (function (x,data,merge_idents,transform){
var refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(x,data));
var ret = com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_(x__$1,data,refs,null,transform);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref(refs);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,refs_SINGLEQUOTE_], 0));
} else {
return cljs.core.with_meta(ret,cljs.core.deref(refs));
}
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.normalize.js.map
