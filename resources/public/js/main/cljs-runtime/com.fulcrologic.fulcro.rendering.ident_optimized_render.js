goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ident;
} else {
return and__4251__auto__;
}
})())){
var map__57977 = app__$1;
var map__57977__$1 = cljs.core.__destructure_map(map__57977);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4253__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__57978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__57979 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__57978,G__57979) : com.fulcrologic.fulcro.components.computed.call(null,G__57978,G__57979));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,1623036506,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__57980 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__57980) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__57980));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1657642414,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__57981 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__57982 = null;
var count__57983 = (0);
var i__57984 = (0);
while(true){
if((i__57984 < count__57983)){
var c = chunk__57982.cljs$core$IIndexed$_nth$arity$2(null,i__57984);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58086 = seq__57981;
var G__58087 = chunk__57982;
var G__58088 = count__57983;
var G__58089 = (i__57984 + (1));
seq__57981 = G__58086;
chunk__57982 = G__58087;
count__57983 = G__58088;
i__57984 = G__58089;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57981);
if(temp__5753__auto__){
var seq__57981__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57981__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57981__$1);
var G__58090 = cljs.core.chunk_rest(seq__57981__$1);
var G__58091 = c__4679__auto__;
var G__58092 = cljs.core.count(c__4679__auto__);
var G__58093 = (0);
seq__57981 = G__58090;
chunk__57982 = G__58091;
count__57983 = G__58092;
i__57984 = G__58093;
continue;
} else {
var c = cljs.core.first(seq__57981__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58094 = cljs.core.next(seq__57981__$1);
var G__58095 = null;
var G__58096 = (0);
var G__58097 = (0);
seq__57981 = G__58094;
chunk__57982 = G__58095;
count__57983 = G__58096;
i__57984 = G__58097;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__57992 = app__$1;
var map__57992__$1 = cljs.core.__destructure_map(map__57992);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57992__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__57993 = cljs.core.deref(runtime_atom);
var map__57993__$1 = cljs.core.__destructure_map(map__57993);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57993__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__57994 = indexes;
var map__57994__$1 = cljs.core.__destructure_map(map__57994);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57994__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57994__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57994__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__57995 = cljs.core.seq(classes);
var chunk__57996 = null;
var count__57997 = (0);
var i__57998 = (0);
while(true){
if((i__57998 < count__57997)){
var class$ = chunk__57996.cljs$core$IIndexed$_nth$arity$2(null,i__57998);
var seq__58015_58100 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__58017_58101 = null;
var count__58018_58102 = (0);
var i__58019_58103 = (0);
while(true){
if((i__58019_58103 < count__58018_58102)){
var component_58104 = chunk__58017_58101.cljs$core$IIndexed$_nth$arity$2(null,i__58019_58103);
var component_ident_58105 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58104) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58104));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58105,component_58104);


var G__58106 = seq__58015_58100;
var G__58107 = chunk__58017_58101;
var G__58108 = count__58018_58102;
var G__58109 = (i__58019_58103 + (1));
seq__58015_58100 = G__58106;
chunk__58017_58101 = G__58107;
count__58018_58102 = G__58108;
i__58019_58103 = G__58109;
continue;
} else {
var temp__5753__auto___58110 = cljs.core.seq(seq__58015_58100);
if(temp__5753__auto___58110){
var seq__58015_58111__$1 = temp__5753__auto___58110;
if(cljs.core.chunked_seq_QMARK_(seq__58015_58111__$1)){
var c__4679__auto___58112 = cljs.core.chunk_first(seq__58015_58111__$1);
var G__58113 = cljs.core.chunk_rest(seq__58015_58111__$1);
var G__58114 = c__4679__auto___58112;
var G__58115 = cljs.core.count(c__4679__auto___58112);
var G__58116 = (0);
seq__58015_58100 = G__58113;
chunk__58017_58101 = G__58114;
count__58018_58102 = G__58115;
i__58019_58103 = G__58116;
continue;
} else {
var component_58117 = cljs.core.first(seq__58015_58111__$1);
var component_ident_58118 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58117) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58117));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58118,component_58117);


