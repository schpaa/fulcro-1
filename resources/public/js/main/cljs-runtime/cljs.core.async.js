goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__53470 = arguments.length;
switch (G__53470) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53471 = (function (f,blockable,meta53472){
this.f = f;
this.blockable = blockable;
this.meta53472 = meta53472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53473,meta53472__$1){
var self__ = this;
var _53473__$1 = this;
return (new cljs.core.async.t_cljs$core$async53471(self__.f,self__.blockable,meta53472__$1));
}));

(cljs.core.async.t_cljs$core$async53471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53473){
var self__ = this;
var _53473__$1 = this;
return self__.meta53472;
}));

(cljs.core.async.t_cljs$core$async53471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async53471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async53471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta53472","meta53472",-260772471,null)], null);
}));

(cljs.core.async.t_cljs$core$async53471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53471");

(cljs.core.async.t_cljs$core$async53471.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53471.
 */
cljs.core.async.__GT_t_cljs$core$async53471 = (function cljs$core$async$__GT_t_cljs$core$async53471(f__$1,blockable__$1,meta53472){
return (new cljs.core.async.t_cljs$core$async53471(f__$1,blockable__$1,meta53472));
});

}

return (new cljs.core.async.t_cljs$core$async53471(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__53476 = arguments.length;
switch (G__53476) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__53478 = arguments.length;
switch (G__53478) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__53480 = arguments.length;
switch (G__53480) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_55123 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55123) : fn1.call(null,val_55123));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55123) : fn1.call(null,val_55123));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__53482 = arguments.length;
switch (G__53482) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___55129 = n;
var x_55130 = (0);
while(true){
if((x_55130 < n__4613__auto___55129)){
(a[x_55130] = x_55130);

var G__55131 = (x_55130 + (1));
x_55130 = G__55131;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53486 = (function (flag,meta53487){
this.flag = flag;
this.meta53487 = meta53487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53488,meta53487__$1){
var self__ = this;
var _53488__$1 = this;
return (new cljs.core.async.t_cljs$core$async53486(self__.flag,meta53487__$1));
}));

(cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53488){
var self__ = this;
var _53488__$1 = this;
return self__.meta53487;
}));

(cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async53486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta53487","meta53487",-24703191,null)], null);
}));

(cljs.core.async.t_cljs$core$async53486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53486");

(cljs.core.async.t_cljs$core$async53486.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53486.
 */
cljs.core.async.__GT_t_cljs$core$async53486 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async53486(flag__$1,meta53487){
return (new cljs.core.async.t_cljs$core$async53486(flag__$1,meta53487));
});

}

return (new cljs.core.async.t_cljs$core$async53486(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53490 = (function (flag,cb,meta53491){
this.flag = flag;
this.cb = cb;
this.meta53491 = meta53491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53492,meta53491__$1){
var self__ = this;
var _53492__$1 = this;
return (new cljs.core.async.t_cljs$core$async53490(self__.flag,self__.cb,meta53491__$1));
}));

(cljs.core.async.t_cljs$core$async53490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53492){
var self__ = this;
var _53492__$1 = this;
return self__.meta53491;
}));

(cljs.core.async.t_cljs$core$async53490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async53490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async53490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta53491","meta53491",-671375135,null)], null);
}));

(cljs.core.async.t_cljs$core$async53490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53490");

(cljs.core.async.t_cljs$core$async53490.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53490.
 */
cljs.core.async.__GT_t_cljs$core$async53490 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async53490(flag__$1,cb__$1,meta53491){
return (new cljs.core.async.t_cljs$core$async53490(flag__$1,cb__$1,meta53491));
});

}

