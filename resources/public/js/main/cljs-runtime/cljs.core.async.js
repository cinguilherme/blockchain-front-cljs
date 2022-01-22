goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49893 = arguments.length;
switch (G__49893) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49896 = (function (f,blockable,meta49897){
this.f = f;
this.blockable = blockable;
this.meta49897 = meta49897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49898,meta49897__$1){
var self__ = this;
var _49898__$1 = this;
return (new cljs.core.async.t_cljs$core$async49896(self__.f,self__.blockable,meta49897__$1));
}));

(cljs.core.async.t_cljs$core$async49896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49898){
var self__ = this;
var _49898__$1 = this;
return self__.meta49897;
}));

(cljs.core.async.t_cljs$core$async49896.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49896.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49897","meta49897",1656861695,null)], null);
}));

(cljs.core.async.t_cljs$core$async49896.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49896");

(cljs.core.async.t_cljs$core$async49896.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49896");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49896.
 */
cljs.core.async.__GT_t_cljs$core$async49896 = (function cljs$core$async$__GT_t_cljs$core$async49896(f__$1,blockable__$1,meta49897){
return (new cljs.core.async.t_cljs$core$async49896(f__$1,blockable__$1,meta49897));
});

}

return (new cljs.core.async.t_cljs$core$async49896(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49906 = arguments.length;
switch (G__49906) {
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
var G__49914 = arguments.length;
switch (G__49914) {
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
var G__49926 = arguments.length;
switch (G__49926) {
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
var val_52483 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52483) : fn1.call(null,val_52483));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52483) : fn1.call(null,val_52483));
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
var G__49928 = arguments.length;
switch (G__49928) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4741__auto___52488 = n;
var x_52489 = (0);
while(true){
if((x_52489 < n__4741__auto___52488)){
(a[x_52489] = x_52489);

var G__52490 = (x_52489 + (1));
x_52489 = G__52490;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49941 = (function (flag,meta49942){
this.flag = flag;
this.meta49942 = meta49942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49943,meta49942__$1){
var self__ = this;
var _49943__$1 = this;
return (new cljs.core.async.t_cljs$core$async49941(self__.flag,meta49942__$1));
}));

(cljs.core.async.t_cljs$core$async49941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49943){
var self__ = this;
var _49943__$1 = this;
return self__.meta49942;
}));

(cljs.core.async.t_cljs$core$async49941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49942","meta49942",942988720,null)], null);
}));

(cljs.core.async.t_cljs$core$async49941.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49941");

(cljs.core.async.t_cljs$core$async49941.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49941");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49941.
 */
cljs.core.async.__GT_t_cljs$core$async49941 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49941(flag__$1,meta49942){
return (new cljs.core.async.t_cljs$core$async49941(flag__$1,meta49942));
});

}

return (new cljs.core.async.t_cljs$core$async49941(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49946 = (function (flag,cb,meta49947){
this.flag = flag;
this.cb = cb;
this.meta49947 = meta49947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49948,meta49947__$1){
var self__ = this;
var _49948__$1 = this;
return (new cljs.core.async.t_cljs$core$async49946(self__.flag,self__.cb,meta49947__$1));
}));

(cljs.core.async.t_cljs$core$async49946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49948){
var self__ = this;
var _49948__$1 = this;
return self__.meta49947;
}));

(cljs.core.async.t_cljs$core$async49946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49947","meta49947",-1040312514,null)], null);
}));

(cljs.core.async.t_cljs$core$async49946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49946");

(cljs.core.async.t_cljs$core$async49946.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49946.
 */
cljs.core.async.__GT_t_cljs$core$async49946 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49946(flag__$1,cb__$1,meta49947){
return (new cljs.core.async.t_cljs$core$async49946(flag__$1,cb__$1,meta49947));
});

}

