goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

/**
 * Returns true if the current thread is running non-nested transaction processing code.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.top_level_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$top_level_QMARK_(p__63776){
var map__63777 = p__63776;
var map__63777__$1 = (((((!((map__63777 == null))))?(((((map__63777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63777):map__63777);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63777__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,(0)),(0));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_submission_queue_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63994 = arguments.length;
var i__4737__auto___63995 = (0);
while(true){
if((i__4737__auto___63995 < len__4736__auto___63994)){
args__4742__auto__.push((arguments[i__4737__auto___63995]));

var G__63996 = (i__4737__auto___63995 + (1));
i__4737__auto___63995 = G__63996;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$applyTo = (function (seq63779){
var G__63780 = cljs.core.first(seq63779);
var seq63779__$1 = cljs.core.next(seq63779);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63780,seq63779__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_submission_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submission_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_post_processing_steps_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64000 = arguments.length;
var i__4737__auto___64001 = (0);
while(true){
if((i__4737__auto___64001 < len__4736__auto___64000)){
args__4742__auto__.push((arguments[i__4737__auto___64001]));

var G__64002 = (i__4737__auto___64001 + (1));
i__4737__auto___64001 = G__64002;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$applyTo = (function (seq63785){
var G__63786 = cljs.core.first(seq63785);
var seq63785__$1 = cljs.core.next(seq63785);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63786,seq63785__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_post_processing_steps_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_steps(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_active_queue_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64004 = arguments.length;
var i__4737__auto___64005 = (0);
while(true){
if((i__4737__auto___64005 < len__4736__auto___64004)){
args__4742__auto__.push((arguments[i__4737__auto___64005]));

var G__64006 = (i__4737__auto___64005 + (1));
i__4737__auto___64005 = G__64006;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$applyTo = (function (seq63790){
var G__63791 = cljs.core.first(seq63790);
var seq63790__$1 = cljs.core.next(seq63790);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63791,seq63790__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_active_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$active_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_send_queue_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64009 = arguments.length;
var i__4737__auto___64010 = (0);
while(true){
if((i__4737__auto___64010 < len__4736__auto___64009)){
args__4742__auto__.push((arguments[i__4737__auto___64010]));

var G__64011 = (i__4737__auto___64010 + (1));
i__4737__auto___64010 = G__64011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,remote,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$applyTo = (function (seq63797){
var G__63798 = cljs.core.first(seq63797);
var seq63797__$1 = cljs.core.next(seq63797);
var G__63799 = cljs.core.first(seq63797__$1);
var seq63797__$2 = cljs.core.next(seq63797__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63798,G__63799,seq63797__$2);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_send_queue_BANG_(app__$1,remote,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$send_queue(app__$1,remote){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)));
});
/**
 * Add `f` as a function that will run after the current transaction has been fully processed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_after_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_after_BANG_(app__$1,f){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),f], 0));
});
/**
 * Is there post processing to do?
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_QMARK_(app__$1){
return cljs.core.boolean$(cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1)));
});
/**
 * Runs the queued post processing steps until the post-processing queue is empty.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.do_post_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$do_post_processing_BANG_(app__$1){
var steps = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1);
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_(app__$1,cljs.core.PersistentVector.EMPTY);

var seq__63806_64015 = cljs.core.seq(steps);
var chunk__63807_64016 = null;
var count__63808_64017 = (0);
var i__63809_64018 = (0);
while(true){
if((i__63809_64018 < count__63808_64017)){
var f_64019 = chunk__63807_64016.cljs$core$IIndexed$_nth$arity$2(null,i__63809_64018);
try{(f_64019.cljs$core$IFn$_invoke$arity$0 ? f_64019.cljs$core$IFn$_invoke$arity$0() : f_64019.call(null));
}catch (e63813){var e_64020 = e63813;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,136,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63806_64015,chunk__63807_64016,count__63808_64017,i__63809_64018,steps,e_64020,f_64019){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64020,"Post processing step failed."], null);
});})(seq__63806_64015,chunk__63807_64016,count__63808_64017,i__63809_64018,steps,e_64020,f_64019))
,null)),null,-1289869718);
}

var G__64021 = seq__63806_64015;
var G__64022 = chunk__63807_64016;
var G__64023 = count__63808_64017;
var G__64024 = (i__63809_64018 + (1));
seq__63806_64015 = G__64021;
chunk__63807_64016 = G__64022;
count__63808_64017 = G__64023;
i__63809_64018 = G__64024;
continue;
} else {
var temp__5735__auto___64025 = cljs.core.seq(seq__63806_64015);
if(temp__5735__auto___64025){
var seq__63806_64027__$1 = temp__5735__auto___64025;
if(cljs.core.chunked_seq_QMARK_(seq__63806_64027__$1)){
var c__4556__auto___64028 = cljs.core.chunk_first(seq__63806_64027__$1);
var G__64029 = cljs.core.chunk_rest(seq__63806_64027__$1);
var G__64030 = c__4556__auto___64028;
var G__64031 = cljs.core.count(c__4556__auto___64028);
var G__64032 = (0);
seq__63806_64015 = G__64029;
chunk__63807_64016 = G__64030;
count__63808_64017 = G__64031;
i__63809_64018 = G__64032;
continue;
} else {
var f_64033 = cljs.core.first(seq__63806_64027__$1);
try{(f_64033.cljs$core$IFn$_invoke$arity$0 ? f_64033.cljs$core$IFn$_invoke$arity$0() : f_64033.call(null));
}catch (e63816){var e_64034 = e63816;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,136,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63806_64015,chunk__63807_64016,count__63808_64017,i__63809_64018,steps,e_64034,f_64033,seq__63806_64027__$1,temp__5735__auto___64025){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64034,"Post processing step failed."], null);
});})(seq__63806_64015,chunk__63807_64016,count__63808_64017,i__63809_64018,steps,e_64034,f_64033,seq__63806_64027__$1,temp__5735__auto___64025))
,null)),null,-2048063819);
}

var G__64035 = cljs.core.next(seq__63806_64027__$1);
var G__64036 = null;
var G__64037 = (0);
var G__64038 = (0);
seq__63806_64015 = G__64035;
chunk__63807_64016 = G__64036;
count__63808_64017 = G__64037;
i__63809_64018 = G__64038;
continue;
}
} else {
}
}
break;
}

var temp__5735__auto__ = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1));
if(temp__5735__auto__){
var next_steps = temp__5735__auto__;
var G__64040 = next_steps;
steps = G__64040;
continue;
} else {
return null;
}
break;
}
});
/**
 * Returns true if the current thread is in the midst of running the optimistic actions of a new transaction.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$in_transaction_QMARK_(p__63818){
var map__63819 = p__63818;
var map__63819__$1 = (((((!((map__63819 == null))))?(((((map__63819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63819):map__63819);
var app__$1 = map__63819__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63819__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,(0)));
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$release_post_render_tasks_BANG_(app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
})], 0));
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__63824,remote){
var map__63825 = p__63824;
var map__63825__$1 = (((((!((map__63825 == null))))?(((((map__63825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63825):map__63825);
var tx_element = map__63825__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63825__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var result_64043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_64044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_64044)){
var env_64045 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_64043], null));
try{(handler_64044.cljs$core$IFn$_invoke$arity$1 ? handler_64044.cljs$core$IFn$_invoke$arity$1(env_64045) : handler_64044.call(null,env_64045));
}catch (e63829){var e_64048 = e63829;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,168,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64048,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception."], null);
}),null)),null,193159310);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__63831){
var map__63832 = p__63831;
var map__63832__$1 = (((((!((map__63832 == null))))?(((((map__63832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63832):map__63832);
var tx_element = map__63832__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63832__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63832__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$node_index(queue,txn_id){
var n = cljs.core.count(queue);
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__63836){
var map__63837 = p__63836;
var map__63837__$1 = (((((!((map__63837 == null))))?(((((map__63837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63837):map__63837);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),queue);
if((idx < n)){
return idx;
} else {
return null;
}
});
/**
 * Side-effects against the app state to distribute the result for txn-id element at ele-idx. This will call the result
 * handler and mark that remote as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_results_BANG_(app__$1,txn_id,ele_idx){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var tx_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,idx);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null),(function (p1__63840_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_(app__$1,tx_node,p1__63840_SHARP_);
})], 0));
});
/**
 * Deal with a network result on the given txn/element.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$record_result_BANG_(var_args){
var G__63844 = arguments.length;
switch (G__63844) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (app__$1,txn_id,ele_idx,remote,result,result_key){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var txn_idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,211,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue!"], null);
}),null)),null,-533510437);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_(app__$1,txn_id,ele_idx);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$remove_send_BANG_(app__$1,remote,txn_id,ele_idx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (old_queue){
return cljs.core.filterv((function (p__63849){
var map__63850 = p__63849;
var map__63850__$1 = (((((!((map__63850 == null))))?(((((map__63850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63850):map__63850);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63850__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63850__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
})], 0));
});
/**
 * Generate a new send node and add it to the appropriate send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG_(app__$1,p__63854,ele_idx,remote){
var map__63855 = p__63854;
var map__63855__$1 = (((((!((map__63855 == null))))?(((((map__63855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63855):map__63855);
var tx_node = map__63855__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63855__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63855__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
var id__63514__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__63514__auto__,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

var G__63860 = app__$1;
var G__63861 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__63860,G__63861) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__63860,G__63861));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__63514__auto__,cljs.core.dec);
}});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_result_handler_STAR_(result){
var id__63514__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__63514__auto__,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

var G__63862 = app__$1;
var G__63863 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__63862,G__63863) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__63862,G__63863));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__63514__auto__,cljs.core.dec);
}});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),send_node], 0));
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));
}

return null;
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__63865){
var map__63866 = p__63865;
var map__63866__$1 = (((((!((map__63866 == null))))?(((((map__63866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63866):map__63866);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63866__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63866__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63866__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_sends_BANG_(app__$1,p__63871){
var map__63872 = p__63871;
var map__63872__$1 = (((((!((map__63872 == null))))?(((((map__63872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63872):map__63872);
var tx_node = map__63872__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_tx_node_BANG_(app__$1,p__63876){
var map__63877 = p__63876;
var map__63877__$1 = (((((!((map__63877 == null))))?(((((map__63877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63877):map__63877);
var tx_node = map__63877__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63877__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,tx_node)));
}
});
/**
 * Process the send queues against the remotes, which will cause idle remotes with queued work to issue network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_send_queues_BANG_(app__$1){
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__63881_64078 = cljs.core.seq(remote_names);
var chunk__63882_64079 = null;
var count__63883_64080 = (0);
var i__63884_64081 = (0);
while(true){
if((i__63884_64081 < count__63883_64080)){
var remote_64084 = chunk__63882_64079.cljs$core$IIndexed$_nth$arity$2(null,i__63884_64081);
var send_queue_64086 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_64084);
var vec__63913_64087 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue_64086);
var p_64088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63913_64087,(0),null);
var serial_64089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63913_64087,(1),null);
var front_64090 = cljs.core.first(serial_64089);
var seq__63916_64091 = cljs.core.seq(p_64088);
var chunk__63917_64092 = null;
var count__63918_64093 = (0);
var i__63919_64094 = (0);
while(true){
if((i__63919_64094 < count__63918_64093)){
var item_64095 = chunk__63917_64092.cljs$core$IIndexed$_nth$arity$2(null,i__63919_64094);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__63916_64091,chunk__63917_64092,count__63918_64093,i__63919_64094,seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,item_64095,send_queue_64086,vec__63913_64087,p_64088,serial_64089,front_64090,remote_64084,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_64095,remote_64084);
});})(seq__63916_64091,chunk__63917_64092,count__63918_64093,i__63919_64094,seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,item_64095,send_queue_64086,vec__63913_64087,p_64088,serial_64089,front_64090,remote_64084,remote_names,operations))
);


var G__64099 = seq__63916_64091;
var G__64100 = chunk__63917_64092;
var G__64101 = count__63918_64093;
var G__64102 = (i__63919_64094 + (1));
seq__63916_64091 = G__64099;
chunk__63917_64092 = G__64100;
count__63918_64093 = G__64101;
i__63919_64094 = G__64102;
continue;
} else {
var temp__5735__auto___64105 = cljs.core.seq(seq__63916_64091);
if(temp__5735__auto___64105){
var seq__63916_64106__$1 = temp__5735__auto___64105;
if(cljs.core.chunked_seq_QMARK_(seq__63916_64106__$1)){
var c__4556__auto___64108 = cljs.core.chunk_first(seq__63916_64106__$1);
var G__64109 = cljs.core.chunk_rest(seq__63916_64106__$1);
var G__64110 = c__4556__auto___64108;
var G__64111 = cljs.core.count(c__4556__auto___64108);
var G__64112 = (0);
seq__63916_64091 = G__64109;
chunk__63917_64092 = G__64110;
count__63918_64093 = G__64111;
i__63919_64094 = G__64112;
continue;
} else {
var item_64113 = cljs.core.first(seq__63916_64106__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__63916_64091,chunk__63917_64092,count__63918_64093,i__63919_64094,seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,item_64113,seq__63916_64106__$1,temp__5735__auto___64105,send_queue_64086,vec__63913_64087,p_64088,serial_64089,front_64090,remote_64084,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_64113,remote_64084);
});})(seq__63916_64091,chunk__63917_64092,count__63918_64093,i__63919_64094,seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,item_64113,seq__63916_64106__$1,temp__5735__auto___64105,send_queue_64086,vec__63913_64087,p_64088,serial_64089,front_64090,remote_64084,remote_names,operations))
);


var G__64120 = cljs.core.next(seq__63916_64106__$1);
var G__64121 = null;
var G__64122 = (0);
var G__64124 = (0);
seq__63916_64091 = G__64120;
chunk__63917_64092 = G__64121;
count__63918_64093 = G__64122;
i__63919_64094 = G__64124;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active?",-132674601).cljs$core$IFn$_invoke$arity$1(front_64090))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_64084,serial_64089);
} else {
var map__63923_64128 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote_64084,serial_64089);
var map__63923_64129__$1 = (((((!((map__63923_64128 == null))))?(((((map__63923_64128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63923_64128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63923_64128):map__63923_64128);
var send_queue_64130__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63923_64129__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_64131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63923_64129__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_64131)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,map__63923_64128,map__63923_64129__$1,send_queue_64130__$1,send_node_64131,send_queue_64086,vec__63913_64087,p_64088,serial_64089,front_64090,remote_64084,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node_64131,remote_64084);
});})(seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,map__63923_64128,map__63923_64129__$1,send_queue_64130__$1,send_node_64131,send_queue_64086,vec__63913_64087,p_64088,serial_64089,front_64090,remote_64084,remote_names,operations))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_64084,send_queue_64130__$1);
}


var G__64134 = seq__63881_64078;
var G__64135 = chunk__63882_64079;
var G__64136 = count__63883_64080;
var G__64137 = (i__63884_64081 + (1));
seq__63881_64078 = G__64134;
chunk__63882_64079 = G__64135;
count__63883_64080 = G__64136;
i__63884_64081 = G__64137;
continue;
} else {
var temp__5735__auto___64139 = cljs.core.seq(seq__63881_64078);
if(temp__5735__auto___64139){
var seq__63881_64140__$1 = temp__5735__auto___64139;
if(cljs.core.chunked_seq_QMARK_(seq__63881_64140__$1)){
var c__4556__auto___64145 = cljs.core.chunk_first(seq__63881_64140__$1);
var G__64146 = cljs.core.chunk_rest(seq__63881_64140__$1);
var G__64147 = c__4556__auto___64145;
var G__64148 = cljs.core.count(c__4556__auto___64145);
var G__64149 = (0);
seq__63881_64078 = G__64146;
chunk__63882_64079 = G__64147;
count__63883_64080 = G__64148;
i__63884_64081 = G__64149;
continue;
} else {
var remote_64150 = cljs.core.first(seq__63881_64140__$1);
var send_queue_64151 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_64150);
var vec__63926_64152 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue_64151);
var p_64153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63926_64152,(0),null);
var serial_64154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63926_64152,(1),null);
var front_64155 = cljs.core.first(serial_64154);
var seq__63931_64157 = cljs.core.seq(p_64153);
var chunk__63932_64158 = null;
var count__63933_64159 = (0);
var i__63934_64160 = (0);
while(true){
if((i__63934_64160 < count__63933_64159)){
var item_64161 = chunk__63932_64158.cljs$core$IIndexed$_nth$arity$2(null,i__63934_64160);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__63931_64157,chunk__63932_64158,count__63933_64159,i__63934_64160,seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,item_64161,send_queue_64151,vec__63926_64152,p_64153,serial_64154,front_64155,remote_64150,seq__63881_64140__$1,temp__5735__auto___64139,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_64161,remote_64150);
});})(seq__63931_64157,chunk__63932_64158,count__63933_64159,i__63934_64160,seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,item_64161,send_queue_64151,vec__63926_64152,p_64153,serial_64154,front_64155,remote_64150,seq__63881_64140__$1,temp__5735__auto___64139,remote_names,operations))
);


var G__64164 = seq__63931_64157;
var G__64165 = chunk__63932_64158;
var G__64166 = count__63933_64159;
var G__64167 = (i__63934_64160 + (1));
seq__63931_64157 = G__64164;
chunk__63932_64158 = G__64165;
count__63933_64159 = G__64166;
i__63934_64160 = G__64167;
continue;
} else {
var temp__5735__auto___64169__$1 = cljs.core.seq(seq__63931_64157);
if(temp__5735__auto___64169__$1){
var seq__63931_64170__$1 = temp__5735__auto___64169__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63931_64170__$1)){
var c__4556__auto___64171 = cljs.core.chunk_first(seq__63931_64170__$1);
var G__64172 = cljs.core.chunk_rest(seq__63931_64170__$1);
var G__64173 = c__4556__auto___64171;
var G__64174 = cljs.core.count(c__4556__auto___64171);
var G__64175 = (0);
seq__63931_64157 = G__64172;
chunk__63932_64158 = G__64173;
count__63933_64159 = G__64174;
i__63934_64160 = G__64175;
continue;
} else {
var item_64176 = cljs.core.first(seq__63931_64170__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__63931_64157,chunk__63932_64158,count__63933_64159,i__63934_64160,seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,item_64176,seq__63931_64170__$1,temp__5735__auto___64169__$1,send_queue_64151,vec__63926_64152,p_64153,serial_64154,front_64155,remote_64150,seq__63881_64140__$1,temp__5735__auto___64139,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_64176,remote_64150);
});})(seq__63931_64157,chunk__63932_64158,count__63933_64159,i__63934_64160,seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,item_64176,seq__63931_64170__$1,temp__5735__auto___64169__$1,send_queue_64151,vec__63926_64152,p_64153,serial_64154,front_64155,remote_64150,seq__63881_64140__$1,temp__5735__auto___64139,remote_names,operations))
);


var G__64178 = cljs.core.next(seq__63931_64170__$1);
var G__64179 = null;
var G__64180 = (0);
var G__64181 = (0);
seq__63931_64157 = G__64178;
chunk__63932_64158 = G__64179;
count__63933_64159 = G__64180;
i__63934_64160 = G__64181;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active?",-132674601).cljs$core$IFn$_invoke$arity$1(front_64155))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_64150,serial_64154);
} else {
var map__63938_64183 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote_64150,serial_64154);
var map__63938_64184__$1 = (((((!((map__63938_64183 == null))))?(((((map__63938_64183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63938_64183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63938_64183):map__63938_64183);
var send_queue_64185__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63938_64184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_64186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63938_64184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_64186)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,map__63938_64183,map__63938_64184__$1,send_queue_64185__$1,send_node_64186,send_queue_64151,vec__63926_64152,p_64153,serial_64154,front_64155,remote_64150,seq__63881_64140__$1,temp__5735__auto___64139,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node_64186,remote_64150);
});})(seq__63881_64078,chunk__63882_64079,count__63883_64080,i__63884_64081,map__63938_64183,map__63938_64184__$1,send_queue_64185__$1,send_node_64186,send_queue_64151,vec__63926_64152,p_64153,serial_64154,front_64155,remote_64150,seq__63881_64140__$1,temp__5735__auto___64139,remote_names,operations))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_64150,send_queue_64185__$1);
}


var G__64190 = cljs.core.next(seq__63881_64140__$1);
var G__64191 = null;
var G__64192 = (0);
var G__64193 = (0);
seq__63881_64078 = G__64190;
chunk__63882_64079 = G__64191;
count__63883_64080 = G__64192;
i__63884_64081 = G__64193;
continue;
}
} else {
}
}
break;
}

var seq__63940 = cljs.core.seq(cljs.core.deref(operations));
var chunk__63941 = null;
var count__63942 = (0);
var i__63943 = (0);
while(true){
if((i__63943 < count__63942)){
var op = chunk__63941.cljs$core$IIndexed$_nth$arity$2(null,i__63943);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__64194 = seq__63940;
var G__64195 = chunk__63941;
var G__64196 = count__63942;
var G__64197 = (i__63943 + (1));
seq__63940 = G__64194;
chunk__63941 = G__64195;
count__63942 = G__64196;
i__63943 = G__64197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63940);
if(temp__5735__auto__){
var seq__63940__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63940__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63940__$1);
var G__64198 = cljs.core.chunk_rest(seq__63940__$1);
var G__64199 = c__4556__auto__;
var G__64200 = cljs.core.count(c__4556__auto__);
var G__64201 = (0);
seq__63940 = G__64198;
chunk__63941 = G__64199;
count__63942 = G__64200;
i__63943 = G__64201;
continue;
} else {
var op = cljs.core.first(seq__63940__$1);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__64202 = cljs.core.next(seq__63940__$1);
var G__64203 = null;
var G__64204 = (0);
var G__64205 = (0);
seq__63940 = G__64202;
chunk__63941 = G__64203;
count__63942 = G__64204;
i__63943 = G__64205;
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
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG_(p__63947){
var map__63948 = p__63947;
var map__63948__$1 = (((((!((map__63948 == null))))?(((((map__63948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63948):map__63948);
var app__$1 = map__63948__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63948__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63948__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var old_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5733__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5733__auto__)){
var new_node = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,old_queue);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_queue,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,326,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old queue changed!"], null);
}),null)),null,-1250822772);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_(app__$1,new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_(app__$1);

return null;
});
/**
 * Returns true if the submission queue has work on it that can proceed without any restrictions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$available_work_QMARK_(app__$1){
var map__63954 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__63954__$1 = (((((!((map__63954 == null))))?(((((map__63954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63954):map__63954);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63954__$1,false);
return cljs.core.boolean$(cljs.core.seq(ready));
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$activate_submissions_BANG_(app__$1){
var map__63959 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__63959__$1 = (((((!((map__63959 == null))))?(((((map__63959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63959):map__63959);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63959__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63959__$1,false);
var _ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_(app__$1,cljs.core.vec(blocked));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63957_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__63957_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__63957_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),dispatched_nodes], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_(app__$1);
});
/**
 * Runs the submission queue. If the submission queue's optimistic actions submit more to the submission queue, then those
 * are processed as well until the submission queue remains empty. This can start network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_all_immediate_work_BANG_(app__$1){
try{return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_(app__$1);
}catch (e63962){var e = e63962;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,359,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Error processing tx queue!"], null);
}),null)),null,-1486179203);
}});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_queue_BANG_(app__$1,p__63965){
while(true){
var map__63966 = p__63965;
var map__63966__$1 = (((((!((map__63966 == null))))?(((((map__63966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63966):map__63966);
var options = map__63966__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63966__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63966__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
continue;
} else {
}
break;
}

if(cljs.core.truth_((function (){var and__4115__auto__ = synchronous_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return component;
} else {
return and__4115__auto__;
}
})())){
com.fulcrologic.fulcro.components.refresh_component_BANG_(component);
} else {
var temp__5735__auto___64220 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(temp__5735__auto___64220)){
var render_BANG__64221 = temp__5735__auto___64220;
(render_BANG__64221.cljs$core$IFn$_invoke$arity$2 ? render_BANG__64221.cljs$core$IFn$_invoke$arity$2(app__$1,options) : render_BANG__64221.call(null,app__$1,options));
} else {
}
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
var G__64222 = app__$1;
var G__64223 = cljs.core.PersistentArrayMap.EMPTY;
app__$1 = G__64222;
p__63965 = G__64223;
continue;
} else {
return null;
}
break;
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$sync_tx_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64224 = arguments.length;
var i__4737__auto___64225 = (0);
while(true){
if((i__4737__auto___64225 < len__4736__auto___64224)){
args__4742__auto__.push((arguments[i__4737__auto___64225]));

var G__64227 = (i__4737__auto___64225 + (1));
i__4737__auto___64225 = G__64227;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("BREAKING CHANGE. Please use `with-synchronous-transaction` to add sync transaction support to your Fulcro app",cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$applyTo = (function (seq63969){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63969));
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submit_sync_tx_BANG_(var_args){
var G__63977 = arguments.length;
switch (G__63977) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__63978,tx,options){
var map__63979 = p__63978;
var map__63979__$1 = (((((!((map__63979 == null))))?(((((map__63979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63979):map__63979);
var app__$1 = map__63979__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63979__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63982 = options;
var map__63982__$1 = (((((!((map__63982 == null))))?(((((map__63982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63982):map__63982);
var options__$1 = map__63982__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63982__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63982__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63982__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63973_SHARP_){
return (((p1__63973_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__63973_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__63986 = cljs.core.set(refresh);
var G__63986__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__63986,follow_on_reads):G__63986);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63986__$1,ref);
} else {
return G__63986__$1;
}
})();
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),node], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__63987 = s;
var G__63987__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__63987,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__63987);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__63987__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__63987__$1;
}
}));

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_(app__$1)){
} else {
var id__63514__auto___64238 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__63514__auto___64238,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_(app__$1,options__$1);
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__63514__auto___64238,cljs.core.dec);
}}

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * [app abort-id]
 * 
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_;
/**
 * Installs synchronous transaction processing on a fulcro application.
 * 
 *   ```
 *   (defonce app (stx/with-synchronous-transactions
 *               (app/fulcro-app {...})))
 *   ```
 * 
 *   This plug-in attempts to do as much work as possible synchronously, including the processing of "remotes" that
 *   can behave synchronously. This processing system
 *   preserves transactional ordering semantics for nested submissions, but cannot guarantee that the overall sequence of
 *   operations will exactly match what you'd see if using the standard tx processing.
 * 
 *   The options map you can pass to `transact!` supports most of the same things as the standard tx processing, with the significant exception of
 *   `:optimistic? false` (pessimistic transactions). It also *always* assumes synchronous operation, thought the
 *   `synchronous?` option (if used) does imply that only the current component should be refreshed in the UI.
 * 
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:synchronous?` - When true, causes the rendering to only refresh the calling component (if possible), since the implication
 *   is for fast-as-possible refresh semantics, even though this tx processing is already sync.
 *   - `:refresh` - A hint. Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - A hint. Vector of idents/keywords.  If the underlying configured rendering algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI, and they may be refreshed immediately on
 *  `transact!`. This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$with_synchronous_transactions(app__$1){
var remotes = cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1))));
var send_queues = cljs.core.zipmap(remotes,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
})));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_], 0)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),send_queues], null));
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.js.map
