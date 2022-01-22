goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__60553){
var vec__60554 = p__60553;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60554,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60554,(1),null);
var pair = vec__60554;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__60562){
var vec__60563 = p__60562;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60563,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60563,(1),null);
var pair = vec__60563;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__60566){
var vec__60567 = p__60566;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60567,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60567,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__60570 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60570,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__60570;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__60572 = arguments.length;
switch (G__60572) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__60574 = component.refs;
var G__60574__$1 = (((G__60574 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__60574,name));
if((G__60574__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__60574__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__60575 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__60576 = (function (){var G__60577 = r;
if((G__60577 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__60577);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__60576) : ref.call(null,G__60576));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__60575) : factory.call(null,G__60575));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__60582 = arguments.length;
switch (G__60582) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___62382 = arguments.length;
var i__4865__auto___62383 = (0);
while(true){
if((i__4865__auto___62383 < len__4864__auto___62382)){
args_arr__4885__auto__.push((arguments[i__4865__auto___62383]));

var G__62384 = (i__4865__auto___62383 + (1));
i__4865__auto___62383 = G__62384;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq60579){
var G__60580 = cljs.core.first(seq60579);
var seq60579__$1 = cljs.core.next(seq60579);
var G__60581 = cljs.core.first(seq60579__$1);
var seq60579__$2 = cljs.core.next(seq60579__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60580,G__60581,seq60579__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4251__auto__ = tag;
if(cljs.core.truth_(and__4251__auto__)){
var G__60583 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__60583) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__60583));
} else {
return and__4251__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x60585_62389 = ctor.prototype;
(x60585_62389.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x60585_62389.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__60584_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__60584_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4251__auto__ = state_value;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = element_value;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,969516388,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x60585_62389.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__62392__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__62392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62393__i = 0, G__62393__a = new Array(arguments.length -  0);
while (G__62393__i < G__62393__a.length) {G__62393__a[G__62393__i] = arguments[G__62393__i + 0]; ++G__62393__i;}
  args = new cljs.core.IndexedSeq(G__62393__a,0,null);
} 
return G__62392__delegate.call(this,args);};
G__62392.cljs$lang$maxFixedArity = 0;
G__62392.cljs$lang$applyTo = (function (arglist__62394){
var args = cljs.core.seq(arglist__62394);
return G__62392__delegate(args);
});
G__62392.cljs$core$IFn$_invoke$arity$variadic = G__62392__delegate;
return G__62392;
})()
;
return (function() { 
var G__62395__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5751__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__62395 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__62396__i = 0, G__62396__a = new Array(arguments.length -  1);
while (G__62396__i < G__62396__a.length) {G__62396__a[G__62396__i] = arguments[G__62396__i + 1]; ++G__62396__i;}
  children = new cljs.core.IndexedSeq(G__62396__a,0,null);
} 
return G__62395__delegate.call(this,props,children);};
G__62395.cljs$lang$maxFixedArity = 1;
G__62395.cljs$lang$applyTo = (function (arglist__62397){
var props = cljs.core.first(arglist__62397);
var children = cljs.core.rest(arglist__62397);
return G__62395__delegate(props,children);
});
G__62395.cljs$core$IFn$_invoke$arity$variadic = G__62395__delegate;
return G__62395;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__60600 = tag;
switch (G__60600) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60600)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__60602 = arguments.length;
switch (G__60602) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__60614 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__60615 = cljs.core.seq(vec__60614);
var first__60616 = cljs.core.first(seq__60615);
var seq__60615__$1 = cljs.core.next(seq__60615);
var head = first__60616;
var tail = seq__60615__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__60619 = (function (){var G__60620 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60620,tail);

return G__60620;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60619) : f.call(null,G__60619));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__60621 = (function (){var G__60622 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60622,args);

return G__60622;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60621) : f.call(null,G__60621));
} else {
if(cljs.core.object_QMARK_(head)){
var G__60623 = (function (){var G__60624 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60624,tail);

return G__60624;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60623) : f.call(null,G__60623));
} else {
if(cljs.core.map_QMARK_(head)){
var G__60625 = (function (){var G__60626 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__60626,tail);

return G__60626;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60625) : f.call(null,G__60625));
} else {
var G__60627 = (function (){var G__60628 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60628,args);

return G__60628;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60627) : f.call(null,G__60627));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__60630 = arguments.length;
switch (G__60630) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__60632 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__60633 = cljs.core.seq(vec__60632);
var first__60634 = cljs.core.first(seq__60633);
var seq__60633__$1 = cljs.core.next(seq__60633);
var head = first__60634;
var tail = seq__60633__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60637 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60637,tail);

return G__60637;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60639 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60639,args);

return G__60639;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60640 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60640,tail);

return G__60640;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60642 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__60642,tail);

return G__60642;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60643 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60643,args);