var G__58119 = cljs.core.next(seq__58015_58111__$1);
var G__58120 = null;
var G__58121 = (0);
var G__58122 = (0);
seq__58015_58100 = G__58119;
chunk__58017_58101 = G__58120;
count__58018_58102 = G__58121;
i__58019_58103 = G__58122;
continue;
}
} else {
}
}
break;
}


var G__58123 = seq__57995;
var G__58124 = chunk__57996;
var G__58125 = count__57997;
var G__58126 = (i__57998 + (1));
seq__57995 = G__58123;
chunk__57996 = G__58124;
count__57997 = G__58125;
i__57998 = G__58126;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57995);
if(temp__5753__auto__){
var seq__57995__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57995__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57995__$1);
var G__58127 = cljs.core.chunk_rest(seq__57995__$1);
var G__58128 = c__4679__auto__;
var G__58129 = cljs.core.count(c__4679__auto__);
var G__58130 = (0);
seq__57995 = G__58127;
chunk__57996 = G__58128;
count__57997 = G__58129;
i__57998 = G__58130;
continue;
} else {
var class$ = cljs.core.first(seq__57995__$1);
var seq__58021_58134 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__58023_58135 = null;
var count__58024_58136 = (0);
var i__58025_58137 = (0);
while(true){
if((i__58025_58137 < count__58024_58136)){
var component_58138 = chunk__58023_58135.cljs$core$IIndexed$_nth$arity$2(null,i__58025_58137);
var component_ident_58139 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58138) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58138));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58139,component_58138);


var G__58140 = seq__58021_58134;
var G__58141 = chunk__58023_58135;
var G__58142 = count__58024_58136;
var G__58143 = (i__58025_58137 + (1));
seq__58021_58134 = G__58140;
chunk__58023_58135 = G__58141;
count__58024_58136 = G__58142;
i__58025_58137 = G__58143;
continue;
} else {
var temp__5753__auto___58144__$1 = cljs.core.seq(seq__58021_58134);
if(temp__5753__auto___58144__$1){
var seq__58021_58145__$1 = temp__5753__auto___58144__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58021_58145__$1)){
var c__4679__auto___58146 = cljs.core.chunk_first(seq__58021_58145__$1);
var G__58147 = cljs.core.chunk_rest(seq__58021_58145__$1);
var G__58148 = c__4679__auto___58146;
var G__58149 = cljs.core.count(c__4679__auto___58146);
var G__58150 = (0);
seq__58021_58134 = G__58147;
chunk__58023_58135 = G__58148;
count__58024_58136 = G__58149;
i__58025_58137 = G__58150;
continue;
} else {
var component_58151 = cljs.core.first(seq__58021_58145__$1);
var component_ident_58152 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58151) : com.fulcrologic.fulcro.components.get_ident.call(null,component_58151));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58152,component_58151);


var G__58153 = cljs.core.next(seq__58021_58145__$1);
var G__58154 = null;
var G__58155 = (0);
var G__58156 = (0);
seq__58021_58134 = G__58153;
chunk__58023_58135 = G__58154;
count__58024_58136 = G__58155;
i__58025_58137 = G__58156;
continue;
}
} else {
}
}
break;
}


