var g1=Object.defineProperty;var c1=(e,t,n)=>t in e?g1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var cn=(e,t,n)=>c1(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function d1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zo={exports:{}},i0={},Jo={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),f1=Symbol.for("react.portal"),v1=Symbol.for("react.fragment"),p1=Symbol.for("react.strict_mode"),k1=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),h1=Symbol.for("react.context"),y1=Symbol.for("react.forward_ref"),x1=Symbol.for("react.suspense"),w1=Symbol.for("react.memo"),S1=Symbol.for("react.lazy"),Bl=Symbol.iterator;function M1(e){return e===null||typeof e!="object"?null:(e=Bl&&e[Bl]||e["@@iterator"],typeof e=="function"?e:null)}var qo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},es=Object.assign,ts={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||qo}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ns(){}ns.prototype=sn.prototype;function Vi(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||qo}var Hi=Vi.prototype=new ns;Hi.constructor=Vi;es(Hi,sn.prototype);Hi.isPureReactComponent=!0;var Il=Array.isArray,rs=Object.prototype.hasOwnProperty,Wi={current:null},is={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)rs.call(t,r)&&!is.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),g=0;g<s;g++)a[g]=arguments[g+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Gn,type:e,key:l,ref:o,props:i,_owner:Wi.current}}function _1(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function C1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fl=/\/+/g;function M0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?C1(""+e.key):t.toString(36)}function wr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gn:case f1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+M0(o,0):r,Il(i)?(n="",e!=null&&(n=e.replace(Fl,"$&/")+"/"),wr(i,t,n,"",function(g){return g})):i!=null&&(Qi(i)&&(i=_1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fl,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Il(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+M0(l,s);o+=wr(l,t,n,a,i)}else if(a=M1(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+M0(l,s++),o+=wr(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(e,t,n){if(e==null)return e;var r=[],i=0;return wr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function E1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Sr={transition:null},P1={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:Wi};function os(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=sn;j.Fragment=v1;j.Profiler=k1;j.PureComponent=Vi;j.StrictMode=p1;j.Suspense=x1;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;j.act=os;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=es({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Wi.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)rs.call(t,a)&&!is.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var g=0;g<a;g++)s[g]=arguments[g+2];r.children=s}return{$$typeof:Gn,type:e.type,key:i,ref:l,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:h1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:m1,_context:e},e.Consumer=e};j.createElement=ls;j.createFactory=function(e){var t=ls.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:y1,render:e}};j.isValidElement=Qi;j.lazy=function(e){return{$$typeof:S1,_payload:{_status:-1,_result:e},_init:E1}};j.memo=function(e,t){return{$$typeof:w1,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};j.unstable_act=os;j.useCallback=function(e,t){return ae.current.useCallback(e,t)};j.useContext=function(e){return ae.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};j.useEffect=function(e,t){return ae.current.useEffect(e,t)};j.useId=function(){return ae.current.useId()};j.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ae.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};j.useRef=function(e){return ae.current.useRef(e)};j.useState=function(e){return ae.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ae.current.useTransition()};j.version="18.3.1";Jo.exports=j;var le=Jo.exports;const N1=d1(le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=le,j1=Symbol.for("react.element"),L1=Symbol.for("react.fragment"),T1=Object.prototype.hasOwnProperty,R1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D1={key:!0,ref:!0,__self:!0,__source:!0};function ss(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)T1.call(t,r)&&!D1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:j1,type:e,key:l,ref:o,props:i,_owner:R1.current}}i0.Fragment=L1;i0.jsx=ss;i0.jsxs=ss;Zo.exports=i0;var ie=Zo.exports,X0={},as={exports:{}},xe={},us={exports:{}},gs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var N=_.length;_.push(P);e:for(;0<N;){var H=N-1>>>1,Y=_[H];if(0<i(Y,P))_[H]=P,_[N]=Y,N=H;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],N=_.pop();if(N!==P){_[0]=N;e:for(var H=0,Y=_.length,tr=Y>>>1;H<tr;){var ht=2*(H+1)-1,S0=_[ht],yt=ht+1,nr=_[yt];if(0>i(S0,N))yt<Y&&0>i(nr,S0)?(_[H]=nr,_[yt]=N,H=yt):(_[H]=S0,_[ht]=N,H=ht);else if(yt<Y&&0>i(nr,N))_[H]=nr,_[yt]=N,H=yt;else break e}}return P}function i(_,P){var N=_.sortIndex-P.sortIndex;return N!==0?N:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],g=[],v=1,f=null,p=3,h=!1,y=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var P=n(g);P!==null;){if(P.callback===null)r(g);else if(P.startTime<=_)r(g),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(g)}}function k(_){if(x=!1,d(_),!y)if(n(a)!==null)y=!0,x0(w);else{var P=n(g);P!==null&&w0(k,P.startTime-_)}}function w(_,P){y=!1,x&&(x=!1,c(E),E=-1),h=!0;var N=p;try{for(d(P),f=n(a);f!==null&&(!(f.expirationTime>P)||_&&!ge());){var H=f.callback;if(typeof H=="function"){f.callback=null,p=f.priorityLevel;var Y=H(f.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(a)&&r(a),d(P)}else r(a);f=n(a)}if(f!==null)var tr=!0;else{var ht=n(g);ht!==null&&w0(k,ht.startTime-P),tr=!1}return tr}finally{f=null,p=N,h=!1}}var M=!1,C=null,E=-1,F=5,z=-1;function ge(){return!(e.unstable_now()-z<F)}function Ge(){if(C!==null){var _=e.unstable_now();z=_;var P=!0;try{P=C(!0,_)}finally{P?Ze():(M=!1,C=null)}}else M=!1}var Ze;if(typeof u=="function")Ze=function(){u(Ge)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,u1=gn.port2;gn.port1.onmessage=Ge,Ze=function(){u1.postMessage(null)}}else Ze=function(){T(Ge,0)};function x0(_){C=_,M||(M=!0,Ze())}function w0(_,P){E=T(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,x0(w))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var N=p;p=P;try{return _()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=p;p=_;try{return P()}finally{p=N}},e.unstable_scheduleCallback=function(_,P,N){var H=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?H+N:H):N=H,_){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,_={id:v++,callback:P,priorityLevel:_,startTime:N,expirationTime:Y,sortIndex:-1},N>H?(_.sortIndex=N,t(g,_),n(a)===null&&_===n(g)&&(x?(c(E),E=-1):x=!0,w0(k,N-H))):(_.sortIndex=Y,t(a,_),y||h||(y=!0,x0(w))),_},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(_){var P=p;return function(){var N=p;p=P;try{return _.apply(this,arguments)}finally{p=N}}}})(gs);us.exports=gs;var O1=us.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1=le,ye=O1;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cs=new Set,Rn={};function Tt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Rn[e]=t,e=0;e<t.length;e++)cs.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),G0=Object.prototype.hasOwnProperty,I1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ul={},$l={};function F1(e){return G0.call($l,e)?!0:G0.call(Ul,e)?!1:I1.test(e)?$l[e]=!0:(Ul[e]=!0,!1)}function U1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $1(e,t,n,r){if(t===null||typeof t>"u"||U1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){q[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){q[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){q[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){q[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var bi=/[\-:]([a-z])/g;function Ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bi,Ki);q[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bi,Ki);q[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bi,Ki);q[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){q[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});q.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){q[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yi(e,t,n,r){var i=q.hasOwnProperty(t)?q[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($1(t,n,i,r)&&(n=null),r||i===null?F1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=B1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),Xi=Symbol.for("react.strict_mode"),Z0=Symbol.for("react.profiler"),ds=Symbol.for("react.provider"),fs=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),J0=Symbol.for("react.suspense"),q0=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),vs=Symbol.for("react.offscreen"),Al=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Al&&e[Al]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,_0;function xn(e){if(_0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_0=t&&t[1]||""}return`
`+_0+e}var C0=!1;function E0(e,t){if(!e||C0)return"";C0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{C0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function A1(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=E0(e.type,!1),e;case 11:return e=E0(e.type.render,!1),e;case 1:return e=E0(e.type,!0),e;default:return""}}function ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ot:return"Portal";case Z0:return"Profiler";case Xi:return"StrictMode";case J0:return"Suspense";case q0:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fs:return(e.displayName||"Context")+".Consumer";case ds:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zi:return t=e.displayName||null,t!==null?t:ei(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return ei(e(t))}catch{}}return null}function V1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ei(t);case 8:return t===Xi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H1(e){var t=ps(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=H1(e))}function ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ps(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ms(e,t){t=t.checked,t!=null&&Yi(e,"checked",t,!1)}function ni(e,t){ms(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&ri(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ri(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ii(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(wn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function hs(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ql(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ys(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ys(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W1=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){W1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Ss(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Q1=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(Q1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,Yt=null,Xt=null;function bl(e){if(e=qn(e)){if(typeof ui!="function")throw Error(m(280));var t=e.stateNode;t&&(t=u0(t),ui(e.stateNode,e.type,t))}}function Ms(e){Yt?Xt?Xt.push(e):Xt=[e]:Yt=e}function _s(){if(Yt){var e=Yt,t=Xt;if(Xt=Yt=null,bl(e),t)for(e=0;e<t.length;e++)bl(t[e])}}function Cs(e,t){return e(t)}function Es(){}var P0=!1;function Ps(e,t,n){if(P0)return e(t,n);P0=!0;try{return Cs(e,t,n)}finally{P0=!1,(Yt!==null||Xt!==null)&&(Es(),_s())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=u0(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var gi=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{gi=!1}function b1(e,t,n,r,i,l,o,s,a){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(v){this.onError(v)}}var Cn=!1,Dr=null,Or=!1,ci=null,K1={onError:function(e){Cn=!0,Dr=e}};function Y1(e,t,n,r,i,l,o,s,a){Cn=!1,Dr=null,b1.apply(K1,arguments)}function X1(e,t,n,r,i,l,o,s,a){if(Y1.apply(this,arguments),Cn){if(Cn){var g=Dr;Cn=!1,Dr=null}else throw Error(m(198));Or||(Or=!0,ci=g)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ns(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kl(e){if(Rt(e)!==e)throw Error(m(188))}function G1(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Kl(i),e;if(l===r)return Kl(i),t;l=l.sibling}throw Error(m(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function zs(e){return e=G1(e),e!==null?js(e):null}function js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=js(e);if(t!==null)return t;e=e.sibling}return null}var Ls=ye.unstable_scheduleCallback,Yl=ye.unstable_cancelCallback,Z1=ye.unstable_shouldYield,J1=ye.unstable_requestPaint,W=ye.unstable_now,q1=ye.unstable_getCurrentPriorityLevel,qi=ye.unstable_ImmediatePriority,Ts=ye.unstable_UserBlockingPriority,Br=ye.unstable_NormalPriority,eu=ye.unstable_LowPriority,Rs=ye.unstable_IdlePriority,l0=null,Fe=null;function tu(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(l0,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:iu,nu=Math.log,ru=Math.LN2;function iu(e){return e>>>=0,e===0?32:31-(nu(e)/ru|0)|0}var sr=64,ar=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Sn(s):(l&=o,l!==0&&(r=Sn(l)))}else o=n&~i,o!==0?r=Sn(o):l!==0&&(r=Sn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),i=1<<n,r|=e[n],t&=~i;return r}function lu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ou(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Te(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=lu(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ds(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function N0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function su(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Te(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function el(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Os(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bs,tl,Is,Fs,Us,fi=!1,ur=[],lt=null,ot=null,st=null,Bn=new Map,In=new Map,tt=[],au="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xl(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function vn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=qn(t),t!==null&&tl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uu(e,t,n,r,i){switch(t){case"focusin":return lt=vn(lt,e,t,n,r,i),!0;case"dragenter":return ot=vn(ot,e,t,n,r,i),!0;case"mouseover":return st=vn(st,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Bn.set(l,vn(Bn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,In.set(l,vn(In.get(l)||null,e,t,n,r,i)),!0}return!1}function $s(e){var t=St(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ns(n),t!==null){e.blockedOn=t,Us(e.priority,function(){Is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ai=r,n.target.dispatchEvent(r),ai=null}else return t=qn(n),t!==null&&tl(t),e.blockedOn=n,!1;t.shift()}return!0}function Gl(e,t,n){Mr(e)&&n.delete(t)}function gu(){fi=!1,lt!==null&&Mr(lt)&&(lt=null),ot!==null&&Mr(ot)&&(ot=null),st!==null&&Mr(st)&&(st=null),Bn.forEach(Gl),In.forEach(Gl)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,fi||(fi=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,gu)))}function Fn(e){function t(i){return pn(i,e)}if(0<ur.length){pn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&pn(lt,e),ot!==null&&pn(ot,e),st!==null&&pn(st,e),Bn.forEach(t),In.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)$s(n),n.blockedOn===null&&tt.shift()}var Gt=Xe.ReactCurrentBatchConfig,Fr=!0;function cu(e,t,n,r){var i=R,l=Gt.transition;Gt.transition=null;try{R=1,nl(e,t,n,r)}finally{R=i,Gt.transition=l}}function du(e,t,n,r){var i=R,l=Gt.transition;Gt.transition=null;try{R=4,nl(e,t,n,r)}finally{R=i,Gt.transition=l}}function nl(e,t,n,r){if(Fr){var i=vi(e,t,n,r);if(i===null)F0(e,t,r,Ur,n),Xl(e,r);else if(uu(i,e,t,n,r))r.stopPropagation();else if(Xl(e,r),t&4&&-1<au.indexOf(e)){for(;i!==null;){var l=qn(i);if(l!==null&&Bs(l),l=vi(e,t,n,r),l===null&&F0(e,t,r,Ur,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else F0(e,t,r,null,n)}}var Ur=null;function vi(e,t,n,r){if(Ur=null,e=Ji(r),e=St(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ns(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function As(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case qi:return 1;case Ts:return 4;case Br:case eu:return 16;case Rs:return 536870912;default:return 16}default:return 16}}var rt=null,rl=null,_r=null;function Vs(){if(_r)return _r;var e,t=rl,n=t.length,r,i="value"in rt?rt.value:rt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return _r=i.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gr(){return!0}function Zl(){return!1}function we(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?gr:Zl,this.isPropagationStopped=Zl,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=we(an),Jn=A({},an,{view:0,detail:0}),fu=we(Jn),z0,j0,kn,o0=A({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(z0=e.screenX-kn.screenX,j0=e.screenY-kn.screenY):j0=z0=0,kn=e),z0)},movementY:function(e){return"movementY"in e?e.movementY:j0}}),Jl=we(o0),vu=A({},o0,{dataTransfer:0}),pu=we(vu),ku=A({},Jn,{relatedTarget:0}),L0=we(ku),mu=A({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),hu=we(mu),yu=A({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xu=we(yu),wu=A({},an,{data:0}),ql=we(wu),Su={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_u[e])?!!t[e]:!1}function ll(){return Cu}var Eu=A({},Jn,{key:function(e){if(e.key){var t=Su[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ll,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pu=we(Eu),Nu=A({},o0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eo=we(Nu),zu=A({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ll}),ju=we(zu),Lu=A({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tu=we(Lu),Ru=A({},o0,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Du=we(Ru),Ou=[9,13,27,32],ol=Qe&&"CompositionEvent"in window,En=null;Qe&&"documentMode"in document&&(En=document.documentMode);var Bu=Qe&&"TextEvent"in window&&!En,Hs=Qe&&(!ol||En&&8<En&&11>=En),to=" ",no=!1;function Ws(e,t){switch(e){case"keyup":return Ou.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function Iu(e,t){switch(e){case"compositionend":return Qs(t);case"keypress":return t.which!==32?null:(no=!0,to);case"textInput":return e=t.data,e===to&&no?null:e;default:return null}}function Fu(e,t){if(It)return e==="compositionend"||!ol&&Ws(e,t)?(e=Vs(),_r=rl=rt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hs&&t.locale!=="ko"?null:t.data;default:return null}}var Uu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uu[e.type]:t==="textarea"}function bs(e,t,n,r){Ms(r),t=$r(t,"onChange"),0<t.length&&(n=new il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Un=null;function $u(e){ra(e,0)}function s0(e){var t=$t(e);if(ks(t))return e}function Au(e,t){if(e==="change")return t}var Ks=!1;if(Qe){var T0;if(Qe){var R0="oninput"in document;if(!R0){var io=document.createElement("div");io.setAttribute("oninput","return;"),R0=typeof io.oninput=="function"}T0=R0}else T0=!1;Ks=T0&&(!document.documentMode||9<document.documentMode)}function lo(){Pn&&(Pn.detachEvent("onpropertychange",Ys),Un=Pn=null)}function Ys(e){if(e.propertyName==="value"&&s0(Un)){var t=[];bs(t,Un,e,Ji(e)),Ps($u,t)}}function Vu(e,t,n){e==="focusin"?(lo(),Pn=t,Un=n,Pn.attachEvent("onpropertychange",Ys)):e==="focusout"&&lo()}function Hu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return s0(Un)}function Wu(e,t){if(e==="click")return s0(t)}function Qu(e,t){if(e==="input"||e==="change")return s0(t)}function bu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:bu;function $n(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!G0.call(t,i)||!De(e[i],t[i]))return!1}return!0}function oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function so(e,t){var n=oo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oo(n)}}function Xs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ku(e){var t=Gs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xs(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=so(n,l);var o=so(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yu=Qe&&"documentMode"in document&&11>=document.documentMode,Ft=null,pi=null,Nn=null,ki=!1;function ao(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ki||Ft==null||Ft!==Rr(r)||(r=Ft,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&$n(Nn,r)||(Nn=r,r=$r(pi,"onSelect"),0<r.length&&(t=new il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},D0={},Zs={};Qe&&(Zs=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function a0(e){if(D0[e])return D0[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zs)return D0[e]=t[n];return e}var Js=a0("animationend"),qs=a0("animationiteration"),ea=a0("animationstart"),ta=a0("transitionend"),na=new Map,uo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){na.set(e,t),Tt(t,[e])}for(var O0=0;O0<uo.length;O0++){var B0=uo[O0],Xu=B0.toLowerCase(),Gu=B0[0].toUpperCase()+B0.slice(1);pt(Xu,"on"+Gu)}pt(Js,"onAnimationEnd");pt(qs,"onAnimationIteration");pt(ea,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(ta,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function go(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,X1(r,t,void 0,e),e.currentTarget=null}function ra(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,g=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;go(i,s,g),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,g=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;go(i,s,g),l=a}}}if(Or)throw e=ci,Or=!1,ci=null,e}function O(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(ia(t,e,2,!1),n.add(r))}function I0(e,t,n){var r=0;t&&(r|=4),ia(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[dr]){e[dr]=!0,cs.forEach(function(n){n!=="selectionchange"&&(Zu.has(n)||I0(n,!1,e),I0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,I0("selectionchange",!1,t))}}function ia(e,t,n,r){switch(As(t)){case 1:var i=cu;break;case 4:i=du;break;default:i=nl}n=i.bind(null,t,n,e),i=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function F0(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=St(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Ps(function(){var g=l,v=Ji(n),f=[];e:{var p=na.get(e);if(p!==void 0){var h=il,y=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":h=Pu;break;case"focusin":y="focus",h=L0;break;case"focusout":y="blur",h=L0;break;case"beforeblur":case"afterblur":h=L0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=pu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ju;break;case Js:case qs:case ea:h=hu;break;case ta:h=Tu;break;case"scroll":h=fu;break;case"wheel":h=Du;break;case"copy":case"cut":case"paste":h=xu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=eo}var x=(t&4)!==0,T=!x&&e==="scroll",c=x?p!==null?p+"Capture":null:p;x=[];for(var u=g,d;u!==null;){d=u;var k=d.stateNode;if(d.tag===5&&k!==null&&(d=k,c!==null&&(k=On(u,c),k!=null&&x.push(Vn(u,k,d)))),T)break;u=u.return}0<x.length&&(p=new h(p,y,null,n,v),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==ai&&(y=n.relatedTarget||n.fromElement)&&(St(y)||y[be]))break e;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=g,y=y?St(y):null,y!==null&&(T=Rt(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=g),h!==y)){if(x=Jl,k="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=eo,k="onPointerLeave",c="onPointerEnter",u="pointer"),T=h==null?p:$t(h),d=y==null?p:$t(y),p=new x(k,u+"leave",h,n,v),p.target=T,p.relatedTarget=d,k=null,St(v)===g&&(x=new x(c,u+"enter",y,n,v),x.target=d,x.relatedTarget=T,k=x),T=k,h&&y)t:{for(x=h,c=y,u=0,d=x;d;d=Dt(d))u++;for(d=0,k=c;k;k=Dt(k))d++;for(;0<u-d;)x=Dt(x),u--;for(;0<d-u;)c=Dt(c),d--;for(;u--;){if(x===c||c!==null&&x===c.alternate)break t;x=Dt(x),c=Dt(c)}x=null}else x=null;h!==null&&co(f,p,h,x,!1),y!==null&&T!==null&&co(f,T,y,x,!0)}}e:{if(p=g?$t(g):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var w=Au;else if(ro(p))if(Ks)w=Qu;else{w=Hu;var M=Vu}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=Wu);if(w&&(w=w(e,g))){bs(f,w,n,v);break e}M&&M(e,p,g),e==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&ri(p,"number",p.value)}switch(M=g?$t(g):window,e){case"focusin":(ro(M)||M.contentEditable==="true")&&(Ft=M,pi=g,Nn=null);break;case"focusout":Nn=pi=Ft=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,ao(f,n,v);break;case"selectionchange":if(Yu)break;case"keydown":case"keyup":ao(f,n,v)}var C;if(ol)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else It?Ws(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Hs&&n.locale!=="ko"&&(It||E!=="onCompositionStart"?E==="onCompositionEnd"&&It&&(C=Vs()):(rt=v,rl="value"in rt?rt.value:rt.textContent,It=!0)),M=$r(g,E),0<M.length&&(E=new ql(E,e,null,n,v),f.push({event:E,listeners:M}),C?E.data=C:(C=Qs(n),C!==null&&(E.data=C)))),(C=Bu?Iu(e,n):Fu(e,n))&&(g=$r(g,"onBeforeInput"),0<g.length&&(v=new ql("onBeforeInput","beforeinput",null,n,v),f.push({event:v,listeners:g}),v.data=C))}ra(f,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=On(e,n),l!=null&&r.unshift(Vn(e,l,i)),l=On(e,t),l!=null&&r.push(Vn(e,l,i))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function co(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,g=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&g!==null&&(s=g,i?(a=On(n,l),a!=null&&o.unshift(Vn(n,a,s))):i||(a=On(n,l),a!=null&&o.push(Vn(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ju=/\r\n?/g,qu=/\u0000|\uFFFD/g;function fo(e){return(typeof e=="string"?e:""+e).replace(Ju,`
`).replace(qu,"")}function fr(e,t,n){if(t=fo(t),fo(e)!==t&&n)throw Error(m(425))}function Ar(){}var mi=null,hi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,eg=typeof clearTimeout=="function"?clearTimeout:void 0,vo=typeof Promise=="function"?Promise:void 0,tg=typeof queueMicrotask=="function"?queueMicrotask:typeof vo<"u"?function(e){return vo.resolve(null).then(e).catch(ng)}:xi;function ng(e){setTimeout(function(){throw e})}function U0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function po(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Ie="__reactFiber$"+un,Hn="__reactProps$"+un,be="__reactContainer$"+un,wi="__reactEvents$"+un,rg="__reactListeners$"+un,ig="__reactHandles$"+un;function St(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[be]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=po(e);e!==null;){if(n=e[Ie])return n;e=po(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Ie]||e[be],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function u0(e){return e[Hn]||null}var Si=[],At=-1;function kt(e){return{current:e}}function B(e){0>At||(e.current=Si[At],Si[At]=null,At--)}function D(e,t){At++,Si[At]=e.current,e.current=t}var vt={},re=kt(vt),fe=kt(!1),Pt=vt;function en(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Vr(){B(fe),B(re)}function ko(e,t,n){if(re.current!==vt)throw Error(m(168));D(re,t),D(fe,n)}function la(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(m(108,V1(e)||"Unknown",i));return A({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Pt=re.current,D(re,e),D(fe,fe.current),!0}function mo(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=la(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,B(fe),B(re),D(re,e)):B(fe),D(fe,n)}var Ae=null,g0=!1,$0=!1;function oa(e){Ae===null?Ae=[e]:Ae.push(e)}function lg(e){g0=!0,oa(e)}function mt(){if(!$0&&Ae!==null){$0=!0;var e=0,t=R;try{var n=Ae;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ae=null,g0=!1}catch(i){throw Ae!==null&&(Ae=Ae.slice(e+1)),Ls(qi,mt),i}finally{R=t,$0=!1}}return null}var Vt=[],Ht=0,Wr=null,Qr=0,Se=[],Me=0,Nt=null,Ve=1,He="";function xt(e,t){Vt[Ht++]=Qr,Vt[Ht++]=Wr,Wr=e,Qr=t}function sa(e,t,n){Se[Me++]=Ve,Se[Me++]=He,Se[Me++]=Nt,Nt=e;var r=Ve;e=He;var i=32-Te(r)-1;r&=~(1<<i),n+=1;var l=32-Te(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ve=1<<32-Te(t)+i|n<<i|r,He=l+e}else Ve=1<<l|n<<i|r,He=e}function al(e){e.return!==null&&(xt(e,1),sa(e,1,0))}function ul(e){for(;e===Wr;)Wr=Vt[--Ht],Vt[Ht]=null,Qr=Vt[--Ht],Vt[Ht]=null;for(;e===Nt;)Nt=Se[--Me],Se[Me]=null,He=Se[--Me],Se[Me]=null,Ve=Se[--Me],Se[Me]=null}var he=null,me=null,I=!1,Le=null;function aa(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ho(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,me=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,he=e,me=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(I){var t=me;if(t){var n=t;if(!ho(e,t)){if(Mi(e))throw Error(m(418));t=at(n.nextSibling);var r=he;t&&ho(e,t)?aa(r,n):(e.flags=e.flags&-4097|2,I=!1,he=e)}}else{if(Mi(e))throw Error(m(418));e.flags=e.flags&-4097|2,I=!1,he=e}}}function yo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function vr(e){if(e!==he)return!1;if(!I)return yo(e),I=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=me)){if(Mi(e))throw ua(),Error(m(418));for(;t;)aa(e,t),t=at(t.nextSibling)}if(yo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=he?at(e.stateNode.nextSibling):null;return!0}function ua(){for(var e=me;e;)e=at(e.nextSibling)}function tn(){me=he=null,I=!1}function gl(e){Le===null?Le=[e]:Le.push(e)}var og=Xe.ReactCurrentBatchConfig;function mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){var t=e._init;return t(e._payload)}function ga(e){function t(c,u){if(e){var d=c.deletions;d===null?(c.deletions=[u],c.flags|=16):d.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=dt(c,u),c.index=0,c.sibling=null,c}function l(c,u,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<u?(c.flags|=2,u):d):(c.flags|=2,u)):(c.flags|=1048576,u)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function s(c,u,d,k){return u===null||u.tag!==6?(u=K0(d,c.mode,k),u.return=c,u):(u=i(u,d),u.return=c,u)}function a(c,u,d,k){var w=d.type;return w===Bt?v(c,u,d.props.children,k,d.key):u!==null&&(u.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===qe&&xo(w)===u.type)?(k=i(u,d.props),k.ref=mn(c,u,d),k.return=c,k):(k=Tr(d.type,d.key,d.props,null,c.mode,k),k.ref=mn(c,u,d),k.return=c,k)}function g(c,u,d,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Y0(d,c.mode,k),u.return=c,u):(u=i(u,d.children||[]),u.return=c,u)}function v(c,u,d,k,w){return u===null||u.tag!==7?(u=Et(d,c.mode,k,w),u.return=c,u):(u=i(u,d),u.return=c,u)}function f(c,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=K0(""+u,c.mode,d),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ir:return d=Tr(u.type,u.key,u.props,null,c.mode,d),d.ref=mn(c,null,u),d.return=c,d;case Ot:return u=Y0(u,c.mode,d),u.return=c,u;case qe:var k=u._init;return f(c,k(u._payload),d)}if(wn(u)||dn(u))return u=Et(u,c.mode,d,null),u.return=c,u;pr(c,u)}return null}function p(c,u,d,k){var w=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:s(c,u,""+d,k);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ir:return d.key===w?a(c,u,d,k):null;case Ot:return d.key===w?g(c,u,d,k):null;case qe:return w=d._init,p(c,u,w(d._payload),k)}if(wn(d)||dn(d))return w!==null?null:v(c,u,d,k,null);pr(c,d)}return null}function h(c,u,d,k,w){if(typeof k=="string"&&k!==""||typeof k=="number")return c=c.get(d)||null,s(u,c,""+k,w);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ir:return c=c.get(k.key===null?d:k.key)||null,a(u,c,k,w);case Ot:return c=c.get(k.key===null?d:k.key)||null,g(u,c,k,w);case qe:var M=k._init;return h(c,u,d,M(k._payload),w)}if(wn(k)||dn(k))return c=c.get(d)||null,v(u,c,k,w,null);pr(u,k)}return null}function y(c,u,d,k){for(var w=null,M=null,C=u,E=u=0,F=null;C!==null&&E<d.length;E++){C.index>E?(F=C,C=null):F=C.sibling;var z=p(c,C,d[E],k);if(z===null){C===null&&(C=F);break}e&&C&&z.alternate===null&&t(c,C),u=l(z,u,E),M===null?w=z:M.sibling=z,M=z,C=F}if(E===d.length)return n(c,C),I&&xt(c,E),w;if(C===null){for(;E<d.length;E++)C=f(c,d[E],k),C!==null&&(u=l(C,u,E),M===null?w=C:M.sibling=C,M=C);return I&&xt(c,E),w}for(C=r(c,C);E<d.length;E++)F=h(C,c,E,d[E],k),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?E:F.key),u=l(F,u,E),M===null?w=F:M.sibling=F,M=F);return e&&C.forEach(function(ge){return t(c,ge)}),I&&xt(c,E),w}function x(c,u,d,k){var w=dn(d);if(typeof w!="function")throw Error(m(150));if(d=w.call(d),d==null)throw Error(m(151));for(var M=w=null,C=u,E=u=0,F=null,z=d.next();C!==null&&!z.done;E++,z=d.next()){C.index>E?(F=C,C=null):F=C.sibling;var ge=p(c,C,z.value,k);if(ge===null){C===null&&(C=F);break}e&&C&&ge.alternate===null&&t(c,C),u=l(ge,u,E),M===null?w=ge:M.sibling=ge,M=ge,C=F}if(z.done)return n(c,C),I&&xt(c,E),w;if(C===null){for(;!z.done;E++,z=d.next())z=f(c,z.value,k),z!==null&&(u=l(z,u,E),M===null?w=z:M.sibling=z,M=z);return I&&xt(c,E),w}for(C=r(c,C);!z.done;E++,z=d.next())z=h(C,c,E,z.value,k),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?E:z.key),u=l(z,u,E),M===null?w=z:M.sibling=z,M=z);return e&&C.forEach(function(Ge){return t(c,Ge)}),I&&xt(c,E),w}function T(c,u,d,k){if(typeof d=="object"&&d!==null&&d.type===Bt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ir:e:{for(var w=d.key,M=u;M!==null;){if(M.key===w){if(w=d.type,w===Bt){if(M.tag===7){n(c,M.sibling),u=i(M,d.props.children),u.return=c,c=u;break e}}else if(M.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===qe&&xo(w)===M.type){n(c,M.sibling),u=i(M,d.props),u.ref=mn(c,M,d),u.return=c,c=u;break e}n(c,M);break}else t(c,M);M=M.sibling}d.type===Bt?(u=Et(d.props.children,c.mode,k,d.key),u.return=c,c=u):(k=Tr(d.type,d.key,d.props,null,c.mode,k),k.ref=mn(c,u,d),k.return=c,c=k)}return o(c);case Ot:e:{for(M=d.key;u!==null;){if(u.key===M)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(c,u.sibling),u=i(u,d.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=Y0(d,c.mode,k),u.return=c,c=u}return o(c);case qe:return M=d._init,T(c,u,M(d._payload),k)}if(wn(d))return y(c,u,d,k);if(dn(d))return x(c,u,d,k);pr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(c,u.sibling),u=i(u,d),u.return=c,c=u):(n(c,u),u=K0(d,c.mode,k),u.return=c,c=u),o(c)):n(c,u)}return T}var nn=ga(!0),ca=ga(!1),br=kt(null),Kr=null,Wt=null,cl=null;function dl(){cl=Wt=Kr=null}function fl(e){var t=br.current;B(br),e._currentValue=t}function Ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Kr=e,cl=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(cl!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Kr===null)throw Error(m(308));Wt=e,Kr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Mt=null;function vl(e){Mt===null?Mt=[e]:Mt.push(e)}function da(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,vl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ke(e,n)}return i=r.interleaved,i===null?(t.next=t,vl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ke(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,el(e,n)}}function wo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var i=e.updateQueue;et=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,g=a.next;a.next=null,o===null?l=g:o.next=g,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=g:s.next=g,v.lastBaseUpdate=a))}if(l!==null){var f=i.baseState;o=0,v=g=a=null,s=l;do{var p=s.lane,h=s.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(p=t,h=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=A({},f,p);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(g=v=h,a=f):v=v.next=h,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(v===null&&(a=f),i.baseState=a,i.firstBaseUpdate=g,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);jt|=o,e.lanes=o,e.memoizedState=f}}function So(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(m(191,i));i.call(r)}}}var er={},Ue=kt(er),Wn=kt(er),Qn=kt(er);function _t(e){if(e===er)throw Error(m(174));return e}function kl(e,t){switch(D(Qn,t),D(Wn,e),D(Ue,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=li(t,e)}B(Ue),D(Ue,t)}function rn(){B(Ue),B(Wn),B(Qn)}function va(e){_t(Qn.current);var t=_t(Ue.current),n=li(t,e.type);t!==n&&(D(Wn,e),D(Ue,n))}function ml(e){Wn.current===e&&(B(Ue),B(Wn))}var U=kt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var A0=[];function hl(){for(var e=0;e<A0.length;e++)A0[e]._workInProgressVersionPrimary=null;A0.length=0}var Pr=Xe.ReactCurrentDispatcher,V0=Xe.ReactCurrentBatchConfig,zt=0,$=null,b=null,X=null,Gr=!1,zn=!1,bn=0,sg=0;function ee(){throw Error(m(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function xl(e,t,n,r,i,l){if(zt=l,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?cg:dg,e=n(r,i),zn){l=0;do{if(zn=!1,bn=0,25<=l)throw Error(m(301));l+=1,X=b=null,t.updateQueue=null,Pr.current=fg,e=n(r,i)}while(zn)}if(Pr.current=Zr,t=b!==null&&b.next!==null,zt=0,X=b=$=null,Gr=!1,t)throw Error(m(300));return e}function wl(){var e=bn!==0;return bn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?$.memoizedState=X=e:X=X.next=e,X}function Pe(){if(b===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var t=X===null?$.memoizedState:X.next;if(t!==null)X=t,b=e;else{if(e===null)throw Error(m(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},X===null?$.memoizedState=X=e:X=X.next=e}return X}function Kn(e,t){return typeof t=="function"?t(e):t}function H0(e){var t=Pe(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=b,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,g=l;do{var v=g.lane;if((zt&v)===v)a!==null&&(a=a.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var f={lane:v,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};a===null?(s=a=f,o=r):a=a.next=f,$.lanes|=v,jt|=v}g=g.next}while(g!==null&&g!==l);a===null?o=r:a.next=s,De(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,$.lanes|=l,jt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function W0(e){var t=Pe(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);De(l,t.memoizedState)||(de=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function pa(){}function ka(e,t){var n=$,r=Pe(),i=t(),l=!De(r.memoizedState,i);if(l&&(r.memoizedState=i,de=!0),r=r.queue,Sl(ya.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Yn(9,ha.bind(null,n,r,i,t),void 0,null),G===null)throw Error(m(349));zt&30||ma(n,t,i)}return i}function ma(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ha(e,t,n,r){t.value=n,t.getSnapshot=r,xa(t)&&wa(e)}function ya(e,t,n){return n(function(){xa(t)&&wa(e)})}function xa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function wa(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function Mo(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=gg.bind(null,$,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sa(){return Pe().memoizedState}function Nr(e,t,n,r){var i=Be();$.flags|=e,i.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function c0(e,t,n,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(b!==null){var o=b.memoizedState;if(l=o.destroy,r!==null&&yl(r,o.deps)){i.memoizedState=Yn(t,n,l,r);return}}$.flags|=e,i.memoizedState=Yn(1|t,n,l,r)}function _o(e,t){return Nr(8390656,8,e,t)}function Sl(e,t){return c0(2048,8,e,t)}function Ma(e,t){return c0(4,2,e,t)}function _a(e,t){return c0(4,4,e,t)}function Ca(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ea(e,t,n){return n=n!=null?n.concat([e]):null,c0(4,4,Ca.bind(null,t,e),n)}function Ml(){}function Pa(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Na(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function za(e,t,n){return zt&21?(De(n,t)||(n=Ds(),$.lanes|=n,jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function ag(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=V0.transition;V0.transition={};try{e(!1),t()}finally{R=n,V0.transition=r}}function ja(){return Pe().memoizedState}function ug(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},La(e))Ta(t,n);else if(n=da(e,t,n,r),n!==null){var i=se();Re(n,e,r,i),Ra(n,t,r)}}function gg(e,t,n){var r=ct(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(La(e))Ta(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,De(s,o)){var a=t.interleaved;a===null?(i.next=i,vl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=da(e,t,i,r),n!==null&&(i=se(),Re(n,e,r,i),Ra(n,t,r))}}function La(e){var t=e.alternate;return e===$||t!==null&&t===$}function Ta(e,t){zn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ra(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,el(e,n)}}var Zr={readContext:Ee,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},cg={readContext:Ee,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:_o,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nr(4194308,4,Ca.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ug.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Mo,useDebugValue:Ml,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Mo(!1),t=e[0];return e=ag.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,i=Be();if(I){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),G===null)throw Error(m(349));zt&30||ma(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,_o(ya.bind(null,r,l,e),[e]),r.flags|=2048,Yn(9,ha.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Be(),t=G.identifierPrefix;if(I){var n=He,r=Ve;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dg={readContext:Ee,useCallback:Pa,useContext:Ee,useEffect:Sl,useImperativeHandle:Ea,useInsertionEffect:Ma,useLayoutEffect:_a,useMemo:Na,useReducer:H0,useRef:Sa,useState:function(){return H0(Kn)},useDebugValue:Ml,useDeferredValue:function(e){var t=Pe();return za(t,b.memoizedState,e)},useTransition:function(){var e=H0(Kn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ka,useId:ja,unstable_isNewReconciler:!1},fg={readContext:Ee,useCallback:Pa,useContext:Ee,useEffect:Sl,useImperativeHandle:Ea,useInsertionEffect:Ma,useLayoutEffect:_a,useMemo:Na,useReducer:W0,useRef:Sa,useState:function(){return W0(Kn)},useDebugValue:Ml,useDeferredValue:function(e){var t=Pe();return b===null?t.memoizedState=e:za(t,b.memoizedState,e)},useTransition:function(){var e=W0(Kn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ka,useId:ja,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ei(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var d0={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),i=ct(e),l=We(r,i);l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,i),t!==null&&(Re(t,e,i,r),Er(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),i=ct(e),l=We(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,i),t!==null&&(Re(t,e,i,r),Er(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ct(e),i=We(n,r);i.tag=2,t!=null&&(i.callback=t),t=ut(e,i,r),t!==null&&(Re(t,e,r,n),Er(t,e,r))}};function Co(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(i,l):!0}function Da(e,t,n){var r=!1,i=vt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(i=ve(t)?Pt:re.current,r=t.contextTypes,l=(r=r!=null)?en(e,i):vt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=d0,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Eo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&d0.enqueueReplaceState(t,t.state,null)}function Pi(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},pl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ee(l):(l=ve(t)?Pt:re.current,i.context=en(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ei(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&d0.enqueueReplaceState(i,i.state,null),Yr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=A1(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Q0(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ni(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vg=typeof WeakMap=="function"?WeakMap:Map;function Oa(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Fi=r),Ni(e,t)},n}function Ba(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ni(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ni(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Po(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ng.bind(null,e,t,n),t.then(e,e))}function No(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zo(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var pg=Xe.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?ca(t,null,n,r):nn(t,e.child,n,r)}function jo(e,t,n,r,i){n=n.render;var l=t.ref;return Zt(t,i),r=xl(e,t,n,r,l,i),n=wl(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ye(e,t,i)):(I&&n&&al(t),t.flags|=1,oe(e,t,r,i),t.child)}function Lo(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Ll(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ia(e,t,l,r,i)):(e=Tr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(o,r)&&e.ref===t.ref)return Ye(e,t,i)}return t.flags|=1,e=dt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ia(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if($n(l,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ye(e,t,i)}return zi(e,t,n,r,i)}function Fa(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(bt,ke),ke|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(bt,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,D(bt,ke),ke|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,D(bt,ke),ke|=r;return oe(e,t,i,n),t.child}function Ua(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zi(e,t,n,r,i){var l=ve(n)?Pt:re.current;return l=en(t,l),Zt(t,i),n=xl(e,t,n,r,l,i),r=wl(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ye(e,t,i)):(I&&r&&al(t),t.flags|=1,oe(e,t,n,i),t.child)}function To(e,t,n,r,i){if(ve(n)){var l=!0;Hr(t)}else l=!1;if(Zt(t,i),t.stateNode===null)zr(e,t),Da(t,n,r),Pi(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,g=n.contextType;typeof g=="object"&&g!==null?g=Ee(g):(g=ve(n)?Pt:re.current,g=en(t,g));var v=n.getDerivedStateFromProps,f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==g)&&Eo(t,o,r,g),et=!1;var p=t.memoizedState;o.state=p,Yr(t,r,o,i),a=t.memoizedState,s!==r||p!==a||fe.current||et?(typeof v=="function"&&(Ei(t,n,v,r),a=t.memoizedState),(s=et||Co(t,n,s,r,p,a,g))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=g,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fa(e,t),s=t.memoizedProps,g=t.type===t.elementType?s:ze(t.type,s),o.props=g,f=t.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=ve(n)?Pt:re.current,a=en(t,a));var h=n.getDerivedStateFromProps;(v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==a)&&Eo(t,o,r,a),et=!1,p=t.memoizedState,o.state=p,Yr(t,r,o,i);var y=t.memoizedState;s!==f||p!==y||fe.current||et?(typeof h=="function"&&(Ei(t,n,h,r),y=t.memoizedState),(g=et||Co(t,n,g,r,p,y,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=a,r=g):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ji(e,t,n,r,l,i)}function ji(e,t,n,r,i,l){Ua(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&mo(t,n,!1),Ye(e,t,l);r=t.stateNode,pg.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=nn(t,e.child,null,l),t.child=nn(t,null,s,l)):oe(e,t,s,l),t.memoizedState=r.state,i&&mo(t,n,!0),t.child}function $a(e){var t=e.stateNode;t.pendingContext?ko(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ko(e,t.context,!1),kl(e,t.containerInfo)}function Ro(e,t,n,r,i){return tn(),gl(i),t.flags|=256,oe(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Aa(e,t,n){var r=t.pendingProps,i=U.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(U,i&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=p0(o,r,0,null),e=Et(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ti(n),t.memoizedState=Li,e):_l(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return kg(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=dt(s,l):(l=Et(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Ti(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return l=e.child,e=l.sibling,r=dt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _l(e,t){return t=p0({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&gl(r),nn(t,e.child,null,n),e=_l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kg(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Q0(Error(m(422))),kr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=p0({mode:"visible",children:r.children},i,0,null),l=Et(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&nn(t,e.child,null,o),t.child.memoizedState=Ti(o),t.memoizedState=Li,l);if(!(t.mode&1))return kr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(m(419)),r=Q0(l,r,void 0),kr(e,t,o,r)}if(s=(o&e.childLanes)!==0,de||s){if(r=G,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ke(e,i),Re(r,e,i,-1))}return jl(),r=Q0(Error(m(421))),kr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zg.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,me=at(i.nextSibling),he=t,I=!0,Le=null,e!==null&&(Se[Me++]=Ve,Se[Me++]=He,Se[Me++]=Nt,Ve=e.id,He=e.overflow,Nt=t),t=_l(t,r.children),t.flags|=4096,t)}function Do(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ci(e.return,t,n)}function b0(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Va(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Do(e,n,t);else if(e.tag===19)Do(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),b0(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}b0(t,!0,n,null,l);break;case"together":b0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mg(e,t,n){switch(t.tag){case 3:$a(t),tn();break;case 5:va(t);break;case 1:ve(t.type)&&Hr(t);break;case 4:kl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(br,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Aa(e,t,n):(D(U,U.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Va(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Fa(e,t,n)}return Ye(e,t,n)}var Ha,Ri,Wa,Qa;Ha=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ri=function(){};Wa=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_t(Ue.current);var l=null;switch(n){case"input":i=ti(e,i),r=ti(e,r),l=[];break;case"select":i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),l=[];break;case"textarea":i=ii(e,i),r=ii(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}oi(n,r);var o;n=null;for(g in i)if(!r.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var s=i[g];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Rn.hasOwnProperty(g)?l||(l=[]):(l=l||[]).push(g,null));for(g in r){var a=r[g];if(s=i!=null?i[g]:void 0,r.hasOwnProperty(g)&&a!==s&&(a!=null||s!=null))if(g==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(g,n)),n=a;else g==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(g,a)):g==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(g,""+a):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(g)?(a!=null&&g==="onScroll"&&O("scroll",e),l||s===a||(l=[])):(l=l||[]).push(g,a))}n&&(l=l||[]).push("style",n);var g=l;(t.updateQueue=g)&&(t.flags|=4)}};Qa=function(e,t,n,r){n!==r&&(t.flags|=4)};function hn(e,t){if(!I)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hg(e,t,n){var r=t.pendingProps;switch(ul(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return ve(t.type)&&Vr(),te(t),null;case 3:return r=t.stateNode,rn(),B(fe),B(re),hl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Ai(Le),Le=null))),Ri(e,t),te(t),null;case 5:ml(t);var i=_t(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Wa(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return te(t),null}if(e=_t(Ue.current),vr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ie]=t,r[Hn]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<Mn.length;i++)O(Mn[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Vl(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Wl(r,l),O("invalid",r)}oi(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),i=["children",""+s]):Rn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":lr(r),Hl(r,l,!0);break;case"textarea":lr(r),Ql(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ar)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ys(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ie]=t,e[Hn]=r,Ha(e,t,!1,!1),t.stateNode=e;e:{switch(o=si(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mn.length;i++)O(Mn[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":Vl(e,r),i=ti(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=A({},r,{value:void 0}),O("invalid",e);break;case"textarea":Wl(e,r),i=ii(e,r),O("invalid",e);break;default:i=r}oi(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Ss(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&xs(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Rn.hasOwnProperty(l)?a!=null&&l==="onScroll"&&O("scroll",e):a!=null&&Yi(e,l,a,o))}switch(n){case"input":lr(e),Hl(e,r,!1);break;case"textarea":lr(e),Ql(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Kt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ar)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Qa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=_t(Qn.current),_t(Ue.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ie]=t,(l=r.nodeValue!==n)&&(e=he,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ie]=t,t.stateNode=r}return te(t),null;case 13:if(B(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&me!==null&&t.mode&1&&!(t.flags&128))ua(),tn(),t.flags|=98560,l=!1;else if(l=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(m(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(317));l[Ie]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),l=!1}else Le!==null&&(Ai(Le),Le=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):jl())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return rn(),Ri(e,t),e===null&&An(t.stateNode.containerInfo),te(t),null;case 10:return fl(t.type._context),te(t),null;case 17:return ve(t.type)&&Vr(),te(t),null;case 19:if(B(U),l=t.memoizedState,l===null)return te(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)hn(l,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,hn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}l.tail!==null&&W()>on&&(t.flags|=128,r=!0,hn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!I)return te(t),null}else 2*W()-l.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,hn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=W(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return zl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function yg(e,t){switch(ul(t),t.tag){case 1:return ve(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),B(fe),B(re),hl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ml(t),null;case 13:if(B(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(U),null;case 4:return rn(),null;case 10:return fl(t.type._context),null;case 22:case 23:return zl(),null;case 24:return null;default:return null}}var mr=!1,ne=!1,xg=typeof WeakSet=="function"?WeakSet:Set,S=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Di(e,t,n){try{n()}catch(r){V(e,t,r)}}var Oo=!1;function wg(e,t){if(mi=Fr,e=Gs(),sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,g=0,v=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==l||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++g===i&&(s=o),p===l&&++v===r&&(a=o),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},Fr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,T=y.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?x:ze(t.type,x),T);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(k){V(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=Oo,Oo=!1,y}function jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Di(t,n,l)}i=i.next}while(i!==r)}}function f0(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ba(e){var t=e.alternate;t!==null&&(e.alternate=null,ba(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ie],delete t[Hn],delete t[wi],delete t[rg],delete t[ig])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ka(e){return e.tag===5||e.tag===3||e.tag===4}function Bo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ka(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}var Z=null,je=!1;function Je(e,t,n){for(n=n.child;n!==null;)Ya(e,t,n),n=n.sibling}function Ya(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(l0,n)}catch{}switch(n.tag){case 5:ne||Qt(n,t);case 6:var r=Z,i=je;Z=null,Je(e,t,n),Z=r,je=i,Z!==null&&(je?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(je?(e=Z,n=n.stateNode,e.nodeType===8?U0(e.parentNode,n):e.nodeType===1&&U0(e,n),Fn(e)):U0(Z,n.stateNode));break;case 4:r=Z,i=je,Z=n.stateNode.containerInfo,je=!0,Je(e,t,n),Z=r,je=i;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Di(n,t,o),i=i.next}while(i!==r)}Je(e,t,n);break;case 1:if(!ne&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,Je(e,t,n),ne=r):Je(e,t,n);break;default:Je(e,t,n)}}function Io(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xg),t.forEach(function(r){var i=jg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ne(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Z=s.stateNode,je=!1;break e;case 3:Z=s.stateNode.containerInfo,je=!0;break e;case 4:Z=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(Z===null)throw Error(m(160));Ya(l,o,i),Z=null,je=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(g){V(i,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xa(t,e),t=t.sibling}function Xa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),Oe(e),r&4){try{jn(3,e,e.return),f0(3,e)}catch(x){V(e,e.return,x)}try{jn(5,e,e.return)}catch(x){V(e,e.return,x)}}break;case 1:Ne(t,e),Oe(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(Ne(t,e),Oe(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var i=e.stateNode;try{Dn(i,"")}catch(x){V(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&ms(i,l),si(s,o);var g=si(s,l);for(o=0;o<a.length;o+=2){var v=a[o],f=a[o+1];v==="style"?Ss(i,f):v==="dangerouslySetInnerHTML"?xs(i,f):v==="children"?Dn(i,f):Yi(i,v,f,g)}switch(s){case"input":ni(i,l);break;case"textarea":hs(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?Kt(i,!!l.multiple,h,!1):p!==!!l.multiple&&(l.defaultValue!=null?Kt(i,!!l.multiple,l.defaultValue,!0):Kt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Hn]=l}catch(x){V(e,e.return,x)}}break;case 6:if(Ne(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(m(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){V(e,e.return,x)}}break;case 3:if(Ne(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(x){V(e,e.return,x)}break;case 4:Ne(t,e),Oe(e);break;case 13:Ne(t,e),Oe(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Pl=W())),r&4&&Io(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(g=ne)||v,Ne(t,e),ne=g):Ne(t,e),Oe(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!v&&e.mode&1)for(S=e,v=e.child;v!==null;){for(f=S=v;S!==null;){switch(p=S,h=p.child,p.tag){case 0:case 11:case 14:case 15:jn(4,p,p.return);break;case 1:Qt(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){V(r,n,x)}}break;case 5:Qt(p,p.return);break;case 22:if(p.memoizedState!==null){Uo(f);continue}}h!==null?(h.return=p,S=h):Uo(f)}v=v.sibling}e:for(v=null,f=e;;){if(f.tag===5){if(v===null){v=f;try{i=f.stateNode,g?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ws("display",o))}catch(x){V(e,e.return,x)}}}else if(f.tag===6){if(v===null)try{f.stateNode.nodeValue=g?"":f.memoizedProps}catch(x){V(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;v===f&&(v=null),f=f.return}v===f&&(v=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ne(t,e),Oe(e),r&4&&Io(e);break;case 21:break;default:Ne(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ka(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dn(i,""),r.flags&=-33);var l=Bo(e);Ii(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Bo(e);Bi(e,s,o);break;default:throw Error(m(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sg(e,t,n){S=e,Ga(e)}function Ga(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mr;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||ne;s=mr;var g=ne;if(mr=o,(ne=a)&&!g)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?$o(i):a!==null?(a.return=o,S=a):$o(i);for(;l!==null;)S=l,Ga(l),l=l.sibling;S=i,mr=s,ne=g}Fo(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,S=l):Fo(e)}}function Fo(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||f0(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&So(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}So(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var v=g.memoizedState;if(v!==null){var f=v.dehydrated;f!==null&&Fn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}ne||t.flags&512&&Oi(t)}catch(p){V(t,t.return,p)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Uo(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function $o(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{f0(4,t)}catch(a){V(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){V(t,i,a)}}var l=t.return;try{Oi(t)}catch(a){V(t,l,a)}break;case 5:var o=t.return;try{Oi(t)}catch(a){V(t,o,a)}}}catch(a){V(t,t.return,a)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Mg=Math.ceil,Jr=Xe.ReactCurrentDispatcher,Cl=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,L=0,G=null,Q=null,J=0,ke=0,bt=kt(0),K=0,Xn=null,jt=0,v0=0,El=0,Ln=null,ce=null,Pl=0,on=1/0,$e=null,qr=!1,Fi=null,gt=null,hr=!1,it=null,e0=0,Tn=0,Ui=null,jr=-1,Lr=0;function se(){return L&6?W():jr!==-1?jr:jr=W()}function ct(e){return e.mode&1?L&2&&J!==0?J&-J:og.transition!==null?(Lr===0&&(Lr=Ds()),Lr):(e=R,e!==0||(e=window.event,e=e===void 0?16:As(e.type)),e):1}function Re(e,t,n,r){if(50<Tn)throw Tn=0,Ui=null,Error(m(185));Zn(e,n,r),(!(L&2)||e!==G)&&(e===G&&(!(L&2)&&(v0|=n),K===4&&nt(e,J)),pe(e,r),n===1&&L===0&&!(t.mode&1)&&(on=W()+500,g0&&mt()))}function pe(e,t){var n=e.callbackNode;ou(e,t);var r=Ir(e,e===G?J:0);if(r===0)n!==null&&Yl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yl(n),t===1)e.tag===0?lg(Ao.bind(null,e)):oa(Ao.bind(null,e)),tg(function(){!(L&6)&&mt()}),n=null;else{switch(Os(r)){case 1:n=qi;break;case 4:n=Ts;break;case 16:n=Br;break;case 536870912:n=Rs;break;default:n=Br}n=i1(n,Za.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Za(e,t){if(jr=-1,Lr=0,L&6)throw Error(m(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Ir(e,e===G?J:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=t0(e,r);else{t=r;var i=L;L|=2;var l=qa();(G!==e||J!==t)&&($e=null,on=W()+500,Ct(e,t));do try{Eg();break}catch(s){Ja(e,s)}while(!0);dl(),Jr.current=l,L=i,Q!==null?t=0:(G=null,J=0,t=K)}if(t!==0){if(t===2&&(i=di(e),i!==0&&(r=i,t=$i(e,i))),t===1)throw n=Xn,Ct(e,0),nt(e,r),pe(e,W()),n;if(t===6)nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!_g(i)&&(t=t0(e,r),t===2&&(l=di(e),l!==0&&(r=l,t=$i(e,l))),t===1))throw n=Xn,Ct(e,0),nt(e,r),pe(e,W()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:wt(e,ce,$e);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Pl+500-W(),10<t)){if(Ir(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xi(wt.bind(null,e,ce,$e),t);break}wt(e,ce,$e);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Te(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mg(r/1960))-r,10<r){e.timeoutHandle=xi(wt.bind(null,e,ce,$e),r);break}wt(e,ce,$e);break;case 5:wt(e,ce,$e);break;default:throw Error(m(329))}}}return pe(e,W()),e.callbackNode===n?Za.bind(null,e):null}function $i(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=t0(e,t),e!==2&&(t=ce,ce=n,t!==null&&Ai(t)),e}function Ai(e){ce===null?ce=e:ce.push.apply(ce,e)}function _g(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!De(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~El,t&=~v0,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function Ao(e){if(L&6)throw Error(m(327));Jt();var t=Ir(e,0);if(!(t&1))return pe(e,W()),null;var n=t0(e,t);if(e.tag!==0&&n===2){var r=di(e);r!==0&&(t=r,n=$i(e,r))}if(n===1)throw n=Xn,Ct(e,0),nt(e,t),pe(e,W()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ce,$e),pe(e,W()),null}function Nl(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(on=W()+500,g0&&mt())}}function Lt(e){it!==null&&it.tag===0&&!(L&6)&&Jt();var t=L;L|=1;var n=Ce.transition,r=R;try{if(Ce.transition=null,R=1,e)return e()}finally{R=r,Ce.transition=n,L=t,!(L&6)&&mt()}}function zl(){ke=bt.current,B(bt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,eg(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:rn(),B(fe),B(re),hl();break;case 5:ml(r);break;case 4:rn();break;case 13:B(U);break;case 19:B(U);break;case 10:fl(r.type._context);break;case 22:case 23:zl()}n=n.return}if(G=e,Q=e=dt(e.current,null),J=ke=t,K=0,Xn=null,El=v0=jt=0,ce=Ln=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Mt=null}return e}function Ja(e,t){do{var n=Q;try{if(dl(),Pr.current=Zr,Gr){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gr=!1}if(zt=0,X=b=$=null,zn=!1,bn=0,Cl.current=null,n===null||n.return===null){K=1,Xn=t,Q=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=J,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var g=a,v=s,f=v.tag;if(!(v.mode&1)&&(f===0||f===11||f===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=No(o);if(h!==null){h.flags&=-257,zo(h,o,s,l,t),h.mode&1&&Po(l,g,t),t=h,a=g;var y=t.updateQueue;if(y===null){var x=new Set;x.add(a),t.updateQueue=x}else y.add(a);break e}else{if(!(t&1)){Po(l,g,t),jl();break e}a=Error(m(426))}}else if(I&&s.mode&1){var T=No(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),zo(T,o,s,l,t),gl(ln(a,s));break e}}l=a=ln(a,s),K!==4&&(K=2),Ln===null?Ln=[l]:Ln.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var c=Oa(l,a,t);wo(l,c);break e;case 1:s=a;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gt===null||!gt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=Ba(l,s,t);wo(l,k);break e}}l=l.return}while(l!==null)}t1(n)}catch(w){t=w,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function qa(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function jl(){(K===0||K===3||K===2)&&(K=4),G===null||!(jt&268435455)&&!(v0&268435455)||nt(G,J)}function t0(e,t){var n=L;L|=2;var r=qa();(G!==e||J!==t)&&($e=null,Ct(e,t));do try{Cg();break}catch(i){Ja(e,i)}while(!0);if(dl(),L=n,Jr.current=r,Q!==null)throw Error(m(261));return G=null,J=0,K}function Cg(){for(;Q!==null;)e1(Q)}function Eg(){for(;Q!==null&&!Z1();)e1(Q)}function e1(e){var t=r1(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?t1(e):Q=t,Cl.current=null}function t1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yg(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(n=hg(n,t,ke),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);K===0&&(K=5)}function wt(e,t,n){var r=R,i=Ce.transition;try{Ce.transition=null,R=1,Pg(e,t,n,r)}finally{Ce.transition=i,R=r}return null}function Pg(e,t,n,r){do Jt();while(it!==null);if(L&6)throw Error(m(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(su(e,l),e===G&&(Q=G=null,J=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hr||(hr=!0,i1(Br,function(){return Jt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ce.transition,Ce.transition=null;var o=R;R=1;var s=L;L|=4,Cl.current=null,wg(e,n),Xa(n,e),Ku(hi),Fr=!!mi,hi=mi=null,e.current=n,Sg(n),J1(),L=s,R=o,Ce.transition=l}else e.current=n;if(hr&&(hr=!1,it=e,e0=i),l=e.pendingLanes,l===0&&(gt=null),tu(n.stateNode),pe(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qr)throw qr=!1,e=Fi,Fi=null,e;return e0&1&&e.tag!==0&&Jt(),l=e.pendingLanes,l&1?e===Ui?Tn++:(Tn=0,Ui=e):Tn=0,mt(),null}function Jt(){if(it!==null){var e=Os(e0),t=Ce.transition,n=R;try{if(Ce.transition=null,R=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,e0=0,L&6)throw Error(m(331));var i=L;for(L|=4,S=e.current;S!==null;){var l=S,o=l.child;if(S.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var g=s[a];for(S=g;S!==null;){var v=S;switch(v.tag){case 0:case 11:case 15:jn(8,v,l)}var f=v.child;if(f!==null)f.return=v,S=f;else for(;S!==null;){v=S;var p=v.sibling,h=v.return;if(ba(v),v===g){S=null;break}if(p!==null){p.return=h,S=p;break}S=h}}}var y=l.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}S=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,S=o;else e:for(;S!==null;){if(l=S,l.flags&2048)switch(l.tag){case 0:case 11:case 15:jn(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,S=c;break e}S=l.return}}var u=e.current;for(S=u;S!==null;){o=S;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,S=d;else e:for(o=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:f0(9,s)}}catch(w){V(s,s.return,w)}if(s===o){S=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,S=k;break e}S=s.return}}if(L=i,mt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(l0,e)}catch{}r=!0}return r}finally{R=n,Ce.transition=t}}return!1}function Vo(e,t,n){t=ln(n,t),t=Oa(e,t,1),e=ut(e,t,1),t=se(),e!==null&&(Zn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Vo(e,e,n);else for(;t!==null;){if(t.tag===3){Vo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=ln(n,e),e=Ba(t,e,1),t=ut(t,e,1),e=se(),t!==null&&(Zn(t,1,e),pe(t,e));break}}t=t.return}}function Ng(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,G===e&&(J&n)===n&&(K===4||K===3&&(J&130023424)===J&&500>W()-Pl?Ct(e,0):El|=n),pe(e,t)}function n1(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=se();e=Ke(e,t),e!==null&&(Zn(e,t,n),pe(e,n))}function zg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),n1(e,n)}function jg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),n1(e,n)}var r1;r1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,mg(e,t,n);de=!!(e.flags&131072)}else de=!1,I&&t.flags&1048576&&sa(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var i=en(t,re.current);Zt(t,n),i=xl(null,t,r,e,i,n);var l=wl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(l=!0,Hr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pl(t),i.updater=d0,t.stateNode=i,i._reactInternals=t,Pi(t,r,e,n),t=ji(null,t,r,!0,l,n)):(t.tag=0,I&&l&&al(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Tg(r),e=ze(r,e),i){case 0:t=zi(null,t,r,e,n);break e;case 1:t=To(null,t,r,e,n);break e;case 11:t=jo(null,t,r,e,n);break e;case 14:t=Lo(null,t,r,ze(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),zi(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),To(e,t,r,i,n);case 3:e:{if($a(t),e===null)throw Error(m(387));r=t.pendingProps,l=t.memoizedState,i=l.element,fa(e,t),Yr(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=ln(Error(m(423)),t),t=Ro(e,t,r,n,i);break e}else if(r!==i){i=ln(Error(m(424)),t),t=Ro(e,t,r,n,i);break e}else for(me=at(t.stateNode.containerInfo.firstChild),he=t,I=!0,Le=null,n=ca(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===i){t=Ye(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return va(t),e===null&&_i(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,yi(r,i)?o=null:l!==null&&yi(r,l)&&(t.flags|=32),Ua(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&_i(t),null;case 13:return Aa(e,t,n);case 4:return kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),jo(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,D(br,r._currentValue),r._currentValue=o,l!==null)if(De(l.value,o)){if(l.children===i.children&&!fe.current){t=Ye(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=We(-1,n&-n),a.tag=2;var g=l.updateQueue;if(g!==null){g=g.shared;var v=g.pending;v===null?a.next=a:(a.next=v.next,v.next=a),g.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ci(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(m(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ci(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zt(t,n),i=Ee(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),Lo(e,t,r,i,n);case 15:return Ia(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),zr(e,t),t.tag=1,ve(r)?(e=!0,Hr(t)):e=!1,Zt(t,n),Da(t,r,i),Pi(t,r,i,n),ji(null,t,r,!0,e,n);case 19:return Va(e,t,n);case 22:return Fa(e,t,n)}throw Error(m(156,t.tag))};function i1(e,t){return Ls(e,t)}function Lg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new Lg(e,t,n,r)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tg(e){if(typeof e=="function")return Ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Zi)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Ll(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bt:return Et(n.children,i,l,t);case Xi:o=8,i|=8;break;case Z0:return e=_e(12,n,t,i|2),e.elementType=Z0,e.lanes=l,e;case J0:return e=_e(13,n,t,i),e.elementType=J0,e.lanes=l,e;case q0:return e=_e(19,n,t,i),e.elementType=q0,e.lanes=l,e;case vs:return p0(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ds:o=10;break e;case fs:o=9;break e;case Gi:o=11;break e;case Zi:o=14;break e;case qe:o=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=_e(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Et(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function p0(e,t,n,r){return e=_e(22,e,r,t),e.elementType=vs,e.lanes=n,e.stateNode={isHidden:!1},e}function K0(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function Y0(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=N0(0),this.expirationTimes=N0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=N0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tl(e,t,n,r,i,l,o,s,a){return e=new Rg(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(l),e}function Dg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function l1(e){if(!e)return vt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(ve(n))return la(e,n,t)}return t}function o1(e,t,n,r,i,l,o,s,a){return e=Tl(n,r,!0,e,i,l,o,s,a),e.context=l1(null),n=e.current,r=se(),i=ct(n),l=We(r,i),l.callback=t??null,ut(n,l,i),e.current.lanes=i,Zn(e,i,r),pe(e,r),e}function k0(e,t,n,r){var i=t.current,l=se(),o=ct(i);return n=l1(n),t.context===null?t.context=n:t.pendingContext=n,t=We(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(i,t,o),e!==null&&(Re(e,i,o,l),Er(e,i,o)),o}function n0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ho(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rl(e,t){Ho(e,t),(e=e.alternate)&&Ho(e,t)}var s1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dl(e){this._internalRoot=e}m0.prototype.render=Dl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));k0(e,t,null,null)};m0.prototype.unmount=Dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){k0(null,e,null,null)}),t[be]=null}};function m0(e){this._internalRoot=e}m0.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&$s(e)}};function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wo(){}function Og(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var g=n0(o);l.call(g)}}var o=o1(t,r,e,0,null,!1,!1,"",Wo);return e._reactRootContainer=o,e[be]=o.current,An(e.nodeType===8?e.parentNode:e),Lt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var g=n0(a);s.call(g)}}var a=Tl(e,0,!1,null,null,!1,!1,"",Wo);return e._reactRootContainer=a,e[be]=a.current,An(e.nodeType===8?e.parentNode:e),Lt(function(){k0(t,a,n,r)}),a}function y0(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=n0(o);s.call(a)}}k0(t,o,e,i)}else o=Og(n,t,e,i,r);return n0(o)}Bs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(el(t,n|1),pe(t,W()),!(L&6)&&(on=W()+500,mt()))}break;case 13:Lt(function(){var r=Ke(e,1);if(r!==null){var i=se();Re(r,e,1,i)}}),Rl(e,1)}};tl=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=se();Re(t,e,134217728,n)}Rl(e,134217728)}};Is=function(e){if(e.tag===13){var t=ct(e),n=Ke(e,t);if(n!==null){var r=se();Re(n,e,t,r)}Rl(e,t)}};Fs=function(){return R};Us=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};ui=function(e,t,n){switch(t){case"input":if(ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=u0(r);if(!i)throw Error(m(90));ks(r),ni(r,i)}}}break;case"textarea":hs(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Cs=Nl;Es=Lt;var Bg={usingClientEntryPoint:!1,Events:[qn,$t,u0,Ms,_s,Nl]},yn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ig={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zs(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{l0=yr.inject(Ig),Fe=yr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bg;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ol(t))throw Error(m(200));return Dg(e,t,null,n)};xe.createRoot=function(e,t){if(!Ol(e))throw Error(m(299));var n=!1,r="",i=s1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tl(e,1,!1,null,null,n,!1,r,i),e[be]=t.current,An(e.nodeType===8?e.parentNode:e),new Dl(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=zs(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Lt(e)};xe.hydrate=function(e,t,n){if(!h0(t))throw Error(m(200));return y0(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Ol(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=s1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=o1(t,null,e,1,n??null,i,!1,l,o),e[be]=t.current,An(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new m0(t)};xe.render=function(e,t,n){if(!h0(t))throw Error(m(200));return y0(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!h0(e))throw Error(m(40));return e._reactRootContainer?(Lt(function(){y0(null,null,e,!1,function(){e._reactRootContainer=null,e[be]=null})}),!0):!1};xe.unstable_batchedUpdates=Nl;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!h0(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return y0(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function a1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a1)}catch(e){console.error(e)}}a1(),as.exports=xe;var Fg=as.exports,Qo=Fg;X0.createRoot=Qo.createRoot,X0.hydrateRoot=Qo.hydrateRoot;function Ug(e){return Array.from(e.querySelectorAll("path"),t=>Ag($g(t.getAttribute("d")||"")))}function $g(e){const t=e.match(/([MmLlCcZz])([^MmLlCcZz]*)/g)||[];if(!t.length)return[];const n=[];let r={x:0,y:0};const i=/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;for(const l of t){const o=l[0],s=o===o.toLowerCase(),a=o.toUpperCase(),v=(l.slice(1).trim().match(i)||[]).map(Number);switch(a){case"M":if(v.length<2)break;{let f=s?r.x+v[0]:v[0],p=s?r.y+v[1]:v[1];r={x:f,y:p},n.push({type:"M",points:[{x:f,y:p}]});for(let h=2;h<v.length&&!(h+1>=v.length);h+=2)f=s?r.x+v[h]:v[h],p=s?r.y+v[h+1]:v[h+1],n.push({type:"L",points:[{x:r.x,y:r.y},{x:f,y:p}]}),r={x:f,y:p}}break;case"C":for(let f=0;f<v.length&&!(f+5>=v.length);f+=6){const p=s?r.x+v[f]:v[f],h=s?r.y+v[f+1]:v[f+1],y=s?r.x+v[f+2]:v[f+2],x=s?r.y+v[f+3]:v[f+3],T=s?r.x+v[f+4]:v[f+4],c=s?r.y+v[f+5]:v[f+5];n.push({type:"C",points:[{x:r.x,y:r.y},{x:p,y:h},{x:y,y:x},{x:T,y:c}]}),r={x:T,y:c}}break;case"L":break;case"Z":break;default:console.warn("Unsupported:",o);break}}return n}function Ag(e,t=20){const n=[];let r=!1;for(const i of e)switch(i.type){case"M":{n.push(i.points[0]),r=!0;break}case"L":{r||(n.push(i.points[0]),r=!0),n.push(i.points[1]);break}case"C":{const l=i.points[0],o=i.points[1],s=i.points[2],a=i.points[3];r||(n.push(l),r=!0);const g=Vg(l,o,s,a,t);n.push(...g.slice(1));break}case"Z":{n.push(i.points[1]);break}}return n}function Vg(e,t,n,r,i){const l=[];for(let o=0;o<=i;o++){const s=o/i,a=bo(e.x,t.x,n.x,r.x,s),g=bo(e.y,t.y,n.y,r.y,s);l.push({x:a,y:g})}return l}function bo(e,t,n,r,i){const l=1-i;return l*l*l*e+3*l*l*i*t+3*l*i*i*n+i*i*i*r}function Ko(e){const t=e.map(v=>v.x),n=e.map(v=>v.y),r=Math.min(...t),i=Math.max(...t),l=Math.min(...n),o=Math.max(...n),s=(r+i)/2,a=(l+o)/2,g=Math.max(i-r,o-l)||1;return{centerX:s,centerY:a,scale:g}}function Yo(e,t){return e.map(n=>({x:(n.x-t.centerX)/t.scale,y:(n.y-t.centerY)/t.scale}))}function Xo(e,t){if(e.length<2)return[...e];const n=[];n.push(e[0]);let r=0;for(let o=1;o<e.length;o++)r+=Go(e[o-1],e[o]);const i=r/(t-1);let l=0;for(let o=1;o<e.length;o++){const s=Go(e[o-1],e[o]);l+=s,l>=i&&(n.push(e[o]),l=0)}for(;n.length<t;)n.push(e[e.length-1]);return n.slice(0,t)}function Go(e,t){return Math.hypot(t.x-e.x,t.y-e.y)}function Hg(e,t,n){const r=e.globalAlpha,i=e.strokeStyle;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.globalAlpha=.4,e.font="16px sans-serif",t.forEach((l,o)=>{e.lineWidth=l.score<.7?4:1,e.strokeStyle="blue",e.beginPath(),l.userResampled.forEach((v,f)=>{const{cx:p,cy:h}=r0(v,n);f===0?e.moveTo(p,h):e.lineTo(p,h)}),e.stroke();const s=l.userResampled[0],{cx:a,cy:g}=r0(s,n);e.fillStyle="blue",e.fillText(`${o+1}`,a+5,g-5)}),e.globalAlpha=r,e.strokeStyle=i}function r0(e,t){const n=t.scale,r=e.x*n+t.centerX,i=e.y*n+t.centerY;return{cx:r,cy:i}}function Wg(e,t){const n=e.length,r=t.length,i=Array.from({length:n+1},()=>Array(r+1).fill(1/0));i[0][0]=0;for(let l=1;l<=n;l++)for(let o=1;o<=r;o++){const s=Math.hypot(e[l-1].x-t[o-1].x,e[l-1].y-t[o-1].y);i[l][o]=s+Math.min(i[l-1][o],i[l][o-1],i[l-1][o-1])}return i[n][r]}function Qg(e,t){if(t.length!==e.length)throw new Error("The number of strokes does not match");const n=[];e.forEach(f=>n.push(...f));const r=Ko(n),i=[];t.forEach(f=>i.push(...f));const l=Ko(i);let o=0;const s=[],a=[];for(let f=0;f<e.length;f++){const p=Yo(e[f],r),h=Yo(t[f],l),y=Xo(p,200),x=Xo(h,200),T=Wg(y,x),c=Math.max(y.length,x.length),u=Math.max(0,1-T/c);o+=u,a.push(u),s.push({score:u,sampleResampled:y,userResampled:x})}const g=o/e.length,v=(g*100).toFixed(2);return{scores:a,avgScore:g,percent:v,strokeResults:s,normParamsUser:l}}class bg{constructor(t){cn(this,"ctx");cn(this,"isDrawing");cn(this,"currentStroke");cn(this,"userStrokes");this.canvas=t;const n=t.getContext("2d");if(!n)throw new Error("Failed to get 2D context");this.ctx=n,this.isDrawing=!1,this.currentStroke=[],this.userStrokes=[],this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("mousedown",t=>{this.isDrawing=!0,this.currentStroke=[],this.beginStroke(t)}),this.canvas.addEventListener("mousemove",t=>{this.isDrawing&&this.drawStroke(t)}),this.canvas.addEventListener("mouseup",()=>this.endStroke()),this.canvas.addEventListener("mouseleave",()=>this.endStroke()),this.canvas.addEventListener("touchstart",t=>{t.preventDefault(),this.isDrawing=!0,this.currentStroke=[];const n=t.touches[0],r=new MouseEvent("mousedown",{clientX:n.clientX,clientY:n.clientY,altKey:!1,ctrlKey:!1,metaKey:!1,shiftKey:!1,bubbles:!0,cancelable:!0,view:window});this.beginStroke(r)}),this.canvas.addEventListener("touchmove",t=>{if(t.preventDefault(),this.isDrawing){const n=t.touches[0],r=new MouseEvent("mousemove",{clientX:n.clientX,clientY:n.clientY,altKey:!1,ctrlKey:!1,metaKey:!1,shiftKey:!1,bubbles:!0,cancelable:!0,view:window});this.drawStroke(r)}}),this.canvas.addEventListener("touchend",()=>this.endStroke())}beginStroke(t){const{x:n,y:r}=this.getCanvasCoord(t);this.ctx.beginPath(),this.ctx.moveTo(n,r),this.currentStroke.push({x:n,y:r})}drawStroke(t){const{x:n,y:r}=this.getCanvasCoord(t);this.ctx.lineTo(n,r),this.ctx.stroke(),this.currentStroke.push({x:n,y:r})}endStroke(){this.isDrawing&&(this.isDrawing=!1,this.ctx.closePath(),this.currentStroke.length>2&&this.userStrokes.push(this.currentStroke))}getCanvasCoord(t){const n=this.canvas.getBoundingClientRect();return{x:(t instanceof MouseEvent?t.clientX:t.touches[0].clientX)-n.left,y:(t instanceof MouseEvent?t.clientY:t.touches[0].clientY)-n.top}}clearStrokes(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.userStrokes=[],this.currentStroke=[],this.isDrawing=!1}getStrokes(){return this.userStrokes}getCanvasContext(){return this.ctx}}function Kg(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.globalAlpha=.4,e.font="16px sans-serif",t.forEach((r,i)=>{e.lineWidth=r.score<.7?4:1,e.beginPath(),e.strokeStyle="red",r.sampleResampled.forEach((a,g)=>{const{cx:v,cy:f}=r0(a,n);g===0?e.moveTo(v,f):e.lineTo(v,f)}),e.stroke();const l=r.sampleResampled[0],{cx:o,cy:s}=r0(l,n);e.fillStyle="red",e.fillText(`${i+1}`,o+5,s-5)}),e.globalAlpha=1}const xr=[{sentence:"<ruby>一<rt>ひと</rt></ruby>つのりんごを<ruby>買<rt>か</rt></ruby>いました。",target:"一",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e00" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e00" kvg:element="一" kvg:radical="general">
	<path id="kvg:04e00-s1" kvg:type="㇐" d="M11,54.25c3.19,0.62,6.25,0.75,9.73,0.5c20.64-1.5,50.39-5.12,68.58-5.24c3.6-0.02,5.77,0.24,7.57,0.49"/>
</g>
</g>
<g id="kvg:StrokeNumbers_04e00" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 4.25 54.13)">1</text>
</g>
</svg>
`},{sentence:"<ruby>右<rt>みぎ</rt></ruby>にまがってください。",target:"右",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_053f3" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:053f3" kvg:element="右">
	<path id="kvg:053f3-s1" kvg:type="㇒" d="M53.5,21.5c0.62,1.12,0.69,2.23,0.25,4C49.62,42,39.5,61,25.25,74.25"/>
	<path id="kvg:053f3-s2" kvg:type="㇐" d="M13,42.15c1.9,0.56,5.9,0.52,7.79,0.34c23.41-2.24,49.76-5.74,67.67-6.3c3.24-0.1,6.45,0.31,9.17,0.81"/>
	<g id="kvg:053f3-g1" kvg:element="口" kvg:radical="general">
		<path id="kvg:053f3-s3" kvg:type="㇑" d="M41.75,66.5c0.75,0.75,1.35,1.93,1.54,2.95c0.94,5,2.38,16.66,3.07,22.76c0.24,2.15,0.39,2.8,0.39,3.54"/>
		<path id="kvg:053f3-s4" kvg:type="㇕b" d="M43.25,68c5.25-0.5,29.75-3.25,37-3.75c1.75-0.12,3.24,1.52,3,2.75c-1,5.12-3.38,18-4.5,23.25"/>
		<path id="kvg:053f3-s5" kvg:type="㇐b" d="M47,93.25c5.79-0.2,19.51-1.58,28.25-2.23c2.21-0.17,4.18-0.27,5.75-0.27"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_053f3" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 47 20)">1</text>
	<text transform="matrix(1 0 0 1 8.25 40)">2</text>
	<text transform="matrix(1 0 0 1 37.25 78.63)">3</text>
	<text transform="matrix(1 0 0 1 45.75 64.50)">4</text>
	<text transform="matrix(1 0 0 1 51.75 89.43)">5</text>
</g>
</svg>
`},{sentence:"<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています。",target:"雨",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_096e8" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:096e8" kvg:element="雨" kvg:radical="general">
	<path id="kvg:096e8-s1" kvg:type="㇐" d="M25.75,22.37c1.87,0.4,4.47,0.62,6.32,0.4c11.68-1.39,28.28-3.77,41.25-4.64c2.49-0.17,4.37-0.12,7.18,0.28"/>
	<path id="kvg:096e8-s2" kvg:type="㇑" d="M15.5,41.25c1.25,1.5,1.66,3.26,1.89,5.19c1.24,10.69,2.19,26.61,2.66,36.31c0.13,2.7,0.2,5,0.2,6"/>
	<path id="kvg:096e8-s3" kvg:type="㇆a" d="M18.25,44.25c1.42-0.09,62.76-5.33,69.5-6c2.5-0.25,4.61,1,4.5,3.75c-0.5,12.75-1.77,28.11-6,44.75c-1.88,7.38-5.38,1.88-8.5-1.25"/>
	<path id="kvg:096e8-s4" kvg:type="㇑" d="M52.25,23.5C53.31,24.56,54,26.25,54,28c0,0.82-0.25,37.8-0.43,53c-0.04,3.43-0.07,5.74-0.07,6.25"/>
	<path id="kvg:096e8-s5" kvg:type="㇔" d="M31,53.5c4.21,1.24,8.95,3.94,11.25,6"/>
	<path id="kvg:096e8-s6" kvg:type="㇔" d="M30.5,68.75c3.8,1.26,9.68,5.89,11.75,8"/>
	<path id="kvg:096e8-s7" kvg:type="㇔" d="M66.88,48.88c4.98,1.99,10.63,5.97,12.62,7.62"/>
	<path id="kvg:096e8-s8" kvg:type="㇔" d="M67.25,66.5c2.75,1,9,5.5,11,7.75"/>
</g>
</g>
<g id="kvg:StrokeNumbers_096e8" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 18.75 22.63)">1</text>
	<text transform="matrix(1 0 0 1 9.50 48.50)">2</text>
	<text transform="matrix(1 0 0 1 21.50 40.50)">3</text>
	<text transform="matrix(1 0 0 1 45.50 31.25)">4</text>
	<text transform="matrix(1 0 0 1 23.25 56.25)">5</text>
	<text transform="matrix(1 0 0 1 23.00 70.75)">6</text>
	<text transform="matrix(1 0 0 1 59.00 51.50)">7</text>
	<text transform="matrix(1 0 0 1 58.50 66.25)">8</text>
</g>
</svg>
`},{sentence:"<ruby>円<rt>えん</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",target:"円",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05186" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05186" kvg:element="円">
	<g id="kvg:05186-g1" kvg:element="冂" kvg:radical="general">
		<path id="kvg:05186-s1" kvg:type="㇑" d="M21.75,19.8c0.91,0.91,1.47,3.23,1.5,5.45c0.2,13.9,0.03,47.69,0.03,62.5c0,2-0.03,4.99-0.03,6"/>
		<path id="kvg:05186-s2" kvg:type="㇆a" d="M24.06,21.56c15.07-1.68,49.46-5.58,57.92-6.31c2.9-0.25,4.78,1.88,4.78,4.27c0,13.48,0,53.21,0,67.48c0,9.75-4.25,6.5-8.5,1.5"/>
	</g>
	<g id="kvg:05186-g2" kvg:phon="員V">
		<path id="kvg:05186-s3" kvg:type="㇑a" d="M52.25,20.75c0.88,0.88,1.5,2,1.5,3.71c0,6.76,0,27.54,0,31.04"/>
		<path id="kvg:05186-s4" kvg:type="㇐a" d="M24.75,59.75c14.62-1.75,43-4.25,60.5-5.25"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_05186" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 16.50 28.63)">1</text>
	<text transform="matrix(1 0 0 1 24.75 17.50)">2</text>
	<text transform="matrix(1 0 0 1 45.50 29.50)">3</text>
	<text transform="matrix(1 0 0 1 28.50 56.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>王<rt>おう</rt></ruby>さまのお<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きました。",target:"王",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0738b" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0738b" kvg:element="王">
	<g id="kvg:0738b-g1" kvg:element="王" kvg:original="玉" kvg:partial="true" kvg:radical="general">
		<path id="kvg:0738b-s1" kvg:type="㇐" d="M29.5,21.22c2.7,0.62,5.55,0.08,8.24-0.28c10.59-1.42,22.63-2.81,33.26-3.79c3.01-0.27,6.3-0.55,9.25,0.35"/>
		<path id="kvg:0738b-s2" kvg:type="㇑a" d="M52.4,22c1.92,2.4,1.92,3.83,1.92,5.75c0,12.13-0.02,57.7-0.02,59.75"/>
		<path id="kvg:0738b-s3" kvg:type="㇐" d="M29.25,55c2.62,0.49,5.24,0.3,7.87,0.08c10.32-0.87,22.57-2.65,34.75-3.65c2.95-0.24,5.81-0.27,8.76,0.07"/>
		<path id="kvg:0738b-s4" kvg:type="㇐" d="M13.75,90.99c4.12,0.7,8.14,0.15,12.25-0.29c17.42-1.86,39.2-3.8,59.5-4.61c3.47-0.14,6.86-0.25,10.25,0.65"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_0738b" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 20.75 22.13)">1</text>
	<text transform="matrix(1 0 0 1 45.50 31.50)">2</text>
	<text transform="matrix(1 0 0 1 21.00 55.18)">3</text>
	<text transform="matrix(1 0 0 1 4.50 91.18)">4</text>
</g>
</svg>
`},{sentence:"<ruby>音<rt>おと</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいですね。",target:"音",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_097f3" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:097f3" kvg:element="音" kvg:radical="general">
	<g id="kvg:097f3-g1" kvg:element="立" kvg:position="top">
		<g id="kvg:097f3-g2" kvg:element="亠" kvg:position="top">
			<path id="kvg:097f3-s1" kvg:type="㇑a" d="M52.97,12.5c0.77,0.77,1.62,2.12,1.62,3.64c0,3.86-0.09,4.61-0.09,9.17"/>
			<path id="kvg:097f3-s2" kvg:type="㇐" d="M29.12,28c1.5,0.5,2.75,0.62,4.61,0.42c11.39-1.29,25.05-3.48,38.89-4.79c2.63-0.25,5.63-0.25,7.38,0.12"/>
		</g>
		<g id="kvg:097f3-g3" kvg:position="bottom">
			<path id="kvg:097f3-s3" kvg:type="㇔" d="M37.12,35.38c4.15,3.73,5.01,7.31,5.6,9.93"/>
			<path id="kvg:097f3-s4" kvg:type="㇒" d="M67.79,27.5c0.46,0.9,0.57,2.02,0.23,3.14c-1.33,4.34-3.46,10.57-4.64,12.99"/>
			<path id="kvg:097f3-s5" kvg:type="㇐" d="M12.75,50.5c3.65,0.66,7.11,0.39,10.76-0.01c20.16-2.21,40.45-4.53,63.37-5.41c3.4-0.13,7.17-0.48,10.5,0.47"/>
		</g>
	</g>
	<g id="kvg:097f3-g4" kvg:element="日" kvg:position="bottom">
		<path id="kvg:097f3-s6" kvg:type="㇑" d="M34.55,59.11c0.58,0.74,1.08,2.24,1.08,3.25c0,1.02,0.12,28.46,0.12,28.97c0,0.51,0,2.04,0,3.54"/>
		<path id="kvg:097f3-s7" kvg:type="㇕a" d="M36.1,60.79c9.52-1.16,26.02-3.04,32.08-3.68c2.95-0.31,4.26,0.27,4.26,3.22c0,0.98-0.11,17.98-0.17,27.68c-0.02,3.04-0.03,5.36-0.03,6.25"/>
		<path id="kvg:097f3-s8" kvg:type="㇐a" d="M36.69,74.75c5.44-0.5,29.72-2.64,34.74-2.85"/>
		<path id="kvg:097f3-s9" kvg:type="㇐a" d="M37.11,90.41c6.58-0.27,25.43-2.25,33.94-2.6"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_097f3" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 44.50 13.50)">1</text>
	<text transform="matrix(1 0 0 1 22.50 30.50)">2</text>
	<text transform="matrix(1 0 0 1 30.50 40.50)">3</text>
	<text transform="matrix(1 0 0 1 59.50 34.50)">4</text>
	<text transform="matrix(1 0 0 1 5.50 53.50)">5</text>
	<text transform="matrix(1 0 0 1 28.50 67.63)">6</text>
	<text transform="matrix(1 0 0 1 37.50 58.63)">7</text>
	<text transform="matrix(1 0 0 1 40.50 70.63)">8</text>
	<text transform="matrix(1 0 0 1 40.50 87.50)">9</text>
</g>
</svg>
`},{sentence:"<ruby>下<rt>した</rt></ruby>をむいてください。",target:"下",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e0b" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e0b" kvg:element="下">
	<g id="kvg:04e0b-g1" kvg:element="一" kvg:radical="general">
		<path id="kvg:04e0b-s1" kvg:type="㇐" d="M13.25,22.5c0.94,0.23,5.18,0.96,7.74,0.75c17.87-1.5,46.54-4.75,66.38-4.75c2.92,0,6.42,0.75,7.88,1.25"/>
	</g>
	<g id="kvg:04e0b-g2" kvg:element="卜" kvg:variant="true" kvg:original="ト">
		<path id="kvg:04e0b-s2" kvg:type="㇑" d="M52.97,23.25c0.93,1.07,1.56,2.75,1.56,5.3c0,8.65-0.2,39.42-0.27,57.2c-0.02,3.86-0.02,5.89-0.02,8.25"/>
		<path id="kvg:04e0b-s3" kvg:type="㇔" d="M67.83,37.17C72.75,39.5,79.88,47.62,82,52.12"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04e0b" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 6.50 22.63)">1</text>
	<text transform="matrix(1 0 0 1 46.75 33.13)">2</text>
	<text transform="matrix(1 0 0 1 62.50 32.13)">3</text>
</g>
</svg>
`},{sentence:"<ruby>火<rt>ひ</rt></ruby>をけしてください。",target:"火",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0706b" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0706b" kvg:element="火" kvg:radical="general">
	<path id="kvg:0706b-s1" kvg:type="㇔" d="M24.25,34c3.27,3.33,8.5,13,9.5,17.75"/>
	<path id="kvg:0706b-s2" kvg:type="㇒" d="M83,27.25c0.5,1.38,0.22,2.74-0.5,4.25c-2.38,5-7.5,12.12-12.75,17.25"/>
	<path id="kvg:0706b-s3" kvg:type="㇒" d="M52.5,14.25c1,1.25,1.5,3.12,1.5,5C54,69,39.62,80,21,91.5"/>
	<path id="kvg:0706b-s4" kvg:type="㇏" d="M52.75,50c12.49,14.06,25.01,28.42,33.62,36.13c2.7,2.42,4.9,4.02,8.38,4.87"/>
</g>
</g>
<g id="kvg:StrokeNumbers_0706b" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 16.50 32.50)">1</text>
	<text transform="matrix(1 0 0 1 74.50 26.50)">2</text>
	<text transform="matrix(1 0 0 1 41.50 14.50)">3</text>
	<text transform="matrix(1 0 0 1 55.25 67.13)">4</text>
</g>
</svg>
`},{sentence:"<ruby>花<rt>はな</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きました。",target:"花",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_082b1" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:082b1" kvg:element="花">
	<g id="kvg:082b1-g1" kvg:element="艹" kvg:variant="true" kvg:original="艸" kvg:position="top" kvg:radical="general">
		<path id="kvg:082b1-s1" kvg:type="㇐" d="M17,29.77c3,0.73,6.35,0.54,9.37,0.29c16.22-1.35,36.31-4.64,56.76-4.79c2.4-0.02,4.77,0.04,7.12,0.51"/>
		<path id="kvg:082b1-s2" kvg:type="㇑a" d="M32.25,16c1.25,0.5,2.25,1.62,2.5,2.75c1.33,5.97,4.86,19.92,5,20.75"/>
		<path id="kvg:082b1-s3" kvg:type="㇑a" d="M71.25,12.5c0.42,1.18,0.47,3.05,0,4.5c-2.19,6.77-6.14,19.12-6.75,20.75"/>
	</g>
	<g id="kvg:082b1-g2" kvg:element="化" kvg:position="bottom" kvg:phon="化">
		<g id="kvg:082b1-g3" kvg:element="亻" kvg:variant="true" kvg:original="人">
			<path id="kvg:082b1-s4" kvg:type="㇒" d="M38.25,48.25c0.25,1.75-0.37,3.31-0.98,4.44C33.25,60,24.8,69.67,19.5,74.5"/>
			<path id="kvg:082b1-s5" kvg:type="㇑" d="M30.75,65.5c0.75,1,1.12,1.97,1.12,3c0,6.64-0.08,16.47-0.11,24c-0.01,1.96-0.01,3.82-0.01,5.5"/>
		</g>
		<g id="kvg:082b1-g4" kvg:element="匕">
			<path id="kvg:082b1-s6" kvg:type="㇒" d="M84.25,50.25c-0.12,1.62-0.84,2.87-2,3.75c-4.62,3.5-11,6.75-19,9.75"/>
			<path id="kvg:082b1-s7" kvg:type="㇟" d="M58.25,43.75c1.06,1.06,1.5,2.5,1.5,4.75c0,2.96-0.22,20.59-0.22,31.25C59.53,93,63,94.15,77,94.15c16.25,0,18-2.65,18-11.15"/>
		</g>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_082b1" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 9.50 30.13)">1</text>
	<text transform="matrix(1 0 0 1 22.50 15.50)">2</text>
	<text transform="matrix(1 0 0 1 62.50 12.50)">3</text>
	<text transform="matrix(1 0 0 1 28.50 48.50)">4</text>
	<text transform="matrix(1 0 0 1 24.50 78.50)">5</text>
	<text transform="matrix(1 0 0 1 74.50 49.50)">6</text>
	<text transform="matrix(1 0 0 1 50.50 44.50)">7</text>
</g>
</svg>
`},{sentence:"<ruby>貝<rt>かい</rt></ruby>を<ruby>拾<rt>ひろ</rt></ruby>いました。",target:"貝",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_08c9d" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:08c9d" kvg:element="貝" kvg:radical="general">
	<g id="kvg:08c9d-g1" kvg:element="目" kvg:position="top">
		<path id="kvg:08c9d-s1" kvg:type="㇑" d="M31.75,17.8c1.16,1.16,1.68,2.84,1.68,4.63c0,1.49-0.18,33.31-0.18,48.31c0,3.5-0.07,3.62-0.07,6.5"/>
		<path id="kvg:08c9d-s2" kvg:type="㇕a" d="M33.82,19.85c7.3-0.73,30.8-3.48,37.67-4.11c2.94-0.27,4.51,1,4.51,3.66c0,3.09-0.5,32.69-0.74,47.84c-0.08,4.93-0.13,8.28-0.13,8.6"/>
		<path id="kvg:08c9d-s3" kvg:type="㇐a" d="M34.76,38.26c8.99-1.26,33.57-3.64,39.78-3.64"/>
		<path id="kvg:08c9d-s4" kvg:type="㇐a" d="M34.82,55.24c10.93-0.99,27.93-2.99,39.51-3.18"/>
		<path id="kvg:08c9d-s5" kvg:type="㇐a" d="M34.57,73.74C45.5,73,64.12,71.05,74.08,71.05"/>
	</g>
	<g id="kvg:08c9d-g2" kvg:element="八" kvg:position="bottom">
		<path id="kvg:08c9d-s6" kvg:type="㇒" d="M41.95,80.5c0.55,1.41-0.42,3.3-1.5,4.33C37.17,87.94,28.56,94.07,22,97.75"/>
		<path id="kvg:08c9d-s7" kvg:type="㇔" d="M65.75,80C72.78,84.75,81.08,93.35,83,97.5"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_08c9d" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 25.25 26.63)">1</text>
	<text transform="matrix(1 0 0 1 36.25 15.63)">2</text>
	<text transform="matrix(1 0 0 1 38.75 34.13)">3</text>
	<text transform="matrix(1 0 0 1 39.25 50.63)">4</text>
	<text transform="matrix(1 0 0 1 39.25 70.13)">5</text>
	<text transform="matrix(1 0 0 1 30.25 84.63)">6</text>
	<text transform="matrix(1 0 0 1 57.75 84.13)">7</text>
</g>
</svg>
`},{sentence:"<ruby>学<rt>がく</rt></ruby>こうへ<ruby>行<rt>い</rt></ruby>きます。",target:"学",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05b66" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05b66" kvg:element="学">
	<g id="kvg:05b66-g1" kvg:position="top" kvg:phon="𦥯">
		<g id="kvg:05b66-g2" kvg:element="⺍" kvg:original="つ">
			<path id="kvg:05b66-s1" kvg:type="㇔" d="M29.5,17.25c3.5,3,6.5,7.25,7.75,9.75"/>
			<path id="kvg:05b66-s2" kvg:type="㇔" d="M49,12c1.25,2,4.75,8.25,5.25,11.5"/>
			<path id="kvg:05b66-s3" kvg:type="㇒" d="M75,11c0.25,1.75-0.12,2.75-0.75,4.25c-1.29,3.1-4.25,7.38-6.5,9.75"/>
		</g>
		<g id="kvg:05b66-g3" kvg:element="冖">
			<path id="kvg:05b66-s4" kvg:type="㇔" d="M21.25,33.75c-0.12,4.75-2,12.5-3.75,16.25"/>
			<path id="kvg:05b66-s5" kvg:type="㇖b" d="M23.5,36.5c17-1.62,42.38-5.5,60-5.75c9.5-0.13,4.12,5.12,0,9"/>
		</g>
	</g>
	<g id="kvg:05b66-g4" kvg:element="子" kvg:position="bottom" kvg:radical="general">
		<path id="kvg:05b66-s6" kvg:type="㇖" d="M37.25,46.5c1,0.25,3.75,0.25,5.5-0.25s18.25-4,20-4s2.75,0.75,1,2.25S54.5,53.5,53,54.75"/>
		<path id="kvg:05b66-s7" kvg:type="㇁" d="M50.75,55.75c4,8.75,7.18,24.67,1.75,38c-2.75,6.75-7.75,1.25-9.75-2"/>
		<path id="kvg:05b66-s8" kvg:type="㇐" d="M15.75,67.75c1.75,1,4.64,1.36,7.5,1c15.88-2,44.43-6.25,61.37-5.5c2.5,0.11,4.72,0.25,6.39,1"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_05b66" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 20.25 13.63)">1</text>
	<text transform="matrix(1 0 0 1 39.75 8.50)">2</text>
	<text transform="matrix(1 0 0 1 66.50 8.50)">3</text>
	<text transform="matrix(1 0 0 1 14.50 34.63)">4</text>
	<text transform="matrix(1 0 0 1 24.50 32.50)">5</text>
	<text transform="matrix(1 0 0 1 29.25 48.50)">6</text>
	<text transform="matrix(1 0 0 1 44.50 58.63)">7</text>
	<text transform="matrix(1 0 0 1 8.50 72.50)">8</text>
</g>
</svg>
`},{sentence:"<ruby>気<rt>き</rt></ruby>をつけてください。",target:"気",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06c17" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06c17" kvg:element="気">
	<g id="kvg:06c17-g1" kvg:element="气" kvg:position="kamae" kvg:radical="general" kvg:phon="气">
		<g id="kvg:06c17-g2" kvg:element="𠂉">
			<path id="kvg:06c17-s1" kvg:type="㇒" d="M37.75,9.25c0.25,1.62-0.25,2.75-1,4.25C35.63,15.74,28,25.25,24,29"/>
			<path id="kvg:06c17-s2" kvg:type="㇐" d="M36.5,21.25c1.33-0.03,3.29-0.05,4.8-0.32c9.2-1.68,18.17-3.46,26.98-5.27c1.63-0.33,3.71-0.64,5.21-0.91"/>
		</g>
		<path id="kvg:06c17-s3" kvg:type="㇐" d="M31.25,32.75c1.5,0.38,3.3,0.26,4.96,0.08c7.67-0.83,19.54-2.58,29.14-4.39c1.94-0.37,3.64-0.41,4.91-0.45"/>
		<path id="kvg:06c17-s4" kvg:type="㇈a" d="M18.5,47c1.88,0.75,4,0.88,6.25,0.5c15.08-2.51,35-5.62,48.25-8c4.73-0.85,5.6,0.47,4.5,6.25c-4,21,0.71,40.32,11.5,50c7.25,6.5,6.5,0.75,6-5.25"/>
	</g>
	<g id="kvg:06c17-g3" kvg:element="乂">
		<g id="kvg:06c17-g4" kvg:element="丿">
			<path id="kvg:06c17-s5" kvg:type="㇒" d="M57,51.75c0.12,1.62-0.17,3.03-1,4.75C49.5,70,40.25,82.75,25.75,93.25"/>
		</g>
		<path id="kvg:06c17-s6" kvg:type="㇔/㇒" d="M30,63.75C41.5,68,54.5,78,62.25,90.5"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_06c17" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 29.50 10.50)">1</text>
	<text transform="matrix(1 0 0 1 43.50 17.50)">2</text>
	<text transform="matrix(1 0 0 1 35.25 30.13)">3</text>
	<text transform="matrix(1 0 0 1 10.50 48.13)">4</text>
	<text transform="matrix(1 0 0 1 48.50 53.50)">5</text>
	<text transform="matrix(1 0 0 1 20.50 63.13)">6</text>
</g>
</svg>
`},{sentence:"<ruby>九<rt>きゅう</rt></ruby>つのりんごがあります。",target:"九",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e5d" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e5d" kvg:element="九">
	<g id="kvg:04e5d-g1" kvg:element="丿" kvg:radical="nelson">
		<path id="kvg:04e5d-s1" kvg:type="㇒" d="M41.88,14.38c1,1.38,1.5,3.25,1.5,5.12c0,40.13-9.12,57.5-28.5,68.75"/>
	</g>
	<g id="kvg:04e5d-g2" kvg:element="乙" kvg:radical="tradit">
		<path id="kvg:04e5d-s2" kvg:type="㇈" d="M13.5,45.75c2.88,0.85,5.78,0.05,8.58-0.66c8.47-2.14,39.88-9.79,40.92-9.84c2.5-0.12,4.75,0.5,4.25,4.75c-0.5,4.25-5.5,20.75-7,32.5c-2.23,17.46,2,19.37,18.21,19.37c13.79,0,19.01-1.07,19.27-10.12"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04e5d" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 32.50 14.50)">1</text>
	<text transform="matrix(1 0 0 1 5.50 46.63)">2</text>
</g>
</svg>
`},{sentence:"<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>です。",target:"休",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04f11" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04f11" kvg:element="休">
	<g id="kvg:04f11-g1" kvg:element="亻" kvg:variant="true" kvg:original="人" kvg:position="left" kvg:radical="general">
		<path id="kvg:04f11-s1" kvg:type="㇒" d="M35,16.5c0.25,1.75,0.25,4.25-0.88,6.8C28.91,35.01,22.37,46.02,10.5,60.29"/>
		<path id="kvg:04f11-s2" kvg:type="㇑" d="M26.28,42.5c0.72,1.25,1.26,3.48,1.26,4.75c0,12.75-0.07,29.88-0.26,42.25c-0.02,1.54-0.04,2.97-0.04,4.25"/>
	</g>
	<g id="kvg:04f11-g2" kvg:element="木" kvg:position="right">
		<path id="kvg:04f11-s3" kvg:type="㇐" d="M37.65,38.83c2.45,0.97,5.18,0.75,7.73,0.54c11.76-0.97,24.94-3.35,37.49-4.01c2.65-0.14,5.39-0.22,7.99,0.39"/>
		<path id="kvg:04f11-s4" kvg:type="㇑" d="M61.43,14c0.82,0.75,1.87,2.12,1.87,3.7c0,8.8,0.05,53.72-0.12,72.05c-0.03,2.88-0.06,4.91-0.08,5.75"/>
		<path id="kvg:04f11-s5" kvg:type="㇒" d="M62.43,38.32c0,2.18-1.1,4.31-1.9,6.04C54.57,57.4,44.96,71.84,35,78.75"/>
		<path id="kvg:04f11-s6" kvg:type="㇏" d="M64.12,38.08c4.45,8.37,16.21,25.33,24.99,33.19c1.96,1.76,4.35,4.18,6.9,5"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04f11" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 25.50 15.50)">1</text>
	<text transform="matrix(1 0 0 1 20.50 58.50)">2</text>
	<text transform="matrix(1 0 0 1 38.50 36.50)">3</text>
	<text transform="matrix(1 0 0 1 52.50 14.50)">4</text>
	<text transform="matrix(1 0 0 1 50.50 49.50)">5</text>
	<text transform="matrix(1 0 0 1 73.50 48.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>玉<rt>たま</rt></ruby>をころがしてください。",target:"玉",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_07389" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:07389" kvg:element="玉" kvg:radical="general">
	<g id="kvg:07389-g1" kvg:element="王" kvg:original="玉" kvg:partial="true">
		<path id="kvg:07389-s1" kvg:type="㇐" d="M28.5,23.09c2.95,0.98,5.91,0.53,8.9,0.08c10.77-1.63,21.21-3.33,34.11-4.7c2.78-0.3,5.28-0.62,7.99,0.27"/>
		<path id="kvg:07389-s2" kvg:type="㇑a" d="M52,24.6c1,1.21,2,2.4,2,4.41c0,5.38,0.25,50.24,0.25,57.94"/>
		<path id="kvg:07389-s3" kvg:type="㇐" d="M28.25,56.12c2.87,0.9,5.86,0.52,8.78,0.16c9.8-1.18,23.9-3.6,33.1-4.57c2.62-0.28,5.52-0.7,8.11,0.01"/>
		<path id="kvg:07389-s4" kvg:type="㇐" d="M16,90.01c3.95,1.17,7.96,0.72,11.99,0.37c21.05-1.84,37.97-4.1,56.63-4.43c3.9-0.07,8.1-0.22,11.88,0.96"/>
	</g>
	<g id="kvg:07389-g2" kvg:element="丶">
		<path id="kvg:07389-s5" kvg:type="㇔" d="M72,64c5.43,2.74,10.09,8.57,11.25,12"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_07389" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 21.50 24.43)">1</text>
	<text transform="matrix(1 0 0 1 45.50 34.63)">2</text>
	<text transform="matrix(1 0 0 1 20.50 57.13)">3</text>
	<text transform="matrix(1 0 0 1 7.50 90.43)">4</text>
	<text transform="matrix(1 0 0 1 64.50 64.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>金<rt>きん</rt></ruby>の<ruby>指<rt>ゆび</rt></ruby>わがあります。",target:"金",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_091d1" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:091d1" kvg:element="金" kvg:radical="general">
	<g id="kvg:091d1-g1" kvg:position="top" kvg:phon="今1">
		<path id="kvg:091d1-s1" kvg:type="㇒" d="M51.75,11.88c0.25,1.52-0.22,3.57-0.8,4.84C47.73,23.79,33.13,47.1,14.5,58"/>
		<path id="kvg:091d1-s2" kvg:type="㇏" d="M52.25,18.25c9.5,7.5,34.14,30.88,37.21,32.67c3.12,1.82,4.14,2.66,5.54,2.83"/>
	</g>
	<g id="kvg:091d1-g2" kvg:position="bottom">
		<g id="kvg:091d1-g3" kvg:phon="今2">
			<path id="kvg:091d1-s3" kvg:type="㇐" d="M34.02,47.08c1.69,0.65,3.85,0.36,5.6,0.21c6.91-0.6,14.33-1.69,23.99-2.64c2.07-0.2,4.1-0.4,6.15,0.12"/>
			<path id="kvg:091d1-s4" kvg:type="㇐" d="M30.18,64.96c1.95,0.67,4.47,0.31,6.47,0.12c9.24-0.87,17.42-1.58,31.35-2.53c2.3-0.16,4.68-0.36,6.96,0.08"/>
		</g>
		<path id="kvg:091d1-s5" kvg:type="㇑a" d="M51.47,48.82c0.89,0.85,0.89,3.76,0.89,4.43c0,3.64,0.27,38.71,0.22,39.82"/>
		<path id="kvg:091d1-s6" kvg:type="㇔" d="M31,74.75c3.25,3,7.48,9.27,8.5,12"/>
		<path id="kvg:091d1-s7" kvg:type="㇒" d="M73.01,72.11c0.24,1.14,0.11,2.46-0.54,3.51C70.38,79,66.44,83.22,63,86"/>
		<path id="kvg:091d1-s8" kvg:type="㇐" d="M18.5,94.86c2.88,1.01,6.41,0.4,9.37,0.15c16.55-1.42,32.95-2.12,51.51-3c3.13-0.15,6.32-0.27,9.38,0.59"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_091d1" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 43.25 13.13)">1</text>
	<text transform="matrix(1 0 0 1 60.50 21.50)">2</text>
	<text transform="matrix(1 0 0 1 42.50 43.50)">3</text>
	<text transform="matrix(1 0 0 1 21.50 66.50)">4</text>
	<text transform="matrix(1 0 0 1 56.50 54.50)">5</text>
	<text transform="matrix(1 0 0 1 23.50 78.50)">6</text>
	<text transform="matrix(1 0 0 1 78.50 74.50)">7</text>
	<text transform="matrix(1 0 0 1 10.50 96.50)">8</text>
</g>
</svg>
`},{sentence:"<ruby>空<rt>そら</rt></ruby>に<ruby>星<rt>ほし</rt></ruby>が<ruby>光<rt>ひか</rt></ruby>っています。",target:"空",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_07a7a" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:07a7a" kvg:element="空">
	<g id="kvg:07a7a-g1" kvg:element="穴" kvg:variant="true" kvg:position="top" kvg:radical="general">
		<g id="kvg:07a7a-g2" kvg:element="宀">
			<path id="kvg:07a7a-s1" kvg:type="㇑a" d="M52.29,12c0.96,0.75,1.7,2,1.7,3.64c0,3.36-0.08,7.61-0.08,10.67"/>
			<g id="kvg:07a7a-g3" kvg:element="冖">
				<path id="kvg:07a7a-s2" kvg:type="㇔" d="M27.07,27.75c0,3.34-1.57,8.5-4.63,15.25"/>
				<path id="kvg:07a7a-s3" kvg:type="㇖b" d="M27.65,30c18.85-2.75,40.6-5.12,52.95-5.75c9.9-0.5,4.15,5-0.6,8.75"/>
			</g>
		</g>
		<g id="kvg:07a7a-g4" kvg:element="八" kvg:variant="true">
			<path id="kvg:07a7a-s4" kvg:type="㇒" d="M41.51,39c0.24,1.5-0.01,2.38-0.67,3.76C38.17,48.4,33.38,55.88,25,61.25"/>
			<path id="kvg:07a7a-s5" kvg:type="㇟a/㇏" d="M59.76,32.97c0.94,1.02,1.43,2.47,1.49,4.03c0.12,3.47,0.06,6.75,0.06,9.48c0,5.77,1.69,7.33,11.45,7.33c5.5,0,10.54-1.04,12.25-1.56"/>
		</g>
	</g>
	<g id="kvg:07a7a-g5" kvg:element="工" kvg:position="bottom" kvg:phon="工">
		<path id="kvg:07a7a-s6" kvg:type="㇐" d="M32.29,68.97c2.46,1.03,5.63,0.46,7.97,0.22c7.7-0.76,18.13-2.01,27.36-2.76c2.53-0.21,5.16-0.53,7.62,0.32"/>
		<path id="kvg:07a7a-s7" kvg:type="㇑a" d="M53.08,70.45c0.67,0.8,0.96,2.05,0.96,3.5c0,5.56-0.1,14.66-0.1,16.3"/>
		<path id="kvg:07a7a-s8" kvg:type="㇐" d="M19.5,92.55c3.17,1.27,6.19,1,9.52,0.7c13.57-1.2,37.71-3.53,54.11-4.35c3.19-0.16,6.33-0.28,9.37,0.9"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_07a7a" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 43.50 10.93)">1</text>
	<text transform="matrix(1 0 0 1 20.75 28.13)">2</text>
	<text transform="matrix(1 0 0 1 31.25 25.63)">3</text>
	<text transform="matrix(1 0 0 1 33.50 39.13)">4</text>
	<text transform="matrix(1 0 0 1 50.50 37.93)">5</text>
	<text transform="matrix(1 0 0 1 25.00 71.50)">6</text>
	<text transform="matrix(1 0 0 1 45.50 78.50)">7</text>
	<text transform="matrix(1 0 0 1 11.25 93.50)">8</text>
</g>
</svg>
`},{sentence:"<ruby>月<rt>つき</rt></ruby>がきれいです。",target:"月",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06708" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06708" kvg:element="月" kvg:radical="general">
	<path id="kvg:06708-s1" kvg:type="㇓" d="M34.25,16.25c1,1,1.48,2.38,1.5,4c0.38,33.62,2.38,59.38-11,73.25"/>
	<path id="kvg:06708-s2" kvg:type="㇆a" d="M36.25,19c4.12-0.62,31.49-4.78,33.25-5c4-0.5,5.5,1.12,5.5,4.75c0,2.76-0.5,49.25-0.5,69.5c0,13-6.25,4-8.75,1.75"/>
	<path id="kvg:06708-s3" kvg:type="㇐a" d="M37.25,38c10.25-1.5,27.25-3.75,36.25-4.5"/>
	<path id="kvg:06708-s4" kvg:type="㇐a" d="M37,58.25c8.75-1.12,27-3.5,36.25-4"/>
</g>
</g>
<g id="kvg:StrokeNumbers_06708" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 27.50 23.43)">1</text>
	<text transform="matrix(1 0 0 1 37.50 15.50)">2</text>
	<text transform="matrix(1 0 0 1 40.00 33.50)">3</text>
	<text transform="matrix(1 0 0 1 40.00 54.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>犬<rt>いぬ</rt></ruby>が<ruby>歩<rt>ある</rt></ruby>いています。",target:"犬",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_072ac" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:072ac" kvg:element="犬" kvg:radical="general">
	<g id="kvg:072ac-g1" kvg:element="大">
		<path id="kvg:072ac-s1" kvg:type="㇐" d="M18.38,46.36c2.37,0.64,5.38,0.73,7.74,0.47c14.39-1.58,36.51-4.46,51.25-5.75c2.51-0.22,6-0.33,7.89,0.42"/>
		<path id="kvg:072ac-s2" kvg:type="㇒" d="M50.25,15.75c1,1.08,1.61,2.16,1.74,4.32C53.75,48.25,46.5,79.75,17,92.25"/>
		<path id="kvg:072ac-s3" kvg:type="㇏" d="M51.5,45c8.29,11.97,23.78,31.58,35.16,41.85c2.37,2.14,4.59,4.15,8.09,5.4"/>
	</g>
	<g id="kvg:072ac-g2" kvg:element="丶">
		<path id="kvg:072ac-s4" kvg:type="㇔" d="M67.33,20.25c6.9,3.89,8.78,6.85,10.92,10.5"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_072ac" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 11.50 47.50)">1</text>
	<text transform="matrix(1 0 0 1 39.75 15.50)">2</text>
	<text transform="matrix(1 0 0 1 62.50 55.63)">3</text>
	<text transform="matrix(1 0 0 1 60.50 19.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>見<rt>み</rt></ruby>てください。",target:"見",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0898b" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0898b" kvg:element="見" kvg:radical="general">
	<g id="kvg:0898b-g1" kvg:element="目" kvg:position="top">
		<path id="kvg:0898b-s1" kvg:type="㇑" d="M32.5,15.46c0.96,0.96,1.18,2.1,1.18,3.52c0,1.12,0.07,27.43-0.02,39.27c-0.02,3.12-0.02,5.21,0.02,5.5"/>
		<path id="kvg:0898b-s2" kvg:type="㇕a" d="M34.65,17.15c9.23-1.27,22.23-2.65,31.1-3.65c2.99-0.34,4.26,1.01,4.26,3.55c0,2.5-0.1,28.08-0.14,38.96c-0.01,2.91-0.02,4.75-0.02,4.79"/>
		<path id="kvg:0898b-s3" kvg:type="㇐a" d="M34.84,31.1c7.28-0.6,25.03-2.98,33.9-3.38"/>
		<path id="kvg:0898b-s4" kvg:type="㇐a" d="M34.86,44.63C43.38,44,59,42.12,68.6,41.51"/>
		<path id="kvg:0898b-s5" kvg:type="㇐a" d="M34.71,59.66C44.5,59,58.38,57.5,68.45,57.03"/>
	</g>
	<g id="kvg:0898b-g2" kvg:element="儿" kvg:position="bottom">
		<path id="kvg:0898b-s6" kvg:type="㇒" d="M41.99,66.75c0.26,1.5,0.01,2.99-0.41,4.04c-2.7,6.83-13.83,20.83-28.41,27.87"/>
		<path id="kvg:0898b-s7" kvg:type="㇟" d="M54.49,61.37c1.07,1.07,1.33,2.59,1.38,4.43c0.2,8.19,0.04,6.2,0.04,18.2c0,10.12,1.23,11.53,18.54,11.53c18.81,0,19.81-1.53,19.81-10.12"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_0898b" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 26.50 23.50)">1</text>
	<text transform="matrix(1 0 0 1 35.50 13.50)">2</text>
	<text transform="matrix(1 0 0 1 38.25 27.43)">3</text>
	<text transform="matrix(1 0 0 1 38.25 40.63)">4</text>
	<text transform="matrix(1 0 0 1 38.25 55.63)">5</text>
	<text transform="matrix(1 0 0 1 32.50 74.50)">6</text>
	<text transform="matrix(1 0 0 1 48.50 69.50)">7</text>
</g>
</svg>
`},{sentence:"<ruby>五<rt>ご</rt></ruby>つの<ruby>箱<rt>はこ</rt></ruby>があります。",target:"五",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e94" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e94" kvg:element="五">
	<g id="kvg:04e94-g1" kvg:element="二" kvg:part="1" kvg:radical="tradit">
		<g id="kvg:04e94-g2" kvg:element="一" kvg:radical="nelson">
			<path id="kvg:04e94-s1" kvg:type="㇐" d="M31.75,23.15c2.8,0.67,5.54,0.42,8.36,0.12c9.3-0.99,22.18-2.4,34.14-3.21c2.49-0.17,5.04-0.33,7.5,0.2"/>
		</g>
	</g>
	<path id="kvg:04e94-s2" kvg:type="㇑a" d="M55.75,25.25c0.62,1.25,1.02,3.01,0.5,5c-3.12,11.88-14,44.12-19.75,59"/>
	<path id="kvg:04e94-s3" kvg:type="㇕c" d="M25.5,55.25c2.07,1.24,4.73,1.03,7,0.81c15.49-1.45,29.89-3.03,42.25-4.06c3-0.25,4.25,1.75,3.5,3.75c-2.24,5.96-6,20.75-7.75,31.5"/>
	<g id="kvg:04e94-g3" kvg:element="二" kvg:part="2" kvg:radical="tradit">
		<path id="kvg:04e94-s4" kvg:type="㇐" d="M11.25,90.5c3.04,0.81,6.52,0.63,9.63,0.41c15.71-1.1,43.9-2.8,67.75-3.8c3.41-0.14,6.9-0.4,10.25,0.39"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04e94" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 24.50 24.13)">1</text>
	<text transform="matrix(1 0 0 1 47.50 33.50)">2</text>
	<text transform="matrix(1 0 0 1 18.50 57.50)">3</text>
	<text transform="matrix(1 0 0 1 3.50 91.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>口<rt>くち</rt></ruby>を<ruby>閉<rt>と</rt></ruby>じてください。",target:"口",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_053e3" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:053e3" kvg:element="口" kvg:radical="general">
	<path id="kvg:053e3-s1" kvg:type="㇑" d="M22.25,33.25c1.25,1.25,2,2.88,2.26,4.43c1.16,7.03,3.15,23.61,4.68,37.85C29.46,78.09,29.73,80.6,30,83"/>
	<path id="kvg:053e3-s2" kvg:type="㇕b" d="M25.29,35.67c17.46-2.17,41.59-5.04,55.49-5.93c3.94-0.25,6.33,2.72,5.72,5.14c-2.25,8.87-6.62,26.5-9,38.87"/>
	<path id="kvg:053e3-s3" kvg:type="㇐b" d="M30.25,77.75c10.5-0.5,30.53-2.3,44.99-3.04c2.05-0.11,3.99-0.18,5.76-0.21"/>
</g>
</g>
<g id="kvg:StrokeNumbers_053e3" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 15.50 40.50)">1</text>
	<text transform="matrix(1 0 0 1 28.50 30.50)">2</text>
	<text transform="matrix(1 0 0 1 34.50 72.50)">3</text>
</g>
</svg>
`},{sentence:"<ruby>校<rt>こう</rt></ruby>ていを<ruby>走<rt>はし</rt></ruby>りましょう。",target:"校",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06821" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06821" kvg:element="校">
	<g id="kvg:06821-g1" kvg:element="木" kvg:position="left" kvg:radical="general">
		<path id="kvg:06821-s1" kvg:type="㇐" d="M11.53,40.68c1.1,0.32,2.6,0.45,4.53,0.32c5.4-0.35,16.57-3,23.14-4.04c1.25-0.2,2.3-0.18,3.07,0"/>
		<path id="kvg:06821-s2" kvg:type="㇑" d="M28.99,17.25c1.07,1.07,1.76,3.25,1.76,5.25c0,0.77-0.03,48.09-0.18,65.25c-0.03,3.03-0.05,5.16-0.07,6"/>
		<path id="kvg:06821-s3" kvg:type="㇒" d="M30.25,40.75c0,1.25-0.49,2.66-0.96,3.77C25.28,53.91,20.88,62.25,15,70"/>
		<path id="kvg:06821-s4" kvg:type="㇔/㇏" d="M33.75,51.25c2.75,1.5,6,5.25,7.25,7.75"/>
	</g>
	<g id="kvg:06821-g2" kvg:element="交" kvg:position="right" kvg:phon="交">
		<g id="kvg:06821-g3" kvg:element="亠">
			<path id="kvg:06821-s5" kvg:type="㇑a" d="M66.39,15.5c0.99,0.99,1.38,1.88,1.38,3.62c0,4.25-0.02,7.62-0.08,10.41"/>
			<path id="kvg:06821-s6" kvg:type="㇐" d="M48.12,31.71c2.3,0.29,3.9,0.44,6.09,0.2c10.28-1.16,20.32-2.66,32.45-3.53c2.35-0.17,4.03-0.01,5.33,0.32"/>
		</g>
		<g id="kvg:06821-g4" kvg:element="父">
			<path id="kvg:06821-s7" kvg:type="㇒" d="M59.24,38.93c0.2,0.53,0.06,2.27-0.4,3.14C57,45.5,53.75,49.5,50,52.5"/>
			<path id="kvg:06821-s8" kvg:type="㇔" d="M79.27,38.5c4.34,3.07,8.73,8.68,10.9,12.41"/>
			<path id="kvg:06821-s9" kvg:type="㇒" d="M79.15,49.18c0.35,1.32,0.17,2.62-0.54,4.18C72.25,67.25,58.75,83.25,44,91.25"/>
			<path id="kvg:06821-s10" kvg:type="㇏" d="M55.95,55.88c6.3,3.37,21.64,22.12,31.45,30.33c2.64,2.21,5.07,4.15,8.6,4.44"/>
		</g>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_06821" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 5.50 41.50)">1</text>
	<text transform="matrix(1 0 0 1 18.75 16.50)">2</text>
	<text transform="matrix(1 0 0 1 19.50 52.50)">3</text>
	<text transform="matrix(1 0 0 1 35.50 49.50)">4</text>
	<text transform="matrix(1 0 0 1 58.50 12.50)">5</text>
	<text transform="matrix(1 0 0 1 47.25 28.50)">6</text>
	<text transform="matrix(1 0 0 1 50.50 41.50)">7</text>
	<text transform="matrix(1 0 0 1 70.50 40.50)">8</text>
	<text transform="matrix(1 0 0 1 71.50 50.50)">9</text>
	<text transform="matrix(1 0 0 1 61.50 58.50)">10</text>
</g>
</svg>
`},{sentence:"<ruby>左<rt>ひだり</rt></ruby>を<ruby>見<rt>み</rt></ruby>てください。",target:"左",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05de6" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05de6" kvg:element="左">
	<g id="kvg:05de6-g1" kvg:position="kamae">
		<path id="kvg:05de6-s1" kvg:type="㇐" d="M20.75,40.17c2.95,0.49,5.68,0.29,8.64-0.05c14.5-1.68,29.75-4.47,47.22-5.96c2.83-0.24,5.87-0.58,8.64,0.26"/>
		<path id="kvg:05de6-s2" kvg:type="㇒" d="M55.48,12.5c0.27,1.57,0.21,4.18-0.29,5.93C46.59,48.64,32.07,74.14,11.25,91"/>
	</g>
	<g id="kvg:05de6-g2" kvg:element="工" kvg:radical="general">
		<path id="kvg:05de6-s3" kvg:type="㇐" d="M43.25,64.59c1.25,0.29,2.38,0.29,3.86,0.17c4.86-0.37,17.91-2.17,26.92-3.77c1.88-0.33,3.97-0.5,5.97-0.11"/>
		<path id="kvg:05de6-s4" kvg:type="㇑a" d="M58.54,66.75c1.04,1.04,1.91,2.62,1.91,4.03c0,6.84,0.04,13.22,0.04,18.72"/>
		<path id="kvg:05de6-s5" kvg:type="㇐" d="M28.5,92.25c2.76,0.84,5.92,0.51,8.75,0.34c14.54-0.9,32.08-2.65,48.13-3.26c3.25-0.12,6.38-0.17,9.49,0.93"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_05de6" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 10.50 40.50)">1</text>
	<text transform="matrix(1 0 0 1 44.50 13.50)">2</text>
	<text transform="matrix(1 0 0 1 45.50 61.50)">3</text>
	<text transform="matrix(1 0 0 1 51.50 74.50)">4</text>
	<text transform="matrix(1 0 0 1 28.50 89.13)">5</text>
</g>
</svg>
`},{sentence:"<ruby>三<rt>み</rt></ruby>つの<ruby>りんご<rt></rt></ruby>を<ruby>買<rt>か</rt></ruby>いました。",target:"三",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e09" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e09" kvg:element="三">
	<g id="kvg:04e09-g1" kvg:element="一" kvg:position="top" kvg:radical="general">
		<path id="kvg:04e09-s1" kvg:type="㇐" d="M27.5,23.65c3.09,0.73,6.29,0.36,9.4,0.06c10.2-1,27-2.94,38.97-3.57c3.06-0.16,6.09-0.2,9.14,0.23"/>
	</g>
	<g id="kvg:04e09-g2" kvg:position="bottom">
		<g id="kvg:04e09-g3" kvg:element="一">
			<path id="kvg:04e09-s2" kvg:type="㇐" d="M28.75,55.14c3.13,0.76,6.46,0.43,9.64,0.2c10.03-0.72,23.97-2.63,34.73-3.12c2.7-0.12,5.45-0.16,8.13,0.3"/>
		</g>
		<g id="kvg:04e09-g4" kvg:element="一">
			<path id="kvg:04e09-s3" kvg:type="㇐" d="M13,87.83c3.94,1.01,7.72,0.96,11.75,0.72c18.41-1.07,41.27-3.39,61.12-4.07c3.63-0.13,7.2-0.1,10.75,0.78"/>
		</g>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04e09" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 18.00 25.78)">1</text>
	<text transform="matrix(1 0 0 1 18.75 57.13)">2</text>
	<text transform="matrix(1 0 0 1 3.75 91.63)">3</text>
</g>
</svg>
`},{sentence:"<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>りました。",target:"山",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05c71" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05c71" kvg:element="山" kvg:radical="general">
	<path id="kvg:05c71-s1" kvg:type="㇑a" d="M52.49,15.5c1.38,1.38,2.26,3.5,2.26,5.75c0,0.75-0.22,58.3-0.25,59.25"/>
	<path id="kvg:05c71-s2" kvg:type="㇄a" d="M21.49,54.5c0.88,0.88,1.39,2.25,1.26,3.75c-0.58,6.99-1,16-2.5,23c-0.7,3.26,0.11,4,2,3.75c17-2.25,47.12-5.12,65.5-6"/>
	<path id="kvg:05c71-s3" kvg:type="㇑" d="M89.24,49c0.94,0.94,1.64,2.38,1.51,4.25c-0.25,3.68-1.83,20.3-2.55,28.77c-0.22,2.64-0.39,4.51-0.45,4.98"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05c71" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 45.75 10.63)">1</text>
	<text transform="matrix(1 0 0 1 12.75 52.63)">2</text>
	<text transform="matrix(1 0 0 1 83.25 43.63)">3</text>
</g>
</svg>
`},{sentence:"<ruby>子<rt>こ</rt></ruby>どもが<ruby>遊<rt>あそ</rt></ruby>んでいます。",target:"子",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05b50" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05b50" kvg:element="子" kvg:radical="general">
	<path id="kvg:05b50-s1" kvg:type="㇖" d="M33.28,19.04c1.84,0.71,3.7,0.86,5.4,0.63c4.95-0.67,27.95-4.58,29.86-4.92c3.46-0.62,4.06,1.36,2.11,3.58c-1.95,2.22-11.41,13.17-16.35,17.19"/>
	<path id="kvg:05b50-s2" kvg:type="㇁" d="M52.48,37.74c6.42,2.97,11.75,30.73,5.24,52.57c-2.8,9.38-8.09,2.96-10.47,0.99"/>
	<path id="kvg:05b50-s3" kvg:type="㇐" d="M12.25,51.48c3.75,1.14,8.79,1.03,12.48,0.49c16.77-2.47,42.86-5.84,58.53-6.75c4.26-0.25,9.11-0.34,13.11,0.57"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05b50" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 25.50 20.50)">1</text>
	<text transform="matrix(1 0 0 1 44.50 42.50)">2</text>
	<text transform="matrix(1 0 0 1 4.50 53.50)">3</text>
</g>
</svg>
`},{sentence:"<ruby>四<rt>よん</rt></ruby>つの<ruby>袋<rt>ふくろ</rt></ruby>があります。",target:"四",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_056db" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:056db" kvg:element="四">
	<g id="kvg:056db-g1" kvg:element="囗" kvg:part="1" kvg:position="kamae" kvg:radical="general">
		<path id="kvg:056db-s1" kvg:type="㇑" d="M14.5,31.48c1.51,1.51,2.25,3.27,2.53,5.2c1.14,7.9,2.61,25.18,4.39,40.83c0.29,2.55,0.34,3.81,0.64,6.24"/>
		<path id="kvg:056db-s2" kvg:type="㇕a" d="M17.85,34.04c21.65-1.92,51.52-3.92,67.82-4.3c4.85-0.11,6.31,2.62,6.04,5.38c-0.9,9.02-4.17,28.29-6.41,39.62c-0.49,2.49-0.94,4.6-1.3,6.13"/>
	</g>
	<g id="kvg:056db-g2" kvg:element="儿" kvg:original="八">
		<g id="kvg:056db-g3" kvg:element="丿">
			<path id="kvg:056db-s3" kvg:type="㇒" d="M40.5,36c0.08,0.64,0.12,1.65-0.16,2.57c-2.22,7.3-5.1,14.55-13.35,22.68"/>
		</g>
		<path id="kvg:056db-s4" kvg:type="㇟a" d="M59.75,34.25c0.8,1.05,1.44,2.29,1.49,3.92c0.11,3.62,0.05,7.05,0.05,9.89c0,6.94,0.71,7.54,9.47,7.54c4.99,0,8.86-0.72,10.25-1.72"/>
	</g>
	<g id="kvg:056db-g4" kvg:element="囗" kvg:part="2" kvg:position="kamae" kvg:radical="general">
		<path id="kvg:056db-s5" kvg:type="㇐a" d="M22.73,79.32c13.77-0.57,43.64-1.8,61.18-2.08"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_056db" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 8.75 40.63)">1</text>
	<text transform="matrix(1 0 0 1 20.75 29.13)">2</text>
	<text transform="matrix(1 0 0 1 31.25 41.63)">3</text>
	<text transform="matrix(1 0 0 1 52.25 40.13)">4</text>
	<text transform="matrix(1 0 0 1 27.25 75.63)">5</text>
</g>
</svg>
`},{sentence:"<ruby>糸<rt>いと</rt></ruby>を<ruby>切<rt>き</rt></ruby>りました。",target:"糸",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_07cf8" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:07cf8" kvg:element="糸" kvg:radical="general">
	<path id="kvg:07cf8-s1" kvg:type="㇜" d="M51.25,11.5c0.5,1.5,0.28,2.9-0.75,4.5C46,23,38.12,31.75,32.25,35.75c-1.98,1.35-0.74,3.47,0.25,3.75c5.25,1.5,10.75,4,15.25,6.75"/>
	<path id="kvg:07cf8-s2" kvg:type="㇜" d="M70.5,21c0.62,1.38,0.38,2.75-1,4.25c-11.01,12.01-22.25,23.75-36,37c-1.66,1.6-1.01,2.46,1,2c9.38-2.12,31.75-7,42.5-9"/>
	<path id="kvg:07cf8-s3" kvg:type="㇔" d="M72.25,47.25c3.71,2.78,9.57,11.43,10.5,15.75"/>
	<path id="kvg:07cf8-s4" kvg:type="㇑" d="M53,63c0.75,0.75,1.42,1.85,1.51,3.49c0.29,5.73,0.03,19.24-0.14,27.25c-0.06,3.03-0.11,5.27-0.11,6.01"/>
	<path id="kvg:07cf8-s5" kvg:type="㇒" d="M32.98,74.66c0.39,1.47,0.27,2.59-0.77,4.12c-2.85,4.19-10.79,11.02-15.46,14.31"/>
	<path id="kvg:07cf8-s6" kvg:type="㇔" d="M76.16,73.5c4.38,3.75,11.88,13.75,13.44,17.5"/>
</g>
</g>
<g id="kvg:StrokeNumbers_07cf8" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 43.50 11.50)">1</text>
	<text transform="matrix(1 0 0 1 63.50 21.50)">2</text>
	<text transform="matrix(1 0 0 1 69.50 43.50)">3</text>
	<text transform="matrix(1 0 0 1 46.50 70.50)">4</text>
	<text transform="matrix(1 0 0 1 24.50 75.50)">5</text>
	<text transform="matrix(1 0 0 1 67.50 73.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>字<rt>じ</rt></ruby>を<ruby>練習<rt>れんしゅう</rt></ruby>します。",target:"字",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05b57" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05b57" kvg:element="字">
	<g id="kvg:05b57-g1" kvg:element="宀" kvg:position="top" kvg:radical="nelson">
		<path id="kvg:05b57-s1" kvg:type="㇑a" d="M52.73,9.5c1.01,1.01,1.75,2.25,1.75,3.76c0,3.53-0.09,5.73-0.1,8.95"/>
		<g id="kvg:05b57-g2" kvg:element="冖">
			<path id="kvg:05b57-s2" kvg:type="㇔" d="M21.88,24c0,3.37-4.06,14.25-5.62,16.5"/>
			<path id="kvg:05b57-s3" kvg:type="㇖b" d="M24.07,26.66c16.68-1.91,42.18-5.28,63-5.78c10.95-0.26,4.68,5.37,0.52,8.4"/>
		</g>
	</g>
	<g id="kvg:05b57-g3" kvg:element="子" kvg:position="bottom" kvg:radical="tradit" kvg:phon="子">
		<path id="kvg:05b57-s4" kvg:type="㇖" d="M34.91,36.19c2.09,1.06,4.35,1.5,6.87,1.26c4.73-0.45,19.99-2.86,26.18-4.24c3.17-0.71,4.92,0.67,2.1,3.7c-2.15,2.31-9.34,9.46-14.25,12.73"/>
		<path id="kvg:05b57-s5" kvg:type="㇁" d="M52.71,51.03c5.42,5.22,9.29,26.84,3.67,43.18c-2.57,7.47-8.5,2.78-10.58,0.81"/>
		<path id="kvg:05b57-s6" kvg:type="㇐" d="M14.38,63.51c3.88,1.24,8.65,0.84,12.38,0.47c15.18-1.5,43-4.92,59.75-5.41c3.45-0.1,7.13-0.23,10.37,1.15"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_05b57" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 44.50 10.28)">1</text>
	<text transform="matrix(1 0 0 1 13.50 25.78)">2</text>
	<text transform="matrix(1 0 0 1 25.50 21.13)">3</text>
	<text transform="matrix(1 0 0 1 27.50 40.50)">4</text>
	<text transform="matrix(1 0 0 1 45.50 54.13)">5</text>
	<text transform="matrix(1 0 0 1 6.50 64.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>耳<rt>みみ</rt></ruby>を<ruby>ふさ<rt>ふさ</rt></ruby>ぎました。",target:"耳",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_08033" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:08033" kvg:element="耳" kvg:radical="general">
	<path id="kvg:08033-s1" kvg:type="㇐" d="M20.25,20c3.03,0.85,6.17,0.58,9.24,0.21c14.62-1.76,31.45-3.95,48.12-5.06c3.33-0.22,6.59-0.2,9.89,0.35"/>
	<path id="kvg:08033-s2" kvg:type="㇑a" d="M36.68,22.5c1.1,1.1,1.64,2.71,1.64,4.73c0,1.6-0.33,40.02-0.33,41.52"/>
	<path id="kvg:08033-s3" kvg:type="㇐a" d="M39.5,35.5c6.75-0.88,24-2.75,32.25-3.25"/>
	<path id="kvg:08033-s4" kvg:type="㇐a" d="M39.25,51.25c7-0.5,24.62-2.75,32.25-3"/>
	<path id="kvg:08033-s5" kvg:type="㇀" d="M17.25,71c0.75,1.12,2.01,1.81,3.75,1.5c7-1.25,48-8.75,58.75-10.75"/>
	<path id="kvg:08033-s6" kvg:type="㇑" d="M71,18.5c1,1,1.75,2.5,1.75,4.25c0,1.05,0.18,44.73,0.23,64.75c0.01,3.74,0.02,6.64,0.02,8.25"/>
</g>
</g>
<g id="kvg:StrokeNumbers_08033" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 12.50 21.50)">1</text>
	<text transform="matrix(1 0 0 1 29.50 30.50)">2</text>
	<text transform="matrix(1 0 0 1 43.50 31.50)">3</text>
	<text transform="matrix(1 0 0 1 43.50 48.00)">4</text>
	<text transform="matrix(1 0 0 1 8.50 76.50)">5</text>
	<text transform="matrix(1 0 0 1 64.50 25.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>七<rt>なな</rt></ruby>つの<ruby>木<rt>き</rt></ruby>があります。",target:"七",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e03" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e03" kvg:element="七">
	<g id="kvg:04e03-g1" kvg:element="一" kvg:radical="tradit">
		<path id="kvg:04e03-s1" kvg:type="㇐" d="M15.5,51.75c1.82,0.5,4.38,0.88,6.96,0.5c16.91-2.45,50.92-8.12,64.44-8.74c3.02-0.14,4.84,0.24,6.35,0.49"/>
	</g>
	<g id="kvg:04e03-g2" kvg:element="乙" kvg:variant="true" kvg:radical="nelson">
		<path id="kvg:04e03-s2" kvg:type="㇟" d="M43,20c1.38,1.38,2.15,3.25,2.15,5.26C45.15,29.5,45,71.84,45,76c0,10.5,2.25,12.25,20.25,12.25c18.75,0,20-3.75,20-12.31"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04e03" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 8.50 53.50)">1</text>
	<text transform="matrix(1 0 0 1 34.50 19.63)">2</text>
</g>
</svg>
`},{sentence:"<ruby>車<rt>くるま</rt></ruby>が<ruby>通<rt>とお</rt></ruby>ります。",target:"車",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_08eca" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:08eca" kvg:element="車" kvg:radical="general">
	<path id="kvg:08eca-s1" kvg:type="㇐" d="M26,26c2.85,0.69,6.1,0.14,8.98-0.1c11.09-0.93,25.8-2.64,38.89-3.51c2.68-0.18,5.22-0.16,7.88,0.23"/>
	<path id="kvg:08eca-s2" kvg:type="㇑" d="M27.5,37.92c0.81,0.5,1.83,2.39,1.98,3.05c0.85,3.73,1.83,11.31,2.95,18.54c0.32,2.09,0.41,3.2,0.75,5.24"/>
	<path id="kvg:08eca-s3" kvg:type="㇕a" d="M30.36,39.49c14.52-1.61,36.14-4.11,47.63-4.5c3.46-0.12,4.17,1.57,4.03,3.08c-0.42,4.32-2.01,13.81-3.5,20.19c-0.21,0.89-0.51,1.87-0.76,3"/>
	<path id="kvg:08eca-s4" kvg:type="㇐a" d="M32.5,51.25c13.75-1.5,34.25-3.75,47-4.25"/>
	<path id="kvg:08eca-s5" kvg:type="㇐a" d="M34.25,63.25C46,61.62,65,59.75,77,59.25"/>
	<path id="kvg:08eca-s6" kvg:type="㇐" d="M16,77.86c3.62,0.89,7.38,0.77,10.63,0.39c18.51-2.14,39.85-4.55,57.12-5.45c3.05-0.16,6.5-0.05,9.5,0.63"/>
	<path id="kvg:08eca-s7" kvg:type="㇑" d="M52.5,11.51c1.36,1.36,2.06,2.78,2.14,6.02c0.03,1.07-0.07,48.79-0.19,70.7c-0.02,4.27-0.05,7.36-0.07,8.65"/>
</g>
</g>
<g id="kvg:StrokeNumbers_08eca" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 17.25 26.50)">1</text>
	<text transform="matrix(1 0 0 1 20.25 45.13)">2</text>
	<text transform="matrix(1 0 0 1 33.00 36.28)">3</text>
	<text transform="matrix(1 0 0 1 35.50 48.13)">4</text>
	<text transform="matrix(1 0 0 1 35.50 60.13)">5</text>
	<text transform="matrix(1 0 0 1 6.75 80.50)">6</text>
	<text transform="matrix(1 0 0 1 43.50 11.50)">7</text>
</g>
</svg>
`},{sentence:"<ruby>手<rt>て</rt></ruby>を<ruby>挙<rt>あ</rt></ruby>げてください。",target:"手",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0624b" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0624b" kvg:element="手" kvg:radical="general">
	<path id="kvg:0624b-s1" kvg:type="㇒" d="M61.48,11.5c0.02,1-0.61,1.88-1.67,2.9c-3.27,3.15-13.69,8.23-28.57,11.85"/>
	<path id="kvg:0624b-s2" kvg:type="㇐" d="M26.38,42.92c1.8,0.46,3.61,0.67,5.68,0.38C46,41.38,58.4,39,71.37,37.75c1.92-0.19,4.62-0.38,7.25,0.04"/>
	<path id="kvg:0624b-s3" kvg:type="㇐" d="M13.27,62.87c2.71,0.63,4.86,0.6,7.22,0.38c22.63-2.12,46.13-5.62,67.7-7c2.01-0.13,4.83,0,7.46,0.37"/>
	<path id="kvg:0624b-s4" kvg:type="㇁" d="M48.88,23.55C60.38,31,62.73,63.66,57.83,89.87c-2.08,11.13-8.64,2.34-9.89,1.17"/>
</g>
</g>
<g id="kvg:StrokeNumbers_0624b" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 53.50 11.50)">1</text>
	<text transform="matrix(1 0 0 1 17.50 45.50)">2</text>
	<text transform="matrix(1 0 0 1 5.50 66.50)">3</text>
	<text transform="matrix(1 0 0 1 44.50 32.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>十<rt>じゅう</rt></ruby>人の<ruby>学生<rt>がくせい</rt></ruby>がいます。",target:"十",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05341" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05341" kvg:element="十" kvg:radical="general">
	<path id="kvg:05341-s1" kvg:type="㇐" d="M11.88,50.98c3.18,0.89,6.62,0.61,9.87,0.35c19.92-1.58,45.23-4.76,63.38-5.82c3.85-0.23,7.23-0.07,11,0.56"/>
	<path id="kvg:05341-s2" kvg:type="㇑" d="M52.22,11.63c1.4,1.4,2.2,3.96,2.2,6.26c0,1.13-0.03,51.22-0.19,73.41c-0.03,3.96-0.06,6.83-0.08,8.08"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05341" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 5.50 52.50)">1</text>
	<text transform="matrix(1 0 0 1 42.75 12.50)">2</text>
</g>
</svg>
`},{sentence:"<ruby>出<rt>で</rt></ruby>てきました。",target:"出",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_051fa" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:051fa" kvg:element="出">
	<g id="kvg:051fa-g1" kvg:element="山">
		<g id="kvg:051fa-g2" kvg:element="丨" kvg:radical="nelson">
			<path id="kvg:051fa-s1" kvg:type="㇑a" d="M52.76,13.38c1.42,1.42,1.86,2.91,1.86,5.31c0,3.18,0.19,61.81,0.19,68.31"/>
		</g>
		<path id="kvg:051fa-s2" kvg:type="㇄a" d="M29.02,36.13c0.98,1.12,1.23,2.87,1.06,4.04c-0.4,2.82-1.02,7.67-2.78,13.4c-0.43,1.41,0.07,2.84,1.55,2.39c10.61-3.24,33.9-5.33,55.97-6.28"/>
		<path id="kvg:051fa-s3" kvg:type="㇑" d="M86.31,30.63c0.94,1.37,1.17,3,0.94,4.87c-0.62,5.12-0.86,7.07-1.66,13.48c-0.15,1.19-0.34,1.9-0.51,3.4"/>
	</g>
	<g id="kvg:051fa-g3" kvg:element="凵" kvg:radical="tradit">
		<path id="kvg:051fa-s4" kvg:type="㇄a" d="M25.27,71.13c1.11,1.11,1.6,2.74,1.31,4.29c-0.53,2.8-1.27,8.92-3.03,14.65c-0.43,1.41,0.57,3.11,2.05,2.64c12.9-4.08,41.9-6.21,59.47-7.03"/>
		<path id="kvg:051fa-s5" kvg:type="㇑" d="M85.06,66.88c1.06,1.49,1.56,3.12,1.44,5.37c-0.27,4.8-0.23,9.14-0.45,13.51c-0.08,1.54-0.17,3.17-0.3,4.99"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_051fa" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 42.25 11.63)">1</text>
	<text transform="matrix(1 0 0 1 20.25 35.63)">2</text>
	<text transform="matrix(1 0 0 1 76.75 29.13)">3</text>
	<text transform="matrix(1 0 0 1 16.75 71.13)">4</text>
	<text transform="matrix(1 0 0 1 75.75 67.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>女<rt>おんな</rt></ruby>の<ruby>子<rt>こ</rt></ruby>がいます。",target:"女",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05973" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05973" kvg:element="女" kvg:radical="general">
	<path id="kvg:05973-s1" kvg:type="㇛" d="M53.21,18.37c0.54,2.13,0.26,3.41-0.25,5.25C50.38,33,42.62,52.75,35.75,64c-1.39,2.27-1,3.5,1,3.5c11.63,0,28.46,7.48,38.83,16.41c2.56,2.21,4.68,4.51,6.17,6.84"/>
	<path id="kvg:05973-s2" kvg:type="㇒" d="M69.62,42.18c0.5,1.7,0.63,3.57-0.01,5.93C65.93,61.8,54.61,81.6,27,91.75"/>
	<path id="kvg:05973-s3" kvg:type="㇐" d="M13.88,50.43c3.48,1.39,7.26,0.85,10.88,0.53c19.52-1.7,42.04-4.08,60.61-4.63c3.66-0.11,7.21-0.1,10.62,1.42"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05973" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 45.00 17.50)">1</text>
	<text transform="matrix(1 0 0 1 68.50 37.50)">2</text>
	<text transform="matrix(1 0 0 1 5.50 51.50)">3</text>
</g>
</svg>
`},{sentence:"<ruby>小<rt>ちい</rt></ruby>さい<ruby>山<rt>やま</rt></ruby>があります。",target:"小",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05c0f" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05c0f" kvg:element="小" kvg:radical="general">
	<path id="kvg:05c0f-s1" kvg:type="㇚" d="M54.71,18.37c1.4,1.4,2.26,3.13,2.26,5.77c0,14.56-0.26,54.91-0.26,59.87c0,11.25-7.21,1.5-8.71,0.25"/>
	<path id="kvg:05c0f-s2" kvg:type="㇒" d="M31.95,47.68c0.17,0.82,0.1,1.72-0.34,2.9C29.5,56.38,24.38,66.25,16.75,73"/>
	<path id="kvg:05c0f-s3" kvg:type="㇔" d="M80.96,47.12C86.62,52,95.25,64.62,97,72"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05c0f" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 45.50 16.13)">1</text>
	<text transform="matrix(1 0 0 1 31.00 43.28)">2</text>
	<text transform="matrix(1 0 0 1 72.50 43.28)">3</text>
</g>
</svg>
`},{sentence:"<ruby>上<rt>うえ</rt></ruby>を<ruby>見<rt>み</rt></ruby>てください。",target:"上",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e0a" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e0a" kvg:element="上">
	<g id="kvg:04e0a-g1" kvg:element="卜" kvg:original="ト" kvg:radical="nelson">
		<path id="kvg:04e0a-s1" kvg:type="㇑a" d="M52.31,15.88c1.15,1.15,2.01,3.12,2.01,5.12c0,0.82-0.22,63.62-0.25,64.63"/>
		<path id="kvg:04e0a-s2" kvg:type="㇐b/㇔" d="M58,44.75c7-0.62,14.25-2.5,17.75-3c1.38-0.2,3.5-0.38,4.75,0"/>
	</g>
	<g id="kvg:04e0a-g2" kvg:element="一" kvg:radical="tradit">
		<path id="kvg:04e0a-s3" kvg:type="㇐" d="M13.38,88.28c3.6,1.15,7.45,0.62,11.13,0.34c16.23-1.23,41.16-2.66,60.24-2.92c3.65-0.05,7.47-0.32,11,0.82"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04e0a" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 43.50 16.28)">1</text>
	<text transform="matrix(1 0 0 1 60.25 41.50)">2</text>
	<text transform="matrix(1 0 0 1 5.50 88.50)">3</text>
</g>
</svg>
`},{sentence:"<ruby>森<rt>もり</rt></ruby>には<ruby>木<rt>き</rt></ruby>がたくさんあります。",target:"森",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_068ee" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:068ee" kvg:element="森">
	<g id="kvg:068ee-g1" kvg:element="木" kvg:position="top" kvg:radical="general">
		<path id="kvg:068ee-s1" kvg:type="㇐" d="M30.12,23.67c0.87,0.24,4.4,0.62,6.7,0.33c11.37-1.4,20.02-2,36.05-3.21c2.32-0.18,2.92-0.24,4.37,0"/>
		<path id="kvg:068ee-s2" kvg:type="㇑" d="M52.75,10C53.5,10.75,54,11.75,54,13.16c0,4.34,0.06,22-0.15,31.6c-0.03,1.48-0.07,2.69-0.1,3.5"/>
		<path id="kvg:068ee-s3" kvg:type="㇒" d="M51.5,22.9c0,1.1-0.27,1.78-0.81,2.41C43,34.25,31.34,41.69,20.5,45.5"/>
		<path id="kvg:068ee-s4" kvg:type="㇏" d="M56,24.4c5.25,4.35,22.25,15.35,29.03,17.6c1.77,0.59,3.07,1.25,4.72,1.5"/>
	</g>
	<g id="kvg:068ee-g2" kvg:element="林" kvg:position="bottom">
		<g id="kvg:068ee-g3" kvg:element="木">
			<path id="kvg:068ee-s5" kvg:type="㇐" d="M12.46,61.06c0.77,0.22,3.1,0.42,5.14,0.25c6.65-0.56,15.15-1.69,23.13-2.49c2.04-0.21,3.85-0.42,5.13-0.2"/>
			<path id="kvg:068ee-s6" kvg:type="㇑" d="M32.61,46.29c0.86,0.86,1.42,1.96,1.42,3.16c0,0.79,0.06,31.46-0.14,44.06c-0.03,2.17-0.07,3.78-0.1,4.6"/>
			<path id="kvg:068ee-s7" kvg:type="㇒" d="M33.07,60.68c0,1.2-0.44,2.02-1.04,3.12C28,71.12,19.75,83,13.5,88"/>
			<path id="kvg:068ee-s8" kvg:type="㇔/㇏" d="M37.61,67.19c2.08,1.43,4.69,4.07,6.51,6.31"/>
		</g>
		<g id="kvg:068ee-g4" kvg:element="木">
			<path id="kvg:068ee-s9" kvg:type="㇐" d="M52.28,59.98c1.72,0.14,2.82,0.09,4.54-0.08c8.93-0.91,17.81-1.66,26.47-2.43c2.01-0.18,3.77-0.22,5.04,0"/>
			<path id="kvg:068ee-s10" kvg:type="㇑" d="M68.12,42.75c1.07,1.06,1.42,2.62,1.42,3.91c0,0.8,0.06,35.28-0.15,48.09c-0.03,2.01-0.06,3.49-0.1,4.25"/>
			<path id="kvg:068ee-s11" kvg:type="㇒" d="M67.84,59.75c0,1-0.19,1.62-0.81,2.87c-4.52,9.22-14.61,21.74-21.78,26.14"/>
			<path id="kvg:068ee-s12" kvg:type="㇏" d="M69.77,58.93c7.05,10.52,18.34,24.02,24.07,28.17c1.63,1.18,2.55,2,3.92,2.4"/>
		</g>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_068ee" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 22.50 22.78)">1</text>
	<text transform="matrix(1 0 0 1 46.50 7.78)">2</text>
	<text transform="matrix(1 0 0 1 25.50 37.78)">3</text>
	<text transform="matrix(1 0 0 1 68.50 30.50)">4</text>
	<text transform="matrix(1 0 0 1 5.25 63.58)">5</text>
	<text transform="matrix(1 0 0 1 25.50 53.50)">6</text>
	<text transform="matrix(1 0 0 1 17.25 75.58)">7</text>
	<text transform="matrix(1 0 0 1 43.50 68.50)">8</text>
	<text transform="matrix(1 0 0 1 53.50 56.50)">9</text>
	<text transform="matrix(1 0 0 1 57.75 40.63)">10</text>
	<text transform="matrix(1 0 0 1 52.50 69.50)">11</text>
	<text transform="matrix(1 0 0 1 78.50 68.50)">12</text>
</g>
</svg>
`},{sentence:"<ruby>人<rt>ひと</rt></ruby>がたくさんいます。",target:"人",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04eba" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04eba" kvg:element="人" kvg:radical="general">
	<path id="kvg:04eba-s1" kvg:type="㇒" d="M54.5,20c0.37,2.12,0.23,4.03-0.22,6.27C51.68,39.48,38.25,72.25,16.5,87.25"/>
	<path id="kvg:04eba-s2" kvg:type="㇏" d="M46,54.25c6.12,6,25.51,22.24,35.52,29.72c3.66,2.73,6.94,4.64,11.48,5.53"/>
</g>
</g>
<g id="kvg:StrokeNumbers_04eba" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 45.50 19.50)">1</text>
	<text transform="matrix(1 0 0 1 52.50 55.63)">2</text>
</g>
</svg>
`},{sentence:"<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みました。",target:"水",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06c34" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06c34" kvg:element="水" kvg:radical="general">
	<path id="kvg:06c34-s1" kvg:type="㇚" d="M52.77,15.08c1.08,1.08,1.67,2.49,1.76,5.52c0.4,14.55-0.26,62.16-0.26,67.12c0,9.78-7.52,0.03-9.02-1.22"/>
	<path id="kvg:06c34-s2" kvg:type="㇇" d="M17.5,45.75c1.75,0.62,3.73,0.43,5.25,0C25.88,44.88,36.09,41,38.59,40s4.47,1.24,3.75,3.5C39,54,28.25,69,19,74.75"/>
	<path id="kvg:06c34-s3" kvg:type="㇒" d="M81.22,27.5c-0.22,1.25-0.72,2.25-1.52,2.97c-5.64,5.1-12.45,9.78-22.45,13.78"/>
	<path id="kvg:06c34-s4" kvg:type="㇏" d="M57,46c8.82,10.73,19.23,21.46,28.42,27.42c2.16,1.4,4.52,3,7.08,3.58"/>
</g>
</g>
<g id="kvg:StrokeNumbers_06c34" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 43.75 15.38)">1</text>
	<text transform="matrix(1 0 0 1 10.25 47.28)">2</text>
	<text transform="matrix(1 0 0 1 83.75 24.28)">3</text>
	<text transform="matrix(1 0 0 1 64.00 51.03)">4</text>
</g>
</svg>
`},{sentence:"<ruby>正<rt>ただ</rt></ruby>しい<ruby>答<rt>こた</rt></ruby>えを選んでください。",target:"正",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06b63" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06b63" kvg:element="正">
	<g id="kvg:06b63-g1" kvg:element="一" kvg:radical="nelson">
		<path id="kvg:06b63-s1" kvg:type="㇐" d="M26.75,23.79c3.12,0.63,6.35,0.5,9.5,0.22c11.81-1.03,25.77-2.56,39.75-3.29c2.84-0.15,5.56-0.03,8.38,0.31"/>
	</g>
	<g id="kvg:06b63-g2" kvg:element="止" kvg:radical="tradit">
		<g id="kvg:06b63-g3" kvg:element="卜" kvg:original="ト">
			<path id="kvg:06b63-s2" kvg:type="㇑a" d="M52.96,25.62c1.4,1.4,2.01,2.88,2.01,5.54c0,11.55-0.01,56.3-0.01,57.34"/>
			<path id="kvg:06b63-s3" kvg:type="㇐b" d="M56.36,53.48c7.14-0.48,15.52-1.36,21.92-1.84c1.59-0.12,2.47-0.02,3.6,0.16"/>
		</g>
		<path id="kvg:06b63-s4" kvg:type="㇑a" d="M27.54,56.37c1.17,1.17,2.05,2.62,2.15,5.21c0.43,10.8,0.43,20.3,0.62,27.92"/>
		<path id="kvg:06b63-s5" kvg:type="㇐" d="M14.25,90.04C18,91,21.38,91.23,25,91c14-0.88,39.23-2.07,58.63-2.39c3.36-0.06,6.77,0.32,10,1.37"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_06b63" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 19.50 24.50)">1</text>
	<text transform="matrix(1 0 0 1 47.50 36.13)">2</text>
	<text transform="matrix(1 0 0 1 59.50 50.50)">3</text>
	<text transform="matrix(1 0 0 1 17.50 56.50)">4</text>
	<text transform="matrix(1 0 0 1 7.50 89.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>生<rt>い</rt></ruby>き物が<ruby>動<rt>うご</rt></ruby>いています。",target:"生",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0751f" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0751f" kvg:element="生" kvg:radical="general">
	<path id="kvg:0751f-s1" kvg:type="㇒" d="M31.26,25.89c0.36,1.36,0.35,2.65-0.05,3.79c-2.34,6.69-7.24,17.22-14.96,24.19"/>
	<path id="kvg:0751f-s2" kvg:type="㇐" d="M31.13,40.67c2.37,0.33,4.03,0.07,5.64-0.12c9.5-1.1,25.15-4.12,35.35-5.83c2.51-0.42,4.86-0.73,7.38-0.33"/>
	<path id="kvg:0751f-s3" kvg:type="㇑a" d="M52.31,12.63c1.28,1.28,2.01,3.12,2.01,5.23c0,4.01,0,65.14,0,69.77"/>
	<path id="kvg:0751f-s4" kvg:type="㇐" d="M29.38,64.03c2.64,0.67,5.38,0.31,8.04-0.02C49.45,62.51,62.16,61,72.5,59.86c2.38-0.26,4.99-0.76,7.38-0.23"/>
	<path id="kvg:0751f-s5" kvg:type="㇐" d="M15.75,90.25c3.04,0.75,6.21,0.94,8.4,0.8C40.62,90,68.12,86.5,83.3,85.75c3.63-0.18,7.68,0,10.07,0.73"/>
</g>
</g>
<g id="kvg:StrokeNumbers_0751f" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 22.75 25.63)">1</text>
	<text transform="matrix(1 0 0 1 36.00 37.28)">2</text>
	<text transform="matrix(1 0 0 1 42.50 10.50)">3</text>
	<text transform="matrix(1 0 0 1 21.50 66.13)">4</text>
	<text transform="matrix(1 0 0 1 8.50 89.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>青<rt>あお</rt></ruby>い<ruby>空<rt>そら</rt></ruby>が見えます。",target:"青",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_09752" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:09752" kvg:element="青" kvg:radical="general">
	<g id="kvg:09752-g1" kvg:element="龶" kvg:position="top">
		<path id="kvg:09752-s1" kvg:type="㇐" d="M32.13,21.42c1.62,0.38,4.59,0.54,6.21,0.38c9.16-0.92,21.57-2.3,34.18-3.13c2.69-0.18,3.81-0.09,5.23-0.02"/>
		<path id="kvg:09752-s2" kvg:type="㇑a" d="M52.81,8.63c1.15,1.15,1.76,2.62,1.76,4.42c0,0.43-0.09,28.62-0.07,30.19"/>
		<path id="kvg:09752-s3" kvg:type="㇐" d="M34,33.37c2.39,0.62,4.73,0.4,7.13,0.05c9.07-1.31,22.36-2.96,28.71-3.46c2.21-0.17,3.85-0.08,5.03-0.02"/>
		<path id="kvg:09752-s4" kvg:type="㇐" d="M13.5,47c2.5,0.75,5.8,0.86,8.88,0.55c19.41-1.93,51.54-5.05,65.69-5.8c3.1-0.16,7.07,0,9.3,0.73"/>
	</g>
	<g id="kvg:09752-g2" kvg:element="月" kvg:position="bottom">
		<path id="kvg:09752-s5" kvg:type="㇑" d="M36.26,54.19c1.09,1.09,1.59,2.89,1.59,3.52c0,4.92,0,20.42,0,34.56c0,2.23-0.1,4.11-0.1,6.24"/>
		<path id="kvg:09752-s6" kvg:type="㇆a" d="M38.2,55.78c0.59-0.03,29.02-2.73,30.58-2.8c2.47-0.11,3.73,0.89,3.73,3.05c0,3.72,0.08,26.23,0.08,38.15c0,10.58-6.97,1.31-7.86,0.57"/>
		<path id="kvg:09752-s7" kvg:type="㇐a" d="M39.2,67.61c5.93-0.23,24.72-2.4,32.25-2.4"/>
		<path id="kvg:09752-s8" kvg:type="㇐a" d="M39.12,79.23c5.88-0.35,24.26-1.98,32.13-2.31"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_09752" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 25.50 23.50)">1</text>
	<text transform="matrix(1 0 0 1 42.75 9.50)">2</text>
	<text transform="matrix(1 0 0 1 25.50 35.50)">3</text>
	<text transform="matrix(1 0 0 1 5.50 48.50)">4</text>
	<text transform="matrix(1 0 0 1 29.50 61.50)">5</text>
	<text transform="matrix(1 0 0 1 39.50 53.50)">6</text>
	<text transform="matrix(1 0 0 1 41.50 65.50)">7</text>
	<text transform="matrix(1 0 0 1 41.50 76.50)">8</text>
</g>
</svg>
`},{sentence:"<ruby>夕<rt>ゆう</rt></ruby>方に<ruby>帰<rt>かえ</rt></ruby>ります。",target:"夕",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05915" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05915" kvg:element="夕" kvg:radical="general">
	<path id="kvg:05915-s1" kvg:type="㇒" d="M52.99,13.14c0.26,1.61,0,3.47-0.49,4.61C49,26,41.38,39.25,27.56,48.97"/>
	<path id="kvg:05915-s2" kvg:type="㇇" d="M54,23.5c1.75,0.5,3.47,0.6,4.78,0.33c5.22-1.08,10.97-2.58,17.56-4.58c4.26-1.29,6.14,0.55,4.41,4.53C70,48.5,48.62,78.38,17.75,93"/>
	<path id="kvg:05915-s3" kvg:type="㇔" d="M45.25,42.62c4.84,2.36,12.04,9.2,13.25,12.88"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05915" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 45.50 13.50)">1</text>
	<text transform="matrix(1 0 0 1 58.50 20.50)">2</text>
	<text transform="matrix(1 0 0 1 48.50 42.50)">3</text>
</g>
</svg>
`},{sentence:"<ruby>石<rt>いし</rt></ruby>を拾いました。",target:"石",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_077f3" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:077f3" kvg:element="石" kvg:radical="general">
	<path id="kvg:077f3-s1" kvg:type="㇐" d="M19.88,26.65c3.2,0.73,6.6,0.59,8.91,0.4c18.28-1.55,33.06-3.55,52.96-4.66c3.87-0.22,6.42-0.02,8.12,0.39"/>
	<path id="kvg:077f3-s2" kvg:type="㇒" d="M42.42,29.43c0.33,1.45,0.22,2.69-0.15,4.17C39.38,45,30.75,61.62,15,73.5"/>
	<g id="kvg:077f3-g1" kvg:element="口">
		<path id="kvg:077f3-s3" kvg:type="㇑" d="M34.5,56.24c0.71,0.64,1.62,2.13,1.75,2.97c0.87,5.49,1.95,14.48,3.14,24.27c0.2,1.68,0.41,3.36,0.6,5.02"/>
		<path id="kvg:077f3-s4" kvg:type="㇕b" d="M35,56.3c12.06-1.23,38.12-3.55,45.33-4.31c3.05-0.32,4.48,2.33,3.94,4.1c-1.56,5.08-3.24,16.32-4.5,24.38"/>
		<path id="kvg:077f3-s5" kvg:type="㇐b" d="M40.83,84.37c7.19-0.52,22.62-1.77,34.17-2.38c2.39-0.13,4.6-0.21,6.5-0.24"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_077f3" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 12.50 27.50)">1</text>
	<text transform="matrix(1 0 0 1 33.50 37.50)">2</text>
	<text transform="matrix(1 0 0 1 29.50 71.50)">3</text>
	<text transform="matrix(1 0 0 1 42.50 52.50)">4</text>
	<text transform="matrix(1 0 0 1 43.50 80.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>赤<rt>あか</rt></ruby>い<ruby>花<rt>はな</rt></ruby>が咲きました。",target:"赤",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_08d64" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:08d64" kvg:element="赤" kvg:radical="general">
	<g id="kvg:08d64-g1" kvg:element="土" kvg:position="top">
		<path id="kvg:08d64-s1" kvg:type="㇐" d="M30.13,29.42c2.55,0.64,5.18,0.48,7.76,0.15c9.53-1.23,23.14-3.87,31.61-4.52c2.51-0.19,4.9-0.13,7.38,0.25"/>
		<path id="kvg:08d64-s2" kvg:type="㇑a" d="M52.24,12.45c1.53,1.53,2.01,3.55,2.01,5.05c0,3.33,0.04,25.2,0,26.25"/>
		<path id="kvg:08d64-s3" kvg:type="㇐" d="M14.38,49.17c2.64,0.58,4.98,0.91,10.12,0.13c18.5-2.8,40.29-6,58.24-7.47c3.33-0.27,6.79-0.66,10.13-0.3"/>
	</g>
	<g id="kvg:08d64-g2" kvg:position="bottom">
		<path id="kvg:08d64-s4" kvg:type="㇒" d="M42.78,49.89c0.97,1.23,1.22,3.09,1.2,4.53c-0.22,15.82,0.15,26.07-8.72,37.82"/>
		<path id="kvg:08d64-s5" kvg:type="㇚" d="M61.02,46.83c1.39,1.39,2.01,2.92,2.01,5.02c0,13.52-0.06,30.44-0.06,35.4c0,12.25-3.71,5.75-6.71,2.75"/>
		<path id="kvg:08d64-s6" kvg:type="㇒" d="M28.53,63.89c0.35,1.23,0.25,2.31-0.02,3.18c-1.63,5.43-4.42,9.93-9.26,15.93"/>
		<path id="kvg:08d64-s7" kvg:type="㇔" d="M78.77,63.83c3.86,3.92,9.11,12.92,10.98,19.17"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_08d64" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 23.50 29.50)">1</text>
	<text transform="matrix(1 0 0 1 42.50 12.50)">2</text>
	<text transform="matrix(1 0 0 1 7.50 49.50)">3</text>
	<text transform="matrix(1 0 0 1 35.50 57.50)">4</text>
	<text transform="matrix(1 0 0 1 54.50 55.50)">5</text>
	<text transform="matrix(1 0 0 1 19.50 64.50)">6</text>
	<text transform="matrix(1 0 0 1 75.50 59.50)">7</text>
</g>
</svg>
`},{sentence:"<ruby>千<rt>せん</rt></ruby>円を出してください。",target:"千",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05343" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05343" kvg:element="千">
	<g id="kvg:05343-g1" kvg:element="丿" kvg:position="top" kvg:radical="nelson">
		<path id="kvg:05343-s1" kvg:type="㇒" d="M70.38,10.17c-0.13,1.58-0.83,2.64-2.17,3.67c-5.71,4.41-21.46,11.91-41.57,16.82"/>
	</g>
	<g id="kvg:05343-g2" kvg:element="十" kvg:position="bottom" kvg:radical="tradit">
		<path id="kvg:05343-s2" kvg:type="㇐" d="M12.13,50.83c3.36,0.94,7.21,0.75,10.63,0.49c17.76-1.34,37.63-4.16,66.24-4.94c3.08-0.08,6.08-0.14,9.13,0.38"/>
		<path id="kvg:05343-s3" kvg:type="㇑" d="M54.56,25.25c1.03,1.03,2.01,3,2.01,5.18c0,0.9-0.07,46.38-0.19,63.58c-0.02,2.93-0.04,5.04-0.06,5.99"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_05343" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 61.75 8.13)">1</text>
	<text transform="matrix(1 0 0 1 5.25 52.63)">2</text>
	<text transform="matrix(1 0 0 1 48.50 35.50)">3</text>
</g>
</svg>
`},{sentence:"<ruby>川<rt>かわ</rt></ruby>の<ruby>水<rt>みず</rt></ruby>がきれいです。",target:"川",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05ddd" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05ddd" kvg:element="川" kvg:original="巛" kvg:radical="general">
	<path id="kvg:05ddd-s1" kvg:type="㇒" d="M27.22,25.68c0.91,1.57,1.18,3.45,1.19,5.37C28.5,43.5,28.5,69,17.39,84.15"/>
	<path id="kvg:05ddd-s2" kvg:type="㇑" d="M53.75,23.63c0.94,0.94,1.41,2.37,1.41,3.9c0,0.58-0.01,28.48-0.08,41.71c-0.02,3.31-0.04,5.74-0.06,6.63"/>
	<path id="kvg:05ddd-s3" kvg:type="㇑" d="M85.56,15.63c1.09,1.09,1.76,2.62,1.76,4.25c0,0.74,0.23,46.86,0.09,66.12c-0.03,4.31-0.06,7.61-0.09,8.63"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05ddd" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 18.50 25.50)">1</text>
	<text transform="matrix(1 0 0 1 45.75 23.50)">2</text>
	<text transform="matrix(1 0 0 1 75.50 16.50)">3</text>
</g>
</svg>
`},{sentence:"<ruby>先<rt>さき</rt></ruby>に行ってください。",target:"先",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05148" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05148" kvg:element="先">
	<g id="kvg:05148-g1" kvg:position="top">
		<path id="kvg:05148-s1" kvg:type="㇒" d="M37.51,21c0.07,0.62,0.15,1.61-0.14,2.49C35.25,29.88,31.62,37.38,24.5,45"/>
		<path id="kvg:05148-s2" kvg:type="㇐" d="M38.13,32.04c1.5,0.09,3.95-0.16,4.64-0.22c6.48-0.57,20.36-1.82,27.82-2.94c1.65-0.25,3.66-0.13,5.16,0.27"/>
		<path id="kvg:05148-s3" kvg:type="㇑a" d="M52.81,12.38c1.28,1.28,2.01,3.12,2.01,4.75c0,0.75-0.05,31.92-0.07,32.87"/>
		<path id="kvg:05148-s4" kvg:type="㇐" d="M15.88,53.26c3.42,0.98,7.15,0.5,10.62,0.22c15.99-1.3,38.99-3.55,59-4.4c2.94-0.13,5.84-0.03,8.75,0.47"/>
	</g>
	<g id="kvg:05148-g2" kvg:element="儿" kvg:original="八" kvg:position="bottom" kvg:radical="general">
		<g id="kvg:05148-g3" kvg:element="丿">
			<path id="kvg:05148-s5" kvg:type="㇒" d="M45.18,55.68c0.32,1.45,0.15,2.48-0.15,3.85C43.24,67.65,35,86.62,20,96.38"/>
		</g>
		<path id="kvg:05148-s6" kvg:type="㇟" d="M60.49,53.62c1.07,1.07,1.38,2.71,1.38,4.98c0,7.78-0.22,14.88-0.22,21.89c0,15.14,1.1,16.04,15.85,16.04c14.62,0,15.64-1.78,15.64-11.29"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_05148" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 29.50 20.13)">1</text>
	<text transform="matrix(1 0 0 1 42.50 28.50)">2</text>
	<text transform="matrix(1 0 0 1 43.50 11.50)">3</text>
	<text transform="matrix(1 0 0 1 7.50 54.50)">4</text>
	<text transform="matrix(1 0 0 1 36.75 62.13)">5</text>
	<text transform="matrix(1 0 0 1 53.50 65.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きてください。",target:"早",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_065e9" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:065e9" kvg:element="早">
	<g id="kvg:065e9-g1" kvg:element="日" kvg:position="top" kvg:radical="general">
		<path id="kvg:065e9-s1" kvg:type="㇑" d="M28,16c1.25,1.25,1.82,2.05,2.25,4c1,4.5,2.75,16.75,4.13,24.98c0.32,1.91,0.49,2.52,0.96,4.27"/>
		<path id="kvg:065e9-s2" kvg:type="㇕a" d="M30.51,17.25c0.94-0.05,42.78-4.51,46.27-4c1.72,0.25,3.37,2.22,2.71,4.75c-1.01,3.87-2.86,13.89-4.73,22.06c-0.42,1.86-0.89,3.07-1.51,5.44"/>
		<path id="kvg:065e9-s3" kvg:type="㇐a" d="M33.61,31.75c9.14-1,34.52-3.12,42.21-3.5"/>
		<path id="kvg:065e9-s4" kvg:type="㇐a" d="M36.01,46.5C47.88,45.5,67,44,73,44"/>
	</g>
	<g id="kvg:065e9-g2" kvg:element="十" kvg:position="bottom">
		<path id="kvg:065e9-s5" kvg:type="㇐" d="M14.13,66.16c1.94,0.48,5.52,0.61,7.46,0.48c16.82-1.13,52.04-3.88,67.86-3.84c3.24,0.01,5.19,0.23,6.81,0.47"/>
		<path id="kvg:065e9-s6" kvg:type="㇑" d="M53.23,47.75c1.13,1.13,1.47,2.88,1.47,4.49c0,0.91-0.01,26.62-0.09,39.51c-0.02,2.81-0.04,5.02-0.05,6.25"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_065e9" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 20.50 21.13)">1</text>
	<text transform="matrix(1 0 0 1 32.50 13.50)">2</text>
	<text transform="matrix(1 0 0 1 37.00 27.13)">3</text>
	<text transform="matrix(1 0 0 1 38.50 42.13)">4</text>
	<text transform="matrix(1 0 0 1 7.50 67.50)">5</text>
	<text transform="matrix(1 0 0 1 46.50 55.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>草<rt>くさ</rt></ruby>が生えています。",target:"草",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_08349" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:08349" kvg:element="草">
	<g id="kvg:08349-g1" kvg:element="艹" kvg:variant="true" kvg:original="艸" kvg:position="top" kvg:radical="general">
		<path id="kvg:08349-s1" kvg:type="㇐" d="M19.62,24.14c2.75,0.7,5.46,0.47,8.25,0.22c14.47-1.31,38.06-3.33,54-3.91c2.84-0.1,5.57-0.05,8.38,0.37"/>
		<path id="kvg:08349-s2" kvg:type="㇑a" d="M40,14.12c1,0.88,1.56,2.03,1.67,2.75c0.99,6.74,1.59,12.93,1.88,15.38"/>
		<path id="kvg:08349-s3" kvg:type="㇑a" d="M67.34,10.88c0.53,0.88,0.55,2.05,0.34,3.18c-1.19,6.49-2.46,11.76-3.43,15.9"/>
	</g>
	<g id="kvg:08349-g2" kvg:element="早" kvg:position="bottom" kvg:phon="早">
		<g id="kvg:08349-g3" kvg:element="日">
			<path id="kvg:08349-s4" kvg:type="㇑" d="M31.25,38.22c0.77,0.77,1.5,2.03,1.8,3.69c0.75,4.08,2.31,13.24,3.34,19.81c0.36,2.28,0.61,2.53,0.82,4.03"/>
			<path id="kvg:08349-s5" kvg:type="㇕a" d="M33.27,39.47c12.1-1.34,38.03-4.49,41.29-4.48C76.88,35,78.54,36.4,78,39.04c-0.87,4.21-2.32,12.1-3.89,19.44c-0.32,1.47-0.61,2.77-0.86,3.77"/>
			<path id="kvg:08349-s6" kvg:type="㇐a" d="M35.78,50.62c7.22-0.62,30.84-3,39.2-3.26"/>
			<path id="kvg:08349-s7" kvg:type="㇐a" d="M37.62,63c10.62-1,29.12-3,35.24-3.2"/>
		</g>
		<g id="kvg:08349-g4" kvg:element="十">
			<path id="kvg:08349-s8" kvg:type="㇐" d="M17.63,77c3.15,0.81,6.54,0.59,9.74,0.36c20.78-1.5,37.31-3.46,56.75-3.95c3.33-0.08,6.58-0.07,9.88,0.44"/>
			<path id="kvg:08349-s9" kvg:type="㇑" d="M54.5,64.25c0.75,0.75,1.19,2,1.19,3.56c0,0.59,0,17.13-0.07,26.19c-0.02,2.5-0.04,4.49-0.05,5.5"/>
		</g>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_08349" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 13.00 24.43)">1</text>
	<text transform="matrix(1 0 0 1 31.50 12.50)">2</text>
	<text transform="matrix(1 0 0 1 58.50 10.50)">3</text>
	<text transform="matrix(1 0 0 1 25.50 46.50)">4</text>
	<text transform="matrix(1 0 0 1 33.75 34.63)">5</text>
	<text transform="matrix(1 0 0 1 39.50 47.50)">6</text>
	<text transform="matrix(1 0 0 1 39.50 60.13)">7</text>
	<text transform="matrix(1 0 0 1 9.75 78.13)">8</text>
	<text transform="matrix(1 0 0 1 47.50 70.50)">9</text>
</g>
</svg>
`},{sentence:"<ruby>足<rt>あし</rt></ruby>を伸ばしてください。",target:"足",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_08db3" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:08db3" kvg:element="足" kvg:radical="general">
	<g id="kvg:08db3-g1" kvg:element="口" kvg:position="top">
		<path id="kvg:08db3-s1" kvg:type="㇑" d="M29.75,18.99c0.82,0.82,1.43,1.68,1.66,2.33c1.15,3.39,3.44,13.48,4.61,18.68c0.34,1.51,0.59,2.61,0.68,3"/>
		<path id="kvg:08db3-s2" kvg:type="㇕b" d="M31.56,19.63c12.09-1.87,34.1-5.01,40.27-5.14c2.89-0.06,3.98,2.41,3.7,3.88c-0.73,3.84-3.94,15.23-4.51,17.27"/>
		<path id="kvg:08db3-s3" kvg:type="㇐b" d="M37.25,40.74c7.07-0.43,20.75-2.48,31.53-3.73c1.71-0.2,3.34-0.14,4.86-0.32"/>
	</g>
	<g id="kvg:08db3-g2" kvg:element="龰" kvg:position="bottom">
		<path id="kvg:08db3-s4" kvg:type="㇑a" d="M52.75,41c0.81,0.81,1.4,1.75,1.4,3.62c0,5.11,0.37,32.49,0.35,33.88"/>
		<path id="kvg:08db3-s5" kvg:type="㇐b" d="M55.75,59.25C56.94,59.25,66.25,57.75,73.54,56.53C75.08,56.27,76.53,56.25,77.75,56.25"/>
		<path id="kvg:08db3-s6" kvg:type="㇒" d="M36.49,55c0.13,1.5,0.14,3.05-0.2,4.35c-2.04,7.78-10.16,24.15-17.79,30.9"/>
		<path id="kvg:08db3-s7" kvg:type="㇏" d="M33.25,70.75C41.75,72.12,67,87.38,82,92.5c2.94,1,6.85,1.68,9.75,2"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_08db3" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 22.50 25.50)">1</text>
	<text transform="matrix(1 0 0 1 32.50 15.50)">2</text>
	<text transform="matrix(1 0 0 1 39.50 36.50)">3</text>
	<text transform="matrix(1 0 0 1 46.50 49.50)">4</text>
	<text transform="matrix(1 0 0 1 57.50 55.50)">5</text>
	<text transform="matrix(1 0 0 1 27.50 55.50)">6</text>
	<text transform="matrix(1 0 0 1 35.25 81.50)">7</text>
</g>
</svg>
`},{sentence:"<ruby>村<rt>むら</rt></ruby>に住んでいます。",target:"村",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06751" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06751" kvg:element="村">
	<g id="kvg:06751-g1" kvg:element="木" kvg:position="left" kvg:radical="general">
		<path id="kvg:06751-s1" kvg:type="㇐" d="M12.78,39.23c1.97,0.4,3.24,0.35,4.68,0.23c6.92-0.58,18.93-1.85,28.85-2.73c1.44-0.13,1.8-0.18,2.71,0"/>
		<path id="kvg:06751-s2" kvg:type="㇑" d="M34.11,13.5c1.13,1.13,2.29,3,2.29,5.34c0,0.83-0.08,48.97-0.22,67.91c-0.03,3.54-0.05,6.55-0.08,7.5"/>
		<path id="kvg:06751-s3" kvg:type="㇒" d="M35.44,39.32c0,0.93-0.26,1.58-0.6,2.35C30.38,51.75,23,63.5,15.11,72.76"/>
		<path id="kvg:06751-s4" kvg:type="㇔/㇏" d="M40.72,48.97c2.53,1.53,6.78,7.28,8.66,11.26"/>
	</g>
	<g id="kvg:06751-g2" kvg:element="寸" kvg:position="right" kvg:phon="寸">
		<path id="kvg:06751-s5" kvg:type="㇐" d="M52.62,41.52c2.29,0.48,4.16,0.6,6.01,0.4c13.35-1.44,23.8-3.3,34.15-3.71c1.83-0.07,4.26-0.22,5.84,0.14"/>
		<path id="kvg:06751-s6" kvg:type="㇚" d="M79.89,13.25c1.49,1.49,2.26,3.12,2.26,5.52c0,14.56,0.32,65.91,0.24,70.87c-0.14,8.74-5.18,4.78-9.71,0.25"/>
		<path id="kvg:06751-s7" kvg:type="㇔" d="M59.58,56.78c2.74,2.07,7.07,8.52,7.75,11.75"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_06751" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 5.50 37.63)">1</text>
	<text transform="matrix(1 0 0 1 27.00 10.50)">2</text>
	<text transform="matrix(1 0 0 1 23.25 49.63)">3</text>
	<text transform="matrix(1 0 0 1 44.25 48.13)">4</text>
	<text transform="matrix(1 0 0 1 54.50 38.50)">5</text>
	<text transform="matrix(1 0 0 1 71.50 11.50)">6</text>
	<text transform="matrix(1 0 0 1 60.75 54.50)">7</text>
</g>
</svg>
`},{sentence:"<ruby>大<rt>おお</rt></ruby>きな<ruby>家<rt>いえ</rt></ruby>があります。",target:"大",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05927" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05927" kvg:element="大" kvg:radical="general">
	<path id="kvg:05927-s1" kvg:type="㇐" d="M19.38,48.25c1.49,0.51,5.03,0.89,7.6,0.49C41.12,46.5,63,43,77.19,42.44c2.7-0.11,4.87-0.06,7.31,0.33"/>
	<path id="kvg:05927-s2" kvg:type="㇒" d="M49.5,18c0.88,2.12,1.03,4.16,0.99,6.32C50,57,37.75,81.12,18,91.75"/>
	<path id="kvg:05927-s3" kvg:type="㇏" d="M49.5,46c9,10.5,28.5,36.25,37.49,43.28c3.06,2.39,5.62,3.75,7.01,3.97"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05927" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 12.75 49.63)">1</text>
	<text transform="matrix(1 0 0 1 40.50 18.50)">2</text>
	<text transform="matrix(1 0 0 1 61.50 55.63)">3</text>
</g>
</svg>
`},{sentence:"<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>がいます。",target:"男",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_07537" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:07537" kvg:element="男">
	<g id="kvg:07537-g1" kvg:element="田" kvg:position="top" kvg:radical="general">
		<path id="kvg:07537-s1" kvg:type="㇑" d="M26.5,14.25c0.88,0.88,1.56,1.99,1.73,2.98c0.84,4.77,2.47,16.75,3.34,26.04c0.18,1.95,0.37,2.37,0.55,4.23"/>
		<path id="kvg:07537-s2" kvg:type="㇕a" d="M29,15.95c11.38-1.45,41.21-4.57,49.56-4.71c3.9-0.07,5.44,1.51,4.91,5.29c-0.45,3.21-3.15,15.19-4.94,22.23c-0.41,1.62-0.79,2.99-1.4,4.19"/>
		<path id="kvg:07537-s3" kvg:type="㇑a" d="M54,15.97c0.77,0.77,1,1.91,1,2.79c0.02,6.32,0.2,22,0.2,22.75"/>
		<path id="kvg:07537-s4" kvg:type="㇐a" d="M30.98,30.82C45,29.12,57.12,28,80.53,26.34"/>
		<path id="kvg:07537-s5" kvg:type="㇐a" d="M32.87,44.74c11.38-1.24,28.38-2.99,44.14-3.7"/>
	</g>
	<g id="kvg:07537-g2" kvg:element="力" kvg:position="bottom">
		<path id="kvg:07537-s6" kvg:type="㇆" d="M19.98,60.98c2.15,0.67,4.58,0.78,6.77,0.53c13.46-1.53,42.24-5.66,51.88-6.86c5.26-0.66,6.86,1.04,5.72,6.27c-1.92,8.83-9,27.39-15.66,33.19c-5.11,4.45-7.44,2.14-9.69-0.86"/>
		<path id="kvg:07537-s7" kvg:type="㇒" d="M53.22,46.43c0.28,1.32,0.29,3.04-0.2,4.57C49.12,63.12,38,81.25,17.14,92.06"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_07537" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 18.75 19.50)">1</text>
	<text transform="matrix(1 0 0 1 31.50 12.50)">2</text>
	<text transform="matrix(1 0 0 1 47.50 24.13)">3</text>
	<text transform="matrix(1 0 0 1 34.00 27.50)">4</text>
	<text transform="matrix(1 0 0 1 34.50 41.50)">5</text>
	<text transform="matrix(1 0 0 1 11.50 63.50)">6</text>
	<text transform="matrix(1 0 0 1 45.50 52.50)">7</text>
</g>
</svg>
`},{sentence:"<ruby>竹<rt>たけ</rt></ruby>が生えています。",target:"竹",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_07af9" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:07af9" kvg:element="竹" kvg:radical="general">
	<g id="kvg:07af9-g1" kvg:position="left">
		<path id="kvg:07af9-s1" kvg:type="㇒" d="M30.2,16.43c0.17,0.95,0.19,2.1-0.09,3.24c-1.74,7.09-7.28,22.56-15.48,31.74"/>
		<path id="kvg:07af9-s2" kvg:type="㇐b" d="M24.48,43.58c6.14,0.04,14.59-2.46,21.58-3.72c1.9-0.34,3.43-0.56,4.32-0.56"/>
		<path id="kvg:07af9-s3" kvg:type="㇑" d="M35.21,45.61c0.96,0.96,1.55,2.39,1.55,4.13c0,10.53-0.09,29.94-0.24,40.26c-0.04,3.02-0.07,4.71-0.07,5.62"/>
	</g>
	<g id="kvg:07af9-g2" kvg:position="right">
		<path id="kvg:07af9-s4" kvg:type="㇒" d="M68.7,11.68c0.43,1.2,0.21,2.55-0.1,3.79C66.25,24.75,59.75,38,51.14,49.4"/>
		<path id="kvg:07af9-s5" kvg:type="㇐b" d="M64.48,36.08c8.14,0.04,20.64-3.08,28.54-4.71c2.1-0.43,3.83-0.57,4.86-0.57"/>
		<path id="kvg:07af9-s6" kvg:type="㇚" d="M76.77,37.83c1.08,1.08,2.01,2.79,2.01,5.02c0,14.56-0.01,42.16-0.01,47.12c0,11.03-4.89,4.66-7.96,1"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_07af9" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 21.50 16.50)">1</text>
	<text transform="matrix(1 0 0 1 29.50 39.50)">2</text>
	<text transform="matrix(1 0 0 1 28.50 54.13)">3</text>
	<text transform="matrix(1 0 0 1 58.50 11.50)">4</text>
	<text transform="matrix(1 0 0 1 68.50 32.50)">5</text>
	<text transform="matrix(1 0 0 1 70.50 46.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>中<rt>なか</rt></ruby>を見てください。",target:"中",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e2d" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e2d" kvg:element="中">
	<g id="kvg:04e2d-g1" kvg:element="口">
		<path id="kvg:04e2d-s1" kvg:type="㇑" d="M19.89,36.87c1,1,1.74,2.25,2.01,3.65c1.13,5.71,2.58,13.06,4.17,22.97c0.27,1.68,0.55,4.43,0.83,6.26"/>
		<path id="kvg:04e2d-s2" kvg:type="㇕b" d="M23.33,39.51C37.12,37.62,70.88,34,84,33.24c4.38-0.25,6,1.14,5.12,4.42c-1.53,5.7-5.61,20.18-6.12,22.09"/>
		<path id="kvg:04e2d-s3" kvg:type="㇐b" d="M27.74,64.84C40.12,63.62,61.86,62.2,79,60.77c2.36-0.2,5.75-0.27,7.25-0.27"/>
	</g>
	<g id="kvg:04e2d-g2" kvg:element="丨" kvg:radical="general">
		<path id="kvg:04e2d-s4" kvg:type="㇑" d="M52.5,11.5c1.44,1.44,2.25,3.5,2.25,5.06c0,0.9,0.06,56.6-0.15,76.69c-0.03,3.3-0.07,5.6-0.1,6.5"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04e2d" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 14.50 45.13)">1</text>
	<text transform="matrix(1 0 0 1 24.50 35.50)">2</text>
	<text transform="matrix(1 0 0 1 30.50 60.75)">3</text>
	<text transform="matrix(1 0 0 1 43.50 12.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>虫<rt>むし</rt></ruby>が飛んでいます。",target:"虫",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0866b" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0866b" kvg:element="虫" kvg:radical="general">
	<g id="kvg:0866b-g1" kvg:element="中">
		<g id="kvg:0866b-g2" kvg:element="口">
			<path id="kvg:0866b-s1" kvg:type="㇑" d="M23.64,36.26c0.8,0.8,1.49,1.74,1.7,2.54c1.23,4.63,2.06,10.62,3.38,18.66c0.25,1.52,0.51,3.11,0.78,4.78"/>
			<path id="kvg:0866b-s2" kvg:type="㇕b" d="M25.76,38.04c14.91-1.35,45.03-4.16,53.74-4.54c3.84-0.17,4.01,1.78,3.63,4.25c-0.68,4.46-2.51,12.12-4.07,17.32"/>
			<path id="kvg:0866b-s3" kvg:type="㇐b" d="M30,60c9.65-0.99,29.67-2.45,44.76-3.49c2.03-0.14,3.98-0.27,5.79-0.4"/>
		</g>
		<g id="kvg:0866b-g3" kvg:element="丨">
			<path id="kvg:0866b-s4" kvg:type="㇑a" d="M52.51,16.12c1,1,1.67,2.84,1.67,3.99c0,5.39,0.08,62.61,0.04,63.63"/>
		</g>
	</g>
	<path id="kvg:0866b-s5" kvg:type="㇀" d="M22.75,89.75c1.31,1.31,3,1.5,4.25,1.25s47-10.5,54.75-12.5"/>
	<path id="kvg:0866b-s6" kvg:type="㇔" d="M74.96,69.87c5.12,3.62,12.42,14.38,14.5,20.5"/>
</g>
</g>
<g id="kvg:StrokeNumbers_0866b" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 17.50 43.50)">1</text>
	<text transform="matrix(1 0 0 1 28.50 34.50)">2</text>
	<text transform="matrix(1 0 0 1 32.50 56.50)">3</text>
	<text transform="matrix(1 0 0 1 41.50 17.50)">4</text>
	<text transform="matrix(1 0 0 1 14.50 89.50)">5</text>
	<text transform="matrix(1 0 0 1 75.50 67.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>町<rt>まち</rt></ruby>を歩きます。",target:"町",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0753a" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0753a" kvg:element="町">
	<g id="kvg:0753a-g1" kvg:element="田" kvg:position="left" kvg:radical="general">
		<path id="kvg:0753a-s1" kvg:type="㇑" d="M11.25,30.5c1.12,1.12,1.5,2.12,1.65,3.26C13.69,39.98,13.97,58,14.54,71c0.08,1.89,0.16,2.49,0.23,4.25"/>
		<path id="kvg:0753a-s2" kvg:type="㇕a" d="M13.75,32.29c7.37-0.79,21.04-2.87,25.07-3.05c2-0.09,3.01,1.91,2.9,3.93c-0.35,6.55-1.51,24.68-2.05,36.33c-0.07,1.5-0.18,2.62-0.43,3.75"/>
		<path id="kvg:0753a-s3" kvg:type="㇑a" d="M25.31,31.8c0.94,0.95,1.48,2.28,1.47,3.7c-0.02,6.52,0.13,33.79,0.13,34.55"/>
		<path id="kvg:0753a-s4" kvg:type="㇐a" d="M14.43,51.84c2.37-0.37,23.45-2.56,25.41-2.56"/>
		<path id="kvg:0753a-s5" kvg:type="㇐a" d="M15.15,71.79c6.98-0.42,15.85-1.42,24.06-1.88"/>
	</g>
	<g id="kvg:0753a-g2" kvg:element="丁" kvg:position="right" kvg:phon="丁">
		<g id="kvg:0753a-g3" kvg:element="一">
			<path id="kvg:0753a-s6" kvg:type="㇐" d="M49,27.6c1.48,0.42,4.18,0.56,5.66,0.42c10.97-1.02,25.72-2.9,37.18-3.63c2.45-0.16,3.91-0.01,5.16,0.41"/>
		</g>
		<g id="kvg:0753a-g4" kvg:element="亅">
			<path id="kvg:0753a-s7" kvg:type="㇚" d="M71.77,29.08c1.2,1.2,2,2.75,2,5.81c0,17.98,0,51.3,0,56.3c0,11.06-6.02,2.81-9.21-0.25"/>
		</g>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_0753a" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 5.25 37.63)">1</text>
	<text transform="matrix(1 0 0 1 15.75 29.13)">2</text>
	<text transform="matrix(1 0 0 1 29.50 39.50)">3</text>
	<text transform="matrix(1 0 0 1 17.25 48.13)">4</text>
	<text transform="matrix(1 0 0 1 17.50 67.63)">5</text>
	<text transform="matrix(1 0 0 1 47.25 24.50)">6</text>
	<text transform="matrix(1 0 0 1 65.50 38.50)">7</text>
</g>
</svg>
`},{sentence:"<ruby>天<rt>てん</rt></ruby>気がいいですね。",target:"天",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05929" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05929" kvg:element="天">
	<g id="kvg:05929-g1" kvg:element="一" kvg:position="top" kvg:radical="nelson">
		<path id="kvg:05929-s1" kvg:type="㇐" d="M21.63,24.83c1.81,0.46,5.14,0.4,6.94,0.21c14.55-1.53,35.18-4.16,50.1-5.25c3.01-0.22,4.83,0.22,6.34,0.45"/>
	</g>
	<g id="kvg:05929-g2" kvg:element="大" kvg:position="bottom" kvg:radical="tradit">
		<path id="kvg:05929-s2" kvg:type="㇐" d="M25.31,51.64c2.09,0.31,3.47,0.4,5.94,0.11c10.62-1.25,35.88-4.38,45.96-4.93c1.74-0.1,3.62,0.03,5.99,0.45"/>
		<path id="kvg:05929-s3" kvg:type="㇒" d="M50.32,26c0.68,1,1.3,3.43,1.29,5.37c-0.24,30.51-14.86,50.88-33.86,60.25"/>
		<path id="kvg:05929-s4" kvg:type="㇏" d="M50.1,51.39C58.71,60,75.07,78.48,86.59,87.05c2.33,1.73,4.41,3.08,7.91,4.2"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_05929" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 12.75 22.63)">1</text>
	<text transform="matrix(1 0 0 1 17.25 51.13)">2</text>
	<text transform="matrix(1 0 0 1 42.75 36.13)">3</text>
	<text transform="matrix(1 0 0 1 65.25 61.63)">4</text>
</g>
</svg>
`},{sentence:"<ruby>田<rt>た</rt></ruby>で<ruby>稲<rt>いね</rt></ruby>を育てます。",target:"田",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_07530" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:07530" kvg:element="田" kvg:radical="general">
	<path id="kvg:07530-s1" kvg:type="㇑" d="M18.25,27.48c1.2,1.2,2.11,2.68,2.28,3.95C22,42.25,23.52,62.11,24.81,80c0.17,2.4,0.34,3.75,0.49,6"/>
	<path id="kvg:07530-s2" kvg:type="㇕a" d="M20.85,29.29c8.52-0.54,50.04-3.17,61.58-4.05c4.84-0.37,7.32,2.01,7.04,5.63c-0.69,8.8-2.83,30.69-3.99,46.64c-0.18,2.44-0.34,4.75-0.47,6.86"/>
	<path id="kvg:07530-s3" kvg:type="㇑a" d="M53.25,29c0.88,0.88,1.19,2.12,1.19,3.5c0,9.52,0.31,46.37,0.31,47.25"/>
	<path id="kvg:07530-s4" kvg:type="㇐a" d="M24,55.5c5.75-0.5,55.12-3.25,62.5-3.5"/>
	<path id="kvg:07530-s5" kvg:type="㇐a" d="M25.98,83.07c14.77-0.82,39.39-2.07,58.18-2.83"/>
</g>
</g>
<g id="kvg:StrokeNumbers_07530" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 11.50 34.63)">1</text>
	<text transform="matrix(1 0 0 1 23.50 25.50)">2</text>
	<text transform="matrix(1 0 0 1 46.50 37.50)">3</text>
	<text transform="matrix(1 0 0 1 27.50 52.50)">4</text>
	<text transform="matrix(1 0 0 1 28.50 79.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>土<rt>つち</rt></ruby>を掘りました。",target:"土",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0571f" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0571f" kvg:element="土" kvg:radical="general">
	<path id="kvg:0571f-s1" kvg:type="㇐" d="M26.63,50.89c1.63,0.4,4.64,0.6,6.26,0.4C43.5,50,62.12,48,75.66,46.92c2.71-0.22,4.36,0.19,5.72,0.39"/>
	<path id="kvg:0571f-s2" kvg:type="㇑a" d="M52.17,17.37c1.17,1.17,2.02,3.13,2.02,4.64c0,10.25,0.14,61.06,0.14,63.36"/>
	<path id="kvg:0571f-s3" kvg:type="㇐" d="M15.38,87.73c2.12,0.54,6.01,0.73,8.12,0.54C46,86.25,69,84.62,90.34,83.79c3.53-0.14,5.65,0.26,7.41,0.53"/>
</g>
</g>
<g id="kvg:StrokeNumbers_0571f" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 19.50 51.13)">1</text>
	<text transform="matrix(1 0 0 1 41.50 17.50)">2</text>
	<text transform="matrix(1 0 0 1 6.50 86.50)">3</text>
</g>
</svg>
`},{sentence:"<ruby>二<rt>ふた</rt></ruby>つの<ruby>本<rt>ほん</rt></ruby>を読みます。",target:"二",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e8c" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e8c" kvg:element="二" kvg:radical="general">
	<g id="kvg:04e8c-g1" kvg:position="top">
		<path id="kvg:04e8c-s1" kvg:type="㇐" d="M25.25,32.4c1.77,0.37,4.78,0.56,6.55,0.37c10.82-1.15,28.82-3.4,41.24-3.76c2.95-0.09,4.73,0.18,6.21,0.36"/>
	</g>
	<g id="kvg:04e8c-g2" kvg:position="bottom">
		<path id="kvg:04e8c-s2" kvg:type="㇐" d="M12,80.75c2.37,0.5,6.73,0.67,9.09,0.5c23.79-1.75,45.04-4.12,67.49-4.74c3.95-0.11,6.32,0.24,8.3,0.49"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_04e8c" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 17.50 33.13)">1</text>
	<text transform="matrix(1 0 0 1 3.50 81.50)">2</text>
</g>
</svg>
`},{sentence:"<ruby>日<rt>ひ</rt></ruby>が昇ります。",target:"日",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_065e5" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:065e5" kvg:element="日" kvg:radical="general">
	<path id="kvg:065e5-s1" kvg:type="㇑" d="M31.5,24.5c1.12,1.12,1.74,2.75,1.74,4.75c0,1.6-0.16,38.11-0.09,53.5c0.02,3.82,0.05,6.35,0.09,6.75"/>
	<path id="kvg:065e5-s2" kvg:type="㇕a" d="M33.48,26c0.8-0.05,37.67-3.01,40.77-3.25c3.19-0.25,5,1.75,5,4.25c0,4-0.22,40.84-0.23,56c0,3.48,0,5.72,0,6"/>
	<path id="kvg:065e5-s3" kvg:type="㇐a" d="M34.22,55.25c7.78-0.5,35.9-2.5,44.06-2.75"/>
	<path id="kvg:065e5-s4" kvg:type="㇐a" d="M34.23,86.5c10.52-0.75,34.15-2.12,43.81-2.25"/>
</g>
</g>
<g id="kvg:StrokeNumbers_065e5" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 25.25 32.63)">1</text>
	<text transform="matrix(1 0 0 1 34.50 22.50)">2</text>
	<text transform="matrix(1 0 0 1 37.50 51.50)">3</text>
	<text transform="matrix(1 0 0 1 37.50 83.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>入<rt>はい</rt></ruby>ってください。",target:"入",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05165" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05165" kvg:element="入" kvg:radical="general">
	<path id="kvg:05165-s1" kvg:type="㇒" d="M54.75,48.75c-0.5,2-1.1,3.2-2.07,4.62C44.22,65.8,27.98,81.44,14.5,88"/>
	<path id="kvg:05165-s2" kvg:type="㇏" d="M36.5,20c8.25,1.38,15.12,34,48.81,62.08c2.71,2.26,5.56,4.8,9.44,6.42"/>
</g>
</g>
<g id="kvg:StrokeNumbers_05165" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 45 51)">1</text>
	<text transform="matrix(1 0 0 1 28.5 21)">2</text>
</g>
</svg>
`},{sentence:"<ruby>年<rt>とし</rt></ruby>を迎えました。",target:"年",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_05e74" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:05e74" kvg:element="年">
	<g id="kvg:05e74-g1" kvg:element="丿" kvg:radical="nelson">
		<path id="kvg:05e74-s1" kvg:type="㇒" d="M40.01,11.89c0.24,1.61-0.01,2.86-0.84,4.46c-2.53,4.84-6.91,11.4-15.86,19.62"/>
	</g>
	<g id="kvg:05e74-g2" kvg:element="干" kvg:part="1" kvg:radical="tradit">
		<path id="kvg:05e74-s2" kvg:type="㇐" d="M39.13,23.62c2.25,0.38,4.4,0.18,5.79,0.03c11.7-1.27,21.33-2.9,33.22-4.07c2.3-0.23,4.2,0,5.35,0.26"/>
		<g id="kvg:05e74-g3" kvg:element="十">
			<path id="kvg:05e74-s3" kvg:type="㇐" d="M30.13,43.59c1.36,0.33,3.87,0.46,5.21,0.33c10.91-1.05,28.53-3.42,40.78-4.26c2.26-0.15,3.63,0.16,4.76,0.32"/>
		</g>
	</g>
	<path id="kvg:05e74-s4" kvg:type="㇑a" d="M33.75,44.5c1,1.25,1,1.97,1.01,3.5C34.8,52.33,35,65.29,35,66.25"/>
	<path id="kvg:05e74-s5" kvg:type="㇐" d="M13.88,67.74c1.97,0.47,5.61,0.66,7.57,0.47c20.21-2.03,36.35-4.62,66.65-5.31c3.29-0.08,5.26,0.22,6.91,0.46"/>
	<g id="kvg:05e74-g4" kvg:element="干" kvg:part="2" kvg:radical="tradit">
		<path id="kvg:05e74-s6" kvg:type="㇑" d="M56.56,25.46c1.12,1.12,1.79,3.54,1.79,4.94c0,0.89-0.05,44.26-0.13,61.6c-0.01,3.12-0.03,5.39-0.05,6.38"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_05e74" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 32.25 11.50)">1</text>
	<text transform="matrix(1 0 0 1 46.50 19.50)">2</text>
	<text transform="matrix(1 0 0 1 31.50 41.50)">3</text>
	<text transform="matrix(1 0 0 1 27.50 53.50)">4</text>
	<text transform="matrix(1 0 0 1 6.50 69.50)">5</text>
	<text transform="matrix(1 0 0 1 50.50 33.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>白<rt>しろ</rt></ruby>い<ruby>雲<rt>くも</rt></ruby>が浮かんでいます。",target:"白",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0767d" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0767d" kvg:element="白" kvg:radical="general">
	<g id="kvg:0767d-g1" kvg:position="top">
		<path id="kvg:0767d-s1" kvg:type="㇒" d="M55,13c0.38,1.5,0,3.25-0.57,4.29C51.32,22.93,46,31.12,36.81,40.22"/>
	</g>
	<g id="kvg:0767d-g2" kvg:element="日" kvg:position="bottom">
		<path id="kvg:0767d-s2" kvg:type="㇑" d="M25.5,40.47c1.14,1.14,1.63,2.81,1.63,4.63c0,1.55,0.95,32.47,1.32,47.14c0.06,2.58,0.13,4.66,0.18,6"/>
		<path id="kvg:0767d-s3" kvg:type="㇕a" d="M28.27,43.98c13.98-1.73,39.08-4.47,49.67-5.48c5.19-0.5,7.37,0.76,7.06,5.38c-0.62,9.12-2.09,30.3-3.29,46.88c-0.17,2.42-0.33,4.65-0.46,6.57"/>
		<path id="kvg:0767d-s4" kvg:type="㇐a" d="M29.13,67.44C42.25,66,72.38,63.62,82.57,63.4"/>
		<path id="kvg:0767d-s5" kvg:type="㇐a" d="M29.69,94.49C43,93.75,66.62,92,80.19,91.41"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_0767d" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 46.50 13.50)">1</text>
	<text transform="matrix(1 0 0 1 17.50 48.13)">2</text>
	<text transform="matrix(1 0 0 1 29.50 40.50)">3</text>
	<text transform="matrix(1 0 0 1 32.50 63.00)">4</text>
	<text transform="matrix(1 0 0 1 32.50 91.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>八<rt>はち</rt></ruby>つの<ruby>星<rt>ほし</rt></ruby>が見えます。",target:"八",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0516b" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0516b" kvg:element="八" kvg:radical="general">
	<g id="kvg:0516b-g1" kvg:position="left">
		<path id="kvg:0516b-s1" kvg:type="㇒" d="M37.22,45c0.28,1.5,0.2,3.21-0.86,5.48c-4.23,9.02-11.48,20.4-24.1,32.02"/>
	</g>
	<g id="kvg:0516b-g2" kvg:position="right">
		<path id="kvg:0516b-s2" kvg:type="㇏" d="M48,27.25c9.38,0.25,21.12,30,37.27,45.72c3.79,3.69,6.73,5.66,9.98,7.03"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_0516b" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 27.75 42.13)">1</text>
	<text transform="matrix(1 0 0 1 51.75 22.63)">2</text>
</g>
</svg>
`},{sentence:"<ruby>百<rt>ひゃく</rt></ruby>円をください。",target:"百",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0767e" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0767e" kvg:element="百">
	<g id="kvg:0767e-g1" kvg:element="一" kvg:position="top" kvg:radical="nelson">
		<path id="kvg:0767e-s1" kvg:type="㇐" d="M16.13,20.23c2.22,0.54,6.29,0.75,8.51,0.54c21.49-2.02,41.86-4.39,59.22-4.98c3.7-0.12,5.92,0.26,7.77,0.53"/>
	</g>
	<g id="kvg:0767e-g2" kvg:element="白" kvg:position="bottom" kvg:radical="tradit">
		<g id="kvg:0767e-g3" kvg:position="top">
			<path id="kvg:0767e-s2" kvg:type="㇔" d="M52.31,21.75c0.19,1.38,0.19,2.5-0.38,3.93c-1.65,4.19-4.81,9.19-8.66,14.68"/>
		</g>
		<g id="kvg:0767e-g4" kvg:element="日" kvg:position="bottom">
			<path id="kvg:0767e-s3" kvg:type="㇑" d="M30.75,42.82c0.96,0.96,1.64,2.45,1.72,4.19c0.41,8.74,0.96,32.92,1.18,43.74c0.05,2.48,0.08,4.12,0.1,4.5"/>
			<path id="kvg:0767e-s4" kvg:type="㇕a" d="M33.55,44.8c10.35-1.37,35.73-4.38,38.78-4.59c3.15-0.22,4.92,1.17,4.92,4.24c0,4.48-0.68,32-0.92,44.06c-0.06,3.02-0.1,5.05-0.11,5.48"/>
			<path id="kvg:0767e-s5" kvg:type="㇐a" d="M34.14,66.95c10.24-1.08,32.11-3.2,41.44-3.57"/>
			<path id="kvg:0767e-s6" kvg:type="㇐a" d="M34.97,92.87c8.78-0.87,30.53-2.12,40.06-2.39"/>
		</g>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_0767e" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 8.25 21.50)">1</text>
	<text transform="matrix(1 0 0 1 42.50 28.63)">2</text>
	<text transform="matrix(1 0 0 1 23.50 51.50)">3</text>
	<text transform="matrix(1 0 0 1 33.50 41.50)">4</text>
	<text transform="matrix(1 0 0 1 37.50 63.10)">5</text>
	<text transform="matrix(1 0 0 1 37.50 89.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>文<rt>ぶん</rt></ruby>を読みました。",target:"文",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06587" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06587" kvg:element="文" kvg:radical="general">
	<g id="kvg:06587-g1" kvg:element="亠" kvg:position="top">
		<path id="kvg:06587-s1" kvg:type="㇑a" d="M51.62,12.75c1.06,1.06,1.73,2.5,1.73,4.01c0,4.32-0.11,7.61-0.11,12.15"/>
		<path id="kvg:06587-s2" kvg:type="㇐" d="M16.88,32.72c2.7,0.66,5.71,0.86,8.6,0.54c15.77-1.76,40.15-5.01,56.42-6.1c3.67-0.25,6.15,0.05,8.88,0.69"/>
	</g>
	<g id="kvg:06587-g2" kvg:element="乂" kvg:position="bottom">
		<path id="kvg:06587-s3" kvg:type="㇒" d="M69.89,32.5c0.36,2.12,0.06,3.82-0.93,6.27C61.62,57,43.75,80.25,18.75,93.75"/>
		<path id="kvg:06587-s4" kvg:type="㇏" d="M31,43.75c6,0,27.27,26.79,49.26,42.1c4.13,2.87,7.49,4.77,11.49,6.04"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_06587" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 41.25 13.50)">1</text>
	<text transform="matrix(1 0 0 1 8.50 33.50)">2</text>
	<text transform="matrix(1 0 0 1 61.50 38.50)">3</text>
	<text transform="matrix(1 0 0 1 25.50 46.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>木<rt>き</rt></ruby>が生えています。",target:"木",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06728" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06728" kvg:element="木" kvg:radical="general">
	<path id="kvg:06728-s1" kvg:type="㇐" d="M19.5,39.86c2.45,0.57,5.23,0.8,8.04,0.57C40.75,39.38,63,36.5,79.78,36.15c2.8-0.06,4.54,0.1,7.34,0.5"/>
	<path id="kvg:06728-s2" kvg:type="㇑" d="M51.75,10.5c1.19,1.19,2,3,2,5c0,8.65,0,55.15-0.14,74.75c-0.03,4.19-0.07,7.15-0.11,8.25"/>
	<path id="kvg:06728-s3" kvg:type="㇒" d="M50.75,39.5c0,1.12-0.61,2.44-1.42,3.95C41.75,57.5,26.7,73.93,15.75,80.25"/>
	<path id="kvg:06728-s4" kvg:type="㇏" d="M54.5,39c4.62,6,23,25.75,31.76,34.61c2.27,2.29,4.61,4.39,7.49,5.64"/>
</g>
</g>
<g id="kvg:StrokeNumbers_06728" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 12.50 41.50)">1</text>
	<text transform="matrix(1 0 0 1 42.50 11.50)">2</text>
	<text transform="matrix(1 0 0 1 37.50 50.50)">3</text>
	<text transform="matrix(1 0 0 1 66.50 49.50)">4</text>
</g>
</svg>
`},{sentence:"<ruby>本<rt>ほん</rt></ruby>を開いてください。",target:"本",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0672c" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0672c" kvg:element="本">
	<g id="kvg:0672c-g1" kvg:element="木" kvg:radical="tradit">
		<path id="kvg:0672c-s1" kvg:type="㇐" d="M20.5,33.5c1.93,0.62,4.91,1.07,8.1,0.75C42.43,32.88,66,30.75,79.64,30c3.2-0.18,7.22,0.25,9.23,0.5"/>
		<g id="kvg:0672c-g2" kvg:element="丨" kvg:radical="nelson">
			<path id="kvg:0672c-s2" kvg:type="㇑" d="M52.1,11.12c1.25,1.25,2.05,3.23,2.05,4.99c0,0.84,0,57.16-0.02,76.76c-0.01,3.96-0.01,6.42-0.02,6.62"/>
		</g>
		<path id="kvg:0672c-s3" kvg:type="㇒" d="M51.75,33.5c0,1-0.41,2.22-1.29,3.88C43.62,50.25,30.12,65.5,13.25,75.5"/>
		<path id="kvg:0672c-s4" kvg:type="㇏" d="M54.75,35.5c4.92,5.74,23.48,23.33,32.85,31.27c2.58,2.18,5.16,4.41,8.52,5.23"/>
	</g>
	<path id="kvg:0672c-s5" kvg:type="㇐" d="M33.88,73.92c1.5,0.46,2.74,0.75,5.3,0.59c9.95-0.63,21.2-2.13,27.96-2.95c1.93-0.23,3.62-0.31,6-0.02"/>
</g>
</g>
<g id="kvg:StrokeNumbers_0672c" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 13.50 34.50)">1</text>
	<text transform="matrix(1 0 0 1 42.50 11.50)">2</text>
	<text transform="matrix(1 0 0 1 38.50 44.50)">3</text>
	<text transform="matrix(1 0 0 1 66.50 43.50)">4</text>
	<text transform="matrix(1 0 0 1 26.50 77.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>名<rt>な</rt></ruby>まえを書いてください。",target:"名",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0540d" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0540d" kvg:element="名">
	<g id="kvg:0540d-g1" kvg:element="夕" kvg:position="top" kvg:radical="nelson">
		<path id="kvg:0540d-s1" kvg:type="㇒" d="M54.2,12.64c0.3,1.61-0.07,2.99-0.69,4.24c-3.49,7.13-13.28,19.29-25.96,27.54"/>
		<path id="kvg:0540d-s2" kvg:type="㇇" d="M53.25,24.16c0.88,0.47,1.95,0.5,3.28,0.37c4.37-0.43,11.99-2.47,17.81-4.1c4.18-1.17,5.46,1.02,4.41,3.51C72.25,39.38,43.88,69.62,16,77.5"/>
		<path id="kvg:0540d-s3" kvg:type="㇔" d="M43.62,40.88c3.62,2,8,6,9.68,9.58"/>
	</g>
	<g id="kvg:0540d-g2" kvg:element="口" kvg:position="bottom" kvg:radical="tradit">
		<path id="kvg:0540d-s4" kvg:type="㇑" d="M42,67.81c0.91,0.91,1.62,2.19,1.83,3.33c0.5,2.82,2.15,14.38,3.05,20.86c0.3,2.12,0.52,3.7,0.59,4.25"/>
		<path id="kvg:0540d-s5" kvg:type="㇕b" d="M44.53,69.52c10.82-1.38,32.39-4.4,38.01-4.53c2.76-0.06,4.08,1.63,3.25,4.64c-1.13,4.06-3.52,14.04-4.64,20.36"/>
		<path id="kvg:0540d-s6" kvg:type="㇐b" d="M47.99,93.99c7.26-0.61,19.65-1.61,29.54-2.37c2.19-0.17,4.24-0.28,6.04-0.31"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_0540d" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 46.50 12.50)">1</text>
	<text transform="matrix(1 0 0 1 60.50 20.50)">2</text>
	<text transform="matrix(1 0 0 1 38.50 48.50)">3</text>
	<text transform="matrix(1 0 0 1 37.50 77.50)">4</text>
	<text transform="matrix(1 0 0 1 54.50 64.50)">5</text>
	<text transform="matrix(1 0 0 1 50.50 90.50)">6</text>
</g>
</svg>
`},{sentence:"<ruby>目<rt>め</rt></ruby>を閉じてください。",target:"目",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_076ee" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:076ee" kvg:element="目" kvg:radical="general">
	<path id="kvg:076ee-s1" kvg:type="㇑" d="M29.75,19.05c1.35,1.35,1.86,3.21,1.86,5.47c0,1.77,0.19,42.37,0.06,60.23c-0.04,4.91-0.06,8.11-0.06,8.36"/>
	<path id="kvg:076ee-s2" kvg:type="㇕a" d="M32.54,21.39c10.92-1.23,38.33-4.11,41.42-4.38c3.25-0.28,5.54,1.25,5.54,4.18c0,8.95-0.26,39.93-0.26,64.82c0,3,0.01,3.75,0.01,6"/>
	<path id="kvg:076ee-s3" kvg:type="㇐a" d="M33.05,43.64c12.45-1.51,34.83-3.51,45.18-4.09"/>
	<path id="kvg:076ee-s4" kvg:type="㇐a" d="M32.9,65.95C44.25,65,66,62.88,77.72,62.56"/>
	<path id="kvg:076ee-s5" kvg:type="㇐a" d="M33,90.5c9.75-0.5,33.25-2.5,44.79-2.53"/>
</g>
</g>
<g id="kvg:StrokeNumbers_076ee" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 22.50 26.50)">1</text>
	<text transform="matrix(1 0 0 1 36.50 17.50)">2</text>
	<text transform="matrix(1 0 0 1 37.50 39.50)">3</text>
	<text transform="matrix(1 0 0 1 37.50 62.00)">4</text>
	<text transform="matrix(1 0 0 1 37.50 86.00)">5</text>
</g>
</svg>
`},{sentence:"<ruby>立<rt>た</rt></ruby>ってください。",target:"立",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_07acb" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:07acb" kvg:element="立" kvg:radical="general">
	<g id="kvg:07acb-g1" kvg:element="亠" kvg:position="top">
		<path id="kvg:07acb-s1" kvg:type="㇑a" d="M51.51,15c1.43,1.43,2.24,3.25,2.24,5.81c0,4.06,0,9.56,0,13.69"/>
		<path id="kvg:07acb-s2" kvg:type="㇐" d="M22,37.86c2.62,0.51,4.75,0.34,7,0.16c11.38-0.9,36.13-3.4,50.65-4.26c2.38-0.14,4.86-0.01,6.86,0.4"/>
	</g>
	<g id="kvg:07acb-g2" kvg:position="bottom">
		<path id="kvg:07acb-s3" kvg:type="㇔" d="M32,49c4.75,9.75,8.25,22.5,9.5,31.5"/>
		<path id="kvg:07acb-s4" kvg:type="㇒" d="M74,39c0.75,1.38,0.81,3.29,0.5,4.5c-2.88,11.12-8.5,30.38-12.75,42"/>
		<path id="kvg:07acb-s5" kvg:type="㇐" d="M15.25,88.8c2.33,0.45,5.89,0.53,7.82,0.39c18.3-1.32,40.31-1.94,64.83-2.75c3.24-0.11,6.14,0.05,8.47,0.88"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_07acb" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 42.75 15.50)">1</text>
	<text transform="matrix(1 0 0 1 13.50 38.50)">2</text>
	<text transform="matrix(1 0 0 1 24.25 49.50)">3</text>
	<text transform="matrix(1 0 0 1 64.75 44.63)">4</text>
	<text transform="matrix(1 0 0 1 7.50 91.50)">5</text>
</g>
</svg>
`},{sentence:"<ruby>力<rt>ちから</rt></ruby>を入れてください。",target:"力",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0529b" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0529b" kvg:element="力" kvg:radical="general">
	<path id="kvg:0529b-s1" kvg:type="㇆" d="M21.5,38.25c2.71,1.16,5.48,1.13,8.27,0.71c14.44-2.14,39.36-6.21,53.23-8.21c4.48-0.65,6.25,1.38,5.5,5.75c-2.81,16.37-9,38.75-20,53.25c-6.14,8.09-9.5,3-12.5-0.75"/>
	<path id="kvg:0529b-s2" kvg:type="㇒" d="M56.88,13.68c0.62,2.57,0.56,4.63,0,7.19c-4.11,18.97-16.53,49.27-43.49,68.79"/>
</g>
</g>
<g id="kvg:StrokeNumbers_0529b" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 14.75 38.63)">1</text>
	<text transform="matrix(1 0 0 1 46.75 12.13)">2</text>
</g>
</svg>
`},{sentence:"<ruby>林<rt>はやし</rt></ruby>の中を歩きます。",target:"林",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_06797" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:06797" kvg:element="林">
	<g id="kvg:06797-g1" kvg:element="木" kvg:variant="true" kvg:position="left" kvg:radical="general">
		<path id="kvg:06797-s1" kvg:type="㇐" d="M11,40.75c0.75,0.25,3.01,0.42,5,0.25c5.88-0.5,15.5-1.38,24-2.5c1.98-0.26,3.25-0.25,4.5,0"/>
		<path id="kvg:06797-s2" kvg:type="㇑" d="M30.75,15.75c1.12,1.12,1.75,2.75,1.75,4.75c0,5,0.07,45.73-0.12,65.5c-0.04,4.18-0.08,7.16-0.13,8.25"/>
		<path id="kvg:06797-s3" kvg:type="㇒" d="M31.25,40.5c0,1.62-0.55,3.41-1.05,4.59C26.09,54.68,18.62,67,11.25,73.5"/>
		<path id="kvg:06797-s4" kvg:type="㇔/㇏" d="M35.25,48.75c3.5,2,7.25,6,9.25,9.5"/>
	</g>
	<g id="kvg:06797-g2" kvg:element="木" kvg:position="right">
		<path id="kvg:06797-s5" kvg:type="㇐" d="M50.62,37.39c0.94,0.34,2.96,0.59,5.44,0.34c8.2-0.84,18.68-2.6,27.97-3.04c2.49-0.12,4.65-0.34,6.21,0"/>
		<path id="kvg:06797-s6" kvg:type="㇑" d="M67,13.5c1.25,1.25,1.75,3,1.75,4.5c0,0.85,0.07,47.55-0.12,67.75c-0.04,4.32-0.08,7.4-0.13,8.5"/>
		<path id="kvg:06797-s7" kvg:type="㇒" d="M68,38.25c0,1-0.64,2.87-1.39,4.58C61.25,55,55.38,66.38,45.5,77"/>
		<path id="kvg:06797-s8" kvg:type="㇏" d="M69.5,37.75c6.62,12.62,15.94,25.68,22.32,32.52c1.78,1.91,4.12,4.6,6.68,5.48"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_06797" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 3.50 40.50)">1</text>
	<text transform="matrix(1 0 0 1 20.50 15.50)">2</text>
	<text transform="matrix(1 0 0 1 18.50 52.50)">3</text>
	<text transform="matrix(1 0 0 1 39.50 48.50)">4</text>
	<text transform="matrix(1 0 0 1 49.50 34.50)">5</text>
	<text transform="matrix(1 0 0 1 56.50 13.50)">6</text>
	<text transform="matrix(1 0 0 1 57.50 49.50)">7</text>
	<text transform="matrix(1 0 0 1 78.50 46.50)">8</text>
</g>
</svg>
`},{sentence:"<ruby>六<rt>むっ</rt></ruby>つの箱があります。",target:"六",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_0516d" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:0516d" kvg:element="六">
	<g id="kvg:0516d-g1" kvg:element="亠" kvg:position="top" kvg:radical="nelson">
		<path id="kvg:0516d-s1" kvg:type="㇑a" d="M51.87,17.5c1.78,1.78,2.71,3.48,2.71,6.5c0,6.46,0.12,9.16,0.12,14.35"/>
		<path id="kvg:0516d-s2" kvg:type="㇐" d="M13.5,42.13c3.27,0.74,7.11,0.89,9.93,0.64c21.56-1.9,41.78-5.02,61.41-5.47c4.8-0.11,7.49,0.31,11.06,1.07"/>
	</g>
	<g id="kvg:0516d-g2" kvg:element="八" kvg:position="bottom" kvg:radical="tradit">
		<path id="kvg:0516d-s3" kvg:type="㇒" d="M38.11,58.6c0.51,1.37,0.42,3.67-0.49,5.29C33.38,71.38,24,82.38,15.41,88.75"/>
		<path id="kvg:0516d-s4" kvg:type="㇔/㇏" d="M70.16,59.92c9.96,8.61,18.18,18.54,23.16,28.99"/>
	</g>
</g>
</g>
<g id="kvg:StrokeNumbers_0516d" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 42.25 17.63)">1</text>
	<text transform="matrix(1 0 0 1 5.50 43.63)">2</text>
	<text transform="matrix(1 0 0 1 27.50 58.63)">3</text>
	<text transform="matrix(1 0 0 1 60.50 58.63)">4</text>
</g>
</svg>
`}];function Yg(){const e=le.useRef(null),t=le.useRef(null),n=le.useRef(null),[r,i]=le.useState(null),[l,o]=le.useState(0),[s,a]=le.useState(""),[g,v]=le.useState(""),[f,p]=le.useState(!1),[h,y]=le.useState(!1),[x,T]=le.useState(!1),[c,u]=le.useState("");le.useEffect(()=>{if(!r){e.current&&i(new bg(e.current));return}if(l>=xr.length){p(!0);return}const M=xr[l].sentence.replace(new RegExp(xr[l].target,"g"),"＿＿");a(M),v(xr[l].svg),y(!1),T(!1),u(""),r.clearStrokes()},[l,r]);const d=()=>{r==null||r.clearStrokes(),u("")},k=()=>{var Ze;if(!r||!n.current||!e.current)return;const M=n.current.querySelector("svg");if(!M)return;const C=Ug(M),E=r.getStrokes(),{avgScore:F,percent:z,strokeResults:ge,normParamsUser:Ge}=Qg(C,E);if(r.getCanvasContext().clearRect(0,0,e.current.width,e.current.height),Hg(r.getCanvasContext(),ge,Ge),t.current){const gn=(Ze=t.current)==null?void 0:Ze.getContext("2d");gn&&Kg(gn,ge,Ge)}y(!0),T(!0),u(`スコア: ${z}%
${F>=.7?"正しく描かれています。":"お手本を参考にしてください"}`)},w=()=>{f||o(M=>M+1)};return ie.jsxs("div",{children:[ie.jsx("h1",{children:"文字描画評価ツール(React版)"}),f?ie.jsx("div",{children:"全問正解です！お疲れさまでした。"}):ie.jsx("div",{dangerouslySetInnerHTML:{__html:s}}),ie.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:10},children:[ie.jsx("canvas",{ref:e,width:"500",height:"500",style:{border:"1px solid #000"}}),ie.jsx("canvas",{ref:t,width:"500",height:"500",style:{border:"1px solid #000",display:x?"block":"none"}})]}),ie.jsxs("div",{children:[ie.jsx("button",{onClick:k,children:"評価"}),ie.jsx("button",{onClick:d,children:"クリア"}),h&&ie.jsx("button",{onClick:w,children:"次の問題"})]}),ie.jsx("div",{dangerouslySetInnerHTML:{__html:g},style:{border:"1px solid #ccc",display:x?"block":"none"},ref:n}),ie.jsx("div",{children:c})]})}X0.createRoot(document.getElementById("root")).render(ie.jsx(N1.StrictMode,{children:ie.jsx(Yg,{})}));