return (new cljs.core.async.t_cljs$core$async53490(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53493_SHARP_){
var G__53495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53493_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__53495) : fret.call(null,G__53495));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53494_SHARP_){
var G__53496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53494_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__53496) : fret.call(null,G__53496));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__55153 = (i + (1));
i = G__55153;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55154 = arguments.length;
var i__4737__auto___55155 = (0);
while(true){
if((i__4737__auto___55155 < len__4736__auto___55154)){
args__4742__auto__.push((arguments[i__4737__auto___55155]));

var G__55157 = (i__4737__auto___55155 + (1));
i__4737__auto___55155 = G__55157;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__53499){
var map__53500 = p__53499;
var map__53500__$1 = (((((!((map__53500 == null))))?(((((map__53500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53500):map__53500);
var opts = map__53500__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq53497){
var G__53498 = cljs.core.first(seq53497);
var seq53497__$1 = cljs.core.next(seq53497);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53498,seq53497__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__53503 = arguments.length;
switch (G__53503) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__53396__auto___55174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_53527){
var state_val_53528 = (state_53527[(1)]);
if((state_val_53528 === (7))){
var inst_53523 = (state_53527[(2)]);
var state_53527__$1 = state_53527;
var statearr_53529_55176 = state_53527__$1;
(statearr_53529_55176[(2)] = inst_53523);

(statearr_53529_55176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (1))){
var state_53527__$1 = state_53527;
var statearr_53530_55177 = state_53527__$1;
(statearr_53530_55177[(2)] = null);

(statearr_53530_55177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (4))){
var inst_53506 = (state_53527[(7)]);
var inst_53506__$1 = (state_53527[(2)]);
var inst_53507 = (inst_53506__$1 == null);
var state_53527__$1 = (function (){var statearr_53531 = state_53527;
(statearr_53531[(7)] = inst_53506__$1);

return statearr_53531;
})();
if(cljs.core.truth_(inst_53507)){
var statearr_53532_55181 = state_53527__$1;
(statearr_53532_55181[(1)] = (5));

} else {
var statearr_53533_55183 = state_53527__$1;
(statearr_53533_55183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (13))){
var state_53527__$1 = state_53527;
var statearr_53534_55184 = state_53527__$1;
(statearr_53534_55184[(2)] = null);

(statearr_53534_55184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (6))){
var inst_53506 = (state_53527[(7)]);
var state_53527__$1 = state_53527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53527__$1,(11),to,inst_53506);
} else {
if((state_val_53528 === (3))){
var inst_53525 = (state_53527[(2)]);
var state_53527__$1 = state_53527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53527__$1,inst_53525);
} else {
if((state_val_53528 === (12))){
var state_53527__$1 = state_53527;
var statearr_53546_55186 = state_53527__$1;
(statearr_53546_55186[(2)] = null);

(statearr_53546_55186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (2))){
var state_53527__$1 = state_53527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53527__$1,(4),from);
} else {
if((state_val_53528 === (11))){
var inst_53516 = (state_53527[(2)]);
var state_53527__$1 = state_53527;
if(cljs.core.truth_(inst_53516)){
var statearr_53547_55190 = state_53527__$1;
(statearr_53547_55190[(1)] = (12));

} else {
var statearr_53548_55192 = state_53527__$1;
(statearr_53548_55192[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (9))){
var state_53527__$1 = state_53527;
var statearr_53549_55193 = state_53527__$1;
(statearr_53549_55193[(2)] = null);

(statearr_53549_55193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (5))){
var state_53527__$1 = state_53527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53550_55195 = state_53527__$1;
(statearr_53550_55195[(1)] = (8));

} else {
var statearr_53551_55196 = state_53527__$1;
(statearr_53551_55196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (14))){
var inst_53521 = (state_53527[(2)]);
var state_53527__$1 = state_53527;
var statearr_53552_55210 = state_53527__$1;
(statearr_53552_55210[(2)] = inst_53521);

(statearr_53552_55210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (10))){
var inst_53513 = (state_53527[(2)]);
var state_53527__$1 = state_53527;
var statearr_53554_55211 = state_53527__$1;
(statearr_53554_55211[(2)] = inst_53513);

(statearr_53554_55211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53528 === (8))){
var inst_53510 = cljs.core.async.close_BANG_(to);
var state_53527__$1 = state_53527;
var statearr_53555_55212 = state_53527__$1;
(statearr_53555_55212[(2)] = inst_53510);

(statearr_53555_55212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_53556 = [null,null,null,null,null,null,null,null];
(statearr_53556[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_53556[(1)] = (1));

return statearr_53556;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_53527){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53527);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53557){var ex__53345__auto__ = e53557;
var statearr_53558_55215 = state_53527;
(statearr_53558_55215[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53527[(4)]))){
var statearr_53559_55216 = state_53527;
(statearr_53559_55216[(1)] = cljs.core.first((state_53527[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55218 = state_53527;
state_53527 = G__55218;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_53527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_53527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_53560 = f__53397__auto__();
(statearr_53560[(6)] = c__53396__auto___55174);

return statearr_53560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__53567){
var vec__53569 = p__53567;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53569,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53569,(1),null);
var job = vec__53569;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__53396__auto___55223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_53576){
var state_val_53577 = (state_53576[(1)]);
if((state_val_53577 === (1))){
var state_53576__$1 = state_53576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53576__$1,(2),res,v);
} else {
if((state_val_53577 === (2))){
var inst_53573 = (state_53576[(2)]);
var inst_53574 = cljs.core.async.close_BANG_(res);
var state_53576__$1 = (function (){var statearr_53585 = state_53576;
(statearr_53585[(7)] = inst_53573);

return statearr_53585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53576__$1,inst_53574);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0 = (function (){
var statearr_53587 = [null,null,null,null,null,null,null,null];
(statearr_53587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__);

(statearr_53587[(1)] = (1));

return statearr_53587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1 = (function (state_53576){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53576);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53588){var ex__53345__auto__ = e53588;
var statearr_53589_55226 = state_53576;
(statearr_53589_55226[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53576[(4)]))){
var statearr_53590_55227 = state_53576;
(statearr_53590_55227[(1)] = cljs.core.first((state_53576[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55233 = state_53576;
state_53576 = G__55233;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = function(state_53576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1.call(this,state_53576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_53593 = f__53397__auto__();
(statearr_53593[(6)] = c__53396__auto___55223);

return statearr_53593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__53594){
var vec__53595 = p__53594;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53595,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53595,(1),null);
var job = vec__53595;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___55239 = n;
var __55240 = (0);
while(true){
if((__55240 < n__4613__auto___55239)){
var G__53598_55241 = type;
var G__53598_55242__$1 = (((G__53598_55241 instanceof cljs.core.Keyword))?G__53598_55241.fqn:null);
switch (G__53598_55242__$1) {
case "compute":
var c__53396__auto___55244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55240,c__53396__auto___55244,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async){
return (function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = ((function (__55240,c__53396__auto___55244,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async){
return (function (state_53612){
var state_val_53613 = (state_53612[(1)]);
if((state_val_53613 === (1))){
var state_53612__$1 = state_53612;
var statearr_53616_55246 = state_53612__$1;
(statearr_53616_55246[(2)] = null);

(statearr_53616_55246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (2))){
var state_53612__$1 = state_53612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53612__$1,(4),jobs);
} else {
if((state_val_53613 === (3))){
var inst_53609 = (state_53612[(2)]);
var state_53612__$1 = state_53612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53612__$1,inst_53609);
} else {
if((state_val_53613 === (4))){
var inst_53601 = (state_53612[(2)]);
var inst_53602 = process(inst_53601);
var state_53612__$1 = state_53612;
if(cljs.core.truth_(inst_53602)){
var statearr_53617_55247 = state_53612__$1;
(statearr_53617_55247[(1)] = (5));

} else {
var statearr_53618_55249 = state_53612__$1;
(statearr_53618_55249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (5))){
var state_53612__$1 = state_53612;
var statearr_53622_55250 = state_53612__$1;
(statearr_53622_55250[(2)] = null);

(statearr_53622_55250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (6))){
var state_53612__$1 = state_53612;
var statearr_53623_55251 = state_53612__$1;
(statearr_53623_55251[(2)] = null);

(statearr_53623_55251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53613 === (7))){
var inst_53607 = (state_53612[(2)]);
var state_53612__$1 = state_53612;
var statearr_53628_55254 = state_53612__$1;
(statearr_53628_55254[(2)] = inst_53607);

(statearr_53628_55254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__55240,c__53396__auto___55244,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async))
;
return ((function (__55240,switch__53341__auto__,c__53396__auto___55244,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0 = (function (){
var statearr_53629 = [null,null,null,null,null,null,null];
(statearr_53629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__);

(statearr_53629[(1)] = (1));

return statearr_53629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1 = (function (state_53612){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53612);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53630){var ex__53345__auto__ = e53630;
var statearr_53631_55257 = state_53612;
(statearr_53631_55257[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53612[(4)]))){
var statearr_53632_55258 = state_53612;
(statearr_53632_55258[(1)] = cljs.core.first((state_53612[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55260 = state_53612;
state_53612 = G__55260;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = function(state_53612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1.call(this,state_53612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__;
})()
;})(__55240,switch__53341__auto__,c__53396__auto___55244,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async))
})();
var state__53398__auto__ = (function (){var statearr_53633 = f__53397__auto__();
(statearr_53633[(6)] = c__53396__auto___55244);

return statearr_53633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
});})(__55240,c__53396__auto___55244,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async))
);


break;
case "async":
var c__53396__auto___55263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55240,c__53396__auto___55263,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async){
return (function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = ((function (__55240,c__53396__auto___55263,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async){
return (function (state_53646){
var state_val_53647 = (state_53646[(1)]);
if((state_val_53647 === (1))){
var state_53646__$1 = state_53646;
var statearr_53650_55293 = state_53646__$1;
(statearr_53650_55293[(2)] = null);

(statearr_53650_55293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53647 === (2))){
var state_53646__$1 = state_53646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53646__$1,(4),jobs);
} else {
if((state_val_53647 === (3))){
var inst_53644 = (state_53646[(2)]);
var state_53646__$1 = state_53646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53646__$1,inst_53644);
} else {
if((state_val_53647 === (4))){
var inst_53636 = (state_53646[(2)]);
var inst_53637 = async(inst_53636);
var state_53646__$1 = state_53646;
if(cljs.core.truth_(inst_53637)){
var statearr_53652_55295 = state_53646__$1;
(statearr_53652_55295[(1)] = (5));

} else {
var statearr_53653_55297 = state_53646__$1;
(statearr_53653_55297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53647 === (5))){
var state_53646__$1 = state_53646;
var statearr_53657_55298 = state_53646__$1;
(statearr_53657_55298[(2)] = null);

(statearr_53657_55298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53647 === (6))){
var state_53646__$1 = state_53646;
var statearr_53661_55299 = state_53646__$1;
(statearr_53661_55299[(2)] = null);

(statearr_53661_55299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53647 === (7))){
var inst_53642 = (state_53646[(2)]);
var state_53646__$1 = state_53646;
var statearr_53662_55301 = state_53646__$1;
(statearr_53662_55301[(2)] = inst_53642);

(statearr_53662_55301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__55240,c__53396__auto___55263,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async))
;
return ((function (__55240,switch__53341__auto__,c__53396__auto___55263,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0 = (function (){
var statearr_53664 = [null,null,null,null,null,null,null];
(statearr_53664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__);

(statearr_53664[(1)] = (1));

return statearr_53664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1 = (function (state_53646){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53646);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53667){var ex__53345__auto__ = e53667;
var statearr_53668_55304 = state_53646;
(statearr_53668_55304[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53646[(4)]))){
var statearr_53672_55306 = state_53646;
(statearr_53672_55306[(1)] = cljs.core.first((state_53646[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55307 = state_53646;
state_53646 = G__55307;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = function(state_53646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1.call(this,state_53646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__;
})()
;})(__55240,switch__53341__auto__,c__53396__auto___55263,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async))
})();
var state__53398__auto__ = (function (){var statearr_53673 = f__53397__auto__();
(statearr_53673[(6)] = c__53396__auto___55263);

return statearr_53673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
});})(__55240,c__53396__auto___55263,G__53598_55241,G__53598_55242__$1,n__4613__auto___55239,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53598_55242__$1)].join('')));

}

var G__55308 = (__55240 + (1));
__55240 = G__55308;
continue;
} else {
}
break;
}

var c__53396__auto___55309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_53695){
var state_val_53696 = (state_53695[(1)]);
if((state_val_53696 === (7))){
var inst_53691 = (state_53695[(2)]);
var state_53695__$1 = state_53695;
var statearr_53700_55310 = state_53695__$1;
(statearr_53700_55310[(2)] = inst_53691);

(statearr_53700_55310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53696 === (1))){
var state_53695__$1 = state_53695;
var statearr_53701_55311 = state_53695__$1;
(statearr_53701_55311[(2)] = null);

(statearr_53701_55311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53696 === (4))){
var inst_53676 = (state_53695[(7)]);
var inst_53676__$1 = (state_53695[(2)]);
var inst_53677 = (inst_53676__$1 == null);
var state_53695__$1 = (function (){var statearr_53713 = state_53695;
(statearr_53713[(7)] = inst_53676__$1);

return statearr_53713;
})();
if(cljs.core.truth_(inst_53677)){
var statearr_53715_55322 = state_53695__$1;
(statearr_53715_55322[(1)] = (5));

} else {
var statearr_53716_55323 = state_53695__$1;
(statearr_53716_55323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53696 === (6))){
var inst_53676 = (state_53695[(7)]);
var inst_53681 = (state_53695[(8)]);
var inst_53681__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_53682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53683 = [inst_53676,inst_53681__$1];
var inst_53684 = (new cljs.core.PersistentVector(null,2,(5),inst_53682,inst_53683,null));
var state_53695__$1 = (function (){var statearr_53717 = state_53695;
(statearr_53717[(8)] = inst_53681__$1);

return statearr_53717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53695__$1,(8),jobs,inst_53684);
} else {
if((state_val_53696 === (3))){
var inst_53693 = (state_53695[(2)]);
var state_53695__$1 = state_53695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53695__$1,inst_53693);
} else {
if((state_val_53696 === (2))){
var state_53695__$1 = state_53695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53695__$1,(4),from);
} else {
if((state_val_53696 === (9))){
var inst_53688 = (state_53695[(2)]);
var state_53695__$1 = (function (){var statearr_53718 = state_53695;
(statearr_53718[(9)] = inst_53688);

return statearr_53718;
})();
var statearr_53719_55366 = state_53695__$1;
(statearr_53719_55366[(2)] = null);

(statearr_53719_55366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53696 === (5))){
var inst_53679 = cljs.core.async.close_BANG_(jobs);
var state_53695__$1 = state_53695;
var statearr_53720_55370 = state_53695__$1;
(statearr_53720_55370[(2)] = inst_53679);

(statearr_53720_55370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53696 === (8))){
var inst_53681 = (state_53695[(8)]);
var inst_53686 = (state_53695[(2)]);
var state_53695__$1 = (function (){var statearr_53721 = state_53695;
(statearr_53721[(10)] = inst_53686);

return statearr_53721;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53695__$1,(9),results,inst_53681);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0 = (function (){
var statearr_53722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__);

(statearr_53722[(1)] = (1));

return statearr_53722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1 = (function (state_53695){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53695);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53728){var ex__53345__auto__ = e53728;
var statearr_53729_55372 = state_53695;
(statearr_53729_55372[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53695[(4)]))){
var statearr_53730_55373 = state_53695;
(statearr_53730_55373[(1)] = cljs.core.first((state_53695[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55375 = state_53695;
state_53695 = G__55375;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = function(state_53695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1.call(this,state_53695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_53731 = f__53397__auto__();
(statearr_53731[(6)] = c__53396__auto___55309);

return statearr_53731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


var c__53396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_53769){
var state_val_53770 = (state_53769[(1)]);
if((state_val_53770 === (7))){
var inst_53765 = (state_53769[(2)]);
var state_53769__$1 = state_53769;
var statearr_53771_55378 = state_53769__$1;
(statearr_53771_55378[(2)] = inst_53765);

(statearr_53771_55378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (20))){
var state_53769__$1 = state_53769;
var statearr_53772_55382 = state_53769__$1;
(statearr_53772_55382[(2)] = null);

(statearr_53772_55382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (1))){
var state_53769__$1 = state_53769;
var statearr_53773_55387 = state_53769__$1;
(statearr_53773_55387[(2)] = null);

(statearr_53773_55387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (4))){
var inst_53734 = (state_53769[(7)]);
var inst_53734__$1 = (state_53769[(2)]);
var inst_53735 = (inst_53734__$1 == null);
var state_53769__$1 = (function (){var statearr_53774 = state_53769;
(statearr_53774[(7)] = inst_53734__$1);

return statearr_53774;
})();
if(cljs.core.truth_(inst_53735)){
var statearr_53775_55388 = state_53769__$1;
(statearr_53775_55388[(1)] = (5));

} else {
var statearr_53776_55389 = state_53769__$1;
(statearr_53776_55389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (15))){
var inst_53747 = (state_53769[(8)]);
var state_53769__$1 = state_53769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53769__$1,(18),to,inst_53747);
} else {
if((state_val_53770 === (21))){
var inst_53760 = (state_53769[(2)]);
var state_53769__$1 = state_53769;
var statearr_53777_55390 = state_53769__$1;
(statearr_53777_55390[(2)] = inst_53760);

(statearr_53777_55390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (13))){
var inst_53762 = (state_53769[(2)]);
var state_53769__$1 = (function (){var statearr_53778 = state_53769;
(statearr_53778[(9)] = inst_53762);

return statearr_53778;
})();
var statearr_53779_55391 = state_53769__$1;
(statearr_53779_55391[(2)] = null);

(statearr_53779_55391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (6))){
var inst_53734 = (state_53769[(7)]);
var state_53769__$1 = state_53769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53769__$1,(11),inst_53734);
} else {
if((state_val_53770 === (17))){
var inst_53755 = (state_53769[(2)]);
var state_53769__$1 = state_53769;
if(cljs.core.truth_(inst_53755)){
var statearr_53780_55392 = state_53769__$1;
(statearr_53780_55392[(1)] = (19));

} else {
var statearr_53781_55393 = state_53769__$1;
(statearr_53781_55393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (3))){
var inst_53767 = (state_53769[(2)]);
var state_53769__$1 = state_53769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53769__$1,inst_53767);
} else {
if((state_val_53770 === (12))){
var inst_53744 = (state_53769[(10)]);
var state_53769__$1 = state_53769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53769__$1,(14),inst_53744);
} else {
if((state_val_53770 === (2))){
var state_53769__$1 = state_53769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53769__$1,(4),results);
} else {
if((state_val_53770 === (19))){
var state_53769__$1 = state_53769;
var statearr_53782_55399 = state_53769__$1;
(statearr_53782_55399[(2)] = null);

(statearr_53782_55399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (11))){
var inst_53744 = (state_53769[(2)]);
var state_53769__$1 = (function (){var statearr_53783 = state_53769;
(statearr_53783[(10)] = inst_53744);

return statearr_53783;
})();
var statearr_53784_55401 = state_53769__$1;
(statearr_53784_55401[(2)] = null);

(statearr_53784_55401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (9))){
var state_53769__$1 = state_53769;
var statearr_53785_55403 = state_53769__$1;
(statearr_53785_55403[(2)] = null);

(statearr_53785_55403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (5))){
var state_53769__$1 = state_53769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53786_55404 = state_53769__$1;
(statearr_53786_55404[(1)] = (8));

} else {
var statearr_53787_55405 = state_53769__$1;
(statearr_53787_55405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (14))){
var inst_53747 = (state_53769[(8)]);
var inst_53747__$1 = (state_53769[(2)]);
var inst_53748 = (inst_53747__$1 == null);
var inst_53749 = cljs.core.not(inst_53748);
var state_53769__$1 = (function (){var statearr_53789 = state_53769;
(statearr_53789[(8)] = inst_53747__$1);

return statearr_53789;
})();
if(inst_53749){
var statearr_53790_55419 = state_53769__$1;
(statearr_53790_55419[(1)] = (15));

} else {
var statearr_53791_55420 = state_53769__$1;
(statearr_53791_55420[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (16))){
var state_53769__$1 = state_53769;
var statearr_53792_55424 = state_53769__$1;
(statearr_53792_55424[(2)] = false);

(statearr_53792_55424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (10))){
var inst_53741 = (state_53769[(2)]);
var state_53769__$1 = state_53769;
var statearr_53793_55425 = state_53769__$1;
(statearr_53793_55425[(2)] = inst_53741);

(statearr_53793_55425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (18))){
var inst_53752 = (state_53769[(2)]);
var state_53769__$1 = state_53769;
var statearr_53794_55426 = state_53769__$1;
(statearr_53794_55426[(2)] = inst_53752);

(statearr_53794_55426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (8))){
var inst_53738 = cljs.core.async.close_BANG_(to);
var state_53769__$1 = state_53769;
var statearr_53795_55431 = state_53769__$1;
(statearr_53795_55431[(2)] = inst_53738);

(statearr_53795_55431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0 = (function (){
var statearr_53798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__);

(statearr_53798[(1)] = (1));

return statearr_53798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1 = (function (state_53769){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53769);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53799){var ex__53345__auto__ = e53799;
var statearr_53800_55435 = state_53769;
(statearr_53800_55435[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53769[(4)]))){
var statearr_53801_55436 = state_53769;
(statearr_53801_55436[(1)] = cljs.core.first((state_53769[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55440 = state_53769;
state_53769 = G__55440;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__ = function(state_53769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1.call(this,state_53769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53342__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_53802 = f__53397__auto__();
(statearr_53802[(6)] = c__53396__auto__);

return statearr_53802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));

return c__53396__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__53804 = arguments.length;
switch (G__53804) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__53806 = arguments.length;
switch (G__53806) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__53817 = arguments.length;
switch (G__53817) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__53396__auto___55460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_53847){
var state_val_53848 = (state_53847[(1)]);
if((state_val_53848 === (7))){
var inst_53843 = (state_53847[(2)]);
var state_53847__$1 = state_53847;
var statearr_53849_55461 = state_53847__$1;
(statearr_53849_55461[(2)] = inst_53843);

(statearr_53849_55461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (1))){
var state_53847__$1 = state_53847;
var statearr_53850_55462 = state_53847__$1;
(statearr_53850_55462[(2)] = null);

(statearr_53850_55462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (4))){
var inst_53824 = (state_53847[(7)]);
var inst_53824__$1 = (state_53847[(2)]);
var inst_53825 = (inst_53824__$1 == null);
var state_53847__$1 = (function (){var statearr_53851 = state_53847;
(statearr_53851[(7)] = inst_53824__$1);

return statearr_53851;
})();
if(cljs.core.truth_(inst_53825)){
var statearr_53852_55463 = state_53847__$1;
(statearr_53852_55463[(1)] = (5));

} else {
var statearr_53853_55464 = state_53847__$1;
(statearr_53853_55464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (13))){
var state_53847__$1 = state_53847;
var statearr_53854_55465 = state_53847__$1;
(statearr_53854_55465[(2)] = null);

(statearr_53854_55465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (6))){
var inst_53824 = (state_53847[(7)]);
var inst_53830 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53824) : p.call(null,inst_53824));
var state_53847__$1 = state_53847;
if(cljs.core.truth_(inst_53830)){
var statearr_53855_55466 = state_53847__$1;
(statearr_53855_55466[(1)] = (9));

} else {
var statearr_53856_55467 = state_53847__$1;
(statearr_53856_55467[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (3))){
var inst_53845 = (state_53847[(2)]);
var state_53847__$1 = state_53847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53847__$1,inst_53845);
} else {
if((state_val_53848 === (12))){
var state_53847__$1 = state_53847;
var statearr_53857_55469 = state_53847__$1;
(statearr_53857_55469[(2)] = null);

(statearr_53857_55469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (2))){
var state_53847__$1 = state_53847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53847__$1,(4),ch);
} else {
if((state_val_53848 === (11))){
var inst_53824 = (state_53847[(7)]);
var inst_53834 = (state_53847[(2)]);
var state_53847__$1 = state_53847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53847__$1,(8),inst_53834,inst_53824);
} else {
if((state_val_53848 === (9))){
var state_53847__$1 = state_53847;
var statearr_53858_55487 = state_53847__$1;
(statearr_53858_55487[(2)] = tc);

(statearr_53858_55487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (5))){
var inst_53827 = cljs.core.async.close_BANG_(tc);
var inst_53828 = cljs.core.async.close_BANG_(fc);
var state_53847__$1 = (function (){var statearr_53859 = state_53847;
(statearr_53859[(8)] = inst_53827);

return statearr_53859;
})();
var statearr_53860_55494 = state_53847__$1;
(statearr_53860_55494[(2)] = inst_53828);

(statearr_53860_55494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (14))){
var inst_53841 = (state_53847[(2)]);
var state_53847__$1 = state_53847;
var statearr_53861_55495 = state_53847__$1;
(statearr_53861_55495[(2)] = inst_53841);

(statearr_53861_55495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (10))){
var state_53847__$1 = state_53847;
var statearr_53862_55503 = state_53847__$1;
(statearr_53862_55503[(2)] = fc);

(statearr_53862_55503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53848 === (8))){
var inst_53836 = (state_53847[(2)]);
var state_53847__$1 = state_53847;
if(cljs.core.truth_(inst_53836)){
var statearr_53863_55510 = state_53847__$1;
(statearr_53863_55510[(1)] = (12));

} else {
var statearr_53864_55517 = state_53847__$1;
(statearr_53864_55517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_53865 = [null,null,null,null,null,null,null,null,null];
(statearr_53865[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_53865[(1)] = (1));

return statearr_53865;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_53847){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53847);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53866){var ex__53345__auto__ = e53866;
var statearr_53870_55520 = state_53847;
(statearr_53870_55520[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53847[(4)]))){
var statearr_53874_55522 = state_53847;
(statearr_53874_55522[(1)] = cljs.core.first((state_53847[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55523 = state_53847;
state_53847 = G__55523;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_53847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_53847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_53875 = f__53397__auto__();
(statearr_53875[(6)] = c__53396__auto___55460);

return statearr_53875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__53396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_53897){
var state_val_53898 = (state_53897[(1)]);
if((state_val_53898 === (7))){
var inst_53893 = (state_53897[(2)]);
var state_53897__$1 = state_53897;
var statearr_53899_55526 = state_53897__$1;
(statearr_53899_55526[(2)] = inst_53893);

(statearr_53899_55526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53898 === (1))){
var inst_53876 = init;
var inst_53877 = inst_53876;
var state_53897__$1 = (function (){var statearr_53900 = state_53897;
(statearr_53900[(7)] = inst_53877);

return statearr_53900;
})();
var statearr_53901_55527 = state_53897__$1;
(statearr_53901_55527[(2)] = null);

(statearr_53901_55527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53898 === (4))){
var inst_53880 = (state_53897[(8)]);
var inst_53880__$1 = (state_53897[(2)]);
var inst_53881 = (inst_53880__$1 == null);
var state_53897__$1 = (function (){var statearr_53902 = state_53897;
(statearr_53902[(8)] = inst_53880__$1);

return statearr_53902;
})();
if(cljs.core.truth_(inst_53881)){
var statearr_53903_55534 = state_53897__$1;
(statearr_53903_55534[(1)] = (5));

} else {
var statearr_53904_55535 = state_53897__$1;
(statearr_53904_55535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53898 === (6))){
var inst_53880 = (state_53897[(8)]);
var inst_53884 = (state_53897[(9)]);
var inst_53877 = (state_53897[(7)]);
var inst_53884__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_53877,inst_53880) : f.call(null,inst_53877,inst_53880));
var inst_53885 = cljs.core.reduced_QMARK_(inst_53884__$1);
var state_53897__$1 = (function (){var statearr_53905 = state_53897;
(statearr_53905[(9)] = inst_53884__$1);

return statearr_53905;
})();
if(inst_53885){
var statearr_53906_55542 = state_53897__$1;
(statearr_53906_55542[(1)] = (8));

} else {
var statearr_53907_55543 = state_53897__$1;
(statearr_53907_55543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53898 === (3))){
var inst_53895 = (state_53897[(2)]);
var state_53897__$1 = state_53897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53897__$1,inst_53895);
} else {
if((state_val_53898 === (2))){
var state_53897__$1 = state_53897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53897__$1,(4),ch);
} else {
if((state_val_53898 === (9))){
var inst_53884 = (state_53897[(9)]);
var inst_53877 = inst_53884;
var state_53897__$1 = (function (){var statearr_53908 = state_53897;
(statearr_53908[(7)] = inst_53877);

return statearr_53908;
})();
var statearr_53909_55544 = state_53897__$1;
(statearr_53909_55544[(2)] = null);

(statearr_53909_55544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53898 === (5))){
var inst_53877 = (state_53897[(7)]);
var state_53897__$1 = state_53897;
var statearr_53910_55545 = state_53897__$1;
(statearr_53910_55545[(2)] = inst_53877);

(statearr_53910_55545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53898 === (10))){
var inst_53891 = (state_53897[(2)]);
var state_53897__$1 = state_53897;
var statearr_53911_55546 = state_53897__$1;
(statearr_53911_55546[(2)] = inst_53891);

(statearr_53911_55546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53898 === (8))){
var inst_53884 = (state_53897[(9)]);
var inst_53887 = cljs.core.deref(inst_53884);
var state_53897__$1 = state_53897;
var statearr_53912_55553 = state_53897__$1;
(statearr_53912_55553[(2)] = inst_53887);

(statearr_53912_55553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__53342__auto__ = null;
var cljs$core$async$reduce_$_state_machine__53342__auto____0 = (function (){
var statearr_53913 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53913[(0)] = cljs$core$async$reduce_$_state_machine__53342__auto__);

(statearr_53913[(1)] = (1));

return statearr_53913;
});
var cljs$core$async$reduce_$_state_machine__53342__auto____1 = (function (state_53897){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53897);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53914){var ex__53345__auto__ = e53914;
var statearr_53915_55554 = state_53897;
(statearr_53915_55554[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53897[(4)]))){
var statearr_53916_55555 = state_53897;
(statearr_53916_55555[(1)] = cljs.core.first((state_53897[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55556 = state_53897;
state_53897 = G__55556;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__53342__auto__ = function(state_53897){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__53342__auto____1.call(this,state_53897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__53342__auto____0;
cljs$core$async$reduce_$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__53342__auto____1;
return cljs$core$async$reduce_$_state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_53917 = f__53397__auto__();
(statearr_53917[(6)] = c__53396__auto__);

return statearr_53917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));

return c__53396__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__53396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_53923){
var state_val_53924 = (state_53923[(1)]);
if((state_val_53924 === (1))){
var inst_53918 = cljs.core.async.reduce(f__$1,init,ch);
var state_53923__$1 = state_53923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53923__$1,(2),inst_53918);
} else {
if((state_val_53924 === (2))){
var inst_53920 = (state_53923[(2)]);
var inst_53921 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_53920) : f__$1.call(null,inst_53920));
var state_53923__$1 = state_53923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53923__$1,inst_53921);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__53342__auto__ = null;
var cljs$core$async$transduce_$_state_machine__53342__auto____0 = (function (){
var statearr_53925 = [null,null,null,null,null,null,null];
(statearr_53925[(0)] = cljs$core$async$transduce_$_state_machine__53342__auto__);

(statearr_53925[(1)] = (1));

return statearr_53925;
});
var cljs$core$async$transduce_$_state_machine__53342__auto____1 = (function (state_53923){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53923);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53926){var ex__53345__auto__ = e53926;
var statearr_53927_55562 = state_53923;
(statearr_53927_55562[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53923[(4)]))){
var statearr_53928_55563 = state_53923;
(statearr_53928_55563[(1)] = cljs.core.first((state_53923[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55566 = state_53923;
state_53923 = G__55566;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__53342__auto__ = function(state_53923){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__53342__auto____1.call(this,state_53923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__53342__auto____0;
cljs$core$async$transduce_$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__53342__auto____1;
return cljs$core$async$transduce_$_state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_53929 = f__53397__auto__();
(statearr_53929[(6)] = c__53396__auto__);

return statearr_53929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));

return c__53396__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__53931 = arguments.length;
switch (G__53931) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__53396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_53956){
var state_val_53957 = (state_53956[(1)]);
if((state_val_53957 === (7))){
var inst_53938 = (state_53956[(2)]);
var state_53956__$1 = state_53956;
var statearr_53958_55573 = state_53956__$1;
(statearr_53958_55573[(2)] = inst_53938);

(statearr_53958_55573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (1))){
var inst_53932 = cljs.core.seq(coll);
var inst_53933 = inst_53932;
var state_53956__$1 = (function (){var statearr_53959 = state_53956;
(statearr_53959[(7)] = inst_53933);

return statearr_53959;
})();
var statearr_53960_55578 = state_53956__$1;
(statearr_53960_55578[(2)] = null);

(statearr_53960_55578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (4))){
var inst_53933 = (state_53956[(7)]);
var inst_53936 = cljs.core.first(inst_53933);
var state_53956__$1 = state_53956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53956__$1,(7),ch,inst_53936);
} else {
if((state_val_53957 === (13))){
var inst_53950 = (state_53956[(2)]);
var state_53956__$1 = state_53956;
var statearr_53961_55580 = state_53956__$1;
(statearr_53961_55580[(2)] = inst_53950);

(statearr_53961_55580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (6))){
var inst_53941 = (state_53956[(2)]);
var state_53956__$1 = state_53956;
if(cljs.core.truth_(inst_53941)){
var statearr_53962_55582 = state_53956__$1;
(statearr_53962_55582[(1)] = (8));

} else {
var statearr_53963_55583 = state_53956__$1;
(statearr_53963_55583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (3))){
var inst_53954 = (state_53956[(2)]);
var state_53956__$1 = state_53956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53956__$1,inst_53954);
} else {
if((state_val_53957 === (12))){
var state_53956__$1 = state_53956;
var statearr_53964_55587 = state_53956__$1;
(statearr_53964_55587[(2)] = null);

(statearr_53964_55587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (2))){
var inst_53933 = (state_53956[(7)]);
var state_53956__$1 = state_53956;
if(cljs.core.truth_(inst_53933)){
var statearr_53965_55595 = state_53956__$1;
(statearr_53965_55595[(1)] = (4));

} else {
var statearr_53966_55596 = state_53956__$1;
(statearr_53966_55596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (11))){
var inst_53947 = cljs.core.async.close_BANG_(ch);
var state_53956__$1 = state_53956;
var statearr_53967_55597 = state_53956__$1;
(statearr_53967_55597[(2)] = inst_53947);

(statearr_53967_55597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (9))){
var state_53956__$1 = state_53956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53968_55598 = state_53956__$1;
(statearr_53968_55598[(1)] = (11));

} else {
var statearr_53969_55599 = state_53956__$1;
(statearr_53969_55599[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (5))){
var inst_53933 = (state_53956[(7)]);
var state_53956__$1 = state_53956;
var statearr_53970_55600 = state_53956__$1;
(statearr_53970_55600[(2)] = inst_53933);

(statearr_53970_55600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (10))){
var inst_53952 = (state_53956[(2)]);
var state_53956__$1 = state_53956;
var statearr_53971_55601 = state_53956__$1;
(statearr_53971_55601[(2)] = inst_53952);

(statearr_53971_55601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (8))){
var inst_53933 = (state_53956[(7)]);
var inst_53943 = cljs.core.next(inst_53933);
var inst_53933__$1 = inst_53943;
var state_53956__$1 = (function (){var statearr_53972 = state_53956;
(statearr_53972[(7)] = inst_53933__$1);

return statearr_53972;
})();
var statearr_53973_55606 = state_53956__$1;
(statearr_53973_55606[(2)] = null);

(statearr_53973_55606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_53974 = [null,null,null,null,null,null,null,null];
(statearr_53974[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_53974[(1)] = (1));

return statearr_53974;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_53956){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_53956);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e53975){var ex__53345__auto__ = e53975;
var statearr_53976_55611 = state_53956;
(statearr_53976_55611[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_53956[(4)]))){
var statearr_53977_55612 = state_53956;
(statearr_53977_55612[(1)] = cljs.core.first((state_53956[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55614 = state_53956;
state_53956 = G__55614;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_53956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_53956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_53978 = f__53397__auto__();
(statearr_53978[(6)] = c__53396__auto__);

return statearr_53978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));

return c__53396__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__53984 = arguments.length;
switch (G__53984) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_55617 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_55617(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_55619 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_55619(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_55620 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_55620(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_55621 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_55621(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53996 = (function (ch,cs,meta53997){
this.ch = ch;
this.cs = cs;
this.meta53997 = meta53997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53998,meta53997__$1){
var self__ = this;
var _53998__$1 = this;
return (new cljs.core.async.t_cljs$core$async53996(self__.ch,self__.cs,meta53997__$1));
}));

(cljs.core.async.t_cljs$core$async53996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53998){
var self__ = this;
var _53998__$1 = this;
return self__.meta53997;
}));

(cljs.core.async.t_cljs$core$async53996.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53996.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53996.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async53996.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async53996.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async53996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta53997","meta53997",-334644079,null)], null);
}));

(cljs.core.async.t_cljs$core$async53996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53996");

(cljs.core.async.t_cljs$core$async53996.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53996.
 */
cljs.core.async.__GT_t_cljs$core$async53996 = (function cljs$core$async$mult_$___GT_t_cljs$core$async53996(ch__$1,cs__$1,meta53997){
return (new cljs.core.async.t_cljs$core$async53996(ch__$1,cs__$1,meta53997));
});

}

return (new cljs.core.async.t_cljs$core$async53996(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__53396__auto___55640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54140){
var state_val_54141 = (state_54140[(1)]);
if((state_val_54141 === (7))){
var inst_54136 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54142_55641 = state_54140__$1;
(statearr_54142_55641[(2)] = inst_54136);

(statearr_54142_55641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (20))){
var inst_54040 = (state_54140[(7)]);
var inst_54052 = cljs.core.first(inst_54040);
var inst_54053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54052,(0),null);
var inst_54054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54052,(1),null);
var state_54140__$1 = (function (){var statearr_54143 = state_54140;
(statearr_54143[(8)] = inst_54053);

return statearr_54143;
})();
if(cljs.core.truth_(inst_54054)){
var statearr_54144_55642 = state_54140__$1;
(statearr_54144_55642[(1)] = (22));

} else {
var statearr_54145_55643 = state_54140__$1;
(statearr_54145_55643[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (27))){
var inst_54090 = (state_54140[(9)]);
var inst_54084 = (state_54140[(10)]);
var inst_54005 = (state_54140[(11)]);
var inst_54082 = (state_54140[(12)]);
var inst_54090__$1 = cljs.core._nth(inst_54082,inst_54084);
var inst_54091 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54090__$1,inst_54005,done);
var state_54140__$1 = (function (){var statearr_54146 = state_54140;
(statearr_54146[(9)] = inst_54090__$1);

return statearr_54146;
})();
if(cljs.core.truth_(inst_54091)){
var statearr_54147_55652 = state_54140__$1;
(statearr_54147_55652[(1)] = (30));

} else {
var statearr_54148_55653 = state_54140__$1;
(statearr_54148_55653[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (1))){
var state_54140__$1 = state_54140;
var statearr_54149_55655 = state_54140__$1;
(statearr_54149_55655[(2)] = null);

(statearr_54149_55655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (24))){
var inst_54040 = (state_54140[(7)]);
var inst_54059 = (state_54140[(2)]);
var inst_54060 = cljs.core.next(inst_54040);
var inst_54014 = inst_54060;
var inst_54015 = null;
var inst_54016 = (0);
var inst_54017 = (0);
var state_54140__$1 = (function (){var statearr_54150 = state_54140;
(statearr_54150[(13)] = inst_54016);

(statearr_54150[(14)] = inst_54015);

(statearr_54150[(15)] = inst_54017);

(statearr_54150[(16)] = inst_54059);

(statearr_54150[(17)] = inst_54014);

return statearr_54150;
})();
var statearr_54151_55656 = state_54140__$1;
(statearr_54151_55656[(2)] = null);

(statearr_54151_55656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (39))){
var state_54140__$1 = state_54140;
var statearr_54155_55657 = state_54140__$1;
(statearr_54155_55657[(2)] = null);

(statearr_54155_55657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (4))){
var inst_54005 = (state_54140[(11)]);
var inst_54005__$1 = (state_54140[(2)]);
var inst_54006 = (inst_54005__$1 == null);
var state_54140__$1 = (function (){var statearr_54157 = state_54140;
(statearr_54157[(11)] = inst_54005__$1);

return statearr_54157;
})();
if(cljs.core.truth_(inst_54006)){
var statearr_54158_55708 = state_54140__$1;
(statearr_54158_55708[(1)] = (5));

} else {
var statearr_54159_55709 = state_54140__$1;
(statearr_54159_55709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (15))){
var inst_54016 = (state_54140[(13)]);
var inst_54015 = (state_54140[(14)]);
var inst_54017 = (state_54140[(15)]);
var inst_54014 = (state_54140[(17)]);
var inst_54032 = (state_54140[(2)]);
var inst_54033 = (inst_54017 + (1));
var tmp54152 = inst_54016;
var tmp54153 = inst_54015;
var tmp54154 = inst_54014;
var inst_54014__$1 = tmp54154;
var inst_54015__$1 = tmp54153;
var inst_54016__$1 = tmp54152;
var inst_54017__$1 = inst_54033;
var state_54140__$1 = (function (){var statearr_54161 = state_54140;
(statearr_54161[(13)] = inst_54016__$1);

(statearr_54161[(14)] = inst_54015__$1);

(statearr_54161[(18)] = inst_54032);

(statearr_54161[(15)] = inst_54017__$1);

(statearr_54161[(17)] = inst_54014__$1);

return statearr_54161;
})();
var statearr_54162_55717 = state_54140__$1;
(statearr_54162_55717[(2)] = null);

(statearr_54162_55717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (21))){
var inst_54063 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54166_55720 = state_54140__$1;
(statearr_54166_55720[(2)] = inst_54063);

(statearr_54166_55720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (31))){
var inst_54090 = (state_54140[(9)]);
var inst_54094 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54090);
var state_54140__$1 = state_54140;
var statearr_54167_55721 = state_54140__$1;
(statearr_54167_55721[(2)] = inst_54094);

(statearr_54167_55721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (32))){
var inst_54081 = (state_54140[(19)]);
var inst_54084 = (state_54140[(10)]);
var inst_54083 = (state_54140[(20)]);
var inst_54082 = (state_54140[(12)]);
var inst_54096 = (state_54140[(2)]);
var inst_54097 = (inst_54084 + (1));
var tmp54163 = inst_54081;
var tmp54164 = inst_54083;
var tmp54165 = inst_54082;
var inst_54081__$1 = tmp54163;
var inst_54082__$1 = tmp54165;
var inst_54083__$1 = tmp54164;
var inst_54084__$1 = inst_54097;
var state_54140__$1 = (function (){var statearr_54168 = state_54140;
(statearr_54168[(19)] = inst_54081__$1);

(statearr_54168[(10)] = inst_54084__$1);

(statearr_54168[(21)] = inst_54096);

(statearr_54168[(20)] = inst_54083__$1);

(statearr_54168[(12)] = inst_54082__$1);

return statearr_54168;
})();
var statearr_54181_55722 = state_54140__$1;
(statearr_54181_55722[(2)] = null);

(statearr_54181_55722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (40))){
var inst_54109 = (state_54140[(22)]);
var inst_54113 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54109);
var state_54140__$1 = state_54140;
var statearr_54182_55723 = state_54140__$1;
(statearr_54182_55723[(2)] = inst_54113);

(statearr_54182_55723[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (33))){
var inst_54100 = (state_54140[(23)]);
var inst_54102 = cljs.core.chunked_seq_QMARK_(inst_54100);
var state_54140__$1 = state_54140;
if(inst_54102){
var statearr_54183_55724 = state_54140__$1;
(statearr_54183_55724[(1)] = (36));

} else {
var statearr_54184_55725 = state_54140__$1;
(statearr_54184_55725[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (13))){
var inst_54026 = (state_54140[(24)]);
var inst_54029 = cljs.core.async.close_BANG_(inst_54026);
var state_54140__$1 = state_54140;
var statearr_54185_55726 = state_54140__$1;
(statearr_54185_55726[(2)] = inst_54029);

(statearr_54185_55726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (22))){
var inst_54053 = (state_54140[(8)]);
var inst_54056 = cljs.core.async.close_BANG_(inst_54053);
var state_54140__$1 = state_54140;
var statearr_54186_55727 = state_54140__$1;
(statearr_54186_55727[(2)] = inst_54056);

(statearr_54186_55727[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (36))){
var inst_54100 = (state_54140[(23)]);
var inst_54104 = cljs.core.chunk_first(inst_54100);
var inst_54105 = cljs.core.chunk_rest(inst_54100);
var inst_54106 = cljs.core.count(inst_54104);
var inst_54081 = inst_54105;
var inst_54082 = inst_54104;
var inst_54083 = inst_54106;
var inst_54084 = (0);
var state_54140__$1 = (function (){var statearr_54187 = state_54140;
(statearr_54187[(19)] = inst_54081);

(statearr_54187[(10)] = inst_54084);

(statearr_54187[(20)] = inst_54083);

(statearr_54187[(12)] = inst_54082);

return statearr_54187;
})();
var statearr_54188_55728 = state_54140__$1;
(statearr_54188_55728[(2)] = null);

(statearr_54188_55728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (41))){
var inst_54100 = (state_54140[(23)]);
var inst_54115 = (state_54140[(2)]);
var inst_54116 = cljs.core.next(inst_54100);
var inst_54081 = inst_54116;
var inst_54082 = null;
var inst_54083 = (0);
var inst_54084 = (0);
var state_54140__$1 = (function (){var statearr_54189 = state_54140;
(statearr_54189[(19)] = inst_54081);

(statearr_54189[(10)] = inst_54084);

(statearr_54189[(20)] = inst_54083);

(statearr_54189[(12)] = inst_54082);

(statearr_54189[(25)] = inst_54115);

return statearr_54189;
})();
var statearr_54190_55729 = state_54140__$1;
(statearr_54190_55729[(2)] = null);

(statearr_54190_55729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (43))){
var state_54140__$1 = state_54140;
var statearr_54191_55730 = state_54140__$1;
(statearr_54191_55730[(2)] = null);

(statearr_54191_55730[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (29))){
var inst_54124 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54192_55731 = state_54140__$1;
(statearr_54192_55731[(2)] = inst_54124);

(statearr_54192_55731[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (44))){
var inst_54133 = (state_54140[(2)]);
var state_54140__$1 = (function (){var statearr_54193 = state_54140;
(statearr_54193[(26)] = inst_54133);

return statearr_54193;
})();
var statearr_54194_55733 = state_54140__$1;
(statearr_54194_55733[(2)] = null);

(statearr_54194_55733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (6))){
var inst_54073 = (state_54140[(27)]);
var inst_54072 = cljs.core.deref(cs);
var inst_54073__$1 = cljs.core.keys(inst_54072);
var inst_54074 = cljs.core.count(inst_54073__$1);
var inst_54075 = cljs.core.reset_BANG_(dctr,inst_54074);
var inst_54080 = cljs.core.seq(inst_54073__$1);
var inst_54081 = inst_54080;
var inst_54082 = null;
var inst_54083 = (0);
var inst_54084 = (0);
var state_54140__$1 = (function (){var statearr_54195 = state_54140;
(statearr_54195[(19)] = inst_54081);

(statearr_54195[(27)] = inst_54073__$1);

(statearr_54195[(10)] = inst_54084);

(statearr_54195[(28)] = inst_54075);

(statearr_54195[(20)] = inst_54083);

(statearr_54195[(12)] = inst_54082);

return statearr_54195;
})();
var statearr_54196_55734 = state_54140__$1;
(statearr_54196_55734[(2)] = null);

(statearr_54196_55734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (28))){
var inst_54081 = (state_54140[(19)]);
var inst_54100 = (state_54140[(23)]);
var inst_54100__$1 = cljs.core.seq(inst_54081);
var state_54140__$1 = (function (){var statearr_54198 = state_54140;
(statearr_54198[(23)] = inst_54100__$1);

return statearr_54198;
})();
if(inst_54100__$1){
var statearr_54202_55735 = state_54140__$1;
(statearr_54202_55735[(1)] = (33));

} else {
var statearr_54204_55736 = state_54140__$1;
(statearr_54204_55736[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (25))){
var inst_54084 = (state_54140[(10)]);
var inst_54083 = (state_54140[(20)]);
var inst_54087 = (inst_54084 < inst_54083);
var inst_54088 = inst_54087;
var state_54140__$1 = state_54140;
if(cljs.core.truth_(inst_54088)){
var statearr_54212_55737 = state_54140__$1;
(statearr_54212_55737[(1)] = (27));

} else {
var statearr_54217_55759 = state_54140__$1;
(statearr_54217_55759[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (34))){
var state_54140__$1 = state_54140;
var statearr_54218_55760 = state_54140__$1;
(statearr_54218_55760[(2)] = null);

(statearr_54218_55760[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (17))){
var state_54140__$1 = state_54140;
var statearr_54224_55761 = state_54140__$1;
(statearr_54224_55761[(2)] = null);

(statearr_54224_55761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (3))){
var inst_54138 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54140__$1,inst_54138);
} else {
if((state_val_54141 === (12))){
var inst_54068 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54225_55773 = state_54140__$1;
(statearr_54225_55773[(2)] = inst_54068);

(statearr_54225_55773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (2))){
var state_54140__$1 = state_54140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54140__$1,(4),ch);
} else {
if((state_val_54141 === (23))){
var state_54140__$1 = state_54140;
var statearr_54226_55774 = state_54140__$1;
(statearr_54226_55774[(2)] = null);

(statearr_54226_55774[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (35))){
var inst_54122 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54228_55777 = state_54140__$1;
(statearr_54228_55777[(2)] = inst_54122);

(statearr_54228_55777[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (19))){
var inst_54040 = (state_54140[(7)]);
var inst_54044 = cljs.core.chunk_first(inst_54040);
var inst_54045 = cljs.core.chunk_rest(inst_54040);
var inst_54046 = cljs.core.count(inst_54044);
var inst_54014 = inst_54045;
var inst_54015 = inst_54044;
var inst_54016 = inst_54046;
var inst_54017 = (0);
var state_54140__$1 = (function (){var statearr_54230 = state_54140;
(statearr_54230[(13)] = inst_54016);

(statearr_54230[(14)] = inst_54015);

(statearr_54230[(15)] = inst_54017);

(statearr_54230[(17)] = inst_54014);

return statearr_54230;
})();
var statearr_54231_55779 = state_54140__$1;
(statearr_54231_55779[(2)] = null);

(statearr_54231_55779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (11))){
var inst_54040 = (state_54140[(7)]);
var inst_54014 = (state_54140[(17)]);
var inst_54040__$1 = cljs.core.seq(inst_54014);
var state_54140__$1 = (function (){var statearr_54232 = state_54140;
(statearr_54232[(7)] = inst_54040__$1);

return statearr_54232;
})();
if(inst_54040__$1){
var statearr_54233_55780 = state_54140__$1;
(statearr_54233_55780[(1)] = (16));

} else {
var statearr_54234_55782 = state_54140__$1;
(statearr_54234_55782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (9))){
var inst_54070 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54235_55783 = state_54140__$1;
(statearr_54235_55783[(2)] = inst_54070);

(statearr_54235_55783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (5))){
var inst_54012 = cljs.core.deref(cs);
var inst_54013 = cljs.core.seq(inst_54012);
var inst_54014 = inst_54013;
var inst_54015 = null;
var inst_54016 = (0);
var inst_54017 = (0);
var state_54140__$1 = (function (){var statearr_54236 = state_54140;
(statearr_54236[(13)] = inst_54016);

(statearr_54236[(14)] = inst_54015);

(statearr_54236[(15)] = inst_54017);

(statearr_54236[(17)] = inst_54014);

return statearr_54236;
})();
var statearr_54237_55790 = state_54140__$1;
(statearr_54237_55790[(2)] = null);

(statearr_54237_55790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (14))){
var state_54140__$1 = state_54140;
var statearr_54238_55795 = state_54140__$1;
(statearr_54238_55795[(2)] = null);

(statearr_54238_55795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (45))){
var inst_54130 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54239_55796 = state_54140__$1;
(statearr_54239_55796[(2)] = inst_54130);

(statearr_54239_55796[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (26))){
var inst_54073 = (state_54140[(27)]);
var inst_54126 = (state_54140[(2)]);
var inst_54127 = cljs.core.seq(inst_54073);
var state_54140__$1 = (function (){var statearr_54240 = state_54140;
(statearr_54240[(29)] = inst_54126);

return statearr_54240;
})();
if(inst_54127){
var statearr_54241_55816 = state_54140__$1;
(statearr_54241_55816[(1)] = (42));

} else {
var statearr_54242_55817 = state_54140__$1;
(statearr_54242_55817[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (16))){
var inst_54040 = (state_54140[(7)]);
var inst_54042 = cljs.core.chunked_seq_QMARK_(inst_54040);
var state_54140__$1 = state_54140;
if(inst_54042){
var statearr_54243_55818 = state_54140__$1;
(statearr_54243_55818[(1)] = (19));

} else {
var statearr_54244_55819 = state_54140__$1;
(statearr_54244_55819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (38))){
var inst_54119 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54245_55820 = state_54140__$1;
(statearr_54245_55820[(2)] = inst_54119);

(statearr_54245_55820[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (30))){
var state_54140__$1 = state_54140;
var statearr_54246_55821 = state_54140__$1;
(statearr_54246_55821[(2)] = null);

(statearr_54246_55821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (10))){
var inst_54015 = (state_54140[(14)]);
var inst_54017 = (state_54140[(15)]);
var inst_54025 = cljs.core._nth(inst_54015,inst_54017);
var inst_54026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54025,(0),null);
var inst_54027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54025,(1),null);
var state_54140__$1 = (function (){var statearr_54247 = state_54140;
(statearr_54247[(24)] = inst_54026);

return statearr_54247;
})();
if(cljs.core.truth_(inst_54027)){
var statearr_54248_55822 = state_54140__$1;
(statearr_54248_55822[(1)] = (13));

} else {
var statearr_54249_55823 = state_54140__$1;
(statearr_54249_55823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (18))){
var inst_54066 = (state_54140[(2)]);
var state_54140__$1 = state_54140;
var statearr_54250_55824 = state_54140__$1;
(statearr_54250_55824[(2)] = inst_54066);

(statearr_54250_55824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (42))){
var state_54140__$1 = state_54140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54140__$1,(45),dchan);
} else {
if((state_val_54141 === (37))){
var inst_54109 = (state_54140[(22)]);
var inst_54005 = (state_54140[(11)]);
var inst_54100 = (state_54140[(23)]);
var inst_54109__$1 = cljs.core.first(inst_54100);
var inst_54110 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54109__$1,inst_54005,done);
var state_54140__$1 = (function (){var statearr_54251 = state_54140;
(statearr_54251[(22)] = inst_54109__$1);

return statearr_54251;
})();
if(cljs.core.truth_(inst_54110)){
var statearr_54252_55825 = state_54140__$1;
(statearr_54252_55825[(1)] = (39));

} else {
var statearr_54253_55826 = state_54140__$1;
(statearr_54253_55826[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54141 === (8))){
var inst_54016 = (state_54140[(13)]);
var inst_54017 = (state_54140[(15)]);
var inst_54019 = (inst_54017 < inst_54016);
var inst_54020 = inst_54019;
var state_54140__$1 = state_54140;
if(cljs.core.truth_(inst_54020)){
var statearr_54254_55827 = state_54140__$1;
(statearr_54254_55827[(1)] = (10));

} else {
var statearr_54255_55828 = state_54140__$1;
(statearr_54255_55828[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__53342__auto__ = null;
var cljs$core$async$mult_$_state_machine__53342__auto____0 = (function (){
var statearr_54256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54256[(0)] = cljs$core$async$mult_$_state_machine__53342__auto__);

(statearr_54256[(1)] = (1));

return statearr_54256;
});
var cljs$core$async$mult_$_state_machine__53342__auto____1 = (function (state_54140){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54140);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54257){var ex__53345__auto__ = e54257;
var statearr_54258_55829 = state_54140;
(statearr_54258_55829[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54140[(4)]))){
var statearr_54259_55830 = state_54140;
(statearr_54259_55830[(1)] = cljs.core.first((state_54140[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55831 = state_54140;
state_54140 = G__55831;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__53342__auto__ = function(state_54140){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__53342__auto____1.call(this,state_54140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__53342__auto____0;
cljs$core$async$mult_$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__53342__auto____1;
return cljs$core$async$mult_$_state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54260 = f__53397__auto__();
(statearr_54260[(6)] = c__53396__auto___55640);

return statearr_54260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__54262 = arguments.length;
switch (G__54262) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_55836 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_55836(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_55837 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_55837(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_55838 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_55838(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_55839 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_55839(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_55841 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_55841(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55842 = arguments.length;
var i__4737__auto___55843 = (0);
while(true){
if((i__4737__auto___55843 < len__4736__auto___55842)){
args__4742__auto__.push((arguments[i__4737__auto___55843]));

var G__55844 = (i__4737__auto___55843 + (1));
i__4737__auto___55843 = G__55844;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54267){
var map__54268 = p__54267;
var map__54268__$1 = (((((!((map__54268 == null))))?(((((map__54268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54268):map__54268);
var opts = map__54268__$1;
var statearr_54270_55845 = state;
(statearr_54270_55845[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_54271_55846 = state;
(statearr_54271_55846[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_54272_55847 = state;
(statearr_54272_55847[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54263){
var G__54264 = cljs.core.first(seq54263);
var seq54263__$1 = cljs.core.next(seq54263);
var G__54265 = cljs.core.first(seq54263__$1);
var seq54263__$2 = cljs.core.next(seq54263__$1);
var G__54266 = cljs.core.first(seq54263__$2);
var seq54263__$3 = cljs.core.next(seq54263__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54264,G__54265,G__54266,seq54263__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54273 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54274){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta54274 = meta54274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54275,meta54274__$1){
var self__ = this;
var _54275__$1 = this;
return (new cljs.core.async.t_cljs$core$async54273(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54274__$1));
}));

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54275){
var self__ = this;
var _54275__$1 = this;
return self__.meta54274;
}));

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54273.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta54274","meta54274",304804659,null)], null);
}));

(cljs.core.async.t_cljs$core$async54273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54273");

(cljs.core.async.t_cljs$core$async54273.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54273.
 */
cljs.core.async.__GT_t_cljs$core$async54273 = (function cljs$core$async$mix_$___GT_t_cljs$core$async54273(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54274){
return (new cljs.core.async.t_cljs$core$async54273(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54274));
});

}

return (new cljs.core.async.t_cljs$core$async54273(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53396__auto___55849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54377){
var state_val_54378 = (state_54377[(1)]);
if((state_val_54378 === (7))){
var inst_54292 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
var statearr_54379_55850 = state_54377__$1;
(statearr_54379_55850[(2)] = inst_54292);

(statearr_54379_55850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (20))){
var inst_54304 = (state_54377[(7)]);
var state_54377__$1 = state_54377;
var statearr_54380_55851 = state_54377__$1;
(statearr_54380_55851[(2)] = inst_54304);

(statearr_54380_55851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (27))){
var state_54377__$1 = state_54377;
var statearr_54381_55852 = state_54377__$1;
(statearr_54381_55852[(2)] = null);

(statearr_54381_55852[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (1))){
var inst_54279 = (state_54377[(8)]);
var inst_54279__$1 = calc_state();
var inst_54281 = (inst_54279__$1 == null);
var inst_54282 = cljs.core.not(inst_54281);
var state_54377__$1 = (function (){var statearr_54382 = state_54377;
(statearr_54382[(8)] = inst_54279__$1);

return statearr_54382;
})();
if(inst_54282){
var statearr_54383_55853 = state_54377__$1;
(statearr_54383_55853[(1)] = (2));

} else {
var statearr_54384_55854 = state_54377__$1;
(statearr_54384_55854[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (24))){
var inst_54337 = (state_54377[(9)]);
var inst_54328 = (state_54377[(10)]);
var inst_54351 = (state_54377[(11)]);
var inst_54351__$1 = (inst_54328.cljs$core$IFn$_invoke$arity$1 ? inst_54328.cljs$core$IFn$_invoke$arity$1(inst_54337) : inst_54328.call(null,inst_54337));
var state_54377__$1 = (function (){var statearr_54385 = state_54377;
(statearr_54385[(11)] = inst_54351__$1);

return statearr_54385;
})();
if(cljs.core.truth_(inst_54351__$1)){
var statearr_54386_55855 = state_54377__$1;
(statearr_54386_55855[(1)] = (29));

} else {
var statearr_54387_55856 = state_54377__$1;
(statearr_54387_55856[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (4))){
var inst_54295 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
if(cljs.core.truth_(inst_54295)){
var statearr_54388_55857 = state_54377__$1;
(statearr_54388_55857[(1)] = (8));

} else {
var statearr_54389_55858 = state_54377__$1;
(statearr_54389_55858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (15))){
var inst_54322 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
if(cljs.core.truth_(inst_54322)){
var statearr_54390_55859 = state_54377__$1;
(statearr_54390_55859[(1)] = (19));

} else {
var statearr_54391_55860 = state_54377__$1;
(statearr_54391_55860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (21))){
var inst_54327 = (state_54377[(12)]);
var inst_54327__$1 = (state_54377[(2)]);
var inst_54328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54327__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54327__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54327__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_54377__$1 = (function (){var statearr_54392 = state_54377;
(statearr_54392[(13)] = inst_54329);

(statearr_54392[(12)] = inst_54327__$1);

(statearr_54392[(10)] = inst_54328);

return statearr_54392;
})();
return cljs.core.async.ioc_alts_BANG_(state_54377__$1,(22),inst_54330);
} else {
if((state_val_54378 === (31))){
var inst_54359 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
if(cljs.core.truth_(inst_54359)){
var statearr_54393_55861 = state_54377__$1;
(statearr_54393_55861[(1)] = (32));

} else {
var statearr_54394_55862 = state_54377__$1;
(statearr_54394_55862[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (32))){
var inst_54336 = (state_54377[(14)]);
var state_54377__$1 = state_54377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54377__$1,(35),out,inst_54336);
} else {
if((state_val_54378 === (33))){
var inst_54327 = (state_54377[(12)]);
var inst_54304 = inst_54327;
var state_54377__$1 = (function (){var statearr_54395 = state_54377;
(statearr_54395[(7)] = inst_54304);

return statearr_54395;
})();
var statearr_54396_55871 = state_54377__$1;
(statearr_54396_55871[(2)] = null);

(statearr_54396_55871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (13))){
var inst_54304 = (state_54377[(7)]);
var inst_54311 = inst_54304.cljs$lang$protocol_mask$partition0$;
var inst_54312 = (inst_54311 & (64));
var inst_54313 = inst_54304.cljs$core$ISeq$;
var inst_54314 = (cljs.core.PROTOCOL_SENTINEL === inst_54313);
var inst_54315 = ((inst_54312) || (inst_54314));
var state_54377__$1 = state_54377;
if(cljs.core.truth_(inst_54315)){
var statearr_54397_55872 = state_54377__$1;
(statearr_54397_55872[(1)] = (16));

} else {
var statearr_54398_55873 = state_54377__$1;
(statearr_54398_55873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (22))){
var inst_54337 = (state_54377[(9)]);
var inst_54336 = (state_54377[(14)]);
var inst_54335 = (state_54377[(2)]);
var inst_54336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54335,(0),null);
var inst_54337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54335,(1),null);
var inst_54338 = (inst_54336__$1 == null);
var inst_54339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54337__$1,change);
var inst_54340 = ((inst_54338) || (inst_54339));
var state_54377__$1 = (function (){var statearr_54399 = state_54377;
(statearr_54399[(9)] = inst_54337__$1);

(statearr_54399[(14)] = inst_54336__$1);

return statearr_54399;
})();
if(cljs.core.truth_(inst_54340)){
var statearr_54400_55874 = state_54377__$1;
(statearr_54400_55874[(1)] = (23));

} else {
var statearr_54401_55875 = state_54377__$1;
(statearr_54401_55875[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (36))){
var inst_54327 = (state_54377[(12)]);
var inst_54304 = inst_54327;
var state_54377__$1 = (function (){var statearr_54402 = state_54377;
(statearr_54402[(7)] = inst_54304);

return statearr_54402;
})();
var statearr_54403_55877 = state_54377__$1;
(statearr_54403_55877[(2)] = null);

(statearr_54403_55877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (29))){
var inst_54351 = (state_54377[(11)]);
var state_54377__$1 = state_54377;
var statearr_54404_55878 = state_54377__$1;
(statearr_54404_55878[(2)] = inst_54351);

(statearr_54404_55878[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (6))){
var state_54377__$1 = state_54377;
var statearr_54405_55879 = state_54377__$1;
(statearr_54405_55879[(2)] = false);

(statearr_54405_55879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (28))){
var inst_54347 = (state_54377[(2)]);
var inst_54348 = calc_state();
var inst_54304 = inst_54348;
var state_54377__$1 = (function (){var statearr_54406 = state_54377;
(statearr_54406[(15)] = inst_54347);

(statearr_54406[(7)] = inst_54304);

return statearr_54406;
})();
var statearr_54407_55880 = state_54377__$1;
(statearr_54407_55880[(2)] = null);

(statearr_54407_55880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (25))){
var inst_54373 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
var statearr_54408_55882 = state_54377__$1;
(statearr_54408_55882[(2)] = inst_54373);

(statearr_54408_55882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (34))){
var inst_54371 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
var statearr_54409_55883 = state_54377__$1;
(statearr_54409_55883[(2)] = inst_54371);

(statearr_54409_55883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (17))){
var state_54377__$1 = state_54377;
var statearr_54410_55884 = state_54377__$1;
(statearr_54410_55884[(2)] = false);

(statearr_54410_55884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (3))){
var state_54377__$1 = state_54377;
var statearr_54411_55885 = state_54377__$1;
(statearr_54411_55885[(2)] = false);

(statearr_54411_55885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (12))){
var inst_54375 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54377__$1,inst_54375);
} else {
if((state_val_54378 === (2))){
var inst_54279 = (state_54377[(8)]);
var inst_54284 = inst_54279.cljs$lang$protocol_mask$partition0$;
var inst_54285 = (inst_54284 & (64));
var inst_54286 = inst_54279.cljs$core$ISeq$;
var inst_54287 = (cljs.core.PROTOCOL_SENTINEL === inst_54286);
var inst_54288 = ((inst_54285) || (inst_54287));
var state_54377__$1 = state_54377;
if(cljs.core.truth_(inst_54288)){
var statearr_54412_55886 = state_54377__$1;
(statearr_54412_55886[(1)] = (5));

} else {
var statearr_54413_55887 = state_54377__$1;
(statearr_54413_55887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (23))){
var inst_54336 = (state_54377[(14)]);
var inst_54342 = (inst_54336 == null);
var state_54377__$1 = state_54377;
if(cljs.core.truth_(inst_54342)){
var statearr_54414_55888 = state_54377__$1;
(statearr_54414_55888[(1)] = (26));

} else {
var statearr_54415_55889 = state_54377__$1;
(statearr_54415_55889[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (35))){
var inst_54362 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
if(cljs.core.truth_(inst_54362)){
var statearr_54416_55890 = state_54377__$1;
(statearr_54416_55890[(1)] = (36));

} else {
var statearr_54417_55891 = state_54377__$1;
(statearr_54417_55891[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (19))){
var inst_54304 = (state_54377[(7)]);
var inst_54324 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54304);
var state_54377__$1 = state_54377;
var statearr_54418_55892 = state_54377__$1;
(statearr_54418_55892[(2)] = inst_54324);

(statearr_54418_55892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (11))){
var inst_54304 = (state_54377[(7)]);
var inst_54308 = (inst_54304 == null);
var inst_54309 = cljs.core.not(inst_54308);
var state_54377__$1 = state_54377;
if(inst_54309){
var statearr_54419_55893 = state_54377__$1;
(statearr_54419_55893[(1)] = (13));

} else {
var statearr_54420_55894 = state_54377__$1;
(statearr_54420_55894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (9))){
var inst_54279 = (state_54377[(8)]);
var state_54377__$1 = state_54377;
var statearr_54421_55895 = state_54377__$1;
(statearr_54421_55895[(2)] = inst_54279);

(statearr_54421_55895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (5))){
var state_54377__$1 = state_54377;
var statearr_54422_55896 = state_54377__$1;
(statearr_54422_55896[(2)] = true);

(statearr_54422_55896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (14))){
var state_54377__$1 = state_54377;
var statearr_54423_55897 = state_54377__$1;
(statearr_54423_55897[(2)] = false);

(statearr_54423_55897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (26))){
var inst_54337 = (state_54377[(9)]);
var inst_54344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_54337);
var state_54377__$1 = state_54377;
var statearr_54424_55898 = state_54377__$1;
(statearr_54424_55898[(2)] = inst_54344);

(statearr_54424_55898[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (16))){
var state_54377__$1 = state_54377;
var statearr_54425_55899 = state_54377__$1;
(statearr_54425_55899[(2)] = true);

(statearr_54425_55899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (38))){
var inst_54367 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
var statearr_54426_55900 = state_54377__$1;
(statearr_54426_55900[(2)] = inst_54367);

(statearr_54426_55900[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (30))){
var inst_54329 = (state_54377[(13)]);
var inst_54337 = (state_54377[(9)]);
var inst_54328 = (state_54377[(10)]);
var inst_54354 = cljs.core.empty_QMARK_(inst_54328);
var inst_54355 = (inst_54329.cljs$core$IFn$_invoke$arity$1 ? inst_54329.cljs$core$IFn$_invoke$arity$1(inst_54337) : inst_54329.call(null,inst_54337));
var inst_54356 = cljs.core.not(inst_54355);
var inst_54357 = ((inst_54354) && (inst_54356));
var state_54377__$1 = state_54377;
var statearr_54427_55901 = state_54377__$1;
(statearr_54427_55901[(2)] = inst_54357);

(statearr_54427_55901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (10))){
var inst_54279 = (state_54377[(8)]);
var inst_54300 = (state_54377[(2)]);
var inst_54301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54300,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54300,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54300,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54304 = inst_54279;
var state_54377__$1 = (function (){var statearr_54428 = state_54377;
(statearr_54428[(16)] = inst_54303);

(statearr_54428[(17)] = inst_54302);

(statearr_54428[(18)] = inst_54301);

(statearr_54428[(7)] = inst_54304);

return statearr_54428;
})();
var statearr_54429_55912 = state_54377__$1;
(statearr_54429_55912[(2)] = null);

(statearr_54429_55912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (18))){
var inst_54319 = (state_54377[(2)]);
var state_54377__$1 = state_54377;
var statearr_54430_55913 = state_54377__$1;
(statearr_54430_55913[(2)] = inst_54319);

(statearr_54430_55913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (37))){
var state_54377__$1 = state_54377;
var statearr_54431_55914 = state_54377__$1;
(statearr_54431_55914[(2)] = null);

(statearr_54431_55914[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54378 === (8))){
var inst_54279 = (state_54377[(8)]);
var inst_54297 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54279);
var state_54377__$1 = state_54377;
var statearr_54432_55918 = state_54377__$1;
(statearr_54432_55918[(2)] = inst_54297);

(statearr_54432_55918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__53342__auto__ = null;
var cljs$core$async$mix_$_state_machine__53342__auto____0 = (function (){
var statearr_54433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54433[(0)] = cljs$core$async$mix_$_state_machine__53342__auto__);

(statearr_54433[(1)] = (1));

return statearr_54433;
});
var cljs$core$async$mix_$_state_machine__53342__auto____1 = (function (state_54377){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54377);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54434){var ex__53345__auto__ = e54434;
var statearr_54435_55922 = state_54377;
(statearr_54435_55922[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54377[(4)]))){
var statearr_54436_55923 = state_54377;
(statearr_54436_55923[(1)] = cljs.core.first((state_54377[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55924 = state_54377;
state_54377 = G__55924;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__53342__auto__ = function(state_54377){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__53342__auto____1.call(this,state_54377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__53342__auto____0;
cljs$core$async$mix_$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__53342__auto____1;
return cljs$core$async$mix_$_state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54437 = f__53397__auto__();
(statearr_54437[(6)] = c__53396__auto___55849);

return statearr_54437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_55925 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_55925(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_55929 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_55929(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_55931 = (function() {
var G__55932 = null;
var G__55932__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__55932__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__55932 = function(p,v){
switch(arguments.length){
case 1:
return G__55932__1.call(this,p);
case 2:
return G__55932__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55932.cljs$core$IFn$_invoke$arity$1 = G__55932__1;
G__55932.cljs$core$IFn$_invoke$arity$2 = G__55932__2;
return G__55932;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__54439 = arguments.length;
switch (G__54439) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55931(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55931(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__54442 = arguments.length;
switch (G__54442) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__54440_SHARP_){
if(cljs.core.truth_((p1__54440_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__54440_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__54440_SHARP_.call(null,topic)))){
return p1__54440_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54440_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54443 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta54444){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta54444 = meta54444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54445,meta54444__$1){
var self__ = this;
var _54445__$1 = this;
return (new cljs.core.async.t_cljs$core$async54443(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta54444__$1));
}));

(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54445){
var self__ = this;
var _54445__$1 = this;
return self__.meta54444;
}));

(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async54443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async54443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta54444","meta54444",389131648,null)], null);
}));

(cljs.core.async.t_cljs$core$async54443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54443");

(cljs.core.async.t_cljs$core$async54443.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54443.
 */
cljs.core.async.__GT_t_cljs$core$async54443 = (function cljs$core$async$__GT_t_cljs$core$async54443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54444){
return (new cljs.core.async.t_cljs$core$async54443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54444));
});

}

return (new cljs.core.async.t_cljs$core$async54443(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53396__auto___55950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54517){
var state_val_54518 = (state_54517[(1)]);
if((state_val_54518 === (7))){
var inst_54513 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
var statearr_54519_55951 = state_54517__$1;
(statearr_54519_55951[(2)] = inst_54513);

(statearr_54519_55951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (20))){
var state_54517__$1 = state_54517;
var statearr_54520_55952 = state_54517__$1;
(statearr_54520_55952[(2)] = null);

(statearr_54520_55952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (1))){
var state_54517__$1 = state_54517;
var statearr_54521_55953 = state_54517__$1;
(statearr_54521_55953[(2)] = null);

(statearr_54521_55953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (24))){
var inst_54496 = (state_54517[(7)]);
var inst_54505 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_54496);
var state_54517__$1 = state_54517;
var statearr_54522_55954 = state_54517__$1;
(statearr_54522_55954[(2)] = inst_54505);

(statearr_54522_55954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (4))){
var inst_54448 = (state_54517[(8)]);
var inst_54448__$1 = (state_54517[(2)]);
var inst_54449 = (inst_54448__$1 == null);
var state_54517__$1 = (function (){var statearr_54523 = state_54517;
(statearr_54523[(8)] = inst_54448__$1);

return statearr_54523;
})();
if(cljs.core.truth_(inst_54449)){
var statearr_54524_55955 = state_54517__$1;
(statearr_54524_55955[(1)] = (5));

} else {
var statearr_54525_55956 = state_54517__$1;
(statearr_54525_55956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (15))){
var inst_54490 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
var statearr_54526_55957 = state_54517__$1;
(statearr_54526_55957[(2)] = inst_54490);

(statearr_54526_55957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (21))){
var inst_54510 = (state_54517[(2)]);
var state_54517__$1 = (function (){var statearr_54527 = state_54517;
(statearr_54527[(9)] = inst_54510);

return statearr_54527;
})();
var statearr_54528_55958 = state_54517__$1;
(statearr_54528_55958[(2)] = null);

(statearr_54528_55958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (13))){
var inst_54472 = (state_54517[(10)]);
var inst_54474 = cljs.core.chunked_seq_QMARK_(inst_54472);
var state_54517__$1 = state_54517;
if(inst_54474){
var statearr_54529_55959 = state_54517__$1;
(statearr_54529_55959[(1)] = (16));

} else {
var statearr_54530_55960 = state_54517__$1;
(statearr_54530_55960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (22))){
var inst_54502 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
if(cljs.core.truth_(inst_54502)){
var statearr_54531_55961 = state_54517__$1;
(statearr_54531_55961[(1)] = (23));

} else {
var statearr_54532_55962 = state_54517__$1;
(statearr_54532_55962[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (6))){
var inst_54496 = (state_54517[(7)]);
var inst_54448 = (state_54517[(8)]);
var inst_54498 = (state_54517[(11)]);
var inst_54496__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_54448) : topic_fn.call(null,inst_54448));
var inst_54497 = cljs.core.deref(mults);
var inst_54498__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54497,inst_54496__$1);
var state_54517__$1 = (function (){var statearr_54533 = state_54517;
(statearr_54533[(7)] = inst_54496__$1);

(statearr_54533[(11)] = inst_54498__$1);

return statearr_54533;
})();
if(cljs.core.truth_(inst_54498__$1)){
var statearr_54534_55969 = state_54517__$1;
(statearr_54534_55969[(1)] = (19));

} else {
var statearr_54535_55970 = state_54517__$1;
(statearr_54535_55970[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (25))){
var inst_54507 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
var statearr_54536_55971 = state_54517__$1;
(statearr_54536_55971[(2)] = inst_54507);

(statearr_54536_55971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (17))){
var inst_54472 = (state_54517[(10)]);
var inst_54481 = cljs.core.first(inst_54472);
var inst_54482 = cljs.core.async.muxch_STAR_(inst_54481);
var inst_54483 = cljs.core.async.close_BANG_(inst_54482);
var inst_54484 = cljs.core.next(inst_54472);
var inst_54458 = inst_54484;
var inst_54459 = null;
var inst_54460 = (0);
var inst_54461 = (0);
var state_54517__$1 = (function (){var statearr_54537 = state_54517;
(statearr_54537[(12)] = inst_54460);

(statearr_54537[(13)] = inst_54483);

(statearr_54537[(14)] = inst_54461);

(statearr_54537[(15)] = inst_54458);

(statearr_54537[(16)] = inst_54459);

return statearr_54537;
})();
var statearr_54538_55972 = state_54517__$1;
(statearr_54538_55972[(2)] = null);

(statearr_54538_55972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (3))){
var inst_54515 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54517__$1,inst_54515);
} else {
if((state_val_54518 === (12))){
var inst_54492 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
var statearr_54539_55985 = state_54517__$1;
(statearr_54539_55985[(2)] = inst_54492);

(statearr_54539_55985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (2))){
var state_54517__$1 = state_54517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54517__$1,(4),ch);
} else {
if((state_val_54518 === (23))){
var state_54517__$1 = state_54517;
var statearr_54540_55986 = state_54517__$1;
(statearr_54540_55986[(2)] = null);

(statearr_54540_55986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (19))){
var inst_54448 = (state_54517[(8)]);
var inst_54498 = (state_54517[(11)]);
var inst_54500 = cljs.core.async.muxch_STAR_(inst_54498);
var state_54517__$1 = state_54517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54517__$1,(22),inst_54500,inst_54448);
} else {
if((state_val_54518 === (11))){
var inst_54458 = (state_54517[(15)]);
var inst_54472 = (state_54517[(10)]);
var inst_54472__$1 = cljs.core.seq(inst_54458);
var state_54517__$1 = (function (){var statearr_54541 = state_54517;
(statearr_54541[(10)] = inst_54472__$1);

return statearr_54541;
})();
if(inst_54472__$1){
var statearr_54542_55987 = state_54517__$1;
(statearr_54542_55987[(1)] = (13));

} else {
var statearr_54543_55988 = state_54517__$1;
(statearr_54543_55988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (9))){
var inst_54494 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
var statearr_54544_55989 = state_54517__$1;
(statearr_54544_55989[(2)] = inst_54494);

(statearr_54544_55989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (5))){
var inst_54455 = cljs.core.deref(mults);
var inst_54456 = cljs.core.vals(inst_54455);
var inst_54457 = cljs.core.seq(inst_54456);
var inst_54458 = inst_54457;
var inst_54459 = null;
var inst_54460 = (0);
var inst_54461 = (0);
var state_54517__$1 = (function (){var statearr_54545 = state_54517;
(statearr_54545[(12)] = inst_54460);

(statearr_54545[(14)] = inst_54461);

(statearr_54545[(15)] = inst_54458);

(statearr_54545[(16)] = inst_54459);

return statearr_54545;
})();
var statearr_54546_55990 = state_54517__$1;
(statearr_54546_55990[(2)] = null);

(statearr_54546_55990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (14))){
var state_54517__$1 = state_54517;
var statearr_54550_55991 = state_54517__$1;
(statearr_54550_55991[(2)] = null);

(statearr_54550_55991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (16))){
var inst_54472 = (state_54517[(10)]);
var inst_54476 = cljs.core.chunk_first(inst_54472);
var inst_54477 = cljs.core.chunk_rest(inst_54472);
var inst_54478 = cljs.core.count(inst_54476);
var inst_54458 = inst_54477;
var inst_54459 = inst_54476;
var inst_54460 = inst_54478;
var inst_54461 = (0);
var state_54517__$1 = (function (){var statearr_54551 = state_54517;
(statearr_54551[(12)] = inst_54460);

(statearr_54551[(14)] = inst_54461);

(statearr_54551[(15)] = inst_54458);

(statearr_54551[(16)] = inst_54459);

return statearr_54551;
})();
var statearr_54552_55994 = state_54517__$1;
(statearr_54552_55994[(2)] = null);

(statearr_54552_55994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (10))){
var inst_54460 = (state_54517[(12)]);
var inst_54461 = (state_54517[(14)]);
var inst_54458 = (state_54517[(15)]);
var inst_54459 = (state_54517[(16)]);
var inst_54466 = cljs.core._nth(inst_54459,inst_54461);
var inst_54467 = cljs.core.async.muxch_STAR_(inst_54466);
var inst_54468 = cljs.core.async.close_BANG_(inst_54467);
var inst_54469 = (inst_54461 + (1));
var tmp54547 = inst_54460;
var tmp54548 = inst_54458;
var tmp54549 = inst_54459;
var inst_54458__$1 = tmp54548;
var inst_54459__$1 = tmp54549;
var inst_54460__$1 = tmp54547;
var inst_54461__$1 = inst_54469;
var state_54517__$1 = (function (){var statearr_54553 = state_54517;
(statearr_54553[(17)] = inst_54468);

(statearr_54553[(12)] = inst_54460__$1);

(statearr_54553[(14)] = inst_54461__$1);

(statearr_54553[(15)] = inst_54458__$1);

(statearr_54553[(16)] = inst_54459__$1);

return statearr_54553;
})();
var statearr_54554_55995 = state_54517__$1;
(statearr_54554_55995[(2)] = null);

(statearr_54554_55995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (18))){
var inst_54487 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
var statearr_54555_55998 = state_54517__$1;
(statearr_54555_55998[(2)] = inst_54487);

(statearr_54555_55998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (8))){
var inst_54460 = (state_54517[(12)]);
var inst_54461 = (state_54517[(14)]);
var inst_54463 = (inst_54461 < inst_54460);
var inst_54464 = inst_54463;
var state_54517__$1 = state_54517;
if(cljs.core.truth_(inst_54464)){
var statearr_54556_55999 = state_54517__$1;
(statearr_54556_55999[(1)] = (10));

} else {
var statearr_54557_56000 = state_54517__$1;
(statearr_54557_56000[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_54558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54558[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_54558[(1)] = (1));

return statearr_54558;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_54517){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54517);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54559){var ex__53345__auto__ = e54559;
var statearr_54560_56001 = state_54517;
(statearr_54560_56001[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54517[(4)]))){
var statearr_54561_56002 = state_54517;
(statearr_54561_56002[(1)] = cljs.core.first((state_54517[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56003 = state_54517;
state_54517 = G__56003;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_54517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_54517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54562 = f__53397__auto__();
(statearr_54562[(6)] = c__53396__auto___55950);

return statearr_54562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__54564 = arguments.length;
switch (G__54564) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__54566 = arguments.length;
switch (G__54566) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__54568 = arguments.length;
switch (G__54568) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__53396__auto___56015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54611){
var state_val_54612 = (state_54611[(1)]);
if((state_val_54612 === (7))){
var state_54611__$1 = state_54611;
var statearr_54613_56018 = state_54611__$1;
(statearr_54613_56018[(2)] = null);

(statearr_54613_56018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (1))){
var state_54611__$1 = state_54611;
var statearr_54614_56020 = state_54611__$1;
(statearr_54614_56020[(2)] = null);

(statearr_54614_56020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (4))){
var inst_54572 = (state_54611[(7)]);
var inst_54571 = (state_54611[(8)]);
var inst_54574 = (inst_54572 < inst_54571);
var state_54611__$1 = state_54611;
if(cljs.core.truth_(inst_54574)){
var statearr_54615_56021 = state_54611__$1;
(statearr_54615_56021[(1)] = (6));

} else {
var statearr_54616_56023 = state_54611__$1;
(statearr_54616_56023[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (15))){
var inst_54597 = (state_54611[(9)]);
var inst_54602 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_54597);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54611__$1,(17),out,inst_54602);
} else {
if((state_val_54612 === (13))){
var inst_54597 = (state_54611[(9)]);
var inst_54597__$1 = (state_54611[(2)]);
var inst_54598 = cljs.core.some(cljs.core.nil_QMARK_,inst_54597__$1);
var state_54611__$1 = (function (){var statearr_54617 = state_54611;
(statearr_54617[(9)] = inst_54597__$1);

return statearr_54617;
})();
if(cljs.core.truth_(inst_54598)){
var statearr_54618_56024 = state_54611__$1;
(statearr_54618_56024[(1)] = (14));

} else {
var statearr_54619_56025 = state_54611__$1;
(statearr_54619_56025[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (6))){
var state_54611__$1 = state_54611;
var statearr_54620_56026 = state_54611__$1;
(statearr_54620_56026[(2)] = null);

(statearr_54620_56026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (17))){
var inst_54604 = (state_54611[(2)]);
var state_54611__$1 = (function (){var statearr_54622 = state_54611;
(statearr_54622[(10)] = inst_54604);

return statearr_54622;
})();
var statearr_54623_56027 = state_54611__$1;
(statearr_54623_56027[(2)] = null);

(statearr_54623_56027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (3))){
var inst_54609 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54611__$1,inst_54609);
} else {
if((state_val_54612 === (12))){
var _ = (function (){var statearr_54624 = state_54611;
(statearr_54624[(4)] = cljs.core.rest((state_54611[(4)])));

return statearr_54624;
})();
var state_54611__$1 = state_54611;
var ex54621 = (state_54611__$1[(2)]);
var statearr_54625_56028 = state_54611__$1;
(statearr_54625_56028[(5)] = ex54621);


if((ex54621 instanceof Object)){
var statearr_54626_56029 = state_54611__$1;
(statearr_54626_56029[(1)] = (11));

(statearr_54626_56029[(5)] = null);

} else {
throw ex54621;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (2))){
var inst_54570 = cljs.core.reset_BANG_(dctr,cnt);
var inst_54571 = cnt;
var inst_54572 = (0);
var state_54611__$1 = (function (){var statearr_54627 = state_54611;
(statearr_54627[(11)] = inst_54570);

(statearr_54627[(7)] = inst_54572);

(statearr_54627[(8)] = inst_54571);

return statearr_54627;
})();
var statearr_54628_56030 = state_54611__$1;
(statearr_54628_56030[(2)] = null);

(statearr_54628_56030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (11))){
var inst_54576 = (state_54611[(2)]);
var inst_54577 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_54611__$1 = (function (){var statearr_54629 = state_54611;
(statearr_54629[(12)] = inst_54576);

return statearr_54629;
})();
var statearr_54630_56031 = state_54611__$1;
(statearr_54630_56031[(2)] = inst_54577);

(statearr_54630_56031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (9))){
var inst_54572 = (state_54611[(7)]);
var _ = (function (){var statearr_54631 = state_54611;
(statearr_54631[(4)] = cljs.core.cons((12),(state_54611[(4)])));

return statearr_54631;
})();
var inst_54583 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_54572) : chs__$1.call(null,inst_54572));
var inst_54584 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_54572) : done.call(null,inst_54572));
var inst_54585 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_54583,inst_54584);
var ___$1 = (function (){var statearr_54632 = state_54611;
(statearr_54632[(4)] = cljs.core.rest((state_54611[(4)])));

return statearr_54632;
})();
var state_54611__$1 = state_54611;
var statearr_54633_56034 = state_54611__$1;
(statearr_54633_56034[(2)] = inst_54585);

(statearr_54633_56034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (5))){
var inst_54595 = (state_54611[(2)]);
var state_54611__$1 = (function (){var statearr_54634 = state_54611;
(statearr_54634[(13)] = inst_54595);

return statearr_54634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54611__$1,(13),dchan);
} else {
if((state_val_54612 === (14))){
var inst_54600 = cljs.core.async.close_BANG_(out);
var state_54611__$1 = state_54611;
var statearr_54635_56035 = state_54611__$1;
(statearr_54635_56035[(2)] = inst_54600);

(statearr_54635_56035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (16))){
var inst_54607 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
var statearr_54636_56036 = state_54611__$1;
(statearr_54636_56036[(2)] = inst_54607);

(statearr_54636_56036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (10))){
var inst_54572 = (state_54611[(7)]);
var inst_54588 = (state_54611[(2)]);
var inst_54589 = (inst_54572 + (1));
var inst_54572__$1 = inst_54589;
var state_54611__$1 = (function (){var statearr_54637 = state_54611;
(statearr_54637[(7)] = inst_54572__$1);

(statearr_54637[(14)] = inst_54588);

return statearr_54637;
})();
var statearr_54638_56037 = state_54611__$1;
(statearr_54638_56037[(2)] = null);

(statearr_54638_56037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (8))){
var inst_54593 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
var statearr_54639_56038 = state_54611__$1;
(statearr_54639_56038[(2)] = inst_54593);

(statearr_54639_56038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_54640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54640[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_54640[(1)] = (1));

return statearr_54640;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_54611){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54611);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54641){var ex__53345__auto__ = e54641;
var statearr_54642_56039 = state_54611;
(statearr_54642_56039[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54611[(4)]))){
var statearr_54643_56040 = state_54611;
(statearr_54643_56040[(1)] = cljs.core.first((state_54611[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56041 = state_54611;
state_54611 = G__56041;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_54611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_54611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54644 = f__53397__auto__();
(statearr_54644[(6)] = c__53396__auto___56015);

return statearr_54644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__54647 = arguments.length;
switch (G__54647) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53396__auto___56049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54679){
var state_val_54680 = (state_54679[(1)]);
if((state_val_54680 === (7))){
var inst_54659 = (state_54679[(7)]);
var inst_54658 = (state_54679[(8)]);
var inst_54658__$1 = (state_54679[(2)]);
var inst_54659__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54658__$1,(0),null);
var inst_54660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54658__$1,(1),null);
var inst_54661 = (inst_54659__$1 == null);
var state_54679__$1 = (function (){var statearr_54681 = state_54679;
(statearr_54681[(9)] = inst_54660);

(statearr_54681[(7)] = inst_54659__$1);

(statearr_54681[(8)] = inst_54658__$1);

return statearr_54681;
})();
if(cljs.core.truth_(inst_54661)){
var statearr_54682_56053 = state_54679__$1;
(statearr_54682_56053[(1)] = (8));

} else {
var statearr_54683_56054 = state_54679__$1;
(statearr_54683_56054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (1))){
var inst_54648 = cljs.core.vec(chs);
var inst_54649 = inst_54648;
var state_54679__$1 = (function (){var statearr_54684 = state_54679;
(statearr_54684[(10)] = inst_54649);

return statearr_54684;
})();
var statearr_54685_56055 = state_54679__$1;
(statearr_54685_56055[(2)] = null);

(statearr_54685_56055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (4))){
var inst_54649 = (state_54679[(10)]);
var state_54679__$1 = state_54679;
return cljs.core.async.ioc_alts_BANG_(state_54679__$1,(7),inst_54649);
} else {
if((state_val_54680 === (6))){
var inst_54675 = (state_54679[(2)]);
var state_54679__$1 = state_54679;
var statearr_54686_56058 = state_54679__$1;
(statearr_54686_56058[(2)] = inst_54675);

(statearr_54686_56058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (3))){
var inst_54677 = (state_54679[(2)]);
var state_54679__$1 = state_54679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54679__$1,inst_54677);
} else {
if((state_val_54680 === (2))){
var inst_54649 = (state_54679[(10)]);
var inst_54651 = cljs.core.count(inst_54649);
var inst_54652 = (inst_54651 > (0));
var state_54679__$1 = state_54679;
if(cljs.core.truth_(inst_54652)){
var statearr_54688_56061 = state_54679__$1;
(statearr_54688_56061[(1)] = (4));

} else {
var statearr_54689_56062 = state_54679__$1;
(statearr_54689_56062[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (11))){
var inst_54649 = (state_54679[(10)]);
var inst_54668 = (state_54679[(2)]);
var tmp54687 = inst_54649;
var inst_54649__$1 = tmp54687;
var state_54679__$1 = (function (){var statearr_54690 = state_54679;
(statearr_54690[(11)] = inst_54668);

(statearr_54690[(10)] = inst_54649__$1);

return statearr_54690;
})();
var statearr_54691_56063 = state_54679__$1;
(statearr_54691_56063[(2)] = null);

(statearr_54691_56063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (9))){
var inst_54659 = (state_54679[(7)]);
var state_54679__$1 = state_54679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54679__$1,(11),out,inst_54659);
} else {
if((state_val_54680 === (5))){
var inst_54673 = cljs.core.async.close_BANG_(out);
var state_54679__$1 = state_54679;
var statearr_54692_56066 = state_54679__$1;
(statearr_54692_56066[(2)] = inst_54673);

(statearr_54692_56066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (10))){
var inst_54671 = (state_54679[(2)]);
var state_54679__$1 = state_54679;
var statearr_54693_56067 = state_54679__$1;
(statearr_54693_56067[(2)] = inst_54671);

(statearr_54693_56067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (8))){
var inst_54660 = (state_54679[(9)]);
var inst_54659 = (state_54679[(7)]);
var inst_54649 = (state_54679[(10)]);
var inst_54658 = (state_54679[(8)]);
var inst_54663 = (function (){var cs = inst_54649;
var vec__54654 = inst_54658;
var v = inst_54659;
var c = inst_54660;
return (function (p1__54645_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__54645_SHARP_);
});
})();
var inst_54664 = cljs.core.filterv(inst_54663,inst_54649);
var inst_54649__$1 = inst_54664;
var state_54679__$1 = (function (){var statearr_54694 = state_54679;
(statearr_54694[(10)] = inst_54649__$1);

return statearr_54694;
})();
var statearr_54695_56092 = state_54679__$1;
(statearr_54695_56092[(2)] = null);

(statearr_54695_56092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_54696 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54696[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_54696[(1)] = (1));

return statearr_54696;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_54679){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54679);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54697){var ex__53345__auto__ = e54697;
var statearr_54698_56093 = state_54679;
(statearr_54698_56093[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54679[(4)]))){
var statearr_54699_56094 = state_54679;
(statearr_54699_56094[(1)] = cljs.core.first((state_54679[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56095 = state_54679;
state_54679 = G__56095;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_54679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_54679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54700 = f__53397__auto__();
(statearr_54700[(6)] = c__53396__auto___56049);

return statearr_54700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__54702 = arguments.length;
switch (G__54702) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53396__auto___56101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54726){
var state_val_54727 = (state_54726[(1)]);
if((state_val_54727 === (7))){
var inst_54708 = (state_54726[(7)]);
var inst_54708__$1 = (state_54726[(2)]);
var inst_54709 = (inst_54708__$1 == null);
var inst_54710 = cljs.core.not(inst_54709);
var state_54726__$1 = (function (){var statearr_54728 = state_54726;
(statearr_54728[(7)] = inst_54708__$1);

return statearr_54728;
})();
if(inst_54710){
var statearr_54729_56102 = state_54726__$1;
(statearr_54729_56102[(1)] = (8));

} else {
var statearr_54730_56103 = state_54726__$1;
(statearr_54730_56103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54727 === (1))){
var inst_54703 = (0);
var state_54726__$1 = (function (){var statearr_54731 = state_54726;
(statearr_54731[(8)] = inst_54703);

return statearr_54731;
})();
var statearr_54732_56104 = state_54726__$1;
(statearr_54732_56104[(2)] = null);

(statearr_54732_56104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54727 === (4))){
var state_54726__$1 = state_54726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54726__$1,(7),ch);
} else {
if((state_val_54727 === (6))){
var inst_54721 = (state_54726[(2)]);
var state_54726__$1 = state_54726;
var statearr_54733_56105 = state_54726__$1;
(statearr_54733_56105[(2)] = inst_54721);

(statearr_54733_56105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54727 === (3))){
var inst_54723 = (state_54726[(2)]);
var inst_54724 = cljs.core.async.close_BANG_(out);
var state_54726__$1 = (function (){var statearr_54734 = state_54726;
(statearr_54734[(9)] = inst_54723);

return statearr_54734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54726__$1,inst_54724);
} else {
if((state_val_54727 === (2))){
var inst_54703 = (state_54726[(8)]);
var inst_54705 = (inst_54703 < n);
var state_54726__$1 = state_54726;
if(cljs.core.truth_(inst_54705)){
var statearr_54735_56146 = state_54726__$1;
(statearr_54735_56146[(1)] = (4));

} else {
var statearr_54736_56147 = state_54726__$1;
(statearr_54736_56147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54727 === (11))){
var inst_54703 = (state_54726[(8)]);
var inst_54713 = (state_54726[(2)]);
var inst_54714 = (inst_54703 + (1));
var inst_54703__$1 = inst_54714;
var state_54726__$1 = (function (){var statearr_54737 = state_54726;
(statearr_54737[(8)] = inst_54703__$1);

(statearr_54737[(10)] = inst_54713);

return statearr_54737;
})();
var statearr_54738_56149 = state_54726__$1;
(statearr_54738_56149[(2)] = null);

(statearr_54738_56149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54727 === (9))){
var state_54726__$1 = state_54726;
var statearr_54739_56150 = state_54726__$1;
(statearr_54739_56150[(2)] = null);

(statearr_54739_56150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54727 === (5))){
var state_54726__$1 = state_54726;
var statearr_54740_56151 = state_54726__$1;
(statearr_54740_56151[(2)] = null);

(statearr_54740_56151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54727 === (10))){
var inst_54718 = (state_54726[(2)]);
var state_54726__$1 = state_54726;
var statearr_54741_56153 = state_54726__$1;
(statearr_54741_56153[(2)] = inst_54718);

(statearr_54741_56153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54727 === (8))){
var inst_54708 = (state_54726[(7)]);
var state_54726__$1 = state_54726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54726__$1,(11),out,inst_54708);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_54742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54742[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_54742[(1)] = (1));

return statearr_54742;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_54726){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54726);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54743){var ex__53345__auto__ = e54743;
var statearr_54744_56156 = state_54726;
(statearr_54744_56156[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54726[(4)]))){
var statearr_54745_56157 = state_54726;
(statearr_54745_56157[(1)] = cljs.core.first((state_54726[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56158 = state_54726;
state_54726 = G__56158;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_54726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_54726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54746 = f__53397__auto__();
(statearr_54746[(6)] = c__53396__auto___56101);

return statearr_54746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54748 = (function (f,ch,meta54749){
this.f = f;
this.ch = ch;
this.meta54749 = meta54749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54750,meta54749__$1){
var self__ = this;
var _54750__$1 = this;
return (new cljs.core.async.t_cljs$core$async54748(self__.f,self__.ch,meta54749__$1));
}));

(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54750){
var self__ = this;
var _54750__$1 = this;
return self__.meta54749;
}));

(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54751 = (function (f,ch,meta54749,_,fn1,meta54752){
this.f = f;
this.ch = ch;
this.meta54749 = meta54749;
this._ = _;
this.fn1 = fn1;
this.meta54752 = meta54752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54753,meta54752__$1){
var self__ = this;
var _54753__$1 = this;
return (new cljs.core.async.t_cljs$core$async54751(self__.f,self__.ch,self__.meta54749,self__._,self__.fn1,meta54752__$1));
}));

(cljs.core.async.t_cljs$core$async54751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54753){
var self__ = this;
var _54753__$1 = this;
return self__.meta54752;
}));

(cljs.core.async.t_cljs$core$async54751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async54751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__54747_SHARP_){
var G__54754 = (((p1__54747_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__54747_SHARP_) : self__.f.call(null,p1__54747_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__54754) : f1.call(null,G__54754));
});
}));

(cljs.core.async.t_cljs$core$async54751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54749","meta54749",-1217420065,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async54748","cljs.core.async/t_cljs$core$async54748",267502397,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta54752","meta54752",-632724147,null)], null);
}));

(cljs.core.async.t_cljs$core$async54751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54751");

(cljs.core.async.t_cljs$core$async54751.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54751.
 */
cljs.core.async.__GT_t_cljs$core$async54751 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54751(f__$1,ch__$1,meta54749__$1,___$2,fn1__$1,meta54752){
return (new cljs.core.async.t_cljs$core$async54751(f__$1,ch__$1,meta54749__$1,___$2,fn1__$1,meta54752));
});

}

return (new cljs.core.async.t_cljs$core$async54751(self__.f,self__.ch,self__.meta54749,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__54755 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__54755) : self__.f.call(null,G__54755));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async54748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54749","meta54749",-1217420065,null)], null);
}));

(cljs.core.async.t_cljs$core$async54748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54748");

(cljs.core.async.t_cljs$core$async54748.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54748.
 */
cljs.core.async.__GT_t_cljs$core$async54748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54748(f__$1,ch__$1,meta54749){
return (new cljs.core.async.t_cljs$core$async54748(f__$1,ch__$1,meta54749));
});

}

return (new cljs.core.async.t_cljs$core$async54748(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54756 = (function (f,ch,meta54757){
this.f = f;
this.ch = ch;
this.meta54757 = meta54757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54758,meta54757__$1){
var self__ = this;
var _54758__$1 = this;
return (new cljs.core.async.t_cljs$core$async54756(self__.f,self__.ch,meta54757__$1));
}));

(cljs.core.async.t_cljs$core$async54756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54758){
var self__ = this;
var _54758__$1 = this;
return self__.meta54757;
}));

(cljs.core.async.t_cljs$core$async54756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async54756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async54756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54757","meta54757",704472155,null)], null);
}));

(cljs.core.async.t_cljs$core$async54756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54756");

(cljs.core.async.t_cljs$core$async54756.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54756.
 */
cljs.core.async.__GT_t_cljs$core$async54756 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async54756(f__$1,ch__$1,meta54757){
return (new cljs.core.async.t_cljs$core$async54756(f__$1,ch__$1,meta54757));
});

}

return (new cljs.core.async.t_cljs$core$async54756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54759 = (function (p,ch,meta54760){
this.p = p;
this.ch = ch;
this.meta54760 = meta54760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54761,meta54760__$1){
var self__ = this;
var _54761__$1 = this;
return (new cljs.core.async.t_cljs$core$async54759(self__.p,self__.ch,meta54760__$1));
}));

(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54761){
var self__ = this;
var _54761__$1 = this;
return self__.meta54760;
}));

(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async54759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54760","meta54760",341281527,null)], null);
}));

(cljs.core.async.t_cljs$core$async54759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54759");

(cljs.core.async.t_cljs$core$async54759.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54759.
 */
cljs.core.async.__GT_t_cljs$core$async54759 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async54759(p__$1,ch__$1,meta54760){
return (new cljs.core.async.t_cljs$core$async54759(p__$1,ch__$1,meta54760));
});

}

return (new cljs.core.async.t_cljs$core$async54759(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__54763 = arguments.length;
switch (G__54763) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53396__auto___56169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54784){
var state_val_54785 = (state_54784[(1)]);
if((state_val_54785 === (7))){
var inst_54780 = (state_54784[(2)]);
var state_54784__$1 = state_54784;
var statearr_54786_56273 = state_54784__$1;
(statearr_54786_56273[(2)] = inst_54780);

(statearr_54786_56273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54785 === (1))){
var state_54784__$1 = state_54784;
var statearr_54787_56274 = state_54784__$1;
(statearr_54787_56274[(2)] = null);

(statearr_54787_56274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54785 === (4))){
var inst_54766 = (state_54784[(7)]);
var inst_54766__$1 = (state_54784[(2)]);
var inst_54767 = (inst_54766__$1 == null);
var state_54784__$1 = (function (){var statearr_54788 = state_54784;
(statearr_54788[(7)] = inst_54766__$1);

return statearr_54788;
})();
if(cljs.core.truth_(inst_54767)){
var statearr_54789_56279 = state_54784__$1;
(statearr_54789_56279[(1)] = (5));

} else {
var statearr_54790_56280 = state_54784__$1;
(statearr_54790_56280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54785 === (6))){
var inst_54766 = (state_54784[(7)]);
var inst_54771 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54766) : p.call(null,inst_54766));
var state_54784__$1 = state_54784;
if(cljs.core.truth_(inst_54771)){
var statearr_54791_56281 = state_54784__$1;
(statearr_54791_56281[(1)] = (8));

} else {
var statearr_54792_56282 = state_54784__$1;
(statearr_54792_56282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54785 === (3))){
var inst_54782 = (state_54784[(2)]);
var state_54784__$1 = state_54784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54784__$1,inst_54782);
} else {
if((state_val_54785 === (2))){
var state_54784__$1 = state_54784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54784__$1,(4),ch);
} else {
if((state_val_54785 === (11))){
var inst_54774 = (state_54784[(2)]);
var state_54784__$1 = state_54784;
var statearr_54793_56283 = state_54784__$1;
(statearr_54793_56283[(2)] = inst_54774);

(statearr_54793_56283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54785 === (9))){
var state_54784__$1 = state_54784;
var statearr_54794_56284 = state_54784__$1;
(statearr_54794_56284[(2)] = null);

(statearr_54794_56284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54785 === (5))){
var inst_54769 = cljs.core.async.close_BANG_(out);
var state_54784__$1 = state_54784;
var statearr_54795_56285 = state_54784__$1;
(statearr_54795_56285[(2)] = inst_54769);

(statearr_54795_56285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54785 === (10))){
var inst_54777 = (state_54784[(2)]);
var state_54784__$1 = (function (){var statearr_54796 = state_54784;
(statearr_54796[(8)] = inst_54777);

return statearr_54796;
})();
var statearr_54797_56286 = state_54784__$1;
(statearr_54797_56286[(2)] = null);

(statearr_54797_56286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54785 === (8))){
var inst_54766 = (state_54784[(7)]);
var state_54784__$1 = state_54784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54784__$1,(11),out,inst_54766);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_54798 = [null,null,null,null,null,null,null,null,null];
(statearr_54798[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_54798[(1)] = (1));

return statearr_54798;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_54784){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54784);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54799){var ex__53345__auto__ = e54799;
var statearr_54800_56287 = state_54784;
(statearr_54800_56287[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54784[(4)]))){
var statearr_54801_56289 = state_54784;
(statearr_54801_56289[(1)] = cljs.core.first((state_54784[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56290 = state_54784;
state_54784 = G__56290;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_54784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_54784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54802 = f__53397__auto__();
(statearr_54802[(6)] = c__53396__auto___56169);

return statearr_54802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__54804 = arguments.length;
switch (G__54804) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__53396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54866){
var state_val_54867 = (state_54866[(1)]);
if((state_val_54867 === (7))){
var inst_54862 = (state_54866[(2)]);
var state_54866__$1 = state_54866;
var statearr_54868_56313 = state_54866__$1;
(statearr_54868_56313[(2)] = inst_54862);

(statearr_54868_56313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (20))){
var inst_54832 = (state_54866[(7)]);
var inst_54843 = (state_54866[(2)]);
var inst_54844 = cljs.core.next(inst_54832);
var inst_54818 = inst_54844;
var inst_54819 = null;
var inst_54820 = (0);
var inst_54821 = (0);
var state_54866__$1 = (function (){var statearr_54869 = state_54866;
(statearr_54869[(8)] = inst_54843);

(statearr_54869[(9)] = inst_54820);

(statearr_54869[(10)] = inst_54818);

(statearr_54869[(11)] = inst_54819);

(statearr_54869[(12)] = inst_54821);

return statearr_54869;
})();
var statearr_54870_56315 = state_54866__$1;
(statearr_54870_56315[(2)] = null);

(statearr_54870_56315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (1))){
var state_54866__$1 = state_54866;
var statearr_54871_56316 = state_54866__$1;
(statearr_54871_56316[(2)] = null);

(statearr_54871_56316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (4))){
var inst_54807 = (state_54866[(13)]);
var inst_54807__$1 = (state_54866[(2)]);
var inst_54808 = (inst_54807__$1 == null);
var state_54866__$1 = (function (){var statearr_54872 = state_54866;
(statearr_54872[(13)] = inst_54807__$1);

return statearr_54872;
})();
if(cljs.core.truth_(inst_54808)){
var statearr_54873_56321 = state_54866__$1;
(statearr_54873_56321[(1)] = (5));

} else {
var statearr_54874_56322 = state_54866__$1;
(statearr_54874_56322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (15))){
var state_54866__$1 = state_54866;
var statearr_54878_56323 = state_54866__$1;
(statearr_54878_56323[(2)] = null);

(statearr_54878_56323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (21))){
var state_54866__$1 = state_54866;
var statearr_54879_56325 = state_54866__$1;
(statearr_54879_56325[(2)] = null);

(statearr_54879_56325[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (13))){
var inst_54820 = (state_54866[(9)]);
var inst_54818 = (state_54866[(10)]);
var inst_54819 = (state_54866[(11)]);
var inst_54821 = (state_54866[(12)]);
var inst_54828 = (state_54866[(2)]);
var inst_54829 = (inst_54821 + (1));
var tmp54875 = inst_54820;
var tmp54876 = inst_54818;
var tmp54877 = inst_54819;
var inst_54818__$1 = tmp54876;
var inst_54819__$1 = tmp54877;
var inst_54820__$1 = tmp54875;
var inst_54821__$1 = inst_54829;
var state_54866__$1 = (function (){var statearr_54880 = state_54866;
(statearr_54880[(14)] = inst_54828);

(statearr_54880[(9)] = inst_54820__$1);

(statearr_54880[(10)] = inst_54818__$1);

(statearr_54880[(11)] = inst_54819__$1);

(statearr_54880[(12)] = inst_54821__$1);

return statearr_54880;
})();
var statearr_54881_56326 = state_54866__$1;
(statearr_54881_56326[(2)] = null);

(statearr_54881_56326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (22))){
var state_54866__$1 = state_54866;
var statearr_54882_56328 = state_54866__$1;
(statearr_54882_56328[(2)] = null);

(statearr_54882_56328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (6))){
var inst_54807 = (state_54866[(13)]);
var inst_54816 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54807) : f.call(null,inst_54807));
var inst_54817 = cljs.core.seq(inst_54816);
var inst_54818 = inst_54817;
var inst_54819 = null;
var inst_54820 = (0);
var inst_54821 = (0);
var state_54866__$1 = (function (){var statearr_54883 = state_54866;
(statearr_54883[(9)] = inst_54820);

(statearr_54883[(10)] = inst_54818);

(statearr_54883[(11)] = inst_54819);

(statearr_54883[(12)] = inst_54821);

return statearr_54883;
})();
var statearr_54884_56365 = state_54866__$1;
(statearr_54884_56365[(2)] = null);

(statearr_54884_56365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (17))){
var inst_54832 = (state_54866[(7)]);
var inst_54836 = cljs.core.chunk_first(inst_54832);
var inst_54837 = cljs.core.chunk_rest(inst_54832);
var inst_54838 = cljs.core.count(inst_54836);
var inst_54818 = inst_54837;
var inst_54819 = inst_54836;
var inst_54820 = inst_54838;
var inst_54821 = (0);
var state_54866__$1 = (function (){var statearr_54885 = state_54866;
(statearr_54885[(9)] = inst_54820);

(statearr_54885[(10)] = inst_54818);

(statearr_54885[(11)] = inst_54819);

(statearr_54885[(12)] = inst_54821);

return statearr_54885;
})();
var statearr_54886_56366 = state_54866__$1;
(statearr_54886_56366[(2)] = null);

(statearr_54886_56366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (3))){
var inst_54864 = (state_54866[(2)]);
var state_54866__$1 = state_54866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54866__$1,inst_54864);
} else {
if((state_val_54867 === (12))){
var inst_54852 = (state_54866[(2)]);
var state_54866__$1 = state_54866;
var statearr_54887_56367 = state_54866__$1;
(statearr_54887_56367[(2)] = inst_54852);

(statearr_54887_56367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (2))){
var state_54866__$1 = state_54866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54866__$1,(4),in$);
} else {
if((state_val_54867 === (23))){
var inst_54860 = (state_54866[(2)]);
var state_54866__$1 = state_54866;
var statearr_54888_56368 = state_54866__$1;
(statearr_54888_56368[(2)] = inst_54860);

(statearr_54888_56368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (19))){
var inst_54847 = (state_54866[(2)]);
var state_54866__$1 = state_54866;
var statearr_54889_56369 = state_54866__$1;
(statearr_54889_56369[(2)] = inst_54847);

(statearr_54889_56369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (11))){
var inst_54832 = (state_54866[(7)]);
var inst_54818 = (state_54866[(10)]);
var inst_54832__$1 = cljs.core.seq(inst_54818);
var state_54866__$1 = (function (){var statearr_54890 = state_54866;
(statearr_54890[(7)] = inst_54832__$1);

return statearr_54890;
})();
if(inst_54832__$1){
var statearr_54891_56370 = state_54866__$1;
(statearr_54891_56370[(1)] = (14));

} else {
var statearr_54892_56371 = state_54866__$1;
(statearr_54892_56371[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (9))){
var inst_54854 = (state_54866[(2)]);
var inst_54855 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_54866__$1 = (function (){var statearr_54893 = state_54866;
(statearr_54893[(15)] = inst_54854);

return statearr_54893;
})();
if(cljs.core.truth_(inst_54855)){
var statearr_54894_56372 = state_54866__$1;
(statearr_54894_56372[(1)] = (21));

} else {
var statearr_54895_56373 = state_54866__$1;
(statearr_54895_56373[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (5))){
var inst_54810 = cljs.core.async.close_BANG_(out);
var state_54866__$1 = state_54866;
var statearr_54896_56374 = state_54866__$1;
(statearr_54896_56374[(2)] = inst_54810);

(statearr_54896_56374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (14))){
var inst_54832 = (state_54866[(7)]);
var inst_54834 = cljs.core.chunked_seq_QMARK_(inst_54832);
var state_54866__$1 = state_54866;
if(inst_54834){
var statearr_54897_56375 = state_54866__$1;
(statearr_54897_56375[(1)] = (17));

} else {
var statearr_54898_56376 = state_54866__$1;
(statearr_54898_56376[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (16))){
var inst_54850 = (state_54866[(2)]);
var state_54866__$1 = state_54866;
var statearr_54899_56377 = state_54866__$1;
(statearr_54899_56377[(2)] = inst_54850);

(statearr_54899_56377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54867 === (10))){
var inst_54819 = (state_54866[(11)]);
var inst_54821 = (state_54866[(12)]);
var inst_54826 = cljs.core._nth(inst_54819,inst_54821);
var state_54866__$1 = state_54866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54866__$1,(13),out,inst_54826);
} else {
if((state_val_54867 === (18))){
var inst_54832 = (state_54866[(7)]);
var inst_54841 = cljs.core.first(inst_54832);
var state_54866__$1 = state_54866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54866__$1,(20),out,inst_54841);
} else {
if((state_val_54867 === (8))){
var inst_54820 = (state_54866[(9)]);
var inst_54821 = (state_54866[(12)]);
var inst_54823 = (inst_54821 < inst_54820);
var inst_54824 = inst_54823;
var state_54866__$1 = state_54866;
if(cljs.core.truth_(inst_54824)){
var statearr_54900_56395 = state_54866__$1;
(statearr_54900_56395[(1)] = (10));

} else {
var statearr_54901_56396 = state_54866__$1;
(statearr_54901_56396[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__53342__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__53342__auto____0 = (function (){
var statearr_54902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54902[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__53342__auto__);

(statearr_54902[(1)] = (1));

return statearr_54902;
});
var cljs$core$async$mapcat_STAR__$_state_machine__53342__auto____1 = (function (state_54866){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54866);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54903){var ex__53345__auto__ = e54903;
var statearr_54904_56397 = state_54866;
(statearr_54904_56397[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54866[(4)]))){
var statearr_54905_56398 = state_54866;
(statearr_54905_56398[(1)] = cljs.core.first((state_54866[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56399 = state_54866;
state_54866 = G__56399;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__53342__auto__ = function(state_54866){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__53342__auto____1.call(this,state_54866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__53342__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__53342__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54906 = f__53397__auto__();
(statearr_54906[(6)] = c__53396__auto__);

return statearr_54906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));

return c__53396__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__54908 = arguments.length;
switch (G__54908) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__54910 = arguments.length;
switch (G__54910) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__54912 = arguments.length;
switch (G__54912) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53396__auto___56403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54936){
var state_val_54937 = (state_54936[(1)]);
if((state_val_54937 === (7))){
var inst_54931 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54938_56407 = state_54936__$1;
(statearr_54938_56407[(2)] = inst_54931);

(statearr_54938_56407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (1))){
var inst_54913 = null;
var state_54936__$1 = (function (){var statearr_54939 = state_54936;
(statearr_54939[(7)] = inst_54913);

return statearr_54939;
})();
var statearr_54940_56408 = state_54936__$1;
(statearr_54940_56408[(2)] = null);

(statearr_54940_56408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (4))){
var inst_54916 = (state_54936[(8)]);
var inst_54916__$1 = (state_54936[(2)]);
var inst_54917 = (inst_54916__$1 == null);
var inst_54918 = cljs.core.not(inst_54917);
var state_54936__$1 = (function (){var statearr_54941 = state_54936;
(statearr_54941[(8)] = inst_54916__$1);

return statearr_54941;
})();
if(inst_54918){
var statearr_54942_56409 = state_54936__$1;
(statearr_54942_56409[(1)] = (5));

} else {
var statearr_54943_56410 = state_54936__$1;
(statearr_54943_56410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (6))){
var state_54936__$1 = state_54936;
var statearr_54944_56411 = state_54936__$1;
(statearr_54944_56411[(2)] = null);

(statearr_54944_56411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (3))){
var inst_54933 = (state_54936[(2)]);
var inst_54934 = cljs.core.async.close_BANG_(out);
var state_54936__$1 = (function (){var statearr_54945 = state_54936;
(statearr_54945[(9)] = inst_54933);

return statearr_54945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54936__$1,inst_54934);
} else {
if((state_val_54937 === (2))){
var state_54936__$1 = state_54936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54936__$1,(4),ch);
} else {
if((state_val_54937 === (11))){
var inst_54916 = (state_54936[(8)]);
var inst_54925 = (state_54936[(2)]);
var inst_54913 = inst_54916;
var state_54936__$1 = (function (){var statearr_54946 = state_54936;
(statearr_54946[(10)] = inst_54925);

(statearr_54946[(7)] = inst_54913);

return statearr_54946;
})();
var statearr_54947_56412 = state_54936__$1;
(statearr_54947_56412[(2)] = null);

(statearr_54947_56412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (9))){
var inst_54916 = (state_54936[(8)]);
var state_54936__$1 = state_54936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54936__$1,(11),out,inst_54916);
} else {
if((state_val_54937 === (5))){
var inst_54916 = (state_54936[(8)]);
var inst_54913 = (state_54936[(7)]);
var inst_54920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54916,inst_54913);
var state_54936__$1 = state_54936;
if(inst_54920){
var statearr_54949_56416 = state_54936__$1;
(statearr_54949_56416[(1)] = (8));

} else {
var statearr_54950_56417 = state_54936__$1;
(statearr_54950_56417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (10))){
var inst_54928 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54951_56418 = state_54936__$1;
(statearr_54951_56418[(2)] = inst_54928);

(statearr_54951_56418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (8))){
var inst_54913 = (state_54936[(7)]);
var tmp54948 = inst_54913;
var inst_54913__$1 = tmp54948;
var state_54936__$1 = (function (){var statearr_54952 = state_54936;
(statearr_54952[(7)] = inst_54913__$1);

return statearr_54952;
})();
var statearr_54953_56419 = state_54936__$1;
(statearr_54953_56419[(2)] = null);

(statearr_54953_56419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_54954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54954[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_54954[(1)] = (1));

return statearr_54954;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_54936){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54936);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e54955){var ex__53345__auto__ = e54955;
var statearr_54956_56420 = state_54936;
(statearr_54956_56420[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54936[(4)]))){
var statearr_54957_56421 = state_54936;
(statearr_54957_56421[(1)] = cljs.core.first((state_54936[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56422 = state_54936;
state_54936 = G__56422;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_54936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_54936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_54958 = f__53397__auto__();
(statearr_54958[(6)] = c__53396__auto___56403);

return statearr_54958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__54960 = arguments.length;
switch (G__54960) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53396__auto___56424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_54998){
var state_val_54999 = (state_54998[(1)]);
if((state_val_54999 === (7))){
var inst_54994 = (state_54998[(2)]);
var state_54998__$1 = state_54998;
var statearr_55000_56425 = state_54998__$1;
(statearr_55000_56425[(2)] = inst_54994);

(statearr_55000_56425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (1))){
var inst_54961 = (new Array(n));
var inst_54962 = inst_54961;
var inst_54963 = (0);
var state_54998__$1 = (function (){var statearr_55001 = state_54998;
(statearr_55001[(7)] = inst_54963);

(statearr_55001[(8)] = inst_54962);

return statearr_55001;
})();
var statearr_55002_56426 = state_54998__$1;
(statearr_55002_56426[(2)] = null);

(statearr_55002_56426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (4))){
var inst_54966 = (state_54998[(9)]);
var inst_54966__$1 = (state_54998[(2)]);
var inst_54967 = (inst_54966__$1 == null);
var inst_54968 = cljs.core.not(inst_54967);
var state_54998__$1 = (function (){var statearr_55003 = state_54998;
(statearr_55003[(9)] = inst_54966__$1);

return statearr_55003;
})();
if(inst_54968){
var statearr_55004_56427 = state_54998__$1;
(statearr_55004_56427[(1)] = (5));

} else {
var statearr_55005_56428 = state_54998__$1;
(statearr_55005_56428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (15))){
var inst_54988 = (state_54998[(2)]);
var state_54998__$1 = state_54998;
var statearr_55006_56429 = state_54998__$1;
(statearr_55006_56429[(2)] = inst_54988);

(statearr_55006_56429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (13))){
var state_54998__$1 = state_54998;
var statearr_55007_56430 = state_54998__$1;
(statearr_55007_56430[(2)] = null);

(statearr_55007_56430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (6))){
var inst_54963 = (state_54998[(7)]);
var inst_54984 = (inst_54963 > (0));
var state_54998__$1 = state_54998;
if(cljs.core.truth_(inst_54984)){
var statearr_55008_56431 = state_54998__$1;
(statearr_55008_56431[(1)] = (12));

} else {
var statearr_55009_56432 = state_54998__$1;
(statearr_55009_56432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (3))){
var inst_54996 = (state_54998[(2)]);
var state_54998__$1 = state_54998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54998__$1,inst_54996);
} else {
if((state_val_54999 === (12))){
var inst_54962 = (state_54998[(8)]);
var inst_54986 = cljs.core.vec(inst_54962);
var state_54998__$1 = state_54998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54998__$1,(15),out,inst_54986);
} else {
if((state_val_54999 === (2))){
var state_54998__$1 = state_54998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54998__$1,(4),ch);
} else {
if((state_val_54999 === (11))){
var inst_54978 = (state_54998[(2)]);
var inst_54979 = (new Array(n));
var inst_54962 = inst_54979;
var inst_54963 = (0);
var state_54998__$1 = (function (){var statearr_55010 = state_54998;
(statearr_55010[(7)] = inst_54963);

(statearr_55010[(8)] = inst_54962);

(statearr_55010[(10)] = inst_54978);

return statearr_55010;
})();
var statearr_55011_56433 = state_54998__$1;
(statearr_55011_56433[(2)] = null);

(statearr_55011_56433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (9))){
var inst_54962 = (state_54998[(8)]);
var inst_54976 = cljs.core.vec(inst_54962);
var state_54998__$1 = state_54998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54998__$1,(11),out,inst_54976);
} else {
if((state_val_54999 === (5))){
var inst_54963 = (state_54998[(7)]);
var inst_54962 = (state_54998[(8)]);
var inst_54966 = (state_54998[(9)]);
var inst_54971 = (state_54998[(11)]);
var inst_54970 = (inst_54962[inst_54963] = inst_54966);
var inst_54971__$1 = (inst_54963 + (1));
var inst_54972 = (inst_54971__$1 < n);
var state_54998__$1 = (function (){var statearr_55012 = state_54998;
(statearr_55012[(12)] = inst_54970);

(statearr_55012[(11)] = inst_54971__$1);

return statearr_55012;
})();
if(cljs.core.truth_(inst_54972)){
var statearr_55013_56434 = state_54998__$1;
(statearr_55013_56434[(1)] = (8));

} else {
var statearr_55014_56435 = state_54998__$1;
(statearr_55014_56435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (14))){
var inst_54991 = (state_54998[(2)]);
var inst_54992 = cljs.core.async.close_BANG_(out);
var state_54998__$1 = (function (){var statearr_55016 = state_54998;
(statearr_55016[(13)] = inst_54991);

return statearr_55016;
})();
var statearr_55017_56436 = state_54998__$1;
(statearr_55017_56436[(2)] = inst_54992);

(statearr_55017_56436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (10))){
var inst_54982 = (state_54998[(2)]);
var state_54998__$1 = state_54998;
var statearr_55018_56437 = state_54998__$1;
(statearr_55018_56437[(2)] = inst_54982);

(statearr_55018_56437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54999 === (8))){
var inst_54962 = (state_54998[(8)]);
var inst_54971 = (state_54998[(11)]);
var tmp55015 = inst_54962;
var inst_54962__$1 = tmp55015;
var inst_54963 = inst_54971;
var state_54998__$1 = (function (){var statearr_55019 = state_54998;
(statearr_55019[(7)] = inst_54963);

(statearr_55019[(8)] = inst_54962__$1);

return statearr_55019;
})();
var statearr_55020_56438 = state_54998__$1;
(statearr_55020_56438[(2)] = null);

(statearr_55020_56438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_55021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55021[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_55021[(1)] = (1));

return statearr_55021;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_54998){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_54998);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e55022){var ex__53345__auto__ = e55022;
var statearr_55023_56447 = state_54998;
(statearr_55023_56447[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_54998[(4)]))){
var statearr_55024_56448 = state_54998;
(statearr_55024_56448[(1)] = cljs.core.first((state_54998[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56449 = state_54998;
state_54998 = G__56449;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_54998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_54998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_55025 = f__53397__auto__();
(statearr_55025[(6)] = c__53396__auto___56424);

return statearr_55025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55027 = arguments.length;
switch (G__55027) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53396__auto___56454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53397__auto__ = (function (){var switch__53341__auto__ = (function (state_55069){
var state_val_55070 = (state_55069[(1)]);
if((state_val_55070 === (7))){
var inst_55065 = (state_55069[(2)]);
var state_55069__$1 = state_55069;
var statearr_55071_56455 = state_55069__$1;
(statearr_55071_56455[(2)] = inst_55065);

(statearr_55071_56455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (1))){
var inst_55028 = [];
var inst_55029 = inst_55028;
var inst_55030 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55069__$1 = (function (){var statearr_55072 = state_55069;
(statearr_55072[(7)] = inst_55029);

(statearr_55072[(8)] = inst_55030);

return statearr_55072;
})();
var statearr_55073_56456 = state_55069__$1;
(statearr_55073_56456[(2)] = null);

(statearr_55073_56456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (4))){
var inst_55033 = (state_55069[(9)]);
var inst_55033__$1 = (state_55069[(2)]);
var inst_55034 = (inst_55033__$1 == null);
var inst_55035 = cljs.core.not(inst_55034);
var state_55069__$1 = (function (){var statearr_55074 = state_55069;
(statearr_55074[(9)] = inst_55033__$1);

return statearr_55074;
})();
if(inst_55035){
var statearr_55075_56457 = state_55069__$1;
(statearr_55075_56457[(1)] = (5));

} else {
var statearr_55076_56458 = state_55069__$1;
(statearr_55076_56458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (15))){
var inst_55059 = (state_55069[(2)]);
var state_55069__$1 = state_55069;
var statearr_55077_56459 = state_55069__$1;
(statearr_55077_56459[(2)] = inst_55059);

(statearr_55077_56459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (13))){
var state_55069__$1 = state_55069;
var statearr_55078_56460 = state_55069__$1;
(statearr_55078_56460[(2)] = null);

(statearr_55078_56460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (6))){
var inst_55029 = (state_55069[(7)]);
var inst_55054 = inst_55029.length;
var inst_55055 = (inst_55054 > (0));
var state_55069__$1 = state_55069;
if(cljs.core.truth_(inst_55055)){
var statearr_55079_56461 = state_55069__$1;
(statearr_55079_56461[(1)] = (12));

} else {
var statearr_55080_56462 = state_55069__$1;
(statearr_55080_56462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (3))){
var inst_55067 = (state_55069[(2)]);
var state_55069__$1 = state_55069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55069__$1,inst_55067);
} else {
if((state_val_55070 === (12))){
var inst_55029 = (state_55069[(7)]);
var inst_55057 = cljs.core.vec(inst_55029);
var state_55069__$1 = state_55069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55069__$1,(15),out,inst_55057);
} else {
if((state_val_55070 === (2))){
var state_55069__$1 = state_55069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55069__$1,(4),ch);
} else {
if((state_val_55070 === (11))){
var inst_55037 = (state_55069[(10)]);
var inst_55033 = (state_55069[(9)]);
var inst_55047 = (state_55069[(2)]);
var inst_55048 = [];
var inst_55049 = inst_55048.push(inst_55033);
var inst_55029 = inst_55048;
var inst_55030 = inst_55037;
var state_55069__$1 = (function (){var statearr_55081 = state_55069;
(statearr_55081[(7)] = inst_55029);

(statearr_55081[(11)] = inst_55047);

(statearr_55081[(8)] = inst_55030);

(statearr_55081[(12)] = inst_55049);

return statearr_55081;
})();
var statearr_55082_56463 = state_55069__$1;
(statearr_55082_56463[(2)] = null);

(statearr_55082_56463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (9))){
var inst_55029 = (state_55069[(7)]);
var inst_55045 = cljs.core.vec(inst_55029);
var state_55069__$1 = state_55069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55069__$1,(11),out,inst_55045);
} else {
if((state_val_55070 === (5))){
var inst_55030 = (state_55069[(8)]);
var inst_55037 = (state_55069[(10)]);
var inst_55033 = (state_55069[(9)]);
var inst_55037__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55033) : f.call(null,inst_55033));
var inst_55038 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55037__$1,inst_55030);
var inst_55039 = cljs.core.keyword_identical_QMARK_(inst_55030,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_55040 = ((inst_55038) || (inst_55039));
var state_55069__$1 = (function (){var statearr_55083 = state_55069;
(statearr_55083[(10)] = inst_55037__$1);

return statearr_55083;
})();
if(cljs.core.truth_(inst_55040)){
var statearr_55084_56464 = state_55069__$1;
(statearr_55084_56464[(1)] = (8));

} else {
var statearr_55085_56465 = state_55069__$1;
(statearr_55085_56465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (14))){
var inst_55062 = (state_55069[(2)]);
var inst_55063 = cljs.core.async.close_BANG_(out);
var state_55069__$1 = (function (){var statearr_55087 = state_55069;
(statearr_55087[(13)] = inst_55062);

return statearr_55087;
})();
var statearr_55088_56523 = state_55069__$1;
(statearr_55088_56523[(2)] = inst_55063);

(statearr_55088_56523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (10))){
var inst_55052 = (state_55069[(2)]);
var state_55069__$1 = state_55069;
var statearr_55089_56527 = state_55069__$1;
(statearr_55089_56527[(2)] = inst_55052);

(statearr_55089_56527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55070 === (8))){
var inst_55029 = (state_55069[(7)]);
var inst_55037 = (state_55069[(10)]);
var inst_55033 = (state_55069[(9)]);
var inst_55042 = inst_55029.push(inst_55033);
var tmp55086 = inst_55029;
var inst_55029__$1 = tmp55086;
var inst_55030 = inst_55037;
var state_55069__$1 = (function (){var statearr_55090 = state_55069;
(statearr_55090[(7)] = inst_55029__$1);

(statearr_55090[(8)] = inst_55030);

(statearr_55090[(14)] = inst_55042);

return statearr_55090;
})();
var statearr_55091_56545 = state_55069__$1;
(statearr_55091_56545[(2)] = null);

(statearr_55091_56545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53342__auto__ = null;
var cljs$core$async$state_machine__53342__auto____0 = (function (){
var statearr_55092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55092[(0)] = cljs$core$async$state_machine__53342__auto__);

(statearr_55092[(1)] = (1));

return statearr_55092;
});
var cljs$core$async$state_machine__53342__auto____1 = (function (state_55069){
while(true){
var ret_value__53343__auto__ = (function (){try{while(true){
var result__53344__auto__ = switch__53341__auto__(state_55069);
if(cljs.core.keyword_identical_QMARK_(result__53344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53344__auto__;
}
break;
}
}catch (e55093){var ex__53345__auto__ = e55093;
var statearr_55094_56558 = state_55069;
(statearr_55094_56558[(2)] = ex__53345__auto__);


if(cljs.core.seq((state_55069[(4)]))){
var statearr_55095_56560 = state_55069;
(statearr_55095_56560[(1)] = cljs.core.first((state_55069[(4)])));

} else {
throw ex__53345__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56566 = state_55069;
state_55069 = G__56566;
continue;
} else {
return ret_value__53343__auto__;
}
break;
}
});
cljs$core$async$state_machine__53342__auto__ = function(state_55069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53342__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53342__auto____1.call(this,state_55069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53342__auto____0;
cljs$core$async$state_machine__53342__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53342__auto____1;
return cljs$core$async$state_machine__53342__auto__;
})()
})();
var state__53398__auto__ = (function (){var statearr_55096 = f__53397__auto__();
(statearr_55096[(6)] = c__53396__auto___56454);

return statearr_55096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53398__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