var G__58157 = cljs.core.next(seq__57995__$1);
var G__58158 = null;
var G__58159 = (0);
var G__58160 = (0);
seq__57995 = G__58157;
chunk__57996 = G__58158;
count__57997 = G__58159;
i__57998 = G__58160;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__58030 = app__$1;
var map__58030__$1 = cljs.core.__destructure_map(map__58030);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58030__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58031 = cljs.core.deref(runtime_atom);
var map__58031__$1 = cljs.core.__destructure_map(map__58031);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58031__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58032 = indexes;
var map__58032__$1 = cljs.core.__destructure_map(map__58032);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58032__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58032__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58028_SHARP_,p2__58029_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__58028_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__58029_SHARP_) : class__GT_components.call(null,p2__58029_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__58035 = app__$1;
var map__58035__$1 = cljs.core.__destructure_map(map__58035);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58035__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58035__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__58036 = cljs.core.deref(runtime_atom);
var map__58036__$1 = cljs.core.__destructure_map(map__58036);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58036__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58036__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58036__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58036__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__58037 = indexes;
var map__58037__$1 = cljs.core.__destructure_map(map__58037);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58037__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58037__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58037__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58037__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__58038 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__58038__$1 = cljs.core.__destructure_map(map__58038);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58038__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58038__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__58039_58163 = cljs.core.seq(limited_to_render);
var chunk__58041_58164 = null;
var count__58042_58165 = (0);
var i__58043_58166 = (0);
while(true){
if((i__58043_58166 < count__58042_58165)){
var c_58167 = chunk__58041_58164.cljs$core$IIndexed$_nth$arity$2(null,i__58043_58166);
var ident_58168 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58167) : com.fulcrologic.fulcro.components.get_ident.call(null,c_58167));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58168,c_58167);


var G__58169 = seq__58039_58163;
var G__58170 = chunk__58041_58164;
var G__58171 = count__58042_58165;
var G__58172 = (i__58043_58166 + (1));
seq__58039_58163 = G__58169;
chunk__58041_58164 = G__58170;
count__58042_58165 = G__58171;
i__58043_58166 = G__58172;
continue;
} else {
var temp__5753__auto___58173 = cljs.core.seq(seq__58039_58163);
if(temp__5753__auto___58173){
var seq__58039_58174__$1 = temp__5753__auto___58173;
if(cljs.core.chunked_seq_QMARK_(seq__58039_58174__$1)){
var c__4679__auto___58175 = cljs.core.chunk_first(seq__58039_58174__$1);
var G__58177 = cljs.core.chunk_rest(seq__58039_58174__$1);
var G__58178 = c__4679__auto___58175;
var G__58179 = cljs.core.count(c__4679__auto___58175);
var G__58180 = (0);
seq__58039_58163 = G__58177;
chunk__58041_58164 = G__58178;
count__58042_58165 = G__58179;
i__58043_58166 = G__58180;
continue;
} else {
var c_58181 = cljs.core.first(seq__58039_58174__$1);
var ident_58183 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58181) : com.fulcrologic.fulcro.components.get_ident.call(null,c_58181));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58183,c_58181);


var G__58185 = cljs.core.next(seq__58039_58174__$1);
var G__58186 = null;
var G__58187 = (0);
var G__58188 = (0);
seq__58039_58163 = G__58185;
chunk__58041_58164 = G__58186;
count__58042_58165 = G__58187;
i__58043_58166 = G__58188;
continue;
}
} else {
}
}
break;
}

