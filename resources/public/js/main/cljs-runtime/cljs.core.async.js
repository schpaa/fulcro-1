goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__53612 = arguments.length;
switch (G__53612) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53616 = (function (f,blockable,meta53617){
this.f = f;
this.blockable = blockable;
this.meta53617 = meta53617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53618,meta53617__$1){
var self__ = this;
var _53618__$1 = this;
return (new cljs.core.async.t_cljs$core$async53616(self__.f,self__.blockable,meta53617__$1));
}));

(cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53618){
var self__ = this;
var _53618__$1 = this;
return self__.meta53617;
}));

(cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async53616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async53616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta53617","meta53617",-625764503,null)], null);
}));

(cljs.core.async.t_cljs$core$async53616.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53616");

(cljs.core.async.t_cljs$core$async53616.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53616");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53616.
 */
cljs.core.async.__GT_t_cljs$core$async53616 = (function cljs$core$async$__GT_t_cljs$core$async53616(f__$1,blockable__$1,meta53617){
return (new cljs.core.async.t_cljs$core$async53616(f__$1,blockable__$1,meta53617));
});

}

return (new cljs.core.async.t_cljs$core$async53616(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53657 = arguments.length;
switch (G__53657) {
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
var G__53666 = arguments.length;
switch (G__53666) {
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
var G__53679 = arguments.length;
switch (G__53679) {
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
var val_55171 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55171) : fn1.call(null,val_55171));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55171) : fn1.call(null,val_55171));
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
var G__53682 = arguments.length;
switch (G__53682) {
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
var n__4613__auto___55178 = n;
var x_55179 = (0);
while(true){
if((x_55179 < n__4613__auto___55178)){
(a[x_55179] = x_55179);

var G__55182 = (x_55179 + (1));
x_55179 = G__55182;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53694 = (function (flag,meta53695){
this.flag = flag;
this.meta53695 = meta53695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53696,meta53695__$1){
var self__ = this;
var _53696__$1 = this;
return (new cljs.core.async.t_cljs$core$async53694(self__.flag,meta53695__$1));
}));

(cljs.core.async.t_cljs$core$async53694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53696){
var self__ = this;
var _53696__$1 = this;
return self__.meta53695;
}));

(cljs.core.async.t_cljs$core$async53694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async53694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async53694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta53695","meta53695",653225197,null)], null);
}));

(cljs.core.async.t_cljs$core$async53694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53694");

(cljs.core.async.t_cljs$core$async53694.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53694.
 */
cljs.core.async.__GT_t_cljs$core$async53694 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async53694(flag__$1,meta53695){
return (new cljs.core.async.t_cljs$core$async53694(flag__$1,meta53695));
});

}

return (new cljs.core.async.t_cljs$core$async53694(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53709 = (function (flag,cb,meta53710){
this.flag = flag;
this.cb = cb;
this.meta53710 = meta53710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53711,meta53710__$1){
var self__ = this;
var _53711__$1 = this;
return (new cljs.core.async.t_cljs$core$async53709(self__.flag,self__.cb,meta53710__$1));
}));

(cljs.core.async.t_cljs$core$async53709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53711){
var self__ = this;
var _53711__$1 = this;
return self__.meta53710;
}));

(cljs.core.async.t_cljs$core$async53709.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async53709.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async53709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta53710","meta53710",1988069257,null)], null);
}));

(cljs.core.async.t_cljs$core$async53709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53709");

(cljs.core.async.t_cljs$core$async53709.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53709.
 */
cljs.core.async.__GT_t_cljs$core$async53709 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async53709(flag__$1,cb__$1,meta53710){
return (new cljs.core.async.t_cljs$core$async53709(flag__$1,cb__$1,meta53710));
});

}

