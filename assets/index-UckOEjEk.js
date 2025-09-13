(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function r_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tm={exports:{}},Ml={},nm={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),s_=Symbol.for("react.portal"),a_=Symbol.for("react.fragment"),o_=Symbol.for("react.strict_mode"),l_=Symbol.for("react.profiler"),u_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),f_=Symbol.for("react.forward_ref"),d_=Symbol.for("react.suspense"),h_=Symbol.for("react.memo"),p_=Symbol.for("react.lazy"),hd=Symbol.iterator;function m_(t){return t===null||typeof t!="object"?null:(t=hd&&t[hd]||t["@@iterator"],typeof t=="function"?t:null)}var im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rm=Object.assign,sm={};function Us(t,e,n){this.props=t,this.context=e,this.refs=sm,this.updater=n||im}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function am(){}am.prototype=Us.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=sm,this.updater=n||im}var af=sf.prototype=new am;af.constructor=sf;rm(af,Us.prototype);af.isPureReactComponent=!0;var pd=Array.isArray,om=Object.prototype.hasOwnProperty,of={current:null},lm={key:!0,ref:!0,__self:!0,__source:!0};function um(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)om.call(e,i)&&!lm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ia,type:t,key:s,ref:a,props:r,_owner:of.current}}function g_(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function v_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var md=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?v_(""+t.key):e.toString(36)}function Uo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ia:case s_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ql(a,0):i,pd(r)?(n="",t!=null&&(n=t.replace(md,"$&/")+"/"),Uo(r,e,n,"",function(u){return u})):r!=null&&(lf(r)&&(r=g_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(md,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",pd(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ql(s,o);a+=Uo(s,e,n,l,r)}else if(l=m_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ql(s,o++),a+=Uo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Va(t,e,n){if(t==null)return t;var i=[],r=0;return Uo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function __(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},No={transition:null},x_={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:No,ReactCurrentOwner:of};function cm(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Us;ze.Fragment=a_;ze.Profiler=l_;ze.PureComponent=sf;ze.StrictMode=o_;ze.Suspense=d_;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x_;ze.act=cm;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=rm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=of.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)om.call(e,l)&&!lm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:a}};ze.createContext=function(t){return t={$$typeof:c_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:u_,_context:t},t.Consumer=t};ze.createElement=um;ze.createFactory=function(t){var e=um.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:f_,render:t}};ze.isValidElement=lf;ze.lazy=function(t){return{$$typeof:p_,_payload:{_status:-1,_result:t},_init:__}};ze.memo=function(t,e){return{$$typeof:h_,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=No.transition;No.transition={};try{t()}finally{No.transition=e}};ze.unstable_act=cm;ze.useCallback=function(t,e){return Jt.current.useCallback(t,e)};ze.useContext=function(t){return Jt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Jt.current.useEffect(t,e)};ze.useId=function(){return Jt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Jt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};ze.useRef=function(t){return Jt.current.useRef(t)};ze.useState=function(t){return Jt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Jt.current.useTransition()};ze.version="18.3.1";nm.exports=ze;var st=nm.exports;const y_=r_(st);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_=st,M_=Symbol.for("react.element"),E_=Symbol.for("react.fragment"),T_=Object.prototype.hasOwnProperty,w_=S_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A_={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)T_.call(e,i)&&!A_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:M_,type:t,key:s,ref:a,props:r,_owner:w_.current}}Ml.Fragment=E_;Ml.jsx=fm;Ml.jsxs=fm;tm.exports=Ml;var fe=tm.exports,ec={},dm={exports:{}},vn={},hm={exports:{}},pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var B=D.length;D.push(j);e:for(;0<B;){var N=B-1>>>1,z=D[N];if(0<r(z,j))D[N]=j,D[B]=z,B=N;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],B=D.pop();if(B!==j){D[0]=B;e:for(var N=0,z=D.length,le=z>>>1;N<le;){var ue=2*(N+1)-1,me=D[ue],xe=ue+1,Te=D[xe];if(0>r(me,B))xe<z&&0>r(Te,me)?(D[N]=Te,D[xe]=B,N=xe):(D[N]=me,D[ue]=B,N=ue);else if(xe<z&&0>r(Te,B))D[N]=Te,D[xe]=B,N=xe;else break e}}return j}function r(D,j){var B=D.sortIndex-j.sortIndex;return B!==0?B:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,h=null,d=3,m=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=D)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function y(D){if(_=!1,g(D),!x)if(n(l)!==null)x=!0,J(T);else{var j=n(u);j!==null&&$(y,j.startTime-D)}}function T(D,j){x=!1,_&&(_=!1,c(P),P=-1),m=!0;var B=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||D&&!K());){var N=h.callback;if(typeof N=="function"){h.callback=null,d=h.priorityLevel;var z=N(h.expirationTime<=j);j=t.unstable_now(),typeof z=="function"?h.callback=z:h===n(l)&&i(l),g(j)}else i(l);h=n(l)}if(h!==null)var le=!0;else{var ue=n(u);ue!==null&&$(y,ue.startTime-j),le=!1}return le}finally{h=null,d=B,m=!1}}var R=!1,E=null,P=-1,S=5,w=-1;function K(){return!(t.unstable_now()-w<S)}function Q(){if(E!==null){var D=t.unstable_now();w=D;var j=!0;try{j=E(!0,D)}finally{j?F():(R=!1,E=null)}}else R=!1}var F;if(typeof v=="function")F=function(){v(Q)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,X=W.port2;W.port1.onmessage=Q,F=function(){X.postMessage(null)}}else F=function(){p(Q,0)};function J(D){E=D,R||(R=!0,F())}function $(D,j){P=p(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,J(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var B=d;d=j;try{return D()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=d;d=D;try{return j()}finally{d=B}},t.unstable_scheduleCallback=function(D,j,B){var N=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?N+B:N):B=N,D){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=B+z,D={id:f++,callback:j,priorityLevel:D,startTime:B,expirationTime:z,sortIndex:-1},B>N?(D.sortIndex=B,e(u,D),n(l)===null&&D===n(u)&&(_?(c(P),P=-1):_=!0,$(y,B-N))):(D.sortIndex=z,e(l,D),x||m||(x=!0,J(T))),D},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(D){var j=d;return function(){var B=d;d=j;try{return D.apply(this,arguments)}finally{d=B}}}})(pm);hm.exports=pm;var b_=hm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_=st,gn=b_;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mm=new Set,ga={};function br(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(ga[t]=e,t=0;t<e.length;t++)mm.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=Object.prototype.hasOwnProperty,C_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gd={},vd={};function P_(t){return tc.call(vd,t)?!0:tc.call(gd,t)?!1:C_.test(t)?vd[t]=!0:(gd[t]=!0,!1)}function L_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D_(t,e,n,i){if(e===null||typeof e>"u"||L_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,cf);Ft[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,cf);Ft[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,cf);Ft[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function ff(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(D_(e,n,r,i)&&(n=null),i||r===null?P_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),vm=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),_m=Symbol.for("react.offscreen"),_d=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=_d&&t[_d]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,$l;function ta(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Kl=!1;function Zl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function U_(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case nc:return"Profiler";case df:return"StrictMode";case ic:return"Suspense";case rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vm:return(t.displayName||"Context")+".Consumer";case gm:return(t._context.displayName||"Context")+".Provider";case hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:sc(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return sc(t(e))}catch{}}return null}function N_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I_(t){var e=xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=I_(t))}function ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ac(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sm(t,e){e=e.checked,e!=null&&ff(t,"checked",e,!1)}function oc(t,e){Sm(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&lc(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lc(t,e,n){(e!=="number"||qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(na(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function Mm(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Md(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Em(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Em(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,Tm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O_=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){O_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function Am(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=wm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var F_=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(t,e){if(e){if(F_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hc=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pc=null,ps=null,ms=null;function Ed(t){if(t=ka(t)){if(typeof pc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=bl(e),pc(t.stateNode,t.type,e))}}function bm(t){ps?ms?ms.push(t):ms=[t]:ps=t}function Rm(){if(ps){var t=ps,e=ms;if(ms=ps=null,Ed(t),e)for(t=0;t<e.length;t++)Ed(e[t])}}function Cm(t,e){return t(e)}function Pm(){}var Ql=!1;function Lm(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return Cm(t,e,n)}finally{Ql=!1,(ps!==null||ms!==null)&&(Pm(),Rm())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var mc=!1;if(_i)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){mc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{mc=!1}function k_(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var oa=!1,$o=null,Ko=!1,gc=null,z_={onError:function(t){oa=!0,$o=t}};function B_(t,e,n,i,r,s,a,o,l){oa=!1,$o=null,k_.apply(z_,arguments)}function H_(t,e,n,i,r,s,a,o,l){if(B_.apply(this,arguments),oa){if(oa){var u=$o;oa=!1,$o=null}else throw Error(te(198));Ko||(Ko=!0,gc=u)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Td(t){if(Rr(t)!==t)throw Error(te(188))}function G_(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Td(r),t;if(s===i)return Td(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Um(t){return t=G_(t),t!==null?Nm(t):null}function Nm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nm(t);if(e!==null)return e;t=t.sibling}return null}var Im=gn.unstable_scheduleCallback,wd=gn.unstable_cancelCallback,V_=gn.unstable_shouldYield,W_=gn.unstable_requestPaint,pt=gn.unstable_now,j_=gn.unstable_getCurrentPriorityLevel,gf=gn.unstable_ImmediatePriority,Om=gn.unstable_UserBlockingPriority,Zo=gn.unstable_NormalPriority,X_=gn.unstable_LowPriority,Fm=gn.unstable_IdlePriority,El=null,Kn=null;function Y_(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:K_,q_=Math.log,$_=Math.LN2;function K_(t){return t>>>=0,t===0?32:31-(q_(t)/$_|0)|0}var Ya=64,qa=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ia(o):(s&=a,s!==0&&(i=ia(s)))}else a=n&~r,a!==0?i=ia(a):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function Z_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Hn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Z_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function km(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function J_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function zm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bm,_f,Hm,Gm,Vm,_c=!1,$a=[],zi=null,Bi=null,Hi=null,xa=new Map,ya=new Map,Ni=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function t0(t,e,n,i,r){switch(e){case"focusin":return zi=Hs(zi,t,e,n,i,r),!0;case"dragenter":return Bi=Hs(Bi,t,e,n,i,r),!0;case"mouseover":return Hi=Hs(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,Hs(xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Hs(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function Wm(t){var e=dr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dm(n),e!==null){t.blockedOn=e,Vm(t.priority,function(){Hm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Io(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hc=i,n.target.dispatchEvent(i),hc=null}else return e=ka(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function bd(t,e,n){Io(t)&&n.delete(e)}function n0(){_c=!1,zi!==null&&Io(zi)&&(zi=null),Bi!==null&&Io(Bi)&&(Bi=null),Hi!==null&&Io(Hi)&&(Hi=null),xa.forEach(bd),ya.forEach(bd)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,_c||(_c=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,n0)))}function Sa(t){function e(r){return Gs(r,t)}if(0<$a.length){Gs($a[0],t);for(var n=1;n<$a.length;n++){var i=$a[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&Gs(zi,t),Bi!==null&&Gs(Bi,t),Hi!==null&&Gs(Hi,t),xa.forEach(e),ya.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Wm(n),n.blockedOn===null&&Ni.shift()}var gs=Ti.ReactCurrentBatchConfig,Jo=!0;function i0(t,e,n,i){var r=Ye,s=gs.transition;gs.transition=null;try{Ye=1,xf(t,e,n,i)}finally{Ye=r,gs.transition=s}}function r0(t,e,n,i){var r=Ye,s=gs.transition;gs.transition=null;try{Ye=4,xf(t,e,n,i)}finally{Ye=r,gs.transition=s}}function xf(t,e,n,i){if(Jo){var r=xc(t,e,n,i);if(r===null)uu(t,e,i,el,n),Ad(t,i);else if(t0(r,t,e,n,i))i.stopPropagation();else if(Ad(t,i),e&4&&-1<e0.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&Bm(s),s=xc(t,e,n,i),s===null&&uu(t,e,i,el,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uu(t,e,i,null,n)}}var el=null;function xc(t,e,n,i){if(el=null,t=mf(i),t=dr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function jm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j_()){case gf:return 1;case Om:return 4;case Zo:case X_:return 16;case Fm:return 536870912;default:return 16}default:return 16}}var Oi=null,yf=null,Oo=null;function Xm(){if(Oo)return Oo;var t,e=yf,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Oo=r.slice(t,1<i?1-i:void 0)}function Fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Rd(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Rd,this.isPropagationStopped=Rd,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=_n(Ns),Fa=ut({},Ns,{view:0,detail:0}),s0=_n(Fa),eu,tu,Vs,Tl=ut({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(eu=t.screenX-Vs.screenX,tu=t.screenY-Vs.screenY):tu=eu=0,Vs=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Cd=_n(Tl),a0=ut({},Tl,{dataTransfer:0}),o0=_n(a0),l0=ut({},Fa,{relatedTarget:0}),nu=_n(l0),u0=ut({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=_n(u0),f0=ut({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d0=_n(f0),h0=ut({},Ns,{data:0}),Pd=_n(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g0[t])?!!e[t]:!1}function Mf(){return v0}var _0=ut({},Fa,{key:function(t){if(t.key){var e=p0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x0=_n(_0),y0=ut({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=_n(y0),S0=ut({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),M0=_n(S0),E0=ut({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=_n(E0),w0=ut({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=_n(w0),b0=[9,13,27,32],Ef=_i&&"CompositionEvent"in window,la=null;_i&&"documentMode"in document&&(la=document.documentMode);var R0=_i&&"TextEvent"in window&&!la,Ym=_i&&(!Ef||la&&8<la&&11>=la),Dd=" ",Ud=!1;function qm(t,e){switch(t){case"keyup":return b0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function C0(t,e){switch(t){case"compositionend":return $m(e);case"keypress":return e.which!==32?null:(Ud=!0,Dd);case"textInput":return t=e.data,t===Dd&&Ud?null:t;default:return null}}function P0(t,e){if(ns)return t==="compositionend"||!Ef&&qm(t,e)?(t=Xm(),Oo=yf=Oi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ym&&e.locale!=="ko"?null:e.data;default:return null}}var L0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!L0[t.type]:e==="textarea"}function Km(t,e,n,i){bm(i),e=tl(e,"onChange"),0<e.length&&(n=new Sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Ma=null;function D0(t){og(t,0)}function wl(t){var e=ss(t);if(ym(e))return t}function U0(t,e){if(t==="change")return e}var Zm=!1;if(_i){var iu;if(_i){var ru="oninput"in document;if(!ru){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),ru=typeof Id.oninput=="function"}iu=ru}else iu=!1;Zm=iu&&(!document.documentMode||9<document.documentMode)}function Od(){ua&&(ua.detachEvent("onpropertychange",Qm),Ma=ua=null)}function Qm(t){if(t.propertyName==="value"&&wl(Ma)){var e=[];Km(e,Ma,t,mf(t)),Lm(D0,e)}}function N0(t,e,n){t==="focusin"?(Od(),ua=e,Ma=n,ua.attachEvent("onpropertychange",Qm)):t==="focusout"&&Od()}function I0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(Ma)}function O0(t,e){if(t==="click")return wl(e)}function F0(t,e){if(t==="input"||t==="change")return wl(e)}function k0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:k0;function Ea(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tc.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function Fd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,e){var n=Fd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fd(n)}}function Jm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function eg(){for(var t=window,e=qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qo(t.document)}return e}function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z0(t){var e=eg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jm(n.ownerDocument.documentElement,n)){if(i!==null&&Tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=kd(n,s);var a=kd(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var B0=_i&&"documentMode"in document&&11>=document.documentMode,is=null,yc=null,ca=null,Sc=!1;function zd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||is==null||is!==qo(i)||(i=is,"selectionStart"in i&&Tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Ea(ca,i)||(ca=i,i=tl(yc,"onSelect"),0<i.length&&(e=new Sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},su={},tg={};_i&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Al(t){if(su[t])return su[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tg)return su[t]=e[n];return t}var ng=Al("animationend"),ig=Al("animationiteration"),rg=Al("animationstart"),sg=Al("transitionend"),ag=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){ag.set(t,e),br(e,[t])}for(var au=0;au<Bd.length;au++){var ou=Bd[au],H0=ou.toLowerCase(),G0=ou[0].toUpperCase()+ou.slice(1);Qi(H0,"on"+G0)}Qi(ng,"onAnimationEnd");Qi(ig,"onAnimationIteration");Qi(rg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(sg,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Hd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,H_(i,e,void 0,t),t.currentTarget=null}function og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Hd(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Hd(r,o,u),s=l}}}if(Ko)throw t=gc,Ko=!1,gc=null,t}function et(t,e){var n=e[Ac];n===void 0&&(n=e[Ac]=new Set);var i=t+"__bubble";n.has(i)||(lg(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),lg(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[Qa]){t[Qa]=!0,mm.forEach(function(n){n!=="selectionchange"&&(V0.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,lu("selectionchange",!1,e))}}function lg(t,e,n,i){switch(jm(e)){case 1:var r=i0;break;case 4:r=r0;break;default:r=xf}n=r.bind(null,e,n,t),r=void 0,!mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=dr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Lm(function(){var u=s,f=mf(n),h=[];e:{var d=ag.get(t);if(d!==void 0){var m=Sf,x=t;switch(t){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":m=x0;break;case"focusin":x="focus",m=nu;break;case"focusout":x="blur",m=nu;break;case"beforeblur":case"afterblur":m=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=M0;break;case ng:case ig:case rg:m=c0;break;case sg:m=T0;break;case"scroll":m=s0;break;case"wheel":m=A0;break;case"copy":case"cut":case"paste":m=d0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ld}var _=(e&4)!==0,p=!_&&t==="scroll",c=_?d!==null?d+"Capture":null:d;_=[];for(var v=u,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,c!==null&&(y=_a(v,c),y!=null&&_.push(wa(v,y,g)))),p)break;v=v.return}0<_.length&&(d=new m(d,x,null,n,f),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==hc&&(x=n.relatedTarget||n.fromElement)&&(dr(x)||x[xi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?dr(x):null,x!==null&&(p=Rr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(_=Cd,y="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Ld,y="onPointerLeave",c="onPointerEnter",v="pointer"),p=m==null?d:ss(m),g=x==null?d:ss(x),d=new _(y,v+"leave",m,n,f),d.target=p,d.relatedTarget=g,y=null,dr(f)===u&&(_=new _(c,v+"enter",x,n,f),_.target=g,_.relatedTarget=p,y=_),p=y,m&&x)t:{for(_=m,c=x,v=0,g=_;g;g=Pr(g))v++;for(g=0,y=c;y;y=Pr(y))g++;for(;0<v-g;)_=Pr(_),v--;for(;0<g-v;)c=Pr(c),g--;for(;v--;){if(_===c||c!==null&&_===c.alternate)break t;_=Pr(_),c=Pr(c)}_=null}else _=null;m!==null&&Gd(h,d,m,_,!1),x!==null&&p!==null&&Gd(h,p,x,_,!0)}}e:{if(d=u?ss(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=U0;else if(Nd(d))if(Zm)T=F0;else{T=I0;var R=N0}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=O0);if(T&&(T=T(t,u))){Km(h,T,n,f);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&lc(d,"number",d.value)}switch(R=u?ss(u):window,t){case"focusin":(Nd(R)||R.contentEditable==="true")&&(is=R,yc=u,ca=null);break;case"focusout":ca=yc=is=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,zd(h,n,f);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":zd(h,n,f)}var E;if(Ef)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ns?qm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ym&&n.locale!=="ko"&&(ns||P!=="onCompositionStart"?P==="onCompositionEnd"&&ns&&(E=Xm()):(Oi=f,yf="value"in Oi?Oi.value:Oi.textContent,ns=!0)),R=tl(u,P),0<R.length&&(P=new Pd(P,t,null,n,f),h.push({event:P,listeners:R}),E?P.data=E:(E=$m(n),E!==null&&(P.data=E)))),(E=R0?C0(t,n):P0(t,n))&&(u=tl(u,"onBeforeInput"),0<u.length&&(f=new Pd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=E))}og(h,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(t,n),s!=null&&i.unshift(wa(t,s,r)),s=_a(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gd(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=_a(n,s),l!=null&&a.unshift(wa(n,l,o))):r||(l=_a(n,s),l!=null&&a.push(wa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var W0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Vd(t){return(typeof t=="string"?t:""+t).replace(W0,`
`).replace(j0,"")}function Ja(t,e,n){if(e=Vd(e),Vd(t)!==e&&n)throw Error(te(425))}function nl(){}var Mc=null,Ec=null;function Tc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(t){return Wd.resolve(null).then(t).catch(q0)}:wc;function q0(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Sa(e)}function Gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),$n="__reactFiber$"+Is,Aa="__reactProps$"+Is,xi="__reactContainer$"+Is,Ac="__reactEvents$"+Is,$0="__reactListeners$"+Is,K0="__reactHandles$"+Is;function dr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jd(t);t!==null;){if(n=t[$n])return n;t=jd(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[$n]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function bl(t){return t[Aa]||null}var bc=[],as=-1;function Ji(t){return{current:t}}function tt(t){0>as||(t.current=bc[as],bc[as]=null,as--)}function Ze(t,e){as++,bc[as]=t.current,t.current=e}var Zi={},jt=Ji(Zi),rn=Ji(!1),Sr=Zi;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function il(){tt(rn),tt(jt)}function Xd(t,e,n){if(jt.current!==Zi)throw Error(te(168));Ze(jt,e),Ze(rn,n)}function ug(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,N_(t)||"Unknown",r));return ut({},n,i)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Sr=jt.current,Ze(jt,t),Ze(rn,rn.current),!0}function Yd(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=ug(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,tt(rn),tt(jt),Ze(jt,t)):tt(rn),Ze(rn,n)}var ui=null,Rl=!1,fu=!1;function cg(t){ui===null?ui=[t]:ui.push(t)}function Z0(t){Rl=!0,cg(t)}function er(){if(!fu&&ui!==null){fu=!0;var t=0,e=Ye;try{var n=ui;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,Rl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),Im(gf,er),r}finally{Ye=e,fu=!1}}return null}var os=[],ls=0,sl=null,al=0,En=[],Tn=0,Mr=null,fi=1,di="";function lr(t,e){os[ls++]=al,os[ls++]=sl,sl=t,al=e}function fg(t,e,n){En[Tn++]=fi,En[Tn++]=di,En[Tn++]=Mr,Mr=t;var i=fi;t=di;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,fi=1<<32-Hn(e)+r|n<<r|i,di=s+t}else fi=1<<s|n<<r|i,di=t}function wf(t){t.return!==null&&(lr(t,1),fg(t,1,0))}function Af(t){for(;t===sl;)sl=os[--ls],os[ls]=null,al=os[--ls],os[ls]=null;for(;t===Mr;)Mr=En[--Tn],En[Tn]=null,di=En[--Tn],En[Tn]=null,fi=En[--Tn],En[Tn]=null}var mn=null,pn=null,it=!1,kn=null;function dg(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:fi,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(it){var e=pn;if(e){var n=e;if(!qd(t,e)){if(Rc(t))throw Error(te(418));e=Gi(n.nextSibling);var i=mn;e&&qd(t,e)?dg(i,n):(t.flags=t.flags&-4097|2,it=!1,mn=t)}}else{if(Rc(t))throw Error(te(418));t.flags=t.flags&-4097|2,it=!1,mn=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function eo(t){if(t!==mn)return!1;if(!it)return $d(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tc(t.type,t.memoizedProps)),e&&(e=pn)){if(Rc(t))throw hg(),Error(te(418));for(;e;)dg(t,e),e=Gi(e.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Gi(t.stateNode.nextSibling):null;return!0}function hg(){for(var t=pn;t;)t=Gi(t.nextSibling)}function Es(){pn=mn=null,it=!1}function bf(t){kn===null?kn=[t]:kn.push(t)}var Q0=Ti.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function to(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kd(t){var e=t._init;return e(t._payload)}function pg(t){function e(c,v){if(t){var g=c.deletions;g===null?(c.deletions=[v],c.flags|=16):g.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=Xi(c,v),c.index=0,c.sibling=null,c}function s(c,v,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<v?(c.flags|=2,v):g):(c.flags|=2,v)):(c.flags|=1048576,v)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,v,g,y){return v===null||v.tag!==6?(v=_u(g,c.mode,y),v.return=c,v):(v=r(v,g),v.return=c,v)}function l(c,v,g,y){var T=g.type;return T===ts?f(c,v,g.props.children,y,g.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Li&&Kd(T)===v.type)?(y=r(v,g.props),y.ref=Ws(c,v,g),y.return=c,y):(y=Wo(g.type,g.key,g.props,null,c.mode,y),y.ref=Ws(c,v,g),y.return=c,y)}function u(c,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=xu(g,c.mode,y),v.return=c,v):(v=r(v,g.children||[]),v.return=c,v)}function f(c,v,g,y,T){return v===null||v.tag!==7?(v=gr(g,c.mode,y,T),v.return=c,v):(v=r(v,g),v.return=c,v)}function h(c,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_u(""+v,c.mode,g),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return g=Wo(v.type,v.key,v.props,null,c.mode,g),g.ref=Ws(c,null,v),g.return=c,g;case es:return v=xu(v,c.mode,g),v.return=c,v;case Li:var y=v._init;return h(c,y(v._payload),g)}if(na(v)||zs(v))return v=gr(v,c.mode,g,null),v.return=c,v;to(c,v)}return null}function d(c,v,g,y){var T=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:o(c,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:return g.key===T?l(c,v,g,y):null;case es:return g.key===T?u(c,v,g,y):null;case Li:return T=g._init,d(c,v,T(g._payload),y)}if(na(g)||zs(g))return T!==null?null:f(c,v,g,y,null);to(c,g)}return null}function m(c,v,g,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(g)||null,o(v,c,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wa:return c=c.get(y.key===null?g:y.key)||null,l(v,c,y,T);case es:return c=c.get(y.key===null?g:y.key)||null,u(v,c,y,T);case Li:var R=y._init;return m(c,v,g,R(y._payload),T)}if(na(y)||zs(y))return c=c.get(g)||null,f(v,c,y,T,null);to(v,y)}return null}function x(c,v,g,y){for(var T=null,R=null,E=v,P=v=0,S=null;E!==null&&P<g.length;P++){E.index>P?(S=E,E=null):S=E.sibling;var w=d(c,E,g[P],y);if(w===null){E===null&&(E=S);break}t&&E&&w.alternate===null&&e(c,E),v=s(w,v,P),R===null?T=w:R.sibling=w,R=w,E=S}if(P===g.length)return n(c,E),it&&lr(c,P),T;if(E===null){for(;P<g.length;P++)E=h(c,g[P],y),E!==null&&(v=s(E,v,P),R===null?T=E:R.sibling=E,R=E);return it&&lr(c,P),T}for(E=i(c,E);P<g.length;P++)S=m(E,c,P,g[P],y),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?P:S.key),v=s(S,v,P),R===null?T=S:R.sibling=S,R=S);return t&&E.forEach(function(K){return e(c,K)}),it&&lr(c,P),T}function _(c,v,g,y){var T=zs(g);if(typeof T!="function")throw Error(te(150));if(g=T.call(g),g==null)throw Error(te(151));for(var R=T=null,E=v,P=v=0,S=null,w=g.next();E!==null&&!w.done;P++,w=g.next()){E.index>P?(S=E,E=null):S=E.sibling;var K=d(c,E,w.value,y);if(K===null){E===null&&(E=S);break}t&&E&&K.alternate===null&&e(c,E),v=s(K,v,P),R===null?T=K:R.sibling=K,R=K,E=S}if(w.done)return n(c,E),it&&lr(c,P),T;if(E===null){for(;!w.done;P++,w=g.next())w=h(c,w.value,y),w!==null&&(v=s(w,v,P),R===null?T=w:R.sibling=w,R=w);return it&&lr(c,P),T}for(E=i(c,E);!w.done;P++,w=g.next())w=m(E,c,P,w.value,y),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?P:w.key),v=s(w,v,P),R===null?T=w:R.sibling=w,R=w);return t&&E.forEach(function(Q){return e(c,Q)}),it&&lr(c,P),T}function p(c,v,g,y){if(typeof g=="object"&&g!==null&&g.type===ts&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:e:{for(var T=g.key,R=v;R!==null;){if(R.key===T){if(T=g.type,T===ts){if(R.tag===7){n(c,R.sibling),v=r(R,g.props.children),v.return=c,c=v;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Li&&Kd(T)===R.type){n(c,R.sibling),v=r(R,g.props),v.ref=Ws(c,R,g),v.return=c,c=v;break e}n(c,R);break}else e(c,R);R=R.sibling}g.type===ts?(v=gr(g.props.children,c.mode,y,g.key),v.return=c,c=v):(y=Wo(g.type,g.key,g.props,null,c.mode,y),y.ref=Ws(c,v,g),y.return=c,c=y)}return a(c);case es:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(c,v.sibling),v=r(v,g.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=xu(g,c.mode,y),v.return=c,c=v}return a(c);case Li:return R=g._init,p(c,v,R(g._payload),y)}if(na(g))return x(c,v,g,y);if(zs(g))return _(c,v,g,y);to(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,g),v.return=c,c=v):(n(c,v),v=_u(g,c.mode,y),v.return=c,c=v),a(c)):n(c,v)}return p}var Ts=pg(!0),mg=pg(!1),ol=Ji(null),ll=null,us=null,Rf=null;function Cf(){Rf=us=ll=null}function Pf(t){var e=ol.current;tt(ol),t._currentValue=e}function Pc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){ll=t,Rf=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(ll===null)throw Error(te(308));us=t,ll.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var hr=null;function Lf(t){hr===null?hr=[t]:hr.push(t)}function gg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lf(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Lf(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}function Zd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=u=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,_=o;switch(d=e,m=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=ut({},h,d);break e;case 2:Di=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=h}}function Qd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var za={},Zn=Ji(za),ba=Ji(za),Ra=Ji(za);function pr(t){if(t===za)throw Error(te(174));return t}function Uf(t,e){switch(Ze(Ra,e),Ze(ba,t),Ze(Zn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cc(e,t)}tt(Zn),Ze(Zn,e)}function ws(){tt(Zn),tt(ba),tt(Ra)}function _g(t){pr(Ra.current);var e=pr(Zn.current),n=cc(e,t.type);e!==n&&(Ze(ba,t),Ze(Zn,n))}function Nf(t){ba.current===t&&(tt(Zn),tt(ba))}var at=Ji(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function If(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var zo=Ti.ReactCurrentDispatcher,hu=Ti.ReactCurrentBatchConfig,Er=0,lt=null,Et=null,Ct=null,fl=!1,fa=!1,Ca=0,J0=0;function kt(){throw Error(te(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Ff(t,e,n,i,r,s){if(Er=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zo.current=t===null||t.memoizedState===null?ix:rx,t=n(i,r),fa){s=0;do{if(fa=!1,Ca=0,25<=s)throw Error(te(301));s+=1,Ct=Et=null,e.updateQueue=null,zo.current=sx,t=n(i,r)}while(fa)}if(zo.current=dl,e=Et!==null&&Et.next!==null,Er=0,Ct=Et=lt=null,fl=!1,e)throw Error(te(300));return t}function kf(){var t=Ca!==0;return Ca=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?lt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Ln(){if(Et===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Ct===null?lt.memoizedState:Ct.next;if(e!==null)Ct=e,Et=t;else{if(t===null)throw Error(te(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Ct===null?lt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Pa(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,lt.lanes|=f,Tr|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Wn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Wn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function xg(){}function yg(t,e){var n=lt,i=Ln(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,zf(Eg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,La(9,Mg.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(te(349));Er&30||Sg(n,e,r)}return r}function Sg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mg(t,e,n,i){e.value=n,e.getSnapshot=i,Tg(e)&&wg(t)}function Eg(t,e,n){return n(function(){Tg(e)&&wg(t)})}function Tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function wg(t){var e=yi(t,1);e!==null&&Gn(e,t,1,-1)}function Jd(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=nx.bind(null,lt,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ag(){return Ln().memoizedState}function Bo(t,e,n,i){var r=Yn();lt.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function Cl(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Et!==null){var a=Et.memoizedState;if(s=a.destroy,i!==null&&Of(i,a.deps)){r.memoizedState=La(e,n,s,i);return}}lt.flags|=t,r.memoizedState=La(1|e,n,s,i)}function eh(t,e){return Bo(8390656,8,t,e)}function zf(t,e){return Cl(2048,8,t,e)}function bg(t,e){return Cl(4,2,t,e)}function Rg(t,e){return Cl(4,4,t,e)}function Cg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pg(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,Cg.bind(null,e,t),n)}function Bf(){}function Lg(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Dg(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ug(t,e,n){return Er&21?(Wn(n,e)||(n=km(),lt.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function ex(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{Ye=n,hu.transition=i}}function Ng(){return Ln().memoizedState}function tx(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ig(t))Og(e,n);else if(n=gg(t,e,n,i),n!==null){var r=Qt();Gn(n,t,i,r),Fg(n,e,i)}}function nx(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ig(t))Og(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Wn(o,a)){var l=e.interleaved;l===null?(r.next=r,Lf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=gg(t,e,r,i),n!==null&&(r=Qt(),Gn(n,t,i,r),Fg(n,e,i))}}function Ig(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function Og(t,e){fa=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}var dl={readContext:Pn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},ix={readContext:Pn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:eh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4194308,4,Cg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bo(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tx.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:Jd,useDebugValue:Bf,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Jd(!1),e=t[0];return t=ex.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Yn();if(it){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Pt===null)throw Error(te(349));Er&30||Sg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,eh(Eg.bind(null,i,s,t),[t]),i.flags|=2048,La(9,Mg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Pt.identifierPrefix;if(it){var n=di,i=fi;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rx={readContext:Pn,useCallback:Lg,useContext:Pn,useEffect:zf,useImperativeHandle:Pg,useInsertionEffect:bg,useLayoutEffect:Rg,useMemo:Dg,useReducer:pu,useRef:Ag,useState:function(){return pu(Pa)},useDebugValue:Bf,useDeferredValue:function(t){var e=Ln();return Ug(e,Et.memoizedState,t)},useTransition:function(){var t=pu(Pa)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:xg,useSyncExternalStore:yg,useId:Ng,unstable_isNewReconciler:!1},sx={readContext:Pn,useCallback:Lg,useContext:Pn,useEffect:zf,useImperativeHandle:Pg,useInsertionEffect:bg,useLayoutEffect:Rg,useMemo:Dg,useReducer:mu,useRef:Ag,useState:function(){return mu(Pa)},useDebugValue:Bf,useDeferredValue:function(t){var e=Ln();return Et===null?e.memoizedState=t:Ug(e,Et.memoizedState,t)},useTransition:function(){var t=mu(Pa)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:xg,useSyncExternalStore:yg,useId:Ng,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ji(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Gn(e,t,r,i),ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ji(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Gn(e,t,r,i),ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=ji(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(Gn(e,t,i,n),ko(e,t,i))}};function th(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function kg(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=sn(e)?Sr:jt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function nh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pl.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=sn(e)?Sr:jt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pl.enqueueReplaceState(r,r.state,null),ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=U_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ax=typeof WeakMap=="function"?WeakMap:Map;function zg(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pl||(pl=!0,Vc=i),Uc(t,e)},n}function Bg(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uc(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ih(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ax;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yx.bind(null,t,e,n),e.then(t,t))}function rh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var ox=Ti.ReactCurrentOwner,nn=!1;function Kt(t,e,n,i){e.child=t===null?mg(e,null,n,i):Ts(e,t.child,n,i)}function ah(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=Ff(t,e,n,i,s,r),n=kf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(it&&n&&wf(e),e.flags|=1,Kt(t,e,i,r),e.child)}function oh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hg(t,e,s,i,r)):(t=Wo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(a,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Hg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Si(t,e,r)}return Nc(t,e,n,i,r)}function Gg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(fs,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ze(fs,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ze(fs,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ze(fs,dn),dn|=i;return Kt(t,e,r,n),e.child}function Vg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nc(t,e,n,i,r){var s=sn(n)?Sr:jt.current;return s=Ms(e,s),vs(e,r),n=Ff(t,e,n,i,s,r),i=kf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(it&&i&&wf(e),e.flags|=1,Kt(t,e,n,r),e.child)}function lh(t,e,n,i,r){if(sn(n)){var s=!0;rl(e)}else s=!1;if(vs(e,r),e.stateNode===null)Ho(t,e),kg(e,n,i),Dc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=sn(n)?Sr:jt.current,u=Ms(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&nh(e,a,i,u),Di=!1;var d=e.memoizedState;a.state=d,ul(e,i,a,r),l=e.memoizedState,o!==i||d!==l||rn.current||Di?(typeof f=="function"&&(Lc(e,n,f,i),l=e.memoizedState),(o=Di||th(e,n,o,i,d,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,vg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:On(e.type,o),a.props=u,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=sn(n)?Sr:jt.current,l=Ms(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&nh(e,a,i,l),Di=!1,d=e.memoizedState,a.state=d,ul(e,i,a,r);var x=e.memoizedState;o!==h||d!==x||rn.current||Di?(typeof m=="function"&&(Lc(e,n,m,i),x=e.memoizedState),(u=Di||th(e,n,u,i,d,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ic(t,e,n,i,s,r)}function Ic(t,e,n,i,r,s){Vg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Yd(e,n,!1),Si(t,e,s);i=e.stateNode,ox.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,o,s)):Kt(t,e,o,s),e.memoizedState=i.state,r&&Yd(e,n,!0),e.child}function Wg(t){var e=t.stateNode;e.pendingContext?Xd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xd(t,e.context,!1),Uf(t,e.containerInfo)}function uh(t,e,n,i,r){return Es(),bf(r),e.flags|=256,Kt(t,e,n,i),e.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function Fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function jg(t,e,n){var i=e.pendingProps,r=at.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ze(at,r&1),t===null)return Cc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ul(a,i,0,null),t=gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fc(n),e.memoizedState=Oc,t):Hf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return lx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Xi(o,s):(s=gr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Fc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Oc,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Hf(t,e){return e=Ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function no(t,e,n,i){return i!==null&&bf(i),Ts(e,t.child,null,n),t=Hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(te(422))),no(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ul({mode:"visible",children:i.children},r,0,null),s=gr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,a),e.child.memoizedState=Fc(a),e.memoizedState=Oc,s);if(!(e.mode&1))return no(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=gu(s,i,void 0),no(t,e,a,i)}if(o=(a&t.childLanes)!==0,nn||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Gn(i,t,r,-1))}return Yf(),i=gu(Error(te(421))),no(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Sx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Gi(r.nextSibling),mn=e,it=!0,kn=null,t!==null&&(En[Tn++]=fi,En[Tn++]=di,En[Tn++]=Mr,fi=t.id,di=t.overflow,Mr=e),e=Hf(e,i.children),e.flags|=4096,e)}function ch(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pc(t.return,e,n)}function vu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Xg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ch(t,n,e);else if(t.tag===19)ch(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ze(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vu(e,!0,n,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ux(t,e,n){switch(e.tag){case 3:Wg(e),Es();break;case 5:_g(e);break;case 1:sn(e.type)&&rl(e);break;case 4:Uf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ze(ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ze(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?jg(t,e,n):(Ze(at,at.current&1),t=Si(t,e,n),t!==null?t.sibling:null);Ze(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Xg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ze(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,Gg(t,e,n)}return Si(t,e,n)}var Yg,kc,qg,$g;Yg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kc=function(){};qg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Zn.current);var s=null;switch(n){case"input":r=ac(t,r),i=ac(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=uc(t,r),i=uc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nl)}fc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ga.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ga.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&et("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$g=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cx(t,e,n){var i=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&il(),zt(e),null;case 3:return i=e.stateNode,ws(),tt(rn),tt(jt),If(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Xc(kn),kn=null))),kc(t,e),zt(e),null;case 5:Nf(e);var r=pr(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)qg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return zt(e),null}if(t=pr(Zn.current),eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)et(ra[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":xd(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":Sd(i,s),et("invalid",i)}fc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",""+o]):ga.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&et("scroll",i)}switch(n){case"input":ja(i),yd(i,s,!0);break;case"textarea":ja(i),Md(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Em(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[Aa]=i,Yg(t,e,!1,!1),e.stateNode=t;e:{switch(a=dc(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)et(ra[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":xd(t,i),r=ac(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),et("invalid",t);break;case"textarea":Sd(t,i),r=uc(t,i),et("invalid",t);break;default:r=i}fc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Am(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&ff(t,s,l,a))}switch(n){case"input":ja(t),yd(t,i,!1);break;case"textarea":ja(t),Md(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)$g(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=pr(Ra.current),pr(Zn.current),eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return zt(e),null;case 13:if(tt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&pn!==null&&e.mode&1&&!(e.flags&128))hg(),Es(),e.flags|=98560,s=!1;else if(s=eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[$n]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else kn!==null&&(Xc(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?Tt===0&&(Tt=3):Yf())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return ws(),kc(t,e),t===null&&Ta(e.stateNode.containerInfo),zt(e),null;case 10:return Pf(e.type._context),zt(e),null;case 17:return sn(e.type)&&il(),zt(e),null;case 19:if(tt(at),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)js(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=cl(t),a!==null){for(e.flags|=128,js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ze(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>bs&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=cl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!it)return zt(e),null}else 2*pt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=at.current,Ze(at,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Xf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function fx(t,e){switch(Af(e),e.tag){case 1:return sn(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),tt(rn),tt(jt),If(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(tt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(at),null;case 4:return ws(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var io=!1,Gt=!1,dx=typeof WeakSet=="function"?WeakSet:Set,ge=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function zc(t,e,n){try{n()}catch(i){ft(t,e,i)}}var fh=!1;function hx(t,e){if(Mc=Jo,t=eg(),Tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++f===i&&(l=a),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ec={focusedElem:t,selectionRange:n},Jo=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?_:On(e.type,_),p);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){ft(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return x=fh,fh=!1,x}function da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zc(e,n,s)}r=r.next}while(r!==i)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kg(t){var e=t.alternate;e!==null&&(t.alternate=null,Kg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Aa],delete e[Ac],delete e[$0],delete e[K0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zg(t){return t.tag===5||t.tag===3||t.tag===4}function dh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(i!==4&&(t=t.child,t!==null))for(Hc(t,e,n),t=t.sibling;t!==null;)Hc(t,e,n),t=t.sibling}function Gc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gc(t,e,n),t=t.sibling;t!==null;)Gc(t,e,n),t=t.sibling}var Dt=null,Fn=!1;function Ai(t,e,n){for(n=n.child;n!==null;)Qg(t,e,n),n=n.sibling}function Qg(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:Gt||cs(n,e);case 6:var i=Dt,r=Fn;Dt=null,Ai(t,e,n),Dt=i,Fn=r,Dt!==null&&(Fn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Fn?(t=Dt,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),Sa(t)):cu(Dt,n.stateNode));break;case 4:i=Dt,r=Fn,Dt=n.stateNode.containerInfo,Fn=!0,Ai(t,e,n),Dt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zc(n,e,a),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!Gt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ft(n,e,o)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ai(t,e,n),Gt=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function hh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dx),e.forEach(function(i){var r=Mx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,Fn=!1;break e;case 3:Dt=o.stateNode.containerInfo,Fn=!0;break e;case 4:Dt=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(Dt===null)throw Error(te(160));Qg(s,a,r),Dt=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ft(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jg(e,t),e=e.sibling}function Jg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Xn(t),i&4){try{da(3,t,t.return),Ll(3,t)}catch(_){ft(t,t.return,_)}try{da(5,t,t.return)}catch(_){ft(t,t.return,_)}}break;case 1:Dn(e,t),Xn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Dn(e,t),Xn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(_){ft(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Sm(r,s),dc(o,a);var u=dc(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Am(r,h):f==="dangerouslySetInnerHTML"?Tm(r,h):f==="children"?va(r,h):ff(r,f,h,u)}switch(o){case"input":oc(r,s);break;case"textarea":Mm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?hs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(_){ft(t,t.return,_)}}break;case 6:if(Dn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){ft(t,t.return,_)}}break;case 3:if(Dn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(_){ft(t,t.return,_)}break;case 4:Dn(e,t),Xn(t);break;case 13:Dn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=pt())),i&4&&hh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||f,Dn(e,t),Gt=u):Dn(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(h=ge=f;ge!==null;){switch(d=ge,m=d.child,d.tag){case 0:case 11:case 14:case 15:da(4,d,d.return);break;case 1:cs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){ft(i,n,_)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){mh(h);continue}}m!==null?(m.return=d,ge=m):mh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=wm("display",a))}catch(_){ft(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ft(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Xn(t),i&4&&hh(t);break;case 21:break;default:Dn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zg(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var s=dh(t);Gc(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=dh(t);Hc(t,o,a);break;default:throw Error(te(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function px(t,e,n){ge=t,ev(t)}function ev(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||io;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Gt;o=io;var u=Gt;if(io=a,(Gt=l)&&!u)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?gh(r):l!==null?(l.return=a,ge=l):gh(r);for(;s!==null;)ge=s,ev(s),s=s.sibling;ge=r,io=o,Gt=u}ph(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):ph(t)}}function ph(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qd(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qd(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Sa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Gt||e.flags&512&&Bc(e)}catch(d){ft(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function mh(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function gh(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var s=e.return;try{Bc(e)}catch(l){ft(e,s,l)}break;case 5:var a=e.return;try{Bc(e)}catch(l){ft(e,a,l)}}}catch(l){ft(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var mx=Math.ceil,hl=Ti.ReactCurrentDispatcher,Gf=Ti.ReactCurrentOwner,Cn=Ti.ReactCurrentBatchConfig,We=0,Pt=null,xt=null,Ot=0,dn=0,fs=Ji(0),Tt=0,Da=null,Tr=0,Dl=0,Vf=0,ha=null,tn=null,Wf=0,bs=1/0,li=null,pl=!1,Vc=null,Wi=null,ro=!1,Fi=null,ml=0,pa=0,Wc=null,Go=-1,Vo=0;function Qt(){return We&6?pt():Go!==-1?Go:Go=pt()}function ji(t){return t.mode&1?We&2&&Ot!==0?Ot&-Ot:Q0.transition!==null?(Vo===0&&(Vo=km()),Vo):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:jm(t.type)),t):1}function Gn(t,e,n,i){if(50<pa)throw pa=0,Wc=null,Error(te(185));Oa(t,n,i),(!(We&2)||t!==Pt)&&(t===Pt&&(!(We&2)&&(Dl|=n),Tt===4&&Ii(t,Ot)),an(t,i),n===1&&We===0&&!(e.mode&1)&&(bs=pt()+500,Rl&&er()))}function an(t,e){var n=t.callbackNode;Q_(t,e);var i=Qo(t,t===Pt?Ot:0);if(i===0)n!==null&&wd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&wd(n),e===1)t.tag===0?Z0(vh.bind(null,t)):cg(vh.bind(null,t)),Y0(function(){!(We&6)&&er()}),n=null;else{switch(zm(i)){case 1:n=gf;break;case 4:n=Om;break;case 16:n=Zo;break;case 536870912:n=Fm;break;default:n=Zo}n=lv(n,tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tv(t,e){if(Go=-1,Vo=0,We&6)throw Error(te(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var i=Qo(t,t===Pt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=We;We|=2;var s=iv();(Pt!==t||Ot!==e)&&(li=null,bs=pt()+500,mr(t,e));do try{_x();break}catch(o){nv(t,o)}while(!0);Cf(),hl.current=s,We=r,xt!==null?e=0:(Pt=null,Ot=0,e=Tt)}if(e!==0){if(e===2&&(r=vc(t),r!==0&&(i=r,e=jc(t,r))),e===1)throw n=Da,mr(t,0),Ii(t,i),an(t,pt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!gx(r)&&(e=gl(t,i),e===2&&(s=vc(t),s!==0&&(i=s,e=jc(t,s))),e===1))throw n=Da,mr(t,0),Ii(t,i),an(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:ur(t,tn,li);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=Wf+500-pt(),10<e)){if(Qo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=wc(ur.bind(null,t,tn,li),e);break}ur(t,tn,li);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Hn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mx(i/1960))-i,10<i){t.timeoutHandle=wc(ur.bind(null,t,tn,li),i);break}ur(t,tn,li);break;case 5:ur(t,tn,li);break;default:throw Error(te(329))}}}return an(t,pt()),t.callbackNode===n?tv.bind(null,t):null}function jc(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=tn,tn=n,e!==null&&Xc(e)),t}function Xc(t){tn===null?tn=t:tn.push.apply(tn,t)}function gx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~Vf,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function vh(t){if(We&6)throw Error(te(327));_s();var e=Qo(t,0);if(!(e&1))return an(t,pt()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=vc(t);i!==0&&(e=i,n=jc(t,i))}if(n===1)throw n=Da,mr(t,0),Ii(t,e),an(t,pt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,tn,li),an(t,pt()),null}function jf(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(bs=pt()+500,Rl&&er())}}function wr(t){Fi!==null&&Fi.tag===0&&!(We&6)&&_s();var e=We;We|=1;var n=Cn.transition,i=Ye;try{if(Cn.transition=null,Ye=1,t)return t()}finally{Ye=i,Cn.transition=n,We=e,!(We&6)&&er()}}function Xf(){dn=fs.current,tt(fs)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,X0(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(Af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:ws(),tt(rn),tt(jt),If();break;case 5:Nf(i);break;case 4:ws();break;case 13:tt(at);break;case 19:tt(at);break;case 10:Pf(i.type._context);break;case 22:case 23:Xf()}n=n.return}if(Pt=t,xt=t=Xi(t.current,null),Ot=dn=e,Tt=0,Da=null,Vf=Dl=Tr=0,tn=ha=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}hr=null}return t}function nv(t,e){do{var n=xt;try{if(Cf(),zo.current=dl,fl){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fl=!1}if(Er=0,Ct=Et=lt=null,fa=!1,Ca=0,Gf.current=null,n===null||n.return===null){Tt=1,Da=e,xt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ot,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=rh(a);if(m!==null){m.flags&=-257,sh(m,a,o,s,e),m.mode&1&&ih(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){ih(s,u,e),Yf();break e}l=Error(te(426))}}else if(it&&o.mode&1){var p=rh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),sh(p,a,o,s,e),bf(As(l,o));break e}}s=l=As(l,o),Tt!==4&&(Tt=2),ha===null?ha=[s]:ha.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=zg(s,l,e);Zd(s,c);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Wi===null||!Wi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Bg(s,o,e);Zd(s,y);break e}}s=s.return}while(s!==null)}sv(n)}catch(T){e=T,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function iv(){var t=hl.current;return hl.current=dl,t===null?dl:t}function Yf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(Tr&268435455)&&!(Dl&268435455)||Ii(Pt,Ot)}function gl(t,e){var n=We;We|=2;var i=iv();(Pt!==t||Ot!==e)&&(li=null,mr(t,e));do try{vx();break}catch(r){nv(t,r)}while(!0);if(Cf(),We=n,hl.current=i,xt!==null)throw Error(te(261));return Pt=null,Ot=0,Tt}function vx(){for(;xt!==null;)rv(xt)}function _x(){for(;xt!==null&&!V_();)rv(xt)}function rv(t){var e=ov(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?sv(t):xt=e,Gf.current=null}function sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fx(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,xt=null;return}}else if(n=cx(n,e,dn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Tt===0&&(Tt=5)}function ur(t,e,n){var i=Ye,r=Cn.transition;try{Cn.transition=null,Ye=1,xx(t,e,n,i)}finally{Cn.transition=r,Ye=i}return null}function xx(t,e,n,i){do _s();while(Fi!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(J_(t,s),t===Pt&&(xt=Pt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,lv(Zo,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=Ye;Ye=1;var o=We;We|=4,Gf.current=null,hx(t,n),Jg(n,t),z0(Ec),Jo=!!Mc,Ec=Mc=null,t.current=n,px(n),W_(),We=o,Ye=a,Cn.transition=s}else t.current=n;if(ro&&(ro=!1,Fi=t,ml=r),s=t.pendingLanes,s===0&&(Wi=null),Y_(n.stateNode),an(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pl)throw pl=!1,t=Vc,Vc=null,t;return ml&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===Wc?pa++:(pa=0,Wc=t):pa=0,er(),null}function _s(){if(Fi!==null){var t=zm(ml),e=Cn.transition,n=Ye;try{if(Cn.transition=null,Ye=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,ml=0,We&6)throw Error(te(331));var r=We;for(We|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ge=u;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:da(8,f,s)}var h=f.child;if(h!==null)h.return=f,ge=h;else for(;ge!==null;){f=ge;var d=f.sibling,m=f.return;if(Kg(f),f===u){ge=null;break}if(d!==null){d.return=m,ge=d;break}ge=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ge=c;break e}ge=s.return}}var v=t.current;for(ge=v;ge!==null;){a=ge;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,ge=g;else e:for(a=v;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ll(9,o)}}catch(T){ft(o,o.return,T)}if(o===a){ge=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ge=y;break e}ge=o.return}}if(We=r,er(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(El,t)}catch{}i=!0}return i}finally{Ye=n,Cn.transition=e}}return!1}function _h(t,e,n){e=As(n,e),e=zg(t,e,1),t=Vi(t,e,1),e=Qt(),t!==null&&(Oa(t,1,e),an(t,e))}function ft(t,e,n){if(t.tag===3)_h(t,t,n);else for(;e!==null;){if(e.tag===3){_h(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=As(n,t),t=Bg(e,t,1),e=Vi(e,t,1),t=Qt(),e!==null&&(Oa(e,1,t),an(e,t));break}}e=e.return}}function yx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Ot&n)===n&&(Tt===4||Tt===3&&(Ot&130023424)===Ot&&500>pt()-Wf?mr(t,0):Vf|=n),an(t,e)}function av(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=Qt();t=yi(t,e),t!==null&&(Oa(t,e,n),an(t,n))}function Sx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),av(t,n)}function Mx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),av(t,n)}var ov;ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,ux(t,e,n);nn=!!(t.flags&131072)}else nn=!1,it&&e.flags&1048576&&fg(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ho(t,e),t=e.pendingProps;var r=Ms(e,jt.current);vs(e,n),r=Ff(null,e,i,t,r,n);var s=kf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=Pl,e.stateNode=r,r._reactInternals=e,Dc(e,i,t,n),e=Ic(null,e,i,!0,s,n)):(e.tag=0,it&&s&&wf(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Tx(i),t=On(i,t),r){case 0:e=Nc(null,e,i,t,n);break e;case 1:e=lh(null,e,i,t,n);break e;case 11:e=ah(null,e,i,t,n);break e;case 14:e=oh(null,e,i,On(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Nc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),lh(t,e,i,r,n);case 3:e:{if(Wg(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,vg(t,e),ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(te(423)),e),e=uh(t,e,i,n,r);break e}else if(i!==r){r=As(Error(te(424)),e),e=uh(t,e,i,n,r);break e}else for(pn=Gi(e.stateNode.containerInfo.firstChild),mn=e,it=!0,kn=null,n=mg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=Si(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return _g(e),t===null&&Cc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Tc(i,r)?a=null:s!==null&&Tc(i,s)&&(e.flags|=32),Vg(t,e),Kt(t,e,a,n),e.child;case 6:return t===null&&Cc(e),null;case 13:return jg(t,e,n);case 4:return Uf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),ah(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Ze(ol,i._currentValue),i._currentValue=a,s!==null)if(Wn(s.value,a)){if(s.children===r.children&&!rn.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Pc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=Pn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),oh(t,e,i,r,n);case 15:return Hg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Ho(t,e),e.tag=1,sn(i)?(t=!0,rl(e)):t=!1,vs(e,n),kg(e,i,r),Dc(e,i,r,n),Ic(null,e,i,!0,t,n);case 19:return Xg(t,e,n);case 22:return Gg(t,e,n)}throw Error(te(156,e.tag))};function lv(t,e){return Im(t,e)}function Ex(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Ex(t,e,n,i)}function qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tx(t){if(typeof t=="function")return qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hf)return 11;if(t===pf)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")qf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ts:return gr(n.children,r,s,e);case df:a=8,r|=8;break;case nc:return t=Rn(12,n,e,r|2),t.elementType=nc,t.lanes=s,t;case ic:return t=Rn(13,n,e,r),t.elementType=ic,t.lanes=s,t;case rc:return t=Rn(19,n,e,r),t.elementType=rc,t.lanes=s,t;case _m:return Ul(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gm:a=10;break e;case vm:a=9;break e;case hf:a=11;break e;case pf:a=14;break e;case Li:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Rn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Ul(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=_m,t.lanes=n,t.stateNode={isHidden:!1},t}function _u(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function xu(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,i,r,s,a,o,l){return t=new wx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),t}function Ax(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function uv(t){if(!t)return Zi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(sn(n))return ug(t,n,e)}return e}function cv(t,e,n,i,r,s,a,o,l){return t=$f(n,i,!0,t,r,s,a,o,l),t.context=uv(null),n=t.current,i=Qt(),r=ji(n),s=mi(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,Oa(t,r,i),an(t,i),t}function Nl(t,e,n,i){var r=e.current,s=Qt(),a=ji(r);return n=uv(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,a),t!==null&&(Gn(t,r,a,s),ko(t,r,a)),a}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kf(t,e){xh(t,e),(t=t.alternate)&&xh(t,e)}function bx(){return null}var fv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zf(t){this._internalRoot=t}Il.prototype.render=Zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Nl(t,e,null,null)};Il.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Nl(null,t,null,null)}),e[xi]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Wm(t)}};function Qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yh(){}function Rx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=vl(a);s.call(u)}}var a=cv(e,i,t,0,null,!1,!1,"",yh);return t._reactRootContainer=a,t[xi]=a.current,Ta(t.nodeType===8?t.parentNode:t),wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=vl(l);o.call(u)}}var l=$f(t,0,!1,null,null,!1,!1,"",yh);return t._reactRootContainer=l,t[xi]=l.current,Ta(t.nodeType===8?t.parentNode:t),wr(function(){Nl(e,l,n,i)}),l}function Fl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=vl(a);o.call(l)}}Nl(e,a,t,r)}else a=Rx(n,e,t,r,i);return vl(a)}Bm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(vf(e,n|1),an(e,pt()),!(We&6)&&(bs=pt()+500,er()))}break;case 13:wr(function(){var i=yi(t,1);if(i!==null){var r=Qt();Gn(i,t,1,r)}}),Kf(t,1)}};_f=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=Qt();Gn(e,t,134217728,n)}Kf(t,134217728)}};Hm=function(t){if(t.tag===13){var e=ji(t),n=yi(t,e);if(n!==null){var i=Qt();Gn(n,t,e,i)}Kf(t,e)}};Gm=function(){return Ye};Vm=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};pc=function(t,e,n){switch(e){case"input":if(oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=bl(i);if(!r)throw Error(te(90));ym(i),oc(i,r)}}}break;case"textarea":Mm(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};Cm=jf;Pm=wr;var Cx={usingClientEntryPoint:!1,Events:[ka,ss,bl,bm,Rm,jf]},Xs={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Um(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{El=so.inject(Px),Kn=so}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(te(200));return Ax(t,e,null,n)};vn.createRoot=function(t,e){if(!Qf(t))throw Error(te(299));var n=!1,i="",r=fv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Ta(t.nodeType===8?t.parentNode:t),new Zf(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Um(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return wr(t)};vn.hydrate=function(t,e,n){if(!Ol(e))throw Error(te(200));return Fl(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Qf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=fv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=cv(e,null,t,1,n??null,r,!1,s,a),t[xi]=e.current,Ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Il(e)};vn.render=function(t,e,n){if(!Ol(e))throw Error(te(200));return Fl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(te(40));return t._reactRootContainer?(wr(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};vn.unstable_batchedUpdates=jf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ol(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Fl(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(t){console.error(t)}}dv(),dm.exports=vn;var Lx=dm.exports,Sh=Lx;ec.createRoot=Sh.createRoot,ec.hydrateRoot=Sh.hydrateRoot;function Dx(t){const e=({name:n,active:i,onClick:r})=>fe.jsx("button",{className:`btn-ghost ${i?"ring-2 ring-neon-400":""}`,onClick:r,title:n,children:n});return fe.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[fe.jsx(e,{name:"Brush",active:t.tool==="brush",onClick:()=>t.setTool("brush")}),fe.jsx(e,{name:"Eraser",active:t.tool==="eraser",onClick:()=>t.setTool("eraser")}),fe.jsx(e,{name:"Fill",active:t.tool==="fill",onClick:()=>t.setTool("fill")}),fe.jsx(e,{name:"Picker",active:t.tool==="picker",onClick:()=>t.setTool("picker")}),fe.jsxs("div",{className:"flex items-center gap-2 ml-2",children:[fe.jsx("label",{className:"label",children:"Farbe"}),fe.jsx("input",{className:"input",type:"color",value:t.color,onChange:n=>t.setColor(n.target.value)})]}),fe.jsxs("div",{className:"flex items-center gap-2 ml-2",children:[fe.jsx("label",{className:"label",children:"Größe"}),fe.jsx("input",{className:"range",type:"range",min:1,max:16,value:t.size,onChange:n=>t.setSize(parseInt(n.target.value))}),fe.jsx("span",{className:"text-neon-100 w-8 text-center",children:t.size})]}),fe.jsx("button",{className:"btn ml-2",onClick:t.onUndo,disabled:!t.canUndo,children:"Undo"}),fe.jsx("button",{className:"btn",onClick:t.onRedo,disabled:!t.canRedo,children:"Redo"})]})}function Ux({opt:t,setOpt:e,onApply:n,onRandom:i}){return fe.jsxs("div",{className:"neon-card p-4",children:[fe.jsx("div",{className:"text-lg font-semibold mb-2",children:"Gradient"}),fe.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[fe.jsxs("div",{children:[fe.jsx("label",{className:"label",children:"Start"}),fe.jsx("input",{className:"input w-full",type:"color",value:t.start,onChange:r=>e({...t,start:r.target.value})})]}),fe.jsxs("div",{children:[fe.jsx("label",{className:"label",children:"Ende"}),fe.jsx("input",{className:"input w-full",type:"color",value:t.end,onChange:r=>e({...t,end:r.target.value})})]}),fe.jsxs("div",{className:"col-span-2",children:[fe.jsxs("label",{className:"label",children:["Winkel (",t.angleDeg,"°)"]}),fe.jsx("input",{className:"range w-full",type:"range",min:"0",max:"359",value:t.angleDeg,onChange:r=>e({...t,angleDeg:parseInt(r.target.value)})})]}),fe.jsxs("div",{className:"col-span-2 flex items-center gap-2",children:[fe.jsx("input",{id:"dither",type:"checkbox",checked:t.dither,onChange:r=>e({...t,dither:r.target.checked})}),fe.jsx("label",{htmlFor:"dither",className:"label",children:"Dithering"})]})]}),fe.jsxs("div",{className:"flex gap-2 mt-3",children:[fe.jsx("button",{className:"btn",onClick:n,children:"Auf Canvas anwenden"}),fe.jsx("button",{className:"btn-ghost",onClick:i,children:"Zufällig"})]})]})}function Nx(t,e,n,i){const{width:r,height:s,data:a}=t,o=(x,_)=>(_*r+x)*4;if(e<0||e>=r||n<0||n>=s)return;const l=o(e,n),u=[a[l],a[l+1],a[l+2],a[l+3]];if(m(u,i))return;const f=[[e,n]];for(;f.length;){const[x,_]=f.pop();let p=x;for(;p>=0&&h(p,_,u);)p--;p++;let c=!1,v=!1;for(;p<r&&h(p,_,u);)d(p,_,i),!c&&_>0&&h(p,_-1,u)?(f.push([p,_-1]),c=!0):c&&_>0&&!h(p,_-1,u)&&(c=!1),!v&&_<s-1&&h(p,_+1,u)?(f.push([p,_+1]),v=!0):v&&_<s-1&&!h(p,_+1,u)&&(v=!1),p++}function h(x,_,p){const c=o(x,_);return a[c]===p[0]&&a[c+1]===p[1]&&a[c+2]===p[2]&&a[c+3]===p[3]}function d(x,_,p){const c=o(x,_);a[c]=p[0],a[c+1]=p[1],a[c+2]=p[2],a[c+3]=p[3]}function m(x,_){return x[0]===_[0]&&x[1]===_[1]&&x[2]===_[2]&&x[3]===_[3]}}function Ix({tool:t,color:e,size:n,onSnapshot:i,getImageData:r,setImageData:s}){const a=st.useRef(null);st.useEffect(()=>{const l=a.current;l.width=64,l.height=64},[]);function o(l){if(l.buttons!==1)return;const u=a.current,f=u.getBoundingClientRect(),h=Math.floor((l.clientX-f.left)/f.width*u.width),d=Math.floor((l.clientY-f.top)/f.height*u.height),m=r();if(t==="brush")Eh(m,h,d,n,Mh(e));else if(t==="eraser")Eh(m,h,d,n,[0,0,0,0]);else if(t==="fill")Nx(m,h,d,Mh(e));else if(t==="picker"){const x=(d*m.width+h)*4,_=m.data[x],p=m.data[x+1],c=m.data[x+2];if(m.data[x+3]>0){const g=Ox(_,p,c);window.dispatchEvent(new CustomEvent("skin-picker",{detail:g}))}}s(m)}return fe.jsxs("div",{className:"neon-card p-2",children:[fe.jsx("canvas",{ref:a,className:"w-full h-auto border border-cyber-edge rounded-xl2 grid-bg",style:{imageRendering:"pixelated",cursor:t==="picker"?"crosshair":"default"},onMouseDown:l=>{i(),o(l)},onMouseMove:o}),fe.jsx("p",{className:"text-neon-100 text-xs mt-2",children:"Editor-Canvas (64×64 Pixel, zoombar im Browser vergrößern)"})]})}function Mh(t){const e=t.replace("#",""),n=e.length===3?e.split("").map(r=>r+r).join(""):e,i=parseInt(n,16);return[i>>16&255,i>>8&255,i&255,255]}function Ox(t,e,n){return"#"+[t,e,n].map(i=>i.toString(16).padStart(2,"0")).join("")}function Eh(t,e,n,i,r){for(let s=-i;s<=i;s++)for(let a=-i;a<=i;a++)if(a*a+s*s<=i*i){const o=e+a,l=n+s;if(o>=0&&o<t.width&&l>=0&&l<t.height){const u=(l*t.width+o)*4;t.data[u]=r[0],t.data[u+1]=r[1],t.data[u+2]=r[2],t.data[u+3]=r[3]}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="156",Lr={ROTATE:0,DOLLY:1,PAN:2},Dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fx=0,Th=1,kx=2,hv=1,zx=2,oi=3,Qn=0,on=1,bn=2,gi=0,xs=1,wh=2,Ah=3,bh=4,Bx=5,Jr=100,Hx=101,Gx=102,Rh=103,Ch=104,Vx=200,Wx=201,jx=202,Xx=203,pv=204,mv=205,Yx=206,qx=207,$x=208,Kx=209,Zx=210,Qx=0,Jx=1,ey=2,Yc=3,ty=4,ny=5,iy=6,ry=7,gv=0,sy=1,ay=2,Yi=0,oy=1,ly=2,uy=3,cy=4,fy=5,vv=300,Rs=301,Cs=302,_l=303,qc=304,kl=306,$c=1e3,zn=1001,Kc=1002,ot=1003,Ph=1004,yu=1005,wn=1006,dy=1007,Ua=1008,qi=1009,hy=1010,py=1011,ed=1012,_v=1013,ki=1014,hi=1015,Ps=1016,xv=1017,yv=1018,vr=1020,my=1021,Bn=1023,gy=1024,vy=1025,_r=1026,Ls=1027,_y=1028,Sv=1029,xy=1030,Mv=1031,Ev=1033,Su=33776,Mu=33777,Eu=33778,Tu=33779,Lh=35840,Dh=35841,Uh=35842,Nh=35843,yy=36196,Ih=37492,Oh=37496,Fh=37808,kh=37809,zh=37810,Bh=37811,Hh=37812,Gh=37813,Vh=37814,Wh=37815,jh=37816,Xh=37817,Yh=37818,qh=37819,$h=37820,Kh=37821,wu=36492,Zh=36494,Qh=36495,Sy=36283,Jh=36284,ep=36285,tp=36286,Tv=3e3,xr=3001,My=3200,Ey=3201,wv=0,Ty=1,yr="",nt="srgb",Jn="srgb-linear",zl="display-p3",Au=7680,wy=519,Ay=512,by=513,Ry=514,Cy=515,Py=516,Ly=517,Dy=518,Uy=519,Zc=35044,np="300 es",Qc=1035,pi=2e3,xl=2001;class Cr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,Jc=180/Math.PI;function $i(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function Ny(t,e){return(t%e+e)%e}function bu(t,e,n){return(1-n)*t+n*e}function ip(t){return(t&t-1)===0&&t!==0}function ef(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ci(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Iy={DEG2RAD:jo};class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,a,o,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],_=r[0],p=r[3],c=r[6],v=r[1],g=r[4],y=r[7],T=r[2],R=r[5],E=r[8];return s[0]=a*_+o*v+l*T,s[3]=a*p+o*g+l*R,s[6]=a*c+o*y+l*E,s[1]=u*_+f*v+h*T,s[4]=u*p+f*g+h*R,s[7]=u*c+f*y+h*E,s[2]=d*_+m*v+x*T,s[5]=d*p+m*g+x*R,s[8]=d*c+m*y+x*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=f*a-o*u,d=o*l-f*s,m=u*s-a*l,x=n*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*u-f*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*l-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new Oe;function Av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Oy(){const t=yl("canvas");return t.style.display="block",t}const rp={};function ma(t){t in rp||(rp[t]=!0,console.warn(t))}function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Fy=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ky=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function zy(t){return t.convertSRGBToLinear().applyMatrix3(ky)}function By(t){return t.applyMatrix3(Fy).convertLinearToSRGB()}const Hy={[Jn]:t=>t,[nt]:t=>t.convertSRGBToLinear(),[zl]:zy},Gy={[Jn]:t=>t,[nt]:t=>t.convertLinearToSRGB(),[zl]:By},Mn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Jn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Hy[e],r=Gy[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ur;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=yl("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vy=0;class Rv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pu(r[a].image)):s.push(Pu(r[a]))}else s=Pu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wy=0;class Vt extends Cr{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,i=zn,r=zn,s=wn,a=Ua,o=Bn,l=qi,u=Vt.DEFAULT_ANISOTROPY,f=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=$i(),this.name="",this.source=new Rv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===xr?nt:yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $c:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $c:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?xr:Tv}set encoding(e){ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?nt:yr}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=vv;Vt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,n=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],_=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(m+1)/2,T=(c+1)/2,R=(f+d)/4,E=(h+_)/4,P=(x+p)/4;return g>y&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=E/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=E/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(h-_)/v,this.z=(d-f)/v,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jy extends Cr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rt(0,0,e,n),this.scissorTest=!1,this.viewport=new rt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?nt:yr),this.texture=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Rv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends jy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cv extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ot,this.minFilter=ot,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xy extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ot,this.minFilter=ot,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(h!==_||l!==d||u!==m||f!==x){let p=1-o;const c=l*d+u*m+f*x+h*_,v=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const T=Math.sqrt(g),R=Math.atan2(T,c*v);p=Math.sin(p*R)/T,o=Math.sin(o*R)/T}const y=o*v;if(l=l*p+d*y,u=u*p+m*y,f=f*p+x*y,h=h*p+_*y,p===1-o){const T=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=T,u*=T,f*=T,h*=T}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+f*h+l*m-u*d,e[n+1]=l*x+f*d+u*h-o*m,e[n+2]=u*x+f*m+o*d-l*h,e[n+3]=f*x-o*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"YZX":this._x=d*f*h+u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h-d*m*x;break;case"XZY":this._x=d*f*h-u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=l*n+a*r-o*i,f=l*i+o*n-s*r,h=l*r+s*i-a*n,d=-s*n-a*i-o*r;return this.x=u*l+d*-s+f*-o-h*-a,this.y=f*l+d*-a+h*-s-u*-o,this.z=h*l+d*-o+u*-a-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new U,sp=new Ar;class Ba{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)ni.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ni)}else r.boundingBox===null&&r.computeBoundingBox(),Nr.copy(r.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),ao.subVectors(this.max,Ys),Ir.subVectors(e.a,Ys),Or.subVectors(e.b,Ys),Fr.subVectors(e.c,Ys),bi.subVectors(Or,Ir),Ri.subVectors(Fr,Or),ir.subVectors(Ir,Fr);let n=[0,-bi.z,bi.y,0,-Ri.z,Ri.y,0,-ir.z,ir.y,bi.z,0,-bi.x,Ri.z,0,-Ri.x,ir.z,0,-ir.x,-bi.y,bi.x,0,-Ri.y,Ri.x,0,-ir.y,ir.x,0];return!Du(n,Ir,Or,Fr,ao)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,Ir,Or,Fr,ao))?!1:(oo.crossVectors(bi,Ri),n=[oo.x,oo.y,oo.z],Du(n,Ir,Or,Fr,ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new U,new U,new U,new U,new U,new U,new U,new U],ni=new U,Nr=new Ba,Ir=new U,Or=new U,Fr=new U,bi=new U,Ri=new U,ir=new U,Ys=new U,ao=new U,oo=new U,rr=new U;function Du(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){rr.fromArray(t,s);const o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),u=n.dot(rr),f=i.dot(rr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const Yy=new Ba,qs=new U,Uu=new U;class td{constructor(e=new U,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Yy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Uu)),this.expandByPoint(qs.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new U,Nu=new U,lo=new U,Ci=new U,Iu=new U,uo=new U,Ou=new U;class Pv{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),lo.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(lo),o=Ci.dot(this.direction),l=-Ci.dot(lo),u=Ci.lengthSq(),f=Math.abs(1-a*a);let h,d,m,x;if(f>0)if(h=a*l-o,d=a*o-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const _=1/f;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+u}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Nu).addScaledVector(lo,d),m}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){Iu.subVectors(n,e),uo.subVectors(i,e),Ou.crossVectors(Iu,uo);let a=this.direction.dot(Ou),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(uo.crossVectors(Ci,uo));if(l<0)return null;const u=o*this.direction.dot(Iu.cross(Ci));if(u<0||l+u>a)return null;const f=-o*Ci.dot(Ou);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,a,o,l,u,f,h,d,m,x,_,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,h,d,m,x,_,p)}set(e,n,i,r,s,a,o,l,u,f,h,d,m,x,_,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=x,c[11]=_,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),a=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*h,x=o*f,_=o*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+x*u,n[5]=d-_*u,n[9]=-o*l,n[2]=_-d*u,n[6]=x+m*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=u*f,_=u*h;n[0]=d+_*o,n[4]=x*o-m,n[8]=a*u,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=m*o-x,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=u*f,_=u*h;n[0]=d-_*o,n[4]=-a*h,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*f,n[9]=_-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*h,x=o*f,_=o*h;n[0]=l*f,n[4]=x*u-m,n[8]=d*u+_,n[1]=l*h,n[5]=_*u+d,n[9]=m*u-x,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*u,x=o*l,_=o*u;n[0]=l*f,n[4]=_-d*h,n[8]=x*h+m,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=m*h+x,n[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,m=a*u,x=o*l,_=o*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+_,n[5]=a*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=o*f,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qy,e,$y)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Pi.crossVectors(i,cn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Pi.crossVectors(i,cn)),Pi.normalize(),co.crossVectors(cn,Pi),r[0]=Pi.x,r[4]=co.x,r[8]=cn.x,r[1]=Pi.y,r[5]=co.y,r[9]=cn.y,r[2]=Pi.z,r[6]=co.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],_=i[6],p=i[10],c=i[14],v=i[3],g=i[7],y=i[11],T=i[15],R=r[0],E=r[4],P=r[8],S=r[12],w=r[1],K=r[5],Q=r[9],F=r[13],W=r[2],X=r[6],J=r[10],$=r[14],D=r[3],j=r[7],B=r[11],N=r[15];return s[0]=a*R+o*w+l*W+u*D,s[4]=a*E+o*K+l*X+u*j,s[8]=a*P+o*Q+l*J+u*B,s[12]=a*S+o*F+l*$+u*N,s[1]=f*R+h*w+d*W+m*D,s[5]=f*E+h*K+d*X+m*j,s[9]=f*P+h*Q+d*J+m*B,s[13]=f*S+h*F+d*$+m*N,s[2]=x*R+_*w+p*W+c*D,s[6]=x*E+_*K+p*X+c*j,s[10]=x*P+_*Q+p*J+c*B,s[14]=x*S+_*F+p*$+c*N,s[3]=v*R+g*w+y*W+T*D,s[7]=v*E+g*K+y*X+T*j,s[11]=v*P+g*Q+y*J+T*B,s[15]=v*S+g*F+y*$+T*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],_=e[7],p=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*o*d+i*u*d+r*o*m-i*l*m)+_*(+n*l*m-n*u*d+s*a*d-r*a*m+r*u*f-s*l*f)+p*(+n*u*h-n*o*m-s*a*h+i*a*m+s*o*f-i*u*f)+c*(-r*o*f-n*l*h+n*o*d+r*a*h-i*a*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],_=e[13],p=e[14],c=e[15],v=h*p*u-_*d*u+_*l*m-o*p*m-h*l*c+o*d*c,g=x*d*u-f*p*u-x*l*m+a*p*m+f*l*c-a*d*c,y=f*_*u-x*h*u+x*o*m-a*_*m-f*o*c+a*h*c,T=x*h*l-f*_*l-x*o*d+a*_*d+f*o*p-a*h*p,R=n*v+i*g+r*y+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=v*E,e[1]=(_*d*s-h*p*s-_*r*m+i*p*m+h*r*c-i*d*c)*E,e[2]=(o*p*s-_*l*s+_*r*u-i*p*u-o*r*c+i*l*c)*E,e[3]=(h*l*s-o*d*s-h*r*u+i*d*u+o*r*m-i*l*m)*E,e[4]=g*E,e[5]=(f*p*s-x*d*s+x*r*m-n*p*m-f*r*c+n*d*c)*E,e[6]=(x*l*s-a*p*s-x*r*u+n*p*u+a*r*c-n*l*c)*E,e[7]=(a*d*s-f*l*s+f*r*u-n*d*u-a*r*m+n*l*m)*E,e[8]=y*E,e[9]=(x*h*s-f*_*s-x*i*m+n*_*m+f*i*c-n*h*c)*E,e[10]=(a*_*s-x*o*s+x*i*u-n*_*u-a*i*c+n*o*c)*E,e[11]=(f*o*s-a*h*s-f*i*u+n*h*u+a*i*m-n*o*m)*E,e[12]=T*E,e[13]=(f*_*r-x*h*r+x*i*d-n*_*d-f*i*p+n*h*p)*E,e[14]=(x*o*r-a*_*r-x*i*l+n*_*l+a*i*p-n*o*p)*E,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*d+n*o*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,h=o+o,d=s*u,m=s*f,x=s*h,_=a*f,p=a*h,c=o*h,v=l*u,g=l*f,y=l*h,T=i.x,R=i.y,E=i.z;return r[0]=(1-(_+c))*T,r[1]=(m+y)*T,r[2]=(x-g)*T,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(d+c))*R,r[6]=(p+v)*R,r[7]=0,r[8]=(x+g)*E,r[9]=(p-v)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const a=kr.set(r[4],r[5],r[6]).length(),o=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const u=1/s,f=1/a,h=1/o;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,n.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=pi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,x;if(o===pi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===xl)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=pi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(a-s),d=(n+e)*u,m=(i+r)*f;let x,_;if(o===pi)x=(a+s)*h,_=-2*h;else if(o===xl)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new U,Un=new mt,qy=new U(0,0,0),$y=new U(1,1,1),Pi=new U,co=new U,cn=new U,ap=new mt,op=new Ar;class Bl{constructor(e=0,n=0,i=0,r=Bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return op.setFromEuler(this),this.setFromQuaternion(op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bl.DEFAULT_ORDER="XYZ";class Lv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ky=0;const lp=new U,zr=new Ar,ri=new mt,fo=new U,$s=new U,Zy=new U,Qy=new Ar,up=new U(1,0,0),cp=new U(0,1,0),fp=new U(0,0,1),Jy={type:"added"},eS={type:"removed"};class Wt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new U,n=new Bl,i=new Ar,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Oe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,n){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fo.copy(e):fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt($s,fo,this.up):ri.lookAt(fo,$s,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ri),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new U(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new U,si=new U,Fu=new U,ai=new U,Br=new U,Hr=new U,dp=new U,ku=new U,zu=new U,Bu=new U;let ho=!1;class An{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),si.subVectors(i,n),Fu.subVectors(e,n);const a=Nn.dot(Nn),o=Nn.dot(si),l=Nn.dot(Fu),u=si.dot(si),f=si.dot(Fu),h=a*u-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(u*l-o*f)*d,x=(a*f-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,n,i,r,s,a,o,l){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ai),l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),si.subVectors(e,n),Nn.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return An.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Br.subVectors(r,i),Hr.subVectors(s,i),ku.subVectors(e,i);const l=Br.dot(ku),u=Hr.dot(ku);if(l<=0&&u<=0)return n.copy(i);zu.subVectors(e,r);const f=Br.dot(zu),h=Hr.dot(zu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Br,a);Bu.subVectors(e,s);const m=Br.dot(Bu),x=Hr.dot(Bu);if(x>=0&&m<=x)return n.copy(s);const _=m*u-l*x;if(_<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(Hr,o);const p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return dp.subVectors(s,r),o=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(dp,o);const c=1/(p+_+d);return a=_*c,o=d*c,n.copy(i).addScaledVector(Br,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let tS=0;class Os extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=xs,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pv,this.blendDst=mv,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Yc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Au,this.stencilZFail=Au,this.stencilZPass=Au,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},po={h:0,s:0,l:0};function Hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Mn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Mn.workingColorSpace){if(e=Ny(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Hu(a,s,e+1/3),this.g=Hu(a,s,e),this.b=Hu(a,s,e-1/3)}return Mn.toWorkingColorSpace(this,r),this}setStyle(e,n=nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=nt){const i=Dv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Cu(e.r),this.g=Cu(e.g),this.b=Cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return Mn.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Zt(Ht.r*255,0,255))*65536+Math.round(Zt(Ht.g*255,0,255))*256+Math.round(Zt(Ht.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mn.workingColorSpace){Mn.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Mn.workingColorSpace){return Mn.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=nt){Mn.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(In),In.h+=e,In.s+=n,In.l+=i,this.setHSL(In.h,In.s,In.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(In),e.getHSL(po);const i=bu(In.h,po.h,n),r=bu(In.s,po.s,n),s=bu(In.l,po.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new je;je.NAMES=Dv;class Uv extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new U,mo=new _e;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zc,this.updateRange={offset:0,count:-1},this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mo.fromBufferAttribute(this,n),mo.applyMatrix3(e),this.setXY(n,mo.x,mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qe(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ci(n,this.array)),n}setX(e,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ci(n,this.array)),n}setY(e,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ci(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ci(n,this.array)),n}setW(e,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qe(n,this.array),i=qe(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qe(n,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qe(n,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Nv extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Iv extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vi extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let nS=0;const yn=new mt,Gu=new Wt,Gr=new U,fn=new Ba,Ks=new Ba,Rt=new U;class wi extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Iv:Nv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new td);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(fn.min,Ks.min),fn.expandByPoint(Rt),Rt.addVectors(fn.max,Ks.max),fn.expandByPoint(Rt)):(fn.expandByPoint(Ks.min),fn.expandByPoint(Ks.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Rt.fromBufferAttribute(o,u),l&&(Gr.fromBufferAttribute(e,u),Rt.add(Gr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<o;w++)u[w]=new U,f[w]=new U;const h=new U,d=new U,m=new U,x=new _e,_=new _e,p=new _e,c=new U,v=new U;function g(w,K,Q){h.fromArray(r,w*3),d.fromArray(r,K*3),m.fromArray(r,Q*3),x.fromArray(a,w*2),_.fromArray(a,K*2),p.fromArray(a,Q*2),d.sub(h),m.sub(h),_.sub(x),p.sub(x);const F=1/(_.x*p.y-p.x*_.y);isFinite(F)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(F),v.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(F),u[w].add(c),u[K].add(c),u[Q].add(c),f[w].add(v),f[K].add(v),f[Q].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,K=y.length;w<K;++w){const Q=y[w],F=Q.start,W=Q.count;for(let X=F,J=F+W;X<J;X+=3)g(i[X+0],i[X+1],i[X+2])}const T=new U,R=new U,E=new U,P=new U;function S(w){E.fromArray(s,w*3),P.copy(E);const K=u[w];T.copy(K),T.sub(E.multiplyScalar(E.dot(K))).normalize(),R.crossVectors(P,K);const F=R.dot(f[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=F}for(let w=0,K=y.length;w<K;++w){const Q=y[w],F=Q.start,W=Q.count;for(let X=F,J=F+W;X<J;X+=3)S(i[X+0]),S(i[X+1]),S(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,u=new U,f=new U,h=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),o.add(f),l.add(f),u.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,h=o.normalized,d=new u.constructor(l.length*f);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*f;for(let c=0;c<f;c++)d[x++]=u[m++]}return new Vn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hp=new mt,sr=new Pv,go=new td,pp=new U,Vr=new U,Wr=new U,jr=new U,Vu=new U,vo=new U,_o=new _e,xo=new _e,yo=new _e,mp=new U,gp=new U,vp=new U,So=new U,Mo=new U;class Ke extends Wt{constructor(e=new wi,n=new Uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],h=s[l];f!==0&&(Vu.fromBufferAttribute(h,e),a?vo.addScaledVector(Vu,f):vo.addScaledVector(Vu.sub(n),f))}n.add(vo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(go.containsPoint(sr.origin)===!1&&(sr.intersectSphere(go,pp)===null||sr.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(hp.copy(s).invert(),sr.copy(e.ray).applyMatrix4(hp),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const p=d[x],c=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,T=g;y<T;y+=3){const R=o.getX(y),E=o.getX(y+1),P=o.getX(y+2);r=Eo(this,c,e,i,u,f,h,R,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,c=_;p<c;p+=3){const v=o.getX(p),g=o.getX(p+1),y=o.getX(p+2);r=Eo(this,a,e,i,u,f,h,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const p=d[x],c=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,T=g;y<T;y+=3){const R=y,E=y+1,P=y+2;r=Eo(this,c,e,i,u,f,h,R,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,c=_;p<c;p+=3){const v=p,g=p+1,y=p+2;r=Eo(this,a,e,i,u,f,h,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function iS(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qn,o),l===null)return null;Mo.copy(o),Mo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Mo);return u<n.near||u>n.far?null:{distance:u,point:Mo.clone(),object:t}}function Eo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Vr),t.getVertexPosition(l,Wr),t.getVertexPosition(u,jr);const f=iS(t,e,n,i,Vr,Wr,jr,So);if(f){r&&(_o.fromBufferAttribute(r,o),xo.fromBufferAttribute(r,l),yo.fromBufferAttribute(r,u),f.uv=An.getInterpolation(So,Vr,Wr,jr,_o,xo,yo,new _e)),s&&(_o.fromBufferAttribute(s,o),xo.fromBufferAttribute(s,l),yo.fromBufferAttribute(s,u),f.uv1=An.getInterpolation(So,Vr,Wr,jr,_o,xo,yo,new _e),f.uv2=f.uv1),a&&(mp.fromBufferAttribute(a,o),gp.fromBufferAttribute(a,l),vp.fromBufferAttribute(a,u),f.normal=An.getInterpolation(So,Vr,Wr,jr,mp,gp,vp,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new U,materialIndex:0};An.getNormal(Vr,Wr,jr,h.normal),f.face=h}return f}class ht extends wi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vi(u,3)),this.setAttribute("normal",new vi(f,3)),this.setAttribute("uv",new vi(h,2));function x(_,p,c,v,g,y,T,R,E,P,S){const w=y/E,K=T/P,Q=y/2,F=T/2,W=R/2,X=E+1,J=P+1;let $=0,D=0;const j=new U;for(let B=0;B<J;B++){const N=B*K-F;for(let z=0;z<X;z++){const le=z*w-Q;j[_]=le*v,j[p]=N*g,j[c]=W,u.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[c]=R>0?1:-1,f.push(j.x,j.y,j.z),h.push(z/E),h.push(1-B/P),$+=1}}for(let B=0;B<P;B++)for(let N=0;N<E;N++){const z=d+N+X*B,le=d+N+X*(B+1),ue=d+(N+1)+X*(B+1),me=d+(N+1)+X*B;l.push(z,le,me),l.push(le,ue,me),D+=6}o.addGroup(m,D,S),m+=D,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function rS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ov(t){return t.getRenderTarget()===null?t.outputColorSpace:Jn}const Fv={clone:Ds,merge:$t};var sS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sS,this.fragmentShader=aS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=rS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kv extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends kv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,Yr=1;class oS extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new hn(Xr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new hn(Xr,Yr,e,n);s.layers=this.layers,this.add(s);const a=new hn(Xr,Yr,e,n);a.layers=this.layers,this.add(a);const o=new hn(Xr,Yr,e,n);o.layers=this.layers,this.add(o);const l=new hn(Xr,Yr,e,n);l.layers=this.layers,this.add(l);const u=new hn(Xr,Yr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,u]=this.children,f=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class zv extends Vt{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lS extends Mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?nt:yr),this.texture=new zv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ht(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:gi});s.uniforms.tEquirect.value=n;const a=new Ke(r,s),o=n.minFilter;return n.minFilter===Ua&&(n.minFilter=wn),new oS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Wu=new U,uS=new U,cS=new Oe;class Ui{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wu.subVectors(i,n).cross(uS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cS.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new td,To=new U;class nd{constructor(e=new Ui,n=new Ui,i=new Ui,r=new Ui,s=new Ui,a=new Ui){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],_=r[10],p=r[11],c=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,p-m,y-c).normalize(),i[1].setComponents(l+s,d+u,p+m,y+c).normalize(),i[2].setComponents(l+a,d+f,p+x,y+v).normalize(),i[3].setComponents(l-a,d-f,p-x,y-v).normalize(),i[4].setComponents(l-o,d-h,p-_,y-g).normalize(),n===pi)i[5].setComponents(l+o,d+h,p+_,y+g).normalize();else if(n===xl)i[5].setComponents(o,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(To.x=r.normal.x>0?e.max.x:e.min.x,To.y=r.normal.y>0?e.max.y:e.min.y,To.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function fS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(f,m),t.bufferData(f,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,h){const d=f.array,m=f.updateRange;t.bindBuffer(h,u),m.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(s(h.buffer,u,f),h.version=u.version)}return{get:a,remove:o,update:l}}class id extends wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,h=e/o,d=n/l,m=[],x=[],_=[],p=[];for(let c=0;c<f;c++){const v=c*d-a;for(let g=0;g<u;g++){const y=g*h-s;x.push(y,-v,0),_.push(0,0,1),p.push(g/o),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<o;v++){const g=v+u*c,y=v+u*(c+1),T=v+1+u*(c+1),R=v+1+u*c;m.push(g,y,R),m.push(y,T,R)}this.setIndex(m),this.setAttribute("position",new vi(x,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new id(e.width,e.height,e.widthSegments,e.heightSegments)}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_S=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ES=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,US=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",HS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,uM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,RM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_E=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:dS,alphahash_pars_fragment:hS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:vS,aomap_fragment:_S,aomap_pars_fragment:xS,begin_vertex:yS,beginnormal_vertex:SS,bsdfs:MS,iridescence_fragment:ES,bumpmap_pars_fragment:TS,clipping_planes_fragment:wS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:RS,color_fragment:CS,color_pars_fragment:PS,color_pars_vertex:LS,color_vertex:DS,common:US,cube_uv_reflection_fragment:NS,defaultnormal_vertex:IS,displacementmap_pars_vertex:OS,displacementmap_vertex:FS,emissivemap_fragment:kS,emissivemap_pars_fragment:zS,colorspace_fragment:BS,colorspace_pars_fragment:HS,envmap_fragment:GS,envmap_common_pars_fragment:VS,envmap_pars_fragment:WS,envmap_pars_vertex:jS,envmap_physical_pars_fragment:iM,envmap_vertex:XS,fog_vertex:YS,fog_pars_vertex:qS,fog_fragment:$S,fog_pars_fragment:KS,gradientmap_pars_fragment:ZS,lightmap_fragment:QS,lightmap_pars_fragment:JS,lights_lambert_fragment:eM,lights_lambert_pars_fragment:tM,lights_pars_begin:nM,lights_toon_fragment:rM,lights_toon_pars_fragment:sM,lights_phong_fragment:aM,lights_phong_pars_fragment:oM,lights_physical_fragment:lM,lights_physical_pars_fragment:uM,lights_fragment_begin:cM,lights_fragment_maps:fM,lights_fragment_end:dM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:vM,map_pars_fragment:_M,map_particle_fragment:xM,map_particle_pars_fragment:yM,metalnessmap_fragment:SM,metalnessmap_pars_fragment:MM,morphcolor_vertex:EM,morphnormal_vertex:TM,morphtarget_pars_vertex:wM,morphtarget_vertex:AM,normal_fragment_begin:bM,normal_fragment_maps:RM,normal_pars_fragment:CM,normal_pars_vertex:PM,normal_vertex:LM,normalmap_pars_fragment:DM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:OM,opaque_fragment:FM,packing:kM,premultiplied_alpha_fragment:zM,project_vertex:BM,dithering_fragment:HM,dithering_pars_fragment:GM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:jM,shadowmap_pars_vertex:XM,shadowmap_vertex:YM,shadowmask_pars_fragment:qM,skinbase_vertex:$M,skinning_pars_vertex:KM,skinning_vertex:ZM,skinnormal_vertex:QM,specularmap_fragment:JM,specularmap_pars_fragment:eE,tonemapping_fragment:tE,tonemapping_pars_fragment:nE,transmission_fragment:iE,transmission_pars_fragment:rE,uv_pars_fragment:sE,uv_pars_vertex:aE,uv_vertex:oE,worldpos_vertex:lE,background_vert:uE,background_frag:cE,backgroundCube_vert:fE,backgroundCube_frag:dE,cube_vert:hE,cube_frag:pE,depth_vert:mE,depth_frag:gE,distanceRGBA_vert:vE,distanceRGBA_frag:_E,equirect_vert:xE,equirect_frag:yE,linedashed_vert:SE,linedashed_frag:ME,meshbasic_vert:EE,meshbasic_frag:TE,meshlambert_vert:wE,meshlambert_frag:AE,meshmatcap_vert:bE,meshmatcap_frag:RE,meshnormal_vert:CE,meshnormal_frag:PE,meshphong_vert:LE,meshphong_frag:DE,meshphysical_vert:UE,meshphysical_frag:NE,meshtoon_vert:IE,meshtoon_frag:OE,points_vert:FE,points_frag:kE,shadow_vert:zE,shadow_frag:BE,sprite_vert:HE,sprite_frag:GE},ce={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},qn={basic:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new je(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:$t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:$t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new je(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:$t([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:$t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:$t([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:$t([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:$t([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:$t([ce.lights,ce.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};qn.physical={uniforms:$t([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const wo={r:0,b:0,g:0};function VE(t,e,n,i,r,s,a){const o=new je(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function x(p,c){let v=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?_(o,l):g&&g.isColor&&(_(g,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===kl)?(f===void 0&&(f=new Ke(new ht(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Ds(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=g.colorSpace!==nt,(h!==g||d!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Ke(new id(2,2),new Ei({name:"BackgroundMaterial",uniforms:Ds(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=g.colorSpace!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function _(p,c){p.getRGB(wo,Ov(t)),i.buffers.color.setClear(wo.r,wo.g,wo.b,c,a)}return{getClearColor:function(){return o},setClearColor:function(p,c=1){o.set(p),l=c,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:x}}function WE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let u=l,f=!1;function h(W,X,J,$,D){let j=!1;if(a){const B=_($,J,X);u!==B&&(u=B,m(u.object)),j=c(W,$,J,D),j&&v(W,$,J,D)}else{const B=X.wireframe===!0;(u.geometry!==$.id||u.program!==J.id||u.wireframe!==B)&&(u.geometry=$.id,u.program=J.id,u.wireframe=B,j=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(j||f)&&(f=!1,P(W,X,J,$),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(W){return i.isWebGL2?t.bindVertexArray(W):s.bindVertexArrayOES(W)}function x(W){return i.isWebGL2?t.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function _(W,X,J){const $=J.wireframe===!0;let D=o[W.id];D===void 0&&(D={},o[W.id]=D);let j=D[X.id];j===void 0&&(j={},D[X.id]=j);let B=j[$];return B===void 0&&(B=p(d()),j[$]=B),B}function p(W){const X=[],J=[],$=[];for(let D=0;D<r;D++)X[D]=0,J[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:$,object:W,attributes:{},index:null}}function c(W,X,J,$){const D=u.attributes,j=X.attributes;let B=0;const N=J.getAttributes();for(const z in N)if(N[z].location>=0){const ue=D[z];let me=j[z];if(me===void 0&&(z==="instanceMatrix"&&W.instanceMatrix&&(me=W.instanceMatrix),z==="instanceColor"&&W.instanceColor&&(me=W.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;B++}return u.attributesNum!==B||u.index!==$}function v(W,X,J,$){const D={},j=X.attributes;let B=0;const N=J.getAttributes();for(const z in N)if(N[z].location>=0){let ue=j[z];ue===void 0&&(z==="instanceMatrix"&&W.instanceMatrix&&(ue=W.instanceMatrix),z==="instanceColor"&&W.instanceColor&&(ue=W.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),D[z]=me,B++}u.attributes=D,u.attributesNum=B,u.index=$}function g(){const W=u.newAttributes;for(let X=0,J=W.length;X<J;X++)W[X]=0}function y(W){T(W,0)}function T(W,X){const J=u.newAttributes,$=u.enabledAttributes,D=u.attributeDivisors;J[W]=1,$[W]===0&&(t.enableVertexAttribArray(W),$[W]=1),D[W]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,X),D[W]=X)}function R(){const W=u.newAttributes,X=u.enabledAttributes;for(let J=0,$=X.length;J<$;J++)X[J]!==W[J]&&(t.disableVertexAttribArray(J),X[J]=0)}function E(W,X,J,$,D,j,B){B===!0?t.vertexAttribIPointer(W,X,J,D,j):t.vertexAttribPointer(W,X,J,$,D,j)}function P(W,X,J,$){if(i.isWebGL2===!1&&(W.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=$.attributes,j=J.getAttributes(),B=X.defaultAttributeValues;for(const N in j){const z=j[N];if(z.location>=0){let le=D[N];if(le===void 0&&(N==="instanceMatrix"&&W.instanceMatrix&&(le=W.instanceMatrix),N==="instanceColor"&&W.instanceColor&&(le=W.instanceColor)),le!==void 0){const ue=le.normalized,me=le.itemSize,xe=n.get(le);if(xe===void 0)continue;const Te=xe.buffer,Se=xe.type,Ge=xe.bytesPerElement,Lt=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||le.gpuType===_v);if(le.isInterleavedBufferAttribute){const De=le.data,O=De.stride,yt=le.offset;if(De.isInstancedInterleavedBuffer){for(let Me=0;Me<z.locationSize;Me++)T(z.location+Me,De.meshPerAttribute);W.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Me=0;Me<z.locationSize;Me++)y(z.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Me=0;Me<z.locationSize;Me++)E(z.location+Me,me/z.locationSize,Se,ue,O*Ge,(yt+me/z.locationSize*Me)*Ge,Lt)}else{if(le.isInstancedBufferAttribute){for(let De=0;De<z.locationSize;De++)T(z.location+De,le.meshPerAttribute);W.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<z.locationSize;De++)y(z.location+De);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let De=0;De<z.locationSize;De++)E(z.location+De,me/z.locationSize,Se,ue,me*Ge,me/z.locationSize*De*Ge,Lt)}}else if(B!==void 0){const ue=B[N];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(z.location,ue);break;case 3:t.vertexAttrib3fv(z.location,ue);break;case 4:t.vertexAttrib4fv(z.location,ue);break;default:t.vertexAttrib1fv(z.location,ue)}}}}R()}function S(){Q();for(const W in o){const X=o[W];for(const J in X){const $=X[J];for(const D in $)x($[D].object),delete $[D];delete X[J]}delete o[W]}}function w(W){if(o[W.id]===void 0)return;const X=o[W.id];for(const J in X){const $=X[J];for(const D in $)x($[D].object),delete $[D];delete X[J]}delete o[W.id]}function K(W){for(const X in o){const J=o[X];if(J[W.id]===void 0)continue;const $=J[W.id];for(const D in $)x($[D].object),delete $[D];delete J[W.id]}}function Q(){F(),f=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:K,initAttributes:g,enableAttribute:y,disableUnusedAttributes:R}}function jE(t,e,n,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,f,h),n.update(f,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function XE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=a||e.has("OES_texture_float"),T=g&&y,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:R}}function YE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ui,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):u();else{const v=s?0:i,g=v*4;let y=c.clippingState||null;l.value=y,y=f(x,d,g,m);for(let T=0;T!==g;++T)y[T]=n[T];c.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const c=m+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,y=m;g!==_;++g,y+=4)a.copy(h[g]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function qE(t){let e=new WeakMap;function n(a,o){return o===_l?a.mapping=Rs:o===qc&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===_l||o===qc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new lS(l.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Hv extends kv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,_p=[.125,.215,.35,.446,.526,.582],fr=20,ju=new Hv,xp=new je;let Xu=null;const cr=(1+Math.sqrt(5))/2,qr=1/cr,yp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,cr,qr),new U(0,cr,-qr),new U(qr,0,cr),new U(-qr,0,cr),new U(cr,qr,0),new U(-cr,qr,0)];class Sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu),e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ps,format:Bn,colorSpace:Jn,depthBuffer:!1},r=Mp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$E(s)),this._blurMaterial=KE(s,e,n)}return r}_compileMaterial(e){const n=new Ke(this._lodPlanes[0],e);this._renderer.compile(n,ju)}_sceneToCubeUV(e,n,i,r){const o=new hn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(xp),f.toneMapping=Yi,f.autoClear=!1;const m=new Uv({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new Ke(new ht,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(xp),_=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(o.up.set(0,l[c],0),o.lookAt(u[c],0,0)):v===1?(o.up.set(0,0,l[c]),o.lookAt(0,u[c],0)):(o.up.set(0,l[c],0),o.lookAt(0,0,u[c]));const g=this._cubeSize;Ao(r,v*g,c>2?g:0,g,g),f.setRenderTarget(r),_&&f.render(x,o),f.render(e,o)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ao(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ju)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yp[(r-1)%yp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Ke(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),_=s/x,p=isFinite(s)?1+Math.floor(f*_):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const c=[];let v=0;for(let E=0;E<fr;++E){const P=E/_,S=Math.exp(-P*P/2);c.push(S),E===0?v+=S:E<p&&(v+=2*S)}for(let E=0;E<c.length;E++)c[E]=c[E]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const y=this._sizeLods[r],T=3*y*(r>g-ds?r-g+ds:0),R=4*(this._cubeSize-y);Ao(n,T,R,3*y,2*y),l.setRenderTarget(n),l.render(h,ju)}}function $E(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+_p.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ds?l=_p[a-t+ds-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,_=3,p=2,c=1,v=new Float32Array(_*x*m),g=new Float32Array(p*x*m),y=new Float32Array(c*x*m);for(let R=0;R<m;R++){const E=R%3*2/3-1,P=R>2?0:-1,S=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(S,_*x*R),g.set(d,p*x*R);const w=[R,R,R,R,R,R];y.set(w,c*x*R)}const T=new wi;T.setAttribute("position",new Vn(v,_)),T.setAttribute("uv",new Vn(g,p)),T.setAttribute("faceIndex",new Vn(y,c)),e.push(T),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Mp(t,e,n){const i=new Mi(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function KE(t,e,n){const i=new Float32Array(fr),r=new U(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ep(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Tp(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===_l||l===qc,f=l===Rs||l===Cs;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Sp(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Sp(t));const d=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function QE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JE(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const _=d.morphAttributes[x];for(let p=0,c=_.length;p<c;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const _=m[x];for(let p=0,c=_.length;p<c;p++)e.update(_[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,x=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let g=0,y=v.length;g<y;g+=3){const T=v[g+0],R=v[g+1],E=v[g+2];d.push(T,R,R,E,E,T)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const T=g+0,R=g+1,E=g+2;d.push(T,R,R,E,E,T)}}else return;const p=new(Av(d)?Iv:Nv)(d,1);p.version=_;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function eT(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function u(d){o=d.type,l=d.bytesPerElement}function f(d,m){t.drawElements(s,m,o,d*l),n.update(m,s,1)}function h(d,m,x){if(x===0)return;let _,p;if(r)_=t,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*l,x),n.update(m,s,x)}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h}function tT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nT(t,e){return t[0]-e[0]}function iT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function rT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new rt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==_){let X=function(){F.dispose(),s.delete(f),f.removeEventListener("dispose",X)};var m=X;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let w=f.attributes.position.count*S,K=1;w>e.maxTextureSize&&(K=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Q=new Float32Array(w*K*4*_),F=new Cv(Q,w,K,_);F.type=hi,F.needsUpdate=!0;const W=S*4;for(let J=0;J<_;J++){const $=R[J],D=E[J],j=P[J],B=w*K*4*J;for(let N=0;N<$.count;N++){const z=N*W;g===!0&&(a.fromBufferAttribute($,N),Q[B+z+0]=a.x,Q[B+z+1]=a.y,Q[B+z+2]=a.z,Q[B+z+3]=0),y===!0&&(a.fromBufferAttribute(D,N),Q[B+z+4]=a.x,Q[B+z+5]=a.y,Q[B+z+6]=a.z,Q[B+z+7]=0),T===!0&&(a.fromBufferAttribute(j,N),Q[B+z+8]=a.x,Q[B+z+9]=a.y,Q[B+z+10]=a.z,Q[B+z+11]=j.itemSize===4?a.w:1)}}p={count:_,texture:F,size:new _e(w,K)},s.set(f,p),f.addEventListener("dispose",X)}let c=0;for(let g=0;g<d.length;g++)c+=d[g];const v=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let _=i[f.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[f.id]=_}for(let y=0;y<x;y++){const T=_[y];T[0]=y,T[1]=d[y]}_.sort(iT);for(let y=0;y<8;y++)y<x&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(nT);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=o[y],R=T[0],E=T[1];R!==Number.MAX_SAFE_INTEGER&&E?(p&&f.getAttribute("morphTarget"+y)!==p[R]&&f.setAttribute("morphTarget"+y,p[R]),c&&f.getAttribute("morphNormal"+y)!==c[R]&&f.setAttribute("morphNormal"+y,c[R]),r[y]=E,v+=E):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),c&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const g=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function sT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}const Gv=new Vt,Vv=new Cv,Wv=new Xy,jv=new zv,wp=[],Ap=[],bp=new Float32Array(16),Rp=new Float32Array(9),Cp=new Float32Array(4);function Fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=wp[r];if(s===void 0&&(s=new Float32Array(r),wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hl(t,e){let n=Ap[e];n===void 0&&(n=new Int32Array(e),Ap[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Cp.set(i),t.uniformMatrix2fv(this.addr,!1,Cp),At(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Rp.set(i),t.uniformMatrix3fv(this.addr,!1,Rp),At(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;bp.set(i),t.uniformMatrix4fv(this.addr,!1,bp),At(n,i)}}function hT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Gv,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wv,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jv,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vv,r)}function wT(t){switch(t){case 5126:return aT;case 35664:return oT;case 35665:return lT;case 35666:return uT;case 35674:return cT;case 35675:return fT;case 35676:return dT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return _T;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}function AT(t,e){t.uniform1fv(this.addr,e)}function bT(t,e){const n=Fs(e,this.size,2);t.uniform2fv(this.addr,n)}function RT(t,e){const n=Fs(e,this.size,3);t.uniform3fv(this.addr,n)}function CT(t,e){const n=Fs(e,this.size,4);t.uniform4fv(this.addr,n)}function PT(t,e){const n=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LT(t,e){const n=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DT(t,e){const n=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UT(t,e){t.uniform1iv(this.addr,e)}function NT(t,e){t.uniform2iv(this.addr,e)}function IT(t,e){t.uniform3iv(this.addr,e)}function OT(t,e){t.uniform4iv(this.addr,e)}function FT(t,e){t.uniform1uiv(this.addr,e)}function kT(t,e){t.uniform2uiv(this.addr,e)}function zT(t,e){t.uniform3uiv(this.addr,e)}function BT(t,e){t.uniform4uiv(this.addr,e)}function HT(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Gv,s[a])}function GT(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Wv,s[a])}function VT(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||jv,s[a])}function WT(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Vv,s[a])}function jT(t){switch(t){case 5126:return AT;case 35664:return bT;case 35665:return RT;case 35666:return CT;case 35674:return PT;case 35675:return LT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return NT;case 35668:case 35672:return IT;case 35669:case 35673:return OT;case 5125:return FT;case 36294:return kT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return WT}}class XT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=wT(n.type)}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=jT(n.type)}}class qT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function Pp(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){const i=t.name,r=i.length;for(Yu.lastIndex=0;;){const s=Yu.exec(i),a=Yu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Pp(n,u===void 0?new XT(o,t,e):new YT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new qT(o),Pp(n,h)),n=h}}}class Xo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);$T(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Lp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let KT=0;function ZT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function QT(t){switch(t){case Jn:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Dp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ZT(t.getShaderSource(e),a)}else return r}function JT(t,e){const n=QT(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function ew(t,e){let n;switch(e){case oy:n="Linear";break;case ly:n="Reinhard";break;case uy:n="OptimizedCineon";break;case cy:n="ACESFilmic";break;case fy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function tw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sa).join(`
`)}function nw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function iw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function sa(t){return t!==""}function Up(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Np(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(t){return t.replace(rw,aw)}const sw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aw(t,e){let n=Ne[e];if(n===void 0){const i=sw.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tf(n)}const ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(t){return t.replace(ow,lw)}function lw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Op(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function cw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function dw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case gv:e="ENVMAP_BLENDING_MULTIPLY";break;case sy:e="ENVMAP_BLENDING_MIX";break;case ay:e="ENVMAP_BLENDING_ADD";break}return e}function hw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function pw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=uw(n),u=cw(n),f=fw(n),h=dw(n),d=hw(n),m=n.isWebGL2?"":tw(n),x=nw(s),_=r.createProgram();let p,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(sa).join(`
`),p.length>0&&(p+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(sa).join(`
`),c.length>0&&(c+=`
`)):(p=[Op(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),c=[m,Op(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Yi?ew("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,JT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),a=tf(a),a=Up(a,n),a=Np(a,n),o=tf(o),o=Up(o,n),o=Np(o,n),a=Ip(a),o=Ip(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=v+p+a,y=v+c+o,T=Lp(r,r.VERTEX_SHADER,g),R=Lp(r,r.FRAGMENT_SHADER,y);if(r.attachShader(_,T),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(T).trim(),K=r.getShaderInfoLog(R).trim();let Q=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,T,R);else{const W=Dp(r,T,"vertex"),X=Dp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+W+`
`+X)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||K==="")&&(F=!1);F&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:w,prefix:p},fragmentShader:{log:K,prefix:c}})}r.deleteShader(T),r.deleteShader(R);let E;this.getUniforms=function(){return E===void 0&&(E=new Xo(r,_)),E};let P;return this.getAttributes=function(){return P===void 0&&(P=iw(r,_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let mw=0;class gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vw(e),n.set(e,i)),i}}class vw{constructor(e){this.id=mw++,this.code=e,this.usedTimes=0}}function _w(t,e,n,i,r,s,a){const o=new Lv,l=new gw,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,w,K,Q,F){const W=Q.fog,X=F.geometry,J=S.isMeshStandardMaterial?Q.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||J),D=$&&$.mapping===kl?$.image.height:null,j=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const B=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,N=B!==void 0?B.length:0;let z=0;X.morphAttributes.position!==void 0&&(z=1),X.morphAttributes.normal!==void 0&&(z=2),X.morphAttributes.color!==void 0&&(z=3);let le,ue,me,xe;if(j){const Je=qn[j];le=Je.vertexShader,ue=Je.fragmentShader}else le=S.vertexShader,ue=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);const Te=t.getRenderTarget(),Se=F.isInstancedMesh===!0,Ge=!!S.map,Lt=!!S.matcap,De=!!$,O=!!S.aoMap,yt=!!S.lightMap,Me=!!S.bumpMap,Pe=!!S.normalMap,Ae=!!S.displacementMap,Qe=!!S.emissiveMap,Ie=!!S.metalnessMap,Le=!!S.roughnessMap,Ve=S.anisotropy>0,St=S.clearcoat>0,bt=S.iridescence>0,b=S.sheen>0,M=S.transmission>0,H=Ve&&!!S.anisotropyMap,ie=St&&!!S.clearcoatMap,ee=St&&!!S.clearcoatNormalMap,re=St&&!!S.clearcoatRoughnessMap,ye=bt&&!!S.iridescenceMap,se=bt&&!!S.iridescenceThicknessMap,G=b&&!!S.sheenColorMap,C=b&&!!S.sheenRoughnessMap,Z=!!S.specularMap,pe=!!S.specularColorMap,oe=!!S.specularIntensityMap,he=M&&!!S.transmissionMap,Ce=M&&!!S.thicknessMap,He=!!S.gradientMap,L=!!S.alphaMap,de=S.alphaTest>0,V=!!S.alphaHash,ne=!!S.extensions,ae=!!X.attributes.uv1,Fe=!!X.attributes.uv2,Xe=!!X.attributes.uv3;let $e=Yi;return S.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&($e=t.toneMapping),{isWebGL2:f,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:ue,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Se,instancingColor:Se&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Jn,map:Ge,matcap:Lt,envMap:De,envMapMode:De&&$.mapping,envMapCubeUVHeight:D,aoMap:O,lightMap:yt,bumpMap:Me,normalMap:Pe,displacementMap:d&&Ae,emissiveMap:Qe,normalMapObjectSpace:Pe&&S.normalMapType===Ty,normalMapTangentSpace:Pe&&S.normalMapType===wv,metalnessMap:Ie,roughnessMap:Le,anisotropy:Ve,anisotropyMap:H,clearcoat:St,clearcoatMap:ie,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,iridescence:bt,iridescenceMap:ye,iridescenceThicknessMap:se,sheen:b,sheenColorMap:G,sheenRoughnessMap:C,specularMap:Z,specularColorMap:pe,specularIntensityMap:oe,transmission:M,transmissionMap:he,thicknessMap:Ce,gradientMap:He,opaque:S.transparent===!1&&S.blending===xs,alphaMap:L,alphaTest:de,alphaHash:V,combine:S.combine,mapUv:Ge&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:yt&&_(S.lightMap.channel),bumpMapUv:Me&&_(S.bumpMap.channel),normalMapUv:Pe&&_(S.normalMap.channel),displacementMapUv:Ae&&_(S.displacementMap.channel),emissiveMapUv:Qe&&_(S.emissiveMap.channel),metalnessMapUv:Ie&&_(S.metalnessMap.channel),roughnessMapUv:Le&&_(S.roughnessMap.channel),anisotropyMapUv:H&&_(S.anisotropyMap.channel),clearcoatMapUv:ie&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:G&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:C&&_(S.sheenRoughnessMap.channel),specularMapUv:Z&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:oe&&_(S.specularIntensityMap.channel),transmissionMapUv:he&&_(S.transmissionMap.channel),thicknessMapUv:Ce&&_(S.thicknessMap.channel),alphaMapUv:L&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pe||Ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:Fe,vertexUv3s:Xe,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Ge||L),fog:!!W,useFog:S.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&K.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&S.map.colorSpace===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===bn,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ne&&S.extensions.derivatives===!0,extensionFragDepth:ne&&S.extensions.fragDepth===!0,extensionDrawBuffers:ne&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function c(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const K in S.defines)w.push(K),w.push(S.defines[K]);return S.isRawShaderMaterial===!1&&(v(w,S),g(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function g(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function y(S){const w=x[S.type];let K;if(w){const Q=qn[w];K=Fv.clone(Q.uniforms)}else K=S.uniforms;return K}function T(S,w){let K;for(let Q=0,F=u.length;Q<F;Q++){const W=u[Q];if(W.cacheKey===w){K=W,++K.usedTimes;break}}return K===void 0&&(K=new pw(t,w,S,s),u.push(K)),K}function R(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:y,acquireProgram:T,releaseProgram:R,releaseShaderCache:E,programs:u,dispose:P}}function xw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function yw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function kp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,m,x,_,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:_,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=_,c.group=p),e++,c}function o(h,d,m,x,_,p){const c=a(h,d,m,x,_,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,x,_,p){const c=a(h,d,m,x,_,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||yw),i.length>1&&i.sort(d||Fp),r.length>1&&r.sort(d||Fp)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function Sw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new kp,t.set(i,[a])):r>=s.length?(a=new kp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Mw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new je};break;case"SpotLight":n={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function Ew(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Tw=0;function ww(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Aw(t,e){const n=new Mw,i=Ew(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new U);const s=new U,a=new mt,o=new mt;function l(f,h){let d=0,m=0,x=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let _=0,p=0,c=0,v=0,g=0,y=0,T=0,R=0,E=0,P=0;f.sort(ww);const S=h===!0?Math.PI:1;for(let K=0,Q=f.length;K<Q;K++){const F=f[K],W=F.color,X=F.intensity,J=F.distance,$=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=W.r*X*S,m+=W.g*X*S,x+=W.b*X*S;else if(F.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(F.sh.coefficients[D],X);else if(F.isDirectionalLight){const D=n.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*S),F.castShadow){const j=F.shadow,B=i.get(F);B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,r.directionalShadow[_]=B,r.directionalShadowMap[_]=$,r.directionalShadowMatrix[_]=F.shadow.matrix,y++}r.directional[_]=D,_++}else if(F.isSpotLight){const D=n.get(F);D.position.setFromMatrixPosition(F.matrixWorld),D.color.copy(W).multiplyScalar(X*S),D.distance=J,D.coneCos=Math.cos(F.angle),D.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),D.decay=F.decay,r.spot[c]=D;const j=F.shadow;if(F.map&&(r.spotLightMap[E]=F.map,E++,j.updateMatrices(F),F.castShadow&&P++),r.spotLightMatrix[c]=j.matrix,F.castShadow){const B=i.get(F);B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,r.spotShadow[c]=B,r.spotShadowMap[c]=$,R++}c++}else if(F.isRectAreaLight){const D=n.get(F);D.color.copy(W).multiplyScalar(X),D.halfWidth.set(F.width*.5,0,0),D.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=D,v++}else if(F.isPointLight){const D=n.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*S),D.distance=F.distance,D.decay=F.decay,F.castShadow){const j=F.shadow,B=i.get(F);B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,r.pointShadow[p]=B,r.pointShadowMap[p]=$,r.pointShadowMatrix[p]=F.shadow.matrix,T++}r.point[p]=D,p++}else if(F.isHemisphereLight){const D=n.get(F);D.skyColor.copy(F.color).multiplyScalar(X*S),D.groundColor.copy(F.groundColor).multiplyScalar(X*S),r.hemi[g]=D,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==_||w.pointLength!==p||w.spotLength!==c||w.rectAreaLength!==v||w.hemiLength!==g||w.numDirectionalShadows!==y||w.numPointShadows!==T||w.numSpotShadows!==R||w.numSpotMaps!==E)&&(r.directional.length=_,r.spot.length=c,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,w.directionalLength=_,w.pointLength=p,w.spotLength=c,w.rectAreaLength=v,w.hemiLength=g,w.numDirectionalShadows=y,w.numPointShadows=T,w.numSpotShadows=R,w.numSpotMaps=E,r.version=Tw++)}function u(f,h){let d=0,m=0,x=0,_=0,p=0;const c=h.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const y=f[v];if(y.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),d++}else if(y.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),x++}else if(y.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(c),o.identity(),a.copy(y.matrixWorld),a.premultiply(c),o.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function zp(t,e){const n=new Aw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function bw(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new zp(t,e),n.set(s,[l])):a>=o.length?(l=new zp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Rw extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=My,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cw extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dw(t,e,n){let i=new nd;const r=new _e,s=new _e,a=new rt,o=new Rw({depthPacking:Ey}),l=new Cw,u={},f=n.maxTextureSize,h={[Qn]:on,[on]:Qn,[bn]:bn},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Pw,fragmentShader:Lw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new wi;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let c=this.type;this.render=function(T,R,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const P=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),K=t.state;K.setBlending(gi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=c!==oi&&this.type===oi,F=c===oi&&this.type!==oi;for(let W=0,X=T.length;W<X;W++){const J=T[W],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const D=$.getFrameExtents();if(r.multiply(D),s.copy($.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/D.x),r.x=s.x*D.x,$.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/D.y),r.y=s.y*D.y,$.mapSize.y=s.y)),$.map===null||Q===!0||F===!0){const B=this.type!==oi?{minFilter:ot,magFilter:ot}:{};$.map!==null&&$.map.dispose(),$.map=new Mi(r.x,r.y,B),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const j=$.getViewportCount();for(let B=0;B<j;B++){const N=$.getViewport(B);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),K.viewport(a),$.updateMatrices(J,B),i=$.getFrustum(),y(R,E,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===oi&&v($,E),$.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(P,S,w)};function v(T,R){const E=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Mi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,E,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,E,m,_,null)}function g(T,R,E,P){let S=null;const w=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)S=w;else if(S=E.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=S.uuid,Q=R.uuid;let F=u[K];F===void 0&&(F={},u[K]=F);let W=F[Q];W===void 0&&(W=S.clone(),F[Q]=W),S=W}if(S.visible=R.visible,S.wireframe=R.wireframe,P===oi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=t.properties.get(S);K.light=E}return S}function y(T,R,E,P,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===oi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const Q=e.update(T),F=T.material;if(Array.isArray(F)){const W=Q.groups;for(let X=0,J=W.length;X<J;X++){const $=W[X],D=F[$.materialIndex];if(D&&D.visible){const j=g(T,D,P,S);t.renderBufferDirect(E,null,Q,j,T,$)}}}else if(F.visible){const W=g(T,F,P,S);t.renderBufferDirect(E,null,Q,W,T,null)}}const K=T.children;for(let Q=0,F=K.length;Q<F;Q++)y(K[Q],R,E,P,S)}}function Uw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const de=new rt;let V=null;const ne=new rt(0,0,0,0);return{setMask:function(ae){V!==ae&&!L&&(t.colorMask(ae,ae,ae,ae),V=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Fe,Xe,$e,ln){ln===!0&&(ae*=$e,Fe*=$e,Xe*=$e),de.set(ae,Fe,Xe,$e),ne.equals(de)===!1&&(t.clearColor(ae,Fe,Xe,$e),ne.copy(de))},reset:function(){L=!1,V=null,ne.set(-1,0,0,0)}}}function s(){let L=!1,de=null,V=null,ne=null;return{setTest:function(ae){ae?Te(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(ae){de!==ae&&!L&&(t.depthMask(ae),de=ae)},setFunc:function(ae){if(V!==ae){switch(ae){case Qx:t.depthFunc(t.NEVER);break;case Jx:t.depthFunc(t.ALWAYS);break;case ey:t.depthFunc(t.LESS);break;case Yc:t.depthFunc(t.LEQUAL);break;case ty:t.depthFunc(t.EQUAL);break;case ny:t.depthFunc(t.GEQUAL);break;case iy:t.depthFunc(t.GREATER);break;case ry:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}V=ae}},setLocked:function(ae){L=ae},setClear:function(ae){ne!==ae&&(t.clearDepth(ae),ne=ae)},reset:function(){L=!1,de=null,V=null,ne=null}}}function a(){let L=!1,de=null,V=null,ne=null,ae=null,Fe=null,Xe=null,$e=null,ln=null;return{setTest:function(Je){L||(Je?Te(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(Je){de!==Je&&!L&&(t.stencilMask(Je),de=Je)},setFunc:function(Je,jn,Xt){(V!==Je||ne!==jn||ae!==Xt)&&(t.stencilFunc(Je,jn,Xt),V=Je,ne=jn,ae=Xt)},setOp:function(Je,jn,Xt){(Fe!==Je||Xe!==jn||$e!==Xt)&&(t.stencilOp(Je,jn,Xt),Fe=Je,Xe=jn,$e=Xt)},setLocked:function(Je){L=Je},setClear:function(Je){ln!==Je&&(t.clearStencil(Je),ln=Je)},reset:function(){L=!1,de=null,V=null,ne=null,ae=null,Fe=null,Xe=null,$e=null,ln=null}}}const o=new r,l=new s,u=new a,f=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,_=[],p=null,c=!1,v=null,g=null,y=null,T=null,R=null,E=null,P=null,S=!1,w=null,K=null,Q=null,F=null,W=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,$=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(D)[1]),J=$>=1):D.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),J=$>=2);let j=null,B={};const N=t.getParameter(t.SCISSOR_BOX),z=t.getParameter(t.VIEWPORT),le=new rt().fromArray(N),ue=new rt().fromArray(z);function me(L,de,V,ne){const ae=new Uint8Array(4),Fe=t.createTexture();t.bindTexture(L,Fe),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<V;Xe++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(de+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Fe}const xe={};xe[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(t.DEPTH_TEST),l.setFunc(Yc),Ae(!1),Qe(Th),Te(t.CULL_FACE),Me(gi);function Te(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Se(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ge(L,de){return m[L]!==de?(t.bindFramebuffer(L,de),m[L]=de,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function Lt(L,de){let V=_,ne=!1;if(L)if(V=x.get(de),V===void 0&&(V=[],x.set(de,V)),L.isWebGLMultipleRenderTargets){const ae=L.texture;if(V.length!==ae.length||V[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,Xe=ae.length;Fe<Xe;Fe++)V[Fe]=t.COLOR_ATTACHMENT0+Fe;V.length=ae.length,ne=!0}}else V[0]!==t.COLOR_ATTACHMENT0&&(V[0]=t.COLOR_ATTACHMENT0,ne=!0);else V[0]!==t.BACK&&(V[0]=t.BACK,ne=!0);ne&&(n.isWebGL2?t.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function De(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const O={[Jr]:t.FUNC_ADD,[Hx]:t.FUNC_SUBTRACT,[Gx]:t.FUNC_REVERSE_SUBTRACT};if(i)O[Rh]=t.MIN,O[Ch]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(O[Rh]=L.MIN_EXT,O[Ch]=L.MAX_EXT)}const yt={[Vx]:t.ZERO,[Wx]:t.ONE,[jx]:t.SRC_COLOR,[pv]:t.SRC_ALPHA,[Zx]:t.SRC_ALPHA_SATURATE,[$x]:t.DST_COLOR,[Yx]:t.DST_ALPHA,[Xx]:t.ONE_MINUS_SRC_COLOR,[mv]:t.ONE_MINUS_SRC_ALPHA,[Kx]:t.ONE_MINUS_DST_COLOR,[qx]:t.ONE_MINUS_DST_ALPHA};function Me(L,de,V,ne,ae,Fe,Xe,$e){if(L===gi){c===!0&&(Se(t.BLEND),c=!1);return}if(c===!1&&(Te(t.BLEND),c=!0),L!==Bx){if(L!==v||$e!==S){if((g!==Jr||R!==Jr)&&(t.blendEquation(t.FUNC_ADD),g=Jr,R=Jr),$e)switch(L){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wh:t.blendFunc(t.ONE,t.ONE);break;case Ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,T=null,E=null,P=null,v=L,S=$e}return}ae=ae||de,Fe=Fe||V,Xe=Xe||ne,(de!==g||ae!==R)&&(t.blendEquationSeparate(O[de],O[ae]),g=de,R=ae),(V!==y||ne!==T||Fe!==E||Xe!==P)&&(t.blendFuncSeparate(yt[V],yt[ne],yt[Fe],yt[Xe]),y=V,T=ne,E=Fe,P=Xe),v=L,S=!1}function Pe(L,de){L.side===bn?Se(t.CULL_FACE):Te(t.CULL_FACE);let V=L.side===on;de&&(V=!V),Ae(V),L.blending===xs&&L.transparent===!1?Me(gi):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ne=L.stencilWrite;u.setTest(ne),ne&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){w!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),w=L)}function Qe(L){L!==Fx?(Te(t.CULL_FACE),L!==K&&(L===Th?t.cullFace(t.BACK):L===kx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),K=L}function Ie(L){L!==Q&&(J&&t.lineWidth(L),Q=L)}function Le(L,de,V){L?(Te(t.POLYGON_OFFSET_FILL),(F!==de||W!==V)&&(t.polygonOffset(de,V),F=de,W=V)):Se(t.POLYGON_OFFSET_FILL)}function Ve(L){L?Te(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function St(L){L===void 0&&(L=t.TEXTURE0+X-1),j!==L&&(t.activeTexture(L),j=L)}function bt(L,de,V){V===void 0&&(j===null?V=t.TEXTURE0+X-1:V=j);let ne=B[V];ne===void 0&&(ne={type:void 0,texture:void 0},B[V]=ne),(ne.type!==L||ne.texture!==de)&&(j!==V&&(t.activeTexture(V),j=V),t.bindTexture(L,de||xe[L]),ne.type=L,ne.texture=de)}function b(){const L=B[j];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){le.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function oe(L){ue.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function he(L,de){let V=h.get(de);V===void 0&&(V=new WeakMap,h.set(de,V));let ne=V.get(L);ne===void 0&&(ne=t.getUniformBlockIndex(de,L.name),V.set(L,ne))}function Ce(L,de){const ne=h.get(de).get(L);f.get(de)!==ne&&(t.uniformBlockBinding(de,ne,L.__bindingPointIndex),f.set(de,ne))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},j=null,B={},m={},x=new WeakMap,_=[],p=null,c=!1,v=null,g=null,y=null,T=null,R=null,E=null,P=null,S=!1,w=null,K=null,Q=null,F=null,W=null,le.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Te,disable:Se,bindFramebuffer:Ge,drawBuffers:Lt,useProgram:De,setBlending:Me,setMaterial:Pe,setFlipSided:Ae,setCullFace:Qe,setLineWidth:Ie,setPolygonOffset:Le,setScissorTest:Ve,activeTexture:St,bindTexture:bt,unbindTexture:b,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:C,texImage3D:Z,updateUBOMapping:he,uniformBlockBinding:Ce,texStorage2D:se,texStorage3D:G,texSubImage2D:ie,texSubImage3D:ee,compressedTexSubImage2D:re,compressedTexSubImage3D:ye,scissor:pe,viewport:oe,reset:He}}function Nw(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return c?new OffscreenCanvas(b,M):yl("canvas")}function g(b,M,H,ie){let ee=1;if((b.width>ie||b.height>ie)&&(ee=ie/Math.max(b.width,b.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=M?ef:Math.floor,ye=re(ee*b.width),se=re(ee*b.height);_===void 0&&(_=v(ye,se));const G=H?v(ye,se):_;return G.width=ye,G.height=se,G.getContext("2d").drawImage(b,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ye+"x"+se+")."),G}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return ip(b.width)&&ip(b.height)}function T(b){return o?!1:b.wrapS!==zn||b.wrapT!==zn||b.minFilter!==ot&&b.minFilter!==wn}function R(b,M){return b.generateMipmaps&&M&&b.minFilter!==ot&&b.minFilter!==wn}function E(b){t.generateMipmap(b)}function P(b,M,H,ie,ee=!1){if(o===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=M;return M===t.RED&&(H===t.FLOAT&&(re=t.R32F),H===t.HALF_FLOAT&&(re=t.R16F),H===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.R8UI),H===t.UNSIGNED_SHORT&&(re=t.R16UI),H===t.UNSIGNED_INT&&(re=t.R32UI),H===t.BYTE&&(re=t.R8I),H===t.SHORT&&(re=t.R16I),H===t.INT&&(re=t.R32I)),M===t.RG&&(H===t.FLOAT&&(re=t.RG32F),H===t.HALF_FLOAT&&(re=t.RG16F),H===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RGBA&&(H===t.FLOAT&&(re=t.RGBA32F),H===t.HALF_FLOAT&&(re=t.RGBA16F),H===t.UNSIGNED_BYTE&&(re=ie===nt&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)),(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(b,M,H){return R(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==ot&&b.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function w(b){return b===ot||b===Ph||b===yu?t.NEAREST:t.LINEAR}function K(b){const M=b.target;M.removeEventListener("dispose",K),F(M),M.isVideoTexture&&x.delete(M)}function Q(b){const M=b.target;M.removeEventListener("dispose",Q),X(M)}function F(b){const M=i.get(b);if(M.__webglInit===void 0)return;const H=b.source,ie=p.get(H);if(ie){const ee=ie[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&W(b),Object.keys(ie).length===0&&p.delete(H)}i.remove(b)}function W(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const H=b.source,ie=p.get(H);delete ie[M.__cacheKey],a.memory.textures--}function X(b){const M=b.texture,H=i.get(b),ie=i.get(M);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let re=0;re<H.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(H.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)t.deleteFramebuffer(H.__webglFramebuffer[ee]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,re=M.length;ee<re;ee++){const ye=i.get(M[ee]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(b)}let J=0;function $(){J=0}function D(){const b=J;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),J+=1,b}function j(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function B(b,M){const H=i.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ie=b.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(H,b,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function N(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ge(H,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function z(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ge(H,b,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function le(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Lt(H,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const ue={[$c]:t.REPEAT,[zn]:t.CLAMP_TO_EDGE,[Kc]:t.MIRRORED_REPEAT},me={[ot]:t.NEAREST,[Ph]:t.NEAREST_MIPMAP_NEAREST,[yu]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[dy]:t.LINEAR_MIPMAP_NEAREST,[Ua]:t.LINEAR_MIPMAP_LINEAR},xe={[Ay]:t.NEVER,[Uy]:t.ALWAYS,[by]:t.LESS,[Cy]:t.LEQUAL,[Ry]:t.EQUAL,[Dy]:t.GEQUAL,[Py]:t.GREATER,[Ly]:t.NOTEQUAL};function Te(b,M,H){if(H?(t.texParameteri(b,t.TEXTURE_WRAP_S,ue[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ue[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ue[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,me[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,me[M.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==zn||M.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==ot&&M.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ot||M.minFilter!==yu&&M.minFilter!==Ua||M.type===hi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ps&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Se(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",K));const ie=M.source;let ee=p.get(ie);ee===void 0&&(ee={},p.set(ie,ee));const re=j(M);if(re!==b.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[re].usedTimes++;const ye=ee[b.__cacheKey];ye!==void 0&&(ee[b.__cacheKey].usedTimes--,ye.usedTimes===0&&W(M)),b.__cacheKey=re,b.__webglTexture=ee[re].texture}return H}function Ge(b,M,H){let ie=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=Se(b,M),re=M.source;n.bindTexture(ie,b.__webglTexture,t.TEXTURE0+H);const ye=i.get(re);if(re.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const se=T(M)&&y(M.image)===!1;let G=g(M.image,se,!1,f);G=bt(M,G);const C=y(G)||o,Z=s.convert(M.format,M.colorSpace);let pe=s.convert(M.type),oe=P(M.internalFormat,Z,pe,M.colorSpace,M.isVideoTexture);Te(ie,M,C);let he;const Ce=M.mipmaps,He=o&&M.isVideoTexture!==!0,L=ye.__version===void 0||ee===!0,de=S(M,G,C);if(M.isDepthTexture)oe=t.DEPTH_COMPONENT,o?M.type===hi?oe=t.DEPTH_COMPONENT32F:M.type===ki?oe=t.DEPTH_COMPONENT24:M.type===vr?oe=t.DEPTH24_STENCIL8:oe=t.DEPTH_COMPONENT16:M.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===_r&&oe===t.DEPTH_COMPONENT&&M.type!==ed&&M.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ki,pe=s.convert(M.type)),M.format===Ls&&oe===t.DEPTH_COMPONENT&&(oe=t.DEPTH_STENCIL,M.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=vr,pe=s.convert(M.type))),L&&(He?n.texStorage2D(t.TEXTURE_2D,1,oe,G.width,G.height):n.texImage2D(t.TEXTURE_2D,0,oe,G.width,G.height,0,Z,pe,null));else if(M.isDataTexture)if(Ce.length>0&&C){He&&L&&n.texStorage2D(t.TEXTURE_2D,de,oe,Ce[0].width,Ce[0].height);for(let V=0,ne=Ce.length;V<ne;V++)he=Ce[V],He?n.texSubImage2D(t.TEXTURE_2D,V,0,0,he.width,he.height,Z,pe,he.data):n.texImage2D(t.TEXTURE_2D,V,oe,he.width,he.height,0,Z,pe,he.data);M.generateMipmaps=!1}else He?(L&&n.texStorage2D(t.TEXTURE_2D,de,oe,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,G.width,G.height,Z,pe,G.data)):n.texImage2D(t.TEXTURE_2D,0,oe,G.width,G.height,0,Z,pe,G.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,oe,Ce[0].width,Ce[0].height,G.depth);for(let V=0,ne=Ce.length;V<ne;V++)he=Ce[V],M.format!==Bn?Z!==null?He?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,he.width,he.height,G.depth,Z,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,oe,he.width,he.height,G.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,he.width,he.height,G.depth,Z,pe,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,oe,he.width,he.height,G.depth,0,Z,pe,he.data)}else{He&&L&&n.texStorage2D(t.TEXTURE_2D,de,oe,Ce[0].width,Ce[0].height);for(let V=0,ne=Ce.length;V<ne;V++)he=Ce[V],M.format!==Bn?Z!==null?He?n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,he.width,he.height,Z,he.data):n.compressedTexImage2D(t.TEXTURE_2D,V,oe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?n.texSubImage2D(t.TEXTURE_2D,V,0,0,he.width,he.height,Z,pe,he.data):n.texImage2D(t.TEXTURE_2D,V,oe,he.width,he.height,0,Z,pe,he.data)}else if(M.isDataArrayTexture)He?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,oe,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Z,pe,G.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,oe,G.width,G.height,G.depth,0,Z,pe,G.data);else if(M.isData3DTexture)He?(L&&n.texStorage3D(t.TEXTURE_3D,de,oe,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Z,pe,G.data)):n.texImage3D(t.TEXTURE_3D,0,oe,G.width,G.height,G.depth,0,Z,pe,G.data);else if(M.isFramebufferTexture){if(L)if(He)n.texStorage2D(t.TEXTURE_2D,de,oe,G.width,G.height);else{let V=G.width,ne=G.height;for(let ae=0;ae<de;ae++)n.texImage2D(t.TEXTURE_2D,ae,oe,V,ne,0,Z,pe,null),V>>=1,ne>>=1}}else if(Ce.length>0&&C){He&&L&&n.texStorage2D(t.TEXTURE_2D,de,oe,Ce[0].width,Ce[0].height);for(let V=0,ne=Ce.length;V<ne;V++)he=Ce[V],He?n.texSubImage2D(t.TEXTURE_2D,V,0,0,Z,pe,he):n.texImage2D(t.TEXTURE_2D,V,oe,Z,pe,he);M.generateMipmaps=!1}else He?(L&&n.texStorage2D(t.TEXTURE_2D,de,oe,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z,pe,G)):n.texImage2D(t.TEXTURE_2D,0,oe,Z,pe,G);R(M,C)&&E(ie),ye.__version=re.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Lt(b,M,H){if(M.image.length!==6)return;const ie=Se(b,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+H);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,G=[];for(let V=0;V<6;V++)!ye&&!se?G[V]=g(M.image[V],!1,!0,u):G[V]=se?M.image[V].image:M.image[V],G[V]=bt(M,G[V]);const C=G[0],Z=y(C)||o,pe=s.convert(M.format,M.colorSpace),oe=s.convert(M.type),he=P(M.internalFormat,pe,oe,M.colorSpace),Ce=o&&M.isVideoTexture!==!0,He=re.__version===void 0||ie===!0;let L=S(M,C,Z);Te(t.TEXTURE_CUBE_MAP,M,Z);let de;if(ye){Ce&&He&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,he,C.width,C.height);for(let V=0;V<6;V++){de=G[V].mipmaps;for(let ne=0;ne<de.length;ne++){const ae=de[ne];M.format!==Bn?pe!==null?Ce?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,0,0,ae.width,ae.height,pe,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,he,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,0,0,ae.width,ae.height,pe,oe,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,he,ae.width,ae.height,0,pe,oe,ae.data)}}}else{de=M.mipmaps,Ce&&He&&(de.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,he,G[0].width,G[0].height));for(let V=0;V<6;V++)if(se){Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,G[V].width,G[V].height,pe,oe,G[V].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,he,G[V].width,G[V].height,0,pe,oe,G[V].data);for(let ne=0;ne<de.length;ne++){const Fe=de[ne].image[V].image;Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,0,0,Fe.width,Fe.height,pe,oe,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,he,Fe.width,Fe.height,0,pe,oe,Fe.data)}}else{Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,pe,oe,G[V]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,he,pe,oe,G[V]);for(let ne=0;ne<de.length;ne++){const ae=de[ne];Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,0,0,pe,oe,ae.image[V]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,he,pe,oe,ae.image[V])}}}R(M,Z)&&E(t.TEXTURE_CUBE_MAP),re.__version=ee.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function De(b,M,H,ie,ee,re){const ye=s.convert(H.format,H.colorSpace),se=s.convert(H.type),G=P(H.internalFormat,ye,se,H.colorSpace);if(!i.get(M).__hasExternalTextures){const Z=Math.max(1,M.width>>re),pe=Math.max(1,M.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,G,Z,pe,M.depth,0,ye,se,null):n.texImage2D(ee,re,G,Z,pe,0,ye,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(H).__webglTexture,0,Le(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(H).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(b,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let ie=t.DEPTH_COMPONENT16;if(H||Ve(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===hi?ie=t.DEPTH_COMPONENT32F:ee.type===ki&&(ie=t.DEPTH_COMPONENT24));const re=Le(M);Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Le(M);H&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],ye=s.convert(re.format,re.colorSpace),se=s.convert(re.type),G=P(re.internalFormat,ye,se,re.colorSpace),C=Le(M);H&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,C,G,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C,G,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,G,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function yt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,ee=Le(M);if(M.depthTexture.format===_r)Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Ls)Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Me(b){const M=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");yt(M.__webglFramebuffer,b)}else if(H){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=t.createRenderbuffer(),O(M.__webglDepthbuffer[ie],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),O(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(b,M,H){const ie=i.get(b);M!==void 0&&De(ie.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Me(b)}function Ae(b){const M=b.texture,H=i.get(b),ie=i.get(M);b.addEventListener("dispose",Q),b.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=M.version,a.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ye=y(b)||o;if(ee){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let G=0;G<M.mipmaps.length;G++)H.__webglFramebuffer[se][G]=t.createFramebuffer()}else H.__webglFramebuffer[se]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)H.__webglFramebuffer[se]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const se=b.texture;for(let G=0,C=se.length;G<C;G++){const Z=i.get(se[G]);Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Ve(b)===!1){const se=re?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let G=0;G<se.length;G++){const C=se[G];H.__webglColorRenderbuffer[G]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[G]);const Z=s.convert(C.format,C.colorSpace),pe=s.convert(C.type),oe=P(C.internalFormat,Z,pe,C.colorSpace,b.isXRRenderTarget===!0),he=Le(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,oe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,H.__webglColorRenderbuffer[G])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),O(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Te(t.TEXTURE_CUBE_MAP,M,ye);for(let se=0;se<6;se++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let G=0;G<M.mipmaps.length;G++)De(H.__webglFramebuffer[se][G],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,G);else De(H.__webglFramebuffer[se],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);R(M,ye)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const se=b.texture;for(let G=0,C=se.length;G<C;G++){const Z=se[G],pe=i.get(Z);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),Te(t.TEXTURE_2D,Z,ye),De(H.__webglFramebuffer,b,Z,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,0),R(Z,ye)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?se=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,ie.__webglTexture),Te(se,M,ye),o&&M.mipmaps&&M.mipmaps.length>0)for(let G=0;G<M.mipmaps.length;G++)De(H.__webglFramebuffer[G],b,M,t.COLOR_ATTACHMENT0,se,G);else De(H.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,se,0);R(M,ye)&&E(se),n.unbindTexture()}b.depthBuffer&&Me(b)}function Qe(b){const M=y(b)||o,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0,ee=H.length;ie<ee;ie++){const re=H[ie];if(R(re,M)){const ye=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(re).__webglTexture;n.bindTexture(ye,se),E(ye),n.unbindTexture()}}}function Ie(b){if(o&&b.samples>0&&Ve(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ie=b.height;let ee=t.COLOR_BUFFER_BIT;const re=[],ye=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(b),G=b.isWebGLMultipleRenderTargets===!0;if(G)for(let C=0;C<M.length;C++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+C,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+C,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let C=0;C<M.length;C++){re.push(t.COLOR_ATTACHMENT0+C),b.depthBuffer&&re.push(ye);const Z=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Z===!1&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),G&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[C]),Z===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),G){const pe=i.get(M[C]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,H,ie,0,0,H,ie,ee,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),G)for(let C=0;C<M.length;C++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+C,t.RENDERBUFFER,se.__webglColorRenderbuffer[C]);const Z=i.get(M[C]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+C,t.TEXTURE_2D,Z,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(h,b.samples)}function Ve(b){const M=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function St(b){const M=a.render.frame;x.get(b)!==M&&(x.set(b,M),b.update())}function bt(b,M){const H=b.colorSpace,ie=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Qc||H!==Jn&&H!==yr&&(H===nt||H===zl?o===!1?e.has("EXT_sRGB")===!0&&ie===Bn?(b.format=Qc,b.minFilter=wn,b.generateMipmaps=!1):M=bv.sRGBToLinear(M):(ie!==Bn||ee!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=le,this.rebindTextures=Pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ve}const Iw=0,Mt=1;function Ow(t,e,n){const i=n.isWebGL2;function r(s,a=yr){let o;const l=a===nt||a===zl?Mt:Iw;if(s===qi)return t.UNSIGNED_BYTE;if(s===xv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===yv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===hy)return t.BYTE;if(s===py)return t.SHORT;if(s===ed)return t.UNSIGNED_SHORT;if(s===_v)return t.INT;if(s===ki)return t.UNSIGNED_INT;if(s===hi)return t.FLOAT;if(s===Ps)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===my)return t.ALPHA;if(s===Bn)return t.RGBA;if(s===gy)return t.LUMINANCE;if(s===vy)return t.LUMINANCE_ALPHA;if(s===_r)return t.DEPTH_COMPONENT;if(s===Ls)return t.DEPTH_STENCIL;if(s===Qc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===_y)return t.RED;if(s===Sv)return t.RED_INTEGER;if(s===xy)return t.RG;if(s===Mv)return t.RG_INTEGER;if(s===Ev)return t.RGBA_INTEGER;if(s===Su||s===Mu||s===Eu||s===Tu)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Su)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Eu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Su)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Eu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Dh||s===Uh||s===Nh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yy)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ih||s===Oh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ih)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Oh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fh||s===kh||s===zh||s===Bh||s===Hh||s===Gh||s===Vh||s===Wh||s===jh||s===Xh||s===Yh||s===qh||s===$h||s===Kh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Fh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$h)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kh)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wu||s===Zh||s===Qh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===wu)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sy||s===Jh||s===ep||s===tp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===wu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Jh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Fw extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class It extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kw={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),c=this._getHandJoint(u,_);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new It;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Xv extends Vt{constructor(e,n,i,r,s,a,o,l,u,f){if(f=f!==void 0?f:_r,f!==_r&&f!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===_r&&(i=ki),i===void 0&&f===Ls&&(i=vr),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:ot,this.minFilter=l!==void 0?l:ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zw extends Cr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,x=null;const _=n.getContextAttributes();let p=null,c=null;const v=[],g=[],y=new hn;y.layers.enable(1),y.viewport=new rt;const T=new hn;T.layers.enable(2),T.viewport=new rt;const R=[y,T],E=new Fw;E.layers.enable(1),E.layers.enable(2);let P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=v[N];return z===void 0&&(z=new qu,v[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=v[N];return z===void 0&&(z=new qu,v[N]=z),z.getGripSpace()},this.getHand=function(N){let z=v[N];return z===void 0&&(z=new qu,v[N]=z),z.getHandSpace()};function w(N){const z=g.indexOf(N.inputSource);if(z===-1)return;const le=v[z];le!==void 0&&(le.update(N.inputSource,N.frame,u||a),le.dispatchEvent({type:N.type,data:N.inputSource}))}function K(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Q);for(let N=0;N<v.length;N++){const z=g[N];z!==null&&(g[N]=null,v[N].disconnect(z))}P=null,S=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,c=null,B.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,z),r.updateRenderState({baseLayer:m}),c=new Mi(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let z=null,le=null,ue=null;_.depth&&(ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,z=_.stencil?Ls:_r,le=_.stencil?vr:ki);const me={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(me),r.updateRenderState({layers:[d]}),c=new Mi(d.textureWidth,d.textureHeight,{format:Bn,type:qi,depthTexture:new Xv(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const xe=e.properties.get(c);xe.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(N){for(let z=0;z<N.removed.length;z++){const le=N.removed[z],ue=g.indexOf(le);ue>=0&&(g[ue]=null,v[ue].disconnect(le))}for(let z=0;z<N.added.length;z++){const le=N.added[z];let ue=g.indexOf(le);if(ue===-1){for(let xe=0;xe<v.length;xe++)if(xe>=g.length){g.push(le),ue=xe;break}else if(g[xe]===null){g[xe]=le,ue=xe;break}if(ue===-1)break}const me=v[ue];me&&me.connect(le)}}const F=new U,W=new U;function X(N,z,le){F.setFromMatrixPosition(z.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const ue=F.distanceTo(W),me=z.projectionMatrix.elements,xe=le.projectionMatrix.elements,Te=me[14]/(me[10]-1),Se=me[14]/(me[10]+1),Ge=(me[9]+1)/me[5],Lt=(me[9]-1)/me[5],De=(me[8]-1)/me[0],O=(xe[8]+1)/xe[0],yt=Te*De,Me=Te*O,Pe=ue/(-De+O),Ae=Pe*-De;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ae),N.translateZ(Pe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Qe=Te+Pe,Ie=Se+Pe,Le=yt-Ae,Ve=Me+(ue-Ae),St=Ge*Se/Ie*Qe,bt=Lt*Se/Ie*Qe;N.projectionMatrix.makePerspective(Le,Ve,St,bt,Qe,Ie),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function J(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;E.near=T.near=y.near=N.near,E.far=T.far=y.far=N.far,(P!==E.near||S!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,S=E.far);const z=N.parent,le=E.cameras;J(E,z);for(let ue=0;ue<le.length;ue++)J(le[ue],z);le.length===2?X(E,y,T):E.projectionMatrix.copy(y.projectionMatrix),$(N,E,z)};function $(N,z,le){le===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(le.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Jc*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let D=null;function j(N,z){if(f=z.getViewerPose(u||a),x=z,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ue=!1;le.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let me=0;me<le.length;me++){const xe=le[me];let Te=null;if(m!==null)Te=m.getViewport(xe);else{const Ge=h.getViewSubImage(d,xe);Te=Ge.viewport,me===0&&(e.setRenderTargetTextures(c,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(c))}let Se=R[me];Se===void 0&&(Se=new hn,Se.layers.enable(me),Se.viewport=new rt,R[me]=Se),Se.matrix.fromArray(xe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(xe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Te.x,Te.y,Te.width,Te.height),me===0&&(E.matrix.copy(Se.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(Se)}}for(let le=0;le<v.length;le++){const ue=g[le],me=v[le];ue!==null&&me!==void 0&&me.update(ue,z,u||a)}D&&D(N,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),x=null}const B=new Bv;B.setAnimationLoop(j),this.setAnimationLoop=function(N){D=N},this.dispose=function(){}}}function Bw(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,Ov(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,v,g,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,y)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),_(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(a(p,c),c.isLineDashedMaterial&&o(p,c)):c.isPointsMaterial?l(p,c,v,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===on&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===on&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const v=e.get(c).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function a(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function o(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,v,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*v,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,v){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===on&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function _(p,c){const v=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hw(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function u(v,g){let y=r[v.id];y===void 0&&(x(v),y=f(v),r[v.id]=y,v.addEventListener("dispose",p));const T=g.program;i.updateUBOMapping(v,T);const R=e.render.frame;s[v.id]!==R&&(d(v),s[v.id]=R)}function f(v){const g=h();v.__bindingPointIndex=g;const y=t.createBuffer(),T=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],y=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,E=y.length;R<E;R++){const P=y[R];if(m(P,R,T)===!0){const S=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let Q=0;Q<w.length;Q++){const F=w[Q],W=_(F);typeof F=="number"?(P.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,S+K,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=F.elements[0],P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=F.elements[0],P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=F.elements[0]):(F.toArray(P.__data,K),K+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,y){const T=v.value;if(y[g]===void 0){if(typeof T=="number")y[g]=T;else{const R=Array.isArray(T)?T:[T],E=[];for(let P=0;P<R.length;P++)E.push(R[P].clone());y[g]=E}return!0}else if(typeof T=="number"){if(y[g]!==T)return y[g]=T,!0}else{const R=Array.isArray(y[g])?y[g]:[y[g]],E=Array.isArray(T)?T:[T];for(let P=0;P<R.length;P++){const S=R[P];if(S.equals(E[P])===!1)return S.copy(E[P]),!0}}return!1}function x(v){const g=v.uniforms;let y=0;const T=16;let R=0;for(let E=0,P=g.length;E<P;E++){const S=g[E],w={boundary:0,storage:0},K=Array.isArray(S.value)?S.value:[S.value];for(let Q=0,F=K.length;Q<F;Q++){const W=K[Q],X=_(W);w.boundary+=X.boundary,w.storage+=X.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,E>0){R=y%T;const Q=T-R;R!==0&&Q-w.boundary<0&&(y+=T-R,S.__offset=y)}y+=w.storage}return R=y%T,R>0&&(y+=T-R),v.__size=y,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:c}}class Yv{constructor(e={}){const{canvas:n=Oy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const g=this;let y=!1,T=0,R=0,E=null,P=-1,S=null;const w=new rt,K=new rt;let Q=null;const F=new je(0);let W=0,X=n.width,J=n.height,$=1,D=null,j=null;const B=new rt(0,0,X,J),N=new rt(0,0,X,J);let z=!1;const le=new nd;let ue=!1,me=!1,xe=null;const Te=new mt,Se=new _e,Ge=new U,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return E===null?$:1}let O=i;function yt(A,I){for(let Y=0;Y<A.length;Y++){const k=A[Y],q=n.getContext(k,I);if(q!==null)return q}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",ne,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),O=yt(I,A),O===null)throw yt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,Pe,Ae,Qe,Ie,Le,Ve,St,bt,b,M,H,ie,ee,re,ye,se,G,C,Z,pe,oe,he,Ce;function He(){Me=new QE(O),Pe=new XE(O,Me,e),Me.init(Pe),oe=new Ow(O,Me,Pe),Ae=new Uw(O,Me,Pe),Qe=new tT(O),Ie=new xw,Le=new Nw(O,Me,Ae,Ie,Pe,oe,Qe),Ve=new qE(g),St=new ZE(g),bt=new fS(O,Pe),he=new WE(O,Me,bt,Pe),b=new JE(O,bt,Qe,he),M=new sT(O,b,bt,Qe),C=new rT(O,Pe,Le),ye=new YE(Ie),H=new _w(g,Ve,St,Me,Pe,he,ye),ie=new Bw(g,Ie),ee=new Sw,re=new bw(Me,Pe),G=new VE(g,Ve,St,Ae,M,d,l),se=new Dw(g,M,Pe),Ce=new Hw(O,Qe,Pe,Ae),Z=new jE(O,Me,Qe,Pe),pe=new eT(O,Me,Qe,Pe),Qe.programs=H.programs,g.capabilities=Pe,g.extensions=Me,g.properties=Ie,g.renderLists=ee,g.shadowMap=se,g.state=Ae,g.info=Qe}He();const L=new zw(g,O);this.xr=L,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(X,J,!1))},this.getSize=function(A){return A.set(X,J)},this.setSize=function(A,I,Y=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,J=I,n.width=Math.floor(A*$),n.height=Math.floor(I*$),Y===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(X*$,J*$).floor()},this.setDrawingBufferSize=function(A,I,Y){X=A,J=I,$=Y,n.width=Math.floor(A*Y),n.height=Math.floor(I*Y),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,I,Y,k){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,I,Y,k),Ae.viewport(w.copy(B).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,I,Y,k){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,I,Y,k),Ae.scissor(K.copy(N).multiplyScalar($).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(A){Ae.setScissorTest(z=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(A=!0,I=!0,Y=!0){let k=0;if(A){let q=!1;if(E!==null){const ve=E.texture.format;q=ve===Ev||ve===Mv||ve===Sv}if(q){const ve=E.texture.type,Ee=ve===qi||ve===ki||ve===ed||ve===vr||ve===xv||ve===yv,be=G.getClearColor(),Re=G.getClearAlpha(),ke=be.r,we=be.g,Ue=be.b;Ee?(m[0]=ke,m[1]=we,m[2]=Ue,m[3]=Re,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=ke,x[1]=we,x[2]=Ue,x[3]=Re,O.clearBufferiv(O.COLOR,0,x))}else k|=O.COLOR_BUFFER_BIT}I&&(k|=O.DEPTH_BUFFER_BIT),Y&&(k|=O.STENCIL_BUFFER_BIT),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),ee.dispose(),re.dispose(),Ie.dispose(),Ve.dispose(),St.dispose(),M.dispose(),he.dispose(),Ce.dispose(),H.dispose(),L.dispose(),L.removeEventListener("sessionstart",Je),L.removeEventListener("sessionend",jn),xe&&(xe.dispose(),xe=null),Xt.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Qe.autoReset,I=se.enabled,Y=se.autoUpdate,k=se.needsUpdate,q=se.type;He(),Qe.autoReset=A,se.enabled=I,se.autoUpdate=Y,se.needsUpdate=k,se.type=q}function ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const I=A.target;I.removeEventListener("dispose",ae),Fe(I)}function Fe(A){Xe(A),Ie.remove(A)}function Xe(A){const I=Ie.get(A).programs;I!==void 0&&(I.forEach(function(Y){H.releaseProgram(Y)}),A.isShaderMaterial&&H.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,Y,k,q,ve){I===null&&(I=Lt);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,be=e_(A,I,Y,k,q);Ae.setMaterial(k,Ee);let Re=Y.index,ke=1;if(k.wireframe===!0){if(Re=b.getWireframeAttribute(Y),Re===void 0)return;ke=2}const we=Y.drawRange,Ue=Y.attributes.position;let ct=we.start*ke,dt=(we.start+we.count)*ke;ve!==null&&(ct=Math.max(ct,ve.start*ke),dt=Math.min(dt,(ve.start+ve.count)*ke)),Re!==null?(ct=Math.max(ct,0),dt=Math.min(dt,Re.count)):Ue!=null&&(ct=Math.max(ct,0),dt=Math.min(dt,Ue.count));const xn=dt-ct;if(xn<0||xn===1/0)return;he.setup(q,k,be,Y,Re);let ei,gt=Z;if(Re!==null&&(ei=bt.get(Re),gt=pe,gt.setIndex(ei)),q.isMesh)k.wireframe===!0?(Ae.setLineWidth(k.wireframeLinewidth*De()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(q.isLine){let Be=k.linewidth;Be===void 0&&(Be=1),Ae.setLineWidth(Be*De()),q.isLineSegments?gt.setMode(O.LINES):q.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else q.isPoints?gt.setMode(O.POINTS):q.isSprite&&gt.setMode(O.TRIANGLES);if(q.isInstancedMesh)gt.renderInstances(ct,xn,q.count);else if(Y.isInstancedBufferGeometry){const Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Wl=Math.min(Y.instanceCount,Be);gt.renderInstances(ct,xn,Wl)}else gt.render(ct,xn)},this.compile=function(A,I){function Y(k,q,ve){k.transparent===!0&&k.side===bn&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,Ga(k,q,ve),k.side=Qn,k.needsUpdate=!0,Ga(k,q,ve),k.side=bn):Ga(k,q,ve)}p=re.get(A),p.init(),v.push(p),A.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(g._useLegacyLights),A.traverse(function(k){const q=k.material;if(q)if(Array.isArray(q))for(let ve=0;ve<q.length;ve++){const Ee=q[ve];Y(Ee,A,k)}else Y(q,A,k)}),v.pop(),p=null};let $e=null;function ln(A){$e&&$e(A)}function Je(){Xt.stop()}function jn(){Xt.start()}const Xt=new Bv;Xt.setAnimationLoop(ln),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(A){$e=A,L.setAnimationLoop(A),A===null?Xt.stop():Xt.start()},L.addEventListener("sessionstart",Je),L.addEventListener("sessionend",jn),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(I),I=L.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,I,E),p=re.get(A,v.length),p.init(),v.push(p),Te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),le.setFromProjectionMatrix(Te),me=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,me),_=ee.get(A,c.length),_.init(),c.push(_),od(A,I,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(D,j),this.info.render.frame++,ue===!0&&ye.beginShadows();const Y=p.state.shadowsArray;if(se.render(Y,A,I),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(_,A),p.setupLights(g._useLegacyLights),I.isArrayCamera){const k=I.cameras;for(let q=0,ve=k.length;q<ve;q++){const Ee=k[q];ld(_,A,Ee,Ee.viewport)}}else ld(_,A,I);E!==null&&(Le.updateMultisampleRenderTarget(E),Le.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(g,A,I),he.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,c.pop(),c.length>0?_=c[c.length-1]:_=null};function od(A,I,Y,k){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){k&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Ee=M.update(A),be=A.material;be.visible&&_.push(A,Ee,be,Y,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){const Ee=M.update(A),be=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ge.copy(Ee.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(be)){const Re=Ee.groups;for(let ke=0,we=Re.length;ke<we;ke++){const Ue=Re[ke],ct=be[Ue.materialIndex];ct&&ct.visible&&_.push(A,Ee,ct,Y,Ge.z,Ue)}}else be.visible&&_.push(A,Ee,be,Y,Ge.z,null)}}const ve=A.children;for(let Ee=0,be=ve.length;Ee<be;Ee++)od(ve[Ee],I,Y,k)}function ld(A,I,Y,k){const q=A.opaque,ve=A.transmissive,Ee=A.transparent;p.setupLightsView(Y),ue===!0&&ye.setGlobalState(g.clippingPlanes,Y),ve.length>0&&Jv(q,ve,I,Y),k&&Ae.viewport(w.copy(k)),q.length>0&&Ha(q,I,Y),ve.length>0&&Ha(ve,I,Y),Ee.length>0&&Ha(Ee,I,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Jv(A,I,Y,k){const q=Pe.isWebGL2;xe===null&&(xe=new Mi(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ps:qi,minFilter:Ua,samples:q?4:0})),g.getDrawingBufferSize(Se),q?xe.setSize(Se.x,Se.y):xe.setSize(ef(Se.x),ef(Se.y));const ve=g.getRenderTarget();g.setRenderTarget(xe),g.getClearColor(F),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear();const Ee=g.toneMapping;g.toneMapping=Yi,Ha(A,Y,k),Le.updateMultisampleRenderTarget(xe),Le.updateRenderTargetMipmap(xe);let be=!1;for(let Re=0,ke=I.length;Re<ke;Re++){const we=I[Re],Ue=we.object,ct=we.geometry,dt=we.material,xn=we.group;if(dt.side===bn&&Ue.layers.test(k.layers)){const ei=dt.side;dt.side=on,dt.needsUpdate=!0,ud(Ue,Y,k,ct,dt,xn),dt.side=ei,dt.needsUpdate=!0,be=!0}}be===!0&&(Le.updateMultisampleRenderTarget(xe),Le.updateRenderTargetMipmap(xe)),g.setRenderTarget(ve),g.setClearColor(F,W),g.toneMapping=Ee}function Ha(A,I,Y){const k=I.isScene===!0?I.overrideMaterial:null;for(let q=0,ve=A.length;q<ve;q++){const Ee=A[q],be=Ee.object,Re=Ee.geometry,ke=k===null?Ee.material:k,we=Ee.group;be.layers.test(Y.layers)&&ud(be,I,Y,Re,ke,we)}}function ud(A,I,Y,k,q,ve){A.onBeforeRender(g,I,Y,k,q,ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(g,I,Y,k,A,ve),q.transparent===!0&&q.side===bn&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,g.renderBufferDirect(Y,I,k,q,A,ve),q.side=Qn,q.needsUpdate=!0,g.renderBufferDirect(Y,I,k,q,A,ve),q.side=bn):g.renderBufferDirect(Y,I,k,q,A,ve),A.onAfterRender(g,I,Y,k,q,ve)}function Ga(A,I,Y){I.isScene!==!0&&(I=Lt);const k=Ie.get(A),q=p.state.lights,ve=p.state.shadowsArray,Ee=q.state.version,be=H.getParameters(A,q.state,ve,I,Y),Re=H.getProgramCacheKey(be);let ke=k.programs;k.environment=A.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(A.isMeshStandardMaterial?St:Ve).get(A.envMap||k.environment),ke===void 0&&(A.addEventListener("dispose",ae),ke=new Map,k.programs=ke);let we=ke.get(Re);if(we!==void 0){if(k.currentProgram===we&&k.lightsStateVersion===Ee)return cd(A,be),we}else be.uniforms=H.getUniforms(A),A.onBuild(Y,be,g),A.onBeforeCompile(be,g),we=H.acquireProgram(be,Re),ke.set(Re,we),k.uniforms=be.uniforms;const Ue=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ye.uniform),cd(A,be),k.needsLights=n_(A),k.lightsStateVersion=Ee,k.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix);const ct=we.getUniforms(),dt=Xo.seqWithValue(ct.seq,Ue);return k.currentProgram=we,k.uniformsList=dt,we}function cd(A,I){const Y=Ie.get(A);Y.outputColorSpace=I.outputColorSpace,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function e_(A,I,Y,k,q){I.isScene!==!0&&(I=Lt),Le.resetTextureUnits();const ve=I.fog,Ee=k.isMeshStandardMaterial?I.environment:null,be=E===null?g.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Jn,Re=(k.isMeshStandardMaterial?St:Ve).get(k.envMap||Ee),ke=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,we=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,dt=!!Y.morphAttributes.color;let xn=Yi;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(xn=g.toneMapping);const ei=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=ei!==void 0?ei.length:0,Be=Ie.get(k),Wl=p.state.lights;if(ue===!0&&(me===!0||A!==S)){const un=A===S&&k.id===P;ye.setState(k,A,un)}let vt=!1;k.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Wl.state.version||Be.outputColorSpace!==be||q.isInstancedMesh&&Be.instancing===!1||!q.isInstancedMesh&&Be.instancing===!0||q.isSkinnedMesh&&Be.skinning===!1||!q.isSkinnedMesh&&Be.skinning===!0||q.isInstancedMesh&&Be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Be.instancingColor===!1&&q.instanceColor!==null||Be.envMap!==Re||k.fog===!0&&Be.fog!==ve||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ye.numPlanes||Be.numIntersection!==ye.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==we||Be.morphTargets!==Ue||Be.morphNormals!==ct||Be.morphColors!==dt||Be.toneMapping!==xn||Pe.isWebGL2===!0&&Be.morphTargetsCount!==gt)&&(vt=!0):(vt=!0,Be.__version=k.version);let tr=Be.currentProgram;vt===!0&&(tr=Ga(k,I,q));let fd=!1,ks=!1,jl=!1;const Yt=tr.getUniforms(),nr=Be.uniforms;if(Ae.useProgram(tr.program)&&(fd=!0,ks=!0,jl=!0),k.id!==P&&(P=k.id,ks=!0),fd||S!==A){Yt.setValue(O,"projectionMatrix",A.projectionMatrix),Yt.setValue(O,"viewMatrix",A.matrixWorldInverse);const un=Yt.map.cameraPosition;un!==void 0&&un.setValue(O,Ge.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Yt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Yt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,ks=!0,jl=!0)}if(q.isSkinnedMesh){Yt.setOptional(O,q,"bindMatrix"),Yt.setOptional(O,q,"bindMatrixInverse");const un=q.skeleton;un&&(Pe.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Yt.setValue(O,"boneTexture",un.boneTexture,Le),Yt.setValue(O,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xl=Y.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0&&Pe.isWebGL2===!0)&&C.update(q,Y,tr),(ks||Be.receiveShadow!==q.receiveShadow)&&(Be.receiveShadow=q.receiveShadow,Yt.setValue(O,"receiveShadow",q.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(nr.envMap.value=Re,nr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ks&&(Yt.setValue(O,"toneMappingExposure",g.toneMappingExposure),Be.needsLights&&t_(nr,jl),ve&&k.fog===!0&&ie.refreshFogUniforms(nr,ve),ie.refreshMaterialUniforms(nr,k,$,J,xe),Xo.upload(O,Be.uniformsList,nr,Le)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Xo.upload(O,Be.uniformsList,nr,Le),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Yt.setValue(O,"center",q.center),Yt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Yt.setValue(O,"normalMatrix",q.normalMatrix),Yt.setValue(O,"modelMatrix",q.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const un=k.uniformsGroups;for(let Yl=0,i_=un.length;Yl<i_;Yl++)if(Pe.isWebGL2){const dd=un[Yl];Ce.update(dd,tr),Ce.bind(dd,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function t_(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function n_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,I,Y){Ie.get(A.texture).__webglTexture=I,Ie.get(A.depthTexture).__webglTexture=Y;const k=Ie.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Y===void 0,k.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,I){const Y=Ie.get(A);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,Y=0){E=A,T=I,R=Y;let k=!0,q=null,ve=!1,Ee=!1;if(A){const Re=Ie.get(A);Re.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(O.FRAMEBUFFER,null),k=!1):Re.__webglFramebuffer===void 0?Le.setupRenderTarget(A):Re.__hasExternalTextures&&Le.rebindTextures(A,Ie.get(A.texture).__webglTexture,Ie.get(A.depthTexture).__webglTexture);const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ee=!0);const we=Ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(we[I])?q=we[I][Y]:q=we[I],ve=!0):Pe.isWebGL2&&A.samples>0&&Le.useMultisampledRTT(A)===!1?q=Ie.get(A).__webglMultisampledFramebuffer:Array.isArray(we)?q=we[Y]:q=we,w.copy(A.viewport),K.copy(A.scissor),Q=A.scissorTest}else w.copy(B).multiplyScalar($).floor(),K.copy(N).multiplyScalar($).floor(),Q=z;if(Ae.bindFramebuffer(O.FRAMEBUFFER,q)&&Pe.drawBuffers&&k&&Ae.drawBuffers(A,q),Ae.viewport(w),Ae.scissor(K),Ae.setScissorTest(Q),ve){const Re=Ie.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,Y)}else if(Ee){const Re=Ie.get(A.texture),ke=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,ke)}P=-1},this.readRenderTargetPixels=function(A,I,Y,k,q,ve,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){Ae.bindFramebuffer(O.FRAMEBUFFER,be);try{const Re=A.texture,ke=Re.format,we=Re.type;if(ke!==Bn&&oe.convert(ke)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=we===Ps&&(Me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(we!==qi&&oe.convert(we)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===hi&&(Pe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-k&&Y>=0&&Y<=A.height-q&&O.readPixels(I,Y,k,q,oe.convert(ke),oe.convert(we),ve)}finally{const Re=E!==null?Ie.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,I,Y=0){const k=Math.pow(2,-Y),q=Math.floor(I.image.width*k),ve=Math.floor(I.image.height*k);Le.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,A.x,A.y,q,ve),Ae.unbindTexture()},this.copyTextureToTexture=function(A,I,Y,k=0){const q=I.image.width,ve=I.image.height,Ee=oe.convert(Y.format),be=oe.convert(Y.type);Le.setTexture2D(Y,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,A.x,A.y,q,ve,Ee,be,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,A.x,A.y,I.mipmaps[0].width,I.mipmaps[0].height,Ee,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,k,A.x,A.y,Ee,be,I.image),k===0&&Y.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,I,Y,k,q=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,be=A.max.z-A.min.z+1,Re=oe.convert(k.format),ke=oe.convert(k.type);let we;if(k.isData3DTexture)Le.setTexture3D(k,0),we=O.TEXTURE_3D;else if(k.isDataArrayTexture)Le.setTexture2DArray(k,0),we=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const Ue=O.getParameter(O.UNPACK_ROW_LENGTH),ct=O.getParameter(O.UNPACK_IMAGE_HEIGHT),dt=O.getParameter(O.UNPACK_SKIP_PIXELS),xn=O.getParameter(O.UNPACK_SKIP_ROWS),ei=O.getParameter(O.UNPACK_SKIP_IMAGES),gt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,gt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?O.texSubImage3D(we,q,I.x,I.y,I.z,ve,Ee,be,Re,ke,gt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(we,q,I.x,I.y,I.z,ve,Ee,be,Re,gt.data)):O.texSubImage3D(we,q,I.x,I.y,I.z,ve,Ee,be,Re,ke,gt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),O.pixelStorei(O.UNPACK_SKIP_PIXELS,dt),O.pixelStorei(O.UNPACK_SKIP_ROWS,xn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ei),q===0&&k.generateMipmaps&&O.generateMipmap(we),Ae.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Le.setTextureCube(A,0):A.isData3DTexture?Le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Le.setTexture2DArray(A,0):Le.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){T=0,R=0,E=null,Ae.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?xr:Tv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?nt:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Gw extends Yv{}Gw.prototype.isWebGL1Renderer=!0;class Vw extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ww{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Zc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new U;class Sl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}setX(e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ci(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ci(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ci(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ci(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=qe(n,this.array),i=qe(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=qe(n,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=qe(n,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Vn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qv extends Os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const Zs=new U,Kr=new U,Zr=new U,Qr=new _e,Qs=new _e,$v=new mt,bo=new U,Js=new U,Ro=new U,Bp=new _e,$u=new _e,Hp=new _e;class jw extends Wt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new wi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ww(n,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new Sl(i,3,0,!1)),$r.setAttribute("uv",new Sl(i,2,3,!1))}this.geometry=$r,this.material=e!==void 0?e:new qv,this.center=new _e(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),$v.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Zr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Co(bo.set(-.5,-.5,0),Zr,a,Kr,r,s),Co(Js.set(.5,-.5,0),Zr,a,Kr,r,s),Co(Ro.set(.5,.5,0),Zr,a,Kr,r,s),Bp.set(0,0),$u.set(1,0),Hp.set(1,1);let o=e.ray.intersectTriangle(bo,Js,Ro,!1,Zs);if(o===null&&(Co(Js.set(-.5,.5,0),Zr,a,Kr,r,s),$u.set(0,1),o=e.ray.intersectTriangle(bo,Ro,Js,!1,Zs),o===null))return;const l=e.ray.origin.distanceTo(Zs);l<e.near||l>e.far||n.push({distance:l,point:Zs.clone(),uv:An.getInterpolation(Zs,bo,Js,Ro,Bp,$u,Hp,new _e),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Co(t,e,n,i,r,s){Qr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Qs.x=s*Qr.x-r*Qr.y,Qs.y=r*Qr.x+s*Qr.y):Qs.copy(Qr),t.copy(e),t.x+=Qs.x,t.y+=Qs.y,t.applyMatrix4($v)}class Yo extends Vt{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Na extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wv,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kv extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Ku=new mt,Gp=new U,Vp=new U;class Xw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nd,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gp),Vp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vp),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wp=new mt,ea=new U,Zu=new U;class Yw extends Xw{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(ea),Zu.copy(i.position),Zu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zu),i.updateMatrixWorld(),r.makeTranslation(-ea.x,-ea.y,-ea.z),Wp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wp)}}class qw extends Kv{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Yw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $w extends Kv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=jp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function jp(){return(typeof performance>"u"?Date:performance).now()}class Xp{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);function sd(t,e,n,i,r,s,a,o){const l=(E,P,S,w)=>[new _e(E/a,1-w/o),new _e(S/a,1-w/o),new _e(S/a,1-P/o),new _e(E/a,1-P/o)],u=l(e+s,n,e+i+s,n+s),f=l(e+i+s,n,e+i*2+s,n+s),h=l(e,n+s,e+s,n+s+r),d=l(e+s,n+s,e+i+s,n+s+r),m=l(e+i+s,n+s,e+i+s*2,n+r+s),x=l(e+i+s*2,n+s,e+i*2+s*2,n+r+s),_=t.attributes.uv,p=[m[3],m[2],m[0],m[1]],c=[h[3],h[2],h[0],h[1]],v=[u[3],u[2],u[0],u[1]],g=[f[0],f[1],f[3],f[2]],y=[d[3],d[2],d[0],d[1]],T=[x[3],x[2],x[0],x[1]],R=[];for(const E of[p,c,v,g,y,T])for(const P of E)R.push(P.x,P.y);_.set(new Float32Array(R)),_.needsUpdate=!0}function Sn(t,e,n,i,r,s){sd(t,e,n,i,r,s,64,64)}function nf(t,e,n,i,r,s){sd(t,e,n,i,r,s,64,32)}class or extends It{constructor(e,n){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:n}),e.name="inner",n.name="outer"}}class Kw extends It{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new Na({side:Qn}),this.layer2Material=new Na({side:bn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new ht(8,8,8);Sn(e,0,0,8,8,8);const n=new Ke(e,this.layer1Material),i=new ht(9,9,9);Sn(i,32,0,8,8,8);const r=new Ke(i,this.layer2Material);this.head=new or(n,r),this.head.name="head",this.head.add(n,r),n.position.y=4,r.position.y=4,this.add(this.head);const s=new ht(8,12,4);Sn(s,16,16,8,12,4);const a=new Ke(s,this.layer1Material),o=new ht(8.5,12.5,4.5);Sn(o,16,32,8,12,4);const l=new Ke(o,this.layer2Material);this.body=new or(a,l),this.body.name="body",this.body.add(a,l),this.body.position.y=-6,this.add(this.body);const u=new ht,f=new Ke(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3:4,f.scale.y=12,f.scale.z=4,Sn(u,40,16,this.slim?3:4,12,4)});const h=new ht,d=new Ke(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3.5:4.5,d.scale.y=12.5,d.scale.z=4.5,Sn(h,40,32,this.slim?3:4,12,4)});const m=new It;m.add(f,d),this.modelListeners.push(()=>{m.position.x=this.slim?-.5:-1}),m.position.y=-4,this.rightArm=new or(f,d),this.rightArm.name="rightArm",this.rightArm.add(m),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const x=new ht,_=new Ke(x,this.layer1MaterialBiased);this.modelListeners.push(()=>{_.scale.x=this.slim?3:4,_.scale.y=12,_.scale.z=4,Sn(x,32,48,this.slim?3:4,12,4)});const p=new ht,c=new Ke(p,this.layer2MaterialBiased);this.modelListeners.push(()=>{c.scale.x=this.slim?3.5:4.5,c.scale.y=12.5,c.scale.z=4.5,Sn(p,48,48,this.slim?3:4,12,4)});const v=new It;v.add(_,c),this.modelListeners.push(()=>{v.position.x=this.slim?.5:1}),v.position.y=-4,this.leftArm=new or(_,c),this.leftArm.name="leftArm",this.leftArm.add(v),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const g=new ht(4,12,4);Sn(g,0,16,4,12,4);const y=new Ke(g,this.layer1MaterialBiased),T=new ht(4.5,12.5,4.5);Sn(T,0,32,4,12,4);const R=new Ke(T,this.layer2MaterialBiased),E=new It;E.add(y,R),E.position.y=-6,this.rightLeg=new or(y,R),this.rightLeg.name="rightLeg",this.rightLeg.add(E),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const P=new ht(4,12,4);Sn(P,16,48,4,12,4);const S=new Ke(P,this.layer1MaterialBiased),w=new ht(4.5,12.5,4.5);Sn(w,0,48,4,12,4);const K=new Ke(w,this.layer2MaterialBiased),Q=new It;Q.add(S,K),Q.position.y=-6,this.leftLeg=new or(S,K),this.leftLeg.name="leftLeg",this.leftLeg.add(Q),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(n=>n())}getBodyParts(){return this.children.filter(e=>e instanceof or)}setInnerLayerVisible(e){this.getBodyParts().forEach(n=>n.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(n=>n.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Zw extends It{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Na({side:bn,transparent:!0,alphaTest:1e-5});const e=new ht(10,16,1);nf(e,0,0,10,16,1),this.cape=new Ke(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Qw extends It{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Na({side:bn,transparent:!0,alphaTest:1e-5});const e=new ht(12,22,4);nf(e,22,0,10,20,2);const n=new Ke(e,this.material);n.position.x=-5,n.position.y=-10,n.position.z=-1,this.leftWing=new It,this.leftWing.add(n),this.add(this.leftWing);const i=new ht(12,22,4);nf(i,22,0,10,20,2);const r=new Ke(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new It,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Jw extends It{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Na({side:Qn});const e=new ht(8,8,4/3);sd(e,0,0,6,6,1,14,7),this.rightEar=new Ke(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Ke(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Yp=10.8*Math.PI/180;class e1 extends It{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Kw,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Zw,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Yp,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Qw,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Jw,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Yp,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Po(t){return t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}function rf(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(s.data[l+3]!==255)return!0}return!1}function Gl(t){return t/64}function qp(t,e,n){if(n){if(rf(t,0,0,e,e))return}else if(rf(t,0,0,e,e/2))return;const i=Gl(e),r=(s,a,o,l)=>t.clearRect(s*i,a*i,o*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),n&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function t1(t,e){t.save(),t.scale(-1,1);const n=Gl(e),i=(r,s,a,o,l,u)=>t.drawImage(t.canvas,r*n,s*n,a*n,o*n,-l*n,u*n,-a*n,o*n);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),t.restore()}function n1(t,e){let n=!1;if(e.width!==e.height)if(e.width===2*e.height)n=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=t.getContext("2d",{willReadFrequently:!0});if(n){const r=e.width;t.width=r,t.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),t1(i,r),qp(i,t.width,!1)}else t.width=e.width,t.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,t.width,t.height),qp(i,t.width,!0)}function i1(t){if(t.width===2*t.height)return t.width/64;if(t.width*17===t.height*22)return t.width/22;if(t.width*11===t.height*23)return t.width/46;throw new Error(`Bad cape size: ${t.width}x${t.height}`)}function r1(t,e){const n=i1(e);t.width=64*n,t.height=32*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function s1(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function a1(t,e,n,i,r){const s=t.getImageData(e,n,i,r);for(let a=0;a<i;a++)for(let o=0;o<r;o++){const l=(a+o*i)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function o1(t){const e=Gl(t.width),n=t.getContext("2d",{willReadFrequently:!0}),i=(o,l,u,f)=>rf(n,o*e,l*e,u*e,f*e),r=(o,l,u,f)=>s1(n,o*e,l*e,u*e,f*e),s=(o,l,u,f)=>a1(n,o*e,l*e,u*e,f*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function l1(t){if(t.width===t.height*2&&t.height%7===0)return t.height/7;throw new Error(`Bad ears size: ${t.width}x${t.height}`)}function u1(t,e){const n=l1(e);t.width=14*n,t.height=7*n;const i=t.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height)}function $p(t,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=Gl(e.width),i=14*n,r=7*n;t.width=i,t.height=r;const s=t.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,i,r),s.drawImage(e,24*n,0,i,r,0,0,i,r)}async function Lo(t){const e=document.createElement("img");return new Promise((n,i)=>{e.onload=()=>n(e),e.onerror=i,e.crossOrigin="anonymous",typeof t=="string"?e.src=t:(t.crossOrigin!==void 0&&(e.crossOrigin=t.crossOrigin),t.referrerPolicy!==void 0&&(e.referrerPolicy=t.referrerPolicy),e.src=t.src)})}const Kp={type:"change"},Qu={type:"start"},Zp={type:"end"},Do=new Pv,Qp=new Ui,c1=Math.cos(70*Iy.DEG2RAD);class f1 extends Cr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Lr.ROTATE,MIDDLE:Lr.DOLLY,RIGHT:Lr.PAN},this.touches={ONE:Dr.ROTATE,TWO:Dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",M),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Kp),i.update(),s=r.NONE},this.update=function(){const C=new U,Z=new Ar().setFromUnitVectors(e.up,new U(0,1,0)),pe=Z.clone().invert(),oe=new U,he=new Ar,Ce=new U,He=2*Math.PI;return function(de=null){const V=i.object.position;C.copy(V).sub(i.target),C.applyQuaternion(Z),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&K(S(de)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ne=i.minAzimuthAngle,ae=i.maxAzimuthAngle;isFinite(ne)&&isFinite(ae)&&(ne<-Math.PI?ne+=He:ne>Math.PI&&(ne-=He),ae<-Math.PI?ae+=He:ae>Math.PI&&(ae-=He),ne<=ae?o.theta=Math.max(ne,Math.min(ae,o.theta)):o.theta=o.theta>(ne+ae)/2?Math.max(ne,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*u),C.setFromSpherical(o),C.applyQuaternion(pe),V.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let Fe=!1;if(i.zoomToCursor&&R){let Xe=null;if(i.object.isPerspectiveCamera){const $e=C.length();Xe=j($e*u);const ln=$e-Xe;i.object.position.addScaledVector(y,ln),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const $e=new U(T.x,T.y,0);$e.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Fe=!0;const ln=new U(T.x,T.y,0);ln.unproject(i.object),i.object.position.sub(ln).add($e),i.object.updateMatrixWorld(),Xe=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Xe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Xe).add(i.object.position):(Do.origin.copy(i.object.position),Do.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Do.direction))<c1?e.lookAt(i.target):(Qp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Do.intersectPlane(Qp,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Fe=!0);return u=1,R=!1,Fe||oe.distanceToSquared(i.object.position)>a||8*(1-he.dot(i.object.quaternion))>a||Ce.distanceToSquared(i.target)>0?(i.dispatchEvent(Kp),oe.copy(i.object.position),he.copy(i.object.quaternion),Ce.copy(i.target),Fe=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",Ve),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",Ve),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",M),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Xp,l=new Xp;let u=1;const f=new U,h=new _e,d=new _e,m=new _e,x=new _e,_=new _e,p=new _e,c=new _e,v=new _e,g=new _e,y=new U,T=new _e;let R=!1;const E=[],P={};function S(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function K(C){l.theta-=C}function Q(C){l.phi-=C}const F=function(){const C=new U;return function(pe,oe){C.setFromMatrixColumn(oe,0),C.multiplyScalar(-pe),f.add(C)}}(),W=function(){const C=new U;return function(pe,oe){i.screenSpacePanning===!0?C.setFromMatrixColumn(oe,1):(C.setFromMatrixColumn(oe,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(pe),f.add(C)}}(),X=function(){const C=new U;return function(pe,oe){const he=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;C.copy(Ce).sub(i.target);let He=C.length();He*=Math.tan(i.object.fov/2*Math.PI/180),F(2*pe*He/he.clientHeight,i.object.matrix),W(2*oe*He/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(pe*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),W(oe*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(C){if(!i.zoomToCursor)return;R=!0;const Z=i.domElement.getBoundingClientRect(),pe=C.clientX-Z.left,oe=C.clientY-Z.top,he=Z.width,Ce=Z.height;T.x=pe/he*2-1,T.y=-(oe/Ce)*2+1,y.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function B(C){h.set(C.clientX,C.clientY)}function N(C){D(C),c.set(C.clientX,C.clientY)}function z(C){x.set(C.clientX,C.clientY)}function le(C){d.set(C.clientX,C.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const Z=i.domElement;K(2*Math.PI*m.x/Z.clientHeight),Q(2*Math.PI*m.y/Z.clientHeight),h.copy(d),i.update()}function ue(C){v.set(C.clientX,C.clientY),g.subVectors(v,c),g.y>0?J(w()):g.y<0&&$(w()),c.copy(v),i.update()}function me(C){_.set(C.clientX,C.clientY),p.subVectors(_,x).multiplyScalar(i.panSpeed),X(p.x,p.y),x.copy(_),i.update()}function xe(C){D(C),C.deltaY<0?$(w()):C.deltaY>0&&J(w()),i.update()}function Te(C){let Z=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),Z=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),Z=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),Z=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),Z=!0;break}Z&&(C.preventDefault(),i.update())}function Se(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),Z=.5*(E[0].pageY+E[1].pageY);h.set(C,Z)}}function Ge(){if(E.length===1)x.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),Z=.5*(E[0].pageY+E[1].pageY);x.set(C,Z)}}function Lt(){const C=E[0].pageX-E[1].pageX,Z=E[0].pageY-E[1].pageY,pe=Math.sqrt(C*C+Z*Z);c.set(0,pe)}function De(){i.enableZoom&&Lt(),i.enablePan&&Ge()}function O(){i.enableZoom&&Lt(),i.enableRotate&&Se()}function yt(C){if(E.length==1)d.set(C.pageX,C.pageY);else{const pe=G(C),oe=.5*(C.pageX+pe.x),he=.5*(C.pageY+pe.y);d.set(oe,he)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const Z=i.domElement;K(2*Math.PI*m.x/Z.clientHeight),Q(2*Math.PI*m.y/Z.clientHeight),h.copy(d)}function Me(C){if(E.length===1)_.set(C.pageX,C.pageY);else{const Z=G(C),pe=.5*(C.pageX+Z.x),oe=.5*(C.pageY+Z.y);_.set(pe,oe)}p.subVectors(_,x).multiplyScalar(i.panSpeed),X(p.x,p.y),x.copy(_)}function Pe(C){const Z=G(C),pe=C.pageX-Z.x,oe=C.pageY-Z.y,he=Math.sqrt(pe*pe+oe*oe);v.set(0,he),g.set(0,Math.pow(v.y/c.y,i.zoomSpeed)),J(g.y),c.copy(v)}function Ae(C){i.enableZoom&&Pe(C),i.enablePan&&Me(C)}function Qe(C){i.enableZoom&&Pe(C),i.enableRotate&&yt(C)}function Ie(C){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Le),i.domElement.addEventListener("pointerup",Ve)),re(C),C.pointerType==="touch"?H(C):St(C))}function Le(C){i.enabled!==!1&&(C.pointerType==="touch"?ie(C):bt(C))}function Ve(C){ye(C),E.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",Ve)),i.dispatchEvent(Zp),s=r.NONE}function St(C){let Z;switch(C.button){case 0:Z=i.mouseButtons.LEFT;break;case 1:Z=i.mouseButtons.MIDDLE;break;case 2:Z=i.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Lr.DOLLY:if(i.enableZoom===!1)return;N(C),s=r.DOLLY;break;case Lr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;z(C),s=r.PAN}else{if(i.enableRotate===!1)return;B(C),s=r.ROTATE}break;case Lr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;B(C),s=r.ROTATE}else{if(i.enablePan===!1)return;z(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qu)}function bt(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;le(C);break;case r.DOLLY:if(i.enableZoom===!1)return;ue(C);break;case r.PAN:if(i.enablePan===!1)return;me(C);break}}function b(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Qu),xe(C),i.dispatchEvent(Zp))}function M(C){i.enabled===!1||i.enablePan===!1||Te(C)}function H(C){switch(se(C),E.length){case 1:switch(i.touches.ONE){case Dr.ROTATE:if(i.enableRotate===!1)return;Se(),s=r.TOUCH_ROTATE;break;case Dr.PAN:if(i.enablePan===!1)return;Ge(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Dr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(),s=r.TOUCH_DOLLY_PAN;break;case Dr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Qu)}function ie(C){switch(se(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;yt(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Me(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Qe(C),i.update();break;default:s=r.NONE}}function ee(C){i.enabled!==!1&&C.preventDefault()}function re(C){E.push(C)}function ye(C){delete P[C.pointerId];for(let Z=0;Z<E.length;Z++)if(E[Z].pointerId==C.pointerId){E.splice(Z,1);return}}function se(C){let Z=P[C.pointerId];Z===void 0&&(Z=new _e,P[C.pointerId]=Z),Z.set(C.pageX,C.pageY)}function G(C){const Z=C.pointerId===E[0].pointerId?E[1]:E[0];return P[Z.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",Ve),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}const d1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h1=new Hv(-1,1,1,-1,0,1),ad=new wi;ad.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3));ad.setAttribute("uv",new vi([0,2,0,0,2,0],2));class p1{constructor(e){this._mesh=new Ke(ad,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qv extends Vl{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Ei?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fv.clone(e.uniforms),this.material=new Ei({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new p1(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Jp extends Vl{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class m1 extends Vl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class g1{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new _e);this._width=i.width,this._height=i.height,n=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ps}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qv(d1),this.copyPass.material.blending=gi,this.clock=new Zv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Jp!==void 0&&(a instanceof Jp?i=!0:a instanceof m1&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class v1 extends Vl{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const _1={uniforms:{tDiffuse:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class x1 extends jw{constructor(e="",n={}){const i=new qv({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=n.font===void 0?"48px Minecraft":n.font,this.margin=n.margin===void 0?[5,10,5,10]:n.margin,this.textStyle=n.textStyle===void 0?"white":n.textStyle,this.backgroundStyle=n.backgroundStyle===void 0?"rgba(0,0,0,.25)":n.backgroundStyle,this.height=n.height===void 0?4:n.height,(n.repaintAfterLoaded===void 0?!0:n.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let n=e.getContext("2d");n.font=this.font;const i=n.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],n=e.getContext("2d"),n.font=this.font,n.fillStyle=this.backgroundStyle,n.fillRect(0,0,e.width,e.height),n.fillStyle=this.textStyle,n.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new Yo(e);r.magFilter=ot,r.minFilter=ot,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class y1{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new $w(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new qw(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new Vw,this.camera=new hn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Mn.enabled=!1,this.renderer=new Yv({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let n;this.renderer.capabilities.isWebGL2&&(n=new Mi(0,0,{depthTexture:new Xv(0,0,hi)})),this.composer=new g1(this.renderer,n),this.renderPass=new v1(this.scene,this.camera),this.fxaaPass=new Qv(_1),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new e1,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new It,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new f1(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Zv,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Yo(this.skinCanvas),this.skinTexture.magFilter=ot,this.skinTexture.minFilter=ot,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Yo(this.capeCanvas),this.capeTexture.magFilter=ot,this.capeTexture.minFilter=ot,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Yo(this.earsCanvas),this.earsTexture.magFilter=ot,this.earsTexture.minFilter=ot,this.playerObject.ears.map=this.earsTexture}loadSkin(e,n={}){if(e===null)this.resetSkin();else if(Po(e))n1(this.skinCanvas,e),this.recreateSkinTexture(),n.model===void 0||n.model==="auto-detect"?this.playerObject.skin.modelType=o1(this.skinCanvas):this.playerObject.skin.modelType=n.model,n.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(n.ears===!0||n.ears=="load-only")&&($p(this.earsCanvas,e),this.recreateEarsTexture(),n.ears===!0&&(this.playerObject.ears.visible=!0));else return Lo(e).then(i=>this.loadSkin(i,n))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,n={}){if(e===null)this.resetCape();else if(Po(e))r1(this.capeCanvas,e),this.recreateCapeTexture(),n.makeVisible!==!1&&(this.playerObject.backEquipment=n.backEquipment===void 0?"cape":n.backEquipment);else return Lo(e).then(i=>this.loadCape(i,n))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,n={}){if(e===null)this.resetEars();else if(Po(e))n.textureType==="skin"?$p(this.earsCanvas,e):u1(this.earsCanvas,e),this.recreateEarsTexture(),n.makeVisible!==!1&&(this.playerObject.ears.visible=!0);else return Lo(e).then(i=>this.loadEars(i,n))}resetEars(){this.playerObject.ears.visible=!1,this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,_l)}loadBackground(e,n){if(Po(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Vt,this.backgroundTexture.image=e,n!==void 0&&(this.backgroundTexture.mapping=n),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Lo(e).then(i=>this.loadBackground(i,n))}draw(){const e=this.clock.getDelta();this._animation!==null&&this._animation.update(this.playerObject,e),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new _e).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new _e).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof je||e instanceof Vt?this.scene.background=e:this.scene.background=new je(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Wt||(e=new x1(e)),this.playerWrapper.add(e),e.position.y=20),this._nameTag=e}}function S1({getPNG:t}){const e=st.useRef(null),n=st.useRef(null);st.useEffect(()=>{if(!e.current)return;const r=new y1({canvas:void 0,width:e.current.clientWidth,height:300});e.current.appendChild(r.canvas),r.controls.enableZoom=!0,r.background="#0b0b17",r.fov=60,r.autoRotate=!0,n.current=r,i();const s=()=>{!r.canvas||!e.current||(r.width=e.current.clientWidth,r.height=300)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),r.dispose()}},[]);async function i(){var a;const r=await t(),s=URL.createObjectURL(r);(a=n.current)==null||a.loadSkin(s),setTimeout(()=>URL.revokeObjectURL(s),5e3)}return st.useEffect(()=>{const r=setInterval(()=>{i()},1e3);return()=>clearInterval(r)},[]),fe.jsx("div",{ref:e,className:"neon-card p-2"})}function M1({text:t,onDone:e}){const[n,i]=st.useState(!0);return st.useEffect(()=>{const r=setTimeout(()=>{i(!1),e==null||e()},1500);return()=>clearTimeout(r)},[]),n?fe.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 bg-cyber-panel border border-cyber-edge rounded-xl2 px-4 py-2 shadow-neon fade-in",children:fe.jsx("span",{className:"text-neon-100",children:t})}):null}const Ut=64,Nt=64;async function E1(t){return new Promise((e,n)=>{const i=URL.createObjectURL(t),r=new Image;r.onload=()=>{URL.revokeObjectURL(i),e(r)},r.onerror=n,r.src=i})}function T1(t,e="skin.png"){const n=t.toDataURL("image/png"),i=document.createElement("a");i.href=n,i.download=e,i.click()}async function w1(t){const e=await new Promise(i=>t.toBlob(r=>i(r),"image/png"));if(!e)throw new Error("Blob failed");const n=new ClipboardItem({"image/png":e});await navigator.clipboard.write([n])}function A1(t){return t.getContext("2d").getImageData(0,0,t.width,t.height)}function b1(t,e){t.getContext("2d").putImageData(e,0,0)}function R1(){const t=document.createElement("canvas");t.width=Ut,t.height=Nt;const e=t.getContext("2d");return e.clearRect(0,0,Ut,Nt),e.getImageData(0,0,Ut,Nt)}function C1({apply:t}){const[e,n]=st.useState("cover"),[i,r]=st.useState(""),s=st.useRef(null);async function a(o){r("Bild laden ...");const l=URL.createObjectURL(o),u=new Image;await new Promise((g,y)=>{u.onload=()=>g(),u.onerror=y,u.src=l}),URL.revokeObjectURL(l);const f=document.createElement("canvas");f.width=Ut,f.height=Nt;const h=f.getContext("2d");h.clearRect(0,0,Ut,Nt);const d=u.width/u.height,m=Ut/Nt;let x=Ut,_=Nt,p=0,c=0;e==="cover"?d>m?(_=Nt,x=_*d,p=(Ut-x)/2):(x=Ut,_=x/d,c=(Nt-_)/2):d>m?(x=Ut,_=x/d,c=(Nt-_)/2):(_=Nt,x=_*d,p=(Ut-x)/2),h.imageSmoothingEnabled=!0,h.drawImage(u,p,c,x,_);const v=h.getImageData(0,0,Ut,Nt);t(v),r("Bild angewendet.")}return fe.jsxs("div",{className:"neon-card p-4",children:[fe.jsx("div",{className:"text-lg font-semibold mb-2",children:"Bild → Skin"}),fe.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[fe.jsx("label",{className:"label",children:"Modus"}),fe.jsxs("select",{className:"input",value:e,onChange:o=>n(o.target.value),children:[fe.jsx("option",{value:"cover",children:"Cover (füllend, ggf. Beschnitt)"}),fe.jsx("option",{value:"contain",children:"Contain (alles sichtbar, ggf. Ränder)"})]})]}),fe.jsx("input",{ref:s,type:"file",accept:"image/*",className:"hidden",onChange:o=>{var u;const l=(u=o.target.files)==null?void 0:u[0];l&&a(l),o.currentTarget.value=""}}),fe.jsx("button",{className:"btn",onClick:()=>{var o;return(o=s.current)==null?void 0:o.click()},children:"Bild auswählen"}),i&&fe.jsx("p",{className:"text-neon-100 text-xs mt-2",children:i}),fe.jsx("p",{className:"text-neon-100 text-xs mt-2",children:"Hinweis: Bild wird auf 64×64 skaliert."})]})}class P1{constructor(){this.stack=[],this.index=-1,this.limit=200}push(e){this.index<this.stack.length-1&&(this.stack=this.stack.slice(0,this.index+1)),this.stack.push(e),this.stack.length>this.limit&&this.stack.shift(),this.index=this.stack.length-1}canUndo(){return this.index>0}canRedo(){return this.index<this.stack.length-1}undo(){return this.canUndo()?(this.index--,this.stack[this.index]):null}redo(){return this.canRedo()?(this.index++,this.stack[this.index]):null}}function L1(t,e){const{width:n,height:i,data:r}=t,s=em(e.start),a=em(e.end),o=e.angleDeg%360*Math.PI/180,l=Math.cos(o),u=Math.sin(o),f=n/2,h=i/2;let d=1/0,m=-1/0;for(let _=0;_<i;_++)for(let p=0;p<n;p++){const c=p-f,v=_-h,g=c*l+v*u;g<d&&(d=g),g>m&&(m=g)}const x=m-d||1;for(let _=0;_<i;_++)for(let p=0;p<n;p++){const c=(_*n+p)*4,v=p-f,g=_-h,y=(v*l+g*u-d)/x,[T,R,E]=D1(s,a,y);if(e.dither){const S=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]][_%4][p%4]/16-.5;r[c]=Ju(T+S*32),r[c+1]=Ju(R+S*32),r[c+2]=Ju(E+S*32)}else r[c]=T,r[c+1]=R,r[c+2]=E;r[c+3]=255}}function em(t){const e=t.replace("#",""),n=e.length===3?e.split("").map(r=>r+r).join(""):e,i=parseInt(n,16);return[i>>16&255,i>>8&255,i&255]}function D1(t,e,n){const i=r=>Math.round(r);return[i(t[0]*(1-n)+e[0]*n),i(t[1]*(1-n)+e[1]*n),i(t[2]*(1-n)+e[2]*n)]}function Ju(t){return Math.max(0,Math.min(255,Math.round(t)))}function U1(){const[t,e]=st.useState("brush"),[n,i]=st.useState("#8A4DFF"),[r,s]=st.useState(4),[a,o]=st.useState(null),[l,u]=st.useState({start:"#6F2BFF",end:"#C5A3FF",angleDeg:315,dither:!0}),f=st.useRef(null),h=st.useRef(new P1);st.useEffect(()=>{const P=f.current;P.width=Ut,P.height=Nt;const S=P.getContext("2d"),w=R1();S.putImageData(w,0,0),x()},[]),st.useEffect(()=>{const P=S=>{i(S.detail),e("brush"),o("Farbe übernommen")};return window.addEventListener("skin-picker",P),()=>window.removeEventListener("skin-picker",P)},[]);function d(){return A1(f.current)}function m(P){b1(f.current,P)}function x(){const P=d(),S=new ImageData(new Uint8ClampedArray(P.data),P.width,P.height);h.current.push(S)}function _(){const P=h.current.undo();P&&(m(P),o("Undo"))}function p(){const P=h.current.redo();P&&(m(P),o("Redo"))}function c(){x();const P=d();L1(P,l),m(P),o("Gradient angewendet")}function v(){const P=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");u(S=>({...S,start:P(),end:P(),angleDeg:Math.floor(Math.random()*360)}))}async function g(P){var J;const S=(J=P.target.files)==null?void 0:J[0];if(!S)return;const w=await E1(S);x();const Q=f.current.getContext("2d"),F=document.createElement("canvas");F.width=Ut,F.height=Nt;const W=F.getContext("2d");W.clearRect(0,0,Ut,Nt),W.drawImage(w,0,0,Ut,Nt);const X=W.getImageData(0,0,Ut,Nt);Q.putImageData(X,0,0),o("Skin importiert"),P.currentTarget.value=""}function y(){T1(f.current,"skin.png")}async function T(){await w1(f.current),o("Als Bild in Zwischenablage kopiert")}async function R(){const P=f.current;return await new Promise(S=>P.toBlob(w=>S(w),"image/png")).then(S=>S)}function E(P){x(),m(P),o("Bild auf Canvas angewendet")}return fe.jsxs("div",{className:"min-h-screen p-6",children:[fe.jsxs("header",{className:"mb-6",children:[fe.jsx("h1",{className:"text-3xl font-bold tracking-wide",style:{textShadow:"0 0 10px var(--glow)"},children:"Minecraft Skin Maker — Neon"}),fe.jsx("p",{className:"text-neon-100",children:"Gradient · Malen · Undo/Redo · 3D-Vorschau · Import/Export · Bild→Skin"})]}),fe.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[fe.jsxs("div",{className:"lg:col-span-2 flex flex-col gap-4",children:[fe.jsx("div",{className:"neon-card p-4",children:fe.jsx(Dx,{tool:t,setTool:e,color:n,setColor:i,size:r,setSize:s,onUndo:_,onRedo:p,canUndo:h.current.canUndo(),canRedo:h.current.canRedo()})}),fe.jsx(Ix,{tool:t,color:n,size:r,onSnapshot:x,getImageData:d,setImageData:m}),fe.jsxs("div",{className:"neon-card p-4 flex flex-wrap gap-3 items-center",children:[fe.jsx("input",{id:"import",type:"file",accept:"image/png",className:"hidden",onChange:g}),fe.jsx("label",{htmlFor:"import",className:"btn cursor-pointer",children:"Import PNG"}),fe.jsx("button",{className:"btn",onClick:y,children:"Download PNG"}),fe.jsx("button",{className:"btn-ghost",onClick:T,children:"Copy als Bild"}),fe.jsx("span",{className:"text-neon-100 text-sm",children:"Format: 64×64 PNG"})]})]}),fe.jsxs("div",{className:"flex flex-col gap-4",children:[fe.jsx(Ux,{opt:l,setOpt:u,onApply:c,onRandom:v}),fe.jsx(C1,{apply:E}),fe.jsx(S1,{getPNG:R}),fe.jsxs("div",{className:"neon-card p-3",children:[fe.jsx("canvas",{ref:f,className:"w-full rounded-xl2 border border-cyber-edge",style:{imageRendering:"pixelated"}}),fe.jsx("p",{className:"text-xs text-neon-100 mt-2",children:"Basis-Canvas (64×64). Wird live in 3D übernommen."})]})]})]}),a&&fe.jsx(M1,{text:a,onDone:()=>o(null)}),fe.jsxs("footer",{className:"mt-8 text-center text-neon-100 text-xs",children:["Made for ",fe.jsx("span",{className:"text-neon-300 font-semibold",children:"levikubatzki"})," · React + TS · skinview3d"]})]})}ec.createRoot(document.getElementById("root")).render(fe.jsx(y_.StrictMode,{children:fe.jsx(U1,{})}));
