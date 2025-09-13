(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Om(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yc={exports:{}},Ia={},Sc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function iv(){if(qh)return ft;qh=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(A){return A===null||typeof A!="object"?null:(A=y&&A[y]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function x(A,F,ue){this.props=A,this.context=F,this.refs=E,this.updater=ue||S}x.prototype.isReactComponent={},x.prototype.setState=function(A,F){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,F,"setState")},x.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function _(){}_.prototype=x.prototype;function U(A,F,ue){this.props=A,this.context=F,this.refs=E,this.updater=ue||S}var R=U.prototype=new _;R.constructor=U,T(R,x.prototype),R.isPureReactComponent=!0;var C=Array.isArray,O=Object.prototype.hasOwnProperty,B={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function ne(A,F,ue){var he,xe={},Ae=null,Ue=null;if(F!=null)for(he in F.ref!==void 0&&(Ue=F.ref),F.key!==void 0&&(Ae=""+F.key),F)O.call(F,he)&&!D.hasOwnProperty(he)&&(xe[he]=F[he]);var be=arguments.length-2;if(be===1)xe.children=ue;else if(1<be){for(var Ge=Array(be),_t=0;_t<be;_t++)Ge[_t]=arguments[_t+2];xe.children=Ge}if(A&&A.defaultProps)for(he in be=A.defaultProps,be)xe[he]===void 0&&(xe[he]=be[he]);return{$$typeof:s,type:A,key:Ae,ref:Ue,props:xe,_owner:B.current}}function b(A,F){return{$$typeof:s,type:A.type,key:F,ref:A.ref,props:A.props,_owner:A._owner}}function N(A){return typeof A=="object"&&A!==null&&A.$$typeof===s}function de(A){var F={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ue){return F[ue]})}var pe=/\/+/g;function $(A,F){return typeof A=="object"&&A!==null&&A.key!=null?de(""+A.key):F.toString(36)}function ae(A,F,ue,he,xe){var Ae=typeof A;(Ae==="undefined"||Ae==="boolean")&&(A=null);var Ue=!1;if(A===null)Ue=!0;else switch(Ae){case"string":case"number":Ue=!0;break;case"object":switch(A.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=A,xe=xe(Ue),A=he===""?"."+$(Ue,0):he,C(xe)?(ue="",A!=null&&(ue=A.replace(pe,"$&/")+"/"),ae(xe,F,ue,"",function(_t){return _t})):xe!=null&&(N(xe)&&(xe=b(xe,ue+(!xe.key||Ue&&Ue.key===xe.key?"":(""+xe.key).replace(pe,"$&/")+"/")+A)),F.push(xe)),1;if(Ue=0,he=he===""?".":he+":",C(A))for(var be=0;be<A.length;be++){Ae=A[be];var Ge=he+$(Ae,be);Ue+=ae(Ae,F,ue,Ge,xe)}else if(Ge=v(A),typeof Ge=="function")for(A=Ge.call(A),be=0;!(Ae=A.next()).done;)Ae=Ae.value,Ge=he+$(Ae,be++),Ue+=ae(Ae,F,ue,Ge,xe);else if(Ae==="object")throw F=String(A),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Ue}function se(A,F,ue){if(A==null)return A;var he=[],xe=0;return ae(A,he,"","",function(Ae){return F.call(ue,Ae,xe++)}),he}function ce(A){if(A._status===-1){var F=A._result;F=F(),F.then(function(ue){(A._status===0||A._status===-1)&&(A._status=1,A._result=ue)},function(ue){(A._status===0||A._status===-1)&&(A._status=2,A._result=ue)}),A._status===-1&&(A._status=0,A._result=F)}if(A._status===1)return A._result.default;throw A._result}var ie={current:null},V={transition:null},re={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:V,ReactCurrentOwner:B};function j(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:se,forEach:function(A,F,ue){se(A,function(){F.apply(this,arguments)},ue)},count:function(A){var F=0;return se(A,function(){F++}),F},toArray:function(A){return se(A,function(F){return F})||[]},only:function(A){if(!N(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ft.Component=x,ft.Fragment=t,ft.Profiler=o,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,ft.act=j,ft.cloneElement=function(A,F,ue){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var he=T({},A.props),xe=A.key,Ae=A.ref,Ue=A._owner;if(F!=null){if(F.ref!==void 0&&(Ae=F.ref,Ue=B.current),F.key!==void 0&&(xe=""+F.key),A.type&&A.type.defaultProps)var be=A.type.defaultProps;for(Ge in F)O.call(F,Ge)&&!D.hasOwnProperty(Ge)&&(he[Ge]=F[Ge]===void 0&&be!==void 0?be[Ge]:F[Ge])}var Ge=arguments.length-2;if(Ge===1)he.children=ue;else if(1<Ge){be=Array(Ge);for(var _t=0;_t<Ge;_t++)be[_t]=arguments[_t+2];he.children=be}return{$$typeof:s,type:A.type,key:xe,ref:Ae,props:he,_owner:Ue}},ft.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:l,_context:A},A.Consumer=A},ft.createElement=ne,ft.createFactory=function(A){var F=ne.bind(null,A);return F.type=A,F},ft.createRef=function(){return{current:null}},ft.forwardRef=function(A){return{$$typeof:c,render:A}},ft.isValidElement=N,ft.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:ce}},ft.memo=function(A,F){return{$$typeof:m,type:A,compare:F===void 0?null:F}},ft.startTransition=function(A){var F=V.transition;V.transition={};try{A()}finally{V.transition=F}},ft.unstable_act=j,ft.useCallback=function(A,F){return ie.current.useCallback(A,F)},ft.useContext=function(A){return ie.current.useContext(A)},ft.useDebugValue=function(){},ft.useDeferredValue=function(A){return ie.current.useDeferredValue(A)},ft.useEffect=function(A,F){return ie.current.useEffect(A,F)},ft.useId=function(){return ie.current.useId()},ft.useImperativeHandle=function(A,F,ue){return ie.current.useImperativeHandle(A,F,ue)},ft.useInsertionEffect=function(A,F){return ie.current.useInsertionEffect(A,F)},ft.useLayoutEffect=function(A,F){return ie.current.useLayoutEffect(A,F)},ft.useMemo=function(A,F){return ie.current.useMemo(A,F)},ft.useReducer=function(A,F,ue){return ie.current.useReducer(A,F,ue)},ft.useRef=function(A){return ie.current.useRef(A)},ft.useState=function(A){return ie.current.useState(A)},ft.useSyncExternalStore=function(A,F,ue){return ie.current.useSyncExternalStore(A,F,ue)},ft.useTransition=function(){return ie.current.useTransition()},ft.version="18.3.1",ft}var Kh;function gf(){return Kh||(Kh=1,Sc.exports=iv()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function rv(){if($h)return Ia;$h=1;var s=gf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,m){var g,y={},v=null,S=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(y[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:e,type:c,key:v,ref:S,props:y,_owner:o.current}}return Ia.Fragment=t,Ia.jsx=f,Ia.jsxs=f,Ia}var Zh;function sv(){return Zh||(Zh=1,yc.exports=rv()),yc.exports}var je=sv(),Jt=gf();const av=Om(Jt);var $o={},Mc={exports:{}},Un={},Ec={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function ov(){return Qh||(Qh=1,(function(s){function e(V,re){var j=V.length;V.push(re);e:for(;0<j;){var A=j-1>>>1,F=V[A];if(0<o(F,re))V[A]=re,V[j]=F,j=A;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var re=V[0],j=V.pop();if(j!==re){V[0]=j;e:for(var A=0,F=V.length,ue=F>>>1;A<ue;){var he=2*(A+1)-1,xe=V[he],Ae=he+1,Ue=V[Ae];if(0>o(xe,j))Ae<F&&0>o(Ue,xe)?(V[A]=Ue,V[Ae]=j,A=Ae):(V[A]=xe,V[he]=j,A=he);else if(Ae<F&&0>o(Ue,j))V[A]=Ue,V[Ae]=j,A=Ae;else break e}}return re}function o(V,re){var j=V.sortIndex-re.sortIndex;return j!==0?j:V.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],m=[],g=1,y=null,v=3,S=!1,T=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(V){for(var re=t(m);re!==null;){if(re.callback===null)r(m);else if(re.startTime<=V)r(m),re.sortIndex=re.expirationTime,e(h,re);else break;re=t(m)}}function C(V){if(E=!1,R(V),!T)if(t(h)!==null)T=!0,ce(O);else{var re=t(m);re!==null&&ie(C,re.startTime-V)}}function O(V,re){T=!1,E&&(E=!1,_(ne),ne=-1),S=!0;var j=v;try{for(R(re),y=t(h);y!==null&&(!(y.expirationTime>re)||V&&!de());){var A=y.callback;if(typeof A=="function"){y.callback=null,v=y.priorityLevel;var F=A(y.expirationTime<=re);re=s.unstable_now(),typeof F=="function"?y.callback=F:y===t(h)&&r(h),R(re)}else r(h);y=t(h)}if(y!==null)var ue=!0;else{var he=t(m);he!==null&&ie(C,he.startTime-re),ue=!1}return ue}finally{y=null,v=j,S=!1}}var B=!1,D=null,ne=-1,b=5,N=-1;function de(){return!(s.unstable_now()-N<b)}function pe(){if(D!==null){var V=s.unstable_now();N=V;var re=!0;try{re=D(!0,V)}finally{re?$():(B=!1,D=null)}}else B=!1}var $;if(typeof U=="function")$=function(){U(pe)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,se=ae.port2;ae.port1.onmessage=pe,$=function(){se.postMessage(null)}}else $=function(){x(pe,0)};function ce(V){D=V,B||(B=!0,$())}function ie(V,re){ne=x(function(){V(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ce(O))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(v){case 1:case 2:case 3:var re=3;break;default:re=v}var j=v;v=re;try{return V()}finally{v=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,re){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var j=v;v=V;try{return re()}finally{v=j}},s.unstable_scheduleCallback=function(V,re,j){var A=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?A+j:A):j=A,V){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=j+F,V={id:g++,callback:re,priorityLevel:V,startTime:j,expirationTime:F,sortIndex:-1},j>A?(V.sortIndex=j,e(m,V),t(h)===null&&V===t(m)&&(E?(_(ne),ne=-1):E=!0,ie(C,j-A))):(V.sortIndex=F,e(h,V),T||S||(T=!0,ce(O))),V},s.unstable_shouldYield=de,s.unstable_wrapCallback=function(V){var re=v;return function(){var j=v;v=re;try{return V.apply(this,arguments)}finally{v=j}}}})(Tc)),Tc}var Jh;function lv(){return Jh||(Jh=1,Ec.exports=ov()),Ec.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function uv(){if(ep)return Un;ep=1;var s=gf(),e=lv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function v(n){return h.call(y,n)?!0:h.call(g,n)?!1:m.test(n)?y[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,u,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,U);x[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,U);x[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,U);x[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,u)&&(a=null),u||d===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),B=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),de=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),V=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,A;function F(n){if(A===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);A=i&&i[1]||""}return`
`+A+n}var ue=!1;function he(n,i){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var u=Q}Reflect.construct(n,[],i)}else{try{i.call()}catch(Q){u=Q}n.call(i.prototype)}else{try{throw Error()}catch(Q){u=Q}n()}}catch(Q){if(Q&&u&&typeof Q.stack=="string"){for(var d=Q.stack.split(`
`),p=u.stack.split(`
`),M=d.length-1,I=p.length-1;1<=M&&0<=I&&d[M]!==p[I];)I--;for(;1<=M&&0<=I;M--,I--)if(d[M]!==p[I]){if(M!==1||I!==1)do if(M--,I--,0>I||d[M]!==p[I]){var z=`
`+d[M].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=M&&0<=I);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?F(n):""}function xe(n){switch(n.tag){case 5:return F(n.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return n=he(n.type,!1),n;case 11:return n=he(n.type.render,!1),n;case 1:return n=he(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case B:return"Portal";case b:return"Profiler";case ne:return"StrictMode";case $:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case de:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case pe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return i=n.displayName||null,i!==null?i:Ae(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Ae(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(i);case 8:return i===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ge(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _t(n){var i=Ge(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=_t(n))}function K(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ge(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function We(n,i){var a=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function et(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ke(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function vt(n,i){Ke(n,i);var a=be(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?tt(n,i.type,a):i.hasOwnProperty("defaultValue")&&tt(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function rt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function tt(n,i,a){(i!=="number"||Ct(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lt=Array.isArray;function Et(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function kt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function w(n,i){var a=be(i.value),u=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function J(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ee(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ee(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Se,He=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Se=Se||document.createElement("div"),Se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Me(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k=["Webkit","ms","Moz","O"];Object.keys(te).forEach(function(n){k.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),te[i]=te[n]})});function fe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||te.hasOwnProperty(n)&&te[n]?(""+i).trim():i+"px"}function De(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=fe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Re=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pe(n,i){if(i){if(Re[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function $e(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,ee=null,ve=null;function we(n){if(n=xa(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=co(i),Ce(n.stateNode,n.type,i))}}function at(n){ee?ve?ve.push(n):ve=[n]:ee=n}function pt(){if(ee){var n=ee,i=ve;if(ve=ee=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function xt(n,i){return n(i)}function hn(){}var yt=!1;function Nn(n,i,a){if(yt)return n(i,a);yt=!0;try{return xt(n,i,a)}finally{yt=!1,(ee!==null||ve!==null)&&(hn(),pt())}}function Gt(n,i){var a=n.stateNode;if(a===null)return null;var u=co(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var $r=!1;if(c)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){$r=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{$r=!1}function Fl(n,i,a,u,d,p,M,I,z){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(a,Q)}catch(ge){this.onError(ge)}}var mi=!1,Er=null,Ei=!1,Zr=null,kl={onError:function(n){mi=!0,Er=n}};function zl(n,i,a,u,d,p,M,I,z){mi=!1,Er=null,Fl.apply(kl,arguments)}function Bl(n,i,a,u,d,p,M,I,z){if(zl.apply(this,arguments),mi){if(mi){var Q=Er;mi=!1,Er=null}else throw Error(t(198));Ei||(Ei=!0,Zr=Q)}}function P(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function q(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oe(n){if(P(n)!==n)throw Error(t(188))}function Z(n){var i=n.alternate;if(!i){if(i=P(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return oe(d),n;if(p===u)return oe(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=p;else{for(var M=!1,I=d.child;I;){if(I===a){M=!0,a=d,u=p;break}if(I===u){M=!0,u=d,a=p;break}I=I.sibling}if(!M){for(I=p.child;I;){if(I===a){M=!0,a=p,u=d;break}if(I===u){M=!0,u=p,a=d;break}I=I.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function le(n){return n=Z(n),n!==null?Oe(n):null}function Oe(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Oe(n);if(i!==null)return i;n=n.sibling}return null}var Xe=e.unstable_scheduleCallback,Ze=e.unstable_cancelCallback,Qe=e.unstable_shouldYield,ct=e.unstable_requestPaint,Ne=e.unstable_now,it=e.unstable_getCurrentPriorityLevel,Tt=e.unstable_ImmediatePriority,Pt=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,ni=e.unstable_LowPriority,It=e.unstable_IdlePriority,st=null,Rn=null;function zt(n){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:ea,qa=Math.log,Tr=Math.LN2;function ea(n){return n>>>=0,n===0?32:31-(qa(n)/Tr|0)|0}var Xt=64,Vn=4194304;function Ti(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function nn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,M=a&268435455;if(M!==0){var I=M&~d;I!==0?u=Ti(I):(p&=M,p!==0&&(u=Ti(p)))}else M=a&~d,M!==0?u=Ti(M):p!==0&&(u=Ti(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Kt(i),d=1<<a,u|=n[a],i&=~d;return u}function ta(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hl(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-Kt(p),I=1<<M,z=d[M];z===-1?((I&a)===0||(I&u)!==0)&&(d[M]=ta(I,i)):z<=i&&(n.expiredLanes|=I),p&=~I}}function Qr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wf(){var n=Xt;return Xt<<=1,(Xt&4194240)===0&&(Xt=64),n}function Gl(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function na(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Kt(i),n[i]=a}function Tg(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Kt(a),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~p}}function Vl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Kt(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var St=0;function Af(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Rf,Wl,bf,Cf,Pf,jl=!1,Ka=[],Ki=null,$i=null,Zi=null,ia=new Map,ra=new Map,Qi=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(n,i){switch(n){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":ia.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(i.pointerId)}}function sa(n,i,a,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=xa(i),i!==null&&Wl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ag(n,i,a,u,d){switch(i){case"focusin":return Ki=sa(Ki,n,i,a,u,d),!0;case"dragenter":return $i=sa($i,n,i,a,u,d),!0;case"mouseover":return Zi=sa(Zi,n,i,a,u,d),!0;case"pointerover":var p=d.pointerId;return ia.set(p,sa(ia.get(p)||null,n,i,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,ra.set(p,sa(ra.get(p)||null,n,i,a,u,d)),!0}return!1}function Df(n){var i=wr(n.target);if(i!==null){var a=P(i);if(a!==null){if(i=a.tag,i===13){if(i=q(a),i!==null){n.blockedOn=i,Pf(n.priority,function(){bf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $a(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Yl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ut=u,a.target.dispatchEvent(u),ut=null}else return i=xa(a),i!==null&&Wl(i),n.blockedOn=a,!1;i.shift()}return!0}function Uf(n,i,a){$a(n)&&a.delete(i)}function Rg(){jl=!1,Ki!==null&&$a(Ki)&&(Ki=null),$i!==null&&$a($i)&&($i=null),Zi!==null&&$a(Zi)&&(Zi=null),ia.forEach(Uf),ra.forEach(Uf)}function aa(n,i){n.blockedOn===i&&(n.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rg)))}function oa(n){function i(d){return aa(d,n)}if(0<Ka.length){aa(Ka[0],n);for(var a=1;a<Ka.length;a++){var u=Ka[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Ki!==null&&aa(Ki,n),$i!==null&&aa($i,n),Zi!==null&&aa(Zi,n),ia.forEach(i),ra.forEach(i),a=0;a<Qi.length;a++)u=Qi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)Df(a),a.blockedOn===null&&Qi.shift()}var Jr=C.ReactCurrentBatchConfig,Za=!0;function bg(n,i,a,u){var d=St,p=Jr.transition;Jr.transition=null;try{St=1,Xl(n,i,a,u)}finally{St=d,Jr.transition=p}}function Cg(n,i,a,u){var d=St,p=Jr.transition;Jr.transition=null;try{St=4,Xl(n,i,a,u)}finally{St=d,Jr.transition=p}}function Xl(n,i,a,u){if(Za){var d=Yl(n,i,a,u);if(d===null)cu(n,i,u,Qa,a),Lf(n,u);else if(Ag(d,n,i,a,u))u.stopPropagation();else if(Lf(n,u),i&4&&-1<wg.indexOf(n)){for(;d!==null;){var p=xa(d);if(p!==null&&Rf(p),p=Yl(n,i,a,u),p===null&&cu(n,i,u,Qa,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else cu(n,i,u,null,a)}}var Qa=null;function Yl(n,i,a,u){if(Qa=null,n=H(u),n=wr(n),n!==null)if(i=P(n),i===null)n=null;else if(a=i.tag,a===13){if(n=q(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Qa=n,null}function If(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case Tt:return 1;case Pt:return 4;case ln:case ni:return 16;case It:return 536870912;default:return 16}default:return 16}}var Ji=null,ql=null,Ja=null;function Nf(){if(Ja)return Ja;var n,i=ql,a=i.length,u,d="value"in Ji?Ji.value:Ji.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var M=a-n;for(u=1;u<=M&&i[a-u]===d[p-u];u++);return Ja=d.slice(n,1<u?1-u:void 0)}function eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function to(){return!0}function Of(){return!1}function On(n){function i(a,u,d,p,M){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?to:Of,this.isPropagationStopped=Of,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=On(es),la=j({},es,{view:0,detail:0}),Pg=On(la),$l,Zl,ua,no=j({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ua&&(ua&&n.type==="mousemove"?($l=n.screenX-ua.screenX,Zl=n.screenY-ua.screenY):Zl=$l=0,ua=n),$l)},movementY:function(n){return"movementY"in n?n.movementY:Zl}}),Ff=On(no),Lg=j({},no,{dataTransfer:0}),Dg=On(Lg),Ug=j({},la,{relatedTarget:0}),Ql=On(Ug),Ig=j({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),Ng=On(Ig),Og=j({},es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fg=On(Og),kg=j({},es,{data:0}),kf=On(kg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Hg[n])?!!i[n]:!1}function Jl(){return Gg}var Vg=j({},la,{key:function(n){if(n.key){var i=zg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(n){return n.type==="keypress"?eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wg=On(Vg),jg=j({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=On(jg),Xg=j({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),Yg=On(Xg),qg=j({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=On(qg),$g=j({},no,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=On($g),Qg=[9,13,27,32],eu=c&&"CompositionEvent"in window,ca=null;c&&"documentMode"in document&&(ca=document.documentMode);var Jg=c&&"TextEvent"in window&&!ca,Bf=c&&(!eu||ca&&8<ca&&11>=ca),Hf=" ",Gf=!1;function Vf(n,i){switch(n){case"keyup":return Qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ts=!1;function e_(n,i){switch(n){case"compositionend":return Wf(i);case"keypress":return i.which!==32?null:(Gf=!0,Hf);case"textInput":return n=i.data,n===Hf&&Gf?null:n;default:return null}}function t_(n,i){if(ts)return n==="compositionend"||!eu&&Vf(n,i)?(n=Nf(),Ja=ql=Ji=null,ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bf&&i.locale!=="ko"?null:i.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!n_[n.type]:i==="textarea"}function Xf(n,i,a,u){at(u),i=oo(i,"onChange"),0<i.length&&(a=new Kl("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var fa=null,da=null;function i_(n){cd(n,0)}function io(n){var i=as(n);if(K(i))return n}function r_(n,i){if(n==="change")return i}var Yf=!1;if(c){var tu;if(c){var nu="oninput"in document;if(!nu){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),nu=typeof qf.oninput=="function"}tu=nu}else tu=!1;Yf=tu&&(!document.documentMode||9<document.documentMode)}function Kf(){fa&&(fa.detachEvent("onpropertychange",$f),da=fa=null)}function $f(n){if(n.propertyName==="value"&&io(da)){var i=[];Xf(i,da,n,H(n)),Nn(i_,i)}}function s_(n,i,a){n==="focusin"?(Kf(),fa=i,da=a,fa.attachEvent("onpropertychange",$f)):n==="focusout"&&Kf()}function a_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return io(da)}function o_(n,i){if(n==="click")return io(i)}function l_(n,i){if(n==="input"||n==="change")return io(i)}function u_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:u_;function ha(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!ii(n[d],i[d]))return!1}return!0}function Zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qf(n,i){var a=Zf(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function Jf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Jf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ed(){for(var n=window,i=Ct();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ct(n.document)}return i}function iu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function c_(n){var i=ed(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Jf(a.ownerDocument.documentElement,a)){if(u!==null&&iu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=Qf(a,p);var M=Qf(a,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var f_=c&&"documentMode"in document&&11>=document.documentMode,ns=null,ru=null,pa=null,su=!1;function td(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||ns==null||ns!==Ct(u)||(u=ns,"selectionStart"in u&&iu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),pa&&ha(pa,u)||(pa=u,u=oo(ru,"onSelect"),0<u.length&&(i=new Kl("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=ns)))}function ro(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var is={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},au={},nd={};c&&(nd=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function so(n){if(au[n])return au[n];if(!is[n])return n;var i=is[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in nd)return au[n]=i[a];return n}var id=so("animationend"),rd=so("animationiteration"),sd=so("animationstart"),ad=so("transitionend"),od=new Map,ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,i){od.set(n,i),l(i,[n])}for(var ou=0;ou<ld.length;ou++){var lu=ld[ou],d_=lu.toLowerCase(),h_=lu[0].toUpperCase()+lu.slice(1);er(d_,"on"+h_)}er(id,"onAnimationEnd"),er(rd,"onAnimationIteration"),er(sd,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(ad,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function ud(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Bl(u,i,void 0,n),n.currentTarget=null}function cd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var I=u[M],z=I.instance,Q=I.currentTarget;if(I=I.listener,z!==p&&d.isPropagationStopped())break e;ud(d,I,Q),p=z}else for(M=0;M<u.length;M++){if(I=u[M],z=I.instance,Q=I.currentTarget,I=I.listener,z!==p&&d.isPropagationStopped())break e;ud(d,I,Q),p=z}}}if(Ei)throw n=Zr,Ei=!1,Zr=null,n}function Rt(n,i){var a=i[gu];a===void 0&&(a=i[gu]=new Set);var u=n+"__bubble";a.has(u)||(fd(i,n,2,!1),a.add(u))}function uu(n,i,a){var u=0;i&&(u|=4),fd(a,n,u,i)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ga(n){if(!n[ao]){n[ao]=!0,r.forEach(function(a){a!=="selectionchange"&&(p_.has(a)||uu(a,!1,n),uu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ao]||(i[ao]=!0,uu("selectionchange",!1,i))}}function fd(n,i,a,u){switch(If(i)){case 1:var d=bg;break;case 4:d=Cg;break;default:d=Xl}a=d.bind(null,i,a,n),d=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function cu(n,i,a,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;M=M.return}for(;I!==null;){if(M=wr(I),M===null)return;if(z=M.tag,z===5||z===6){u=p=M;continue e}I=I.parentNode}}u=u.return}Nn(function(){var Q=p,ge=H(a),ye=[];e:{var me=od.get(n);if(me!==void 0){var Ie=Kl,ke=n;switch(n){case"keypress":if(eo(a)===0)break e;case"keydown":case"keyup":Ie=Wg;break;case"focusin":ke="focus",Ie=Ql;break;case"focusout":ke="blur",Ie=Ql;break;case"beforeblur":case"afterblur":Ie=Ql;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Yg;break;case id:case rd:case sd:Ie=Ng;break;case ad:Ie=Kg;break;case"scroll":Ie=Pg;break;case"wheel":Ie=Zg;break;case"copy":case"cut":case"paste":Ie=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=zf}var ze=(i&4)!==0,Vt=!ze&&n==="scroll",X=ze?me!==null?me+"Capture":null:me;ze=[];for(var G=Q,Y;G!==null;){Y=G;var Te=Y.stateNode;if(Y.tag===5&&Te!==null&&(Y=Te,X!==null&&(Te=Gt(G,X),Te!=null&&ze.push(_a(G,Te,Y)))),Vt)break;G=G.return}0<ze.length&&(me=new Ie(me,ke,null,a,ge),ye.push({event:me,listeners:ze}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",me&&a!==ut&&(ke=a.relatedTarget||a.fromElement)&&(wr(ke)||ke[wi]))break e;if((Ie||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ke=a.relatedTarget||a.toElement,Ie=Q,ke=ke?wr(ke):null,ke!==null&&(Vt=P(ke),ke!==Vt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=Q),Ie!==ke)){if(ze=Ff,Te="onMouseLeave",X="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(ze=zf,Te="onPointerLeave",X="onPointerEnter",G="pointer"),Vt=Ie==null?me:as(Ie),Y=ke==null?me:as(ke),me=new ze(Te,G+"leave",Ie,a,ge),me.target=Vt,me.relatedTarget=Y,Te=null,wr(ge)===Q&&(ze=new ze(X,G+"enter",ke,a,ge),ze.target=Y,ze.relatedTarget=Vt,Te=ze),Vt=Te,Ie&&ke)t:{for(ze=Ie,X=ke,G=0,Y=ze;Y;Y=rs(Y))G++;for(Y=0,Te=X;Te;Te=rs(Te))Y++;for(;0<G-Y;)ze=rs(ze),G--;for(;0<Y-G;)X=rs(X),Y--;for(;G--;){if(ze===X||X!==null&&ze===X.alternate)break t;ze=rs(ze),X=rs(X)}ze=null}else ze=null;Ie!==null&&dd(ye,me,Ie,ze,!1),ke!==null&&Vt!==null&&dd(ye,Vt,ke,ze,!0)}}e:{if(me=Q?as(Q):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var Be=r_;else if(jf(me))if(Yf)Be=l_;else{Be=a_;var Ye=s_}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Be=o_);if(Be&&(Be=Be(n,Q))){Xf(ye,Be,a,ge);break e}Ye&&Ye(n,me,Q),n==="focusout"&&(Ye=me._wrapperState)&&Ye.controlled&&me.type==="number"&&tt(me,"number",me.value)}switch(Ye=Q?as(Q):window,n){case"focusin":(jf(Ye)||Ye.contentEditable==="true")&&(ns=Ye,ru=Q,pa=null);break;case"focusout":pa=ru=ns=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,td(ye,a,ge);break;case"selectionchange":if(f_)break;case"keydown":case"keyup":td(ye,a,ge)}var qe;if(eu)e:{switch(n){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else ts?Vf(n,a)&&(Je="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(Bf&&a.locale!=="ko"&&(ts||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&ts&&(qe=Nf()):(Ji=ge,ql="value"in Ji?Ji.value:Ji.textContent,ts=!0)),Ye=oo(Q,Je),0<Ye.length&&(Je=new kf(Je,n,null,a,ge),ye.push({event:Je,listeners:Ye}),qe?Je.data=qe:(qe=Wf(a),qe!==null&&(Je.data=qe)))),(qe=Jg?e_(n,a):t_(n,a))&&(Q=oo(Q,"onBeforeInput"),0<Q.length&&(ge=new kf("onBeforeInput","beforeinput",null,a,ge),ye.push({event:ge,listeners:Q}),ge.data=qe))}cd(ye,i)})}function _a(n,i,a){return{instance:n,listener:i,currentTarget:a}}function oo(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Gt(n,a),p!=null&&u.unshift(_a(n,p,d)),p=Gt(n,i),p!=null&&u.push(_a(n,p,d))),n=n.return}return u}function rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dd(n,i,a,u,d){for(var p=i._reactName,M=[];a!==null&&a!==u;){var I=a,z=I.alternate,Q=I.stateNode;if(z!==null&&z===u)break;I.tag===5&&Q!==null&&(I=Q,d?(z=Gt(a,p),z!=null&&M.unshift(_a(a,z,I))):d||(z=Gt(a,p),z!=null&&M.push(_a(a,z,I)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var m_=/\r\n?/g,g_=/\u0000|\uFFFD/g;function hd(n){return(typeof n=="string"?n:""+n).replace(m_,`
`).replace(g_,"")}function lo(n,i,a){if(i=hd(i),hd(n)!==i&&a)throw Error(t(425))}function uo(){}var fu=null,du=null;function hu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,__=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,v_=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(n){return pd.resolve(null).then(n).catch(x_)}:pu;function x_(n){setTimeout(function(){throw n})}function mu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),oa(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);oa(i)}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function md(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ss=Math.random().toString(36).slice(2),gi="__reactFiber$"+ss,va="__reactProps$"+ss,wi="__reactContainer$"+ss,gu="__reactEvents$"+ss,y_="__reactListeners$"+ss,S_="__reactHandles$"+ss;function wr(n){var i=n[gi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wi]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=md(n);n!==null;){if(a=n[gi])return a;n=md(n)}return i}n=a,a=n.parentNode}return null}function xa(n){return n=n[gi]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function as(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function co(n){return n[va]||null}var _u=[],os=-1;function nr(n){return{current:n}}function bt(n){0>os||(n.current=_u[os],_u[os]=null,os--)}function wt(n,i){os++,_u[os]=n.current,n.current=i}var ir={},pn=nr(ir),bn=nr(!1),Ar=ir;function ls(n,i){var a=n.type.contextTypes;if(!a)return ir;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Cn(n){return n=n.childContextTypes,n!=null}function fo(){bt(bn),bt(pn)}function gd(n,i,a){if(pn.current!==ir)throw Error(t(168));wt(pn,i),wt(bn,a)}function _d(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Ue(n)||"Unknown",d));return j({},a,u)}function ho(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ir,Ar=pn.current,wt(pn,n),wt(bn,bn.current),!0}function vd(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=_d(n,i,Ar),u.__reactInternalMemoizedMergedChildContext=n,bt(bn),bt(pn),wt(pn,n)):bt(bn),wt(bn,a)}var Ai=null,po=!1,vu=!1;function xd(n){Ai===null?Ai=[n]:Ai.push(n)}function M_(n){po=!0,xd(n)}function rr(){if(!vu&&Ai!==null){vu=!0;var n=0,i=St;try{var a=Ai;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ai=null,po=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(n+1)),Xe(Tt,rr),d}finally{St=i,vu=!1}}return null}var us=[],cs=0,mo=null,go=0,Wn=[],jn=0,Rr=null,Ri=1,bi="";function br(n,i){us[cs++]=go,us[cs++]=mo,mo=n,go=i}function yd(n,i,a){Wn[jn++]=Ri,Wn[jn++]=bi,Wn[jn++]=Rr,Rr=n;var u=Ri;n=bi;var d=32-Kt(u)-1;u&=~(1<<d),a+=1;var p=32-Kt(i)+d;if(30<p){var M=d-d%5;p=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ri=1<<32-Kt(i)+d|a<<d|u,bi=p+n}else Ri=1<<p|a<<d|u,bi=n}function xu(n){n.return!==null&&(br(n,1),yd(n,1,0))}function yu(n){for(;n===mo;)mo=us[--cs],us[cs]=null,go=us[--cs],us[cs]=null;for(;n===Rr;)Rr=Wn[--jn],Wn[jn]=null,bi=Wn[--jn],Wn[jn]=null,Ri=Wn[--jn],Wn[jn]=null}var Fn=null,kn=null,Lt=!1,ri=null;function Sd(n,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Md(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,kn=tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Rr!==null?{id:Ri,overflow:bi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Fn=n,kn=null,!0):!1;default:return!1}}function Su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mu(n){if(Lt){var i=kn;if(i){var a=i;if(!Md(n,i)){if(Su(n))throw Error(t(418));i=tr(a.nextSibling);var u=Fn;i&&Md(n,i)?Sd(u,a):(n.flags=n.flags&-4097|2,Lt=!1,Fn=n)}}else{if(Su(n))throw Error(t(418));n.flags=n.flags&-4097|2,Lt=!1,Fn=n}}}function Ed(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function _o(n){if(n!==Fn)return!1;if(!Lt)return Ed(n),Lt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!hu(n.type,n.memoizedProps)),i&&(i=kn)){if(Su(n))throw Td(),Error(t(418));for(;i;)Sd(n,i),i=tr(i.nextSibling)}if(Ed(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){kn=tr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=Fn?tr(n.stateNode.nextSibling):null;return!0}function Td(){for(var n=kn;n;)n=tr(n.nextSibling)}function fs(){kn=Fn=null,Lt=!1}function Eu(n){ri===null?ri=[n]:ri.push(n)}var E_=C.ReactCurrentBatchConfig;function ya(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var I=d.refs;M===null?delete I[p]:I[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function vo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function wd(n){var i=n._init;return i(n._payload)}function Ad(n){function i(X,G){if(n){var Y=X.deletions;Y===null?(X.deletions=[G],X.flags|=16):Y.push(G)}}function a(X,G){if(!n)return null;for(;G!==null;)i(X,G),G=G.sibling;return null}function u(X,G){for(X=new Map;G!==null;)G.key!==null?X.set(G.key,G):X.set(G.index,G),G=G.sibling;return X}function d(X,G){return X=dr(X,G),X.index=0,X.sibling=null,X}function p(X,G,Y){return X.index=Y,n?(Y=X.alternate,Y!==null?(Y=Y.index,Y<G?(X.flags|=2,G):Y):(X.flags|=2,G)):(X.flags|=1048576,G)}function M(X){return n&&X.alternate===null&&(X.flags|=2),X}function I(X,G,Y,Te){return G===null||G.tag!==6?(G=pc(Y,X.mode,Te),G.return=X,G):(G=d(G,Y),G.return=X,G)}function z(X,G,Y,Te){var Be=Y.type;return Be===D?ge(X,G,Y.props.children,Te,Y.key):G!==null&&(G.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===ce&&wd(Be)===G.type)?(Te=d(G,Y.props),Te.ref=ya(X,G,Y),Te.return=X,Te):(Te=Go(Y.type,Y.key,Y.props,null,X.mode,Te),Te.ref=ya(X,G,Y),Te.return=X,Te)}function Q(X,G,Y,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==Y.containerInfo||G.stateNode.implementation!==Y.implementation?(G=mc(Y,X.mode,Te),G.return=X,G):(G=d(G,Y.children||[]),G.return=X,G)}function ge(X,G,Y,Te,Be){return G===null||G.tag!==7?(G=Or(Y,X.mode,Te,Be),G.return=X,G):(G=d(G,Y),G.return=X,G)}function ye(X,G,Y){if(typeof G=="string"&&G!==""||typeof G=="number")return G=pc(""+G,X.mode,Y),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return Y=Go(G.type,G.key,G.props,null,X.mode,Y),Y.ref=ya(X,null,G),Y.return=X,Y;case B:return G=mc(G,X.mode,Y),G.return=X,G;case ce:var Te=G._init;return ye(X,Te(G._payload),Y)}if(lt(G)||re(G))return G=Or(G,X.mode,Y,null),G.return=X,G;vo(X,G)}return null}function me(X,G,Y,Te){var Be=G!==null?G.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Be!==null?null:I(X,G,""+Y,Te);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case O:return Y.key===Be?z(X,G,Y,Te):null;case B:return Y.key===Be?Q(X,G,Y,Te):null;case ce:return Be=Y._init,me(X,G,Be(Y._payload),Te)}if(lt(Y)||re(Y))return Be!==null?null:ge(X,G,Y,Te,null);vo(X,Y)}return null}function Ie(X,G,Y,Te,Be){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return X=X.get(Y)||null,I(G,X,""+Te,Be);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case O:return X=X.get(Te.key===null?Y:Te.key)||null,z(G,X,Te,Be);case B:return X=X.get(Te.key===null?Y:Te.key)||null,Q(G,X,Te,Be);case ce:var Ye=Te._init;return Ie(X,G,Y,Ye(Te._payload),Be)}if(lt(Te)||re(Te))return X=X.get(Y)||null,ge(G,X,Te,Be,null);vo(G,Te)}return null}function ke(X,G,Y,Te){for(var Be=null,Ye=null,qe=G,Je=G=0,an=null;qe!==null&&Je<Y.length;Je++){qe.index>Je?(an=qe,qe=null):an=qe.sibling;var mt=me(X,qe,Y[Je],Te);if(mt===null){qe===null&&(qe=an);break}n&&qe&&mt.alternate===null&&i(X,qe),G=p(mt,G,Je),Ye===null?Be=mt:Ye.sibling=mt,Ye=mt,qe=an}if(Je===Y.length)return a(X,qe),Lt&&br(X,Je),Be;if(qe===null){for(;Je<Y.length;Je++)qe=ye(X,Y[Je],Te),qe!==null&&(G=p(qe,G,Je),Ye===null?Be=qe:Ye.sibling=qe,Ye=qe);return Lt&&br(X,Je),Be}for(qe=u(X,qe);Je<Y.length;Je++)an=Ie(qe,X,Je,Y[Je],Te),an!==null&&(n&&an.alternate!==null&&qe.delete(an.key===null?Je:an.key),G=p(an,G,Je),Ye===null?Be=an:Ye.sibling=an,Ye=an);return n&&qe.forEach(function(hr){return i(X,hr)}),Lt&&br(X,Je),Be}function ze(X,G,Y,Te){var Be=re(Y);if(typeof Be!="function")throw Error(t(150));if(Y=Be.call(Y),Y==null)throw Error(t(151));for(var Ye=Be=null,qe=G,Je=G=0,an=null,mt=Y.next();qe!==null&&!mt.done;Je++,mt=Y.next()){qe.index>Je?(an=qe,qe=null):an=qe.sibling;var hr=me(X,qe,mt.value,Te);if(hr===null){qe===null&&(qe=an);break}n&&qe&&hr.alternate===null&&i(X,qe),G=p(hr,G,Je),Ye===null?Be=hr:Ye.sibling=hr,Ye=hr,qe=an}if(mt.done)return a(X,qe),Lt&&br(X,Je),Be;if(qe===null){for(;!mt.done;Je++,mt=Y.next())mt=ye(X,mt.value,Te),mt!==null&&(G=p(mt,G,Je),Ye===null?Be=mt:Ye.sibling=mt,Ye=mt);return Lt&&br(X,Je),Be}for(qe=u(X,qe);!mt.done;Je++,mt=Y.next())mt=Ie(qe,X,Je,mt.value,Te),mt!==null&&(n&&mt.alternate!==null&&qe.delete(mt.key===null?Je:mt.key),G=p(mt,G,Je),Ye===null?Be=mt:Ye.sibling=mt,Ye=mt);return n&&qe.forEach(function(nv){return i(X,nv)}),Lt&&br(X,Je),Be}function Vt(X,G,Y,Te){if(typeof Y=="object"&&Y!==null&&Y.type===D&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case O:e:{for(var Be=Y.key,Ye=G;Ye!==null;){if(Ye.key===Be){if(Be=Y.type,Be===D){if(Ye.tag===7){a(X,Ye.sibling),G=d(Ye,Y.props.children),G.return=X,X=G;break e}}else if(Ye.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===ce&&wd(Be)===Ye.type){a(X,Ye.sibling),G=d(Ye,Y.props),G.ref=ya(X,Ye,Y),G.return=X,X=G;break e}a(X,Ye);break}else i(X,Ye);Ye=Ye.sibling}Y.type===D?(G=Or(Y.props.children,X.mode,Te,Y.key),G.return=X,X=G):(Te=Go(Y.type,Y.key,Y.props,null,X.mode,Te),Te.ref=ya(X,G,Y),Te.return=X,X=Te)}return M(X);case B:e:{for(Ye=Y.key;G!==null;){if(G.key===Ye)if(G.tag===4&&G.stateNode.containerInfo===Y.containerInfo&&G.stateNode.implementation===Y.implementation){a(X,G.sibling),G=d(G,Y.children||[]),G.return=X,X=G;break e}else{a(X,G);break}else i(X,G);G=G.sibling}G=mc(Y,X.mode,Te),G.return=X,X=G}return M(X);case ce:return Ye=Y._init,Vt(X,G,Ye(Y._payload),Te)}if(lt(Y))return ke(X,G,Y,Te);if(re(Y))return ze(X,G,Y,Te);vo(X,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,G!==null&&G.tag===6?(a(X,G.sibling),G=d(G,Y),G.return=X,X=G):(a(X,G),G=pc(Y,X.mode,Te),G.return=X,X=G),M(X)):a(X,G)}return Vt}var ds=Ad(!0),Rd=Ad(!1),xo=nr(null),yo=null,hs=null,Tu=null;function wu(){Tu=hs=yo=null}function Au(n){var i=xo.current;bt(xo),n._currentValue=i}function Ru(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ps(n,i){yo=n,Tu=hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Xn(n){var i=n._currentValue;if(Tu!==n)if(n={context:n,memoizedValue:i,next:null},hs===null){if(yo===null)throw Error(t(308));hs=n,yo.dependencies={lanes:0,firstContext:n}}else hs=hs.next=n;return i}var Cr=null;function bu(n){Cr===null?Cr=[n]:Cr.push(n)}function bd(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,bu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ci(n,u)}function Ci(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var sr=!1;function Cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(ht&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ci(n,a)}return d=u.interleaved,d===null?(i.next=i,bu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ci(n,a)}function So(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Vl(n,a)}}function Pd(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Mo(n,i,a,u){var d=n.updateQueue;sr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var z=I,Q=z.next;z.next=null,M===null?p=Q:M.next=Q,M=z;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,I=ge.lastBaseUpdate,I!==M&&(I===null?ge.firstBaseUpdate=Q:I.next=Q,ge.lastBaseUpdate=z))}if(p!==null){var ye=d.baseState;M=0,ge=Q=z=null,I=p;do{var me=I.lane,Ie=I.eventTime;if((u&me)===me){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ke=n,ze=I;switch(me=i,Ie=a,ze.tag){case 1:if(ke=ze.payload,typeof ke=="function"){ye=ke.call(Ie,ye,me);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=ze.payload,me=typeof ke=="function"?ke.call(Ie,ye,me):ke,me==null)break e;ye=j({},ye,me);break e;case 2:sr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[I]:me.push(I))}else Ie={eventTime:Ie,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ge===null?(Q=ge=Ie,z=ye):ge=ge.next=Ie,M|=me;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;me=I,I=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ge===null&&(z=ye),d.baseState=z,d.firstBaseUpdate=Q,d.lastBaseUpdate=ge,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Dr|=M,n.lanes=M,n.memoizedState=ye}}function Ld(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Sa={},_i=nr(Sa),Ma=nr(Sa),Ea=nr(Sa);function Pr(n){if(n===Sa)throw Error(t(174));return n}function Pu(n,i){switch(wt(Ea,i),wt(Ma,n),wt(_i,Sa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_e(i,n)}bt(_i),wt(_i,i)}function ms(){bt(_i),bt(Ma),bt(Ea)}function Dd(n){Pr(Ea.current);var i=Pr(_i.current),a=_e(i,n.type);i!==a&&(wt(Ma,n),wt(_i,a))}function Lu(n){Ma.current===n&&(bt(_i),bt(Ma))}var Nt=nr(0);function Eo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Du=[];function Uu(){for(var n=0;n<Du.length;n++)Du[n]._workInProgressVersionPrimary=null;Du.length=0}var To=C.ReactCurrentDispatcher,Iu=C.ReactCurrentBatchConfig,Lr=0,Ot=null,$t=null,rn=null,wo=!1,Ta=!1,wa=0,T_=0;function mn(){throw Error(t(321))}function Nu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ii(n[a],i[a]))return!1;return!0}function Ou(n,i,a,u,d,p){if(Lr=p,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,To.current=n===null||n.memoizedState===null?b_:C_,n=a(u,d),Ta){p=0;do{if(Ta=!1,wa=0,25<=p)throw Error(t(301));p+=1,rn=$t=null,i.updateQueue=null,To.current=P_,n=a(u,d)}while(Ta)}if(To.current=bo,i=$t!==null&&$t.next!==null,Lr=0,rn=$t=Ot=null,wo=!1,i)throw Error(t(300));return n}function Fu(){var n=wa!==0;return wa=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ot.memoizedState=rn=n:rn=rn.next=n,rn}function Yn(){if($t===null){var n=Ot.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=rn===null?Ot.memoizedState:rn.next;if(i!==null)rn=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},rn===null?Ot.memoizedState=rn=n:rn=rn.next=n}return rn}function Aa(n,i){return typeof i=="function"?i(n):i}function ku(n){var i=Yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=$t,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var I=M=null,z=null,Q=p;do{var ge=Q.lane;if((Lr&ge)===ge)z!==null&&(z=z.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),u=Q.hasEagerState?Q.eagerState:n(u,Q.action);else{var ye={lane:ge,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};z===null?(I=z=ye,M=u):z=z.next=ye,Ot.lanes|=ge,Dr|=ge}Q=Q.next}while(Q!==null&&Q!==p);z===null?M=u:z.next=I,ii(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=z,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ot.lanes|=p,Dr|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function zu(n){var i=Yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do p=n(p,M.action),M=M.next;while(M!==d);ii(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function Ud(){}function Id(n,i){var a=Ot,u=Yn(),d=i(),p=!ii(u.memoizedState,d);if(p&&(u.memoizedState=d,Pn=!0),u=u.queue,Bu(Fd.bind(null,a,u,n),[n]),u.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Ra(9,Od.bind(null,a,u,d,i),void 0,null),sn===null)throw Error(t(349));(Lr&30)!==0||Nd(a,i,d)}return d}function Nd(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Od(n,i,a,u){i.value=a,i.getSnapshot=u,kd(i)&&zd(n)}function Fd(n,i,a){return a(function(){kd(i)&&zd(n)})}function kd(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ii(n,a)}catch{return!0}}function zd(n){var i=Ci(n,1);i!==null&&li(i,n,1,-1)}function Bd(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:n},i.queue=n,n=n.dispatch=R_.bind(null,Ot,n),[i.memoizedState,n]}function Ra(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Hd(){return Yn().memoizedState}function Ao(n,i,a,u){var d=vi();Ot.flags|=n,d.memoizedState=Ra(1|i,a,void 0,u===void 0?null:u)}function Ro(n,i,a,u){var d=Yn();u=u===void 0?null:u;var p=void 0;if($t!==null){var M=$t.memoizedState;if(p=M.destroy,u!==null&&Nu(u,M.deps)){d.memoizedState=Ra(i,a,p,u);return}}Ot.flags|=n,d.memoizedState=Ra(1|i,a,p,u)}function Gd(n,i){return Ao(8390656,8,n,i)}function Bu(n,i){return Ro(2048,8,n,i)}function Vd(n,i){return Ro(4,2,n,i)}function Wd(n,i){return Ro(4,4,n,i)}function jd(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xd(n,i,a){return a=a!=null?a.concat([n]):null,Ro(4,4,jd.bind(null,i,n),a)}function Hu(){}function Yd(n,i){var a=Yn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Nu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function qd(n,i){var a=Yn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Nu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Kd(n,i,a){return(Lr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(ii(a,i)||(a=wf(),Ot.lanes|=a,Dr|=a,n.baseState=!0),i)}function w_(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=Iu.transition;Iu.transition={};try{n(!1),i()}finally{St=a,Iu.transition=u}}function $d(){return Yn().memoizedState}function A_(n,i,a){var u=cr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Zd(n))Qd(i,a);else if(a=bd(n,i,a,u),a!==null){var d=En();li(a,n,u,d),Jd(a,i,u)}}function R_(n,i,a){var u=cr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zd(n))Qd(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,I=p(M,a);if(d.hasEagerState=!0,d.eagerState=I,ii(I,M)){var z=i.interleaved;z===null?(d.next=d,bu(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=bd(n,i,d,u),a!==null&&(d=En(),li(a,n,u,d),Jd(a,i,u))}}function Zd(n){var i=n.alternate;return n===Ot||i!==null&&i===Ot}function Qd(n,i){Ta=wo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Jd(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Vl(n,a)}}var bo={readContext:Xn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},b_={readContext:Xn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Xn,useEffect:Gd,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ao(4194308,4,jd.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ao(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ao(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=vi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=A_.bind(null,Ot,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Bd,useDebugValue:Hu,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Bd(!1),i=n[0];return n=w_.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Ot,d=vi();if(Lt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(Lr&30)!==0||Nd(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Gd(Fd.bind(null,u,p,n),[n]),u.flags|=2048,Ra(9,Od.bind(null,u,p,a,i),void 0,null),a},useId:function(){var n=vi(),i=sn.identifierPrefix;if(Lt){var a=bi,u=Ri;a=(u&~(1<<32-Kt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=T_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},C_={readContext:Xn,useCallback:Yd,useContext:Xn,useEffect:Bu,useImperativeHandle:Xd,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:qd,useReducer:ku,useRef:Hd,useState:function(){return ku(Aa)},useDebugValue:Hu,useDeferredValue:function(n){var i=Yn();return Kd(i,$t.memoizedState,n)},useTransition:function(){var n=ku(Aa)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Ud,useSyncExternalStore:Id,useId:$d,unstable_isNewReconciler:!1},P_={readContext:Xn,useCallback:Yd,useContext:Xn,useEffect:Bu,useImperativeHandle:Xd,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:qd,useReducer:zu,useRef:Hd,useState:function(){return zu(Aa)},useDebugValue:Hu,useDeferredValue:function(n){var i=Yn();return $t===null?i.memoizedState=n:Kd(i,$t.memoizedState,n)},useTransition:function(){var n=zu(Aa)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Ud,useSyncExternalStore:Id,useId:$d,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=j({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Gu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:j({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Co={isMounted:function(n){return(n=n._reactInternals)?P(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=En(),d=cr(n),p=Pi(u,d);p.payload=i,a!=null&&(p.callback=a),i=ar(n,p,d),i!==null&&(li(i,n,d,u),So(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=En(),d=cr(n),p=Pi(u,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ar(n,p,d),i!==null&&(li(i,n,d,u),So(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=En(),u=cr(n),d=Pi(a,u);d.tag=2,i!=null&&(d.callback=i),i=ar(n,d,u),i!==null&&(li(i,n,u,a),So(i,n,u))}};function eh(n,i,a,u,d,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!ha(a,u)||!ha(d,p):!0}function th(n,i,a){var u=!1,d=ir,p=i.contextType;return typeof p=="object"&&p!==null?p=Xn(p):(d=Cn(i)?Ar:pn.current,u=i.contextTypes,p=(u=u!=null)?ls(n,d):ir),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Co,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function nh(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Co.enqueueReplaceState(i,i.state,null)}function Vu(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Cu(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Xn(p):(p=Cn(i)?Ar:pn.current,d.context=ls(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Gu(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Co.enqueueReplaceState(d,d.state,null),Mo(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function gs(n,i){try{var a="",u=i;do a+=xe(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Wu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ju(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var L_=typeof WeakMap=="function"?WeakMap:Map;function ih(n,i,a){a=Pi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Oo||(Oo=!0,ac=u),ju(n,i)},a}function rh(n,i,a){a=Pi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){ju(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ju(n,i),typeof u!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function sh(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new L_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=j_.bind(null,n,i,a),i.then(n,n))}function ah(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function oh(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pi(-1,1),i.tag=2,ar(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var D_=C.ReactCurrentOwner,Pn=!1;function Mn(n,i,a,u){i.child=n===null?Rd(i,null,a,u):ds(i,n.child,a,u)}function lh(n,i,a,u,d){a=a.render;var p=i.ref;return ps(i,d),u=Ou(n,i,a,u,p,d),a=Fu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(Lt&&a&&xu(i),i.flags|=1,Mn(n,i,u,d),i.child)}function uh(n,i,a,u,d){if(n===null){var p=a.type;return typeof p=="function"&&!hc(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,ch(n,i,p,u,d)):(n=Go(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(M,u)&&n.ref===i.ref)return Li(n,i,d)}return i.flags|=1,n=dr(p,u),n.ref=i.ref,n.return=i,i.child=n}function ch(n,i,a,u,d){if(n!==null){var p=n.memoizedProps;if(ha(p,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,Li(n,i,d)}return Xu(n,i,a,u,d)}function fh(n,i,a){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(vs,zn),zn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,wt(vs,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,wt(vs,zn),zn|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,wt(vs,zn),zn|=u;return Mn(n,i,d,a),i.child}function dh(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Xu(n,i,a,u,d){var p=Cn(a)?Ar:pn.current;return p=ls(i,p),ps(i,d),a=Ou(n,i,a,u,p,d),u=Fu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(Lt&&u&&xu(i),i.flags|=1,Mn(n,i,a,d),i.child)}function hh(n,i,a,u,d){if(Cn(a)){var p=!0;ho(i)}else p=!1;if(ps(i,d),i.stateNode===null)Lo(n,i),th(i,a,u),Vu(i,a,u,d),u=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var z=M.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=Xn(Q):(Q=Cn(a)?Ar:pn.current,Q=ls(i,Q));var ge=a.getDerivedStateFromProps,ye=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==u||z!==Q)&&nh(i,M,u,Q),sr=!1;var me=i.memoizedState;M.state=me,Mo(i,u,M,d),z=i.memoizedState,I!==u||me!==z||bn.current||sr?(typeof ge=="function"&&(Gu(i,a,ge,u),z=i.memoizedState),(I=sr||eh(i,a,I,u,me,z,Q))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),M.props=u,M.state=z,M.context=Q,u=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Cd(n,i),I=i.memoizedProps,Q=i.type===i.elementType?I:si(i.type,I),M.props=Q,ye=i.pendingProps,me=M.context,z=a.contextType,typeof z=="object"&&z!==null?z=Xn(z):(z=Cn(a)?Ar:pn.current,z=ls(i,z));var Ie=a.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==ye||me!==z)&&nh(i,M,u,z),sr=!1,me=i.memoizedState,M.state=me,Mo(i,u,M,d);var ke=i.memoizedState;I!==ye||me!==ke||bn.current||sr?(typeof Ie=="function"&&(Gu(i,a,Ie,u),ke=i.memoizedState),(Q=sr||eh(i,a,Q,u,me,ke,z)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,ke,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,ke,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ke),M.props=u,M.state=ke,M.context=z,u=Q):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return Yu(n,i,a,u,p,d)}function Yu(n,i,a,u,d,p){dh(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&vd(i,a,!1),Li(n,i,p);u=i.stateNode,D_.current=i;var I=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=ds(i,n.child,null,p),i.child=ds(i,null,I,p)):Mn(n,i,I,p),i.memoizedState=u.state,d&&vd(i,a,!0),i.child}function ph(n){var i=n.stateNode;i.pendingContext?gd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&gd(n,i.context,!1),Pu(n,i.containerInfo)}function mh(n,i,a,u,d){return fs(),Eu(d),i.flags|=256,Mn(n,i,a,u),i.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function gh(n,i,a){var u=i.pendingProps,d=Nt.current,p=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),wt(Nt,d&1),n===null)return Mu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Vo(M,u,0,null),n=Or(n,u,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Ku(a),i.memoizedState=qu,n):$u(i,M));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return U_(n,i,M,u,I,d,a);if(p){p=u.fallback,M=i.mode,d=n.child,I=d.sibling;var z={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=dr(d,z),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=dr(I,p):(p=Or(p,M,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=n.child.memoizedState,M=M===null?Ku(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~a,i.memoizedState=qu,u}return p=n.child,n=p.sibling,u=dr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function $u(n,i){return i=Vo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Po(n,i,a,u){return u!==null&&Eu(u),ds(i,n.child,null,a),n=$u(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function U_(n,i,a,u,d,p,M){if(a)return i.flags&256?(i.flags&=-257,u=Wu(Error(t(422))),Po(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Vo({mode:"visible",children:u.children},d,0,null),p=Or(p,d,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&ds(i,n.child,null,M),i.child.memoizedState=Ku(M),i.memoizedState=qu,p);if((i.mode&1)===0)return Po(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,p=Error(t(419)),u=Wu(p,u,void 0),Po(n,i,M,u)}if(I=(M&n.childLanes)!==0,Pn||I){if(u=sn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ci(n,d),li(u,n,d,-1))}return dc(),u=Wu(Error(t(421))),Po(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=X_.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,kn=tr(d.nextSibling),Fn=i,Lt=!0,ri=null,n!==null&&(Wn[jn++]=Ri,Wn[jn++]=bi,Wn[jn++]=Rr,Ri=n.id,bi=n.overflow,Rr=i),i=$u(i,u.children),i.flags|=4096,i)}function _h(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ru(n.return,i,a)}function Zu(n,i,a,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function vh(n,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Mn(n,i,u.children,a),u=Nt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_h(n,a,i);else if(n.tag===19)_h(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(wt(Nt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Eo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Zu(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Eo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Zu(i,!0,a,null,p);break;case"together":Zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Li(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Dr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=dr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=dr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function I_(n,i,a){switch(i.tag){case 3:ph(i),fs();break;case 5:Dd(i);break;case 1:Cn(i.type)&&ho(i);break;case 4:Pu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;wt(xo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(wt(Nt,Nt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?gh(n,i,a):(wt(Nt,Nt.current&1),n=Li(n,i,a),n!==null?n.sibling:null);wt(Nt,Nt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return vh(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),wt(Nt,Nt.current),u)break;return null;case 22:case 23:return i.lanes=0,fh(n,i,a)}return Li(n,i,a)}var xh,Qu,yh,Sh;xh=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qu=function(){},yh=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Pr(_i.current);var p=null;switch(a){case"input":d=We(n,d),u=We(n,u),p=[];break;case"select":d=j({},d,{value:void 0}),u=j({},u,{value:void 0}),p=[];break;case"textarea":d=kt(n,d),u=kt(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=uo)}Pe(a,u);var M;a=null;for(Q in d)if(!u.hasOwnProperty(Q)&&d.hasOwnProperty(Q)&&d[Q]!=null)if(Q==="style"){var I=d[Q];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?p||(p=[]):(p=p||[]).push(Q,null));for(Q in u){var z=u[Q];if(I=d?.[Q],u.hasOwnProperty(Q)&&z!==I&&(z!=null||I!=null))if(Q==="style")if(I){for(M in I)!I.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in z)z.hasOwnProperty(M)&&I[M]!==z[M]&&(a||(a={}),a[M]=z[M])}else a||(p||(p=[]),p.push(Q,a)),a=z;else Q==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(p=p||[]).push(Q,z)):Q==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(Q,""+z):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(z!=null&&Q==="onScroll"&&Rt("scroll",n),p||I===z||(p=[])):(p=p||[]).push(Q,z))}a&&(p=p||[]).push("style",a);var Q=p;(i.updateQueue=Q)&&(i.flags|=4)}},Sh=function(n,i,a,u){a!==u&&(i.flags|=4)};function ba(n,i){if(!Lt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function N_(n,i,a){var u=i.pendingProps;switch(yu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Cn(i.type)&&fo(),gn(i),null;case 3:return u=i.stateNode,ms(),bt(bn),bt(pn),Uu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(_o(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(uc(ri),ri=null))),Qu(n,i),gn(i),null;case 5:Lu(i);var d=Pr(Ea.current);if(a=i.type,n!==null&&i.stateNode!=null)yh(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Pr(_i.current),_o(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[gi]=i,u[va]=p,n=(i.mode&1)!==0,a){case"dialog":Rt("cancel",u),Rt("close",u);break;case"iframe":case"object":case"embed":Rt("load",u);break;case"video":case"audio":for(d=0;d<ma.length;d++)Rt(ma[d],u);break;case"source":Rt("error",u);break;case"img":case"image":case"link":Rt("error",u),Rt("load",u);break;case"details":Rt("toggle",u);break;case"input":et(u,p),Rt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Rt("invalid",u);break;case"textarea":L(u,p),Rt("invalid",u)}Pe(a,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var I=p[M];M==="children"?typeof I=="string"?u.textContent!==I&&(p.suppressHydrationWarning!==!0&&lo(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&lo(u.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Rt("scroll",u)}switch(a){case"input":nt(u),rt(u,p,!0);break;case"textarea":nt(u),J(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=uo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ee(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[gi]=i,n[va]=u,xh(n,i,!1,!1),i.stateNode=n;e:{switch(M=$e(a,u),a){case"dialog":Rt("cancel",n),Rt("close",n),d=u;break;case"iframe":case"object":case"embed":Rt("load",n),d=u;break;case"video":case"audio":for(d=0;d<ma.length;d++)Rt(ma[d],n);d=u;break;case"source":Rt("error",n),d=u;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),d=u;break;case"details":Rt("toggle",n),d=u;break;case"input":et(n,u),d=We(n,u),Rt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=j({},u,{value:void 0}),Rt("invalid",n);break;case"textarea":L(n,u),d=kt(n,u),Rt("invalid",n);break;default:d=u}Pe(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var z=I[p];p==="style"?De(n,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&He(n,z)):p==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Me(n,z):typeof z=="number"&&Me(n,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Rt("scroll",n):z!=null&&R(n,p,z,M))}switch(a){case"input":nt(n),rt(n,u,!1);break;case"textarea":nt(n),J(n);break;case"option":u.value!=null&&n.setAttribute("value",""+be(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?Et(n,!!u.multiple,p,!1):u.defaultValue!=null&&Et(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=uo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)Sh(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Pr(Ea.current),Pr(_i.current),_o(i)){if(u=i.stateNode,a=i.memoizedProps,u[gi]=i,(p=u.nodeValue!==a)&&(n=Fn,n!==null))switch(n.tag){case 3:lo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lo(u.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return gn(i),null;case 13:if(bt(Nt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Td(),fs(),i.flags|=98560,p=!1;else if(p=_o(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[gi]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else ri!==null&&(uc(ri),ri=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Nt.current&1)!==0?Zt===0&&(Zt=3):dc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return ms(),Qu(n,i),n===null&&ga(i.stateNode.containerInfo),gn(i),null;case 10:return Au(i.type._context),gn(i),null;case 17:return Cn(i.type)&&fo(),gn(i),null;case 19:if(bt(Nt),p=i.memoizedState,p===null)return gn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)ba(p,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Eo(n),M!==null){for(i.flags|=128,ba(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,n=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return wt(Nt,Nt.current&1|2),i.child}n=n.sibling}p.tail!==null&&Ne()>xs&&(i.flags|=128,u=!0,ba(p,!1),i.lanes=4194304)}else{if(!u)if(n=Eo(M),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ba(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Lt)return gn(i),null}else 2*Ne()-p.renderingStartTime>xs&&a!==1073741824&&(i.flags|=128,u=!0,ba(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ne(),i.sibling=null,a=Nt.current,wt(Nt,u?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return fc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(zn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function O_(n,i){switch(yu(i),i.tag){case 1:return Cn(i.type)&&fo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ms(),bt(bn),bt(pn),Uu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Lu(i),null;case 13:if(bt(Nt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));fs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return bt(Nt),null;case 4:return ms(),null;case 10:return Au(i.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var Do=!1,_n=!1,F_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function _s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Bt(n,i,u)}else a.current=null}function Ju(n,i,a){try{a()}catch(u){Bt(n,i,u)}}var Mh=!1;function k_(n,i){if(fu=Za,n=ed(),iu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,I=-1,z=-1,Q=0,ge=0,ye=n,me=null;t:for(;;){for(var Ie;ye!==a||d!==0&&ye.nodeType!==3||(I=M+d),ye!==p||u!==0&&ye.nodeType!==3||(z=M+u),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)me=ye,ye=Ie;for(;;){if(ye===n)break t;if(me===a&&++Q===d&&(I=M),me===p&&++ge===u&&(z=M),(Ie=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ie}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(du={focusedElem:n,selectionRange:a},Za=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var ze=ke.memoizedProps,Vt=ke.memoizedState,X=i.stateNode,G=X.getSnapshotBeforeUpdate(i.elementType===i.type?ze:si(i.type,ze),Vt);X.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Y=i.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Bt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return ke=Mh,Mh=!1,ke}function Ca(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ju(i,a,p)}d=d.next}while(d!==u)}}function Uo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function ec(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Eh(n){var i=n.alternate;i!==null&&(n.alternate=null,Eh(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[va],delete i[gu],delete i[y_],delete i[S_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Th(n){return n.tag===5||n.tag===3||n.tag===4}function wh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Th(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function tc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=uo));else if(u!==4&&(n=n.child,n!==null))for(tc(n,i,a),n=n.sibling;n!==null;)tc(n,i,a),n=n.sibling}function nc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(nc(n,i,a),n=n.sibling;n!==null;)nc(n,i,a),n=n.sibling}var un=null,ai=!1;function or(n,i,a){for(a=a.child;a!==null;)Ah(n,i,a),a=a.sibling}function Ah(n,i,a){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 5:_n||_s(a,i);case 6:var u=un,d=ai;un=null,or(n,i,a),un=u,ai=d,un!==null&&(ai?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(ai?(n=un,a=a.stateNode,n.nodeType===8?mu(n.parentNode,a):n.nodeType===1&&mu(n,a),oa(n)):mu(un,a.stateNode));break;case 4:u=un,d=ai,un=a.stateNode.containerInfo,ai=!0,or(n,i,a),un=u,ai=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Ju(a,i,M),d=d.next}while(d!==u)}or(n,i,a);break;case 1:if(!_n&&(_s(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){Bt(a,i,I)}or(n,i,a);break;case 21:or(n,i,a);break;case 22:a.mode&1?(_n=(u=_n)||a.memoizedState!==null,or(n,i,a),_n=u):or(n,i,a);break;default:or(n,i,a)}}function Rh(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new F_),i.forEach(function(u){var d=Y_.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:un=I.stateNode,ai=!1;break e;case 3:un=I.stateNode.containerInfo,ai=!0;break e;case 4:un=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(un===null)throw Error(t(160));Ah(p,M,d),un=null,ai=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(Q){Bt(d,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bh(i,n),i=i.sibling}function bh(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),xi(n),u&4){try{Ca(3,n,n.return),Uo(3,n)}catch(ze){Bt(n,n.return,ze)}try{Ca(5,n,n.return)}catch(ze){Bt(n,n.return,ze)}}break;case 1:oi(i,n),xi(n),u&512&&a!==null&&_s(a,a.return);break;case 5:if(oi(i,n),xi(n),u&512&&a!==null&&_s(a,a.return),n.flags&32){var d=n.stateNode;try{Me(d,"")}catch(ze){Bt(n,n.return,ze)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,M=a!==null?a.memoizedProps:p,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Ke(d,p),$e(I,M);var Q=$e(I,p);for(M=0;M<z.length;M+=2){var ge=z[M],ye=z[M+1];ge==="style"?De(d,ye):ge==="dangerouslySetInnerHTML"?He(d,ye):ge==="children"?Me(d,ye):R(d,ge,ye,Q)}switch(I){case"input":vt(d,p);break;case"textarea":w(d,p);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?Et(d,!!p.multiple,Ie,!1):me!==!!p.multiple&&(p.defaultValue!=null?Et(d,!!p.multiple,p.defaultValue,!0):Et(d,!!p.multiple,p.multiple?[]:"",!1))}d[va]=p}catch(ze){Bt(n,n.return,ze)}}break;case 6:if(oi(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ze){Bt(n,n.return,ze)}}break;case 3:if(oi(i,n),xi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(i.containerInfo)}catch(ze){Bt(n,n.return,ze)}break;case 4:oi(i,n),xi(n);break;case 13:oi(i,n),xi(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(sc=Ne())),u&4&&Rh(n);break;case 22:if(ge=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(Q=_n)||ge,oi(i,n),_n=Q):oi(i,n),xi(n),u&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!ge&&(n.mode&1)!==0)for(Fe=n,ge=n.child;ge!==null;){for(ye=Fe=ge;Fe!==null;){switch(me=Fe,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:Ca(4,me,me.return);break;case 1:_s(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){u=me,a=me.return;try{i=u,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(ze){Bt(u,a,ze)}}break;case 5:_s(me,me.return);break;case 22:if(me.memoizedState!==null){Lh(ye);continue}}Ie!==null?(Ie.return=me,Fe=Ie):Lh(ye)}ge=ge.sibling}e:for(ge=null,ye=n;;){if(ye.tag===5){if(ge===null){ge=ye;try{d=ye.stateNode,Q?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=ye.stateNode,z=ye.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=fe("display",M))}catch(ze){Bt(n,n.return,ze)}}}else if(ye.tag===6){if(ge===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(ze){Bt(n,n.return,ze)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ge===ye&&(ge=null),ye=ye.return}ge===ye&&(ge=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:oi(i,n),xi(n),u&4&&Rh(n);break;case 21:break;default:oi(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Th(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Me(d,""),u.flags&=-33);var p=wh(n);nc(n,p,d);break;case 3:case 4:var M=u.stateNode.containerInfo,I=wh(n);tc(n,I,M);break;default:throw Error(t(161))}}catch(z){Bt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function z_(n,i,a){Fe=n,Ch(n)}function Ch(n,i,a){for(var u=(n.mode&1)!==0;Fe!==null;){var d=Fe,p=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Do;if(!M){var I=d.alternate,z=I!==null&&I.memoizedState!==null||_n;I=Do;var Q=_n;if(Do=M,(_n=z)&&!Q)for(Fe=d;Fe!==null;)M=Fe,z=M.child,M.tag===22&&M.memoizedState!==null?Dh(d):z!==null?(z.return=M,Fe=z):Dh(d);for(;p!==null;)Fe=p,Ch(p),p=p.sibling;Fe=d,Do=I,_n=Q}Ph(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Fe=p):Ph(n)}}function Ph(n){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Uo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ld(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ld(i,M,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var ge=Q.memoizedState;if(ge!==null){var ye=ge.dehydrated;ye!==null&&oa(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&ec(i)}catch(me){Bt(i,i.return,me)}}if(i===n){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function Lh(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function Dh(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Uo(4,i)}catch(z){Bt(i,a,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(z){Bt(i,d,z)}}var p=i.return;try{ec(i)}catch(z){Bt(i,p,z)}break;case 5:var M=i.return;try{ec(i)}catch(z){Bt(i,M,z)}}}catch(z){Bt(i,i.return,z)}if(i===n){Fe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Fe=I;break}Fe=i.return}}var B_=Math.ceil,Io=C.ReactCurrentDispatcher,ic=C.ReactCurrentOwner,qn=C.ReactCurrentBatchConfig,ht=0,sn=null,Yt=null,cn=0,zn=0,vs=nr(0),Zt=0,Pa=null,Dr=0,No=0,rc=0,La=null,Ln=null,sc=0,xs=1/0,Di=null,Oo=!1,ac=null,lr=null,Fo=!1,ur=null,ko=0,Da=0,oc=null,zo=-1,Bo=0;function En(){return(ht&6)!==0?Ne():zo!==-1?zo:zo=Ne()}function cr(n){return(n.mode&1)===0?1:(ht&2)!==0&&cn!==0?cn&-cn:E_.transition!==null?(Bo===0&&(Bo=wf()),Bo):(n=St,n!==0||(n=window.event,n=n===void 0?16:If(n.type)),n)}function li(n,i,a,u){if(50<Da)throw Da=0,oc=null,Error(t(185));na(n,a,u),((ht&2)===0||n!==sn)&&(n===sn&&((ht&2)===0&&(No|=a),Zt===4&&fr(n,cn)),Dn(n,u),a===1&&ht===0&&(i.mode&1)===0&&(xs=Ne()+500,po&&rr()))}function Dn(n,i){var a=n.callbackNode;Hl(n,i);var u=nn(n,n===sn?cn:0);if(u===0)a!==null&&Ze(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Ze(a),i===1)n.tag===0?M_(Ih.bind(null,n)):xd(Ih.bind(null,n)),v_(function(){(ht&6)===0&&rr()}),a=null;else{switch(Af(u)){case 1:a=Tt;break;case 4:a=Pt;break;case 16:a=ln;break;case 536870912:a=It;break;default:a=ln}a=Gh(a,Uh.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Uh(n,i){if(zo=-1,Bo=0,(ht&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ys()&&n.callbackNode!==a)return null;var u=nn(n,n===sn?cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ho(n,u);else{i=u;var d=ht;ht|=2;var p=Oh();(sn!==n||cn!==i)&&(Di=null,xs=Ne()+500,Ir(n,i));do try{V_();break}catch(I){Nh(n,I)}while(!0);wu(),Io.current=p,ht=d,Yt!==null?i=0:(sn=null,cn=0,i=Zt)}if(i!==0){if(i===2&&(d=Qr(n),d!==0&&(u=d,i=lc(n,d))),i===1)throw a=Pa,Ir(n,0),fr(n,u),Dn(n,Ne()),a;if(i===6)fr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!H_(d)&&(i=Ho(n,u),i===2&&(p=Qr(n),p!==0&&(u=p,i=lc(n,p))),i===1))throw a=Pa,Ir(n,0),fr(n,u),Dn(n,Ne()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Nr(n,Ln,Di);break;case 3:if(fr(n,u),(u&130023424)===u&&(i=sc+500-Ne(),10<i)){if(nn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){En(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=pu(Nr.bind(null,n,Ln,Di),i);break}Nr(n,Ln,Di);break;case 4:if(fr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-Kt(u);p=1<<M,M=i[M],M>d&&(d=M),u&=~p}if(u=d,u=Ne()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*B_(u/1960))-u,10<u){n.timeoutHandle=pu(Nr.bind(null,n,Ln,Di),u);break}Nr(n,Ln,Di);break;case 5:Nr(n,Ln,Di);break;default:throw Error(t(329))}}}return Dn(n,Ne()),n.callbackNode===a?Uh.bind(null,n):null}function lc(n,i){var a=La;return n.current.memoizedState.isDehydrated&&(Ir(n,i).flags|=256),n=Ho(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&uc(i)),n}function uc(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function H_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!ii(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~rc,i&=~No,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Kt(i),u=1<<a;n[a]=-1,i&=~u}}function Ih(n){if((ht&6)!==0)throw Error(t(327));ys();var i=nn(n,0);if((i&1)===0)return Dn(n,Ne()),null;var a=Ho(n,i);if(n.tag!==0&&a===2){var u=Qr(n);u!==0&&(i=u,a=lc(n,u))}if(a===1)throw a=Pa,Ir(n,0),fr(n,i),Dn(n,Ne()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Nr(n,Ln,Di),Dn(n,Ne()),null}function cc(n,i){var a=ht;ht|=1;try{return n(i)}finally{ht=a,ht===0&&(xs=Ne()+500,po&&rr())}}function Ur(n){ur!==null&&ur.tag===0&&(ht&6)===0&&ys();var i=ht;ht|=1;var a=qn.transition,u=St;try{if(qn.transition=null,St=1,n)return n()}finally{St=u,qn.transition=a,ht=i,(ht&6)===0&&rr()}}function fc(){zn=vs.current,bt(vs)}function Ir(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,__(a)),Yt!==null)for(a=Yt.return;a!==null;){var u=a;switch(yu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&fo();break;case 3:ms(),bt(bn),bt(pn),Uu();break;case 5:Lu(u);break;case 4:ms();break;case 13:bt(Nt);break;case 19:bt(Nt);break;case 10:Au(u.type._context);break;case 22:case 23:fc()}a=a.return}if(sn=n,Yt=n=dr(n.current,null),cn=zn=i,Zt=0,Pa=null,rc=No=Dr=0,Ln=La=null,Cr!==null){for(i=0;i<Cr.length;i++)if(a=Cr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var M=p.next;p.next=d,u.next=M}a.pending=u}Cr=null}return n}function Nh(n,i){do{var a=Yt;try{if(wu(),To.current=bo,wo){for(var u=Ot.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}wo=!1}if(Lr=0,rn=$t=Ot=null,Ta=!1,wa=0,ic.current=null,a===null||a.return===null){Zt=1,Pa=i,Yt=null;break}e:{var p=n,M=a.return,I=a,z=i;if(i=cn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var Q=z,ge=I,ye=ge.tag;if((ge.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=ah(M);if(Ie!==null){Ie.flags&=-257,oh(Ie,M,I,p,i),Ie.mode&1&&sh(p,Q,i),i=Ie,z=Q;var ke=i.updateQueue;if(ke===null){var ze=new Set;ze.add(z),i.updateQueue=ze}else ke.add(z);break e}else{if((i&1)===0){sh(p,Q,i),dc();break e}z=Error(t(426))}}else if(Lt&&I.mode&1){var Vt=ah(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),oh(Vt,M,I,p,i),Eu(gs(z,I));break e}}p=z=gs(z,I),Zt!==4&&(Zt=2),La===null?La=[p]:La.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var X=ih(p,z,i);Pd(p,X);break e;case 1:I=z;var G=p.type,Y=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(lr===null||!lr.has(Y)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=rh(p,I,i);Pd(p,Te);break e}}p=p.return}while(p!==null)}kh(a)}catch(Be){i=Be,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Oh(){var n=Io.current;return Io.current=bo,n===null?bo:n}function dc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),sn===null||(Dr&268435455)===0&&(No&268435455)===0||fr(sn,cn)}function Ho(n,i){var a=ht;ht|=2;var u=Oh();(sn!==n||cn!==i)&&(Di=null,Ir(n,i));do try{G_();break}catch(d){Nh(n,d)}while(!0);if(wu(),ht=a,Io.current=u,Yt!==null)throw Error(t(261));return sn=null,cn=0,Zt}function G_(){for(;Yt!==null;)Fh(Yt)}function V_(){for(;Yt!==null&&!Qe();)Fh(Yt)}function Fh(n){var i=Hh(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?kh(n):Yt=i,ic.current=null}function kh(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=N_(a,i,zn),a!==null){Yt=a;return}}else{if(a=O_(a,i),a!==null){a.flags&=32767,Yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Zt===0&&(Zt=5)}function Nr(n,i,a){var u=St,d=qn.transition;try{qn.transition=null,St=1,W_(n,i,a,u)}finally{qn.transition=d,St=u}return null}function W_(n,i,a,u){do ys();while(ur!==null);if((ht&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Tg(n,p),n===sn&&(Yt=sn=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fo||(Fo=!0,Gh(ln,function(){return ys(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=qn.transition,qn.transition=null;var M=St;St=1;var I=ht;ht|=4,ic.current=null,k_(n,a),bh(a,n),c_(du),Za=!!fu,du=fu=null,n.current=a,z_(a),ct(),ht=I,St=M,qn.transition=p}else n.current=a;if(Fo&&(Fo=!1,ur=n,ko=d),p=n.pendingLanes,p===0&&(lr=null),zt(a.stateNode),Dn(n,Ne()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Oo)throw Oo=!1,n=ac,ac=null,n;return(ko&1)!==0&&n.tag!==0&&ys(),p=n.pendingLanes,(p&1)!==0?n===oc?Da++:(Da=0,oc=n):Da=0,rr(),null}function ys(){if(ur!==null){var n=Af(ko),i=qn.transition,a=St;try{if(qn.transition=null,St=16>n?16:n,ur===null)var u=!1;else{if(n=ur,ur=null,ko=0,(ht&6)!==0)throw Error(t(331));var d=ht;for(ht|=4,Fe=n.current;Fe!==null;){var p=Fe,M=p.child;if((Fe.flags&16)!==0){var I=p.deletions;if(I!==null){for(var z=0;z<I.length;z++){var Q=I[z];for(Fe=Q;Fe!==null;){var ge=Fe;switch(ge.tag){case 0:case 11:case 15:Ca(8,ge,p)}var ye=ge.child;if(ye!==null)ye.return=ge,Fe=ye;else for(;Fe!==null;){ge=Fe;var me=ge.sibling,Ie=ge.return;if(Eh(ge),ge===Q){Fe=null;break}if(me!==null){me.return=Ie,Fe=me;break}Fe=Ie}}}var ke=p.alternate;if(ke!==null){var ze=ke.child;if(ze!==null){ke.child=null;do{var Vt=ze.sibling;ze.sibling=null,ze=Vt}while(ze!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Fe=M;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ca(9,p,p.return)}var X=p.sibling;if(X!==null){X.return=p.return,Fe=X;break e}Fe=p.return}}var G=n.current;for(Fe=G;Fe!==null;){M=Fe;var Y=M.child;if((M.subtreeFlags&2064)!==0&&Y!==null)Y.return=M,Fe=Y;else e:for(M=G;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Uo(9,I)}}catch(Be){Bt(I,I.return,Be)}if(I===M){Fe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Fe=Te;break e}Fe=I.return}}if(ht=d,rr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(st,n)}catch{}u=!0}return u}finally{St=a,qn.transition=i}}return!1}function zh(n,i,a){i=gs(a,i),i=ih(n,i,1),n=ar(n,i,1),i=En(),n!==null&&(na(n,1,i),Dn(n,i))}function Bt(n,i,a){if(n.tag===3)zh(n,n,a);else for(;i!==null;){if(i.tag===3){zh(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(lr===null||!lr.has(u))){n=gs(a,n),n=rh(i,n,1),i=ar(i,n,1),n=En(),i!==null&&(na(i,1,n),Dn(i,n));break}}i=i.return}}function j_(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(cn&a)===a&&(Zt===4||Zt===3&&(cn&130023424)===cn&&500>Ne()-sc?Ir(n,0):rc|=a),Dn(n,i)}function Bh(n,i){i===0&&((n.mode&1)===0?i=1:(i=Vn,Vn<<=1,(Vn&130023424)===0&&(Vn=4194304)));var a=En();n=Ci(n,i),n!==null&&(na(n,i,a),Dn(n,a))}function X_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Bh(n,a)}function Y_(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Bh(n,a)}var Hh;Hh=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,I_(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,Lt&&(i.flags&1048576)!==0&&yd(i,go,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Lo(n,i),n=i.pendingProps;var d=ls(i,pn.current);ps(i,a),d=Ou(null,i,u,n,d,a);var p=Fu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(u)?(p=!0,ho(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Cu(i),d.updater=Co,i.stateNode=d,d._reactInternals=i,Vu(i,u,n,a),i=Yu(null,i,u,!0,p,a)):(i.tag=0,Lt&&p&&xu(i),Mn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Lo(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=K_(u),n=si(u,n),d){case 0:i=Xu(null,i,u,n,a);break e;case 1:i=hh(null,i,u,n,a);break e;case 11:i=lh(null,i,u,n,a);break e;case 14:i=uh(null,i,u,si(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:si(u,d),Xu(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:si(u,d),hh(n,i,u,d,a);case 3:e:{if(ph(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,Cd(n,i),Mo(i,u,null,a);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=gs(Error(t(423)),i),i=mh(n,i,u,a,d);break e}else if(u!==d){d=gs(Error(t(424)),i),i=mh(n,i,u,a,d);break e}else for(kn=tr(i.stateNode.containerInfo.firstChild),Fn=i,Lt=!0,ri=null,a=Rd(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fs(),u===d){i=Li(n,i,a);break e}Mn(n,i,u,a)}i=i.child}return i;case 5:return Dd(i),n===null&&Mu(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,M=d.children,hu(u,d)?M=null:p!==null&&hu(u,p)&&(i.flags|=32),dh(n,i),Mn(n,i,M,a),i.child;case 6:return n===null&&Mu(i),null;case 13:return gh(n,i,a);case 4:return Pu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ds(i,null,u,a):Mn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:si(u,d),lh(n,i,u,d,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,wt(xo,u._currentValue),u._currentValue=M,p!==null)if(ii(p.value,M)){if(p.children===d.children&&!bn.current){i=Li(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){M=p.child;for(var z=I.firstContext;z!==null;){if(z.context===u){if(p.tag===1){z=Pi(-1,a&-a),z.tag=2;var Q=p.updateQueue;if(Q!==null){Q=Q.shared;var ge=Q.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),Q.pending=z}}p.lanes|=a,z=p.alternate,z!==null&&(z.lanes|=a),Ru(p.return,a,i),I.lanes|=a;break}z=z.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),Ru(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Mn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ps(i,a),d=Xn(d),u=u(d),i.flags|=1,Mn(n,i,u,a),i.child;case 14:return u=i.type,d=si(u,i.pendingProps),d=si(u.type,d),uh(n,i,u,d,a);case 15:return ch(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:si(u,d),Lo(n,i),i.tag=1,Cn(u)?(n=!0,ho(i)):n=!1,ps(i,a),th(i,u,d),Vu(i,u,d,a),Yu(null,i,u,!0,n,a);case 19:return vh(n,i,a);case 22:return fh(n,i,a)}throw Error(t(156,i.tag))};function Gh(n,i){return Xe(n,i)}function q_(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,i,a,u){return new q_(n,i,a,u)}function hc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function K_(n){if(typeof n=="function")return hc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pe)return 11;if(n===se)return 14}return 2}function dr(n,i){var a=n.alternate;return a===null?(a=Kn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Go(n,i,a,u,d,p){var M=2;if(u=n,typeof n=="function")hc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case D:return Or(a.children,d,p,i);case ne:M=8,d|=8;break;case b:return n=Kn(12,a,i,d|2),n.elementType=b,n.lanes=p,n;case $:return n=Kn(13,a,i,d),n.elementType=$,n.lanes=p,n;case ae:return n=Kn(19,a,i,d),n.elementType=ae,n.lanes=p,n;case ie:return Vo(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:M=10;break e;case de:M=9;break e;case pe:M=11;break e;case se:M=14;break e;case ce:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Kn(M,a,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function Or(n,i,a,u){return n=Kn(7,n,u,i),n.lanes=a,n}function Vo(n,i,a,u){return n=Kn(22,n,u,i),n.elementType=ie,n.lanes=a,n.stateNode={isHidden:!1},n}function pc(n,i,a){return n=Kn(6,n,null,i),n.lanes=a,n}function mc(n,i,a){return i=Kn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $_(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function gc(n,i,a,u,d,p,M,I,z){return n=new $_(n,i,a,I,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(p),n}function Z_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Vh(n){if(!n)return ir;n=n._reactInternals;e:{if(P(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Cn(a))return _d(n,a,i)}return i}function Wh(n,i,a,u,d,p,M,I,z){return n=gc(a,u,!0,n,d,p,M,I,z),n.context=Vh(null),a=n.current,u=En(),d=cr(a),p=Pi(u,d),p.callback=i??null,ar(a,p,d),n.current.lanes=d,na(n,d,u),Dn(n,u),n}function Wo(n,i,a,u){var d=i.current,p=En(),M=cr(d);return a=Vh(a),i.context===null?i.context=a:i.pendingContext=a,i=Pi(p,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ar(d,i,M),n!==null&&(li(n,d,M,p),So(n,d,M)),M}function jo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jh(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function _c(n,i){jh(n,i),(n=n.alternate)&&jh(n,i)}function Q_(){return null}var Xh=typeof reportError=="function"?reportError:function(n){console.error(n)};function vc(n){this._internalRoot=n}Xo.prototype.render=vc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Wo(n,i,null,null)},Xo.prototype.unmount=vc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ur(function(){Wo(null,n,null,null)}),i[wi]=null}};function Xo(n){this._internalRoot=n}Xo.prototype.unstable_scheduleHydration=function(n){if(n){var i=Cf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,n),a===0&&Df(n)}};function xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Yh(){}function J_(n,i,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var Q=jo(M);p.call(Q)}}var M=Wh(i,u,n,0,null,!1,!1,"",Yh);return n._reactRootContainer=M,n[wi]=M.current,ga(n.nodeType===8?n.parentNode:n),Ur(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var Q=jo(z);I.call(Q)}}var z=gc(n,0,!1,null,null,!1,!1,"",Yh);return n._reactRootContainer=z,n[wi]=z.current,ga(n.nodeType===8?n.parentNode:n),Ur(function(){Wo(i,z,a,u)}),z}function qo(n,i,a,u,d){var p=a._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var I=d;d=function(){var z=jo(M);I.call(z)}}Wo(i,M,n,d)}else M=J_(a,i,n,d,u);return jo(M)}Rf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ti(i.pendingLanes);a!==0&&(Vl(i,a|1),Dn(i,Ne()),(ht&6)===0&&(xs=Ne()+500,rr()))}break;case 13:Ur(function(){var u=Ci(n,1);if(u!==null){var d=En();li(u,n,1,d)}}),_c(n,1)}},Wl=function(n){if(n.tag===13){var i=Ci(n,134217728);if(i!==null){var a=En();li(i,n,134217728,a)}_c(n,134217728)}},bf=function(n){if(n.tag===13){var i=cr(n),a=Ci(n,i);if(a!==null){var u=En();li(a,n,i,u)}_c(n,i)}},Cf=function(){return St},Pf=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},Ce=function(n,i,a){switch(i){case"input":if(vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=co(u);if(!d)throw Error(t(90));K(u),vt(u,d)}}}break;case"textarea":w(n,a);break;case"select":i=a.value,i!=null&&Et(n,!!a.multiple,i,!1)}},xt=cc,hn=Ur;var ev={usingClientEntryPoint:!1,Events:[xa,as,co,at,pt,cc]},Ua={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=le(n),n===null?null:n.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||Q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{st=Ko.inject(tv),Rn=Ko}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev,Un.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(i))throw Error(t(200));return Z_(n,i,null,a)},Un.createRoot=function(n,i){if(!xc(n))throw Error(t(299));var a=!1,u="",d=Xh;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=gc(n,1,!1,null,null,a,!1,u,d),n[wi]=i.current,ga(n.nodeType===8?n.parentNode:n),new vc(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=le(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Ur(n)},Un.hydrate=function(n,i,a){if(!Yo(i))throw Error(t(200));return qo(null,n,i,!0,a)},Un.hydrateRoot=function(n,i,a){if(!xc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",M=Xh;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=Wh(i,null,n,1,a??null,d,!1,p,M),n[wi]=i.current,ga(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Xo(i)},Un.render=function(n,i,a){if(!Yo(i))throw Error(t(200));return qo(null,n,i,!1,a)},Un.unmountComponentAtNode=function(n){if(!Yo(n))throw Error(t(40));return n._reactRootContainer?(Ur(function(){qo(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1},Un.unstable_batchedUpdates=cc,Un.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Yo(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return qo(n,i,a,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var tp;function cv(){if(tp)return Mc.exports;tp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mc.exports=uv(),Mc.exports}var np;function fv(){if(np)return $o;np=1;var s=cv();return $o.createRoot=s.createRoot,$o.hydrateRoot=s.hydrateRoot,$o}var dv=fv();const hv=Om(dv);class pv{constructor(){this.s=[],this.i=-1,this.limit=250}push(e){this.i<this.s.length-1&&(this.s=this.s.slice(0,this.i+1)),this.s.push(e),this.s.length>this.limit&&this.s.shift(),this.i=this.s.length-1}canUndo(){return this.i>0}canRedo(){return this.i<this.s.length-1}undo(){return this.canUndo()?(this.i--,this.s[this.i]):null}redo(){return this.canRedo()?(this.i++,this.s[this.i]):null}}const Ht=64,fn=64;function mv(){const s=document.createElement("canvas");s.width=Ht,s.height=fn;const e=s.getContext("2d");return e.clearRect(0,0,Ht,fn),e.getImageData(0,0,Ht,fn)}function El(s){return new ImageData(new Uint8ClampedArray(s.data),s.width,s.height)}function Fm(s){return new Promise(e=>s.toBlob(t=>e(t),"image/png"))}function gv(s,e="skin.png"){const t=document.createElement("a");t.href=s.toDataURL("image/png"),t.download=e,t.click()}async function _v(s){const e=await Fm(s),t=new ClipboardItem({"image/png":e});await navigator.clipboard.write([t])}async function vv(s){const e=URL.createObjectURL(s),t=new Image;await new Promise((l,f)=>{t.onload=()=>l(),t.onerror=f,t.src=e});const r=document.createElement("canvas");r.width=Ht,r.height=fn;const o=r.getContext("2d");return o.drawImage(t,0,0,Ht,fn),URL.revokeObjectURL(e),o.getImageData(0,0,Ht,fn)}function ip(){const s=document.createElement("canvas");s.width=Ht,s.height=fn;const e=s.getContext("2d");return e.fillStyle="#7AA1FF",e.fillRect(0,0,Ht,fn),e.fillStyle="#C58C5A",e.fillRect(8,8,8,8),e.fillStyle="#000",e.fillRect(10,11,2,2),e.fillRect(14,11,2,2),e.fillStyle="#8B5E3C",e.fillRect(10,14,6,1),e.fillStyle="#3AA3A3",e.fillRect(16,20,8,12),e.fillStyle="#3AA3A3",e.fillRect(40,20,4,12),e.fillRect(48,20,4,12),e.fillStyle="#6B4F2A",e.fillRect(8,52,4,12),e.fillRect(20,52,4,12),e.getImageData(0,0,Ht,fn)}function xv({tool:s,setTool:e,onUndo:t,onRedo:r}){const o=({t:l,icon:f})=>je.jsx("button",{className:`tool ${s===l?"ring-2 ring-neon-400":""}`,title:l,onClick:()=>{l==="undo"?t():l==="redo"?r():e(l)},children:je.jsx("span",{className:"material",children:f})});return je.jsxs("div",{className:"tool-rail",children:[je.jsx(o,{t:"brush",icon:"🖌️"}),je.jsx(o,{t:"eraser",icon:"🩹"}),je.jsx(o,{t:"fill",icon:"🪣"}),je.jsx(o,{t:"picker",icon:"🎯"}),je.jsx(o,{t:"hand",icon:"✋"}),je.jsx("div",{className:"h-px bg-cyber-edge my-1"}),je.jsx(o,{t:"undo",icon:"↶"}),je.jsx(o,{t:"redo",icon:"↷"})]})}function rp(s,e,t){let r=t*e,o=r*(1-Math.abs(s/60%2-1)),l=t-r,f=0,c=0,h=0;return s<60?(f=r,c=o):s<120?(f=o,c=r):s<180?(c=r,h=o):s<240?(c=o,h=r):s<300?(f=o,h=r):(f=r,h=o),[Math.round((f+l)*255),Math.round((c+l)*255),Math.round((h+l)*255)]}const yv=(s,e,t)=>"#"+[s,e,t].map(r=>r.toString(16).padStart(2,"0")).join("");function Sv({color:s,onChange:e}){const t=Jt.useRef(null);Jt.useEffect(()=>{const o=t.current,l=o.getContext("2d"),f=o.width/2;for(let h=-f;h<f;h++)for(let m=-f;m<f;m++){const g=Math.sqrt(m*m+h*h);if(g>f)continue;let y=Math.atan2(h,m)*180/Math.PI;y<0&&(y+=360);const v=g/f;rp(y,v,1),((h+f)*o.width+(m+f))*4,l.getImageData(0,0,o.width,o.height)}const c=l.createImageData(o.width,o.height);for(let h=0;h<o.height;h++)for(let m=0;m<o.width;m++){const g=m-f,y=h-f,v=Math.sqrt(g*g+y*y);if(v>f)continue;let S=Math.atan2(y,g)*180/Math.PI;S<0&&(S+=360);const T=v/f,[E,x,_]=rp(S,T,1),U=(h*o.width+m)*4;c.data[U]=E,c.data[U+1]=x,c.data[U+2]=_,c.data[U+3]=255}l.putImageData(c,0,0)},[]);function r(o){const l=t.current,f=l.getBoundingClientRect(),c=o.clientX-f.left,h=o.clientY-f.top,g=l.getContext("2d").getImageData(Math.floor(c),Math.floor(h),1,1).data,y=yv(g[0],g[1],g[2]);e(y)}return je.jsx("canvas",{ref:t,width:220,height:220,className:"color-wheel neon-card",onMouseDown:r,onMouseMove:o=>o.buttons===1&&r(o)})}function Mv({color:s,setColor:e,size:t,setSize:r,mirror:o,setMirror:l,grid:f,setGrid:c,onImport:h,onExport:m,onCopy:g}){function y(v){const S=v.target.files?.[0];S&&h(S),v.currentTarget.value=""}return je.jsxs("div",{className:"fixed right-4 top-20 w-[280px] flex flex-col gap-3",children:[je.jsxs("div",{className:"neon-card p-3",children:[je.jsx("div",{className:"font-semibold mb-2",children:"Farbe"}),je.jsx(Sv,{color:s,onChange:e}),je.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[je.jsx("span",{className:"label",children:"Aktuell"}),je.jsx("input",{className:"input",type:"color",value:s,onChange:v=>e(v.target.value)}),je.jsx("span",{className:"text-xs",children:s})]}),je.jsxs("div",{className:"mt-3",children:[je.jsxs("label",{className:"label",children:["Pinselgröße: ",t,"px"]}),je.jsx("input",{className:"w-full",type:"range",min:1,max:12,value:t,onChange:v=>r(parseInt(v.target.value))})]}),je.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[je.jsxs("label",{className:"label flex items-center gap-2",children:[je.jsx("input",{type:"checkbox",checked:o,onChange:v=>l(v.target.checked)})," Mirror"]}),je.jsxs("label",{className:"label flex items-center gap-2",children:[je.jsx("input",{type:"checkbox",checked:f,onChange:v=>c(v.target.checked)})," Grid"]})]})]}),je.jsxs("div",{className:"neon-card p-3",children:[je.jsx("div",{className:"font-semibold mb-2",children:"Import / Export"}),je.jsx("input",{id:"file",type:"file",accept:"image/png",className:"hidden",onChange:y}),je.jsx("label",{htmlFor:"file",className:"btn cursor-pointer",children:"Import PNG"}),je.jsxs("div",{className:"flex gap-2 mt-2",children:[je.jsx("button",{className:"btn",onClick:m,children:"Download"}),je.jsx("button",{className:"btn-ghost",onClick:g,children:"Copy"})]})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="156",Ss={ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ev=0,sp=1,Tv=2,km=1,wv=2,zi=3,Si=0,In=1,ti=2,Vi=0,js=1,ap=2,op=3,lp=4,Av=5,Vs=100,Rv=101,bv=102,up=103,cp=104,Cv=200,Pv=201,Lv=202,Dv=203,zm=204,Bm=205,Uv=206,Iv=207,Nv=208,Ov=209,Fv=210,kv=0,zv=1,Bv=2,sf=3,Hv=4,Gv=5,Vv=6,Wv=7,Hm=0,jv=1,Xv=2,yr=0,Yv=1,qv=2,Kv=3,$v=4,Zv=5,Gm=300,Ys=301,qs=302,Rl=303,af=304,Ll=306,of=1e3,di=1001,lf=1002,Ft=1003,fp=1004,wc=1005,Jn=1006,Qv=1007,ja=1008,Sr=1009,Jv=1010,e0=1011,vf=1012,Vm=1013,xr=1014,Hi=1015,Ks=1016,Wm=1017,jm=1018,Wr=1020,t0=1021,hi=1023,n0=1024,i0=1025,jr=1026,$s=1027,r0=1028,Xm=1029,s0=1030,Ym=1031,qm=1033,Ac=33776,Rc=33777,bc=33778,Cc=33779,dp=35840,hp=35841,pp=35842,mp=35843,a0=36196,gp=37492,_p=37496,vp=37808,xp=37809,yp=37810,Sp=37811,Mp=37812,Ep=37813,Tp=37814,wp=37815,Ap=37816,Rp=37817,bp=37818,Cp=37819,Pp=37820,Lp=37821,Pc=36492,Dp=36494,Up=36495,o0=36283,Ip=36284,Np=36285,Op=36286,Km=3e3,Xr=3001,l0=3200,u0=3201,$m=0,c0=1,Yr="",Dt="srgb",Mi="srgb-linear",Dl="display-p3",Lc=7680,f0=519,d0=512,h0=513,p0=514,m0=515,g0=516,_0=517,v0=518,x0=519,uf=35044,Fp="300 es",cf=1035,Gi=2e3,bl=2001;class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,f=o.length;l<f;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,ff=180/Math.PI;function Mr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function An(s,e,t){return Math.max(e,Math.min(t,s))}function y0(s,e){return(s%e+e)%e}function Dc(s,e,t){return(1-t)*s+t*e}function kp(s){return(s&s-1)===0&&s!==0}function df(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const S0={DEG2RAD:Tl};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*o+e.x,this.y=l*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,r,o,l,f,c,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,c,h,m)}set(e,t,r,o,l,f,c,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=c,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],m=r[1],g=r[4],y=r[7],v=r[2],S=r[5],T=r[8],E=o[0],x=o[3],_=o[6],U=o[1],R=o[4],C=o[7],O=o[2],B=o[5],D=o[8];return l[0]=f*E+c*U+h*O,l[3]=f*x+c*R+h*B,l[6]=f*_+c*C+h*D,l[1]=m*E+g*U+y*O,l[4]=m*x+g*R+y*B,l[7]=m*_+g*C+y*D,l[2]=v*E+S*U+T*O,l[5]=v*x+S*R+T*B,l[8]=v*_+S*C+T*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8];return t*f*g-t*c*m-r*l*g+r*c*h+o*l*m-o*f*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],y=g*f-c*m,v=c*h-g*l,S=m*l-f*h,T=t*y+r*v+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=y*E,e[1]=(o*m-g*r)*E,e[2]=(c*r-o*f)*E,e[3]=v*E,e[4]=(g*t-o*h)*E,e[5]=(o*l-c*t)*E,e[6]=S*E,e[7]=(r*h-m*t)*E,e[8]=(f*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,f,c){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*f+m*c)+f+e,-o*m,o*h,-o*(-m*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new dt;function Zm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function M0(){const s=Cl("canvas");return s.style.display="block",s}const zp={};function Wa(s){s in zp||(zp[s]=!0,console.warn(s))}function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ic(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const E0=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),T0=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function w0(s){return s.convertSRGBToLinear().applyMatrix3(T0)}function A0(s){return s.applyMatrix3(E0).convertLinearToSRGB()}const R0={[Mi]:s=>s,[Dt]:s=>s.convertSRGBToLinear(),[Dl]:w0},b0={[Mi]:s=>s,[Dt]:s=>s.convertLinearToSRGB(),[Dl]:A0},Qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Mi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=R0[e],o=b0[t];if(r===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Es;class Qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Cl("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let f=0;f<l.length;f++)l[f]=Xs(l[f]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xs(t[r]/255)*255):t[r]=Xs(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C0=0;class Jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Mr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let f=0,c=o.length;f<c;f++)o[f].isDataTexture?l.push(Nc(o[f].image)):l.push(Nc(o[f]))}else l=Nc(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Nc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P0=0;class yn extends Kr{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,r=di,o=di,l=Jn,f=ja,c=hi,h=Sr,m=yn.DEFAULT_ANISOTROPY,g=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Mr(),this.name="",this.source=new Jm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=f,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Xr?Dt:Yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case of:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case of:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Xr:Km}set encoding(e){Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?Dt:Yr}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Gm;yn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,r=0,o=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*o+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*o+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*o+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*o+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,m=h[0],g=h[4],y=h[8],v=h[1],S=h[5],T=h[9],E=h[2],x=h[6],_=h[10];if(Math.abs(g-v)<.01&&Math.abs(y-E)<.01&&Math.abs(T-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(y+E)<.1&&Math.abs(T+x)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(m+1)/2,C=(S+1)/2,O=(_+1)/2,B=(g+v)/4,D=(y+E)/4,ne=(T+x)/4;return R>C&&R>O?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=B/r,l=D/r):C>O?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=B/o,l=ne/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=D/l,o=ne/l),this.set(r,o,l,t),this}let U=Math.sqrt((x-T)*(x-T)+(y-E)*(y-E)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(x-T)/U,this.y=(y-E)/U,this.z=(v-g)/U,this.w=Math.acos((m+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends Kr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const o={width:e,height:t,depth:1};r.encoding!==void 0&&(Wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Xr?Dt:Yr),this.texture=new yn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Jn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends L0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class eg extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class D0 extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,f,c){let h=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];const v=l[f+0],S=l[f+1],T=l[f+2],E=l[f+3];if(c===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(c===1){e[t+0]=v,e[t+1]=S,e[t+2]=T,e[t+3]=E;return}if(y!==E||h!==v||m!==S||g!==T){let x=1-c;const _=h*v+m*S+g*T+y*E,U=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const O=Math.sqrt(R),B=Math.atan2(O,_*U);x=Math.sin(x*B)/O,c=Math.sin(c*B)/O}const C=c*U;if(h=h*x+v*C,m=m*x+S*C,g=g*x+T*C,y=y*x+E*C,x===1-c){const O=1/Math.sqrt(h*h+m*m+g*g+y*y);h*=O,m*=O,g*=O,y*=O}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,f){const c=r[o],h=r[o+1],m=r[o+2],g=r[o+3],y=l[f],v=l[f+1],S=l[f+2],T=l[f+3];return e[t]=c*T+g*y+h*S-m*v,e[t+1]=h*T+g*v+m*y-c*S,e[t+2]=m*T+g*S+c*v-h*y,e[t+3]=g*T-c*y-h*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,o=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,m=c(r/2),g=c(o/2),y=c(l/2),v=h(r/2),S=h(o/2),T=h(l/2);switch(f){case"XYZ":this._x=v*g*y+m*S*T,this._y=m*S*y-v*g*T,this._z=m*g*T+v*S*y,this._w=m*g*y-v*S*T;break;case"YXZ":this._x=v*g*y+m*S*T,this._y=m*S*y-v*g*T,this._z=m*g*T-v*S*y,this._w=m*g*y+v*S*T;break;case"ZXY":this._x=v*g*y-m*S*T,this._y=m*S*y+v*g*T,this._z=m*g*T+v*S*y,this._w=m*g*y-v*S*T;break;case"ZYX":this._x=v*g*y-m*S*T,this._y=m*S*y+v*g*T,this._z=m*g*T-v*S*y,this._w=m*g*y+v*S*T;break;case"YZX":this._x=v*g*y+m*S*T,this._y=m*S*y+v*g*T,this._z=m*g*T-v*S*y,this._w=m*g*y-v*S*T;break;case"XZY":this._x=v*g*y-m*S*T,this._y=m*S*y-v*g*T,this._z=m*g*T+v*S*y,this._w=m*g*y+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],f=t[1],c=t[5],h=t[9],m=t[2],g=t[6],y=t[10],v=r+c+y;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(f-o)*S}else if(r>c&&r>y){const S=2*Math.sqrt(1+r-c-y);this._w=(g-h)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(l+m)/S}else if(c>y){const S=2*Math.sqrt(1+c-r-y);this._w=(l-m)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+y-r-c);this._w=(f-o)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,f=e._w,c=t._x,h=t._y,m=t._z,g=t._w;return this._x=r*g+f*c+o*m-l*h,this._y=o*g+f*h+l*c-r*m,this._z=l*g+f*m+r*h-o*c,this._w=f*g-r*c-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=o,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(h),g=Math.atan2(m,c),y=Math.sin((1-t)*g)/m,v=Math.sin(t*g)/m;return this._w=f*y+this._w*v,this._x=r*y+this._x*v,this._y=o*y+this._y*v,this._z=l*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),r*Math.sin(l),r*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,f=e.y,c=e.z,h=e.w,m=h*t+f*o-c*r,g=h*r+c*t-l*o,y=h*o+l*r-f*t,v=-l*t-f*r-c*o;return this.x=m*h+v*-l+g*-c-y*-f,this.y=g*h+v*-f+y*-l-m*-c,this.z=y*h+v*-c+m*-f-g*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=o*h-l*c,this.y=l*f-r*h,this.z=r*c-o*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new W,Bp=new qr;class Ya{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox),Ts.applyMatrix4(e.matrixWorld),this.union(Ts);else{const o=e.geometry;if(o!==void 0)if(t&&o.attributes!==void 0&&o.attributes.position!==void 0){const l=o.attributes.position;for(let f=0,c=l.count;f<c;f++)Ii.fromBufferAttribute(l,f).applyMatrix4(e.matrixWorld),this.expandByPoint(Ii)}else o.boundingBox===null&&o.computeBoundingBox(),Ts.copy(o.boundingBox),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),Zo.subVectors(this.max,Na),ws.subVectors(e.a,Na),As.subVectors(e.b,Na),Rs.subVectors(e.c,Na),pr.subVectors(As,ws),mr.subVectors(Rs,As),Fr.subVectors(ws,Rs);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Fr.z,Fr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Fr.z,0,-Fr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Fr.y,Fr.x,0];return!Fc(t,ws,As,Rs,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,ws,As,Rs,Zo))?!1:(Qo.crossVectors(pr,mr),t=[Qo.x,Qo.y,Qo.z],Fc(t,ws,As,Rs,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new W,new W,new W,new W,new W,new W,new W,new W],Ii=new W,Ts=new Ya,ws=new W,As=new W,Rs=new W,pr=new W,mr=new W,Fr=new W,Na=new W,Zo=new W,Qo=new W,kr=new W;function Fc(s,e,t,r,o){for(let l=0,f=s.length-3;l<=f;l+=3){kr.fromArray(s,l);const c=o.x*Math.abs(kr.x)+o.y*Math.abs(kr.y)+o.z*Math.abs(kr.z),h=e.dot(kr),m=t.dot(kr),g=r.dot(kr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>c)return!1}return!0}const U0=new Ya,Oa=new W,kc=new W;class xf{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):U0.setFromPoints(e).getCenter(r);let o=0;for(let l=0,f=e.length;l<f;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(kc)),this.expandByPoint(Oa.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new W,zc=new W,Jo=new W,gr=new W,Bc=new W,el=new W,Hc=new W;class tg{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){zc.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(zc);const l=e.distanceTo(t)*.5,f=-this.direction.dot(Jo),c=gr.dot(this.direction),h=-gr.dot(Jo),m=gr.lengthSq(),g=Math.abs(1-f*f);let y,v,S,T;if(g>0)if(y=f*h-c,v=f*c-h,T=l*g,y>=0)if(v>=-T)if(v<=T){const E=1/g;y*=E,v*=E,S=y*(y+f*v+2*c)+v*(f*y+v+2*h)+m}else v=l,y=Math.max(0,-(f*v+c)),S=-y*y+v*(v+2*h)+m;else v=-l,y=Math.max(0,-(f*v+c)),S=-y*y+v*(v+2*h)+m;else v<=-T?(y=Math.max(0,-(-f*l+c)),v=y>0?-l:Math.min(Math.max(-l,-h),l),S=-y*y+v*(v+2*h)+m):v<=T?(y=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+m):(y=Math.max(0,-(f*l+c)),v=y>0?l:Math.min(Math.max(-l,-h),l),S=-y*y+v*(v+2*h)+m);else v=f>0?-l:l,y=Math.max(0,-(f*v+c)),S=-y*y+v*(v+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(zc).addScaledVector(Jo,v),S}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),o=Ni.dot(Ni)-r*r,l=e.radius*e.radius;if(o>l)return null;const f=Math.sqrt(l-o),c=r-f,h=r+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,f,c,h;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),g>=0?(l=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),r>f||l>o||((l>r||isNaN(r))&&(r=l),(f<o||isNaN(o))&&(o=f),y>=0?(c=(e.min.z-v.z)*y,h=(e.max.z-v.z)*y):(c=(e.max.z-v.z)*y,h=(e.min.z-v.z)*y),r>h||c>o)||((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,r,o,l){Bc.subVectors(t,e),el.subVectors(r,e),Hc.crossVectors(Bc,el);let f=this.direction.dot(Hc),c;if(f>0){if(o)return null;c=1}else if(f<0)c=-1,f=-f;else return null;gr.subVectors(this.origin,e);const h=c*this.direction.dot(el.crossVectors(gr,el));if(h<0)return null;const m=c*this.direction.dot(Bc.cross(gr));if(m<0||h+m>f)return null;const g=-c*gr.dot(Hc);return g<0?null:this.at(g/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,r,o,l,f,c,h,m,g,y,v,S,T,E,x){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,c,h,m,g,y,v,S,T,E,x)}set(e,t,r,o,l,f,c,h,m,g,y,v,S,T,E,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=f,_[9]=c,_[13]=h,_[2]=m,_[6]=g,_[10]=y,_[14]=v,_[3]=S,_[7]=T,_[11]=E,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(o),m=Math.sin(o),g=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const v=f*g,S=f*y,T=c*g,E=c*y;t[0]=h*g,t[4]=-h*y,t[8]=m,t[1]=S+T*m,t[5]=v-E*m,t[9]=-c*h,t[2]=E-v*m,t[6]=T+S*m,t[10]=f*h}else if(e.order==="YXZ"){const v=h*g,S=h*y,T=m*g,E=m*y;t[0]=v+E*c,t[4]=T*c-S,t[8]=f*m,t[1]=f*y,t[5]=f*g,t[9]=-c,t[2]=S*c-T,t[6]=E+v*c,t[10]=f*h}else if(e.order==="ZXY"){const v=h*g,S=h*y,T=m*g,E=m*y;t[0]=v-E*c,t[4]=-f*y,t[8]=T+S*c,t[1]=S+T*c,t[5]=f*g,t[9]=E-v*c,t[2]=-f*m,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const v=f*g,S=f*y,T=c*g,E=c*y;t[0]=h*g,t[4]=T*m-S,t[8]=v*m+E,t[1]=h*y,t[5]=E*m+v,t[9]=S*m-T,t[2]=-m,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const v=f*h,S=f*m,T=c*h,E=c*m;t[0]=h*g,t[4]=E-v*y,t[8]=T*y+S,t[1]=y,t[5]=f*g,t[9]=-c*g,t[2]=-m*g,t[6]=S*y+T,t[10]=v-E*y}else if(e.order==="XZY"){const v=f*h,S=f*m,T=c*h,E=c*m;t[0]=h*g,t[4]=-y,t[8]=m*g,t[1]=v*y+E,t[5]=f*g,t[9]=S*y-T,t[2]=T*y-S,t[6]=c*g,t[10]=E*y+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,N0)}lookAt(e,t,r){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),_r.crossVectors(r,Bn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),_r.crossVectors(r,Bn)),_r.normalize(),tl.crossVectors(Bn,_r),o[0]=_r.x,o[4]=tl.x,o[8]=Bn.x,o[1]=_r.y,o[5]=tl.y,o[9]=Bn.y,o[2]=_r.z,o[6]=tl.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],m=r[12],g=r[1],y=r[5],v=r[9],S=r[13],T=r[2],E=r[6],x=r[10],_=r[14],U=r[3],R=r[7],C=r[11],O=r[15],B=o[0],D=o[4],ne=o[8],b=o[12],N=o[1],de=o[5],pe=o[9],$=o[13],ae=o[2],se=o[6],ce=o[10],ie=o[14],V=o[3],re=o[7],j=o[11],A=o[15];return l[0]=f*B+c*N+h*ae+m*V,l[4]=f*D+c*de+h*se+m*re,l[8]=f*ne+c*pe+h*ce+m*j,l[12]=f*b+c*$+h*ie+m*A,l[1]=g*B+y*N+v*ae+S*V,l[5]=g*D+y*de+v*se+S*re,l[9]=g*ne+y*pe+v*ce+S*j,l[13]=g*b+y*$+v*ie+S*A,l[2]=T*B+E*N+x*ae+_*V,l[6]=T*D+E*de+x*se+_*re,l[10]=T*ne+E*pe+x*ce+_*j,l[14]=T*b+E*$+x*ie+_*A,l[3]=U*B+R*N+C*ae+O*V,l[7]=U*D+R*de+C*se+O*re,l[11]=U*ne+R*pe+C*ce+O*j,l[15]=U*b+R*$+C*ie+O*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],f=e[1],c=e[5],h=e[9],m=e[13],g=e[2],y=e[6],v=e[10],S=e[14],T=e[3],E=e[7],x=e[11],_=e[15];return T*(+l*h*y-o*m*y-l*c*v+r*m*v+o*c*S-r*h*S)+E*(+t*h*S-t*m*v+l*f*v-o*f*S+o*m*g-l*h*g)+x*(+t*m*y-t*c*S-l*f*y+r*f*S+l*c*g-r*m*g)+_*(-o*c*g-t*h*y+t*c*v+o*f*y-r*f*v+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],y=e[9],v=e[10],S=e[11],T=e[12],E=e[13],x=e[14],_=e[15],U=y*x*m-E*v*m+E*h*S-c*x*S-y*h*_+c*v*_,R=T*v*m-g*x*m-T*h*S+f*x*S+g*h*_-f*v*_,C=g*E*m-T*y*m+T*c*S-f*E*S-g*c*_+f*y*_,O=T*y*h-g*E*h-T*c*v+f*E*v+g*c*x-f*y*x,B=t*U+r*R+o*C+l*O;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/B;return e[0]=U*D,e[1]=(E*v*l-y*x*l-E*o*S+r*x*S+y*o*_-r*v*_)*D,e[2]=(c*x*l-E*h*l+E*o*m-r*x*m-c*o*_+r*h*_)*D,e[3]=(y*h*l-c*v*l-y*o*m+r*v*m+c*o*S-r*h*S)*D,e[4]=R*D,e[5]=(g*x*l-T*v*l+T*o*S-t*x*S-g*o*_+t*v*_)*D,e[6]=(T*h*l-f*x*l-T*o*m+t*x*m+f*o*_-t*h*_)*D,e[7]=(f*v*l-g*h*l+g*o*m-t*v*m-f*o*S+t*h*S)*D,e[8]=C*D,e[9]=(T*y*l-g*E*l-T*r*S+t*E*S+g*r*_-t*y*_)*D,e[10]=(f*E*l-T*c*l+T*r*m-t*E*m-f*r*_+t*c*_)*D,e[11]=(g*c*l-f*y*l-g*r*m+t*y*m+f*r*S-t*c*S)*D,e[12]=O*D,e[13]=(g*E*o-T*y*o+T*r*v-t*E*v-g*r*x+t*y*x)*D,e[14]=(T*c*o-f*E*o-T*r*h+t*E*h+f*r*x-t*c*x)*D,e[15]=(f*y*o-g*c*o+g*r*h-t*y*h-f*r*v+t*c*v)*D,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,m=l*f,g=l*c;return this.set(m*f+r,m*c-o*h,m*h+o*c,0,m*c+o*h,g*c+r,g*h-o*f,0,m*h-o*c,g*h+o*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,f){return this.set(1,r,l,0,e,1,f,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,m=l+l,g=f+f,y=c+c,v=l*m,S=l*g,T=l*y,E=f*g,x=f*y,_=c*y,U=h*m,R=h*g,C=h*y,O=r.x,B=r.y,D=r.z;return o[0]=(1-(E+_))*O,o[1]=(S+C)*O,o[2]=(T-R)*O,o[3]=0,o[4]=(S-C)*B,o[5]=(1-(v+_))*B,o[6]=(x+U)*B,o[7]=0,o[8]=(T+R)*D,o[9]=(x-U)*D,o[10]=(1-(v+E))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=bs.set(o[0],o[1],o[2]).length();const f=bs.set(o[4],o[5],o[6]).length(),c=bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const m=1/l,g=1/f,y=1/c;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=y,ui.elements[9]*=y,ui.elements[10]*=y,t.setFromRotationMatrix(ui),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,o,l,f,c=Gi){const h=this.elements,m=2*l/(t-e),g=2*l/(r-o),y=(t+e)/(t-e),v=(r+o)/(r-o);let S,T;if(c===Gi)S=-(f+l)/(f-l),T=-2*f*l/(f-l);else if(c===bl)S=-f/(f-l),T=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,f,c=Gi){const h=this.elements,m=1/(t-e),g=1/(r-o),y=1/(f-l),v=(t+e)*m,S=(r+o)*g;let T,E;if(c===Gi)T=(f+l)*y,E=-2*y;else if(c===bl)T=l*y,E=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const bs=new W,ui=new jt,I0=new W(0,0,0),N0=new W(1,1,1),_r=new W,tl=new W,Bn=new W,Hp=new jt,Gp=new qr;class Ul{constructor(e=0,t=0,r=0,o=Ul.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],f=o[4],c=o[8],h=o[1],m=o[5],g=o[9],y=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(An(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-An(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(An(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-An(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(An(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-An(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ul.DEFAULT_ORDER="XYZ";class ng{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O0=0;const Vp=new W,Cs=new qr,Oi=new jt,nl=new W,Fa=new W,F0=new W,k0=new qr,Wp=new W(1,0,0),jp=new W(0,1,0),Xp=new W(0,0,1),z0={type:"added"},B0={type:"removed"};class Sn extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new W,t=new Ul,r=new qr,o=new W(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new dt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ng,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,t){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?nl.copy(e):nl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Fa,nl,this.up):Oi.lookAt(nl,Fa,this.up),this.quaternion.setFromRotationMatrix(Oi),o&&(Oi.extractRotation(o.matrixWorld),Cs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(z0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let o=0,l=this.children.length;o<l;o++){const f=this.children[o].getObjectsByProperty(e,t);f.length>0&&(r=r.concat(f))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,f=o.length;l<f;l++){const c=o[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const y=h[m];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(l(e.materials,this.material[h]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),m=f(e.textures),g=f(e.images),y=f(e.shapes),v=f(e.skeletons),S=f(e.animations),T=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function f(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Sn.DEFAULT_UP=new W(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new W,Fi=new W,Gc=new W,ki=new W,Ps=new W,Ls=new W,Yp=new W,Vc=new W,Wc=new W,jc=new W;let il=!1;class ei{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ci.subVectors(e,t),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ci.subVectors(o,t),Fi.subVectors(r,t),Gc.subVectors(e,t);const f=ci.dot(ci),c=ci.dot(Fi),h=ci.dot(Gc),m=Fi.dot(Fi),g=Fi.dot(Gc),y=f*m-c*c;if(y===0)return l.set(-2,-1,-1);const v=1/y,S=(m*h-c*g)*v,T=(f*g-c*h)*v;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ki),ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getUV(e,t,r,o,l,f,c,h){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),this.getInterpolation(e,t,r,o,l,f,c,h)}static getInterpolation(e,t,r,o,l,f,c,h){return this.getBarycoord(e,t,r,o,ki),h.setScalar(0),h.addScaledVector(l,ki.x),h.addScaledVector(f,ki.y),h.addScaledVector(c,ki.z),h}static isFrontFacing(e,t,r,o){return ci.subVectors(r,t),Fi.subVectors(e,t),ci.cross(Fi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,o,l){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}getInterpolation(e,t,r,o,l){return ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let f,c;Ps.subVectors(o,r),Ls.subVectors(l,r),Vc.subVectors(e,r);const h=Ps.dot(Vc),m=Ls.dot(Vc);if(h<=0&&m<=0)return t.copy(r);Wc.subVectors(e,o);const g=Ps.dot(Wc),y=Ls.dot(Wc);if(g>=0&&y<=g)return t.copy(o);const v=h*y-g*m;if(v<=0&&h>=0&&g<=0)return f=h/(h-g),t.copy(r).addScaledVector(Ps,f);jc.subVectors(e,l);const S=Ps.dot(jc),T=Ls.dot(jc);if(T>=0&&S<=T)return t.copy(l);const E=S*m-h*T;if(E<=0&&m>=0&&T<=0)return c=m/(m-T),t.copy(r).addScaledVector(Ls,c);const x=g*T-S*y;if(x<=0&&y-g>=0&&S-T>=0)return Yp.subVectors(l,o),c=(y-g)/(y-g+(S-T)),t.copy(o).addScaledVector(Yp,c);const _=1/(x+E+v);return f=E*_,c=v*_,t.copy(r).addScaledVector(Ps,f).addScaledVector(Ls,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let H0=0;class Qs extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=js,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zm,this.blendDst=Bm,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=sf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lc,this.stencilZFail=Lc,this.stencilZPass=Lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Si&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=o(e.textures),f=o(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Xc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qn.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Qn.workingColorSpace){return this.r=e,this.g=t,this.b=r,Qn.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Qn.workingColorSpace){if(e=y0(e,1),t=An(t,0,1),r=An(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=Xc(f,l,e+1/3),this.g=Xc(f,l,e),this.b=Xc(f,l,e-1/3)}return Qn.toWorkingColorSpace(this,o),this}setStyle(e,t=Dt){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=o[1],c=o[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const r=ig[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Qn.fromWorkingColorSpace(xn.copy(this),e),Math.round(An(xn.r*255,0,255))*65536+Math.round(An(xn.g*255,0,255))*256+Math.round(An(xn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qn.workingColorSpace){Qn.fromWorkingColorSpace(xn.copy(this),t);const r=xn.r,o=xn.g,l=xn.b,f=Math.max(r,o,l),c=Math.min(r,o,l);let h,m;const g=(c+f)/2;if(c===f)h=0,m=0;else{const y=f-c;switch(m=g<=.5?y/(f+c):y/(2-f-c),f){case r:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-r)/y+2;break;case l:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Qn.workingColorSpace){return Qn.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Dt){Qn.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,o=xn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(fi),fi.h+=e,fi.s+=t,fi.l+=r,this.setHSL(fi.h,fi.s,fi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(rl);const r=Dc(fi.h,rl.h,t),o=Dc(fi.s,rl.s,t),l=Dc(fi.l,rl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new gt;gt.NAMES=ig;class rg extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new W,sl=new Ve;class pi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=uf,this.updateRange={offset:0,count:-1},this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)sl.fromBufferAttribute(this,t),sl.applyMatrix3(e),this.setXY(t,sl.x,sl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Mt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),o=Mt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),o=Mt(o,this.array),l=Mt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sg extends pi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ag extends pi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Wi extends pi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let G0=0;const $n=new jt,Yc=new Sn,Ds=new W,Hn=new Ya,ka=new Ya,on=new W;class Yi extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zm(e)?ag:sg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,r){return $n.makeTranslation(e,t,r),this.applyMatrix4($n),this}scale(e,t,r){return $n.makeScale(e,t,r),this.applyMatrix4($n),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Wi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];ka.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(Hn.min,ka.min),Hn.expandByPoint(on),on.addVectors(Hn.max,ka.max),Hn.expandByPoint(on)):(Hn.expandByPoint(ka.min),Hn.expandByPoint(ka.max))}Hn.getCenter(r);let o=0;for(let l=0,f=e.count;l<f;l++)on.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(on));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)on.fromBufferAttribute(c,m),h&&(Ds.fromBufferAttribute(e,m),on.add(Ds)),o=Math.max(o,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=t.position.array,l=t.normal.array,f=t.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,m=[],g=[];for(let N=0;N<c;N++)m[N]=new W,g[N]=new W;const y=new W,v=new W,S=new W,T=new Ve,E=new Ve,x=new Ve,_=new W,U=new W;function R(N,de,pe){y.fromArray(o,N*3),v.fromArray(o,de*3),S.fromArray(o,pe*3),T.fromArray(f,N*2),E.fromArray(f,de*2),x.fromArray(f,pe*2),v.sub(y),S.sub(y),E.sub(T),x.sub(T);const $=1/(E.x*x.y-x.x*E.y);isFinite($)&&(_.copy(v).multiplyScalar(x.y).addScaledVector(S,-E.y).multiplyScalar($),U.copy(S).multiplyScalar(E.x).addScaledVector(v,-x.x).multiplyScalar($),m[N].add(_),m[de].add(_),m[pe].add(_),g[N].add(U),g[de].add(U),g[pe].add(U))}let C=this.groups;C.length===0&&(C=[{start:0,count:r.length}]);for(let N=0,de=C.length;N<de;++N){const pe=C[N],$=pe.start,ae=pe.count;for(let se=$,ce=$+ae;se<ce;se+=3)R(r[se+0],r[se+1],r[se+2])}const O=new W,B=new W,D=new W,ne=new W;function b(N){D.fromArray(l,N*3),ne.copy(D);const de=m[N];O.copy(de),O.sub(D.multiplyScalar(D.dot(de))).normalize(),B.crossVectors(ne,de);const $=B.dot(g[N])<0?-1:1;h[N*4]=O.x,h[N*4+1]=O.y,h[N*4+2]=O.z,h[N*4+3]=$}for(let N=0,de=C.length;N<de;++N){const pe=C[N],$=pe.start,ae=pe.count;for(let se=$,ce=$+ae;se<ce;se+=3)b(r[se+0]),b(r[se+1]),b(r[se+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new W,l=new W,f=new W,c=new W,h=new W,m=new W,g=new W,y=new W;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),E=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,E),f.fromBufferAttribute(t,x),g.subVectors(f,l),y.subVectors(o,l),g.cross(y),c.fromBufferAttribute(r,T),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,x),c.add(g),h.add(g),m.add(g),r.setXYZ(T,c.x,c.y,c.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),f.fromBufferAttribute(t,v+2),g.subVectors(f,l),y.subVectors(o,l),g.cross(y),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(c,h){const m=c.array,g=c.itemSize,y=c.normalized,v=new m.constructor(h.length*g);let S=0,T=0;for(let E=0,x=h.length;E<x;E++){c.isInterleavedBufferAttribute?S=h[E]*c.data.stride+c.offset:S=h[E]*g;for(let _=0;_<g;_++)v[T++]=m[S++]}return new pi(v,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yi,r=this.index.array,o=this.attributes;for(const c in o){const h=o[c],m=e(h,r);t.setAttribute(c,m)}const l=this.morphAttributes;for(const c in l){const h=[],m=l[c];for(let g=0,y=m.length;g<y;g++){const v=m[g],S=e(v,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const m=f[c];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let y=0,v=m.length;y<v;y++){const S=m[y];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],y=l[m];for(let v=0,S=y.length;v<S;v++)g.push(y[v].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new jt,zr=new tg,al=new xf,Kp=new W,Us=new W,Is=new W,Ns=new W,qc=new W,ol=new W,ll=new Ve,ul=new Ve,cl=new Ve,$p=new W,Zp=new W,Qp=new W,fl=new W,dl=new W;class At extends Sn{constructor(e=new Yi,t=new rg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){ol.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=c[h],y=l[h];g!==0&&(qc.fromBufferAttribute(y,e),f?ol.addScaledVector(qc,g):ol.addScaledVector(qc.sub(t),g))}t.add(ol)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(l),zr.copy(e.ray).recast(e.near),!(al.containsPoint(zr.origin)===!1&&(zr.intersectSphere(al,Kp)===null||zr.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(qp.copy(l).invert(),zr.copy(e.ray).applyMatrix4(qp),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,y=l.attributes.normal,v=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let T=0,E=v.length;T<E;T++){const x=v[T],_=f[x.materialIndex],U=Math.max(x.start,S.start),R=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let C=U,O=R;C<O;C+=3){const B=c.getX(C),D=c.getX(C+1),ne=c.getX(C+2);o=hl(this,_,e,r,m,g,y,B,D,ne),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),E=Math.min(c.count,S.start+S.count);for(let x=T,_=E;x<_;x+=3){const U=c.getX(x),R=c.getX(x+1),C=c.getX(x+2);o=hl(this,f,e,r,m,g,y,U,R,C),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(f))for(let T=0,E=v.length;T<E;T++){const x=v[T],_=f[x.materialIndex],U=Math.max(x.start,S.start),R=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let C=U,O=R;C<O;C+=3){const B=C,D=C+1,ne=C+2;o=hl(this,_,e,r,m,g,y,B,D,ne),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let x=T,_=E;x<_;x+=3){const U=x,R=x+1,C=x+2;o=hl(this,f,e,r,m,g,y,U,R,C),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function V0(s,e,t,r,o,l,f,c){let h;if(e.side===In?h=r.intersectTriangle(f,l,o,!0,c):h=r.intersectTriangle(o,l,f,e.side===Si,c),h===null)return null;dl.copy(c),dl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(dl);return m<t.near||m>t.far?null:{distance:m,point:dl.clone(),object:s}}function hl(s,e,t,r,o,l,f,c,h,m){s.getVertexPosition(c,Us),s.getVertexPosition(h,Is),s.getVertexPosition(m,Ns);const g=V0(s,e,t,r,Us,Is,Ns,fl);if(g){o&&(ll.fromBufferAttribute(o,c),ul.fromBufferAttribute(o,h),cl.fromBufferAttribute(o,m),g.uv=ei.getInterpolation(fl,Us,Is,Ns,ll,ul,cl,new Ve)),l&&(ll.fromBufferAttribute(l,c),ul.fromBufferAttribute(l,h),cl.fromBufferAttribute(l,m),g.uv1=ei.getInterpolation(fl,Us,Is,Ns,ll,ul,cl,new Ve),g.uv2=g.uv1),f&&($p.fromBufferAttribute(f,c),Zp.fromBufferAttribute(f,h),Qp.fromBufferAttribute(f,m),g.normal=ei.getInterpolation(fl,Us,Is,Ns,$p,Zp,Qp,new W),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:c,b:h,c:m,normal:new W,materialIndex:0};ei.getNormal(Us,Is,Ns,y.normal),g.face=y}return g}class Wt extends Yi{constructor(e=1,t=1,r=1,o=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:f};const c=this;o=Math.floor(o),l=Math.floor(l),f=Math.floor(f);const h=[],m=[],g=[],y=[];let v=0,S=0;T("z","y","x",-1,-1,r,t,e,f,l,0),T("z","y","x",1,-1,r,t,-e,f,l,1),T("x","z","y",1,1,e,r,t,o,f,2),T("x","z","y",1,-1,e,r,-t,o,f,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Wi(m,3)),this.setAttribute("normal",new Wi(g,3)),this.setAttribute("uv",new Wi(y,2));function T(E,x,_,U,R,C,O,B,D,ne,b){const N=C/D,de=O/ne,pe=C/2,$=O/2,ae=B/2,se=D+1,ce=ne+1;let ie=0,V=0;const re=new W;for(let j=0;j<ce;j++){const A=j*de-$;for(let F=0;F<se;F++){const ue=F*N-pe;re[E]=ue*U,re[x]=A*R,re[_]=ae,m.push(re.x,re.y,re.z),re[E]=0,re[x]=0,re[_]=B>0?1:-1,g.push(re.x,re.y,re.z),y.push(F/D),y.push(1-j/ne),ie+=1}}for(let j=0;j<ne;j++)for(let A=0;A<D;A++){const F=v+A+se*j,ue=v+A+se*(j+1),he=v+(A+1)+se*(j+1),xe=v+(A+1)+se*j;h.push(F,ue,xe),h.push(ue,he,xe),V+=6}c.addGroup(S,V,b),S+=V,v+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const r=Zs(s[t]);for(const o in r)e[o]=r[o]}return e}function W0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function og(s){return s.getRenderTarget()===null?s.outputColorSpace:Mi}const lg={clone:Zs,merge:wn};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?t.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[o]={type:"m4",value:f.toArray()}:t.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class ug extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gn extends ug{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ff*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ff*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,o,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;l+=f.offsetX*o/h,t-=f.offsetY*r/m,o*=f.width/h,r*=f.height/m}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,Fs=1;class Y0 extends Sn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const o=new Gn(Os,Fs,e,t);o.layers=this.layers,this.add(o);const l=new Gn(Os,Fs,e,t);l.layers=this.layers,this.add(l);const f=new Gn(Os,Fs,e,t);f.layers=this.layers,this.add(f);const c=new Gn(Os,Fs,e,t);c.layers=this.layers,this.add(c);const h=new Gn(Os,Fs,e,t);h.layers=this.layers,this.add(h);const m=new Gn(Os,Fs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,f,c,h]=t;for(const m of t)this.remove(m);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,f,c,h,m]=this.children,g=e.getRenderTarget(),y=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,o),e.setRenderTarget(r,1),e.render(t,l),e.setRenderTarget(r,2),e.render(t,f),e.setRenderTarget(r,3),e.render(t,c),e.setRenderTarget(r,4),e.render(t,h),r.texture.generateMipmaps=v,e.setRenderTarget(r,5),e.render(t,m),e.setRenderTarget(g),e.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class cg extends yn{constructor(e,t,r,o,l,f,c,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,r,o,l,f,c,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q0 extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];t.encoding!==void 0&&(Wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xr?Dt:Yr),this.texture=new cg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Wt(5,5,5),l=new Xi({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Vi});l.uniforms.tEquirect.value=t;const f=new At(o,l),c=t.minFilter;return t.minFilter===ja&&(t.minFilter=Jn),new Y0(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,o);e.setRenderTarget(l)}}const Kc=new W,K0=new W,$0=new dt;class vr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Kc.subVectors(r,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Kc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$0.getNormalMatrix(e),o=this.coplanarPoint(Kc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new xf,pl=new W;class yf{constructor(e=new vr,t=new vr,r=new vr,o=new vr,l=new vr,f=new vr){this.planes=[e,t,r,o,l,f]}set(e,t,r,o,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gi){const r=this.planes,o=e.elements,l=o[0],f=o[1],c=o[2],h=o[3],m=o[4],g=o[5],y=o[6],v=o[7],S=o[8],T=o[9],E=o[10],x=o[11],_=o[12],U=o[13],R=o[14],C=o[15];if(r[0].setComponents(h-l,v-m,x-S,C-_).normalize(),r[1].setComponents(h+l,v+m,x+S,C+_).normalize(),r[2].setComponents(h+f,v+g,x+T,C+U).normalize(),r[3].setComponents(h-f,v-g,x-T,C-U).normalize(),r[4].setComponents(h-c,v-y,x-E,C-R).normalize(),t===Gi)r[5].setComponents(h+c,v+y,x+E,C+R).normalize();else if(t===bl)r[5].setComponents(c,y,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(pl.x=o.normal.x>0?e.max.x:e.min.x,pl.y=o.normal.y>0?e.max.y:e.min.y,pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fg(){let s=null,e=!1,t=null,r=null;function o(l,f){t(l,f),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Z0(s,e){const t=e.isWebGL2,r=new WeakMap;function o(m,g){const y=m.array,v=m.usage,S=s.createBuffer();s.bindBuffer(g,S),s.bufferData(g,y,v),m.onUploadCallback();let T;if(y instanceof Float32Array)T=s.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)T=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=s.UNSIGNED_SHORT;else if(y instanceof Int16Array)T=s.SHORT;else if(y instanceof Uint32Array)T=s.UNSIGNED_INT;else if(y instanceof Int32Array)T=s.INT;else if(y instanceof Int8Array)T=s.BYTE;else if(y instanceof Uint8Array)T=s.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)T=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:S,type:T,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version}}function l(m,g,y){const v=g.array,S=g.updateRange;s.bindBuffer(y,m),S.count===-1?s.bufferSubData(y,0,v):(t?s.bufferSubData(y,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count):s.bufferSubData(y,S.offset*v.BYTES_PER_ELEMENT,v.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function f(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(s.deleteBuffer(g.buffer),r.delete(m))}function h(m,g){if(m.isGLBufferAttribute){const v=r.get(m);(!v||v.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);y===void 0?r.set(m,o(m,g)):y.version<m.version&&(l(y.buffer,m,g),y.version=m.version)}return{get:f,remove:c,update:h}}class Sf extends Yi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(o),m=c+1,g=h+1,y=e/c,v=t/h,S=[],T=[],E=[],x=[];for(let _=0;_<g;_++){const U=_*v-f;for(let R=0;R<m;R++){const C=R*y-l;T.push(C,-U,0),E.push(0,0,1),x.push(R/c),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<c;U++){const R=U+m*_,C=U+m*(_+1),O=U+1+m*(_+1),B=U+1+m*_;S.push(R,C,B),S.push(C,O,B)}this.setIndex(S),this.setAttribute("position",new Wi(T,3)),this.setAttribute("normal",new Wi(E,3)),this.setAttribute("uv",new Wi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ux=`#ifdef USE_IRIDESCENCE
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
#endif`,cx=`#ifdef USE_BUMPMAP
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xx=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sx=`vec3 transformedNormal = objectNormal;
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
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fx=`#ifdef USE_GRADIENTMAP
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
}`,kx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,Kx=`struct PhysicalMaterial {
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
}`,$x=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ay=`#if defined( USE_POINTS_UV )
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
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cy=`#ifdef USE_MORPHNORMALS
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
#endif`,fy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vy=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iy=`float getShadowMask() {
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
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,By=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`#include <common>
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
}`,nS=`#if DEPTH_PACKING == 3200
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
}`,iS=`#define DISTANCE
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
}`,rS=`#define DISTANCE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`uniform float scale;
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
}`,lS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,cS=`uniform vec3 diffuse;
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
}`,fS=`#define LAMBERT
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
}`,dS=`#define LAMBERT
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
}`,hS=`#define MATCAP
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
}`,pS=`#define MATCAP
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
}`,mS=`#define NORMAL
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
}`,gS=`#define NORMAL
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
}`,_S=`#define PHONG
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
}`,vS=`#define PHONG
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
}`,xS=`#define STANDARD
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
}`,yS=`#define STANDARD
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
}`,SS=`#define TOON
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
}`,MS=`#define TOON
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
}`,ES=`uniform float size;
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
}`,TS=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,AS=`uniform vec3 color;
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
}`,RS=`uniform float rotation;
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
}`,bS=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Q0,alphahash_pars_fragment:J0,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,begin_vertex:ax,beginnormal_vertex:ox,bsdfs:lx,iridescence_fragment:ux,bumpmap_pars_fragment:cx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:hx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:_x,color_vertex:vx,common:xx,cube_uv_reflection_fragment:yx,defaultnormal_vertex:Sx,displacementmap_pars_vertex:Mx,displacementmap_vertex:Ex,emissivemap_fragment:Tx,emissivemap_pars_fragment:wx,colorspace_fragment:Ax,colorspace_pars_fragment:Rx,envmap_fragment:bx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Px,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Vx,envmap_vertex:Dx,fog_vertex:Ux,fog_pars_vertex:Ix,fog_fragment:Nx,fog_pars_fragment:Ox,gradientmap_pars_fragment:Fx,lightmap_fragment:kx,lightmap_pars_fragment:zx,lights_lambert_fragment:Bx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Gx,lights_toon_fragment:Wx,lights_toon_pars_fragment:jx,lights_phong_fragment:Xx,lights_phong_pars_fragment:Yx,lights_physical_fragment:qx,lights_physical_pars_fragment:Kx,lights_fragment_begin:$x,lights_fragment_maps:Zx,lights_fragment_end:Qx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:ay,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ly,morphcolor_vertex:uy,morphnormal_vertex:cy,morphtarget_pars_vertex:fy,morphtarget_vertex:dy,normal_fragment_begin:hy,normal_fragment_maps:py,normal_pars_fragment:my,normal_pars_vertex:gy,normal_vertex:_y,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:My,opaque_fragment:Ey,packing:Ty,premultiplied_alpha_fragment:wy,project_vertex:Ay,dithering_fragment:Ry,dithering_pars_fragment:by,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Dy,shadowmap_vertex:Uy,shadowmask_pars_fragment:Iy,skinbase_vertex:Ny,skinning_pars_vertex:Oy,skinning_vertex:Fy,skinnormal_vertex:ky,specularmap_fragment:zy,specularmap_pars_fragment:By,tonemapping_fragment:Hy,tonemapping_pars_fragment:Gy,transmission_fragment:Vy,transmission_pars_fragment:Wy,uv_pars_fragment:jy,uv_pars_vertex:Xy,uv_vertex:Yy,worldpos_vertex:qy,background_vert:Ky,background_frag:$y,backgroundCube_vert:Zy,backgroundCube_frag:Qy,cube_vert:Jy,cube_frag:eS,depth_vert:tS,depth_frag:nS,distanceRGBA_vert:iS,distanceRGBA_frag:rS,equirect_vert:sS,equirect_frag:aS,linedashed_vert:oS,linedashed_frag:lS,meshbasic_vert:uS,meshbasic_frag:cS,meshlambert_vert:fS,meshlambert_frag:dS,meshmatcap_vert:hS,meshmatcap_frag:pS,meshnormal_vert:mS,meshnormal_frag:gS,meshphong_vert:_S,meshphong_frag:vS,meshphysical_vert:xS,meshphysical_frag:yS,meshtoon_vert:SS,meshtoon_frag:MS,points_vert:ES,points_frag:TS,shadow_vert:wS,shadow_frag:AS,sprite_vert:RS,sprite_frag:bS},Le={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},yi={basic:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new gt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:wn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:wn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new gt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:wn([Le.points,Le.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:wn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:wn([Le.common,Le.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:wn([Le.sprite,Le.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:wn([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:wn([Le.lights,Le.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};yi.physical={uniforms:wn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const ml={r:0,b:0,g:0};function CS(s,e,t,r,o,l,f){const c=new gt(0);let h=l===!0?0:1,m,g,y=null,v=0,S=null;function T(x,_){let U=!1,R=_.isScene===!0?_.background:null;R&&R.isTexture&&(R=(_.backgroundBlurriness>0?t:e).get(R)),R===null?E(c,h):R&&R.isColor&&(E(R,1),U=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,f):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Ll)?(g===void 0&&(g=new At(new Wt(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Zs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,B,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=R.colorSpace!==Dt,(y!==R||v!==R.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=R,v=R.version,S=s.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new At(new Sf(2,2),new Xi({name:"BackgroundMaterial",uniforms:Zs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=R.colorSpace!==Dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(y!==R||v!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=R,v=R.version,S=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function E(x,_){x.getRGB(ml,og(s)),r.buffers.color.setClear(ml.r,ml.g,ml.b,_,f)}return{getClearColor:function(){return c},setClearColor:function(x,_=1){c.set(x),h=_,E(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,E(c,h)},render:T}}function PS(s,e,t,r){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,c={},h=x(null);let m=h,g=!1;function y(ae,se,ce,ie,V){let re=!1;if(f){const j=E(ie,ce,se);m!==j&&(m=j,S(m.object)),re=_(ae,ie,ce,V),re&&U(ae,ie,ce,V)}else{const j=se.wireframe===!0;(m.geometry!==ie.id||m.program!==ce.id||m.wireframe!==j)&&(m.geometry=ie.id,m.program=ce.id,m.wireframe=j,re=!0)}V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(re||g)&&(g=!1,ne(ae,se,ce,ie),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function v(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(ae){return r.isWebGL2?s.bindVertexArray(ae):l.bindVertexArrayOES(ae)}function T(ae){return r.isWebGL2?s.deleteVertexArray(ae):l.deleteVertexArrayOES(ae)}function E(ae,se,ce){const ie=ce.wireframe===!0;let V=c[ae.id];V===void 0&&(V={},c[ae.id]=V);let re=V[se.id];re===void 0&&(re={},V[se.id]=re);let j=re[ie];return j===void 0&&(j=x(v()),re[ie]=j),j}function x(ae){const se=[],ce=[],ie=[];for(let V=0;V<o;V++)se[V]=0,ce[V]=0,ie[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:ce,attributeDivisors:ie,object:ae,attributes:{},index:null}}function _(ae,se,ce,ie){const V=m.attributes,re=se.attributes;let j=0;const A=ce.getAttributes();for(const F in A)if(A[F].location>=0){const he=V[F];let xe=re[F];if(xe===void 0&&(F==="instanceMatrix"&&ae.instanceMatrix&&(xe=ae.instanceMatrix),F==="instanceColor"&&ae.instanceColor&&(xe=ae.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;j++}return m.attributesNum!==j||m.index!==ie}function U(ae,se,ce,ie){const V={},re=se.attributes;let j=0;const A=ce.getAttributes();for(const F in A)if(A[F].location>=0){let he=re[F];he===void 0&&(F==="instanceMatrix"&&ae.instanceMatrix&&(he=ae.instanceMatrix),F==="instanceColor"&&ae.instanceColor&&(he=ae.instanceColor));const xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),V[F]=xe,j++}m.attributes=V,m.attributesNum=j,m.index=ie}function R(){const ae=m.newAttributes;for(let se=0,ce=ae.length;se<ce;se++)ae[se]=0}function C(ae){O(ae,0)}function O(ae,se){const ce=m.newAttributes,ie=m.enabledAttributes,V=m.attributeDivisors;ce[ae]=1,ie[ae]===0&&(s.enableVertexAttribArray(ae),ie[ae]=1),V[ae]!==se&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](ae,se),V[ae]=se)}function B(){const ae=m.newAttributes,se=m.enabledAttributes;for(let ce=0,ie=se.length;ce<ie;ce++)se[ce]!==ae[ce]&&(s.disableVertexAttribArray(ce),se[ce]=0)}function D(ae,se,ce,ie,V,re,j){j===!0?s.vertexAttribIPointer(ae,se,ce,V,re):s.vertexAttribPointer(ae,se,ce,ie,V,re)}function ne(ae,se,ce,ie){if(r.isWebGL2===!1&&(ae.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const V=ie.attributes,re=ce.getAttributes(),j=se.defaultAttributeValues;for(const A in re){const F=re[A];if(F.location>=0){let ue=V[A];if(ue===void 0&&(A==="instanceMatrix"&&ae.instanceMatrix&&(ue=ae.instanceMatrix),A==="instanceColor"&&ae.instanceColor&&(ue=ae.instanceColor)),ue!==void 0){const he=ue.normalized,xe=ue.itemSize,Ae=t.get(ue);if(Ae===void 0)continue;const Ue=Ae.buffer,be=Ae.type,Ge=Ae.bytesPerElement,_t=r.isWebGL2===!0&&(be===s.INT||be===s.UNSIGNED_INT||ue.gpuType===Vm);if(ue.isInterleavedBufferAttribute){const nt=ue.data,K=nt.stride,Ct=ue.offset;if(nt.isInstancedInterleavedBuffer){for(let We=0;We<F.locationSize;We++)O(F.location+We,nt.meshPerAttribute);ae.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let We=0;We<F.locationSize;We++)C(F.location+We);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let We=0;We<F.locationSize;We++)D(F.location+We,xe/F.locationSize,be,he,K*Ge,(Ct+xe/F.locationSize*We)*Ge,_t)}else{if(ue.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)O(F.location+nt,ue.meshPerAttribute);ae.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let nt=0;nt<F.locationSize;nt++)C(F.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let nt=0;nt<F.locationSize;nt++)D(F.location+nt,xe/F.locationSize,be,he,xe*Ge,xe/F.locationSize*nt*Ge,_t)}}else if(j!==void 0){const he=j[A];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(F.location,he);break;case 3:s.vertexAttrib3fv(F.location,he);break;case 4:s.vertexAttrib4fv(F.location,he);break;default:s.vertexAttrib1fv(F.location,he)}}}}B()}function b(){pe();for(const ae in c){const se=c[ae];for(const ce in se){const ie=se[ce];for(const V in ie)T(ie[V].object),delete ie[V];delete se[ce]}delete c[ae]}}function N(ae){if(c[ae.id]===void 0)return;const se=c[ae.id];for(const ce in se){const ie=se[ce];for(const V in ie)T(ie[V].object),delete ie[V];delete se[ce]}delete c[ae.id]}function de(ae){for(const se in c){const ce=c[se];if(ce[ae.id]===void 0)continue;const ie=ce[ae.id];for(const V in ie)T(ie[V].object),delete ie[V];delete ce[ae.id]}}function pe(){$(),g=!0,m!==h&&(m=h,S(m.object))}function $(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:y,reset:pe,resetDefaultState:$,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfProgram:de,initAttributes:R,enableAttribute:C,disableUnusedAttributes:B}}function LS(s,e,t,r){const o=r.isWebGL2;let l;function f(m){l=m}function c(m,g){s.drawArrays(l,m,g),t.update(g,l,1)}function h(m,g,y){if(y===0)return;let v,S;if(o)v=s,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](l,m,g,y),t.update(g,l,y)}this.setMode=f,this.render=c,this.renderInstances=h}function DS(s,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=f||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),E=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,C=f||e.has("OES_texture_float"),O=R&&C,B=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:T,maxAttributes:E,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:U,vertexTextures:R,floatFragmentTextures:C,floatVertexTextures:O,maxSamples:B}}function US(s){const e=this;let t=null,r=0,o=!1,l=!1;const f=new vr,c=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const S=y.length!==0||v||r!==0||o;return o=v,r=y.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,v){t=g(y,v,0)},this.setState=function(y,v,S){const T=y.clippingPlanes,E=y.clipIntersection,x=y.clipShadows,_=s.get(y);if(!o||T===null||T.length===0||l&&!x)l?g(null):m();else{const U=l?0:r,R=U*4;let C=_.clippingState||null;h.value=C,C=g(T,v,R,S);for(let O=0;O!==R;++O)C[O]=t[O];_.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,v,S,T){const E=y!==null?y.length:0;let x=null;if(E!==0){if(x=h.value,T!==!0||x===null){const _=S+E*4,U=v.matrixWorldInverse;c.getNormalMatrix(U),(x===null||x.length<_)&&(x=new Float32Array(_));for(let R=0,C=S;R!==E;++R,C+=4)f.copy(y[R]).applyMatrix4(U,c),f.normal.toArray(x,C),x[C+3]=f.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function IS(s){let e=new WeakMap;function t(f,c){return c===Rl?f.mapping=Ys:c===af&&(f.mapping=qs),f}function r(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const c=f.mapping;if(c===Rl||c===af)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new q0(h.height/2);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",o),t(m.texture,f.mapping)}else return null}}return f}function o(f){const c=f.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class dg extends ug{constructor(e=-1,t=1,r=1,o=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,f=l+m*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,Jp=[.125,.215,.35,.446,.526,.582],Vr=20,$c=new dg,em=new gt;let Zc=null;const Gr=(1+Math.sqrt(5))/2,ks=1/Gr,tm=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Gr,ks),new W(0,Gr,-ks),new W(ks,0,Gr),new W(-ks,0,Gr),new W(Gr,ks,0),new W(-Gr,ks,0)];class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Zc=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc),e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ks,format:hi,colorSpace:Mi,depthBuffer:!1},o=im(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NS(l)),this._blurMaterial=OS(l,e,t)}return o}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,$c)}_sceneToCubeUV(e,t,r,o){const c=new Gn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,v=g.toneMapping;g.getClearColor(em),g.toneMapping=yr,g.autoClear=!1;const S=new rg({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),T=new At(new Wt,S);let E=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,E=!0):(S.color.copy(em),E=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(c.up.set(0,h[_],0),c.lookAt(m[_],0,0)):U===1?(c.up.set(0,0,h[_]),c.lookAt(0,m[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,m[_]));const R=this._cubeSize;gl(o,U*R,_>2?R:0,R,R),g.setRenderTarget(o),E&&g.render(T,c),g.render(e,c)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=v,g.autoClear=y,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ys||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const l=o?this._cubemapMaterial:this._equirectMaterial,f=new At(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;gl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,$c)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=tm[(o-1)%tm.length];this._blur(e,o-1,o,l,f)}t.autoClear=r}_blur(e,t,r,o,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,o,"latitudinal",l),this._halfBlur(f,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,f,c){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new At(this._lodPlanes[o],m),v=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),E=l/T,x=isFinite(l)?1+Math.floor(g*E):Vr;x>Vr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Vr}`);const _=[];let U=0;for(let D=0;D<Vr;++D){const ne=D/E,b=Math.exp(-ne*ne/2);_.push(b),D===0?U+=b:D<x&&(U+=2*b)}for(let D=0;D<_.length;D++)_[D]=_[D]/U;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=_,v.latitudinal.value=f==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:R}=this;v.dTheta.value=T,v.mipInt.value=R-r;const C=this._sizeLods[o],O=3*C*(o>R-Ws?o-R+Ws:0),B=4*(this._cubeSize-C);gl(t,O,B,3*C,2*C),h.setRenderTarget(t),h.render(y,$c)}}function NS(s){const e=[],t=[],r=[];let o=s;const l=s-Ws+1+Jp.length;for(let f=0;f<l;f++){const c=Math.pow(2,o);t.push(c);let h=1/c;f>s-Ws?h=Jp[f-s+Ws-1]:f===0&&(h=0),r.push(h);const m=1/(c-2),g=-m,y=1+m,v=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,T=6,E=3,x=2,_=1,U=new Float32Array(E*T*S),R=new Float32Array(x*T*S),C=new Float32Array(_*T*S);for(let B=0;B<S;B++){const D=B%3*2/3-1,ne=B>2?0:-1,b=[D,ne,0,D+2/3,ne,0,D+2/3,ne+1,0,D,ne,0,D+2/3,ne+1,0,D,ne+1,0];U.set(b,E*T*B),R.set(v,x*T*B);const N=[B,B,B,B,B,B];C.set(N,_*T*B)}const O=new Yi;O.setAttribute("position",new pi(U,E)),O.setAttribute("uv",new pi(R,x)),O.setAttribute("faceIndex",new pi(C,_)),e.push(O),o>Ws&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function im(s,e,t){const r=new ji(s,e,t);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function OS(s,e,t){const r=new Float32Array(Vr),o=new W(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Mf(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function rm(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mf(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function sm(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Mf(){return`

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
	`}function FS(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,m=h===Rl||h===af,g=h===Ys||h===qs;if(m||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let y=e.get(c);return t===null&&(t=new nm(s)),y=m?t.fromEquirectangular(c,y):t.fromCubemap(c,y),e.set(c,y),y.texture}else{if(e.has(c))return e.get(c).texture;{const y=c.image;if(m&&y&&y.height>0||g&&y&&o(y)){t===null&&(t=new nm(s));const v=m?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",l),v.texture}else return null}}}return c}function o(c){let h=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&h++;return h===m}function l(c){const h=c.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function kS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function zS(s,e,t,r){const o={},l=new WeakMap;function f(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);for(const T in v.morphAttributes){const E=v.morphAttributes[T];for(let x=0,_=E.length;x<_;x++)e.remove(E[x])}v.removeEventListener("dispose",f),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(y,v){return o[v.id]===!0||(v.addEventListener("dispose",f),o[v.id]=!0,t.memory.geometries++),v}function h(y){const v=y.attributes;for(const T in v)e.update(v[T],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const E=S[T];for(let x=0,_=E.length;x<_;x++)e.update(E[x],s.ARRAY_BUFFER)}}function m(y){const v=[],S=y.index,T=y.attributes.position;let E=0;if(S!==null){const U=S.array;E=S.version;for(let R=0,C=U.length;R<C;R+=3){const O=U[R+0],B=U[R+1],D=U[R+2];v.push(O,B,B,D,D,O)}}else if(T!==void 0){const U=T.array;E=T.version;for(let R=0,C=U.length/3-1;R<C;R+=3){const O=R+0,B=R+1,D=R+2;v.push(O,B,B,D,D,O)}}else return;const x=new(Zm(v)?ag:sg)(v,1);x.version=E;const _=l.get(y);_&&e.remove(_),l.set(y,x)}function g(y){const v=l.get(y);if(v){const S=y.index;S!==null&&v.version<S.version&&m(y)}else m(y);return l.get(y)}return{get:c,update:h,getWireframeAttribute:g}}function BS(s,e,t,r){const o=r.isWebGL2;let l;function f(v){l=v}let c,h;function m(v){c=v.type,h=v.bytesPerElement}function g(v,S){s.drawElements(l,S,c,v*h),t.update(S,l,1)}function y(v,S,T){if(T===0)return;let E,x;if(o)E=s,x="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[x](l,S,c,v*h,T),t.update(S,l,T)}this.setMode=f,this.setIndex=m,this.render=g,this.renderInstances=y}function HS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function GS(s,e){return s[0]-e[0]}function VS(s,e){return Math.abs(e[1])-Math.abs(s[1])}function WS(s,e,t){const r={},o=new Float32Array(8),l=new WeakMap,f=new Ut,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function h(m,g,y){const v=m.morphTargetInfluences;if(e.isWebGL2===!0){const T=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,E=T!==void 0?T.length:0;let x=l.get(g);if(x===void 0||x.count!==E){let se=function(){$.dispose(),l.delete(g),g.removeEventListener("dispose",se)};var S=se;x!==void 0&&x.texture.dispose();const R=g.morphAttributes.position!==void 0,C=g.morphAttributes.normal!==void 0,O=g.morphAttributes.color!==void 0,B=g.morphAttributes.position||[],D=g.morphAttributes.normal||[],ne=g.morphAttributes.color||[];let b=0;R===!0&&(b=1),C===!0&&(b=2),O===!0&&(b=3);let N=g.attributes.position.count*b,de=1;N>e.maxTextureSize&&(de=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const pe=new Float32Array(N*de*4*E),$=new eg(pe,N,de,E);$.type=Hi,$.needsUpdate=!0;const ae=b*4;for(let ce=0;ce<E;ce++){const ie=B[ce],V=D[ce],re=ne[ce],j=N*de*4*ce;for(let A=0;A<ie.count;A++){const F=A*ae;R===!0&&(f.fromBufferAttribute(ie,A),pe[j+F+0]=f.x,pe[j+F+1]=f.y,pe[j+F+2]=f.z,pe[j+F+3]=0),C===!0&&(f.fromBufferAttribute(V,A),pe[j+F+4]=f.x,pe[j+F+5]=f.y,pe[j+F+6]=f.z,pe[j+F+7]=0),O===!0&&(f.fromBufferAttribute(re,A),pe[j+F+8]=f.x,pe[j+F+9]=f.y,pe[j+F+10]=f.z,pe[j+F+11]=re.itemSize===4?f.w:1)}}x={count:E,texture:$,size:new Ve(N,de)},l.set(g,x),g.addEventListener("dispose",se)}let _=0;for(let R=0;R<v.length;R++)_+=v[R];const U=g.morphTargetsRelative?1:1-_;y.getUniforms().setValue(s,"morphTargetBaseInfluence",U),y.getUniforms().setValue(s,"morphTargetInfluences",v),y.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),y.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const T=v===void 0?0:v.length;let E=r[g.id];if(E===void 0||E.length!==T){E=[];for(let C=0;C<T;C++)E[C]=[C,0];r[g.id]=E}for(let C=0;C<T;C++){const O=E[C];O[0]=C,O[1]=v[C]}E.sort(VS);for(let C=0;C<8;C++)C<T&&E[C][1]?(c[C][0]=E[C][0],c[C][1]=E[C][1]):(c[C][0]=Number.MAX_SAFE_INTEGER,c[C][1]=0);c.sort(GS);const x=g.morphAttributes.position,_=g.morphAttributes.normal;let U=0;for(let C=0;C<8;C++){const O=c[C],B=O[0],D=O[1];B!==Number.MAX_SAFE_INTEGER&&D?(x&&g.getAttribute("morphTarget"+C)!==x[B]&&g.setAttribute("morphTarget"+C,x[B]),_&&g.getAttribute("morphNormal"+C)!==_[B]&&g.setAttribute("morphNormal"+C,_[B]),o[C]=D,U+=D):(x&&g.hasAttribute("morphTarget"+C)===!0&&g.deleteAttribute("morphTarget"+C),_&&g.hasAttribute("morphNormal"+C)===!0&&g.deleteAttribute("morphNormal"+C),o[C]=0)}const R=g.morphTargetsRelative?1:1-U;y.getUniforms().setValue(s,"morphTargetBaseInfluence",R),y.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:h}}function jS(s,e,t,r){let o=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,y=e.get(h,g);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==m&&(v.update(),o.set(v,m))}return y}function f(){o=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:f}}const hg=new yn,pg=new eg,mg=new D0,gg=new cg,am=[],om=[],lm=new Float32Array(16),um=new Float32Array(9),cm=new Float32Array(4);function Js(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=am[o];if(l===void 0&&(l=new Float32Array(o),am[o]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Il(s,e){let t=om[e];t===void 0&&(t=new Int32Array(e),om[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function XS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function YS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function qS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function $S(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;cm.set(r),s.uniformMatrix2fv(this.addr,!1,cm),tn(t,r)}}function ZS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;um.set(r),s.uniformMatrix3fv(this.addr,!1,um),tn(t,r)}}function QS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;lm.set(r),s.uniformMatrix4fv(this.addr,!1,lm),tn(t,r)}}function JS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function iM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function oM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2D(e||hg,o)}function lM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||mg,o)}function uM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||gg,o)}function cM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||pg,o)}function fM(s){switch(s){case 5126:return XS;case 35664:return YS;case 35665:return qS;case 35666:return KS;case 35674:return $S;case 35675:return ZS;case 35676:return QS;case 5124:case 35670:return JS;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return cM}}function dM(s,e){s.uniform1fv(this.addr,e)}function hM(s,e){const t=Js(e,this.size,2);s.uniform2fv(this.addr,t)}function pM(s,e){const t=Js(e,this.size,3);s.uniform3fv(this.addr,t)}function mM(s,e){const t=Js(e,this.size,4);s.uniform4fv(this.addr,t)}function gM(s,e){const t=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _M(s,e){const t=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vM(s,e){const t=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xM(s,e){s.uniform1iv(this.addr,e)}function yM(s,e){s.uniform2iv(this.addr,e)}function SM(s,e){s.uniform3iv(this.addr,e)}function MM(s,e){s.uniform4iv(this.addr,e)}function EM(s,e){s.uniform1uiv(this.addr,e)}function TM(s,e){s.uniform2uiv(this.addr,e)}function wM(s,e){s.uniform3uiv(this.addr,e)}function AM(s,e){s.uniform4uiv(this.addr,e)}function RM(s,e,t){const r=this.cache,o=e.length,l=Il(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let f=0;f!==o;++f)t.setTexture2D(e[f]||hg,l[f])}function bM(s,e,t){const r=this.cache,o=e.length,l=Il(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let f=0;f!==o;++f)t.setTexture3D(e[f]||mg,l[f])}function CM(s,e,t){const r=this.cache,o=e.length,l=Il(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let f=0;f!==o;++f)t.setTextureCube(e[f]||gg,l[f])}function PM(s,e,t){const r=this.cache,o=e.length,l=Il(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let f=0;f!==o;++f)t.setTexture2DArray(e[f]||pg,l[f])}function LM(s){switch(s){case 5126:return dM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return TM;case 36295:return wM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}class DM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=fM(t.type)}}class UM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=LM(t.type)}}class IM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,f=o.length;l!==f;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function fm(s,e){s.seq.push(e),s.map[e.id]=e}function NM(s,e,t){const r=s.name,o=r.length;for(Qc.lastIndex=0;;){const l=Qc.exec(r),f=Qc.lastIndex;let c=l[1];const h=l[2]==="]",m=l[3];if(h&&(c=c|0),m===void 0||m==="["&&f+2===o){fm(t,m===void 0?new DM(c,s,e):new UM(c,s,e));break}else{let y=t.map[c];y===void 0&&(y=new IM(c),fm(t,y)),t=y}}}class wl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),f=e.getUniformLocation(t,l.name);NM(l,f,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const f=e[o];f.id in t&&r.push(f)}return r}}function dm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}let OM=0;function FM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=o;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}function kM(s){switch(s){case Mi:return["Linear","( value )"];case Dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function hm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+FM(s.getShaderSource(e),f)}else return o}function zM(s,e){const t=kM(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function BM(s,e){let t;switch(e){case Yv:t="Linear";break;case qv:t="Reinhard";break;case Kv:t="OptimizedCineon";break;case $v:t="ACESFilmic";break;case Zv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function HM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Va).join(`
`)}function GM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function VM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),f=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function Va(s){return s!==""}function pm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(s){return s.replace(WM,XM)}const jM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XM(s,e){let t=ot[e];if(t===void 0){const r=jM.get(e);if(r!==void 0)t=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hf(t)}const YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(s){return s.replace(YM,qM)}function qM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function _m(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function $M(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case qs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function QM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hm:e="ENVMAP_BLENDING_MULTIPLY";break;case jv:e="ENVMAP_BLENDING_MIX";break;case Xv:e="ENVMAP_BLENDING_ADD";break}return e}function JM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function eE(s,e,t,r){const o=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=KM(t),m=$M(t),g=ZM(t),y=QM(t),v=JM(t),S=t.isWebGL2?"":HM(t),T=GM(l),E=o.createProgram();let x,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Va).join(`
`),x.length>0&&(x+=`
`),_=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Va).join(`
`),_.length>0&&(_+=`
`)):(x=[_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),_=[S,_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?ot.tonemapping_pars_fragment:"",t.toneMapping!==yr?BM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,zM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),f=hf(f),f=pm(f,t),f=mm(f,t),c=hf(c),c=pm(c,t),c=mm(c,t),f=gm(f),c=gm(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=U+x+f,C=U+_+c,O=dm(o,o.VERTEX_SHADER,R),B=dm(o,o.FRAGMENT_SHADER,C);if(o.attachShader(E,O),o.attachShader(E,B),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E),s.debug.checkShaderErrors){const b=o.getProgramInfoLog(E).trim(),N=o.getShaderInfoLog(O).trim(),de=o.getShaderInfoLog(B).trim();let pe=!0,$=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,O,B);else{const ae=hm(o,O,"vertex"),se=hm(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+ae+`
`+se)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(N===""||de==="")&&($=!1);$&&(this.diagnostics={runnable:pe,programLog:b,vertexShader:{log:N,prefix:x},fragmentShader:{log:de,prefix:_}})}o.deleteShader(O),o.deleteShader(B);let D;this.getUniforms=function(){return D===void 0&&(D=new wl(o,E)),D};let ne;return this.getAttributes=function(){return ne===void 0&&(ne=VM(o,E)),ne},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=B,this}let tE=0;class nE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new iE(e),t.set(e,r)),r}}class iE{constructor(e){this.id=tE++,this.code=e,this.usedTimes=0}}function rE(s,e,t,r,o,l,f){const c=new ng,h=new nE,m=[],g=o.isWebGL2,y=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return b===0?"uv":`uv${b}`}function x(b,N,de,pe,$){const ae=pe.fog,se=$.geometry,ce=b.isMeshStandardMaterial?pe.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||ce),V=ie&&ie.mapping===Ll?ie.image.height:null,re=T[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const j=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,A=j!==void 0?j.length:0;let F=0;se.morphAttributes.position!==void 0&&(F=1),se.morphAttributes.normal!==void 0&&(F=2),se.morphAttributes.color!==void 0&&(F=3);let ue,he,xe,Ae;if(re){const yt=yi[re];ue=yt.vertexShader,he=yt.fragmentShader}else ue=b.vertexShader,he=b.fragmentShader,h.update(b),xe=h.getVertexShaderID(b),Ae=h.getFragmentShaderID(b);const Ue=s.getRenderTarget(),be=$.isInstancedMesh===!0,Ge=!!b.map,_t=!!b.matcap,nt=!!ie,K=!!b.aoMap,Ct=!!b.lightMap,We=!!b.bumpMap,et=!!b.normalMap,Ke=!!b.displacementMap,vt=!!b.emissiveMap,rt=!!b.metalnessMap,tt=!!b.roughnessMap,lt=b.anisotropy>0,Et=b.clearcoat>0,kt=b.iridescence>0,L=b.sheen>0,w=b.transmission>0,J=lt&&!!b.anisotropyMap,Ee=Et&&!!b.clearcoatMap,_e=Et&&!!b.clearcoatNormalMap,Se=Et&&!!b.clearcoatRoughnessMap,He=kt&&!!b.iridescenceMap,Me=kt&&!!b.iridescenceThicknessMap,te=L&&!!b.sheenColorMap,k=L&&!!b.sheenRoughnessMap,fe=!!b.specularMap,De=!!b.specularColorMap,Re=!!b.specularIntensityMap,Pe=w&&!!b.transmissionMap,$e=w&&!!b.thicknessMap,ut=!!b.gradientMap,H=!!b.alphaMap,Ce=b.alphaTest>0,ee=!!b.alphaHash,ve=!!b.extensions,we=!!se.attributes.uv1,at=!!se.attributes.uv2,pt=!!se.attributes.uv3;let xt=yr;return b.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(xt=s.toneMapping),{isWebGL2:g,shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:ue,fragmentShader:he,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,instancing:be,instancingColor:be&&$.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Mi,map:Ge,matcap:_t,envMap:nt,envMapMode:nt&&ie.mapping,envMapCubeUVHeight:V,aoMap:K,lightMap:Ct,bumpMap:We,normalMap:et,displacementMap:v&&Ke,emissiveMap:vt,normalMapObjectSpace:et&&b.normalMapType===c0,normalMapTangentSpace:et&&b.normalMapType===$m,metalnessMap:rt,roughnessMap:tt,anisotropy:lt,anisotropyMap:J,clearcoat:Et,clearcoatMap:Ee,clearcoatNormalMap:_e,clearcoatRoughnessMap:Se,iridescence:kt,iridescenceMap:He,iridescenceThicknessMap:Me,sheen:L,sheenColorMap:te,sheenRoughnessMap:k,specularMap:fe,specularColorMap:De,specularIntensityMap:Re,transmission:w,transmissionMap:Pe,thicknessMap:$e,gradientMap:ut,opaque:b.transparent===!1&&b.blending===js,alphaMap:H,alphaTest:Ce,alphaHash:ee,combine:b.combine,mapUv:Ge&&E(b.map.channel),aoMapUv:K&&E(b.aoMap.channel),lightMapUv:Ct&&E(b.lightMap.channel),bumpMapUv:We&&E(b.bumpMap.channel),normalMapUv:et&&E(b.normalMap.channel),displacementMapUv:Ke&&E(b.displacementMap.channel),emissiveMapUv:vt&&E(b.emissiveMap.channel),metalnessMapUv:rt&&E(b.metalnessMap.channel),roughnessMapUv:tt&&E(b.roughnessMap.channel),anisotropyMapUv:J&&E(b.anisotropyMap.channel),clearcoatMapUv:Ee&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:te&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:k&&E(b.sheenRoughnessMap.channel),specularMapUv:fe&&E(b.specularMap.channel),specularColorMapUv:De&&E(b.specularColorMap.channel),specularIntensityMapUv:Re&&E(b.specularIntensityMap.channel),transmissionMapUv:Pe&&E(b.transmissionMap.channel),thicknessMapUv:$e&&E(b.thicknessMap.channel),alphaMapUv:H&&E(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(et||lt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:at,vertexUv3s:pt,pointsUvs:$.isPoints===!0&&!!se.attributes.uv&&(Ge||H),fog:!!ae,useFog:b.fog===!0,fogExp2:ae&&ae.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:$.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:F,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&de.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&b.map.colorSpace===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ti,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ve&&b.extensions.derivatives===!0,extensionFragDepth:ve&&b.extensions.fragDepth===!0,extensionDrawBuffers:ve&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function _(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const de in b.defines)N.push(de),N.push(b.defines[de]);return b.isRawShaderMaterial===!1&&(U(N,b),R(N,b),N.push(s.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function U(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function R(b,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.matcap&&c.enable(4),N.envMap&&c.enable(5),N.normalMapObjectSpace&&c.enable(6),N.normalMapTangentSpace&&c.enable(7),N.clearcoat&&c.enable(8),N.iridescence&&c.enable(9),N.alphaTest&&c.enable(10),N.vertexColors&&c.enable(11),N.vertexAlphas&&c.enable(12),N.vertexUv1s&&c.enable(13),N.vertexUv2s&&c.enable(14),N.vertexUv3s&&c.enable(15),N.vertexTangents&&c.enable(16),N.anisotropy&&c.enable(17),b.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),b.push(c.mask)}function C(b){const N=T[b.type];let de;if(N){const pe=yi[N];de=lg.clone(pe.uniforms)}else de=b.uniforms;return de}function O(b,N){let de;for(let pe=0,$=m.length;pe<$;pe++){const ae=m[pe];if(ae.cacheKey===N){de=ae,++de.usedTimes;break}}return de===void 0&&(de=new eE(s,N,b,l),m.push(de)),de}function B(b){if(--b.usedTimes===0){const N=m.indexOf(b);m[N]=m[m.length-1],m.pop(),b.destroy()}}function D(b){h.remove(b)}function ne(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:C,acquireProgram:O,releaseProgram:B,releaseShaderCache:D,programs:m,dispose:ne}}function sE(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,c){s.get(l)[f]=c}function o(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function aE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function f(y,v,S,T,E,x){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:v,material:S,groupOrder:T,renderOrder:y.renderOrder,z:E,group:x},s[e]=_):(_.id=y.id,_.object=y,_.geometry=v,_.material=S,_.groupOrder=T,_.renderOrder=y.renderOrder,_.z=E,_.group=x),e++,_}function c(y,v,S,T,E,x){const _=f(y,v,S,T,E,x);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):t.push(_)}function h(y,v,S,T,E,x){const _=f(y,v,S,T,E,x);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function m(y,v){t.length>1&&t.sort(y||aE),r.length>1&&r.sort(v||vm),o.length>1&&o.sort(v||vm)}function g(){for(let y=e,v=s.length;y<v;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:h,finish:g,sort:m}}function oE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let f;return l===void 0?(f=new xm,s.set(r,[f])):o>=l.length?(f=new xm,l.push(f)):f=l[o],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new gt};break;case"SpotLight":t={position:new W,direction:new W,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function uE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let cE=0;function fE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dE(s,e){const t=new lE,r=uE(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)o.probe.push(new W);const l=new W,f=new jt,c=new jt;function h(g,y){let v=0,S=0,T=0;for(let de=0;de<9;de++)o.probe[de].set(0,0,0);let E=0,x=0,_=0,U=0,R=0,C=0,O=0,B=0,D=0,ne=0;g.sort(fE);const b=y===!0?Math.PI:1;for(let de=0,pe=g.length;de<pe;de++){const $=g[de],ae=$.color,se=$.intensity,ce=$.distance,ie=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)v+=ae.r*se*b,S+=ae.g*se*b,T+=ae.b*se*b;else if($.isLightProbe)for(let V=0;V<9;V++)o.probe[V].addScaledVector($.sh.coefficients[V],se);else if($.isDirectionalLight){const V=t.get($);if(V.color.copy($.color).multiplyScalar($.intensity*b),$.castShadow){const re=$.shadow,j=r.get($);j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,o.directionalShadow[E]=j,o.directionalShadowMap[E]=ie,o.directionalShadowMatrix[E]=$.shadow.matrix,C++}o.directional[E]=V,E++}else if($.isSpotLight){const V=t.get($);V.position.setFromMatrixPosition($.matrixWorld),V.color.copy(ae).multiplyScalar(se*b),V.distance=ce,V.coneCos=Math.cos($.angle),V.penumbraCos=Math.cos($.angle*(1-$.penumbra)),V.decay=$.decay,o.spot[_]=V;const re=$.shadow;if($.map&&(o.spotLightMap[D]=$.map,D++,re.updateMatrices($),$.castShadow&&ne++),o.spotLightMatrix[_]=re.matrix,$.castShadow){const j=r.get($);j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,o.spotShadow[_]=j,o.spotShadowMap[_]=ie,B++}_++}else if($.isRectAreaLight){const V=t.get($);V.color.copy(ae).multiplyScalar(se),V.halfWidth.set($.width*.5,0,0),V.halfHeight.set(0,$.height*.5,0),o.rectArea[U]=V,U++}else if($.isPointLight){const V=t.get($);if(V.color.copy($.color).multiplyScalar($.intensity*b),V.distance=$.distance,V.decay=$.decay,$.castShadow){const re=$.shadow,j=r.get($);j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,j.shadowCameraNear=re.camera.near,j.shadowCameraFar=re.camera.far,o.pointShadow[x]=j,o.pointShadowMap[x]=ie,o.pointShadowMatrix[x]=$.shadow.matrix,O++}o.point[x]=V,x++}else if($.isHemisphereLight){const V=t.get($);V.skyColor.copy($.color).multiplyScalar(se*b),V.groundColor.copy($.groundColor).multiplyScalar(se*b),o.hemi[R]=V,R++}}U>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Le.LTC_FLOAT_1,o.rectAreaLTC2=Le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Le.LTC_HALF_1,o.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=S,o.ambient[2]=T;const N=o.hash;(N.directionalLength!==E||N.pointLength!==x||N.spotLength!==_||N.rectAreaLength!==U||N.hemiLength!==R||N.numDirectionalShadows!==C||N.numPointShadows!==O||N.numSpotShadows!==B||N.numSpotMaps!==D)&&(o.directional.length=E,o.spot.length=_,o.rectArea.length=U,o.point.length=x,o.hemi.length=R,o.directionalShadow.length=C,o.directionalShadowMap.length=C,o.pointShadow.length=O,o.pointShadowMap.length=O,o.spotShadow.length=B,o.spotShadowMap.length=B,o.directionalShadowMatrix.length=C,o.pointShadowMatrix.length=O,o.spotLightMatrix.length=B+D-ne,o.spotLightMap.length=D,o.numSpotLightShadowsWithMaps=ne,N.directionalLength=E,N.pointLength=x,N.spotLength=_,N.rectAreaLength=U,N.hemiLength=R,N.numDirectionalShadows=C,N.numPointShadows=O,N.numSpotShadows=B,N.numSpotMaps=D,o.version=cE++)}function m(g,y){let v=0,S=0,T=0,E=0,x=0;const _=y.matrixWorldInverse;for(let U=0,R=g.length;U<R;U++){const C=g[U];if(C.isDirectionalLight){const O=o.directional[v];O.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(_),v++}else if(C.isSpotLight){const O=o.spot[T];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(_),O.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(_),T++}else if(C.isRectAreaLight){const O=o.rectArea[E];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(_),c.identity(),f.copy(C.matrixWorld),f.premultiply(_),c.extractRotation(f),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),O.halfWidth.applyMatrix4(c),O.halfHeight.applyMatrix4(c),E++}else if(C.isPointLight){const O=o.point[S];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(_),S++}else if(C.isHemisphereLight){const O=o.hemi[x];O.direction.setFromMatrixPosition(C.matrixWorld),O.direction.transformDirection(_),x++}}}return{setup:h,setupView:m,state:o}}function ym(s,e){const t=new dE(s,e),r=[],o=[];function l(){r.length=0,o.length=0}function f(y){r.push(y)}function c(y){o.push(y)}function h(y){t.setup(r,y)}function m(y){t.setupView(r,y)}return{init:l,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:h,setupLightsView:m,pushLight:f,pushShadow:c}}function hE(s,e){let t=new WeakMap;function r(l,f=0){const c=t.get(l);let h;return c===void 0?(h=new ym(s,e),t.set(l,[h])):f>=c.length?(h=new ym(s,e),c.push(h)):h=c[f],h}function o(){t=new WeakMap}return{get:r,dispose:o}}class pE extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mE extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
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
}`;function vE(s,e,t){let r=new yf;const o=new Ve,l=new Ve,f=new Ut,c=new pE({depthPacking:u0}),h=new mE,m={},g=t.maxTextureSize,y={[Si]:In,[In]:Si,[ti]:ti},v=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:gE,fragmentShader:_E}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Yi;T.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new At(T,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=km;let _=this.type;this.render=function(O,B,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const ne=s.getRenderTarget(),b=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),de=s.state;de.setBlending(Vi),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const pe=_!==zi&&this.type===zi,$=_===zi&&this.type!==zi;for(let ae=0,se=O.length;ae<se;ae++){const ce=O[ae],ie=ce.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;o.copy(ie.mapSize);const V=ie.getFrameExtents();if(o.multiply(V),l.copy(ie.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/V.x),o.x=l.x*V.x,ie.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/V.y),o.y=l.y*V.y,ie.mapSize.y=l.y)),ie.map===null||pe===!0||$===!0){const j=this.type!==zi?{minFilter:Ft,magFilter:Ft}:{};ie.map!==null&&ie.map.dispose(),ie.map=new ji(o.x,o.y,j),ie.map.texture.name=ce.name+".shadowMap",ie.camera.updateProjectionMatrix()}s.setRenderTarget(ie.map),s.clear();const re=ie.getViewportCount();for(let j=0;j<re;j++){const A=ie.getViewport(j);f.set(l.x*A.x,l.y*A.y,l.x*A.z,l.y*A.w),de.viewport(f),ie.updateMatrices(ce,j),r=ie.getFrustum(),C(B,D,ie.camera,ce,this.type)}ie.isPointLightShadow!==!0&&this.type===zi&&U(ie,D),ie.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(ne,b,N)};function U(O,B){const D=e.update(E);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ji(o.x,o.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(B,null,D,v,E,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(B,null,D,S,E,null)}function R(O,B,D,ne){let b=null;const N=D.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(N!==void 0)b=N;else if(b=D.isPointLight===!0?h:c,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const de=b.uuid,pe=B.uuid;let $=m[de];$===void 0&&($={},m[de]=$);let ae=$[pe];ae===void 0&&(ae=b.clone(),$[pe]=ae),b=ae}if(b.visible=B.visible,b.wireframe=B.wireframe,ne===zi?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:y[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const de=s.properties.get(b);de.light=D}return b}function C(O,B,D,ne,b){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&b===zi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,O.matrixWorld);const pe=e.update(O),$=O.material;if(Array.isArray($)){const ae=pe.groups;for(let se=0,ce=ae.length;se<ce;se++){const ie=ae[se],V=$[ie.materialIndex];if(V&&V.visible){const re=R(O,V,ne,b);s.renderBufferDirect(D,null,pe,re,O,ie)}}}else if($.visible){const ae=R(O,$,ne,b);s.renderBufferDirect(D,null,pe,ae,O,null)}}const de=O.children;for(let pe=0,$=de.length;pe<$;pe++)C(de[pe],B,D,ne,b)}}function xE(s,e,t){const r=t.isWebGL2;function o(){let H=!1;const Ce=new Ut;let ee=null;const ve=new Ut(0,0,0,0);return{setMask:function(we){ee!==we&&!H&&(s.colorMask(we,we,we,we),ee=we)},setLocked:function(we){H=we},setClear:function(we,at,pt,xt,hn){hn===!0&&(we*=xt,at*=xt,pt*=xt),Ce.set(we,at,pt,xt),ve.equals(Ce)===!1&&(s.clearColor(we,at,pt,xt),ve.copy(Ce))},reset:function(){H=!1,ee=null,ve.set(-1,0,0,0)}}}function l(){let H=!1,Ce=null,ee=null,ve=null;return{setTest:function(we){we?Ue(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(we){Ce!==we&&!H&&(s.depthMask(we),Ce=we)},setFunc:function(we){if(ee!==we){switch(we){case kv:s.depthFunc(s.NEVER);break;case zv:s.depthFunc(s.ALWAYS);break;case Bv:s.depthFunc(s.LESS);break;case sf:s.depthFunc(s.LEQUAL);break;case Hv:s.depthFunc(s.EQUAL);break;case Gv:s.depthFunc(s.GEQUAL);break;case Vv:s.depthFunc(s.GREATER);break;case Wv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=we}},setLocked:function(we){H=we},setClear:function(we){ve!==we&&(s.clearDepth(we),ve=we)},reset:function(){H=!1,Ce=null,ee=null,ve=null}}}function f(){let H=!1,Ce=null,ee=null,ve=null,we=null,at=null,pt=null,xt=null,hn=null;return{setTest:function(yt){H||(yt?Ue(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(yt){Ce!==yt&&!H&&(s.stencilMask(yt),Ce=yt)},setFunc:function(yt,Nn,Gt){(ee!==yt||ve!==Nn||we!==Gt)&&(s.stencilFunc(yt,Nn,Gt),ee=yt,ve=Nn,we=Gt)},setOp:function(yt,Nn,Gt){(at!==yt||pt!==Nn||xt!==Gt)&&(s.stencilOp(yt,Nn,Gt),at=yt,pt=Nn,xt=Gt)},setLocked:function(yt){H=yt},setClear:function(yt){hn!==yt&&(s.clearStencil(yt),hn=yt)},reset:function(){H=!1,Ce=null,ee=null,ve=null,we=null,at=null,pt=null,xt=null,hn=null}}}const c=new o,h=new l,m=new f,g=new WeakMap,y=new WeakMap;let v={},S={},T=new WeakMap,E=[],x=null,_=!1,U=null,R=null,C=null,O=null,B=null,D=null,ne=null,b=!1,N=null,de=null,pe=null,$=null,ae=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ie=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),ce=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ce=ie>=2);let re=null,j={};const A=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),ue=new Ut().fromArray(A),he=new Ut().fromArray(F);function xe(H,Ce,ee,ve){const we=new Uint8Array(4),at=s.createTexture();s.bindTexture(H,at),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<ee;pt++)r&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ce,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Ce+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return at}const Ae={};Ae[s.TEXTURE_2D]=xe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ae[s.TEXTURE_2D_ARRAY]=xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),Ue(s.DEPTH_TEST),h.setFunc(sf),Ke(!1),vt(sp),Ue(s.CULL_FACE),We(Vi);function Ue(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function be(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function Ge(H,Ce){return S[H]!==Ce?(s.bindFramebuffer(H,Ce),S[H]=Ce,r&&(H===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ce),H===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function _t(H,Ce){let ee=E,ve=!1;if(H)if(ee=T.get(Ce),ee===void 0&&(ee=[],T.set(Ce,ee)),H.isWebGLMultipleRenderTargets){const we=H.texture;if(ee.length!==we.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let at=0,pt=we.length;at<pt;at++)ee[at]=s.COLOR_ATTACHMENT0+at;ee.length=we.length,ve=!0}}else ee[0]!==s.COLOR_ATTACHMENT0&&(ee[0]=s.COLOR_ATTACHMENT0,ve=!0);else ee[0]!==s.BACK&&(ee[0]=s.BACK,ve=!0);ve&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function nt(H){return x!==H?(s.useProgram(H),x=H,!0):!1}const K={[Vs]:s.FUNC_ADD,[Rv]:s.FUNC_SUBTRACT,[bv]:s.FUNC_REVERSE_SUBTRACT};if(r)K[up]=s.MIN,K[cp]=s.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(K[up]=H.MIN_EXT,K[cp]=H.MAX_EXT)}const Ct={[Cv]:s.ZERO,[Pv]:s.ONE,[Lv]:s.SRC_COLOR,[zm]:s.SRC_ALPHA,[Fv]:s.SRC_ALPHA_SATURATE,[Nv]:s.DST_COLOR,[Uv]:s.DST_ALPHA,[Dv]:s.ONE_MINUS_SRC_COLOR,[Bm]:s.ONE_MINUS_SRC_ALPHA,[Ov]:s.ONE_MINUS_DST_COLOR,[Iv]:s.ONE_MINUS_DST_ALPHA};function We(H,Ce,ee,ve,we,at,pt,xt){if(H===Vi){_===!0&&(be(s.BLEND),_=!1);return}if(_===!1&&(Ue(s.BLEND),_=!0),H!==Av){if(H!==U||xt!==b){if((R!==Vs||B!==Vs)&&(s.blendEquation(s.FUNC_ADD),R=Vs,B=Vs),xt)switch(H){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ap:s.blendFunc(s.ONE,s.ONE);break;case op:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ap:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case op:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}C=null,O=null,D=null,ne=null,U=H,b=xt}return}we=we||Ce,at=at||ee,pt=pt||ve,(Ce!==R||we!==B)&&(s.blendEquationSeparate(K[Ce],K[we]),R=Ce,B=we),(ee!==C||ve!==O||at!==D||pt!==ne)&&(s.blendFuncSeparate(Ct[ee],Ct[ve],Ct[at],Ct[pt]),C=ee,O=ve,D=at,ne=pt),U=H,b=!1}function et(H,Ce){H.side===ti?be(s.CULL_FACE):Ue(s.CULL_FACE);let ee=H.side===In;Ce&&(ee=!ee),Ke(ee),H.blending===js&&H.transparent===!1?We(Vi):We(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),c.setMask(H.colorWrite);const ve=H.stencilWrite;m.setTest(ve),ve&&(m.setMask(H.stencilWriteMask),m.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),m.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ue(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(H){N!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),N=H)}function vt(H){H!==Ev?(Ue(s.CULL_FACE),H!==de&&(H===sp?s.cullFace(s.BACK):H===Tv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),de=H}function rt(H){H!==pe&&(ce&&s.lineWidth(H),pe=H)}function tt(H,Ce,ee){H?(Ue(s.POLYGON_OFFSET_FILL),($!==Ce||ae!==ee)&&(s.polygonOffset(Ce,ee),$=Ce,ae=ee)):be(s.POLYGON_OFFSET_FILL)}function lt(H){H?Ue(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function Et(H){H===void 0&&(H=s.TEXTURE0+se-1),re!==H&&(s.activeTexture(H),re=H)}function kt(H,Ce,ee){ee===void 0&&(re===null?ee=s.TEXTURE0+se-1:ee=re);let ve=j[ee];ve===void 0&&(ve={type:void 0,texture:void 0},j[ee]=ve),(ve.type!==H||ve.texture!==Ce)&&(re!==ee&&(s.activeTexture(ee),re=ee),s.bindTexture(H,Ce||Ae[H]),ve.type=H,ve.texture=Ce)}function L(){const H=j[re];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function w(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(H){ue.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ue.copy(H))}function Re(H){he.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),he.copy(H))}function Pe(H,Ce){let ee=y.get(Ce);ee===void 0&&(ee=new WeakMap,y.set(Ce,ee));let ve=ee.get(H);ve===void 0&&(ve=s.getUniformBlockIndex(Ce,H.name),ee.set(H,ve))}function $e(H,Ce){const ve=y.get(Ce).get(H);g.get(Ce)!==ve&&(s.uniformBlockBinding(Ce,ve,H.__bindingPointIndex),g.set(Ce,ve))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},re=null,j={},S={},T=new WeakMap,E=[],x=null,_=!1,U=null,R=null,C=null,O=null,B=null,D=null,ne=null,b=!1,N=null,de=null,pe=null,$=null,ae=null,ue.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:Ue,disable:be,bindFramebuffer:Ge,drawBuffers:_t,useProgram:nt,setBlending:We,setMaterial:et,setFlipSided:Ke,setCullFace:vt,setLineWidth:rt,setPolygonOffset:tt,setScissorTest:lt,activeTexture:Et,bindTexture:kt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:J,texImage2D:k,texImage3D:fe,updateUBOMapping:Pe,uniformBlockBinding:$e,texStorage2D:Me,texStorage3D:te,texSubImage2D:Ee,texSubImage3D:_e,compressedTexSubImage2D:Se,compressedTexSubImage3D:He,scissor:De,viewport:Re,reset:ut}}function yE(s,e,t,r,o,l,f){const c=o.isWebGL2,h=o.maxTextures,m=o.maxCubemapSize,g=o.maxTextureSize,y=o.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let E;const x=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(L,w){return _?new OffscreenCanvas(L,w):Cl("canvas")}function R(L,w,J,Ee){let _e=1;if((L.width>Ee||L.height>Ee)&&(_e=Ee/Math.max(L.width,L.height)),_e<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const Se=w?df:Math.floor,He=Se(_e*L.width),Me=Se(_e*L.height);E===void 0&&(E=U(He,Me));const te=J?U(He,Me):E;return te.width=He,te.height=Me,te.getContext("2d").drawImage(L,0,0,He,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+He+"x"+Me+")."),te}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function C(L){return kp(L.width)&&kp(L.height)}function O(L){return c?!1:L.wrapS!==di||L.wrapT!==di||L.minFilter!==Ft&&L.minFilter!==Jn}function B(L,w){return L.generateMipmaps&&w&&L.minFilter!==Ft&&L.minFilter!==Jn}function D(L){s.generateMipmap(L)}function ne(L,w,J,Ee,_e=!1){if(c===!1)return w;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Se=w;return w===s.RED&&(J===s.FLOAT&&(Se=s.R32F),J===s.HALF_FLOAT&&(Se=s.R16F),J===s.UNSIGNED_BYTE&&(Se=s.R8)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(Se=s.R8UI),J===s.UNSIGNED_SHORT&&(Se=s.R16UI),J===s.UNSIGNED_INT&&(Se=s.R32UI),J===s.BYTE&&(Se=s.R8I),J===s.SHORT&&(Se=s.R16I),J===s.INT&&(Se=s.R32I)),w===s.RG&&(J===s.FLOAT&&(Se=s.RG32F),J===s.HALF_FLOAT&&(Se=s.RG16F),J===s.UNSIGNED_BYTE&&(Se=s.RG8)),w===s.RGBA&&(J===s.FLOAT&&(Se=s.RGBA32F),J===s.HALF_FLOAT&&(Se=s.RGBA16F),J===s.UNSIGNED_BYTE&&(Se=Ee===Dt&&_e===!1?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)),(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function b(L,w,J){return B(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==Ft&&L.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function N(L){return L===Ft||L===fp||L===wc?s.NEAREST:s.LINEAR}function de(L){const w=L.target;w.removeEventListener("dispose",de),$(w),w.isVideoTexture&&T.delete(w)}function pe(L){const w=L.target;w.removeEventListener("dispose",pe),se(w)}function $(L){const w=r.get(L);if(w.__webglInit===void 0)return;const J=L.source,Ee=x.get(J);if(Ee){const _e=Ee[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&ae(L),Object.keys(Ee).length===0&&x.delete(J)}r.remove(L)}function ae(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const J=L.source,Ee=x.get(J);delete Ee[w.__cacheKey],f.memory.textures--}function se(L){const w=L.texture,J=r.get(L),Ee=r.get(w);if(Ee.__webglTexture!==void 0&&(s.deleteTexture(Ee.__webglTexture),f.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(J.__webglFramebuffer[_e]))for(let Se=0;Se<J.__webglFramebuffer[_e].length;Se++)s.deleteFramebuffer(J.__webglFramebuffer[_e][Se]);else s.deleteFramebuffer(J.__webglFramebuffer[_e]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[_e])}else{if(Array.isArray(J.__webglFramebuffer))for(let _e=0;_e<J.__webglFramebuffer.length;_e++)s.deleteFramebuffer(J.__webglFramebuffer[_e]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let _e=0;_e<J.__webglColorRenderbuffer.length;_e++)J.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[_e]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let _e=0,Se=w.length;_e<Se;_e++){const He=r.get(w[_e]);He.__webglTexture&&(s.deleteTexture(He.__webglTexture),f.memory.textures--),r.remove(w[_e])}r.remove(w),r.remove(L)}let ce=0;function ie(){ce=0}function V(){const L=ce;return L>=h&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+h),ce+=1,L}function re(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function j(L,w){const J=r.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const Ee=L.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(J,L,w);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function A(L,w){const J=r.get(L);if(L.version>0&&J.__version!==L.version){Ge(J,L,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function F(L,w){const J=r.get(L);if(L.version>0&&J.__version!==L.version){Ge(J,L,w);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function ue(L,w){const J=r.get(L);if(L.version>0&&J.__version!==L.version){_t(J,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const he={[of]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[lf]:s.MIRRORED_REPEAT},xe={[Ft]:s.NEAREST,[fp]:s.NEAREST_MIPMAP_NEAREST,[wc]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[Qv]:s.LINEAR_MIPMAP_NEAREST,[ja]:s.LINEAR_MIPMAP_LINEAR},Ae={[d0]:s.NEVER,[x0]:s.ALWAYS,[h0]:s.LESS,[m0]:s.LEQUAL,[p0]:s.EQUAL,[v0]:s.GEQUAL,[g0]:s.GREATER,[_0]:s.NOTEQUAL};function Ue(L,w,J){if(J?(s.texParameteri(L,s.TEXTURE_WRAP_S,he[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,he[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,he[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,xe[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,xe[w.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==di||w.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N(w.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N(w.minFilter)),w.minFilter!==Ft&&w.minFilter!==Jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ft||w.minFilter!==wc&&w.minFilter!==ja||w.type===Hi&&e.has("OES_texture_float_linear")===!1||c===!1&&w.type===Ks&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(s.texParameterf(L,Ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function be(L,w){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",de));const Ee=w.source;let _e=x.get(Ee);_e===void 0&&(_e={},x.set(Ee,_e));const Se=re(w);if(Se!==L.__cacheKey){_e[Se]===void 0&&(_e[Se]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),_e[Se].usedTimes++;const He=_e[L.__cacheKey];He!==void 0&&(_e[L.__cacheKey].usedTimes--,He.usedTimes===0&&ae(w)),L.__cacheKey=Se,L.__webglTexture=_e[Se].texture}return J}function Ge(L,w,J){let Ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ee=s.TEXTURE_3D);const _e=be(L,w),Se=w.source;t.bindTexture(Ee,L.__webglTexture,s.TEXTURE0+J);const He=r.get(Se);if(Se.version!==He.__version||_e===!0){t.activeTexture(s.TEXTURE0+J),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Me=O(w)&&C(w.image)===!1;let te=R(w.image,Me,!1,g);te=kt(w,te);const k=C(te)||c,fe=l.convert(w.format,w.colorSpace);let De=l.convert(w.type),Re=ne(w.internalFormat,fe,De,w.colorSpace,w.isVideoTexture);Ue(Ee,w,k);let Pe;const $e=w.mipmaps,ut=c&&w.isVideoTexture!==!0,H=He.__version===void 0||_e===!0,Ce=b(w,te,k);if(w.isDepthTexture)Re=s.DEPTH_COMPONENT,c?w.type===Hi?Re=s.DEPTH_COMPONENT32F:w.type===xr?Re=s.DEPTH_COMPONENT24:w.type===Wr?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:w.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===jr&&Re===s.DEPTH_COMPONENT&&w.type!==vf&&w.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=xr,De=l.convert(w.type)),w.format===$s&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,w.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Wr,De=l.convert(w.type))),H&&(ut?t.texStorage2D(s.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Re,te.width,te.height,0,fe,De,null));else if(w.isDataTexture)if($e.length>0&&k){ut&&H&&t.texStorage2D(s.TEXTURE_2D,Ce,Re,$e[0].width,$e[0].height);for(let ee=0,ve=$e.length;ee<ve;ee++)Pe=$e[ee],ut?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,fe,De,Pe.data):t.texImage2D(s.TEXTURE_2D,ee,Re,Pe.width,Pe.height,0,fe,De,Pe.data);w.generateMipmaps=!1}else ut?(H&&t.texStorage2D(s.TEXTURE_2D,Ce,Re,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,fe,De,te.data)):t.texImage2D(s.TEXTURE_2D,0,Re,te.width,te.height,0,fe,De,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ut&&H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Re,$e[0].width,$e[0].height,te.depth);for(let ee=0,ve=$e.length;ee<ve;ee++)Pe=$e[ee],w.format!==hi?fe!==null?ut?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,te.depth,fe,Pe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Re,Pe.width,Pe.height,te.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,te.depth,fe,De,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Re,Pe.width,Pe.height,te.depth,0,fe,De,Pe.data)}else{ut&&H&&t.texStorage2D(s.TEXTURE_2D,Ce,Re,$e[0].width,$e[0].height);for(let ee=0,ve=$e.length;ee<ve;ee++)Pe=$e[ee],w.format!==hi?fe!==null?ut?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,fe,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Re,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,fe,De,Pe.data):t.texImage2D(s.TEXTURE_2D,ee,Re,Pe.width,Pe.height,0,fe,De,Pe.data)}else if(w.isDataArrayTexture)ut?(H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Re,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,De,te.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,fe,De,te.data);else if(w.isData3DTexture)ut?(H&&t.texStorage3D(s.TEXTURE_3D,Ce,Re,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,De,te.data)):t.texImage3D(s.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,fe,De,te.data);else if(w.isFramebufferTexture){if(H)if(ut)t.texStorage2D(s.TEXTURE_2D,Ce,Re,te.width,te.height);else{let ee=te.width,ve=te.height;for(let we=0;we<Ce;we++)t.texImage2D(s.TEXTURE_2D,we,Re,ee,ve,0,fe,De,null),ee>>=1,ve>>=1}}else if($e.length>0&&k){ut&&H&&t.texStorage2D(s.TEXTURE_2D,Ce,Re,$e[0].width,$e[0].height);for(let ee=0,ve=$e.length;ee<ve;ee++)Pe=$e[ee],ut?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,fe,De,Pe):t.texImage2D(s.TEXTURE_2D,ee,Re,fe,De,Pe);w.generateMipmaps=!1}else ut?(H&&t.texStorage2D(s.TEXTURE_2D,Ce,Re,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,De,te)):t.texImage2D(s.TEXTURE_2D,0,Re,fe,De,te);B(w,k)&&D(Ee),He.__version=Se.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function _t(L,w,J){if(w.image.length!==6)return;const Ee=be(L,w),_e=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const Se=r.get(_e);if(_e.version!==Se.__version||Ee===!0){t.activeTexture(s.TEXTURE0+J),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const He=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,te=[];for(let ee=0;ee<6;ee++)!He&&!Me?te[ee]=R(w.image[ee],!1,!0,m):te[ee]=Me?w.image[ee].image:w.image[ee],te[ee]=kt(w,te[ee]);const k=te[0],fe=C(k)||c,De=l.convert(w.format,w.colorSpace),Re=l.convert(w.type),Pe=ne(w.internalFormat,De,Re,w.colorSpace),$e=c&&w.isVideoTexture!==!0,ut=Se.__version===void 0||Ee===!0;let H=b(w,k,fe);Ue(s.TEXTURE_CUBE_MAP,w,fe);let Ce;if(He){$e&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,Pe,k.width,k.height);for(let ee=0;ee<6;ee++){Ce=te[ee].mipmaps;for(let ve=0;ve<Ce.length;ve++){const we=Ce[ve];w.format!==hi?De!==null?$e?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,we.width,we.height,De,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,we.width,we.height,De,Re,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,Pe,we.width,we.height,0,De,Re,we.data)}}}else{Ce=w.mipmaps,$e&&ut&&(Ce.length>0&&H++,t.texStorage2D(s.TEXTURE_CUBE_MAP,H,Pe,te[0].width,te[0].height));for(let ee=0;ee<6;ee++)if(Me){$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,te[ee].width,te[ee].height,De,Re,te[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Pe,te[ee].width,te[ee].height,0,De,Re,te[ee].data);for(let ve=0;ve<Ce.length;ve++){const at=Ce[ve].image[ee].image;$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,at.width,at.height,De,Re,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,Pe,at.width,at.height,0,De,Re,at.data)}}else{$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Re,te[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Pe,De,Re,te[ee]);for(let ve=0;ve<Ce.length;ve++){const we=Ce[ve];$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,De,Re,we.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,Pe,De,Re,we.image[ee])}}}B(w,fe)&&D(s.TEXTURE_CUBE_MAP),Se.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function nt(L,w,J,Ee,_e,Se){const He=l.convert(J.format,J.colorSpace),Me=l.convert(J.type),te=ne(J.internalFormat,He,Me,J.colorSpace);if(!r.get(w).__hasExternalTextures){const fe=Math.max(1,w.width>>Se),De=Math.max(1,w.height>>Se);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,Se,te,fe,De,w.depth,0,He,Me,null):t.texImage2D(_e,Se,te,fe,De,0,He,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),lt(w)?v.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,_e,r.get(J).__webglTexture,0,tt(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,_e,r.get(J).__webglTexture,Se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function K(L,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let Ee=s.DEPTH_COMPONENT16;if(J||lt(w)){const _e=w.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Hi?Ee=s.DEPTH_COMPONENT32F:_e.type===xr&&(Ee=s.DEPTH_COMPONENT24));const Se=tt(w);lt(w)?v.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,Ee,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,Ee,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const Ee=tt(w);J&&lt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,s.DEPTH24_STENCIL8,w.width,w.height):lt(w)?v.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const Ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let _e=0;_e<Ee.length;_e++){const Se=Ee[_e],He=l.convert(Se.format,Se.colorSpace),Me=l.convert(Se.type),te=ne(Se.internalFormat,He,Me,Se.colorSpace),k=tt(w);J&&lt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,k,te,w.width,w.height):lt(w)?v.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k,te,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,te,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const Ee=r.get(w.depthTexture).__webglTexture,_e=tt(w);if(w.depthTexture.format===jr)lt(w)?v.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(w.depthTexture.format===$s)lt(w)?v.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function We(L){const w=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ct(w.__webglFramebuffer,L)}else if(J){w.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Ee]),w.__webglDepthbuffer[Ee]=s.createRenderbuffer(),K(w.__webglDepthbuffer[Ee],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),K(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(L,w,J){const Ee=r.get(L);w!==void 0&&nt(Ee.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&We(L)}function Ke(L){const w=L.texture,J=r.get(L),Ee=r.get(w);L.addEventListener("dispose",pe),L.isWebGLMultipleRenderTargets!==!0&&(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=w.version,f.memory.textures++);const _e=L.isWebGLCubeRenderTarget===!0,Se=L.isWebGLMultipleRenderTargets===!0,He=C(L)||c;if(_e){J.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(c&&w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Me]=[];for(let te=0;te<w.mipmaps.length;te++)J.__webglFramebuffer[Me][te]=s.createFramebuffer()}else J.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(c&&w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)J.__webglFramebuffer[Me]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Se)if(o.drawBuffers){const Me=L.texture;for(let te=0,k=Me.length;te<k;te++){const fe=r.get(Me[te]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&lt(L)===!1){const Me=Se?w:[w];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let te=0;te<Me.length;te++){const k=Me[te];J.__webglColorRenderbuffer[te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[te]);const fe=l.convert(k.format,k.colorSpace),De=l.convert(k.type),Re=ne(k.internalFormat,fe,De,k.colorSpace,L.isXRRenderTarget===!0),Pe=tt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Re,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,J.__webglColorRenderbuffer[te])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),K(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,w,He);for(let Me=0;Me<6;Me++)if(c&&w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)nt(J.__webglFramebuffer[Me][te],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,te);else nt(J.__webglFramebuffer[Me],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);B(w,He)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){const Me=L.texture;for(let te=0,k=Me.length;te<k;te++){const fe=Me[te],De=r.get(fe);t.bindTexture(s.TEXTURE_2D,De.__webglTexture),Ue(s.TEXTURE_2D,fe,He),nt(J.__webglFramebuffer,L,fe,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,0),B(fe,He)&&D(s.TEXTURE_2D)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?Me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,Ee.__webglTexture),Ue(Me,w,He),c&&w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)nt(J.__webglFramebuffer[te],L,w,s.COLOR_ATTACHMENT0,Me,te);else nt(J.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,Me,0);B(w,He)&&D(Me),t.unbindTexture()}L.depthBuffer&&We(L)}function vt(L){const w=C(L)||c,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Ee=0,_e=J.length;Ee<_e;Ee++){const Se=J[Ee];if(B(Se,w)){const He=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Me=r.get(Se).__webglTexture;t.bindTexture(He,Me),D(He),t.unbindTexture()}}}function rt(L){if(c&&L.samples>0&&lt(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,Ee=L.height;let _e=s.COLOR_BUFFER_BIT;const Se=[],He=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=r.get(L),te=L.isWebGLMultipleRenderTargets===!0;if(te)for(let k=0;k<w.length;k++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let k=0;k<w.length;k++){Se.push(s.COLOR_ATTACHMENT0+k),L.depthBuffer&&Se.push(He);const fe=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(fe===!1&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),te&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[k]),fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[He]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[He])),te){const De=r.get(w[k]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,De,0)}s.blitFramebuffer(0,0,J,Ee,0,0,J,Ee,_e,s.NEAREST),S&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),te)for(let k=0;k<w.length;k++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,Me.__webglColorRenderbuffer[k]);const fe=r.get(w[k]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function tt(L){return Math.min(y,L.samples)}function lt(L){const w=r.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Et(L){const w=f.render.frame;T.get(L)!==w&&(T.set(L,w),L.update())}function kt(L,w){const J=L.colorSpace,Ee=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===cf||J!==Mi&&J!==Yr&&(J===Dt||J===Dl?c===!1?e.has("EXT_sRGB")===!0&&Ee===hi?(L.format=cf,L.minFilter=Jn,L.generateMipmaps=!1):w=Qm.sRGBToLinear(w):(Ee!==hi||_e!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}this.allocateTextureUnit=V,this.resetTextureUnits=ie,this.setTexture2D=j,this.setTexture2DArray=A,this.setTexture3D=F,this.setTextureCube=ue,this.rebindTextures=et,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=lt}const SE=0,Qt=1;function ME(s,e,t){const r=t.isWebGL2;function o(l,f=Yr){let c;const h=f===Dt||f===Dl?Qt:SE;if(l===Sr)return s.UNSIGNED_BYTE;if(l===Wm)return s.UNSIGNED_SHORT_4_4_4_4;if(l===jm)return s.UNSIGNED_SHORT_5_5_5_1;if(l===Jv)return s.BYTE;if(l===e0)return s.SHORT;if(l===vf)return s.UNSIGNED_SHORT;if(l===Vm)return s.INT;if(l===xr)return s.UNSIGNED_INT;if(l===Hi)return s.FLOAT;if(l===Ks)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===t0)return s.ALPHA;if(l===hi)return s.RGBA;if(l===n0)return s.LUMINANCE;if(l===i0)return s.LUMINANCE_ALPHA;if(l===jr)return s.DEPTH_COMPONENT;if(l===$s)return s.DEPTH_STENCIL;if(l===cf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===r0)return s.RED;if(l===Xm)return s.RED_INTEGER;if(l===s0)return s.RG;if(l===Ym)return s.RG_INTEGER;if(l===qm)return s.RGBA_INTEGER;if(l===Ac||l===Rc||l===bc||l===Cc)if(h===Qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Rc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Cc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===dp||l===hp||l===pp||l===mp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===dp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===hp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===pp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===mp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===a0)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===gp||l===_p)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===gp)return h===Qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===_p)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===vp||l===xp||l===yp||l===Sp||l===Mp||l===Ep||l===Tp||l===wp||l===Ap||l===Rp||l===bp||l===Cp||l===Pp||l===Lp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===vp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===xp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===yp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Sp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Mp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Ep)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Tp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===wp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Ap)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Rp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===bp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Cp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Pp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Lp)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Pc||l===Dp||l===Up)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Pc)return h===Qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Dp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Up)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===o0||l===Ip||l===Np||l===Op)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Pc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Wr?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:o}}class EE extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dn extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,f=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,r),_=this._getHandJoint(m,E);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],v=g.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&v>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new dn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class _g extends yn{constructor(e,t,r,o,l,f,c,h,m,g){if(g=g!==void 0?g:jr,g!==jr&&g!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===jr&&(r=xr),r===void 0&&g===$s&&(r=Wr),super(null,o,l,f,c,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ft,this.minFilter=h!==void 0?h:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wE extends Kr{constructor(e,t){super();const r=this;let o=null,l=1,f=null,c="local-floor",h=1,m=null,g=null,y=null,v=null,S=null,T=null;const E=t.getContextAttributes();let x=null,_=null;const U=[],R=[],C=new Gn;C.layers.enable(1),C.viewport=new Ut;const O=new Gn;O.layers.enable(2),O.viewport=new Ut;const B=[C,O],D=new EE;D.layers.enable(1),D.layers.enable(2);let ne=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let F=U[A];return F===void 0&&(F=new Jc,U[A]=F),F.getTargetRaySpace()},this.getControllerGrip=function(A){let F=U[A];return F===void 0&&(F=new Jc,U[A]=F),F.getGripSpace()},this.getHand=function(A){let F=U[A];return F===void 0&&(F=new Jc,U[A]=F),F.getHandSpace()};function N(A){const F=R.indexOf(A.inputSource);if(F===-1)return;const ue=U[F];ue!==void 0&&(ue.update(A.inputSource,A.frame,m||f),ue.dispatchEvent({type:A.type,data:A.inputSource}))}function de(){o.removeEventListener("select",N),o.removeEventListener("selectstart",N),o.removeEventListener("selectend",N),o.removeEventListener("squeeze",N),o.removeEventListener("squeezestart",N),o.removeEventListener("squeezeend",N),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",pe);for(let A=0;A<U.length;A++){const F=R[A];F!==null&&(R[A]=null,U[A].disconnect(F))}ne=null,b=null,e.setRenderTarget(x),S=null,v=null,y=null,o=null,_=null,j.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){l=A,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){c=A,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(A){m=A},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(A){if(o=A,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",N),o.addEventListener("selectstart",N),o.addEventListener("selectend",N),o.addEventListener("squeeze",N),o.addEventListener("squeezestart",N),o.addEventListener("squeezeend",N),o.addEventListener("end",de),o.addEventListener("inputsourceschange",pe),E.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:o.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,F),o.updateRenderState({baseLayer:S}),_=new ji(S.framebufferWidth,S.framebufferHeight,{format:hi,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let F=null,ue=null,he=null;E.depth&&(he=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=E.stencil?$s:jr,ue=E.stencil?Wr:xr);const xe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:l};y=new XRWebGLBinding(o,t),v=y.createProjectionLayer(xe),o.updateRenderState({layers:[v]}),_=new ji(v.textureWidth,v.textureHeight,{format:hi,type:Sr,depthTexture:new _g(v.textureWidth,v.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Ae=e.properties.get(_);Ae.__ignoreDepthValues=v.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await o.requestReferenceSpace(c),j.setContext(o),j.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function pe(A){for(let F=0;F<A.removed.length;F++){const ue=A.removed[F],he=R.indexOf(ue);he>=0&&(R[he]=null,U[he].disconnect(ue))}for(let F=0;F<A.added.length;F++){const ue=A.added[F];let he=R.indexOf(ue);if(he===-1){for(let Ae=0;Ae<U.length;Ae++)if(Ae>=R.length){R.push(ue),he=Ae;break}else if(R[Ae]===null){R[Ae]=ue,he=Ae;break}if(he===-1)break}const xe=U[he];xe&&xe.connect(ue)}}const $=new W,ae=new W;function se(A,F,ue){$.setFromMatrixPosition(F.matrixWorld),ae.setFromMatrixPosition(ue.matrixWorld);const he=$.distanceTo(ae),xe=F.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,Ue=xe[14]/(xe[10]-1),be=xe[14]/(xe[10]+1),Ge=(xe[9]+1)/xe[5],_t=(xe[9]-1)/xe[5],nt=(xe[8]-1)/xe[0],K=(Ae[8]+1)/Ae[0],Ct=Ue*nt,We=Ue*K,et=he/(-nt+K),Ke=et*-nt;F.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(Ke),A.translateZ(et),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const vt=Ue+et,rt=be+et,tt=Ct-Ke,lt=We+(he-Ke),Et=Ge*be/rt*vt,kt=_t*be/rt*vt;A.projectionMatrix.makePerspective(tt,lt,Et,kt,vt,rt),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function ce(A,F){F===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(F.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(o===null)return;D.near=O.near=C.near=A.near,D.far=O.far=C.far=A.far,(ne!==D.near||b!==D.far)&&(o.updateRenderState({depthNear:D.near,depthFar:D.far}),ne=D.near,b=D.far);const F=A.parent,ue=D.cameras;ce(D,F);for(let he=0;he<ue.length;he++)ce(ue[he],F);ue.length===2?se(D,C,O):D.projectionMatrix.copy(C.projectionMatrix),ie(A,D,F)};function ie(A,F,ue){ue===null?A.matrix.copy(F.matrixWorld):(A.matrix.copy(ue.matrixWorld),A.matrix.invert(),A.matrix.multiply(F.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(F.projectionMatrix),A.projectionMatrixInverse.copy(F.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=ff*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(A){h=A,v!==null&&(v.fixedFoveation=A),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=A)};let V=null;function re(A,F){if(g=F.getViewerPose(m||f),T=F,g!==null){const ue=g.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let he=!1;ue.length!==D.cameras.length&&(D.cameras.length=0,he=!0);for(let xe=0;xe<ue.length;xe++){const Ae=ue[xe];let Ue=null;if(S!==null)Ue=S.getViewport(Ae);else{const Ge=y.getViewSubImage(v,Ae);Ue=Ge.viewport,xe===0&&(e.setRenderTargetTextures(_,Ge.colorTexture,v.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(_))}let be=B[xe];be===void 0&&(be=new Gn,be.layers.enable(xe),be.viewport=new Ut,B[xe]=be),be.matrix.fromArray(Ae.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ae.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),xe===0&&(D.matrix.copy(be.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),he===!0&&D.cameras.push(be)}}for(let ue=0;ue<U.length;ue++){const he=R[ue],xe=U[ue];he!==null&&xe!==void 0&&xe.update(he,F,m||f)}V&&V(A,F),F.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:F}),T=null}const j=new fg;j.setAnimationLoop(re),this.setAnimationLoop=function(A){V=A},this.dispose=function(){}}}function AE(s,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,og(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function o(x,_,U,R,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),y(x,_)):_.isMeshPhongMaterial?(l(x,_),g(x,_)):_.isMeshStandardMaterial?(l(x,_),v(x,_),_.isMeshPhysicalMaterial&&S(x,_,C)):_.isMeshMatcapMaterial?(l(x,_),T(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),E(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(f(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?h(x,_,U,R):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===In&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===In&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const U=e.get(_).envMap;if(U&&(x.envMap.value=U,x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const R=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*R,t(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,U,R){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*U,x.scale.value=R*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function v(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,U){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,_){_.matcap&&(x.matcap.value=_.matcap)}function E(x,_){const U=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function RE(s,e,t,r){let o={},l={},f=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(U,R){const C=R.program;r.uniformBlockBinding(U,C)}function m(U,R){let C=o[U.id];C===void 0&&(T(U),C=g(U),o[U.id]=C,U.addEventListener("dispose",x));const O=R.program;r.updateUBOMapping(U,O);const B=e.render.frame;l[U.id]!==B&&(v(U),l[U.id]=B)}function g(U){const R=y();U.__bindingPointIndex=R;const C=s.createBuffer(),O=U.__size,B=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,O,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,C),C}function y(){for(let U=0;U<c;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const R=o[U.id],C=U.uniforms,O=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let B=0,D=C.length;B<D;B++){const ne=C[B];if(S(ne,B,O)===!0){const b=ne.__offset,N=Array.isArray(ne.value)?ne.value:[ne.value];let de=0;for(let pe=0;pe<N.length;pe++){const $=N[pe],ae=E($);typeof $=="number"?(ne.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,b+de,ne.__data)):$.isMatrix3?(ne.__data[0]=$.elements[0],ne.__data[1]=$.elements[1],ne.__data[2]=$.elements[2],ne.__data[3]=$.elements[0],ne.__data[4]=$.elements[3],ne.__data[5]=$.elements[4],ne.__data[6]=$.elements[5],ne.__data[7]=$.elements[0],ne.__data[8]=$.elements[6],ne.__data[9]=$.elements[7],ne.__data[10]=$.elements[8],ne.__data[11]=$.elements[0]):($.toArray(ne.__data,de),de+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,b,ne.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,R,C){const O=U.value;if(C[R]===void 0){if(typeof O=="number")C[R]=O;else{const B=Array.isArray(O)?O:[O],D=[];for(let ne=0;ne<B.length;ne++)D.push(B[ne].clone());C[R]=D}return!0}else if(typeof O=="number"){if(C[R]!==O)return C[R]=O,!0}else{const B=Array.isArray(C[R])?C[R]:[C[R]],D=Array.isArray(O)?O:[O];for(let ne=0;ne<B.length;ne++){const b=B[ne];if(b.equals(D[ne])===!1)return b.copy(D[ne]),!0}}return!1}function T(U){const R=U.uniforms;let C=0;const O=16;let B=0;for(let D=0,ne=R.length;D<ne;D++){const b=R[D],N={boundary:0,storage:0},de=Array.isArray(b.value)?b.value:[b.value];for(let pe=0,$=de.length;pe<$;pe++){const ae=de[pe],se=E(ae);N.boundary+=se.boundary,N.storage+=se.storage}if(b.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=C,D>0){B=C%O;const pe=O-B;B!==0&&pe-N.boundary<0&&(C+=O-B,b.__offset=C)}C+=N.storage}return B=C%O,B>0&&(C+=O-B),U.__size=C,U.__cache={},this}function E(U){const R={boundary:0,storage:0};return typeof U=="number"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),R}function x(U){const R=U.target;R.removeEventListener("dispose",x);const C=f.indexOf(R.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const U in o)s.deleteBuffer(o[U]);f=[],o={},l={}}return{bind:h,update:m,dispose:_}}class vg{constructor(e={}){const{canvas:t=M0(),context:r=null,depth:o=!0,stencil:l=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let v;r!==null?v=r.getContextAttributes().alpha:v=f;const S=new Uint32Array(4),T=new Int32Array(4);let E=null,x=null;const _=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=yr,this.toneMappingExposure=1;const R=this;let C=!1,O=0,B=0,D=null,ne=-1,b=null;const N=new Ut,de=new Ut;let pe=null;const $=new gt(0);let ae=0,se=t.width,ce=t.height,ie=1,V=null,re=null;const j=new Ut(0,0,se,ce),A=new Ut(0,0,se,ce);let F=!1;const ue=new yf;let he=!1,xe=!1,Ae=null;const Ue=new jt,be=new Ve,Ge=new W,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return D===null?ie:1}let K=r;function Ct(P,q){for(let oe=0;oe<P.length;oe++){const Z=P[oe],le=t.getContext(Z,q);if(le!==null)return le}return null}try{const P={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_f}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",ve,!1),K===null){const q=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&q.shift(),K=Ct(q,P),K===null)throw Ct(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let We,et,Ke,vt,rt,tt,lt,Et,kt,L,w,J,Ee,_e,Se,He,Me,te,k,fe,De,Re,Pe,$e;function ut(){We=new kS(K),et=new DS(K,We,e),We.init(et),Re=new ME(K,We,et),Ke=new xE(K,We,et),vt=new HS(K),rt=new sE,tt=new yE(K,We,Ke,rt,et,Re,vt),lt=new IS(R),Et=new FS(R),kt=new Z0(K,et),Pe=new PS(K,We,kt,et),L=new zS(K,kt,vt,Pe),w=new jS(K,L,kt,vt),k=new WS(K,et,tt),He=new US(rt),J=new rE(R,lt,Et,We,et,Pe,He),Ee=new AE(R,rt),_e=new oE,Se=new hE(We,et),te=new CS(R,lt,Et,Ke,w,v,h),Me=new vE(R,w,et),$e=new RE(K,vt,et,Ke),fe=new LS(K,We,vt,et),De=new BS(K,We,vt,et),vt.programs=J.programs,R.capabilities=et,R.extensions=We,R.properties=rt,R.renderLists=_e,R.shadowMap=Me,R.state=Ke,R.info=vt}ut();const H=new wE(R,K);this.xr=H,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const P=We.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=We.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(P){P!==void 0&&(ie=P,this.setSize(se,ce,!1))},this.getSize=function(P){return P.set(se,ce)},this.setSize=function(P,q,oe=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=P,ce=q,t.width=Math.floor(P*ie),t.height=Math.floor(q*ie),oe===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(se*ie,ce*ie).floor()},this.setDrawingBufferSize=function(P,q,oe){se=P,ce=q,ie=oe,t.width=Math.floor(P*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,q,oe,Z){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,q,oe,Z),Ke.viewport(N.copy(j).multiplyScalar(ie).floor())},this.getScissor=function(P){return P.copy(A)},this.setScissor=function(P,q,oe,Z){P.isVector4?A.set(P.x,P.y,P.z,P.w):A.set(P,q,oe,Z),Ke.scissor(de.copy(A).multiplyScalar(ie).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(P){Ke.setScissorTest(F=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(P=!0,q=!0,oe=!0){let Z=0;if(P){let le=!1;if(D!==null){const Oe=D.texture.format;le=Oe===qm||Oe===Ym||Oe===Xm}if(le){const Oe=D.texture.type,Xe=Oe===Sr||Oe===xr||Oe===vf||Oe===Wr||Oe===Wm||Oe===jm,Ze=te.getClearColor(),Qe=te.getClearAlpha(),ct=Ze.r,Ne=Ze.g,it=Ze.b;Xe?(S[0]=ct,S[1]=Ne,S[2]=it,S[3]=Qe,K.clearBufferuiv(K.COLOR,0,S)):(T[0]=ct,T[1]=Ne,T[2]=it,T[3]=Qe,K.clearBufferiv(K.COLOR,0,T))}else Z|=K.COLOR_BUFFER_BIT}q&&(Z|=K.DEPTH_BUFFER_BIT),oe&&(Z|=K.STENCIL_BUFFER_BIT),K.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),_e.dispose(),Se.dispose(),rt.dispose(),lt.dispose(),Et.dispose(),w.dispose(),Pe.dispose(),$e.dispose(),J.dispose(),H.dispose(),H.removeEventListener("sessionstart",yt),H.removeEventListener("sessionend",Nn),Ae&&(Ae.dispose(),Ae=null),Gt.stop()};function Ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const P=vt.autoReset,q=Me.enabled,oe=Me.autoUpdate,Z=Me.needsUpdate,le=Me.type;ut(),vt.autoReset=P,Me.enabled=q,Me.autoUpdate=oe,Me.needsUpdate=Z,Me.type=le}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function we(P){const q=P.target;q.removeEventListener("dispose",we),at(q)}function at(P){pt(P),rt.remove(P)}function pt(P){const q=rt.get(P).programs;q!==void 0&&(q.forEach(function(oe){J.releaseProgram(oe)}),P.isShaderMaterial&&J.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,oe,Z,le,Oe){q===null&&(q=_t);const Xe=le.isMesh&&le.matrixWorld.determinant()<0,Ze=kl(P,q,oe,Z,le);Ke.setMaterial(Z,Xe);let Qe=oe.index,ct=1;if(Z.wireframe===!0){if(Qe=L.getWireframeAttribute(oe),Qe===void 0)return;ct=2}const Ne=oe.drawRange,it=oe.attributes.position;let Tt=Ne.start*ct,Pt=(Ne.start+Ne.count)*ct;Oe!==null&&(Tt=Math.max(Tt,Oe.start*ct),Pt=Math.min(Pt,(Oe.start+Oe.count)*ct)),Qe!==null?(Tt=Math.max(Tt,0),Pt=Math.min(Pt,Qe.count)):it!=null&&(Tt=Math.max(Tt,0),Pt=Math.min(Pt,it.count));const ln=Pt-Tt;if(ln<0||ln===1/0)return;Pe.setup(le,Z,Ze,oe,Qe);let ni,It=fe;if(Qe!==null&&(ni=kt.get(Qe),It=De,It.setIndex(ni)),le.isMesh)Z.wireframe===!0?(Ke.setLineWidth(Z.wireframeLinewidth*nt()),It.setMode(K.LINES)):It.setMode(K.TRIANGLES);else if(le.isLine){let st=Z.linewidth;st===void 0&&(st=1),Ke.setLineWidth(st*nt()),le.isLineSegments?It.setMode(K.LINES):le.isLineLoop?It.setMode(K.LINE_LOOP):It.setMode(K.LINE_STRIP)}else le.isPoints?It.setMode(K.POINTS):le.isSprite&&It.setMode(K.TRIANGLES);if(le.isInstancedMesh)It.renderInstances(Tt,ln,le.count);else if(oe.isInstancedBufferGeometry){const st=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Rn=Math.min(oe.instanceCount,st);It.renderInstances(Tt,ln,Rn)}else It.render(Tt,ln)},this.compile=function(P,q){function oe(Z,le,Oe){Z.transparent===!0&&Z.side===ti&&Z.forceSinglePass===!1?(Z.side=In,Z.needsUpdate=!0,Ei(Z,le,Oe),Z.side=Si,Z.needsUpdate=!0,Ei(Z,le,Oe),Z.side=ti):Ei(Z,le,Oe)}x=Se.get(P),x.init(),U.push(x),P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights(R._useLegacyLights),P.traverse(function(Z){const le=Z.material;if(le)if(Array.isArray(le))for(let Oe=0;Oe<le.length;Oe++){const Xe=le[Oe];oe(Xe,P,Z)}else oe(le,P,Z)}),U.pop(),x=null};let xt=null;function hn(P){xt&&xt(P)}function yt(){Gt.stop()}function Nn(){Gt.start()}const Gt=new fg;Gt.setAnimationLoop(hn),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(P){xt=P,H.setAnimationLoop(P),P===null?Gt.stop():Gt.start()},H.addEventListener("sessionstart",yt),H.addEventListener("sessionend",Nn),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(q),q=H.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,q,D),x=Se.get(P,U.length),x.init(),U.push(x),Ue.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ue.setFromProjectionMatrix(Ue),xe=this.localClippingEnabled,he=He.init(this.clippingPlanes,xe),E=_e.get(P,_.length),E.init(),_.push(E),$r(P,q,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(V,re),this.info.render.frame++,he===!0&&He.beginShadows();const oe=x.state.shadowsArray;if(Me.render(oe,P,q),he===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(E,P),x.setupLights(R._useLegacyLights),q.isArrayCamera){const Z=q.cameras;for(let le=0,Oe=Z.length;le<Oe;le++){const Xe=Z[le];qi(E,P,Xe,Xe.viewport)}}else qi(E,P,q);D!==null&&(tt.updateMultisampleRenderTarget(D),tt.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(R,P,q),Pe.resetDefaultState(),ne=-1,b=null,U.pop(),U.length>0?x=U[U.length-1]:x=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function $r(P,q,oe,Z){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ue.intersectsSprite(P)){Z&&Ge.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ue);const Xe=w.update(P),Ze=P.material;Ze.visible&&E.push(P,Xe,Ze,oe,Ge.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ue.intersectsObject(P))){const Xe=w.update(P),Ze=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ge.copy(P.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ge.copy(Xe.boundingSphere.center)),Ge.applyMatrix4(P.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ze)){const Qe=Xe.groups;for(let ct=0,Ne=Qe.length;ct<Ne;ct++){const it=Qe[ct],Tt=Ze[it.materialIndex];Tt&&Tt.visible&&E.push(P,Xe,Tt,oe,Ge.z,it)}}else Ze.visible&&E.push(P,Xe,Ze,oe,Ge.z,null)}}const Oe=P.children;for(let Xe=0,Ze=Oe.length;Xe<Ze;Xe++)$r(Oe[Xe],q,oe,Z)}function qi(P,q,oe,Z){const le=P.opaque,Oe=P.transmissive,Xe=P.transparent;x.setupLightsView(oe),he===!0&&He.setGlobalState(R.clippingPlanes,oe),Oe.length>0&&Fl(le,Oe,q,oe),Z&&Ke.viewport(N.copy(Z)),le.length>0&&mi(le,q,oe),Oe.length>0&&mi(Oe,q,oe),Xe.length>0&&mi(Xe,q,oe),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Fl(P,q,oe,Z){const le=et.isWebGL2;Ae===null&&(Ae=new ji(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?Ks:Sr,minFilter:ja,samples:le?4:0})),R.getDrawingBufferSize(be),le?Ae.setSize(be.x,be.y):Ae.setSize(df(be.x),df(be.y));const Oe=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor($),ae=R.getClearAlpha(),ae<1&&R.setClearColor(16777215,.5),R.clear();const Xe=R.toneMapping;R.toneMapping=yr,mi(P,oe,Z),tt.updateMultisampleRenderTarget(Ae),tt.updateRenderTargetMipmap(Ae);let Ze=!1;for(let Qe=0,ct=q.length;Qe<ct;Qe++){const Ne=q[Qe],it=Ne.object,Tt=Ne.geometry,Pt=Ne.material,ln=Ne.group;if(Pt.side===ti&&it.layers.test(Z.layers)){const ni=Pt.side;Pt.side=In,Pt.needsUpdate=!0,Er(it,oe,Z,Tt,Pt,ln),Pt.side=ni,Pt.needsUpdate=!0,Ze=!0}}Ze===!0&&(tt.updateMultisampleRenderTarget(Ae),tt.updateRenderTargetMipmap(Ae)),R.setRenderTarget(Oe),R.setClearColor($,ae),R.toneMapping=Xe}function mi(P,q,oe){const Z=q.isScene===!0?q.overrideMaterial:null;for(let le=0,Oe=P.length;le<Oe;le++){const Xe=P[le],Ze=Xe.object,Qe=Xe.geometry,ct=Z===null?Xe.material:Z,Ne=Xe.group;Ze.layers.test(oe.layers)&&Er(Ze,q,oe,Qe,ct,Ne)}}function Er(P,q,oe,Z,le,Oe){P.onBeforeRender(R,q,oe,Z,le,Oe),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),le.onBeforeRender(R,q,oe,Z,P,Oe),le.transparent===!0&&le.side===ti&&le.forceSinglePass===!1?(le.side=In,le.needsUpdate=!0,R.renderBufferDirect(oe,q,Z,le,P,Oe),le.side=Si,le.needsUpdate=!0,R.renderBufferDirect(oe,q,Z,le,P,Oe),le.side=ti):R.renderBufferDirect(oe,q,Z,le,P,Oe),P.onAfterRender(R,q,oe,Z,le,Oe)}function Ei(P,q,oe){q.isScene!==!0&&(q=_t);const Z=rt.get(P),le=x.state.lights,Oe=x.state.shadowsArray,Xe=le.state.version,Ze=J.getParameters(P,le.state,Oe,q,oe),Qe=J.getProgramCacheKey(Ze);let ct=Z.programs;Z.environment=P.isMeshStandardMaterial?q.environment:null,Z.fog=q.fog,Z.envMap=(P.isMeshStandardMaterial?Et:lt).get(P.envMap||Z.environment),ct===void 0&&(P.addEventListener("dispose",we),ct=new Map,Z.programs=ct);let Ne=ct.get(Qe);if(Ne!==void 0){if(Z.currentProgram===Ne&&Z.lightsStateVersion===Xe)return Zr(P,Ze),Ne}else Ze.uniforms=J.getUniforms(P),P.onBuild(oe,Ze,R),P.onBeforeCompile(Ze,R),Ne=J.acquireProgram(Ze,Qe),ct.set(Qe,Ne),Z.uniforms=Ze.uniforms;const it=Z.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(it.clippingPlanes=He.uniform),Zr(P,Ze),Z.needsLights=Bl(P),Z.lightsStateVersion=Xe,Z.needsLights&&(it.ambientLightColor.value=le.state.ambient,it.lightProbe.value=le.state.probe,it.directionalLights.value=le.state.directional,it.directionalLightShadows.value=le.state.directionalShadow,it.spotLights.value=le.state.spot,it.spotLightShadows.value=le.state.spotShadow,it.rectAreaLights.value=le.state.rectArea,it.ltc_1.value=le.state.rectAreaLTC1,it.ltc_2.value=le.state.rectAreaLTC2,it.pointLights.value=le.state.point,it.pointLightShadows.value=le.state.pointShadow,it.hemisphereLights.value=le.state.hemi,it.directionalShadowMap.value=le.state.directionalShadowMap,it.directionalShadowMatrix.value=le.state.directionalShadowMatrix,it.spotShadowMap.value=le.state.spotShadowMap,it.spotLightMatrix.value=le.state.spotLightMatrix,it.spotLightMap.value=le.state.spotLightMap,it.pointShadowMap.value=le.state.pointShadowMap,it.pointShadowMatrix.value=le.state.pointShadowMatrix);const Tt=Ne.getUniforms(),Pt=wl.seqWithValue(Tt.seq,it);return Z.currentProgram=Ne,Z.uniformsList=Pt,Ne}function Zr(P,q){const oe=rt.get(P);oe.outputColorSpace=q.outputColorSpace,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function kl(P,q,oe,Z,le){q.isScene!==!0&&(q=_t),tt.resetTextureUnits();const Oe=q.fog,Xe=Z.isMeshStandardMaterial?q.environment:null,Ze=D===null?R.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Mi,Qe=(Z.isMeshStandardMaterial?Et:lt).get(Z.envMap||Xe),ct=Z.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ne=!!oe.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),it=!!oe.morphAttributes.position,Tt=!!oe.morphAttributes.normal,Pt=!!oe.morphAttributes.color;let ln=yr;Z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ln=R.toneMapping);const ni=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,It=ni!==void 0?ni.length:0,st=rt.get(Z),Rn=x.state.lights;if(he===!0&&(xe===!0||P!==b)){const nn=P===b&&Z.id===ne;He.setState(Z,P,nn)}let zt=!1;Z.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Rn.state.version||st.outputColorSpace!==Ze||le.isInstancedMesh&&st.instancing===!1||!le.isInstancedMesh&&st.instancing===!0||le.isSkinnedMesh&&st.skinning===!1||!le.isSkinnedMesh&&st.skinning===!0||le.isInstancedMesh&&st.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&st.instancingColor===!1&&le.instanceColor!==null||st.envMap!==Qe||Z.fog===!0&&st.fog!==Oe||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==He.numPlanes||st.numIntersection!==He.numIntersection)||st.vertexAlphas!==ct||st.vertexTangents!==Ne||st.morphTargets!==it||st.morphNormals!==Tt||st.morphColors!==Pt||st.toneMapping!==ln||et.isWebGL2===!0&&st.morphTargetsCount!==It)&&(zt=!0):(zt=!0,st.__version=Z.version);let Kt=st.currentProgram;zt===!0&&(Kt=Ei(Z,q,le));let qa=!1,Tr=!1,ea=!1;const Xt=Kt.getUniforms(),Vn=st.uniforms;if(Ke.useProgram(Kt.program)&&(qa=!0,Tr=!0,ea=!0),Z.id!==ne&&(ne=Z.id,Tr=!0),qa||b!==P){Xt.setValue(K,"projectionMatrix",P.projectionMatrix),Xt.setValue(K,"viewMatrix",P.matrixWorldInverse);const nn=Xt.map.cameraPosition;nn!==void 0&&nn.setValue(K,Ge.setFromMatrixPosition(P.matrixWorld)),et.logarithmicDepthBuffer&&Xt.setValue(K,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Xt.setValue(K,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Tr=!0,ea=!0)}if(le.isSkinnedMesh){Xt.setOptional(K,le,"bindMatrix"),Xt.setOptional(K,le,"bindMatrixInverse");const nn=le.skeleton;nn&&(et.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Xt.setValue(K,"boneTexture",nn.boneTexture,tt),Xt.setValue(K,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0&&et.isWebGL2===!0)&&k.update(le,oe,Kt),(Tr||st.receiveShadow!==le.receiveShadow)&&(st.receiveShadow=le.receiveShadow,Xt.setValue(K,"receiveShadow",le.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Vn.envMap.value=Qe,Vn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),Tr&&(Xt.setValue(K,"toneMappingExposure",R.toneMappingExposure),st.needsLights&&zl(Vn,ea),Oe&&Z.fog===!0&&Ee.refreshFogUniforms(Vn,Oe),Ee.refreshMaterialUniforms(Vn,Z,ie,ce,Ae),wl.upload(K,st.uniformsList,Vn,tt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(wl.upload(K,st.uniformsList,Vn,tt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Xt.setValue(K,"center",le.center),Xt.setValue(K,"modelViewMatrix",le.modelViewMatrix),Xt.setValue(K,"normalMatrix",le.normalMatrix),Xt.setValue(K,"modelMatrix",le.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const nn=Z.uniformsGroups;for(let ta=0,Hl=nn.length;ta<Hl;ta++)if(et.isWebGL2){const Qr=nn[ta];$e.update(Qr,Kt),$e.bind(Qr,Kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kt}function zl(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Bl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,q,oe){rt.get(P.texture).__webglTexture=q,rt.get(P.depthTexture).__webglTexture=oe;const Z=rt.get(P);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=oe===void 0,Z.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,q){const oe=rt.get(P);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,oe=0){D=P,O=q,B=oe;let Z=!0,le=null,Oe=!1,Xe=!1;if(P){const Qe=rt.get(P);Qe.__useDefaultFramebuffer!==void 0?(Ke.bindFramebuffer(K.FRAMEBUFFER,null),Z=!1):Qe.__webglFramebuffer===void 0?tt.setupRenderTarget(P):Qe.__hasExternalTextures&&tt.rebindTextures(P,rt.get(P.texture).__webglTexture,rt.get(P.depthTexture).__webglTexture);const ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Xe=!0);const Ne=rt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ne[q])?le=Ne[q][oe]:le=Ne[q],Oe=!0):et.isWebGL2&&P.samples>0&&tt.useMultisampledRTT(P)===!1?le=rt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ne)?le=Ne[oe]:le=Ne,N.copy(P.viewport),de.copy(P.scissor),pe=P.scissorTest}else N.copy(j).multiplyScalar(ie).floor(),de.copy(A).multiplyScalar(ie).floor(),pe=F;if(Ke.bindFramebuffer(K.FRAMEBUFFER,le)&&et.drawBuffers&&Z&&Ke.drawBuffers(P,le),Ke.viewport(N),Ke.scissor(de),Ke.setScissorTest(pe),Oe){const Qe=rt.get(P.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+q,Qe.__webglTexture,oe)}else if(Xe){const Qe=rt.get(P.texture),ct=q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Qe.__webglTexture,oe||0,ct)}ne=-1},this.readRenderTargetPixels=function(P,q,oe,Z,le,Oe,Xe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){Ke.bindFramebuffer(K.FRAMEBUFFER,Ze);try{const Qe=P.texture,ct=Qe.format,Ne=Qe.type;if(ct!==hi&&Re.convert(ct)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=Ne===Ks&&(We.has("EXT_color_buffer_half_float")||et.isWebGL2&&We.has("EXT_color_buffer_float"));if(Ne!==Sr&&Re.convert(Ne)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Hi&&(et.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-Z&&oe>=0&&oe<=P.height-le&&K.readPixels(q,oe,Z,le,Re.convert(ct),Re.convert(Ne),Oe)}finally{const Qe=D!==null?rt.get(D).__webglFramebuffer:null;Ke.bindFramebuffer(K.FRAMEBUFFER,Qe)}}},this.copyFramebufferToTexture=function(P,q,oe=0){const Z=Math.pow(2,-oe),le=Math.floor(q.image.width*Z),Oe=Math.floor(q.image.height*Z);tt.setTexture2D(q,0),K.copyTexSubImage2D(K.TEXTURE_2D,oe,0,0,P.x,P.y,le,Oe),Ke.unbindTexture()},this.copyTextureToTexture=function(P,q,oe,Z=0){const le=q.image.width,Oe=q.image.height,Xe=Re.convert(oe.format),Ze=Re.convert(oe.type);tt.setTexture2D(oe,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,oe.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,oe.unpackAlignment),q.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Z,P.x,P.y,le,Oe,Xe,Ze,q.image.data):q.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Z,P.x,P.y,q.mipmaps[0].width,q.mipmaps[0].height,Xe,q.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,Z,P.x,P.y,Xe,Ze,q.image),Z===0&&oe.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(P,q,oe,Z,le=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=P.max.x-P.min.x+1,Xe=P.max.y-P.min.y+1,Ze=P.max.z-P.min.z+1,Qe=Re.convert(Z.format),ct=Re.convert(Z.type);let Ne;if(Z.isData3DTexture)tt.setTexture3D(Z,0),Ne=K.TEXTURE_3D;else if(Z.isDataArrayTexture)tt.setTexture2DArray(Z,0),Ne=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Z.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Z.unpackAlignment);const it=K.getParameter(K.UNPACK_ROW_LENGTH),Tt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Pt=K.getParameter(K.UNPACK_SKIP_PIXELS),ln=K.getParameter(K.UNPACK_SKIP_ROWS),ni=K.getParameter(K.UNPACK_SKIP_IMAGES),It=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,It.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,It.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,P.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,P.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,P.min.z),oe.isDataTexture||oe.isData3DTexture?K.texSubImage3D(Ne,le,q.x,q.y,q.z,Oe,Xe,Ze,Qe,ct,It.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ne,le,q.x,q.y,q.z,Oe,Xe,Ze,Qe,It.data)):K.texSubImage3D(Ne,le,q.x,q.y,q.z,Oe,Xe,Ze,Qe,ct,It),K.pixelStorei(K.UNPACK_ROW_LENGTH,it),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Tt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Pt),K.pixelStorei(K.UNPACK_SKIP_ROWS,ln),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ni),le===0&&Z.generateMipmaps&&K.generateMipmap(Ne),Ke.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?tt.setTextureCube(P,0):P.isData3DTexture?tt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?tt.setTexture2DArray(P,0):tt.setTexture2D(P,0),Ke.unbindTexture()},this.resetState=function(){O=0,B=0,D=null,Ke.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Xr:Km}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?Dt:Mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bE extends vg{}bE.prototype.isWebGL1Renderer=!0;class CE extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class PE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uf,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new W;class Pl{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),o=Mt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),o=Mt(o,this.array),l=Mt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xg extends Qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zs;const za=new W,Bs=new W,Hs=new W,Gs=new Ve,Ba=new Ve,yg=new jt,_l=new W,Ha=new W,vl=new W,Sm=new Ve,ef=new Ve,Mm=new Ve;class LE extends Sn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Yi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new PE(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Pl(r,3,0,!1)),zs.setAttribute("uv",new Pl(r,2,3,!1))}this.geometry=zs,this.material=e!==void 0?e:new xg,this.center=new Ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),yg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-Hs.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const f=this.center;xl(_l.set(-.5,-.5,0),Hs,f,Bs,o,l),xl(Ha.set(.5,-.5,0),Hs,f,Bs,o,l),xl(vl.set(.5,.5,0),Hs,f,Bs,o,l),Sm.set(0,0),ef.set(1,0),Mm.set(1,1);let c=e.ray.intersectTriangle(_l,Ha,vl,!1,za);if(c===null&&(xl(Ha.set(-.5,.5,0),Hs,f,Bs,o,l),ef.set(0,1),c=e.ray.intersectTriangle(_l,vl,Ha,!1,za),c===null))return;const h=e.ray.origin.distanceTo(za);h<e.near||h>e.far||t.push({distance:h,point:za.clone(),uv:ei.getInterpolation(za,_l,Ha,vl,Sm,ef,Mm,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xl(s,e,t,r,o,l){Gs.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(Ba.x=l*Gs.x-o*Gs.y,Ba.y=o*Gs.x+l*Gs.y):Ba.copy(Gs),s.copy(e),s.x+=Ba.x,s.y+=Ba.y,s.applyMatrix4(yg)}class Al extends yn{constructor(e,t,r,o,l,f,c,h,m){super(e,t,r,o,l,f,c,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xa extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$m,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sg extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const tf=new jt,Em=new W,Tm=new W;class DE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yf,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),t.position.copy(Em),Tm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tm),t.updateMatrixWorld(),tf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(tf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wm=new jt,Ga=new W,nf=new W;class UE extends DE{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ga),nf.copy(r.position),nf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(nf),r.updateMatrixWorld(),o.makeTranslation(-Ga.x,-Ga.y,-Ga.z),wm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wm)}}class IE extends Sg{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new UE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class NE extends Sg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Am(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Am();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Am(){return(typeof performance>"u"?Date:performance).now()}class Rm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(An(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);function Ef(s,e,t,r,o,l,f,c){const h=(D,ne,b,N)=>[new Ve(D/f,1-N/c),new Ve(b/f,1-N/c),new Ve(b/f,1-ne/c),new Ve(D/f,1-ne/c)],m=h(e+l,t,e+r+l,t+l),g=h(e+r+l,t,e+r*2+l,t+l),y=h(e,t+l,e+l,t+l+o),v=h(e+l,t+l,e+r+l,t+l+o),S=h(e+r+l,t+l,e+r+l*2,t+o+l),T=h(e+r+l*2,t+l,e+r*2+l*2,t+o+l),E=s.attributes.uv,x=[S[3],S[2],S[0],S[1]],_=[y[3],y[2],y[0],y[1]],U=[m[3],m[2],m[0],m[1]],R=[g[0],g[1],g[3],g[2]],C=[v[3],v[2],v[0],v[1]],O=[T[3],T[2],T[0],T[1]],B=[];for(const D of[x,_,U,R,C,O])for(const ne of D)B.push(ne.x,ne.y);E.set(new Float32Array(B)),E.needsUpdate=!0}function Zn(s,e,t,r,o,l){Ef(s,e,t,r,o,l,64,64)}function pf(s,e,t,r,o,l){Ef(s,e,t,r,o,l,64,32)}class Hr extends dn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class OE extends dn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new Xa({side:Si}),this.layer2Material=new Xa({side:ti,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Wt(8,8,8);Zn(e,0,0,8,8,8);const t=new At(e,this.layer1Material),r=new Wt(9,9,9);Zn(r,32,0,8,8,8);const o=new At(r,this.layer2Material);this.head=new Hr(t,o),this.head.name="head",this.head.add(t,o),t.position.y=4,o.position.y=4,this.add(this.head);const l=new Wt(8,12,4);Zn(l,16,16,8,12,4);const f=new At(l,this.layer1Material),c=new Wt(8.5,12.5,4.5);Zn(c,16,32,8,12,4);const h=new At(c,this.layer2Material);this.body=new Hr(f,h),this.body.name="body",this.body.add(f,h),this.body.position.y=-6,this.add(this.body);const m=new Wt,g=new At(m,this.layer1MaterialBiased);this.modelListeners.push(()=>{g.scale.x=this.slim?3:4,g.scale.y=12,g.scale.z=4,Zn(m,40,16,this.slim?3:4,12,4)});const y=new Wt,v=new At(y,this.layer2MaterialBiased);this.modelListeners.push(()=>{v.scale.x=this.slim?3.5:4.5,v.scale.y=12.5,v.scale.z=4.5,Zn(y,40,32,this.slim?3:4,12,4)});const S=new dn;S.add(g,v),this.modelListeners.push(()=>{S.position.x=this.slim?-.5:-1}),S.position.y=-4,this.rightArm=new Hr(g,v),this.rightArm.name="rightArm",this.rightArm.add(S),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const T=new Wt,E=new At(T,this.layer1MaterialBiased);this.modelListeners.push(()=>{E.scale.x=this.slim?3:4,E.scale.y=12,E.scale.z=4,Zn(T,32,48,this.slim?3:4,12,4)});const x=new Wt,_=new At(x,this.layer2MaterialBiased);this.modelListeners.push(()=>{_.scale.x=this.slim?3.5:4.5,_.scale.y=12.5,_.scale.z=4.5,Zn(x,48,48,this.slim?3:4,12,4)});const U=new dn;U.add(E,_),this.modelListeners.push(()=>{U.position.x=this.slim?.5:1}),U.position.y=-4,this.leftArm=new Hr(E,_),this.leftArm.name="leftArm",this.leftArm.add(U),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const R=new Wt(4,12,4);Zn(R,0,16,4,12,4);const C=new At(R,this.layer1MaterialBiased),O=new Wt(4.5,12.5,4.5);Zn(O,0,32,4,12,4);const B=new At(O,this.layer2MaterialBiased),D=new dn;D.add(C,B),D.position.y=-6,this.rightLeg=new Hr(C,B),this.rightLeg.name="rightLeg",this.rightLeg.add(D),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const ne=new Wt(4,12,4);Zn(ne,16,48,4,12,4);const b=new At(ne,this.layer1MaterialBiased),N=new Wt(4.5,12.5,4.5);Zn(N,0,48,4,12,4);const de=new At(N,this.layer2MaterialBiased),pe=new dn;pe.add(b,de),pe.position.y=-6,this.leftLeg=new Hr(b,de),this.leftLeg.name="leftLeg",this.leftLeg.add(pe),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof Hr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class FE extends dn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Xa({side:ti,transparent:!0,alphaTest:1e-5});const e=new Wt(10,16,1);pf(e,0,0,10,16,1),this.cape=new At(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class kE extends dn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Xa({side:ti,transparent:!0,alphaTest:1e-5});const e=new Wt(12,22,4);pf(e,22,0,10,20,2);const t=new At(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new dn,this.leftWing.add(t),this.add(this.leftWing);const r=new Wt(12,22,4);pf(r,22,0,10,20,2);const o=new At(r,this.material);o.scale.x=-1,o.position.x=5,o.position.y=-10,o.position.z=-1,this.rightWing=new dn,this.rightWing.add(o),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class zE extends dn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Xa({side:Si});const e=new Wt(8,8,4/3);Ef(e,0,0,6,6,1,14,7),this.rightEar=new At(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new At(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const bm=10.8*Math.PI/180;class BE extends dn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new OE,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new FE,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=bm,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new kE,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new zE,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=bm,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function yl(s){return s instanceof HTMLImageElement||s instanceof HTMLVideoElement||s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas}function mf(s,e,t,r,o){const l=s.getImageData(e,t,r,o);for(let f=0;f<r;f++)for(let c=0;c<o;c++){const h=(f+c*r)*4;if(l.data[h+3]!==255)return!0}return!1}function Nl(s){return s/64}function Cm(s,e,t){if(t){if(mf(s,0,0,e,e))return}else if(mf(s,0,0,e,e/2))return;const r=Nl(e),o=(l,f,c,h)=>s.clearRect(l*r,f*r,c*r,h*r);o(40,0,8,8),o(48,0,8,8),o(32,8,8,8),o(40,8,8,8),o(48,8,8,8),o(56,8,8,8),t&&(o(4,32,4,4),o(8,32,4,4),o(0,36,4,12),o(4,36,4,12),o(8,36,4,12),o(12,36,4,12),o(20,32,8,4),o(28,32,8,4),o(16,36,4,12),o(20,36,8,12),o(28,36,4,12),o(32,36,8,12),o(44,32,4,4),o(48,32,4,4),o(40,36,4,12),o(44,36,4,12),o(48,36,4,12),o(52,36,12,12),o(4,48,4,4),o(8,48,4,4),o(0,52,4,12),o(4,52,4,12),o(8,52,4,12),o(12,52,4,12),o(52,48,4,4),o(56,48,4,4),o(48,52,4,12),o(52,52,4,12),o(56,52,4,12),o(60,52,4,12))}function HE(s,e){s.save(),s.scale(-1,1);const t=Nl(e),r=(o,l,f,c,h,m)=>s.drawImage(s.canvas,o*t,l*t,f*t,c*t,-h*t,m*t,-f*t,c*t);r(4,16,4,4,20,48),r(8,16,4,4,24,48),r(0,20,4,12,24,52),r(4,20,4,12,20,52),r(8,20,4,12,16,52),r(12,20,4,12,28,52),r(44,16,4,4,36,48),r(48,16,4,4,40,48),r(40,20,4,12,40,52),r(44,20,4,12,36,52),r(48,20,4,12,32,52),r(52,20,4,12,44,52),s.restore()}function GE(s,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const r=s.getContext("2d",{willReadFrequently:!0});if(t){const o=e.width;s.width=o,s.height=o,r.clearRect(0,0,o,o),r.drawImage(e,0,0,o,o/2),HE(r,o),Cm(r,s.width,!1)}else s.width=e.width,s.height=e.height,r.clearRect(0,0,e.width,e.height),r.drawImage(e,0,0,s.width,s.height),Cm(r,s.width,!0)}function VE(s){if(s.width===2*s.height)return s.width/64;if(s.width*17===s.height*22)return s.width/22;if(s.width*11===s.height*23)return s.width/46;throw new Error(`Bad cape size: ${s.width}x${s.height}`)}function WE(s,e){const t=VE(e);s.width=64*t,s.height=32*t;const r=s.getContext("2d",{willReadFrequently:!0});r.clearRect(0,0,s.width,s.height),r.drawImage(e,0,0,e.width,e.height)}function jE(s,e,t,r,o){const l=s.getImageData(e,t,r,o);for(let f=0;f<r;f++)for(let c=0;c<o;c++){const h=(f+c*r)*4;if(!(l.data[h+0]===0&&l.data[h+1]===0&&l.data[h+2]===0&&l.data[h+3]===255))return!1}return!0}function XE(s,e,t,r,o){const l=s.getImageData(e,t,r,o);for(let f=0;f<r;f++)for(let c=0;c<o;c++){const h=(f+c*r)*4;if(!(l.data[h+0]===255&&l.data[h+1]===255&&l.data[h+2]===255&&l.data[h+3]===255))return!1}return!0}function YE(s){const e=Nl(s.width),t=s.getContext("2d",{willReadFrequently:!0}),r=(c,h,m,g)=>mf(t,c*e,h*e,m*e,g*e),o=(c,h,m,g)=>jE(t,c*e,h*e,m*e,g*e),l=(c,h,m,g)=>XE(t,c*e,h*e,m*e,g*e);return r(50,16,2,4)||r(54,20,2,12)||r(42,48,2,4)||r(46,52,2,12)||o(50,16,2,4)&&o(54,20,2,12)&&o(42,48,2,4)&&o(46,52,2,12)||l(50,16,2,4)&&l(54,20,2,12)&&l(42,48,2,4)&&l(46,52,2,12)?"slim":"default"}function qE(s){if(s.width===s.height*2&&s.height%7===0)return s.height/7;throw new Error(`Bad ears size: ${s.width}x${s.height}`)}function KE(s,e){const t=qE(e);s.width=14*t,s.height=7*t;const r=s.getContext("2d",{willReadFrequently:!0});r.clearRect(0,0,s.width,s.height),r.drawImage(e,0,0,e.width,e.height)}function Pm(s,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=Nl(e.width),r=14*t,o=7*t;s.width=r,s.height=o;const l=s.getContext("2d",{willReadFrequently:!0});l.clearRect(0,0,r,o),l.drawImage(e,24*t,0,r,o,0,0,r,o)}async function Sl(s){const e=document.createElement("img");return new Promise((t,r)=>{e.onload=()=>t(e),e.onerror=r,e.crossOrigin="anonymous",typeof s=="string"?e.src=s:(s.crossOrigin!==void 0&&(e.crossOrigin=s.crossOrigin),s.referrerPolicy!==void 0&&(e.referrerPolicy=s.referrerPolicy),e.src=s.src)})}const Lm={type:"change"},rf={type:"start"},Dm={type:"end"},Ml=new tg,Um=new vr,$E=Math.cos(70*S0.DEG2RAD);class ZE extends Kr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ss.ROTATE,MIDDLE:Ss.DOLLY,RIGHT:Ss.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",w),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Lm),r.update(),l=o.NONE},this.update=(function(){const k=new W,fe=new qr().setFromUnitVectors(e.up,new W(0,1,0)),De=fe.clone().invert(),Re=new W,Pe=new qr,$e=new W,ut=2*Math.PI;return function(Ce=null){const ee=r.object.position;k.copy(ee).sub(r.target),k.applyQuaternion(fe),c.setFromVector3(k),r.autoRotate&&l===o.NONE&&de(b(Ce)),r.enableDamping?(c.theta+=h.theta*r.dampingFactor,c.phi+=h.phi*r.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let ve=r.minAzimuthAngle,we=r.maxAzimuthAngle;isFinite(ve)&&isFinite(we)&&(ve<-Math.PI?ve+=ut:ve>Math.PI&&(ve-=ut),we<-Math.PI?we+=ut:we>Math.PI&&(we-=ut),ve<=we?c.theta=Math.max(ve,Math.min(we,c.theta)):c.theta=c.theta>(ve+we)/2?Math.max(ve,c.theta):Math.min(we,c.theta)),c.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,c.phi)),c.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.zoomToCursor&&B||r.object.isOrthographicCamera?c.radius=re(c.radius):c.radius=re(c.radius*m),k.setFromSpherical(c),k.applyQuaternion(De),ee.copy(r.target).add(k),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0));let at=!1;if(r.zoomToCursor&&B){let pt=null;if(r.object.isPerspectiveCamera){const xt=k.length();pt=re(xt*m);const hn=xt-pt;r.object.position.addScaledVector(C,hn),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const xt=new W(O.x,O.y,0);xt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),at=!0;const hn=new W(O.x,O.y,0);hn.unproject(r.object),r.object.position.sub(hn).add(xt),r.object.updateMatrixWorld(),pt=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;pt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(pt).add(r.object.position):(Ml.origin.copy(r.object.position),Ml.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Ml.direction))<$E?e.lookAt(r.target):(Um.setFromNormalAndCoplanarPoint(r.object.up,r.target),Ml.intersectPlane(Um,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),at=!0);return m=1,B=!1,at||Re.distanceToSquared(r.object.position)>f||8*(1-Pe.dot(r.object.quaternion))>f||$e.distanceToSquared(r.target)>0?(r.dispatchEvent(Lm),Re.copy(r.object.position),Pe.copy(r.object.quaternion),$e.copy(r.target),at=!1,!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",_e),r.domElement.removeEventListener("pointerdown",rt),r.domElement.removeEventListener("pointercancel",lt),r.domElement.removeEventListener("wheel",L),r.domElement.removeEventListener("pointermove",tt),r.domElement.removeEventListener("pointerup",lt),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",w),r._domElementKeyEvents=null)};const r=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=o.NONE;const f=1e-6,c=new Rm,h=new Rm;let m=1;const g=new W,y=new Ve,v=new Ve,S=new Ve,T=new Ve,E=new Ve,x=new Ve,_=new Ve,U=new Ve,R=new Ve,C=new W,O=new Ve;let B=!1;const D=[],ne={};function b(k){return k!==null?2*Math.PI/60*r.autoRotateSpeed*k:2*Math.PI/60/60*r.autoRotateSpeed}function N(){return Math.pow(.95,r.zoomSpeed)}function de(k){h.theta-=k}function pe(k){h.phi-=k}const $=(function(){const k=new W;return function(De,Re){k.setFromMatrixColumn(Re,0),k.multiplyScalar(-De),g.add(k)}})(),ae=(function(){const k=new W;return function(De,Re){r.screenSpacePanning===!0?k.setFromMatrixColumn(Re,1):(k.setFromMatrixColumn(Re,0),k.crossVectors(r.object.up,k)),k.multiplyScalar(De),g.add(k)}})(),se=(function(){const k=new W;return function(De,Re){const Pe=r.domElement;if(r.object.isPerspectiveCamera){const $e=r.object.position;k.copy($e).sub(r.target);let ut=k.length();ut*=Math.tan(r.object.fov/2*Math.PI/180),$(2*De*ut/Pe.clientHeight,r.object.matrix),ae(2*Re*ut/Pe.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?($(De*(r.object.right-r.object.left)/r.object.zoom/Pe.clientWidth,r.object.matrix),ae(Re*(r.object.top-r.object.bottom)/r.object.zoom/Pe.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function ce(k){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ie(k){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function V(k){if(!r.zoomToCursor)return;B=!0;const fe=r.domElement.getBoundingClientRect(),De=k.clientX-fe.left,Re=k.clientY-fe.top,Pe=fe.width,$e=fe.height;O.x=De/Pe*2-1,O.y=-(Re/$e)*2+1,C.set(O.x,O.y,1).unproject(r.object).sub(r.object.position).normalize()}function re(k){return Math.max(r.minDistance,Math.min(r.maxDistance,k))}function j(k){y.set(k.clientX,k.clientY)}function A(k){V(k),_.set(k.clientX,k.clientY)}function F(k){T.set(k.clientX,k.clientY)}function ue(k){v.set(k.clientX,k.clientY),S.subVectors(v,y).multiplyScalar(r.rotateSpeed);const fe=r.domElement;de(2*Math.PI*S.x/fe.clientHeight),pe(2*Math.PI*S.y/fe.clientHeight),y.copy(v),r.update()}function he(k){U.set(k.clientX,k.clientY),R.subVectors(U,_),R.y>0?ce(N()):R.y<0&&ie(N()),_.copy(U),r.update()}function xe(k){E.set(k.clientX,k.clientY),x.subVectors(E,T).multiplyScalar(r.panSpeed),se(x.x,x.y),T.copy(E),r.update()}function Ae(k){V(k),k.deltaY<0?ie(N()):k.deltaY>0&&ce(N()),r.update()}function Ue(k){let fe=!1;switch(k.code){case r.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?pe(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):se(0,r.keyPanSpeed),fe=!0;break;case r.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?pe(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):se(0,-r.keyPanSpeed),fe=!0;break;case r.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?de(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):se(r.keyPanSpeed,0),fe=!0;break;case r.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?de(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):se(-r.keyPanSpeed,0),fe=!0;break}fe&&(k.preventDefault(),r.update())}function be(){if(D.length===1)y.set(D[0].pageX,D[0].pageY);else{const k=.5*(D[0].pageX+D[1].pageX),fe=.5*(D[0].pageY+D[1].pageY);y.set(k,fe)}}function Ge(){if(D.length===1)T.set(D[0].pageX,D[0].pageY);else{const k=.5*(D[0].pageX+D[1].pageX),fe=.5*(D[0].pageY+D[1].pageY);T.set(k,fe)}}function _t(){const k=D[0].pageX-D[1].pageX,fe=D[0].pageY-D[1].pageY,De=Math.sqrt(k*k+fe*fe);_.set(0,De)}function nt(){r.enableZoom&&_t(),r.enablePan&&Ge()}function K(){r.enableZoom&&_t(),r.enableRotate&&be()}function Ct(k){if(D.length==1)v.set(k.pageX,k.pageY);else{const De=te(k),Re=.5*(k.pageX+De.x),Pe=.5*(k.pageY+De.y);v.set(Re,Pe)}S.subVectors(v,y).multiplyScalar(r.rotateSpeed);const fe=r.domElement;de(2*Math.PI*S.x/fe.clientHeight),pe(2*Math.PI*S.y/fe.clientHeight),y.copy(v)}function We(k){if(D.length===1)E.set(k.pageX,k.pageY);else{const fe=te(k),De=.5*(k.pageX+fe.x),Re=.5*(k.pageY+fe.y);E.set(De,Re)}x.subVectors(E,T).multiplyScalar(r.panSpeed),se(x.x,x.y),T.copy(E)}function et(k){const fe=te(k),De=k.pageX-fe.x,Re=k.pageY-fe.y,Pe=Math.sqrt(De*De+Re*Re);U.set(0,Pe),R.set(0,Math.pow(U.y/_.y,r.zoomSpeed)),ce(R.y),_.copy(U)}function Ke(k){r.enableZoom&&et(k),r.enablePan&&We(k)}function vt(k){r.enableZoom&&et(k),r.enableRotate&&Ct(k)}function rt(k){r.enabled!==!1&&(D.length===0&&(r.domElement.setPointerCapture(k.pointerId),r.domElement.addEventListener("pointermove",tt),r.domElement.addEventListener("pointerup",lt)),Se(k),k.pointerType==="touch"?J(k):Et(k))}function tt(k){r.enabled!==!1&&(k.pointerType==="touch"?Ee(k):kt(k))}function lt(k){He(k),D.length===0&&(r.domElement.releasePointerCapture(k.pointerId),r.domElement.removeEventListener("pointermove",tt),r.domElement.removeEventListener("pointerup",lt)),r.dispatchEvent(Dm),l=o.NONE}function Et(k){let fe;switch(k.button){case 0:fe=r.mouseButtons.LEFT;break;case 1:fe=r.mouseButtons.MIDDLE;break;case 2:fe=r.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case Ss.DOLLY:if(r.enableZoom===!1)return;A(k),l=o.DOLLY;break;case Ss.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(r.enablePan===!1)return;F(k),l=o.PAN}else{if(r.enableRotate===!1)return;j(k),l=o.ROTATE}break;case Ss.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(r.enableRotate===!1)return;j(k),l=o.ROTATE}else{if(r.enablePan===!1)return;F(k),l=o.PAN}break;default:l=o.NONE}l!==o.NONE&&r.dispatchEvent(rf)}function kt(k){switch(l){case o.ROTATE:if(r.enableRotate===!1)return;ue(k);break;case o.DOLLY:if(r.enableZoom===!1)return;he(k);break;case o.PAN:if(r.enablePan===!1)return;xe(k);break}}function L(k){r.enabled===!1||r.enableZoom===!1||l!==o.NONE||(k.preventDefault(),r.dispatchEvent(rf),Ae(k),r.dispatchEvent(Dm))}function w(k){r.enabled===!1||r.enablePan===!1||Ue(k)}function J(k){switch(Me(k),D.length){case 1:switch(r.touches.ONE){case Ms.ROTATE:if(r.enableRotate===!1)return;be(),l=o.TOUCH_ROTATE;break;case Ms.PAN:if(r.enablePan===!1)return;Ge(),l=o.TOUCH_PAN;break;default:l=o.NONE}break;case 2:switch(r.touches.TWO){case Ms.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;nt(),l=o.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;K(),l=o.TOUCH_DOLLY_ROTATE;break;default:l=o.NONE}break;default:l=o.NONE}l!==o.NONE&&r.dispatchEvent(rf)}function Ee(k){switch(Me(k),l){case o.TOUCH_ROTATE:if(r.enableRotate===!1)return;Ct(k),r.update();break;case o.TOUCH_PAN:if(r.enablePan===!1)return;We(k),r.update();break;case o.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Ke(k),r.update();break;case o.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;vt(k),r.update();break;default:l=o.NONE}}function _e(k){r.enabled!==!1&&k.preventDefault()}function Se(k){D.push(k)}function He(k){delete ne[k.pointerId];for(let fe=0;fe<D.length;fe++)if(D[fe].pointerId==k.pointerId){D.splice(fe,1);return}}function Me(k){let fe=ne[k.pointerId];fe===void 0&&(fe=new Ve,ne[k.pointerId]=fe),fe.set(k.pageX,k.pageY)}function te(k){const fe=k.pointerId===D[0].pointerId?D[1]:D[0];return ne[fe.pointerId]}r.domElement.addEventListener("contextmenu",_e),r.domElement.addEventListener("pointerdown",rt),r.domElement.addEventListener("pointercancel",lt),r.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}const QE={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ol{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JE=new dg(-1,1,1,-1,0,1),Tf=new Yi;Tf.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3));Tf.setAttribute("uv",new Wi([0,2,0,0,2,0],2));class eT{constructor(e){this._mesh=new At(Tf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Eg extends Ol{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=lg.clone(e.uniforms),this.material=new Xi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new eT(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Im extends Ol{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let f,c;this.inverse?(f=0,c=1):(f=1,c=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,f,4294967295),l.buffers.stencil.setClear(c),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class tT extends Ol{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new Ve);this._width=r.width,this._height=r.height,t=new ji(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ks}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Eg(QE),this.copyPass.material.blending=Vi,this.clock=new Mg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let o=0,l=this.passes.length;o<l;o++){const f=this.passes[o];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),f.needsSwap){if(r){const c=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Im!==void 0&&(f instanceof Im?r=!0:f instanceof tT&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class iT extends Ol{constructor(e,t,r=null,o=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(e,t,r){const o=e.autoClear;e.autoClear=!1;let l,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),e.autoClear=o}}const rT={uniforms:{tDiffuse:{value:null},resolution:{value:new Ve(1/1024,1/512)}},vertexShader:`

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
	`};class sT extends LE{constructor(e="",t={}){const r=new xg({transparent:!0,alphaTest:1e-5});super(r),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=r,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const r=t.measureText(this.text);e.width=this.margin[3]+r.actualBoundingBoxLeft+r.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+r.actualBoundingBoxAscent+r.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+r.actualBoundingBoxLeft,this.margin[0]+r.actualBoundingBoxAscent);const o=new Al(e);o.magFilter=Ft,o.minFilter=Ft,this.textMaterial.map=o,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class aT{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new NE(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new IE(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new CE,this.camera=new Gn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Qn.enabled=!1,this.renderer=new vg({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new ji(0,0,{depthTexture:new _g(0,0,Hi)})),this.composer=new nT(this.renderer,t),this.renderPass=new iT(this.scene,this.camera),this.fxaaPass=new Eg(rT),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new BE,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new dn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new ZE(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Mg,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=r=>{r.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",r=>{r.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Al(this.skinCanvas),this.skinTexture.magFilter=Ft,this.skinTexture.minFilter=Ft,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Al(this.capeCanvas),this.capeTexture.magFilter=Ft,this.capeTexture.minFilter=Ft,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Al(this.earsCanvas),this.earsTexture.magFilter=Ft,this.earsTexture.minFilter=Ft,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(yl(e))GE(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=YE(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Pm(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0));else return Sl(e).then(r=>this.loadSkin(r,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(yl(e))WE(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Sl(e).then(r=>this.loadCape(r,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(yl(e))t.textureType==="skin"?Pm(this.earsCanvas,e):KE(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0);else return Sl(e).then(r=>this.loadEars(r,t))}resetEars(){this.playerObject.ears.visible=!1,this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,Rl)}loadBackground(e,t){if(yl(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new yn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Sl(e).then(r=>this.loadBackground(r,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&this._animation.update(this.playerObject,e),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new Ve).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new Ve).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof gt||e instanceof yn?this.scene.background=e:this.scene.background=new gt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Sn||(e=new sT(e)),this.playerWrapper.add(e),e.position.y=20),this._nameTag=e}}function oT({getPNG:s}){const e=Jt.useRef(null),t=Jt.useRef(null);return Jt.useEffect(()=>{if(!e.current)return;const r=new aT({width:e.current.clientWidth,height:e.current.clientHeight});e.current.appendChild(r.canvas),r.background="#0c0c14",r.autoRotate=!0,r.controls.enableZoom=!0,t.current=r;const o=setInterval(async()=>{const f=await s(),c=URL.createObjectURL(f);r.loadSkin(c),setTimeout(()=>URL.revokeObjectURL(c),5e3)},700),l=()=>{e.current&&(r.width=e.current.clientWidth,r.height=e.current.clientHeight)};return window.addEventListener("resize",l),()=>{clearInterval(o),window.removeEventListener("resize",l),r.dispose()}},[]),je.jsx("div",{ref:e,className:"neon-card absolute inset-0 p-2"})}function Nm(s,e,t,r){const{width:o,height:l,data:f}=s,c=(S,T)=>(T*o+S)*4;if(e<0||t<0||e>=o||t>=l)return;const h=c(e,t),m=[f[h],f[h+1],f[h+2],f[h+3]],g=(S,T)=>f[S]===T[0]&&f[S+1]===T[1]&&f[S+2]===T[2]&&f[S+3]===T[3];if(g(h,m),m[0]===r[0]&&m[1]===r[1]&&m[2]===r[2]&&m[3]===r[3])return;const y=[[e,t]];for(;y.length;){const[S,T]=y.pop();let E=S;for(;E>=0&&g(c(E,T),m);)E--;E++;let x=!1,_=!1;for(;E<o&&g(c(E,T),m);)v(E,T,r),!x&&T>0&&g(c(E,T-1),m)?(y.push([E,T-1]),x=!0):x&&T>0&&!g(c(E,T-1),m)&&(x=!1),!_&&T<l-1&&g(c(E,T+1),m)?(y.push([E,T+1]),_=!0):_&&T<l-1&&!g(c(E,T+1),m)&&(_=!1),E++}function v(S,T,E){const x=c(S,T);f[x]=E[0],f[x+1]=E[1],f[x+2]=E[2],f[x+3]=E[3]}}function lT({tool:s,color:e,size:t,mirror:r,grid:o,img:l,setImg:f,onSnapshot:c}){const h=Jt.useRef(null),[m,g]=Jt.useState(8),[y,v]=Jt.useState(null);function S(x){const _=x.replace("#",""),U=_.length===3?_.split("").map(C=>C+C).join(""):_,R=parseInt(U,16);return[R>>16&255,R>>8&255,R&255,255]}function T(x,_,U){const R=l.data,C=Math.max(1,Math.floor(t));for(let O=-C+1;O<=C-1;O++)for(let B=-C+1;B<=C-1;B++){const D=x+B,ne=_+O;if(D<0||ne<0||D>=Ht||ne>=fn)continue;const b=(ne*Ht+D)*4;R[b]=U[0],R[b+1]=U[1],R[b+2]=U[2],R[b+3]=U[3]}}function E(x){const U=h.current.getBoundingClientRect(),R=Math.floor((x.clientX-U.left)/m),C=Math.floor((x.clientY-U.top)/m);if(v({x:R,y:C}),x.buttons!==1)return;const O=El(l);if(s==="brush")T(R,C,S(e)),r&&T(Ht-1-R,C,S(e));else if(s==="eraser")T(R,C,[0,0,0,0]),r&&T(Ht-1-R,C,[0,0,0,0]);else if(s==="fill")Nm(O,R,C,S(e)),r&&Nm(O,Ht-1-R,C,S(e));else if(s==="picker"){const B=(C*Ht+R)*4,D=l.data;if(D[B+3]>0){const ne="#"+[D[B],D[B+1],D[B+2]].map(b=>b.toString(16).padStart(2,"0")).join("");window.dispatchEvent(new CustomEvent("skin-picker",{detail:ne}))}return}f(O)}return Jt.useEffect(()=>{const x=h.current;x.width=Ht*m,x.height=fn*m;const _=x.getContext("2d");_.imageSmoothingEnabled=!1;const U=document.createElement("canvas");if(U.width=Ht,U.height=fn,U.getContext("2d").putImageData(l,0,0),_.clearRect(0,0,x.width,x.height),_.drawImage(U,0,0,x.width,x.height),o){_.strokeStyle="rgba(255,255,255,.08)",_.lineWidth=1;for(let R=0;R<=Ht;R++)_.beginPath(),_.moveTo(R*m+.5,0),_.lineTo(R*m+.5,fn*m),_.stroke();for(let R=0;R<=fn;R++)_.beginPath(),_.moveTo(0,R*m+.5),_.lineTo(Ht*m,R*m+.5),_.stroke()}y&&(_.fillStyle="rgba(255,255,255,.12)",_.fillRect(y.x*m,y.y*m,m,m))},[l,m,o,y]),je.jsxs("div",{className:"neon-card p-2",children:[je.jsxs("div",{className:"flex items-center justify-between mb-1",children:[je.jsx("div",{className:"font-semibold",children:"Texture (64×64)"}),je.jsxs("div",{className:"flex items-center gap-2",children:[je.jsx("span",{className:"label",children:"Zoom"}),je.jsx("input",{type:"range",min:4,max:32,value:m,onChange:x=>g(parseInt(x.target.value))}),y&&je.jsxs("span",{className:"text-neon-100 text-xs",children:["x:",y.x," y:",y.y]})]})]}),je.jsx("canvas",{ref:h,onMouseDown:x=>{c(),E(x)},onMouseMove:E,style:{imageRendering:"pixelated",cursor:s==="picker"?"crosshair":"default"}})]})}function uT(){const[s,e]=Jt.useState("brush"),[t,r]=Jt.useState("#8A4DFF"),[o,l]=Jt.useState(2),[f,c]=Jt.useState(!0),[h,m]=Jt.useState(!0),[g,y]=Jt.useState(mv()),v=Jt.useRef(new pv);Jt.useEffect(()=>{y(ip()),v.current.push(ip())},[]),Jt.useEffect(()=>{const C=O=>{r(O.detail),e("brush")};return window.addEventListener("skin-picker",C),()=>window.removeEventListener("skin-picker",C)},[]);function S(){v.current.push(El(g))}function T(){const C=v.current.undo();C&&y(El(C))}function E(){const C=v.current.redo();C&&y(El(C))}async function x(){const C=document.createElement("canvas");return C.width=Ht,C.height=fn,C.getContext("2d").putImageData(g,0,0),await Fm(C)}async function _(C){const O=await vv(C);S(),y(O)}function U(){const C=document.createElement("canvas");C.width=Ht,C.height=fn,C.getContext("2d").putImageData(g,0,0),gv(C,"skin.png")}async function R(){const C=document.createElement("canvas");C.width=Ht,C.height=fn,C.getContext("2d").putImageData(g,0,0),await _v(C)}return je.jsxs("div",{className:"min-h-screen",children:[je.jsx(xv,{tool:s,setTool:e,onUndo:T,onRedo:E}),je.jsx(Mv,{color:t,setColor:r,size:o,setSize:l,mirror:f,setMirror:c,grid:h,setGrid:m,onImport:_,onExport:U,onCopy:R}),je.jsxs("div",{className:"pt-16 px-4 lg:px-16",children:[je.jsx("div",{className:"relative w-full h-[60vh]",children:je.jsx(oT,{getPNG:x})}),je.jsx("div",{className:"mt-4",children:je.jsx(lT,{tool:s,color:t,size:o,mirror:f,grid:h,img:g,setImg:y,onSnapshot:S})})]})]})}hv.createRoot(document.getElementById("root")).render(je.jsx(av.StrictMode,{children:je.jsx(uT,{})}));