return G__60643;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62404 = arguments.length;
var i__4865__auto___62405 = (0);
while(true){
if((i__4865__auto___62405 < len__4864__auto___62404)){
args__4870__auto__.push((arguments[i__4865__auto___62405]));

var G__62406 = (i__4865__auto___62405 + (1));
i__4865__auto___62405 = G__62406;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60661 = conformed_args__59019__auto__;
var map__60661__$1 = cljs.core.__destructure_map(map__60661);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq60650){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60650));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62407 = arguments.length;
var i__4865__auto___62408 = (0);
while(true){
if((i__4865__auto___62408 < len__4864__auto___62407)){
args__4870__auto__.push((arguments[i__4865__auto___62408]));

var G__62409 = (i__4865__auto___62408 + (1));
i__4865__auto___62408 = G__62409;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60675 = conformed_args__59019__auto__;
var map__60675__$1 = cljs.core.__destructure_map(map__60675);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq60666){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60666));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62410 = arguments.length;
var i__4865__auto___62411 = (0);
while(true){
if((i__4865__auto___62411 < len__4864__auto___62410)){
args__4870__auto__.push((arguments[i__4865__auto___62411]));

var G__62412 = (i__4865__auto___62411 + (1));
i__4865__auto___62411 = G__62412;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60677 = conformed_args__59019__auto__;
var map__60677__$1 = cljs.core.__destructure_map(map__60677);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq60676){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60676));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62413 = arguments.length;
var i__4865__auto___62414 = (0);
while(true){
if((i__4865__auto___62414 < len__4864__auto___62413)){
args__4870__auto__.push((arguments[i__4865__auto___62414]));

var G__62415 = (i__4865__auto___62414 + (1));
i__4865__auto___62414 = G__62415;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60679 = conformed_args__59019__auto__;
var map__60679__$1 = cljs.core.__destructure_map(map__60679);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60679__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60679__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq60678){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60678));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62416 = arguments.length;
var i__4865__auto___62417 = (0);
while(true){
if((i__4865__auto___62417 < len__4864__auto___62416)){
args__4870__auto__.push((arguments[i__4865__auto___62417]));

var G__62418 = (i__4865__auto___62417 + (1));
i__4865__auto___62417 = G__62418;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60681 = conformed_args__59019__auto__;
var map__60681__$1 = cljs.core.__destructure_map(map__60681);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq60680){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62419 = arguments.length;
var i__4865__auto___62420 = (0);
while(true){
if((i__4865__auto___62420 < len__4864__auto___62419)){
args__4870__auto__.push((arguments[i__4865__auto___62420]));

var G__62421 = (i__4865__auto___62420 + (1));
i__4865__auto___62420 = G__62421;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60685 = conformed_args__59019__auto__;
var map__60685__$1 = cljs.core.__destructure_map(map__60685);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq60682){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60682));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62422 = arguments.length;
var i__4865__auto___62423 = (0);
while(true){
if((i__4865__auto___62423 < len__4864__auto___62422)){
args__4870__auto__.push((arguments[i__4865__auto___62423]));

var G__62424 = (i__4865__auto___62423 + (1));
i__4865__auto___62423 = G__62424;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60691 = conformed_args__59019__auto__;
var map__60691__$1 = cljs.core.__destructure_map(map__60691);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq60689){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62425 = arguments.length;
var i__4865__auto___62426 = (0);
while(true){
if((i__4865__auto___62426 < len__4864__auto___62425)){
args__4870__auto__.push((arguments[i__4865__auto___62426]));

var G__62427 = (i__4865__auto___62426 + (1));
i__4865__auto___62426 = G__62427;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60697 = conformed_args__59019__auto__;
var map__60697__$1 = cljs.core.__destructure_map(map__60697);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq60696){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60696));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62428 = arguments.length;
var i__4865__auto___62429 = (0);
while(true){
if((i__4865__auto___62429 < len__4864__auto___62428)){
args__4870__auto__.push((arguments[i__4865__auto___62429]));

var G__62430 = (i__4865__auto___62429 + (1));
i__4865__auto___62429 = G__62430;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60699 = conformed_args__59019__auto__;
var map__60699__$1 = cljs.core.__destructure_map(map__60699);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq60698){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62431 = arguments.length;
var i__4865__auto___62432 = (0);
while(true){
if((i__4865__auto___62432 < len__4864__auto___62431)){
args__4870__auto__.push((arguments[i__4865__auto___62432]));

var G__62433 = (i__4865__auto___62432 + (1));
i__4865__auto___62432 = G__62433;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60706 = conformed_args__59019__auto__;
var map__60706__$1 = cljs.core.__destructure_map(map__60706);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq60703){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60703));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62434 = arguments.length;
var i__4865__auto___62435 = (0);
while(true){
if((i__4865__auto___62435 < len__4864__auto___62434)){
args__4870__auto__.push((arguments[i__4865__auto___62435]));

var G__62436 = (i__4865__auto___62435 + (1));
i__4865__auto___62435 = G__62436;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60713 = conformed_args__59019__auto__;
var map__60713__$1 = cljs.core.__destructure_map(map__60713);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq60710){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60710));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62437 = arguments.length;
var i__4865__auto___62438 = (0);
while(true){
if((i__4865__auto___62438 < len__4864__auto___62437)){
args__4870__auto__.push((arguments[i__4865__auto___62438]));

var G__62439 = (i__4865__auto___62438 + (1));
i__4865__auto___62438 = G__62439;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60722 = conformed_args__59019__auto__;
var map__60722__$1 = cljs.core.__destructure_map(map__60722);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq60719){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62440 = arguments.length;
var i__4865__auto___62441 = (0);
while(true){
if((i__4865__auto___62441 < len__4864__auto___62440)){
args__4870__auto__.push((arguments[i__4865__auto___62441]));

var G__62442 = (i__4865__auto___62441 + (1));
i__4865__auto___62441 = G__62442;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60732 = conformed_args__59019__auto__;
var map__60732__$1 = cljs.core.__destructure_map(map__60732);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq60726){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60726));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62443 = arguments.length;
var i__4865__auto___62444 = (0);
while(true){
if((i__4865__auto___62444 < len__4864__auto___62443)){
args__4870__auto__.push((arguments[i__4865__auto___62444]));

var G__62445 = (i__4865__auto___62444 + (1));
i__4865__auto___62444 = G__62445;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60757 = conformed_args__59019__auto__;
var map__60757__$1 = cljs.core.__destructure_map(map__60757);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq60746){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62446 = arguments.length;
var i__4865__auto___62447 = (0);
while(true){
if((i__4865__auto___62447 < len__4864__auto___62446)){
args__4870__auto__.push((arguments[i__4865__auto___62447]));

var G__62448 = (i__4865__auto___62447 + (1));
i__4865__auto___62447 = G__62448;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60770 = conformed_args__59019__auto__;
var map__60770__$1 = cljs.core.__destructure_map(map__60770);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq60761){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60761));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62449 = arguments.length;
var i__4865__auto___62450 = (0);
while(true){
if((i__4865__auto___62450 < len__4864__auto___62449)){
args__4870__auto__.push((arguments[i__4865__auto___62450]));

var G__62451 = (i__4865__auto___62450 + (1));
i__4865__auto___62450 = G__62451;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60801 = conformed_args__59019__auto__;
var map__60801__$1 = cljs.core.__destructure_map(map__60801);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq60783){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60783));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62452 = arguments.length;
var i__4865__auto___62453 = (0);
while(true){
if((i__4865__auto___62453 < len__4864__auto___62452)){
args__4870__auto__.push((arguments[i__4865__auto___62453]));

var G__62454 = (i__4865__auto___62453 + (1));
i__4865__auto___62453 = G__62454;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60823 = conformed_args__59019__auto__;
var map__60823__$1 = cljs.core.__destructure_map(map__60823);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq60812){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62455 = arguments.length;
var i__4865__auto___62456 = (0);
while(true){
if((i__4865__auto___62456 < len__4864__auto___62455)){
args__4870__auto__.push((arguments[i__4865__auto___62456]));

var G__62457 = (i__4865__auto___62456 + (1));
i__4865__auto___62456 = G__62457;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60840 = conformed_args__59019__auto__;
var map__60840__$1 = cljs.core.__destructure_map(map__60840);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq60834){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62458 = arguments.length;
var i__4865__auto___62459 = (0);
while(true){
if((i__4865__auto___62459 < len__4864__auto___62458)){
args__4870__auto__.push((arguments[i__4865__auto___62459]));

var G__62460 = (i__4865__auto___62459 + (1));
i__4865__auto___62459 = G__62460;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60853 = conformed_args__59019__auto__;
var map__60853__$1 = cljs.core.__destructure_map(map__60853);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq60845){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62461 = arguments.length;
var i__4865__auto___62462 = (0);
while(true){
if((i__4865__auto___62462 < len__4864__auto___62461)){
args__4870__auto__.push((arguments[i__4865__auto___62462]));

var G__62463 = (i__4865__auto___62462 + (1));
i__4865__auto___62462 = G__62463;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60864 = conformed_args__59019__auto__;
var map__60864__$1 = cljs.core.__destructure_map(map__60864);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60864__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60864__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60864__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq60862){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60862));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62464 = arguments.length;
var i__4865__auto___62465 = (0);
while(true){
if((i__4865__auto___62465 < len__4864__auto___62464)){
args__4870__auto__.push((arguments[i__4865__auto___62465]));

var G__62466 = (i__4865__auto___62465 + (1));
i__4865__auto___62465 = G__62466;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60903 = conformed_args__59019__auto__;
var map__60903__$1 = cljs.core.__destructure_map(map__60903);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq60885){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60885));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62467 = arguments.length;
var i__4865__auto___62468 = (0);
while(true){
if((i__4865__auto___62468 < len__4864__auto___62467)){
args__4870__auto__.push((arguments[i__4865__auto___62468]));

var G__62469 = (i__4865__auto___62468 + (1));
i__4865__auto___62468 = G__62469;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60905 = conformed_args__59019__auto__;
var map__60905__$1 = cljs.core.__destructure_map(map__60905);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq60904){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60904));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62470 = arguments.length;
var i__4865__auto___62471 = (0);
while(true){
if((i__4865__auto___62471 < len__4864__auto___62470)){
args__4870__auto__.push((arguments[i__4865__auto___62471]));

var G__62472 = (i__4865__auto___62471 + (1));
i__4865__auto___62471 = G__62472;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60910 = conformed_args__59019__auto__;
var map__60910__$1 = cljs.core.__destructure_map(map__60910);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60910__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60910__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60910__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq60907){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60907));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62473 = arguments.length;
var i__4865__auto___62474 = (0);
while(true){
if((i__4865__auto___62474 < len__4864__auto___62473)){
args__4870__auto__.push((arguments[i__4865__auto___62474]));

var G__62475 = (i__4865__auto___62474 + (1));
i__4865__auto___62474 = G__62475;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60941 = conformed_args__59019__auto__;
var map__60941__$1 = cljs.core.__destructure_map(map__60941);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq60930){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60930));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62476 = arguments.length;
var i__4865__auto___62477 = (0);
while(true){
if((i__4865__auto___62477 < len__4864__auto___62476)){
args__4870__auto__.push((arguments[i__4865__auto___62477]));

var G__62478 = (i__4865__auto___62477 + (1));
i__4865__auto___62477 = G__62478;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60958 = conformed_args__59019__auto__;
var map__60958__$1 = cljs.core.__destructure_map(map__60958);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq60956){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60956));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62479 = arguments.length;
var i__4865__auto___62480 = (0);
while(true){
if((i__4865__auto___62480 < len__4864__auto___62479)){
args__4870__auto__.push((arguments[i__4865__auto___62480]));

var G__62481 = (i__4865__auto___62480 + (1));
i__4865__auto___62480 = G__62481;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60964 = conformed_args__59019__auto__;
var map__60964__$1 = cljs.core.__destructure_map(map__60964);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq60962){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60962));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62482 = arguments.length;
var i__4865__auto___62483 = (0);
while(true){
if((i__4865__auto___62483 < len__4864__auto___62482)){
args__4870__auto__.push((arguments[i__4865__auto___62483]));

var G__62484 = (i__4865__auto___62483 + (1));
i__4865__auto___62483 = G__62484;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60971 = conformed_args__59019__auto__;
var map__60971__$1 = cljs.core.__destructure_map(map__60971);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq60966){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60966));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62485 = arguments.length;
var i__4865__auto___62486 = (0);
while(true){
if((i__4865__auto___62486 < len__4864__auto___62485)){
args__4870__auto__.push((arguments[i__4865__auto___62486]));

var G__62487 = (i__4865__auto___62486 + (1));
i__4865__auto___62486 = G__62487;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60979 = conformed_args__59019__auto__;
var map__60979__$1 = cljs.core.__destructure_map(map__60979);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq60978){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60978));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62488 = arguments.length;
var i__4865__auto___62489 = (0);
while(true){
if((i__4865__auto___62489 < len__4864__auto___62488)){
args__4870__auto__.push((arguments[i__4865__auto___62489]));

var G__62490 = (i__4865__auto___62489 + (1));
i__4865__auto___62489 = G__62490;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60990 = conformed_args__59019__auto__;
var map__60990__$1 = cljs.core.__destructure_map(map__60990);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq60982){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60982));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62491 = arguments.length;
var i__4865__auto___62492 = (0);
while(true){
if((i__4865__auto___62492 < len__4864__auto___62491)){
args__4870__auto__.push((arguments[i__4865__auto___62492]));

var G__62493 = (i__4865__auto___62492 + (1));
i__4865__auto___62492 = G__62493;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61005 = conformed_args__59019__auto__;
var map__61005__$1 = cljs.core.__destructure_map(map__61005);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq60998){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60998));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62494 = arguments.length;
var i__4865__auto___62495 = (0);
while(true){
if((i__4865__auto___62495 < len__4864__auto___62494)){
args__4870__auto__.push((arguments[i__4865__auto___62495]));

var G__62496 = (i__4865__auto___62495 + (1));
i__4865__auto___62495 = G__62496;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61012 = conformed_args__59019__auto__;
var map__61012__$1 = cljs.core.__destructure_map(map__61012);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq61006){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62497 = arguments.length;
var i__4865__auto___62498 = (0);
while(true){
if((i__4865__auto___62498 < len__4864__auto___62497)){
args__4870__auto__.push((arguments[i__4865__auto___62498]));

var G__62499 = (i__4865__auto___62498 + (1));
i__4865__auto___62498 = G__62499;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61019 = conformed_args__59019__auto__;
var map__61019__$1 = cljs.core.__destructure_map(map__61019);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq61014){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62500 = arguments.length;
var i__4865__auto___62501 = (0);
while(true){
if((i__4865__auto___62501 < len__4864__auto___62500)){
args__4870__auto__.push((arguments[i__4865__auto___62501]));

var G__62502 = (i__4865__auto___62501 + (1));
i__4865__auto___62501 = G__62502;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61045 = conformed_args__59019__auto__;
var map__61045__$1 = cljs.core.__destructure_map(map__61045);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq61033){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61033));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62503 = arguments.length;
var i__4865__auto___62504 = (0);
while(true){
if((i__4865__auto___62504 < len__4864__auto___62503)){
args__4870__auto__.push((arguments[i__4865__auto___62504]));

var G__62505 = (i__4865__auto___62504 + (1));
i__4865__auto___62504 = G__62505;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61051 = conformed_args__59019__auto__;
var map__61051__$1 = cljs.core.__destructure_map(map__61051);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq61048){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61048));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62506 = arguments.length;
var i__4865__auto___62507 = (0);
while(true){
if((i__4865__auto___62507 < len__4864__auto___62506)){
args__4870__auto__.push((arguments[i__4865__auto___62507]));

var G__62508 = (i__4865__auto___62507 + (1));
i__4865__auto___62507 = G__62508;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61064 = conformed_args__59019__auto__;
var map__61064__$1 = cljs.core.__destructure_map(map__61064);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61064__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61064__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61064__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq61061){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61061));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62509 = arguments.length;
var i__4865__auto___62510 = (0);
while(true){
if((i__4865__auto___62510 < len__4864__auto___62509)){
args__4870__auto__.push((arguments[i__4865__auto___62510]));

var G__62511 = (i__4865__auto___62510 + (1));
i__4865__auto___62510 = G__62511;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61069 = conformed_args__59019__auto__;
var map__61069__$1 = cljs.core.__destructure_map(map__61069);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq61067){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61067));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62512 = arguments.length;
var i__4865__auto___62513 = (0);
while(true){
if((i__4865__auto___62513 < len__4864__auto___62512)){
args__4870__auto__.push((arguments[i__4865__auto___62513]));

var G__62514 = (i__4865__auto___62513 + (1));
i__4865__auto___62513 = G__62514;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61071 = conformed_args__59019__auto__;
var map__61071__$1 = cljs.core.__destructure_map(map__61071);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq61070){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61070));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62515 = arguments.length;
var i__4865__auto___62516 = (0);
while(true){
if((i__4865__auto___62516 < len__4864__auto___62515)){
args__4870__auto__.push((arguments[i__4865__auto___62516]));

var G__62517 = (i__4865__auto___62516 + (1));
i__4865__auto___62516 = G__62517;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61078 = conformed_args__59019__auto__;
var map__61078__$1 = cljs.core.__destructure_map(map__61078);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq61074){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61074));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62518 = arguments.length;
var i__4865__auto___62519 = (0);
while(true){
if((i__4865__auto___62519 < len__4864__auto___62518)){
args__4870__auto__.push((arguments[i__4865__auto___62519]));

var G__62520 = (i__4865__auto___62519 + (1));
i__4865__auto___62519 = G__62520;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61088 = conformed_args__59019__auto__;
var map__61088__$1 = cljs.core.__destructure_map(map__61088);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq61087){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61087));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62521 = arguments.length;
var i__4865__auto___62522 = (0);
while(true){
if((i__4865__auto___62522 < len__4864__auto___62521)){
args__4870__auto__.push((arguments[i__4865__auto___62522]));

var G__62523 = (i__4865__auto___62522 + (1));
i__4865__auto___62522 = G__62523;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61107 = conformed_args__59019__auto__;
var map__61107__$1 = cljs.core.__destructure_map(map__61107);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq61099){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61099));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62524 = arguments.length;
var i__4865__auto___62525 = (0);
while(true){
if((i__4865__auto___62525 < len__4864__auto___62524)){
args__4870__auto__.push((arguments[i__4865__auto___62525]));

var G__62526 = (i__4865__auto___62525 + (1));
i__4865__auto___62525 = G__62526;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61119 = conformed_args__59019__auto__;
var map__61119__$1 = cljs.core.__destructure_map(map__61119);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq61116){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61116));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62527 = arguments.length;
var i__4865__auto___62528 = (0);
while(true){
if((i__4865__auto___62528 < len__4864__auto___62527)){
args__4870__auto__.push((arguments[i__4865__auto___62528]));

var G__62529 = (i__4865__auto___62528 + (1));
i__4865__auto___62528 = G__62529;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61131 = conformed_args__59019__auto__;
var map__61131__$1 = cljs.core.__destructure_map(map__61131);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq61125){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61125));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62530 = arguments.length;
var i__4865__auto___62531 = (0);
while(true){
if((i__4865__auto___62531 < len__4864__auto___62530)){
args__4870__auto__.push((arguments[i__4865__auto___62531]));

var G__62532 = (i__4865__auto___62531 + (1));
i__4865__auto___62531 = G__62532;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61136 = conformed_args__59019__auto__;
var map__61136__$1 = cljs.core.__destructure_map(map__61136);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq61134){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61134));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62533 = arguments.length;
var i__4865__auto___62534 = (0);
while(true){
if((i__4865__auto___62534 < len__4864__auto___62533)){
args__4870__auto__.push((arguments[i__4865__auto___62534]));

var G__62535 = (i__4865__auto___62534 + (1));
i__4865__auto___62534 = G__62535;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61151 = conformed_args__59019__auto__;
var map__61151__$1 = cljs.core.__destructure_map(map__61151);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61151__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61151__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61151__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq61144){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61144));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62536 = arguments.length;
var i__4865__auto___62537 = (0);
while(true){
if((i__4865__auto___62537 < len__4864__auto___62536)){
args__4870__auto__.push((arguments[i__4865__auto___62537]));

var G__62538 = (i__4865__auto___62537 + (1));
i__4865__auto___62537 = G__62538;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61167 = conformed_args__59019__auto__;
var map__61167__$1 = cljs.core.__destructure_map(map__61167);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq61161){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61161));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62539 = arguments.length;
var i__4865__auto___62540 = (0);
while(true){
if((i__4865__auto___62540 < len__4864__auto___62539)){
args__4870__auto__.push((arguments[i__4865__auto___62540]));

var G__62541 = (i__4865__auto___62540 + (1));
i__4865__auto___62540 = G__62541;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61180 = conformed_args__59019__auto__;
var map__61180__$1 = cljs.core.__destructure_map(map__61180);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq61178){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61178));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62542 = arguments.length;
var i__4865__auto___62543 = (0);
while(true){
if((i__4865__auto___62543 < len__4864__auto___62542)){
args__4870__auto__.push((arguments[i__4865__auto___62543]));

var G__62544 = (i__4865__auto___62543 + (1));
i__4865__auto___62543 = G__62544;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61193 = conformed_args__59019__auto__;
var map__61193__$1 = cljs.core.__destructure_map(map__61193);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq61188){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61188));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62545 = arguments.length;
var i__4865__auto___62546 = (0);
while(true){
if((i__4865__auto___62546 < len__4864__auto___62545)){
args__4870__auto__.push((arguments[i__4865__auto___62546]));

var G__62547 = (i__4865__auto___62546 + (1));
i__4865__auto___62546 = G__62547;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61207 = conformed_args__59019__auto__;
var map__61207__$1 = cljs.core.__destructure_map(map__61207);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61207__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61207__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61207__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq61200){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61200));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62548 = arguments.length;
var i__4865__auto___62549 = (0);
while(true){
if((i__4865__auto___62549 < len__4864__auto___62548)){
args__4870__auto__.push((arguments[i__4865__auto___62549]));

var G__62550 = (i__4865__auto___62549 + (1));
i__4865__auto___62549 = G__62550;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61221 = conformed_args__59019__auto__;
var map__61221__$1 = cljs.core.__destructure_map(map__61221);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq61214){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61214));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62551 = arguments.length;
var i__4865__auto___62552 = (0);
while(true){
if((i__4865__auto___62552 < len__4864__auto___62551)){
args__4870__auto__.push((arguments[i__4865__auto___62552]));

var G__62553 = (i__4865__auto___62552 + (1));
i__4865__auto___62552 = G__62553;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61233 = conformed_args__59019__auto__;
var map__61233__$1 = cljs.core.__destructure_map(map__61233);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq61225){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61225));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62554 = arguments.length;
var i__4865__auto___62555 = (0);
while(true){
if((i__4865__auto___62555 < len__4864__auto___62554)){
args__4870__auto__.push((arguments[i__4865__auto___62555]));

var G__62556 = (i__4865__auto___62555 + (1));
i__4865__auto___62555 = G__62556;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61254 = conformed_args__59019__auto__;
var map__61254__$1 = cljs.core.__destructure_map(map__61254);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq61244){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61244));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62557 = arguments.length;
var i__4865__auto___62558 = (0);
while(true){
if((i__4865__auto___62558 < len__4864__auto___62557)){
args__4870__auto__.push((arguments[i__4865__auto___62558]));

var G__62559 = (i__4865__auto___62558 + (1));
i__4865__auto___62558 = G__62559;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61369 = conformed_args__59019__auto__;
var map__61369__$1 = cljs.core.__destructure_map(map__61369);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq61350){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61350));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62560 = arguments.length;
var i__4865__auto___62561 = (0);
while(true){
if((i__4865__auto___62561 < len__4864__auto___62560)){
args__4870__auto__.push((arguments[i__4865__auto___62561]));

var G__62562 = (i__4865__auto___62561 + (1));
i__4865__auto___62561 = G__62562;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61384 = conformed_args__59019__auto__;
var map__61384__$1 = cljs.core.__destructure_map(map__61384);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq61378){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61378));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62563 = arguments.length;
var i__4865__auto___62564 = (0);
while(true){
if((i__4865__auto___62564 < len__4864__auto___62563)){
args__4870__auto__.push((arguments[i__4865__auto___62564]));

var G__62565 = (i__4865__auto___62564 + (1));
i__4865__auto___62564 = G__62565;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61400 = conformed_args__59019__auto__;
var map__61400__$1 = cljs.core.__destructure_map(map__61400);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq61390){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61390));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62566 = arguments.length;
var i__4865__auto___62567 = (0);
while(true){
if((i__4865__auto___62567 < len__4864__auto___62566)){
args__4870__auto__.push((arguments[i__4865__auto___62567]));

var G__62568 = (i__4865__auto___62567 + (1));
i__4865__auto___62567 = G__62568;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61408 = conformed_args__59019__auto__;
var map__61408__$1 = cljs.core.__destructure_map(map__61408);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61408__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq61405){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61405));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62569 = arguments.length;
var i__4865__auto___62570 = (0);
while(true){
if((i__4865__auto___62570 < len__4864__auto___62569)){
args__4870__auto__.push((arguments[i__4865__auto___62570]));

var G__62571 = (i__4865__auto___62570 + (1));
i__4865__auto___62570 = G__62571;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61420 = conformed_args__59019__auto__;
var map__61420__$1 = cljs.core.__destructure_map(map__61420);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq61417){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61417));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62572 = arguments.length;
var i__4865__auto___62573 = (0);
while(true){
if((i__4865__auto___62573 < len__4864__auto___62572)){
args__4870__auto__.push((arguments[i__4865__auto___62573]));

var G__62574 = (i__4865__auto___62573 + (1));
i__4865__auto___62573 = G__62574;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61440 = conformed_args__59019__auto__;
var map__61440__$1 = cljs.core.__destructure_map(map__61440);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq61424){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61424));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62575 = arguments.length;
var i__4865__auto___62576 = (0);
while(true){
if((i__4865__auto___62576 < len__4864__auto___62575)){
args__4870__auto__.push((arguments[i__4865__auto___62576]));

var G__62577 = (i__4865__auto___62576 + (1));
i__4865__auto___62576 = G__62577;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61454 = conformed_args__59019__auto__;
var map__61454__$1 = cljs.core.__destructure_map(map__61454);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq61447){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61447));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62578 = arguments.length;
var i__4865__auto___62579 = (0);
while(true){
if((i__4865__auto___62579 < len__4864__auto___62578)){
args__4870__auto__.push((arguments[i__4865__auto___62579]));

var G__62580 = (i__4865__auto___62579 + (1));
i__4865__auto___62579 = G__62580;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61469 = conformed_args__59019__auto__;
var map__61469__$1 = cljs.core.__destructure_map(map__61469);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq61462){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61462));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62581 = arguments.length;
var i__4865__auto___62582 = (0);
while(true){
if((i__4865__auto___62582 < len__4864__auto___62581)){
args__4870__auto__.push((arguments[i__4865__auto___62582]));

var G__62583 = (i__4865__auto___62582 + (1));
i__4865__auto___62582 = G__62583;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61481 = conformed_args__59019__auto__;
var map__61481__$1 = cljs.core.__destructure_map(map__61481);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq61479){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61479));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62584 = arguments.length;
var i__4865__auto___62585 = (0);
while(true){
if((i__4865__auto___62585 < len__4864__auto___62584)){
args__4870__auto__.push((arguments[i__4865__auto___62585]));

var G__62586 = (i__4865__auto___62585 + (1));
i__4865__auto___62585 = G__62586;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61489 = conformed_args__59019__auto__;
var map__61489__$1 = cljs.core.__destructure_map(map__61489);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq61486){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61486));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62587 = arguments.length;
var i__4865__auto___62588 = (0);
while(true){
if((i__4865__auto___62588 < len__4864__auto___62587)){
args__4870__auto__.push((arguments[i__4865__auto___62588]));

var G__62589 = (i__4865__auto___62588 + (1));
i__4865__auto___62588 = G__62589;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61497 = conformed_args__59019__auto__;
var map__61497__$1 = cljs.core.__destructure_map(map__61497);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq61492){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61492));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62590 = arguments.length;
var i__4865__auto___62591 = (0);
while(true){
if((i__4865__auto___62591 < len__4864__auto___62590)){
args__4870__auto__.push((arguments[i__4865__auto___62591]));

var G__62592 = (i__4865__auto___62591 + (1));
i__4865__auto___62591 = G__62592;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61505 = conformed_args__59019__auto__;
var map__61505__$1 = cljs.core.__destructure_map(map__61505);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq61501){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61501));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62593 = arguments.length;
var i__4865__auto___62594 = (0);
while(true){
if((i__4865__auto___62594 < len__4864__auto___62593)){
args__4870__auto__.push((arguments[i__4865__auto___62594]));

var G__62595 = (i__4865__auto___62594 + (1));
i__4865__auto___62594 = G__62595;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61511 = conformed_args__59019__auto__;
var map__61511__$1 = cljs.core.__destructure_map(map__61511);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq61508){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61508));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62596 = arguments.length;
var i__4865__auto___62597 = (0);
while(true){
if((i__4865__auto___62597 < len__4864__auto___62596)){
args__4870__auto__.push((arguments[i__4865__auto___62597]));

var G__62598 = (i__4865__auto___62597 + (1));
i__4865__auto___62597 = G__62598;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61518 = conformed_args__59019__auto__;
var map__61518__$1 = cljs.core.__destructure_map(map__61518);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq61515){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61515));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62599 = arguments.length;
var i__4865__auto___62600 = (0);
while(true){
if((i__4865__auto___62600 < len__4864__auto___62599)){
args__4870__auto__.push((arguments[i__4865__auto___62600]));

var G__62601 = (i__4865__auto___62600 + (1));
i__4865__auto___62600 = G__62601;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61526 = conformed_args__59019__auto__;
var map__61526__$1 = cljs.core.__destructure_map(map__61526);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq61520){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61520));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62602 = arguments.length;
var i__4865__auto___62603 = (0);
while(true){
if((i__4865__auto___62603 < len__4864__auto___62602)){
args__4870__auto__.push((arguments[i__4865__auto___62603]));

var G__62604 = (i__4865__auto___62603 + (1));
i__4865__auto___62603 = G__62604;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61529 = conformed_args__59019__auto__;
var map__61529__$1 = cljs.core.__destructure_map(map__61529);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq61527){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62605 = arguments.length;
var i__4865__auto___62606 = (0);
while(true){
if((i__4865__auto___62606 < len__4864__auto___62605)){
args__4870__auto__.push((arguments[i__4865__auto___62606]));

var G__62607 = (i__4865__auto___62606 + (1));
i__4865__auto___62606 = G__62607;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61535 = conformed_args__59019__auto__;
var map__61535__$1 = cljs.core.__destructure_map(map__61535);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq61533){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61533));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62608 = arguments.length;
var i__4865__auto___62609 = (0);
while(true){
if((i__4865__auto___62609 < len__4864__auto___62608)){
args__4870__auto__.push((arguments[i__4865__auto___62609]));

var G__62610 = (i__4865__auto___62609 + (1));
i__4865__auto___62609 = G__62610;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61546 = conformed_args__59019__auto__;
var map__61546__$1 = cljs.core.__destructure_map(map__61546);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq61539){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62611 = arguments.length;
var i__4865__auto___62612 = (0);
while(true){
if((i__4865__auto___62612 < len__4864__auto___62611)){
args__4870__auto__.push((arguments[i__4865__auto___62612]));

var G__62613 = (i__4865__auto___62612 + (1));
i__4865__auto___62612 = G__62613;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61554 = conformed_args__59019__auto__;
var map__61554__$1 = cljs.core.__destructure_map(map__61554);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq61548){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61548));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62614 = arguments.length;
var i__4865__auto___62615 = (0);
while(true){
if((i__4865__auto___62615 < len__4864__auto___62614)){
args__4870__auto__.push((arguments[i__4865__auto___62615]));

var G__62616 = (i__4865__auto___62615 + (1));
i__4865__auto___62615 = G__62616;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61562 = conformed_args__59019__auto__;
var map__61562__$1 = cljs.core.__destructure_map(map__61562);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq61557){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61557));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62617 = arguments.length;
var i__4865__auto___62618 = (0);
while(true){
if((i__4865__auto___62618 < len__4864__auto___62617)){
args__4870__auto__.push((arguments[i__4865__auto___62618]));

var G__62619 = (i__4865__auto___62618 + (1));
i__4865__auto___62618 = G__62619;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61570 = conformed_args__59019__auto__;
var map__61570__$1 = cljs.core.__destructure_map(map__61570);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61570__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61570__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq61566){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61566));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62620 = arguments.length;
var i__4865__auto___62621 = (0);
while(true){
if((i__4865__auto___62621 < len__4864__auto___62620)){
args__4870__auto__.push((arguments[i__4865__auto___62621]));

var G__62622 = (i__4865__auto___62621 + (1));
i__4865__auto___62621 = G__62622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61581 = conformed_args__59019__auto__;
var map__61581__$1 = cljs.core.__destructure_map(map__61581);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq61576){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61576));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62623 = arguments.length;
var i__4865__auto___62624 = (0);
while(true){
if((i__4865__auto___62624 < len__4864__auto___62623)){
args__4870__auto__.push((arguments[i__4865__auto___62624]));

var G__62625 = (i__4865__auto___62624 + (1));
i__4865__auto___62624 = G__62625;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61588 = conformed_args__59019__auto__;
var map__61588__$1 = cljs.core.__destructure_map(map__61588);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq61585){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62626 = arguments.length;
var i__4865__auto___62627 = (0);
while(true){
if((i__4865__auto___62627 < len__4864__auto___62626)){
args__4870__auto__.push((arguments[i__4865__auto___62627]));

var G__62628 = (i__4865__auto___62627 + (1));
i__4865__auto___62627 = G__62628;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61602 = conformed_args__59019__auto__;
var map__61602__$1 = cljs.core.__destructure_map(map__61602);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61602__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61602__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61602__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq61596){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61596));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62629 = arguments.length;
var i__4865__auto___62630 = (0);
while(true){
if((i__4865__auto___62630 < len__4864__auto___62629)){
args__4870__auto__.push((arguments[i__4865__auto___62630]));

var G__62631 = (i__4865__auto___62630 + (1));
i__4865__auto___62630 = G__62631;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61615 = conformed_args__59019__auto__;
var map__61615__$1 = cljs.core.__destructure_map(map__61615);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq61609){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61609));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62632 = arguments.length;
var i__4865__auto___62633 = (0);
while(true){
if((i__4865__auto___62633 < len__4864__auto___62632)){
args__4870__auto__.push((arguments[i__4865__auto___62633]));

var G__62634 = (i__4865__auto___62633 + (1));
i__4865__auto___62633 = G__62634;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61626 = conformed_args__59019__auto__;
var map__61626__$1 = cljs.core.__destructure_map(map__61626);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61626__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61626__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq61620){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61620));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62635 = arguments.length;
var i__4865__auto___62636 = (0);
while(true){
if((i__4865__auto___62636 < len__4864__auto___62635)){
args__4870__auto__.push((arguments[i__4865__auto___62636]));

var G__62637 = (i__4865__auto___62636 + (1));
i__4865__auto___62636 = G__62637;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61633 = conformed_args__59019__auto__;
var map__61633__$1 = cljs.core.__destructure_map(map__61633);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq61632){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61632));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62638 = arguments.length;
var i__4865__auto___62639 = (0);
while(true){
if((i__4865__auto___62639 < len__4864__auto___62638)){
args__4870__auto__.push((arguments[i__4865__auto___62639]));

var G__62640 = (i__4865__auto___62639 + (1));
i__4865__auto___62639 = G__62640;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61656 = conformed_args__59019__auto__;
var map__61656__$1 = cljs.core.__destructure_map(map__61656);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq61645){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62641 = arguments.length;
var i__4865__auto___62642 = (0);
while(true){
if((i__4865__auto___62642 < len__4864__auto___62641)){
args__4870__auto__.push((arguments[i__4865__auto___62642]));

var G__62643 = (i__4865__auto___62642 + (1));
i__4865__auto___62642 = G__62643;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61678 = conformed_args__59019__auto__;
var map__61678__$1 = cljs.core.__destructure_map(map__61678);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq61668){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62644 = arguments.length;
var i__4865__auto___62645 = (0);
while(true){
if((i__4865__auto___62645 < len__4864__auto___62644)){
args__4870__auto__.push((arguments[i__4865__auto___62645]));

var G__62646 = (i__4865__auto___62645 + (1));
i__4865__auto___62645 = G__62646;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61687 = conformed_args__59019__auto__;
var map__61687__$1 = cljs.core.__destructure_map(map__61687);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq61680){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62647 = arguments.length;
var i__4865__auto___62648 = (0);
while(true){
if((i__4865__auto___62648 < len__4864__auto___62647)){
args__4870__auto__.push((arguments[i__4865__auto___62648]));

var G__62649 = (i__4865__auto___62648 + (1));
i__4865__auto___62648 = G__62649;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61697 = conformed_args__59019__auto__;
var map__61697__$1 = cljs.core.__destructure_map(map__61697);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq61691){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61691));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62650 = arguments.length;
var i__4865__auto___62651 = (0);
while(true){
if((i__4865__auto___62651 < len__4864__auto___62650)){
args__4870__auto__.push((arguments[i__4865__auto___62651]));

var G__62652 = (i__4865__auto___62651 + (1));
i__4865__auto___62651 = G__62652;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61706 = conformed_args__59019__auto__;
var map__61706__$1 = cljs.core.__destructure_map(map__61706);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq61702){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61702));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62653 = arguments.length;
var i__4865__auto___62654 = (0);
while(true){
if((i__4865__auto___62654 < len__4864__auto___62653)){
args__4870__auto__.push((arguments[i__4865__auto___62654]));

var G__62655 = (i__4865__auto___62654 + (1));
i__4865__auto___62654 = G__62655;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61716 = conformed_args__59019__auto__;
var map__61716__$1 = cljs.core.__destructure_map(map__61716);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq61711){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61711));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62656 = arguments.length;
var i__4865__auto___62657 = (0);
while(true){
if((i__4865__auto___62657 < len__4864__auto___62656)){
args__4870__auto__.push((arguments[i__4865__auto___62657]));

var G__62658 = (i__4865__auto___62657 + (1));
i__4865__auto___62657 = G__62658;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61731 = conformed_args__59019__auto__;
var map__61731__$1 = cljs.core.__destructure_map(map__61731);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61731__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61731__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61731__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq61726){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61726));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62659 = arguments.length;
var i__4865__auto___62660 = (0);
while(true){
if((i__4865__auto___62660 < len__4864__auto___62659)){
args__4870__auto__.push((arguments[i__4865__auto___62660]));

var G__62661 = (i__4865__auto___62660 + (1));
i__4865__auto___62660 = G__62661;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61736 = conformed_args__59019__auto__;
var map__61736__$1 = cljs.core.__destructure_map(map__61736);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq61735){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61735));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62662 = arguments.length;
var i__4865__auto___62663 = (0);
while(true){
if((i__4865__auto___62663 < len__4864__auto___62662)){
args__4870__auto__.push((arguments[i__4865__auto___62663]));

var G__62664 = (i__4865__auto___62663 + (1));
i__4865__auto___62663 = G__62664;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61738 = conformed_args__59019__auto__;
var map__61738__$1 = cljs.core.__destructure_map(map__61738);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq61737){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61737));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62665 = arguments.length;
var i__4865__auto___62666 = (0);
while(true){
if((i__4865__auto___62666 < len__4864__auto___62665)){
args__4870__auto__.push((arguments[i__4865__auto___62666]));

var G__62667 = (i__4865__auto___62666 + (1));
i__4865__auto___62666 = G__62667;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61743 = conformed_args__59019__auto__;
var map__61743__$1 = cljs.core.__destructure_map(map__61743);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq61740){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61740));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62668 = arguments.length;
var i__4865__auto___62669 = (0);
while(true){
if((i__4865__auto___62669 < len__4864__auto___62668)){
args__4870__auto__.push((arguments[i__4865__auto___62669]));

var G__62670 = (i__4865__auto___62669 + (1));
i__4865__auto___62669 = G__62670;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61747 = conformed_args__59019__auto__;
var map__61747__$1 = cljs.core.__destructure_map(map__61747);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq61746){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62671 = arguments.length;
var i__4865__auto___62672 = (0);
while(true){
if((i__4865__auto___62672 < len__4864__auto___62671)){
args__4870__auto__.push((arguments[i__4865__auto___62672]));

var G__62673 = (i__4865__auto___62672 + (1));
i__4865__auto___62672 = G__62673;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61751 = conformed_args__59019__auto__;
var map__61751__$1 = cljs.core.__destructure_map(map__61751);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq61748){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61748));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62674 = arguments.length;
var i__4865__auto___62675 = (0);
while(true){
if((i__4865__auto___62675 < len__4864__auto___62674)){
args__4870__auto__.push((arguments[i__4865__auto___62675]));

var G__62676 = (i__4865__auto___62675 + (1));
i__4865__auto___62675 = G__62676;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61757 = conformed_args__59019__auto__;
var map__61757__$1 = cljs.core.__destructure_map(map__61757);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq61755){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61755));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62677 = arguments.length;
var i__4865__auto___62678 = (0);
while(true){
if((i__4865__auto___62678 < len__4864__auto___62677)){
args__4870__auto__.push((arguments[i__4865__auto___62678]));

var G__62679 = (i__4865__auto___62678 + (1));
i__4865__auto___62678 = G__62679;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61769 = conformed_args__59019__auto__;
var map__61769__$1 = cljs.core.__destructure_map(map__61769);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq61761){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61761));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62680 = arguments.length;
var i__4865__auto___62681 = (0);
while(true){
if((i__4865__auto___62681 < len__4864__auto___62680)){
args__4870__auto__.push((arguments[i__4865__auto___62681]));

var G__62682 = (i__4865__auto___62681 + (1));
i__4865__auto___62681 = G__62682;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61796 = conformed_args__59019__auto__;
var map__61796__$1 = cljs.core.__destructure_map(map__61796);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq61771){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61771));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62683 = arguments.length;
var i__4865__auto___62684 = (0);
while(true){
if((i__4865__auto___62684 < len__4864__auto___62683)){
args__4870__auto__.push((arguments[i__4865__auto___62684]));

var G__62685 = (i__4865__auto___62684 + (1));
i__4865__auto___62684 = G__62685;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61804 = conformed_args__59019__auto__;
var map__61804__$1 = cljs.core.__destructure_map(map__61804);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq61798){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61798));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62686 = arguments.length;
var i__4865__auto___62687 = (0);
while(true){
if((i__4865__auto___62687 < len__4864__auto___62686)){
args__4870__auto__.push((arguments[i__4865__auto___62687]));

var G__62688 = (i__4865__auto___62687 + (1));
i__4865__auto___62687 = G__62688;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61812 = conformed_args__59019__auto__;
var map__61812__$1 = cljs.core.__destructure_map(map__61812);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61812__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq61810){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62689 = arguments.length;
var i__4865__auto___62690 = (0);
while(true){
if((i__4865__auto___62690 < len__4864__auto___62689)){
args__4870__auto__.push((arguments[i__4865__auto___62690]));

var G__62691 = (i__4865__auto___62690 + (1));
i__4865__auto___62690 = G__62691;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61816 = conformed_args__59019__auto__;
var map__61816__$1 = cljs.core.__destructure_map(map__61816);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq61815){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61815));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62692 = arguments.length;
var i__4865__auto___62693 = (0);
while(true){
if((i__4865__auto___62693 < len__4864__auto___62692)){
args__4870__auto__.push((arguments[i__4865__auto___62693]));

var G__62694 = (i__4865__auto___62693 + (1));
i__4865__auto___62693 = G__62694;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61821 = conformed_args__59019__auto__;
var map__61821__$1 = cljs.core.__destructure_map(map__61821);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq61819){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61819));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62695 = arguments.length;
var i__4865__auto___62696 = (0);
while(true){
if((i__4865__auto___62696 < len__4864__auto___62695)){
args__4870__auto__.push((arguments[i__4865__auto___62696]));

var G__62697 = (i__4865__auto___62696 + (1));
i__4865__auto___62696 = G__62697;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61827 = conformed_args__59019__auto__;
var map__61827__$1 = cljs.core.__destructure_map(map__61827);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61827__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61827__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq61824){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61824));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62698 = arguments.length;
var i__4865__auto___62699 = (0);
while(true){
if((i__4865__auto___62699 < len__4864__auto___62698)){
args__4870__auto__.push((arguments[i__4865__auto___62699]));

var G__62700 = (i__4865__auto___62699 + (1));
i__4865__auto___62699 = G__62700;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61834 = conformed_args__59019__auto__;
var map__61834__$1 = cljs.core.__destructure_map(map__61834);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61834__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61834__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61834__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq61828){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61828));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62701 = arguments.length;
var i__4865__auto___62702 = (0);
while(true){
if((i__4865__auto___62702 < len__4864__auto___62701)){
args__4870__auto__.push((arguments[i__4865__auto___62702]));

var G__62703 = (i__4865__auto___62702 + (1));
i__4865__auto___62702 = G__62703;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61839 = conformed_args__59019__auto__;
var map__61839__$1 = cljs.core.__destructure_map(map__61839);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq61837){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61837));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62704 = arguments.length;
var i__4865__auto___62705 = (0);
while(true){
if((i__4865__auto___62705 < len__4864__auto___62704)){
args__4870__auto__.push((arguments[i__4865__auto___62705]));

var G__62706 = (i__4865__auto___62705 + (1));
i__4865__auto___62705 = G__62706;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61842 = conformed_args__59019__auto__;
var map__61842__$1 = cljs.core.__destructure_map(map__61842);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61842__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61842__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq61840){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62707 = arguments.length;
var i__4865__auto___62708 = (0);
while(true){
if((i__4865__auto___62708 < len__4864__auto___62707)){
args__4870__auto__.push((arguments[i__4865__auto___62708]));

var G__62709 = (i__4865__auto___62708 + (1));
i__4865__auto___62708 = G__62709;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61850 = conformed_args__59019__auto__;
var map__61850__$1 = cljs.core.__destructure_map(map__61850);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq61845){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62710 = arguments.length;
var i__4865__auto___62711 = (0);
while(true){
if((i__4865__auto___62711 < len__4864__auto___62710)){
args__4870__auto__.push((arguments[i__4865__auto___62711]));

var G__62712 = (i__4865__auto___62711 + (1));
i__4865__auto___62711 = G__62712;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61856 = conformed_args__59019__auto__;
var map__61856__$1 = cljs.core.__destructure_map(map__61856);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq61853){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61853));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62713 = arguments.length;
var i__4865__auto___62714 = (0);
while(true){
if((i__4865__auto___62714 < len__4864__auto___62713)){
args__4870__auto__.push((arguments[i__4865__auto___62714]));

var G__62715 = (i__4865__auto___62714 + (1));
i__4865__auto___62714 = G__62715;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61860 = conformed_args__59019__auto__;
var map__61860__$1 = cljs.core.__destructure_map(map__61860);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq61859){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61859));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62716 = arguments.length;
var i__4865__auto___62717 = (0);
while(true){
if((i__4865__auto___62717 < len__4864__auto___62716)){
args__4870__auto__.push((arguments[i__4865__auto___62717]));

var G__62718 = (i__4865__auto___62717 + (1));
i__4865__auto___62717 = G__62718;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61875 = conformed_args__59019__auto__;
var map__61875__$1 = cljs.core.__destructure_map(map__61875);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61875__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61875__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq61867){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61867));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62719 = arguments.length;
var i__4865__auto___62720 = (0);
while(true){
if((i__4865__auto___62720 < len__4864__auto___62719)){
args__4870__auto__.push((arguments[i__4865__auto___62720]));

var G__62721 = (i__4865__auto___62720 + (1));
i__4865__auto___62720 = G__62721;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61885 = conformed_args__59019__auto__;
var map__61885__$1 = cljs.core.__destructure_map(map__61885);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq61877){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61877));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62722 = arguments.length;
var i__4865__auto___62723 = (0);
while(true){
if((i__4865__auto___62723 < len__4864__auto___62722)){
args__4870__auto__.push((arguments[i__4865__auto___62723]));

var G__62724 = (i__4865__auto___62723 + (1));
i__4865__auto___62723 = G__62724;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61891 = conformed_args__59019__auto__;
var map__61891__$1 = cljs.core.__destructure_map(map__61891);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq61887){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61887));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62725 = arguments.length;
var i__4865__auto___62726 = (0);
while(true){
if((i__4865__auto___62726 < len__4864__auto___62725)){
args__4870__auto__.push((arguments[i__4865__auto___62726]));

var G__62727 = (i__4865__auto___62726 + (1));
i__4865__auto___62726 = G__62727;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61894 = conformed_args__59019__auto__;
var map__61894__$1 = cljs.core.__destructure_map(map__61894);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq61893){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61893));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62728 = arguments.length;
var i__4865__auto___62729 = (0);
while(true){
if((i__4865__auto___62729 < len__4864__auto___62728)){
args__4870__auto__.push((arguments[i__4865__auto___62729]));

var G__62730 = (i__4865__auto___62729 + (1));
i__4865__auto___62729 = G__62730;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61896 = conformed_args__59019__auto__;
var map__61896__$1 = cljs.core.__destructure_map(map__61896);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq61895){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61895));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62731 = arguments.length;
var i__4865__auto___62732 = (0);
while(true){
if((i__4865__auto___62732 < len__4864__auto___62731)){
args__4870__auto__.push((arguments[i__4865__auto___62732]));

var G__62733 = (i__4865__auto___62732 + (1));
i__4865__auto___62732 = G__62733;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61901 = conformed_args__59019__auto__;
var map__61901__$1 = cljs.core.__destructure_map(map__61901);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq61900){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62734 = arguments.length;
var i__4865__auto___62735 = (0);
while(true){
if((i__4865__auto___62735 < len__4864__auto___62734)){
args__4870__auto__.push((arguments[i__4865__auto___62735]));

var G__62736 = (i__4865__auto___62735 + (1));
i__4865__auto___62735 = G__62736;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61903 = conformed_args__59019__auto__;
var map__61903__$1 = cljs.core.__destructure_map(map__61903);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq61902){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61902));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62737 = arguments.length;
var i__4865__auto___62738 = (0);
while(true){
if((i__4865__auto___62738 < len__4864__auto___62737)){
args__4870__auto__.push((arguments[i__4865__auto___62738]));

var G__62739 = (i__4865__auto___62738 + (1));
i__4865__auto___62738 = G__62739;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61905 = conformed_args__59019__auto__;
var map__61905__$1 = cljs.core.__destructure_map(map__61905);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq61904){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61904));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62740 = arguments.length;
var i__4865__auto___62741 = (0);
while(true){
if((i__4865__auto___62741 < len__4864__auto___62740)){
args__4870__auto__.push((arguments[i__4865__auto___62741]));

var G__62742 = (i__4865__auto___62741 + (1));
i__4865__auto___62741 = G__62742;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61907 = conformed_args__59019__auto__;
var map__61907__$1 = cljs.core.__destructure_map(map__61907);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq61906){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61906));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62743 = arguments.length;
var i__4865__auto___62744 = (0);
while(true){
if((i__4865__auto___62744 < len__4864__auto___62743)){
args__4870__auto__.push((arguments[i__4865__auto___62744]));

var G__62745 = (i__4865__auto___62744 + (1));
i__4865__auto___62744 = G__62745;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61909 = conformed_args__59019__auto__;
var map__61909__$1 = cljs.core.__destructure_map(map__61909);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq61908){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61908));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62746 = arguments.length;
var i__4865__auto___62747 = (0);
while(true){
if((i__4865__auto___62747 < len__4864__auto___62746)){
args__4870__auto__.push((arguments[i__4865__auto___62747]));

var G__62748 = (i__4865__auto___62747 + (1));
i__4865__auto___62747 = G__62748;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61911 = conformed_args__59019__auto__;
var map__61911__$1 = cljs.core.__destructure_map(map__61911);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq61910){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61910));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62749 = arguments.length;
var i__4865__auto___62750 = (0);
while(true){
if((i__4865__auto___62750 < len__4864__auto___62749)){
args__4870__auto__.push((arguments[i__4865__auto___62750]));

var G__62751 = (i__4865__auto___62750 + (1));
i__4865__auto___62750 = G__62751;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61913 = conformed_args__59019__auto__;
var map__61913__$1 = cljs.core.__destructure_map(map__61913);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq61912){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61912));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62752 = arguments.length;
var i__4865__auto___62753 = (0);
while(true){
if((i__4865__auto___62753 < len__4864__auto___62752)){
args__4870__auto__.push((arguments[i__4865__auto___62753]));

var G__62754 = (i__4865__auto___62753 + (1));
i__4865__auto___62753 = G__62754;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61915 = conformed_args__59019__auto__;
var map__61915__$1 = cljs.core.__destructure_map(map__61915);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq61914){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61914));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62755 = arguments.length;
var i__4865__auto___62756 = (0);
while(true){
if((i__4865__auto___62756 < len__4864__auto___62755)){
args__4870__auto__.push((arguments[i__4865__auto___62756]));

var G__62757 = (i__4865__auto___62756 + (1));
i__4865__auto___62756 = G__62757;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61917 = conformed_args__59019__auto__;
var map__61917__$1 = cljs.core.__destructure_map(map__61917);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq61916){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62758 = arguments.length;
var i__4865__auto___62759 = (0);
while(true){
if((i__4865__auto___62759 < len__4864__auto___62758)){
args__4870__auto__.push((arguments[i__4865__auto___62759]));

var G__62760 = (i__4865__auto___62759 + (1));
i__4865__auto___62759 = G__62760;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61919 = conformed_args__59019__auto__;
var map__61919__$1 = cljs.core.__destructure_map(map__61919);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq61918){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61918));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62761 = arguments.length;
var i__4865__auto___62762 = (0);
while(true){
if((i__4865__auto___62762 < len__4864__auto___62761)){
args__4870__auto__.push((arguments[i__4865__auto___62762]));

var G__62763 = (i__4865__auto___62762 + (1));
i__4865__auto___62762 = G__62763;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61921 = conformed_args__59019__auto__;
var map__61921__$1 = cljs.core.__destructure_map(map__61921);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq61920){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61920));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62764 = arguments.length;
var i__4865__auto___62765 = (0);
while(true){
if((i__4865__auto___62765 < len__4864__auto___62764)){
args__4870__auto__.push((arguments[i__4865__auto___62765]));

var G__62766 = (i__4865__auto___62765 + (1));
i__4865__auto___62765 = G__62766;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61923 = conformed_args__59019__auto__;
var map__61923__$1 = cljs.core.__destructure_map(map__61923);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq61922){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61922));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62767 = arguments.length;
var i__4865__auto___62768 = (0);
while(true){
if((i__4865__auto___62768 < len__4864__auto___62767)){
args__4870__auto__.push((arguments[i__4865__auto___62768]));

var G__62769 = (i__4865__auto___62768 + (1));
i__4865__auto___62768 = G__62769;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61930 = conformed_args__59019__auto__;
var map__61930__$1 = cljs.core.__destructure_map(map__61930);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq61925){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61925));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62770 = arguments.length;
var i__4865__auto___62771 = (0);
while(true){
if((i__4865__auto___62771 < len__4864__auto___62770)){
args__4870__auto__.push((arguments[i__4865__auto___62771]));

var G__62772 = (i__4865__auto___62771 + (1));
i__4865__auto___62771 = G__62772;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61935 = conformed_args__59019__auto__;
var map__61935__$1 = cljs.core.__destructure_map(map__61935);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq61931){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61931));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62773 = arguments.length;
var i__4865__auto___62774 = (0);
while(true){
if((i__4865__auto___62774 < len__4864__auto___62773)){
args__4870__auto__.push((arguments[i__4865__auto___62774]));

var G__62775 = (i__4865__auto___62774 + (1));
i__4865__auto___62774 = G__62775;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61937 = conformed_args__59019__auto__;
var map__61937__$1 = cljs.core.__destructure_map(map__61937);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq61936){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61936));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62776 = arguments.length;
var i__4865__auto___62777 = (0);
while(true){
if((i__4865__auto___62777 < len__4864__auto___62776)){
args__4870__auto__.push((arguments[i__4865__auto___62777]));

var G__62778 = (i__4865__auto___62777 + (1));
i__4865__auto___62777 = G__62778;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61939 = conformed_args__59019__auto__;
var map__61939__$1 = cljs.core.__destructure_map(map__61939);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq61938){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61938));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62779 = arguments.length;
var i__4865__auto___62780 = (0);
while(true){
if((i__4865__auto___62780 < len__4864__auto___62779)){
args__4870__auto__.push((arguments[i__4865__auto___62780]));

var G__62781 = (i__4865__auto___62780 + (1));
i__4865__auto___62780 = G__62781;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61941 = conformed_args__59019__auto__;
var map__61941__$1 = cljs.core.__destructure_map(map__61941);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq61940){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61940));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62782 = arguments.length;
var i__4865__auto___62783 = (0);
while(true){
if((i__4865__auto___62783 < len__4864__auto___62782)){
args__4870__auto__.push((arguments[i__4865__auto___62783]));

var G__62784 = (i__4865__auto___62783 + (1));
i__4865__auto___62783 = G__62784;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61944 = conformed_args__59019__auto__;
var map__61944__$1 = cljs.core.__destructure_map(map__61944);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq61942){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61942));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62785 = arguments.length;
var i__4865__auto___62786 = (0);
while(true){
if((i__4865__auto___62786 < len__4864__auto___62785)){
args__4870__auto__.push((arguments[i__4865__auto___62786]));

var G__62787 = (i__4865__auto___62786 + (1));
i__4865__auto___62786 = G__62787;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61950 = conformed_args__59019__auto__;
var map__61950__$1 = cljs.core.__destructure_map(map__61950);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq61949){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61949));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62788 = arguments.length;
var i__4865__auto___62789 = (0);
while(true){
if((i__4865__auto___62789 < len__4864__auto___62788)){
args__4870__auto__.push((arguments[i__4865__auto___62789]));

var G__62790 = (i__4865__auto___62789 + (1));
i__4865__auto___62789 = G__62790;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61954 = conformed_args__59019__auto__;
var map__61954__$1 = cljs.core.__destructure_map(map__61954);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq61951){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61951));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62791 = arguments.length;
var i__4865__auto___62792 = (0);
while(true){
if((i__4865__auto___62792 < len__4864__auto___62791)){
args__4870__auto__.push((arguments[i__4865__auto___62792]));

var G__62793 = (i__4865__auto___62792 + (1));
i__4865__auto___62792 = G__62793;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61956 = conformed_args__59019__auto__;
var map__61956__$1 = cljs.core.__destructure_map(map__61956);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq61955){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61955));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62794 = arguments.length;
var i__4865__auto___62795 = (0);
while(true){
if((i__4865__auto___62795 < len__4864__auto___62794)){
args__4870__auto__.push((arguments[i__4865__auto___62795]));

var G__62796 = (i__4865__auto___62795 + (1));
i__4865__auto___62795 = G__62796;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61960 = conformed_args__59019__auto__;
var map__61960__$1 = cljs.core.__destructure_map(map__61960);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq61958){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61958));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62797 = arguments.length;
var i__4865__auto___62798 = (0);
while(true){
if((i__4865__auto___62798 < len__4864__auto___62797)){
args__4870__auto__.push((arguments[i__4865__auto___62798]));

var G__62799 = (i__4865__auto___62798 + (1));
i__4865__auto___62798 = G__62799;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61963 = conformed_args__59019__auto__;
var map__61963__$1 = cljs.core.__destructure_map(map__61963);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61963__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61963__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61963__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq61962){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61962));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62800 = arguments.length;
var i__4865__auto___62801 = (0);
while(true){
if((i__4865__auto___62801 < len__4864__auto___62800)){
args__4870__auto__.push((arguments[i__4865__auto___62801]));

var G__62802 = (i__4865__auto___62801 + (1));
i__4865__auto___62801 = G__62802;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61968 = conformed_args__59019__auto__;
var map__61968__$1 = cljs.core.__destructure_map(map__61968);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq61967){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61967));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62803 = arguments.length;
var i__4865__auto___62804 = (0);
while(true){
if((i__4865__auto___62804 < len__4864__auto___62803)){
args__4870__auto__.push((arguments[i__4865__auto___62804]));

var G__62805 = (i__4865__auto___62804 + (1));
i__4865__auto___62804 = G__62805;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61971 = conformed_args__59019__auto__;
var map__61971__$1 = cljs.core.__destructure_map(map__61971);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq61970){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61970));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62806 = arguments.length;
var i__4865__auto___62807 = (0);
while(true){
if((i__4865__auto___62807 < len__4864__auto___62806)){
args__4870__auto__.push((arguments[i__4865__auto___62807]));

var G__62808 = (i__4865__auto___62807 + (1));
i__4865__auto___62807 = G__62808;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61976 = conformed_args__59019__auto__;
var map__61976__$1 = cljs.core.__destructure_map(map__61976);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq61974){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62809 = arguments.length;
var i__4865__auto___62810 = (0);
while(true){
if((i__4865__auto___62810 < len__4864__auto___62809)){
args__4870__auto__.push((arguments[i__4865__auto___62810]));

var G__62811 = (i__4865__auto___62810 + (1));
i__4865__auto___62810 = G__62811;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61981 = conformed_args__59019__auto__;
var map__61981__$1 = cljs.core.__destructure_map(map__61981);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq61980){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61980));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62812 = arguments.length;
var i__4865__auto___62813 = (0);
while(true){
if((i__4865__auto___62813 < len__4864__auto___62812)){
args__4870__auto__.push((arguments[i__4865__auto___62813]));

var G__62814 = (i__4865__auto___62813 + (1));
i__4865__auto___62813 = G__62814;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61985 = conformed_args__59019__auto__;
var map__61985__$1 = cljs.core.__destructure_map(map__61985);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq61984){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61984));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62815 = arguments.length;
var i__4865__auto___62816 = (0);
while(true){
if((i__4865__auto___62816 < len__4864__auto___62815)){
args__4870__auto__.push((arguments[i__4865__auto___62816]));

var G__62817 = (i__4865__auto___62816 + (1));
i__4865__auto___62816 = G__62817;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61987 = conformed_args__59019__auto__;
var map__61987__$1 = cljs.core.__destructure_map(map__61987);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq61986){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62818 = arguments.length;
var i__4865__auto___62819 = (0);
while(true){
if((i__4865__auto___62819 < len__4864__auto___62818)){
args__4870__auto__.push((arguments[i__4865__auto___62819]));

var G__62820 = (i__4865__auto___62819 + (1));
i__4865__auto___62819 = G__62820;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61989 = conformed_args__59019__auto__;
var map__61989__$1 = cljs.core.__destructure_map(map__61989);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq61988){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61988));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62821 = arguments.length;
var i__4865__auto___62822 = (0);
while(true){
if((i__4865__auto___62822 < len__4864__auto___62821)){
args__4870__auto__.push((arguments[i__4865__auto___62822]));

var G__62823 = (i__4865__auto___62822 + (1));
i__4865__auto___62822 = G__62823;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61994 = conformed_args__59019__auto__;
var map__61994__$1 = cljs.core.__destructure_map(map__61994);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61994__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61994__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61994__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq61990){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61990));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62824 = arguments.length;
var i__4865__auto___62825 = (0);
while(true){
if((i__4865__auto___62825 < len__4864__auto___62824)){
args__4870__auto__.push((arguments[i__4865__auto___62825]));

var G__62826 = (i__4865__auto___62825 + (1));
i__4865__auto___62825 = G__62826;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62002 = conformed_args__59019__auto__;
var map__62002__$1 = cljs.core.__destructure_map(map__62002);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq61998){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61998));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62827 = arguments.length;
var i__4865__auto___62828 = (0);
while(true){
if((i__4865__auto___62828 < len__4864__auto___62827)){
args__4870__auto__.push((arguments[i__4865__auto___62828]));

var G__62829 = (i__4865__auto___62828 + (1));
i__4865__auto___62828 = G__62829;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62109 = conformed_args__59019__auto__;
var map__62109__$1 = cljs.core.__destructure_map(map__62109);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq62077){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62077));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62830 = arguments.length;
var i__4865__auto___62831 = (0);
while(true){
if((i__4865__auto___62831 < len__4864__auto___62830)){
args__4870__auto__.push((arguments[i__4865__auto___62831]));

var G__62832 = (i__4865__auto___62831 + (1));
i__4865__auto___62831 = G__62832;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62154 = conformed_args__59019__auto__;
var map__62154__$1 = cljs.core.__destructure_map(map__62154);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq62150){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62150));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62833 = arguments.length;
var i__4865__auto___62834 = (0);
while(true){
if((i__4865__auto___62834 < len__4864__auto___62833)){
args__4870__auto__.push((arguments[i__4865__auto___62834]));

var G__62835 = (i__4865__auto___62834 + (1));
i__4865__auto___62834 = G__62835;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62164 = conformed_args__59019__auto__;
var map__62164__$1 = cljs.core.__destructure_map(map__62164);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq62161){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62161));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62836 = arguments.length;
var i__4865__auto___62837 = (0);
while(true){
if((i__4865__auto___62837 < len__4864__auto___62836)){
args__4870__auto__.push((arguments[i__4865__auto___62837]));

var G__62838 = (i__4865__auto___62837 + (1));
i__4865__auto___62837 = G__62838;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62168 = conformed_args__59019__auto__;
var map__62168__$1 = cljs.core.__destructure_map(map__62168);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62168__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62168__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62168__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq62166){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62166));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62839 = arguments.length;
var i__4865__auto___62840 = (0);
while(true){
if((i__4865__auto___62840 < len__4864__auto___62839)){
args__4870__auto__.push((arguments[i__4865__auto___62840]));

var G__62841 = (i__4865__auto___62840 + (1));
i__4865__auto___62840 = G__62841;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62173 = conformed_args__59019__auto__;
var map__62173__$1 = cljs.core.__destructure_map(map__62173);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq62171){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62171));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62842 = arguments.length;
var i__4865__auto___62843 = (0);
while(true){
if((i__4865__auto___62843 < len__4864__auto___62842)){
args__4870__auto__.push((arguments[i__4865__auto___62843]));

var G__62844 = (i__4865__auto___62843 + (1));
i__4865__auto___62843 = G__62844;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62176 = conformed_args__59019__auto__;
var map__62176__$1 = cljs.core.__destructure_map(map__62176);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq62175){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62175));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62845 = arguments.length;
var i__4865__auto___62846 = (0);
while(true){
if((i__4865__auto___62846 < len__4864__auto___62845)){
args__4870__auto__.push((arguments[i__4865__auto___62846]));

var G__62847 = (i__4865__auto___62846 + (1));
i__4865__auto___62846 = G__62847;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62178 = conformed_args__59019__auto__;
var map__62178__$1 = cljs.core.__destructure_map(map__62178);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq62177){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62177));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62848 = arguments.length;
var i__4865__auto___62849 = (0);
while(true){
if((i__4865__auto___62849 < len__4864__auto___62848)){
args__4870__auto__.push((arguments[i__4865__auto___62849]));

var G__62850 = (i__4865__auto___62849 + (1));
i__4865__auto___62849 = G__62850;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62184 = conformed_args__59019__auto__;
var map__62184__$1 = cljs.core.__destructure_map(map__62184);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq62181){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62181));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62851 = arguments.length;
var i__4865__auto___62852 = (0);
while(true){
if((i__4865__auto___62852 < len__4864__auto___62851)){
args__4870__auto__.push((arguments[i__4865__auto___62852]));

var G__62853 = (i__4865__auto___62852 + (1));
i__4865__auto___62852 = G__62853;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62186 = conformed_args__59019__auto__;
var map__62186__$1 = cljs.core.__destructure_map(map__62186);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq62185){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62185));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62854 = arguments.length;
var i__4865__auto___62855 = (0);
while(true){
if((i__4865__auto___62855 < len__4864__auto___62854)){
args__4870__auto__.push((arguments[i__4865__auto___62855]));

var G__62856 = (i__4865__auto___62855 + (1));
i__4865__auto___62855 = G__62856;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62192 = conformed_args__59019__auto__;
var map__62192__$1 = cljs.core.__destructure_map(map__62192);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62192__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62192__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq62188){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62188));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62857 = arguments.length;
var i__4865__auto___62858 = (0);
while(true){
if((i__4865__auto___62858 < len__4864__auto___62857)){
args__4870__auto__.push((arguments[i__4865__auto___62858]));

var G__62859 = (i__4865__auto___62858 + (1));
i__4865__auto___62858 = G__62859;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62194 = conformed_args__59019__auto__;
var map__62194__$1 = cljs.core.__destructure_map(map__62194);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq62193){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62193));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62860 = arguments.length;
var i__4865__auto___62861 = (0);
while(true){
if((i__4865__auto___62861 < len__4864__auto___62860)){
args__4870__auto__.push((arguments[i__4865__auto___62861]));

var G__62862 = (i__4865__auto___62861 + (1));
i__4865__auto___62861 = G__62862;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62198 = conformed_args__59019__auto__;
var map__62198__$1 = cljs.core.__destructure_map(map__62198);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq62195){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62195));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62863 = arguments.length;
var i__4865__auto___62864 = (0);
while(true){
if((i__4865__auto___62864 < len__4864__auto___62863)){
args__4870__auto__.push((arguments[i__4865__auto___62864]));

var G__62865 = (i__4865__auto___62864 + (1));
i__4865__auto___62864 = G__62865;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62200 = conformed_args__59019__auto__;
var map__62200__$1 = cljs.core.__destructure_map(map__62200);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq62199){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62199));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62866 = arguments.length;
var i__4865__auto___62867 = (0);
while(true){
if((i__4865__auto___62867 < len__4864__auto___62866)){
args__4870__auto__.push((arguments[i__4865__auto___62867]));

var G__62868 = (i__4865__auto___62867 + (1));
i__4865__auto___62867 = G__62868;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62204 = conformed_args__59019__auto__;
var map__62204__$1 = cljs.core.__destructure_map(map__62204);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62204__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62204__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62204__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq62203){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62203));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62869 = arguments.length;
var i__4865__auto___62870 = (0);
while(true){
if((i__4865__auto___62870 < len__4864__auto___62869)){
args__4870__auto__.push((arguments[i__4865__auto___62870]));

var G__62871 = (i__4865__auto___62870 + (1));
i__4865__auto___62870 = G__62871;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62209 = conformed_args__59019__auto__;
var map__62209__$1 = cljs.core.__destructure_map(map__62209);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq62208){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62208));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62872 = arguments.length;
var i__4865__auto___62873 = (0);
while(true){
if((i__4865__auto___62873 < len__4864__auto___62872)){
args__4870__auto__.push((arguments[i__4865__auto___62873]));

var G__62874 = (i__4865__auto___62873 + (1));
i__4865__auto___62873 = G__62874;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62213 = conformed_args__59019__auto__;
var map__62213__$1 = cljs.core.__destructure_map(map__62213);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq62210){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62210));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62875 = arguments.length;
var i__4865__auto___62876 = (0);
while(true){
if((i__4865__auto___62876 < len__4864__auto___62875)){
args__4870__auto__.push((arguments[i__4865__auto___62876]));

var G__62877 = (i__4865__auto___62876 + (1));
i__4865__auto___62876 = G__62877;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62218 = conformed_args__59019__auto__;
var map__62218__$1 = cljs.core.__destructure_map(map__62218);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq62216){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62216));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62878 = arguments.length;
var i__4865__auto___62879 = (0);
while(true){
if((i__4865__auto___62879 < len__4864__auto___62878)){
args__4870__auto__.push((arguments[i__4865__auto___62879]));

var G__62880 = (i__4865__auto___62879 + (1));
i__4865__auto___62879 = G__62880;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62220 = conformed_args__59019__auto__;
var map__62220__$1 = cljs.core.__destructure_map(map__62220);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq62219){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62219));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62881 = arguments.length;
var i__4865__auto___62882 = (0);
while(true){
if((i__4865__auto___62882 < len__4864__auto___62881)){
args__4870__auto__.push((arguments[i__4865__auto___62882]));

var G__62883 = (i__4865__auto___62882 + (1));
i__4865__auto___62882 = G__62883;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62222 = conformed_args__59019__auto__;
var map__62222__$1 = cljs.core.__destructure_map(map__62222);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq62221){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62221));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62884 = arguments.length;
var i__4865__auto___62885 = (0);
while(true){
if((i__4865__auto___62885 < len__4864__auto___62884)){
args__4870__auto__.push((arguments[i__4865__auto___62885]));

var G__62886 = (i__4865__auto___62885 + (1));
i__4865__auto___62885 = G__62886;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62227 = conformed_args__59019__auto__;
var map__62227__$1 = cljs.core.__destructure_map(map__62227);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq62224){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62224));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62887 = arguments.length;
var i__4865__auto___62888 = (0);
while(true){
if((i__4865__auto___62888 < len__4864__auto___62887)){
args__4870__auto__.push((arguments[i__4865__auto___62888]));

var G__62889 = (i__4865__auto___62888 + (1));
i__4865__auto___62888 = G__62889;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62246 = conformed_args__59019__auto__;
var map__62246__$1 = cljs.core.__destructure_map(map__62246);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq62231){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62231));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62890 = arguments.length;
var i__4865__auto___62891 = (0);
while(true){
if((i__4865__auto___62891 < len__4864__auto___62890)){
args__4870__auto__.push((arguments[i__4865__auto___62891]));

var G__62892 = (i__4865__auto___62891 + (1));
i__4865__auto___62891 = G__62892;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62250 = conformed_args__59019__auto__;
var map__62250__$1 = cljs.core.__destructure_map(map__62250);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq62248){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62248));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62893 = arguments.length;
var i__4865__auto___62894 = (0);
while(true){
if((i__4865__auto___62894 < len__4864__auto___62893)){
args__4870__auto__.push((arguments[i__4865__auto___62894]));

var G__62895 = (i__4865__auto___62894 + (1));
i__4865__auto___62894 = G__62895;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62254 = conformed_args__59019__auto__;
var map__62254__$1 = cljs.core.__destructure_map(map__62254);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq62251){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62251));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62896 = arguments.length;
var i__4865__auto___62897 = (0);
while(true){
if((i__4865__auto___62897 < len__4864__auto___62896)){
args__4870__auto__.push((arguments[i__4865__auto___62897]));

var G__62898 = (i__4865__auto___62897 + (1));
i__4865__auto___62897 = G__62898;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62257 = conformed_args__59019__auto__;
var map__62257__$1 = cljs.core.__destructure_map(map__62257);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq62256){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62256));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62899 = arguments.length;
var i__4865__auto___62900 = (0);
while(true){
if((i__4865__auto___62900 < len__4864__auto___62899)){
args__4870__auto__.push((arguments[i__4865__auto___62900]));

var G__62901 = (i__4865__auto___62900 + (1));
i__4865__auto___62900 = G__62901;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62260 = conformed_args__59019__auto__;
var map__62260__$1 = cljs.core.__destructure_map(map__62260);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq62259){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62259));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62902 = arguments.length;
var i__4865__auto___62903 = (0);
while(true){
if((i__4865__auto___62903 < len__4864__auto___62902)){
args__4870__auto__.push((arguments[i__4865__auto___62903]));

var G__62904 = (i__4865__auto___62903 + (1));
i__4865__auto___62903 = G__62904;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62264 = conformed_args__59019__auto__;
var map__62264__$1 = cljs.core.__destructure_map(map__62264);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62264__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62264__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62264__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq62262){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62262));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62905 = arguments.length;
var i__4865__auto___62906 = (0);
while(true){
if((i__4865__auto___62906 < len__4864__auto___62905)){
args__4870__auto__.push((arguments[i__4865__auto___62906]));

var G__62907 = (i__4865__auto___62906 + (1));
i__4865__auto___62906 = G__62907;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62269 = conformed_args__59019__auto__;
var map__62269__$1 = cljs.core.__destructure_map(map__62269);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq62265){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62265));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62908 = arguments.length;
var i__4865__auto___62909 = (0);
while(true){
if((i__4865__auto___62909 < len__4864__auto___62908)){
args__4870__auto__.push((arguments[i__4865__auto___62909]));

var G__62910 = (i__4865__auto___62909 + (1));
i__4865__auto___62909 = G__62910;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62271 = conformed_args__59019__auto__;
var map__62271__$1 = cljs.core.__destructure_map(map__62271);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq62270){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62270));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62911 = arguments.length;
var i__4865__auto___62912 = (0);
while(true){
if((i__4865__auto___62912 < len__4864__auto___62911)){
args__4870__auto__.push((arguments[i__4865__auto___62912]));

var G__62913 = (i__4865__auto___62912 + (1));
i__4865__auto___62912 = G__62913;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62275 = conformed_args__59019__auto__;
var map__62275__$1 = cljs.core.__destructure_map(map__62275);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq62274){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62274));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62914 = arguments.length;
var i__4865__auto___62915 = (0);
while(true){
if((i__4865__auto___62915 < len__4864__auto___62914)){
args__4870__auto__.push((arguments[i__4865__auto___62915]));

var G__62916 = (i__4865__auto___62915 + (1));
i__4865__auto___62915 = G__62916;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62279 = conformed_args__59019__auto__;
var map__62279__$1 = cljs.core.__destructure_map(map__62279);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq62276){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62276));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62917 = arguments.length;
var i__4865__auto___62918 = (0);
while(true){
if((i__4865__auto___62918 < len__4864__auto___62917)){
args__4870__auto__.push((arguments[i__4865__auto___62918]));

var G__62919 = (i__4865__auto___62918 + (1));
i__4865__auto___62918 = G__62919;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62296 = conformed_args__59019__auto__;
var map__62296__$1 = cljs.core.__destructure_map(map__62296);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq62286){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62286));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62920 = arguments.length;
var i__4865__auto___62921 = (0);
while(true){
if((i__4865__auto___62921 < len__4864__auto___62920)){
args__4870__auto__.push((arguments[i__4865__auto___62921]));

var G__62922 = (i__4865__auto___62921 + (1));
i__4865__auto___62921 = G__62922;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62298 = conformed_args__59019__auto__;
var map__62298__$1 = cljs.core.__destructure_map(map__62298);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq62297){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62297));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62923 = arguments.length;
var i__4865__auto___62924 = (0);
while(true){
if((i__4865__auto___62924 < len__4864__auto___62923)){
args__4870__auto__.push((arguments[i__4865__auto___62924]));

var G__62925 = (i__4865__auto___62924 + (1));
i__4865__auto___62924 = G__62925;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62303 = conformed_args__59019__auto__;
var map__62303__$1 = cljs.core.__destructure_map(map__62303);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq62301){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62301));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62926 = arguments.length;
var i__4865__auto___62927 = (0);
while(true){
if((i__4865__auto___62927 < len__4864__auto___62926)){
args__4870__auto__.push((arguments[i__4865__auto___62927]));

var G__62928 = (i__4865__auto___62927 + (1));
i__4865__auto___62927 = G__62928;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62310 = conformed_args__59019__auto__;
var map__62310__$1 = cljs.core.__destructure_map(map__62310);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq62307){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62307));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62929 = arguments.length;
var i__4865__auto___62930 = (0);
while(true){
if((i__4865__auto___62930 < len__4864__auto___62929)){
args__4870__auto__.push((arguments[i__4865__auto___62930]));

var G__62931 = (i__4865__auto___62930 + (1));
i__4865__auto___62930 = G__62931;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62316 = conformed_args__59019__auto__;
var map__62316__$1 = cljs.core.__destructure_map(map__62316);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq62314){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62314));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62932 = arguments.length;
var i__4865__auto___62933 = (0);
while(true){
if((i__4865__auto___62933 < len__4864__auto___62932)){
args__4870__auto__.push((arguments[i__4865__auto___62933]));

var G__62934 = (i__4865__auto___62933 + (1));
i__4865__auto___62933 = G__62934;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62318 = conformed_args__59019__auto__;
var map__62318__$1 = cljs.core.__destructure_map(map__62318);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62318__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62318__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62318__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq62317){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62317));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62935 = arguments.length;
var i__4865__auto___62936 = (0);
while(true){
if((i__4865__auto___62936 < len__4864__auto___62935)){
args__4870__auto__.push((arguments[i__4865__auto___62936]));

var G__62937 = (i__4865__auto___62936 + (1));
i__4865__auto___62936 = G__62937;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62322 = conformed_args__59019__auto__;
var map__62322__$1 = cljs.core.__destructure_map(map__62322);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq62321){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62321));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62938 = arguments.length;
var i__4865__auto___62939 = (0);
while(true){
if((i__4865__auto___62939 < len__4864__auto___62938)){
args__4870__auto__.push((arguments[i__4865__auto___62939]));

var G__62940 = (i__4865__auto___62939 + (1));
i__4865__auto___62939 = G__62940;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62326 = conformed_args__59019__auto__;
var map__62326__$1 = cljs.core.__destructure_map(map__62326);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq62325){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62325));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62941 = arguments.length;
var i__4865__auto___62942 = (0);
while(true){
if((i__4865__auto___62942 < len__4864__auto___62941)){
args__4870__auto__.push((arguments[i__4865__auto___62942]));

var G__62943 = (i__4865__auto___62942 + (1));
i__4865__auto___62942 = G__62943;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62332 = conformed_args__59019__auto__;
var map__62332__$1 = cljs.core.__destructure_map(map__62332);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq62329){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62329));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62944 = arguments.length;
var i__4865__auto___62945 = (0);
while(true){
if((i__4865__auto___62945 < len__4864__auto___62944)){
args__4870__auto__.push((arguments[i__4865__auto___62945]));

var G__62946 = (i__4865__auto___62945 + (1));
i__4865__auto___62945 = G__62946;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62336 = conformed_args__59019__auto__;
var map__62336__$1 = cljs.core.__destructure_map(map__62336);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62336__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62336__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62336__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq62333){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62333));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62947 = arguments.length;
var i__4865__auto___62948 = (0);
while(true){
if((i__4865__auto___62948 < len__4864__auto___62947)){
args__4870__auto__.push((arguments[i__4865__auto___62948]));

var G__62949 = (i__4865__auto___62948 + (1));
i__4865__auto___62948 = G__62949;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62340 = conformed_args__59019__auto__;
var map__62340__$1 = cljs.core.__destructure_map(map__62340);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq62339){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62339));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62950 = arguments.length;
var i__4865__auto___62951 = (0);
while(true){
if((i__4865__auto___62951 < len__4864__auto___62950)){
args__4870__auto__.push((arguments[i__4865__auto___62951]));

var G__62952 = (i__4865__auto___62951 + (1));
i__4865__auto___62951 = G__62952;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62344 = conformed_args__59019__auto__;
var map__62344__$1 = cljs.core.__destructure_map(map__62344);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq62343){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62343));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62953 = arguments.length;
var i__4865__auto___62954 = (0);
while(true){
if((i__4865__auto___62954 < len__4864__auto___62953)){
args__4870__auto__.push((arguments[i__4865__auto___62954]));

var G__62955 = (i__4865__auto___62954 + (1));
i__4865__auto___62954 = G__62955;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62346 = conformed_args__59019__auto__;
var map__62346__$1 = cljs.core.__destructure_map(map__62346);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq62345){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62345));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62956 = arguments.length;
var i__4865__auto___62957 = (0);
while(true){
if((i__4865__auto___62957 < len__4864__auto___62956)){
args__4870__auto__.push((arguments[i__4865__auto___62957]));

var G__62958 = (i__4865__auto___62957 + (1));
i__4865__auto___62957 = G__62958;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62349 = conformed_args__59019__auto__;
var map__62349__$1 = cljs.core.__destructure_map(map__62349);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq62348){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62348));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62959 = arguments.length;
var i__4865__auto___62960 = (0);
while(true){
if((i__4865__auto___62960 < len__4864__auto___62959)){
args__4870__auto__.push((arguments[i__4865__auto___62960]));

var G__62961 = (i__4865__auto___62960 + (1));
i__4865__auto___62960 = G__62961;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62351 = conformed_args__59019__auto__;
var map__62351__$1 = cljs.core.__destructure_map(map__62351);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq62350){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62350));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62962 = arguments.length;
var i__4865__auto___62963 = (0);
while(true){
if((i__4865__auto___62963 < len__4864__auto___62962)){
args__4870__auto__.push((arguments[i__4865__auto___62963]));

var G__62964 = (i__4865__auto___62963 + (1));
i__4865__auto___62963 = G__62964;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62353 = conformed_args__59019__auto__;
var map__62353__$1 = cljs.core.__destructure_map(map__62353);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62353__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62353__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62353__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq62352){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62352));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62965 = arguments.length;
var i__4865__auto___62966 = (0);
while(true){
if((i__4865__auto___62966 < len__4864__auto___62965)){
args__4870__auto__.push((arguments[i__4865__auto___62966]));

var G__62967 = (i__4865__auto___62966 + (1));
i__4865__auto___62966 = G__62967;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62356 = conformed_args__59019__auto__;
var map__62356__$1 = cljs.core.__destructure_map(map__62356);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq62355){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62355));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62968 = arguments.length;
var i__4865__auto___62969 = (0);
while(true){
if((i__4865__auto___62969 < len__4864__auto___62968)){
args__4870__auto__.push((arguments[i__4865__auto___62969]));

var G__62970 = (i__4865__auto___62969 + (1));
i__4865__auto___62969 = G__62970;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62359 = conformed_args__59019__auto__;
var map__62359__$1 = cljs.core.__destructure_map(map__62359);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq62357){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62357));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62971 = arguments.length;
var i__4865__auto___62972 = (0);
while(true){
if((i__4865__auto___62972 < len__4864__auto___62971)){
args__4870__auto__.push((arguments[i__4865__auto___62972]));

var G__62973 = (i__4865__auto___62972 + (1));
i__4865__auto___62972 = G__62973;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62361 = conformed_args__59019__auto__;
var map__62361__$1 = cljs.core.__destructure_map(map__62361);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq62360){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62360));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62974 = arguments.length;
var i__4865__auto___62975 = (0);
while(true){
if((i__4865__auto___62975 < len__4864__auto___62974)){
args__4870__auto__.push((arguments[i__4865__auto___62975]));

var G__62976 = (i__4865__auto___62975 + (1));
i__4865__auto___62975 = G__62976;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62364 = conformed_args__59019__auto__;
var map__62364__$1 = cljs.core.__destructure_map(map__62364);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq62362){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62362));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62977 = arguments.length;
var i__4865__auto___62978 = (0);
while(true){
if((i__4865__auto___62978 < len__4864__auto___62977)){
args__4870__auto__.push((arguments[i__4865__auto___62978]));

var G__62979 = (i__4865__auto___62978 + (1));
i__4865__auto___62978 = G__62979;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62367 = conformed_args__59019__auto__;
var map__62367__$1 = cljs.core.__destructure_map(map__62367);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq62365){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62365));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62980 = arguments.length;
var i__4865__auto___62981 = (0);
while(true){
if((i__4865__auto___62981 < len__4864__auto___62980)){
args__4870__auto__.push((arguments[i__4865__auto___62981]));

var G__62982 = (i__4865__auto___62981 + (1));
i__4865__auto___62981 = G__62982;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62369 = conformed_args__59019__auto__;
var map__62369__$1 = cljs.core.__destructure_map(map__62369);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq62368){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62368));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62983 = arguments.length;
var i__4865__auto___62984 = (0);
while(true){
if((i__4865__auto___62984 < len__4864__auto___62983)){
args__4870__auto__.push((arguments[i__4865__auto___62984]));

var G__62985 = (i__4865__auto___62984 + (1));
i__4865__auto___62984 = G__62985;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62371 = conformed_args__59019__auto__;
var map__62371__$1 = cljs.core.__destructure_map(map__62371);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq62370){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62370));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62986 = arguments.length;
var i__4865__auto___62987 = (0);
while(true){
if((i__4865__auto___62987 < len__4864__auto___62986)){
args__4870__auto__.push((arguments[i__4865__auto___62987]));

var G__62988 = (i__4865__auto___62987 + (1));
i__4865__auto___62987 = G__62988;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62373 = conformed_args__59019__auto__;
var map__62373__$1 = cljs.core.__destructure_map(map__62373);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq62372){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62372));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62989 = arguments.length;
var i__4865__auto___62990 = (0);
while(true){
if((i__4865__auto___62990 < len__4864__auto___62989)){
args__4870__auto__.push((arguments[i__4865__auto___62990]));

var G__62991 = (i__4865__auto___62990 + (1));
i__4865__auto___62990 = G__62991;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62375 = conformed_args__59019__auto__;
var map__62375__$1 = cljs.core.__destructure_map(map__62375);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62375__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62375__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62375__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq62374){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62374));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62992 = arguments.length;
var i__4865__auto___62993 = (0);
while(true){
if((i__4865__auto___62993 < len__4864__auto___62992)){
args__4870__auto__.push((arguments[i__4865__auto___62993]));

var G__62994 = (i__4865__auto___62993 + (1));
i__4865__auto___62993 = G__62994;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62377 = conformed_args__59019__auto__;
var map__62377__$1 = cljs.core.__destructure_map(map__62377);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62377__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62377__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq62376){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62376));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62995 = arguments.length;
var i__4865__auto___62996 = (0);
while(true){
if((i__4865__auto___62996 < len__4864__auto___62995)){
args__4870__auto__.push((arguments[i__4865__auto___62996]));

var G__62997 = (i__4865__auto___62996 + (1));
i__4865__auto___62996 = G__62997;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59019__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62379 = conformed_args__59019__auto__;
var map__62379__$1 = cljs.core.__destructure_map(map__62379);
var css__59022__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59021__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59021__auto__);
var attrs_value__59023__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__59020__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59023__auto__], null),children__59021__auto____$1),css__59022__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq62378){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62378));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
