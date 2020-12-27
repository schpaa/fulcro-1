goog.provide('com.fulcrologic.fulcro.dom');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
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
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__63900){
var vec__63901 = p__63900;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63901,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63901,(1),null);
var pair = vec__63901;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__63904){
var vec__63905 = p__63904;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63905,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63905,(1),null);
var pair = vec__63905;
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
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__63908){
var vec__63909 = p__63908;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63909,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63909,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__63912 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63912,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__63912;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
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
var G__63914 = arguments.length;
switch (G__63914) {
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
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__63915 = component.refs;
var G__63915__$1 = (((G__63915 == null))?null:goog.object.get(G__63915,name));
if((G__63915__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__63915__$1);
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
var temp__5733__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5733__auto__)){
var ref = temp__5733__auto__;
var G__63916 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__63917 = (function (){var G__63918 = r;
if((G__63918 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__63918);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__63917) : ref.call(null,G__63917));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__63916) : factory.call(null,G__63916));
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
var G__63923 = arguments.length;
switch (G__63923) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___64558 = arguments.length;
var i__4737__auto___64559 = (0);
while(true){
if((i__4737__auto___64559 < len__4736__auto___64558)){
args_arr__4757__auto__.push((arguments[i__4737__auto___64559]));

var G__64560 = (i__4737__auto___64559 + (1));
i__4737__auto___64559 = G__64560;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq63920){
var G__63921 = cljs.core.first(seq63920);
var seq63920__$1 = cljs.core.next(seq63920);
var G__63922 = cljs.core.first(seq63920__$1);
var seq63920__$2 = cljs.core.next(seq63920__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63921,G__63922,seq63920__$2);
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

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
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
var and__4115__auto__ = tag;
if(cljs.core.truth_(and__4115__auto__)){
var G__63924 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__63924) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__63924));
} else {
return and__4115__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x63926_64561 = ctor.prototype;
(x63926_64561.onChange = (function (event){
var this$ = this;
var temp__5735__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x63926_64561.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__63925_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__63925_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4115__auto__ = state_value;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = element_value;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
}),null)),null,-1792656791);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x63926_64561.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__64562__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__64562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64563__i = 0, G__64563__a = new Array(arguments.length -  0);
while (G__64563__i < G__64563__a.length) {G__64563__a[G__64563__i] = arguments[G__64563__i + 0]; ++G__64563__i;}
  args = new cljs.core.IndexedSeq(G__64563__a,0,null);
} 
return G__64562__delegate.call(this,args);};
G__64562.cljs$lang$maxFixedArity = 0;
G__64562.cljs$lang$applyTo = (function (arglist__64564){
var args = cljs.core.seq(arglist__64564);
return G__64562__delegate(args);
});
G__64562.cljs$core$IFn$_invoke$arity$variadic = G__64562__delegate;
return G__64562;
})()
;
return (function() { 
var G__64565__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5733__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__64565 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__64566__i = 0, G__64566__a = new Array(arguments.length -  1);
while (G__64566__i < G__64566__a.length) {G__64566__a[G__64566__i] = arguments[G__64566__i + 1]; ++G__64566__i;}
  children = new cljs.core.IndexedSeq(G__64566__a,0,null);
} 
return G__64565__delegate.call(this,props,children);};
G__64565.cljs$lang$maxFixedArity = 1;
G__64565.cljs$lang$applyTo = (function (arglist__64567){
var props = cljs.core.first(arglist__64567);
var children = cljs.core.rest(arglist__64567);
return G__64565__delegate(props,children);
});
G__64565.cljs$core$IFn$_invoke$arity$variadic = G__64565__delegate;
return G__64565;
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
var G__63927 = tag;
switch (G__63927) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63927)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__63929 = arguments.length;
switch (G__63929) {
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
var vec__63930 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__63931 = cljs.core.seq(vec__63930);
var first__63932 = cljs.core.first(seq__63931);
var seq__63931__$1 = cljs.core.next(seq__63931);
var head = first__63932;
var tail = seq__63931__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__63933 = (function (){var G__63934 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63934,tail);

return G__63934;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63933) : f.call(null,G__63933));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__63935 = (function (){var G__63936 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63936,args);

return G__63936;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63935) : f.call(null,G__63935));
} else {
if(cljs.core.object_QMARK_(head)){
var G__63937 = (function (){var G__63938 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63938,tail);

return G__63938;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63937) : f.call(null,G__63937));
} else {
if(cljs.core.map_QMARK_(head)){
var G__63939 = (function (){var G__63940 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__63940,tail);

return G__63940;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63939) : f.call(null,G__63939));
} else {
var G__63941 = (function (){var G__63942 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63942,args);

return G__63942;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63941) : f.call(null,G__63941));

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
var G__63944 = arguments.length;
switch (G__63944) {
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
var vec__63945 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__63946 = cljs.core.seq(vec__63945);
var first__63947 = cljs.core.first(seq__63946);
var seq__63946__$1 = cljs.core.next(seq__63946);
var head = first__63947;
var tail = seq__63946__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63948 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63948,tail);

return G__63948;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63949 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63949,args);

return G__63949;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63950 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63950,tail);

return G__63950;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63951 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__63951,tail);

return G__63951;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__63952 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__63952,args);

