var mu=Object.defineProperty;var hu=(e,t,n)=>t in e?mu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Fe=(e,t,n)=>hu(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function yu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},ui={},ns={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Symbol.for("react.element"),xu=Symbol.for("react.portal"),wu=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),Eu=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Pu=Symbol.for("react.memo"),zu=Symbol.for("react.lazy"),bl=Symbol.iterator;function ju(e){return e===null||typeof e!="object"?null:(e=bl&&e[bl]||e["@@iterator"],typeof e=="function"?e:null)}var rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},is=Object.assign,ls={};function vn(e,t,n){this.props=e,this.context=t,this.refs=ls,this.updater=n||rs}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function os(){}os.prototype=vn.prototype;function W0(e,t,n){this.props=e,this.context=t,this.refs=ls,this.updater=n||rs}var K0=W0.prototype=new os;K0.constructor=W0;is(K0,vn.prototype);K0.isPureReactComponent=!0;var $l=Array.isArray,ss=Object.prototype.hasOwnProperty,Y0={current:null},as={key:!0,ref:!0,__self:!0,__source:!0};function us(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)ss.call(t,r)&&!as.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:rr,type:e,key:l,ref:o,props:i,_owner:Y0.current}}function Ru(e,t){return{$$typeof:rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function X0(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function Tu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Al=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tu(""+e.key):t.toString(36)}function Er(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case rr:case xu:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ei(o,0):r,$l(i)?(n="",e!=null&&(n=e.replace(Al,"$&/")+"/"),Er(i,t,n,"",function(d){return d})):i!=null&&(X0(i)&&(i=Ru(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Al,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",$l(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Ei(l,s);o+=Er(l,t,n,a,i)}else if(a=ju(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Ei(l,s++),o+=Er(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ur(e,t,n){if(e==null)return e;var r=[],i=0;return Er(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Lu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Nr={transition:null},Iu={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:Y0};function cs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:ur,forEach:function(e,t,n){ur(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ur(e,function(){t++}),t},toArray:function(e){return ur(e,function(t){return t})||[]},only:function(e){if(!X0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=vn;T.Fragment=wu;T.Profiler=Mu;T.PureComponent=W0;T.StrictMode=Su;T.Suspense=Nu;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iu;T.act=cs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=is({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Y0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ss.call(t,a)&&!as.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:rr,type:e.type,key:i,ref:l,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:Cu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_u,_context:e},e.Consumer=e};T.createElement=us;T.createFactory=function(e){var t=us.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Eu,render:e}};T.isValidElement=X0;T.lazy=function(e){return{$$typeof:zu,_payload:{_status:-1,_result:e},_init:Lu}};T.memo=function(e,t){return{$$typeof:Pu,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};T.unstable_act=cs;T.useCallback=function(e,t){return ue.current.useCallback(e,t)};T.useContext=function(e){return ue.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};T.useEffect=function(e,t){return ue.current.useEffect(e,t)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ue.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};T.useRef=function(e){return ue.current.useRef(e)};T.useState=function(e){return ue.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";ns.exports=T;var I=ns.exports;const Ou=yu(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=I,Bu=Symbol.for("react.element"),Fu=Symbol.for("react.fragment"),Uu=Object.prototype.hasOwnProperty,bu=Du.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$u={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Uu.call(t,r)&&!$u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bu,type:e,key:l,ref:o,props:i,_owner:bu.current}}ui.Fragment=Fu;ui.jsx=ds;ui.jsxs=ds;ts.exports=ui;var h=ts.exports,qi={},gs={exports:{}},we={},fs={exports:{}},vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,z){var j=M.length;M.push(z);e:for(;0<j;){var B=j-1>>>1,K=M[B];if(0<i(K,z))M[B]=z,M[j]=K,j=B;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var z=M[0],j=M.pop();if(j!==z){M[0]=j;e:for(var B=0,K=M.length,Mt=K>>>1;B<Mt;){var Me=2*(B+1)-1,Ft=M[Me],je=Me+1,Ut=M[je];if(0>i(Ft,j))je<K&&0>i(Ut,Ft)?(M[B]=Ut,M[je]=j,B=je):(M[B]=Ft,M[Me]=j,B=Me);else if(je<K&&0>i(Ut,j))M[B]=Ut,M[je]=j,B=je;else break e}}return z}function i(M,z){var j=M.sortIndex-z.sortIndex;return j!==0?j:M.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],d=[],v=1,f=null,p=3,m=!1,x=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(M){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=M)r(d),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(d)}}function k(M){if(w=!1,c(M),!x)if(n(a)!==null)x=!0,mn(S);else{var z=n(d);z!==null&&W(k,z.startTime-M)}}function S(M,z){x=!1,w&&(w=!1,g(P),P=-1),m=!0;var j=p;try{for(c(z),f=n(a);f!==null&&(!(f.expirationTime>z)||M&&!ke());){var B=f.callback;if(typeof B=="function"){f.callback=null,p=f.priorityLevel;var K=B(f.expirationTime<=z);z=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(a)&&r(a),c(z)}else r(a);f=n(a)}if(f!==null)var Mt=!0;else{var Me=n(d);Me!==null&&W(k,Me.startTime-z),Mt=!1}return Mt}finally{f=null,p=j,m=!1}}var C=!1,N=null,P=-1,$=5,R=-1;function ke(){return!(e.unstable_now()-R<$)}function Qe(){if(N!==null){var M=e.unstable_now();R=M;var z=!0;try{z=N(!0,M)}finally{z?nt():(C=!1,N=null)}}else C=!1}var nt;if(typeof u=="function")nt=function(){u(Qe)};else if(typeof MessageChannel<"u"){var ar=new MessageChannel,Ci=ar.port2;ar.port1.onmessage=Qe,nt=function(){Ci.postMessage(null)}}else nt=function(){E(Qe,0)};function mn(M){N=M,C||(C=!0,nt())}function W(M,z){P=E(function(){M(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,mn(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var j=p;p=z;try{return M()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=p;p=M;try{return z()}finally{p=j}},e.unstable_scheduleCallback=function(M,z,j){var B=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?B+j:B):j=B,M){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=j+K,M={id:v++,callback:z,priorityLevel:M,startTime:j,expirationTime:K,sortIndex:-1},j>B?(M.sortIndex=j,t(d,M),n(a)===null&&M===n(d)&&(w?(g(P),P=-1):w=!0,W(k,j-B))):(M.sortIndex=K,t(a,M),x||m||(x=!0,mn(S))),M},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(M){var z=p;return function(){var j=p;p=z;try{return M.apply(this,arguments)}finally{p=j}}}})(vs);fs.exports=vs;var Au=fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu=I,xe=Au;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ps=new Set,bn={};function Dt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(bn[e]=t,e=0;e<t.length;e++)ps.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,Qu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hl={},Ql={};function Vu(e){return Ji.call(Ql,e)?!0:Ji.call(Hl,e)?!1:Qu.test(e)?Ql[e]=!0:(Hl[e]=!0,!1)}function Wu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ku(e,t,n,r){if(t===null||typeof t>"u"||Wu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var G0=/[\-:]([a-z])/g;function Z0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(G0,Z0);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(G0,Z0);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(G0,Z0);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function q0(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ku(t,n,i,r)&&(n=null),r||i===null?Vu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Hu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),J0=Symbol.for("react.strict_mode"),e0=Symbol.for("react.profiler"),ks=Symbol.for("react.provider"),ms=Symbol.for("react.context"),el=Symbol.for("react.forward_ref"),t0=Symbol.for("react.suspense"),n0=Symbol.for("react.suspense_list"),tl=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),hs=Symbol.for("react.offscreen"),Vl=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=Vl&&e[Vl]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ni;function Nn(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var Pi=!1;function zi(e,t){if(!e||Pi)return"";Pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nn(e):""}function Yu(e){switch(e.tag){case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 2:case 15:return e=zi(e.type,!1),e;case 11:return e=zi(e.type.render,!1),e;case 1:return e=zi(e.type,!0),e;default:return""}}function r0(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case $t:return"Portal";case e0:return"Profiler";case J0:return"StrictMode";case t0:return"Suspense";case n0:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ms:return(e.displayName||"Context")+".Consumer";case ks:return(e._context.displayName||"Context")+".Provider";case el:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tl:return t=e.displayName||null,t!==null?t:r0(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return r0(e(t))}catch{}}return null}function Xu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return r0(t);case 8:return t===J0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ys(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gu(e){var t=ys(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dr(e){e._valueTracker||(e._valueTracker=Gu(e))}function xs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ys(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function i0(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ws(e,t){t=t.checked,t!=null&&q0(e,"checked",t,!1)}function l0(e,t){ws(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?o0(e,t.type,n):t.hasOwnProperty("defaultValue")&&o0(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function o0(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function s0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Pn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function Ss(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function a0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,_s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zu=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){Zu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Cs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Es(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qu=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function u0(e,t){if(t){if(qu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function c0(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d0=null;function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var g0=null,tn=null,nn=null;function Gl(e){if(e=or(e)){if(typeof g0!="function")throw Error(y(280));var t=e.stateNode;t&&(t=vi(t),g0(e.stateNode,e.type,t))}}function Ns(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Ps(){if(tn){var e=tn,t=nn;if(nn=tn=null,Gl(e),t)for(e=0;e<t.length;e++)Gl(t[e])}}function zs(e,t){return e(t)}function js(){}var ji=!1;function Rs(e,t,n){if(ji)return e(t,n);ji=!0;try{return zs(e,t,n)}finally{ji=!1,(tn!==null||nn!==null)&&(js(),Ps())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var f0=!1;if(Ze)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){f0=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{f0=!1}function Ju(e,t,n,r,i,l,o,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var Tn=!1,Ur=null,br=!1,v0=null,e1={onError:function(e){Tn=!0,Ur=e}};function t1(e,t,n,r,i,l,o,s,a){Tn=!1,Ur=null,Ju.apply(e1,arguments)}function n1(e,t,n,r,i,l,o,s,a){if(t1.apply(this,arguments),Tn){if(Tn){var d=Ur;Tn=!1,Ur=null}else throw Error(y(198));br||(br=!0,v0=d)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ts(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zl(e){if(Bt(e)!==e)throw Error(y(188))}function r1(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Zl(i),e;if(l===r)return Zl(i),t;l=l.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ls(e){return e=r1(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var Os=xe.unstable_scheduleCallback,ql=xe.unstable_cancelCallback,i1=xe.unstable_shouldYield,l1=xe.unstable_requestPaint,Y=xe.unstable_now,o1=xe.unstable_getCurrentPriorityLevel,rl=xe.unstable_ImmediatePriority,Ds=xe.unstable_UserBlockingPriority,$r=xe.unstable_NormalPriority,s1=xe.unstable_LowPriority,Bs=xe.unstable_IdlePriority,ci=null,Ae=null;function a1(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:d1,u1=Math.log,c1=Math.LN2;function d1(e){return e>>>=0,e===0?32:31-(u1(e)/c1|0)|0}var fr=64,vr=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=zn(s):(l&=o,l!==0&&(r=zn(l)))}else o=n&~i,o!==0?r=zn(o):l!==0&&(r=zn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function g1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Oe(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=g1(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function p0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fs(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function Ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function v1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function Us(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bs,ll,$s,As,Hs,k0=!1,pr=[],ct=null,dt=null,gt=null,Hn=new Map,Qn=new Map,ot=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jl(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function xn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=or(t),t!==null&&ll(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function k1(e,t,n,r,i){switch(t){case"focusin":return ct=xn(ct,e,t,n,r,i),!0;case"dragenter":return dt=xn(dt,e,t,n,r,i),!0;case"mouseover":return gt=xn(gt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Hn.set(l,xn(Hn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Qn.set(l,xn(Qn.get(l)||null,e,t,n,r,i)),!0}return!1}function Qs(e){var t=Et(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ts(n),t!==null){e.blockedOn=t,Hs(e.priority,function(){$s(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=m0(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);d0=r,n.target.dispatchEvent(r),d0=null}else return t=or(n),t!==null&&ll(t),e.blockedOn=n,!1;t.shift()}return!0}function eo(e,t,n){Pr(e)&&n.delete(t)}function m1(){k0=!1,ct!==null&&Pr(ct)&&(ct=null),dt!==null&&Pr(dt)&&(dt=null),gt!==null&&Pr(gt)&&(gt=null),Hn.forEach(eo),Qn.forEach(eo)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,k0||(k0=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,m1)))}function Vn(e){function t(i){return wn(i,e)}if(0<pr.length){wn(pr[0],e);for(var n=1;n<pr.length;n++){var r=pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&wn(ct,e),dt!==null&&wn(dt,e),gt!==null&&wn(gt,e),Hn.forEach(t),Qn.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)Qs(n),n.blockedOn===null&&ot.shift()}var rn=tt.ReactCurrentBatchConfig,Hr=!0;function h1(e,t,n,r){var i=O,l=rn.transition;rn.transition=null;try{O=1,ol(e,t,n,r)}finally{O=i,rn.transition=l}}function y1(e,t,n,r){var i=O,l=rn.transition;rn.transition=null;try{O=4,ol(e,t,n,r)}finally{O=i,rn.transition=l}}function ol(e,t,n,r){if(Hr){var i=m0(e,t,n,r);if(i===null)$i(e,t,r,Qr,n),Jl(e,r);else if(k1(i,e,t,n,r))r.stopPropagation();else if(Jl(e,r),t&4&&-1<p1.indexOf(e)){for(;i!==null;){var l=or(i);if(l!==null&&bs(l),l=m0(e,t,n,r),l===null&&$i(e,t,r,Qr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else $i(e,t,r,null,n)}}var Qr=null;function m0(e,t,n,r){if(Qr=null,e=nl(r),e=Et(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ts(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function Vs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o1()){case rl:return 1;case Ds:return 4;case $r:case s1:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var at=null,sl=null,zr=null;function Ws(){if(zr)return zr;var e,t=sl,n=t.length,r,i="value"in at?at.value:at.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return zr=i.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function to(){return!1}function Se(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?kr:to,this.isPropagationStopped=to,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Se(pn),lr=Q({},pn,{view:0,detail:0}),x1=Se(lr),Ti,Li,Sn,di=Q({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Ti=e.screenX-Sn.screenX,Li=e.screenY-Sn.screenY):Li=Ti=0,Sn=e),Ti)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),no=Se(di),w1=Q({},di,{dataTransfer:0}),S1=Se(w1),M1=Q({},lr,{relatedTarget:0}),Ii=Se(M1),_1=Q({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=Se(_1),E1=Q({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N1=Se(E1),P1=Q({},pn,{data:0}),ro=Se(P1),z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R1[e])?!!t[e]:!1}function ul(){return T1}var L1=Q({},lr,{key:function(e){if(e.key){var t=z1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I1=Se(L1),O1=Q({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),io=Se(O1),D1=Q({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),B1=Se(D1),F1=Q({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),U1=Se(F1),b1=Q({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$1=Se(b1),A1=[9,13,27,32],cl=Ze&&"CompositionEvent"in window,Ln=null;Ze&&"documentMode"in document&&(Ln=document.documentMode);var H1=Ze&&"TextEvent"in window&&!Ln,Ks=Ze&&(!cl||Ln&&8<Ln&&11>=Ln),lo=" ",oo=!1;function Ys(e,t){switch(e){case"keyup":return A1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Q1(e,t){switch(e){case"compositionend":return Xs(t);case"keypress":return t.which!==32?null:(oo=!0,lo);case"textInput":return e=t.data,e===lo&&oo?null:e;default:return null}}function V1(e,t){if(Ht)return e==="compositionend"||!cl&&Ys(e,t)?(e=Ws(),zr=sl=at=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var W1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!W1[e.type]:t==="textarea"}function Gs(e,t,n,r){Ns(r),t=Vr(t,"onChange"),0<t.length&&(n=new al("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Wn=null;function K1(e){sa(e,0)}function gi(e){var t=Wt(e);if(xs(t))return e}function Y1(e,t){if(e==="change")return t}var Zs=!1;if(Ze){var Oi;if(Ze){var Di="oninput"in document;if(!Di){var ao=document.createElement("div");ao.setAttribute("oninput","return;"),Di=typeof ao.oninput=="function"}Oi=Di}else Oi=!1;Zs=Oi&&(!document.documentMode||9<document.documentMode)}function uo(){In&&(In.detachEvent("onpropertychange",qs),Wn=In=null)}function qs(e){if(e.propertyName==="value"&&gi(Wn)){var t=[];Gs(t,Wn,e,nl(e)),Rs(K1,t)}}function X1(e,t,n){e==="focusin"?(uo(),In=t,Wn=n,In.attachEvent("onpropertychange",qs)):e==="focusout"&&uo()}function G1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(Wn)}function Z1(e,t){if(e==="click")return gi(t)}function q1(e,t){if(e==="input"||e==="change")return gi(t)}function J1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:J1;function Kn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ji.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function co(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function go(e,t){var n=co(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=co(n)}}function Js(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Js(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ea(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ec(e){var t=ea(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Js(n.ownerDocument.documentElement,n)){if(r!==null&&dl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=go(n,l);var o=go(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tc=Ze&&"documentMode"in document&&11>=document.documentMode,Qt=null,h0=null,On=null,y0=!1;function fo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;y0||Qt==null||Qt!==Fr(r)||(r=Qt,"selectionStart"in r&&dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Kn(On,r)||(On=r,r=Vr(h0,"onSelect"),0<r.length&&(t=new al("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Bi={},ta={};Ze&&(ta=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function fi(e){if(Bi[e])return Bi[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ta)return Bi[e]=t[n];return e}var na=fi("animationend"),ra=fi("animationiteration"),ia=fi("animationstart"),la=fi("transitionend"),oa=new Map,vo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){oa.set(e,t),Dt(t,[e])}for(var Fi=0;Fi<vo.length;Fi++){var Ui=vo[Fi],nc=Ui.toLowerCase(),rc=Ui[0].toUpperCase()+Ui.slice(1);xt(nc,"on"+rc)}xt(na,"onAnimationEnd");xt(ra,"onAnimationIteration");xt(ia,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(la,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ic=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function po(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n1(r,t,void 0,e),e.currentTarget=null}function sa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;po(i,s,d),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,d=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;po(i,s,d),l=a}}}if(br)throw e=v0,br=!1,v0=null,e}function F(e,t){var n=t[_0];n===void 0&&(n=t[_0]=new Set);var r=e+"__bubble";n.has(r)||(aa(t,e,2,!1),n.add(r))}function bi(e,t,n){var r=0;t&&(r|=4),aa(n,e,r,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[hr]){e[hr]=!0,ps.forEach(function(n){n!=="selectionchange"&&(ic.has(n)||bi(n,!1,e),bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,bi("selectionchange",!1,t))}}function aa(e,t,n,r){switch(Vs(t)){case 1:var i=h1;break;case 4:i=y1;break;default:i=ol}n=i.bind(null,t,n,e),i=void 0,!f0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $i(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Et(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Rs(function(){var d=l,v=nl(n),f=[];e:{var p=oa.get(e);if(p!==void 0){var m=al,x=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":m=I1;break;case"focusin":x="focus",m=Ii;break;case"focusout":x="blur",m=Ii;break;case"beforeblur":case"afterblur":m=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=B1;break;case na:case ra:case ia:m=C1;break;case la:m=U1;break;case"scroll":m=x1;break;case"wheel":m=$1;break;case"copy":case"cut":case"paste":m=N1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=io}var w=(t&4)!==0,E=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var u=d,c;u!==null;){c=u;var k=c.stateNode;if(c.tag===5&&k!==null&&(c=k,g!==null&&(k=An(u,g),k!=null&&w.push(Xn(u,k,c)))),E)break;u=u.return}0<w.length&&(p=new m(p,x,null,n,v),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==d0&&(x=n.relatedTarget||n.fromElement)&&(Et(x)||x[qe]))break e;if((m||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=d,x=x?Et(x):null,x!==null&&(E=Bt(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=d),m!==x)){if(w=no,k="onMouseLeave",g="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=io,k="onPointerLeave",g="onPointerEnter",u="pointer"),E=m==null?p:Wt(m),c=x==null?p:Wt(x),p=new w(k,u+"leave",m,n,v),p.target=E,p.relatedTarget=c,k=null,Et(v)===d&&(w=new w(g,u+"enter",x,n,v),w.target=c,w.relatedTarget=E,k=w),E=k,m&&x)t:{for(w=m,g=x,u=0,c=w;c;c=bt(c))u++;for(c=0,k=g;k;k=bt(k))c++;for(;0<u-c;)w=bt(w),u--;for(;0<c-u;)g=bt(g),c--;for(;u--;){if(w===g||g!==null&&w===g.alternate)break t;w=bt(w),g=bt(g)}w=null}else w=null;m!==null&&ko(f,p,m,w,!1),x!==null&&E!==null&&ko(f,E,x,w,!0)}}e:{if(p=d?Wt(d):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var S=Y1;else if(so(p))if(Zs)S=q1;else{S=G1;var C=X1}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Z1);if(S&&(S=S(e,d))){Gs(f,S,n,v);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&o0(p,"number",p.value)}switch(C=d?Wt(d):window,e){case"focusin":(so(C)||C.contentEditable==="true")&&(Qt=C,h0=d,On=null);break;case"focusout":On=h0=Qt=null;break;case"mousedown":y0=!0;break;case"contextmenu":case"mouseup":case"dragend":y0=!1,fo(f,n,v);break;case"selectionchange":if(tc)break;case"keydown":case"keyup":fo(f,n,v)}var N;if(cl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ht?Ys(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ks&&n.locale!=="ko"&&(Ht||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ht&&(N=Ws()):(at=v,sl="value"in at?at.value:at.textContent,Ht=!0)),C=Vr(d,P),0<C.length&&(P=new ro(P,e,null,n,v),f.push({event:P,listeners:C}),N?P.data=N:(N=Xs(n),N!==null&&(P.data=N)))),(N=H1?Q1(e,n):V1(e,n))&&(d=Vr(d,"onBeforeInput"),0<d.length&&(v=new ro("onBeforeInput","beforeinput",null,n,v),f.push({event:v,listeners:d}),v.data=N))}sa(f,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=An(e,n),l!=null&&r.unshift(Xn(e,l,i)),l=An(e,t),l!=null&&r.push(Xn(e,l,i))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ko(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,i?(a=An(n,l),a!=null&&o.unshift(Xn(n,a,s))):i||(a=An(n,l),a!=null&&o.push(Xn(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var lc=/\r\n?/g,oc=/\u0000|\uFFFD/g;function mo(e){return(typeof e=="string"?e:""+e).replace(lc,`
`).replace(oc,"")}function yr(e,t,n){if(t=mo(t),mo(e)!==t&&n)throw Error(y(425))}function Wr(){}var x0=null,w0=null;function S0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var M0=typeof setTimeout=="function"?setTimeout:void 0,sc=typeof clearTimeout=="function"?clearTimeout:void 0,ho=typeof Promise=="function"?Promise:void 0,ac=typeof queueMicrotask=="function"?queueMicrotask:typeof ho<"u"?function(e){return ho.resolve(null).then(e).catch(uc)}:M0;function uc(e){setTimeout(function(){throw e})}function Ai(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),$e="__reactFiber$"+kn,Gn="__reactProps$"+kn,qe="__reactContainer$"+kn,_0="__reactEvents$"+kn,cc="__reactListeners$"+kn,dc="__reactHandles$"+kn;function Et(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yo(e);e!==null;){if(n=e[$e])return n;e=yo(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[$e]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function vi(e){return e[Gn]||null}var C0=[],Kt=-1;function wt(e){return{current:e}}function U(e){0>Kt||(e.current=C0[Kt],C0[Kt]=null,Kt--)}function D(e,t){Kt++,C0[Kt]=e.current,e.current=t}var yt={},oe=wt(yt),fe=wt(!1),Rt=yt;function an(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Kr(){U(fe),U(oe)}function xo(e,t,n){if(oe.current!==yt)throw Error(y(168));D(oe,t),D(fe,n)}function ua(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Xu(e)||"Unknown",i));return Q({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Rt=oe.current,D(oe,e),D(fe,fe.current),!0}function wo(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ua(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,U(fe),U(oe),D(oe,e)):U(fe),D(fe,n)}var Ke=null,pi=!1,Hi=!1;function ca(e){Ke===null?Ke=[e]:Ke.push(e)}function gc(e){pi=!0,ca(e)}function St(){if(!Hi&&Ke!==null){Hi=!0;var e=0,t=O;try{var n=Ke;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,pi=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),Os(rl,St),i}finally{O=t,Hi=!1}}return null}var Yt=[],Xt=0,Xr=null,Gr=0,_e=[],Ce=0,Tt=null,Ye=1,Xe="";function _t(e,t){Yt[Xt++]=Gr,Yt[Xt++]=Xr,Xr=e,Gr=t}function da(e,t,n){_e[Ce++]=Ye,_e[Ce++]=Xe,_e[Ce++]=Tt,Tt=e;var r=Ye;e=Xe;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var l=32-Oe(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ye=1<<32-Oe(t)+i|n<<i|r,Xe=l+e}else Ye=1<<l|n<<i|r,Xe=e}function gl(e){e.return!==null&&(_t(e,1),da(e,1,0))}function fl(e){for(;e===Xr;)Xr=Yt[--Xt],Yt[Xt]=null,Gr=Yt[--Xt],Yt[Xt]=null;for(;e===Tt;)Tt=_e[--Ce],_e[Ce]=null,Xe=_e[--Ce],_e[Ce]=null,Ye=_e[--Ce],_e[Ce]=null}var ye=null,he=null,b=!1,Ie=null;function ga(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function So(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,he=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,he=null,!0):!1;default:return!1}}function E0(e){return(e.mode&1)!==0&&(e.flags&128)===0}function N0(e){if(b){var t=he;if(t){var n=t;if(!So(e,t)){if(E0(e))throw Error(y(418));t=ft(n.nextSibling);var r=ye;t&&So(e,t)?ga(r,n):(e.flags=e.flags&-4097|2,b=!1,ye=e)}}else{if(E0(e))throw Error(y(418));e.flags=e.flags&-4097|2,b=!1,ye=e}}}function Mo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function xr(e){if(e!==ye)return!1;if(!b)return Mo(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!S0(e.type,e.memoizedProps)),t&&(t=he)){if(E0(e))throw fa(),Error(y(418));for(;t;)ga(e,t),t=ft(t.nextSibling)}if(Mo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ye?ft(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=he;e;)e=ft(e.nextSibling)}function un(){he=ye=null,b=!1}function vl(e){Ie===null?Ie=[e]:Ie.push(e)}var fc=tt.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function wr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _o(e){var t=e._init;return t(e._payload)}function va(e){function t(g,u){if(e){var c=g.deletions;c===null?(g.deletions=[u],g.flags|=16):c.push(u)}}function n(g,u){if(!e)return null;for(;u!==null;)t(g,u),u=u.sibling;return null}function r(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function i(g,u){return g=mt(g,u),g.index=0,g.sibling=null,g}function l(g,u,c){return g.index=c,e?(c=g.alternate,c!==null?(c=c.index,c<u?(g.flags|=2,u):c):(g.flags|=2,u)):(g.flags|=1048576,u)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,u,c,k){return u===null||u.tag!==6?(u=Gi(c,g.mode,k),u.return=g,u):(u=i(u,c),u.return=g,u)}function a(g,u,c,k){var S=c.type;return S===At?v(g,u,c.props.children,k,c.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===it&&_o(S)===u.type)?(k=i(u,c.props),k.ref=Mn(g,u,c),k.return=g,k):(k=Br(c.type,c.key,c.props,null,g.mode,k),k.ref=Mn(g,u,c),k.return=g,k)}function d(g,u,c,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=Zi(c,g.mode,k),u.return=g,u):(u=i(u,c.children||[]),u.return=g,u)}function v(g,u,c,k,S){return u===null||u.tag!==7?(u=jt(c,g.mode,k,S),u.return=g,u):(u=i(u,c),u.return=g,u)}function f(g,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Gi(""+u,g.mode,c),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case cr:return c=Br(u.type,u.key,u.props,null,g.mode,c),c.ref=Mn(g,null,u),c.return=g,c;case $t:return u=Zi(u,g.mode,c),u.return=g,u;case it:var k=u._init;return f(g,k(u._payload),c)}if(Pn(u)||hn(u))return u=jt(u,g.mode,c,null),u.return=g,u;wr(g,u)}return null}function p(g,u,c,k){var S=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return S!==null?null:s(g,u,""+c,k);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case cr:return c.key===S?a(g,u,c,k):null;case $t:return c.key===S?d(g,u,c,k):null;case it:return S=c._init,p(g,u,S(c._payload),k)}if(Pn(c)||hn(c))return S!==null?null:v(g,u,c,k,null);wr(g,c)}return null}function m(g,u,c,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(c)||null,s(u,g,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case cr:return g=g.get(k.key===null?c:k.key)||null,a(u,g,k,S);case $t:return g=g.get(k.key===null?c:k.key)||null,d(u,g,k,S);case it:var C=k._init;return m(g,u,c,C(k._payload),S)}if(Pn(k)||hn(k))return g=g.get(c)||null,v(u,g,k,S,null);wr(u,k)}return null}function x(g,u,c,k){for(var S=null,C=null,N=u,P=u=0,$=null;N!==null&&P<c.length;P++){N.index>P?($=N,N=null):$=N.sibling;var R=p(g,N,c[P],k);if(R===null){N===null&&(N=$);break}e&&N&&R.alternate===null&&t(g,N),u=l(R,u,P),C===null?S=R:C.sibling=R,C=R,N=$}if(P===c.length)return n(g,N),b&&_t(g,P),S;if(N===null){for(;P<c.length;P++)N=f(g,c[P],k),N!==null&&(u=l(N,u,P),C===null?S=N:C.sibling=N,C=N);return b&&_t(g,P),S}for(N=r(g,N);P<c.length;P++)$=m(N,g,P,c[P],k),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?P:$.key),u=l($,u,P),C===null?S=$:C.sibling=$,C=$);return e&&N.forEach(function(ke){return t(g,ke)}),b&&_t(g,P),S}function w(g,u,c,k){var S=hn(c);if(typeof S!="function")throw Error(y(150));if(c=S.call(c),c==null)throw Error(y(151));for(var C=S=null,N=u,P=u=0,$=null,R=c.next();N!==null&&!R.done;P++,R=c.next()){N.index>P?($=N,N=null):$=N.sibling;var ke=p(g,N,R.value,k);if(ke===null){N===null&&(N=$);break}e&&N&&ke.alternate===null&&t(g,N),u=l(ke,u,P),C===null?S=ke:C.sibling=ke,C=ke,N=$}if(R.done)return n(g,N),b&&_t(g,P),S;if(N===null){for(;!R.done;P++,R=c.next())R=f(g,R.value,k),R!==null&&(u=l(R,u,P),C===null?S=R:C.sibling=R,C=R);return b&&_t(g,P),S}for(N=r(g,N);!R.done;P++,R=c.next())R=m(N,g,P,R.value,k),R!==null&&(e&&R.alternate!==null&&N.delete(R.key===null?P:R.key),u=l(R,u,P),C===null?S=R:C.sibling=R,C=R);return e&&N.forEach(function(Qe){return t(g,Qe)}),b&&_t(g,P),S}function E(g,u,c,k){if(typeof c=="object"&&c!==null&&c.type===At&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case cr:e:{for(var S=c.key,C=u;C!==null;){if(C.key===S){if(S=c.type,S===At){if(C.tag===7){n(g,C.sibling),u=i(C,c.props.children),u.return=g,g=u;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===it&&_o(S)===C.type){n(g,C.sibling),u=i(C,c.props),u.ref=Mn(g,C,c),u.return=g,g=u;break e}n(g,C);break}else t(g,C);C=C.sibling}c.type===At?(u=jt(c.props.children,g.mode,k,c.key),u.return=g,g=u):(k=Br(c.type,c.key,c.props,null,g.mode,k),k.ref=Mn(g,u,c),k.return=g,g=k)}return o(g);case $t:e:{for(C=c.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(g,u.sibling),u=i(u,c.children||[]),u.return=g,g=u;break e}else{n(g,u);break}else t(g,u);u=u.sibling}u=Zi(c,g.mode,k),u.return=g,g=u}return o(g);case it:return C=c._init,E(g,u,C(c._payload),k)}if(Pn(c))return x(g,u,c,k);if(hn(c))return w(g,u,c,k);wr(g,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(n(g,u.sibling),u=i(u,c),u.return=g,g=u):(n(g,u),u=Gi(c,g.mode,k),u.return=g,g=u),o(g)):n(g,u)}return E}var cn=va(!0),pa=va(!1),Zr=wt(null),qr=null,Gt=null,pl=null;function kl(){pl=Gt=qr=null}function ml(e){var t=Zr.current;U(Zr),e._currentValue=t}function P0(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){qr=e,pl=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(pl!==e)if(e={context:e,memoizedValue:t,next:null},Gt===null){if(qr===null)throw Error(y(308));Gt=e,qr.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return t}var Nt=null;function hl(e){Nt===null?Nt=[e]:Nt.push(e)}function ka(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,hl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function Rr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}function Co(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var i=e.updateQueue;lt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,d=a.next;a.next=null,o===null?l=d:o.next=d,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=a))}if(l!==null){var f=i.baseState;o=0,v=d=a=null,s=l;do{var p=s.lane,m=s.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(p=t,m=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(m,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(m,f,p):x,p==null)break e;f=Q({},f,p);break e;case 2:lt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=m,a=f):v=v.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(v===null&&(a=f),i.baseState=a,i.firstBaseUpdate=d,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);It|=o,e.lanes=o,e.memoizedState=f}}function Eo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var sr={},He=wt(sr),Zn=wt(sr),qn=wt(sr);function Pt(e){if(e===sr)throw Error(y(174));return e}function xl(e,t){switch(D(qn,t),D(Zn,e),D(He,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:a0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=a0(t,e)}U(He),D(He,t)}function dn(){U(He),U(Zn),U(qn)}function ha(e){Pt(qn.current);var t=Pt(He.current),n=a0(t,e.type);t!==n&&(D(Zn,e),D(He,n))}function wl(e){Zn.current===e&&(U(He),U(Zn))}var A=wt(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=[];function Sl(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var Tr=tt.ReactCurrentDispatcher,Vi=tt.ReactCurrentBatchConfig,Lt=0,H=null,G=null,q=null,ti=!1,Dn=!1,Jn=0,vc=0;function re(){throw Error(y(321))}function Ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function _l(e,t,n,r,i,l){if(Lt=l,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Tr.current=e===null||e.memoizedState===null?hc:yc,e=n(r,i),Dn){l=0;do{if(Dn=!1,Jn=0,25<=l)throw Error(y(301));l+=1,q=G=null,t.updateQueue=null,Tr.current=xc,e=n(r,i)}while(Dn)}if(Tr.current=ni,t=G!==null&&G.next!==null,Lt=0,q=G=H=null,ti=!1,t)throw Error(y(300));return e}function Cl(){var e=Jn!==0;return Jn=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?H.memoizedState=q=e:q=q.next=e,q}function ze(){if(G===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=q===null?H.memoizedState:q.next;if(t!==null)q=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},q===null?H.memoizedState=q=e:q=q.next=e}return q}function er(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,d=l;do{var v=d.lane;if((Lt&v)===v)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=f,o=r):a=a.next=f,H.lanes|=v,It|=v}d=d.next}while(d!==null&&d!==l);a===null?o=r:a.next=s,Be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,It|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ki(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Be(l,t.memoizedState)||(ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ya(){}function xa(e,t){var n=H,r=ze(),i=t(),l=!Be(r.memoizedState,i);if(l&&(r.memoizedState=i,ge=!0),r=r.queue,El(Ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,tr(9,Sa.bind(null,n,r,i,t),void 0,null),J===null)throw Error(y(349));Lt&30||wa(n,t,i)}return i}function wa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sa(e,t,n,r){t.value=n,t.getSnapshot=r,_a(t)&&Ca(e)}function Ma(e,t,n){return n(function(){_a(t)&&Ca(e)})}function _a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Ca(e){var t=Je(e,1);t!==null&&De(t,e,1,-1)}function No(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=mc.bind(null,H,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ea(){return ze().memoizedState}function Lr(e,t,n,r){var i=be();H.flags|=e,i.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function ki(e,t,n,r){var i=ze();r=r===void 0?null:r;var l=void 0;if(G!==null){var o=G.memoizedState;if(l=o.destroy,r!==null&&Ml(r,o.deps)){i.memoizedState=tr(t,n,l,r);return}}H.flags|=e,i.memoizedState=tr(1|t,n,l,r)}function Po(e,t){return Lr(8390656,8,e,t)}function El(e,t){return ki(2048,8,e,t)}function Na(e,t){return ki(4,2,e,t)}function Pa(e,t){return ki(4,4,e,t)}function za(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ja(e,t,n){return n=n!=null?n.concat([e]):null,ki(4,4,za.bind(null,t,e),n)}function Nl(){}function Ra(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ta(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function La(e,t,n){return Lt&21?(Be(n,t)||(n=Fs(),H.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function pc(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{O=n,Vi.transition=r}}function Ia(){return ze().memoizedState}function kc(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Oa(e))Da(t,n);else if(n=ka(e,t,n,r),n!==null){var i=ae();De(n,e,r,i),Ba(n,t,r)}}function mc(e,t,n){var r=kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oa(e))Da(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Be(s,o)){var a=t.interleaved;a===null?(i.next=i,hl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=ka(e,t,i,r),n!==null&&(i=ae(),De(n,e,r,i),Ba(n,t,r))}}function Oa(e){var t=e.alternate;return e===H||t!==null&&t===H}function Da(e,t){Dn=ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ba(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}var ni={readContext:Pe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},hc={readContext:Pe,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Po,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,za.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kc.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:No,useDebugValue:Nl,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=No(!1),t=e[0];return e=pc.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=be();if(b){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));Lt&30||wa(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Po(Ma.bind(null,r,l,e),[e]),r.flags|=2048,tr(9,Sa.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=be(),t=J.identifierPrefix;if(b){var n=Xe,r=Ye;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yc={readContext:Pe,useCallback:Ra,useContext:Pe,useEffect:El,useImperativeHandle:ja,useInsertionEffect:Na,useLayoutEffect:Pa,useMemo:Ta,useReducer:Wi,useRef:Ea,useState:function(){return Wi(er)},useDebugValue:Nl,useDeferredValue:function(e){var t=ze();return La(t,G.memoizedState,e)},useTransition:function(){var e=Wi(er)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ya,useSyncExternalStore:xa,useId:Ia,unstable_isNewReconciler:!1},xc={readContext:Pe,useCallback:Ra,useContext:Pe,useEffect:El,useImperativeHandle:ja,useInsertionEffect:Na,useLayoutEffect:Pa,useMemo:Ta,useReducer:Ki,useRef:Ea,useState:function(){return Ki(er)},useDebugValue:Nl,useDeferredValue:function(e){var t=ze();return G===null?t.memoizedState=e:La(t,G.memoizedState,e)},useTransition:function(){var e=Ki(er)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ya,useSyncExternalStore:xa,useId:Ia,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function z0(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mi={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),i=kt(e),l=Ge(r,i);l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,i),t!==null&&(De(t,e,i,r),Rr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),i=kt(e),l=Ge(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,i),t!==null&&(De(t,e,i,r),Rr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=kt(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=vt(e,i,r),t!==null&&(De(t,e,r,n),Rr(t,e,r))}};function zo(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(i,l):!0}function Fa(e,t,n){var r=!1,i=yt,l=t.contextType;return typeof l=="object"&&l!==null?l=Pe(l):(i=ve(t)?Rt:oe.current,r=t.contextTypes,l=(r=r!=null)?an(e,i):yt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function jo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mi.enqueueReplaceState(t,t.state,null)}function j0(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Pe(l):(l=ve(t)?Rt:oe.current,i.context=an(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(z0(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&mi.enqueueReplaceState(i,i.state,null),Jr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=Yu(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function R0(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wc=typeof WeakMap=="function"?WeakMap:Map;function Ua(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ii||(ii=!0,$0=r),R0(e,t)},n}function ba(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){R0(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){R0(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ro(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wc;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Oc.bind(null,e,t,n),t.then(e,e))}function To(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lo(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Sc=tt.ReactCurrentOwner,ge=!1;function se(e,t,n,r){t.child=e===null?pa(t,null,n,r):cn(t,e.child,n,r)}function Io(e,t,n,r,i){n=n.render;var l=t.ref;return ln(t,i),r=_l(e,t,n,r,l,i),n=Cl(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(b&&n&&gl(t),t.flags|=1,se(e,t,r,i),t.child)}function Oo(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Ol(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$a(e,t,l,r,i)):(e=Br(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(o,r)&&e.ref===t.ref)return et(e,t,i)}return t.flags|=1,e=mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Kn(l,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,et(e,t,i)}return T0(e,t,n,r,i)}function Aa(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(qt,me),me|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(qt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,D(qt,me),me|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,D(qt,me),me|=r;return se(e,t,i,n),t.child}function Ha(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function T0(e,t,n,r,i){var l=ve(n)?Rt:oe.current;return l=an(t,l),ln(t,i),n=_l(e,t,n,r,l,i),r=Cl(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(b&&r&&gl(t),t.flags|=1,se(e,t,n,i),t.child)}function Do(e,t,n,r,i){if(ve(n)){var l=!0;Yr(t)}else l=!1;if(ln(t,i),t.stateNode===null)Ir(e,t),Fa(t,n,r),j0(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Pe(d):(d=ve(n)?Rt:oe.current,d=an(t,d));var v=n.getDerivedStateFromProps,f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==d)&&jo(t,o,r,d),lt=!1;var p=t.memoizedState;o.state=p,Jr(t,r,o,i),a=t.memoizedState,s!==r||p!==a||fe.current||lt?(typeof v=="function"&&(z0(t,n,v,r),a=t.memoizedState),(s=lt||zo(t,n,s,r,p,a,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ma(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Te(t.type,s),o.props=d,f=t.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Pe(a):(a=ve(n)?Rt:oe.current,a=an(t,a));var m=n.getDerivedStateFromProps;(v=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==a)&&jo(t,o,r,a),lt=!1,p=t.memoizedState,o.state=p,Jr(t,r,o,i);var x=t.memoizedState;s!==f||p!==x||fe.current||lt?(typeof m=="function"&&(z0(t,n,m,r),x=t.memoizedState),(d=lt||zo(t,n,d,r,p,x,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return L0(e,t,n,r,l,i)}function L0(e,t,n,r,i,l){Ha(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&wo(t,n,!1),et(e,t,l);r=t.stateNode,Sc.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,l),t.child=cn(t,null,s,l)):se(e,t,s,l),t.memoizedState=r.state,i&&wo(t,n,!0),t.child}function Qa(e){var t=e.stateNode;t.pendingContext?xo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xo(e,t.context,!1),xl(e,t.containerInfo)}function Bo(e,t,n,r,i){return un(),vl(i),t.flags|=256,se(e,t,n,r),t.child}var I0={dehydrated:null,treeContext:null,retryLane:0};function O0(e){return{baseLanes:e,cachePool:null,transitions:null}}function Va(e,t,n){var r=t.pendingProps,i=A.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(A,i&1),e===null)return N0(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=xi(o,r,0,null),e=jt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=O0(n),t.memoizedState=I0,e):Pl(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Mc(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=mt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=mt(s,l):(l=jt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?O0(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=I0,r}return l=e.child,e=l.sibling,r=mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pl(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sr(e,t,n,r){return r!==null&&vl(r),cn(t,e.child,null,n),e=Pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mc(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(y(422))),Sr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=xi({mode:"visible",children:r.children},i,0,null),l=jt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&cn(t,e.child,null,o),t.child.memoizedState=O0(o),t.memoizedState=I0,l);if(!(t.mode&1))return Sr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(y(419)),r=Yi(l,r,void 0),Sr(e,t,o,r)}if(s=(o&e.childLanes)!==0,ge||s){if(r=J,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Je(e,i),De(r,e,i,-1))}return Il(),r=Yi(Error(y(421))),Sr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dc.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,he=ft(i.nextSibling),ye=t,b=!0,Ie=null,e!==null&&(_e[Ce++]=Ye,_e[Ce++]=Xe,_e[Ce++]=Tt,Ye=e.id,Xe=e.overflow,Tt=t),t=Pl(t,r.children),t.flags|=4096,t)}function Fo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),P0(e.return,t,n)}function Xi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Wa(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fo(e,n,t);else if(e.tag===19)Fo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(A,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ei(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ei(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xi(t,!0,n,null,l);break;case"together":Xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ir(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _c(e,t,n){switch(t.tag){case 3:Qa(t),un();break;case 5:ha(t);break;case 1:ve(t.type)&&Yr(t);break;case 4:xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(Zr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Va(e,t,n):(D(A,A.current&1),e=et(e,t,n),e!==null?e.sibling:null);D(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wa(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Aa(e,t,n)}return et(e,t,n)}var Ka,D0,Ya,Xa;Ka=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};D0=function(){};Ya=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pt(He.current);var l=null;switch(n){case"input":i=i0(e,i),r=i0(e,r),l=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),l=[];break;case"textarea":i=s0(e,i),r=s0(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}u0(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(bn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var a=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(bn.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&F("scroll",e),l||s===a||(l=[])):(l=l||[]).push(d,a))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Xa=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cc(e,t,n){var r=t.pendingProps;switch(fl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ve(t.type)&&Kr(),ie(t),null;case 3:return r=t.stateNode,dn(),U(fe),U(oe),Sl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Q0(Ie),Ie=null))),D0(e,t),ie(t),null;case 5:wl(t);var i=Pt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ya(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ie(t),null}if(e=Pt(He.current),xr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[$e]=t,r[Gn]=l,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<jn.length;i++)F(jn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Wl(r,l),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},F("invalid",r);break;case"textarea":Yl(r,l),F("invalid",r)}u0(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&yr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&yr(r.textContent,s,e),i=["children",""+s]):bn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":dr(r),Kl(r,l,!0);break;case"textarea":dr(r),Xl(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Wr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ms(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$e]=t,e[Gn]=r,Ka(e,t,!1,!1),t.stateNode=e;e:{switch(o=c0(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<jn.length;i++)F(jn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":Wl(e,r),i=i0(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),F("invalid",e);break;case"textarea":Yl(e,r),i=s0(e,r),F("invalid",e);break;default:i=r}u0(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Es(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&_s(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$n(e,a):typeof a=="number"&&$n(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(bn.hasOwnProperty(l)?a!=null&&l==="onScroll"&&F("scroll",e):a!=null&&q0(e,l,a,o))}switch(n){case"input":dr(e),Kl(e,r,!1);break;case"textarea":dr(e),Xl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?en(e,!!r.multiple,l,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Xa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Pt(qn.current),Pt(He.current),xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(l=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return ie(t),null;case 13:if(U(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&he!==null&&t.mode&1&&!(t.flags&128))fa(),un(),t.flags|=98560,l=!1;else if(l=xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[$e]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else Ie!==null&&(Q0(Ie),Ie=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?Z===0&&(Z=3):Il())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return dn(),D0(e,t),e===null&&Yn(t.stateNode.containerInfo),ie(t),null;case 10:return ml(t.type._context),ie(t),null;case 17:return ve(t.type)&&Kr(),ie(t),null;case 19:if(U(A),l=t.memoizedState,l===null)return ie(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)_n(l,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ei(e),o!==null){for(t.flags|=128,_n(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(A,A.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>fn&&(t.flags|=128,r=!0,_n(l,!1),t.lanes=4194304)}else{if(!r)if(e=ei(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!b)return ie(t),null}else 2*Y()-l.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,_n(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=A.current,D(A,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Ll(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Ec(e,t){switch(fl(t),t.tag){case 1:return ve(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),U(fe),U(oe),Sl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wl(t),null;case 13:if(U(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(A),null;case 4:return dn(),null;case 10:return ml(t.type._context),null;case 22:case 23:return Ll(),null;case 24:return null;default:return null}}var Mr=!1,le=!1,Nc=typeof WeakSet=="function"?WeakSet:Set,_=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function B0(e,t,n){try{n()}catch(r){V(e,t,r)}}var Uo=!1;function Pc(e,t){if(x0=Hr,e=ea(),dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,d=0,v=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==l||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++d===i&&(s=o),p===l&&++v===r&&(a=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(w0={focusedElem:e,selectionRange:n},Hr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,E=x.memoizedState,g=t.stateNode,u=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Te(t.type,w),E);g.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(k){V(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Uo,Uo=!1,x}function Bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&B0(t,n,l)}i=i.next}while(i!==r)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function F0(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ga(e){var t=e.alternate;t!==null&&(e.alternate=null,Ga(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[Gn],delete t[_0],delete t[cc],delete t[dc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Za(e){return e.tag===5||e.tag===3||e.tag===4}function bo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Za(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function U0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(U0(e,t,n),e=e.sibling;e!==null;)U0(e,t,n),e=e.sibling}function b0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(b0(e,t,n),e=e.sibling;e!==null;)b0(e,t,n),e=e.sibling}var ee=null,Le=!1;function rt(e,t,n){for(n=n.child;n!==null;)qa(e,t,n),n=n.sibling}function qa(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ci,n)}catch{}switch(n.tag){case 5:le||Zt(n,t);case 6:var r=ee,i=Le;ee=null,rt(e,t,n),ee=r,Le=i,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Ai(e.parentNode,n):e.nodeType===1&&Ai(e,n),Vn(e)):Ai(ee,n.stateNode));break;case 4:r=ee,i=Le,ee=n.stateNode.containerInfo,Le=!0,rt(e,t,n),ee=r,Le=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&B0(n,t,o),i=i.next}while(i!==r)}rt(e,t,n);break;case 1:if(!le&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,rt(e,t,n),le=r):rt(e,t,n);break;default:rt(e,t,n)}}function $o(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nc),t.forEach(function(r){var i=Bc.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Le=!1;break e;case 3:ee=s.stateNode.containerInfo,Le=!0;break e;case 4:ee=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(ee===null)throw Error(y(160));qa(l,o,i),ee=null,Le=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(d){V(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ja(t,e),t=t.sibling}function Ja(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ue(e),r&4){try{Bn(3,e,e.return),hi(3,e)}catch(w){V(e,e.return,w)}try{Bn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Re(t,e),Ue(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Re(t,e),Ue(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&ws(i,l),c0(s,o);var d=c0(s,l);for(o=0;o<a.length;o+=2){var v=a[o],f=a[o+1];v==="style"?Es(i,f):v==="dangerouslySetInnerHTML"?_s(i,f):v==="children"?$n(i,f):q0(i,v,f,d)}switch(s){case"input":l0(i,l);break;case"textarea":Ss(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var m=l.value;m!=null?en(i,!!l.multiple,m,!1):p!==!!l.multiple&&(l.defaultValue!=null?en(i,!!l.multiple,l.defaultValue,!0):en(i,!!l.multiple,l.multiple?[]:"",!1))}i[Gn]=l}catch(w){V(e,e.return,w)}}break;case 6:if(Re(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){V(e,e.return,w)}}break;case 3:if(Re(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Re(t,e),Ue(e);break;case 13:Re(t,e),Ue(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Rl=Y())),r&4&&$o(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||v,Re(t,e),le=d):Re(t,e),Ue(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(_=e,v=e.child;v!==null;){for(f=_=v;_!==null;){switch(p=_,m=p.child,p.tag){case 0:case 11:case 14:case 15:Bn(4,p,p.return);break;case 1:Zt(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:Zt(p,p.return);break;case 22:if(p.memoizedState!==null){Ho(f);continue}}m!==null?(m.return=p,_=m):Ho(f)}v=v.sibling}e:for(v=null,f=e;;){if(f.tag===5){if(v===null){v=f;try{i=f.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Cs("display",o))}catch(w){V(e,e.return,w)}}}else if(f.tag===6){if(v===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(w){V(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;v===f&&(v=null),f=f.return}v===f&&(v=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Re(t,e),Ue(e),r&4&&$o(e);break;case 21:break;default:Re(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Za(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($n(i,""),r.flags&=-33);var l=bo(e);b0(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=bo(e);U0(e,s,o);break;default:throw Error(y(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zc(e,t,n){_=e,eu(e)}function eu(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mr;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||le;s=Mr;var d=le;if(Mr=o,(le=a)&&!d)for(_=i;_!==null;)o=_,a=o.child,o.tag===22&&o.memoizedState!==null?Qo(i):a!==null?(a.return=o,_=a):Qo(i);for(;l!==null;)_=l,eu(l),l=l.sibling;_=i,Mr=s,le=d}Ao(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):Ao(e)}}function Ao(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Eo(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Eo(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var f=v.dehydrated;f!==null&&Vn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}le||t.flags&512&&F0(t)}catch(p){V(t,t.return,p)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ho(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Qo(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hi(4,t)}catch(a){V(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){V(t,i,a)}}var l=t.return;try{F0(t)}catch(a){V(t,l,a)}break;case 5:var o=t.return;try{F0(t)}catch(a){V(t,o,a)}}}catch(a){V(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var jc=Math.ceil,ri=tt.ReactCurrentDispatcher,zl=tt.ReactCurrentOwner,Ne=tt.ReactCurrentBatchConfig,L=0,J=null,X=null,te=0,me=0,qt=wt(0),Z=0,nr=null,It=0,yi=0,jl=0,Fn=null,de=null,Rl=0,fn=1/0,Ve=null,ii=!1,$0=null,pt=null,_r=!1,ut=null,li=0,Un=0,A0=null,Or=-1,Dr=0;function ae(){return L&6?Y():Or!==-1?Or:Or=Y()}function kt(e){return e.mode&1?L&2&&te!==0?te&-te:fc.transition!==null?(Dr===0&&(Dr=Fs()),Dr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Vs(e.type)),e):1}function De(e,t,n,r){if(50<Un)throw Un=0,A0=null,Error(y(185));ir(e,n,r),(!(L&2)||e!==J)&&(e===J&&(!(L&2)&&(yi|=n),Z===4&&st(e,te)),pe(e,r),n===1&&L===0&&!(t.mode&1)&&(fn=Y()+500,pi&&St()))}function pe(e,t){var n=e.callbackNode;f1(e,t);var r=Ar(e,e===J?te:0);if(r===0)n!==null&&ql(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ql(n),t===1)e.tag===0?gc(Vo.bind(null,e)):ca(Vo.bind(null,e)),ac(function(){!(L&6)&&St()}),n=null;else{switch(Us(r)){case 1:n=rl;break;case 4:n=Ds;break;case 16:n=$r;break;case 536870912:n=Bs;break;default:n=$r}n=au(n,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tu(e,t){if(Or=-1,Dr=0,L&6)throw Error(y(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Ar(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oi(e,r);else{t=r;var i=L;L|=2;var l=ru();(J!==e||te!==t)&&(Ve=null,fn=Y()+500,zt(e,t));do try{Lc();break}catch(s){nu(e,s)}while(!0);kl(),ri.current=l,L=i,X!==null?t=0:(J=null,te=0,t=Z)}if(t!==0){if(t===2&&(i=p0(e),i!==0&&(r=i,t=H0(e,i))),t===1)throw n=nr,zt(e,0),st(e,r),pe(e,Y()),n;if(t===6)st(e,r);else{if(i=e.current.alternate,!(r&30)&&!Rc(i)&&(t=oi(e,r),t===2&&(l=p0(e),l!==0&&(r=l,t=H0(e,l))),t===1))throw n=nr,zt(e,0),st(e,r),pe(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Ct(e,de,Ve);break;case 3:if(st(e,r),(r&130023424)===r&&(t=Rl+500-Y(),10<t)){if(Ar(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=M0(Ct.bind(null,e,de,Ve),t);break}Ct(e,de,Ve);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Oe(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jc(r/1960))-r,10<r){e.timeoutHandle=M0(Ct.bind(null,e,de,Ve),r);break}Ct(e,de,Ve);break;case 5:Ct(e,de,Ve);break;default:throw Error(y(329))}}}return pe(e,Y()),e.callbackNode===n?tu.bind(null,e):null}function H0(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=oi(e,t),e!==2&&(t=de,de=n,t!==null&&Q0(t)),e}function Q0(e){de===null?de=e:de.push.apply(de,e)}function Rc(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Be(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~jl,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function Vo(e){if(L&6)throw Error(y(327));on();var t=Ar(e,0);if(!(t&1))return pe(e,Y()),null;var n=oi(e,t);if(e.tag!==0&&n===2){var r=p0(e);r!==0&&(t=r,n=H0(e,r))}if(n===1)throw n=nr,zt(e,0),st(e,t),pe(e,Y()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,de,Ve),pe(e,Y()),null}function Tl(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(fn=Y()+500,pi&&St())}}function Ot(e){ut!==null&&ut.tag===0&&!(L&6)&&on();var t=L;L|=1;var n=Ne.transition,r=O;try{if(Ne.transition=null,O=1,e)return e()}finally{O=r,Ne.transition=n,L=t,!(L&6)&&St()}}function Ll(){me=qt.current,U(qt)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sc(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(fl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:dn(),U(fe),U(oe),Sl();break;case 5:wl(r);break;case 4:dn();break;case 13:U(A);break;case 19:U(A);break;case 10:ml(r.type._context);break;case 22:case 23:Ll()}n=n.return}if(J=e,X=e=mt(e.current,null),te=me=t,Z=0,nr=null,jl=yi=It=0,de=Fn=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Nt=null}return e}function nu(e,t){do{var n=X;try{if(kl(),Tr.current=ni,ti){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ti=!1}if(Lt=0,q=G=H=null,Dn=!1,Jn=0,zl.current=null,n===null||n.return===null){Z=1,nr=t,X=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=te,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,v=s,f=v.tag;if(!(v.mode&1)&&(f===0||f===11||f===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var m=To(o);if(m!==null){m.flags&=-257,Lo(m,o,s,l,t),m.mode&1&&Ro(l,d,t),t=m,a=d;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){Ro(l,d,t),Il();break e}a=Error(y(426))}}else if(b&&s.mode&1){var E=To(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Lo(E,o,s,l,t),vl(gn(a,s));break e}}l=a=gn(a,s),Z!==4&&(Z=2),Fn===null?Fn=[l]:Fn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=Ua(l,a,t);Co(l,g);break e;case 1:s=a;var u=l.type,c=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(pt===null||!pt.has(c)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=ba(l,s,t);Co(l,k);break e}}l=l.return}while(l!==null)}lu(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function ru(){var e=ri.current;return ri.current=ni,e===null?ni:e}function Il(){(Z===0||Z===3||Z===2)&&(Z=4),J===null||!(It&268435455)&&!(yi&268435455)||st(J,te)}function oi(e,t){var n=L;L|=2;var r=ru();(J!==e||te!==t)&&(Ve=null,zt(e,t));do try{Tc();break}catch(i){nu(e,i)}while(!0);if(kl(),L=n,ri.current=r,X!==null)throw Error(y(261));return J=null,te=0,Z}function Tc(){for(;X!==null;)iu(X)}function Lc(){for(;X!==null&&!i1();)iu(X)}function iu(e){var t=su(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?lu(e):X=t,zl.current=null}function lu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ec(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=Cc(n,t,me),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function Ct(e,t,n){var r=O,i=Ne.transition;try{Ne.transition=null,O=1,Ic(e,t,n,r)}finally{Ne.transition=i,O=r}return null}function Ic(e,t,n,r){do on();while(ut!==null);if(L&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(v1(e,l),e===J&&(X=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,au($r,function(){return on(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var o=O;O=1;var s=L;L|=4,zl.current=null,Pc(e,n),Ja(n,e),ec(w0),Hr=!!x0,w0=x0=null,e.current=n,zc(n),l1(),L=s,O=o,Ne.transition=l}else e.current=n;if(_r&&(_r=!1,ut=e,li=i),l=e.pendingLanes,l===0&&(pt=null),a1(n.stateNode),pe(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ii)throw ii=!1,e=$0,$0=null,e;return li&1&&e.tag!==0&&on(),l=e.pendingLanes,l&1?e===A0?Un++:(Un=0,A0=e):Un=0,St(),null}function on(){if(ut!==null){var e=Us(li),t=Ne.transition,n=O;try{if(Ne.transition=null,O=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,li=0,L&6)throw Error(y(331));var i=L;for(L|=4,_=e.current;_!==null;){var l=_,o=l.child;if(_.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(_=d;_!==null;){var v=_;switch(v.tag){case 0:case 11:case 15:Bn(8,v,l)}var f=v.child;if(f!==null)f.return=v,_=f;else for(;_!==null;){v=_;var p=v.sibling,m=v.return;if(Ga(v),v===d){_=null;break}if(p!==null){p.return=m,_=p;break}_=m}}}var x=l.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}_=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,_=o;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Bn(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,_=g;break e}_=l.return}}var u=e.current;for(_=u;_!==null;){o=_;var c=o.child;if(o.subtreeFlags&2064&&c!==null)c.return=o,_=c;else e:for(o=u;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hi(9,s)}}catch(S){V(s,s.return,S)}if(s===o){_=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,_=k;break e}_=s.return}}if(L=i,St(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ci,e)}catch{}r=!0}return r}finally{O=n,Ne.transition=t}}return!1}function Wo(e,t,n){t=gn(n,t),t=Ua(e,t,1),e=vt(e,t,1),t=ae(),e!==null&&(ir(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Wo(e,e,n);else for(;t!==null;){if(t.tag===3){Wo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=gn(n,e),e=ba(t,e,1),t=vt(t,e,1),e=ae(),t!==null&&(ir(t,1,e),pe(t,e));break}}t=t.return}}function Oc(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(Z===4||Z===3&&(te&130023424)===te&&500>Y()-Rl?zt(e,0):jl|=n),pe(e,t)}function ou(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=ae();e=Je(e,t),e!==null&&(ir(e,t,n),pe(e,n))}function Dc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ou(e,n)}function Bc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),ou(e,n)}var su;su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,_c(e,t,n);ge=!!(e.flags&131072)}else ge=!1,b&&t.flags&1048576&&da(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ir(e,t),e=t.pendingProps;var i=an(t,oe.current);ln(t,n),i=_l(null,t,r,e,i,n);var l=Cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(l=!0,Yr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yl(t),i.updater=mi,t.stateNode=i,i._reactInternals=t,j0(t,r,e,n),t=L0(null,t,r,!0,l,n)):(t.tag=0,b&&l&&gl(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ir(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Uc(r),e=Te(r,e),i){case 0:t=T0(null,t,r,e,n);break e;case 1:t=Do(null,t,r,e,n);break e;case 11:t=Io(null,t,r,e,n);break e;case 14:t=Oo(null,t,r,Te(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),T0(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Do(e,t,r,i,n);case 3:e:{if(Qa(t),e===null)throw Error(y(387));r=t.pendingProps,l=t.memoizedState,i=l.element,ma(e,t),Jr(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=gn(Error(y(423)),t),t=Bo(e,t,r,n,i);break e}else if(r!==i){i=gn(Error(y(424)),t),t=Bo(e,t,r,n,i);break e}else for(he=ft(t.stateNode.containerInfo.firstChild),ye=t,b=!0,Ie=null,n=pa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===i){t=et(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return ha(t),e===null&&N0(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,S0(r,i)?o=null:l!==null&&S0(r,l)&&(t.flags|=32),Ha(e,t),se(e,t,o,n),t.child;case 6:return e===null&&N0(t),null;case 13:return Va(e,t,n);case 4:return xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Io(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,D(Zr,r._currentValue),r._currentValue=o,l!==null)if(Be(l.value,o)){if(l.children===i.children&&!fe.current){t=et(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Ge(-1,n&-n),a.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?a.next=a:(a.next=v.next,v.next=a),d.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),P0(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),P0(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ln(t,n),i=Pe(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=Te(r,t.pendingProps),i=Te(r.type,i),Oo(e,t,r,i,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Ir(e,t),t.tag=1,ve(r)?(e=!0,Yr(t)):e=!1,ln(t,n),Fa(t,r,i),j0(t,r,i,n),L0(null,t,r,!0,e,n);case 19:return Wa(e,t,n);case 22:return Aa(e,t,n)}throw Error(y(156,t.tag))};function au(e,t){return Os(e,t)}function Fc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Fc(e,t,n,r)}function Ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uc(e){if(typeof e=="function")return Ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===el)return 11;if(e===tl)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Ol(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case At:return jt(n.children,i,l,t);case J0:o=8,i|=8;break;case e0:return e=Ee(12,n,t,i|2),e.elementType=e0,e.lanes=l,e;case t0:return e=Ee(13,n,t,i),e.elementType=t0,e.lanes=l,e;case n0:return e=Ee(19,n,t,i),e.elementType=n0,e.lanes=l,e;case hs:return xi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ks:o=10;break e;case ms:o=9;break e;case el:o=11;break e;case tl:o=14;break e;case it:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function jt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=hs,e.lanes=n,e.stateNode={isHidden:!1},e}function Gi(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Zi(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,t,n,r,i,l,o,s,a){return e=new bc(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yl(l),e}function $c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uu(e){if(!e)return yt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(ve(n))return ua(e,n,t)}return t}function cu(e,t,n,r,i,l,o,s,a){return e=Dl(n,r,!0,e,i,l,o,s,a),e.context=uu(null),n=e.current,r=ae(),i=kt(n),l=Ge(r,i),l.callback=t??null,vt(n,l,i),e.current.lanes=i,ir(e,i,r),pe(e,r),e}function wi(e,t,n,r){var i=t.current,l=ae(),o=kt(i);return n=uu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(i,t,o),e!==null&&(De(e,i,o,l),Rr(e,i,o)),o}function si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ko(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bl(e,t){Ko(e,t),(e=e.alternate)&&Ko(e,t)}var du=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fl(e){this._internalRoot=e}Si.prototype.render=Fl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));wi(e,t,null,null)};Si.prototype.unmount=Fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){wi(null,e,null,null)}),t[qe]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var t=As();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&Qs(e)}};function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yo(){}function Ac(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=si(o);l.call(d)}}var o=cu(t,r,e,0,null,!1,!1,"",Yo);return e._reactRootContainer=o,e[qe]=o.current,Yn(e.nodeType===8?e.parentNode:e),Ot(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=si(a);s.call(d)}}var a=Dl(e,0,!1,null,null,!1,!1,"",Yo);return e._reactRootContainer=a,e[qe]=a.current,Yn(e.nodeType===8?e.parentNode:e),Ot(function(){wi(t,a,n,r)}),a}function _i(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=si(o);s.call(a)}}wi(t,o,e,i)}else o=Ac(n,t,e,i,r);return si(o)}bs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(il(t,n|1),pe(t,Y()),!(L&6)&&(fn=Y()+500,St()))}break;case 13:Ot(function(){var r=Je(e,1);if(r!==null){var i=ae();De(r,e,1,i)}}),Bl(e,1)}};ll=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ae();De(t,e,134217728,n)}Bl(e,134217728)}};$s=function(e){if(e.tag===13){var t=kt(e),n=Je(e,t);if(n!==null){var r=ae();De(n,e,t,r)}Bl(e,t)}};As=function(){return O};Hs=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};g0=function(e,t,n){switch(t){case"input":if(l0(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vi(r);if(!i)throw Error(y(90));xs(r),l0(r,i)}}}break;case"textarea":Ss(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};zs=Tl;js=Ot;var Hc={usingClientEntryPoint:!1,Events:[or,Wt,vi,Ns,Ps,Tl]},Cn={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qc={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ls(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cr.isDisabled&&Cr.supportsFiber)try{ci=Cr.inject(Qc),Ae=Cr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hc;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ul(t))throw Error(y(200));return $c(e,t,null,n)};we.createRoot=function(e,t){if(!Ul(e))throw Error(y(299));var n=!1,r="",i=du;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dl(e,1,!1,null,null,n,!1,r,i),e[qe]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Fl(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ls(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Ot(e)};we.hydrate=function(e,t,n){if(!Mi(t))throw Error(y(200));return _i(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Ul(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=du;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=cu(t,null,e,1,n??null,i,!1,l,o),e[qe]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Si(t)};we.render=function(e,t,n){if(!Mi(t))throw Error(y(200));return _i(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(y(40));return e._reactRootContainer?(Ot(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};we.unstable_batchedUpdates=Tl;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mi(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return _i(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function gu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gu)}catch(e){console.error(e)}}gu(),gs.exports=we;var Vc=gs.exports,Xo=Vc;qi.createRoot=Xo.createRoot,qi.hydrateRoot=Xo.hydrateRoot;function Wc(e){return Array.from(e.querySelectorAll("path"),t=>Yc(Kc(t.getAttribute("d")||"")))}function Kc(e){const t=e.match(/([MmLlCcSsZz])([^MmLlCcSsZz]*)/g)||[];if(!t.length)return[];const n=[];let r={x:0,y:0};const i=/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;for(const l of t){const o=l[0],s=o===o.toLowerCase(),a=o.toUpperCase(),v=(l.slice(1).trim().match(i)||[]).map(Number);switch(a){case"M":if(v.length<2)break;{let f=s?r.x+v[0]:v[0],p=s?r.y+v[1]:v[1];r={x:f,y:p},n.push({type:"M",points:[{x:f,y:p}]});for(let m=2;m<v.length&&!(m+1>=v.length);m+=2)f=s?r.x+v[m]:v[m],p=s?r.y+v[m+1]:v[m+1],n.push({type:"L",points:[{x:r.x,y:r.y},{x:f,y:p}]}),r={x:f,y:p}}break;case"C":for(let f=0;f<v.length&&!(f+5>=v.length);f+=6){const p=s?r.x+v[f]:v[f],m=s?r.y+v[f+1]:v[f+1],x=s?r.x+v[f+2]:v[f+2],w=s?r.y+v[f+3]:v[f+3],E=s?r.x+v[f+4]:v[f+4],g=s?r.y+v[f+5]:v[f+5];n.push({type:"C",points:[{x:r.x,y:r.y},{x:p,y:m},{x,y:w},{x:E,y:g}]}),r={x:E,y:g}}break;case"L":for(let f=0;f<v.length&&!(f+1>=v.length);f+=2){const p=s?r.x+v[f]:v[f],m=s?r.y+v[f+1]:v[f+1];n.push({type:"L",points:[{x:r.x,y:r.y},{x:p,y:m}]}),r={x:p,y:m}}break;case"S":for(let f=0;f<v.length&&!(f+3>=v.length);f+=4){let p=r.x,m=r.y;if(n.length>0){const u=n[n.length-1];if(u.type==="C"||u.type==="S"){const c=u.points[u.points.length-1],k=u.points[u.points.length-2];p=2*c.x-k.x,m=2*c.y-k.y}}const x=s?r.x+v[f]:v[f],w=s?r.y+v[f+1]:v[f+1],E=s?r.x+v[f+2]:v[f+2],g=s?r.y+v[f+3]:v[f+3];n.push({type:"C",points:[{x:r.x,y:r.y},{x:p,y:m},{x,y:w},{x:E,y:g}]}),r={x:E,y:g}}break;case"Z":if(n.length>0){const f=n.find(p=>p.type==="M");f&&(n.push({type:"Z",points:[r,f.points[0]]}),r=f.points[0])}break;default:console.warn("Unsupported:",o);break}}return n}function Yc(e,t=20){const n=[];let r=!1;for(const i of e)switch(i.type){case"M":{n.push(i.points[0]),r=!0;break}case"L":{r||(n.push(i.points[0]),r=!0),n.push(i.points[1]);break}case"C":{const l=i.points[0],o=i.points[1],s=i.points[2],a=i.points[3];r||(n.push(l),r=!0);const d=Xc(l,o,s,a,t);n.push(...d.slice(1));break}case"Z":{n.push(i.points[1]);break}}return n}function Xc(e,t,n,r,i){const l=[];for(let o=0;o<=i;o++){const s=o/i,a=Go(e.x,t.x,n.x,r.x,s),d=Go(e.y,t.y,n.y,r.y,s);l.push({x:a,y:d})}return l}function Go(e,t,n,r,i){const l=1-i;return l*l*l*e+3*l*l*i*t+3*l*i*i*n+i*i*i*r}function Zo(e){const t=e.map(v=>v.x),n=e.map(v=>v.y),r=Math.min(...t),i=Math.max(...t),l=Math.min(...n),o=Math.max(...n),s=(r+i)/2,a=(l+o)/2,d=Math.max(i-r,o-l)||1;return{centerX:s,centerY:a,scale:d}}function qo(e,t){return e.map(n=>({x:(n.x-t.centerX)/t.scale,y:(n.y-t.centerY)/t.scale}))}function Jo(e,t){if(e.length<2)return[...e];const n=[];n.push(e[0]);let r=0;for(let o=1;o<e.length;o++)r+=es(e[o-1],e[o]);const i=r/(t-1);let l=0;for(let o=1;o<e.length;o++){const s=es(e[o-1],e[o]);l+=s,l>=i&&(n.push(e[o]),l=0)}for(;n.length<t;)n.push(e[e.length-1]);return n.slice(0,t)}function es(e,t){return Math.hypot(t.x-e.x,t.y-e.y)}function ai(e,t){const n=t.scale,r=e.x*n+t.centerX,i=e.y*n+t.centerY;return{cx:r,cy:i}}function Gc(e,t){const n=e.length,r=t.length,i=Array.from({length:n+1},()=>Array(r+1).fill(Number.POSITIVE_INFINITY));i[0][0]=0;for(let l=1;l<=n;l++)for(let o=1;o<=r;o++){const s=Math.hypot(e[l-1].x-t[o-1].x,e[l-1].y-t[o-1].y);i[l][o]=s+Math.min(i[l-1][o],i[l][o-1],i[l-1][o-1])}return i[n][r]}function Zc(e,t){if(t.length!==e.length)throw new Error("The number of strokes does not match");const n=[];for(const s of e)n.push(...s);const r=Zo(n),i=[];for(const s of t)i.push(...s);const l=Zo(i),o=[];for(let s=0;s<e.length;s++){const a=qo(e[s],r),d=qo(t[s],l),v=Jo(a,200),f=Jo(d,200),p=Gc(v,f),m=Math.max(v.length,f.length),x=Math.max(0,1-p/m);o.push({score:x,sampleResampled:v,userResampled:f})}return{strokeResults:o,normParamsUser:l,normParamsSample:r}}function fu(e,t,n){const r=e.globalAlpha,i=e.strokeStyle,l=e.lineWidth;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.globalAlpha=.4,e.font="16px sans-serif",t.strokeResults.forEach((o,s)=>{e.lineWidth=o.score<n?4:1,e.strokeStyle="blue",e.beginPath(),o.userResampled.forEach((f,p)=>{const{cx:m,cy:x}=ai(f,t.normParamsUser);p===0?e.moveTo(m,x):e.lineTo(m,x)}),e.stroke();const a=o.userResampled[0],{cx:d,cy:v}=ai(a,t.normParamsUser);e.fillStyle="blue",e.fillText(`${s+1}`,d+5,v-5)}),e.globalAlpha=r,e.strokeStyle=i,e.lineWidth=l}function qc(e,t,n){const r=e.lineWidth;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.globalAlpha=.4,e.font="16px sans-serif",t.strokeResults.forEach((i,l)=>{e.lineWidth=i.score<n?4:1,e.beginPath(),e.strokeStyle="red",i.sampleResampled.forEach((d,v)=>{const{cx:f,cy:p}=ai(d,t.normParamsUser);v===0?e.moveTo(f,p):e.lineTo(f,p)}),e.stroke();const o=i.sampleResampled[0],{cx:s,cy:a}=ai(o,t.normParamsUser);e.fillStyle="red",e.fillText(`${l+1}`,s+5,a-5)}),e.globalAlpha=1,e.lineWidth=r}const We=class We{constructor(t){Fe(this,"questions");Fe(this,"targetQuestionIdices");Fe(this,"currentIndex");Fe(this,"results");Fe(this,"totalResults");Fe(this,"isReviewMode");this.questions=t,this.targetQuestionIdices=[...Array(t.length).keys()],this.currentIndex=0,this.results=[],this.totalResults=[],this.isReviewMode=!1,this.saveState()}saveState(){const t={questions:this.questions,targetQuestionIdices:this.targetQuestionIdices,currentIndex:this.currentIndex,results:this.results,totalResults:this.totalResults,isReviewMode:this.isReviewMode};localStorage.setItem(We.STORAGE_KEY,JSON.stringify(t))}static restoreFromStorage(){const t=localStorage.getItem(We.STORAGE_KEY);if(!t)return null;const n=JSON.parse(t),r=new We(n.questions);return r.targetQuestionIdices=n.targetQuestionIdices,r.currentIndex=n.currentIndex,r.results=n.results,r.totalResults=n.totalResults,r.isReviewMode=n.isReviewMode,r}getCurrentQuestion(){return this.questions[this.targetQuestionIdices[this.currentIndex]]}isCorrect(t){return t.every(n=>n>=We.SCORE_THRESHOLD)}getScoreText(t){const n=t.reduce((o,s)=>o+s,0)/t.length,r=Math.min(...t),i=Math.round(n*100);return`スコア: ${Math.round(r*100)}%、へいきん: ${i}%`}recordResult(t,n){if(this.isComplete())throw new Error("All questions have been answered");const r=this.targetQuestionIdices[this.currentIndex];this.results.push({questionIndex:r,isCorrect:t,normalizedResult:n}),this.totalResults.push({questionIndex:r,isCorrect:t,normalizedResult:n}),this.currentIndex++,this.saveState()}hasIncorrectQuestions(){return this.results.some(t=>!t.isCorrect)}startReviewMode(){this.isReviewMode=!0,this.currentIndex=0,this.targetQuestionIdices=this.results.filter(t=>!t.isCorrect).map(t=>t.questionIndex),this.results=[],this.saveState()}getScore(){const t=this.results.length,n=this.results.filter(l=>l.isCorrect).length,r=t-n,i=n/t*100;return{total:t,correct:n,incorrectCount:r,percentage:i}}getResults(){const t=new Map,n=new Map;for(const r of this.totalResults)if(t.set(r.questionIndex,r),!r.isCorrect){const i=n.get(r.questionIndex)||0;n.set(r.questionIndex,i+1)}return this.questions.map((r,i)=>{const l=t.get(i)??{questionIndex:i,isCorrect:!1},o=n.get(i)||0;return{question:r,lastResult:l,incorrectCount:o}})}isInReviewMode(){return this.isReviewMode}isComplete(){return this.results.length===this.targetQuestionIdices.length}getCurrentQuestionNumber(){return this.currentIndex+1}getTotalQuestions(){return this.targetQuestionIdices.length}reset(){this.targetQuestionIdices=[...Array(this.questions.length).keys()],this.currentIndex=0,this.results=[],this.totalResults=[],this.isReviewMode=!1,this.saveState()}unloadFromStorage(){localStorage.removeItem(We.STORAGE_KEY)}};Fe(We,"STORAGE_KEY","kanjiQuestionManagerState"),Fe(We,"SCORE_THRESHOLD",.6);let Jt=We;const Jc=e=>{const[t,n]=I.useState([]),r=I.useRef(null),i=I.useRef(!1),l=I.useRef([]);I.useEffect(()=>{if(!e)return;const s=e.getContext("2d");if(!s)throw new Error("Failed to get 2D context");r.current=s;const a=c=>{const k=e.getBoundingClientRect();return{x:(c instanceof MouseEvent?c.clientX:c.touches[0].clientX)-((k==null?void 0:k.left)||0),y:(c instanceof MouseEvent?c.clientY:c.touches[0].clientY)-((k==null?void 0:k.top)||0)}},d=c=>{i.current=!0,l.current=[];const{x:k,y:S}=a(c);s.beginPath(),s.moveTo(k,S),l.current=[{x:k,y:S}]},v=c=>{if(!i.current)return;const{x:k,y:S}=a(c);s.lineTo(k,S),s.stroke(),l.current=[...l.current,{x:k,y:S}]},f=()=>{i.current&&(i.current=!1,s.closePath(),l.current.length>2&&n(c=>[...c,[...l.current]]))},p=c=>{d(c)},m=c=>{i.current&&v(c)},x=()=>f(),w=()=>f(),E=c=>{c.preventDefault();const k=c.touches[0],S=new MouseEvent("mousedown",{clientX:k.clientX,clientY:k.clientY,bubbles:!0,cancelable:!0,view:window});d(S)},g=c=>{if(c.preventDefault(),i.current){const k=c.touches[0],S=new MouseEvent("mousemove",{clientX:k.clientX,clientY:k.clientY,bubbles:!0,cancelable:!0,view:window});v(S)}},u=()=>f();return e.addEventListener("mousedown",p),e.addEventListener("mousemove",m),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",w),e.addEventListener("touchstart",E),e.addEventListener("touchmove",g),e.addEventListener("touchend",u),()=>{e.removeEventListener("mousedown",p),e.removeEventListener("mousemove",m),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",w),e.removeEventListener("touchstart",E),e.removeEventListener("touchmove",g),e.removeEventListener("touchend",u)}},[e]);const o=I.useCallback(()=>{var s;(s=r.current)==null||s.clearRect(0,0,(e==null?void 0:e.width)||0,(e==null?void 0:e.height)||0),n([]),i.current=!1,l.current=[]},[e]);return{userStrokes:t,canvasContext:r.current,clearStrokes:o}};function ed({results:e}){return h.jsxs("div",{style:{marginTop:"20px"},children:[h.jsx("h3",{style:{color:"green",marginBottom:"10px",textAlign:"center"},children:"れんしゅうした もじ"}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"20px",padding:"10px"},children:e.map(t=>t.lastResult.normalizedResult?h.jsxs("div",{style:{textAlign:"center"},children:[h.jsx("div",{dangerouslySetInnerHTML:{__html:t.question.sentence},style:{fontSize:"1.6rem",marginBottom:"10px"}}),h.jsx(td,{result:t})]},t.question.id):null)})]})}function td({result:e}){const t=I.useRef(null);return I.useEffect(()=>{const n=t.current;if(!n)return;const r=n.getContext("2d");!r||!e.lastResult.normalizedResult||fu(r,e.lastResult.normalizedResult,.7)},[e]),h.jsx("canvas",{ref:t,width:300,height:300,style:{border:"1px solid #ccc",backgroundColor:"#fff"}})}function nd({scoreAndResults:e,onRestartReview:t,onBackToStart:n}){const r=e.results.filter(i=>i.incorrectCount);return h.jsxs(h.Fragment,{children:[h.jsx("h2",{children:"けっか"}),h.jsxs("div",{children:["ぜん",e.score.total,"もんちゅう、",e.score.correct,"もん せいかい！"]}),h.jsxs("div",{children:["せいかいりつ: ",e.score.percentage.toFixed(1),"%"]}),e.score.incorrectCount>0?h.jsxs(h.Fragment,{children:[h.jsxs("p",{style:{textAlign:"center"},children:[e.score.incorrectCount,"もん まちがいました。"]}),h.jsx("div",{children:h.jsx("button",{type:"button",onClick:t,children:"まちがった もんだい を もういちど"})})]}):h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{marginBottom:"20px"},children:"すべての もんだいに せいかいしました！"}),e.results.length>0&&h.jsx(ed,{results:e.results}),h.jsx("div",{style:{marginTop:"20px"},children:h.jsx("button",{type:"button",onClick:n,children:"スタートがめんへ"})}),r.length>0&&h.jsxs("div",{style:{marginBottom:"20px"},children:[h.jsx("h3",{style:{color:"green",marginBottom:"10px"},children:"まちがえた もんだい"}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:e.results.filter(i=>i.incorrectCount).map(i=>h.jsxs("div",{children:[h.jsx("div",{dangerouslySetInnerHTML:{__html:i.question.sentence},style:{fontSize:"1.6rem"}}),h.jsxs("div",{children:[i.incorrectCount,"かい まちがえました"]})]},i.question.id))})]})]})]})}function rd({canvasRef:e,answerCanvasRef:t,answerRef:n,showAnswer:r,showSVG:i,svgContent:l,result:o}){return h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:10,flexWrap:"wrap"},children:[h.jsx("canvas",{ref:e,width:"320",height:"320",style:{border:"1px solid #000"}}),h.jsx("canvas",{ref:t,width:"320",height:"320",style:{border:"1px solid #000",display:r?"block":"none"}}),h.jsx("div",{"data-testid":"svg-container",dangerouslySetInnerHTML:{__html:l.replace(/(width|height)="[^"]+"/g,'$1="320"')},style:{border:"1px solid #000",display:i?"block":"none",width:320,height:320},ref:n})]}),h.jsx("div",{children:o})]})}function id({showNext:e,hasStrokes:t,onEvaluate:n,onClear:r,onDontKnow:i,onNextQuestion:l}){return h.jsxs("div",{className:"button-container",children:[!e&&h.jsxs(h.Fragment,{children:[h.jsx("button",{type:"button",onClick:n,disabled:!t,children:"ひょうか"}),h.jsx("button",{type:"button",onClick:r,disabled:!t,children:"クリア"}),h.jsx("button",{type:"button",onClick:i,children:"わからない"})]}),e&&h.jsx("button",{type:"button",onClick:l,children:"つぎの もんだいへ"})]})}const En=[{id:"5b66-01",sentence:"<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。",target:"学",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e00-01",sentence:"<ruby>一<rt>ひと</rt></ruby>つのりんごを<ruby>買<rt>か</rt></ruby>いました。",target:"一",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
<g id="kvg:StrokePaths_04e00" style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;">
<g id="kvg:04e00" kvg:element="一" kvg:radical="general">
	<path id="kvg:04e00-s1" kvg:type="㇐" d="M11,54.25c3.19,0.62,6.25,0.75,9.73,0.5c20.64-1.5,50.39-5.12,68.58-5.24c3.6-0.02,5.77,0.24,7.57,0.49"/>
</g>
</g>
<g id="kvg:StrokeNumbers_04e00" style="font-size:8;fill:#808080">
	<text transform="matrix(1 0 0 1 4.25 54.13)">1</text>
</g>
</svg>
`},{id:"53f3-01",sentence:"<ruby>右<rt>みぎ</rt></ruby>にまがってください。",target:"右",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"96e8-01",sentence:"<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています。",target:"雨",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5186-01",sentence:"<ruby>円<rt>えん</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",target:"円",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"738b-01",sentence:"<ruby>王<rt>おう</rt></ruby>さまのお<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きました。",target:"王",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"97f3-01",sentence:"<ruby>音<rt>おと</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいですね。",target:"音",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e0b-01",sentence:"<ruby>下<rt>した</rt></ruby>をむいてください。",target:"下",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"706b-01",sentence:"<ruby>火<rt>ひ</rt></ruby>をけしてください。",target:"火",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"82b1-01",sentence:"<ruby>花<rt>はな</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きました。",target:"花",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"8c9d-01",sentence:"<ruby>貝<rt>かい</rt></ruby>を<ruby>拾<rt>ひろ</rt></ruby>いました。",target:"貝",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6c17-01",sentence:"<ruby>気<rt>き</rt></ruby>をつけてください。",target:"気",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e5d-01",sentence:"<ruby>九<rt>ここの</rt></ruby>つのりんごがあります。",target:"九",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4f11-01",sentence:"<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>です。",target:"休",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"7389-01",sentence:"<ruby>玉<rt>たま</rt></ruby>をころがしてください。",target:"玉",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"91d1-01",sentence:"<ruby>金<rt>きん</rt></ruby>の<ruby>指<rt>ゆび</rt></ruby>わがあります。",target:"金",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"7a7a-01",sentence:"<ruby>空<rt>そら</rt></ruby>に<ruby>星<rt>ほし</rt></ruby>が<ruby>光<rt>ひか</rt></ruby>っています。",target:"空",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6708-01",sentence:"<ruby>月<rt>つき</rt></ruby>がきれいです。",target:"月",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"72ac-01",sentence:"<ruby>犬<rt>いぬ</rt></ruby>が<ruby>歩<rt>ある</rt></ruby>いています。",target:"犬",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"898b-01",sentence:"<ruby>見<rt>み</rt></ruby>てください。",target:"見",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e94-01",sentence:"<ruby>五<rt>いつ</rt></ruby>つの<ruby>箱<rt>はこ</rt></ruby>があります。",target:"五",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"53e3-01",sentence:"<ruby>口<rt>くち</rt></ruby>を<ruby>閉<rt>と</rt></ruby>じてください。",target:"口",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6821-01",sentence:"<ruby>校<rt>こう</rt></ruby>ていを<ruby>走<rt>はし</rt></ruby>りましょう。",target:"校",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5de6-01",sentence:"<ruby>左<rt>ひだり</rt></ruby>を<ruby>見<rt>み</rt></ruby>てください。",target:"左",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e09-01",sentence:"<ruby>三<rt>みっ</rt></ruby>つのりんごを<ruby>買<rt>か</rt></ruby>いました。",target:"三",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5c71-01",sentence:"<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>りました。",target:"山",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5b50-01",sentence:"<ruby>子<rt>こ</rt></ruby>どもがあそんでいます。",target:"子",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"56db-01",sentence:"<ruby>四<rt>よっ</rt></ruby>つの<ruby>袋<rt>ふくろ</rt></ruby>があります。",target:"四",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"7cf8-01",sentence:"<ruby>糸<rt>いと</rt></ruby>を<ruby>切<rt>き</rt></ruby>りました。",target:"糸",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5b57-01",sentence:"<ruby>字<rt>じ</rt></ruby>を<ruby>練習<rt>れんしゅう</rt></ruby>します。",target:"字",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"8033-01",sentence:"<ruby>耳<rt>みみ</rt></ruby>を<ruby>ふさ<rt>ふさ</rt></ruby>ぎました。",target:"耳",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e03-01",sentence:"<ruby>七<rt>なな</rt></ruby>つの<ruby>木<rt>き</rt></ruby>があります。",target:"七",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"8eca-01",sentence:"<ruby>車<rt>くるま</rt></ruby>が<ruby>通<rt>とお</rt></ruby>ります。",target:"車",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"624b-01",sentence:"<ruby>手<rt>て</rt></ruby>を<ruby>挙<rt>あ</rt></ruby>げてください。",target:"手",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5341-01",sentence:"<ruby>十<rt>じゅう</rt></ruby>にんの<ruby>学生<rt>がくせい</rt></ruby>がいます。",target:"十",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"51fa-01",sentence:"<ruby>出<rt>で</rt></ruby>てきました。",target:"出",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5973-01",sentence:"<ruby>女<rt>おんな</rt></ruby>の<ruby>子<rt>こ</rt></ruby>がいます。",target:"女",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5c0f-01",sentence:"<ruby>小<rt>ちい</rt></ruby>さい<ruby>山<rt>やま</rt></ruby>があります。",target:"小",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e0a-01",sentence:"<ruby>上<rt>うえ</rt></ruby>を<ruby>見<rt>み</rt></ruby>てください。",target:"上",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"68ee-01",sentence:"<ruby>森<rt>もり</rt></ruby>には<ruby>木<rt>き</rt></ruby>がたくさんあります。",target:"森",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4eba-01",sentence:"<ruby>人<rt>ひと</rt></ruby>がたくさんいます。",target:"人",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6c34-01",sentence:"<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みました。",target:"水",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6b63-01",sentence:"<ruby>正<rt>ただ</rt></ruby>しい<ruby>答<rt>こた</rt></ruby>えをえらんでください。",target:"正",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"751f-01",sentence:"<ruby>生<rt>い</rt></ruby>きものが<ruby>動<rt>うご</rt></ruby>いています。",target:"生",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"9752-01",sentence:"<ruby>青<rt>あお</rt></ruby>い<ruby>空<rt>そら</rt></ruby>がみえます。",target:"青",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5915-01",sentence:"<ruby>夕<rt>ゆう</rt></ruby>がたに<ruby>帰<rt>かえ</rt></ruby>ります。",target:"夕",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"77f3-01",sentence:"<ruby>石<rt>いし</rt></ruby>をひろいました。",target:"石",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"8d64-01",sentence:"<ruby>赤<rt>あか</rt></ruby>い<ruby>花<rt>はな</rt></ruby>がさきました。",target:"赤",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5343-01",sentence:"<ruby>千円<rt>せんえん</rt></ruby>をだしてください。",target:"千",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5ddd-01",sentence:"<ruby>川<rt>かわ</rt></ruby>の<ruby>水<rt>みず</rt></ruby>がきれいです。",target:"川",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5148-01",sentence:"<ruby>先<rt>さき</rt></ruby>にいってください。",target:"先",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"65e9-01",sentence:"<ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きてください。",target:"早",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"8349-01",sentence:"<ruby>草<rt>くさ</rt></ruby>がはえています。",target:"草",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"8db3-01",sentence:"<ruby>足<rt>あし</rt></ruby>をのばしてください。",target:"足",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6751-01",sentence:"<ruby>村<rt>むら</rt></ruby>にすんでいます。",target:"村",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5927-01",sentence:"<ruby>大<rt>おお</rt></ruby>きな<ruby>家<rt>いえ</rt></ruby>があります。",target:"大",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"7537-01",sentence:"<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>がいます。",target:"男",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"7af9-01",sentence:"<ruby>竹<rt>たけ</rt></ruby>がはえています。",target:"竹",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e2d-01",sentence:"<ruby>中<rt>なか</rt></ruby>をみてください。",target:"中",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"866b-01",sentence:"<ruby>虫<rt>むし</rt></ruby>がとんでいます。",target:"虫",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"753a-01",sentence:"<ruby>町<rt>まち</rt></ruby>をあるきます。",target:"町",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5929-01",sentence:"<ruby>天気<rt>てんき</rt></ruby>がいいですね。",target:"天",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"7530-01",sentence:"<ruby>田<rt>た</rt></ruby>で<ruby>稲<rt>いね</rt></ruby>をそだてます。",target:"田",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"571f-01",sentence:"<ruby>土<rt>つち</rt></ruby>を掘りました。",target:"土",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"4e8c-01",sentence:"<ruby>二<rt>ふた</rt></ruby>つの<ruby>本<rt>ほん</rt></ruby>を読みます。",target:"二",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"65e5-01",sentence:"<ruby>日<rt>ひ</rt></ruby>が昇ります。",target:"日",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5165-01",sentence:"<ruby>入<rt>はい</rt></ruby>ってください。",target:"入",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"5e74-01",sentence:"<ruby>年<rt>とし</rt></ruby>をむかえました。",target:"年",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"767d-01",sentence:"<ruby>白<rt>しろ</rt></ruby>い<ruby>雲<rt>くも</rt></ruby>がうかんでいます。",target:"白",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"516b-01",sentence:"<ruby>八<rt>やっ</rt></ruby>つの<ruby>星<rt>ほし</rt></ruby>がみえます。",target:"八",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"767e-01",sentence:"<ruby>百円<rt>ひゃくえん</rt></ruby>をください。",target:"百",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6587-01",sentence:"<ruby>文<rt>ぶん</rt></ruby>をよみました。",target:"文",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6728-01",sentence:"<ruby>木<rt>き</rt></ruby>がはえています。",target:"木",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"672c-01",sentence:"<ruby>本<rt>ほん</rt></ruby>をひらいてください。",target:"本",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"540d-01",sentence:"<ruby>名<rt>な</rt></ruby>まえをかいてください。",target:"名",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"76ee-01",sentence:"<ruby>目<rt>め</rt></ruby>をとじてください。",target:"目",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"7acb-01",sentence:"<ruby>立<rt>た</rt></ruby>ってください。",target:"立",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"529b-01",sentence:"<ruby>力<rt>ちから</rt></ruby>を入れてください。",target:"力",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"6797-01",sentence:"<ruby>林<rt>はやし</rt></ruby>のなかをあるきます。",target:"林",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`},{id:"516d-01",sentence:"<ruby>六<rt>むっ</rt></ruby>つのはこがあります。",target:"六",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
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
`}];function ld({isOpen:e,message:t,onConfirm:n,onCancel:r}){return e?h.jsx("div",{className:"dialog-overlay",children:h.jsxs("div",{className:"dialog-content",children:[h.jsx("p",{children:t}),h.jsxs("div",{className:"dialog-buttons",children:[h.jsx("button",{type:"button",onClick:r,children:"いいえ"}),h.jsx("button",{type:"button",onClick:n,children:"はい"})]})]})}):null}function od({isOpen:e,onClose:t,onReset:n,onBackToStart:r,resetLabel:i="さいしょから"}){const[l,o]=I.useState(null),s=()=>{l==="reset"?n():l==="backToStart"&&r&&r(),o(null),t()};return e?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"menu-dialog-overlay",onClick:t,onKeyDown:a=>a.key==="Escape"&&t(),role:"presentation",children:h.jsxs("div",{className:"menu-dialog",onClick:a=>a.stopPropagation(),onKeyDown:a=>a.key==="Enter"&&a.stopPropagation(),children:[h.jsx("button",{type:"button",onClick:()=>o("reset"),children:i}),r&&h.jsx("button",{type:"button",onClick:()=>o("backToStart"),children:"スタートがめんへ"}),h.jsx("button",{type:"button",onClick:t,children:"とじる"})]})}),l&&h.jsx(ld,{isOpen:!0,message:l==="reset"?i==="さいしょから"?"さいしょからやりなおしますか？":"がくしゅうりれきをリセットしますか？":"スタートがめんにもどりますか？",onConfirm:s,onCancel:()=>o(null)})]}):null}function V0({onReset:e,onBackToStart:t,resetLabel:n}){const[r,i]=I.useState(!1);return h.jsxs("div",{className:"header",children:[h.jsx("div",{className:"header-content",children:"かんじれんしゅう アプリ"}),h.jsx("button",{type:"button",className:"menu-button",onClick:()=>i(!0),"aria-label":"メニュー",children:h.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",role:"img","aria-labelledby":"menuIcon",children:[h.jsx("title",{id:"menuIcon",children:"メニュー"}),h.jsx("path",{fill:"currentColor",d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})}),h.jsx(od,{isOpen:r,onClose:()=>i(!1),onReset:e,onBackToStart:t,resetLabel:n})]})}function sd({onStartPractice:e,memoryManager:t}){const[n,r]=I.useState(0),[i,l]=I.useState(null),[o,s]=I.useState("all"),a=En.length,d=t.getStatistics(En.map(E=>E.id)),v=t.getQuestionsByMode(o,En.map(E=>E.id)),f=[];for(let E=5;E<=Math.min(v.length,a);E+=5)f.push(E);v.length>0&&(f.length===0||f[f.length-1]!==v.length)&&f.push(v.length);const p=()=>{if(!i)return;const E=new Set(v),g=En.filter(k=>E.has(k.id)),c=[...g].sort(()=>Math.random()-.5).slice(0,Math.min(i,g.length));e(c)},m=I.useCallback(()=>{t.clearHistory(),l(null),s("all"),r(E=>E+1)},[t]),x=[{value:"all",label:"すべての もんだい"},{value:"new",label:"まだ といたことない もんだい"},{value:"unsolved",label:"まだ せいかい していない もんだい"},{value:"recent-mistakes",label:"この いっしゅうかんで まちがえた もんだい"}],w=E=>t.getQuestionsByMode(E,En.map(g=>g.id)).length;return h.jsxs("div",{className:"app",children:[h.jsx(V0,{onBackToStart:void 0,onReset:m,resetLabel:"がくしゅうりれきをリセット"}),h.jsx("div",{className:"start-screen-container",children:h.jsxs("div",{className:"start-screen-content",children:[h.jsxs("div",{className:"statistics",children:[h.jsxs("p",{children:["ぜんぶ：",d.total,"もん"]}),h.jsxs("p",{children:["まだといていない：",d.unattempted,"もん"]}),h.jsxs("p",{children:["せいかいした：",d.correct,"もん"]})]}),h.jsxs("div",{className:"mode-section",children:[h.jsx("p",{className:"mode-text",children:"モードをえらんでください："}),h.jsx("div",{className:"mode-buttons",children:x.map(E=>h.jsxs("button",{type:"button",onClick:()=>{s(E.value),l(null)},className:`mode-button ${o===E.value?"selected":""}`,children:[E.label,"（",w(E.value),"もん）"]},E.value))})]}),f.length>0?h.jsxs("div",{className:"question-count-section",children:[h.jsx("p",{className:"question-count-text",children:"もんだいすうをえらんでください："}),h.jsx("div",{className:"question-count-buttons",children:f.map(E=>h.jsxs("button",{type:"button",onClick:()=>l(E),className:`count-button ${i===E?"selected":""}`,children:[E,"もん",E===v.length?"（ぜんぶ）":""]},E))})]}):h.jsx("p",{className:"no-questions-message",children:"このモードで とける もんだいが ありません"}),h.jsx("div",{className:"start-button-container",children:h.jsx("button",{type:"button",onClick:p,className:"start-button",disabled:!i||f.length===0,children:"スタート"})})]})})]})}function ad({currentQuestionNumber:e,totalQuestions:t,question:n,isReviewMode:r}){return h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:"10px"},children:[e," もんめ / ",t," もん"]}),h.jsx("div",{className:"question",dangerouslySetInnerHTML:{__html:n}}),r&&h.jsx("div",{className:"review-mode",children:"ふくしゅうちゅう！"})]})}class ud{constructor(){Fe(this,"storageKey","question_history")}saveResult(t,n,r){const i=this.getHistory(),l=i.find(s=>s.id===t)||{id:t,correctDates:[],incorrectDates:[]};r?l.correctDates.push(n):l.incorrectDates.push(n);const o=i.filter(s=>s.id!==t).concat(l);localStorage.setItem(this.storageKey,JSON.stringify(o))}getHistory(){const t=localStorage.getItem(this.storageKey);return t?JSON.parse(t):[]}getQuestionHistory(t){return this.getHistory().find(n=>n.id===t)}clearHistory(){localStorage.removeItem(this.storageKey)}getUnattemptedIds(t){const n=this.getHistory(),r=new Set(n.map(i=>i.id));return t.filter(i=>!r.has(i))}getUnsolvedIds(t){const n=this.getHistory();return t.filter(r=>{const i=n.find(l=>l.id===r);return!i||i.correctDates.length===0})}getRecentMistakeIds(t){const n=this.getHistory(),r=new Date;return r.setDate(r.getDate()-7),t.filter(i=>{const l=n.find(s=>s.id===i);return l?l.incorrectDates.some(s=>new Date(s)>=r):!1})}getCorrectCount(){return this.getHistory().filter(n=>n.correctDates.length>0).length}getStatistics(t){const n=this.getUnattemptedIds(t).length,r=this.getCorrectCount(),i=this.getUnsolvedIds(t).length,l=this.getRecentMistakeIds(t).length;return{total:t.length,unattempted:n,correct:r,unsolved:i,recentMistakes:l}}getQuestionsByMode(t,n){switch(t){case"all":return[...n];case"new":return this.getUnattemptedIds(n);case"unsolved":return this.getUnsolvedIds(n);case"recent-mistakes":return this.getRecentMistakeIds(n);default:return[]}}}function cd(){const e=I.useRef(null),t=I.useRef(null),n=I.useRef(null),{userStrokes:r,clearStrokes:i}=Jc(e.current),[l,o]=I.useState(null),s=I.useRef(new ud),[a,d]=I.useState(""),[v,f]=I.useState(""),[p,m]=I.useState(!1),[x,w]=I.useState(!1),[E,g]=I.useState(!1),[u,c]=I.useState(""),[k,S]=I.useState(null),C=I.useCallback(()=>{if(l)if(l.isComplete()){const W=l.getScore(),M=l.getResults();S({score:W,results:M})}else{const W=l.getCurrentQuestion();if(!W)return;const M=W.sentence.replace(new RegExp(W.target,"g"),"＿＿");d(M),f(W.svg),m(!1),w(!1),g(!1),c(""),i()}},[l,i]);I.useEffect(()=>{const W=Jt.restoreFromStorage();W&&o(W)},[]),I.useEffect(()=>{l&&C()},[C,l]);const N=W=>{o(new Jt(W))},P=()=>{i(),c("")},$=()=>{var K,Mt;if(!l||!n.current||!e.current)return;const W=n.current.querySelector("svg");if(!W)return;const M=(K=e.current)==null?void 0:K.getContext("2d");if(!M)return;const z=(Mt=t.current)==null?void 0:Mt.getContext("2d");if(!z)return;const j=l.getCurrentQuestion();if(!j)return;const B=Wc(W);if(B.length!==r.length)c(`かくすうがちがうよ！（おてほん: ${B.length}、あなた: ${r.length}）`),g(!0),l.recordResult(!1),s.current.saveResult(j.id,new Date().toISOString(),!1);else{const Me=Zc(B,r),Ft=Me.strokeResults.map(ku=>ku.score),je=l.isCorrect(Ft),Ut=l.getScoreText(Ft),pu=je?"せいかい！よくかけました！":"ざんねん！おてほんをよくみよう！";M.clearRect(0,0,e.current.width,e.current.height),fu(M,Me,Jt.SCORE_THRESHOLD),qc(z,Me,Jt.SCORE_THRESHOLD),w(!0),c(`${pu}（${Ut}）`),l.recordResult(je,Me),s.current.saveResult(j.id,new Date().toISOString(),je)}m(!0)},R=()=>{C()},ke=()=>{l&&(l.startReviewMode(),C(),S(null))},Qe=()=>{l==null||l.unloadFromStorage(),o(null),S(null)},nt=()=>{l&&(l.reset(),C(),S(null))},ar=()=>{if(!l)return;const W=l.getCurrentQuestion();W&&(g(!0),c("むずかしいですね。おてほんを みてみましょう！"),l.recordResult(!1),s.current.saveResult(W.id,new Date().toISOString(),!1),m(!0))},Ci=r.length>0;if(!l)return h.jsx(sd,{onStartPractice:N,memoryManager:s.current});if(k)return h.jsxs("div",{className:"app",children:[h.jsx(V0,{onReset:nt,onBackToStart:Qe}),h.jsx(nd,{scoreAndResults:k,onRestartReview:ke,onBackToStart:Qe})]});const mn=p?l.getCurrentQuestionNumber()-1:l.getCurrentQuestionNumber();return h.jsxs("div",{className:"app",children:[h.jsx(V0,{onReset:nt,onBackToStart:Qe}),h.jsx(ad,{currentQuestionNumber:mn,totalQuestions:l.getTotalQuestions(),question:a,isReviewMode:l.isInReviewMode()}),h.jsx(rd,{canvasRef:e,answerCanvasRef:t,answerRef:n,showAnswer:x,showSVG:E,svgContent:v,result:u}),h.jsx(id,{showNext:p,hasStrokes:Ci,onEvaluate:$,onClear:P,onDontKnow:ar,onNextQuestion:R})]})}const vu=document.getElementById("root");if(!vu)throw new Error("Root element not found");qi.createRoot(vu).render(h.jsx(Ou.StrictMode,{children:h.jsx(cd,{})}));