return (new cljs.core.async.t_cljs$core$async49946(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49953_SHARP_){
var G__49957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49953_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49957) : fret.call(null,G__49957));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49954_SHARP_){
var G__49958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49954_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49958) : fret.call(null,G__49958));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52496 = (i + (1));
i = G__52496;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___52503 = arguments.length;
var i__4865__auto___52504 = (0);
while(true){
if((i__4865__auto___52504 < len__4864__auto___52503)){
args__4870__auto__.push((arguments[i__4865__auto___52504]));

var G__52505 = (i__4865__auto___52504 + (1));
i__4865__auto___52504 = G__52505;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49974){
var map__49975 = p__49974;
var map__49975__$1 = cljs.core.__destructure_map(map__49975);
var opts = map__49975__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49968){
var G__49969 = cljs.core.first(seq49968);
var seq49968__$1 = cljs.core.next(seq49968);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49969,seq49968__$1);
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
var G__49979 = arguments.length;
switch (G__49979) {
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
var c__49796__auto___52508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50016){
var state_val_50017 = (state_50016[(1)]);
if((state_val_50017 === (7))){
var inst_50012 = (state_50016[(2)]);
var state_50016__$1 = state_50016;
var statearr_50028_52509 = state_50016__$1;
(statearr_50028_52509[(2)] = inst_50012);

(statearr_50028_52509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (1))){
var state_50016__$1 = state_50016;
var statearr_50033_52510 = state_50016__$1;
(statearr_50033_52510[(2)] = null);

(statearr_50033_52510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (4))){
var inst_49994 = (state_50016[(7)]);
var inst_49994__$1 = (state_50016[(2)]);
var inst_49995 = (inst_49994__$1 == null);
var state_50016__$1 = (function (){var statearr_50035 = state_50016;
(statearr_50035[(7)] = inst_49994__$1);

return statearr_50035;
})();
if(cljs.core.truth_(inst_49995)){
var statearr_50036_52511 = state_50016__$1;
(statearr_50036_52511[(1)] = (5));

} else {
var statearr_50037_52512 = state_50016__$1;
(statearr_50037_52512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (13))){
var state_50016__$1 = state_50016;
var statearr_50038_52513 = state_50016__$1;
(statearr_50038_52513[(2)] = null);

(statearr_50038_52513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (6))){
var inst_49994 = (state_50016[(7)]);
var state_50016__$1 = state_50016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50016__$1,(11),to,inst_49994);
} else {
if((state_val_50017 === (3))){
var inst_50014 = (state_50016[(2)]);
var state_50016__$1 = state_50016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50016__$1,inst_50014);
} else {
if((state_val_50017 === (12))){
var state_50016__$1 = state_50016;
var statearr_50042_52516 = state_50016__$1;
(statearr_50042_52516[(2)] = null);

(statearr_50042_52516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (2))){
var state_50016__$1 = state_50016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50016__$1,(4),from);
} else {
if((state_val_50017 === (11))){
var inst_50005 = (state_50016[(2)]);
var state_50016__$1 = state_50016;
if(cljs.core.truth_(inst_50005)){
var statearr_50043_52520 = state_50016__$1;
(statearr_50043_52520[(1)] = (12));

} else {
var statearr_50044_52521 = state_50016__$1;
(statearr_50044_52521[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (9))){
var state_50016__$1 = state_50016;
var statearr_50045_52523 = state_50016__$1;
(statearr_50045_52523[(2)] = null);

(statearr_50045_52523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (5))){
var state_50016__$1 = state_50016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50046_52524 = state_50016__$1;
(statearr_50046_52524[(1)] = (8));

} else {
var statearr_50047_52525 = state_50016__$1;
(statearr_50047_52525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (14))){
var inst_50010 = (state_50016[(2)]);
var state_50016__$1 = state_50016;
var statearr_50048_52526 = state_50016__$1;
(statearr_50048_52526[(2)] = inst_50010);

(statearr_50048_52526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (10))){
var inst_50002 = (state_50016[(2)]);
var state_50016__$1 = state_50016;
var statearr_50049_52528 = state_50016__$1;
(statearr_50049_52528[(2)] = inst_50002);

(statearr_50049_52528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50017 === (8))){
var inst_49998 = cljs.core.async.close_BANG_(to);
var state_50016__$1 = state_50016;
var statearr_50053_52532 = state_50016__$1;
(statearr_50053_52532[(2)] = inst_49998);

(statearr_50053_52532[(1)] = (10));


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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_50055 = [null,null,null,null,null,null,null,null];
(statearr_50055[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_50055[(1)] = (1));

return statearr_50055;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_50016){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50016);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50056){var ex__49618__auto__ = e50056;
var statearr_50057_52538 = state_50016;
(statearr_50057_52538[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50016[(4)]))){
var statearr_50058_52539 = state_50016;
(statearr_50058_52539[(1)] = cljs.core.first((state_50016[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52540 = state_50016;
state_50016 = G__52540;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_50016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_50016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50059 = f__49797__auto__();
(statearr_50059[(6)] = c__49796__auto___52508);

return statearr_50059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
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
var process = (function (p__50062){
var vec__50063 = p__50062;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50063,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50063,(1),null);
var job = vec__50063;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49796__auto___52547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50075){
var state_val_50076 = (state_50075[(1)]);
if((state_val_50076 === (1))){
var state_50075__$1 = state_50075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50075__$1,(2),res,v);
} else {
if((state_val_50076 === (2))){
var inst_50072 = (state_50075[(2)]);
var inst_50073 = cljs.core.async.close_BANG_(res);
var state_50075__$1 = (function (){var statearr_50079 = state_50075;
(statearr_50079[(7)] = inst_50072);

return statearr_50079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50075__$1,inst_50073);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0 = (function (){
var statearr_50082 = [null,null,null,null,null,null,null,null];
(statearr_50082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__);

(statearr_50082[(1)] = (1));

return statearr_50082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1 = (function (state_50075){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50075);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50086){var ex__49618__auto__ = e50086;
var statearr_50088_52557 = state_50075;
(statearr_50088_52557[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50075[(4)]))){
var statearr_50089_52558 = state_50075;
(statearr_50089_52558[(1)] = cljs.core.first((state_50075[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52559 = state_50075;
state_50075 = G__52559;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = function(state_50075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1.call(this,state_50075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50090 = f__49797__auto__();
(statearr_50090[(6)] = c__49796__auto___52547);

return statearr_50090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50092){
var vec__50096 = p__50092;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50096,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50096,(1),null);
var job = vec__50096;
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
var n__4741__auto___52564 = n;
var __52565 = (0);
while(true){
if((__52565 < n__4741__auto___52564)){
var G__50100_52566 = type;
var G__50100_52567__$1 = (((G__50100_52566 instanceof cljs.core.Keyword))?G__50100_52566.fqn:null);
switch (G__50100_52567__$1) {
case "compute":
var c__49796__auto___52569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52565,c__49796__auto___52569,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async){
return (function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = ((function (__52565,c__49796__auto___52569,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async){
return (function (state_50118){
var state_val_50119 = (state_50118[(1)]);
if((state_val_50119 === (1))){
var state_50118__$1 = state_50118;
var statearr_50124_52570 = state_50118__$1;
(statearr_50124_52570[(2)] = null);

(statearr_50124_52570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50119 === (2))){
var state_50118__$1 = state_50118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50118__$1,(4),jobs);
} else {
if((state_val_50119 === (3))){
var inst_50116 = (state_50118[(2)]);
var state_50118__$1 = state_50118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50118__$1,inst_50116);
} else {
if((state_val_50119 === (4))){
var inst_50105 = (state_50118[(2)]);
var inst_50106 = process(inst_50105);
var state_50118__$1 = state_50118;
if(cljs.core.truth_(inst_50106)){
var statearr_50125_52576 = state_50118__$1;
(statearr_50125_52576[(1)] = (5));

} else {
var statearr_50126_52577 = state_50118__$1;
(statearr_50126_52577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50119 === (5))){
var state_50118__$1 = state_50118;
var statearr_50128_52578 = state_50118__$1;
(statearr_50128_52578[(2)] = null);

(statearr_50128_52578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50119 === (6))){
var state_50118__$1 = state_50118;
var statearr_50130_52579 = state_50118__$1;
(statearr_50130_52579[(2)] = null);

(statearr_50130_52579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50119 === (7))){
var inst_50114 = (state_50118[(2)]);
var state_50118__$1 = state_50118;
var statearr_50131_52580 = state_50118__$1;
(statearr_50131_52580[(2)] = inst_50114);

(statearr_50131_52580[(1)] = (3));


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
});})(__52565,c__49796__auto___52569,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async))
;
return ((function (__52565,switch__49614__auto__,c__49796__auto___52569,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0 = (function (){
var statearr_50132 = [null,null,null,null,null,null,null];
(statearr_50132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__);

(statearr_50132[(1)] = (1));

return statearr_50132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1 = (function (state_50118){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50118);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50133){var ex__49618__auto__ = e50133;
var statearr_50134_52586 = state_50118;
(statearr_50134_52586[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50118[(4)]))){
var statearr_50135_52587 = state_50118;
(statearr_50135_52587[(1)] = cljs.core.first((state_50118[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52589 = state_50118;
state_50118 = G__52589;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = function(state_50118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1.call(this,state_50118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__;
})()
;})(__52565,switch__49614__auto__,c__49796__auto___52569,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async))
})();
var state__49798__auto__ = (function (){var statearr_50137 = f__49797__auto__();
(statearr_50137[(6)] = c__49796__auto___52569);

return statearr_50137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
});})(__52565,c__49796__auto___52569,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async))
);


break;
case "async":
var c__49796__auto___52593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52565,c__49796__auto___52593,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async){
return (function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = ((function (__52565,c__49796__auto___52593,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async){
return (function (state_50150){
var state_val_50151 = (state_50150[(1)]);
if((state_val_50151 === (1))){
var state_50150__$1 = state_50150;
var statearr_50153_52595 = state_50150__$1;
(statearr_50153_52595[(2)] = null);

(statearr_50153_52595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50151 === (2))){
var state_50150__$1 = state_50150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50150__$1,(4),jobs);
} else {
if((state_val_50151 === (3))){
var inst_50148 = (state_50150[(2)]);
var state_50150__$1 = state_50150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50150__$1,inst_50148);
} else {
if((state_val_50151 === (4))){
var inst_50140 = (state_50150[(2)]);
var inst_50141 = async(inst_50140);
var state_50150__$1 = state_50150;
if(cljs.core.truth_(inst_50141)){
var statearr_50154_52596 = state_50150__$1;
(statearr_50154_52596[(1)] = (5));

} else {
var statearr_50155_52597 = state_50150__$1;
(statearr_50155_52597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50151 === (5))){
var state_50150__$1 = state_50150;
var statearr_50156_52598 = state_50150__$1;
(statearr_50156_52598[(2)] = null);

(statearr_50156_52598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50151 === (6))){
var state_50150__$1 = state_50150;
var statearr_50157_52602 = state_50150__$1;
(statearr_50157_52602[(2)] = null);

(statearr_50157_52602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50151 === (7))){
var inst_50146 = (state_50150[(2)]);
var state_50150__$1 = state_50150;
var statearr_50158_52604 = state_50150__$1;
(statearr_50158_52604[(2)] = inst_50146);

(statearr_50158_52604[(1)] = (3));


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
});})(__52565,c__49796__auto___52593,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async))
;
return ((function (__52565,switch__49614__auto__,c__49796__auto___52593,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0 = (function (){
var statearr_50159 = [null,null,null,null,null,null,null];
(statearr_50159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__);

(statearr_50159[(1)] = (1));

return statearr_50159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1 = (function (state_50150){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50150);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50161){var ex__49618__auto__ = e50161;
var statearr_50165_52609 = state_50150;
(statearr_50165_52609[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50150[(4)]))){
var statearr_50166_52610 = state_50150;
(statearr_50166_52610[(1)] = cljs.core.first((state_50150[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52611 = state_50150;
state_50150 = G__52611;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = function(state_50150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1.call(this,state_50150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__;
})()
;})(__52565,switch__49614__auto__,c__49796__auto___52593,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async))
})();
var state__49798__auto__ = (function (){var statearr_50167 = f__49797__auto__();
(statearr_50167[(6)] = c__49796__auto___52593);

return statearr_50167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
});})(__52565,c__49796__auto___52593,G__50100_52566,G__50100_52567__$1,n__4741__auto___52564,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50100_52567__$1)].join('')));

}

var G__52612 = (__52565 + (1));
__52565 = G__52612;
continue;
} else {
}
break;
}

var c__49796__auto___52613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50193){
var state_val_50194 = (state_50193[(1)]);
if((state_val_50194 === (7))){
var inst_50189 = (state_50193[(2)]);
var state_50193__$1 = state_50193;
var statearr_50199_52617 = state_50193__$1;
(statearr_50199_52617[(2)] = inst_50189);

(statearr_50199_52617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (1))){
var state_50193__$1 = state_50193;
var statearr_50200_52619 = state_50193__$1;
(statearr_50200_52619[(2)] = null);

(statearr_50200_52619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (4))){
var inst_50171 = (state_50193[(7)]);
var inst_50171__$1 = (state_50193[(2)]);
var inst_50175 = (inst_50171__$1 == null);
var state_50193__$1 = (function (){var statearr_50207 = state_50193;
(statearr_50207[(7)] = inst_50171__$1);

return statearr_50207;
})();
if(cljs.core.truth_(inst_50175)){
var statearr_50208_52620 = state_50193__$1;
(statearr_50208_52620[(1)] = (5));

} else {
var statearr_50209_52621 = state_50193__$1;
(statearr_50209_52621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (6))){
var inst_50171 = (state_50193[(7)]);
var inst_50179 = (state_50193[(8)]);
var inst_50179__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50181 = [inst_50171,inst_50179__$1];
var inst_50182 = (new cljs.core.PersistentVector(null,2,(5),inst_50180,inst_50181,null));
var state_50193__$1 = (function (){var statearr_50210 = state_50193;
(statearr_50210[(8)] = inst_50179__$1);

return statearr_50210;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50193__$1,(8),jobs,inst_50182);
} else {
if((state_val_50194 === (3))){
var inst_50191 = (state_50193[(2)]);
var state_50193__$1 = state_50193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50193__$1,inst_50191);
} else {
if((state_val_50194 === (2))){
var state_50193__$1 = state_50193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50193__$1,(4),from);
} else {
if((state_val_50194 === (9))){
var inst_50186 = (state_50193[(2)]);
var state_50193__$1 = (function (){var statearr_50213 = state_50193;
(statearr_50213[(9)] = inst_50186);

return statearr_50213;
})();
var statearr_50214_52622 = state_50193__$1;
(statearr_50214_52622[(2)] = null);

(statearr_50214_52622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (5))){
var inst_50177 = cljs.core.async.close_BANG_(jobs);
var state_50193__$1 = state_50193;
var statearr_50215_52624 = state_50193__$1;
(statearr_50215_52624[(2)] = inst_50177);

(statearr_50215_52624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (8))){
var inst_50179 = (state_50193[(8)]);
var inst_50184 = (state_50193[(2)]);
var state_50193__$1 = (function (){var statearr_50221 = state_50193;
(statearr_50221[(10)] = inst_50184);

return statearr_50221;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50193__$1,(9),results,inst_50179);
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
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0 = (function (){
var statearr_50223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__);

(statearr_50223[(1)] = (1));

return statearr_50223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1 = (function (state_50193){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50193);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50224){var ex__49618__auto__ = e50224;
var statearr_50225_52630 = state_50193;
(statearr_50225_52630[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50193[(4)]))){
var statearr_50226_52632 = state_50193;
(statearr_50226_52632[(1)] = cljs.core.first((state_50193[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52633 = state_50193;
state_50193 = G__52633;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = function(state_50193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1.call(this,state_50193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50232 = f__49797__auto__();
(statearr_50232[(6)] = c__49796__auto___52613);

return statearr_50232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));


var c__49796__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50277){
var state_val_50278 = (state_50277[(1)]);
if((state_val_50278 === (7))){
var inst_50273 = (state_50277[(2)]);
var state_50277__$1 = state_50277;
var statearr_50279_52636 = state_50277__$1;
(statearr_50279_52636[(2)] = inst_50273);

(statearr_50279_52636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (20))){
var state_50277__$1 = state_50277;
var statearr_50280_52637 = state_50277__$1;
(statearr_50280_52637[(2)] = null);

(statearr_50280_52637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (1))){
var state_50277__$1 = state_50277;
var statearr_50284_52640 = state_50277__$1;
(statearr_50284_52640[(2)] = null);

(statearr_50284_52640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (4))){
var inst_50238 = (state_50277[(7)]);
var inst_50238__$1 = (state_50277[(2)]);
var inst_50239 = (inst_50238__$1 == null);
var state_50277__$1 = (function (){var statearr_50285 = state_50277;
(statearr_50285[(7)] = inst_50238__$1);

return statearr_50285;
})();
if(cljs.core.truth_(inst_50239)){
var statearr_50286_52641 = state_50277__$1;
(statearr_50286_52641[(1)] = (5));

} else {
var statearr_50287_52642 = state_50277__$1;
(statearr_50287_52642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (15))){
var inst_50255 = (state_50277[(8)]);
var state_50277__$1 = state_50277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50277__$1,(18),to,inst_50255);
} else {
if((state_val_50278 === (21))){
var inst_50268 = (state_50277[(2)]);
var state_50277__$1 = state_50277;
var statearr_50288_52645 = state_50277__$1;
(statearr_50288_52645[(2)] = inst_50268);

(statearr_50288_52645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (13))){
var inst_50270 = (state_50277[(2)]);
var state_50277__$1 = (function (){var statearr_50290 = state_50277;
(statearr_50290[(9)] = inst_50270);

return statearr_50290;
})();
var statearr_50293_52647 = state_50277__$1;
(statearr_50293_52647[(2)] = null);

(statearr_50293_52647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (6))){
var inst_50238 = (state_50277[(7)]);
var state_50277__$1 = state_50277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50277__$1,(11),inst_50238);
} else {
if((state_val_50278 === (17))){
var inst_50263 = (state_50277[(2)]);
var state_50277__$1 = state_50277;
if(cljs.core.truth_(inst_50263)){
var statearr_50294_52648 = state_50277__$1;
(statearr_50294_52648[(1)] = (19));

} else {
var statearr_50295_52649 = state_50277__$1;
(statearr_50295_52649[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (3))){
var inst_50275 = (state_50277[(2)]);
var state_50277__$1 = state_50277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50277__$1,inst_50275);
} else {
if((state_val_50278 === (12))){
var inst_50252 = (state_50277[(10)]);
var state_50277__$1 = state_50277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50277__$1,(14),inst_50252);
} else {
if((state_val_50278 === (2))){
var state_50277__$1 = state_50277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50277__$1,(4),results);
} else {
if((state_val_50278 === (19))){
var state_50277__$1 = state_50277;
var statearr_50296_52652 = state_50277__$1;
(statearr_50296_52652[(2)] = null);

(statearr_50296_52652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (11))){
var inst_50252 = (state_50277[(2)]);
var state_50277__$1 = (function (){var statearr_50297 = state_50277;
(statearr_50297[(10)] = inst_50252);

return statearr_50297;
})();
var statearr_50298_52653 = state_50277__$1;
(statearr_50298_52653[(2)] = null);

(statearr_50298_52653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (9))){
var state_50277__$1 = state_50277;
var statearr_50299_52655 = state_50277__$1;
(statearr_50299_52655[(2)] = null);

(statearr_50299_52655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (5))){
var state_50277__$1 = state_50277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50300_52658 = state_50277__$1;
(statearr_50300_52658[(1)] = (8));

} else {
var statearr_50301_52659 = state_50277__$1;
(statearr_50301_52659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (14))){
var inst_50255 = (state_50277[(8)]);
var inst_50257 = (state_50277[(11)]);
var inst_50255__$1 = (state_50277[(2)]);
var inst_50256 = (inst_50255__$1 == null);
var inst_50257__$1 = cljs.core.not(inst_50256);
var state_50277__$1 = (function (){var statearr_50302 = state_50277;
(statearr_50302[(8)] = inst_50255__$1);

(statearr_50302[(11)] = inst_50257__$1);

return statearr_50302;
})();
if(inst_50257__$1){
var statearr_50304_52660 = state_50277__$1;
(statearr_50304_52660[(1)] = (15));

} else {
var statearr_50307_52662 = state_50277__$1;
(statearr_50307_52662[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (16))){
var inst_50257 = (state_50277[(11)]);
var state_50277__$1 = state_50277;
var statearr_50308_52665 = state_50277__$1;
(statearr_50308_52665[(2)] = inst_50257);

(statearr_50308_52665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (10))){
var inst_50248 = (state_50277[(2)]);
var state_50277__$1 = state_50277;
var statearr_50309_52667 = state_50277__$1;
(statearr_50309_52667[(2)] = inst_50248);

(statearr_50309_52667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (18))){
var inst_50260 = (state_50277[(2)]);
var state_50277__$1 = state_50277;
var statearr_50310_52668 = state_50277__$1;
(statearr_50310_52668[(2)] = inst_50260);

(statearr_50310_52668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50278 === (8))){
var inst_50242 = cljs.core.async.close_BANG_(to);
var state_50277__$1 = state_50277;
var statearr_50311_52670 = state_50277__$1;
(statearr_50311_52670[(2)] = inst_50242);

(statearr_50311_52670[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0 = (function (){
var statearr_50315 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__);

(statearr_50315[(1)] = (1));

return statearr_50315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1 = (function (state_50277){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50277);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50316){var ex__49618__auto__ = e50316;
var statearr_50317_52671 = state_50277;
(statearr_50317_52671[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50277[(4)]))){
var statearr_50318_52673 = state_50277;
(statearr_50318_52673[(1)] = cljs.core.first((state_50277[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52676 = state_50277;
state_50277 = G__52676;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__ = function(state_50277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1.call(this,state_50277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49615__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50319 = f__49797__auto__();
(statearr_50319[(6)] = c__49796__auto__);

return statearr_50319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));

return c__49796__auto__;
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
var G__50322 = arguments.length;
switch (G__50322) {
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
var G__50325 = arguments.length;
switch (G__50325) {
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
var G__50329 = arguments.length;
switch (G__50329) {
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
var c__49796__auto___52690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50369){
var state_val_50370 = (state_50369[(1)]);
if((state_val_50370 === (7))){
var inst_50365 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
var statearr_50371_52692 = state_50369__$1;
(statearr_50371_52692[(2)] = inst_50365);

(statearr_50371_52692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (1))){
var state_50369__$1 = state_50369;
var statearr_50372_52693 = state_50369__$1;
(statearr_50372_52693[(2)] = null);

(statearr_50372_52693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (4))){
var inst_50343 = (state_50369[(7)]);
var inst_50343__$1 = (state_50369[(2)]);
var inst_50344 = (inst_50343__$1 == null);
var state_50369__$1 = (function (){var statearr_50373 = state_50369;
(statearr_50373[(7)] = inst_50343__$1);

return statearr_50373;
})();
if(cljs.core.truth_(inst_50344)){
var statearr_50374_52694 = state_50369__$1;
(statearr_50374_52694[(1)] = (5));

} else {
var statearr_50375_52697 = state_50369__$1;
(statearr_50375_52697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (13))){
var state_50369__$1 = state_50369;
var statearr_50376_52700 = state_50369__$1;
(statearr_50376_52700[(2)] = null);

(statearr_50376_52700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (6))){
var inst_50343 = (state_50369[(7)]);
var inst_50352 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50343) : p.call(null,inst_50343));
var state_50369__$1 = state_50369;
if(cljs.core.truth_(inst_50352)){
var statearr_50377_52703 = state_50369__$1;
(statearr_50377_52703[(1)] = (9));

} else {
var statearr_50381_52705 = state_50369__$1;
(statearr_50381_52705[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (3))){
var inst_50367 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50369__$1,inst_50367);
} else {
if((state_val_50370 === (12))){
var state_50369__$1 = state_50369;
var statearr_50382_52707 = state_50369__$1;
(statearr_50382_52707[(2)] = null);

(statearr_50382_52707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (2))){
var state_50369__$1 = state_50369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50369__$1,(4),ch);
} else {
if((state_val_50370 === (11))){
var inst_50343 = (state_50369[(7)]);
var inst_50356 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50369__$1,(8),inst_50356,inst_50343);
} else {
if((state_val_50370 === (9))){
var state_50369__$1 = state_50369;
var statearr_50389_52709 = state_50369__$1;
(statearr_50389_52709[(2)] = tc);

(statearr_50389_52709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (5))){
var inst_50346 = cljs.core.async.close_BANG_(tc);
var inst_50350 = cljs.core.async.close_BANG_(fc);
var state_50369__$1 = (function (){var statearr_50390 = state_50369;
(statearr_50390[(8)] = inst_50346);

return statearr_50390;
})();
var statearr_50391_52710 = state_50369__$1;
(statearr_50391_52710[(2)] = inst_50350);

(statearr_50391_52710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (14))){
var inst_50363 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
var statearr_50395_52711 = state_50369__$1;
(statearr_50395_52711[(2)] = inst_50363);

(statearr_50395_52711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (10))){
var state_50369__$1 = state_50369;
var statearr_50397_52714 = state_50369__$1;
(statearr_50397_52714[(2)] = fc);

(statearr_50397_52714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (8))){
var inst_50358 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
if(cljs.core.truth_(inst_50358)){
var statearr_50398_52716 = state_50369__$1;
(statearr_50398_52716[(1)] = (12));

} else {
var statearr_50399_52717 = state_50369__$1;
(statearr_50399_52717[(1)] = (13));

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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_50402 = [null,null,null,null,null,null,null,null,null];
(statearr_50402[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_50402[(1)] = (1));

return statearr_50402;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_50369){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50369);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50403){var ex__49618__auto__ = e50403;
var statearr_50404_52719 = state_50369;
(statearr_50404_52719[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50369[(4)]))){
var statearr_50405_52722 = state_50369;
(statearr_50405_52722[(1)] = cljs.core.first((state_50369[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52724 = state_50369;
state_50369 = G__52724;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_50369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_50369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50411 = f__49797__auto__();
(statearr_50411[(6)] = c__49796__auto___52690);

return statearr_50411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
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
var c__49796__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50435){
var state_val_50436 = (state_50435[(1)]);
if((state_val_50436 === (7))){
var inst_50431 = (state_50435[(2)]);
var state_50435__$1 = state_50435;
var statearr_50437_52728 = state_50435__$1;
(statearr_50437_52728[(2)] = inst_50431);

(statearr_50437_52728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50436 === (1))){
var inst_50414 = init;
var inst_50415 = inst_50414;
var state_50435__$1 = (function (){var statearr_50440 = state_50435;
(statearr_50440[(7)] = inst_50415);

return statearr_50440;
})();
var statearr_50443_52729 = state_50435__$1;
(statearr_50443_52729[(2)] = null);

(statearr_50443_52729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50436 === (4))){
var inst_50418 = (state_50435[(8)]);
var inst_50418__$1 = (state_50435[(2)]);
var inst_50419 = (inst_50418__$1 == null);
var state_50435__$1 = (function (){var statearr_50444 = state_50435;
(statearr_50444[(8)] = inst_50418__$1);

return statearr_50444;
})();
if(cljs.core.truth_(inst_50419)){
var statearr_50445_52730 = state_50435__$1;
(statearr_50445_52730[(1)] = (5));

} else {
var statearr_50446_52731 = state_50435__$1;
(statearr_50446_52731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50436 === (6))){
var inst_50415 = (state_50435[(7)]);
var inst_50418 = (state_50435[(8)]);
var inst_50422 = (state_50435[(9)]);
var inst_50422__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50415,inst_50418) : f.call(null,inst_50415,inst_50418));
var inst_50423 = cljs.core.reduced_QMARK_(inst_50422__$1);
var state_50435__$1 = (function (){var statearr_50448 = state_50435;
(statearr_50448[(9)] = inst_50422__$1);

return statearr_50448;
})();
if(inst_50423){
var statearr_50449_52739 = state_50435__$1;
(statearr_50449_52739[(1)] = (8));

} else {
var statearr_50450_52740 = state_50435__$1;
(statearr_50450_52740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50436 === (3))){
var inst_50433 = (state_50435[(2)]);
var state_50435__$1 = state_50435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50435__$1,inst_50433);
} else {
if((state_val_50436 === (2))){
var state_50435__$1 = state_50435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50435__$1,(4),ch);
} else {
if((state_val_50436 === (9))){
var inst_50422 = (state_50435[(9)]);
var inst_50415 = inst_50422;
var state_50435__$1 = (function (){var statearr_50452 = state_50435;
(statearr_50452[(7)] = inst_50415);

return statearr_50452;
})();
var statearr_50455_52743 = state_50435__$1;
(statearr_50455_52743[(2)] = null);

(statearr_50455_52743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50436 === (5))){
var inst_50415 = (state_50435[(7)]);
var state_50435__$1 = state_50435;
var statearr_50456_52745 = state_50435__$1;
(statearr_50456_52745[(2)] = inst_50415);

(statearr_50456_52745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50436 === (10))){
var inst_50429 = (state_50435[(2)]);
var state_50435__$1 = state_50435;
var statearr_50457_52746 = state_50435__$1;
(statearr_50457_52746[(2)] = inst_50429);

(statearr_50457_52746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50436 === (8))){
var inst_50422 = (state_50435[(9)]);
var inst_50425 = cljs.core.deref(inst_50422);
var state_50435__$1 = state_50435;
var statearr_50458_52747 = state_50435__$1;
(statearr_50458_52747[(2)] = inst_50425);

(statearr_50458_52747[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__49615__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49615__auto____0 = (function (){
var statearr_50459 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50459[(0)] = cljs$core$async$reduce_$_state_machine__49615__auto__);

(statearr_50459[(1)] = (1));

return statearr_50459;
});
var cljs$core$async$reduce_$_state_machine__49615__auto____1 = (function (state_50435){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50435);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50460){var ex__49618__auto__ = e50460;
var statearr_50461_52754 = state_50435;
(statearr_50461_52754[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50435[(4)]))){
var statearr_50462_52756 = state_50435;
(statearr_50462_52756[(1)] = cljs.core.first((state_50435[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52758 = state_50435;
state_50435 = G__52758;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49615__auto__ = function(state_50435){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49615__auto____1.call(this,state_50435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49615__auto____0;
cljs$core$async$reduce_$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49615__auto____1;
return cljs$core$async$reduce_$_state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50466 = f__49797__auto__();
(statearr_50466[(6)] = c__49796__auto__);

return statearr_50466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));

return c__49796__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49796__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50472){
var state_val_50473 = (state_50472[(1)]);
if((state_val_50473 === (1))){
var inst_50467 = cljs.core.async.reduce(f__$1,init,ch);
var state_50472__$1 = state_50472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50472__$1,(2),inst_50467);
} else {
if((state_val_50473 === (2))){
var inst_50469 = (state_50472[(2)]);
var inst_50470 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50469) : f__$1.call(null,inst_50469));
var state_50472__$1 = state_50472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50472__$1,inst_50470);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49615__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49615__auto____0 = (function (){
var statearr_50481 = [null,null,null,null,null,null,null];
(statearr_50481[(0)] = cljs$core$async$transduce_$_state_machine__49615__auto__);

(statearr_50481[(1)] = (1));

return statearr_50481;
});
var cljs$core$async$transduce_$_state_machine__49615__auto____1 = (function (state_50472){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50472);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50483){var ex__49618__auto__ = e50483;
var statearr_50484_52770 = state_50472;
(statearr_50484_52770[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50472[(4)]))){
var statearr_50489_52771 = state_50472;
(statearr_50489_52771[(1)] = cljs.core.first((state_50472[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52772 = state_50472;
state_50472 = G__52772;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49615__auto__ = function(state_50472){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49615__auto____1.call(this,state_50472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49615__auto____0;
cljs$core$async$transduce_$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49615__auto____1;
return cljs$core$async$transduce_$_state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50502 = f__49797__auto__();
(statearr_50502[(6)] = c__49796__auto__);

return statearr_50502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));

return c__49796__auto__;
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
var G__50505 = arguments.length;
switch (G__50505) {
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
var c__49796__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50540){
var state_val_50541 = (state_50540[(1)]);
if((state_val_50541 === (7))){
var inst_50522 = (state_50540[(2)]);
var state_50540__$1 = state_50540;
var statearr_50548_52781 = state_50540__$1;
(statearr_50548_52781[(2)] = inst_50522);

(statearr_50548_52781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (1))){
var inst_50516 = cljs.core.seq(coll);
var inst_50517 = inst_50516;
var state_50540__$1 = (function (){var statearr_50550 = state_50540;
(statearr_50550[(7)] = inst_50517);

return statearr_50550;
})();
var statearr_50551_52782 = state_50540__$1;
(statearr_50551_52782[(2)] = null);

(statearr_50551_52782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (4))){
var inst_50517 = (state_50540[(7)]);
var inst_50520 = cljs.core.first(inst_50517);
var state_50540__$1 = state_50540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50540__$1,(7),ch,inst_50520);
} else {
if((state_val_50541 === (13))){
var inst_50534 = (state_50540[(2)]);
var state_50540__$1 = state_50540;
var statearr_50552_52783 = state_50540__$1;
(statearr_50552_52783[(2)] = inst_50534);

(statearr_50552_52783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (6))){
var inst_50525 = (state_50540[(2)]);
var state_50540__$1 = state_50540;
if(cljs.core.truth_(inst_50525)){
var statearr_50553_52784 = state_50540__$1;
(statearr_50553_52784[(1)] = (8));

} else {
var statearr_50554_52785 = state_50540__$1;
(statearr_50554_52785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (3))){
var inst_50538 = (state_50540[(2)]);
var state_50540__$1 = state_50540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50540__$1,inst_50538);
} else {
if((state_val_50541 === (12))){
var state_50540__$1 = state_50540;
var statearr_50557_52786 = state_50540__$1;
(statearr_50557_52786[(2)] = null);

(statearr_50557_52786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (2))){
var inst_50517 = (state_50540[(7)]);
var state_50540__$1 = state_50540;
if(cljs.core.truth_(inst_50517)){
var statearr_50558_52790 = state_50540__$1;
(statearr_50558_52790[(1)] = (4));

} else {
var statearr_50559_52791 = state_50540__$1;
(statearr_50559_52791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (11))){
var inst_50531 = cljs.core.async.close_BANG_(ch);
var state_50540__$1 = state_50540;
var statearr_50563_52793 = state_50540__$1;
(statearr_50563_52793[(2)] = inst_50531);

(statearr_50563_52793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (9))){
var state_50540__$1 = state_50540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50564_52794 = state_50540__$1;
(statearr_50564_52794[(1)] = (11));

} else {
var statearr_50565_52795 = state_50540__$1;
(statearr_50565_52795[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (5))){
var inst_50517 = (state_50540[(7)]);
var state_50540__$1 = state_50540;
var statearr_50566_52798 = state_50540__$1;
(statearr_50566_52798[(2)] = inst_50517);

(statearr_50566_52798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (10))){
var inst_50536 = (state_50540[(2)]);
var state_50540__$1 = state_50540;
var statearr_50567_52799 = state_50540__$1;
(statearr_50567_52799[(2)] = inst_50536);

(statearr_50567_52799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50541 === (8))){
var inst_50517 = (state_50540[(7)]);
var inst_50527 = cljs.core.next(inst_50517);
var inst_50517__$1 = inst_50527;
var state_50540__$1 = (function (){var statearr_50568 = state_50540;
(statearr_50568[(7)] = inst_50517__$1);

return statearr_50568;
})();
var statearr_50569_52805 = state_50540__$1;
(statearr_50569_52805[(2)] = null);

(statearr_50569_52805[(1)] = (2));


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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_50570 = [null,null,null,null,null,null,null,null];
(statearr_50570[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_50570[(1)] = (1));

return statearr_50570;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_50540){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50540);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50572){var ex__49618__auto__ = e50572;
var statearr_50573_52809 = state_50540;
(statearr_50573_52809[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50540[(4)]))){
var statearr_50574_52810 = state_50540;
(statearr_50574_52810[(1)] = cljs.core.first((state_50540[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52811 = state_50540;
state_50540 = G__52811;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_50540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_50540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50575 = f__49797__auto__();
(statearr_50575[(6)] = c__49796__auto__);

return statearr_50575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));

return c__49796__auto__;
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
var G__50578 = arguments.length;
switch (G__50578) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_52818 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52818(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52822 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52822(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52823 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52823(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52827 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52827(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50584 = (function (ch,cs,meta50585){
this.ch = ch;
this.cs = cs;
this.meta50585 = meta50585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50586,meta50585__$1){
var self__ = this;
var _50586__$1 = this;
return (new cljs.core.async.t_cljs$core$async50584(self__.ch,self__.cs,meta50585__$1));
}));

(cljs.core.async.t_cljs$core$async50584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50586){
var self__ = this;
var _50586__$1 = this;
return self__.meta50585;
}));

(cljs.core.async.t_cljs$core$async50584.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50584.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50584.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50584.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50584.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50585","meta50585",1312056173,null)], null);
}));

(cljs.core.async.t_cljs$core$async50584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50584");

(cljs.core.async.t_cljs$core$async50584.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50584.
 */
cljs.core.async.__GT_t_cljs$core$async50584 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50584(ch__$1,cs__$1,meta50585){
return (new cljs.core.async.t_cljs$core$async50584(ch__$1,cs__$1,meta50585));
});

}

return (new cljs.core.async.t_cljs$core$async50584(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__49796__auto___52831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_50749){
var state_val_50750 = (state_50749[(1)]);
if((state_val_50750 === (7))){
var inst_50745 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50752_52832 = state_50749__$1;
(statearr_50752_52832[(2)] = inst_50745);

(statearr_50752_52832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (20))){
var inst_50632 = (state_50749[(7)]);
var inst_50654 = cljs.core.first(inst_50632);
var inst_50656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50654,(0),null);
var inst_50657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50654,(1),null);
var state_50749__$1 = (function (){var statearr_50753 = state_50749;
(statearr_50753[(8)] = inst_50656);

return statearr_50753;
})();
if(cljs.core.truth_(inst_50657)){
var statearr_50754_52833 = state_50749__$1;
(statearr_50754_52833[(1)] = (22));

} else {
var statearr_50755_52834 = state_50749__$1;
(statearr_50755_52834[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (27))){
var inst_50598 = (state_50749[(9)]);
var inst_50688 = (state_50749[(10)]);
var inst_50695 = (state_50749[(11)]);
var inst_50690 = (state_50749[(12)]);
var inst_50695__$1 = cljs.core._nth(inst_50688,inst_50690);
var inst_50696 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50695__$1,inst_50598,done);
var state_50749__$1 = (function (){var statearr_50762 = state_50749;
(statearr_50762[(11)] = inst_50695__$1);

return statearr_50762;
})();
if(cljs.core.truth_(inst_50696)){
var statearr_50763_52838 = state_50749__$1;
(statearr_50763_52838[(1)] = (30));

} else {
var statearr_50764_52839 = state_50749__$1;
(statearr_50764_52839[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (1))){
var state_50749__$1 = state_50749;
var statearr_50769_52840 = state_50749__$1;
(statearr_50769_52840[(2)] = null);

(statearr_50769_52840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (24))){
var inst_50632 = (state_50749[(7)]);
var inst_50662 = (state_50749[(2)]);
var inst_50663 = cljs.core.next(inst_50632);
var inst_50608 = inst_50663;
var inst_50609 = null;
var inst_50610 = (0);
var inst_50611 = (0);
var state_50749__$1 = (function (){var statearr_50770 = state_50749;
(statearr_50770[(13)] = inst_50610);

(statearr_50770[(14)] = inst_50609);

(statearr_50770[(15)] = inst_50662);

(statearr_50770[(16)] = inst_50608);

(statearr_50770[(17)] = inst_50611);

return statearr_50770;
})();
var statearr_50771_52841 = state_50749__$1;
(statearr_50771_52841[(2)] = null);

(statearr_50771_52841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (39))){
var state_50749__$1 = state_50749;
var statearr_50776_52845 = state_50749__$1;
(statearr_50776_52845[(2)] = null);

(statearr_50776_52845[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (4))){
var inst_50598 = (state_50749[(9)]);
var inst_50598__$1 = (state_50749[(2)]);
var inst_50599 = (inst_50598__$1 == null);
var state_50749__$1 = (function (){var statearr_50777 = state_50749;
(statearr_50777[(9)] = inst_50598__$1);

return statearr_50777;
})();
if(cljs.core.truth_(inst_50599)){
var statearr_50778_52846 = state_50749__$1;
(statearr_50778_52846[(1)] = (5));

} else {
var statearr_50779_52847 = state_50749__$1;
(statearr_50779_52847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (15))){
var inst_50610 = (state_50749[(13)]);
var inst_50609 = (state_50749[(14)]);
var inst_50608 = (state_50749[(16)]);
var inst_50611 = (state_50749[(17)]);
var inst_50627 = (state_50749[(2)]);
var inst_50629 = (inst_50611 + (1));
var tmp50773 = inst_50610;
var tmp50774 = inst_50609;
var tmp50775 = inst_50608;
var inst_50608__$1 = tmp50775;
var inst_50609__$1 = tmp50774;
var inst_50610__$1 = tmp50773;
var inst_50611__$1 = inst_50629;
var state_50749__$1 = (function (){var statearr_50785 = state_50749;
(statearr_50785[(13)] = inst_50610__$1);

(statearr_50785[(18)] = inst_50627);

(statearr_50785[(14)] = inst_50609__$1);

(statearr_50785[(16)] = inst_50608__$1);

(statearr_50785[(17)] = inst_50611__$1);

return statearr_50785;
})();
var statearr_50786_52849 = state_50749__$1;
(statearr_50786_52849[(2)] = null);

(statearr_50786_52849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (21))){
var inst_50666 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50790_52850 = state_50749__$1;
(statearr_50790_52850[(2)] = inst_50666);

(statearr_50790_52850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (31))){
var inst_50695 = (state_50749[(11)]);
var inst_50699 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50695);
var state_50749__$1 = state_50749;
var statearr_50791_52851 = state_50749__$1;
(statearr_50791_52851[(2)] = inst_50699);

(statearr_50791_52851[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (32))){
var inst_50688 = (state_50749[(10)]);
var inst_50689 = (state_50749[(19)]);
var inst_50690 = (state_50749[(12)]);
var inst_50687 = (state_50749[(20)]);
var inst_50701 = (state_50749[(2)]);
var inst_50702 = (inst_50690 + (1));
var tmp50787 = inst_50688;
var tmp50788 = inst_50689;
var tmp50789 = inst_50687;
var inst_50687__$1 = tmp50789;
var inst_50688__$1 = tmp50787;
var inst_50689__$1 = tmp50788;
var inst_50690__$1 = inst_50702;
var state_50749__$1 = (function (){var statearr_50792 = state_50749;
(statearr_50792[(10)] = inst_50688__$1);

(statearr_50792[(21)] = inst_50701);

(statearr_50792[(19)] = inst_50689__$1);

(statearr_50792[(12)] = inst_50690__$1);

(statearr_50792[(20)] = inst_50687__$1);

return statearr_50792;
})();
var statearr_50796_52852 = state_50749__$1;
(statearr_50796_52852[(2)] = null);

(statearr_50796_52852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (40))){
var inst_50718 = (state_50749[(22)]);
var inst_50722 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50718);
var state_50749__$1 = state_50749;
var statearr_50797_52853 = state_50749__$1;
(statearr_50797_52853[(2)] = inst_50722);

(statearr_50797_52853[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (33))){
var inst_50705 = (state_50749[(23)]);
var inst_50707 = cljs.core.chunked_seq_QMARK_(inst_50705);
var state_50749__$1 = state_50749;
if(inst_50707){
var statearr_50798_52854 = state_50749__$1;
(statearr_50798_52854[(1)] = (36));

} else {
var statearr_50803_52855 = state_50749__$1;
(statearr_50803_52855[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (13))){
var inst_50621 = (state_50749[(24)]);
var inst_50624 = cljs.core.async.close_BANG_(inst_50621);
var state_50749__$1 = state_50749;
var statearr_50804_52856 = state_50749__$1;
(statearr_50804_52856[(2)] = inst_50624);

(statearr_50804_52856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (22))){
var inst_50656 = (state_50749[(8)]);
var inst_50659 = cljs.core.async.close_BANG_(inst_50656);
var state_50749__$1 = state_50749;
var statearr_50805_52857 = state_50749__$1;
(statearr_50805_52857[(2)] = inst_50659);

(statearr_50805_52857[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (36))){
var inst_50705 = (state_50749[(23)]);
var inst_50709 = cljs.core.chunk_first(inst_50705);
var inst_50710 = cljs.core.chunk_rest(inst_50705);
var inst_50711 = cljs.core.count(inst_50709);
var inst_50687 = inst_50710;
var inst_50688 = inst_50709;
var inst_50689 = inst_50711;
var inst_50690 = (0);
var state_50749__$1 = (function (){var statearr_50806 = state_50749;
(statearr_50806[(10)] = inst_50688);

(statearr_50806[(19)] = inst_50689);

(statearr_50806[(12)] = inst_50690);

(statearr_50806[(20)] = inst_50687);

return statearr_50806;
})();
var statearr_50807_52858 = state_50749__$1;
(statearr_50807_52858[(2)] = null);

(statearr_50807_52858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (41))){
var inst_50705 = (state_50749[(23)]);
var inst_50724 = (state_50749[(2)]);
var inst_50725 = cljs.core.next(inst_50705);
var inst_50687 = inst_50725;
var inst_50688 = null;
var inst_50689 = (0);
var inst_50690 = (0);
var state_50749__$1 = (function (){var statearr_50808 = state_50749;
(statearr_50808[(10)] = inst_50688);

(statearr_50808[(19)] = inst_50689);

(statearr_50808[(12)] = inst_50690);

(statearr_50808[(20)] = inst_50687);

(statearr_50808[(25)] = inst_50724);

return statearr_50808;
})();
var statearr_50809_52860 = state_50749__$1;
(statearr_50809_52860[(2)] = null);

(statearr_50809_52860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (43))){
var state_50749__$1 = state_50749;
var statearr_50810_52866 = state_50749__$1;
(statearr_50810_52866[(2)] = null);

(statearr_50810_52866[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (29))){
var inst_50733 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50811_52867 = state_50749__$1;
(statearr_50811_52867[(2)] = inst_50733);

(statearr_50811_52867[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (44))){
var inst_50742 = (state_50749[(2)]);
var state_50749__$1 = (function (){var statearr_50812 = state_50749;
(statearr_50812[(26)] = inst_50742);

return statearr_50812;
})();
var statearr_50813_52869 = state_50749__$1;
(statearr_50813_52869[(2)] = null);

(statearr_50813_52869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (6))){
var inst_50679 = (state_50749[(27)]);
var inst_50678 = cljs.core.deref(cs);
var inst_50679__$1 = cljs.core.keys(inst_50678);
var inst_50680 = cljs.core.count(inst_50679__$1);
var inst_50681 = cljs.core.reset_BANG_(dctr,inst_50680);
var inst_50686 = cljs.core.seq(inst_50679__$1);
var inst_50687 = inst_50686;
var inst_50688 = null;
var inst_50689 = (0);
var inst_50690 = (0);
var state_50749__$1 = (function (){var statearr_50817 = state_50749;
(statearr_50817[(10)] = inst_50688);

(statearr_50817[(28)] = inst_50681);

(statearr_50817[(27)] = inst_50679__$1);

(statearr_50817[(19)] = inst_50689);

(statearr_50817[(12)] = inst_50690);

(statearr_50817[(20)] = inst_50687);

return statearr_50817;
})();
var statearr_50818_52870 = state_50749__$1;
(statearr_50818_52870[(2)] = null);

(statearr_50818_52870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (28))){
var inst_50687 = (state_50749[(20)]);
var inst_50705 = (state_50749[(23)]);
var inst_50705__$1 = cljs.core.seq(inst_50687);
var state_50749__$1 = (function (){var statearr_50819 = state_50749;
(statearr_50819[(23)] = inst_50705__$1);

return statearr_50819;
})();
if(inst_50705__$1){
var statearr_50820_52872 = state_50749__$1;
(statearr_50820_52872[(1)] = (33));

} else {
var statearr_50821_52873 = state_50749__$1;
(statearr_50821_52873[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (25))){
var inst_50689 = (state_50749[(19)]);
var inst_50690 = (state_50749[(12)]);
var inst_50692 = (inst_50690 < inst_50689);
var inst_50693 = inst_50692;
var state_50749__$1 = state_50749;
if(cljs.core.truth_(inst_50693)){
var statearr_50822_52874 = state_50749__$1;
(statearr_50822_52874[(1)] = (27));

} else {
var statearr_50823_52875 = state_50749__$1;
(statearr_50823_52875[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (34))){
var state_50749__$1 = state_50749;
var statearr_50824_52876 = state_50749__$1;
(statearr_50824_52876[(2)] = null);

(statearr_50824_52876[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (17))){
var state_50749__$1 = state_50749;
var statearr_50825_52877 = state_50749__$1;
(statearr_50825_52877[(2)] = null);

(statearr_50825_52877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (3))){
var inst_50747 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50749__$1,inst_50747);
} else {
if((state_val_50750 === (12))){
var inst_50674 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50827_52882 = state_50749__$1;
(statearr_50827_52882[(2)] = inst_50674);

(statearr_50827_52882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (2))){
var state_50749__$1 = state_50749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50749__$1,(4),ch);
} else {
if((state_val_50750 === (23))){
var state_50749__$1 = state_50749;
var statearr_50831_52883 = state_50749__$1;
(statearr_50831_52883[(2)] = null);

(statearr_50831_52883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (35))){
var inst_50731 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50833_52884 = state_50749__$1;
(statearr_50833_52884[(2)] = inst_50731);

(statearr_50833_52884[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (19))){
var inst_50632 = (state_50749[(7)]);
var inst_50636 = cljs.core.chunk_first(inst_50632);
var inst_50637 = cljs.core.chunk_rest(inst_50632);
var inst_50638 = cljs.core.count(inst_50636);
var inst_50608 = inst_50637;
var inst_50609 = inst_50636;
var inst_50610 = inst_50638;
var inst_50611 = (0);
var state_50749__$1 = (function (){var statearr_50834 = state_50749;
(statearr_50834[(13)] = inst_50610);

(statearr_50834[(14)] = inst_50609);

(statearr_50834[(16)] = inst_50608);

(statearr_50834[(17)] = inst_50611);

return statearr_50834;
})();
var statearr_50835_52885 = state_50749__$1;
(statearr_50835_52885[(2)] = null);

(statearr_50835_52885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (11))){
var inst_50632 = (state_50749[(7)]);
var inst_50608 = (state_50749[(16)]);
var inst_50632__$1 = cljs.core.seq(inst_50608);
var state_50749__$1 = (function (){var statearr_50836 = state_50749;
(statearr_50836[(7)] = inst_50632__$1);

return statearr_50836;
})();
if(inst_50632__$1){
var statearr_50837_52886 = state_50749__$1;
(statearr_50837_52886[(1)] = (16));

} else {
var statearr_50838_52887 = state_50749__$1;
(statearr_50838_52887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (9))){
var inst_50676 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50839_52888 = state_50749__$1;
(statearr_50839_52888[(2)] = inst_50676);

(statearr_50839_52888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (5))){
var inst_50605 = cljs.core.deref(cs);
var inst_50607 = cljs.core.seq(inst_50605);
var inst_50608 = inst_50607;
var inst_50609 = null;
var inst_50610 = (0);
var inst_50611 = (0);
var state_50749__$1 = (function (){var statearr_50840 = state_50749;
(statearr_50840[(13)] = inst_50610);

(statearr_50840[(14)] = inst_50609);

(statearr_50840[(16)] = inst_50608);

(statearr_50840[(17)] = inst_50611);

return statearr_50840;
})();
var statearr_50841_52889 = state_50749__$1;
(statearr_50841_52889[(2)] = null);

(statearr_50841_52889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (14))){
var state_50749__$1 = state_50749;
var statearr_50842_52890 = state_50749__$1;
(statearr_50842_52890[(2)] = null);

(statearr_50842_52890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (45))){
var inst_50739 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50843_52892 = state_50749__$1;
(statearr_50843_52892[(2)] = inst_50739);

(statearr_50843_52892[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (26))){
var inst_50679 = (state_50749[(27)]);
var inst_50735 = (state_50749[(2)]);
var inst_50736 = cljs.core.seq(inst_50679);
var state_50749__$1 = (function (){var statearr_50844 = state_50749;
(statearr_50844[(29)] = inst_50735);

return statearr_50844;
})();
if(inst_50736){
var statearr_50845_52893 = state_50749__$1;
(statearr_50845_52893[(1)] = (42));

} else {
var statearr_50850_52894 = state_50749__$1;
(statearr_50850_52894[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (16))){
var inst_50632 = (state_50749[(7)]);
var inst_50634 = cljs.core.chunked_seq_QMARK_(inst_50632);
var state_50749__$1 = state_50749;
if(inst_50634){
var statearr_50851_52895 = state_50749__$1;
(statearr_50851_52895[(1)] = (19));

} else {
var statearr_50852_52896 = state_50749__$1;
(statearr_50852_52896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (38))){
var inst_50728 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50853_52897 = state_50749__$1;
(statearr_50853_52897[(2)] = inst_50728);

(statearr_50853_52897[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (30))){
var state_50749__$1 = state_50749;
var statearr_50854_52898 = state_50749__$1;
(statearr_50854_52898[(2)] = null);

(statearr_50854_52898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (10))){
var inst_50609 = (state_50749[(14)]);
var inst_50611 = (state_50749[(17)]);
var inst_50620 = cljs.core._nth(inst_50609,inst_50611);
var inst_50621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50620,(0),null);
var inst_50622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50620,(1),null);
var state_50749__$1 = (function (){var statearr_50858 = state_50749;
(statearr_50858[(24)] = inst_50621);

return statearr_50858;
})();
if(cljs.core.truth_(inst_50622)){
var statearr_50859_52904 = state_50749__$1;
(statearr_50859_52904[(1)] = (13));

} else {
var statearr_50860_52906 = state_50749__$1;
(statearr_50860_52906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (18))){
var inst_50672 = (state_50749[(2)]);
var state_50749__$1 = state_50749;
var statearr_50861_52907 = state_50749__$1;
(statearr_50861_52907[(2)] = inst_50672);

(statearr_50861_52907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (42))){
var state_50749__$1 = state_50749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50749__$1,(45),dchan);
} else {
if((state_val_50750 === (37))){
var inst_50598 = (state_50749[(9)]);
var inst_50718 = (state_50749[(22)]);
var inst_50705 = (state_50749[(23)]);
var inst_50718__$1 = cljs.core.first(inst_50705);
var inst_50719 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50718__$1,inst_50598,done);
var state_50749__$1 = (function (){var statearr_50862 = state_50749;
(statearr_50862[(22)] = inst_50718__$1);

return statearr_50862;
})();
if(cljs.core.truth_(inst_50719)){
var statearr_50863_52914 = state_50749__$1;
(statearr_50863_52914[(1)] = (39));

} else {
var statearr_50864_52915 = state_50749__$1;
(statearr_50864_52915[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50750 === (8))){
var inst_50610 = (state_50749[(13)]);
var inst_50611 = (state_50749[(17)]);
var inst_50613 = (inst_50611 < inst_50610);
var inst_50614 = inst_50613;
var state_50749__$1 = state_50749;
if(cljs.core.truth_(inst_50614)){
var statearr_50865_52916 = state_50749__$1;
(statearr_50865_52916[(1)] = (10));

} else {
var statearr_50866_52917 = state_50749__$1;
(statearr_50866_52917[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__49615__auto__ = null;
var cljs$core$async$mult_$_state_machine__49615__auto____0 = (function (){
var statearr_50867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50867[(0)] = cljs$core$async$mult_$_state_machine__49615__auto__);

(statearr_50867[(1)] = (1));

return statearr_50867;
});
var cljs$core$async$mult_$_state_machine__49615__auto____1 = (function (state_50749){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_50749);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e50871){var ex__49618__auto__ = e50871;
var statearr_50872_52923 = state_50749;
(statearr_50872_52923[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_50749[(4)]))){
var statearr_50873_52924 = state_50749;
(statearr_50873_52924[(1)] = cljs.core.first((state_50749[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52925 = state_50749;
state_50749 = G__52925;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49615__auto__ = function(state_50749){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49615__auto____1.call(this,state_50749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49615__auto____0;
cljs$core$async$mult_$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49615__auto____1;
return cljs$core$async$mult_$_state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_50874 = f__49797__auto__();
(statearr_50874[(6)] = c__49796__auto___52831);

return statearr_50874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
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
var G__50883 = arguments.length;
switch (G__50883) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_52941 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52941(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52942 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52942(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52943 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52943(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52944 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52944(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52945 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52945(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52946 = arguments.length;
var i__4865__auto___52947 = (0);
while(true){
if((i__4865__auto___52947 < len__4864__auto___52946)){
args__4870__auto__.push((arguments[i__4865__auto___52947]));

var G__52948 = (i__4865__auto___52947 + (1));
i__4865__auto___52947 = G__52948;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50926){
var map__50927 = p__50926;
var map__50927__$1 = cljs.core.__destructure_map(map__50927);
var opts = map__50927__$1;
var statearr_50928_52949 = state;
(statearr_50928_52949[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50935_52950 = state;
(statearr_50935_52950[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_50939_52951 = state;
(statearr_50939_52951[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50913){
var G__50914 = cljs.core.first(seq50913);
var seq50913__$1 = cljs.core.next(seq50913);
var G__50915 = cljs.core.first(seq50913__$1);
var seq50913__$2 = cljs.core.next(seq50913__$1);
var G__50916 = cljs.core.first(seq50913__$2);
var seq50913__$3 = cljs.core.next(seq50913__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50914,G__50915,G__50916,seq50913__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50955 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50956){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50956 = meta50956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50957,meta50956__$1){
var self__ = this;
var _50957__$1 = this;
return (new cljs.core.async.t_cljs$core$async50955(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50956__$1));
}));

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50957){
var self__ = this;
var _50957__$1 = this;
return self__.meta50956;
}));

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50955.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50956","meta50956",1214491329,null)], null);
}));

(cljs.core.async.t_cljs$core$async50955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50955");

(cljs.core.async.t_cljs$core$async50955.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50955.
 */
cljs.core.async.__GT_t_cljs$core$async50955 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50955(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50956){
return (new cljs.core.async.t_cljs$core$async50955(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50956));
});

}

return (new cljs.core.async.t_cljs$core$async50955(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49796__auto___52963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_51039){
var state_val_51040 = (state_51039[(1)]);
if((state_val_51040 === (7))){
var inst_50996 = (state_51039[(2)]);
var state_51039__$1 = state_51039;
if(cljs.core.truth_(inst_50996)){
var statearr_51042_52964 = state_51039__$1;
(statearr_51042_52964[(1)] = (8));

} else {
var statearr_51043_52966 = state_51039__$1;
(statearr_51043_52966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (20))){
var inst_50987 = (state_51039[(7)]);
var state_51039__$1 = state_51039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51039__$1,(23),out,inst_50987);
} else {
if((state_val_51040 === (1))){
var inst_50970 = calc_state();
var inst_50971 = cljs.core.__destructure_map(inst_50970);
var inst_50972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50971,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50971,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50971,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50975 = inst_50970;
var state_51039__$1 = (function (){var statearr_51047 = state_51039;
(statearr_51047[(8)] = inst_50972);

(statearr_51047[(9)] = inst_50973);

(statearr_51047[(10)] = inst_50974);

(statearr_51047[(11)] = inst_50975);

return statearr_51047;
})();
var statearr_51048_52967 = state_51039__$1;
(statearr_51048_52967[(2)] = null);

(statearr_51048_52967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (24))){
var inst_50978 = (state_51039[(12)]);
var inst_50975 = inst_50978;
var state_51039__$1 = (function (){var statearr_51049 = state_51039;
(statearr_51049[(11)] = inst_50975);

return statearr_51049;
})();
var statearr_51050_52968 = state_51039__$1;
(statearr_51050_52968[(2)] = null);

(statearr_51050_52968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (4))){
var inst_50987 = (state_51039[(7)]);
var inst_50991 = (state_51039[(13)]);
var inst_50986 = (state_51039[(2)]);
var inst_50987__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50986,(0),null);
var inst_50989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50986,(1),null);
var inst_50991__$1 = (inst_50987__$1 == null);
var state_51039__$1 = (function (){var statearr_51052 = state_51039;
(statearr_51052[(7)] = inst_50987__$1);

(statearr_51052[(13)] = inst_50991__$1);

(statearr_51052[(14)] = inst_50989);

return statearr_51052;
})();
if(cljs.core.truth_(inst_50991__$1)){
var statearr_51053_52969 = state_51039__$1;
(statearr_51053_52969[(1)] = (5));

} else {
var statearr_51054_52970 = state_51039__$1;
(statearr_51054_52970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (15))){
var inst_50979 = (state_51039[(15)]);
var inst_51010 = (state_51039[(16)]);
var inst_51010__$1 = cljs.core.empty_QMARK_(inst_50979);
var state_51039__$1 = (function (){var statearr_51055 = state_51039;
(statearr_51055[(16)] = inst_51010__$1);

return statearr_51055;
})();
if(inst_51010__$1){
var statearr_51057_52971 = state_51039__$1;
(statearr_51057_52971[(1)] = (17));

} else {
var statearr_51058_52972 = state_51039__$1;
(statearr_51058_52972[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (21))){
var inst_50978 = (state_51039[(12)]);
var inst_50975 = inst_50978;
var state_51039__$1 = (function (){var statearr_51059 = state_51039;
(statearr_51059[(11)] = inst_50975);

return statearr_51059;
})();
var statearr_51060_52973 = state_51039__$1;
(statearr_51060_52973[(2)] = null);

(statearr_51060_52973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (13))){
var inst_51003 = (state_51039[(2)]);
var inst_51004 = calc_state();
var inst_50975 = inst_51004;
var state_51039__$1 = (function (){var statearr_51061 = state_51039;
(statearr_51061[(17)] = inst_51003);

(statearr_51061[(11)] = inst_50975);

return statearr_51061;
})();
var statearr_51063_52974 = state_51039__$1;
(statearr_51063_52974[(2)] = null);

(statearr_51063_52974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (22))){
var inst_51030 = (state_51039[(2)]);
var state_51039__$1 = state_51039;
var statearr_51065_52975 = state_51039__$1;
(statearr_51065_52975[(2)] = inst_51030);

(statearr_51065_52975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (6))){
var inst_50989 = (state_51039[(14)]);
var inst_50994 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50989,change);
var state_51039__$1 = state_51039;
var statearr_51066_52976 = state_51039__$1;
(statearr_51066_52976[(2)] = inst_50994);

(statearr_51066_52976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (25))){
var state_51039__$1 = state_51039;
var statearr_51067_52978 = state_51039__$1;
(statearr_51067_52978[(2)] = null);

(statearr_51067_52978[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (17))){
var inst_50980 = (state_51039[(18)]);
var inst_50989 = (state_51039[(14)]);
var inst_51012 = (inst_50980.cljs$core$IFn$_invoke$arity$1 ? inst_50980.cljs$core$IFn$_invoke$arity$1(inst_50989) : inst_50980.call(null,inst_50989));
var inst_51013 = cljs.core.not(inst_51012);
var state_51039__$1 = state_51039;
var statearr_51072_52979 = state_51039__$1;
(statearr_51072_52979[(2)] = inst_51013);

(statearr_51072_52979[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (3))){
var inst_51034 = (state_51039[(2)]);
var state_51039__$1 = state_51039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51039__$1,inst_51034);
} else {
if((state_val_51040 === (12))){
var state_51039__$1 = state_51039;
var statearr_51073_52980 = state_51039__$1;
(statearr_51073_52980[(2)] = null);

(statearr_51073_52980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (2))){
var inst_50978 = (state_51039[(12)]);
var inst_50975 = (state_51039[(11)]);
var inst_50978__$1 = cljs.core.__destructure_map(inst_50975);
var inst_50979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50978__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50978__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50978__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51039__$1 = (function (){var statearr_51074 = state_51039;
(statearr_51074[(15)] = inst_50979);

(statearr_51074[(18)] = inst_50980);

(statearr_51074[(12)] = inst_50978__$1);

return statearr_51074;
})();
return cljs.core.async.ioc_alts_BANG_(state_51039__$1,(4),inst_50981);
} else {
if((state_val_51040 === (23))){
var inst_51021 = (state_51039[(2)]);
var state_51039__$1 = state_51039;
if(cljs.core.truth_(inst_51021)){
var statearr_51075_52982 = state_51039__$1;
(statearr_51075_52982[(1)] = (24));

} else {
var statearr_51076_52983 = state_51039__$1;
(statearr_51076_52983[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (19))){
var inst_51016 = (state_51039[(2)]);
var state_51039__$1 = state_51039;
var statearr_51077_52984 = state_51039__$1;
(statearr_51077_52984[(2)] = inst_51016);

(statearr_51077_52984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (11))){
var inst_50989 = (state_51039[(14)]);
var inst_51000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50989);
var state_51039__$1 = state_51039;
var statearr_51078_52985 = state_51039__$1;
(statearr_51078_52985[(2)] = inst_51000);

(statearr_51078_52985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (9))){
var inst_50979 = (state_51039[(15)]);
var inst_51007 = (state_51039[(19)]);
var inst_50989 = (state_51039[(14)]);
var inst_51007__$1 = (inst_50979.cljs$core$IFn$_invoke$arity$1 ? inst_50979.cljs$core$IFn$_invoke$arity$1(inst_50989) : inst_50979.call(null,inst_50989));
var state_51039__$1 = (function (){var statearr_51079 = state_51039;
(statearr_51079[(19)] = inst_51007__$1);

return statearr_51079;
})();
if(cljs.core.truth_(inst_51007__$1)){
var statearr_51080_52986 = state_51039__$1;
(statearr_51080_52986[(1)] = (14));

} else {
var statearr_51081_52987 = state_51039__$1;
(statearr_51081_52987[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (5))){
var inst_50991 = (state_51039[(13)]);
var state_51039__$1 = state_51039;
var statearr_51083_52988 = state_51039__$1;
(statearr_51083_52988[(2)] = inst_50991);

(statearr_51083_52988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (14))){
var inst_51007 = (state_51039[(19)]);
var state_51039__$1 = state_51039;
var statearr_51084_52989 = state_51039__$1;
(statearr_51084_52989[(2)] = inst_51007);

(statearr_51084_52989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (26))){
var inst_51026 = (state_51039[(2)]);
var state_51039__$1 = state_51039;
var statearr_51085_52990 = state_51039__$1;
(statearr_51085_52990[(2)] = inst_51026);

(statearr_51085_52990[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (16))){
var inst_51018 = (state_51039[(2)]);
var state_51039__$1 = state_51039;
if(cljs.core.truth_(inst_51018)){
var statearr_51086_52991 = state_51039__$1;
(statearr_51086_52991[(1)] = (20));

} else {
var statearr_51087_52992 = state_51039__$1;
(statearr_51087_52992[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (10))){
var inst_51032 = (state_51039[(2)]);
var state_51039__$1 = state_51039;
var statearr_51088_52994 = state_51039__$1;
(statearr_51088_52994[(2)] = inst_51032);

(statearr_51088_52994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (18))){
var inst_51010 = (state_51039[(16)]);
var state_51039__$1 = state_51039;
var statearr_51089_52996 = state_51039__$1;
(statearr_51089_52996[(2)] = inst_51010);

(statearr_51089_52996[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51040 === (8))){
var inst_50987 = (state_51039[(7)]);
var inst_50998 = (inst_50987 == null);
var state_51039__$1 = state_51039;
if(cljs.core.truth_(inst_50998)){
var statearr_51090_52997 = state_51039__$1;
(statearr_51090_52997[(1)] = (11));

} else {
var statearr_51091_52998 = state_51039__$1;
(statearr_51091_52998[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__49615__auto__ = null;
var cljs$core$async$mix_$_state_machine__49615__auto____0 = (function (){
var statearr_51092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51092[(0)] = cljs$core$async$mix_$_state_machine__49615__auto__);

(statearr_51092[(1)] = (1));

return statearr_51092;
});
var cljs$core$async$mix_$_state_machine__49615__auto____1 = (function (state_51039){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_51039);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e51093){var ex__49618__auto__ = e51093;
var statearr_51094_53003 = state_51039;
(statearr_51094_53003[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_51039[(4)]))){
var statearr_51095_53004 = state_51039;
(statearr_51095_53004[(1)] = cljs.core.first((state_51039[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53005 = state_51039;
state_51039 = G__53005;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49615__auto__ = function(state_51039){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49615__auto____1.call(this,state_51039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49615__auto____0;
cljs$core$async$mix_$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49615__auto____1;
return cljs$core$async$mix_$_state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_51096 = f__49797__auto__();
(statearr_51096[(6)] = c__49796__auto___52963);

return statearr_51096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_53010 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53010(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53011 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53011(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53012 = (function() {
var G__53013 = null;
var G__53013__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53013__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53013 = function(p,v){
switch(arguments.length){
case 1:
return G__53013__1.call(this,p);
case 2:
return G__53013__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53013.cljs$core$IFn$_invoke$arity$1 = G__53013__1;
G__53013.cljs$core$IFn$_invoke$arity$2 = G__53013__2;
return G__53013;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51129 = arguments.length;
switch (G__51129) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53012(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53012(p,v);
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
var G__51141 = arguments.length;
switch (G__51141) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51139_SHARP_){
if(cljs.core.truth_((p1__51139_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51139_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51139_SHARP_.call(null,topic)))){
return p1__51139_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51139_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51152 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51153){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51153 = meta51153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51154,meta51153__$1){
var self__ = this;
var _51154__$1 = this;
return (new cljs.core.async.t_cljs$core$async51152(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51153__$1));
}));

(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51154){
var self__ = this;
var _51154__$1 = this;
return self__.meta51153;
}));

(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51153","meta51153",1488291355,null)], null);
}));

(cljs.core.async.t_cljs$core$async51152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51152");

(cljs.core.async.t_cljs$core$async51152.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51152.
 */
cljs.core.async.__GT_t_cljs$core$async51152 = (function cljs$core$async$__GT_t_cljs$core$async51152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51153){
return (new cljs.core.async.t_cljs$core$async51152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51153));
});

}

return (new cljs.core.async.t_cljs$core$async51152(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49796__auto___53021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_51259){
var state_val_51260 = (state_51259[(1)]);
if((state_val_51260 === (7))){
var inst_51255 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51264_53023 = state_51259__$1;
(statearr_51264_53023[(2)] = inst_51255);

(statearr_51264_53023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (20))){
var state_51259__$1 = state_51259;
var statearr_51265_53024 = state_51259__$1;
(statearr_51265_53024[(2)] = null);

(statearr_51265_53024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (1))){
var state_51259__$1 = state_51259;
var statearr_51270_53025 = state_51259__$1;
(statearr_51270_53025[(2)] = null);

(statearr_51270_53025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (24))){
var inst_51236 = (state_51259[(7)]);
var inst_51247 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51236);
var state_51259__$1 = state_51259;
var statearr_51271_53026 = state_51259__$1;
(statearr_51271_53026[(2)] = inst_51247);

(statearr_51271_53026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (4))){
var inst_51166 = (state_51259[(8)]);
var inst_51166__$1 = (state_51259[(2)]);
var inst_51167 = (inst_51166__$1 == null);
var state_51259__$1 = (function (){var statearr_51272 = state_51259;
(statearr_51272[(8)] = inst_51166__$1);

return statearr_51272;
})();
if(cljs.core.truth_(inst_51167)){
var statearr_51273_53027 = state_51259__$1;
(statearr_51273_53027[(1)] = (5));

} else {
var statearr_51274_53028 = state_51259__$1;
(statearr_51274_53028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (15))){
var inst_51230 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51275_53029 = state_51259__$1;
(statearr_51275_53029[(2)] = inst_51230);

(statearr_51275_53029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (21))){
var inst_51252 = (state_51259[(2)]);
var state_51259__$1 = (function (){var statearr_51276 = state_51259;
(statearr_51276[(9)] = inst_51252);

return statearr_51276;
})();
var statearr_51277_53030 = state_51259__$1;
(statearr_51277_53030[(2)] = null);

(statearr_51277_53030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (13))){
var inst_51190 = (state_51259[(10)]);
var inst_51207 = cljs.core.chunked_seq_QMARK_(inst_51190);
var state_51259__$1 = state_51259;
if(inst_51207){
var statearr_51278_53031 = state_51259__$1;
(statearr_51278_53031[(1)] = (16));

} else {
var statearr_51279_53032 = state_51259__$1;
(statearr_51279_53032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (22))){
var inst_51244 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
if(cljs.core.truth_(inst_51244)){
var statearr_51286_53033 = state_51259__$1;
(statearr_51286_53033[(1)] = (23));

} else {
var statearr_51287_53034 = state_51259__$1;
(statearr_51287_53034[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (6))){
var inst_51166 = (state_51259[(8)]);
var inst_51238 = (state_51259[(11)]);
var inst_51236 = (state_51259[(7)]);
var inst_51236__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51166) : topic_fn.call(null,inst_51166));
var inst_51237 = cljs.core.deref(mults);
var inst_51238__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51237,inst_51236__$1);
var state_51259__$1 = (function (){var statearr_51291 = state_51259;
(statearr_51291[(11)] = inst_51238__$1);

(statearr_51291[(7)] = inst_51236__$1);

return statearr_51291;
})();
if(cljs.core.truth_(inst_51238__$1)){
var statearr_51292_53036 = state_51259__$1;
(statearr_51292_53036[(1)] = (19));

} else {
var statearr_51293_53037 = state_51259__$1;
(statearr_51293_53037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (25))){
var inst_51249 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51294_53038 = state_51259__$1;
(statearr_51294_53038[(2)] = inst_51249);

(statearr_51294_53038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (17))){
var inst_51190 = (state_51259[(10)]);
var inst_51221 = cljs.core.first(inst_51190);
var inst_51222 = cljs.core.async.muxch_STAR_(inst_51221);
var inst_51223 = cljs.core.async.close_BANG_(inst_51222);
var inst_51224 = cljs.core.next(inst_51190);
var inst_51176 = inst_51224;
var inst_51177 = null;
var inst_51178 = (0);
var inst_51179 = (0);
var state_51259__$1 = (function (){var statearr_51295 = state_51259;
(statearr_51295[(12)] = inst_51223);

(statearr_51295[(13)] = inst_51178);

(statearr_51295[(14)] = inst_51179);

(statearr_51295[(15)] = inst_51176);

(statearr_51295[(16)] = inst_51177);

return statearr_51295;
})();
var statearr_51296_53040 = state_51259__$1;
(statearr_51296_53040[(2)] = null);

(statearr_51296_53040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (3))){
var inst_51257 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51259__$1,inst_51257);
} else {
if((state_val_51260 === (12))){
var inst_51232 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51297_53042 = state_51259__$1;
(statearr_51297_53042[(2)] = inst_51232);

(statearr_51297_53042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (2))){
var state_51259__$1 = state_51259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51259__$1,(4),ch);
} else {
if((state_val_51260 === (23))){
var state_51259__$1 = state_51259;
var statearr_51298_53043 = state_51259__$1;
(statearr_51298_53043[(2)] = null);

(statearr_51298_53043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (19))){
var inst_51166 = (state_51259[(8)]);
var inst_51238 = (state_51259[(11)]);
var inst_51242 = cljs.core.async.muxch_STAR_(inst_51238);
var state_51259__$1 = state_51259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51259__$1,(22),inst_51242,inst_51166);
} else {
if((state_val_51260 === (11))){
var inst_51190 = (state_51259[(10)]);
var inst_51176 = (state_51259[(15)]);
var inst_51190__$1 = cljs.core.seq(inst_51176);
var state_51259__$1 = (function (){var statearr_51300 = state_51259;
(statearr_51300[(10)] = inst_51190__$1);

return statearr_51300;
})();
if(inst_51190__$1){
var statearr_51301_53044 = state_51259__$1;
(statearr_51301_53044[(1)] = (13));

} else {
var statearr_51302_53045 = state_51259__$1;
(statearr_51302_53045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (9))){
var inst_51234 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51303_53046 = state_51259__$1;
(statearr_51303_53046[(2)] = inst_51234);

(statearr_51303_53046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (5))){
var inst_51173 = cljs.core.deref(mults);
var inst_51174 = cljs.core.vals(inst_51173);
var inst_51175 = cljs.core.seq(inst_51174);
var inst_51176 = inst_51175;
var inst_51177 = null;
var inst_51178 = (0);
var inst_51179 = (0);
var state_51259__$1 = (function (){var statearr_51304 = state_51259;
(statearr_51304[(13)] = inst_51178);

(statearr_51304[(14)] = inst_51179);

(statearr_51304[(15)] = inst_51176);

(statearr_51304[(16)] = inst_51177);

return statearr_51304;
})();
var statearr_51305_53047 = state_51259__$1;
(statearr_51305_53047[(2)] = null);

(statearr_51305_53047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (14))){
var state_51259__$1 = state_51259;
var statearr_51309_53049 = state_51259__$1;
(statearr_51309_53049[(2)] = null);

(statearr_51309_53049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (16))){
var inst_51190 = (state_51259[(10)]);
var inst_51210 = cljs.core.chunk_first(inst_51190);
var inst_51211 = cljs.core.chunk_rest(inst_51190);
var inst_51215 = cljs.core.count(inst_51210);
var inst_51176 = inst_51211;
var inst_51177 = inst_51210;
var inst_51178 = inst_51215;
var inst_51179 = (0);
var state_51259__$1 = (function (){var statearr_51310 = state_51259;
(statearr_51310[(13)] = inst_51178);

(statearr_51310[(14)] = inst_51179);

(statearr_51310[(15)] = inst_51176);

(statearr_51310[(16)] = inst_51177);

return statearr_51310;
})();
var statearr_51311_53050 = state_51259__$1;
(statearr_51311_53050[(2)] = null);

(statearr_51311_53050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (10))){
var inst_51178 = (state_51259[(13)]);
var inst_51179 = (state_51259[(14)]);
var inst_51176 = (state_51259[(15)]);
var inst_51177 = (state_51259[(16)]);
var inst_51184 = cljs.core._nth(inst_51177,inst_51179);
var inst_51185 = cljs.core.async.muxch_STAR_(inst_51184);
var inst_51186 = cljs.core.async.close_BANG_(inst_51185);
var inst_51187 = (inst_51179 + (1));
var tmp51306 = inst_51178;
var tmp51307 = inst_51176;
var tmp51308 = inst_51177;
var inst_51176__$1 = tmp51307;
var inst_51177__$1 = tmp51308;
var inst_51178__$1 = tmp51306;
var inst_51179__$1 = inst_51187;
var state_51259__$1 = (function (){var statearr_51312 = state_51259;
(statearr_51312[(13)] = inst_51178__$1);

(statearr_51312[(14)] = inst_51179__$1);

(statearr_51312[(15)] = inst_51176__$1);

(statearr_51312[(17)] = inst_51186);

(statearr_51312[(16)] = inst_51177__$1);

return statearr_51312;
})();
var statearr_51313_53051 = state_51259__$1;
(statearr_51313_53051[(2)] = null);

(statearr_51313_53051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (18))){
var inst_51227 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51314_53052 = state_51259__$1;
(statearr_51314_53052[(2)] = inst_51227);

(statearr_51314_53052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (8))){
var inst_51178 = (state_51259[(13)]);
var inst_51179 = (state_51259[(14)]);
var inst_51181 = (inst_51179 < inst_51178);
var inst_51182 = inst_51181;
var state_51259__$1 = state_51259;
if(cljs.core.truth_(inst_51182)){
var statearr_51315_53053 = state_51259__$1;
(statearr_51315_53053[(1)] = (10));

} else {
var statearr_51316_53054 = state_51259__$1;
(statearr_51316_53054[(1)] = (11));

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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_51317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51317[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_51317[(1)] = (1));

return statearr_51317;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_51259){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_51259);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e51318){var ex__49618__auto__ = e51318;
var statearr_51319_53055 = state_51259;
(statearr_51319_53055[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_51259[(4)]))){
var statearr_51321_53056 = state_51259;
(statearr_51321_53056[(1)] = cljs.core.first((state_51259[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53058 = state_51259;
state_51259 = G__53058;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_51259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_51259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_51322 = f__49797__auto__();
(statearr_51322[(6)] = c__49796__auto___53021);

return statearr_51322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
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
var G__51328 = arguments.length;
switch (G__51328) {
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
var G__51333 = arguments.length;
switch (G__51333) {
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
var G__51339 = arguments.length;
switch (G__51339) {
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
var c__49796__auto___53067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_51392){
var state_val_51393 = (state_51392[(1)]);
if((state_val_51393 === (7))){
var state_51392__$1 = state_51392;
var statearr_51394_53068 = state_51392__$1;
(statearr_51394_53068[(2)] = null);

(statearr_51394_53068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (1))){
var state_51392__$1 = state_51392;
var statearr_51397_53069 = state_51392__$1;
(statearr_51397_53069[(2)] = null);

(statearr_51397_53069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (4))){
var inst_51346 = (state_51392[(7)]);
var inst_51347 = (state_51392[(8)]);
var inst_51349 = (inst_51347 < inst_51346);
var state_51392__$1 = state_51392;
if(cljs.core.truth_(inst_51349)){
var statearr_51402_53070 = state_51392__$1;
(statearr_51402_53070[(1)] = (6));

} else {
var statearr_51404_53071 = state_51392__$1;
(statearr_51404_53071[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (15))){
var inst_51373 = (state_51392[(9)]);
var inst_51378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51373);
var state_51392__$1 = state_51392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51392__$1,(17),out,inst_51378);
} else {
if((state_val_51393 === (13))){
var inst_51373 = (state_51392[(9)]);
var inst_51373__$1 = (state_51392[(2)]);
var inst_51374 = cljs.core.some(cljs.core.nil_QMARK_,inst_51373__$1);
var state_51392__$1 = (function (){var statearr_51406 = state_51392;
(statearr_51406[(9)] = inst_51373__$1);

return statearr_51406;
})();
if(cljs.core.truth_(inst_51374)){
var statearr_51407_53072 = state_51392__$1;
(statearr_51407_53072[(1)] = (14));

} else {
var statearr_51408_53073 = state_51392__$1;
(statearr_51408_53073[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (6))){
var state_51392__$1 = state_51392;
var statearr_51409_53074 = state_51392__$1;
(statearr_51409_53074[(2)] = null);

(statearr_51409_53074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (17))){
var inst_51380 = (state_51392[(2)]);
var state_51392__$1 = (function (){var statearr_51412 = state_51392;
(statearr_51412[(10)] = inst_51380);

return statearr_51412;
})();
var statearr_51413_53075 = state_51392__$1;
(statearr_51413_53075[(2)] = null);

(statearr_51413_53075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (3))){
var inst_51385 = (state_51392[(2)]);
var state_51392__$1 = state_51392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51392__$1,inst_51385);
} else {
if((state_val_51393 === (12))){
var _ = (function (){var statearr_51414 = state_51392;
(statearr_51414[(4)] = cljs.core.rest((state_51392[(4)])));

return statearr_51414;
})();
var state_51392__$1 = state_51392;
var ex51411 = (state_51392__$1[(2)]);
var statearr_51415_53076 = state_51392__$1;
(statearr_51415_53076[(5)] = ex51411);


if((ex51411 instanceof Object)){
var statearr_51416_53077 = state_51392__$1;
(statearr_51416_53077[(1)] = (11));

(statearr_51416_53077[(5)] = null);

} else {
throw ex51411;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (2))){
var inst_51343 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51346 = cnt;
var inst_51347 = (0);
var state_51392__$1 = (function (){var statearr_51428 = state_51392;
(statearr_51428[(7)] = inst_51346);

(statearr_51428[(8)] = inst_51347);

(statearr_51428[(11)] = inst_51343);

return statearr_51428;
})();
var statearr_51429_53079 = state_51392__$1;
(statearr_51429_53079[(2)] = null);

(statearr_51429_53079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (11))){
var inst_51351 = (state_51392[(2)]);
var inst_51352 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51392__$1 = (function (){var statearr_51431 = state_51392;
(statearr_51431[(12)] = inst_51351);

return statearr_51431;
})();
var statearr_51432_53080 = state_51392__$1;
(statearr_51432_53080[(2)] = inst_51352);

(statearr_51432_53080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (9))){
var inst_51347 = (state_51392[(8)]);
var _ = (function (){var statearr_51433 = state_51392;
(statearr_51433[(4)] = cljs.core.cons((12),(state_51392[(4)])));

return statearr_51433;
})();
var inst_51358 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51347) : chs__$1.call(null,inst_51347));
var inst_51359 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51347) : done.call(null,inst_51347));
var inst_51360 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51358,inst_51359);
var ___$1 = (function (){var statearr_51434 = state_51392;
(statearr_51434[(4)] = cljs.core.rest((state_51392[(4)])));

return statearr_51434;
})();
var state_51392__$1 = state_51392;
var statearr_51435_53082 = state_51392__$1;
(statearr_51435_53082[(2)] = inst_51360);

(statearr_51435_53082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (5))){
var inst_51371 = (state_51392[(2)]);
var state_51392__$1 = (function (){var statearr_51436 = state_51392;
(statearr_51436[(13)] = inst_51371);

return statearr_51436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51392__$1,(13),dchan);
} else {
if((state_val_51393 === (14))){
var inst_51376 = cljs.core.async.close_BANG_(out);
var state_51392__$1 = state_51392;
var statearr_51437_53083 = state_51392__$1;
(statearr_51437_53083[(2)] = inst_51376);

(statearr_51437_53083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (16))){
var inst_51383 = (state_51392[(2)]);
var state_51392__$1 = state_51392;
var statearr_51439_53084 = state_51392__$1;
(statearr_51439_53084[(2)] = inst_51383);

(statearr_51439_53084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (10))){
var inst_51347 = (state_51392[(8)]);
var inst_51363 = (state_51392[(2)]);
var inst_51365 = (inst_51347 + (1));
var inst_51347__$1 = inst_51365;
var state_51392__$1 = (function (){var statearr_51440 = state_51392;
(statearr_51440[(8)] = inst_51347__$1);

(statearr_51440[(14)] = inst_51363);

return statearr_51440;
})();
var statearr_51441_53085 = state_51392__$1;
(statearr_51441_53085[(2)] = null);

(statearr_51441_53085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51393 === (8))){
var inst_51369 = (state_51392[(2)]);
var state_51392__$1 = state_51392;
var statearr_51442_53086 = state_51392__$1;
(statearr_51442_53086[(2)] = inst_51369);

(statearr_51442_53086[(1)] = (5));


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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_51443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51443[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_51443[(1)] = (1));

return statearr_51443;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_51392){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_51392);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e51444){var ex__49618__auto__ = e51444;
var statearr_51445_53087 = state_51392;
(statearr_51445_53087[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_51392[(4)]))){
var statearr_51446_53089 = state_51392;
(statearr_51446_53089[(1)] = cljs.core.first((state_51392[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53090 = state_51392;
state_51392 = G__53090;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_51392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_51392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_51447 = f__49797__auto__();
(statearr_51447[(6)] = c__49796__auto___53067);

return statearr_51447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
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
var G__51452 = arguments.length;
switch (G__51452) {
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
var c__49796__auto___53093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_51496){
var state_val_51497 = (state_51496[(1)]);
if((state_val_51497 === (7))){
var inst_51467 = (state_51496[(7)]);
var inst_51466 = (state_51496[(8)]);
var inst_51466__$1 = (state_51496[(2)]);
var inst_51467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51466__$1,(0),null);
var inst_51468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51466__$1,(1),null);
var inst_51472 = (inst_51467__$1 == null);
var state_51496__$1 = (function (){var statearr_51501 = state_51496;
(statearr_51501[(9)] = inst_51468);

(statearr_51501[(7)] = inst_51467__$1);

(statearr_51501[(8)] = inst_51466__$1);

return statearr_51501;
})();
if(cljs.core.truth_(inst_51472)){
var statearr_51503_53094 = state_51496__$1;
(statearr_51503_53094[(1)] = (8));

} else {
var statearr_51504_53095 = state_51496__$1;
(statearr_51504_53095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (1))){
var inst_51456 = cljs.core.vec(chs);
var inst_51457 = inst_51456;
var state_51496__$1 = (function (){var statearr_51505 = state_51496;
(statearr_51505[(10)] = inst_51457);

return statearr_51505;
})();
var statearr_51506_53096 = state_51496__$1;
(statearr_51506_53096[(2)] = null);

(statearr_51506_53096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (4))){
var inst_51457 = (state_51496[(10)]);
var state_51496__$1 = state_51496;
return cljs.core.async.ioc_alts_BANG_(state_51496__$1,(7),inst_51457);
} else {
if((state_val_51497 === (6))){
var inst_51487 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51508_53097 = state_51496__$1;
(statearr_51508_53097[(2)] = inst_51487);

(statearr_51508_53097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (3))){
var inst_51489 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51496__$1,inst_51489);
} else {
if((state_val_51497 === (2))){
var inst_51457 = (state_51496[(10)]);
var inst_51459 = cljs.core.count(inst_51457);
var inst_51460 = (inst_51459 > (0));
var state_51496__$1 = state_51496;
if(cljs.core.truth_(inst_51460)){
var statearr_51510_53098 = state_51496__$1;
(statearr_51510_53098[(1)] = (4));

} else {
var statearr_51511_53099 = state_51496__$1;
(statearr_51511_53099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (11))){
var inst_51457 = (state_51496[(10)]);
var inst_51480 = (state_51496[(2)]);
var tmp51509 = inst_51457;
var inst_51457__$1 = tmp51509;
var state_51496__$1 = (function (){var statearr_51512 = state_51496;
(statearr_51512[(10)] = inst_51457__$1);

(statearr_51512[(11)] = inst_51480);

return statearr_51512;
})();
var statearr_51513_53100 = state_51496__$1;
(statearr_51513_53100[(2)] = null);

(statearr_51513_53100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (9))){
var inst_51467 = (state_51496[(7)]);
var state_51496__$1 = state_51496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51496__$1,(11),out,inst_51467);
} else {
if((state_val_51497 === (5))){
var inst_51485 = cljs.core.async.close_BANG_(out);
var state_51496__$1 = state_51496;
var statearr_51519_53102 = state_51496__$1;
(statearr_51519_53102[(2)] = inst_51485);

(statearr_51519_53102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (10))){
var inst_51483 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51520_53103 = state_51496__$1;
(statearr_51520_53103[(2)] = inst_51483);

(statearr_51520_53103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (8))){
var inst_51468 = (state_51496[(9)]);
var inst_51457 = (state_51496[(10)]);
var inst_51467 = (state_51496[(7)]);
var inst_51466 = (state_51496[(8)]);
var inst_51475 = (function (){var cs = inst_51457;
var vec__51462 = inst_51466;
var v = inst_51467;
var c = inst_51468;
return (function (p1__51448_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51448_SHARP_);
});
})();
var inst_51476 = cljs.core.filterv(inst_51475,inst_51457);
var inst_51457__$1 = inst_51476;
var state_51496__$1 = (function (){var statearr_51521 = state_51496;
(statearr_51521[(10)] = inst_51457__$1);

return statearr_51521;
})();
var statearr_51522_53105 = state_51496__$1;
(statearr_51522_53105[(2)] = null);

(statearr_51522_53105[(1)] = (2));


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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_51523 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51523[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_51523[(1)] = (1));

return statearr_51523;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_51496){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_51496);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e51524){var ex__49618__auto__ = e51524;
var statearr_51525_53106 = state_51496;
(statearr_51525_53106[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_51496[(4)]))){
var statearr_51526_53107 = state_51496;
(statearr_51526_53107[(1)] = cljs.core.first((state_51496[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53108 = state_51496;
state_51496 = G__53108;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_51496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_51496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_51528 = f__49797__auto__();
(statearr_51528[(6)] = c__49796__auto___53093);

return statearr_51528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
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
var G__51530 = arguments.length;
switch (G__51530) {
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
var c__49796__auto___53110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_51556){
var state_val_51557 = (state_51556[(1)]);
if((state_val_51557 === (7))){
var inst_51537 = (state_51556[(7)]);
var inst_51537__$1 = (state_51556[(2)]);
var inst_51538 = (inst_51537__$1 == null);
var inst_51539 = cljs.core.not(inst_51538);
var state_51556__$1 = (function (){var statearr_51558 = state_51556;
(statearr_51558[(7)] = inst_51537__$1);

return statearr_51558;
})();
if(inst_51539){
var statearr_51559_53111 = state_51556__$1;
(statearr_51559_53111[(1)] = (8));

} else {
var statearr_51560_53112 = state_51556__$1;
(statearr_51560_53112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (1))){
var inst_51532 = (0);
var state_51556__$1 = (function (){var statearr_51561 = state_51556;
(statearr_51561[(8)] = inst_51532);

return statearr_51561;
})();
var statearr_51562_53113 = state_51556__$1;
(statearr_51562_53113[(2)] = null);

(statearr_51562_53113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (4))){
var state_51556__$1 = state_51556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51556__$1,(7),ch);
} else {
if((state_val_51557 === (6))){
var inst_51550 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
var statearr_51564_53114 = state_51556__$1;
(statearr_51564_53114[(2)] = inst_51550);

(statearr_51564_53114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (3))){
var inst_51552 = (state_51556[(2)]);
var inst_51553 = cljs.core.async.close_BANG_(out);
var state_51556__$1 = (function (){var statearr_51565 = state_51556;
(statearr_51565[(9)] = inst_51552);

return statearr_51565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51556__$1,inst_51553);
} else {
if((state_val_51557 === (2))){
var inst_51532 = (state_51556[(8)]);
var inst_51534 = (inst_51532 < n);
var state_51556__$1 = state_51556;
if(cljs.core.truth_(inst_51534)){
var statearr_51566_53115 = state_51556__$1;
(statearr_51566_53115[(1)] = (4));

} else {
var statearr_51567_53116 = state_51556__$1;
(statearr_51567_53116[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (11))){
var inst_51532 = (state_51556[(8)]);
var inst_51542 = (state_51556[(2)]);
var inst_51543 = (inst_51532 + (1));
var inst_51532__$1 = inst_51543;
var state_51556__$1 = (function (){var statearr_51568 = state_51556;
(statearr_51568[(8)] = inst_51532__$1);

(statearr_51568[(10)] = inst_51542);

return statearr_51568;
})();
var statearr_51570_53117 = state_51556__$1;
(statearr_51570_53117[(2)] = null);

(statearr_51570_53117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (9))){
var state_51556__$1 = state_51556;
var statearr_51571_53118 = state_51556__$1;
(statearr_51571_53118[(2)] = null);

(statearr_51571_53118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (5))){
var state_51556__$1 = state_51556;
var statearr_51572_53119 = state_51556__$1;
(statearr_51572_53119[(2)] = null);

(statearr_51572_53119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (10))){
var inst_51547 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
var statearr_51573_53120 = state_51556__$1;
(statearr_51573_53120[(2)] = inst_51547);

(statearr_51573_53120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (8))){
var inst_51537 = (state_51556[(7)]);
var state_51556__$1 = state_51556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51556__$1,(11),out,inst_51537);
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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_51574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51574[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_51574[(1)] = (1));

return statearr_51574;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_51556){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_51556);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e51575){var ex__49618__auto__ = e51575;
var statearr_51576_53122 = state_51556;
(statearr_51576_53122[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_51556[(4)]))){
var statearr_51577_53123 = state_51556;
(statearr_51577_53123[(1)] = cljs.core.first((state_51556[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53124 = state_51556;
state_51556 = G__53124;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_51556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_51556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_51578 = f__49797__auto__();
(statearr_51578[(6)] = c__49796__auto___53110);

return statearr_51578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51584 = (function (f,ch,meta51585){
this.f = f;
this.ch = ch;
this.meta51585 = meta51585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51586,meta51585__$1){
var self__ = this;
var _51586__$1 = this;
return (new cljs.core.async.t_cljs$core$async51584(self__.f,self__.ch,meta51585__$1));
}));

(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51586){
var self__ = this;
var _51586__$1 = this;
return self__.meta51585;
}));

(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51595 = (function (f,ch,meta51585,_,fn1,meta51596){
this.f = f;
this.ch = ch;
this.meta51585 = meta51585;
this._ = _;
this.fn1 = fn1;
this.meta51596 = meta51596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51597,meta51596__$1){
var self__ = this;
var _51597__$1 = this;
return (new cljs.core.async.t_cljs$core$async51595(self__.f,self__.ch,self__.meta51585,self__._,self__.fn1,meta51596__$1));
}));

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51597){
var self__ = this;
var _51597__$1 = this;
return self__.meta51596;
}));

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51581_SHARP_){
var G__51604 = (((p1__51581_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51581_SHARP_) : self__.f.call(null,p1__51581_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51604) : f1.call(null,G__51604));
});
}));

(cljs.core.async.t_cljs$core$async51595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51585","meta51585",-1607386078,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51584","cljs.core.async/t_cljs$core$async51584",1514543570,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51596","meta51596",-3966992,null)], null);
}));

(cljs.core.async.t_cljs$core$async51595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51595");

(cljs.core.async.t_cljs$core$async51595.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51595.
 */
cljs.core.async.__GT_t_cljs$core$async51595 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51595(f__$1,ch__$1,meta51585__$1,___$2,fn1__$1,meta51596){
return (new cljs.core.async.t_cljs$core$async51595(f__$1,ch__$1,meta51585__$1,___$2,fn1__$1,meta51596));
});

}

return (new cljs.core.async.t_cljs$core$async51595(self__.f,self__.ch,self__.meta51585,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51609 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51609) : self__.f.call(null,G__51609));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51585","meta51585",-1607386078,null)], null);
}));

(cljs.core.async.t_cljs$core$async51584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51584");

(cljs.core.async.t_cljs$core$async51584.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51584.
 */
cljs.core.async.__GT_t_cljs$core$async51584 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51584(f__$1,ch__$1,meta51585){
return (new cljs.core.async.t_cljs$core$async51584(f__$1,ch__$1,meta51585));
});

}

return (new cljs.core.async.t_cljs$core$async51584(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51617 = (function (f,ch,meta51618){
this.f = f;
this.ch = ch;
this.meta51618 = meta51618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51619,meta51618__$1){
var self__ = this;
var _51619__$1 = this;
return (new cljs.core.async.t_cljs$core$async51617(self__.f,self__.ch,meta51618__$1));
}));

(cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51619){
var self__ = this;
var _51619__$1 = this;
return self__.meta51618;
}));

(cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51618","meta51618",1269648047,null)], null);
}));

(cljs.core.async.t_cljs$core$async51617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51617");

(cljs.core.async.t_cljs$core$async51617.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51617.
 */
cljs.core.async.__GT_t_cljs$core$async51617 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51617(f__$1,ch__$1,meta51618){
return (new cljs.core.async.t_cljs$core$async51617(f__$1,ch__$1,meta51618));
});

}

return (new cljs.core.async.t_cljs$core$async51617(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51627 = (function (p,ch,meta51628){
this.p = p;
this.ch = ch;
this.meta51628 = meta51628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51629,meta51628__$1){
var self__ = this;
var _51629__$1 = this;
return (new cljs.core.async.t_cljs$core$async51627(self__.p,self__.ch,meta51628__$1));
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51629){
var self__ = this;
var _51629__$1 = this;
return self__.meta51628;
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51628","meta51628",-1047825377,null)], null);
}));

(cljs.core.async.t_cljs$core$async51627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51627");

(cljs.core.async.t_cljs$core$async51627.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async51627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51627.
 */
cljs.core.async.__GT_t_cljs$core$async51627 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51627(p__$1,ch__$1,meta51628){
return (new cljs.core.async.t_cljs$core$async51627(p__$1,ch__$1,meta51628));
});

}

return (new cljs.core.async.t_cljs$core$async51627(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51655 = arguments.length;
switch (G__51655) {
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
var c__49796__auto___53131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_51692){
var state_val_51693 = (state_51692[(1)]);
if((state_val_51693 === (7))){
var inst_51688 = (state_51692[(2)]);
var state_51692__$1 = state_51692;
var statearr_51698_53132 = state_51692__$1;
(statearr_51698_53132[(2)] = inst_51688);

(statearr_51698_53132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51693 === (1))){
var state_51692__$1 = state_51692;
var statearr_51699_53133 = state_51692__$1;
(statearr_51699_53133[(2)] = null);

(statearr_51699_53133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51693 === (4))){
var inst_51671 = (state_51692[(7)]);
var inst_51671__$1 = (state_51692[(2)]);
var inst_51674 = (inst_51671__$1 == null);
var state_51692__$1 = (function (){var statearr_51700 = state_51692;
(statearr_51700[(7)] = inst_51671__$1);

return statearr_51700;
})();
if(cljs.core.truth_(inst_51674)){
var statearr_51701_53134 = state_51692__$1;
(statearr_51701_53134[(1)] = (5));

} else {
var statearr_51702_53135 = state_51692__$1;
(statearr_51702_53135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51693 === (6))){
var inst_51671 = (state_51692[(7)]);
var inst_51679 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51671) : p.call(null,inst_51671));
var state_51692__$1 = state_51692;
if(cljs.core.truth_(inst_51679)){
var statearr_51703_53138 = state_51692__$1;
(statearr_51703_53138[(1)] = (8));

} else {
var statearr_51705_53139 = state_51692__$1;
(statearr_51705_53139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51693 === (3))){
var inst_51690 = (state_51692[(2)]);
var state_51692__$1 = state_51692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51692__$1,inst_51690);
} else {
if((state_val_51693 === (2))){
var state_51692__$1 = state_51692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51692__$1,(4),ch);
} else {
if((state_val_51693 === (11))){
var inst_51682 = (state_51692[(2)]);
var state_51692__$1 = state_51692;
var statearr_51709_53140 = state_51692__$1;
(statearr_51709_53140[(2)] = inst_51682);

(statearr_51709_53140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51693 === (9))){
var state_51692__$1 = state_51692;
var statearr_51710_53141 = state_51692__$1;
(statearr_51710_53141[(2)] = null);

(statearr_51710_53141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51693 === (5))){
var inst_51676 = cljs.core.async.close_BANG_(out);
var state_51692__$1 = state_51692;
var statearr_51715_53143 = state_51692__$1;
(statearr_51715_53143[(2)] = inst_51676);

(statearr_51715_53143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51693 === (10))){
var inst_51685 = (state_51692[(2)]);
var state_51692__$1 = (function (){var statearr_51717 = state_51692;
(statearr_51717[(8)] = inst_51685);

return statearr_51717;
})();
var statearr_51718_53144 = state_51692__$1;
(statearr_51718_53144[(2)] = null);

(statearr_51718_53144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51693 === (8))){
var inst_51671 = (state_51692[(7)]);
var state_51692__$1 = state_51692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51692__$1,(11),out,inst_51671);
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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_51721 = [null,null,null,null,null,null,null,null,null];
(statearr_51721[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_51721[(1)] = (1));

return statearr_51721;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_51692){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_51692);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e51723){var ex__49618__auto__ = e51723;
var statearr_51725_53150 = state_51692;
(statearr_51725_53150[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_51692[(4)]))){
var statearr_51726_53151 = state_51692;
(statearr_51726_53151[(1)] = cljs.core.first((state_51692[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53152 = state_51692;
state_51692 = G__53152;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_51692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_51692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_51727 = f__49797__auto__();
(statearr_51727[(6)] = c__49796__auto___53131);

return statearr_51727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51736 = arguments.length;
switch (G__51736) {
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
var c__49796__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_51839){
var state_val_51840 = (state_51839[(1)]);
if((state_val_51840 === (7))){
var inst_51832 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
var statearr_51842_53156 = state_51839__$1;
(statearr_51842_53156[(2)] = inst_51832);

(statearr_51842_53156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (20))){
var inst_51796 = (state_51839[(7)]);
var inst_51813 = (state_51839[(2)]);
var inst_51814 = cljs.core.next(inst_51796);
var inst_51767 = inst_51814;
var inst_51768 = null;
var inst_51769 = (0);
var inst_51770 = (0);
var state_51839__$1 = (function (){var statearr_51844 = state_51839;
(statearr_51844[(8)] = inst_51813);

(statearr_51844[(9)] = inst_51767);

(statearr_51844[(10)] = inst_51769);

(statearr_51844[(11)] = inst_51770);

(statearr_51844[(12)] = inst_51768);

return statearr_51844;
})();
var statearr_51846_53159 = state_51839__$1;
(statearr_51846_53159[(2)] = null);

(statearr_51846_53159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (1))){
var state_51839__$1 = state_51839;
var statearr_51847_53160 = state_51839__$1;
(statearr_51847_53160[(2)] = null);

(statearr_51847_53160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (4))){
var inst_51752 = (state_51839[(13)]);
var inst_51752__$1 = (state_51839[(2)]);
var inst_51754 = (inst_51752__$1 == null);
var state_51839__$1 = (function (){var statearr_51848 = state_51839;
(statearr_51848[(13)] = inst_51752__$1);

return statearr_51848;
})();
if(cljs.core.truth_(inst_51754)){
var statearr_51849_53161 = state_51839__$1;
(statearr_51849_53161[(1)] = (5));

} else {
var statearr_51850_53162 = state_51839__$1;
(statearr_51850_53162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (15))){
var state_51839__$1 = state_51839;
var statearr_51855_53163 = state_51839__$1;
(statearr_51855_53163[(2)] = null);

(statearr_51855_53163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (21))){
var state_51839__$1 = state_51839;
var statearr_51858_53164 = state_51839__$1;
(statearr_51858_53164[(2)] = null);

(statearr_51858_53164[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (13))){
var inst_51767 = (state_51839[(9)]);
var inst_51769 = (state_51839[(10)]);
var inst_51770 = (state_51839[(11)]);
var inst_51768 = (state_51839[(12)]);
var inst_51790 = (state_51839[(2)]);
var inst_51791 = (inst_51770 + (1));
var tmp51852 = inst_51767;
var tmp51853 = inst_51769;
var tmp51854 = inst_51768;
var inst_51767__$1 = tmp51852;
var inst_51768__$1 = tmp51854;
var inst_51769__$1 = tmp51853;
var inst_51770__$1 = inst_51791;
var state_51839__$1 = (function (){var statearr_51863 = state_51839;
(statearr_51863[(14)] = inst_51790);

(statearr_51863[(9)] = inst_51767__$1);

(statearr_51863[(10)] = inst_51769__$1);

(statearr_51863[(11)] = inst_51770__$1);

(statearr_51863[(12)] = inst_51768__$1);

return statearr_51863;
})();
var statearr_51864_53165 = state_51839__$1;
(statearr_51864_53165[(2)] = null);

(statearr_51864_53165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (22))){
var state_51839__$1 = state_51839;
var statearr_51869_53166 = state_51839__$1;
(statearr_51869_53166[(2)] = null);

(statearr_51869_53166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (6))){
var inst_51752 = (state_51839[(13)]);
var inst_51765 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51752) : f.call(null,inst_51752));
var inst_51766 = cljs.core.seq(inst_51765);
var inst_51767 = inst_51766;
var inst_51768 = null;
var inst_51769 = (0);
var inst_51770 = (0);
var state_51839__$1 = (function (){var statearr_51870 = state_51839;
(statearr_51870[(9)] = inst_51767);

(statearr_51870[(10)] = inst_51769);

(statearr_51870[(11)] = inst_51770);

(statearr_51870[(12)] = inst_51768);

return statearr_51870;
})();
var statearr_51873_53168 = state_51839__$1;
(statearr_51873_53168[(2)] = null);

(statearr_51873_53168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (17))){
var inst_51796 = (state_51839[(7)]);
var inst_51806 = cljs.core.chunk_first(inst_51796);
var inst_51807 = cljs.core.chunk_rest(inst_51796);
var inst_51808 = cljs.core.count(inst_51806);
var inst_51767 = inst_51807;
var inst_51768 = inst_51806;
var inst_51769 = inst_51808;
var inst_51770 = (0);
var state_51839__$1 = (function (){var statearr_51875 = state_51839;
(statearr_51875[(9)] = inst_51767);

(statearr_51875[(10)] = inst_51769);

(statearr_51875[(11)] = inst_51770);

(statearr_51875[(12)] = inst_51768);

return statearr_51875;
})();
var statearr_51876_53170 = state_51839__$1;
(statearr_51876_53170[(2)] = null);

(statearr_51876_53170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (3))){
var inst_51834 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51839__$1,inst_51834);
} else {
if((state_val_51840 === (12))){
var inst_51822 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
var statearr_51938_53171 = state_51839__$1;
(statearr_51938_53171[(2)] = inst_51822);

(statearr_51938_53171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (2))){
var state_51839__$1 = state_51839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51839__$1,(4),in$);
} else {
if((state_val_51840 === (23))){
var inst_51830 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
var statearr_51946_53172 = state_51839__$1;
(statearr_51946_53172[(2)] = inst_51830);

(statearr_51946_53172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (19))){
var inst_51817 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
var statearr_51947_53173 = state_51839__$1;
(statearr_51947_53173[(2)] = inst_51817);

(statearr_51947_53173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (11))){
var inst_51767 = (state_51839[(9)]);
var inst_51796 = (state_51839[(7)]);
var inst_51796__$1 = cljs.core.seq(inst_51767);
var state_51839__$1 = (function (){var statearr_51948 = state_51839;
(statearr_51948[(7)] = inst_51796__$1);

return statearr_51948;
})();
if(inst_51796__$1){
var statearr_51949_53174 = state_51839__$1;
(statearr_51949_53174[(1)] = (14));

} else {
var statearr_51950_53175 = state_51839__$1;
(statearr_51950_53175[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (9))){
var inst_51824 = (state_51839[(2)]);
var inst_51825 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51839__$1 = (function (){var statearr_51951 = state_51839;
(statearr_51951[(15)] = inst_51824);

return statearr_51951;
})();
if(cljs.core.truth_(inst_51825)){
var statearr_51952_53176 = state_51839__$1;
(statearr_51952_53176[(1)] = (21));

} else {
var statearr_51953_53177 = state_51839__$1;
(statearr_51953_53177[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (5))){
var inst_51757 = cljs.core.async.close_BANG_(out);
var state_51839__$1 = state_51839;
var statearr_51954_53179 = state_51839__$1;
(statearr_51954_53179[(2)] = inst_51757);

(statearr_51954_53179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (14))){
var inst_51796 = (state_51839[(7)]);
var inst_51804 = cljs.core.chunked_seq_QMARK_(inst_51796);
var state_51839__$1 = state_51839;
if(inst_51804){
var statearr_51955_53180 = state_51839__$1;
(statearr_51955_53180[(1)] = (17));

} else {
var statearr_51956_53181 = state_51839__$1;
(statearr_51956_53181[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (16))){
var inst_51820 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
var statearr_51960_53182 = state_51839__$1;
(statearr_51960_53182[(2)] = inst_51820);

(statearr_51960_53182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (10))){
var inst_51770 = (state_51839[(11)]);
var inst_51768 = (state_51839[(12)]);
var inst_51786 = cljs.core._nth(inst_51768,inst_51770);
var state_51839__$1 = state_51839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51839__$1,(13),out,inst_51786);
} else {
if((state_val_51840 === (18))){
var inst_51796 = (state_51839[(7)]);
var inst_51811 = cljs.core.first(inst_51796);
var state_51839__$1 = state_51839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51839__$1,(20),out,inst_51811);
} else {
if((state_val_51840 === (8))){
var inst_51769 = (state_51839[(10)]);
var inst_51770 = (state_51839[(11)]);
var inst_51772 = (inst_51770 < inst_51769);
var inst_51773 = inst_51772;
var state_51839__$1 = state_51839;
if(cljs.core.truth_(inst_51773)){
var statearr_51963_53183 = state_51839__$1;
(statearr_51963_53183[(1)] = (10));

} else {
var statearr_51964_53184 = state_51839__$1;
(statearr_51964_53184[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__49615__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49615__auto____0 = (function (){
var statearr_52027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52027[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49615__auto__);

(statearr_52027[(1)] = (1));

return statearr_52027;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49615__auto____1 = (function (state_51839){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_51839);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e52028){var ex__49618__auto__ = e52028;
var statearr_52029_53186 = state_51839;
(statearr_52029_53186[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_51839[(4)]))){
var statearr_52030_53187 = state_51839;
(statearr_52030_53187[(1)] = cljs.core.first((state_51839[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53188 = state_51839;
state_51839 = G__53188;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49615__auto__ = function(state_51839){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49615__auto____1.call(this,state_51839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49615__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49615__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_52031 = f__49797__auto__();
(statearr_52031[(6)] = c__49796__auto__);

return statearr_52031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));

return c__49796__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52034 = arguments.length;
switch (G__52034) {
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
var G__52038 = arguments.length;
switch (G__52038) {
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
var G__52044 = arguments.length;
switch (G__52044) {
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
var c__49796__auto___53199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_52142){
var state_val_52143 = (state_52142[(1)]);
if((state_val_52143 === (7))){
var inst_52136 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52148_53202 = state_52142__$1;
(statearr_52148_53202[(2)] = inst_52136);

(statearr_52148_53202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (1))){
var inst_52094 = null;
var state_52142__$1 = (function (){var statearr_52154 = state_52142;
(statearr_52154[(7)] = inst_52094);

return statearr_52154;
})();
var statearr_52155_53203 = state_52142__$1;
(statearr_52155_53203[(2)] = null);

(statearr_52155_53203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (4))){
var inst_52110 = (state_52142[(8)]);
var inst_52110__$1 = (state_52142[(2)]);
var inst_52122 = (inst_52110__$1 == null);
var inst_52123 = cljs.core.not(inst_52122);
var state_52142__$1 = (function (){var statearr_52156 = state_52142;
(statearr_52156[(8)] = inst_52110__$1);

return statearr_52156;
})();
if(inst_52123){
var statearr_52157_53206 = state_52142__$1;
(statearr_52157_53206[(1)] = (5));

} else {
var statearr_52158_53207 = state_52142__$1;
(statearr_52158_53207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (6))){
var state_52142__$1 = state_52142;
var statearr_52159_53208 = state_52142__$1;
(statearr_52159_53208[(2)] = null);

(statearr_52159_53208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (3))){
var inst_52138 = (state_52142[(2)]);
var inst_52139 = cljs.core.async.close_BANG_(out);
var state_52142__$1 = (function (){var statearr_52164 = state_52142;
(statearr_52164[(9)] = inst_52138);

return statearr_52164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52142__$1,inst_52139);
} else {
if((state_val_52143 === (2))){
var state_52142__$1 = state_52142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52142__$1,(4),ch);
} else {
if((state_val_52143 === (11))){
var inst_52110 = (state_52142[(8)]);
var inst_52130 = (state_52142[(2)]);
var inst_52094 = inst_52110;
var state_52142__$1 = (function (){var statearr_52165 = state_52142;
(statearr_52165[(10)] = inst_52130);

(statearr_52165[(7)] = inst_52094);

return statearr_52165;
})();
var statearr_52166_53210 = state_52142__$1;
(statearr_52166_53210[(2)] = null);

(statearr_52166_53210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (9))){
var inst_52110 = (state_52142[(8)]);
var state_52142__$1 = state_52142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52142__$1,(11),out,inst_52110);
} else {
if((state_val_52143 === (5))){
var inst_52110 = (state_52142[(8)]);
var inst_52094 = (state_52142[(7)]);
var inst_52125 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52110,inst_52094);
var state_52142__$1 = state_52142;
if(inst_52125){
var statearr_52173_53211 = state_52142__$1;
(statearr_52173_53211[(1)] = (8));

} else {
var statearr_52174_53212 = state_52142__$1;
(statearr_52174_53212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (10))){
var inst_52133 = (state_52142[(2)]);
var state_52142__$1 = state_52142;
var statearr_52177_53213 = state_52142__$1;
(statearr_52177_53213[(2)] = inst_52133);

(statearr_52177_53213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52143 === (8))){
var inst_52094 = (state_52142[(7)]);
var tmp52171 = inst_52094;
var inst_52094__$1 = tmp52171;
var state_52142__$1 = (function (){var statearr_52179 = state_52142;
(statearr_52179[(7)] = inst_52094__$1);

return statearr_52179;
})();
var statearr_52180_53214 = state_52142__$1;
(statearr_52180_53214[(2)] = null);

(statearr_52180_53214[(1)] = (2));


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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_52186 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52186[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_52186[(1)] = (1));

return statearr_52186;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_52142){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_52142);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e52189){var ex__49618__auto__ = e52189;
var statearr_52190_53219 = state_52142;
(statearr_52190_53219[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_52142[(4)]))){
var statearr_52191_53220 = state_52142;
(statearr_52191_53220[(1)] = cljs.core.first((state_52142[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53221 = state_52142;
state_52142 = G__53221;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_52142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_52142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_52192 = f__49797__auto__();
(statearr_52192[(6)] = c__49796__auto___53199);

return statearr_52192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52202 = arguments.length;
switch (G__52202) {
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
var c__49796__auto___53226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_52255){
var state_val_52256 = (state_52255[(1)]);
if((state_val_52256 === (7))){
var inst_52251 = (state_52255[(2)]);
var state_52255__$1 = state_52255;
var statearr_52258_53228 = state_52255__$1;
(statearr_52258_53228[(2)] = inst_52251);

(statearr_52258_53228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (1))){
var inst_52212 = (new Array(n));
var inst_52213 = inst_52212;
var inst_52214 = (0);
var state_52255__$1 = (function (){var statearr_52261 = state_52255;
(statearr_52261[(7)] = inst_52213);

(statearr_52261[(8)] = inst_52214);

return statearr_52261;
})();
var statearr_52264_53233 = state_52255__$1;
(statearr_52264_53233[(2)] = null);

(statearr_52264_53233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (4))){
var inst_52217 = (state_52255[(9)]);
var inst_52217__$1 = (state_52255[(2)]);
var inst_52219 = (inst_52217__$1 == null);
var inst_52220 = cljs.core.not(inst_52219);
var state_52255__$1 = (function (){var statearr_52276 = state_52255;
(statearr_52276[(9)] = inst_52217__$1);

return statearr_52276;
})();
if(inst_52220){
var statearr_52277_53234 = state_52255__$1;
(statearr_52277_53234[(1)] = (5));

} else {
var statearr_52278_53235 = state_52255__$1;
(statearr_52278_53235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (15))){
var inst_52245 = (state_52255[(2)]);
var state_52255__$1 = state_52255;
var statearr_52289_53236 = state_52255__$1;
(statearr_52289_53236[(2)] = inst_52245);

(statearr_52289_53236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (13))){
var state_52255__$1 = state_52255;
var statearr_52295_53237 = state_52255__$1;
(statearr_52295_53237[(2)] = null);

(statearr_52295_53237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (6))){
var inst_52214 = (state_52255[(8)]);
var inst_52241 = (inst_52214 > (0));
var state_52255__$1 = state_52255;
if(cljs.core.truth_(inst_52241)){
var statearr_52296_53238 = state_52255__$1;
(statearr_52296_53238[(1)] = (12));

} else {
var statearr_52297_53239 = state_52255__$1;
(statearr_52297_53239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (3))){
var inst_52253 = (state_52255[(2)]);
var state_52255__$1 = state_52255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52255__$1,inst_52253);
} else {
if((state_val_52256 === (12))){
var inst_52213 = (state_52255[(7)]);
var inst_52243 = cljs.core.vec(inst_52213);
var state_52255__$1 = state_52255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52255__$1,(15),out,inst_52243);
} else {
if((state_val_52256 === (2))){
var state_52255__$1 = state_52255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52255__$1,(4),ch);
} else {
if((state_val_52256 === (11))){
var inst_52233 = (state_52255[(2)]);
var inst_52234 = (new Array(n));
var inst_52213 = inst_52234;
var inst_52214 = (0);
var state_52255__$1 = (function (){var statearr_52299 = state_52255;
(statearr_52299[(10)] = inst_52233);

(statearr_52299[(7)] = inst_52213);

(statearr_52299[(8)] = inst_52214);

return statearr_52299;
})();
var statearr_52300_53241 = state_52255__$1;
(statearr_52300_53241[(2)] = null);

(statearr_52300_53241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (9))){
var inst_52213 = (state_52255[(7)]);
var inst_52231 = cljs.core.vec(inst_52213);
var state_52255__$1 = state_52255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52255__$1,(11),out,inst_52231);
} else {
if((state_val_52256 === (5))){
var inst_52217 = (state_52255[(9)]);
var inst_52226 = (state_52255[(11)]);
var inst_52213 = (state_52255[(7)]);
var inst_52214 = (state_52255[(8)]);
var inst_52224 = (inst_52213[inst_52214] = inst_52217);
var inst_52226__$1 = (inst_52214 + (1));
var inst_52227 = (inst_52226__$1 < n);
var state_52255__$1 = (function (){var statearr_52301 = state_52255;
(statearr_52301[(11)] = inst_52226__$1);

(statearr_52301[(12)] = inst_52224);

return statearr_52301;
})();
if(cljs.core.truth_(inst_52227)){
var statearr_52302_53242 = state_52255__$1;
(statearr_52302_53242[(1)] = (8));

} else {
var statearr_52303_53243 = state_52255__$1;
(statearr_52303_53243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (14))){
var inst_52248 = (state_52255[(2)]);
var inst_52249 = cljs.core.async.close_BANG_(out);
var state_52255__$1 = (function (){var statearr_52305 = state_52255;
(statearr_52305[(13)] = inst_52248);

return statearr_52305;
})();
var statearr_52306_53244 = state_52255__$1;
(statearr_52306_53244[(2)] = inst_52249);

(statearr_52306_53244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (10))){
var inst_52237 = (state_52255[(2)]);
var state_52255__$1 = state_52255;
var statearr_52307_53246 = state_52255__$1;
(statearr_52307_53246[(2)] = inst_52237);

(statearr_52307_53246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52256 === (8))){
var inst_52226 = (state_52255[(11)]);
var inst_52213 = (state_52255[(7)]);
var tmp52304 = inst_52213;
var inst_52213__$1 = tmp52304;
var inst_52214 = inst_52226;
var state_52255__$1 = (function (){var statearr_52308 = state_52255;
(statearr_52308[(7)] = inst_52213__$1);

(statearr_52308[(8)] = inst_52214);

return statearr_52308;
})();
var statearr_52309_53249 = state_52255__$1;
(statearr_52309_53249[(2)] = null);

(statearr_52309_53249[(1)] = (2));


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
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_52316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52316[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_52316[(1)] = (1));

return statearr_52316;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_52255){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_52255);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e52318){var ex__49618__auto__ = e52318;
var statearr_52320_53250 = state_52255;
(statearr_52320_53250[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_52255[(4)]))){
var statearr_52322_53251 = state_52255;
(statearr_52322_53251[(1)] = cljs.core.first((state_52255[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53252 = state_52255;
state_52255 = G__53252;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_52255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_52255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_52323 = f__49797__auto__();
(statearr_52323[(6)] = c__49796__auto___53226);

return statearr_52323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52329 = arguments.length;
switch (G__52329) {
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
var c__49796__auto___53254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_52396){
var state_val_52397 = (state_52396[(1)]);
if((state_val_52397 === (7))){
var inst_52392 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
var statearr_52400_53255 = state_52396__$1;
(statearr_52400_53255[(2)] = inst_52392);

(statearr_52400_53255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (1))){
var inst_52342 = [];
var inst_52343 = inst_52342;
var inst_52344 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52396__$1 = (function (){var statearr_52404 = state_52396;
(statearr_52404[(7)] = inst_52344);

(statearr_52404[(8)] = inst_52343);

return statearr_52404;
})();
var statearr_52409_53256 = state_52396__$1;
(statearr_52409_53256[(2)] = null);

(statearr_52409_53256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (4))){
var inst_52347 = (state_52396[(9)]);
var inst_52347__$1 = (state_52396[(2)]);
var inst_52349 = (inst_52347__$1 == null);
var inst_52351 = cljs.core.not(inst_52349);
var state_52396__$1 = (function (){var statearr_52414 = state_52396;
(statearr_52414[(9)] = inst_52347__$1);

return statearr_52414;
})();
if(inst_52351){
var statearr_52415_53257 = state_52396__$1;
(statearr_52415_53257[(1)] = (5));

} else {
var statearr_52416_53258 = state_52396__$1;
(statearr_52416_53258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (15))){
var inst_52343 = (state_52396[(8)]);
var inst_52383 = cljs.core.vec(inst_52343);
var state_52396__$1 = state_52396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52396__$1,(18),out,inst_52383);
} else {
if((state_val_52397 === (13))){
var inst_52373 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
var statearr_52418_53259 = state_52396__$1;
(statearr_52418_53259[(2)] = inst_52373);

(statearr_52418_53259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (6))){
var inst_52343 = (state_52396[(8)]);
var inst_52378 = inst_52343.length;
var inst_52379 = (inst_52378 > (0));
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52379)){
var statearr_52419_53260 = state_52396__$1;
(statearr_52419_53260[(1)] = (15));

} else {
var statearr_52420_53261 = state_52396__$1;
(statearr_52420_53261[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (17))){
var inst_52388 = (state_52396[(2)]);
var inst_52390 = cljs.core.async.close_BANG_(out);
var state_52396__$1 = (function (){var statearr_52425 = state_52396;
(statearr_52425[(10)] = inst_52388);

return statearr_52425;
})();
var statearr_52429_53262 = state_52396__$1;
(statearr_52429_53262[(2)] = inst_52390);

(statearr_52429_53262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (3))){
var inst_52394 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52396__$1,inst_52394);
} else {
if((state_val_52397 === (12))){
var inst_52343 = (state_52396[(8)]);
var inst_52365 = cljs.core.vec(inst_52343);
var state_52396__$1 = state_52396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52396__$1,(14),out,inst_52365);
} else {
if((state_val_52397 === (2))){
var state_52396__$1 = state_52396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52396__$1,(4),ch);
} else {
if((state_val_52397 === (11))){
var inst_52347 = (state_52396[(9)]);
var inst_52343 = (state_52396[(8)]);
var inst_52353 = (state_52396[(11)]);
var inst_52362 = inst_52343.push(inst_52347);
var tmp52432 = inst_52343;
var inst_52343__$1 = tmp52432;
var inst_52344 = inst_52353;
var state_52396__$1 = (function (){var statearr_52434 = state_52396;
(statearr_52434[(7)] = inst_52344);

(statearr_52434[(8)] = inst_52343__$1);

(statearr_52434[(12)] = inst_52362);

return statearr_52434;
})();
var statearr_52435_53263 = state_52396__$1;
(statearr_52435_53263[(2)] = null);

(statearr_52435_53263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (9))){
var inst_52344 = (state_52396[(7)]);
var inst_52357 = cljs.core.keyword_identical_QMARK_(inst_52344,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52396__$1 = state_52396;
var statearr_52436_53264 = state_52396__$1;
(statearr_52436_53264[(2)] = inst_52357);

(statearr_52436_53264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (5))){
var inst_52347 = (state_52396[(9)]);
var inst_52344 = (state_52396[(7)]);
var inst_52353 = (state_52396[(11)]);
var inst_52354 = (state_52396[(13)]);
var inst_52353__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52347) : f.call(null,inst_52347));
var inst_52354__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52353__$1,inst_52344);
var state_52396__$1 = (function (){var statearr_52438 = state_52396;
(statearr_52438[(11)] = inst_52353__$1);

(statearr_52438[(13)] = inst_52354__$1);

return statearr_52438;
})();
if(inst_52354__$1){
var statearr_52439_53265 = state_52396__$1;
(statearr_52439_53265[(1)] = (8));

} else {
var statearr_52440_53266 = state_52396__$1;
(statearr_52440_53266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (14))){
var inst_52347 = (state_52396[(9)]);
var inst_52353 = (state_52396[(11)]);
var inst_52367 = (state_52396[(2)]);
var inst_52369 = [];
var inst_52370 = inst_52369.push(inst_52347);
var inst_52343 = inst_52369;
var inst_52344 = inst_52353;
var state_52396__$1 = (function (){var statearr_52444 = state_52396;
(statearr_52444[(7)] = inst_52344);

(statearr_52444[(8)] = inst_52343);

(statearr_52444[(14)] = inst_52367);

(statearr_52444[(15)] = inst_52370);

return statearr_52444;
})();
var statearr_52445_53267 = state_52396__$1;
(statearr_52445_53267[(2)] = null);

(statearr_52445_53267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (16))){
var state_52396__$1 = state_52396;
var statearr_52446_53268 = state_52396__$1;
(statearr_52446_53268[(2)] = null);

(statearr_52446_53268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (10))){
var inst_52359 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
if(cljs.core.truth_(inst_52359)){
var statearr_52449_53269 = state_52396__$1;
(statearr_52449_53269[(1)] = (11));

} else {
var statearr_52450_53270 = state_52396__$1;
(statearr_52450_53270[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (18))){
var inst_52385 = (state_52396[(2)]);
var state_52396__$1 = state_52396;
var statearr_52453_53271 = state_52396__$1;
(statearr_52453_53271[(2)] = inst_52385);

(statearr_52453_53271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52397 === (8))){
var inst_52354 = (state_52396[(13)]);
var state_52396__$1 = state_52396;
var statearr_52455_53272 = state_52396__$1;
(statearr_52455_53272[(2)] = inst_52354);

(statearr_52455_53272[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__49615__auto__ = null;
var cljs$core$async$state_machine__49615__auto____0 = (function (){
var statearr_52456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52456[(0)] = cljs$core$async$state_machine__49615__auto__);

(statearr_52456[(1)] = (1));

return statearr_52456;
});
var cljs$core$async$state_machine__49615__auto____1 = (function (state_52396){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_52396);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e52461){var ex__49618__auto__ = e52461;
var statearr_52462_53274 = state_52396;
(statearr_52462_53274[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_52396[(4)]))){
var statearr_52463_53275 = state_52396;
(statearr_52463_53275[(1)] = cljs.core.first((state_52396[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53276 = state_52396;
state_52396 = G__53276;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
cljs$core$async$state_machine__49615__auto__ = function(state_52396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49615__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49615__auto____1.call(this,state_52396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49615__auto____0;
cljs$core$async$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49615__auto____1;
return cljs$core$async$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_52470 = f__49797__auto__();
(statearr_52470[(6)] = c__49796__auto___53254);

return statearr_52470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