return (new cljs.core.async.t_cljs$core$async53709(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__53712_SHARP_){
var G__53720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53712_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__53720) : fret.call(null,G__53720));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53713_SHARP_){
var G__53721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53713_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__53721) : fret.call(null,G__53721));
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
var G__55193 = (i + (1));
i = G__55193;
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
var len__4736__auto___55199 = arguments.length;
var i__4737__auto___55201 = (0);
while(true){
if((i__4737__auto___55201 < len__4736__auto___55199)){
args__4742__auto__.push((arguments[i__4737__auto___55201]));

var G__55203 = (i__4737__auto___55201 + (1));
i__4737__auto___55201 = G__55203;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__53724){
var map__53725 = p__53724;
var map__53725__$1 = (((((!((map__53725 == null))))?(((((map__53725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53725):map__53725);
var opts = map__53725__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq53722){
var G__53723 = cljs.core.first(seq53722);
var seq53722__$1 = cljs.core.next(seq53722);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53723,seq53722__$1);
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
var G__53728 = arguments.length;
switch (G__53728) {
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
var c__53542__auto___55210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_53752){
var state_val_53753 = (state_53752[(1)]);
if((state_val_53753 === (7))){
var inst_53748 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
var statearr_53754_55213 = state_53752__$1;
(statearr_53754_55213[(2)] = inst_53748);

(statearr_53754_55213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (1))){
var state_53752__$1 = state_53752;
var statearr_53755_55215 = state_53752__$1;
(statearr_53755_55215[(2)] = null);

(statearr_53755_55215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (4))){
var inst_53731 = (state_53752[(7)]);
var inst_53731__$1 = (state_53752[(2)]);
var inst_53732 = (inst_53731__$1 == null);
var state_53752__$1 = (function (){var statearr_53756 = state_53752;
(statearr_53756[(7)] = inst_53731__$1);

return statearr_53756;
})();
if(cljs.core.truth_(inst_53732)){
var statearr_53757_55217 = state_53752__$1;
(statearr_53757_55217[(1)] = (5));

} else {
var statearr_53758_55218 = state_53752__$1;
(statearr_53758_55218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (13))){
var state_53752__$1 = state_53752;
var statearr_53759_55219 = state_53752__$1;
(statearr_53759_55219[(2)] = null);

(statearr_53759_55219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (6))){
var inst_53731 = (state_53752[(7)]);
var state_53752__$1 = state_53752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53752__$1,(11),to,inst_53731);
} else {
if((state_val_53753 === (3))){
var inst_53750 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53752__$1,inst_53750);
} else {
if((state_val_53753 === (12))){
var state_53752__$1 = state_53752;
var statearr_53760_55222 = state_53752__$1;
(statearr_53760_55222[(2)] = null);

(statearr_53760_55222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (2))){
var state_53752__$1 = state_53752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53752__$1,(4),from);
} else {
if((state_val_53753 === (11))){
var inst_53741 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
if(cljs.core.truth_(inst_53741)){
var statearr_53761_55226 = state_53752__$1;
(statearr_53761_55226[(1)] = (12));

} else {
var statearr_53762_55227 = state_53752__$1;
(statearr_53762_55227[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (9))){
var state_53752__$1 = state_53752;
var statearr_53763_55229 = state_53752__$1;
(statearr_53763_55229[(2)] = null);

(statearr_53763_55229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (5))){
var state_53752__$1 = state_53752;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53764_55230 = state_53752__$1;
(statearr_53764_55230[(1)] = (8));

} else {
var statearr_53765_55231 = state_53752__$1;
(statearr_53765_55231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (14))){
var inst_53746 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
var statearr_53766_55232 = state_53752__$1;
(statearr_53766_55232[(2)] = inst_53746);

(statearr_53766_55232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (10))){
var inst_53738 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
var statearr_53767_55235 = state_53752__$1;
(statearr_53767_55235[(2)] = inst_53738);

(statearr_53767_55235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (8))){
var inst_53735 = cljs.core.async.close_BANG_(to);
var state_53752__$1 = state_53752;
var statearr_53768_55240 = state_53752__$1;
(statearr_53768_55240[(2)] = inst_53735);

(statearr_53768_55240[(1)] = (10));


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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_53769 = [null,null,null,null,null,null,null,null];
(statearr_53769[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_53769[(1)] = (1));

return statearr_53769;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_53752){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_53752);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e53770){var ex__53246__auto__ = e53770;
var statearr_53771_55241 = state_53752;
(statearr_53771_55241[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_53752[(4)]))){
var statearr_53772_55242 = state_53752;
(statearr_53772_55242[(1)] = cljs.core.first((state_53752[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55243 = state_53752;
state_53752 = G__55243;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_53752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_53752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_53773 = f__53543__auto__();
(statearr_53773[(6)] = c__53542__auto___55210);

return statearr_53773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
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
var process = (function (p__53774){
var vec__53775 = p__53774;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53775,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53775,(1),null);
var job = vec__53775;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__53542__auto___55244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_53782){
var state_val_53783 = (state_53782[(1)]);
if((state_val_53783 === (1))){
var state_53782__$1 = state_53782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53782__$1,(2),res,v);
} else {
if((state_val_53783 === (2))){
var inst_53779 = (state_53782[(2)]);
var inst_53780 = cljs.core.async.close_BANG_(res);
var state_53782__$1 = (function (){var statearr_53784 = state_53782;
(statearr_53784[(7)] = inst_53779);

return statearr_53784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53782__$1,inst_53780);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0 = (function (){
var statearr_53785 = [null,null,null,null,null,null,null,null];
(statearr_53785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__);

(statearr_53785[(1)] = (1));

return statearr_53785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1 = (function (state_53782){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_53782);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e53786){var ex__53246__auto__ = e53786;
var statearr_53787_55246 = state_53782;
(statearr_53787_55246[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_53782[(4)]))){
var statearr_53788_55247 = state_53782;
(statearr_53788_55247[(1)] = cljs.core.first((state_53782[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55248 = state_53782;
state_53782 = G__55248;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = function(state_53782){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1.call(this,state_53782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_53789 = f__53543__auto__();
(statearr_53789[(6)] = c__53542__auto___55244);

return statearr_53789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__53790){
var vec__53791 = p__53790;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53791,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53791,(1),null);
var job = vec__53791;
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
var n__4613__auto___55251 = n;
var __55252 = (0);
while(true){
if((__55252 < n__4613__auto___55251)){
var G__53794_55253 = type;
var G__53794_55254__$1 = (((G__53794_55253 instanceof cljs.core.Keyword))?G__53794_55253.fqn:null);
switch (G__53794_55254__$1) {
case "compute":
var c__53542__auto___55256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55252,c__53542__auto___55256,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async){
return (function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = ((function (__55252,c__53542__auto___55256,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async){
return (function (state_53807){
var state_val_53808 = (state_53807[(1)]);
if((state_val_53808 === (1))){
var state_53807__$1 = state_53807;
var statearr_53809_55257 = state_53807__$1;
(statearr_53809_55257[(2)] = null);

(statearr_53809_55257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53808 === (2))){
var state_53807__$1 = state_53807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53807__$1,(4),jobs);
} else {
if((state_val_53808 === (3))){
var inst_53805 = (state_53807[(2)]);
var state_53807__$1 = state_53807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53807__$1,inst_53805);
} else {
if((state_val_53808 === (4))){
var inst_53797 = (state_53807[(2)]);
var inst_53798 = process(inst_53797);
var state_53807__$1 = state_53807;
if(cljs.core.truth_(inst_53798)){
var statearr_53810_55260 = state_53807__$1;
(statearr_53810_55260[(1)] = (5));

} else {
var statearr_53811_55261 = state_53807__$1;
(statearr_53811_55261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53808 === (5))){
var state_53807__$1 = state_53807;
var statearr_53812_55262 = state_53807__$1;
(statearr_53812_55262[(2)] = null);

(statearr_53812_55262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53808 === (6))){
var state_53807__$1 = state_53807;
var statearr_53813_55263 = state_53807__$1;
(statearr_53813_55263[(2)] = null);

(statearr_53813_55263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53808 === (7))){
var inst_53803 = (state_53807[(2)]);
var state_53807__$1 = state_53807;
var statearr_53814_55264 = state_53807__$1;
(statearr_53814_55264[(2)] = inst_53803);

(statearr_53814_55264[(1)] = (3));


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
});})(__55252,c__53542__auto___55256,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async))
;
return ((function (__55252,switch__53242__auto__,c__53542__auto___55256,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0 = (function (){
var statearr_53815 = [null,null,null,null,null,null,null];
(statearr_53815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__);

(statearr_53815[(1)] = (1));

return statearr_53815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1 = (function (state_53807){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_53807);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e53816){var ex__53246__auto__ = e53816;
var statearr_53817_55270 = state_53807;
(statearr_53817_55270[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_53807[(4)]))){
var statearr_53818_55272 = state_53807;
(statearr_53818_55272[(1)] = cljs.core.first((state_53807[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55273 = state_53807;
state_53807 = G__55273;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = function(state_53807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1.call(this,state_53807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__;
})()
;})(__55252,switch__53242__auto__,c__53542__auto___55256,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async))
})();
var state__53544__auto__ = (function (){var statearr_53819 = f__53543__auto__();
(statearr_53819[(6)] = c__53542__auto___55256);

return statearr_53819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
});})(__55252,c__53542__auto___55256,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async))
);


break;
case "async":
var c__53542__auto___55274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55252,c__53542__auto___55274,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async){
return (function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = ((function (__55252,c__53542__auto___55274,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async){
return (function (state_53832){
var state_val_53833 = (state_53832[(1)]);
if((state_val_53833 === (1))){
var state_53832__$1 = state_53832;
var statearr_53834_55278 = state_53832__$1;
(statearr_53834_55278[(2)] = null);

(statearr_53834_55278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53833 === (2))){
var state_53832__$1 = state_53832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53832__$1,(4),jobs);
} else {
if((state_val_53833 === (3))){
var inst_53830 = (state_53832[(2)]);
var state_53832__$1 = state_53832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53832__$1,inst_53830);
} else {
if((state_val_53833 === (4))){
var inst_53822 = (state_53832[(2)]);
var inst_53823 = async(inst_53822);
var state_53832__$1 = state_53832;
if(cljs.core.truth_(inst_53823)){
var statearr_53835_55284 = state_53832__$1;
(statearr_53835_55284[(1)] = (5));

} else {
var statearr_53836_55285 = state_53832__$1;
(statearr_53836_55285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53833 === (5))){
var state_53832__$1 = state_53832;
var statearr_53837_55289 = state_53832__$1;
(statearr_53837_55289[(2)] = null);

(statearr_53837_55289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53833 === (6))){
var state_53832__$1 = state_53832;
var statearr_53838_55290 = state_53832__$1;
(statearr_53838_55290[(2)] = null);

(statearr_53838_55290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53833 === (7))){
var inst_53828 = (state_53832[(2)]);
var state_53832__$1 = state_53832;
var statearr_53839_55292 = state_53832__$1;
(statearr_53839_55292[(2)] = inst_53828);

(statearr_53839_55292[(1)] = (3));


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
});})(__55252,c__53542__auto___55274,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async))
;
return ((function (__55252,switch__53242__auto__,c__53542__auto___55274,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0 = (function (){
var statearr_53840 = [null,null,null,null,null,null,null];
(statearr_53840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__);

(statearr_53840[(1)] = (1));

return statearr_53840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1 = (function (state_53832){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_53832);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e53841){var ex__53246__auto__ = e53841;
var statearr_53842_55296 = state_53832;
(statearr_53842_55296[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_53832[(4)]))){
var statearr_53843_55299 = state_53832;
(statearr_53843_55299[(1)] = cljs.core.first((state_53832[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55300 = state_53832;
state_53832 = G__55300;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = function(state_53832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1.call(this,state_53832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__;
})()
;})(__55252,switch__53242__auto__,c__53542__auto___55274,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async))
})();
var state__53544__auto__ = (function (){var statearr_53844 = f__53543__auto__();
(statearr_53844[(6)] = c__53542__auto___55274);

return statearr_53844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
});})(__55252,c__53542__auto___55274,G__53794_55253,G__53794_55254__$1,n__4613__auto___55251,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53794_55254__$1)].join('')));

}

var G__55302 = (__55252 + (1));
__55252 = G__55302;
continue;
} else {
}
break;
}

var c__53542__auto___55304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_53866){
var state_val_53867 = (state_53866[(1)]);
if((state_val_53867 === (7))){
var inst_53862 = (state_53866[(2)]);
var state_53866__$1 = state_53866;
var statearr_53868_55306 = state_53866__$1;
(statearr_53868_55306[(2)] = inst_53862);

(statearr_53868_55306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (1))){
var state_53866__$1 = state_53866;
var statearr_53869_55307 = state_53866__$1;
(statearr_53869_55307[(2)] = null);

(statearr_53869_55307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (4))){
var inst_53847 = (state_53866[(7)]);
var inst_53847__$1 = (state_53866[(2)]);
var inst_53848 = (inst_53847__$1 == null);
var state_53866__$1 = (function (){var statearr_53870 = state_53866;
(statearr_53870[(7)] = inst_53847__$1);

return statearr_53870;
})();
if(cljs.core.truth_(inst_53848)){
var statearr_53871_55309 = state_53866__$1;
(statearr_53871_55309[(1)] = (5));

} else {
var statearr_53872_55310 = state_53866__$1;
(statearr_53872_55310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (6))){
var inst_53852 = (state_53866[(8)]);
var inst_53847 = (state_53866[(7)]);
var inst_53852__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_53853 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53854 = [inst_53847,inst_53852__$1];
var inst_53855 = (new cljs.core.PersistentVector(null,2,(5),inst_53853,inst_53854,null));
var state_53866__$1 = (function (){var statearr_53873 = state_53866;
(statearr_53873[(8)] = inst_53852__$1);

return statearr_53873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53866__$1,(8),jobs,inst_53855);
} else {
if((state_val_53867 === (3))){
var inst_53864 = (state_53866[(2)]);
var state_53866__$1 = state_53866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53866__$1,inst_53864);
} else {
if((state_val_53867 === (2))){
var state_53866__$1 = state_53866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53866__$1,(4),from);
} else {
if((state_val_53867 === (9))){
var inst_53859 = (state_53866[(2)]);
var state_53866__$1 = (function (){var statearr_53874 = state_53866;
(statearr_53874[(9)] = inst_53859);

return statearr_53874;
})();
var statearr_53875_55312 = state_53866__$1;
(statearr_53875_55312[(2)] = null);

(statearr_53875_55312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (5))){
var inst_53850 = cljs.core.async.close_BANG_(jobs);
var state_53866__$1 = state_53866;
var statearr_53876_55315 = state_53866__$1;
(statearr_53876_55315[(2)] = inst_53850);

(statearr_53876_55315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (8))){
var inst_53852 = (state_53866[(8)]);
var inst_53857 = (state_53866[(2)]);
var state_53866__$1 = (function (){var statearr_53877 = state_53866;
(statearr_53877[(10)] = inst_53857);

return statearr_53877;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53866__$1,(9),results,inst_53852);
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
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0 = (function (){
var statearr_53878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__);

(statearr_53878[(1)] = (1));

return statearr_53878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1 = (function (state_53866){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_53866);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e53879){var ex__53246__auto__ = e53879;
var statearr_53880_55320 = state_53866;
(statearr_53880_55320[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_53866[(4)]))){
var statearr_53881_55321 = state_53866;
(statearr_53881_55321[(1)] = cljs.core.first((state_53866[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55324 = state_53866;
state_53866 = G__55324;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = function(state_53866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1.call(this,state_53866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_53882 = f__53543__auto__();
(statearr_53882[(6)] = c__53542__auto___55304);

return statearr_53882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));


var c__53542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_53920){
var state_val_53921 = (state_53920[(1)]);
if((state_val_53921 === (7))){
var inst_53916 = (state_53920[(2)]);
var state_53920__$1 = state_53920;
var statearr_53922_55326 = state_53920__$1;
(statearr_53922_55326[(2)] = inst_53916);

(statearr_53922_55326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (20))){
var state_53920__$1 = state_53920;
var statearr_53923_55328 = state_53920__$1;
(statearr_53923_55328[(2)] = null);

(statearr_53923_55328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (1))){
var state_53920__$1 = state_53920;
var statearr_53924_55329 = state_53920__$1;
(statearr_53924_55329[(2)] = null);

(statearr_53924_55329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (4))){
var inst_53885 = (state_53920[(7)]);
var inst_53885__$1 = (state_53920[(2)]);
var inst_53886 = (inst_53885__$1 == null);
var state_53920__$1 = (function (){var statearr_53925 = state_53920;
(statearr_53925[(7)] = inst_53885__$1);

return statearr_53925;
})();
if(cljs.core.truth_(inst_53886)){
var statearr_53926_55332 = state_53920__$1;
(statearr_53926_55332[(1)] = (5));

} else {
var statearr_53927_55333 = state_53920__$1;
(statearr_53927_55333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (15))){
var inst_53898 = (state_53920[(8)]);
var state_53920__$1 = state_53920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53920__$1,(18),to,inst_53898);
} else {
if((state_val_53921 === (21))){
var inst_53911 = (state_53920[(2)]);
var state_53920__$1 = state_53920;
var statearr_53928_55334 = state_53920__$1;
(statearr_53928_55334[(2)] = inst_53911);

(statearr_53928_55334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (13))){
var inst_53913 = (state_53920[(2)]);
var state_53920__$1 = (function (){var statearr_53929 = state_53920;
(statearr_53929[(9)] = inst_53913);

return statearr_53929;
})();
var statearr_53930_55336 = state_53920__$1;
(statearr_53930_55336[(2)] = null);

(statearr_53930_55336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (6))){
var inst_53885 = (state_53920[(7)]);
var state_53920__$1 = state_53920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53920__$1,(11),inst_53885);
} else {
if((state_val_53921 === (17))){
var inst_53906 = (state_53920[(2)]);
var state_53920__$1 = state_53920;
if(cljs.core.truth_(inst_53906)){
var statearr_53931_55339 = state_53920__$1;
(statearr_53931_55339[(1)] = (19));

} else {
var statearr_53932_55340 = state_53920__$1;
(statearr_53932_55340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (3))){
var inst_53918 = (state_53920[(2)]);
var state_53920__$1 = state_53920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53920__$1,inst_53918);
} else {
if((state_val_53921 === (12))){
var inst_53895 = (state_53920[(10)]);
var state_53920__$1 = state_53920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53920__$1,(14),inst_53895);
} else {
if((state_val_53921 === (2))){
var state_53920__$1 = state_53920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53920__$1,(4),results);
} else {
if((state_val_53921 === (19))){
var state_53920__$1 = state_53920;
var statearr_53933_55342 = state_53920__$1;
(statearr_53933_55342[(2)] = null);

(statearr_53933_55342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (11))){
var inst_53895 = (state_53920[(2)]);
var state_53920__$1 = (function (){var statearr_53934 = state_53920;
(statearr_53934[(10)] = inst_53895);

return statearr_53934;
})();
var statearr_53935_55345 = state_53920__$1;
(statearr_53935_55345[(2)] = null);

(statearr_53935_55345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (9))){
var state_53920__$1 = state_53920;
var statearr_53936_55346 = state_53920__$1;
(statearr_53936_55346[(2)] = null);

(statearr_53936_55346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (5))){
var state_53920__$1 = state_53920;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53937_55347 = state_53920__$1;
(statearr_53937_55347[(1)] = (8));

} else {
var statearr_53938_55348 = state_53920__$1;
(statearr_53938_55348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (14))){
var inst_53898 = (state_53920[(8)]);
var inst_53898__$1 = (state_53920[(2)]);
var inst_53899 = (inst_53898__$1 == null);
var inst_53900 = cljs.core.not(inst_53899);
var state_53920__$1 = (function (){var statearr_53939 = state_53920;
(statearr_53939[(8)] = inst_53898__$1);

return statearr_53939;
})();
if(inst_53900){
var statearr_53940_55354 = state_53920__$1;
(statearr_53940_55354[(1)] = (15));

} else {
var statearr_53941_55355 = state_53920__$1;
(statearr_53941_55355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (16))){
var state_53920__$1 = state_53920;
var statearr_53942_55358 = state_53920__$1;
(statearr_53942_55358[(2)] = false);

(statearr_53942_55358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (10))){
var inst_53892 = (state_53920[(2)]);
var state_53920__$1 = state_53920;
var statearr_53943_55359 = state_53920__$1;
(statearr_53943_55359[(2)] = inst_53892);

(statearr_53943_55359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (18))){
var inst_53903 = (state_53920[(2)]);
var state_53920__$1 = state_53920;
var statearr_53944_55360 = state_53920__$1;
(statearr_53944_55360[(2)] = inst_53903);

(statearr_53944_55360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53921 === (8))){
var inst_53889 = cljs.core.async.close_BANG_(to);
var state_53920__$1 = state_53920;
var statearr_53945_55361 = state_53920__$1;
(statearr_53945_55361[(2)] = inst_53889);

(statearr_53945_55361[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0 = (function (){
var statearr_53946 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__);

(statearr_53946[(1)] = (1));

return statearr_53946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1 = (function (state_53920){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_53920);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e53947){var ex__53246__auto__ = e53947;
var statearr_53948_55365 = state_53920;
(statearr_53948_55365[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_53920[(4)]))){
var statearr_53949_55368 = state_53920;
(statearr_53949_55368[(1)] = cljs.core.first((state_53920[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55371 = state_53920;
state_53920 = G__55371;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__ = function(state_53920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1.call(this,state_53920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_53950 = f__53543__auto__();
(statearr_53950[(6)] = c__53542__auto__);

return statearr_53950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));

return c__53542__auto__;
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
var G__53952 = arguments.length;
switch (G__53952) {
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
var G__53954 = arguments.length;
switch (G__53954) {
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
var G__53956 = arguments.length;
switch (G__53956) {
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
var c__53542__auto___55390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_53982){
var state_val_53983 = (state_53982[(1)]);
if((state_val_53983 === (7))){
var inst_53978 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
var statearr_53984_55392 = state_53982__$1;
(statearr_53984_55392[(2)] = inst_53978);

(statearr_53984_55392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (1))){
var state_53982__$1 = state_53982;
var statearr_53985_55398 = state_53982__$1;
(statearr_53985_55398[(2)] = null);

(statearr_53985_55398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (4))){
var inst_53959 = (state_53982[(7)]);
var inst_53959__$1 = (state_53982[(2)]);
var inst_53960 = (inst_53959__$1 == null);
var state_53982__$1 = (function (){var statearr_53986 = state_53982;
(statearr_53986[(7)] = inst_53959__$1);

return statearr_53986;
})();
if(cljs.core.truth_(inst_53960)){
var statearr_53987_55404 = state_53982__$1;
(statearr_53987_55404[(1)] = (5));

} else {
var statearr_53988_55405 = state_53982__$1;
(statearr_53988_55405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (13))){
var state_53982__$1 = state_53982;
var statearr_53989_55406 = state_53982__$1;
(statearr_53989_55406[(2)] = null);

(statearr_53989_55406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (6))){
var inst_53959 = (state_53982[(7)]);
var inst_53965 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53959) : p.call(null,inst_53959));
var state_53982__$1 = state_53982;
if(cljs.core.truth_(inst_53965)){
var statearr_53990_55410 = state_53982__$1;
(statearr_53990_55410[(1)] = (9));

} else {
var statearr_53991_55412 = state_53982__$1;
(statearr_53991_55412[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (3))){
var inst_53980 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53982__$1,inst_53980);
} else {
if((state_val_53983 === (12))){
var state_53982__$1 = state_53982;
var statearr_53992_55417 = state_53982__$1;
(statearr_53992_55417[(2)] = null);

(statearr_53992_55417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (2))){
var state_53982__$1 = state_53982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53982__$1,(4),ch);
} else {
if((state_val_53983 === (11))){
var inst_53959 = (state_53982[(7)]);
var inst_53969 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53982__$1,(8),inst_53969,inst_53959);
} else {
if((state_val_53983 === (9))){
var state_53982__$1 = state_53982;
var statearr_53993_55421 = state_53982__$1;
(statearr_53993_55421[(2)] = tc);

(statearr_53993_55421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (5))){
var inst_53962 = cljs.core.async.close_BANG_(tc);
var inst_53963 = cljs.core.async.close_BANG_(fc);
var state_53982__$1 = (function (){var statearr_53994 = state_53982;
(statearr_53994[(8)] = inst_53962);

return statearr_53994;
})();
var statearr_53995_55426 = state_53982__$1;
(statearr_53995_55426[(2)] = inst_53963);

(statearr_53995_55426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (14))){
var inst_53976 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
var statearr_53996_55433 = state_53982__$1;
(statearr_53996_55433[(2)] = inst_53976);

(statearr_53996_55433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (10))){
var state_53982__$1 = state_53982;
var statearr_53997_55441 = state_53982__$1;
(statearr_53997_55441[(2)] = fc);

(statearr_53997_55441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53983 === (8))){
var inst_53971 = (state_53982[(2)]);
var state_53982__$1 = state_53982;
if(cljs.core.truth_(inst_53971)){
var statearr_53998_55442 = state_53982__$1;
(statearr_53998_55442[(1)] = (12));

} else {
var statearr_53999_55443 = state_53982__$1;
(statearr_53999_55443[(1)] = (13));

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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_54000 = [null,null,null,null,null,null,null,null,null];
(statearr_54000[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_54000[(1)] = (1));

return statearr_54000;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_53982){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_53982);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54001){var ex__53246__auto__ = e54001;
var statearr_54002_55451 = state_53982;
(statearr_54002_55451[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_53982[(4)]))){
var statearr_54003_55452 = state_53982;
(statearr_54003_55452[(1)] = cljs.core.first((state_53982[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55457 = state_53982;
state_53982 = G__55457;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_53982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_53982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54004 = f__53543__auto__();
(statearr_54004[(6)] = c__53542__auto___55390);

return statearr_54004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
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
var c__53542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54026){
var state_val_54027 = (state_54026[(1)]);
if((state_val_54027 === (7))){
var inst_54022 = (state_54026[(2)]);
var state_54026__$1 = state_54026;
var statearr_54028_55461 = state_54026__$1;
(statearr_54028_55461[(2)] = inst_54022);

(statearr_54028_55461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54027 === (1))){
var inst_54005 = init;
var inst_54006 = inst_54005;
var state_54026__$1 = (function (){var statearr_54029 = state_54026;
(statearr_54029[(7)] = inst_54006);

return statearr_54029;
})();
var statearr_54030_55463 = state_54026__$1;
(statearr_54030_55463[(2)] = null);

(statearr_54030_55463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54027 === (4))){
var inst_54009 = (state_54026[(8)]);
var inst_54009__$1 = (state_54026[(2)]);
var inst_54010 = (inst_54009__$1 == null);
var state_54026__$1 = (function (){var statearr_54031 = state_54026;
(statearr_54031[(8)] = inst_54009__$1);

return statearr_54031;
})();
if(cljs.core.truth_(inst_54010)){
var statearr_54032_55468 = state_54026__$1;
(statearr_54032_55468[(1)] = (5));

} else {
var statearr_54033_55469 = state_54026__$1;
(statearr_54033_55469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54027 === (6))){
var inst_54009 = (state_54026[(8)]);
var inst_54013 = (state_54026[(9)]);
var inst_54006 = (state_54026[(7)]);
var inst_54013__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54006,inst_54009) : f.call(null,inst_54006,inst_54009));
var inst_54014 = cljs.core.reduced_QMARK_(inst_54013__$1);
var state_54026__$1 = (function (){var statearr_54034 = state_54026;
(statearr_54034[(9)] = inst_54013__$1);

return statearr_54034;
})();
if(inst_54014){
var statearr_54035_55474 = state_54026__$1;
(statearr_54035_55474[(1)] = (8));

} else {
var statearr_54036_55476 = state_54026__$1;
(statearr_54036_55476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54027 === (3))){
var inst_54024 = (state_54026[(2)]);
var state_54026__$1 = state_54026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54026__$1,inst_54024);
} else {
if((state_val_54027 === (2))){
var state_54026__$1 = state_54026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54026__$1,(4),ch);
} else {
if((state_val_54027 === (9))){
var inst_54013 = (state_54026[(9)]);
var inst_54006 = inst_54013;
var state_54026__$1 = (function (){var statearr_54037 = state_54026;
(statearr_54037[(7)] = inst_54006);

return statearr_54037;
})();
var statearr_54038_55478 = state_54026__$1;
(statearr_54038_55478[(2)] = null);

(statearr_54038_55478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54027 === (5))){
var inst_54006 = (state_54026[(7)]);
var state_54026__$1 = state_54026;
var statearr_54039_55479 = state_54026__$1;
(statearr_54039_55479[(2)] = inst_54006);

(statearr_54039_55479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54027 === (10))){
var inst_54020 = (state_54026[(2)]);
var state_54026__$1 = state_54026;
var statearr_54040_55480 = state_54026__$1;
(statearr_54040_55480[(2)] = inst_54020);

(statearr_54040_55480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54027 === (8))){
var inst_54013 = (state_54026[(9)]);
var inst_54016 = cljs.core.deref(inst_54013);
var state_54026__$1 = state_54026;
var statearr_54041_55481 = state_54026__$1;
(statearr_54041_55481[(2)] = inst_54016);

(statearr_54041_55481[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__53243__auto__ = null;
var cljs$core$async$reduce_$_state_machine__53243__auto____0 = (function (){
var statearr_54042 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54042[(0)] = cljs$core$async$reduce_$_state_machine__53243__auto__);

(statearr_54042[(1)] = (1));

return statearr_54042;
});
var cljs$core$async$reduce_$_state_machine__53243__auto____1 = (function (state_54026){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54026);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54043){var ex__53246__auto__ = e54043;
var statearr_54044_55482 = state_54026;
(statearr_54044_55482[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54026[(4)]))){
var statearr_54045_55483 = state_54026;
(statearr_54045_55483[(1)] = cljs.core.first((state_54026[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55484 = state_54026;
state_54026 = G__55484;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__53243__auto__ = function(state_54026){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__53243__auto____1.call(this,state_54026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__53243__auto____0;
cljs$core$async$reduce_$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__53243__auto____1;
return cljs$core$async$reduce_$_state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54046 = f__53543__auto__();
(statearr_54046[(6)] = c__53542__auto__);

return statearr_54046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));

return c__53542__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__53542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54052){
var state_val_54053 = (state_54052[(1)]);
if((state_val_54053 === (1))){
var inst_54047 = cljs.core.async.reduce(f__$1,init,ch);
var state_54052__$1 = state_54052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54052__$1,(2),inst_54047);
} else {
if((state_val_54053 === (2))){
var inst_54049 = (state_54052[(2)]);
var inst_54050 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54049) : f__$1.call(null,inst_54049));
var state_54052__$1 = state_54052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54052__$1,inst_54050);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__53243__auto__ = null;
var cljs$core$async$transduce_$_state_machine__53243__auto____0 = (function (){
var statearr_54054 = [null,null,null,null,null,null,null];
(statearr_54054[(0)] = cljs$core$async$transduce_$_state_machine__53243__auto__);

(statearr_54054[(1)] = (1));

return statearr_54054;
});
var cljs$core$async$transduce_$_state_machine__53243__auto____1 = (function (state_54052){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54052);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54055){var ex__53246__auto__ = e54055;
var statearr_54056_55486 = state_54052;
(statearr_54056_55486[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54052[(4)]))){
var statearr_54057_55488 = state_54052;
(statearr_54057_55488[(1)] = cljs.core.first((state_54052[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55493 = state_54052;
state_54052 = G__55493;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__53243__auto__ = function(state_54052){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__53243__auto____1.call(this,state_54052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__53243__auto____0;
cljs$core$async$transduce_$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__53243__auto____1;
return cljs$core$async$transduce_$_state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54058 = f__53543__auto__();
(statearr_54058[(6)] = c__53542__auto__);

return statearr_54058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));

return c__53542__auto__;
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
var G__54060 = arguments.length;
switch (G__54060) {
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
var c__53542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54085){
var state_val_54086 = (state_54085[(1)]);
if((state_val_54086 === (7))){
var inst_54067 = (state_54085[(2)]);
var state_54085__$1 = state_54085;
var statearr_54087_55503 = state_54085__$1;
(statearr_54087_55503[(2)] = inst_54067);

(statearr_54087_55503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (1))){
var inst_54061 = cljs.core.seq(coll);
var inst_54062 = inst_54061;
var state_54085__$1 = (function (){var statearr_54088 = state_54085;
(statearr_54088[(7)] = inst_54062);

return statearr_54088;
})();
var statearr_54089_55504 = state_54085__$1;
(statearr_54089_55504[(2)] = null);

(statearr_54089_55504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (4))){
var inst_54062 = (state_54085[(7)]);
var inst_54065 = cljs.core.first(inst_54062);
var state_54085__$1 = state_54085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54085__$1,(7),ch,inst_54065);
} else {
if((state_val_54086 === (13))){
var inst_54079 = (state_54085[(2)]);
var state_54085__$1 = state_54085;
var statearr_54090_55506 = state_54085__$1;
(statearr_54090_55506[(2)] = inst_54079);

(statearr_54090_55506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (6))){
var inst_54070 = (state_54085[(2)]);
var state_54085__$1 = state_54085;
if(cljs.core.truth_(inst_54070)){
var statearr_54091_55508 = state_54085__$1;
(statearr_54091_55508[(1)] = (8));

} else {
var statearr_54092_55509 = state_54085__$1;
(statearr_54092_55509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (3))){
var inst_54083 = (state_54085[(2)]);
var state_54085__$1 = state_54085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54085__$1,inst_54083);
} else {
if((state_val_54086 === (12))){
var state_54085__$1 = state_54085;
var statearr_54093_55511 = state_54085__$1;
(statearr_54093_55511[(2)] = null);

(statearr_54093_55511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (2))){
var inst_54062 = (state_54085[(7)]);
var state_54085__$1 = state_54085;
if(cljs.core.truth_(inst_54062)){
var statearr_54094_55517 = state_54085__$1;
(statearr_54094_55517[(1)] = (4));

} else {
var statearr_54095_55518 = state_54085__$1;
(statearr_54095_55518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (11))){
var inst_54076 = cljs.core.async.close_BANG_(ch);
var state_54085__$1 = state_54085;
var statearr_54096_55519 = state_54085__$1;
(statearr_54096_55519[(2)] = inst_54076);

(statearr_54096_55519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (9))){
var state_54085__$1 = state_54085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54097_55523 = state_54085__$1;
(statearr_54097_55523[(1)] = (11));

} else {
var statearr_54098_55526 = state_54085__$1;
(statearr_54098_55526[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (5))){
var inst_54062 = (state_54085[(7)]);
var state_54085__$1 = state_54085;
var statearr_54099_55528 = state_54085__$1;
(statearr_54099_55528[(2)] = inst_54062);

(statearr_54099_55528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (10))){
var inst_54081 = (state_54085[(2)]);
var state_54085__$1 = state_54085;
var statearr_54100_55536 = state_54085__$1;
(statearr_54100_55536[(2)] = inst_54081);

(statearr_54100_55536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54086 === (8))){
var inst_54062 = (state_54085[(7)]);
var inst_54072 = cljs.core.next(inst_54062);
var inst_54062__$1 = inst_54072;
var state_54085__$1 = (function (){var statearr_54101 = state_54085;
(statearr_54101[(7)] = inst_54062__$1);

return statearr_54101;
})();
var statearr_54102_55544 = state_54085__$1;
(statearr_54102_55544[(2)] = null);

(statearr_54102_55544[(1)] = (2));


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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_54103 = [null,null,null,null,null,null,null,null];
(statearr_54103[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_54103[(1)] = (1));

return statearr_54103;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_54085){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54085);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54104){var ex__53246__auto__ = e54104;
var statearr_54105_55545 = state_54085;
(statearr_54105_55545[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54085[(4)]))){
var statearr_54106_55546 = state_54085;
(statearr_54106_55546[(1)] = cljs.core.first((state_54085[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55547 = state_54085;
state_54085 = G__55547;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_54085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_54085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54107 = f__53543__auto__();
(statearr_54107[(6)] = c__53542__auto__);

return statearr_54107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));

return c__53542__auto__;
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
var G__54109 = arguments.length;
switch (G__54109) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_55558 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_55558(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_55559 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_55559(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_55568 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_55568(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_55596 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_55596(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54110 = (function (ch,cs,meta54111){
this.ch = ch;
this.cs = cs;
this.meta54111 = meta54111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54112,meta54111__$1){
var self__ = this;
var _54112__$1 = this;
return (new cljs.core.async.t_cljs$core$async54110(self__.ch,self__.cs,meta54111__$1));
}));

(cljs.core.async.t_cljs$core$async54110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54112){
var self__ = this;
var _54112__$1 = this;
return self__.meta54111;
}));

(cljs.core.async.t_cljs$core$async54110.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54110.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54110.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54110.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54110.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54111","meta54111",1853861157,null)], null);
}));

(cljs.core.async.t_cljs$core$async54110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54110");

(cljs.core.async.t_cljs$core$async54110.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54110.
 */
cljs.core.async.__GT_t_cljs$core$async54110 = (function cljs$core$async$mult_$___GT_t_cljs$core$async54110(ch__$1,cs__$1,meta54111){
return (new cljs.core.async.t_cljs$core$async54110(ch__$1,cs__$1,meta54111));
});

}

return (new cljs.core.async.t_cljs$core$async54110(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__53542__auto___55616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54245){
var state_val_54246 = (state_54245[(1)]);
if((state_val_54246 === (7))){
var inst_54241 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54247_55617 = state_54245__$1;
(statearr_54247_55617[(2)] = inst_54241);

(statearr_54247_55617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (20))){
var inst_54146 = (state_54245[(7)]);
var inst_54158 = cljs.core.first(inst_54146);
var inst_54159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54158,(0),null);
var inst_54160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54158,(1),null);
var state_54245__$1 = (function (){var statearr_54248 = state_54245;
(statearr_54248[(8)] = inst_54159);

return statearr_54248;
})();
if(cljs.core.truth_(inst_54160)){
var statearr_54249_55619 = state_54245__$1;
(statearr_54249_55619[(1)] = (22));

} else {
var statearr_54250_55620 = state_54245__$1;
(statearr_54250_55620[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (27))){
var inst_54195 = (state_54245[(9)]);
var inst_54190 = (state_54245[(10)]);
var inst_54188 = (state_54245[(11)]);
var inst_54115 = (state_54245[(12)]);
var inst_54195__$1 = cljs.core._nth(inst_54188,inst_54190);
var inst_54196 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54195__$1,inst_54115,done);
var state_54245__$1 = (function (){var statearr_54251 = state_54245;
(statearr_54251[(9)] = inst_54195__$1);

return statearr_54251;
})();
if(cljs.core.truth_(inst_54196)){
var statearr_54252_55622 = state_54245__$1;
(statearr_54252_55622[(1)] = (30));

} else {
var statearr_54253_55623 = state_54245__$1;
(statearr_54253_55623[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (1))){
var state_54245__$1 = state_54245;
var statearr_54254_55625 = state_54245__$1;
(statearr_54254_55625[(2)] = null);

(statearr_54254_55625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (24))){
var inst_54146 = (state_54245[(7)]);
var inst_54165 = (state_54245[(2)]);
var inst_54166 = cljs.core.next(inst_54146);
var inst_54124 = inst_54166;
var inst_54125 = null;
var inst_54126 = (0);
var inst_54127 = (0);
var state_54245__$1 = (function (){var statearr_54255 = state_54245;
(statearr_54255[(13)] = inst_54126);

(statearr_54255[(14)] = inst_54124);

(statearr_54255[(15)] = inst_54165);

(statearr_54255[(16)] = inst_54127);

(statearr_54255[(17)] = inst_54125);

return statearr_54255;
})();
var statearr_54256_55631 = state_54245__$1;
(statearr_54256_55631[(2)] = null);

(statearr_54256_55631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (39))){
var state_54245__$1 = state_54245;
var statearr_54260_55632 = state_54245__$1;
(statearr_54260_55632[(2)] = null);

(statearr_54260_55632[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (4))){
var inst_54115 = (state_54245[(12)]);
var inst_54115__$1 = (state_54245[(2)]);
var inst_54116 = (inst_54115__$1 == null);
var state_54245__$1 = (function (){var statearr_54261 = state_54245;
(statearr_54261[(12)] = inst_54115__$1);

return statearr_54261;
})();
if(cljs.core.truth_(inst_54116)){
var statearr_54262_55638 = state_54245__$1;
(statearr_54262_55638[(1)] = (5));

} else {
var statearr_54263_55639 = state_54245__$1;
(statearr_54263_55639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (15))){
var inst_54126 = (state_54245[(13)]);
var inst_54124 = (state_54245[(14)]);
var inst_54127 = (state_54245[(16)]);
var inst_54125 = (state_54245[(17)]);
var inst_54142 = (state_54245[(2)]);
var inst_54143 = (inst_54127 + (1));
var tmp54257 = inst_54126;
var tmp54258 = inst_54124;
var tmp54259 = inst_54125;
var inst_54124__$1 = tmp54258;
var inst_54125__$1 = tmp54259;
var inst_54126__$1 = tmp54257;
var inst_54127__$1 = inst_54143;
var state_54245__$1 = (function (){var statearr_54264 = state_54245;
(statearr_54264[(13)] = inst_54126__$1);

(statearr_54264[(18)] = inst_54142);

(statearr_54264[(14)] = inst_54124__$1);

(statearr_54264[(16)] = inst_54127__$1);

(statearr_54264[(17)] = inst_54125__$1);

return statearr_54264;
})();
var statearr_54265_55640 = state_54245__$1;
(statearr_54265_55640[(2)] = null);

(statearr_54265_55640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (21))){
var inst_54169 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54269_55642 = state_54245__$1;
(statearr_54269_55642[(2)] = inst_54169);

(statearr_54269_55642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (31))){
var inst_54195 = (state_54245[(9)]);
var inst_54199 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54195);
var state_54245__$1 = state_54245;
var statearr_54270_55644 = state_54245__$1;
(statearr_54270_55644[(2)] = inst_54199);

(statearr_54270_55644[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (32))){
var inst_54190 = (state_54245[(10)]);
var inst_54188 = (state_54245[(11)]);
var inst_54187 = (state_54245[(19)]);
var inst_54189 = (state_54245[(20)]);
var inst_54201 = (state_54245[(2)]);
var inst_54202 = (inst_54190 + (1));
var tmp54266 = inst_54188;
var tmp54267 = inst_54187;
var tmp54268 = inst_54189;
var inst_54187__$1 = tmp54267;
var inst_54188__$1 = tmp54266;
var inst_54189__$1 = tmp54268;
var inst_54190__$1 = inst_54202;
var state_54245__$1 = (function (){var statearr_54271 = state_54245;
(statearr_54271[(10)] = inst_54190__$1);

(statearr_54271[(11)] = inst_54188__$1);

(statearr_54271[(21)] = inst_54201);

(statearr_54271[(19)] = inst_54187__$1);

(statearr_54271[(20)] = inst_54189__$1);

return statearr_54271;
})();
var statearr_54272_55645 = state_54245__$1;
(statearr_54272_55645[(2)] = null);

(statearr_54272_55645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (40))){
var inst_54214 = (state_54245[(22)]);
var inst_54218 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54214);
var state_54245__$1 = state_54245;
var statearr_54273_55647 = state_54245__$1;
(statearr_54273_55647[(2)] = inst_54218);

(statearr_54273_55647[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (33))){
var inst_54205 = (state_54245[(23)]);
var inst_54207 = cljs.core.chunked_seq_QMARK_(inst_54205);
var state_54245__$1 = state_54245;
if(inst_54207){
var statearr_54274_55649 = state_54245__$1;
(statearr_54274_55649[(1)] = (36));

} else {
var statearr_54275_55651 = state_54245__$1;
(statearr_54275_55651[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (13))){
var inst_54136 = (state_54245[(24)]);
var inst_54139 = cljs.core.async.close_BANG_(inst_54136);
var state_54245__$1 = state_54245;
var statearr_54276_55652 = state_54245__$1;
(statearr_54276_55652[(2)] = inst_54139);

(statearr_54276_55652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (22))){
var inst_54159 = (state_54245[(8)]);
var inst_54162 = cljs.core.async.close_BANG_(inst_54159);
var state_54245__$1 = state_54245;
var statearr_54277_55653 = state_54245__$1;
(statearr_54277_55653[(2)] = inst_54162);

(statearr_54277_55653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (36))){
var inst_54205 = (state_54245[(23)]);
var inst_54209 = cljs.core.chunk_first(inst_54205);
var inst_54210 = cljs.core.chunk_rest(inst_54205);
var inst_54211 = cljs.core.count(inst_54209);
var inst_54187 = inst_54210;
var inst_54188 = inst_54209;
var inst_54189 = inst_54211;
var inst_54190 = (0);
var state_54245__$1 = (function (){var statearr_54278 = state_54245;
(statearr_54278[(10)] = inst_54190);

(statearr_54278[(11)] = inst_54188);

(statearr_54278[(19)] = inst_54187);

(statearr_54278[(20)] = inst_54189);

return statearr_54278;
})();
var statearr_54279_55657 = state_54245__$1;
(statearr_54279_55657[(2)] = null);

(statearr_54279_55657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (41))){
var inst_54205 = (state_54245[(23)]);
var inst_54220 = (state_54245[(2)]);
var inst_54221 = cljs.core.next(inst_54205);
var inst_54187 = inst_54221;
var inst_54188 = null;
var inst_54189 = (0);
var inst_54190 = (0);
var state_54245__$1 = (function (){var statearr_54280 = state_54245;
(statearr_54280[(10)] = inst_54190);

(statearr_54280[(25)] = inst_54220);

(statearr_54280[(11)] = inst_54188);

(statearr_54280[(19)] = inst_54187);

(statearr_54280[(20)] = inst_54189);

return statearr_54280;
})();
var statearr_54281_55660 = state_54245__$1;
(statearr_54281_55660[(2)] = null);

(statearr_54281_55660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (43))){
var state_54245__$1 = state_54245;
var statearr_54282_55661 = state_54245__$1;
(statearr_54282_55661[(2)] = null);

(statearr_54282_55661[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (29))){
var inst_54229 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54283_55662 = state_54245__$1;
(statearr_54283_55662[(2)] = inst_54229);

(statearr_54283_55662[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (44))){
var inst_54238 = (state_54245[(2)]);
var state_54245__$1 = (function (){var statearr_54284 = state_54245;
(statearr_54284[(26)] = inst_54238);

return statearr_54284;
})();
var statearr_54285_55664 = state_54245__$1;
(statearr_54285_55664[(2)] = null);

(statearr_54285_55664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (6))){
var inst_54179 = (state_54245[(27)]);
var inst_54178 = cljs.core.deref(cs);
var inst_54179__$1 = cljs.core.keys(inst_54178);
var inst_54180 = cljs.core.count(inst_54179__$1);
var inst_54181 = cljs.core.reset_BANG_(dctr,inst_54180);
var inst_54186 = cljs.core.seq(inst_54179__$1);
var inst_54187 = inst_54186;
var inst_54188 = null;
var inst_54189 = (0);
var inst_54190 = (0);
var state_54245__$1 = (function (){var statearr_54286 = state_54245;
(statearr_54286[(10)] = inst_54190);

(statearr_54286[(27)] = inst_54179__$1);

(statearr_54286[(11)] = inst_54188);

(statearr_54286[(28)] = inst_54181);

(statearr_54286[(19)] = inst_54187);

(statearr_54286[(20)] = inst_54189);

return statearr_54286;
})();
var statearr_54287_55669 = state_54245__$1;
(statearr_54287_55669[(2)] = null);

(statearr_54287_55669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (28))){
var inst_54187 = (state_54245[(19)]);
var inst_54205 = (state_54245[(23)]);
var inst_54205__$1 = cljs.core.seq(inst_54187);
var state_54245__$1 = (function (){var statearr_54288 = state_54245;
(statearr_54288[(23)] = inst_54205__$1);

return statearr_54288;
})();
if(inst_54205__$1){
var statearr_54289_55670 = state_54245__$1;
(statearr_54289_55670[(1)] = (33));

} else {
var statearr_54290_55671 = state_54245__$1;
(statearr_54290_55671[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (25))){
var inst_54190 = (state_54245[(10)]);
var inst_54189 = (state_54245[(20)]);
var inst_54192 = (inst_54190 < inst_54189);
var inst_54193 = inst_54192;
var state_54245__$1 = state_54245;
if(cljs.core.truth_(inst_54193)){
var statearr_54291_55672 = state_54245__$1;
(statearr_54291_55672[(1)] = (27));

} else {
var statearr_54292_55673 = state_54245__$1;
(statearr_54292_55673[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (34))){
var state_54245__$1 = state_54245;
var statearr_54293_55674 = state_54245__$1;
(statearr_54293_55674[(2)] = null);

(statearr_54293_55674[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (17))){
var state_54245__$1 = state_54245;
var statearr_54294_55675 = state_54245__$1;
(statearr_54294_55675[(2)] = null);

(statearr_54294_55675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (3))){
var inst_54243 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54245__$1,inst_54243);
} else {
if((state_val_54246 === (12))){
var inst_54174 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54295_55676 = state_54245__$1;
(statearr_54295_55676[(2)] = inst_54174);

(statearr_54295_55676[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (2))){
var state_54245__$1 = state_54245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54245__$1,(4),ch);
} else {
if((state_val_54246 === (23))){
var state_54245__$1 = state_54245;
var statearr_54296_55677 = state_54245__$1;
(statearr_54296_55677[(2)] = null);

(statearr_54296_55677[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (35))){
var inst_54227 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54297_55678 = state_54245__$1;
(statearr_54297_55678[(2)] = inst_54227);

(statearr_54297_55678[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (19))){
var inst_54146 = (state_54245[(7)]);
var inst_54150 = cljs.core.chunk_first(inst_54146);
var inst_54151 = cljs.core.chunk_rest(inst_54146);
var inst_54152 = cljs.core.count(inst_54150);
var inst_54124 = inst_54151;
var inst_54125 = inst_54150;
var inst_54126 = inst_54152;
var inst_54127 = (0);
var state_54245__$1 = (function (){var statearr_54298 = state_54245;
(statearr_54298[(13)] = inst_54126);

(statearr_54298[(14)] = inst_54124);

(statearr_54298[(16)] = inst_54127);

(statearr_54298[(17)] = inst_54125);

return statearr_54298;
})();
var statearr_54299_55680 = state_54245__$1;
(statearr_54299_55680[(2)] = null);

(statearr_54299_55680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (11))){
var inst_54124 = (state_54245[(14)]);
var inst_54146 = (state_54245[(7)]);
var inst_54146__$1 = cljs.core.seq(inst_54124);
var state_54245__$1 = (function (){var statearr_54300 = state_54245;
(statearr_54300[(7)] = inst_54146__$1);

return statearr_54300;
})();
if(inst_54146__$1){
var statearr_54301_55681 = state_54245__$1;
(statearr_54301_55681[(1)] = (16));

} else {
var statearr_54302_55686 = state_54245__$1;
(statearr_54302_55686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (9))){
var inst_54176 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54303_55687 = state_54245__$1;
(statearr_54303_55687[(2)] = inst_54176);

(statearr_54303_55687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (5))){
var inst_54122 = cljs.core.deref(cs);
var inst_54123 = cljs.core.seq(inst_54122);
var inst_54124 = inst_54123;
var inst_54125 = null;
var inst_54126 = (0);
var inst_54127 = (0);
var state_54245__$1 = (function (){var statearr_54304 = state_54245;
(statearr_54304[(13)] = inst_54126);

(statearr_54304[(14)] = inst_54124);

(statearr_54304[(16)] = inst_54127);

(statearr_54304[(17)] = inst_54125);

return statearr_54304;
})();
var statearr_54305_55690 = state_54245__$1;
(statearr_54305_55690[(2)] = null);

(statearr_54305_55690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (14))){
var state_54245__$1 = state_54245;
var statearr_54306_55691 = state_54245__$1;
(statearr_54306_55691[(2)] = null);

(statearr_54306_55691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (45))){
var inst_54235 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54307_55694 = state_54245__$1;
(statearr_54307_55694[(2)] = inst_54235);

(statearr_54307_55694[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (26))){
var inst_54179 = (state_54245[(27)]);
var inst_54231 = (state_54245[(2)]);
var inst_54232 = cljs.core.seq(inst_54179);
var state_54245__$1 = (function (){var statearr_54308 = state_54245;
(statearr_54308[(29)] = inst_54231);

return statearr_54308;
})();
if(inst_54232){
var statearr_54309_55697 = state_54245__$1;
(statearr_54309_55697[(1)] = (42));

} else {
var statearr_54310_55698 = state_54245__$1;
(statearr_54310_55698[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (16))){
var inst_54146 = (state_54245[(7)]);
var inst_54148 = cljs.core.chunked_seq_QMARK_(inst_54146);
var state_54245__$1 = state_54245;
if(inst_54148){
var statearr_54311_55699 = state_54245__$1;
(statearr_54311_55699[(1)] = (19));

} else {
var statearr_54312_55700 = state_54245__$1;
(statearr_54312_55700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (38))){
var inst_54224 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54313_55706 = state_54245__$1;
(statearr_54313_55706[(2)] = inst_54224);

(statearr_54313_55706[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (30))){
var state_54245__$1 = state_54245;
var statearr_54314_55711 = state_54245__$1;
(statearr_54314_55711[(2)] = null);

(statearr_54314_55711[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (10))){
var inst_54127 = (state_54245[(16)]);
var inst_54125 = (state_54245[(17)]);
var inst_54135 = cljs.core._nth(inst_54125,inst_54127);
var inst_54136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54135,(0),null);
var inst_54137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54135,(1),null);
var state_54245__$1 = (function (){var statearr_54315 = state_54245;
(statearr_54315[(24)] = inst_54136);

return statearr_54315;
})();
if(cljs.core.truth_(inst_54137)){
var statearr_54316_55719 = state_54245__$1;
(statearr_54316_55719[(1)] = (13));

} else {
var statearr_54317_55720 = state_54245__$1;
(statearr_54317_55720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (18))){
var inst_54172 = (state_54245[(2)]);
var state_54245__$1 = state_54245;
var statearr_54318_55722 = state_54245__$1;
(statearr_54318_55722[(2)] = inst_54172);

(statearr_54318_55722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (42))){
var state_54245__$1 = state_54245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54245__$1,(45),dchan);
} else {
if((state_val_54246 === (37))){
var inst_54214 = (state_54245[(22)]);
var inst_54115 = (state_54245[(12)]);
var inst_54205 = (state_54245[(23)]);
var inst_54214__$1 = cljs.core.first(inst_54205);
var inst_54215 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54214__$1,inst_54115,done);
var state_54245__$1 = (function (){var statearr_54319 = state_54245;
(statearr_54319[(22)] = inst_54214__$1);

return statearr_54319;
})();
if(cljs.core.truth_(inst_54215)){
var statearr_54320_55731 = state_54245__$1;
(statearr_54320_55731[(1)] = (39));

} else {
var statearr_54321_55732 = state_54245__$1;
(statearr_54321_55732[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54246 === (8))){
var inst_54126 = (state_54245[(13)]);
var inst_54127 = (state_54245[(16)]);
var inst_54129 = (inst_54127 < inst_54126);
var inst_54130 = inst_54129;
var state_54245__$1 = state_54245;
if(cljs.core.truth_(inst_54130)){
var statearr_54322_55733 = state_54245__$1;
(statearr_54322_55733[(1)] = (10));

} else {
var statearr_54323_55734 = state_54245__$1;
(statearr_54323_55734[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__53243__auto__ = null;
var cljs$core$async$mult_$_state_machine__53243__auto____0 = (function (){
var statearr_54324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54324[(0)] = cljs$core$async$mult_$_state_machine__53243__auto__);

(statearr_54324[(1)] = (1));

return statearr_54324;
});
var cljs$core$async$mult_$_state_machine__53243__auto____1 = (function (state_54245){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54245);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54325){var ex__53246__auto__ = e54325;
var statearr_54326_55740 = state_54245;
(statearr_54326_55740[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54245[(4)]))){
var statearr_54327_55742 = state_54245;
(statearr_54327_55742[(1)] = cljs.core.first((state_54245[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55744 = state_54245;
state_54245 = G__55744;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__53243__auto__ = function(state_54245){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__53243__auto____1.call(this,state_54245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__53243__auto____0;
cljs$core$async$mult_$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__53243__auto____1;
return cljs$core$async$mult_$_state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54328 = f__53543__auto__();
(statearr_54328[(6)] = c__53542__auto___55616);

return statearr_54328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
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
var G__54330 = arguments.length;
switch (G__54330) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_55748 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_55748(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_55751 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_55751(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_55753 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_55753(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_55762 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_55762(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_55765 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_55765(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55775 = arguments.length;
var i__4737__auto___55777 = (0);
while(true){
if((i__4737__auto___55777 < len__4736__auto___55775)){
args__4742__auto__.push((arguments[i__4737__auto___55777]));

var G__55778 = (i__4737__auto___55777 + (1));
i__4737__auto___55777 = G__55778;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54335){
var map__54336 = p__54335;
var map__54336__$1 = (((((!((map__54336 == null))))?(((((map__54336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54336):map__54336);
var opts = map__54336__$1;
var statearr_54338_55779 = state;
(statearr_54338_55779[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_54339_55781 = state;
(statearr_54339_55781[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_54340_55782 = state;
(statearr_54340_55782[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54331){
var G__54332 = cljs.core.first(seq54331);
var seq54331__$1 = cljs.core.next(seq54331);
var G__54333 = cljs.core.first(seq54331__$1);
var seq54331__$2 = cljs.core.next(seq54331__$1);
var G__54334 = cljs.core.first(seq54331__$2);
var seq54331__$3 = cljs.core.next(seq54331__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54332,G__54333,G__54334,seq54331__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54341 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54342){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta54342 = meta54342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54343,meta54342__$1){
var self__ = this;
var _54343__$1 = this;
return (new cljs.core.async.t_cljs$core$async54341(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54342__$1));
}));

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54343){
var self__ = this;
var _54343__$1 = this;
return self__.meta54342;
}));

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54341.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta54342","meta54342",1330894848,null)], null);
}));

(cljs.core.async.t_cljs$core$async54341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54341");

(cljs.core.async.t_cljs$core$async54341.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54341.
 */
cljs.core.async.__GT_t_cljs$core$async54341 = (function cljs$core$async$mix_$___GT_t_cljs$core$async54341(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54342){
return (new cljs.core.async.t_cljs$core$async54341(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54342));
});

}

return (new cljs.core.async.t_cljs$core$async54341(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53542__auto___55802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54445){
var state_val_54446 = (state_54445[(1)]);
if((state_val_54446 === (7))){
var inst_54360 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
var statearr_54447_55804 = state_54445__$1;
(statearr_54447_55804[(2)] = inst_54360);

(statearr_54447_55804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (20))){
var inst_54372 = (state_54445[(7)]);
var state_54445__$1 = state_54445;
var statearr_54448_55805 = state_54445__$1;
(statearr_54448_55805[(2)] = inst_54372);

(statearr_54448_55805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (27))){
var state_54445__$1 = state_54445;
var statearr_54449_55806 = state_54445__$1;
(statearr_54449_55806[(2)] = null);

(statearr_54449_55806[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (1))){
var inst_54347 = (state_54445[(8)]);
var inst_54347__$1 = calc_state();
var inst_54349 = (inst_54347__$1 == null);
var inst_54350 = cljs.core.not(inst_54349);
var state_54445__$1 = (function (){var statearr_54450 = state_54445;
(statearr_54450[(8)] = inst_54347__$1);

return statearr_54450;
})();
if(inst_54350){
var statearr_54451_55808 = state_54445__$1;
(statearr_54451_55808[(1)] = (2));

} else {
var statearr_54452_55809 = state_54445__$1;
(statearr_54452_55809[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (24))){
var inst_54419 = (state_54445[(9)]);
var inst_54405 = (state_54445[(10)]);
var inst_54396 = (state_54445[(11)]);
var inst_54419__$1 = (inst_54396.cljs$core$IFn$_invoke$arity$1 ? inst_54396.cljs$core$IFn$_invoke$arity$1(inst_54405) : inst_54396.call(null,inst_54405));
var state_54445__$1 = (function (){var statearr_54453 = state_54445;
(statearr_54453[(9)] = inst_54419__$1);

return statearr_54453;
})();
if(cljs.core.truth_(inst_54419__$1)){
var statearr_54454_55810 = state_54445__$1;
(statearr_54454_55810[(1)] = (29));

} else {
var statearr_54455_55811 = state_54445__$1;
(statearr_54455_55811[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (4))){
var inst_54363 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
if(cljs.core.truth_(inst_54363)){
var statearr_54456_55812 = state_54445__$1;
(statearr_54456_55812[(1)] = (8));

} else {
var statearr_54457_55813 = state_54445__$1;
(statearr_54457_55813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (15))){
var inst_54390 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
if(cljs.core.truth_(inst_54390)){
var statearr_54458_55818 = state_54445__$1;
(statearr_54458_55818[(1)] = (19));

} else {
var statearr_54459_55820 = state_54445__$1;
(statearr_54459_55820[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (21))){
var inst_54395 = (state_54445[(12)]);
var inst_54395__$1 = (state_54445[(2)]);
var inst_54396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54395__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54395__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54395__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_54445__$1 = (function (){var statearr_54460 = state_54445;
(statearr_54460[(11)] = inst_54396);

(statearr_54460[(13)] = inst_54397);

(statearr_54460[(12)] = inst_54395__$1);

return statearr_54460;
})();
return cljs.core.async.ioc_alts_BANG_(state_54445__$1,(22),inst_54398);
} else {
if((state_val_54446 === (31))){
var inst_54427 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
if(cljs.core.truth_(inst_54427)){
var statearr_54461_55822 = state_54445__$1;
(statearr_54461_55822[(1)] = (32));

} else {
var statearr_54462_55823 = state_54445__$1;
(statearr_54462_55823[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (32))){
var inst_54404 = (state_54445[(14)]);
var state_54445__$1 = state_54445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54445__$1,(35),out,inst_54404);
} else {
if((state_val_54446 === (33))){
var inst_54395 = (state_54445[(12)]);
var inst_54372 = inst_54395;
var state_54445__$1 = (function (){var statearr_54463 = state_54445;
(statearr_54463[(7)] = inst_54372);

return statearr_54463;
})();
var statearr_54464_55824 = state_54445__$1;
(statearr_54464_55824[(2)] = null);

(statearr_54464_55824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (13))){
var inst_54372 = (state_54445[(7)]);
var inst_54379 = inst_54372.cljs$lang$protocol_mask$partition0$;
var inst_54380 = (inst_54379 & (64));
var inst_54381 = inst_54372.cljs$core$ISeq$;
var inst_54382 = (cljs.core.PROTOCOL_SENTINEL === inst_54381);
var inst_54383 = ((inst_54380) || (inst_54382));
var state_54445__$1 = state_54445;
if(cljs.core.truth_(inst_54383)){
var statearr_54465_55829 = state_54445__$1;
(statearr_54465_55829[(1)] = (16));

} else {
var statearr_54466_55830 = state_54445__$1;
(statearr_54466_55830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (22))){
var inst_54404 = (state_54445[(14)]);
var inst_54405 = (state_54445[(10)]);
var inst_54403 = (state_54445[(2)]);
var inst_54404__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54403,(0),null);
var inst_54405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54403,(1),null);
var inst_54406 = (inst_54404__$1 == null);
var inst_54407 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54405__$1,change);
var inst_54408 = ((inst_54406) || (inst_54407));
var state_54445__$1 = (function (){var statearr_54467 = state_54445;
(statearr_54467[(14)] = inst_54404__$1);

(statearr_54467[(10)] = inst_54405__$1);

return statearr_54467;
})();
if(cljs.core.truth_(inst_54408)){
var statearr_54468_55831 = state_54445__$1;
(statearr_54468_55831[(1)] = (23));

} else {
var statearr_54469_55832 = state_54445__$1;
(statearr_54469_55832[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (36))){
var inst_54395 = (state_54445[(12)]);
var inst_54372 = inst_54395;
var state_54445__$1 = (function (){var statearr_54470 = state_54445;
(statearr_54470[(7)] = inst_54372);

return statearr_54470;
})();
var statearr_54471_55833 = state_54445__$1;
(statearr_54471_55833[(2)] = null);

(statearr_54471_55833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (29))){
var inst_54419 = (state_54445[(9)]);
var state_54445__$1 = state_54445;
var statearr_54472_55834 = state_54445__$1;
(statearr_54472_55834[(2)] = inst_54419);

(statearr_54472_55834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (6))){
var state_54445__$1 = state_54445;
var statearr_54473_55835 = state_54445__$1;
(statearr_54473_55835[(2)] = false);

(statearr_54473_55835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (28))){
var inst_54415 = (state_54445[(2)]);
var inst_54416 = calc_state();
var inst_54372 = inst_54416;
var state_54445__$1 = (function (){var statearr_54474 = state_54445;
(statearr_54474[(15)] = inst_54415);

(statearr_54474[(7)] = inst_54372);

return statearr_54474;
})();
var statearr_54475_55837 = state_54445__$1;
(statearr_54475_55837[(2)] = null);

(statearr_54475_55837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (25))){
var inst_54441 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
var statearr_54476_55838 = state_54445__$1;
(statearr_54476_55838[(2)] = inst_54441);

(statearr_54476_55838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (34))){
var inst_54439 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
var statearr_54477_55839 = state_54445__$1;
(statearr_54477_55839[(2)] = inst_54439);

(statearr_54477_55839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (17))){
var state_54445__$1 = state_54445;
var statearr_54478_55840 = state_54445__$1;
(statearr_54478_55840[(2)] = false);

(statearr_54478_55840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (3))){
var state_54445__$1 = state_54445;
var statearr_54479_55842 = state_54445__$1;
(statearr_54479_55842[(2)] = false);

(statearr_54479_55842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (12))){
var inst_54443 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54445__$1,inst_54443);
} else {
if((state_val_54446 === (2))){
var inst_54347 = (state_54445[(8)]);
var inst_54352 = inst_54347.cljs$lang$protocol_mask$partition0$;
var inst_54353 = (inst_54352 & (64));
var inst_54354 = inst_54347.cljs$core$ISeq$;
var inst_54355 = (cljs.core.PROTOCOL_SENTINEL === inst_54354);
var inst_54356 = ((inst_54353) || (inst_54355));
var state_54445__$1 = state_54445;
if(cljs.core.truth_(inst_54356)){
var statearr_54480_55844 = state_54445__$1;
(statearr_54480_55844[(1)] = (5));

} else {
var statearr_54481_55845 = state_54445__$1;
(statearr_54481_55845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (23))){
var inst_54404 = (state_54445[(14)]);
var inst_54410 = (inst_54404 == null);
var state_54445__$1 = state_54445;
if(cljs.core.truth_(inst_54410)){
var statearr_54482_55846 = state_54445__$1;
(statearr_54482_55846[(1)] = (26));

} else {
var statearr_54483_55847 = state_54445__$1;
(statearr_54483_55847[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (35))){
var inst_54430 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
if(cljs.core.truth_(inst_54430)){
var statearr_54484_55851 = state_54445__$1;
(statearr_54484_55851[(1)] = (36));

} else {
var statearr_54485_55852 = state_54445__$1;
(statearr_54485_55852[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (19))){
var inst_54372 = (state_54445[(7)]);
var inst_54392 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54372);
var state_54445__$1 = state_54445;
var statearr_54486_55854 = state_54445__$1;
(statearr_54486_55854[(2)] = inst_54392);

(statearr_54486_55854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (11))){
var inst_54372 = (state_54445[(7)]);
var inst_54376 = (inst_54372 == null);
var inst_54377 = cljs.core.not(inst_54376);
var state_54445__$1 = state_54445;
if(inst_54377){
var statearr_54487_55856 = state_54445__$1;
(statearr_54487_55856[(1)] = (13));

} else {
var statearr_54488_55857 = state_54445__$1;
(statearr_54488_55857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (9))){
var inst_54347 = (state_54445[(8)]);
var state_54445__$1 = state_54445;
var statearr_54489_55859 = state_54445__$1;
(statearr_54489_55859[(2)] = inst_54347);

(statearr_54489_55859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (5))){
var state_54445__$1 = state_54445;
var statearr_54490_55860 = state_54445__$1;
(statearr_54490_55860[(2)] = true);

(statearr_54490_55860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (14))){
var state_54445__$1 = state_54445;
var statearr_54491_55861 = state_54445__$1;
(statearr_54491_55861[(2)] = false);

(statearr_54491_55861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (26))){
var inst_54405 = (state_54445[(10)]);
var inst_54412 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_54405);
var state_54445__$1 = state_54445;
var statearr_54492_55862 = state_54445__$1;
(statearr_54492_55862[(2)] = inst_54412);

(statearr_54492_55862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (16))){
var state_54445__$1 = state_54445;
var statearr_54493_55863 = state_54445__$1;
(statearr_54493_55863[(2)] = true);

(statearr_54493_55863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (38))){
var inst_54435 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
var statearr_54494_55866 = state_54445__$1;
(statearr_54494_55866[(2)] = inst_54435);

(statearr_54494_55866[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (30))){
var inst_54405 = (state_54445[(10)]);
var inst_54396 = (state_54445[(11)]);
var inst_54397 = (state_54445[(13)]);
var inst_54422 = cljs.core.empty_QMARK_(inst_54396);
var inst_54423 = (inst_54397.cljs$core$IFn$_invoke$arity$1 ? inst_54397.cljs$core$IFn$_invoke$arity$1(inst_54405) : inst_54397.call(null,inst_54405));
var inst_54424 = cljs.core.not(inst_54423);
var inst_54425 = ((inst_54422) && (inst_54424));
var state_54445__$1 = state_54445;
var statearr_54495_55868 = state_54445__$1;
(statearr_54495_55868[(2)] = inst_54425);

(statearr_54495_55868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (10))){
var inst_54347 = (state_54445[(8)]);
var inst_54368 = (state_54445[(2)]);
var inst_54369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54368,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54368,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54368,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54372 = inst_54347;
var state_54445__$1 = (function (){var statearr_54496 = state_54445;
(statearr_54496[(16)] = inst_54370);

(statearr_54496[(17)] = inst_54369);

(statearr_54496[(18)] = inst_54371);

(statearr_54496[(7)] = inst_54372);

return statearr_54496;
})();
var statearr_54497_55870 = state_54445__$1;
(statearr_54497_55870[(2)] = null);

(statearr_54497_55870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (18))){
var inst_54387 = (state_54445[(2)]);
var state_54445__$1 = state_54445;
var statearr_54498_55872 = state_54445__$1;
(statearr_54498_55872[(2)] = inst_54387);

(statearr_54498_55872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (37))){
var state_54445__$1 = state_54445;
var statearr_54499_55873 = state_54445__$1;
(statearr_54499_55873[(2)] = null);

(statearr_54499_55873[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54446 === (8))){
var inst_54347 = (state_54445[(8)]);
var inst_54365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54347);
var state_54445__$1 = state_54445;
var statearr_54500_55874 = state_54445__$1;
(statearr_54500_55874[(2)] = inst_54365);

(statearr_54500_55874[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__53243__auto__ = null;
var cljs$core$async$mix_$_state_machine__53243__auto____0 = (function (){
var statearr_54501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54501[(0)] = cljs$core$async$mix_$_state_machine__53243__auto__);

(statearr_54501[(1)] = (1));

return statearr_54501;
});
var cljs$core$async$mix_$_state_machine__53243__auto____1 = (function (state_54445){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54445);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54502){var ex__53246__auto__ = e54502;
var statearr_54503_55875 = state_54445;
(statearr_54503_55875[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54445[(4)]))){
var statearr_54504_55876 = state_54445;
(statearr_54504_55876[(1)] = cljs.core.first((state_54445[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55877 = state_54445;
state_54445 = G__55877;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__53243__auto__ = function(state_54445){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__53243__auto____1.call(this,state_54445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__53243__auto____0;
cljs$core$async$mix_$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__53243__auto____1;
return cljs$core$async$mix_$_state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54505 = f__53543__auto__();
(statearr_54505[(6)] = c__53542__auto___55802);

return statearr_54505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_55878 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_55878(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_55880 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_55880(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_55892 = (function() {
var G__55893 = null;
var G__55893__1 = (function (p){
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
var G__55893__2 = (function (p,v){
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
G__55893 = function(p,v){
switch(arguments.length){
case 1:
return G__55893__1.call(this,p);
case 2:
return G__55893__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55893.cljs$core$IFn$_invoke$arity$1 = G__55893__1;
G__55893.cljs$core$IFn$_invoke$arity$2 = G__55893__2;
return G__55893;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__54507 = arguments.length;
switch (G__54507) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55892(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55892(p,v);
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
var G__54510 = arguments.length;
switch (G__54510) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__54508_SHARP_){
if(cljs.core.truth_((p1__54508_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__54508_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__54508_SHARP_.call(null,topic)))){
return p1__54508_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54508_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54511 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta54512){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta54512 = meta54512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54513,meta54512__$1){
var self__ = this;
var _54513__$1 = this;
return (new cljs.core.async.t_cljs$core$async54511(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta54512__$1));
}));

(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54513){
var self__ = this;
var _54513__$1 = this;
return self__.meta54512;
}));

(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async54511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async54511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta54512","meta54512",1449385208,null)], null);
}));

(cljs.core.async.t_cljs$core$async54511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54511");

(cljs.core.async.t_cljs$core$async54511.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54511.
 */
cljs.core.async.__GT_t_cljs$core$async54511 = (function cljs$core$async$__GT_t_cljs$core$async54511(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54512){
return (new cljs.core.async.t_cljs$core$async54511(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54512));
});

}

return (new cljs.core.async.t_cljs$core$async54511(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53542__auto___55914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54585){
var state_val_54586 = (state_54585[(1)]);
if((state_val_54586 === (7))){
var inst_54581 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
var statearr_54587_55915 = state_54585__$1;
(statearr_54587_55915[(2)] = inst_54581);

(statearr_54587_55915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (20))){
var state_54585__$1 = state_54585;
var statearr_54588_55916 = state_54585__$1;
(statearr_54588_55916[(2)] = null);

(statearr_54588_55916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (1))){
var state_54585__$1 = state_54585;
var statearr_54589_55917 = state_54585__$1;
(statearr_54589_55917[(2)] = null);

(statearr_54589_55917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (24))){
var inst_54564 = (state_54585[(7)]);
var inst_54573 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_54564);
var state_54585__$1 = state_54585;
var statearr_54590_55918 = state_54585__$1;
(statearr_54590_55918[(2)] = inst_54573);

(statearr_54590_55918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (4))){
var inst_54516 = (state_54585[(8)]);
var inst_54516__$1 = (state_54585[(2)]);
var inst_54517 = (inst_54516__$1 == null);
var state_54585__$1 = (function (){var statearr_54591 = state_54585;
(statearr_54591[(8)] = inst_54516__$1);

return statearr_54591;
})();
if(cljs.core.truth_(inst_54517)){
var statearr_54592_55919 = state_54585__$1;
(statearr_54592_55919[(1)] = (5));

} else {
var statearr_54593_55920 = state_54585__$1;
(statearr_54593_55920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (15))){
var inst_54558 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
var statearr_54594_55921 = state_54585__$1;
(statearr_54594_55921[(2)] = inst_54558);

(statearr_54594_55921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (21))){
var inst_54578 = (state_54585[(2)]);
var state_54585__$1 = (function (){var statearr_54595 = state_54585;
(statearr_54595[(9)] = inst_54578);

return statearr_54595;
})();
var statearr_54596_55922 = state_54585__$1;
(statearr_54596_55922[(2)] = null);

(statearr_54596_55922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (13))){
var inst_54540 = (state_54585[(10)]);
var inst_54542 = cljs.core.chunked_seq_QMARK_(inst_54540);
var state_54585__$1 = state_54585;
if(inst_54542){
var statearr_54597_55923 = state_54585__$1;
(statearr_54597_55923[(1)] = (16));

} else {
var statearr_54598_55924 = state_54585__$1;
(statearr_54598_55924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (22))){
var inst_54570 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
if(cljs.core.truth_(inst_54570)){
var statearr_54599_55925 = state_54585__$1;
(statearr_54599_55925[(1)] = (23));

} else {
var statearr_54600_55929 = state_54585__$1;
(statearr_54600_55929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (6))){
var inst_54516 = (state_54585[(8)]);
var inst_54566 = (state_54585[(11)]);
var inst_54564 = (state_54585[(7)]);
var inst_54564__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_54516) : topic_fn.call(null,inst_54516));
var inst_54565 = cljs.core.deref(mults);
var inst_54566__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54565,inst_54564__$1);
var state_54585__$1 = (function (){var statearr_54601 = state_54585;
(statearr_54601[(11)] = inst_54566__$1);

(statearr_54601[(7)] = inst_54564__$1);

return statearr_54601;
})();
if(cljs.core.truth_(inst_54566__$1)){
var statearr_54602_55937 = state_54585__$1;
(statearr_54602_55937[(1)] = (19));

} else {
var statearr_54603_55938 = state_54585__$1;
(statearr_54603_55938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (25))){
var inst_54575 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
var statearr_54604_55939 = state_54585__$1;
(statearr_54604_55939[(2)] = inst_54575);

(statearr_54604_55939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (17))){
var inst_54540 = (state_54585[(10)]);
var inst_54549 = cljs.core.first(inst_54540);
var inst_54550 = cljs.core.async.muxch_STAR_(inst_54549);
var inst_54551 = cljs.core.async.close_BANG_(inst_54550);
var inst_54552 = cljs.core.next(inst_54540);
var inst_54526 = inst_54552;
var inst_54527 = null;
var inst_54528 = (0);
var inst_54529 = (0);
var state_54585__$1 = (function (){var statearr_54605 = state_54585;
(statearr_54605[(12)] = inst_54528);

(statearr_54605[(13)] = inst_54529);

(statearr_54605[(14)] = inst_54526);

(statearr_54605[(15)] = inst_54527);

(statearr_54605[(16)] = inst_54551);

return statearr_54605;
})();
var statearr_54606_55943 = state_54585__$1;
(statearr_54606_55943[(2)] = null);

(statearr_54606_55943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (3))){
var inst_54583 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54585__$1,inst_54583);
} else {
if((state_val_54586 === (12))){
var inst_54560 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
var statearr_54607_55944 = state_54585__$1;
(statearr_54607_55944[(2)] = inst_54560);

(statearr_54607_55944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (2))){
var state_54585__$1 = state_54585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54585__$1,(4),ch);
} else {
if((state_val_54586 === (23))){
var state_54585__$1 = state_54585;
var statearr_54608_55948 = state_54585__$1;
(statearr_54608_55948[(2)] = null);

(statearr_54608_55948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (19))){
var inst_54516 = (state_54585[(8)]);
var inst_54566 = (state_54585[(11)]);
var inst_54568 = cljs.core.async.muxch_STAR_(inst_54566);
var state_54585__$1 = state_54585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54585__$1,(22),inst_54568,inst_54516);
} else {
if((state_val_54586 === (11))){
var inst_54526 = (state_54585[(14)]);
var inst_54540 = (state_54585[(10)]);
var inst_54540__$1 = cljs.core.seq(inst_54526);
var state_54585__$1 = (function (){var statearr_54609 = state_54585;
(statearr_54609[(10)] = inst_54540__$1);

return statearr_54609;
})();
if(inst_54540__$1){
var statearr_54610_55952 = state_54585__$1;
(statearr_54610_55952[(1)] = (13));

} else {
var statearr_54611_55953 = state_54585__$1;
(statearr_54611_55953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (9))){
var inst_54562 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
var statearr_54612_55954 = state_54585__$1;
(statearr_54612_55954[(2)] = inst_54562);

(statearr_54612_55954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (5))){
var inst_54523 = cljs.core.deref(mults);
var inst_54524 = cljs.core.vals(inst_54523);
var inst_54525 = cljs.core.seq(inst_54524);
var inst_54526 = inst_54525;
var inst_54527 = null;
var inst_54528 = (0);
var inst_54529 = (0);
var state_54585__$1 = (function (){var statearr_54613 = state_54585;
(statearr_54613[(12)] = inst_54528);

(statearr_54613[(13)] = inst_54529);

(statearr_54613[(14)] = inst_54526);

(statearr_54613[(15)] = inst_54527);

return statearr_54613;
})();
var statearr_54614_55956 = state_54585__$1;
(statearr_54614_55956[(2)] = null);

(statearr_54614_55956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (14))){
var state_54585__$1 = state_54585;
var statearr_54618_55958 = state_54585__$1;
(statearr_54618_55958[(2)] = null);

(statearr_54618_55958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (16))){
var inst_54540 = (state_54585[(10)]);
var inst_54544 = cljs.core.chunk_first(inst_54540);
var inst_54545 = cljs.core.chunk_rest(inst_54540);
var inst_54546 = cljs.core.count(inst_54544);
var inst_54526 = inst_54545;
var inst_54527 = inst_54544;
var inst_54528 = inst_54546;
var inst_54529 = (0);
var state_54585__$1 = (function (){var statearr_54619 = state_54585;
(statearr_54619[(12)] = inst_54528);

(statearr_54619[(13)] = inst_54529);

(statearr_54619[(14)] = inst_54526);

(statearr_54619[(15)] = inst_54527);

return statearr_54619;
})();
var statearr_54620_55962 = state_54585__$1;
(statearr_54620_55962[(2)] = null);

(statearr_54620_55962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (10))){
var inst_54528 = (state_54585[(12)]);
var inst_54529 = (state_54585[(13)]);
var inst_54526 = (state_54585[(14)]);
var inst_54527 = (state_54585[(15)]);
var inst_54534 = cljs.core._nth(inst_54527,inst_54529);
var inst_54535 = cljs.core.async.muxch_STAR_(inst_54534);
var inst_54536 = cljs.core.async.close_BANG_(inst_54535);
var inst_54537 = (inst_54529 + (1));
var tmp54615 = inst_54528;
var tmp54616 = inst_54526;
var tmp54617 = inst_54527;
var inst_54526__$1 = tmp54616;
var inst_54527__$1 = tmp54617;
var inst_54528__$1 = tmp54615;
var inst_54529__$1 = inst_54537;
var state_54585__$1 = (function (){var statearr_54621 = state_54585;
(statearr_54621[(12)] = inst_54528__$1);

(statearr_54621[(13)] = inst_54529__$1);

(statearr_54621[(14)] = inst_54526__$1);

(statearr_54621[(17)] = inst_54536);

(statearr_54621[(15)] = inst_54527__$1);

return statearr_54621;
})();
var statearr_54622_55975 = state_54585__$1;
(statearr_54622_55975[(2)] = null);

(statearr_54622_55975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (18))){
var inst_54555 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
var statearr_54623_55976 = state_54585__$1;
(statearr_54623_55976[(2)] = inst_54555);

(statearr_54623_55976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (8))){
var inst_54528 = (state_54585[(12)]);
var inst_54529 = (state_54585[(13)]);
var inst_54531 = (inst_54529 < inst_54528);
var inst_54532 = inst_54531;
var state_54585__$1 = state_54585;
if(cljs.core.truth_(inst_54532)){
var statearr_54624_55977 = state_54585__$1;
(statearr_54624_55977[(1)] = (10));

} else {
var statearr_54625_55978 = state_54585__$1;
(statearr_54625_55978[(1)] = (11));

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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_54626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54626[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_54626[(1)] = (1));

return statearr_54626;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_54585){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54585);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54627){var ex__53246__auto__ = e54627;
var statearr_54628_55979 = state_54585;
(statearr_54628_55979[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54585[(4)]))){
var statearr_54629_55980 = state_54585;
(statearr_54629_55980[(1)] = cljs.core.first((state_54585[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55981 = state_54585;
state_54585 = G__55981;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_54585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_54585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54630 = f__53543__auto__();
(statearr_54630[(6)] = c__53542__auto___55914);

return statearr_54630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
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
var G__54632 = arguments.length;
switch (G__54632) {
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
var G__54634 = arguments.length;
switch (G__54634) {
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
var G__54636 = arguments.length;
switch (G__54636) {
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
var c__53542__auto___55997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54679){
var state_val_54680 = (state_54679[(1)]);
if((state_val_54680 === (7))){
var state_54679__$1 = state_54679;
var statearr_54681_55998 = state_54679__$1;
(statearr_54681_55998[(2)] = null);

(statearr_54681_55998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (1))){
var state_54679__$1 = state_54679;
var statearr_54682_55999 = state_54679__$1;
(statearr_54682_55999[(2)] = null);

(statearr_54682_55999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (4))){
var inst_54639 = (state_54679[(7)]);
var inst_54640 = (state_54679[(8)]);
var inst_54642 = (inst_54640 < inst_54639);
var state_54679__$1 = state_54679;
if(cljs.core.truth_(inst_54642)){
var statearr_54683_56000 = state_54679__$1;
(statearr_54683_56000[(1)] = (6));

} else {
var statearr_54684_56001 = state_54679__$1;
(statearr_54684_56001[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (15))){
var inst_54665 = (state_54679[(9)]);
var inst_54670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_54665);
var state_54679__$1 = state_54679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54679__$1,(17),out,inst_54670);
} else {
if((state_val_54680 === (13))){
var inst_54665 = (state_54679[(9)]);
var inst_54665__$1 = (state_54679[(2)]);
var inst_54666 = cljs.core.some(cljs.core.nil_QMARK_,inst_54665__$1);
var state_54679__$1 = (function (){var statearr_54685 = state_54679;
(statearr_54685[(9)] = inst_54665__$1);

return statearr_54685;
})();
if(cljs.core.truth_(inst_54666)){
var statearr_54686_56002 = state_54679__$1;
(statearr_54686_56002[(1)] = (14));

} else {
var statearr_54687_56003 = state_54679__$1;
(statearr_54687_56003[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (6))){
var state_54679__$1 = state_54679;
var statearr_54688_56010 = state_54679__$1;
(statearr_54688_56010[(2)] = null);

(statearr_54688_56010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (17))){
var inst_54672 = (state_54679[(2)]);
var state_54679__$1 = (function (){var statearr_54690 = state_54679;
(statearr_54690[(10)] = inst_54672);

return statearr_54690;
})();
var statearr_54691_56011 = state_54679__$1;
(statearr_54691_56011[(2)] = null);

(statearr_54691_56011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (3))){
var inst_54677 = (state_54679[(2)]);
var state_54679__$1 = state_54679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54679__$1,inst_54677);
} else {
if((state_val_54680 === (12))){
var _ = (function (){var statearr_54692 = state_54679;
(statearr_54692[(4)] = cljs.core.rest((state_54679[(4)])));

return statearr_54692;
})();
var state_54679__$1 = state_54679;
var ex54689 = (state_54679__$1[(2)]);
var statearr_54693_56015 = state_54679__$1;
(statearr_54693_56015[(5)] = ex54689);


if((ex54689 instanceof Object)){
var statearr_54694_56016 = state_54679__$1;
(statearr_54694_56016[(1)] = (11));

(statearr_54694_56016[(5)] = null);

} else {
throw ex54689;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (2))){
var inst_54638 = cljs.core.reset_BANG_(dctr,cnt);
var inst_54639 = cnt;
var inst_54640 = (0);
var state_54679__$1 = (function (){var statearr_54695 = state_54679;
(statearr_54695[(11)] = inst_54638);

(statearr_54695[(7)] = inst_54639);

(statearr_54695[(8)] = inst_54640);

return statearr_54695;
})();
var statearr_54696_56017 = state_54679__$1;
(statearr_54696_56017[(2)] = null);

(statearr_54696_56017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (11))){
var inst_54644 = (state_54679[(2)]);
var inst_54645 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_54679__$1 = (function (){var statearr_54697 = state_54679;
(statearr_54697[(12)] = inst_54644);

return statearr_54697;
})();
var statearr_54698_56019 = state_54679__$1;
(statearr_54698_56019[(2)] = inst_54645);

(statearr_54698_56019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (9))){
var inst_54640 = (state_54679[(8)]);
var _ = (function (){var statearr_54699 = state_54679;
(statearr_54699[(4)] = cljs.core.cons((12),(state_54679[(4)])));

return statearr_54699;
})();
var inst_54651 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_54640) : chs__$1.call(null,inst_54640));
var inst_54652 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_54640) : done.call(null,inst_54640));
var inst_54653 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_54651,inst_54652);
var ___$1 = (function (){var statearr_54700 = state_54679;
(statearr_54700[(4)] = cljs.core.rest((state_54679[(4)])));

return statearr_54700;
})();
var state_54679__$1 = state_54679;
var statearr_54701_56021 = state_54679__$1;
(statearr_54701_56021[(2)] = inst_54653);

(statearr_54701_56021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (5))){
var inst_54663 = (state_54679[(2)]);
var state_54679__$1 = (function (){var statearr_54702 = state_54679;
(statearr_54702[(13)] = inst_54663);

return statearr_54702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54679__$1,(13),dchan);
} else {
if((state_val_54680 === (14))){
var inst_54668 = cljs.core.async.close_BANG_(out);
var state_54679__$1 = state_54679;
var statearr_54703_56023 = state_54679__$1;
(statearr_54703_56023[(2)] = inst_54668);

(statearr_54703_56023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (16))){
var inst_54675 = (state_54679[(2)]);
var state_54679__$1 = state_54679;
var statearr_54704_56025 = state_54679__$1;
(statearr_54704_56025[(2)] = inst_54675);

(statearr_54704_56025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (10))){
var inst_54640 = (state_54679[(8)]);
var inst_54656 = (state_54679[(2)]);
var inst_54657 = (inst_54640 + (1));
var inst_54640__$1 = inst_54657;
var state_54679__$1 = (function (){var statearr_54705 = state_54679;
(statearr_54705[(8)] = inst_54640__$1);

(statearr_54705[(14)] = inst_54656);

return statearr_54705;
})();
var statearr_54706_56028 = state_54679__$1;
(statearr_54706_56028[(2)] = null);

(statearr_54706_56028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54680 === (8))){
var inst_54661 = (state_54679[(2)]);
var state_54679__$1 = state_54679;
var statearr_54707_56029 = state_54679__$1;
(statearr_54707_56029[(2)] = inst_54661);

(statearr_54707_56029[(1)] = (5));


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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_54708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54708[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_54708[(1)] = (1));

return statearr_54708;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_54679){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54679);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54709){var ex__53246__auto__ = e54709;
var statearr_54710_56031 = state_54679;
(statearr_54710_56031[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54679[(4)]))){
var statearr_54711_56032 = state_54679;
(statearr_54711_56032[(1)] = cljs.core.first((state_54679[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56034 = state_54679;
state_54679 = G__56034;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_54679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_54679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54712 = f__53543__auto__();
(statearr_54712[(6)] = c__53542__auto___55997);

return statearr_54712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
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
var G__54715 = arguments.length;
switch (G__54715) {
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
var c__53542__auto___56038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54747){
var state_val_54748 = (state_54747[(1)]);
if((state_val_54748 === (7))){
var inst_54726 = (state_54747[(7)]);
var inst_54727 = (state_54747[(8)]);
var inst_54726__$1 = (state_54747[(2)]);
var inst_54727__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54726__$1,(0),null);
var inst_54728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54726__$1,(1),null);
var inst_54729 = (inst_54727__$1 == null);
var state_54747__$1 = (function (){var statearr_54749 = state_54747;
(statearr_54749[(7)] = inst_54726__$1);

(statearr_54749[(8)] = inst_54727__$1);

(statearr_54749[(9)] = inst_54728);

return statearr_54749;
})();
if(cljs.core.truth_(inst_54729)){
var statearr_54750_56039 = state_54747__$1;
(statearr_54750_56039[(1)] = (8));

} else {
var statearr_54751_56040 = state_54747__$1;
(statearr_54751_56040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54748 === (1))){
var inst_54716 = cljs.core.vec(chs);
var inst_54717 = inst_54716;
var state_54747__$1 = (function (){var statearr_54752 = state_54747;
(statearr_54752[(10)] = inst_54717);

return statearr_54752;
})();
var statearr_54753_56041 = state_54747__$1;
(statearr_54753_56041[(2)] = null);

(statearr_54753_56041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54748 === (4))){
var inst_54717 = (state_54747[(10)]);
var state_54747__$1 = state_54747;
return cljs.core.async.ioc_alts_BANG_(state_54747__$1,(7),inst_54717);
} else {
if((state_val_54748 === (6))){
var inst_54743 = (state_54747[(2)]);
var state_54747__$1 = state_54747;
var statearr_54754_56048 = state_54747__$1;
(statearr_54754_56048[(2)] = inst_54743);

(statearr_54754_56048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54748 === (3))){
var inst_54745 = (state_54747[(2)]);
var state_54747__$1 = state_54747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54747__$1,inst_54745);
} else {
if((state_val_54748 === (2))){
var inst_54717 = (state_54747[(10)]);
var inst_54719 = cljs.core.count(inst_54717);
var inst_54720 = (inst_54719 > (0));
var state_54747__$1 = state_54747;
if(cljs.core.truth_(inst_54720)){
var statearr_54756_56049 = state_54747__$1;
(statearr_54756_56049[(1)] = (4));

} else {
var statearr_54757_56051 = state_54747__$1;
(statearr_54757_56051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54748 === (11))){
var inst_54717 = (state_54747[(10)]);
var inst_54736 = (state_54747[(2)]);
var tmp54755 = inst_54717;
var inst_54717__$1 = tmp54755;
var state_54747__$1 = (function (){var statearr_54758 = state_54747;
(statearr_54758[(11)] = inst_54736);

(statearr_54758[(10)] = inst_54717__$1);

return statearr_54758;
})();
var statearr_54759_56054 = state_54747__$1;
(statearr_54759_56054[(2)] = null);

(statearr_54759_56054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54748 === (9))){
var inst_54727 = (state_54747[(8)]);
var state_54747__$1 = state_54747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54747__$1,(11),out,inst_54727);
} else {
if((state_val_54748 === (5))){
var inst_54741 = cljs.core.async.close_BANG_(out);
var state_54747__$1 = state_54747;
var statearr_54760_56057 = state_54747__$1;
(statearr_54760_56057[(2)] = inst_54741);

(statearr_54760_56057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54748 === (10))){
var inst_54739 = (state_54747[(2)]);
var state_54747__$1 = state_54747;
var statearr_54761_56058 = state_54747__$1;
(statearr_54761_56058[(2)] = inst_54739);

(statearr_54761_56058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54748 === (8))){
var inst_54726 = (state_54747[(7)]);
var inst_54717 = (state_54747[(10)]);
var inst_54727 = (state_54747[(8)]);
var inst_54728 = (state_54747[(9)]);
var inst_54731 = (function (){var cs = inst_54717;
var vec__54722 = inst_54726;
var v = inst_54727;
var c = inst_54728;
return (function (p1__54713_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__54713_SHARP_);
});
})();
var inst_54732 = cljs.core.filterv(inst_54731,inst_54717);
var inst_54717__$1 = inst_54732;
var state_54747__$1 = (function (){var statearr_54762 = state_54747;
(statearr_54762[(10)] = inst_54717__$1);

return statearr_54762;
})();
var statearr_54763_56060 = state_54747__$1;
(statearr_54763_56060[(2)] = null);

(statearr_54763_56060[(1)] = (2));


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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_54764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54764[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_54764[(1)] = (1));

return statearr_54764;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_54747){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54747);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54765){var ex__53246__auto__ = e54765;
var statearr_54766_56061 = state_54747;
(statearr_54766_56061[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54747[(4)]))){
var statearr_54767_56062 = state_54747;
(statearr_54767_56062[(1)] = cljs.core.first((state_54747[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56063 = state_54747;
state_54747 = G__56063;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_54747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_54747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54768 = f__53543__auto__();
(statearr_54768[(6)] = c__53542__auto___56038);

return statearr_54768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
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
var G__54770 = arguments.length;
switch (G__54770) {
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
var c__53542__auto___56065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54794){
var state_val_54795 = (state_54794[(1)]);
if((state_val_54795 === (7))){
var inst_54776 = (state_54794[(7)]);
var inst_54776__$1 = (state_54794[(2)]);
var inst_54777 = (inst_54776__$1 == null);
var inst_54778 = cljs.core.not(inst_54777);
var state_54794__$1 = (function (){var statearr_54796 = state_54794;
(statearr_54796[(7)] = inst_54776__$1);

return statearr_54796;
})();
if(inst_54778){
var statearr_54797_56066 = state_54794__$1;
(statearr_54797_56066[(1)] = (8));

} else {
var statearr_54798_56067 = state_54794__$1;
(statearr_54798_56067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54795 === (1))){
var inst_54771 = (0);
var state_54794__$1 = (function (){var statearr_54799 = state_54794;
(statearr_54799[(8)] = inst_54771);

return statearr_54799;
})();
var statearr_54800_56069 = state_54794__$1;
(statearr_54800_56069[(2)] = null);

(statearr_54800_56069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54795 === (4))){
var state_54794__$1 = state_54794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54794__$1,(7),ch);
} else {
if((state_val_54795 === (6))){
var inst_54789 = (state_54794[(2)]);
var state_54794__$1 = state_54794;
var statearr_54801_56070 = state_54794__$1;
(statearr_54801_56070[(2)] = inst_54789);

(statearr_54801_56070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54795 === (3))){
var inst_54791 = (state_54794[(2)]);
var inst_54792 = cljs.core.async.close_BANG_(out);
var state_54794__$1 = (function (){var statearr_54802 = state_54794;
(statearr_54802[(9)] = inst_54791);

return statearr_54802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54794__$1,inst_54792);
} else {
if((state_val_54795 === (2))){
var inst_54771 = (state_54794[(8)]);
var inst_54773 = (inst_54771 < n);
var state_54794__$1 = state_54794;
if(cljs.core.truth_(inst_54773)){
var statearr_54803_56071 = state_54794__$1;
(statearr_54803_56071[(1)] = (4));

} else {
var statearr_54804_56073 = state_54794__$1;
(statearr_54804_56073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54795 === (11))){
var inst_54771 = (state_54794[(8)]);
var inst_54781 = (state_54794[(2)]);
var inst_54782 = (inst_54771 + (1));
var inst_54771__$1 = inst_54782;
var state_54794__$1 = (function (){var statearr_54805 = state_54794;
(statearr_54805[(8)] = inst_54771__$1);

(statearr_54805[(10)] = inst_54781);

return statearr_54805;
})();
var statearr_54806_56074 = state_54794__$1;
(statearr_54806_56074[(2)] = null);

(statearr_54806_56074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54795 === (9))){
var state_54794__$1 = state_54794;
var statearr_54807_56075 = state_54794__$1;
(statearr_54807_56075[(2)] = null);

(statearr_54807_56075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54795 === (5))){
var state_54794__$1 = state_54794;
var statearr_54808_56076 = state_54794__$1;
(statearr_54808_56076[(2)] = null);

(statearr_54808_56076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54795 === (10))){
var inst_54786 = (state_54794[(2)]);
var state_54794__$1 = state_54794;
var statearr_54809_56077 = state_54794__$1;
(statearr_54809_56077[(2)] = inst_54786);

(statearr_54809_56077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54795 === (8))){
var inst_54776 = (state_54794[(7)]);
var state_54794__$1 = state_54794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54794__$1,(11),out,inst_54776);
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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_54810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54810[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_54810[(1)] = (1));

return statearr_54810;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_54794){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54794);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54811){var ex__53246__auto__ = e54811;
var statearr_54812_56078 = state_54794;
(statearr_54812_56078[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54794[(4)]))){
var statearr_54813_56079 = state_54794;
(statearr_54813_56079[(1)] = cljs.core.first((state_54794[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56080 = state_54794;
state_54794 = G__56080;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_54794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_54794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54814 = f__53543__auto__();
(statearr_54814[(6)] = c__53542__auto___56065);

return statearr_54814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54816 = (function (f,ch,meta54817){
this.f = f;
this.ch = ch;
this.meta54817 = meta54817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54818,meta54817__$1){
var self__ = this;
var _54818__$1 = this;
return (new cljs.core.async.t_cljs$core$async54816(self__.f,self__.ch,meta54817__$1));
}));

(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54818){
var self__ = this;
var _54818__$1 = this;
return self__.meta54817;
}));

(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54819 = (function (f,ch,meta54817,_,fn1,meta54820){
this.f = f;
this.ch = ch;
this.meta54817 = meta54817;
this._ = _;
this.fn1 = fn1;
this.meta54820 = meta54820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54821,meta54820__$1){
var self__ = this;
var _54821__$1 = this;
return (new cljs.core.async.t_cljs$core$async54819(self__.f,self__.ch,self__.meta54817,self__._,self__.fn1,meta54820__$1));
}));

(cljs.core.async.t_cljs$core$async54819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54821){
var self__ = this;
var _54821__$1 = this;
return self__.meta54820;
}));

(cljs.core.async.t_cljs$core$async54819.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async54819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__54815_SHARP_){
var G__54822 = (((p1__54815_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__54815_SHARP_) : self__.f.call(null,p1__54815_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__54822) : f1.call(null,G__54822));
});
}));

(cljs.core.async.t_cljs$core$async54819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54817","meta54817",-144286119,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async54816","cljs.core.async/t_cljs$core$async54816",1989473976,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta54820","meta54820",734745957,null)], null);
}));

(cljs.core.async.t_cljs$core$async54819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54819");

(cljs.core.async.t_cljs$core$async54819.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54819.
 */
cljs.core.async.__GT_t_cljs$core$async54819 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54819(f__$1,ch__$1,meta54817__$1,___$2,fn1__$1,meta54820){
return (new cljs.core.async.t_cljs$core$async54819(f__$1,ch__$1,meta54817__$1,___$2,fn1__$1,meta54820));
});

}

return (new cljs.core.async.t_cljs$core$async54819(self__.f,self__.ch,self__.meta54817,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__54823 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__54823) : self__.f.call(null,G__54823));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async54816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54817","meta54817",-144286119,null)], null);
}));

(cljs.core.async.t_cljs$core$async54816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54816");

(cljs.core.async.t_cljs$core$async54816.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54816.
 */
cljs.core.async.__GT_t_cljs$core$async54816 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54816(f__$1,ch__$1,meta54817){
return (new cljs.core.async.t_cljs$core$async54816(f__$1,ch__$1,meta54817));
});

}

return (new cljs.core.async.t_cljs$core$async54816(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54824 = (function (f,ch,meta54825){
this.f = f;
this.ch = ch;
this.meta54825 = meta54825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54826,meta54825__$1){
var self__ = this;
var _54826__$1 = this;
return (new cljs.core.async.t_cljs$core$async54824(self__.f,self__.ch,meta54825__$1));
}));

(cljs.core.async.t_cljs$core$async54824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54826){
var self__ = this;
var _54826__$1 = this;
return self__.meta54825;
}));

(cljs.core.async.t_cljs$core$async54824.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54824.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async54824.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async54824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54825","meta54825",1726354829,null)], null);
}));

(cljs.core.async.t_cljs$core$async54824.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54824");

(cljs.core.async.t_cljs$core$async54824.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54824");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54824.
 */
cljs.core.async.__GT_t_cljs$core$async54824 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async54824(f__$1,ch__$1,meta54825){
return (new cljs.core.async.t_cljs$core$async54824(f__$1,ch__$1,meta54825));
});

}

return (new cljs.core.async.t_cljs$core$async54824(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54827 = (function (p,ch,meta54828){
this.p = p;
this.ch = ch;
this.meta54828 = meta54828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54829,meta54828__$1){
var self__ = this;
var _54829__$1 = this;
return (new cljs.core.async.t_cljs$core$async54827(self__.p,self__.ch,meta54828__$1));
}));

(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54829){
var self__ = this;
var _54829__$1 = this;
return self__.meta54828;
}));

(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async54827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54828","meta54828",-1788791223,null)], null);
}));

(cljs.core.async.t_cljs$core$async54827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54827");

(cljs.core.async.t_cljs$core$async54827.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54827.
 */
cljs.core.async.__GT_t_cljs$core$async54827 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async54827(p__$1,ch__$1,meta54828){
return (new cljs.core.async.t_cljs$core$async54827(p__$1,ch__$1,meta54828));
});

}

return (new cljs.core.async.t_cljs$core$async54827(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54831 = arguments.length;
switch (G__54831) {
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
var c__53542__auto___56108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54852){
var state_val_54853 = (state_54852[(1)]);
if((state_val_54853 === (7))){
var inst_54848 = (state_54852[(2)]);
var state_54852__$1 = state_54852;
var statearr_54854_56113 = state_54852__$1;
(statearr_54854_56113[(2)] = inst_54848);

(statearr_54854_56113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54853 === (1))){
var state_54852__$1 = state_54852;
var statearr_54855_56118 = state_54852__$1;
(statearr_54855_56118[(2)] = null);

(statearr_54855_56118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54853 === (4))){
var inst_54834 = (state_54852[(7)]);
var inst_54834__$1 = (state_54852[(2)]);
var inst_54835 = (inst_54834__$1 == null);
var state_54852__$1 = (function (){var statearr_54856 = state_54852;
(statearr_54856[(7)] = inst_54834__$1);

return statearr_54856;
})();
if(cljs.core.truth_(inst_54835)){
var statearr_54857_56119 = state_54852__$1;
(statearr_54857_56119[(1)] = (5));

} else {
var statearr_54858_56120 = state_54852__$1;
(statearr_54858_56120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54853 === (6))){
var inst_54834 = (state_54852[(7)]);
var inst_54839 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54834) : p.call(null,inst_54834));
var state_54852__$1 = state_54852;
if(cljs.core.truth_(inst_54839)){
var statearr_54859_56122 = state_54852__$1;
(statearr_54859_56122[(1)] = (8));

} else {
var statearr_54860_56123 = state_54852__$1;
(statearr_54860_56123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54853 === (3))){
var inst_54850 = (state_54852[(2)]);
var state_54852__$1 = state_54852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54852__$1,inst_54850);
} else {
if((state_val_54853 === (2))){
var state_54852__$1 = state_54852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54852__$1,(4),ch);
} else {
if((state_val_54853 === (11))){
var inst_54842 = (state_54852[(2)]);
var state_54852__$1 = state_54852;
var statearr_54861_56128 = state_54852__$1;
(statearr_54861_56128[(2)] = inst_54842);

(statearr_54861_56128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54853 === (9))){
var state_54852__$1 = state_54852;
var statearr_54862_56129 = state_54852__$1;
(statearr_54862_56129[(2)] = null);

(statearr_54862_56129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54853 === (5))){
var inst_54837 = cljs.core.async.close_BANG_(out);
var state_54852__$1 = state_54852;
var statearr_54863_56134 = state_54852__$1;
(statearr_54863_56134[(2)] = inst_54837);

(statearr_54863_56134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54853 === (10))){
var inst_54845 = (state_54852[(2)]);
var state_54852__$1 = (function (){var statearr_54864 = state_54852;
(statearr_54864[(8)] = inst_54845);

return statearr_54864;
})();
var statearr_54865_56135 = state_54852__$1;
(statearr_54865_56135[(2)] = null);

(statearr_54865_56135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54853 === (8))){
var inst_54834 = (state_54852[(7)]);
var state_54852__$1 = state_54852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54852__$1,(11),out,inst_54834);
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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_54866 = [null,null,null,null,null,null,null,null,null];
(statearr_54866[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_54866[(1)] = (1));

return statearr_54866;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_54852){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54852);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54867){var ex__53246__auto__ = e54867;
var statearr_54868_56143 = state_54852;
(statearr_54868_56143[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54852[(4)]))){
var statearr_54869_56144 = state_54852;
(statearr_54869_56144[(1)] = cljs.core.first((state_54852[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56145 = state_54852;
state_54852 = G__56145;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_54852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_54852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54870 = f__53543__auto__();
(statearr_54870[(6)] = c__53542__auto___56108);

return statearr_54870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__54872 = arguments.length;
switch (G__54872) {
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
var c__53542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_54934){
var state_val_54935 = (state_54934[(1)]);
if((state_val_54935 === (7))){
var inst_54930 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
var statearr_54936_56150 = state_54934__$1;
(statearr_54936_56150[(2)] = inst_54930);

(statearr_54936_56150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (20))){
var inst_54900 = (state_54934[(7)]);
var inst_54911 = (state_54934[(2)]);
var inst_54912 = cljs.core.next(inst_54900);
var inst_54886 = inst_54912;
var inst_54887 = null;
var inst_54888 = (0);
var inst_54889 = (0);
var state_54934__$1 = (function (){var statearr_54937 = state_54934;
(statearr_54937[(8)] = inst_54886);

(statearr_54937[(9)] = inst_54911);

(statearr_54937[(10)] = inst_54888);

(statearr_54937[(11)] = inst_54887);

(statearr_54937[(12)] = inst_54889);

return statearr_54937;
})();
var statearr_54938_56151 = state_54934__$1;
(statearr_54938_56151[(2)] = null);

(statearr_54938_56151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (1))){
var state_54934__$1 = state_54934;
var statearr_54939_56152 = state_54934__$1;
(statearr_54939_56152[(2)] = null);

(statearr_54939_56152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (4))){
var inst_54875 = (state_54934[(13)]);
var inst_54875__$1 = (state_54934[(2)]);
var inst_54876 = (inst_54875__$1 == null);
var state_54934__$1 = (function (){var statearr_54940 = state_54934;
(statearr_54940[(13)] = inst_54875__$1);

return statearr_54940;
})();
if(cljs.core.truth_(inst_54876)){
var statearr_54941_56154 = state_54934__$1;
(statearr_54941_56154[(1)] = (5));

} else {
var statearr_54942_56155 = state_54934__$1;
(statearr_54942_56155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (15))){
var state_54934__$1 = state_54934;
var statearr_54946_56156 = state_54934__$1;
(statearr_54946_56156[(2)] = null);

(statearr_54946_56156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (21))){
var state_54934__$1 = state_54934;
var statearr_54947_56157 = state_54934__$1;
(statearr_54947_56157[(2)] = null);

(statearr_54947_56157[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (13))){
var inst_54886 = (state_54934[(8)]);
var inst_54888 = (state_54934[(10)]);
var inst_54887 = (state_54934[(11)]);
var inst_54889 = (state_54934[(12)]);
var inst_54896 = (state_54934[(2)]);
var inst_54897 = (inst_54889 + (1));
var tmp54943 = inst_54886;
var tmp54944 = inst_54888;
var tmp54945 = inst_54887;
var inst_54886__$1 = tmp54943;
var inst_54887__$1 = tmp54945;
var inst_54888__$1 = tmp54944;
var inst_54889__$1 = inst_54897;
var state_54934__$1 = (function (){var statearr_54948 = state_54934;
(statearr_54948[(8)] = inst_54886__$1);

(statearr_54948[(10)] = inst_54888__$1);

(statearr_54948[(11)] = inst_54887__$1);

(statearr_54948[(12)] = inst_54889__$1);

(statearr_54948[(14)] = inst_54896);

return statearr_54948;
})();
var statearr_54949_56158 = state_54934__$1;
(statearr_54949_56158[(2)] = null);

(statearr_54949_56158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (22))){
var state_54934__$1 = state_54934;
var statearr_54950_56159 = state_54934__$1;
(statearr_54950_56159[(2)] = null);

(statearr_54950_56159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (6))){
var inst_54875 = (state_54934[(13)]);
var inst_54884 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54875) : f.call(null,inst_54875));
var inst_54885 = cljs.core.seq(inst_54884);
var inst_54886 = inst_54885;
var inst_54887 = null;
var inst_54888 = (0);
var inst_54889 = (0);
var state_54934__$1 = (function (){var statearr_54951 = state_54934;
(statearr_54951[(8)] = inst_54886);

(statearr_54951[(10)] = inst_54888);

(statearr_54951[(11)] = inst_54887);

(statearr_54951[(12)] = inst_54889);

return statearr_54951;
})();
var statearr_54952_56161 = state_54934__$1;
(statearr_54952_56161[(2)] = null);

(statearr_54952_56161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (17))){
var inst_54900 = (state_54934[(7)]);
var inst_54904 = cljs.core.chunk_first(inst_54900);
var inst_54905 = cljs.core.chunk_rest(inst_54900);
var inst_54906 = cljs.core.count(inst_54904);
var inst_54886 = inst_54905;
var inst_54887 = inst_54904;
var inst_54888 = inst_54906;
var inst_54889 = (0);
var state_54934__$1 = (function (){var statearr_54953 = state_54934;
(statearr_54953[(8)] = inst_54886);

(statearr_54953[(10)] = inst_54888);

(statearr_54953[(11)] = inst_54887);

(statearr_54953[(12)] = inst_54889);

return statearr_54953;
})();
var statearr_54954_56163 = state_54934__$1;
(statearr_54954_56163[(2)] = null);

(statearr_54954_56163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (3))){
var inst_54932 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54934__$1,inst_54932);
} else {
if((state_val_54935 === (12))){
var inst_54920 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
var statearr_54955_56175 = state_54934__$1;
(statearr_54955_56175[(2)] = inst_54920);

(statearr_54955_56175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (2))){
var state_54934__$1 = state_54934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54934__$1,(4),in$);
} else {
if((state_val_54935 === (23))){
var inst_54928 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
var statearr_54956_56182 = state_54934__$1;
(statearr_54956_56182[(2)] = inst_54928);

(statearr_54956_56182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (19))){
var inst_54915 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
var statearr_54957_56189 = state_54934__$1;
(statearr_54957_56189[(2)] = inst_54915);

(statearr_54957_56189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (11))){
var inst_54886 = (state_54934[(8)]);
var inst_54900 = (state_54934[(7)]);
var inst_54900__$1 = cljs.core.seq(inst_54886);
var state_54934__$1 = (function (){var statearr_54958 = state_54934;
(statearr_54958[(7)] = inst_54900__$1);

return statearr_54958;
})();
if(inst_54900__$1){
var statearr_54959_56200 = state_54934__$1;
(statearr_54959_56200[(1)] = (14));

} else {
var statearr_54960_56201 = state_54934__$1;
(statearr_54960_56201[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (9))){
var inst_54922 = (state_54934[(2)]);
var inst_54923 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_54934__$1 = (function (){var statearr_54961 = state_54934;
(statearr_54961[(15)] = inst_54922);

return statearr_54961;
})();
if(cljs.core.truth_(inst_54923)){
var statearr_54962_56210 = state_54934__$1;
(statearr_54962_56210[(1)] = (21));

} else {
var statearr_54963_56211 = state_54934__$1;
(statearr_54963_56211[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (5))){
var inst_54878 = cljs.core.async.close_BANG_(out);
var state_54934__$1 = state_54934;
var statearr_54964_56213 = state_54934__$1;
(statearr_54964_56213[(2)] = inst_54878);

(statearr_54964_56213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (14))){
var inst_54900 = (state_54934[(7)]);
var inst_54902 = cljs.core.chunked_seq_QMARK_(inst_54900);
var state_54934__$1 = state_54934;
if(inst_54902){
var statearr_54965_56220 = state_54934__$1;
(statearr_54965_56220[(1)] = (17));

} else {
var statearr_54966_56221 = state_54934__$1;
(statearr_54966_56221[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (16))){
var inst_54918 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
var statearr_54967_56224 = state_54934__$1;
(statearr_54967_56224[(2)] = inst_54918);

(statearr_54967_56224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (10))){
var inst_54887 = (state_54934[(11)]);
var inst_54889 = (state_54934[(12)]);
var inst_54894 = cljs.core._nth(inst_54887,inst_54889);
var state_54934__$1 = state_54934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54934__$1,(13),out,inst_54894);
} else {
if((state_val_54935 === (18))){
var inst_54900 = (state_54934[(7)]);
var inst_54909 = cljs.core.first(inst_54900);
var state_54934__$1 = state_54934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54934__$1,(20),out,inst_54909);
} else {
if((state_val_54935 === (8))){
var inst_54888 = (state_54934[(10)]);
var inst_54889 = (state_54934[(12)]);
var inst_54891 = (inst_54889 < inst_54888);
var inst_54892 = inst_54891;
var state_54934__$1 = state_54934;
if(cljs.core.truth_(inst_54892)){
var statearr_54968_56246 = state_54934__$1;
(statearr_54968_56246[(1)] = (10));

} else {
var statearr_54969_56247 = state_54934__$1;
(statearr_54969_56247[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__53243__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__53243__auto____0 = (function (){
var statearr_54970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54970[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__53243__auto__);

(statearr_54970[(1)] = (1));

return statearr_54970;
});
var cljs$core$async$mapcat_STAR__$_state_machine__53243__auto____1 = (function (state_54934){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_54934);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e54971){var ex__53246__auto__ = e54971;
var statearr_54972_56264 = state_54934;
(statearr_54972_56264[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_54934[(4)]))){
var statearr_54973_56265 = state_54934;
(statearr_54973_56265[(1)] = cljs.core.first((state_54934[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56266 = state_54934;
state_54934 = G__56266;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__53243__auto__ = function(state_54934){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__53243__auto____1.call(this,state_54934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__53243__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__53243__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_54974 = f__53543__auto__();
(statearr_54974[(6)] = c__53542__auto__);

return statearr_54974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));

return c__53542__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__54976 = arguments.length;
switch (G__54976) {
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
var G__54978 = arguments.length;
switch (G__54978) {
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
var G__54980 = arguments.length;
switch (G__54980) {
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
var c__53542__auto___56286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_55004){
var state_val_55005 = (state_55004[(1)]);
if((state_val_55005 === (7))){
var inst_54999 = (state_55004[(2)]);
var state_55004__$1 = state_55004;
var statearr_55006_56288 = state_55004__$1;
(statearr_55006_56288[(2)] = inst_54999);

(statearr_55006_56288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55005 === (1))){
var inst_54981 = null;
var state_55004__$1 = (function (){var statearr_55007 = state_55004;
(statearr_55007[(7)] = inst_54981);

return statearr_55007;
})();
var statearr_55008_56289 = state_55004__$1;
(statearr_55008_56289[(2)] = null);

(statearr_55008_56289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55005 === (4))){
var inst_54984 = (state_55004[(8)]);
var inst_54984__$1 = (state_55004[(2)]);
var inst_54985 = (inst_54984__$1 == null);
var inst_54986 = cljs.core.not(inst_54985);
var state_55004__$1 = (function (){var statearr_55009 = state_55004;
(statearr_55009[(8)] = inst_54984__$1);

return statearr_55009;
})();
if(inst_54986){
var statearr_55010_56294 = state_55004__$1;
(statearr_55010_56294[(1)] = (5));

} else {
var statearr_55011_56295 = state_55004__$1;
(statearr_55011_56295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55005 === (6))){
var state_55004__$1 = state_55004;
var statearr_55012_56296 = state_55004__$1;
(statearr_55012_56296[(2)] = null);

(statearr_55012_56296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55005 === (3))){
var inst_55001 = (state_55004[(2)]);
var inst_55002 = cljs.core.async.close_BANG_(out);
var state_55004__$1 = (function (){var statearr_55013 = state_55004;
(statearr_55013[(9)] = inst_55001);

return statearr_55013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55004__$1,inst_55002);
} else {
if((state_val_55005 === (2))){
var state_55004__$1 = state_55004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55004__$1,(4),ch);
} else {
if((state_val_55005 === (11))){
var inst_54984 = (state_55004[(8)]);
var inst_54993 = (state_55004[(2)]);
var inst_54981 = inst_54984;
var state_55004__$1 = (function (){var statearr_55014 = state_55004;
(statearr_55014[(10)] = inst_54993);

(statearr_55014[(7)] = inst_54981);

return statearr_55014;
})();
var statearr_55015_56298 = state_55004__$1;
(statearr_55015_56298[(2)] = null);

(statearr_55015_56298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55005 === (9))){
var inst_54984 = (state_55004[(8)]);
var state_55004__$1 = state_55004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55004__$1,(11),out,inst_54984);
} else {
if((state_val_55005 === (5))){
var inst_54984 = (state_55004[(8)]);
var inst_54981 = (state_55004[(7)]);
var inst_54988 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54984,inst_54981);
var state_55004__$1 = state_55004;
if(inst_54988){
var statearr_55017_56300 = state_55004__$1;
(statearr_55017_56300[(1)] = (8));

} else {
var statearr_55018_56301 = state_55004__$1;
(statearr_55018_56301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55005 === (10))){
var inst_54996 = (state_55004[(2)]);
var state_55004__$1 = state_55004;
var statearr_55019_56302 = state_55004__$1;
(statearr_55019_56302[(2)] = inst_54996);

(statearr_55019_56302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55005 === (8))){
var inst_54981 = (state_55004[(7)]);
var tmp55016 = inst_54981;
var inst_54981__$1 = tmp55016;
var state_55004__$1 = (function (){var statearr_55020 = state_55004;
(statearr_55020[(7)] = inst_54981__$1);

return statearr_55020;
})();
var statearr_55021_56306 = state_55004__$1;
(statearr_55021_56306[(2)] = null);

(statearr_55021_56306[(1)] = (2));


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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_55022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55022[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_55022[(1)] = (1));

return statearr_55022;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_55004){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_55004);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e55023){var ex__53246__auto__ = e55023;
var statearr_55024_56315 = state_55004;
(statearr_55024_56315[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_55004[(4)]))){
var statearr_55025_56324 = state_55004;
(statearr_55025_56324[(1)] = cljs.core.first((state_55004[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56328 = state_55004;
state_55004 = G__56328;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_55004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_55004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_55026 = f__53543__auto__();
(statearr_55026[(6)] = c__53542__auto___56286);

return statearr_55026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55028 = arguments.length;
switch (G__55028) {
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
var c__53542__auto___56351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_55066){
var state_val_55067 = (state_55066[(1)]);
if((state_val_55067 === (7))){
var inst_55062 = (state_55066[(2)]);
var state_55066__$1 = state_55066;
var statearr_55068_56358 = state_55066__$1;
(statearr_55068_56358[(2)] = inst_55062);

(statearr_55068_56358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (1))){
var inst_55029 = (new Array(n));
var inst_55030 = inst_55029;
var inst_55031 = (0);
var state_55066__$1 = (function (){var statearr_55069 = state_55066;
(statearr_55069[(7)] = inst_55030);

(statearr_55069[(8)] = inst_55031);

return statearr_55069;
})();
var statearr_55070_56366 = state_55066__$1;
(statearr_55070_56366[(2)] = null);

(statearr_55070_56366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (4))){
var inst_55034 = (state_55066[(9)]);
var inst_55034__$1 = (state_55066[(2)]);
var inst_55035 = (inst_55034__$1 == null);
var inst_55036 = cljs.core.not(inst_55035);
var state_55066__$1 = (function (){var statearr_55071 = state_55066;
(statearr_55071[(9)] = inst_55034__$1);

return statearr_55071;
})();
if(inst_55036){
var statearr_55072_56367 = state_55066__$1;
(statearr_55072_56367[(1)] = (5));

} else {
var statearr_55073_56372 = state_55066__$1;
(statearr_55073_56372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (15))){
var inst_55056 = (state_55066[(2)]);
var state_55066__$1 = state_55066;
var statearr_55074_56373 = state_55066__$1;
(statearr_55074_56373[(2)] = inst_55056);

(statearr_55074_56373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (13))){
var state_55066__$1 = state_55066;
var statearr_55075_56375 = state_55066__$1;
(statearr_55075_56375[(2)] = null);

(statearr_55075_56375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (6))){
var inst_55031 = (state_55066[(8)]);
var inst_55052 = (inst_55031 > (0));
var state_55066__$1 = state_55066;
if(cljs.core.truth_(inst_55052)){
var statearr_55076_56376 = state_55066__$1;
(statearr_55076_56376[(1)] = (12));

} else {
var statearr_55077_56377 = state_55066__$1;
(statearr_55077_56377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (3))){
var inst_55064 = (state_55066[(2)]);
var state_55066__$1 = state_55066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55066__$1,inst_55064);
} else {
if((state_val_55067 === (12))){
var inst_55030 = (state_55066[(7)]);
var inst_55054 = cljs.core.vec(inst_55030);
var state_55066__$1 = state_55066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55066__$1,(15),out,inst_55054);
} else {
if((state_val_55067 === (2))){
var state_55066__$1 = state_55066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55066__$1,(4),ch);
} else {
if((state_val_55067 === (11))){
var inst_55046 = (state_55066[(2)]);
var inst_55047 = (new Array(n));
var inst_55030 = inst_55047;
var inst_55031 = (0);
var state_55066__$1 = (function (){var statearr_55078 = state_55066;
(statearr_55078[(10)] = inst_55046);

(statearr_55078[(7)] = inst_55030);

(statearr_55078[(8)] = inst_55031);

return statearr_55078;
})();
var statearr_55079_56382 = state_55066__$1;
(statearr_55079_56382[(2)] = null);

(statearr_55079_56382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (9))){
var inst_55030 = (state_55066[(7)]);
var inst_55044 = cljs.core.vec(inst_55030);
var state_55066__$1 = state_55066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55066__$1,(11),out,inst_55044);
} else {
if((state_val_55067 === (5))){
var inst_55039 = (state_55066[(11)]);
var inst_55030 = (state_55066[(7)]);
var inst_55031 = (state_55066[(8)]);
var inst_55034 = (state_55066[(9)]);
var inst_55038 = (inst_55030[inst_55031] = inst_55034);
var inst_55039__$1 = (inst_55031 + (1));
var inst_55040 = (inst_55039__$1 < n);
var state_55066__$1 = (function (){var statearr_55080 = state_55066;
(statearr_55080[(11)] = inst_55039__$1);

(statearr_55080[(12)] = inst_55038);

return statearr_55080;
})();
if(cljs.core.truth_(inst_55040)){
var statearr_55081_56394 = state_55066__$1;
(statearr_55081_56394[(1)] = (8));

} else {
var statearr_55082_56395 = state_55066__$1;
(statearr_55082_56395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (14))){
var inst_55059 = (state_55066[(2)]);
var inst_55060 = cljs.core.async.close_BANG_(out);
var state_55066__$1 = (function (){var statearr_55084 = state_55066;
(statearr_55084[(13)] = inst_55059);

return statearr_55084;
})();
var statearr_55085_56397 = state_55066__$1;
(statearr_55085_56397[(2)] = inst_55060);

(statearr_55085_56397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (10))){
var inst_55050 = (state_55066[(2)]);
var state_55066__$1 = state_55066;
var statearr_55086_56398 = state_55066__$1;
(statearr_55086_56398[(2)] = inst_55050);

(statearr_55086_56398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55067 === (8))){
var inst_55039 = (state_55066[(11)]);
var inst_55030 = (state_55066[(7)]);
var tmp55083 = inst_55030;
var inst_55030__$1 = tmp55083;
var inst_55031 = inst_55039;
var state_55066__$1 = (function (){var statearr_55087 = state_55066;
(statearr_55087[(7)] = inst_55030__$1);

(statearr_55087[(8)] = inst_55031);

return statearr_55087;
})();
var statearr_55088_56399 = state_55066__$1;
(statearr_55088_56399[(2)] = null);

(statearr_55088_56399[(1)] = (2));


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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_55089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55089[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_55089[(1)] = (1));

return statearr_55089;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_55066){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_55066);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e55090){var ex__53246__auto__ = e55090;
var statearr_55091_56403 = state_55066;
(statearr_55091_56403[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_55066[(4)]))){
var statearr_55092_56404 = state_55066;
(statearr_55092_56404[(1)] = cljs.core.first((state_55066[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56405 = state_55066;
state_55066 = G__56405;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_55066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_55066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_55093 = f__53543__auto__();
(statearr_55093[(6)] = c__53542__auto___56351);

return statearr_55093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55095 = arguments.length;
switch (G__55095) {
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
var c__53542__auto___56407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53543__auto__ = (function (){var switch__53242__auto__ = (function (state_55137){
var state_val_55138 = (state_55137[(1)]);
if((state_val_55138 === (7))){
var inst_55133 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55139_56411 = state_55137__$1;
(statearr_55139_56411[(2)] = inst_55133);

(statearr_55139_56411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (1))){
var inst_55096 = [];
var inst_55097 = inst_55096;
var inst_55098 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55137__$1 = (function (){var statearr_55140 = state_55137;
(statearr_55140[(7)] = inst_55098);

(statearr_55140[(8)] = inst_55097);

return statearr_55140;
})();
var statearr_55141_56412 = state_55137__$1;
(statearr_55141_56412[(2)] = null);

(statearr_55141_56412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (4))){
var inst_55101 = (state_55137[(9)]);
var inst_55101__$1 = (state_55137[(2)]);
var inst_55102 = (inst_55101__$1 == null);
var inst_55103 = cljs.core.not(inst_55102);
var state_55137__$1 = (function (){var statearr_55142 = state_55137;
(statearr_55142[(9)] = inst_55101__$1);

return statearr_55142;
})();
if(inst_55103){
var statearr_55143_56413 = state_55137__$1;
(statearr_55143_56413[(1)] = (5));

} else {
var statearr_55144_56414 = state_55137__$1;
(statearr_55144_56414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (15))){
var inst_55127 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55145_56415 = state_55137__$1;
(statearr_55145_56415[(2)] = inst_55127);

(statearr_55145_56415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (13))){
var state_55137__$1 = state_55137;
var statearr_55146_56419 = state_55137__$1;
(statearr_55146_56419[(2)] = null);

(statearr_55146_56419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (6))){
var inst_55097 = (state_55137[(8)]);
var inst_55122 = inst_55097.length;
var inst_55123 = (inst_55122 > (0));
var state_55137__$1 = state_55137;
if(cljs.core.truth_(inst_55123)){
var statearr_55147_56421 = state_55137__$1;
(statearr_55147_56421[(1)] = (12));

} else {
var statearr_55148_56422 = state_55137__$1;
(statearr_55148_56422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (3))){
var inst_55135 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55137__$1,inst_55135);
} else {
if((state_val_55138 === (12))){
var inst_55097 = (state_55137[(8)]);
var inst_55125 = cljs.core.vec(inst_55097);
var state_55137__$1 = state_55137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55137__$1,(15),out,inst_55125);
} else {
if((state_val_55138 === (2))){
var state_55137__$1 = state_55137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55137__$1,(4),ch);
} else {
if((state_val_55138 === (11))){
var inst_55101 = (state_55137[(9)]);
var inst_55105 = (state_55137[(10)]);
var inst_55115 = (state_55137[(2)]);
var inst_55116 = [];
var inst_55117 = inst_55116.push(inst_55101);
var inst_55097 = inst_55116;
var inst_55098 = inst_55105;
var state_55137__$1 = (function (){var statearr_55149 = state_55137;
(statearr_55149[(7)] = inst_55098);

(statearr_55149[(8)] = inst_55097);

(statearr_55149[(11)] = inst_55117);

(statearr_55149[(12)] = inst_55115);

return statearr_55149;
})();
var statearr_55150_56425 = state_55137__$1;
(statearr_55150_56425[(2)] = null);

(statearr_55150_56425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (9))){
var inst_55097 = (state_55137[(8)]);
var inst_55113 = cljs.core.vec(inst_55097);
var state_55137__$1 = state_55137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55137__$1,(11),out,inst_55113);
} else {
if((state_val_55138 === (5))){
var inst_55101 = (state_55137[(9)]);
var inst_55098 = (state_55137[(7)]);
var inst_55105 = (state_55137[(10)]);
var inst_55105__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55101) : f.call(null,inst_55101));
var inst_55106 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55105__$1,inst_55098);
var inst_55107 = cljs.core.keyword_identical_QMARK_(inst_55098,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_55108 = ((inst_55106) || (inst_55107));
var state_55137__$1 = (function (){var statearr_55151 = state_55137;
(statearr_55151[(10)] = inst_55105__$1);

return statearr_55151;
})();
if(cljs.core.truth_(inst_55108)){
var statearr_55152_56433 = state_55137__$1;
(statearr_55152_56433[(1)] = (8));

} else {
var statearr_55153_56434 = state_55137__$1;
(statearr_55153_56434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (14))){
var inst_55130 = (state_55137[(2)]);
var inst_55131 = cljs.core.async.close_BANG_(out);
var state_55137__$1 = (function (){var statearr_55155 = state_55137;
(statearr_55155[(13)] = inst_55130);

return statearr_55155;
})();
var statearr_55156_56437 = state_55137__$1;
(statearr_55156_56437[(2)] = inst_55131);

(statearr_55156_56437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (10))){
var inst_55120 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55157_56441 = state_55137__$1;
(statearr_55157_56441[(2)] = inst_55120);

(statearr_55157_56441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (8))){
var inst_55101 = (state_55137[(9)]);
var inst_55097 = (state_55137[(8)]);
var inst_55105 = (state_55137[(10)]);
var inst_55110 = inst_55097.push(inst_55101);
var tmp55154 = inst_55097;
var inst_55097__$1 = tmp55154;
var inst_55098 = inst_55105;
var state_55137__$1 = (function (){var statearr_55158 = state_55137;
(statearr_55158[(14)] = inst_55110);

(statearr_55158[(7)] = inst_55098);

(statearr_55158[(8)] = inst_55097__$1);

return statearr_55158;
})();
var statearr_55159_56442 = state_55137__$1;
(statearr_55159_56442[(2)] = null);

(statearr_55159_56442[(1)] = (2));


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
var cljs$core$async$state_machine__53243__auto__ = null;
var cljs$core$async$state_machine__53243__auto____0 = (function (){
var statearr_55160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55160[(0)] = cljs$core$async$state_machine__53243__auto__);

(statearr_55160[(1)] = (1));

return statearr_55160;
});
var cljs$core$async$state_machine__53243__auto____1 = (function (state_55137){
while(true){
var ret_value__53244__auto__ = (function (){try{while(true){
var result__53245__auto__ = switch__53242__auto__(state_55137);
if(cljs.core.keyword_identical_QMARK_(result__53245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53245__auto__;
}
break;
}
}catch (e55161){var ex__53246__auto__ = e55161;
var statearr_55162_56450 = state_55137;
(statearr_55162_56450[(2)] = ex__53246__auto__);


if(cljs.core.seq((state_55137[(4)]))){
var statearr_55163_56459 = state_55137;
(statearr_55163_56459[(1)] = cljs.core.first((state_55137[(4)])));

} else {
throw ex__53246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56463 = state_55137;
state_55137 = G__56463;
continue;
} else {
return ret_value__53244__auto__;
}
break;
}
});
cljs$core$async$state_machine__53243__auto__ = function(state_55137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53243__auto____1.call(this,state_55137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53243__auto____0;
cljs$core$async$state_machine__53243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53243__auto____1;
return cljs$core$async$state_machine__53243__auto__;
})()
})();
var state__53544__auto__ = (function (){var statearr_55164 = f__53543__auto__();
(statearr_55164[(6)] = c__53542__auto___56407);

return statearr_55164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53544__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