var seq__58048 = cljs.core.seq(limited_idents);
var chunk__58049 = null;
var count__58050 = (0);
var i__58051 = (0);
while(true){
if((i__58051 < count__58050)){
var i = chunk__58049.cljs$core$IIndexed$_nth$arity$2(null,i__58051);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58189 = seq__58048;
var G__58190 = chunk__58049;
var G__58191 = count__58050;
var G__58192 = (i__58051 + (1));
seq__58048 = G__58189;
chunk__58049 = G__58190;
count__58050 = G__58191;
i__58051 = G__58192;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58048);
if(temp__5753__auto__){
var seq__58048__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58048__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58048__$1);
var G__58194 = cljs.core.chunk_rest(seq__58048__$1);
var G__58195 = c__4679__auto__;
var G__58196 = cljs.core.count(c__4679__auto__);
var G__58197 = (0);
seq__58048 = G__58194;
chunk__58049 = G__58195;
count__58050 = G__58196;
i__58051 = G__58197;
continue;
} else {
var i = cljs.core.first(seq__58048__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58199 = cljs.core.next(seq__58048__$1);
var G__58200 = null;
var G__58201 = (0);
var G__58202 = (0);
seq__58048 = G__58199;
chunk__58049 = G__58200;
count__58050 = G__58201;
i__58051 = G__58202;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__58054 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__58054__$1 = cljs.core.__destructure_map(map__58054);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__58055_58205 = cljs.core.seq(all_idents);
var chunk__58056_58206 = null;
var count__58057_58207 = (0);
var i__58058_58208 = (0);
while(true){
if((i__58058_58208 < count__58057_58207)){
var i_58210 = chunk__58056_58206.cljs$core$IIndexed$_nth$arity$2(null,i__58058_58208);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58210);


var G__58212 = seq__58055_58205;
var G__58213 = chunk__58056_58206;
var G__58214 = count__58057_58207;
var G__58215 = (i__58058_58208 + (1));
seq__58055_58205 = G__58212;
chunk__58056_58206 = G__58213;
count__58057_58207 = G__58214;
i__58058_58208 = G__58215;
continue;
} else {
var temp__5753__auto___58216 = cljs.core.seq(seq__58055_58205);
if(temp__5753__auto___58216){
var seq__58055_58217__$1 = temp__5753__auto___58216;
if(cljs.core.chunked_seq_QMARK_(seq__58055_58217__$1)){
var c__4679__auto___58218 = cljs.core.chunk_first(seq__58055_58217__$1);
var G__58219 = cljs.core.chunk_rest(seq__58055_58217__$1);
var G__58220 = c__4679__auto___58218;
var G__58221 = cljs.core.count(c__4679__auto___58218);
var G__58222 = (0);
seq__58055_58205 = G__58219;
chunk__58056_58206 = G__58220;
count__58057_58207 = G__58221;
i__58058_58208 = G__58222;
continue;
} else {
var i_58223 = cljs.core.first(seq__58055_58217__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58223);


var G__58224 = cljs.core.next(seq__58055_58217__$1);
var G__58225 = null;
var G__58226 = (0);
var G__58227 = (0);
seq__58055_58205 = G__58224;
chunk__58056_58206 = G__58225;
count__58057_58207 = G__58226;
i__58058_58208 = G__58227;
continue;
}
} else {
}
}
break;
}

var seq__58062 = cljs.core.seq(extra_to_force);
var chunk__58063 = null;
var count__58064 = (0);
var i__58065 = (0);
while(true){
if((i__58065 < count__58064)){
var c = chunk__58063.cljs$core$IIndexed$_nth$arity$2(null,i__58065);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__58231 = seq__58062;
var G__58232 = chunk__58063;
var G__58233 = count__58064;
var G__58234 = (i__58065 + (1));
seq__58062 = G__58231;
chunk__58063 = G__58232;
count__58064 = G__58233;
i__58065 = G__58234;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58062);
if(temp__5753__auto__){
var seq__58062__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58062__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58062__$1);
var G__58236 = cljs.core.chunk_rest(seq__58062__$1);
var G__58237 = c__4679__auto__;
var G__58238 = cljs.core.count(c__4679__auto__);
var G__58239 = (0);
seq__58062 = G__58236;
chunk__58063 = G__58237;
count__58064 = G__58238;
i__58065 = G__58239;
continue;
} else {
var c = cljs.core.first(seq__58062__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__58240 = cljs.core.next(seq__58062__$1);
var G__58241 = null;
var G__58242 = (0);
var G__58243 = (0);
seq__58062 = G__58240;
chunk__58063 = G__58241;
count__58064 = G__58242;
i__58065 = G__58243;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__58069 = arguments.length;
switch (G__58069) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__58073){
var map__58074 = p__58073;
var map__58074__$1 = cljs.core.__destructure_map(map__58074);
var options = map__58074__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58074__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58074__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4253__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e58077){var e = e58077;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-21162312,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
