goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__49796__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49797__auto__ = (function (){var switch__49614__auto__ = (function (state_55402){
var state_val_55403 = (state_55402[(1)]);
if((state_val_55403 === (7))){
var inst_55395 = (state_55402[(2)]);
var state_55402__$1 = state_55402;
var statearr_55405_55468 = state_55402__$1;
(statearr_55405_55468[(2)] = inst_55395);

(statearr_55405_55468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55403 === (1))){
var state_55402__$1 = state_55402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55402__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_55403 === (4))){
var inst_55397 = (state_55402[(2)]);
var state_55402__$1 = state_55402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55402__$1,inst_55397);
} else {
if((state_val_55403 === (6))){
var inst_55393 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_55402__$1 = state_55402;
var statearr_55407_55471 = state_55402__$1;
(statearr_55407_55471[(2)] = inst_55393);

(statearr_55407_55471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55403 === (3))){
var inst_55376 = (state_55402[(7)]);
var state_55402__$1 = state_55402;
if(cljs.core.truth_(inst_55376)){
var statearr_55408_55472 = state_55402__$1;
(statearr_55408_55472[(1)] = (5));

} else {
var statearr_55409_55473 = state_55402__$1;
(statearr_55409_55473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55403 === (12))){
var inst_55390 = (state_55402[(2)]);
var inst_55376 = inst_55390;
var state_55402__$1 = (function (){var statearr_55411 = state_55402;
(statearr_55411[(7)] = inst_55376);

return statearr_55411;
})();
var statearr_55412_55474 = state_55402__$1;
(statearr_55412_55474[(2)] = null);

(statearr_55412_55474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55403 === (2))){
var inst_55375 = (state_55402[(2)]);
var inst_55376 = inst_55375;
var state_55402__$1 = (function (){var statearr_55413 = state_55402;
(statearr_55413[(7)] = inst_55376);

return statearr_55413;
})();
var statearr_55414_55475 = state_55402__$1;
(statearr_55414_55475[(2)] = null);

(statearr_55414_55475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55403 === (11))){
var _ = (function (){var statearr_55415 = state_55402;
(statearr_55415[(4)] = cljs.core.rest((state_55402[(4)])));

return statearr_55415;
})();
var state_55402__$1 = state_55402;
var ex55410 = (state_55402__$1[(2)]);
var statearr_55416_55476 = state_55402__$1;
(statearr_55416_55476[(5)] = ex55410);


var statearr_55417_55477 = state_55402__$1;
(statearr_55417_55477[(1)] = (10));

(statearr_55417_55477[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55403 === (9))){
var inst_55388 = (state_55402[(2)]);
var state_55402__$1 = (function (){var statearr_55418 = state_55402;
(statearr_55418[(8)] = inst_55388);

return statearr_55418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55402__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_55403 === (5))){
var state_55402__$1 = state_55402;
var statearr_55420_55478 = state_55402__$1;
(statearr_55420_55478[(2)] = null);

(statearr_55420_55478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55403 === (10))){
var inst_55379 = (state_55402[(2)]);
var state_55402__$1 = (function (){var statearr_55421 = state_55402;
(statearr_55421[(9)] = inst_55379);

return statearr_55421;
})();
var statearr_55422_55479 = state_55402__$1;
(statearr_55422_55479[(2)] = null);

(statearr_55422_55479[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55403 === (8))){
var inst_55376 = (state_55402[(7)]);
var _ = (function (){var statearr_55423 = state_55402;
(statearr_55423[(4)] = cljs.core.cons((11),(state_55402[(4)])));

return statearr_55423;
})();
var inst_55385 = (inst_55376.cljs$core$IFn$_invoke$arity$0 ? inst_55376.cljs$core$IFn$_invoke$arity$0() : inst_55376.call(null));
var ___$1 = (function (){var statearr_55424 = state_55402;
(statearr_55424[(4)] = cljs.core.rest((state_55402[(4)])));

return statearr_55424;
})();
var state_55402__$1 = state_55402;
var statearr_55425_55480 = state_55402__$1;
(statearr_55425_55480[(2)] = inst_55385);

(statearr_55425_55480[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__49615__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__49615__auto____0 = (function (){
var statearr_55426 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55426[(0)] = com$fulcrologic$guardrails$core$state_machine__49615__auto__);

(statearr_55426[(1)] = (1));

return statearr_55426;
});
var com$fulcrologic$guardrails$core$state_machine__49615__auto____1 = (function (state_55402){
while(true){
var ret_value__49616__auto__ = (function (){try{while(true){
var result__49617__auto__ = switch__49614__auto__(state_55402);
if(cljs.core.keyword_identical_QMARK_(result__49617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49617__auto__;
}
break;
}
}catch (e55428){var ex__49618__auto__ = e55428;
var statearr_55429_55481 = state_55402;
(statearr_55429_55481[(2)] = ex__49618__auto__);


if(cljs.core.seq((state_55402[(4)]))){
var statearr_55430_55482 = state_55402;
(statearr_55430_55482[(1)] = cljs.core.first((state_55402[(4)])));

} else {
throw ex__49618__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49616__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55483 = state_55402;
state_55402 = G__55483;
continue;
} else {
return ret_value__49616__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__49615__auto__ = function(state_55402){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__49615__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__49615__auto____1.call(this,state_55402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__49615__auto____0;
com$fulcrologic$guardrails$core$state_machine__49615__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__49615__auto____1;
return com$fulcrologic$guardrails$core$state_machine__49615__auto__;
})()
})();
var state__49798__auto__ = (function (){var statearr_55432 = f__49797__auto__();
(statearr_55432[(6)] = c__49796__auto__);

return statearr_55432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49798__auto__);
}));

return c__49796__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__55433 = data;
var map__55433__$1 = cljs.core.__destructure_map(map__55433);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55433__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__55434,spec,value){
var map__55437 = p__55434;
var map__55437__$1 = cljs.core.__destructure_map(map__55437);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_55484 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__55485 = (function (){var and__4251__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return vararg_QMARK_;
} else {
return and__4251__auto__;
}
})();
var varg_55486 = (cljs.core.truth_(vargs_QMARK__55485)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_55487 = (cljs.core.truth_(vargs_QMARK__55485)?((cljs.core.map_QMARK_(varg_55486))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_55486))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_55486))):value);
var valid_exception_55488 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_55487)){
} else {
var problem_55489 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_55487,expound_opts);
var description_55490 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_55489)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_55488,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_55490,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_55487], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_55490,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = callsite;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e55438){var e_55491 = e55438;
com.fulcrologic.guardrails.utils.report_exception(e_55491,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_55492 = (com.fulcrologic.guardrails.core.now_ms() - start_55484);
if((duration_55492 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_55492),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_55488))){
throw cljs.core.deref(valid_exception_55488);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