return G__63952;
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
var args__4742__auto__ = [];
var len__4736__auto___64571 = arguments.length;
var i__4737__auto___64572 = (0);
while(true){
if((i__4737__auto___64572 < len__4736__auto___64571)){
args__4742__auto__.push((arguments[i__4737__auto___64572]));

var G__64573 = (i__4737__auto___64572 + (1));
i__4737__auto___64572 = G__64573;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63954 = conformed_args__62685__auto__;
var map__63954__$1 = (((((!((map__63954 == null))))?(((((map__63954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63954):map__63954);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq63953){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63953));
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
var args__4742__auto__ = [];
var len__4736__auto___64574 = arguments.length;
var i__4737__auto___64575 = (0);
while(true){
if((i__4737__auto___64575 < len__4736__auto___64574)){
args__4742__auto__.push((arguments[i__4737__auto___64575]));

var G__64576 = (i__4737__auto___64575 + (1));
i__4737__auto___64575 = G__64576;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63957 = conformed_args__62685__auto__;
var map__63957__$1 = (((((!((map__63957 == null))))?(((((map__63957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63957):map__63957);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq63956){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63956));
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
var args__4742__auto__ = [];
var len__4736__auto___64577 = arguments.length;
var i__4737__auto___64578 = (0);
while(true){
if((i__4737__auto___64578 < len__4736__auto___64577)){
args__4742__auto__.push((arguments[i__4737__auto___64578]));

var G__64579 = (i__4737__auto___64578 + (1));
i__4737__auto___64578 = G__64579;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63960 = conformed_args__62685__auto__;
var map__63960__$1 = (((((!((map__63960 == null))))?(((((map__63960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63960):map__63960);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq63959){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63959));
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
var args__4742__auto__ = [];
var len__4736__auto___64580 = arguments.length;
var i__4737__auto___64581 = (0);
while(true){
if((i__4737__auto___64581 < len__4736__auto___64580)){
args__4742__auto__.push((arguments[i__4737__auto___64581]));

var G__64582 = (i__4737__auto___64581 + (1));
i__4737__auto___64581 = G__64582;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63963 = conformed_args__62685__auto__;
var map__63963__$1 = (((((!((map__63963 == null))))?(((((map__63963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63963):map__63963);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63963__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63963__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63963__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq63962){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63962));
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
var args__4742__auto__ = [];
var len__4736__auto___64583 = arguments.length;
var i__4737__auto___64584 = (0);
while(true){
if((i__4737__auto___64584 < len__4736__auto___64583)){
args__4742__auto__.push((arguments[i__4737__auto___64584]));

var G__64585 = (i__4737__auto___64584 + (1));
i__4737__auto___64584 = G__64585;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63966 = conformed_args__62685__auto__;
var map__63966__$1 = (((((!((map__63966 == null))))?(((((map__63966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63966):map__63966);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq63965){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63965));
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
var args__4742__auto__ = [];
var len__4736__auto___64586 = arguments.length;
var i__4737__auto___64587 = (0);
while(true){
if((i__4737__auto___64587 < len__4736__auto___64586)){
args__4742__auto__.push((arguments[i__4737__auto___64587]));

var G__64588 = (i__4737__auto___64587 + (1));
i__4737__auto___64587 = G__64588;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63969 = conformed_args__62685__auto__;
var map__63969__$1 = (((((!((map__63969 == null))))?(((((map__63969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63969):map__63969);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63969__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63969__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63969__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq63968){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63968));
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
var args__4742__auto__ = [];
var len__4736__auto___64589 = arguments.length;
var i__4737__auto___64590 = (0);
while(true){
if((i__4737__auto___64590 < len__4736__auto___64589)){
args__4742__auto__.push((arguments[i__4737__auto___64590]));

var G__64591 = (i__4737__auto___64590 + (1));
i__4737__auto___64590 = G__64591;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63972 = conformed_args__62685__auto__;
var map__63972__$1 = (((((!((map__63972 == null))))?(((((map__63972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63972):map__63972);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq63971){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63971));
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
var args__4742__auto__ = [];
var len__4736__auto___64592 = arguments.length;
var i__4737__auto___64593 = (0);
while(true){
if((i__4737__auto___64593 < len__4736__auto___64592)){
args__4742__auto__.push((arguments[i__4737__auto___64593]));

var G__64594 = (i__4737__auto___64593 + (1));
i__4737__auto___64593 = G__64594;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63975 = conformed_args__62685__auto__;
var map__63975__$1 = (((((!((map__63975 == null))))?(((((map__63975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63975):map__63975);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq63974){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63974));
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
var args__4742__auto__ = [];
var len__4736__auto___64595 = arguments.length;
var i__4737__auto___64596 = (0);
while(true){
if((i__4737__auto___64596 < len__4736__auto___64595)){
args__4742__auto__.push((arguments[i__4737__auto___64596]));

var G__64597 = (i__4737__auto___64596 + (1));
i__4737__auto___64596 = G__64597;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63978 = conformed_args__62685__auto__;
var map__63978__$1 = (((((!((map__63978 == null))))?(((((map__63978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63978):map__63978);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63978__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63978__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq63977){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63977));
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
var args__4742__auto__ = [];
var len__4736__auto___64598 = arguments.length;
var i__4737__auto___64599 = (0);
while(true){
if((i__4737__auto___64599 < len__4736__auto___64598)){
args__4742__auto__.push((arguments[i__4737__auto___64599]));

var G__64600 = (i__4737__auto___64599 + (1));
i__4737__auto___64599 = G__64600;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63981 = conformed_args__62685__auto__;
var map__63981__$1 = (((((!((map__63981 == null))))?(((((map__63981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63981):map__63981);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq63980){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63980));
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
var args__4742__auto__ = [];
var len__4736__auto___64601 = arguments.length;
var i__4737__auto___64602 = (0);
while(true){
if((i__4737__auto___64602 < len__4736__auto___64601)){
args__4742__auto__.push((arguments[i__4737__auto___64602]));

var G__64603 = (i__4737__auto___64602 + (1));
i__4737__auto___64602 = G__64603;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63984 = conformed_args__62685__auto__;
var map__63984__$1 = (((((!((map__63984 == null))))?(((((map__63984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63984):map__63984);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq63983){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63983));
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
var args__4742__auto__ = [];
var len__4736__auto___64604 = arguments.length;
var i__4737__auto___64605 = (0);
while(true){
if((i__4737__auto___64605 < len__4736__auto___64604)){
args__4742__auto__.push((arguments[i__4737__auto___64605]));

var G__64606 = (i__4737__auto___64605 + (1));
i__4737__auto___64605 = G__64606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63987 = conformed_args__62685__auto__;
var map__63987__$1 = (((((!((map__63987 == null))))?(((((map__63987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63987):map__63987);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq63986){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63986));
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
var args__4742__auto__ = [];
var len__4736__auto___64607 = arguments.length;
var i__4737__auto___64608 = (0);
while(true){
if((i__4737__auto___64608 < len__4736__auto___64607)){
args__4742__auto__.push((arguments[i__4737__auto___64608]));

var G__64609 = (i__4737__auto___64608 + (1));
i__4737__auto___64608 = G__64609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63990 = conformed_args__62685__auto__;
var map__63990__$1 = (((((!((map__63990 == null))))?(((((map__63990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63990):map__63990);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq63989){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63989));
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
var args__4742__auto__ = [];
var len__4736__auto___64610 = arguments.length;
var i__4737__auto___64611 = (0);
while(true){
if((i__4737__auto___64611 < len__4736__auto___64610)){
args__4742__auto__.push((arguments[i__4737__auto___64611]));

var G__64612 = (i__4737__auto___64611 + (1));
i__4737__auto___64611 = G__64612;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63993 = conformed_args__62685__auto__;
var map__63993__$1 = (((((!((map__63993 == null))))?(((((map__63993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63993):map__63993);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq63992){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63992));
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
var args__4742__auto__ = [];
var len__4736__auto___64613 = arguments.length;
var i__4737__auto___64614 = (0);
while(true){
if((i__4737__auto___64614 < len__4736__auto___64613)){
args__4742__auto__.push((arguments[i__4737__auto___64614]));

var G__64615 = (i__4737__auto___64614 + (1));
i__4737__auto___64614 = G__64615;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63996 = conformed_args__62685__auto__;
var map__63996__$1 = (((((!((map__63996 == null))))?(((((map__63996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63996):map__63996);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq63995){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63995));
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
var args__4742__auto__ = [];
var len__4736__auto___64616 = arguments.length;
var i__4737__auto___64617 = (0);
while(true){
if((i__4737__auto___64617 < len__4736__auto___64616)){
args__4742__auto__.push((arguments[i__4737__auto___64617]));

var G__64618 = (i__4737__auto___64617 + (1));
i__4737__auto___64617 = G__64618;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63999 = conformed_args__62685__auto__;
var map__63999__$1 = (((((!((map__63999 == null))))?(((((map__63999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63999):map__63999);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq63998){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63998));
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
var args__4742__auto__ = [];
var len__4736__auto___64619 = arguments.length;
var i__4737__auto___64620 = (0);
while(true){
if((i__4737__auto___64620 < len__4736__auto___64619)){
args__4742__auto__.push((arguments[i__4737__auto___64620]));

var G__64621 = (i__4737__auto___64620 + (1));
i__4737__auto___64620 = G__64621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64002 = conformed_args__62685__auto__;
var map__64002__$1 = (((((!((map__64002 == null))))?(((((map__64002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64002):map__64002);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq64001){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64001));
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
var args__4742__auto__ = [];
var len__4736__auto___64622 = arguments.length;
var i__4737__auto___64623 = (0);
while(true){
if((i__4737__auto___64623 < len__4736__auto___64622)){
args__4742__auto__.push((arguments[i__4737__auto___64623]));

var G__64624 = (i__4737__auto___64623 + (1));
i__4737__auto___64623 = G__64624;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64005 = conformed_args__62685__auto__;
var map__64005__$1 = (((((!((map__64005 == null))))?(((((map__64005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64005):map__64005);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq64004){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64004));
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
var args__4742__auto__ = [];
var len__4736__auto___64625 = arguments.length;
var i__4737__auto___64626 = (0);
while(true){
if((i__4737__auto___64626 < len__4736__auto___64625)){
args__4742__auto__.push((arguments[i__4737__auto___64626]));

var G__64627 = (i__4737__auto___64626 + (1));
i__4737__auto___64626 = G__64627;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64008 = conformed_args__62685__auto__;
var map__64008__$1 = (((((!((map__64008 == null))))?(((((map__64008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64008):map__64008);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64008__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64008__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq64007){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64007));
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
var args__4742__auto__ = [];
var len__4736__auto___64628 = arguments.length;
var i__4737__auto___64629 = (0);
while(true){
if((i__4737__auto___64629 < len__4736__auto___64628)){
args__4742__auto__.push((arguments[i__4737__auto___64629]));

var G__64630 = (i__4737__auto___64629 + (1));
i__4737__auto___64629 = G__64630;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64011 = conformed_args__62685__auto__;
var map__64011__$1 = (((((!((map__64011 == null))))?(((((map__64011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64011):map__64011);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq64010){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64010));
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
var args__4742__auto__ = [];
var len__4736__auto___64631 = arguments.length;
var i__4737__auto___64632 = (0);
while(true){
if((i__4737__auto___64632 < len__4736__auto___64631)){
args__4742__auto__.push((arguments[i__4737__auto___64632]));

var G__64633 = (i__4737__auto___64632 + (1));
i__4737__auto___64632 = G__64633;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64014 = conformed_args__62685__auto__;
var map__64014__$1 = (((((!((map__64014 == null))))?(((((map__64014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64014):map__64014);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64014__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64014__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64014__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq64013){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64013));
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
var args__4742__auto__ = [];
var len__4736__auto___64634 = arguments.length;
var i__4737__auto___64635 = (0);
while(true){
if((i__4737__auto___64635 < len__4736__auto___64634)){
args__4742__auto__.push((arguments[i__4737__auto___64635]));

var G__64636 = (i__4737__auto___64635 + (1));
i__4737__auto___64635 = G__64636;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64017 = conformed_args__62685__auto__;
var map__64017__$1 = (((((!((map__64017 == null))))?(((((map__64017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64017):map__64017);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq64016){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64016));
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
var args__4742__auto__ = [];
var len__4736__auto___64637 = arguments.length;
var i__4737__auto___64638 = (0);
while(true){
if((i__4737__auto___64638 < len__4736__auto___64637)){
args__4742__auto__.push((arguments[i__4737__auto___64638]));

var G__64639 = (i__4737__auto___64638 + (1));
i__4737__auto___64638 = G__64639;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64020 = conformed_args__62685__auto__;
var map__64020__$1 = (((((!((map__64020 == null))))?(((((map__64020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64020):map__64020);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq64019){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64019));
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
var args__4742__auto__ = [];
var len__4736__auto___64640 = arguments.length;
var i__4737__auto___64641 = (0);
while(true){
if((i__4737__auto___64641 < len__4736__auto___64640)){
args__4742__auto__.push((arguments[i__4737__auto___64641]));

var G__64642 = (i__4737__auto___64641 + (1));
i__4737__auto___64641 = G__64642;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64023 = conformed_args__62685__auto__;
var map__64023__$1 = (((((!((map__64023 == null))))?(((((map__64023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64023):map__64023);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq64022){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64022));
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
var args__4742__auto__ = [];
var len__4736__auto___64643 = arguments.length;
var i__4737__auto___64644 = (0);
while(true){
if((i__4737__auto___64644 < len__4736__auto___64643)){
args__4742__auto__.push((arguments[i__4737__auto___64644]));

var G__64645 = (i__4737__auto___64644 + (1));
i__4737__auto___64644 = G__64645;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64026 = conformed_args__62685__auto__;
var map__64026__$1 = (((((!((map__64026 == null))))?(((((map__64026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64026):map__64026);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64026__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64026__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64026__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq64025){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64025));
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
var args__4742__auto__ = [];
var len__4736__auto___64646 = arguments.length;
var i__4737__auto___64647 = (0);
while(true){
if((i__4737__auto___64647 < len__4736__auto___64646)){
args__4742__auto__.push((arguments[i__4737__auto___64647]));

var G__64648 = (i__4737__auto___64647 + (1));
i__4737__auto___64647 = G__64648;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64029 = conformed_args__62685__auto__;
var map__64029__$1 = (((((!((map__64029 == null))))?(((((map__64029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64029):map__64029);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq64028){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64028));
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
var args__4742__auto__ = [];
var len__4736__auto___64649 = arguments.length;
var i__4737__auto___64650 = (0);
while(true){
if((i__4737__auto___64650 < len__4736__auto___64649)){
args__4742__auto__.push((arguments[i__4737__auto___64650]));

var G__64651 = (i__4737__auto___64650 + (1));
i__4737__auto___64650 = G__64651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64032 = conformed_args__62685__auto__;
var map__64032__$1 = (((((!((map__64032 == null))))?(((((map__64032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64032):map__64032);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq64031){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64031));
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
var args__4742__auto__ = [];
var len__4736__auto___64652 = arguments.length;
var i__4737__auto___64653 = (0);
while(true){
if((i__4737__auto___64653 < len__4736__auto___64652)){
args__4742__auto__.push((arguments[i__4737__auto___64653]));

var G__64654 = (i__4737__auto___64653 + (1));
i__4737__auto___64653 = G__64654;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64035 = conformed_args__62685__auto__;
var map__64035__$1 = (((((!((map__64035 == null))))?(((((map__64035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64035):map__64035);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq64034){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64034));
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
var args__4742__auto__ = [];
var len__4736__auto___64655 = arguments.length;
var i__4737__auto___64656 = (0);
while(true){
if((i__4737__auto___64656 < len__4736__auto___64655)){
args__4742__auto__.push((arguments[i__4737__auto___64656]));

var G__64657 = (i__4737__auto___64656 + (1));
i__4737__auto___64656 = G__64657;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64038 = conformed_args__62685__auto__;
var map__64038__$1 = (((((!((map__64038 == null))))?(((((map__64038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64038):map__64038);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64038__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq64037){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64037));
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
var args__4742__auto__ = [];
var len__4736__auto___64658 = arguments.length;
var i__4737__auto___64659 = (0);
while(true){
if((i__4737__auto___64659 < len__4736__auto___64658)){
args__4742__auto__.push((arguments[i__4737__auto___64659]));

var G__64660 = (i__4737__auto___64659 + (1));
i__4737__auto___64659 = G__64660;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64041 = conformed_args__62685__auto__;
var map__64041__$1 = (((((!((map__64041 == null))))?(((((map__64041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64041):map__64041);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq64040){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64040));
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
var args__4742__auto__ = [];
var len__4736__auto___64661 = arguments.length;
var i__4737__auto___64662 = (0);
while(true){
if((i__4737__auto___64662 < len__4736__auto___64661)){
args__4742__auto__.push((arguments[i__4737__auto___64662]));

var G__64663 = (i__4737__auto___64662 + (1));
i__4737__auto___64662 = G__64663;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64044 = conformed_args__62685__auto__;
var map__64044__$1 = (((((!((map__64044 == null))))?(((((map__64044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64044):map__64044);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq64043){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64043));
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
var args__4742__auto__ = [];
var len__4736__auto___64664 = arguments.length;
var i__4737__auto___64665 = (0);
while(true){
if((i__4737__auto___64665 < len__4736__auto___64664)){
args__4742__auto__.push((arguments[i__4737__auto___64665]));

var G__64666 = (i__4737__auto___64665 + (1));
i__4737__auto___64665 = G__64666;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64047 = conformed_args__62685__auto__;
var map__64047__$1 = (((((!((map__64047 == null))))?(((((map__64047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64047):map__64047);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq64046){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64046));
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
var args__4742__auto__ = [];
var len__4736__auto___64667 = arguments.length;
var i__4737__auto___64668 = (0);
while(true){
if((i__4737__auto___64668 < len__4736__auto___64667)){
args__4742__auto__.push((arguments[i__4737__auto___64668]));

var G__64669 = (i__4737__auto___64668 + (1));
i__4737__auto___64668 = G__64669;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64050 = conformed_args__62685__auto__;
var map__64050__$1 = (((((!((map__64050 == null))))?(((((map__64050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64050):map__64050);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq64049){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64049));
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
var args__4742__auto__ = [];
var len__4736__auto___64670 = arguments.length;
var i__4737__auto___64671 = (0);
while(true){
if((i__4737__auto___64671 < len__4736__auto___64670)){
args__4742__auto__.push((arguments[i__4737__auto___64671]));

var G__64672 = (i__4737__auto___64671 + (1));
i__4737__auto___64671 = G__64672;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64053 = conformed_args__62685__auto__;
var map__64053__$1 = (((((!((map__64053 == null))))?(((((map__64053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64053):map__64053);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq64052){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64052));
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
var args__4742__auto__ = [];
var len__4736__auto___64673 = arguments.length;
var i__4737__auto___64674 = (0);
while(true){
if((i__4737__auto___64674 < len__4736__auto___64673)){
args__4742__auto__.push((arguments[i__4737__auto___64674]));

var G__64675 = (i__4737__auto___64674 + (1));
i__4737__auto___64674 = G__64675;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64056 = conformed_args__62685__auto__;
var map__64056__$1 = (((((!((map__64056 == null))))?(((((map__64056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64056):map__64056);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64056__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64056__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64056__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq64055){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64055));
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
var args__4742__auto__ = [];
var len__4736__auto___64676 = arguments.length;
var i__4737__auto___64677 = (0);
while(true){
if((i__4737__auto___64677 < len__4736__auto___64676)){
args__4742__auto__.push((arguments[i__4737__auto___64677]));

var G__64678 = (i__4737__auto___64677 + (1));
i__4737__auto___64677 = G__64678;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64059 = conformed_args__62685__auto__;
var map__64059__$1 = (((((!((map__64059 == null))))?(((((map__64059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64059):map__64059);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq64058){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64058));
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
var args__4742__auto__ = [];
var len__4736__auto___64679 = arguments.length;
var i__4737__auto___64680 = (0);
while(true){
if((i__4737__auto___64680 < len__4736__auto___64679)){
args__4742__auto__.push((arguments[i__4737__auto___64680]));

var G__64681 = (i__4737__auto___64680 + (1));
i__4737__auto___64680 = G__64681;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64062 = conformed_args__62685__auto__;
var map__64062__$1 = (((((!((map__64062 == null))))?(((((map__64062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64062):map__64062);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq64061){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64061));
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
var args__4742__auto__ = [];
var len__4736__auto___64682 = arguments.length;
var i__4737__auto___64683 = (0);
while(true){
if((i__4737__auto___64683 < len__4736__auto___64682)){
args__4742__auto__.push((arguments[i__4737__auto___64683]));

var G__64684 = (i__4737__auto___64683 + (1));
i__4737__auto___64683 = G__64684;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64065 = conformed_args__62685__auto__;
var map__64065__$1 = (((((!((map__64065 == null))))?(((((map__64065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64065):map__64065);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq64064){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64064));
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
var args__4742__auto__ = [];
var len__4736__auto___64685 = arguments.length;
var i__4737__auto___64686 = (0);
while(true){
if((i__4737__auto___64686 < len__4736__auto___64685)){
args__4742__auto__.push((arguments[i__4737__auto___64686]));

var G__64687 = (i__4737__auto___64686 + (1));
i__4737__auto___64686 = G__64687;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64068 = conformed_args__62685__auto__;
var map__64068__$1 = (((((!((map__64068 == null))))?(((((map__64068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64068):map__64068);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq64067){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64067));
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
var args__4742__auto__ = [];
var len__4736__auto___64688 = arguments.length;
var i__4737__auto___64689 = (0);
while(true){
if((i__4737__auto___64689 < len__4736__auto___64688)){
args__4742__auto__.push((arguments[i__4737__auto___64689]));

var G__64690 = (i__4737__auto___64689 + (1));
i__4737__auto___64689 = G__64690;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64071 = conformed_args__62685__auto__;
var map__64071__$1 = (((((!((map__64071 == null))))?(((((map__64071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64071):map__64071);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq64070){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64070));
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
var args__4742__auto__ = [];
var len__4736__auto___64691 = arguments.length;
var i__4737__auto___64692 = (0);
while(true){
if((i__4737__auto___64692 < len__4736__auto___64691)){
args__4742__auto__.push((arguments[i__4737__auto___64692]));

var G__64693 = (i__4737__auto___64692 + (1));
i__4737__auto___64692 = G__64693;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64074 = conformed_args__62685__auto__;
var map__64074__$1 = (((((!((map__64074 == null))))?(((((map__64074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64074):map__64074);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq64073){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64073));
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
var args__4742__auto__ = [];
var len__4736__auto___64694 = arguments.length;
var i__4737__auto___64695 = (0);
while(true){
if((i__4737__auto___64695 < len__4736__auto___64694)){
args__4742__auto__.push((arguments[i__4737__auto___64695]));

var G__64696 = (i__4737__auto___64695 + (1));
i__4737__auto___64695 = G__64696;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64077 = conformed_args__62685__auto__;
var map__64077__$1 = (((((!((map__64077 == null))))?(((((map__64077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64077):map__64077);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq64076){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64076));
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
var args__4742__auto__ = [];
var len__4736__auto___64697 = arguments.length;
var i__4737__auto___64698 = (0);
while(true){
if((i__4737__auto___64698 < len__4736__auto___64697)){
args__4742__auto__.push((arguments[i__4737__auto___64698]));

var G__64699 = (i__4737__auto___64698 + (1));
i__4737__auto___64698 = G__64699;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64080 = conformed_args__62685__auto__;
var map__64080__$1 = (((((!((map__64080 == null))))?(((((map__64080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64080):map__64080);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64080__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64080__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64080__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq64079){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64079));
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
var args__4742__auto__ = [];
var len__4736__auto___64700 = arguments.length;
var i__4737__auto___64701 = (0);
while(true){
if((i__4737__auto___64701 < len__4736__auto___64700)){
args__4742__auto__.push((arguments[i__4737__auto___64701]));

var G__64702 = (i__4737__auto___64701 + (1));
i__4737__auto___64701 = G__64702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64083 = conformed_args__62685__auto__;
var map__64083__$1 = (((((!((map__64083 == null))))?(((((map__64083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64083):map__64083);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq64082){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64082));
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
var args__4742__auto__ = [];
var len__4736__auto___64703 = arguments.length;
var i__4737__auto___64704 = (0);
while(true){
if((i__4737__auto___64704 < len__4736__auto___64703)){
args__4742__auto__.push((arguments[i__4737__auto___64704]));

var G__64705 = (i__4737__auto___64704 + (1));
i__4737__auto___64704 = G__64705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64086 = conformed_args__62685__auto__;
var map__64086__$1 = (((((!((map__64086 == null))))?(((((map__64086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64086):map__64086);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64086__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64086__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64086__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq64085){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64085));
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
var args__4742__auto__ = [];
var len__4736__auto___64706 = arguments.length;
var i__4737__auto___64707 = (0);
while(true){
if((i__4737__auto___64707 < len__4736__auto___64706)){
args__4742__auto__.push((arguments[i__4737__auto___64707]));

var G__64708 = (i__4737__auto___64707 + (1));
i__4737__auto___64707 = G__64708;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64089 = conformed_args__62685__auto__;
var map__64089__$1 = (((((!((map__64089 == null))))?(((((map__64089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64089):map__64089);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq64088){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64088));
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
var args__4742__auto__ = [];
var len__4736__auto___64709 = arguments.length;
var i__4737__auto___64710 = (0);
while(true){
if((i__4737__auto___64710 < len__4736__auto___64709)){
args__4742__auto__.push((arguments[i__4737__auto___64710]));

var G__64711 = (i__4737__auto___64710 + (1));
i__4737__auto___64710 = G__64711;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64092 = conformed_args__62685__auto__;
var map__64092__$1 = (((((!((map__64092 == null))))?(((((map__64092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64092):map__64092);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq64091){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64091));
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
var args__4742__auto__ = [];
var len__4736__auto___64712 = arguments.length;
var i__4737__auto___64713 = (0);
while(true){
if((i__4737__auto___64713 < len__4736__auto___64712)){
args__4742__auto__.push((arguments[i__4737__auto___64713]));

var G__64714 = (i__4737__auto___64713 + (1));
i__4737__auto___64713 = G__64714;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64095 = conformed_args__62685__auto__;
var map__64095__$1 = (((((!((map__64095 == null))))?(((((map__64095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64095):map__64095);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq64094){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64094));
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
var args__4742__auto__ = [];
var len__4736__auto___64715 = arguments.length;
var i__4737__auto___64716 = (0);
while(true){
if((i__4737__auto___64716 < len__4736__auto___64715)){
args__4742__auto__.push((arguments[i__4737__auto___64716]));

var G__64717 = (i__4737__auto___64716 + (1));
i__4737__auto___64716 = G__64717;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64098 = conformed_args__62685__auto__;
var map__64098__$1 = (((((!((map__64098 == null))))?(((((map__64098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64098):map__64098);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq64097){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64097));
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
var args__4742__auto__ = [];
var len__4736__auto___64718 = arguments.length;
var i__4737__auto___64719 = (0);
while(true){
if((i__4737__auto___64719 < len__4736__auto___64718)){
args__4742__auto__.push((arguments[i__4737__auto___64719]));

var G__64720 = (i__4737__auto___64719 + (1));
i__4737__auto___64719 = G__64720;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64101 = conformed_args__62685__auto__;
var map__64101__$1 = (((((!((map__64101 == null))))?(((((map__64101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64101):map__64101);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq64100){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64100));
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
var args__4742__auto__ = [];
var len__4736__auto___64721 = arguments.length;
var i__4737__auto___64722 = (0);
while(true){
if((i__4737__auto___64722 < len__4736__auto___64721)){
args__4742__auto__.push((arguments[i__4737__auto___64722]));

var G__64723 = (i__4737__auto___64722 + (1));
i__4737__auto___64722 = G__64723;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64104 = conformed_args__62685__auto__;
var map__64104__$1 = (((((!((map__64104 == null))))?(((((map__64104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64104):map__64104);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq64103){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64103));
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
var args__4742__auto__ = [];
var len__4736__auto___64724 = arguments.length;
var i__4737__auto___64725 = (0);
while(true){
if((i__4737__auto___64725 < len__4736__auto___64724)){
args__4742__auto__.push((arguments[i__4737__auto___64725]));

var G__64726 = (i__4737__auto___64725 + (1));
i__4737__auto___64725 = G__64726;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64107 = conformed_args__62685__auto__;
var map__64107__$1 = (((((!((map__64107 == null))))?(((((map__64107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64107):map__64107);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64107__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64107__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64107__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq64106){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64106));
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
var args__4742__auto__ = [];
var len__4736__auto___64727 = arguments.length;
var i__4737__auto___64728 = (0);
while(true){
if((i__4737__auto___64728 < len__4736__auto___64727)){
args__4742__auto__.push((arguments[i__4737__auto___64728]));

var G__64729 = (i__4737__auto___64728 + (1));
i__4737__auto___64728 = G__64729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64110 = conformed_args__62685__auto__;
var map__64110__$1 = (((((!((map__64110 == null))))?(((((map__64110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64110):map__64110);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq64109){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64109));
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
var args__4742__auto__ = [];
var len__4736__auto___64730 = arguments.length;
var i__4737__auto___64731 = (0);
while(true){
if((i__4737__auto___64731 < len__4736__auto___64730)){
args__4742__auto__.push((arguments[i__4737__auto___64731]));

var G__64732 = (i__4737__auto___64731 + (1));
i__4737__auto___64731 = G__64732;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64113 = conformed_args__62685__auto__;
var map__64113__$1 = (((((!((map__64113 == null))))?(((((map__64113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64113):map__64113);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq64112){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64112));
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
var args__4742__auto__ = [];
var len__4736__auto___64733 = arguments.length;
var i__4737__auto___64734 = (0);
while(true){
if((i__4737__auto___64734 < len__4736__auto___64733)){
args__4742__auto__.push((arguments[i__4737__auto___64734]));

var G__64735 = (i__4737__auto___64734 + (1));
i__4737__auto___64734 = G__64735;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64116 = conformed_args__62685__auto__;
var map__64116__$1 = (((((!((map__64116 == null))))?(((((map__64116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64116):map__64116);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq64115){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64115));
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
var args__4742__auto__ = [];
var len__4736__auto___64736 = arguments.length;
var i__4737__auto___64737 = (0);
while(true){
if((i__4737__auto___64737 < len__4736__auto___64736)){
args__4742__auto__.push((arguments[i__4737__auto___64737]));

var G__64738 = (i__4737__auto___64737 + (1));
i__4737__auto___64737 = G__64738;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64119 = conformed_args__62685__auto__;
var map__64119__$1 = (((((!((map__64119 == null))))?(((((map__64119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64119):map__64119);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq64118){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64118));
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
var args__4742__auto__ = [];
var len__4736__auto___64739 = arguments.length;
var i__4737__auto___64740 = (0);
while(true){
if((i__4737__auto___64740 < len__4736__auto___64739)){
args__4742__auto__.push((arguments[i__4737__auto___64740]));

var G__64741 = (i__4737__auto___64740 + (1));
i__4737__auto___64740 = G__64741;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64122 = conformed_args__62685__auto__;
var map__64122__$1 = (((((!((map__64122 == null))))?(((((map__64122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64122):map__64122);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq64121){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64121));
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
var args__4742__auto__ = [];
var len__4736__auto___64742 = arguments.length;
var i__4737__auto___64743 = (0);
while(true){
if((i__4737__auto___64743 < len__4736__auto___64742)){
args__4742__auto__.push((arguments[i__4737__auto___64743]));

var G__64744 = (i__4737__auto___64743 + (1));
i__4737__auto___64743 = G__64744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64125 = conformed_args__62685__auto__;
var map__64125__$1 = (((((!((map__64125 == null))))?(((((map__64125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64125):map__64125);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq64124){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64124));
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
var args__4742__auto__ = [];
var len__4736__auto___64745 = arguments.length;
var i__4737__auto___64746 = (0);
while(true){
if((i__4737__auto___64746 < len__4736__auto___64745)){
args__4742__auto__.push((arguments[i__4737__auto___64746]));

var G__64747 = (i__4737__auto___64746 + (1));
i__4737__auto___64746 = G__64747;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64128 = conformed_args__62685__auto__;
var map__64128__$1 = (((((!((map__64128 == null))))?(((((map__64128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64128):map__64128);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq64127){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64127));
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
var args__4742__auto__ = [];
var len__4736__auto___64748 = arguments.length;
var i__4737__auto___64749 = (0);
while(true){
if((i__4737__auto___64749 < len__4736__auto___64748)){
args__4742__auto__.push((arguments[i__4737__auto___64749]));

var G__64750 = (i__4737__auto___64749 + (1));
i__4737__auto___64749 = G__64750;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64131 = conformed_args__62685__auto__;
var map__64131__$1 = (((((!((map__64131 == null))))?(((((map__64131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64131):map__64131);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq64130){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64130));
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
var args__4742__auto__ = [];
var len__4736__auto___64751 = arguments.length;
var i__4737__auto___64752 = (0);
while(true){
if((i__4737__auto___64752 < len__4736__auto___64751)){
args__4742__auto__.push((arguments[i__4737__auto___64752]));

var G__64753 = (i__4737__auto___64752 + (1));
i__4737__auto___64752 = G__64753;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64134 = conformed_args__62685__auto__;
var map__64134__$1 = (((((!((map__64134 == null))))?(((((map__64134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64134):map__64134);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64134__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64134__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64134__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq64133){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64133));
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
var args__4742__auto__ = [];
var len__4736__auto___64754 = arguments.length;
var i__4737__auto___64755 = (0);
while(true){
if((i__4737__auto___64755 < len__4736__auto___64754)){
args__4742__auto__.push((arguments[i__4737__auto___64755]));

var G__64756 = (i__4737__auto___64755 + (1));
i__4737__auto___64755 = G__64756;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64137 = conformed_args__62685__auto__;
var map__64137__$1 = (((((!((map__64137 == null))))?(((((map__64137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64137):map__64137);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq64136){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64136));
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
var args__4742__auto__ = [];
var len__4736__auto___64757 = arguments.length;
var i__4737__auto___64758 = (0);
while(true){
if((i__4737__auto___64758 < len__4736__auto___64757)){
args__4742__auto__.push((arguments[i__4737__auto___64758]));

var G__64759 = (i__4737__auto___64758 + (1));
i__4737__auto___64758 = G__64759;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64140 = conformed_args__62685__auto__;
var map__64140__$1 = (((((!((map__64140 == null))))?(((((map__64140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64140):map__64140);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq64139){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64139));
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
var args__4742__auto__ = [];
var len__4736__auto___64760 = arguments.length;
var i__4737__auto___64761 = (0);
while(true){
if((i__4737__auto___64761 < len__4736__auto___64760)){
args__4742__auto__.push((arguments[i__4737__auto___64761]));

var G__64762 = (i__4737__auto___64761 + (1));
i__4737__auto___64761 = G__64762;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64143 = conformed_args__62685__auto__;
var map__64143__$1 = (((((!((map__64143 == null))))?(((((map__64143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64143):map__64143);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq64142){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64142));
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
var args__4742__auto__ = [];
var len__4736__auto___64763 = arguments.length;
var i__4737__auto___64764 = (0);
while(true){
if((i__4737__auto___64764 < len__4736__auto___64763)){
args__4742__auto__.push((arguments[i__4737__auto___64764]));

var G__64765 = (i__4737__auto___64764 + (1));
i__4737__auto___64764 = G__64765;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64146 = conformed_args__62685__auto__;
var map__64146__$1 = (((((!((map__64146 == null))))?(((((map__64146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64146):map__64146);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq64145){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64145));
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
var args__4742__auto__ = [];
var len__4736__auto___64766 = arguments.length;
var i__4737__auto___64767 = (0);
while(true){
if((i__4737__auto___64767 < len__4736__auto___64766)){
args__4742__auto__.push((arguments[i__4737__auto___64767]));

var G__64768 = (i__4737__auto___64767 + (1));
i__4737__auto___64767 = G__64768;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64149 = conformed_args__62685__auto__;
var map__64149__$1 = (((((!((map__64149 == null))))?(((((map__64149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64149):map__64149);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq64148){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64148));
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
var args__4742__auto__ = [];
var len__4736__auto___64769 = arguments.length;
var i__4737__auto___64770 = (0);
while(true){
if((i__4737__auto___64770 < len__4736__auto___64769)){
args__4742__auto__.push((arguments[i__4737__auto___64770]));

var G__64771 = (i__4737__auto___64770 + (1));
i__4737__auto___64770 = G__64771;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64152 = conformed_args__62685__auto__;
var map__64152__$1 = (((((!((map__64152 == null))))?(((((map__64152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64152):map__64152);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64152__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64152__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64152__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq64151){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64151));
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
var args__4742__auto__ = [];
var len__4736__auto___64772 = arguments.length;
var i__4737__auto___64773 = (0);
while(true){
if((i__4737__auto___64773 < len__4736__auto___64772)){
args__4742__auto__.push((arguments[i__4737__auto___64773]));

var G__64774 = (i__4737__auto___64773 + (1));
i__4737__auto___64773 = G__64774;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64155 = conformed_args__62685__auto__;
var map__64155__$1 = (((((!((map__64155 == null))))?(((((map__64155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64155):map__64155);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq64154){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64154));
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
var args__4742__auto__ = [];
var len__4736__auto___64775 = arguments.length;
var i__4737__auto___64776 = (0);
while(true){
if((i__4737__auto___64776 < len__4736__auto___64775)){
args__4742__auto__.push((arguments[i__4737__auto___64776]));

var G__64777 = (i__4737__auto___64776 + (1));
i__4737__auto___64776 = G__64777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64158 = conformed_args__62685__auto__;
var map__64158__$1 = (((((!((map__64158 == null))))?(((((map__64158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64158):map__64158);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64158__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64158__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64158__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq64157){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64157));
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
var args__4742__auto__ = [];
var len__4736__auto___64778 = arguments.length;
var i__4737__auto___64779 = (0);
while(true){
if((i__4737__auto___64779 < len__4736__auto___64778)){
args__4742__auto__.push((arguments[i__4737__auto___64779]));

var G__64780 = (i__4737__auto___64779 + (1));
i__4737__auto___64779 = G__64780;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64161 = conformed_args__62685__auto__;
var map__64161__$1 = (((((!((map__64161 == null))))?(((((map__64161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64161):map__64161);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq64160){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64160));
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
var args__4742__auto__ = [];
var len__4736__auto___64781 = arguments.length;
var i__4737__auto___64782 = (0);
while(true){
if((i__4737__auto___64782 < len__4736__auto___64781)){
args__4742__auto__.push((arguments[i__4737__auto___64782]));

var G__64783 = (i__4737__auto___64782 + (1));
i__4737__auto___64782 = G__64783;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64164 = conformed_args__62685__auto__;
var map__64164__$1 = (((((!((map__64164 == null))))?(((((map__64164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64164):map__64164);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq64163){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64163));
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
var args__4742__auto__ = [];
var len__4736__auto___64784 = arguments.length;
var i__4737__auto___64785 = (0);
while(true){
if((i__4737__auto___64785 < len__4736__auto___64784)){
args__4742__auto__.push((arguments[i__4737__auto___64785]));

var G__64786 = (i__4737__auto___64785 + (1));
i__4737__auto___64785 = G__64786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64167 = conformed_args__62685__auto__;
var map__64167__$1 = (((((!((map__64167 == null))))?(((((map__64167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64167):map__64167);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq64166){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64166));
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
var args__4742__auto__ = [];
var len__4736__auto___64787 = arguments.length;
var i__4737__auto___64788 = (0);
while(true){
if((i__4737__auto___64788 < len__4736__auto___64787)){
args__4742__auto__.push((arguments[i__4737__auto___64788]));

var G__64789 = (i__4737__auto___64788 + (1));
i__4737__auto___64788 = G__64789;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64170 = conformed_args__62685__auto__;
var map__64170__$1 = (((((!((map__64170 == null))))?(((((map__64170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64170):map__64170);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64170__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64170__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq64169){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64169));
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
var args__4742__auto__ = [];
var len__4736__auto___64790 = arguments.length;
var i__4737__auto___64791 = (0);
while(true){
if((i__4737__auto___64791 < len__4736__auto___64790)){
args__4742__auto__.push((arguments[i__4737__auto___64791]));

var G__64792 = (i__4737__auto___64791 + (1));
i__4737__auto___64791 = G__64792;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64173 = conformed_args__62685__auto__;
var map__64173__$1 = (((((!((map__64173 == null))))?(((((map__64173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64173):map__64173);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq64172){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64172));
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
var args__4742__auto__ = [];
var len__4736__auto___64793 = arguments.length;
var i__4737__auto___64794 = (0);
while(true){
if((i__4737__auto___64794 < len__4736__auto___64793)){
args__4742__auto__.push((arguments[i__4737__auto___64794]));

var G__64795 = (i__4737__auto___64794 + (1));
i__4737__auto___64794 = G__64795;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64176 = conformed_args__62685__auto__;
var map__64176__$1 = (((((!((map__64176 == null))))?(((((map__64176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64176):map__64176);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq64175){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64175));
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
var args__4742__auto__ = [];
var len__4736__auto___64796 = arguments.length;
var i__4737__auto___64797 = (0);
while(true){
if((i__4737__auto___64797 < len__4736__auto___64796)){
args__4742__auto__.push((arguments[i__4737__auto___64797]));

var G__64798 = (i__4737__auto___64797 + (1));
i__4737__auto___64797 = G__64798;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64179 = conformed_args__62685__auto__;
var map__64179__$1 = (((((!((map__64179 == null))))?(((((map__64179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64179):map__64179);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq64178){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64178));
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
var args__4742__auto__ = [];
var len__4736__auto___64799 = arguments.length;
var i__4737__auto___64800 = (0);
while(true){
if((i__4737__auto___64800 < len__4736__auto___64799)){
args__4742__auto__.push((arguments[i__4737__auto___64800]));

var G__64801 = (i__4737__auto___64800 + (1));
i__4737__auto___64800 = G__64801;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64182 = conformed_args__62685__auto__;
var map__64182__$1 = (((((!((map__64182 == null))))?(((((map__64182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64182):map__64182);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq64181){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64181));
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
var args__4742__auto__ = [];
var len__4736__auto___64802 = arguments.length;
var i__4737__auto___64803 = (0);
while(true){
if((i__4737__auto___64803 < len__4736__auto___64802)){
args__4742__auto__.push((arguments[i__4737__auto___64803]));

var G__64804 = (i__4737__auto___64803 + (1));
i__4737__auto___64803 = G__64804;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64185 = conformed_args__62685__auto__;
var map__64185__$1 = (((((!((map__64185 == null))))?(((((map__64185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64185):map__64185);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq64184){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64184));
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
var args__4742__auto__ = [];
var len__4736__auto___64805 = arguments.length;
var i__4737__auto___64806 = (0);
while(true){
if((i__4737__auto___64806 < len__4736__auto___64805)){
args__4742__auto__.push((arguments[i__4737__auto___64806]));

var G__64807 = (i__4737__auto___64806 + (1));
i__4737__auto___64806 = G__64807;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64188 = conformed_args__62685__auto__;
var map__64188__$1 = (((((!((map__64188 == null))))?(((((map__64188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64188):map__64188);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq64187){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64187));
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
var args__4742__auto__ = [];
var len__4736__auto___64808 = arguments.length;
var i__4737__auto___64809 = (0);
while(true){
if((i__4737__auto___64809 < len__4736__auto___64808)){
args__4742__auto__.push((arguments[i__4737__auto___64809]));

var G__64810 = (i__4737__auto___64809 + (1));
i__4737__auto___64809 = G__64810;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64191 = conformed_args__62685__auto__;
var map__64191__$1 = (((((!((map__64191 == null))))?(((((map__64191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64191):map__64191);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq64190){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64190));
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
var args__4742__auto__ = [];
var len__4736__auto___64811 = arguments.length;
var i__4737__auto___64812 = (0);
while(true){
if((i__4737__auto___64812 < len__4736__auto___64811)){
args__4742__auto__.push((arguments[i__4737__auto___64812]));

var G__64813 = (i__4737__auto___64812 + (1));
i__4737__auto___64812 = G__64813;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64194 = conformed_args__62685__auto__;
var map__64194__$1 = (((((!((map__64194 == null))))?(((((map__64194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64194):map__64194);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq64193){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64193));
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
var args__4742__auto__ = [];
var len__4736__auto___64814 = arguments.length;
var i__4737__auto___64815 = (0);
while(true){
if((i__4737__auto___64815 < len__4736__auto___64814)){
args__4742__auto__.push((arguments[i__4737__auto___64815]));

var G__64816 = (i__4737__auto___64815 + (1));
i__4737__auto___64815 = G__64816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64197 = conformed_args__62685__auto__;
var map__64197__$1 = (((((!((map__64197 == null))))?(((((map__64197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64197):map__64197);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq64196){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64196));
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
var args__4742__auto__ = [];
var len__4736__auto___64817 = arguments.length;
var i__4737__auto___64818 = (0);
while(true){
if((i__4737__auto___64818 < len__4736__auto___64817)){
args__4742__auto__.push((arguments[i__4737__auto___64818]));

var G__64819 = (i__4737__auto___64818 + (1));
i__4737__auto___64818 = G__64819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64200 = conformed_args__62685__auto__;
var map__64200__$1 = (((((!((map__64200 == null))))?(((((map__64200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64200):map__64200);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq64199){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64199));
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
var args__4742__auto__ = [];
var len__4736__auto___64820 = arguments.length;
var i__4737__auto___64821 = (0);
while(true){
if((i__4737__auto___64821 < len__4736__auto___64820)){
args__4742__auto__.push((arguments[i__4737__auto___64821]));

var G__64822 = (i__4737__auto___64821 + (1));
i__4737__auto___64821 = G__64822;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64203 = conformed_args__62685__auto__;
var map__64203__$1 = (((((!((map__64203 == null))))?(((((map__64203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64203):map__64203);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq64202){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64202));
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
var args__4742__auto__ = [];
var len__4736__auto___64823 = arguments.length;
var i__4737__auto___64824 = (0);
while(true){
if((i__4737__auto___64824 < len__4736__auto___64823)){
args__4742__auto__.push((arguments[i__4737__auto___64824]));

var G__64825 = (i__4737__auto___64824 + (1));
i__4737__auto___64824 = G__64825;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64206 = conformed_args__62685__auto__;
var map__64206__$1 = (((((!((map__64206 == null))))?(((((map__64206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64206):map__64206);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq64205){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64205));
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
var args__4742__auto__ = [];
var len__4736__auto___64826 = arguments.length;
var i__4737__auto___64827 = (0);
while(true){
if((i__4737__auto___64827 < len__4736__auto___64826)){
args__4742__auto__.push((arguments[i__4737__auto___64827]));

var G__64828 = (i__4737__auto___64827 + (1));
i__4737__auto___64827 = G__64828;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64209 = conformed_args__62685__auto__;
var map__64209__$1 = (((((!((map__64209 == null))))?(((((map__64209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64209):map__64209);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq64208){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64208));
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
var args__4742__auto__ = [];
var len__4736__auto___64829 = arguments.length;
var i__4737__auto___64830 = (0);
while(true){
if((i__4737__auto___64830 < len__4736__auto___64829)){
args__4742__auto__.push((arguments[i__4737__auto___64830]));

var G__64831 = (i__4737__auto___64830 + (1));
i__4737__auto___64830 = G__64831;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64212 = conformed_args__62685__auto__;
var map__64212__$1 = (((((!((map__64212 == null))))?(((((map__64212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64212):map__64212);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq64211){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64211));
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
var args__4742__auto__ = [];
var len__4736__auto___64832 = arguments.length;
var i__4737__auto___64833 = (0);
while(true){
if((i__4737__auto___64833 < len__4736__auto___64832)){
args__4742__auto__.push((arguments[i__4737__auto___64833]));

var G__64834 = (i__4737__auto___64833 + (1));
i__4737__auto___64833 = G__64834;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64215 = conformed_args__62685__auto__;
var map__64215__$1 = (((((!((map__64215 == null))))?(((((map__64215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64215):map__64215);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq64214){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64214));
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
var args__4742__auto__ = [];
var len__4736__auto___64835 = arguments.length;
var i__4737__auto___64836 = (0);
while(true){
if((i__4737__auto___64836 < len__4736__auto___64835)){
args__4742__auto__.push((arguments[i__4737__auto___64836]));

var G__64837 = (i__4737__auto___64836 + (1));
i__4737__auto___64836 = G__64837;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64218 = conformed_args__62685__auto__;
var map__64218__$1 = (((((!((map__64218 == null))))?(((((map__64218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64218):map__64218);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq64217){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64217));
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
var args__4742__auto__ = [];
var len__4736__auto___64838 = arguments.length;
var i__4737__auto___64839 = (0);
while(true){
if((i__4737__auto___64839 < len__4736__auto___64838)){
args__4742__auto__.push((arguments[i__4737__auto___64839]));

var G__64840 = (i__4737__auto___64839 + (1));
i__4737__auto___64839 = G__64840;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64221 = conformed_args__62685__auto__;
var map__64221__$1 = (((((!((map__64221 == null))))?(((((map__64221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64221):map__64221);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq64220){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64220));
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
var args__4742__auto__ = [];
var len__4736__auto___64841 = arguments.length;
var i__4737__auto___64842 = (0);
while(true){
if((i__4737__auto___64842 < len__4736__auto___64841)){
args__4742__auto__.push((arguments[i__4737__auto___64842]));

var G__64843 = (i__4737__auto___64842 + (1));
i__4737__auto___64842 = G__64843;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64224 = conformed_args__62685__auto__;
var map__64224__$1 = (((((!((map__64224 == null))))?(((((map__64224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64224):map__64224);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq64223){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64223));
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
var args__4742__auto__ = [];
var len__4736__auto___64844 = arguments.length;
var i__4737__auto___64845 = (0);
while(true){
if((i__4737__auto___64845 < len__4736__auto___64844)){
args__4742__auto__.push((arguments[i__4737__auto___64845]));

var G__64846 = (i__4737__auto___64845 + (1));
i__4737__auto___64845 = G__64846;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64227 = conformed_args__62685__auto__;
var map__64227__$1 = (((((!((map__64227 == null))))?(((((map__64227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64227):map__64227);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq64226){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64226));
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
var args__4742__auto__ = [];
var len__4736__auto___64847 = arguments.length;
var i__4737__auto___64848 = (0);
while(true){
if((i__4737__auto___64848 < len__4736__auto___64847)){
args__4742__auto__.push((arguments[i__4737__auto___64848]));

var G__64849 = (i__4737__auto___64848 + (1));
i__4737__auto___64848 = G__64849;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64230 = conformed_args__62685__auto__;
var map__64230__$1 = (((((!((map__64230 == null))))?(((((map__64230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64230):map__64230);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64230__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64230__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64230__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq64229){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64229));
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
var args__4742__auto__ = [];
var len__4736__auto___64850 = arguments.length;
var i__4737__auto___64851 = (0);
while(true){
if((i__4737__auto___64851 < len__4736__auto___64850)){
args__4742__auto__.push((arguments[i__4737__auto___64851]));

var G__64852 = (i__4737__auto___64851 + (1));
i__4737__auto___64851 = G__64852;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64233 = conformed_args__62685__auto__;
var map__64233__$1 = (((((!((map__64233 == null))))?(((((map__64233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64233):map__64233);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq64232){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64232));
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
var args__4742__auto__ = [];
var len__4736__auto___64853 = arguments.length;
var i__4737__auto___64854 = (0);
while(true){
if((i__4737__auto___64854 < len__4736__auto___64853)){
args__4742__auto__.push((arguments[i__4737__auto___64854]));

var G__64855 = (i__4737__auto___64854 + (1));
i__4737__auto___64854 = G__64855;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64236 = conformed_args__62685__auto__;
var map__64236__$1 = (((((!((map__64236 == null))))?(((((map__64236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64236):map__64236);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64236__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64236__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq64235){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64235));
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
var args__4742__auto__ = [];
var len__4736__auto___64856 = arguments.length;
var i__4737__auto___64857 = (0);
while(true){
if((i__4737__auto___64857 < len__4736__auto___64856)){
args__4742__auto__.push((arguments[i__4737__auto___64857]));

var G__64858 = (i__4737__auto___64857 + (1));
i__4737__auto___64857 = G__64858;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64239 = conformed_args__62685__auto__;
var map__64239__$1 = (((((!((map__64239 == null))))?(((((map__64239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64239):map__64239);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq64238){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64238));
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
var args__4742__auto__ = [];
var len__4736__auto___64859 = arguments.length;
var i__4737__auto___64860 = (0);
while(true){
if((i__4737__auto___64860 < len__4736__auto___64859)){
args__4742__auto__.push((arguments[i__4737__auto___64860]));

var G__64861 = (i__4737__auto___64860 + (1));
i__4737__auto___64860 = G__64861;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64242 = conformed_args__62685__auto__;
var map__64242__$1 = (((((!((map__64242 == null))))?(((((map__64242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64242):map__64242);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq64241){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64241));
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
var args__4742__auto__ = [];
var len__4736__auto___64862 = arguments.length;
var i__4737__auto___64863 = (0);
while(true){
if((i__4737__auto___64863 < len__4736__auto___64862)){
args__4742__auto__.push((arguments[i__4737__auto___64863]));

var G__64864 = (i__4737__auto___64863 + (1));
i__4737__auto___64863 = G__64864;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64245 = conformed_args__62685__auto__;
var map__64245__$1 = (((((!((map__64245 == null))))?(((((map__64245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64245):map__64245);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64245__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64245__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq64244){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64244));
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
var args__4742__auto__ = [];
var len__4736__auto___64865 = arguments.length;
var i__4737__auto___64866 = (0);
while(true){
if((i__4737__auto___64866 < len__4736__auto___64865)){
args__4742__auto__.push((arguments[i__4737__auto___64866]));

var G__64867 = (i__4737__auto___64866 + (1));
i__4737__auto___64866 = G__64867;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64248 = conformed_args__62685__auto__;
var map__64248__$1 = (((((!((map__64248 == null))))?(((((map__64248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64248):map__64248);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq64247){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64247));
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
var args__4742__auto__ = [];
var len__4736__auto___64868 = arguments.length;
var i__4737__auto___64869 = (0);
while(true){
if((i__4737__auto___64869 < len__4736__auto___64868)){
args__4742__auto__.push((arguments[i__4737__auto___64869]));

var G__64870 = (i__4737__auto___64869 + (1));
i__4737__auto___64869 = G__64870;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64251 = conformed_args__62685__auto__;
var map__64251__$1 = (((((!((map__64251 == null))))?(((((map__64251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64251):map__64251);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64251__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64251__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64251__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq64250){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64250));
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
var args__4742__auto__ = [];
var len__4736__auto___64871 = arguments.length;
var i__4737__auto___64872 = (0);
while(true){
if((i__4737__auto___64872 < len__4736__auto___64871)){
args__4742__auto__.push((arguments[i__4737__auto___64872]));

var G__64873 = (i__4737__auto___64872 + (1));
i__4737__auto___64872 = G__64873;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64254 = conformed_args__62685__auto__;
var map__64254__$1 = (((((!((map__64254 == null))))?(((((map__64254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64254):map__64254);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq64253){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64253));
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
var args__4742__auto__ = [];
var len__4736__auto___64874 = arguments.length;
var i__4737__auto___64875 = (0);
while(true){
if((i__4737__auto___64875 < len__4736__auto___64874)){
args__4742__auto__.push((arguments[i__4737__auto___64875]));

var G__64876 = (i__4737__auto___64875 + (1));
i__4737__auto___64875 = G__64876;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64257 = conformed_args__62685__auto__;
var map__64257__$1 = (((((!((map__64257 == null))))?(((((map__64257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64257):map__64257);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq64256){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64256));
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
var args__4742__auto__ = [];
var len__4736__auto___64877 = arguments.length;
var i__4737__auto___64878 = (0);
while(true){
if((i__4737__auto___64878 < len__4736__auto___64877)){
args__4742__auto__.push((arguments[i__4737__auto___64878]));

var G__64879 = (i__4737__auto___64878 + (1));
i__4737__auto___64878 = G__64879;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64260 = conformed_args__62685__auto__;
var map__64260__$1 = (((((!((map__64260 == null))))?(((((map__64260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64260):map__64260);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq64259){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64259));
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
var args__4742__auto__ = [];
var len__4736__auto___64880 = arguments.length;
var i__4737__auto___64881 = (0);
while(true){
if((i__4737__auto___64881 < len__4736__auto___64880)){
args__4742__auto__.push((arguments[i__4737__auto___64881]));

var G__64882 = (i__4737__auto___64881 + (1));
i__4737__auto___64881 = G__64882;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64263 = conformed_args__62685__auto__;
var map__64263__$1 = (((((!((map__64263 == null))))?(((((map__64263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64263):map__64263);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq64262){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64262));
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
var args__4742__auto__ = [];
var len__4736__auto___64883 = arguments.length;
var i__4737__auto___64884 = (0);
while(true){
if((i__4737__auto___64884 < len__4736__auto___64883)){
args__4742__auto__.push((arguments[i__4737__auto___64884]));

var G__64885 = (i__4737__auto___64884 + (1));
i__4737__auto___64884 = G__64885;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64266 = conformed_args__62685__auto__;
var map__64266__$1 = (((((!((map__64266 == null))))?(((((map__64266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64266):map__64266);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq64265){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64265));
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
var args__4742__auto__ = [];
var len__4736__auto___64886 = arguments.length;
var i__4737__auto___64887 = (0);
while(true){
if((i__4737__auto___64887 < len__4736__auto___64886)){
args__4742__auto__.push((arguments[i__4737__auto___64887]));

var G__64888 = (i__4737__auto___64887 + (1));
i__4737__auto___64887 = G__64888;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64269 = conformed_args__62685__auto__;
var map__64269__$1 = (((((!((map__64269 == null))))?(((((map__64269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64269):map__64269);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq64268){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64268));
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
var args__4742__auto__ = [];
var len__4736__auto___64889 = arguments.length;
var i__4737__auto___64890 = (0);
while(true){
if((i__4737__auto___64890 < len__4736__auto___64889)){
args__4742__auto__.push((arguments[i__4737__auto___64890]));

var G__64891 = (i__4737__auto___64890 + (1));
i__4737__auto___64890 = G__64891;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64272 = conformed_args__62685__auto__;
var map__64272__$1 = (((((!((map__64272 == null))))?(((((map__64272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64272):map__64272);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64272__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64272__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64272__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq64271){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64271));
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
var args__4742__auto__ = [];
var len__4736__auto___64892 = arguments.length;
var i__4737__auto___64893 = (0);
while(true){
if((i__4737__auto___64893 < len__4736__auto___64892)){
args__4742__auto__.push((arguments[i__4737__auto___64893]));

var G__64894 = (i__4737__auto___64893 + (1));
i__4737__auto___64893 = G__64894;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64275 = conformed_args__62685__auto__;
var map__64275__$1 = (((((!((map__64275 == null))))?(((((map__64275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64275):map__64275);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq64274){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64274));
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
var args__4742__auto__ = [];
var len__4736__auto___64895 = arguments.length;
var i__4737__auto___64896 = (0);
while(true){
if((i__4737__auto___64896 < len__4736__auto___64895)){
args__4742__auto__.push((arguments[i__4737__auto___64896]));

var G__64897 = (i__4737__auto___64896 + (1));
i__4737__auto___64896 = G__64897;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64278 = conformed_args__62685__auto__;
var map__64278__$1 = (((((!((map__64278 == null))))?(((((map__64278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64278):map__64278);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq64277){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64277));
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
var args__4742__auto__ = [];
var len__4736__auto___64898 = arguments.length;
var i__4737__auto___64899 = (0);
while(true){
if((i__4737__auto___64899 < len__4736__auto___64898)){
args__4742__auto__.push((arguments[i__4737__auto___64899]));

var G__64900 = (i__4737__auto___64899 + (1));
i__4737__auto___64899 = G__64900;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64281 = conformed_args__62685__auto__;
var map__64281__$1 = (((((!((map__64281 == null))))?(((((map__64281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64281):map__64281);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq64280){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64280));
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
var args__4742__auto__ = [];
var len__4736__auto___64901 = arguments.length;
var i__4737__auto___64902 = (0);
while(true){
if((i__4737__auto___64902 < len__4736__auto___64901)){
args__4742__auto__.push((arguments[i__4737__auto___64902]));

var G__64903 = (i__4737__auto___64902 + (1));
i__4737__auto___64902 = G__64903;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64284 = conformed_args__62685__auto__;
var map__64284__$1 = (((((!((map__64284 == null))))?(((((map__64284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64284):map__64284);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64284__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64284__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq64283){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64283));
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
var args__4742__auto__ = [];
var len__4736__auto___64904 = arguments.length;
var i__4737__auto___64905 = (0);
while(true){
if((i__4737__auto___64905 < len__4736__auto___64904)){
args__4742__auto__.push((arguments[i__4737__auto___64905]));

var G__64906 = (i__4737__auto___64905 + (1));
i__4737__auto___64905 = G__64906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64287 = conformed_args__62685__auto__;
var map__64287__$1 = (((((!((map__64287 == null))))?(((((map__64287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64287):map__64287);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq64286){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64286));
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
var args__4742__auto__ = [];
var len__4736__auto___64907 = arguments.length;
var i__4737__auto___64908 = (0);
while(true){
if((i__4737__auto___64908 < len__4736__auto___64907)){
args__4742__auto__.push((arguments[i__4737__auto___64908]));

var G__64909 = (i__4737__auto___64908 + (1));
i__4737__auto___64908 = G__64909;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64290 = conformed_args__62685__auto__;
var map__64290__$1 = (((((!((map__64290 == null))))?(((((map__64290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64290):map__64290);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq64289){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64289));
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
var args__4742__auto__ = [];
var len__4736__auto___64910 = arguments.length;
var i__4737__auto___64911 = (0);
while(true){
if((i__4737__auto___64911 < len__4736__auto___64910)){
args__4742__auto__.push((arguments[i__4737__auto___64911]));

var G__64912 = (i__4737__auto___64911 + (1));
i__4737__auto___64911 = G__64912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64293 = conformed_args__62685__auto__;
var map__64293__$1 = (((((!((map__64293 == null))))?(((((map__64293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64293):map__64293);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq64292){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64292));
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
var args__4742__auto__ = [];
var len__4736__auto___64913 = arguments.length;
var i__4737__auto___64914 = (0);
while(true){
if((i__4737__auto___64914 < len__4736__auto___64913)){
args__4742__auto__.push((arguments[i__4737__auto___64914]));

var G__64915 = (i__4737__auto___64914 + (1));
i__4737__auto___64914 = G__64915;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64296 = conformed_args__62685__auto__;
var map__64296__$1 = (((((!((map__64296 == null))))?(((((map__64296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64296):map__64296);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64296__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64296__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64296__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq64295){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64295));
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
var args__4742__auto__ = [];
var len__4736__auto___64916 = arguments.length;
var i__4737__auto___64917 = (0);
while(true){
if((i__4737__auto___64917 < len__4736__auto___64916)){
args__4742__auto__.push((arguments[i__4737__auto___64917]));

var G__64918 = (i__4737__auto___64917 + (1));
i__4737__auto___64917 = G__64918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64299 = conformed_args__62685__auto__;
var map__64299__$1 = (((((!((map__64299 == null))))?(((((map__64299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64299):map__64299);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq64298){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64298));
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
var args__4742__auto__ = [];
var len__4736__auto___64919 = arguments.length;
var i__4737__auto___64920 = (0);
while(true){
if((i__4737__auto___64920 < len__4736__auto___64919)){
args__4742__auto__.push((arguments[i__4737__auto___64920]));

var G__64921 = (i__4737__auto___64920 + (1));
i__4737__auto___64920 = G__64921;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64302 = conformed_args__62685__auto__;
var map__64302__$1 = (((((!((map__64302 == null))))?(((((map__64302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64302):map__64302);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq64301){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64301));
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
var args__4742__auto__ = [];
var len__4736__auto___64922 = arguments.length;
var i__4737__auto___64923 = (0);
while(true){
if((i__4737__auto___64923 < len__4736__auto___64922)){
args__4742__auto__.push((arguments[i__4737__auto___64923]));

var G__64924 = (i__4737__auto___64923 + (1));
i__4737__auto___64923 = G__64924;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64305 = conformed_args__62685__auto__;
var map__64305__$1 = (((((!((map__64305 == null))))?(((((map__64305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64305):map__64305);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq64304){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64304));
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
var args__4742__auto__ = [];
var len__4736__auto___64925 = arguments.length;
var i__4737__auto___64926 = (0);
while(true){
if((i__4737__auto___64926 < len__4736__auto___64925)){
args__4742__auto__.push((arguments[i__4737__auto___64926]));

var G__64927 = (i__4737__auto___64926 + (1));
i__4737__auto___64926 = G__64927;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64308 = conformed_args__62685__auto__;
var map__64308__$1 = (((((!((map__64308 == null))))?(((((map__64308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64308):map__64308);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq64307){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64307));
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
var args__4742__auto__ = [];
var len__4736__auto___64928 = arguments.length;
var i__4737__auto___64929 = (0);
while(true){
if((i__4737__auto___64929 < len__4736__auto___64928)){
args__4742__auto__.push((arguments[i__4737__auto___64929]));

var G__64930 = (i__4737__auto___64929 + (1));
i__4737__auto___64929 = G__64930;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64311 = conformed_args__62685__auto__;
var map__64311__$1 = (((((!((map__64311 == null))))?(((((map__64311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64311):map__64311);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64311__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64311__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64311__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq64310){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64310));
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
var args__4742__auto__ = [];
var len__4736__auto___64931 = arguments.length;
var i__4737__auto___64932 = (0);
while(true){
if((i__4737__auto___64932 < len__4736__auto___64931)){
args__4742__auto__.push((arguments[i__4737__auto___64932]));

var G__64933 = (i__4737__auto___64932 + (1));
i__4737__auto___64932 = G__64933;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64314 = conformed_args__62685__auto__;
var map__64314__$1 = (((((!((map__64314 == null))))?(((((map__64314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64314):map__64314);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq64313){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64313));
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
var args__4742__auto__ = [];
var len__4736__auto___64934 = arguments.length;
var i__4737__auto___64935 = (0);
while(true){
if((i__4737__auto___64935 < len__4736__auto___64934)){
args__4742__auto__.push((arguments[i__4737__auto___64935]));

var G__64936 = (i__4737__auto___64935 + (1));
i__4737__auto___64935 = G__64936;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64317 = conformed_args__62685__auto__;
var map__64317__$1 = (((((!((map__64317 == null))))?(((((map__64317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64317):map__64317);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq64316){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64316));
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
var args__4742__auto__ = [];
var len__4736__auto___64937 = arguments.length;
var i__4737__auto___64938 = (0);
while(true){
if((i__4737__auto___64938 < len__4736__auto___64937)){
args__4742__auto__.push((arguments[i__4737__auto___64938]));

var G__64939 = (i__4737__auto___64938 + (1));
i__4737__auto___64938 = G__64939;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64320 = conformed_args__62685__auto__;
var map__64320__$1 = (((((!((map__64320 == null))))?(((((map__64320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64320):map__64320);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64320__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64320__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64320__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq64319){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64319));
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
var args__4742__auto__ = [];
var len__4736__auto___64940 = arguments.length;
var i__4737__auto___64941 = (0);
while(true){
if((i__4737__auto___64941 < len__4736__auto___64940)){
args__4742__auto__.push((arguments[i__4737__auto___64941]));

var G__64942 = (i__4737__auto___64941 + (1));
i__4737__auto___64941 = G__64942;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64323 = conformed_args__62685__auto__;
var map__64323__$1 = (((((!((map__64323 == null))))?(((((map__64323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64323):map__64323);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq64322){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64322));
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
var args__4742__auto__ = [];
var len__4736__auto___64943 = arguments.length;
var i__4737__auto___64944 = (0);
while(true){
if((i__4737__auto___64944 < len__4736__auto___64943)){
args__4742__auto__.push((arguments[i__4737__auto___64944]));

var G__64945 = (i__4737__auto___64944 + (1));
i__4737__auto___64944 = G__64945;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64326 = conformed_args__62685__auto__;
var map__64326__$1 = (((((!((map__64326 == null))))?(((((map__64326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64326):map__64326);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq64325){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64325));
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
var args__4742__auto__ = [];
var len__4736__auto___64946 = arguments.length;
var i__4737__auto___64947 = (0);
while(true){
if((i__4737__auto___64947 < len__4736__auto___64946)){
args__4742__auto__.push((arguments[i__4737__auto___64947]));

var G__64948 = (i__4737__auto___64947 + (1));
i__4737__auto___64947 = G__64948;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64329 = conformed_args__62685__auto__;
var map__64329__$1 = (((((!((map__64329 == null))))?(((((map__64329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64329):map__64329);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq64328){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64328));
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
var args__4742__auto__ = [];
var len__4736__auto___64949 = arguments.length;
var i__4737__auto___64950 = (0);
while(true){
if((i__4737__auto___64950 < len__4736__auto___64949)){
args__4742__auto__.push((arguments[i__4737__auto___64950]));

var G__64951 = (i__4737__auto___64950 + (1));
i__4737__auto___64950 = G__64951;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64332 = conformed_args__62685__auto__;
var map__64332__$1 = (((((!((map__64332 == null))))?(((((map__64332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64332):map__64332);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq64331){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64331));
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
var args__4742__auto__ = [];
var len__4736__auto___64952 = arguments.length;
var i__4737__auto___64953 = (0);
while(true){
if((i__4737__auto___64953 < len__4736__auto___64952)){
args__4742__auto__.push((arguments[i__4737__auto___64953]));

var G__64954 = (i__4737__auto___64953 + (1));
i__4737__auto___64953 = G__64954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64335 = conformed_args__62685__auto__;
var map__64335__$1 = (((((!((map__64335 == null))))?(((((map__64335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64335):map__64335);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq64334){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64334));
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
var args__4742__auto__ = [];
var len__4736__auto___64955 = arguments.length;
var i__4737__auto___64956 = (0);
while(true){
if((i__4737__auto___64956 < len__4736__auto___64955)){
args__4742__auto__.push((arguments[i__4737__auto___64956]));

var G__64957 = (i__4737__auto___64956 + (1));
i__4737__auto___64956 = G__64957;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64338 = conformed_args__62685__auto__;
var map__64338__$1 = (((((!((map__64338 == null))))?(((((map__64338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64338):map__64338);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64338__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64338__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq64337){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64337));
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
var args__4742__auto__ = [];
var len__4736__auto___64958 = arguments.length;
var i__4737__auto___64959 = (0);
while(true){
if((i__4737__auto___64959 < len__4736__auto___64958)){
args__4742__auto__.push((arguments[i__4737__auto___64959]));

var G__64960 = (i__4737__auto___64959 + (1));
i__4737__auto___64959 = G__64960;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64341 = conformed_args__62685__auto__;
var map__64341__$1 = (((((!((map__64341 == null))))?(((((map__64341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64341):map__64341);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64341__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64341__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64341__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq64340){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64340));
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
var args__4742__auto__ = [];
var len__4736__auto___64961 = arguments.length;
var i__4737__auto___64962 = (0);
while(true){
if((i__4737__auto___64962 < len__4736__auto___64961)){
args__4742__auto__.push((arguments[i__4737__auto___64962]));

var G__64963 = (i__4737__auto___64962 + (1));
i__4737__auto___64962 = G__64963;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64344 = conformed_args__62685__auto__;
var map__64344__$1 = (((((!((map__64344 == null))))?(((((map__64344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64344):map__64344);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq64343){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64343));
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
var args__4742__auto__ = [];
var len__4736__auto___64964 = arguments.length;
var i__4737__auto___64965 = (0);
while(true){
if((i__4737__auto___64965 < len__4736__auto___64964)){
args__4742__auto__.push((arguments[i__4737__auto___64965]));

var G__64966 = (i__4737__auto___64965 + (1));
i__4737__auto___64965 = G__64966;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64347 = conformed_args__62685__auto__;
var map__64347__$1 = (((((!((map__64347 == null))))?(((((map__64347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64347):map__64347);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq64346){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64346));
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
var args__4742__auto__ = [];
var len__4736__auto___64967 = arguments.length;
var i__4737__auto___64968 = (0);
while(true){
if((i__4737__auto___64968 < len__4736__auto___64967)){
args__4742__auto__.push((arguments[i__4737__auto___64968]));

var G__64969 = (i__4737__auto___64968 + (1));
i__4737__auto___64968 = G__64969;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64350 = conformed_args__62685__auto__;
var map__64350__$1 = (((((!((map__64350 == null))))?(((((map__64350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64350):map__64350);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq64349){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64349));
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
var args__4742__auto__ = [];
var len__4736__auto___64970 = arguments.length;
var i__4737__auto___64971 = (0);
while(true){
if((i__4737__auto___64971 < len__4736__auto___64970)){
args__4742__auto__.push((arguments[i__4737__auto___64971]));

var G__64972 = (i__4737__auto___64971 + (1));
i__4737__auto___64971 = G__64972;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64353 = conformed_args__62685__auto__;
var map__64353__$1 = (((((!((map__64353 == null))))?(((((map__64353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64353):map__64353);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64353__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq64352){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64352));
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
var args__4742__auto__ = [];
var len__4736__auto___64973 = arguments.length;
var i__4737__auto___64974 = (0);
while(true){
if((i__4737__auto___64974 < len__4736__auto___64973)){
args__4742__auto__.push((arguments[i__4737__auto___64974]));

var G__64975 = (i__4737__auto___64974 + (1));
i__4737__auto___64974 = G__64975;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64356 = conformed_args__62685__auto__;
var map__64356__$1 = (((((!((map__64356 == null))))?(((((map__64356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64356):map__64356);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq64355){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64355));
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
var args__4742__auto__ = [];
var len__4736__auto___64976 = arguments.length;
var i__4737__auto___64977 = (0);
while(true){
if((i__4737__auto___64977 < len__4736__auto___64976)){
args__4742__auto__.push((arguments[i__4737__auto___64977]));

var G__64978 = (i__4737__auto___64977 + (1));
i__4737__auto___64977 = G__64978;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64359 = conformed_args__62685__auto__;
var map__64359__$1 = (((((!((map__64359 == null))))?(((((map__64359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64359):map__64359);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq64358){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64358));
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
var args__4742__auto__ = [];
var len__4736__auto___64979 = arguments.length;
var i__4737__auto___64980 = (0);
while(true){
if((i__4737__auto___64980 < len__4736__auto___64979)){
args__4742__auto__.push((arguments[i__4737__auto___64980]));

var G__64981 = (i__4737__auto___64980 + (1));
i__4737__auto___64980 = G__64981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64362 = conformed_args__62685__auto__;
var map__64362__$1 = (((((!((map__64362 == null))))?(((((map__64362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64362):map__64362);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq64361){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64361));
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
var args__4742__auto__ = [];
var len__4736__auto___64982 = arguments.length;
var i__4737__auto___64983 = (0);
while(true){
if((i__4737__auto___64983 < len__4736__auto___64982)){
args__4742__auto__.push((arguments[i__4737__auto___64983]));

var G__64984 = (i__4737__auto___64983 + (1));
i__4737__auto___64983 = G__64984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64365 = conformed_args__62685__auto__;
var map__64365__$1 = (((((!((map__64365 == null))))?(((((map__64365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64365):map__64365);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq64364){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64364));
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
var args__4742__auto__ = [];
var len__4736__auto___64985 = arguments.length;
var i__4737__auto___64986 = (0);
while(true){
if((i__4737__auto___64986 < len__4736__auto___64985)){
args__4742__auto__.push((arguments[i__4737__auto___64986]));

var G__64987 = (i__4737__auto___64986 + (1));
i__4737__auto___64986 = G__64987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64368 = conformed_args__62685__auto__;
var map__64368__$1 = (((((!((map__64368 == null))))?(((((map__64368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64368):map__64368);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq64367){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64367));
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
var args__4742__auto__ = [];
var len__4736__auto___64988 = arguments.length;
var i__4737__auto___64989 = (0);
while(true){
if((i__4737__auto___64989 < len__4736__auto___64988)){
args__4742__auto__.push((arguments[i__4737__auto___64989]));

var G__64990 = (i__4737__auto___64989 + (1));
i__4737__auto___64989 = G__64990;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64371 = conformed_args__62685__auto__;
var map__64371__$1 = (((((!((map__64371 == null))))?(((((map__64371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64371):map__64371);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq64370){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64370));
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
var args__4742__auto__ = [];
var len__4736__auto___64991 = arguments.length;
var i__4737__auto___64992 = (0);
while(true){
if((i__4737__auto___64992 < len__4736__auto___64991)){
args__4742__auto__.push((arguments[i__4737__auto___64992]));

var G__64993 = (i__4737__auto___64992 + (1));
i__4737__auto___64992 = G__64993;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64374 = conformed_args__62685__auto__;
var map__64374__$1 = (((((!((map__64374 == null))))?(((((map__64374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64374):map__64374);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64374__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64374__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64374__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq64373){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64373));
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
var args__4742__auto__ = [];
var len__4736__auto___64994 = arguments.length;
var i__4737__auto___64995 = (0);
while(true){
if((i__4737__auto___64995 < len__4736__auto___64994)){
args__4742__auto__.push((arguments[i__4737__auto___64995]));

var G__64996 = (i__4737__auto___64995 + (1));
i__4737__auto___64995 = G__64996;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64377 = conformed_args__62685__auto__;
var map__64377__$1 = (((((!((map__64377 == null))))?(((((map__64377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64377):map__64377);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64377__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64377__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq64376){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64376));
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
var args__4742__auto__ = [];
var len__4736__auto___64997 = arguments.length;
var i__4737__auto___64998 = (0);
while(true){
if((i__4737__auto___64998 < len__4736__auto___64997)){
args__4742__auto__.push((arguments[i__4737__auto___64998]));

var G__64999 = (i__4737__auto___64998 + (1));
i__4737__auto___64998 = G__64999;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64380 = conformed_args__62685__auto__;
var map__64380__$1 = (((((!((map__64380 == null))))?(((((map__64380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64380):map__64380);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq64379){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64379));
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
var args__4742__auto__ = [];
var len__4736__auto___65000 = arguments.length;
var i__4737__auto___65001 = (0);
while(true){
if((i__4737__auto___65001 < len__4736__auto___65000)){
args__4742__auto__.push((arguments[i__4737__auto___65001]));

var G__65002 = (i__4737__auto___65001 + (1));
i__4737__auto___65001 = G__65002;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64383 = conformed_args__62685__auto__;
var map__64383__$1 = (((((!((map__64383 == null))))?(((((map__64383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64383):map__64383);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq64382){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64382));
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
var args__4742__auto__ = [];
var len__4736__auto___65003 = arguments.length;
var i__4737__auto___65004 = (0);
while(true){
if((i__4737__auto___65004 < len__4736__auto___65003)){
args__4742__auto__.push((arguments[i__4737__auto___65004]));

var G__65005 = (i__4737__auto___65004 + (1));
i__4737__auto___65004 = G__65005;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64386 = conformed_args__62685__auto__;
var map__64386__$1 = (((((!((map__64386 == null))))?(((((map__64386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64386):map__64386);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq64385){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64385));
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
var args__4742__auto__ = [];
var len__4736__auto___65006 = arguments.length;
var i__4737__auto___65007 = (0);
while(true){
if((i__4737__auto___65007 < len__4736__auto___65006)){
args__4742__auto__.push((arguments[i__4737__auto___65007]));

var G__65008 = (i__4737__auto___65007 + (1));
i__4737__auto___65007 = G__65008;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64389 = conformed_args__62685__auto__;
var map__64389__$1 = (((((!((map__64389 == null))))?(((((map__64389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64389):map__64389);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq64388){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64388));
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
var args__4742__auto__ = [];
var len__4736__auto___65009 = arguments.length;
var i__4737__auto___65010 = (0);
while(true){
if((i__4737__auto___65010 < len__4736__auto___65009)){
args__4742__auto__.push((arguments[i__4737__auto___65010]));

var G__65011 = (i__4737__auto___65010 + (1));
i__4737__auto___65010 = G__65011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64392 = conformed_args__62685__auto__;
var map__64392__$1 = (((((!((map__64392 == null))))?(((((map__64392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64392):map__64392);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq64391){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64391));
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
var args__4742__auto__ = [];
var len__4736__auto___65012 = arguments.length;
var i__4737__auto___65013 = (0);
while(true){
if((i__4737__auto___65013 < len__4736__auto___65012)){
args__4742__auto__.push((arguments[i__4737__auto___65013]));

var G__65014 = (i__4737__auto___65013 + (1));
i__4737__auto___65013 = G__65014;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64395 = conformed_args__62685__auto__;
var map__64395__$1 = (((((!((map__64395 == null))))?(((((map__64395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64395):map__64395);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq64394){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64394));
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
var args__4742__auto__ = [];
var len__4736__auto___65015 = arguments.length;
var i__4737__auto___65016 = (0);
while(true){
if((i__4737__auto___65016 < len__4736__auto___65015)){
args__4742__auto__.push((arguments[i__4737__auto___65016]));

var G__65017 = (i__4737__auto___65016 + (1));
i__4737__auto___65016 = G__65017;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64398 = conformed_args__62685__auto__;
var map__64398__$1 = (((((!((map__64398 == null))))?(((((map__64398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64398):map__64398);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq64397){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64397));
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
var args__4742__auto__ = [];
var len__4736__auto___65018 = arguments.length;
var i__4737__auto___65019 = (0);
while(true){
if((i__4737__auto___65019 < len__4736__auto___65018)){
args__4742__auto__.push((arguments[i__4737__auto___65019]));

var G__65020 = (i__4737__auto___65019 + (1));
i__4737__auto___65019 = G__65020;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64401 = conformed_args__62685__auto__;
var map__64401__$1 = (((((!((map__64401 == null))))?(((((map__64401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64401):map__64401);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq64400){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64400));
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
var args__4742__auto__ = [];
var len__4736__auto___65021 = arguments.length;
var i__4737__auto___65022 = (0);
while(true){
if((i__4737__auto___65022 < len__4736__auto___65021)){
args__4742__auto__.push((arguments[i__4737__auto___65022]));

var G__65023 = (i__4737__auto___65022 + (1));
i__4737__auto___65022 = G__65023;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64404 = conformed_args__62685__auto__;
var map__64404__$1 = (((((!((map__64404 == null))))?(((((map__64404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64404):map__64404);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq64403){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64403));
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
var args__4742__auto__ = [];
var len__4736__auto___65024 = arguments.length;
var i__4737__auto___65025 = (0);
while(true){
if((i__4737__auto___65025 < len__4736__auto___65024)){
args__4742__auto__.push((arguments[i__4737__auto___65025]));

var G__65026 = (i__4737__auto___65025 + (1));
i__4737__auto___65025 = G__65026;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64407 = conformed_args__62685__auto__;
var map__64407__$1 = (((((!((map__64407 == null))))?(((((map__64407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64407):map__64407);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq64406){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64406));
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
var args__4742__auto__ = [];
var len__4736__auto___65027 = arguments.length;
var i__4737__auto___65028 = (0);
while(true){
if((i__4737__auto___65028 < len__4736__auto___65027)){
args__4742__auto__.push((arguments[i__4737__auto___65028]));

var G__65029 = (i__4737__auto___65028 + (1));
i__4737__auto___65028 = G__65029;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64410 = conformed_args__62685__auto__;
var map__64410__$1 = (((((!((map__64410 == null))))?(((((map__64410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64410):map__64410);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq64409){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64409));
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
var args__4742__auto__ = [];
var len__4736__auto___65030 = arguments.length;
var i__4737__auto___65031 = (0);
while(true){
if((i__4737__auto___65031 < len__4736__auto___65030)){
args__4742__auto__.push((arguments[i__4737__auto___65031]));

var G__65032 = (i__4737__auto___65031 + (1));
i__4737__auto___65031 = G__65032;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64413 = conformed_args__62685__auto__;
var map__64413__$1 = (((((!((map__64413 == null))))?(((((map__64413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64413):map__64413);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq64412){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64412));
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
var args__4742__auto__ = [];
var len__4736__auto___65033 = arguments.length;
var i__4737__auto___65034 = (0);
while(true){
if((i__4737__auto___65034 < len__4736__auto___65033)){
args__4742__auto__.push((arguments[i__4737__auto___65034]));

var G__65035 = (i__4737__auto___65034 + (1));
i__4737__auto___65034 = G__65035;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64416 = conformed_args__62685__auto__;
var map__64416__$1 = (((((!((map__64416 == null))))?(((((map__64416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64416):map__64416);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq64415){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64415));
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
var args__4742__auto__ = [];
var len__4736__auto___65036 = arguments.length;
var i__4737__auto___65037 = (0);
while(true){
if((i__4737__auto___65037 < len__4736__auto___65036)){
args__4742__auto__.push((arguments[i__4737__auto___65037]));

var G__65038 = (i__4737__auto___65037 + (1));
i__4737__auto___65037 = G__65038;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64419 = conformed_args__62685__auto__;
var map__64419__$1 = (((((!((map__64419 == null))))?(((((map__64419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64419):map__64419);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64419__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64419__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64419__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq64418){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64418));
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
var args__4742__auto__ = [];
var len__4736__auto___65039 = arguments.length;
var i__4737__auto___65040 = (0);
while(true){
if((i__4737__auto___65040 < len__4736__auto___65039)){
args__4742__auto__.push((arguments[i__4737__auto___65040]));

var G__65041 = (i__4737__auto___65040 + (1));
i__4737__auto___65040 = G__65041;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64422 = conformed_args__62685__auto__;
var map__64422__$1 = (((((!((map__64422 == null))))?(((((map__64422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64422):map__64422);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq64421){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64421));
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
var args__4742__auto__ = [];
var len__4736__auto___65042 = arguments.length;
var i__4737__auto___65043 = (0);
while(true){
if((i__4737__auto___65043 < len__4736__auto___65042)){
args__4742__auto__.push((arguments[i__4737__auto___65043]));

var G__65044 = (i__4737__auto___65043 + (1));
i__4737__auto___65043 = G__65044;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64425 = conformed_args__62685__auto__;
var map__64425__$1 = (((((!((map__64425 == null))))?(((((map__64425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64425):map__64425);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq64424){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64424));
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
var args__4742__auto__ = [];
var len__4736__auto___65045 = arguments.length;
var i__4737__auto___65046 = (0);
while(true){
if((i__4737__auto___65046 < len__4736__auto___65045)){
args__4742__auto__.push((arguments[i__4737__auto___65046]));

var G__65047 = (i__4737__auto___65046 + (1));
i__4737__auto___65046 = G__65047;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64428 = conformed_args__62685__auto__;
var map__64428__$1 = (((((!((map__64428 == null))))?(((((map__64428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64428):map__64428);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq64427){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64427));
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
var args__4742__auto__ = [];
var len__4736__auto___65048 = arguments.length;
var i__4737__auto___65049 = (0);
while(true){
if((i__4737__auto___65049 < len__4736__auto___65048)){
args__4742__auto__.push((arguments[i__4737__auto___65049]));

var G__65050 = (i__4737__auto___65049 + (1));
i__4737__auto___65049 = G__65050;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64431 = conformed_args__62685__auto__;
var map__64431__$1 = (((((!((map__64431 == null))))?(((((map__64431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64431):map__64431);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq64430){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64430));
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
var args__4742__auto__ = [];
var len__4736__auto___65051 = arguments.length;
var i__4737__auto___65052 = (0);
while(true){
if((i__4737__auto___65052 < len__4736__auto___65051)){
args__4742__auto__.push((arguments[i__4737__auto___65052]));

var G__65053 = (i__4737__auto___65052 + (1));
i__4737__auto___65052 = G__65053;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64434 = conformed_args__62685__auto__;
var map__64434__$1 = (((((!((map__64434 == null))))?(((((map__64434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64434):map__64434);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq64433){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64433));
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
var args__4742__auto__ = [];
var len__4736__auto___65054 = arguments.length;
var i__4737__auto___65055 = (0);
while(true){
if((i__4737__auto___65055 < len__4736__auto___65054)){
args__4742__auto__.push((arguments[i__4737__auto___65055]));

var G__65056 = (i__4737__auto___65055 + (1));
i__4737__auto___65055 = G__65056;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64437 = conformed_args__62685__auto__;
var map__64437__$1 = (((((!((map__64437 == null))))?(((((map__64437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64437):map__64437);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq64436){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64436));
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
var args__4742__auto__ = [];
var len__4736__auto___65057 = arguments.length;
var i__4737__auto___65058 = (0);
while(true){
if((i__4737__auto___65058 < len__4736__auto___65057)){
args__4742__auto__.push((arguments[i__4737__auto___65058]));

var G__65059 = (i__4737__auto___65058 + (1));
i__4737__auto___65058 = G__65059;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64440 = conformed_args__62685__auto__;
var map__64440__$1 = (((((!((map__64440 == null))))?(((((map__64440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64440):map__64440);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq64439){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64439));
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
var args__4742__auto__ = [];
var len__4736__auto___65060 = arguments.length;
var i__4737__auto___65061 = (0);
while(true){
if((i__4737__auto___65061 < len__4736__auto___65060)){
args__4742__auto__.push((arguments[i__4737__auto___65061]));

var G__65062 = (i__4737__auto___65061 + (1));
i__4737__auto___65061 = G__65062;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64443 = conformed_args__62685__auto__;
var map__64443__$1 = (((((!((map__64443 == null))))?(((((map__64443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64443):map__64443);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq64442){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64442));
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
var args__4742__auto__ = [];
var len__4736__auto___65063 = arguments.length;
var i__4737__auto___65064 = (0);
while(true){
if((i__4737__auto___65064 < len__4736__auto___65063)){
args__4742__auto__.push((arguments[i__4737__auto___65064]));

var G__65065 = (i__4737__auto___65064 + (1));
i__4737__auto___65064 = G__65065;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64446 = conformed_args__62685__auto__;
var map__64446__$1 = (((((!((map__64446 == null))))?(((((map__64446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64446):map__64446);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq64445){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64445));
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
var args__4742__auto__ = [];
var len__4736__auto___65066 = arguments.length;
var i__4737__auto___65067 = (0);
while(true){
if((i__4737__auto___65067 < len__4736__auto___65066)){
args__4742__auto__.push((arguments[i__4737__auto___65067]));

var G__65068 = (i__4737__auto___65067 + (1));
i__4737__auto___65067 = G__65068;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64449 = conformed_args__62685__auto__;
var map__64449__$1 = (((((!((map__64449 == null))))?(((((map__64449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64449):map__64449);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq64448){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64448));
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
var args__4742__auto__ = [];
var len__4736__auto___65069 = arguments.length;
var i__4737__auto___65070 = (0);
while(true){
if((i__4737__auto___65070 < len__4736__auto___65069)){
args__4742__auto__.push((arguments[i__4737__auto___65070]));

var G__65071 = (i__4737__auto___65070 + (1));
i__4737__auto___65070 = G__65071;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64452 = conformed_args__62685__auto__;
var map__64452__$1 = (((((!((map__64452 == null))))?(((((map__64452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64452):map__64452);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq64451){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64451));
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
var args__4742__auto__ = [];
var len__4736__auto___65072 = arguments.length;
var i__4737__auto___65073 = (0);
while(true){
if((i__4737__auto___65073 < len__4736__auto___65072)){
args__4742__auto__.push((arguments[i__4737__auto___65073]));

var G__65074 = (i__4737__auto___65073 + (1));
i__4737__auto___65073 = G__65074;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64455 = conformed_args__62685__auto__;
var map__64455__$1 = (((((!((map__64455 == null))))?(((((map__64455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64455):map__64455);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64455__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64455__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64455__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq64454){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64454));
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
var args__4742__auto__ = [];
var len__4736__auto___65075 = arguments.length;
var i__4737__auto___65076 = (0);
while(true){
if((i__4737__auto___65076 < len__4736__auto___65075)){
args__4742__auto__.push((arguments[i__4737__auto___65076]));

var G__65077 = (i__4737__auto___65076 + (1));
i__4737__auto___65076 = G__65077;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64458 = conformed_args__62685__auto__;
var map__64458__$1 = (((((!((map__64458 == null))))?(((((map__64458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64458):map__64458);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq64457){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64457));
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
var args__4742__auto__ = [];
var len__4736__auto___65078 = arguments.length;
var i__4737__auto___65079 = (0);
while(true){
if((i__4737__auto___65079 < len__4736__auto___65078)){
args__4742__auto__.push((arguments[i__4737__auto___65079]));

var G__65080 = (i__4737__auto___65079 + (1));
i__4737__auto___65079 = G__65080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64461 = conformed_args__62685__auto__;
var map__64461__$1 = (((((!((map__64461 == null))))?(((((map__64461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64461):map__64461);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64461__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64461__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64461__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq64460){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64460));
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
var args__4742__auto__ = [];
var len__4736__auto___65081 = arguments.length;
var i__4737__auto___65082 = (0);
while(true){
if((i__4737__auto___65082 < len__4736__auto___65081)){
args__4742__auto__.push((arguments[i__4737__auto___65082]));

var G__65083 = (i__4737__auto___65082 + (1));
i__4737__auto___65082 = G__65083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64464 = conformed_args__62685__auto__;
var map__64464__$1 = (((((!((map__64464 == null))))?(((((map__64464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64464):map__64464);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq64463){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64463));
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
var args__4742__auto__ = [];
var len__4736__auto___65084 = arguments.length;
var i__4737__auto___65085 = (0);
while(true){
if((i__4737__auto___65085 < len__4736__auto___65084)){
args__4742__auto__.push((arguments[i__4737__auto___65085]));

var G__65086 = (i__4737__auto___65085 + (1));
i__4737__auto___65085 = G__65086;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64467 = conformed_args__62685__auto__;
var map__64467__$1 = (((((!((map__64467 == null))))?(((((map__64467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64467):map__64467);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq64466){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64466));
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
var args__4742__auto__ = [];
var len__4736__auto___65087 = arguments.length;
var i__4737__auto___65088 = (0);
while(true){
if((i__4737__auto___65088 < len__4736__auto___65087)){
args__4742__auto__.push((arguments[i__4737__auto___65088]));

var G__65089 = (i__4737__auto___65088 + (1));
i__4737__auto___65088 = G__65089;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64470 = conformed_args__62685__auto__;
var map__64470__$1 = (((((!((map__64470 == null))))?(((((map__64470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64470):map__64470);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq64469){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64469));
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
var args__4742__auto__ = [];
var len__4736__auto___65090 = arguments.length;
var i__4737__auto___65091 = (0);
while(true){
if((i__4737__auto___65091 < len__4736__auto___65090)){
args__4742__auto__.push((arguments[i__4737__auto___65091]));

var G__65092 = (i__4737__auto___65091 + (1));
i__4737__auto___65091 = G__65092;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64473 = conformed_args__62685__auto__;
var map__64473__$1 = (((((!((map__64473 == null))))?(((((map__64473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64473):map__64473);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq64472){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64472));
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
var args__4742__auto__ = [];
var len__4736__auto___65093 = arguments.length;
var i__4737__auto___65094 = (0);
while(true){
if((i__4737__auto___65094 < len__4736__auto___65093)){
args__4742__auto__.push((arguments[i__4737__auto___65094]));

var G__65095 = (i__4737__auto___65094 + (1));
i__4737__auto___65094 = G__65095;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64476 = conformed_args__62685__auto__;
var map__64476__$1 = (((((!((map__64476 == null))))?(((((map__64476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64476):map__64476);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq64475){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64475));
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
var args__4742__auto__ = [];
var len__4736__auto___65096 = arguments.length;
var i__4737__auto___65097 = (0);
while(true){
if((i__4737__auto___65097 < len__4736__auto___65096)){
args__4742__auto__.push((arguments[i__4737__auto___65097]));

var G__65098 = (i__4737__auto___65097 + (1));
i__4737__auto___65097 = G__65098;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64479 = conformed_args__62685__auto__;
var map__64479__$1 = (((((!((map__64479 == null))))?(((((map__64479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64479):map__64479);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq64478){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64478));
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
var args__4742__auto__ = [];
var len__4736__auto___65099 = arguments.length;
var i__4737__auto___65100 = (0);
while(true){
if((i__4737__auto___65100 < len__4736__auto___65099)){
args__4742__auto__.push((arguments[i__4737__auto___65100]));

var G__65101 = (i__4737__auto___65100 + (1));
i__4737__auto___65100 = G__65101;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64482 = conformed_args__62685__auto__;
var map__64482__$1 = (((((!((map__64482 == null))))?(((((map__64482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64482):map__64482);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq64481){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64481));
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
var args__4742__auto__ = [];
var len__4736__auto___65102 = arguments.length;
var i__4737__auto___65103 = (0);
while(true){
if((i__4737__auto___65103 < len__4736__auto___65102)){
args__4742__auto__.push((arguments[i__4737__auto___65103]));

var G__65104 = (i__4737__auto___65103 + (1));
i__4737__auto___65103 = G__65104;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64485 = conformed_args__62685__auto__;
var map__64485__$1 = (((((!((map__64485 == null))))?(((((map__64485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64485):map__64485);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq64484){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64484));
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
var args__4742__auto__ = [];
var len__4736__auto___65105 = arguments.length;
var i__4737__auto___65106 = (0);
while(true){
if((i__4737__auto___65106 < len__4736__auto___65105)){
args__4742__auto__.push((arguments[i__4737__auto___65106]));

var G__65107 = (i__4737__auto___65106 + (1));
i__4737__auto___65106 = G__65107;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64488 = conformed_args__62685__auto__;
var map__64488__$1 = (((((!((map__64488 == null))))?(((((map__64488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64488):map__64488);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq64487){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64487));
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
var args__4742__auto__ = [];
var len__4736__auto___65108 = arguments.length;
var i__4737__auto___65109 = (0);
while(true){
if((i__4737__auto___65109 < len__4736__auto___65108)){
args__4742__auto__.push((arguments[i__4737__auto___65109]));

var G__65110 = (i__4737__auto___65109 + (1));
i__4737__auto___65109 = G__65110;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64491 = conformed_args__62685__auto__;
var map__64491__$1 = (((((!((map__64491 == null))))?(((((map__64491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64491):map__64491);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64491__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64491__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64491__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq64490){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64490));
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
var args__4742__auto__ = [];
var len__4736__auto___65111 = arguments.length;
var i__4737__auto___65112 = (0);
while(true){
if((i__4737__auto___65112 < len__4736__auto___65111)){
args__4742__auto__.push((arguments[i__4737__auto___65112]));

var G__65113 = (i__4737__auto___65112 + (1));
i__4737__auto___65112 = G__65113;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64494 = conformed_args__62685__auto__;
var map__64494__$1 = (((((!((map__64494 == null))))?(((((map__64494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64494):map__64494);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq64493){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64493));
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
var args__4742__auto__ = [];
var len__4736__auto___65114 = arguments.length;
var i__4737__auto___65115 = (0);
while(true){
if((i__4737__auto___65115 < len__4736__auto___65114)){
args__4742__auto__.push((arguments[i__4737__auto___65115]));

var G__65116 = (i__4737__auto___65115 + (1));
i__4737__auto___65115 = G__65116;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64497 = conformed_args__62685__auto__;
var map__64497__$1 = (((((!((map__64497 == null))))?(((((map__64497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64497):map__64497);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq64496){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64496));
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
var args__4742__auto__ = [];
var len__4736__auto___65117 = arguments.length;
var i__4737__auto___65118 = (0);
while(true){
if((i__4737__auto___65118 < len__4736__auto___65117)){
args__4742__auto__.push((arguments[i__4737__auto___65118]));

var G__65119 = (i__4737__auto___65118 + (1));
i__4737__auto___65118 = G__65119;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64500 = conformed_args__62685__auto__;
var map__64500__$1 = (((((!((map__64500 == null))))?(((((map__64500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64500):map__64500);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq64499){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64499));
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
var args__4742__auto__ = [];
var len__4736__auto___65120 = arguments.length;
var i__4737__auto___65121 = (0);
while(true){
if((i__4737__auto___65121 < len__4736__auto___65120)){
args__4742__auto__.push((arguments[i__4737__auto___65121]));

var G__65122 = (i__4737__auto___65121 + (1));
i__4737__auto___65121 = G__65122;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64503 = conformed_args__62685__auto__;
var map__64503__$1 = (((((!((map__64503 == null))))?(((((map__64503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64503):map__64503);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq64502){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64502));
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
var args__4742__auto__ = [];
var len__4736__auto___65123 = arguments.length;
var i__4737__auto___65124 = (0);
while(true){
if((i__4737__auto___65124 < len__4736__auto___65123)){
args__4742__auto__.push((arguments[i__4737__auto___65124]));

var G__65125 = (i__4737__auto___65124 + (1));
i__4737__auto___65124 = G__65125;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64506 = conformed_args__62685__auto__;
var map__64506__$1 = (((((!((map__64506 == null))))?(((((map__64506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64506):map__64506);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq64505){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64505));
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
var args__4742__auto__ = [];
var len__4736__auto___65126 = arguments.length;
var i__4737__auto___65127 = (0);
while(true){
if((i__4737__auto___65127 < len__4736__auto___65126)){
args__4742__auto__.push((arguments[i__4737__auto___65127]));

var G__65128 = (i__4737__auto___65127 + (1));
i__4737__auto___65127 = G__65128;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64509 = conformed_args__62685__auto__;
var map__64509__$1 = (((((!((map__64509 == null))))?(((((map__64509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64509):map__64509);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq64508){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64508));
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
var args__4742__auto__ = [];
var len__4736__auto___65129 = arguments.length;
var i__4737__auto___65130 = (0);
while(true){
if((i__4737__auto___65130 < len__4736__auto___65129)){
args__4742__auto__.push((arguments[i__4737__auto___65130]));

var G__65131 = (i__4737__auto___65130 + (1));
i__4737__auto___65130 = G__65131;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64512 = conformed_args__62685__auto__;
var map__64512__$1 = (((((!((map__64512 == null))))?(((((map__64512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64512):map__64512);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq64511){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64511));
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
var args__4742__auto__ = [];
var len__4736__auto___65132 = arguments.length;
var i__4737__auto___65133 = (0);
while(true){
if((i__4737__auto___65133 < len__4736__auto___65132)){
args__4742__auto__.push((arguments[i__4737__auto___65133]));

var G__65134 = (i__4737__auto___65133 + (1));
i__4737__auto___65133 = G__65134;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64515 = conformed_args__62685__auto__;
var map__64515__$1 = (((((!((map__64515 == null))))?(((((map__64515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64515):map__64515);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq64514){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64514));
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
var args__4742__auto__ = [];
var len__4736__auto___65135 = arguments.length;
var i__4737__auto___65136 = (0);
while(true){
if((i__4737__auto___65136 < len__4736__auto___65135)){
args__4742__auto__.push((arguments[i__4737__auto___65136]));

var G__65137 = (i__4737__auto___65136 + (1));
i__4737__auto___65136 = G__65137;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64518 = conformed_args__62685__auto__;
var map__64518__$1 = (((((!((map__64518 == null))))?(((((map__64518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64518):map__64518);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq64517){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64517));
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
var args__4742__auto__ = [];
var len__4736__auto___65138 = arguments.length;
var i__4737__auto___65139 = (0);
while(true){
if((i__4737__auto___65139 < len__4736__auto___65138)){
args__4742__auto__.push((arguments[i__4737__auto___65139]));

var G__65140 = (i__4737__auto___65139 + (1));
i__4737__auto___65139 = G__65140;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64521 = conformed_args__62685__auto__;
var map__64521__$1 = (((((!((map__64521 == null))))?(((((map__64521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64521):map__64521);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq64520){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64520));
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
var args__4742__auto__ = [];
var len__4736__auto___65141 = arguments.length;
var i__4737__auto___65142 = (0);
while(true){
if((i__4737__auto___65142 < len__4736__auto___65141)){
args__4742__auto__.push((arguments[i__4737__auto___65142]));

var G__65143 = (i__4737__auto___65142 + (1));
i__4737__auto___65142 = G__65143;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64524 = conformed_args__62685__auto__;
var map__64524__$1 = (((((!((map__64524 == null))))?(((((map__64524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64524):map__64524);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq64523){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64523));
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
var args__4742__auto__ = [];
var len__4736__auto___65144 = arguments.length;
var i__4737__auto___65145 = (0);
while(true){
if((i__4737__auto___65145 < len__4736__auto___65144)){
args__4742__auto__.push((arguments[i__4737__auto___65145]));

var G__65146 = (i__4737__auto___65145 + (1));
i__4737__auto___65145 = G__65146;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64527 = conformed_args__62685__auto__;
var map__64527__$1 = (((((!((map__64527 == null))))?(((((map__64527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64527):map__64527);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq64526){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64526));
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
var args__4742__auto__ = [];
var len__4736__auto___65147 = arguments.length;
var i__4737__auto___65148 = (0);
while(true){
if((i__4737__auto___65148 < len__4736__auto___65147)){
args__4742__auto__.push((arguments[i__4737__auto___65148]));

var G__65149 = (i__4737__auto___65148 + (1));
i__4737__auto___65148 = G__65149;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64530 = conformed_args__62685__auto__;
var map__64530__$1 = (((((!((map__64530 == null))))?(((((map__64530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64530):map__64530);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64530__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64530__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq64529){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64529));
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
var args__4742__auto__ = [];
var len__4736__auto___65150 = arguments.length;
var i__4737__auto___65151 = (0);
while(true){
if((i__4737__auto___65151 < len__4736__auto___65150)){
args__4742__auto__.push((arguments[i__4737__auto___65151]));

var G__65152 = (i__4737__auto___65151 + (1));
i__4737__auto___65151 = G__65152;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64533 = conformed_args__62685__auto__;
var map__64533__$1 = (((((!((map__64533 == null))))?(((((map__64533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64533):map__64533);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq64532){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64532));
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
var args__4742__auto__ = [];
var len__4736__auto___65153 = arguments.length;
var i__4737__auto___65154 = (0);
while(true){
if((i__4737__auto___65154 < len__4736__auto___65153)){
args__4742__auto__.push((arguments[i__4737__auto___65154]));

var G__65155 = (i__4737__auto___65154 + (1));
i__4737__auto___65154 = G__65155;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64536 = conformed_args__62685__auto__;
var map__64536__$1 = (((((!((map__64536 == null))))?(((((map__64536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64536):map__64536);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq64535){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64535));
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
var args__4742__auto__ = [];
var len__4736__auto___65156 = arguments.length;
var i__4737__auto___65157 = (0);
while(true){
if((i__4737__auto___65157 < len__4736__auto___65156)){
args__4742__auto__.push((arguments[i__4737__auto___65157]));

var G__65158 = (i__4737__auto___65157 + (1));
i__4737__auto___65157 = G__65158;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64539 = conformed_args__62685__auto__;
var map__64539__$1 = (((((!((map__64539 == null))))?(((((map__64539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64539):map__64539);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64539__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq64538){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64538));
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
var args__4742__auto__ = [];
var len__4736__auto___65159 = arguments.length;
var i__4737__auto___65160 = (0);
while(true){
if((i__4737__auto___65160 < len__4736__auto___65159)){
args__4742__auto__.push((arguments[i__4737__auto___65160]));

var G__65161 = (i__4737__auto___65160 + (1));
i__4737__auto___65160 = G__65161;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64542 = conformed_args__62685__auto__;
var map__64542__$1 = (((((!((map__64542 == null))))?(((((map__64542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64542):map__64542);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq64541){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64541));
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
var args__4742__auto__ = [];
var len__4736__auto___65162 = arguments.length;
var i__4737__auto___65163 = (0);
while(true){
if((i__4737__auto___65163 < len__4736__auto___65162)){
args__4742__auto__.push((arguments[i__4737__auto___65163]));

var G__65164 = (i__4737__auto___65163 + (1));
i__4737__auto___65163 = G__65164;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62685__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64545 = conformed_args__62685__auto__;
var map__64545__$1 = (((((!((map__64545 == null))))?(((((map__64545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64545):map__64545);
var attrs__62686__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62688__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64545__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62687__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62687__auto__);
var attrs_value__62689__auto__ = (function (){var or__4126__auto__ = cljs.core.second(attrs__62686__auto__);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62689__auto__], null),children__62687__auto____$1),css__62688__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq64544){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64544));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
