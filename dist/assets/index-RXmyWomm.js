(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function O0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ad={exports:{}},Ba={},ld={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function $y(){if(e_)return ft;e_=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function _(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(z,re,De){this.props=z,this.context=re,this.refs=M,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(z,re){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,re,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function v(){}v.prototype=y.prototype;function P(z,re,De){this.props=z,this.context=re,this.refs=M,this.updater=De||S}var b=P.prototype=new v;b.constructor=P,E(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,N=Object.prototype.hasOwnProperty,U={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function O(z,re,De){var J,de={},Ee=null,xe=null;if(re!=null)for(J in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(Ee=""+re.key),re)N.call(re,J)&&!D.hasOwnProperty(J)&&(de[J]=re[J]);var Ae=arguments.length-2;if(Ae===1)de.children=De;else if(1<Ae){for(var Ue=Array(Ae),Ze=0;Ze<Ae;Ze++)Ue[Ze]=arguments[Ze+2];de.children=Ue}if(z&&z.defaultProps)for(J in Ae=z.defaultProps,Ae)de[J]===void 0&&(de[J]=Ae[J]);return{$$typeof:o,type:z,key:Ee,ref:xe,props:de,_owner:U.current}}function T(z,re){return{$$typeof:o,type:z.type,key:re,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function k(z){var re={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(De){return re[De]})}var ee=/\/+/g;function W(z,re){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):re.toString(36)}function le(z,re,De,J,de){var Ee=typeof z;(Ee==="undefined"||Ee==="boolean")&&(z=null);var xe=!1;if(z===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(z.$$typeof){case o:case e:xe=!0}}if(xe)return xe=z,de=de(xe),z=J===""?"."+W(xe,0):J,C(de)?(De="",z!=null&&(De=z.replace(ee,"$&/")+"/"),le(de,re,De,"",function(Ze){return Ze})):de!=null&&(A(de)&&(de=T(de,De+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ee,"$&/")+"/")+z)),re.push(de)),1;if(xe=0,J=J===""?".":J+":",C(z))for(var Ae=0;Ae<z.length;Ae++){Ee=z[Ae];var Ue=J+W(Ee,Ae);xe+=le(Ee,re,De,Ue,de)}else if(Ue=_(z),typeof Ue=="function")for(z=Ue.call(z),Ae=0;!(Ee=z.next()).done;)Ee=Ee.value,Ue=J+W(Ee,Ae++),xe+=le(Ee,re,De,Ue,de);else if(Ee==="object")throw re=String(z),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function ie(z,re,De){if(z==null)return z;var J=[],de=0;return le(z,J,"","",function(Ee){return re.call(De,Ee,de++)}),J}function K(z){if(z._status===-1){var re=z._result;re=re(),re.then(function(De){(z._status===0||z._status===-1)&&(z._status=1,z._result=De)},function(De){(z._status===0||z._status===-1)&&(z._status=2,z._result=De)}),z._status===-1&&(z._status=0,z._result=re)}if(z._status===1)return z._result.default;throw z._result}var Q={current:null},B={transition:null},ce={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:B,ReactCurrentOwner:U};function ue(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ie,forEach:function(z,re,De){ie(z,function(){re.apply(this,arguments)},De)},count:function(z){var re=0;return ie(z,function(){re++}),re},toArray:function(z){return ie(z,function(re){return re})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ft.Component=y,ft.Fragment=t,ft.Profiler=s,ft.PureComponent=P,ft.StrictMode=i,ft.Suspense=d,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ft.act=ue,ft.cloneElement=function(z,re,De){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var J=E({},z.props),de=z.key,Ee=z.ref,xe=z._owner;if(re!=null){if(re.ref!==void 0&&(Ee=re.ref,xe=U.current),re.key!==void 0&&(de=""+re.key),z.type&&z.type.defaultProps)var Ae=z.type.defaultProps;for(Ue in re)N.call(re,Ue)&&!D.hasOwnProperty(Ue)&&(J[Ue]=re[Ue]===void 0&&Ae!==void 0?Ae[Ue]:re[Ue])}var Ue=arguments.length-2;if(Ue===1)J.children=De;else if(1<Ue){Ae=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Ae[Ze]=arguments[Ze+2];J.children=Ae}return{$$typeof:o,type:z.type,key:de,ref:Ee,props:J,_owner:xe}},ft.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:a,_context:z},z.Consumer=z},ft.createElement=O,ft.createFactory=function(z){var re=O.bind(null,z);return re.type=z,re},ft.createRef=function(){return{current:null}},ft.forwardRef=function(z){return{$$typeof:c,render:z}},ft.isValidElement=A,ft.lazy=function(z){return{$$typeof:p,_payload:{_status:-1,_result:z},_init:K}},ft.memo=function(z,re){return{$$typeof:h,type:z,compare:re===void 0?null:re}},ft.startTransition=function(z){var re=B.transition;B.transition={};try{z()}finally{B.transition=re}},ft.unstable_act=ue,ft.useCallback=function(z,re){return Q.current.useCallback(z,re)},ft.useContext=function(z){return Q.current.useContext(z)},ft.useDebugValue=function(){},ft.useDeferredValue=function(z){return Q.current.useDeferredValue(z)},ft.useEffect=function(z,re){return Q.current.useEffect(z,re)},ft.useId=function(){return Q.current.useId()},ft.useImperativeHandle=function(z,re,De){return Q.current.useImperativeHandle(z,re,De)},ft.useInsertionEffect=function(z,re){return Q.current.useInsertionEffect(z,re)},ft.useLayoutEffect=function(z,re){return Q.current.useLayoutEffect(z,re)},ft.useMemo=function(z,re){return Q.current.useMemo(z,re)},ft.useReducer=function(z,re,De){return Q.current.useReducer(z,re,De)},ft.useRef=function(z){return Q.current.useRef(z)},ft.useState=function(z){return Q.current.useState(z)},ft.useSyncExternalStore=function(z,re,De){return Q.current.useSyncExternalStore(z,re,De)},ft.useTransition=function(){return Q.current.useTransition()},ft.version="18.3.1",ft}var t_;function ip(){return t_||(t_=1,ld.exports=$y()),ld.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function Ky(){if(n_)return Ba;n_=1;var o=ip(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},_=null,S=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:_,ref:S,props:g,_owner:s.current}}return Ba.Fragment=t,Ba.jsx=u,Ba.jsxs=u,Ba}var i_;function Zy(){return i_||(i_=1,ad.exports=Ky()),ad.exports}var Z=Zy(),Pt=ip();const Qy=O0(Pt);var Eu={},ud={exports:{}},Hn={},cd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function Jy(){return r_||(r_=1,(function(o){function e(B,ce){var ue=B.length;B.push(ce);e:for(;0<ue;){var z=ue-1>>>1,re=B[z];if(0<s(re,ce))B[z]=ce,B[ue]=re,ue=z;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ce=B[0],ue=B.pop();if(ue!==ce){B[0]=ue;e:for(var z=0,re=B.length,De=re>>>1;z<De;){var J=2*(z+1)-1,de=B[J],Ee=J+1,xe=B[Ee];if(0>s(de,ue))Ee<re&&0>s(xe,de)?(B[z]=xe,B[Ee]=ue,z=Ee):(B[z]=de,B[J]=ue,z=J);else if(Ee<re&&0>s(xe,ue))B[z]=xe,B[Ee]=ue,z=Ee;else break e}}return ce}function s(B,ce){var ue=B.sortIndex-ce.sortIndex;return ue!==0?ue:B.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,_=3,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var ce=t(h);ce!==null;){if(ce.callback===null)i(h);else if(ce.startTime<=B)i(h),ce.sortIndex=ce.expirationTime,e(d,ce);else break;ce=t(h)}}function C(B){if(M=!1,b(B),!E)if(t(d)!==null)E=!0,K(N);else{var ce=t(h);ce!==null&&Q(C,ce.startTime-B)}}function N(B,ce){E=!1,M&&(M=!1,v(O),O=-1),S=!0;var ue=_;try{for(b(ce),g=t(d);g!==null&&(!(g.expirationTime>ce)||B&&!k());){var z=g.callback;if(typeof z=="function"){g.callback=null,_=g.priorityLevel;var re=z(g.expirationTime<=ce);ce=o.unstable_now(),typeof re=="function"?g.callback=re:g===t(d)&&i(d),b(ce)}else i(d);g=t(d)}if(g!==null)var De=!0;else{var J=t(h);J!==null&&Q(C,J.startTime-ce),De=!1}return De}finally{g=null,_=ue,S=!1}}var U=!1,D=null,O=-1,T=5,A=-1;function k(){return!(o.unstable_now()-A<T)}function ee(){if(D!==null){var B=o.unstable_now();A=B;var ce=!0;try{ce=D(!0,B)}finally{ce?W():(U=!1,D=null)}}else U=!1}var W;if(typeof P=="function")W=function(){P(ee)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ie=le.port2;le.port1.onmessage=ee,W=function(){ie.postMessage(null)}}else W=function(){y(ee,0)};function K(B){D=B,U||(U=!0,W())}function Q(B,ce){O=y(function(){B(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){E||S||(E=!0,K(N))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ce=3;break;default:ce=_}var ue=_;_=ce;try{return B()}finally{_=ue}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ce){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ue=_;_=B;try{return ce()}finally{_=ue}},o.unstable_scheduleCallback=function(B,ce,ue){var z=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?z+ue:z):ue=z,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ue+re,B={id:p++,callback:ce,priorityLevel:B,startTime:ue,expirationTime:re,sortIndex:-1},ue>z?(B.sortIndex=ue,e(h,B),t(d)===null&&B===t(h)&&(M?(v(O),O=-1):M=!0,Q(C,ue-z))):(B.sortIndex=re,e(d,B),E||S||(E=!0,K(N))),B},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(B){var ce=_;return function(){var ue=_;_=ce;try{return B.apply(this,arguments)}finally{_=ue}}}})(fd)),fd}var s_;function eS(){return s_||(s_=1,cd.exports=Jy()),cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function tS(){if(o_)return Hn;o_=1;var o=ip(),e=eS();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function _(n){return d.call(g,n)?!0:d.call(p,n)?!1:h.test(n)?g[n]=!0:(p[n]=!0,!1)}function S(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||S(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,x,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,P);y[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,P);y[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,P);y[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,r,l,f){var m=y.hasOwnProperty(r)?y[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),U=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),B=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,z;function re(n){if(z===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+n}var De=!1;function J(n,r){if(!n||De)return"";De=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(se){var f=se}Reflect.construct(n,[],r)}else{try{r.call()}catch(se){f=se}n.call(r.prototype)}else{try{throw Error()}catch(se){f=se}n()}}catch(se){if(se&&f&&typeof se.stack=="string"){for(var m=se.stack.split(`
`),x=f.stack.split(`
`),w=m.length-1,F=x.length-1;1<=w&&0<=F&&m[w]!==x[F];)F--;for(;1<=w&&0<=F;w--,F--)if(m[w]!==x[F]){if(w!==1||F!==1)do if(w--,F--,0>F||m[w]!==x[F]){var V=`
`+m[w].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=w&&0<=F);break}}}finally{De=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?re(n):""}function de(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case U:return"Portal";case T:return"Profiler";case O:return"StrictMode";case W:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return r=n.displayName||null,r!==null?r:Ee(n.type)||"Memo";case K:r=n._payload,n=n._init;try{return Ee(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(r);case 8:return r===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=Ue(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(w){f=""+w,x.call(this,w)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Rt(n){n._valueTracker||(n._valueTracker=Ze(n))}function ht(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ue(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Y(n,r){var l=r.checked;return ue({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Cn(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Ae(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dt(n,r){r=r.checked,r!=null&&b(n,"checked",r,!1)}function ut(n,r){dt(n,r);var l=Ae(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?At(n,r.type,l):r.hasOwnProperty("defaultValue")&&At(n,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function qe(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function At(n,r,l){(r!=="number"||Nt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ye=Array.isArray;function I(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Ae(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function R(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ne(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ye(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ae(l)}}function me(n,r){var l=Ae(r.value),f=Ae(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function lt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Se[r]=Se[n]})});function Qe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Se.hasOwnProperty(n)&&Se[n]?(""+r).trim():r+"px"}function Je(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Qe(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var ke=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function it(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,fe=null,pe=null;function Le(n){if(n=wa(n)){if(typeof Re!="function")throw Error(t(280));var r=n.stateNode;r&&(r=kl(r),Re(n.stateNode,n.type,r))}}function Pe(n){fe?pe?pe.push(n):pe=[n]:fe=n}function rt(){if(fe){var n=fe,r=pe;if(pe=fe=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function Ot(n,r){return n(r)}function tn(){}var vt=!1;function Nn(n,r,l){if(vt)return n(r,l);vt=!0;try{return Ot(n,r,l)}finally{vt=!1,(fe!==null||pe!==null)&&(tn(),rt())}}function Rn(n,r){var l=n.stateNode;if(l===null)return null;var f=kl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var eo=!1;if(c)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){eo=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{eo=!1}function nr(n,r,l,f,m,x,w,F,V){var se=Array.prototype.slice.call(arguments,3);try{r.apply(l,se)}catch(ve){this.onError(ve)}}var ir=!1,ms=null,gs=!1,br=null,vl={onError:function(n){ir=!0,ms=n}};function to(n,r,l,f,m,x,w,F,V){ir=!1,ms=null,nr.apply(vl,arguments)}function xl(n,r,l,f,m,x,w,F,V){if(to.apply(this,arguments),ir){if(ir){var se=ms;ir=!1,ms=null}else throw Error(t(198));gs||(gs=!0,br=se)}}function Vi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function yl(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sl(n){if(Vi(n)!==n)throw Error(t(188))}function Rc(n){var r=n.alternate;if(!r){if(r=Vi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return Sl(m),n;if(x===f)return Sl(m),r;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var w=!1,F=m.child;F;){if(F===l){w=!0,l=m,f=x;break}if(F===f){w=!0,f=m,l=x;break}F=F.sibling}if(!w){for(F=x.child;F;){if(F===l){w=!0,l=x,f=m;break}if(F===f){w=!0,f=x,l=m;break}F=F.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function L(n){return n=Rc(n),n!==null?X(n):null}function X(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=X(n);if(r!==null)return r;n=n.sibling}return null}var oe=e.unstable_scheduleCallback,ae=e.unstable_cancelCallback,j=e.unstable_shouldYield,we=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Tt=null,pt=null;function gn(n){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:St,je=Math.log,Ai=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(je(n)/Ai|0)|0}var _n=64,Ci=4194304;function nn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Hi(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,x=n.pingedLanes,w=l&268435455;if(w!==0){var F=w&~m;F!==0?f=nn(F):(x&=w,x!==0&&(f=nn(x)))}else w=l&~m,w!==0?f=nn(w):x!==0&&(f=nn(x));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,x=r&-r,m>=x||m===16&&(x&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-st(r),m=1<<l,f|=n[l],r&=~m;return f}function Dt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function di(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,x=n.pendingLanes;0<x;){var w=31-st(x),F=1<<w,V=m[w];V===-1?((F&l)===0||(F&f)!==0)&&(m[w]=Dt(F,r)):V<=r&&(n.expiredLanes|=F),x&=~F}}function rr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=_n;return _n<<=1,(_n&4194240)===0&&(_n=64),n}function hi(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Fn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-st(r),n[r]=l}function Ml(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-st(l),x=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~x}}function bc(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-st(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var Ct=0;function Dp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ip,Pc,Up,Np,Fp,Lc=!1,El=[],Pr=null,Lr=null,Dr=null,ua=new Map,ca=new Map,Ir=[],_x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(n,r){switch(n){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ua.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(r.pointerId)}}function fa(n,r,l,f,m,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},r!==null&&(r=wa(r),r!==null&&Pc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function vx(n,r,l,f,m){switch(r){case"focusin":return Pr=fa(Pr,n,r,l,f,m),!0;case"dragenter":return Lr=fa(Lr,n,r,l,f,m),!0;case"mouseover":return Dr=fa(Dr,n,r,l,f,m),!0;case"pointerover":var x=m.pointerId;return ua.set(x,fa(ua.get(x)||null,n,r,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,ca.set(x,fa(ca.get(x)||null,n,r,l,f,m)),!0}return!1}function kp(n){var r=_s(n.target);if(r!==null){var l=Vi(r);if(l!==null){if(r=l.tag,r===13){if(r=yl(l),r!==null){n.blockedOn=r,Fp(n.priority,function(){Up(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Tl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Ic(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);wt=f,l.target.dispatchEvent(f),wt=null}else return r=wa(l),r!==null&&Pc(r),n.blockedOn=l,!1;r.shift()}return!0}function zp(n,r,l){Tl(n)&&l.delete(r)}function xx(){Lc=!1,Pr!==null&&Tl(Pr)&&(Pr=null),Lr!==null&&Tl(Lr)&&(Lr=null),Dr!==null&&Tl(Dr)&&(Dr=null),ua.forEach(zp),ca.forEach(zp)}function da(n,r){n.blockedOn===r&&(n.blockedOn=null,Lc||(Lc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,xx)))}function ha(n){function r(m){return da(m,n)}if(0<El.length){da(El[0],n);for(var l=1;l<El.length;l++){var f=El[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Pr!==null&&da(Pr,n),Lr!==null&&da(Lr,n),Dr!==null&&da(Dr,n),ua.forEach(r),ca.forEach(r),l=0;l<Ir.length;l++)f=Ir[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Ir.length&&(l=Ir[0],l.blockedOn===null);)kp(l),l.blockedOn===null&&Ir.shift()}var no=C.ReactCurrentBatchConfig,wl=!0;function yx(n,r,l,f){var m=Ct,x=no.transition;no.transition=null;try{Ct=1,Dc(n,r,l,f)}finally{Ct=m,no.transition=x}}function Sx(n,r,l,f){var m=Ct,x=no.transition;no.transition=null;try{Ct=4,Dc(n,r,l,f)}finally{Ct=m,no.transition=x}}function Dc(n,r,l,f){if(wl){var m=Ic(n,r,l,f);if(m===null)Kc(n,r,f,Al,l),Op(n,f);else if(vx(m,n,r,l,f))f.stopPropagation();else if(Op(n,f),r&4&&-1<_x.indexOf(n)){for(;m!==null;){var x=wa(m);if(x!==null&&Ip(x),x=Ic(n,r,l,f),x===null&&Kc(n,r,f,Al,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else Kc(n,r,f,null,l)}}var Al=null;function Ic(n,r,l,f){if(Al=null,n=G(f),n=_s(n),n!==null)if(r=Vi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=yl(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Al=n,null}function Bp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Be:return 1;case et:return 4;case nt:case We:return 16;case gt:return 536870912;default:return 16}default:return 16}}var Ur=null,Uc=null,Cl=null;function Vp(){if(Cl)return Cl;var n,r=Uc,l=r.length,f,m="value"in Ur?Ur.value:Ur.textContent,x=m.length;for(n=0;n<l&&r[n]===m[n];n++);var w=l-n;for(f=1;f<=w&&r[l-f]===m[x-f];f++);return Cl=m.slice(n,1<f?1-f:void 0)}function Rl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function bl(){return!0}function Hp(){return!1}function Qn(n){function r(l,f,m,x,w){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=w,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?bl:Hp,this.isPropagationStopped=Hp,this}return ue(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),r}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Qn(io),pa=ue({},io,{view:0,detail:0}),Mx=Qn(pa),Fc,Oc,ma,Pl=ue({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ma&&(ma&&n.type==="mousemove"?(Fc=n.screenX-ma.screenX,Oc=n.screenY-ma.screenY):Oc=Fc=0,ma=n),Fc)},movementY:function(n){return"movementY"in n?n.movementY:Oc}}),Gp=Qn(Pl),Ex=ue({},Pl,{dataTransfer:0}),Tx=Qn(Ex),wx=ue({},pa,{relatedTarget:0}),kc=Qn(wx),Ax=ue({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=Qn(Ax),Rx=ue({},io,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bx=Qn(Rx),Px=ue({},io,{data:0}),Wp=Qn(Px),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ux(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Ix[n])?!!r[n]:!1}function zc(){return Ux}var Nx=ue({},pa,{key:function(n){if(n.key){var r=Lx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(n){return n.type==="keypress"?Rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fx=Qn(Nx),Ox=ue({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Qn(Ox),kx=ue({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),zx=Qn(kx),Bx=ue({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=Qn(Bx),Hx=ue({},Pl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=Qn(Hx),Wx=[9,13,27,32],Bc=c&&"CompositionEvent"in window,ga=null;c&&"documentMode"in document&&(ga=document.documentMode);var Xx=c&&"TextEvent"in window&&!ga,jp=c&&(!Bc||ga&&8<ga&&11>=ga),Yp=" ",qp=!1;function $p(n,r){switch(n){case"keyup":return Wx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ro=!1;function jx(n,r){switch(n){case"compositionend":return Kp(r);case"keypress":return r.which!==32?null:(qp=!0,Yp);case"textInput":return n=r.data,n===Yp&&qp?null:n;default:return null}}function Yx(n,r){if(ro)return n==="compositionend"||!Bc&&$p(n,r)?(n=Vp(),Cl=Uc=Ur=null,ro=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return jp&&r.locale!=="ko"?null:r.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!qx[n.type]:r==="textarea"}function Qp(n,r,l,f){Pe(f),r=Nl(r,"onChange"),0<r.length&&(l=new Nc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var _a=null,va=null;function $x(n){gm(n,0)}function Ll(n){var r=uo(n);if(ht(r))return n}function Kx(n,r){if(n==="change")return r}var Jp=!1;if(c){var Vc;if(c){var Hc="oninput"in document;if(!Hc){var em=document.createElement("div");em.setAttribute("oninput","return;"),Hc=typeof em.oninput=="function"}Vc=Hc}else Vc=!1;Jp=Vc&&(!document.documentMode||9<document.documentMode)}function tm(){_a&&(_a.detachEvent("onpropertychange",nm),va=_a=null)}function nm(n){if(n.propertyName==="value"&&Ll(va)){var r=[];Qp(r,va,n,G(n)),Nn($x,r)}}function Zx(n,r,l){n==="focusin"?(tm(),_a=r,va=l,_a.attachEvent("onpropertychange",nm)):n==="focusout"&&tm()}function Qx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ll(va)}function Jx(n,r){if(n==="click")return Ll(r)}function ey(n,r){if(n==="input"||n==="change")return Ll(r)}function ty(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ri=typeof Object.is=="function"?Object.is:ty;function xa(n,r){if(Ri(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!Ri(n[m],r[m]))return!1}return!0}function im(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rm(n,r){var l=im(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=im(l)}}function sm(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?sm(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function om(){for(var n=window,r=Nt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Nt(n.document)}return r}function Gc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function ny(n){var r=om(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&sm(l.ownerDocument.documentElement,l)){if(f!==null&&Gc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!n.extend&&x>f&&(m=f,f=x,x=m),m=rm(l,x);var w=rm(l,f);m&&w&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),x>f?(n.addRange(r),n.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iy=c&&"documentMode"in document&&11>=document.documentMode,so=null,Wc=null,ya=null,Xc=!1;function am(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Xc||so==null||so!==Nt(f)||(f=so,"selectionStart"in f&&Gc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ya&&xa(ya,f)||(ya=f,f=Nl(Wc,"onSelect"),0<f.length&&(r=new Nc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=so)))}function Dl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var oo={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},jc={},lm={};c&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function Il(n){if(jc[n])return jc[n];if(!oo[n])return n;var r=oo[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in lm)return jc[n]=r[l];return n}var um=Il("animationend"),cm=Il("animationiteration"),fm=Il("animationstart"),dm=Il("transitionend"),hm=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(n,r){hm.set(n,r),a(r,[n])}for(var Yc=0;Yc<pm.length;Yc++){var qc=pm[Yc],ry=qc.toLowerCase(),sy=qc[0].toUpperCase()+qc.slice(1);Nr(ry,"on"+sy)}Nr(um,"onAnimationEnd"),Nr(cm,"onAnimationIteration"),Nr(fm,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(dm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function mm(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,xl(f,r,void 0,n),n.currentTarget=null}function gm(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var x=void 0;if(r)for(var w=f.length-1;0<=w;w--){var F=f[w],V=F.instance,se=F.currentTarget;if(F=F.listener,V!==x&&m.isPropagationStopped())break e;mm(m,F,se),x=V}else for(w=0;w<f.length;w++){if(F=f[w],V=F.instance,se=F.currentTarget,F=F.listener,V!==x&&m.isPropagationStopped())break e;mm(m,F,se),x=V}}}if(gs)throw n=br,gs=!1,br=null,n}function kt(n,r){var l=r[nf];l===void 0&&(l=r[nf]=new Set);var f=n+"__bubble";l.has(f)||(_m(r,n,2,!1),l.add(f))}function $c(n,r,l){var f=0;r&&(f|=4),_m(l,n,f,r)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Ma(n){if(!n[Ul]){n[Ul]=!0,i.forEach(function(l){l!=="selectionchange"&&(oy.has(l)||$c(l,!1,n),$c(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ul]||(r[Ul]=!0,$c("selectionchange",!1,r))}}function _m(n,r,l,f){switch(Bp(r)){case 1:var m=yx;break;case 4:m=Sx;break;default:m=Dc}l=m.bind(null,r,l,n),m=void 0,!eo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function Kc(n,r,l,f,m){var x=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(w===4)for(w=f.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;w=w.return}for(;F!==null;){if(w=_s(F),w===null)return;if(V=w.tag,V===5||V===6){f=x=w;continue e}F=F.parentNode}}f=f.return}Nn(function(){var se=x,ve=G(l),ye=[];e:{var ge=hm.get(n);if(ge!==void 0){var Ie=Nc,ze=n;switch(n){case"keypress":if(Rl(l)===0)break e;case"keydown":case"keyup":Ie=Fx;break;case"focusin":ze="focus",Ie=kc;break;case"focusout":ze="blur",Ie=kc;break;case"beforeblur":case"afterblur":Ie=kc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=zx;break;case um:case cm:case fm:Ie=Cx;break;case dm:Ie=Vx;break;case"scroll":Ie=Mx;break;case"wheel":Ie=Gx;break;case"copy":case"cut":case"paste":Ie=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Xp}var Ve=(r&4)!==0,Kt=!Ve&&n==="scroll",q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var H=se,te;H!==null;){te=H;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,q!==null&&(Te=Rn(H,q),Te!=null&&Ve.push(Ea(H,Te,te)))),Kt)break;H=H.return}0<Ve.length&&(ge=new Ie(ge,ze,null,l,ve),ye.push({event:ge,listeners:Ve}))}}if((r&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&l!==wt&&(ze=l.relatedTarget||l.fromElement)&&(_s(ze)||ze[sr]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ze=l.relatedTarget||l.toElement,Ie=se,ze=ze?_s(ze):null,ze!==null&&(Kt=Vi(ze),ze!==Kt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=se),Ie!==ze)){if(Ve=Gp,Te="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=Xp,Te="onPointerLeave",q="onPointerEnter",H="pointer"),Kt=Ie==null?ge:uo(Ie),te=ze==null?ge:uo(ze),ge=new Ve(Te,H+"leave",Ie,l,ve),ge.target=Kt,ge.relatedTarget=te,Te=null,_s(ve)===se&&(Ve=new Ve(q,H+"enter",ze,l,ve),Ve.target=te,Ve.relatedTarget=Kt,Te=Ve),Kt=Te,Ie&&ze)t:{for(Ve=Ie,q=ze,H=0,te=Ve;te;te=ao(te))H++;for(te=0,Te=q;Te;Te=ao(Te))te++;for(;0<H-te;)Ve=ao(Ve),H--;for(;0<te-H;)q=ao(q),te--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=ao(Ve),q=ao(q)}Ve=null}else Ve=null;Ie!==null&&vm(ye,ge,Ie,Ve,!1),ze!==null&&Kt!==null&&vm(ye,Kt,ze,Ve,!0)}}e:{if(ge=se?uo(se):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Xe=Kx;else if(Zp(ge))if(Jp)Xe=ey;else{Xe=Qx;var $e=Zx}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=Jx);if(Xe&&(Xe=Xe(n,se))){Qp(ye,Xe,l,ve);break e}$e&&$e(n,ge,se),n==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch($e=se?uo(se):window,n){case"focusin":(Zp($e)||$e.contentEditable==="true")&&(so=$e,Wc=se,ya=null);break;case"focusout":ya=Wc=so=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,am(ye,l,ve);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":am(ye,l,ve)}var Ke;if(Bc)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ro?$p(n,l)&&(tt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(tt="onCompositionStart");tt&&(jp&&l.locale!=="ko"&&(ro||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ro&&(Ke=Vp()):(Ur=ve,Uc="value"in Ur?Ur.value:Ur.textContent,ro=!0)),$e=Nl(se,tt),0<$e.length&&(tt=new Wp(tt,n,null,l,ve),ye.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=Kp(l),Ke!==null&&(tt.data=Ke)))),(Ke=Xx?jx(n,l):Yx(n,l))&&(se=Nl(se,"onBeforeInput"),0<se.length&&(ve=new Wp("onBeforeInput","beforeinput",null,l,ve),ye.push({event:ve,listeners:se}),ve.data=Ke))}gm(ye,r)})}function Ea(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Nl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Rn(n,l),x!=null&&f.unshift(Ea(n,x,m)),x=Rn(n,r),x!=null&&f.push(Ea(n,x,m))),n=n.return}return f}function ao(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vm(n,r,l,f,m){for(var x=r._reactName,w=[];l!==null&&l!==f;){var F=l,V=F.alternate,se=F.stateNode;if(V!==null&&V===f)break;F.tag===5&&se!==null&&(F=se,m?(V=Rn(l,x),V!=null&&w.unshift(Ea(l,V,F))):m||(V=Rn(l,x),V!=null&&w.push(Ea(l,V,F)))),l=l.return}w.length!==0&&n.push({event:r,listeners:w})}var ay=/\r\n?/g,ly=/\u0000|\uFFFD/g;function xm(n){return(typeof n=="string"?n:""+n).replace(ay,`
`).replace(ly,"")}function Fl(n,r,l){if(r=xm(r),xm(n)!==r&&l)throw Error(t(425))}function Ol(){}var Zc=null,Qc=null;function Jc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ef=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(n){return ym.resolve(null).then(n).catch(fy)}:ef;function fy(n){setTimeout(function(){throw n})}function tf(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),ha(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);ha(r)}function Fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Sm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var lo=Math.random().toString(36).slice(2),Gi="__reactFiber$"+lo,Ta="__reactProps$"+lo,sr="__reactContainer$"+lo,nf="__reactEvents$"+lo,dy="__reactListeners$"+lo,hy="__reactHandles$"+lo;function _s(n){var r=n[Gi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[sr]||l[Gi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Sm(n);n!==null;){if(l=n[Gi])return l;n=Sm(n)}return r}n=l,l=n.parentNode}return null}function wa(n){return n=n[Gi]||n[sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function uo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function kl(n){return n[Ta]||null}var rf=[],co=-1;function Or(n){return{current:n}}function zt(n){0>co||(n.current=rf[co],rf[co]=null,co--)}function Ft(n,r){co++,rf[co]=n.current,n.current=r}var kr={},vn=Or(kr),On=Or(!1),vs=kr;function fo(n,r){var l=n.type.contextTypes;if(!l)return kr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=r[x];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function kn(n){return n=n.childContextTypes,n!=null}function zl(){zt(On),zt(vn)}function Mm(n,r,l){if(vn.current!==kr)throw Error(t(168));Ft(vn,r),Ft(On,l)}function Em(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,xe(n)||"Unknown",m));return ue({},l,f)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,vs=vn.current,Ft(vn,n),Ft(On,On.current),!0}function Tm(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=Em(n,r,vs),f.__reactInternalMemoizedMergedChildContext=n,zt(On),zt(vn),Ft(vn,n)):zt(On),Ft(On,l)}var or=null,Vl=!1,sf=!1;function wm(n){or===null?or=[n]:or.push(n)}function py(n){Vl=!0,wm(n)}function zr(){if(!sf&&or!==null){sf=!0;var n=0,r=Ct;try{var l=or;for(Ct=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}or=null,Vl=!1}catch(m){throw or!==null&&(or=or.slice(n+1)),oe(Be,zr),m}finally{Ct=r,sf=!1}}return null}var ho=[],po=0,Hl=null,Gl=0,pi=[],mi=0,xs=null,ar=1,lr="";function ys(n,r){ho[po++]=Gl,ho[po++]=Hl,Hl=n,Gl=r}function Am(n,r,l){pi[mi++]=ar,pi[mi++]=lr,pi[mi++]=xs,xs=n;var f=ar;n=lr;var m=32-st(f)-1;f&=~(1<<m),l+=1;var x=32-st(r)+m;if(30<x){var w=m-m%5;x=(f&(1<<w)-1).toString(32),f>>=w,m-=w,ar=1<<32-st(r)+m|l<<m|f,lr=x+n}else ar=1<<x|l<<m|f,lr=n}function of(n){n.return!==null&&(ys(n,1),Am(n,1,0))}function af(n){for(;n===Hl;)Hl=ho[--po],ho[po]=null,Gl=ho[--po],ho[po]=null;for(;n===xs;)xs=pi[--mi],pi[mi]=null,lr=pi[--mi],pi[mi]=null,ar=pi[--mi],pi[mi]=null}var Jn=null,ei=null,Vt=!1,bi=null;function Cm(n,r){var l=xi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Rm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Jn=n,ei=Fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Jn=n,ei=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=xs!==null?{id:ar,overflow:lr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=xi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Jn=n,ei=null,!0):!1;default:return!1}}function lf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uf(n){if(Vt){var r=ei;if(r){var l=r;if(!Rm(n,r)){if(lf(n))throw Error(t(418));r=Fr(l.nextSibling);var f=Jn;r&&Rm(n,r)?Cm(f,l):(n.flags=n.flags&-4097|2,Vt=!1,Jn=n)}}else{if(lf(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Jn=n}}}function bm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function Wl(n){if(n!==Jn)return!1;if(!Vt)return bm(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Jc(n.type,n.memoizedProps)),r&&(r=ei)){if(lf(n))throw Pm(),Error(t(418));for(;r;)Cm(n,r),r=Fr(r.nextSibling)}if(bm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ei=Fr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ei=null}}else ei=Jn?Fr(n.stateNode.nextSibling):null;return!0}function Pm(){for(var n=ei;n;)n=Fr(n.nextSibling)}function mo(){ei=Jn=null,Vt=!1}function cf(n){bi===null?bi=[n]:bi.push(n)}var my=C.ReactCurrentBatchConfig;function Aa(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(w){var F=m.refs;w===null?delete F[x]:F[x]=w},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Xl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Lm(n){var r=n._init;return r(n._payload)}function Dm(n){function r(q,H){if(n){var te=q.deletions;te===null?(q.deletions=[H],q.flags|=16):te.push(H)}}function l(q,H){if(!n)return null;for(;H!==null;)r(q,H),H=H.sibling;return null}function f(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function m(q,H){return q=Yr(q,H),q.index=0,q.sibling=null,q}function x(q,H,te){return q.index=te,n?(te=q.alternate,te!==null?(te=te.index,te<H?(q.flags|=2,H):te):(q.flags|=2,H)):(q.flags|=1048576,H)}function w(q){return n&&q.alternate===null&&(q.flags|=2),q}function F(q,H,te,Te){return H===null||H.tag!==6?(H=td(te,q.mode,Te),H.return=q,H):(H=m(H,te),H.return=q,H)}function V(q,H,te,Te){var Xe=te.type;return Xe===D?ve(q,H,te.props.children,Te,te.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===K&&Lm(Xe)===H.type)?(Te=m(H,te.props),Te.ref=Aa(q,H,te),Te.return=q,Te):(Te=mu(te.type,te.key,te.props,null,q.mode,Te),Te.ref=Aa(q,H,te),Te.return=q,Te)}function se(q,H,te,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==te.containerInfo||H.stateNode.implementation!==te.implementation?(H=nd(te,q.mode,Te),H.return=q,H):(H=m(H,te.children||[]),H.return=q,H)}function ve(q,H,te,Te,Xe){return H===null||H.tag!==7?(H=Rs(te,q.mode,Te,Xe),H.return=q,H):(H=m(H,te),H.return=q,H)}function ye(q,H,te){if(typeof H=="string"&&H!==""||typeof H=="number")return H=td(""+H,q.mode,te),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case N:return te=mu(H.type,H.key,H.props,null,q.mode,te),te.ref=Aa(q,null,H),te.return=q,te;case U:return H=nd(H,q.mode,te),H.return=q,H;case K:var Te=H._init;return ye(q,Te(H._payload),te)}if(Ye(H)||ce(H))return H=Rs(H,q.mode,te,null),H.return=q,H;Xl(q,H)}return null}function ge(q,H,te,Te){var Xe=H!==null?H.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Xe!==null?null:F(q,H,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case N:return te.key===Xe?V(q,H,te,Te):null;case U:return te.key===Xe?se(q,H,te,Te):null;case K:return Xe=te._init,ge(q,H,Xe(te._payload),Te)}if(Ye(te)||ce(te))return Xe!==null?null:ve(q,H,te,Te,null);Xl(q,te)}return null}function Ie(q,H,te,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(te)||null,F(H,q,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case N:return q=q.get(Te.key===null?te:Te.key)||null,V(H,q,Te,Xe);case U:return q=q.get(Te.key===null?te:Te.key)||null,se(H,q,Te,Xe);case K:var $e=Te._init;return Ie(q,H,te,$e(Te._payload),Xe)}if(Ye(Te)||ce(Te))return q=q.get(te)||null,ve(H,q,Te,Xe,null);Xl(H,Te)}return null}function ze(q,H,te,Te){for(var Xe=null,$e=null,Ke=H,tt=H=0,cn=null;Ke!==null&&tt<te.length;tt++){Ke.index>tt?(cn=Ke,Ke=null):cn=Ke.sibling;var Mt=ge(q,Ke,te[tt],Te);if(Mt===null){Ke===null&&(Ke=cn);break}n&&Ke&&Mt.alternate===null&&r(q,Ke),H=x(Mt,H,tt),$e===null?Xe=Mt:$e.sibling=Mt,$e=Mt,Ke=cn}if(tt===te.length)return l(q,Ke),Vt&&ys(q,tt),Xe;if(Ke===null){for(;tt<te.length;tt++)Ke=ye(q,te[tt],Te),Ke!==null&&(H=x(Ke,H,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Vt&&ys(q,tt),Xe}for(Ke=f(q,Ke);tt<te.length;tt++)cn=Ie(Ke,q,tt,te[tt],Te),cn!==null&&(n&&cn.alternate!==null&&Ke.delete(cn.key===null?tt:cn.key),H=x(cn,H,tt),$e===null?Xe=cn:$e.sibling=cn,$e=cn);return n&&Ke.forEach(function(qr){return r(q,qr)}),Vt&&ys(q,tt),Xe}function Ve(q,H,te,Te){var Xe=ce(te);if(typeof Xe!="function")throw Error(t(150));if(te=Xe.call(te),te==null)throw Error(t(151));for(var $e=Xe=null,Ke=H,tt=H=0,cn=null,Mt=te.next();Ke!==null&&!Mt.done;tt++,Mt=te.next()){Ke.index>tt?(cn=Ke,Ke=null):cn=Ke.sibling;var qr=ge(q,Ke,Mt.value,Te);if(qr===null){Ke===null&&(Ke=cn);break}n&&Ke&&qr.alternate===null&&r(q,Ke),H=x(qr,H,tt),$e===null?Xe=qr:$e.sibling=qr,$e=qr,Ke=cn}if(Mt.done)return l(q,Ke),Vt&&ys(q,tt),Xe;if(Ke===null){for(;!Mt.done;tt++,Mt=te.next())Mt=ye(q,Mt.value,Te),Mt!==null&&(H=x(Mt,H,tt),$e===null?Xe=Mt:$e.sibling=Mt,$e=Mt);return Vt&&ys(q,tt),Xe}for(Ke=f(q,Ke);!Mt.done;tt++,Mt=te.next())Mt=Ie(Ke,q,tt,Mt.value,Te),Mt!==null&&(n&&Mt.alternate!==null&&Ke.delete(Mt.key===null?tt:Mt.key),H=x(Mt,H,tt),$e===null?Xe=Mt:$e.sibling=Mt,$e=Mt);return n&&Ke.forEach(function(qy){return r(q,qy)}),Vt&&ys(q,tt),Xe}function Kt(q,H,te,Te){if(typeof te=="object"&&te!==null&&te.type===D&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case N:e:{for(var Xe=te.key,$e=H;$e!==null;){if($e.key===Xe){if(Xe=te.type,Xe===D){if($e.tag===7){l(q,$e.sibling),H=m($e,te.props.children),H.return=q,q=H;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===K&&Lm(Xe)===$e.type){l(q,$e.sibling),H=m($e,te.props),H.ref=Aa(q,$e,te),H.return=q,q=H;break e}l(q,$e);break}else r(q,$e);$e=$e.sibling}te.type===D?(H=Rs(te.props.children,q.mode,Te,te.key),H.return=q,q=H):(Te=mu(te.type,te.key,te.props,null,q.mode,Te),Te.ref=Aa(q,H,te),Te.return=q,q=Te)}return w(q);case U:e:{for($e=te.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===te.containerInfo&&H.stateNode.implementation===te.implementation){l(q,H.sibling),H=m(H,te.children||[]),H.return=q,q=H;break e}else{l(q,H);break}else r(q,H);H=H.sibling}H=nd(te,q.mode,Te),H.return=q,q=H}return w(q);case K:return $e=te._init,Kt(q,H,$e(te._payload),Te)}if(Ye(te))return ze(q,H,te,Te);if(ce(te))return Ve(q,H,te,Te);Xl(q,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,H!==null&&H.tag===6?(l(q,H.sibling),H=m(H,te),H.return=q,q=H):(l(q,H),H=td(te,q.mode,Te),H.return=q,q=H),w(q)):l(q,H)}return Kt}var go=Dm(!0),Im=Dm(!1),jl=Or(null),Yl=null,_o=null,ff=null;function df(){ff=_o=Yl=null}function hf(n){var r=jl.current;zt(jl),n._currentValue=r}function pf(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function vo(n,r){Yl=n,ff=_o=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(zn=!0),n.firstContext=null)}function gi(n){var r=n._currentValue;if(ff!==n)if(n={context:n,memoizedValue:r,next:null},_o===null){if(Yl===null)throw Error(t(308));_o=n,Yl.dependencies={lanes:0,firstContext:n}}else _o=_o.next=n;return r}var Ss=null;function mf(n){Ss===null?Ss=[n]:Ss.push(n)}function Um(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,mf(r)):(l.next=m.next,m.next=l),r.interleaved=l,ur(n,f)}function ur(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Br=!1;function gf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Vr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(xt&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,ur(n,l)}return m=f.interleaved,m===null?(r.next=r,mf(f)):(r.next=m.next,m.next=r),f.interleaved=r,ur(n,l)}function ql(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,bc(n,l)}}function Fm(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=w:x=x.next=w,l=l.next}while(l!==null);x===null?m=x=r:x=x.next=r}else m=x=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function $l(n,r,l,f){var m=n.updateQueue;Br=!1;var x=m.firstBaseUpdate,w=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var V=F,se=V.next;V.next=null,w===null?x=se:w.next=se,w=V;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,F=ve.lastBaseUpdate,F!==w&&(F===null?ve.firstBaseUpdate=se:F.next=se,ve.lastBaseUpdate=V))}if(x!==null){var ye=m.baseState;w=0,ve=se=V=null,F=x;do{var ge=F.lane,Ie=F.eventTime;if((f&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var ze=n,Ve=F;switch(ge=r,Ie=l,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ye=ze.call(Ie,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(Ie,ye,ge):ze,ge==null)break e;ye=ue({},ye,ge);break e;case 2:Br=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ge=m.effects,ge===null?m.effects=[F]:ge.push(F))}else Ie={eventTime:Ie,lane:ge,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ve===null?(se=ve=Ie,V=ye):ve=ve.next=Ie,w|=ge;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;ge=F,F=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(ve===null&&(V=ye),m.baseState=V,m.firstBaseUpdate=se,m.lastBaseUpdate=ve,r=m.shared.interleaved,r!==null){m=r;do w|=m.lane,m=m.next;while(m!==r)}else x===null&&(m.shared.lanes=0);Ts|=w,n.lanes=w,n.memoizedState=ye}}function Om(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Ca={},Wi=Or(Ca),Ra=Or(Ca),ba=Or(Ca);function Ms(n){if(n===Ca)throw Error(t(174));return n}function _f(n,r){switch(Ft(ba,r),Ft(Ra,n),Ft(Wi,Ca),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=He(r,n)}zt(Wi),Ft(Wi,r)}function xo(){zt(Wi),zt(Ra),zt(ba)}function km(n){Ms(ba.current);var r=Ms(Wi.current),l=He(r,n.type);r!==l&&(Ft(Ra,n),Ft(Wi,l))}function vf(n){Ra.current===n&&(zt(Wi),zt(Ra))}var Gt=Or(0);function Kl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var xf=[];function yf(){for(var n=0;n<xf.length;n++)xf[n]._workInProgressVersionPrimary=null;xf.length=0}var Zl=C.ReactCurrentDispatcher,Sf=C.ReactCurrentBatchConfig,Es=0,Wt=null,rn=null,ln=null,Ql=!1,Pa=!1,La=0,gy=0;function xn(){throw Error(t(321))}function Mf(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ri(n[l],r[l]))return!1;return!0}function Ef(n,r,l,f,m,x){if(Es=x,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Zl.current=n===null||n.memoizedState===null?yy:Sy,n=l(f,m),Pa){x=0;do{if(Pa=!1,La=0,25<=x)throw Error(t(301));x+=1,ln=rn=null,r.updateQueue=null,Zl.current=My,n=l(f,m)}while(Pa)}if(Zl.current=tu,r=rn!==null&&rn.next!==null,Es=0,ln=rn=Wt=null,Ql=!1,r)throw Error(t(300));return n}function Tf(){var n=La!==0;return La=0,n}function Xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Wt.memoizedState=ln=n:ln=ln.next=n,ln}function _i(){if(rn===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var r=ln===null?Wt.memoizedState:ln.next;if(r!==null)ln=r,rn=n;else{if(n===null)throw Error(t(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},ln===null?Wt.memoizedState=ln=n:ln=ln.next=n}return ln}function Da(n,r){return typeof r=="function"?r(n):r}function wf(n){var r=_i(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=rn,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var w=m.next;m.next=x.next,x.next=w}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var F=w=null,V=null,se=x;do{var ve=se.lane;if((Es&ve)===ve)V!==null&&(V=V.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),f=se.hasEagerState?se.eagerState:n(f,se.action);else{var ye={lane:ve,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};V===null?(F=V=ye,w=f):V=V.next=ye,Wt.lanes|=ve,Ts|=ve}se=se.next}while(se!==null&&se!==x);V===null?w=f:V.next=F,Ri(f,r.memoizedState)||(zn=!0),r.memoizedState=f,r.baseState=w,r.baseQueue=V,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do x=m.lane,Wt.lanes|=x,Ts|=x,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Af(n){var r=_i(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,x=r.memoizedState;if(m!==null){l.pending=null;var w=m=m.next;do x=n(x,w.action),w=w.next;while(w!==m);Ri(x,r.memoizedState)||(zn=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,f]}function zm(){}function Bm(n,r){var l=Wt,f=_i(),m=r(),x=!Ri(f.memoizedState,m);if(x&&(f.memoizedState=m,zn=!0),f=f.queue,Cf(Gm.bind(null,l,f,n),[n]),f.getSnapshot!==r||x||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,Ia(9,Hm.bind(null,l,f,m,r),void 0,null),un===null)throw Error(t(349));(Es&30)!==0||Vm(l,r,m)}return m}function Vm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Hm(n,r,l,f){r.value=l,r.getSnapshot=f,Wm(r)&&Xm(n)}function Gm(n,r,l){return l(function(){Wm(r)&&Xm(n)})}function Wm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ri(n,l)}catch{return!0}}function Xm(n){var r=ur(n,1);r!==null&&Ii(r,n,1,-1)}function jm(n){var r=Xi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},r.queue=n,n=n.dispatch=xy.bind(null,Wt,n),[r.memoizedState,n]}function Ia(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Ym(){return _i().memoizedState}function Jl(n,r,l,f){var m=Xi();Wt.flags|=n,m.memoizedState=Ia(1|r,l,void 0,f===void 0?null:f)}function eu(n,r,l,f){var m=_i();f=f===void 0?null:f;var x=void 0;if(rn!==null){var w=rn.memoizedState;if(x=w.destroy,f!==null&&Mf(f,w.deps)){m.memoizedState=Ia(r,l,x,f);return}}Wt.flags|=n,m.memoizedState=Ia(1|r,l,x,f)}function qm(n,r){return Jl(8390656,8,n,r)}function Cf(n,r){return eu(2048,8,n,r)}function $m(n,r){return eu(4,2,n,r)}function Km(n,r){return eu(4,4,n,r)}function Zm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Qm(n,r,l){return l=l!=null?l.concat([n]):null,eu(4,4,Zm.bind(null,r,n),l)}function Rf(){}function Jm(n,r){var l=_i();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Mf(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function eg(n,r){var l=_i();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Mf(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function tg(n,r,l){return(Es&21)===0?(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=l):(Ri(l,r)||(l=bn(),Wt.lanes|=l,Ts|=l,n.baseState=!0),r)}function _y(n,r){var l=Ct;Ct=l!==0&&4>l?l:4,n(!0);var f=Sf.transition;Sf.transition={};try{n(!1),r()}finally{Ct=l,Sf.transition=f}}function ng(){return _i().memoizedState}function vy(n,r,l){var f=Xr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},ig(n))rg(r,l);else if(l=Um(n,r,l,f),l!==null){var m=Ln();Ii(l,n,f,m),sg(l,r,f)}}function xy(n,r,l){var f=Xr(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(ig(n))rg(r,m);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var w=r.lastRenderedState,F=x(w,l);if(m.hasEagerState=!0,m.eagerState=F,Ri(F,w)){var V=r.interleaved;V===null?(m.next=m,mf(r)):(m.next=V.next,V.next=m),r.interleaved=m;return}}catch{}finally{}l=Um(n,r,m,f),l!==null&&(m=Ln(),Ii(l,n,f,m),sg(l,r,f))}}function ig(n){var r=n.alternate;return n===Wt||r!==null&&r===Wt}function rg(n,r){Pa=Ql=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function sg(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,bc(n,l)}}var tu={readContext:gi,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},yy={readContext:gi,useCallback:function(n,r){return Xi().memoizedState=[n,r===void 0?null:r],n},useContext:gi,useEffect:qm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Jl(4194308,4,Zm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Jl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Jl(4,2,n,r)},useMemo:function(n,r){var l=Xi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Xi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=vy.bind(null,Wt,n),[f.memoizedState,n]},useRef:function(n){var r=Xi();return n={current:n},r.memoizedState=n},useState:jm,useDebugValue:Rf,useDeferredValue:function(n){return Xi().memoizedState=n},useTransition:function(){var n=jm(!1),r=n[0];return n=_y.bind(null,n[1]),Xi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Wt,m=Xi();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),un===null)throw Error(t(349));(Es&30)!==0||Vm(f,r,l)}m.memoizedState=l;var x={value:l,getSnapshot:r};return m.queue=x,qm(Gm.bind(null,f,x,n),[n]),f.flags|=2048,Ia(9,Hm.bind(null,f,x,l,r),void 0,null),l},useId:function(){var n=Xi(),r=un.identifierPrefix;if(Vt){var l=lr,f=ar;l=(f&~(1<<32-st(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=La++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=gy++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Sy={readContext:gi,useCallback:Jm,useContext:gi,useEffect:Cf,useImperativeHandle:Qm,useInsertionEffect:$m,useLayoutEffect:Km,useMemo:eg,useReducer:wf,useRef:Ym,useState:function(){return wf(Da)},useDebugValue:Rf,useDeferredValue:function(n){var r=_i();return tg(r,rn.memoizedState,n)},useTransition:function(){var n=wf(Da)[0],r=_i().memoizedState;return[n,r]},useMutableSource:zm,useSyncExternalStore:Bm,useId:ng,unstable_isNewReconciler:!1},My={readContext:gi,useCallback:Jm,useContext:gi,useEffect:Cf,useImperativeHandle:Qm,useInsertionEffect:$m,useLayoutEffect:Km,useMemo:eg,useReducer:Af,useRef:Ym,useState:function(){return Af(Da)},useDebugValue:Rf,useDeferredValue:function(n){var r=_i();return rn===null?r.memoizedState=n:tg(r,rn.memoizedState,n)},useTransition:function(){var n=Af(Da)[0],r=_i().memoizedState;return[n,r]},useMutableSource:zm,useSyncExternalStore:Bm,useId:ng,unstable_isNewReconciler:!1};function Pi(n,r){if(n&&n.defaultProps){r=ue({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function bf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:ue({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var nu={isMounted:function(n){return(n=n._reactInternals)?Vi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Ln(),m=Xr(n),x=cr(f,m);x.payload=r,l!=null&&(x.callback=l),r=Vr(n,x,m),r!==null&&(Ii(r,n,m,f),ql(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Ln(),m=Xr(n),x=cr(f,m);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=Vr(n,x,m),r!==null&&(Ii(r,n,m,f),ql(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Ln(),f=Xr(n),m=cr(l,f);m.tag=2,r!=null&&(m.callback=r),r=Vr(n,m,f),r!==null&&(Ii(r,n,f,l),ql(r,n,f))}};function og(n,r,l,f,m,x,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,x,w):r.prototype&&r.prototype.isPureReactComponent?!xa(l,f)||!xa(m,x):!0}function ag(n,r,l){var f=!1,m=kr,x=r.contextType;return typeof x=="object"&&x!==null?x=gi(x):(m=kn(r)?vs:vn.current,f=r.contextTypes,x=(f=f!=null)?fo(n,m):kr),r=new r(l,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=nu,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=x),r}function lg(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&nu.enqueueReplaceState(r,r.state,null)}function Pf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},gf(n);var x=r.contextType;typeof x=="object"&&x!==null?m.context=gi(x):(x=kn(r)?vs:vn.current,m.context=fo(n,x)),m.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(bf(n,r,x,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&nu.enqueueReplaceState(m,m.state,null),$l(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function yo(n,r){try{var l="",f=r;do l+=de(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:m,digest:null}}function Lf(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Df(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Ey=typeof WeakMap=="function"?WeakMap:Map;function ug(n,r,l){l=cr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){uu||(uu=!0,Yf=f),Df(n,r)},l}function cg(n,r,l){l=cr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Df(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Df(n,r),typeof f!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),l}function fg(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new Ey;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=Oy.bind(null,n,r,l),r.then(n,n))}function dg(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function hg(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=cr(-1,1),r.tag=2,Vr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Ty=C.ReactCurrentOwner,zn=!1;function Pn(n,r,l,f){r.child=n===null?Im(r,null,l,f):go(r,n.child,l,f)}function pg(n,r,l,f,m){l=l.render;var x=r.ref;return vo(r,m),f=Ef(n,r,l,f,x,m),l=Tf(),n!==null&&!zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,fr(n,r,m)):(Vt&&l&&of(r),r.flags|=1,Pn(n,r,f,m),r.child)}function mg(n,r,l,f,m){if(n===null){var x=l.type;return typeof x=="function"&&!ed(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,gg(n,r,x,f,m)):(n=mu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&m)===0){var w=x.memoizedProps;if(l=l.compare,l=l!==null?l:xa,l(w,f)&&n.ref===r.ref)return fr(n,r,m)}return r.flags|=1,n=Yr(x,f),n.ref=r.ref,n.return=r,r.child=n}function gg(n,r,l,f,m){if(n!==null){var x=n.memoizedProps;if(xa(x,f)&&n.ref===r.ref)if(zn=!1,r.pendingProps=f=x,(n.lanes&m)!==0)(n.flags&131072)!==0&&(zn=!0);else return r.lanes=n.lanes,fr(n,r,m)}return If(n,r,l,f,m)}function _g(n,r,l){var f=r.pendingProps,m=f.children,x=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Mo,ti),ti|=l;else{if((l&1073741824)===0)return n=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(Mo,ti),ti|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,Ft(Mo,ti),ti|=f}else x!==null?(f=x.baseLanes|l,r.memoizedState=null):f=l,Ft(Mo,ti),ti|=f;return Pn(n,r,m,l),r.child}function vg(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function If(n,r,l,f,m){var x=kn(l)?vs:vn.current;return x=fo(r,x),vo(r,m),l=Ef(n,r,l,f,x,m),f=Tf(),n!==null&&!zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,fr(n,r,m)):(Vt&&f&&of(r),r.flags|=1,Pn(n,r,l,m),r.child)}function xg(n,r,l,f,m){if(kn(l)){var x=!0;Bl(r)}else x=!1;if(vo(r,m),r.stateNode===null)ru(n,r),ag(r,l,f),Pf(r,l,f,m),f=!0;else if(n===null){var w=r.stateNode,F=r.memoizedProps;w.props=F;var V=w.context,se=l.contextType;typeof se=="object"&&se!==null?se=gi(se):(se=kn(l)?vs:vn.current,se=fo(r,se));var ve=l.getDerivedStateFromProps,ye=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==f||V!==se)&&lg(r,w,f,se),Br=!1;var ge=r.memoizedState;w.state=ge,$l(r,f,w,m),V=r.memoizedState,F!==f||ge!==V||On.current||Br?(typeof ve=="function"&&(bf(r,l,ve,f),V=r.memoizedState),(F=Br||og(r,l,F,f,ge,V,se))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=V),w.props=f,w.state=V,w.context=se,f=F):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{w=r.stateNode,Nm(n,r),F=r.memoizedProps,se=r.type===r.elementType?F:Pi(r.type,F),w.props=se,ye=r.pendingProps,ge=w.context,V=l.contextType,typeof V=="object"&&V!==null?V=gi(V):(V=kn(l)?vs:vn.current,V=fo(r,V));var Ie=l.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==ye||ge!==V)&&lg(r,w,f,V),Br=!1,ge=r.memoizedState,w.state=ge,$l(r,f,w,m);var ze=r.memoizedState;F!==ye||ge!==ze||On.current||Br?(typeof Ie=="function"&&(bf(r,l,Ie,f),ze=r.memoizedState),(se=Br||og(r,l,se,f,ge,ze,V)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,ze,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,ze,V)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=ze),w.props=f,w.state=ze,w.context=V,f=se):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),f=!1)}return Uf(n,r,l,f,x,m)}function Uf(n,r,l,f,m,x){vg(n,r);var w=(r.flags&128)!==0;if(!f&&!w)return m&&Tm(r,l,!1),fr(n,r,x);f=r.stateNode,Ty.current=r;var F=w&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&w?(r.child=go(r,n.child,null,x),r.child=go(r,null,F,x)):Pn(n,r,F,x),r.memoizedState=f.state,m&&Tm(r,l,!0),r.child}function yg(n){var r=n.stateNode;r.pendingContext?Mm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Mm(n,r.context,!1),_f(n,r.containerInfo)}function Sg(n,r,l,f,m){return mo(),cf(m),r.flags|=256,Pn(n,r,l,f),r.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function Ff(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mg(n,r,l){var f=r.pendingProps,m=Gt.current,x=!1,w=(r.flags&128)!==0,F;if((F=w)||(F=n!==null&&n.memoizedState===null?!1:(m&2)!==0),F?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Ft(Gt,m&1),n===null)return uf(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=f.children,n=f.fallback,x?(f=r.mode,x=r.child,w={mode:"hidden",children:w},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=w):x=gu(w,f,0,null),n=Rs(n,f,l,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Ff(l),r.memoizedState=Nf,n):Of(r,w));if(m=n.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return wy(n,r,w,f,F,m,l);if(x){x=f.fallback,w=r.mode,m=n.child,F=m.sibling;var V={mode:"hidden",children:f.children};return(w&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=V,r.deletions=null):(f=Yr(m,V),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?x=Yr(F,x):(x=Rs(x,w,l,null),x.flags|=2),x.return=r,f.return=r,f.sibling=x,r.child=f,f=x,x=r.child,w=n.child.memoizedState,w=w===null?Ff(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},x.memoizedState=w,x.childLanes=n.childLanes&~l,r.memoizedState=Nf,f}return x=n.child,n=x.sibling,f=Yr(x,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Of(n,r){return r=gu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function iu(n,r,l,f){return f!==null&&cf(f),go(r,n.child,null,l),n=Of(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function wy(n,r,l,f,m,x,w){if(l)return r.flags&256?(r.flags&=-257,f=Lf(Error(t(422))),iu(n,r,w,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=f.fallback,m=r.mode,f=gu({mode:"visible",children:f.children},m,0,null),x=Rs(x,m,w,null),x.flags|=2,f.return=r,x.return=r,f.sibling=x,r.child=f,(r.mode&1)!==0&&go(r,n.child,null,w),r.child.memoizedState=Ff(w),r.memoizedState=Nf,x);if((r.mode&1)===0)return iu(n,r,w,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,x=Error(t(419)),f=Lf(x,f,void 0),iu(n,r,w,f)}if(F=(w&n.childLanes)!==0,zn||F){if(f=un,f!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|w))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,ur(n,m),Ii(f,n,m,-1))}return Jf(),f=Lf(Error(t(421))),iu(n,r,w,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=ky.bind(null,n),m._reactRetry=r,null):(n=x.treeContext,ei=Fr(m.nextSibling),Jn=r,Vt=!0,bi=null,n!==null&&(pi[mi++]=ar,pi[mi++]=lr,pi[mi++]=xs,ar=n.id,lr=n.overflow,xs=r),r=Of(r,f.children),r.flags|=4096,r)}function Eg(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),pf(n.return,r,l)}function kf(n,r,l,f,m){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function Tg(n,r,l){var f=r.pendingProps,m=f.revealOrder,x=f.tail;if(Pn(n,r,f.children,l),f=Gt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Eg(n,l,r);else if(n.tag===19)Eg(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Ft(Gt,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&Kl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),kf(r,!1,m,l,x);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&Kl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}kf(r,!0,l,null,x);break;case"together":kf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ru(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function fr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Ts|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Yr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Yr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Ay(n,r,l){switch(r.tag){case 3:yg(r),mo();break;case 5:km(r);break;case 1:kn(r.type)&&Bl(r);break;case 4:_f(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Ft(jl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Ft(Gt,Gt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Mg(n,r,l):(Ft(Gt,Gt.current&1),n=fr(n,r,l),n!==null?n.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return Tg(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ft(Gt,Gt.current),f)break;return null;case 22:case 23:return r.lanes=0,_g(n,r,l)}return fr(n,r,l)}var wg,zf,Ag,Cg;wg=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},zf=function(){},Ag=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,Ms(Wi.current);var x=null;switch(l){case"input":m=Y(n,m),f=Y(n,f),x=[];break;case"select":m=ue({},m,{value:void 0}),f=ue({},f,{value:void 0}),x=[];break;case"textarea":m=R(n,m),f=R(n,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Ol)}ct(l,f);var w;l=null;for(se in m)if(!f.hasOwnProperty(se)&&m.hasOwnProperty(se)&&m[se]!=null)if(se==="style"){var F=m[se];for(w in F)F.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(s.hasOwnProperty(se)?x||(x=[]):(x=x||[]).push(se,null));for(se in f){var V=f[se];if(F=m!=null?m[se]:void 0,f.hasOwnProperty(se)&&V!==F&&(V!=null||F!=null))if(se==="style")if(F){for(w in F)!F.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in V)V.hasOwnProperty(w)&&F[w]!==V[w]&&(l||(l={}),l[w]=V[w])}else l||(x||(x=[]),x.push(se,l)),l=V;else se==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(x=x||[]).push(se,V)):se==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(se,""+V):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(s.hasOwnProperty(se)?(V!=null&&se==="onScroll"&&kt("scroll",n),x||F===V||(x=[])):(x=x||[]).push(se,V))}l&&(x=x||[]).push("style",l);var se=x;(r.updateQueue=se)&&(r.flags|=4)}},Cg=function(n,r,l,f){l!==f&&(r.flags|=4)};function Ua(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function yn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function Cy(n,r,l){var f=r.pendingProps;switch(af(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(r),null;case 1:return kn(r.type)&&zl(),yn(r),null;case 3:return f=r.stateNode,xo(),zt(On),zt(vn),yf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(Wl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,bi!==null&&(Kf(bi),bi=null))),zf(n,r),yn(r),null;case 5:vf(r);var m=Ms(ba.current);if(l=r.type,n!==null&&r.stateNode!=null)Ag(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return yn(r),null}if(n=Ms(Wi.current),Wl(r)){f=r.stateNode,l=r.type;var x=r.memoizedProps;switch(f[Gi]=r,f[Ta]=x,n=(r.mode&1)!==0,l){case"dialog":kt("cancel",f),kt("close",f);break;case"iframe":case"object":case"embed":kt("load",f);break;case"video":case"audio":for(m=0;m<Sa.length;m++)kt(Sa[m],f);break;case"source":kt("error",f);break;case"img":case"image":case"link":kt("error",f),kt("load",f);break;case"details":kt("toggle",f);break;case"input":Cn(f,x),kt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},kt("invalid",f);break;case"textarea":ne(f,x),kt("invalid",f)}ct(l,x),m=null;for(var w in x)if(x.hasOwnProperty(w)){var F=x[w];w==="children"?typeof F=="string"?f.textContent!==F&&(x.suppressHydrationWarning!==!0&&Fl(f.textContent,F,n),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&Fl(f.textContent,F,n),m=["children",""+F]):s.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&kt("scroll",f)}switch(l){case"input":Rt(f),qe(f,x,!0);break;case"textarea":Rt(f),_e(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Ol)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=w.createElement(l,{is:f.is}):(n=w.createElement(l),l==="select"&&(w=n,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):n=w.createElementNS(n,l),n[Gi]=r,n[Ta]=f,wg(n,r,!1,!1),r.stateNode=n;e:{switch(w=it(l,f),l){case"dialog":kt("cancel",n),kt("close",n),m=f;break;case"iframe":case"object":case"embed":kt("load",n),m=f;break;case"video":case"audio":for(m=0;m<Sa.length;m++)kt(Sa[m],n);m=f;break;case"source":kt("error",n),m=f;break;case"img":case"image":case"link":kt("error",n),kt("load",n),m=f;break;case"details":kt("toggle",n),m=f;break;case"input":Cn(n,f),m=Y(n,f),kt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=ue({},f,{value:void 0}),kt("invalid",n);break;case"textarea":ne(n,f),m=R(n,f),kt("invalid",n);break;default:m=f}ct(l,m),F=m;for(x in F)if(F.hasOwnProperty(x)){var V=F[x];x==="style"?Je(n,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ne(n,V)):x==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&lt(n,V):typeof V=="number"&&lt(n,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?V!=null&&x==="onScroll"&&kt("scroll",n):V!=null&&b(n,x,V,w))}switch(l){case"input":Rt(n),qe(n,f,!1);break;case"textarea":Rt(n),_e(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Ae(f.value));break;case"select":n.multiple=!!f.multiple,x=f.value,x!=null?I(n,!!f.multiple,x,!1):f.defaultValue!=null&&I(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Ol)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return yn(r),null;case 6:if(n&&r.stateNode!=null)Cg(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ms(ba.current),Ms(Wi.current),Wl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Gi]=r,(x=f.nodeValue!==l)&&(n=Jn,n!==null))switch(n.tag){case 3:Fl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(f.nodeValue,l,(n.mode&1)!==0)}x&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Gi]=r,r.stateNode=f}return yn(r),null;case 13:if(zt(Gt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&ei!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Pm(),mo(),r.flags|=98560,x=!1;else if(x=Wl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Gi]=r}else mo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;yn(r),x=!1}else bi!==null&&(Kf(bi),bi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Gt.current&1)!==0?sn===0&&(sn=3):Jf())),r.updateQueue!==null&&(r.flags|=4),yn(r),null);case 4:return xo(),zf(n,r),n===null&&Ma(r.stateNode.containerInfo),yn(r),null;case 10:return hf(r.type._context),yn(r),null;case 17:return kn(r.type)&&zl(),yn(r),null;case 19:if(zt(Gt),x=r.memoizedState,x===null)return yn(r),null;if(f=(r.flags&128)!==0,w=x.rendering,w===null)if(f)Ua(x,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=Kl(n),w!==null){for(r.flags|=128,Ua(x,!1),f=w.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)x=l,n=f,x.flags&=14680066,w=x.alternate,w===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=w.childLanes,x.lanes=w.lanes,x.child=w.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=w.memoizedProps,x.memoizedState=w.memoizedState,x.updateQueue=w.updateQueue,x.type=w.type,n=w.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ft(Gt,Gt.current&1|2),r.child}n=n.sibling}x.tail!==null&&Me()>Eo&&(r.flags|=128,f=!0,Ua(x,!1),r.lanes=4194304)}else{if(!f)if(n=Kl(w),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ua(x,!0),x.tail===null&&x.tailMode==="hidden"&&!w.alternate&&!Vt)return yn(r),null}else 2*Me()-x.renderingStartTime>Eo&&l!==1073741824&&(r.flags|=128,f=!0,Ua(x,!1),r.lanes=4194304);x.isBackwards?(w.sibling=r.child,r.child=w):(l=x.last,l!==null?l.sibling=w:r.child=w,x.last=w)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Me(),r.sibling=null,l=Gt.current,Ft(Gt,f?l&1|2:l&1),r):(yn(r),null);case 22:case 23:return Qf(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ti&1073741824)!==0&&(yn(r),r.subtreeFlags&6&&(r.flags|=8192)):yn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Ry(n,r){switch(af(r),r.tag){case 1:return kn(r.type)&&zl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return xo(),zt(On),zt(vn),yf(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return vf(r),null;case 13:if(zt(Gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));mo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return zt(Gt),null;case 4:return xo(),null;case 10:return hf(r.type._context),null;case 22:case 23:return Qf(),null;case 24:return null;default:return null}}var su=!1,Sn=!1,by=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function So(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){qt(n,r,f)}else l.current=null}function Bf(n,r,l){try{l()}catch(f){qt(n,r,f)}}var Rg=!1;function Py(n,r){if(Zc=wl,n=om(),Gc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var w=0,F=-1,V=-1,se=0,ve=0,ye=n,ge=null;t:for(;;){for(var Ie;ye!==l||m!==0&&ye.nodeType!==3||(F=w+m),ye!==x||f!==0&&ye.nodeType!==3||(V=w+f),ye.nodeType===3&&(w+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)ge=ye,ye=Ie;for(;;){if(ye===n)break t;if(ge===l&&++se===m&&(F=w),ge===x&&++ve===f&&(V=w),(Ie=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ie}l=F===-1||V===-1?null:{start:F,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(Qc={focusedElem:n,selectionRange:l},wl=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var ze=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Kt=ze.memoizedState,q=r.stateNode,H=q.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:Pi(r.type,Ve),Kt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var te=r.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){qt(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return ze=Rg,Rg=!1,ze}function Na(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var x=m.destroy;m.destroy=void 0,x!==void 0&&Bf(r,l,x)}m=m.next}while(m!==f)}}function ou(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Vf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function bg(n){var r=n.alternate;r!==null&&(n.alternate=null,bg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gi],delete r[Ta],delete r[nf],delete r[dy],delete r[hy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pg(n){return n.tag===5||n.tag===3||n.tag===4}function Lg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Ol));else if(f!==4&&(n=n.child,n!==null))for(Hf(n,r,l),n=n.sibling;n!==null;)Hf(n,r,l),n=n.sibling}function Gf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Gf(n,r,l),n=n.sibling;n!==null;)Gf(n,r,l),n=n.sibling}var hn=null,Li=!1;function Hr(n,r,l){for(l=l.child;l!==null;)Dg(n,r,l),l=l.sibling}function Dg(n,r,l){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Tt,l)}catch{}switch(l.tag){case 5:Sn||So(l,r);case 6:var f=hn,m=Li;hn=null,Hr(n,r,l),hn=f,Li=m,hn!==null&&(Li?(n=hn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):hn.removeChild(l.stateNode));break;case 18:hn!==null&&(Li?(n=hn,l=l.stateNode,n.nodeType===8?tf(n.parentNode,l):n.nodeType===1&&tf(n,l),ha(n)):tf(hn,l.stateNode));break;case 4:f=hn,m=Li,hn=l.stateNode.containerInfo,Li=!0,Hr(n,r,l),hn=f,Li=m;break;case 0:case 11:case 14:case 15:if(!Sn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,w=x.destroy;x=x.tag,w!==void 0&&((x&2)!==0||(x&4)!==0)&&Bf(l,r,w),m=m.next}while(m!==f)}Hr(n,r,l);break;case 1:if(!Sn&&(So(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){qt(l,r,F)}Hr(n,r,l);break;case 21:Hr(n,r,l);break;case 22:l.mode&1?(Sn=(f=Sn)||l.memoizedState!==null,Hr(n,r,l),Sn=f):Hr(n,r,l);break;default:Hr(n,r,l)}}function Ig(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new by),r.forEach(function(f){var m=zy.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Di(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=n,w=r,F=w;e:for(;F!==null;){switch(F.tag){case 5:hn=F.stateNode,Li=!1;break e;case 3:hn=F.stateNode.containerInfo,Li=!0;break e;case 4:hn=F.stateNode.containerInfo,Li=!0;break e}F=F.return}if(hn===null)throw Error(t(160));Dg(x,w,m),hn=null,Li=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(se){qt(m,r,se)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ug(r,n),r=r.sibling}function Ug(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Di(r,n),ji(n),f&4){try{Na(3,n,n.return),ou(3,n)}catch(Ve){qt(n,n.return,Ve)}try{Na(5,n,n.return)}catch(Ve){qt(n,n.return,Ve)}}break;case 1:Di(r,n),ji(n),f&512&&l!==null&&So(l,l.return);break;case 5:if(Di(r,n),ji(n),f&512&&l!==null&&So(l,l.return),n.flags&32){var m=n.stateNode;try{lt(m,"")}catch(Ve){qt(n,n.return,Ve)}}if(f&4&&(m=n.stateNode,m!=null)){var x=n.memoizedProps,w=l!==null?l.memoizedProps:x,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&dt(m,x),it(F,w);var se=it(F,x);for(w=0;w<V.length;w+=2){var ve=V[w],ye=V[w+1];ve==="style"?Je(m,ye):ve==="dangerouslySetInnerHTML"?Ne(m,ye):ve==="children"?lt(m,ye):b(m,ve,ye,se)}switch(F){case"input":ut(m,x);break;case"textarea":me(m,x);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Ie=x.value;Ie!=null?I(m,!!x.multiple,Ie,!1):ge!==!!x.multiple&&(x.defaultValue!=null?I(m,!!x.multiple,x.defaultValue,!0):I(m,!!x.multiple,x.multiple?[]:"",!1))}m[Ta]=x}catch(Ve){qt(n,n.return,Ve)}}break;case 6:if(Di(r,n),ji(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,x=n.memoizedProps;try{m.nodeValue=x}catch(Ve){qt(n,n.return,Ve)}}break;case 3:if(Di(r,n),ji(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ha(r.containerInfo)}catch(Ve){qt(n,n.return,Ve)}break;case 4:Di(r,n),ji(n);break;case 13:Di(r,n),ji(n),m=n.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(jf=Me())),f&4&&Ig(n);break;case 22:if(ve=l!==null&&l.memoizedState!==null,n.mode&1?(Sn=(se=Sn)||ve,Di(r,n),Sn=se):Di(r,n),ji(n),f&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!ve&&(n.mode&1)!==0)for(Fe=n,ve=n.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(ge=Fe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Na(4,ge,ge.return);break;case 1:So(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){f=ge,l=ge.return;try{r=f,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(Ve){qt(f,l,Ve)}}break;case 5:So(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Og(ye);continue}}Ie!==null?(Ie.return=ge,Fe=Ie):Og(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{m=ye.stateNode,se?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=ye.stateNode,V=ye.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=Qe("display",w))}catch(Ve){qt(n,n.return,Ve)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=se?"":ye.memoizedProps}catch(Ve){qt(n,n.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Di(r,n),ji(n),f&4&&Ig(n);break;case 21:break;default:Di(r,n),ji(n)}}function ji(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Pg(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(lt(m,""),f.flags&=-33);var x=Lg(n);Gf(n,x,m);break;case 3:case 4:var w=f.stateNode.containerInfo,F=Lg(n);Hf(n,F,w);break;default:throw Error(t(161))}}catch(V){qt(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Ly(n,r,l){Fe=n,Ng(n)}function Ng(n,r,l){for(var f=(n.mode&1)!==0;Fe!==null;){var m=Fe,x=m.child;if(m.tag===22&&f){var w=m.memoizedState!==null||su;if(!w){var F=m.alternate,V=F!==null&&F.memoizedState!==null||Sn;F=su;var se=Sn;if(su=w,(Sn=V)&&!se)for(Fe=m;Fe!==null;)w=Fe,V=w.child,w.tag===22&&w.memoizedState!==null?kg(m):V!==null?(V.return=w,Fe=V):kg(m);for(;x!==null;)Fe=x,Ng(x),x=x.sibling;Fe=m,su=F,Sn=se}Fg(n)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,Fe=x):Fg(n)}}function Fg(n){for(;Fe!==null;){var r=Fe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Sn||ou(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Sn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Pi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Om(r,x,f);break;case 3:var w=r.updateQueue;if(w!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Om(r,w,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var se=r.alternate;if(se!==null){var ve=se.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ha(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Sn||r.flags&512&&Vf(r)}catch(ge){qt(r,r.return,ge)}}if(r===n){Fe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function Og(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function kg(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{ou(4,r)}catch(V){qt(r,l,V)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(V){qt(r,m,V)}}var x=r.return;try{Vf(r)}catch(V){qt(r,x,V)}break;case 5:var w=r.return;try{Vf(r)}catch(V){qt(r,w,V)}}}catch(V){qt(r,r.return,V)}if(r===n){Fe=null;break}var F=r.sibling;if(F!==null){F.return=r.return,Fe=F;break}Fe=r.return}}var Dy=Math.ceil,au=C.ReactCurrentDispatcher,Wf=C.ReactCurrentOwner,vi=C.ReactCurrentBatchConfig,xt=0,un=null,Qt=null,pn=0,ti=0,Mo=Or(0),sn=0,Fa=null,Ts=0,lu=0,Xf=0,Oa=null,Bn=null,jf=0,Eo=1/0,dr=null,uu=!1,Yf=null,Gr=null,cu=!1,Wr=null,fu=0,ka=0,qf=null,du=-1,hu=0;function Ln(){return(xt&6)!==0?Me():du!==-1?du:du=Me()}function Xr(n){return(n.mode&1)===0?1:(xt&2)!==0&&pn!==0?pn&-pn:my.transition!==null?(hu===0&&(hu=bn()),hu):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:Bp(n.type)),n)}function Ii(n,r,l,f){if(50<ka)throw ka=0,qf=null,Error(t(185));Fn(n,l,f),((xt&2)===0||n!==un)&&(n===un&&((xt&2)===0&&(lu|=l),sn===4&&jr(n,pn)),Vn(n,f),l===1&&xt===0&&(r.mode&1)===0&&(Eo=Me()+500,Vl&&zr()))}function Vn(n,r){var l=n.callbackNode;di(n,r);var f=Hi(n,n===un?pn:0);if(f===0)l!==null&&ae(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&ae(l),r===1)n.tag===0?py(Bg.bind(null,n)):wm(Bg.bind(null,n)),cy(function(){(xt&6)===0&&zr()}),l=null;else{switch(Dp(f)){case 1:l=Be;break;case 4:l=et;break;case 16:l=nt;break;case 536870912:l=gt;break;default:l=nt}l=qg(l,zg.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function zg(n,r){if(du=-1,hu=0,(xt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(To()&&n.callbackNode!==l)return null;var f=Hi(n,n===un?pn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=pu(n,f);else{r=f;var m=xt;xt|=2;var x=Hg();(un!==n||pn!==r)&&(dr=null,Eo=Me()+500,As(n,r));do try{Ny();break}catch(F){Vg(n,F)}while(!0);df(),au.current=x,xt=m,Qt!==null?r=0:(un=null,pn=0,r=sn)}if(r!==0){if(r===2&&(m=rr(n),m!==0&&(f=m,r=$f(n,m))),r===1)throw l=Fa,As(n,0),jr(n,f),Vn(n,Me()),l;if(r===6)jr(n,f);else{if(m=n.current.alternate,(f&30)===0&&!Iy(m)&&(r=pu(n,f),r===2&&(x=rr(n),x!==0&&(f=x,r=$f(n,x))),r===1))throw l=Fa,As(n,0),jr(n,f),Vn(n,Me()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Cs(n,Bn,dr);break;case 3:if(jr(n,f),(f&130023424)===f&&(r=jf+500-Me(),10<r)){if(Hi(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Ln(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=ef(Cs.bind(null,n,Bn,dr),r);break}Cs(n,Bn,dr);break;case 4:if(jr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var w=31-st(f);x=1<<w,w=r[w],w>m&&(m=w),f&=~x}if(f=m,f=Me()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*Dy(f/1960))-f,10<f){n.timeoutHandle=ef(Cs.bind(null,n,Bn,dr),f);break}Cs(n,Bn,dr);break;case 5:Cs(n,Bn,dr);break;default:throw Error(t(329))}}}return Vn(n,Me()),n.callbackNode===l?zg.bind(null,n):null}function $f(n,r){var l=Oa;return n.current.memoizedState.isDehydrated&&(As(n,r).flags|=256),n=pu(n,r),n!==2&&(r=Bn,Bn=l,r!==null&&Kf(r)),n}function Kf(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function Iy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!Ri(x(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jr(n,r){for(r&=~Xf,r&=~lu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-st(r),f=1<<l;n[l]=-1,r&=~f}}function Bg(n){if((xt&6)!==0)throw Error(t(327));To();var r=Hi(n,0);if((r&1)===0)return Vn(n,Me()),null;var l=pu(n,r);if(n.tag!==0&&l===2){var f=rr(n);f!==0&&(r=f,l=$f(n,f))}if(l===1)throw l=Fa,As(n,0),jr(n,r),Vn(n,Me()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Cs(n,Bn,dr),Vn(n,Me()),null}function Zf(n,r){var l=xt;xt|=1;try{return n(r)}finally{xt=l,xt===0&&(Eo=Me()+500,Vl&&zr())}}function ws(n){Wr!==null&&Wr.tag===0&&(xt&6)===0&&To();var r=xt;xt|=1;var l=vi.transition,f=Ct;try{if(vi.transition=null,Ct=1,n)return n()}finally{Ct=f,vi.transition=l,xt=r,(xt&6)===0&&zr()}}function Qf(){ti=Mo.current,zt(Mo)}function As(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,uy(l)),Qt!==null)for(l=Qt.return;l!==null;){var f=l;switch(af(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&zl();break;case 3:xo(),zt(On),zt(vn),yf();break;case 5:vf(f);break;case 4:xo();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:hf(f.type._context);break;case 22:case 23:Qf()}l=l.return}if(un=n,Qt=n=Yr(n.current,null),pn=ti=r,sn=0,Fa=null,Xf=lu=Ts=0,Bn=Oa=null,Ss!==null){for(r=0;r<Ss.length;r++)if(l=Ss[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var w=x.next;x.next=m,f.next=w}l.pending=f}Ss=null}return n}function Vg(n,r){do{var l=Qt;try{if(df(),Zl.current=tu,Ql){for(var f=Wt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Ql=!1}if(Es=0,ln=rn=Wt=null,Pa=!1,La=0,Wf.current=null,l===null||l.return===null){sn=1,Fa=r,Qt=null;break}e:{var x=n,w=l.return,F=l,V=r;if(r=pn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var se=V,ve=F,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=dg(w);if(Ie!==null){Ie.flags&=-257,hg(Ie,w,F,x,r),Ie.mode&1&&fg(x,se,r),r=Ie,V=se;var ze=r.updateQueue;if(ze===null){var Ve=new Set;Ve.add(V),r.updateQueue=Ve}else ze.add(V);break e}else{if((r&1)===0){fg(x,se,r),Jf();break e}V=Error(t(426))}}else if(Vt&&F.mode&1){var Kt=dg(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),hg(Kt,w,F,x,r),cf(yo(V,F));break e}}x=V=yo(V,F),sn!==4&&(sn=2),Oa===null?Oa=[x]:Oa.push(x),x=w;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var q=ug(x,V,r);Fm(x,q);break e;case 1:F=V;var H=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Gr===null||!Gr.has(te)))){x.flags|=65536,r&=-r,x.lanes|=r;var Te=cg(x,F,r);Fm(x,Te);break e}}x=x.return}while(x!==null)}Wg(l)}catch(Xe){r=Xe,Qt===l&&l!==null&&(Qt=l=l.return);continue}break}while(!0)}function Hg(){var n=au.current;return au.current=tu,n===null?tu:n}function Jf(){(sn===0||sn===3||sn===2)&&(sn=4),un===null||(Ts&268435455)===0&&(lu&268435455)===0||jr(un,pn)}function pu(n,r){var l=xt;xt|=2;var f=Hg();(un!==n||pn!==r)&&(dr=null,As(n,r));do try{Uy();break}catch(m){Vg(n,m)}while(!0);if(df(),xt=l,au.current=f,Qt!==null)throw Error(t(261));return un=null,pn=0,sn}function Uy(){for(;Qt!==null;)Gg(Qt)}function Ny(){for(;Qt!==null&&!j();)Gg(Qt)}function Gg(n){var r=Yg(n.alternate,n,ti);n.memoizedProps=n.pendingProps,r===null?Wg(n):Qt=r,Wf.current=null}function Wg(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Cy(l,r,ti),l!==null){Qt=l;return}}else{if(l=Ry(l,r),l!==null){l.flags&=32767,Qt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Qt=null;return}}if(r=r.sibling,r!==null){Qt=r;return}Qt=r=n}while(r!==null);sn===0&&(sn=5)}function Cs(n,r,l){var f=Ct,m=vi.transition;try{vi.transition=null,Ct=1,Fy(n,r,l,f)}finally{vi.transition=m,Ct=f}return null}function Fy(n,r,l,f){do To();while(Wr!==null);if((xt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(Ml(n,x),n===un&&(Qt=un=null,pn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||cu||(cu=!0,qg(nt,function(){return To(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=vi.transition,vi.transition=null;var w=Ct;Ct=1;var F=xt;xt|=4,Wf.current=null,Py(n,l),Ug(l,n),ny(Qc),wl=!!Zc,Qc=Zc=null,n.current=l,Ly(l),we(),xt=F,Ct=w,vi.transition=x}else n.current=l;if(cu&&(cu=!1,Wr=n,fu=m),x=n.pendingLanes,x===0&&(Gr=null),gn(l.stateNode),Vn(n,Me()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(uu)throw uu=!1,n=Yf,Yf=null,n;return(fu&1)!==0&&n.tag!==0&&To(),x=n.pendingLanes,(x&1)!==0?n===qf?ka++:(ka=0,qf=n):ka=0,zr(),null}function To(){if(Wr!==null){var n=Dp(fu),r=vi.transition,l=Ct;try{if(vi.transition=null,Ct=16>n?16:n,Wr===null)var f=!1;else{if(n=Wr,Wr=null,fu=0,(xt&6)!==0)throw Error(t(331));var m=xt;for(xt|=4,Fe=n.current;Fe!==null;){var x=Fe,w=x.child;if((Fe.flags&16)!==0){var F=x.deletions;if(F!==null){for(var V=0;V<F.length;V++){var se=F[V];for(Fe=se;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Na(8,ve,x)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,Ie=ve.return;if(bg(ve),ve===se){Fe=null;break}if(ge!==null){ge.return=Ie,Fe=ge;break}Fe=Ie}}}var ze=x.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Kt=Ve.sibling;Ve.sibling=null,Ve=Kt}while(Ve!==null)}}Fe=x}}if((x.subtreeFlags&2064)!==0&&w!==null)w.return=x,Fe=w;else e:for(;Fe!==null;){if(x=Fe,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Na(9,x,x.return)}var q=x.sibling;if(q!==null){q.return=x.return,Fe=q;break e}Fe=x.return}}var H=n.current;for(Fe=H;Fe!==null;){w=Fe;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Fe=te;else e:for(w=H;Fe!==null;){if(F=Fe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:ou(9,F)}}catch(Xe){qt(F,F.return,Xe)}if(F===w){Fe=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,Fe=Te;break e}Fe=F.return}}if(xt=m,zr(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Tt,n)}catch{}f=!0}return f}finally{Ct=l,vi.transition=r}}return!1}function Xg(n,r,l){r=yo(l,r),r=ug(n,r,1),n=Vr(n,r,1),r=Ln(),n!==null&&(Fn(n,1,r),Vn(n,r))}function qt(n,r,l){if(n.tag===3)Xg(n,n,l);else for(;r!==null;){if(r.tag===3){Xg(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Gr===null||!Gr.has(f))){n=yo(l,n),n=cg(r,n,1),r=Vr(r,n,1),n=Ln(),r!==null&&(Fn(r,1,n),Vn(r,n));break}}r=r.return}}function Oy(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Ln(),n.pingedLanes|=n.suspendedLanes&l,un===n&&(pn&l)===l&&(sn===4||sn===3&&(pn&130023424)===pn&&500>Me()-jf?As(n,0):Xf|=l),Vn(n,r)}function jg(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ci,Ci<<=1,(Ci&130023424)===0&&(Ci=4194304)));var l=Ln();n=ur(n,r),n!==null&&(Fn(n,r,l),Vn(n,l))}function ky(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),jg(n,l)}function zy(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),jg(n,l)}var Yg;Yg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||On.current)zn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return zn=!1,Ay(n,r,l);zn=(n.flags&131072)!==0}else zn=!1,Vt&&(r.flags&1048576)!==0&&Am(r,Gl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;ru(n,r),n=r.pendingProps;var m=fo(r,vn.current);vo(r,l),m=Ef(null,r,f,n,m,l);var x=Tf();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,kn(f)?(x=!0,Bl(r)):x=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,gf(r),m.updater=nu,r.stateNode=m,m._reactInternals=r,Pf(r,f,n,l),r=Uf(null,r,f,!0,x,l)):(r.tag=0,Vt&&x&&of(r),Pn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(ru(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=Vy(f),n=Pi(f,n),m){case 0:r=If(null,r,f,n,l);break e;case 1:r=xg(null,r,f,n,l);break e;case 11:r=pg(null,r,f,n,l);break e;case 14:r=mg(null,r,f,Pi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),If(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),xg(n,r,f,m,l);case 3:e:{if(yg(r),n===null)throw Error(t(387));f=r.pendingProps,x=r.memoizedState,m=x.element,Nm(n,r),$l(r,f,null,l);var w=r.memoizedState;if(f=w.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){m=yo(Error(t(423)),r),r=Sg(n,r,f,l,m);break e}else if(f!==m){m=yo(Error(t(424)),r),r=Sg(n,r,f,l,m);break e}else for(ei=Fr(r.stateNode.containerInfo.firstChild),Jn=r,Vt=!0,bi=null,l=Im(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(mo(),f===m){r=fr(n,r,l);break e}Pn(n,r,f,l)}r=r.child}return r;case 5:return km(r),n===null&&uf(r),f=r.type,m=r.pendingProps,x=n!==null?n.memoizedProps:null,w=m.children,Jc(f,m)?w=null:x!==null&&Jc(f,x)&&(r.flags|=32),vg(n,r),Pn(n,r,w,l),r.child;case 6:return n===null&&uf(r),null;case 13:return Mg(n,r,l);case 4:return _f(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=go(r,null,f,l):Pn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),pg(n,r,f,m,l);case 7:return Pn(n,r,r.pendingProps,l),r.child;case 8:return Pn(n,r,r.pendingProps.children,l),r.child;case 12:return Pn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,x=r.memoizedProps,w=m.value,Ft(jl,f._currentValue),f._currentValue=w,x!==null)if(Ri(x.value,w)){if(x.children===m.children&&!On.current){r=fr(n,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var F=x.dependencies;if(F!==null){w=x.child;for(var V=F.firstContext;V!==null;){if(V.context===f){if(x.tag===1){V=cr(-1,l&-l),V.tag=2;var se=x.updateQueue;if(se!==null){se=se.shared;var ve=se.pending;ve===null?V.next=V:(V.next=ve.next,ve.next=V),se.pending=V}}x.lanes|=l,V=x.alternate,V!==null&&(V.lanes|=l),pf(x.return,l,r),F.lanes|=l;break}V=V.next}}else if(x.tag===10)w=x.type===r.type?null:x.child;else if(x.tag===18){if(w=x.return,w===null)throw Error(t(341));w.lanes|=l,F=w.alternate,F!==null&&(F.lanes|=l),pf(w,l,r),w=x.sibling}else w=x.child;if(w!==null)w.return=x;else for(w=x;w!==null;){if(w===r){w=null;break}if(x=w.sibling,x!==null){x.return=w.return,w=x;break}w=w.return}x=w}Pn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,vo(r,l),m=gi(m),f=f(m),r.flags|=1,Pn(n,r,f,l),r.child;case 14:return f=r.type,m=Pi(f,r.pendingProps),m=Pi(f.type,m),mg(n,r,f,m,l);case 15:return gg(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Pi(f,m),ru(n,r),r.tag=1,kn(f)?(n=!0,Bl(r)):n=!1,vo(r,l),ag(r,f,m),Pf(r,f,m,l),Uf(null,r,f,!0,n,l);case 19:return Tg(n,r,l);case 22:return _g(n,r,l)}throw Error(t(156,r.tag))};function qg(n,r){return oe(n,r)}function By(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(n,r,l,f){return new By(n,r,l,f)}function ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Vy(n){if(typeof n=="function")return ed(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ie)return 14}return 2}function Yr(n,r){var l=n.alternate;return l===null?(l=xi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function mu(n,r,l,f,m,x){var w=2;if(f=n,typeof n=="function")ed(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case D:return Rs(l.children,m,x,r);case O:w=8,m|=8;break;case T:return n=xi(12,l,r,m|2),n.elementType=T,n.lanes=x,n;case W:return n=xi(13,l,r,m),n.elementType=W,n.lanes=x,n;case le:return n=xi(19,l,r,m),n.elementType=le,n.lanes=x,n;case Q:return gu(l,m,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:w=10;break e;case k:w=9;break e;case ee:w=11;break e;case ie:w=14;break e;case K:w=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=xi(w,l,r,m),r.elementType=n,r.type=f,r.lanes=x,r}function Rs(n,r,l,f){return n=xi(7,n,f,r),n.lanes=l,n}function gu(n,r,l,f){return n=xi(22,n,f,r),n.elementType=Q,n.lanes=l,n.stateNode={isHidden:!1},n}function td(n,r,l){return n=xi(6,n,null,r),n.lanes=l,n}function nd(n,r,l){return r=xi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Hy(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hi(0),this.expirationTimes=hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function id(n,r,l,f,m,x,w,F,V){return n=new Hy(n,r,l,F,V),r===1?(r=1,x===!0&&(r|=8)):r=0,x=xi(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(x),n}function Gy(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function $g(n){if(!n)return kr;n=n._reactInternals;e:{if(Vi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return Em(n,l,r)}return r}function Kg(n,r,l,f,m,x,w,F,V){return n=id(l,f,!0,n,m,x,w,F,V),n.context=$g(null),l=n.current,f=Ln(),m=Xr(l),x=cr(f,m),x.callback=r??null,Vr(l,x,m),n.current.lanes=m,Fn(n,m,f),Vn(n,f),n}function _u(n,r,l,f){var m=r.current,x=Ln(),w=Xr(m);return l=$g(l),r.context===null?r.context=l:r.pendingContext=l,r=cr(x,w),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Vr(m,r,w),n!==null&&(Ii(n,m,w,x),ql(n,m,w)),w}function vu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function rd(n,r){Zg(n,r),(n=n.alternate)&&Zg(n,r)}function Wy(){return null}var Qg=typeof reportError=="function"?reportError:function(n){console.error(n)};function sd(n){this._internalRoot=n}xu.prototype.render=sd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));_u(n,r,null,null)},xu.prototype.unmount=sd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ws(function(){_u(null,n,null,null)}),r[sr]=null}};function xu(n){this._internalRoot=n}xu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Np();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Ir.length&&r!==0&&r<Ir[l].priority;l++);Ir.splice(l,0,n),l===0&&kp(n)}};function od(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function Xy(n,r,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var se=vu(w);x.call(se)}}var w=Kg(r,f,n,0,null,!1,!1,"",Jg);return n._reactRootContainer=w,n[sr]=w.current,Ma(n.nodeType===8?n.parentNode:n),ws(),w}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var se=vu(V);F.call(se)}}var V=id(n,0,!1,null,null,!1,!1,"",Jg);return n._reactRootContainer=V,n[sr]=V.current,Ma(n.nodeType===8?n.parentNode:n),ws(function(){_u(r,V,l,f)}),V}function Su(n,r,l,f,m){var x=l._reactRootContainer;if(x){var w=x;if(typeof m=="function"){var F=m;m=function(){var V=vu(w);F.call(V)}}_u(r,w,n,m)}else w=Xy(l,r,n,m,f);return vu(w)}Ip=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=nn(r.pendingLanes);l!==0&&(bc(r,l|1),Vn(r,Me()),(xt&6)===0&&(Eo=Me()+500,zr()))}break;case 13:ws(function(){var f=ur(n,1);if(f!==null){var m=Ln();Ii(f,n,1,m)}}),rd(n,1)}},Pc=function(n){if(n.tag===13){var r=ur(n,134217728);if(r!==null){var l=Ln();Ii(r,n,134217728,l)}rd(n,134217728)}},Up=function(n){if(n.tag===13){var r=Xr(n),l=ur(n,r);if(l!==null){var f=Ln();Ii(l,n,r,f)}rd(n,r)}},Np=function(){return Ct},Fp=function(n,r){var l=Ct;try{return Ct=n,r()}finally{Ct=l}},Re=function(n,r,l){switch(r){case"input":if(ut(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=kl(f);if(!m)throw Error(t(90));ht(f),ut(f,m)}}}break;case"textarea":me(n,l);break;case"select":r=l.value,r!=null&&I(n,!!l.multiple,r,!1)}},Ot=Zf,tn=ws;var jy={usingClientEntryPoint:!1,Events:[wa,uo,kl,Pe,rt,Zf]},za={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yy={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=L(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Tt=Mu.inject(Yy),pt=Mu}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy,Hn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(r))throw Error(t(200));return Gy(n,r,null,l)},Hn.createRoot=function(n,r){if(!od(n))throw Error(t(299));var l=!1,f="",m=Qg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=id(n,1,!1,null,null,l,!1,f,m),n[sr]=r.current,Ma(n.nodeType===8?n.parentNode:n),new sd(r)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=L(r),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return ws(n)},Hn.hydrate=function(n,r,l){if(!yu(r))throw Error(t(200));return Su(null,n,r,!0,l)},Hn.hydrateRoot=function(n,r,l){if(!od(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",w=Qg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),r=Kg(r,null,n,1,l??null,m,!1,x,w),n[sr]=r.current,Ma(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new xu(r)},Hn.render=function(n,r,l){if(!yu(r))throw Error(t(200));return Su(null,n,r,!1,l)},Hn.unmountComponentAtNode=function(n){if(!yu(n))throw Error(t(40));return n._reactRootContainer?(ws(function(){Su(null,null,n,!1,function(){n._reactRootContainer=null,n[sr]=null})}),!0):!1},Hn.unstable_batchedUpdates=Zf,Hn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!yu(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Su(n,r,l,!1,f)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var a_;function nS(){if(a_)return ud.exports;a_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ud.exports=tS(),ud.exports}var l_;function iS(){if(l_)return Eu;l_=1;var o=nS();return Eu.createRoot=o.createRoot,Eu.hydrateRoot=o.hydrateRoot,Eu}var rS=iS();const sS=O0(rS);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k0=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=Pt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:u,...c},d)=>Pt.createElement("svg",{ref:d,...aS,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:k0("lucide",s),...c},[...u.map(([h,p])=>Pt.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=(o,e)=>{const t=Pt.forwardRef(({className:i,...s},a)=>Pt.createElement(lS,{ref:a,iconNode:e,className:k0(`lucide-${oS(o)}`,i),...s}));return t.displayName=`${o}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=Un("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=Un("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=Un("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=Un("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Un("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Un("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=Un("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Un("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=Un("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Un("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Un("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Un("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Un("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Un("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Un("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),yS=()=>Z.jsx("header",{style:{position:"sticky",top:0,zIndex:50,backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",backgroundColor:"rgba(12, 7, 13, 0.75)",borderBottom:"1px solid rgba(218, 208, 220, 0.08)"},children:Z.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"1rem 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[Z.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"10px",background:"linear-gradient(135deg, #dad0dc 0%, #ae98b3 50%, #5f4964 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px rgba(174, 152, 179, 0.4)"},children:Z.jsx(dS,{size:20,color:"#0c070d"})}),Z.jsx("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.35rem",color:"var(--color-mountbatten-pink-50)",letterSpacing:"-0.02em"},children:"Skillpath"})]}),Z.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:Z.jsxs("a",{href:"#courses-section",className:"btn-outline-glass",style:{fontSize:"0.85rem",padding:"0.5rem 1rem",borderRadius:"8px",textDecoration:"none"},children:[Z.jsx(yc,{size:14,color:"#ae98b3"}),Z.jsx("span",{children:"Browse Tracks"})]})})]})});function xr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function B0(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},il={duration:.5,overwrite:!1,delay:0},rp,mn,Ht,Ti=1e8,Ut=1/Ti,Jd=Math.PI*2,SS=Jd/4,MS=0,V0=Math.sqrt,ES=Math.cos,TS=Math.sin,dn=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},wr=function(e){return typeof e=="number"},sp=function(e){return typeof e>"u"},er=function(e){return typeof e=="object"},Xn=function(e){return e!==!1},op=function(){return typeof window<"u"},Tu=function(e){return $t(e)||dn(e)},H0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,wS=/random\([^)]+\)/g,AS=/,\s*/g,f_=/(?:-?\.?\d|\.)+/gi,G0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,W0=/[+-]=-?[.\d]+/,CS=/[^,'"\[\]\s]+/gi,RS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,Yi,eh,ap,ci={},uc={},X0,j0=function(e){return(uc=$o(e,ci))&&Zn},lp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},rl=function(e,t){return!t&&console.warn(e)},Y0=function(e,t){return e&&(ci[e]=t)&&uc&&(uc[e]=t)||ci},sl=function(){return 0},bS={suppressEvents:!0,isStart:!0,kill:!1},Ju={suppressEvents:!0,kill:!1},PS={suppressEvents:!0},up={},ss=[],th={},q0,ri={},hd={},d_=30,ec=[],cp="",fp=function(e){var t=e[0],i,s;if(er(t)||$t(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=ec.length;s--&&!ec[s].targetTest(t););i=ec[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new gv(e[s],i)))||e.splice(s,1);return e},Xs=function(e){return e._gsap||fp(wi(e))[0]._gsap},$0=function(e,t,i){return(i=e[t])&&$t(i)?e[t]():sp(i)&&e.getAttribute&&e.getAttribute(t)||i},jn=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Go=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},LS=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},cc=function(){var e=ss.length,t=ss.slice(0),i,s;for(th={},ss.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},dp=function(e){return!!(e._initted||e._startAt||e.add)},K0=function(e,t,i,s){ss.length&&!mn&&cc(),e.render(t,i,!!(mn&&t<0&&dp(e))),ss.length&&!mn&&cc()},Z0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(CS).length<2?t:dn(e)?e.trim():e},Q0=function(e){return e},fi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},DS=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},$o=function(e,t){for(var i in t)e[i]=t[i];return e},h_=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=er(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},fc=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},el=function(e){var t=e.parent||jt,i=e.keyframes?DS(wn(e.keyframes)):fi;if(Xn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},IS=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},J0=function(e,t,i,s,a){var u=e[s],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},Sc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t._prev,u=t._next;a?a._next=u:e[i]===t&&(e[i]=u),u?u._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},us=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},js=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},US=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nh=function(e,t,i,s){return e._startAt&&(mn?e._startAt.revert(Ju):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},NS=function o(e){return!e||e._ts&&o(e.parent)},p_=function(e){return e._repeat?Ko(e._tTime,e=e.duration()+e._rDelay)*e:0},Ko=function(e,t){var i=Math.floor(e=Xt(e/t));return e&&i===e?i-1:i},dc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Mc=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},Ec=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Xt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Mc(e),i._dirty||js(i,e)),e},ev=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=dc(e.rawTime(),t),(!t._dur||dl(0,t.totalDuration(),i)-t._tTime>Ut)&&t.render(i,!0)),js(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ut}},$i=function(e,t,i,s){return t.parent&&us(t),t._start=Xt((wr(i)?i:i||e!==jt?Si(e,i,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),J0(e,t,"_first","_last",e._sort?"_start":0),ih(t)||(e._recent=t),s||ev(e,t),e._ts<0&&Ec(e,e._tTime),e},tv=function(e,t){return(ci.ScrollTrigger||lp("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},nv=function(e,t,i,s,a){if(pp(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&q0!==oi.frame)return ss.push(e),e._lazy=[a,s],1},FS=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},ih=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},OS=function(e,t,i,s){var a=e.ratio,u=t<0||!t&&(!e._start&&FS(e)&&!(!e._initted&&ih(e))||(e._ts<0||e._dp._ts<0)&&!ih(e))?0:1,c=e._rDelay,d=0,h,p,g;if(c&&e._repeat&&(d=dl(0,e._tDur,t),p=Ko(d,c),e._yoyo&&p&1&&(u=1-u),p!==Ko(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||mn||s||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&nv(e,t,s,i,d))return;for(g=e._zTime,e._zTime=t||(i?Ut:0),i||(i=t&&!g),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&nh(e,t,i,!0),e._onUpdate&&!i&&ai(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&us(e,1),!i&&!mn&&(ai(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kS=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Zo=function(e,t,i,s){var a=e._repeat,u=Xt(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:Xt(u*(a+1)+e._rDelay*a):u,c>0&&!s&&Ec(e,e._tTime=e._tDur*c),e.parent&&Mc(e),i||js(e.parent,e),e},m_=function(e){return e instanceof Wn?js(e):Zo(e,e._dur)},zS={_start:0,endTime:sl,totalDuration:sl},Si=function o(e,t,i){var s=e.labels,a=e._recent||zS,u=e.duration()>=Ti?a.endTime(!1):e._dur,c,d,h;return dn(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&i&&(d=d/100*(wn(i)?i[0]:i).totalDuration()),c>1?o(e,t.substr(0,c-1),i)+d:u+d)):t==null?u:+t},tl=function(e,t,i){var s=wr(t[1]),a=(s?2:1)+(e<2?0:1),u=t[a],c,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,d=i;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=Xn(d.vars.inherit)&&d.parent;u.immediateRender=Xn(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new en(t[0],u,t[a+1])},ps=function(e,t){return e||e===0?t(e):t},dl=function(e,t,i){return i<e?e:i>t?t:i},Tn=function(e,t){return!dn(e)||!(t=RS.exec(e))?"":t[1]},BS=function(e,t,i){return ps(i,function(s){return dl(e,t,s)})},rh=[].slice,iv=function(e,t){return e&&er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&er(e[0]))&&!e.nodeType&&e!==Yi},VS=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var a;return dn(s)&&!t||iv(s,1)?(a=i).push.apply(a,wi(s)):i.push(s)})||i},wi=function(e,t,i){return Ht&&!t&&Ht.selector?Ht.selector(e):dn(e)&&!i&&(eh||!Qo())?rh.call((t||ap).querySelectorAll(e),0):wn(e)?VS(e,i):iv(e)?rh.call(e,0):e?[e]:[]},sh=function(e){return e=wi(e)[0]||rl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return wi(t,i.querySelectorAll?i:i===e?rl("Invalid scope")||ap.createElement("div"):e)}},rv=function(e){return e.sort(function(){return .5-Math.random()})},sv=function(e){if($t(e))return e;var t=er(e)?e:{each:e},i=Ys(t.ease),s=t.from||0,a=parseFloat(t.base)||0,u={},c=s>0&&s<1,d=isNaN(s)||c,h=t.axis,p=s,g=s;return dn(s)?p=g={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(p=s[0],g=s[1]),function(_,S,E){var M=(E||t).length,y=u[M],v,P,b,C,N,U,D,O,T;if(!y){if(T=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!T){for(D=-Ti;D<(D=E[T++].getBoundingClientRect().left)&&T<M;);T<M&&T--}for(y=u[M]=[],v=d?Math.min(T,M)*p-.5:s%T,P=T===Ti?0:d?M*g/T-.5:s/T|0,D=0,O=Ti,U=0;U<M;U++)b=U%T-v,C=P-(U/T|0),y[U]=N=h?Math.abs(h==="y"?C:b):V0(b*b+C*C),N>D&&(D=N),N<O&&(O=N);s==="random"&&rv(y),y.max=D-O,y.min=O,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(T>M?M-1:h?h==="y"?M/T:T:Math.max(T,M/T))||0)*(s==="edges"?-1:1),y.b=M<0?a-M:a,y.u=Tn(t.amount||t.each)||0,i=i&&M<0?eM(i):i}return M=(y[_]-y.min)/y.max||0,Xt(y.b+(i?i(M):M)*y.v)+y.u}},oh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Xt(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(wr(i)?0:Tn(i))}},ov=function(e,t){var i=wn(e),s,a;return!i&&er(e)&&(s=i=e.radius||Ti,e.values?(e=wi(e.values),(a=!wr(e[0]))&&(s*=s)):e=oh(e.increment)),ps(t,i?$t(e)?function(u){return a=e(u),Math.abs(a-u)<=s?a:u}:function(u){for(var c=parseFloat(a?u.x:u),d=parseFloat(a?u.y:0),h=Ti,p=0,g=e.length,_,S;g--;)a?(_=e[g].x-c,S=e[g].y-d,_=_*_+S*S):_=Math.abs(e[g]-c),_<h&&(h=_,p=g);return p=!s||h<=s?e[p]:u,a||p===u||wr(u)?p:p+Tn(u)}:oh(e))},av=function(e,t,i,s){return ps(wn(e)?!t:i===!0?!!(i=0):!s,function(){return wn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},HS=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(a,u){return u(a)},s)}},GS=function(e,t){return function(i){return e(parseFloat(i))+(t||Tn(i))}},WS=function(e,t,i){return uv(e,t,0,1,i)},lv=function(e,t,i){return ps(i,function(s){return e[~~t(s)]})},XS=function o(e,t,i){var s=t-e;return wn(e)?lv(e,o(0,e.length),t):ps(i,function(a){return(s+(a-e)%s)%s+e})},jS=function o(e,t,i){var s=t-e,a=s*2;return wn(e)?lv(e,o(0,e.length-1),t):ps(i,function(u){return u=(a+(u-e)%a)%a||0,e+(u>s?a-u:u)})},ol=function(e){return e.replace(wS,function(t){var i=t.indexOf("[")+1,s=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(AS);return av(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},uv=function(e,t,i,s,a){var u=t-e,c=s-i;return ps(a,function(d){return i+((d-e)/u*c||0)})},YS=function o(e,t,i,s){var a=isNaN(e+t)?0:function(S){return(1-S)*e+S*t};if(!a){var u=dn(e),c={},d,h,p,g,_;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(p=[],g=e.length,_=g-2,h=1;h<g;h++)p.push(o(e[h-1],e[h]));g--,a=function(E){E*=g;var M=Math.min(_,~~E);return p[M](E-M)},i=t}else s||(e=$o(wn(e)?[]:{},e));if(!p){for(d in t)hp.call(c,e,d,"get",t[d]);a=function(E){return _p(E,c)||(u?e.p:e)}}}return ps(i,a)},g_=function(e,t,i){var s=e.labels,a=Ti,u,c,d;for(u in s)c=s[u]-t,c<0==!!i&&c&&a>(c=Math.abs(c))&&(d=u,a=c);return d},ai=function(e,t,i){var s=e.vars,a=s[t],u=Ht,c=e._ctx,d,h,p;if(a)return d=s[t+"Params"],h=s.callbackScope||e,i&&ss.length&&cc(),c&&(Ht=c),p=d?a.apply(h,d):a.call(h),Ht=u,p},$a=function(e){return us(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&ai(e,"onInterrupt"),e},Vo,cv=[],fv=function(e){if(e)if(e=!e.name&&e.default||e,op()||e.headless){var t=e.name,i=$t(e),s=t&&!i&&e.init?function(){this._props=[]}:e,a={init:sl,render:_p,add:hp,kill:cM,modifier:uM,rawVars:0},u={targetTest:0,get:0,getSetter:gp,aliases:{},register:0};if(Qo(),e!==s){if(ri[t])return;fi(s,fi(fc(e,a),u)),$o(s.prototype,$o(a,fc(e,u))),ri[s.prop=t]=s,e.targetTest&&(ec.push(s),up[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Y0(t,s),e.register&&e.register(Zn,s,Yn)}else cv.push(e)},It=255,Ka={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},pd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*It+.5|0},dv=function(e,t,i){var s=e?wr(e)?[e>>16,e>>8&It,e&It]:0:Ka.black,a,u,c,d,h,p,g,_,S,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ka[e])s=Ka[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&It,s&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(f_),!t)d=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,s.length>3&&(s[3]*=1),s[0]=pd(d+1/3,a,u),s[1]=pd(d,a,u),s[2]=pd(d-1/3,a,u);else if(~e.indexOf("="))return s=e.match(G0),i&&s.length<4&&(s[3]=1),s}else s=e.match(f_)||Ka.transparent;s=s.map(Number)}return t&&!E&&(a=s[0]/It,u=s[1]/It,c=s[2]/It,g=Math.max(a,u,c),_=Math.min(a,u,c),p=(g+_)/2,g===_?d=h=0:(S=g-_,h=p>.5?S/(2-g-_):S/(g+_),d=g===a?(u-c)/S+(u<c?6:0):g===u?(c-a)/S+2:(a-u)/S+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},hv=function(e){var t=[],i=[],s=-1;return e.split(os).forEach(function(a){var u=a.match(Bo)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},__=function(e,t,i){var s="",a=(e+s).match(os),u=t?"hsla(":"rgba(",c=0,d,h,p,g;if(!a)return e;if(a=a.map(function(_){return(_=dv(_,t,1))&&u+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(p=hv(e),d=i.c,d.join(s)!==p.c.join(s)))for(h=e.replace(os,"1").split(Bo),g=h.length-1;c<g;c++)s+=h[c]+(~d.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:i).shift());if(!h)for(h=e.split(os),g=h.length-1;c<g;c++)s+=h[c]+a[c];return s+h[g]},os=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ka)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),qS=/hsl[a]?\(/,pv=function(e){var t=e.join(" "),i;if(os.lastIndex=0,os.test(t))return i=qS.test(t),e[1]=__(e[1],i),e[0]=__(e[0],i,hv(e[1])),!0},al,oi=(function(){var o=Date.now,e=500,t=33,i=o(),s=i,a=1e3/240,u=a,c=[],d,h,p,g,_,S,E=function M(y){var v=o()-s,P=y===!0,b,C,N,U;if((v>e||v<0)&&(i+=v-t),s+=v,N=s-i,b=N-u,(b>0||P)&&(U=++g.frame,_=N-g.time*1e3,g.time=N=N/1e3,u+=b+(b>=a?4:a-b),C=1),P||(d=h(M)),C)for(S=0;S<c.length;S++)c[S](N,_,U,y)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return _/(1e3/(y||60))},wake:function(){X0&&(!eh&&op()&&(Yi=eh=window,ap=Yi.document||{},ci.gsap=Zn,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(Zn.version),j0(uc||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),cv.forEach(fv)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),h=p||function(y){return setTimeout(y,u-g.time*1e3+1|0)},al=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),al=0,h=sl},lagSmoothing:function(y,v){e=y||1/0,t=Math.min(v||33,e)},fps:function(y){a=1e3/(y||240),u=g.time*1e3+a},add:function(y,v,P){var b=v?function(C,N,U,D){y(C,N,U,D),g.remove(b)}:y;return g.remove(y),c[P?"unshift":"push"](b),Qo(),b},remove:function(y,v){~(v=c.indexOf(y))&&c.splice(v,1)&&S>=v&&S--},_listeners:c},g})(),Qo=function(){return!al&&oi.wake()},_t={},$S=/^[\d.\-M][\d.\-,\s]/,KS=/["']/g,ZS=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],a=1,u=i.length,c,d,h;a<u;a++)d=i[a],c=a!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[s]=isNaN(h)?h.replace(KS,"").trim():+h,s=d.substr(c+1).trim();return t},QS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},JS=function(e){var t=(e+"").split("("),i=_t[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ZS(t[1])]:QS(e).split(",").map(Z0)):_t._CE&&$S.test(e)?_t._CE("",e):i},eM=function(e){return function(t){return 1-e(1-t)}},Ys=function(e,t){return e&&($t(e)?e:_t[e]||JS(e))||t},Qs=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:s},u;return jn(e,function(c){_t[c]=ci[c]=a,_t[u=c.toLowerCase()]=i;for(var d in a)_t[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=_t[c+"."+d]=a[d]}),a},mv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},md=function o(e,t,i){var s=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),u=a/Jd*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*TS((p-u)*a)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:mv(c);return a=Jd/a,d.config=function(h,p){return o(e,h,p)},d},gd=function o(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:mv(i);return s.config=function(a){return o(e,a)},s};jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Qs(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Qs("Elastic",md("in"),md("out"),md());(function(o,e){var t=1/e,i=2*t,s=2.5*t,a=function(c){return c<t?o*c*c:c<i?o*Math.pow(c-1.5/e,2)+.75:c<s?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};Qs("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);Qs("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Qs("Circ",function(o){return-(V0(1-o*o)-1)});Qs("Sine",function(o){return o===1?1:-ES(o*SS)+1});Qs("Back",gd("in"),gd("out"),gd());_t.SteppedEase=_t.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),a=t?1:0,u=1-Ut;return function(c){return((s*dl(0,u,c)|0)+a)*i}}};il.ease=_t["quad.out"];jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return cp+=o+","+o+"Params,"});var gv=function(e,t){this.id=MS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$0,this.set=t?t.getSetter:gp},ll=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zo(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),al||oi.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Zo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Qo(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Ec(this,i),!a._dp||a.parent||ev(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ut||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),K0(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+p_(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+p_(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?Ko(this._tTime,a)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?dc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ut?0:this._rts,this.totalTime(dl(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),Mc(this),US(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Xt(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&$i(s,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Xn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dc(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=PS);var s=mn;return mn=i,dp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),mn=s,this},e.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,m_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,m_(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Si(this,i),Xn(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Xn(s)),this._dur||(this._zTime=-Ut),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-Ut)},e.eventCallback=function(i,s,a){var u=this.vars;return arguments.length>1?(s?(u[i]=s,a&&(u[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this,a=s._prom;return new Promise(function(u){var c=$t(i)?i:Q0,d=function(){var p=s.then;s.then=null,a&&a(),$t(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),u(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},e.kill=function(){$a(this)},o})();fi(ll.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Wn=(function(o){B0(e,o);function e(i,s){var a;return i===void 0&&(i={}),a=o.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=Xn(i.sortChildren),jt&&$i(i.parent||jt,xr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&tv(xr(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,u){return tl(0,arguments,this),this},t.from=function(s,a,u){return tl(1,arguments,this),this},t.fromTo=function(s,a,u,c){return tl(2,arguments,this),this},t.set=function(s,a,u){return a.duration=0,a.parent=this,el(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new en(s,a,Si(this,u),1),this},t.call=function(s,a,u){return $i(this,en.delayedCall(0,s,a),u)},t.staggerTo=function(s,a,u,c,d,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new en(s,u,Si(this,d)),this},t.staggerFrom=function(s,a,u,c,d,h,p){return u.runBackwards=1,el(u).immediateRender=Xn(u.immediateRender),this.staggerTo(s,a,u,c,d,h,p)},t.staggerFromTo=function(s,a,u,c,d,h,p,g){return c.startAt=u,el(c).immediateRender=Xn(c.immediateRender),this.staggerTo(s,a,c,d,h,p,g)},t.render=function(s,a,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:Xt(s),g=this._zTime<0!=s<0&&(this._initted||!h),_,S,E,M,y,v,P,b,C,N,U,D;if(this!==jt&&p>d&&s>=0&&(p=d),p!==this._tTime||u||g){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),_=p,C=this._start,b=this._ts,v=!b,g&&(h||(c=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(U=this._yoyo,y=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,a,u);if(_=Xt(p%y),p===d?(M=this._repeat,_=h):(N=Xt(p/y),M=~~N,M&&M===N&&(_=h,M--),_>h&&(_=h)),N=Ko(this._tTime,y),!c&&this._tTime&&N!==M&&this._tTime-N*y-this._dur<=0&&(N=M),U&&M&1&&(_=h-_,D=1),M!==N&&!this._lock){var O=U&&N&1,T=O===(U&&M&1);if(M<N&&(O=!O),c=O?0:p%h?h:p,this._lock=1,this.render(c||(D?0:Xt(M*y)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,N=M),c&&c!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,T&&(this._lock=2,c=O?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(P=kS(this,Xt(c),Xt(_)),P&&(p-=_-(_=P._start))),this._tTime=p,this._time=_,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&h&&!a&&!N&&(ai(this,"onStart"),this._tTime!==p))return this;if(_>=c&&s>=0)for(S=this._first;S;){if(E=S._next,(S._act||_>=S._start)&&S._ts&&P!==S){if(S.parent!==this)return this.render(s,a,u);if(S.render(S._ts>0?(_-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(_-S._start)*S._ts,a,u),_!==this._time||!this._ts&&!v){P=0,E&&(p+=this._zTime=-Ut);break}}S=E}else{S=this._last;for(var A=s<0?s:_;S;){if(E=S._prev,(S._act||A<=S._end)&&S._ts&&P!==S){if(S.parent!==this)return this.render(s,a,u);if(S.render(S._ts>0?(A-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(A-S._start)*S._ts,a,u||mn&&dp(S)),_!==this._time||!this._ts&&!v){P=0,E&&(p+=this._zTime=A?-Ut:Ut);break}}S=E}}if(P&&!a&&(this.pause(),P.render(_>=c?0:-Ut)._zTime=_>=c?1:-1,this._ts))return this._start=C,Mc(this),this.render(s,a,u);this._onUpdate&&!a&&ai(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(C===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&us(this,1),!a&&!(s<0&&!c)&&(p||c||!d)&&(ai(this,p===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var u=this;if(wr(a)||(a=Si(this,a,s)),!(s instanceof ll)){if(wn(s))return s.forEach(function(c){return u.add(c,a)}),this;if(dn(s))return this.addLabel(s,a);if($t(s))s=en.delayedCall(0,s);else return this}return this!==s?$i(this,s,a):this},t.getChildren=function(s,a,u,c){s===void 0&&(s=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-Ti);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof en?a&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,a,u)))),h=h._next;return d},t.getById=function(s){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===s)return a[u]},t.remove=function(s){return dn(s)?this.removeLabel(s):$t(s)?this.killTweensOf(s):(s.parent===this&&Sc(this,s),s===this._recent&&(this._recent=this._last),js(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(oi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Si(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,u){var c=en.delayedCall(0,a||sl,u);return c.data="isPause",this._hasPause=1,$i(this,c,Si(this,s))},t.removePause=function(s){var a=this._first;for(s=Si(this,s);a;)a._start===s&&a.data==="isPause"&&us(a),a=a._next},t.killTweensOf=function(s,a,u){for(var c=this.getTweensOf(s,u),d=c.length;d--;)ns!==c[d]&&c[d].kill(s,a);return this},t.getTweensOf=function(s,a){for(var u=[],c=wi(s),d=this._first,h=wr(a),p;d;)d instanceof en?LS(d._targets,c)&&(h?(!ns||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&u.push(d):(p=d.getTweensOf(c,a)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(s,a){a=a||{};var u=this,c=Si(u,s),d=a,h=d.startAt,p=d.onStart,g=d.onStartParams,_=d.immediateRender,S,E=en.to(u,fi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||Ut,onStart:function(){if(u.pause(),!S){var y=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==y&&Zo(E,y,0,1).render(E._time,!0,!0),S=1}p&&p.apply(E,g||[])}},a));return _?E.render(0):E},t.tweenFromTo=function(s,a,u){return this.tweenTo(a,fi({startAt:{time:Si(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),g_(this,Si(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),g_(this,Si(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(s,a,u){u===void 0&&(u=0);var c=this._first,d=this.labels,h;for(s=Xt(s);c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(a)for(h in d)d[h]>=u&&(d[h]+=s);return js(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return o.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),js(this)},t.totalDuration=function(s){var a=0,u=this,c=u._last,d=Ti,h,p,g;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(g=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,$i(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(a-=p,(!g&&!u._dp||g&&g.smoothChildTiming)&&(u._start+=Xt(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>a&&c._ts&&(a=c._end),c=h;Zo(u,u===jt&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(jt._ts&&(K0(jt,dc(s,jt)),q0=oi.frame),oi.frame>=d_){d_+=ui.autoSleep||120;var a=jt._first;if((!a||!a._ts)&&ui.autoSleep&&oi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||oi.sleep()}}},e})(ll);fi(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var tM=function(e,t,i,s,a,u,c){var d=new Yn(this._pt,e,t,0,1,Mv,null,a),h=0,p=0,g,_,S,E,M,y,v,P;for(d.b=i,d.e=s,i+="",s+="",(v=~s.indexOf("random("))&&(s=ol(s)),u&&(P=[i,s],u(P,e,t),i=P[0],s=P[1]),_=i.match(dd)||[];g=dd.exec(s);)E=g[0],M=s.substring(h,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),E!==_[p++]&&(y=parseFloat(_[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:y,c:E.charAt(1)==="="?Go(y,E)-y:parseFloat(E)-y,m:S&&S<4?Math.round:0},h=dd.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=c,(W0.test(s)||v)&&(d.e=0),this._pt=d,d},hp=function(e,t,i,s,a,u,c,d,h,p){$t(s)&&(s=s(a||0,e,u));var g=e[t],_=i!=="get"?i:$t(g)?h?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():g,S=$t(g)?h?oM:yv:mp,E;if(dn(s)&&(~s.indexOf("random(")&&(s=ol(s)),s.charAt(1)==="="&&(E=Go(_,s)+(Tn(_)||0),(E||E===0)&&(s=E))),!p||_!==s||ah)return!isNaN(_*s)&&s!==""?(E=new Yn(this._pt,e,t,+_||0,s-(_||0),typeof g=="boolean"?lM:Sv,0,S),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!g&&!(t in e)&&lp(t,s),tM.call(this,e,t,_,s,S,d||ui.stringFilter,h))},nM=function(e,t,i,s,a){if($t(e)&&(e=nl(e,a,t,i,s)),!er(e)||e.style&&e.nodeType||wn(e)||H0(e))return dn(e)?nl(e,a,t,i,s):e;var u={},c;for(c in e)u[c]=nl(e[c],a,t,i,s);return u},_v=function(e,t,i,s,a,u){var c,d,h,p;if(ri[e]&&(c=new ri[e]).init(a,c.rawVars?t[e]:nM(t[e],s,a,u,i),i,s,u)!==!1&&(i._pt=d=new Yn(i._pt,a,e,0,1,c.render,c,0,c.priority),i!==Vo))for(h=i._ptLookup[i._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=d;return c},ns,ah,pp=function o(e,t,i){var s=e.vars,a=s.ease,u=s.startAt,c=s.immediateRender,d=s.lazy,h=s.onUpdate,p=s.runBackwards,g=s.yoyoEase,_=s.keyframes,S=s.autoRevert,E=e._dur,M=e._startAt,y=e._targets,v=e.parent,P=v&&v.data==="nested"?v.vars.targets:y,b=e._overwrite==="auto"&&!rp,C=e.timeline,N=s.easeReverse||g,U,D,O,T,A,k,ee,W,le,ie,K,Q,B;if(C&&(!_||!a)&&(a="none"),e._ease=Ys(a,il.ease),e._rEase=N&&(Ys(N)||e._ease),e._from=!C&&!!s.runBackwards,e._from&&(e.ratio=1),!C||_&&!s.stagger){if(W=y[0]?Xs(y[0]).harness:0,Q=W&&s[W.prop],U=fc(s,up),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!S?M.render(-1,!0):M.revert(p&&E?Ju:bS),M._lazy=0),u){if(us(e._startAt=en.set(y,fi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!M&&Xn(d),startAt:null,delay:0,onUpdate:h&&function(){return ai(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!c&&!S)&&e._startAt.revert(Ju),c&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),O=fi({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Xn(d),immediateRender:c,stagger:0,parent:v},U),Q&&(O[W.prop]=Q),us(e._startAt=en.set(y,O)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(Ju):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&Xn(d)||d&&!E,D=0;D<y.length;D++){if(A=y[D],ee=A._gsap||fp(y)[D]._gsap,e._ptLookup[D]=ie={},th[ee.id]&&ss.length&&cc(),K=P===y?D:P.indexOf(A),W&&(le=new W).init(A,Q||U,e,K,P)!==!1&&(e._pt=T=new Yn(e._pt,A,le.name,0,1,le.render,le,0,le.priority),le._props.forEach(function(ce){ie[ce]=T}),le.priority&&(k=1)),!W||Q)for(O in U)ri[O]&&(le=_v(O,U,e,K,A,P))?le.priority&&(k=1):ie[O]=T=hp.call(e,A,O,"get",U[O],K,P,0,s.stringFilter);e._op&&e._op[D]&&e.kill(A,e._op[D]),b&&e._pt&&(ns=e,jt.killTweensOf(A,ie,e.globalTime(t)),B=!e.parent,ns=0),e._pt&&d&&(th[ee.id]=1)}k&&Ev(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!B,_&&t<=0&&C.render(Ti,!0,!0)},iM=function(e,t,i,s,a,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,g,_,S;if(!h)for(h=e._ptCache[t]=[],_=e._ptLookup,S=e._targets.length;S--;){if(p=_[S][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return ah=1,e.vars[t]="+=0",pp(e,c),ah=0,d?rl(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(S=h.length;S--;)g=h[S],p=g._pt||g,p.s=(s||s===0)&&!a?s:p.s+(s||0)+u*p.c,p.c=i-p.s,g.e&&(g.e=Zt(i)+Tn(g.e)),g.b&&(g.b=p.s+Tn(g.b))},rM=function(e,t){var i=e[0]?Xs(e[0]).harness:0,s=i&&i.aliases,a,u,c,d;if(!s)return t;a=$o({},t);for(u in s)if(u in a)for(d=s[u].split(","),c=d.length;c--;)a[d[c]]=a[u];return a},sM=function(e,t,i,s){var a=t.ease||s||"power1.inOut",u,c;if(wn(t))c=i[e]||(i[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:a})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},nl=function(e,t,i,s,a){return $t(e)?e.call(t,i,s,a):dn(e)&&~e.indexOf("random(")?ol(e):e},vv=cp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",xv={};jn(vv+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return xv[o]=1});var en=(function(o){B0(e,o);function e(i,s,a,u){var c;typeof s=="number"&&(a.duration=s,s=a,a=null),c=o.call(this,u?s:el(s))||this;var d=c.vars,h=d.duration,p=d.delay,g=d.immediateRender,_=d.stagger,S=d.overwrite,E=d.keyframes,M=d.defaults,y=d.scrollTrigger,v=s.parent||jt,P=(wn(i)||H0(i)?wr(i[0]):"length"in s)?[i]:wi(i),b,C,N,U,D,O,T,A;if(c._targets=P.length?fp(P):rl("GSAP target "+i+" not found. https://gsap.com",!ui.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=S,E||_||Tu(h)||Tu(p)){s=c.vars;var k=s.easeReverse||s.yoyoEase;if(b=c.timeline=new Wn({data:"nested",defaults:M||{},targets:v&&v.data==="nested"?v.vars.targets:P}),b.kill(),b.parent=b._dp=xr(c),b._start=0,_||Tu(h)||Tu(p)){if(U=P.length,T=_&&sv(_),er(_))for(D in _)~vv.indexOf(D)&&(A||(A={}),A[D]=_[D]);for(C=0;C<U;C++)N=fc(s,xv),N.stagger=0,k&&(N.easeReverse=k),A&&$o(N,A),O=P[C],N.duration=+nl(h,xr(c),C,O,P),N.delay=(+nl(p,xr(c),C,O,P)||0)-c._delay,!_&&U===1&&N.delay&&(c._delay=p=N.delay,c._start+=p,N.delay=0),b.to(O,N,T?T(C,O,P):0),b._ease=_t.none;b.duration()?h=p=0:c.timeline=0}else if(E){el(fi(b.vars.defaults,{ease:"none"})),b._ease=Ys(E.ease||s.ease||"none");var ee=0,W,le,ie;if(wn(E))E.forEach(function(K){return b.to(P,K,">")}),b.duration();else{N={};for(D in E)D==="ease"||D==="easeEach"||sM(D,E[D],N,E.easeEach);for(D in N)for(W=N[D].sort(function(K,Q){return K.t-Q.t}),ee=0,C=0;C<W.length;C++)le=W[C],ie={ease:le.e,duration:(le.t-(C?W[C-1].t:0))/100*h},ie[D]=le.v,b.to(P,ie,ee),ee+=ie.duration;b.duration()<h&&b.to({},{duration:h-b.duration()})}}h||c.duration(h=b.duration())}else c.timeline=0;return S===!0&&!rp&&(ns=xr(c),jt.killTweensOf(P),ns=0),$i(v,xr(c),a),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(g||!h&&!E&&c._start===Xt(v._time)&&Xn(g)&&NS(xr(c))&&v.data!=="nested")&&(c._tTime=-Ut,c.render(Math.max(0,-p)||0)),y&&tv(xr(c),y),c}var t=e.prototype;return t.render=function(s,a,u){var c=this._time,d=this._tDur,h=this._dur,p=s<0,g=s>d-Ut&&!p?d:s<Ut?0:s,_,S,E,M,y,v,P,b;if(!h)OS(this,s,a,u);else if(g!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=g,b=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,a,u);if(_=Xt(g%M),g===d?(E=this._repeat,_=h):(y=Xt(g/M),E=~~y,E&&E===y?(_=h,E--):_>h&&(_=h)),v=this._yoyo&&E&1,v&&(_=h-_),y=Ko(this._tTime,M),_===c&&!u&&this._initted&&E===y)return this._tTime=g,this;E!==y&&this.vars.repeatRefresh&&!v&&!this._lock&&_!==M&&this._initted&&(this._lock=u=1,this.render(Xt(M*E),!0).invalidate()._lock=0)}if(!this._initted){if(nv(this,p?s:_,u,a,g))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==y))return this;if(h!==this._dur)return this.render(s,a,u)}if(this._rEase){var C=_<c;if(C!==this._inv){var N=C?c:h-c;this._inv=C,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=N?(C?-1:1)/N:0,this._invScale=C?-this.ratio:1-this.ratio,this._invEase=C?this._rEase:this._ease}this.ratio=P=this._invRatio+this._invScale*this._invEase((_-this._invTime)*this._invRecip)}else this.ratio=P=this._ease(_/h);if(this._from&&(this.ratio=P=1-P),this._tTime=g,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&g&&!a&&!y&&(ai(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(P,S.d),S=S._next;b&&b.render(s<0?s:b._dur*b._ease(_/this._dur),a,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&nh(this,s,a,u),ai(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!a&&this.parent&&ai(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(p&&!this._onUpdate&&nh(this,s,!0,!0),(s||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&us(this,1),!a&&!(p&&!c)&&(g||c||v)&&(ai(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,u,c,d){al||oi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||pp(this,h),p=this._ease(h/this._dur),iM(this,s,a,u,c,p,h,d)?this.resetTo(s,a,u,c,1):(Ec(this,0),this.parent||J0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?$a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,ns&&ns.vars.overwrite!==!0)._first||$a(this),this.parent&&u!==this.timeline.totalDuration()&&Zo(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=s?wi(s):c,h=this._ptLookup,p=this._pt,g,_,S,E,M,y,v;if((!a||a==="all")&&IS(c,d))return a==="all"&&(this._pt=0),$a(this);for(g=this._op=this._op||[],a!=="all"&&(dn(a)&&(M={},jn(a,function(P){return M[P]=1}),a=M),a=rM(c,a)),v=c.length;v--;)if(~d.indexOf(c[v])){_=h[v],a==="all"?(g[v]=a,E=_,S={}):(S=g[v]=g[v]||{},E=a);for(M in E)y=_&&_[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&Sc(this,y,"_pt"),delete _[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&p&&$a(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return tl(1,arguments)},e.delayedCall=function(s,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,a,u){return tl(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,u){return jt.killTweensOf(s,a,u)},e})(ll);fi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jn("staggerTo,staggerFrom,staggerFromTo",function(o){en[o]=function(){var e=new Wn,t=rh.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var mp=function(e,t,i){return e[t]=i},yv=function(e,t,i){return e[t](i)},oM=function(e,t,i,s){return e[t](s.fp,i)},aM=function(e,t,i){return e.setAttribute(t,i)},gp=function(e,t){return $t(e[t])?yv:sp(e[t])&&e.setAttribute?aM:mp},Sv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},lM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mv=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},_p=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},uM=function(e,t,i,s){for(var a=this._pt,u;a;)u=a._next,a.p===s&&a.modifier(e,t,i),a=u},cM=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Sc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},fM=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},Ev=function(e){for(var t=e._pt,i,s,a,u;t;){for(i=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=a},Yn=(function(){function o(t,i,s,a,u,c,d,h,p){this.t=i,this.s=a,this.c=u,this.p=s,this.r=c||Sv,this.d=d||this,this.set=h||mp,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=fM,this.m=i,this.mt=a,this.tween=s},o})();jn(cp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return up[o]=1});ci.TweenMax=ci.TweenLite=en;ci.TimelineLite=ci.TimelineMax=Wn;jt=new Wn({sortChildren:!1,defaults:il,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=pv;var qs=[],tc={},dM=[],v_=0,hM=0,_d=function(e){return(tc[e]||dM).map(function(t){return t()})},lh=function(){var e=Date.now(),t=[];e-v_>2&&(_d("matchMediaInit"),qs.forEach(function(i){var s=i.queries,a=i.conditions,u,c,d,h;for(c in s)u=Yi.matchMedia(s[c]).matches,u&&(d=1),u!==a[c]&&(a[c]=u,h=1);h&&(i.revert(),d&&t.push(i))}),_d("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),v_=e,_d("matchMedia"))},Tv=(function(){function o(t,i){this.selector=i&&sh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=hM++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,s,a){$t(i)&&(a=s,s=i,i=$t);var u=this,c=function(){var h=Ht,p=u.selector,g;return h&&h!==u&&h.data.push(u),a&&(u.selector=sh(a)),Ht=u,g=s.apply(u,arguments),$t(g)&&u._r.push(g),Ht=h,u.selector=p,u.isReverted=!1,g};return u.last=c,i===$t?c(u,function(d){return u.add(null,d)}):i?u[i]=c:c},e.ignore=function(i){var s=Ht;Ht=null,i(this),Ht=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof en&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var a=this;if(i?(function(){for(var c=a.getTweens(),d=a.data.length,h;d--;)h=a.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,g){return g.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),d=a.data.length;d--;)h=a.data[d],h instanceof Wn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof en)&&h.revert&&h.revert(i);a._r.forEach(function(p){return p(i,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=qs.length;u--;)qs[u].id===this.id&&qs.splice(u,1)},e.revert=function(i){this.kill(i||{})},o})(),pM=(function(){function o(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=o.prototype;return e.add=function(i,s,a){er(i)||(i={matches:i});var u=new Tv(0,a||this.scope),c=u.conditions={},d,h,p;Ht&&!u.selector&&(u.selector=Ht.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?p=1:(d=Yi.matchMedia(i[h]),d&&(qs.indexOf(u)<0&&qs.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(lh):d.addEventListener("change",lh)));return p&&s(u,function(g){return u.add(null,g)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o})(),hc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return fv(s)})},timeline:function(e){return new Wn(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,i,s){dn(e)&&(e=wi(e)[0]);var a=Xs(e||{}).get,u=i?Q0:Z0;return i==="native"&&(i=""),e&&(t?u((ri[t]&&ri[t].get||a)(e,t,i,s)):function(c,d,h){return u((ri[c]&&ri[c].get||a)(e,c,d,h))})},quickSetter:function(e,t,i){if(e=wi(e),e.length>1){var s=e.map(function(p){return Zn.quickSetter(p,t,i)}),a=s.length;return function(p){for(var g=a;g--;)s[g](p)}}e=e[0]||{};var u=ri[t],c=Xs(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var g=new u;Vo._pt=0,g.init(e,i?p+i:p,Vo,0,[e]),g.render(1,g),Vo._pt&&_p(1,Vo)}:c.set(e,d);return u?h:function(p){return h(e,d,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,a=Zn.to(e,fi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,p){return a.resetTo(t,d,h,p)};return u.tween=a,u},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ys(e.ease,il.ease)),h_(il,e||{})},config:function(e){return h_(ui,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,a=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!ri[c]&&!ci[c]&&rl(t+" effect requires "+c+" plugin.")}),hd[t]=function(c,d,h){return i(wi(c),fi(d||{},a),h)},u&&(Wn.prototype[t]=function(c,d,h){return this.add(hd[t](c,er(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){_t[e]=Ys(t)},parseEase:function(e,t){return arguments.length?Ys(e,t):_t},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Wn(e),s,a;for(i.smoothChildTiming=Xn(e.smoothChildTiming),jt.remove(i),i._dp=0,i._time=i._tTime=jt._time,s=jt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof en&&s.vars.onComplete===s._targets[0]))&&$i(i,s,s._start-s._delay),s=a;return $i(jt,i,0),i},context:function(e,t){return e?new Tv(e,t):Ht},matchMedia:function(e){return new pM(e)},matchMediaRefresh:function(){return qs.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||lh()},addEventListener:function(e,t){var i=tc[e]||(tc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=tc[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:XS,wrapYoyo:jS,distribute:sv,random:av,snap:ov,normalize:WS,getUnit:Tn,clamp:BS,splitColor:dv,toArray:wi,selector:sh,mapRange:uv,pipe:HS,unitize:GS,interpolate:YS,shuffle:rv},install:j0,effects:hd,ticker:oi,updateRoot:Wn.updateRoot,plugins:ri,globalTimeline:jt,core:{PropTween:Yn,globals:Y0,Tween:en,Timeline:Wn,Animation:ll,getCache:Xs,_removeLinkedListItem:Sc,reverting:function(){return mn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return rp=e}}};jn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return hc[o]=en[o]});oi.add(Wn.updateRoot);Vo=hc.to({},{duration:0});var mM=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},gM=function(e,t){var i=e._targets,s,a,u;for(s in t)for(a=i.length;a--;)u=e._ptLookup[a][s],u&&(u=u.d)&&(u._pt&&(u=mM(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[a],s))},vd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,a,u){u._onInit=function(c){var d,h;if(dn(a)&&(d={},jn(a,function(p){return d[p]=1}),a=d),t){d={};for(h in a)d[h]=t(a[h]);a=d}gM(c,a)}}}},Zn=hc.registerPlugin({name:"attr",init:function(e,t,i,s,a){var u,c,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],s,a,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)mn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},vd("roundProps",oh),vd("modifiers"),vd("snap",ov))||hc;en.version=Wn.version=Zn.version="3.15.0";X0=1;op()&&Qo();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var x_,is,Wo,vp,Hs,y_,xp,_M=function(){return typeof window<"u"},Ar={},Os=180/Math.PI,Xo=Math.PI/180,wo=Math.atan2,S_=1e8,yp=/([A-Z])/g,vM=/(left|right|width|margin|padding|x)/i,xM=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},MM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},EM=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},wv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Av=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TM=function(e,t,i){return e.style[t]=i},wM=function(e,t,i){return e.style.setProperty(t,i)},AM=function(e,t,i){return e._gsap[t]=i},CM=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},RM=function(e,t,i,s,a){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(a,u)},bM=function(e,t,i,s,a){var u=e._gsap;u[t]=i,u.renderTransform(a,u)},Yt="transform",qn=Yt+"Origin",PM=function o(e,t){var i=this,s=this.target,a=s.style,u=s._gsap;if(e in Ar&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=yr(s,c)}):this.tfm[e]=u.x?u[e]:yr(s,e),e===qn&&(this.tfm.zOrigin=u.zOrigin);else return Ki.transform.split(",").forEach(function(c){return o.call(i,c,t)});if(this.props.indexOf(Yt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=Yt}(a||t)&&this.props.push(e,t,a[e])},Cv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},LM=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(yp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=xp(),(!a||!a.isStart)&&!i[Yt]&&(Cv(i),s.zOrigin&&i[qn]&&(i[qn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Rv=function(e,t){var i={target:e,props:[],revert:LM,save:PM};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},bv,ch=function(e,t){var i=is.createElementNS?is.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):is.createElement(e);return i&&i.style?i:is.createElement(e)},li=function o(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(yp,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&o(e,Jo(t)||t,1)||""},M_="O,Moz,ms,Ms,Webkit".split(","),Jo=function(e,t,i){var s=t||Hs,a=s.style,u=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(M_[u]+e in a););return u<0?null:(u===3?"ms":u>=0?M_[u]:"")+e},fh=function(){_M()&&window.document&&(x_=window,is=x_.document,Wo=is.documentElement,Hs=ch("div")||{style:{}},ch("div"),Yt=Jo(Yt),qn=Yt+"Origin",Hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bv=!!Jo("perspective"),xp=Zn.core.reverting,vp=1)},E_=function(e){var t=e.ownerSVGElement,i=ch("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",i.appendChild(s),Wo.appendChild(i);try{a=s.getBBox()}catch{}return i.removeChild(s),Wo.removeChild(i),a},T_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Pv=function(e){var t,i;try{t=e.getBBox()}catch{t=E_(e),i=1}return t&&(t.width||t.height)||i||(t=E_(e)),t&&!t.width&&!t.x&&!t.y?{x:+T_(e,["x","cx","x1"])||0,y:+T_(e,["y","cy","y1"])||0,width:0,height:0}:t},Lv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pv(e))},cs=function(e,t){if(t){var i=e.style,s;t in Ar&&t!==qn&&(t=Yt),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(yp,"-$1").toLowerCase())):i.removeAttribute(t)}},rs=function(e,t,i,s,a,u){var c=new Yn(e._pt,t,i,0,1,u?Av:wv);return e._pt=c,c.b=s,c.e=a,e._props.push(i),c},w_={deg:1,rad:1,turn:1},DM={grid:1,flex:1},fs=function o(e,t,i,s){var a=parseFloat(i)||0,u=(i+"").trim().substr((a+"").length)||"px",c=Hs.style,d=vM.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),g=100,_=s==="px",S=s==="%",E,M,y,v;if(s===u||!a||w_[s]||w_[u])return a;if(u!=="px"&&!_&&(a=o(e,t,i,"px")),v=e.getCTM&&Lv(e),(S||u==="%")&&(Ar[t]||~t.indexOf("adius")))return E=v?e.getBBox()[d?"width":"height"]:e[p],Zt(S?a/E*g:a/100*E);if(c[d?"width":"height"]=g+(_?u:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,v&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===is||!M.appendChild)&&(M=is.body),y=M._gsap,y&&S&&y.width&&d&&y.time===oi.time&&!y.uncache)return Zt(a/y.width*g);if(S&&(t==="height"||t==="width")){var P=e.style[t];e.style[t]=g+s,E=e[p],P?e.style[t]=P:cs(e,t)}else(S||u==="%")&&!DM[li(M,"display")]&&(c.position=li(e,"position")),M===e&&(c.position="static"),M.appendChild(Hs),E=Hs[p],M.removeChild(Hs),c.position="absolute";return d&&S&&(y=Xs(M),y.time=oi.time,y.width=M[p]),Zt(_?E*a/g:E&&a?g/E*a:0)},yr=function(e,t,i,s){var a;return vp||fh(),t in Ki&&t!=="transform"&&(t=Ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ar[t]&&t!=="transform"?(a=cl(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:mc(li(e,qn))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=pc[t]&&pc[t](e,t,i)||li(e,t)||$0(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?fs(e,t,a,i)+i:a},IM=function(e,t,i,s){if(!i||i==="none"){var a=Jo(t,e,1),u=a&&li(e,a,1);u&&u!==i?(t=a,i=u):t==="borderColor"&&(i=li(e,"borderTopColor"))}var c=new Yn(this._pt,e.style,t,0,1,Mv),d=0,h=0,p,g,_,S,E,M,y,v,P,b,C,N;if(c.b=i,c.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=li(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=li(e,t)||s,M?e.style[t]=M:cs(e,t)),p=[i,s],pv(p),i=p[0],s=p[1],_=i.match(Bo)||[],N=s.match(Bo)||[],N.length){for(;g=Bo.exec(s);)y=g[0],P=s.substring(d,g.index),E?E=(E+1)%5:(P.substr(-5)==="rgba("||P.substr(-5)==="hsla(")&&(E=1),y!==(M=_[h++]||"")&&(S=parseFloat(M)||0,C=M.substr((S+"").length),y.charAt(1)==="="&&(y=Go(S,y)+C),v=parseFloat(y),b=y.substr((v+"").length),d=Bo.lastIndex-b.length,b||(b=b||ui.units[t]||C,d===s.length&&(s+=b,c.e+=b)),C!==b&&(S=fs(e,t,M,b)||0),c._pt={_next:c._pt,p:P||h===1?P:",",s:S,c:v-S,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=t==="display"&&s==="none"?Av:wv;return W0.test(s)&&(c.e=0),this._pt=c,c},A_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UM=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=A_[i]||i,t[1]=A_[s]||s,t.join(" ")},NM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,a=t.u,u=i._gsap,c,d,h;if(a==="all"||a===!0)s.cssText="",d=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Ar[c]&&(d=1,c=c==="transformOrigin"?qn:Yt),cs(i,c);d&&(cs(i,Yt),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",cl(i,1),u.uncache=1,Cv(s)))}},pc={clearProps:function(e,t,i,s,a){if(a.data!=="isFromStart"){var u=e._pt=new Yn(e._pt,t,i,0,0,NM);return u.u=s,u.pr=-10,u.tween=a,e._props.push(i),1}}},ul=[1,0,0,1,0,0],Dv={},Iv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},C_=function(e){var t=li(e,Yt);return Iv(t)?ul:t.substr(7).match(G0).map(Zt)},Sp=function(e,t){var i=e._gsap||Xs(e),s=e.style,a=C_(e),u,c,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?ul:a):(a===ul&&!e.offsetParent&&e!==Wo&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,Wo.appendChild(e)),a=C_(e),d?s.display=d:cs(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):Wo.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},dh=function(e,t,i,s,a,u){var c=e._gsap,d=a||Sp(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,g=c.xOffset||0,_=c.yOffset||0,S=d[0],E=d[1],M=d[2],y=d[3],v=d[4],P=d[5],b=t.split(" "),C=parseFloat(b[0])||0,N=parseFloat(b[1])||0,U,D,O,T;i?d!==ul&&(D=S*y-E*M)&&(O=C*(y/D)+N*(-M/D)+(M*P-y*v)/D,T=C*(-E/D)+N*(S/D)-(S*P-E*v)/D,C=O,N=T):(U=Pv(e),C=U.x+(~b[0].indexOf("%")?C/100*U.width:C),N=U.y+(~(b[1]||b[0]).indexOf("%")?N/100*U.height:N)),s||s!==!1&&c.smooth?(v=C-h,P=N-p,c.xOffset=g+(v*S+P*M)-v,c.yOffset=_+(v*E+P*y)-P):c.xOffset=c.yOffset=0,c.xOrigin=C,c.yOrigin=N,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[qn]="0px 0px",u&&(rs(u,c,"xOrigin",h,C),rs(u,c,"yOrigin",p,N),rs(u,c,"xOffset",g,c.xOffset),rs(u,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",C+" "+N)},cl=function(e,t){var i=e._gsap||new gv(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,a=i.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=li(e,qn)||"0",p,g,_,S,E,M,y,v,P,b,C,N,U,D,O,T,A,k,ee,W,le,ie,K,Q,B,ce,ue,z,re,De,J,de;return p=g=_=M=y=v=P=b=C=0,S=E=1,i.svg=!!(e.getCTM&&Lv(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[Yt]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Yt]!=="none"?d[Yt]:"")),s.scale=s.rotate=s.translate="none"),D=Sp(e,i.svg),i.svg&&(i.uncache?(B=e.getBBox(),h=i.xOrigin-B.x+"px "+(i.yOrigin-B.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),dh(e,Q||h,!!Q||i.originIsAbsolute,i.smooth!==!1,D)),N=i.xOrigin||0,U=i.yOrigin||0,D!==ul&&(k=D[0],ee=D[1],W=D[2],le=D[3],p=ie=D[4],g=K=D[5],D.length===6?(S=Math.sqrt(k*k+ee*ee),E=Math.sqrt(le*le+W*W),M=k||ee?wo(ee,k)*Os:0,P=W||le?wo(W,le)*Os+M:0,P&&(E*=Math.abs(Math.cos(P*Xo))),i.svg&&(p-=N-(N*k+U*W),g-=U-(N*ee+U*le))):(de=D[6],De=D[7],ue=D[8],z=D[9],re=D[10],J=D[11],p=D[12],g=D[13],_=D[14],O=wo(de,re),y=O*Os,O&&(T=Math.cos(-O),A=Math.sin(-O),Q=ie*T+ue*A,B=K*T+z*A,ce=de*T+re*A,ue=ie*-A+ue*T,z=K*-A+z*T,re=de*-A+re*T,J=De*-A+J*T,ie=Q,K=B,de=ce),O=wo(-W,re),v=O*Os,O&&(T=Math.cos(-O),A=Math.sin(-O),Q=k*T-ue*A,B=ee*T-z*A,ce=W*T-re*A,J=le*A+J*T,k=Q,ee=B,W=ce),O=wo(ee,k),M=O*Os,O&&(T=Math.cos(O),A=Math.sin(O),Q=k*T+ee*A,B=ie*T+K*A,ee=ee*T-k*A,K=K*T-ie*A,k=Q,ie=B),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,v=180-v),S=Zt(Math.sqrt(k*k+ee*ee+W*W)),E=Zt(Math.sqrt(K*K+de*de)),O=wo(ie,K),P=Math.abs(O)>2e-4?O*Os:0,C=J?1/(J<0?-J:J):0),i.svg&&(Q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Iv(li(e,Yt)),Q&&e.setAttribute("transform",Q))),Math.abs(P)>90&&Math.abs(P)<270&&(a?(S*=-1,P+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,P+=P<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=g-((i.yPercent=g&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=_+u,i.scaleX=Zt(S),i.scaleY=Zt(E),i.rotation=Zt(M)+c,i.rotationX=Zt(y)+c,i.rotationY=Zt(v)+c,i.skewX=P+c,i.skewY=b+c,i.transformPerspective=C+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[qn]=mc(h)),i.xOffset=i.yOffset=0,i.force3D=ui.force3D,i.renderTransform=i.svg?OM:bv?Uv:FM,i.uncache=0,i},mc=function(e){return(e=e.split(" "))[0]+" "+e[1]},xd=function(e,t,i){var s=Tn(t);return Zt(parseFloat(t)+parseFloat(fs(e,"x",i+"px",s)))+s},FM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Uv(e,t)},bs="0deg",Va="0px",Ps=") ",Uv=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,u=i.x,c=i.y,d=i.z,h=i.rotation,p=i.rotationY,g=i.rotationX,_=i.skewX,S=i.skewY,E=i.scaleX,M=i.scaleY,y=i.transformPerspective,v=i.force3D,P=i.target,b=i.zOrigin,C="",N=v==="auto"&&e&&e!==1||v===!0;if(b&&(g!==bs||p!==bs)){var U=parseFloat(p)*Xo,D=Math.sin(U),O=Math.cos(U),T;U=parseFloat(g)*Xo,T=Math.cos(U),u=xd(P,u,D*T*-b),c=xd(P,c,-Math.sin(U)*-b),d=xd(P,d,O*T*-b+b)}y!==Va&&(C+="perspective("+y+Ps),(s||a)&&(C+="translate("+s+"%, "+a+"%) "),(N||u!==Va||c!==Va||d!==Va)&&(C+=d!==Va||N?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Ps),h!==bs&&(C+="rotate("+h+Ps),p!==bs&&(C+="rotateY("+p+Ps),g!==bs&&(C+="rotateX("+g+Ps),(_!==bs||S!==bs)&&(C+="skew("+_+", "+S+Ps),(E!==1||M!==1)&&(C+="scale("+E+", "+M+Ps),P.style[Yt]=C||"translate(0, 0)"},OM=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,u=i.x,c=i.y,d=i.rotation,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,S=i.target,E=i.xOrigin,M=i.yOrigin,y=i.xOffset,v=i.yOffset,P=i.forceCSS,b=parseFloat(u),C=parseFloat(c),N,U,D,O,T;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=Xo,h*=Xo,N=Math.cos(d)*g,U=Math.sin(d)*g,D=Math.sin(d-h)*-_,O=Math.cos(d-h)*_,h&&(p*=Xo,T=Math.tan(h-p),T=Math.sqrt(1+T*T),D*=T,O*=T,p&&(T=Math.tan(p),T=Math.sqrt(1+T*T),N*=T,U*=T)),N=Zt(N),U=Zt(U),D=Zt(D),O=Zt(O)):(N=g,O=_,U=D=0),(b&&!~(u+"").indexOf("px")||C&&!~(c+"").indexOf("px"))&&(b=fs(S,"x",u,"px"),C=fs(S,"y",c,"px")),(E||M||y||v)&&(b=Zt(b+E-(E*N+M*D)+y),C=Zt(C+M-(E*U+M*O)+v)),(s||a)&&(T=S.getBBox(),b=Zt(b+s/100*T.width),C=Zt(C+a/100*T.height)),T="matrix("+N+","+U+","+D+","+O+","+b+","+C+")",S.setAttribute("transform",T),P&&(S.style[Yt]=T)},kM=function(e,t,i,s,a){var u=360,c=dn(a),d=parseFloat(a)*(c&&~a.indexOf("rad")?Os:1),h=d-s,p=s+h+"deg",g,_;return c&&(g=a.split("_")[1],g==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),g==="cw"&&h<0?h=(h+u*S_)%u-~~(h/u)*u:g==="ccw"&&h>0&&(h=(h-u*S_)%u-~~(h/u)*u)),e._pt=_=new Yn(e._pt,t,i,s,h,yM),_.e=p,_.u="deg",e._props.push(i),_},R_=function(e,t){for(var i in t)e[i]=t[i];return e},zM=function(e,t,i){var s=R_({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,d,h,p,g,_,S,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[Yt]=t,c=cl(i,1),cs(i,Yt),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Yt],u[Yt]=t,c=cl(i,1),u[Yt]=h);for(d in Ar)h=s[d],p=c[d],h!==p&&a.indexOf(d)<0&&(S=Tn(h),E=Tn(p),g=S!==E?fs(i,d,h,E):parseFloat(h),_=parseFloat(p),e._pt=new Yn(e._pt,c,d,g,_-g,uh),e._pt.u=E||0,e._props.push(d));R_(c,s)};jn("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",s="Bottom",a="Left",u=(e<3?[t,i,s,a]:[t+a,t+i,s+i,s+a]).map(function(c){return e<2?o+c:"border"+c+o});pc[e>1?"border"+o:o]=function(c,d,h,p,g){var _,S;if(arguments.length<4)return _=u.map(function(E){return yr(c,E,h)}),S=_.join(" "),S.split(_[0]).length===5?_[0]:S;_=(p+"").split(" "),S={},u.forEach(function(E,M){return S[E]=_[M]=_[M]||_[(M-1)/2|0]}),c.init(d,S,g)}});var Nv={name:"css",register:fh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,a){var u=this._props,c=e.style,d=i.vars.startAt,h,p,g,_,S,E,M,y,v,P,b,C,N,U,D,O,T;vp||fh(),this.styles=this.styles||Rv(e),O=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(ri[M]&&_v(M,t,i,s,e,a)))){if(S=typeof p,E=pc[M],S==="function"&&(p=p.call(i,s,e,a),S=typeof p),S==="string"&&~p.indexOf("random(")&&(p=ol(p)),E)E(this,e,M,p,i)&&(D=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",os.lastIndex=0,os.test(h)||(y=Tn(h),v=Tn(p),v?y!==v&&(h=fs(e,M,h,v)+v):y&&(p+=y)),this.add(c,"setProperty",h,p,s,a,0,0,M),u.push(M),O.push(M,0,c[M]);else if(S!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,s,e,a):d[M],dn(h)&&~h.indexOf("random(")&&(h=ol(h)),Tn(h+"")||h==="auto"||(h+=ui.units[M]||Tn(yr(e,M))||""),(h+"").charAt(1)==="="&&(h=yr(e,M))):h=yr(e,M),_=parseFloat(h),P=S==="string"&&p.charAt(1)==="="&&p.substr(0,2),P&&(p=p.substr(2)),g=parseFloat(p),M in Ki&&(M==="autoAlpha"&&(_===1&&yr(e,"visibility")==="hidden"&&g&&(_=0),O.push("visibility",0,c.visibility),rs(this,c,"visibility",_?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=Ki[M],~M.indexOf(",")&&(M=M.split(",")[0]))),b=M in Ar,b){if(this.styles.save(M),T=p,S==="string"&&p.substring(0,6)==="var(--"){if(p=li(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=p,p=li(e,"perspective"),A?e.style.perspective=A:cs(e,"perspective")}g=parseFloat(p)}if(C||(N=e._gsap,N.renderTransform&&!t.parseTransform||cl(e,t.parseTransform),U=t.smoothOrigin!==!1&&N.smooth,C=this._pt=new Yn(this._pt,c,Yt,0,1,N.renderTransform,N,0,-1),C.dep=1),M==="scale")this._pt=new Yn(this._pt,N,"scaleY",N.scaleY,(P?Go(N.scaleY,P+g):g)-N.scaleY||0,uh),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){O.push(qn,0,c[qn]),p=UM(p),N.svg?dh(e,p,0,U,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==N.zOrigin&&rs(this,N,"zOrigin",N.zOrigin,v),rs(this,c,M,mc(h),mc(p)));continue}else if(M==="svgOrigin"){dh(e,p,1,U,0,this);continue}else if(M in Dv){kM(this,N,M,_,P?Go(_,P+p):p);continue}else if(M==="smoothOrigin"){rs(this,N,"smooth",N.smooth,p);continue}else if(M==="force3D"){N[M]=p;continue}else if(M==="transform"){zM(this,p,e);continue}}else M in c||(M=Jo(M)||M);if(b||(g||g===0)&&(_||_===0)&&!xM.test(p)&&M in c)y=(h+"").substr((_+"").length),g||(g=0),v=Tn(p)||(M in ui.units?ui.units[M]:y),y!==v&&(_=fs(e,M,h,v)),this._pt=new Yn(this._pt,b?N:c,M,_,(P?Go(_,P+g):g)-_,!b&&(v==="px"||M==="zIndex")&&t.autoRound!==!1?EM:uh),this._pt.u=v||0,b&&T!==p?(this._pt.b=h,this._pt.e=T,this._pt.r=MM):y!==v&&v!=="%"&&(this._pt.b=h,this._pt.r=SM);else if(M in c)IM.call(this,e,M,h,P?P+p:p);else if(M in e)this.add(e,M,h||e[M],P?P+p:p,s,a);else if(M!=="parseTransform"){lp(M,p);continue}b||(M in c?O.push(M,0,c[M]):typeof e[M]=="function"?O.push(M,2,e[M]()):O.push(M,1,h||e[M])),u.push(M)}}D&&Ev(this)},render:function(e,t){if(t.tween._time||!xp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:yr,aliases:Ki,getSetter:function(e,t,i){var s=Ki[t];return s&&s.indexOf(",")<0&&(t=s),t in Ar&&t!==qn&&(e._gsap.x||yr(e,"x"))?i&&y_===i?t==="scale"?CM:AM:(y_=i||{})&&(t==="scale"?RM:bM):e.style&&!sp(e.style[t])?TM:~t.indexOf("-")?wM:gp(e,t)},core:{_removeProperty:cs,_getMatrix:Sp}};Zn.utils.checkPrefix=Jo;Zn.core.getStyleSaver=Rv;(function(o,e,t,i){var s=jn(o+","+e+","+t,function(a){Ar[a]=1});jn(e,function(a){ui.units[a]="deg",Dv[a]=1}),Ki[s[13]]=o+","+e,jn(i,function(a){var u=a.split(":");Ki[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ui.units[o]="px"});Zn.registerPlugin(Nv);var hh=Zn.registerPlugin(Nv)||Zn;hh.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="170",BM=0,b_=1,VM=2,Fv=1,HM=2,vr=3,ds=0,$n=1,Sr=2,as=0,jo=1,ph=2,P_=3,L_=4,GM=5,Bs=100,WM=101,XM=102,jM=103,YM=104,qM=200,$M=201,KM=202,ZM=203,mh=204,gh=205,QM=206,JM=207,e1=208,t1=209,n1=210,i1=211,r1=212,s1=213,o1=214,_h=0,vh=1,xh=2,ea=3,yh=4,Sh=5,Mh=6,Eh=7,Ov=0,a1=1,l1=2,ls=0,u1=1,c1=2,f1=3,d1=4,h1=5,p1=6,m1=7,kv=300,ta=301,na=302,Th=303,wh=304,Tc=306,Ah=1e3,Gs=1001,Ch=1002,ki=1003,g1=1004,wu=1005,Zi=1006,yd=1007,Ws=1008,Cr=1009,zv=1010,Bv=1011,fl=1012,Ep=1013,$s=1014,Mr=1015,hl=1016,Tp=1017,wp=1018,ia=1020,Vv=35902,Hv=1021,Gv=1022,Oi=1023,Wv=1024,Xv=1025,Yo=1026,ra=1027,jv=1028,Ap=1029,Yv=1030,Cp=1031,Rp=1033,nc=33776,ic=33777,rc=33778,sc=33779,Rh=35840,bh=35841,Ph=35842,Lh=35843,Dh=36196,Ih=37492,Uh=37496,Nh=37808,Fh=37809,Oh=37810,kh=37811,zh=37812,Bh=37813,Vh=37814,Hh=37815,Gh=37816,Wh=37817,Xh=37818,jh=37819,Yh=37820,qh=37821,oc=36492,$h=36494,Kh=36495,qv=36283,Zh=36284,Qh=36285,Jh=36286,_1=3200,v1=3201,$v=0,x1=1,ts="",Mi="srgb",oa="srgb-linear",wc="linear",bt="srgb",Ao=7680,D_=519,y1=512,S1=513,M1=514,Kv=515,E1=516,T1=517,w1=518,A1=519,I_=35044,U_="300 es",Er=2e3,gc=2001;class aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,ep=180/Math.PI;function pl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[o&255]+Mn[o>>8&255]+Mn[o>>16&255]+Mn[o>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function In(o,e,t){return Math.max(e,Math.min(t,o))}function C1(o,e){return(o%e+e)%e}function Sd(o,e,t){return(1-t)*o+t*e}function Ha(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*s+e.x,this.y=a*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,s,a,u,c,d,h){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h)}set(e,t,i,s,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],g=i[7],_=i[2],S=i[5],E=i[8],M=s[0],y=s[3],v=s[6],P=s[1],b=s[4],C=s[7],N=s[2],U=s[5],D=s[8];return a[0]=u*M+c*P+d*N,a[3]=u*y+c*b+d*U,a[6]=u*v+c*C+d*D,a[1]=h*M+p*P+g*N,a[4]=h*y+p*b+g*U,a[7]=h*v+p*C+g*D,a[2]=_*M+S*P+E*N,a[5]=_*y+S*b+E*U,a[8]=_*v+S*C+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*a*p+i*c*d+s*a*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,_=c*d-p*a,S=h*a-u*d,E=t*g+i*_+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(s*h-p*i)*M,e[2]=(c*i-s*u)*M,e[3]=_*M,e[4]=(p*t-s*d)*M,e[5]=(s*a-c*t)*M,e[6]=S*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Md.makeScale(e,t)),this}rotate(e){return this.premultiply(Md.makeRotation(-e)),this}translate(e,t){return this.premultiply(Md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Md=new ot;function Zv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _c(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function R1(){const o=_c("canvas");return o.style.display="block",o}const N_={};function Za(o){o in N_||(N_[o]=!0,console.warn(o))}function b1(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function P1(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function L1(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(o.r=Tr(o.r),o.g=Tr(o.g),o.b=Tr(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(o.r=qo(o.r),o.g=qo(o.g),o.b=qo(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ts?wc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Tr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const F_=[.64,.33,.3,.6,.15,.06],O_=[.2126,.7152,.0722],k_=[.3127,.329],z_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[oa]:{primaries:F_,whitePoint:k_,transfer:wc,toXYZ:z_,fromXYZ:B_,luminanceCoefficients:O_,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:F_,whitePoint:k_,transfer:bt,toXYZ:z_,fromXYZ:B_,luminanceCoefficients:O_,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}});let Co;class D1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Co===void 0&&(Co=_c("canvas")),Co.width=e.width,Co.height=e.height;const i=Co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Co}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=Tr(a[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I1=0;class Qv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=pl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(Ed(s[u].image)):a.push(Ed(s[u]))}else a=Ed(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ed(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?D1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U1=0;class Kn extends aa{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,i=Gs,s=Gs,a=Zi,u=Ws,c=Oi,d=Cr,h=Kn.DEFAULT_ANISOTROPY,p=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=pl(),this.name="",this.source=new Qv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case Gs:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case Gs:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=kv;Kn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],p=d[4],g=d[8],_=d[1],S=d[5],E=d[9],M=d[2],y=d[6],v=d[10];if(Math.abs(p-_)<.01&&Math.abs(g-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+M)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,C=(S+1)/2,N=(v+1)/2,U=(p+_)/4,D=(g+M)/4,O=(E+y)/4;return b>C&&b>N?b<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(b),s=U/i,a=D/i):C>N?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=U/s,a=O/s):N<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(N),i=D/a,s=O/a),this.set(i,s,a,t),this}let P=Math.sqrt((y-E)*(y-E)+(g-M)*(g-M)+(_-p)*(_-p));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(g-M)/P,this.z=(_-p)/P,this.w=Math.acos((h+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N1 extends aa{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Kn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends N1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jv extends Kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ki,this.minFilter=ki,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class F1 extends Kn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ki,this.minFilter=ki,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,u,c){let d=i[s+0],h=i[s+1],p=i[s+2],g=i[s+3];const _=a[u+0],S=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(g!==M||d!==_||h!==S||p!==E){let y=1-c;const v=d*_+h*S+p*E+g*M,P=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const N=Math.sqrt(b),U=Math.atan2(N,v*P);y=Math.sin(y*U)/N,c=Math.sin(c*U)/N}const C=c*P;if(d=d*y+_*C,h=h*y+S*C,p=p*y+E*C,g=g*y+M*C,y===1-c){const N=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=N,h*=N,p*=N,g*=N}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,u){const c=i[s],d=i[s+1],h=i[s+2],p=i[s+3],g=a[u],_=a[u+1],S=a[u+2],E=a[u+3];return e[t]=c*E+p*g+d*S-h*_,e[t+1]=d*E+p*_+h*g-c*S,e[t+2]=h*E+p*S+c*_-d*g,e[t+3]=p*E-c*g-d*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(s/2),g=c(a/2),_=d(i/2),S=d(s/2),E=d(a/2);switch(u){case"XYZ":this._x=_*p*g+h*S*E,this._y=h*S*g-_*p*E,this._z=h*p*E+_*S*g,this._w=h*p*g-_*S*E;break;case"YXZ":this._x=_*p*g+h*S*E,this._y=h*S*g-_*p*E,this._z=h*p*E-_*S*g,this._w=h*p*g+_*S*E;break;case"ZXY":this._x=_*p*g-h*S*E,this._y=h*S*g+_*p*E,this._z=h*p*E+_*S*g,this._w=h*p*g-_*S*E;break;case"ZYX":this._x=_*p*g-h*S*E,this._y=h*S*g+_*p*E,this._z=h*p*E-_*S*g,this._w=h*p*g+_*S*E;break;case"YZX":this._x=_*p*g+h*S*E,this._y=h*S*g+_*p*E,this._z=h*p*E-_*S*g,this._w=h*p*g-_*S*E;break;case"XZY":this._x=_*p*g-h*S*E,this._y=h*S*g-_*p*E,this._z=h*p*E+_*S*g,this._w=h*p*g+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],_=i+c+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(p-d)*S,this._y=(a-h)*S,this._z=(u-s)*S}else if(i>c&&i>g){const S=2*Math.sqrt(1+i-c-g);this._w=(p-d)/S,this._x=.25*S,this._y=(s+u)/S,this._z=(a+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-i-g);this._w=(a-h)/S,this._x=(s+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+g-i-c);this._w=(u-s)/S,this._x=(a+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+s*h-a*d,this._y=s*p+u*d+a*c-i*h,this._z=a*p+u*h+i*d-s*c,this._w=u*p-i*c-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*i+t*this._x,this._y=S*s+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=u*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(V_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(V_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),p=2*(c*t-a*s),g=2*(a*i-u*t);return this.x=t+d*h+u*g-c*p,this.y=i+d*p+c*h-a*g,this.z=s+d*g+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new $,V_=new ml;class gl{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ui):Ui.fromBufferAttribute(a,u),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Au.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Au.copy(i.boundingBox)),Au.applyMatrix4(e.matrixWorld),this.union(Au)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),Cu.subVectors(this.max,Ga),Ro.subVectors(e.a,Ga),bo.subVectors(e.b,Ga),Po.subVectors(e.c,Ga),$r.subVectors(bo,Ro),Kr.subVectors(Po,bo),Ls.subVectors(Ro,Po);let t=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-Ls.z,Ls.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,Ls.z,0,-Ls.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-Ls.y,Ls.x,0];return!wd(t,Ro,bo,Po,Cu)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,Ro,bo,Po,Cu))?!1:(Ru.crossVectors($r,Kr),t=[Ru.x,Ru.y,Ru.z],wd(t,Ro,bo,Po,Cu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hr=[new $,new $,new $,new $,new $,new $,new $,new $],Ui=new $,Au=new gl,Ro=new $,bo=new $,Po=new $,$r=new $,Kr=new $,Ls=new $,Ga=new $,Cu=new $,Ru=new $,Ds=new $;function wd(o,e,t,i,s){for(let a=0,u=o.length-3;a<=u;a+=3){Ds.fromArray(o,a);const c=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),d=e.dot(Ds),h=t.dot(Ds),p=i.dot(Ds);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const O1=new gl,Wa=new $,Ad=new $;class _l{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):O1.setFromPoints(e).getCenter(i);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Wa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Ad)),this.expandByPoint(Wa.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pr=new $,Cd=new $,bu=new $,Zr=new $,Rd=new $,Pu=new $,bd=new $;class bp{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cd.copy(e).add(t).multiplyScalar(.5),bu.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Cd);const a=e.distanceTo(t)*.5,u=-this.direction.dot(bu),c=Zr.dot(this.direction),d=-Zr.dot(bu),h=Zr.lengthSq(),p=Math.abs(1-u*u);let g,_,S,E;if(p>0)if(g=u*d-c,_=u*c-d,E=a*p,g>=0)if(_>=-E)if(_<=E){const M=1/p;g*=M,_*=M,S=g*(g+u*_+2*c)+_*(u*g+_+2*d)+h}else _=a,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;else _=-a,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;else _<=-E?(g=Math.max(0,-(-u*a+c)),_=g>0?-a:Math.min(Math.max(-a,-d),a),S=-g*g+_*(_+2*d)+h):_<=E?(g=0,_=Math.min(Math.max(-a,-d),a),S=_*(_+2*d)+h):(g=Math.max(0,-(u*a+c)),_=g>0?a:Math.min(Math.max(-a,-d),a),S=-g*g+_*(_+2*d)+h);else _=u>0?-a:a,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Cd).addScaledVector(bu,_),S}intersectSphere(e,t){pr.subVectors(e.center,this.origin);const i=pr.dot(this.direction),s=pr.dot(pr)-i*i,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),p>=0?(a=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),i>u||a>s||((a>i||isNaN(i))&&(i=a),(u<s||isNaN(s))&&(s=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,i,s,a){Rd.subVectors(t,e),Pu.subVectors(i,e),bd.crossVectors(Rd,Pu);let u=this.direction.dot(bd),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Zr.subVectors(this.origin,e);const d=c*this.direction.dot(Pu.crossVectors(Zr,Pu));if(d<0)return null;const h=c*this.direction.dot(Rd.cross(Zr));if(h<0||d+h>u)return null;const p=-c*Zr.dot(bd);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,s,a,u,c,d,h,p,g,_,S,E,M,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,u,c,d,h,p,g,_,S,E,M,y)}set(e,t,i,s,a,u,c,d,h,p,g,_,S,E,M,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=s,v[1]=a,v[5]=u,v[9]=c,v[13]=d,v[2]=h,v[6]=p,v[10]=g,v[14]=_,v[3]=S,v[7]=E,v[11]=M,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Lo.setFromMatrixColumn(e,0).length(),a=1/Lo.setFromMatrixColumn(e,1).length(),u=1/Lo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=u*p,S=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=S+E*h,t[5]=_-M*h,t[9]=-c*d,t[2]=M-_*h,t[6]=E+S*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*p,S=d*g,E=h*p,M=h*g;t[0]=_+M*c,t[4]=E*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=S*c-E,t[6]=M+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*p,S=d*g,E=h*p,M=h*g;t[0]=_-M*c,t[4]=-u*g,t[8]=E+S*c,t[1]=S+E*c,t[5]=u*p,t[9]=M-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*p,S=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=E*h-S,t[8]=_*h+M,t[1]=d*g,t[5]=M*h+_,t[9]=S*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-_*g,t[8]=E*g+S,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*g+E,t[10]=_-M*g}else if(e.order==="XZY"){const _=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=_*g+M,t[5]=u*p,t[9]=S*g-E,t[2]=E*g-S,t[6]=c*p,t[10]=M*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k1,e,z1)}lookAt(e,t,i){const s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Qr.crossVectors(i,ni),Qr.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Qr.crossVectors(i,ni)),Qr.normalize(),Lu.crossVectors(ni,Qr),s[0]=Qr.x,s[4]=Lu.x,s[8]=ni.x,s[1]=Qr.y,s[5]=Lu.y,s[9]=ni.y,s[2]=Qr.z,s[6]=Lu.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],g=i[5],_=i[9],S=i[13],E=i[2],M=i[6],y=i[10],v=i[14],P=i[3],b=i[7],C=i[11],N=i[15],U=s[0],D=s[4],O=s[8],T=s[12],A=s[1],k=s[5],ee=s[9],W=s[13],le=s[2],ie=s[6],K=s[10],Q=s[14],B=s[3],ce=s[7],ue=s[11],z=s[15];return a[0]=u*U+c*A+d*le+h*B,a[4]=u*D+c*k+d*ie+h*ce,a[8]=u*O+c*ee+d*K+h*ue,a[12]=u*T+c*W+d*Q+h*z,a[1]=p*U+g*A+_*le+S*B,a[5]=p*D+g*k+_*ie+S*ce,a[9]=p*O+g*ee+_*K+S*ue,a[13]=p*T+g*W+_*Q+S*z,a[2]=E*U+M*A+y*le+v*B,a[6]=E*D+M*k+y*ie+v*ce,a[10]=E*O+M*ee+y*K+v*ue,a[14]=E*T+M*W+y*Q+v*z,a[3]=P*U+b*A+C*le+N*B,a[7]=P*D+b*k+C*ie+N*ce,a[11]=P*O+b*ee+C*K+N*ue,a[15]=P*T+b*W+C*Q+N*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],_=e[10],S=e[14],E=e[3],M=e[7],y=e[11],v=e[15];return E*(+a*d*g-s*h*g-a*c*_+i*h*_+s*c*S-i*d*S)+M*(+t*d*S-t*h*_+a*u*_-s*u*S+s*h*p-a*d*p)+y*(+t*h*g-t*c*S-a*u*g+i*u*S+a*c*p-i*h*p)+v*(-s*c*p-t*d*g+t*c*_+s*u*g-i*u*_+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],_=e[10],S=e[11],E=e[12],M=e[13],y=e[14],v=e[15],P=g*y*h-M*_*h+M*d*S-c*y*S-g*d*v+c*_*v,b=E*_*h-p*y*h-E*d*S+u*y*S+p*d*v-u*_*v,C=p*M*h-E*g*h+E*c*S-u*M*S-p*c*v+u*g*v,N=E*g*d-p*M*d-E*c*_+u*M*_+p*c*y-u*g*y,U=t*P+i*b+s*C+a*N;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=P*D,e[1]=(M*_*a-g*y*a-M*s*S+i*y*S+g*s*v-i*_*v)*D,e[2]=(c*y*a-M*d*a+M*s*h-i*y*h-c*s*v+i*d*v)*D,e[3]=(g*d*a-c*_*a-g*s*h+i*_*h+c*s*S-i*d*S)*D,e[4]=b*D,e[5]=(p*y*a-E*_*a+E*s*S-t*y*S-p*s*v+t*_*v)*D,e[6]=(E*d*a-u*y*a-E*s*h+t*y*h+u*s*v-t*d*v)*D,e[7]=(u*_*a-p*d*a+p*s*h-t*_*h-u*s*S+t*d*S)*D,e[8]=C*D,e[9]=(E*g*a-p*M*a-E*i*S+t*M*S+p*i*v-t*g*v)*D,e[10]=(u*M*a-E*c*a+E*i*h-t*M*h-u*i*v+t*c*v)*D,e[11]=(p*c*a-u*g*a-p*i*h+t*g*h+u*i*S-t*c*S)*D,e[12]=N*D,e[13]=(p*M*s-E*g*s+E*i*_-t*M*_-p*i*y+t*g*y)*D,e[14]=(E*c*s-u*M*s-E*i*d+t*M*d+u*i*y-t*c*y)*D,e[15]=(u*g*s-p*c*s+p*i*d-t*g*d-u*i*_+t*c*_)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+i,p*d-s*u,0,h*d-s*c,p*d+s*u,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,u){return this.set(1,i,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,g=c+c,_=a*h,S=a*p,E=a*g,M=u*p,y=u*g,v=c*g,P=d*h,b=d*p,C=d*g,N=i.x,U=i.y,D=i.z;return s[0]=(1-(M+v))*N,s[1]=(S+C)*N,s[2]=(E-b)*N,s[3]=0,s[4]=(S-C)*U,s[5]=(1-(_+v))*U,s[6]=(y+P)*U,s[7]=0,s[8]=(E+b)*D,s[9]=(y-P)*D,s[10]=(1-(_+M))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Lo.set(s[0],s[1],s[2]).length();const u=Lo.set(s[4],s[5],s[6]).length(),c=Lo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ni.copy(this);const h=1/a,p=1/u,g=1/c;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=p,Ni.elements[5]*=p,Ni.elements[6]*=p,Ni.elements[8]*=g,Ni.elements[9]*=g,Ni.elements[10]*=g,t.setFromRotationMatrix(Ni),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,s,a,u,c=Er){const d=this.elements,h=2*a/(t-e),p=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let S,E;if(c===Er)S=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===gc)S=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,u,c=Er){const d=this.elements,h=1/(t-e),p=1/(i-s),g=1/(u-a),_=(t+e)*h,S=(i+s)*p;let E,M;if(c===Er)E=(u+a)*g,M=-2*g;else if(c===gc)E=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lo=new $,Ni=new Bt,k1=new $(0,0,0),z1=new $(1,1,1),Qr=new $,Lu=new $,ni=new $,H_=new Bt,G_=new ml;class tr{constructor(e=0,t=0,i=0,s=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],d=s[1],h=s[5],p=s[9],g=s[2],_=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(In(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-In(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(In(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-In(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(In(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-In(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return H_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class ex{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B1=0;const W_=new $,Do=new ml,mr=new Bt,Du=new $,Xa=new $,V1=new $,H1=new ml,X_=new $(1,0,0),j_=new $(0,1,0),Y_=new $(0,0,1),q_={type:"added"},G1={type:"removed"},Io={type:"childadded",child:null},Pd={type:"childremoved",child:null};class An extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new $,t=new tr,i=new ml,s=new $(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.multiply(Do),this}rotateOnWorldAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.premultiply(Do),this}rotateX(e){return this.rotateOnAxis(X_,e)}rotateY(e){return this.rotateOnAxis(j_,e)}rotateZ(e){return this.rotateOnAxis(Y_,e)}translateOnAxis(e,t){return W_.copy(e).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(X_,e)}translateY(e){return this.translateOnAxis(j_,e)}translateZ(e){return this.translateOnAxis(Y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Du.copy(e):Du.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Xa,Du,this.up):mr.lookAt(Du,Xa,this.up),this.quaternion.setFromRotationMatrix(mr),s&&(mr.extractRotation(s.matrixWorld),Do.setFromRotationMatrix(mr),this.quaternion.premultiply(Do.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q_),Io.child=e,this.dispatchEvent(Io),Io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G1),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q_),Io.child=e,this.dispatchEvent(Io),Io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,V1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,H1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),_=u(e.skeletons),S=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=s,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}An.DEFAULT_UP=new $(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new $,gr=new $,Ld=new $,_r=new $,Uo=new $,No=new $,$_=new $,Dd=new $,Id=new $,Ud=new $,Nd=new Lt,Fd=new Lt,Od=new Lt;class Ei{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fi.subVectors(e,t),s.cross(Fi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Fi.subVectors(s,t),gr.subVectors(i,t),Ld.subVectors(e,t);const u=Fi.dot(Fi),c=Fi.dot(gr),d=Fi.dot(Ld),h=gr.dot(gr),p=gr.dot(Ld),g=u*h-c*c;if(g===0)return a.set(0,0,0),null;const _=1/g,S=(h*d-c*p)*_,E=(u*p-c*d)*_;return a.set(1-S-E,E,S)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,s,a,u,c,d){return this.getBarycoord(e,t,i,s,_r)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,_r.x),d.addScaledVector(u,_r.y),d.addScaledVector(c,_r.z),d)}static getInterpolatedAttribute(e,t,i,s,a,u){return Nd.setScalar(0),Fd.setScalar(0),Od.setScalar(0),Nd.fromBufferAttribute(e,t),Fd.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Nd,a.x),u.addScaledVector(Fd,a.y),u.addScaledVector(Od,a.z),u}static isFrontFacing(e,t,i,s){return Fi.subVectors(i,t),gr.subVectors(e,t),Fi.cross(gr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Fi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let u,c;Uo.subVectors(s,i),No.subVectors(a,i),Dd.subVectors(e,i);const d=Uo.dot(Dd),h=No.dot(Dd);if(d<=0&&h<=0)return t.copy(i);Id.subVectors(e,s);const p=Uo.dot(Id),g=No.dot(Id);if(p>=0&&g<=p)return t.copy(s);const _=d*g-p*h;if(_<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(Uo,u);Ud.subVectors(e,a);const S=Uo.dot(Ud),E=No.dot(Ud);if(E>=0&&S<=E)return t.copy(a);const M=S*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(i).addScaledVector(No,c);const y=p*E-S*g;if(y<=0&&g-p>=0&&S-E>=0)return $_.subVectors(a,s),c=(g-p)/(g-p+(S-E)),t.copy(s).addScaledVector($_,c);const v=1/(y+M+_);return u=M*v,c=_*v,t.copy(i).addScaledVector(Uo,u).addScaledVector(No,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},Iu={h:0,s:0,l:0};function kd(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=C1(e,1),t=In(t,0,1),i=In(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=kd(u,a,e+1/3),this.g=kd(u,a,e),this.b=kd(u,a,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const i=tx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return yt.fromWorkingColorSpace(En.copy(this),e),Math.round(In(En.r*255,0,255))*65536+Math.round(In(En.g*255,0,255))*256+Math.round(In(En.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,s=En.g,a=En.b,u=Math.max(i,s,a),c=Math.min(i,s,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case i:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-i)/g+2;break;case a:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Mi){yt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,s=En.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(Iu);const i=Sd(Jr.h,Iu.h,t),s=Sd(Jr.s,Iu.s,t),a=Sd(Jr.l,Iu.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new mt;mt.NAMES=tx;let W1=0;class Js extends aa{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=pl(),this.name="",this.blending=jo,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mh&&(i.blendSrc=this.blendSrc),this.blendDst!==gh&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nx extends Js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new $,Uu=new Et;class zi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=I_,this.updateRanges=[],this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Uu.fromBufferAttribute(this,t),Uu.applyMatrix3(e),this.setXY(t,Uu.x,Uu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ha(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),s=Gn(s,this.array),a=Gn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==I_&&(e.usage=this.usage),e}}class ix extends zi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rx extends zi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ji extends zi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let X1=0;const yi=new Bt,zd=new An,Fo=new $,ii=new gl,ja=new gl,fn=new $;class Bi extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zv(e)?rx:ix)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ot().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fo).negate(),this.translate(Fo.x,Fo.y,Fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ji(i,3))}else{for(let i=0,s=t.count;i<s;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ja.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(ii.min,ja.min),ii.expandByPoint(fn),fn.addVectors(ii.max,ja.max),ii.expandByPoint(fn)):(ii.expandByPoint(ja.min),ii.expandByPoint(ja.max))}ii.getCenter(i);let s=0;for(let a=0,u=e.count;a<u;a++)fn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(fn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)fn.fromBufferAttribute(c,h),d&&(Fo.fromBufferAttribute(e,h),fn.add(Fo)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let O=0;O<i.count;O++)c[O]=new $,d[O]=new $;const h=new $,p=new $,g=new $,_=new Et,S=new Et,E=new Et,M=new $,y=new $;function v(O,T,A){h.fromBufferAttribute(i,O),p.fromBufferAttribute(i,T),g.fromBufferAttribute(i,A),_.fromBufferAttribute(a,O),S.fromBufferAttribute(a,T),E.fromBufferAttribute(a,A),p.sub(h),g.sub(h),S.sub(_),E.sub(_);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(k),y.copy(g).multiplyScalar(S.x).addScaledVector(p,-E.x).multiplyScalar(k),c[O].add(M),c[T].add(M),c[A].add(M),d[O].add(y),d[T].add(y),d[A].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let O=0,T=P.length;O<T;++O){const A=P[O],k=A.start,ee=A.count;for(let W=k,le=k+ee;W<le;W+=3)v(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const b=new $,C=new $,N=new $,U=new $;function D(O){N.fromBufferAttribute(s,O),U.copy(N);const T=c[O];b.copy(T),b.sub(N.multiplyScalar(N.dot(T))).normalize(),C.crossVectors(U,T);const k=C.dot(d[O])<0?-1:1;u.setXYZW(O,b.x,b.y,b.z,k)}for(let O=0,T=P.length;O<T;++O){const A=P[O],k=A.start,ee=A.count;for(let W=k,le=k+ee;W<le;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,S=i.count;_<S;_++)i.setXYZ(_,0,0,0);const s=new $,a=new $,u=new $,c=new $,d=new $,h=new $,p=new $,g=new $;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),M=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,y),p.subVectors(u,a),g.subVectors(s,a),p.cross(g),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),c.add(p),d.add(p),h.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,S=t.count;_<S;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,a),g.subVectors(s,a),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,_=new h.constructor(d.length*p);let S=0,E=0;for(let M=0,y=d.length;M<y;M++){c.isInterleavedBufferAttribute?S=d[M]*c.data.stride+c.offset:S=d[M]*p;for(let v=0;v<p;v++)_[E++]=h[S++]}return new zi(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bi,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,g=h.length;p<g;p++){const _=h[p],S=e(_,i);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,_=h.length;g<_;g++){const S=h[g];p.push(S.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let _=0,S=g.length;_<S;_++)p.push(g[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K_=new Bt,Is=new bp,Nu=new _l,Z_=new $,Fu=new $,Ou=new $,ku=new $,Bd=new $,zu=new $,Q_=new $,Bu=new $;class Qi extends An{constructor(e=new Bi,t=new nx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){zu.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],g=a[d];p!==0&&(Bd.fromBufferAttribute(g,e),u?zu.addScaledVector(Bd,p):zu.addScaledVector(Bd.sub(t),p))}t.add(zu)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nu.copy(i.boundingSphere),Nu.applyMatrix4(a),Is.copy(e.ray).recast(e.near),!(Nu.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Nu,Z_)===null||Is.origin.distanceToSquared(Z_)>(e.far-e.near)**2))&&(K_.copy(a).invert(),Is.copy(e.ray).applyMatrix4(K_),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let s;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,_=a.groups,S=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const y=_[E],v=u[y.materialIndex],P=Math.max(y.start,S.start),b=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let C=P,N=b;C<N;C+=3){const U=c.getX(C),D=c.getX(C+1),O=c.getX(C+2);s=Vu(this,v,e,i,h,p,g,U,D,O),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(c.count,S.start+S.count);for(let y=E,v=M;y<v;y+=3){const P=c.getX(y),b=c.getX(y+1),C=c.getX(y+2);s=Vu(this,u,e,i,h,p,g,P,b,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const y=_[E],v=u[y.materialIndex],P=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=P,N=b;C<N;C+=3){const U=C,D=C+1,O=C+2;s=Vu(this,v,e,i,h,p,g,U,D,O),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let y=E,v=M;y<v;y+=3){const P=y,b=y+1,C=y+2;s=Vu(this,u,e,i,h,p,g,P,b,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function j1(o,e,t,i,s,a,u,c){let d;if(e.side===$n?d=i.intersectTriangle(u,a,s,!0,c):d=i.intersectTriangle(s,a,u,e.side===ds,c),d===null)return null;Bu.copy(c),Bu.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Bu);return h<t.near||h>t.far?null:{distance:h,point:Bu.clone(),object:o}}function Vu(o,e,t,i,s,a,u,c,d,h){o.getVertexPosition(c,Fu),o.getVertexPosition(d,Ou),o.getVertexPosition(h,ku);const p=j1(o,e,t,i,Fu,Ou,ku,Q_);if(p){const g=new $;Ei.getBarycoord(Q_,Fu,Ou,ku,g),s&&(p.uv=Ei.getInterpolatedAttribute(s,c,d,h,g,new Et)),a&&(p.uv1=Ei.getInterpolatedAttribute(a,c,d,h,g,new Et)),u&&(p.normal=Ei.getInterpolatedAttribute(u,c,d,h,g,new $),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:d,c:h,normal:new $,materialIndex:0};Ei.getNormal(Fu,Ou,ku,_.normal),p.face=_,p.barycoord=g}return p}class Zs extends Bi{constructor(e=1,t=1,i=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,s,u,2),E("x","z","y",1,-1,e,i,-t,s,u,3),E("x","y","z",1,-1,e,t,i,s,a,4),E("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Ji(h,3)),this.setAttribute("normal",new Ji(p,3)),this.setAttribute("uv",new Ji(g,2));function E(M,y,v,P,b,C,N,U,D,O,T){const A=C/D,k=N/O,ee=C/2,W=N/2,le=U/2,ie=D+1,K=O+1;let Q=0,B=0;const ce=new $;for(let ue=0;ue<K;ue++){const z=ue*k-W;for(let re=0;re<ie;re++){const De=re*A-ee;ce[M]=De*P,ce[y]=z*b,ce[v]=le,h.push(ce.x,ce.y,ce.z),ce[M]=0,ce[y]=0,ce[v]=U>0?1:-1,p.push(ce.x,ce.y,ce.z),g.push(re/D),g.push(1-ue/O),Q+=1}}for(let ue=0;ue<O;ue++)for(let z=0;z<D;z++){const re=_+z+ie*ue,De=_+z+ie*(ue+1),J=_+(z+1)+ie*(ue+1),de=_+(z+1)+ie*ue;d.push(re,De,de),d.push(De,J,de),B+=6}c.addGroup(S,B,T),S+=B,_+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(o){const e={};for(let t=0;t<o.length;t++){const i=sa(o[t]);for(const s in i)e[s]=i[s]}return e}function Y1(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function sx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const q1={clone:sa,merge:Dn};var $1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends Js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$1,this.fragmentShader=K1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=Y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ox extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new $,J_=new Et,e0=new Et;class si extends ox{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ep*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ep*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,J_,e0),t.subVectors(e0,J_)}setViewOffset(e,t,i,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ac*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oo=-90,ko=1;class Z1 extends An{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new si(Oo,ko,e,t);s.layers=this.layers,this.add(s);const a=new si(Oo,ko,e,t);a.layers=this.layers,this.add(a);const u=new si(Oo,ko,e,t);u.layers=this.layers,this.add(u);const c=new si(Oo,ko,e,t);c.layers=this.layers,this.add(c);const d=new si(Oo,ko,e,t);d.layers=this.layers,this.add(d);const h=new si(Oo,ko,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===Er)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(g,_,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class ax extends Kn{constructor(e,t,i,s,a,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:ta,super(e,t,i,s,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q1 extends Ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ax(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zs(5,5,5),a=new hs({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:as});a.uniforms.tEquirect.value=t;const u=new Qi(s,a),c=t.minFilter;return t.minFilter===Ws&&(t.minFilter=Zi),new Z1(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(a)}}const Vd=new $,J1=new $,eE=new ot;class ks{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vd.subVectors(i,t).cross(J1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||eE.getNormalMatrix(e),s=this.coplanarPoint(Vd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new _l,Hu=new $;class Pp{constructor(e=new ks,t=new ks,i=new ks,s=new ks,a=new ks,u=new ks){this.planes=[e,t,i,s,a,u]}set(e,t,i,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Er){const i=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],d=s[3],h=s[4],p=s[5],g=s[6],_=s[7],S=s[8],E=s[9],M=s[10],y=s[11],v=s[12],P=s[13],b=s[14],C=s[15];if(i[0].setComponents(d-a,_-h,y-S,C-v).normalize(),i[1].setComponents(d+a,_+h,y+S,C+v).normalize(),i[2].setComponents(d+u,_+p,y+E,C+P).normalize(),i[3].setComponents(d-u,_-p,y-E,C-P).normalize(),i[4].setComponents(d-c,_-g,y-M,C-b).normalize(),t===Er)i[5].setComponents(d+c,_+g,y+M,C+b).normalize();else if(t===gc)i[5].setComponents(c,g,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Hu.x=s.normal.x>0?e.max.x:e.min.x,Hu.y=s.normal.y>0?e.max.y:e.min.y,Hu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lx(){let o=null,e=!1,t=null,i=null;function s(a,u){t(a,u),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function tE(o){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=o.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=o.SHORT;else if(h instanceof Uint32Array)S=o.UNSIGNED_INT;else if(h instanceof Int32Array)S=o.INT;else if(h instanceof Int8Array)S=o.BYTE;else if(h instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,d,h){const p=d.array,g=d.updateRanges;if(o.bindBuffer(h,c),g.length===0)o.bufferSubData(h,0,p);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],M=g[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,g[_]=M)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const M=g[S];o.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(o.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:a,update:u}}class Ac extends Bi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,p=d+1,g=e/c,_=t/d,S=[],E=[],M=[],y=[];for(let v=0;v<p;v++){const P=v*_-u;for(let b=0;b<h;b++){const C=b*g-a;E.push(C,-P,0),M.push(0,0,1),y.push(b/c),y.push(1-v/d)}}for(let v=0;v<d;v++)for(let P=0;P<c;P++){const b=P+h*v,C=P+h*(v+1),N=P+1+h*(v+1),U=P+1+h*v;S.push(b,C,U),S.push(C,N,U)}this.setIndex(S),this.setAttribute("position",new Ji(E,3)),this.setAttribute("normal",new Ji(M,3)),this.setAttribute("uv",new Ji(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}var nE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iE=`#ifdef USE_ALPHAHASH
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
#endif`,rE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mE=`#ifdef USE_IRIDESCENCE
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
#endif`,gE=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wE=`#define PI 3.141592653589793
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
} // validated`,AE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,CE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DE="gl_FragColor = linearToOutputTexel( gl_FragColor );",IE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
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
}`,WE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,qE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,$E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,tT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fT=`#if defined( USE_POINTS_UV )
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
#endif`,dT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_T=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TT=`#ifdef USE_NORMALMAP
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
#endif`,wT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,LT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qT=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$T=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nw=`uniform sampler2D t2D;
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
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,lw=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,cw=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mw=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_w=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vw=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yw=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Sw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Mw=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Tw=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Aw=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rw=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bw=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Pw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Lw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Dw=`uniform vec3 color;
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
}`,Iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Uw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,at={alphahash_fragment:nE,alphahash_pars_fragment:iE,alphamap_fragment:rE,alphamap_pars_fragment:sE,alphatest_fragment:oE,alphatest_pars_fragment:aE,aomap_fragment:lE,aomap_pars_fragment:uE,batching_pars_vertex:cE,batching_vertex:fE,begin_vertex:dE,beginnormal_vertex:hE,bsdfs:pE,iridescence_fragment:mE,bumpmap_pars_fragment:gE,clipping_planes_fragment:_E,clipping_planes_pars_fragment:vE,clipping_planes_pars_vertex:xE,clipping_planes_vertex:yE,color_fragment:SE,color_pars_fragment:ME,color_pars_vertex:EE,color_vertex:TE,common:wE,cube_uv_reflection_fragment:AE,defaultnormal_vertex:CE,displacementmap_pars_vertex:RE,displacementmap_vertex:bE,emissivemap_fragment:PE,emissivemap_pars_fragment:LE,colorspace_fragment:DE,colorspace_pars_fragment:IE,envmap_fragment:UE,envmap_common_pars_fragment:NE,envmap_pars_fragment:FE,envmap_pars_vertex:OE,envmap_physical_pars_fragment:qE,envmap_vertex:kE,fog_vertex:zE,fog_pars_vertex:BE,fog_fragment:VE,fog_pars_fragment:HE,gradientmap_pars_fragment:GE,lightmap_pars_fragment:WE,lights_lambert_fragment:XE,lights_lambert_pars_fragment:jE,lights_pars_begin:YE,lights_toon_fragment:$E,lights_toon_pars_fragment:KE,lights_phong_fragment:ZE,lights_phong_pars_fragment:QE,lights_physical_fragment:JE,lights_physical_pars_fragment:eT,lights_fragment_begin:tT,lights_fragment_maps:nT,lights_fragment_end:iT,logdepthbuf_fragment:rT,logdepthbuf_pars_fragment:sT,logdepthbuf_pars_vertex:oT,logdepthbuf_vertex:aT,map_fragment:lT,map_pars_fragment:uT,map_particle_fragment:cT,map_particle_pars_fragment:fT,metalnessmap_fragment:dT,metalnessmap_pars_fragment:hT,morphinstance_vertex:pT,morphcolor_vertex:mT,morphnormal_vertex:gT,morphtarget_pars_vertex:_T,morphtarget_vertex:vT,normal_fragment_begin:xT,normal_fragment_maps:yT,normal_pars_fragment:ST,normal_pars_vertex:MT,normal_vertex:ET,normalmap_pars_fragment:TT,clearcoat_normal_fragment_begin:wT,clearcoat_normal_fragment_maps:AT,clearcoat_pars_fragment:CT,iridescence_pars_fragment:RT,opaque_fragment:bT,packing:PT,premultiplied_alpha_fragment:LT,project_vertex:DT,dithering_fragment:IT,dithering_pars_fragment:UT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:FT,shadowmap_pars_fragment:OT,shadowmap_pars_vertex:kT,shadowmap_vertex:zT,shadowmask_pars_fragment:BT,skinbase_vertex:VT,skinning_pars_vertex:HT,skinning_vertex:GT,skinnormal_vertex:WT,specularmap_fragment:XT,specularmap_pars_fragment:jT,tonemapping_fragment:YT,tonemapping_pars_fragment:qT,transmission_fragment:$T,transmission_pars_fragment:KT,uv_pars_fragment:ZT,uv_pars_vertex:QT,uv_vertex:JT,worldpos_vertex:ew,background_vert:tw,background_frag:nw,backgroundCube_vert:iw,backgroundCube_frag:rw,cube_vert:sw,cube_frag:ow,depth_vert:aw,depth_frag:lw,distanceRGBA_vert:uw,distanceRGBA_frag:cw,equirect_vert:fw,equirect_frag:dw,linedashed_vert:hw,linedashed_frag:pw,meshbasic_vert:mw,meshbasic_frag:gw,meshlambert_vert:_w,meshlambert_frag:vw,meshmatcap_vert:xw,meshmatcap_frag:yw,meshnormal_vert:Sw,meshnormal_frag:Mw,meshphong_vert:Ew,meshphong_frag:Tw,meshphysical_vert:ww,meshphysical_frag:Aw,meshtoon_vert:Cw,meshtoon_frag:Rw,points_vert:bw,points_frag:Pw,shadow_vert:Lw,shadow_frag:Dw,sprite_vert:Iw,sprite_frag:Uw},be={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},qi={basic:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Dn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Dn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Dn([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Dn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Dn([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Dn([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Dn([be.common,be.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Dn([be.lights,be.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};qi.physical={uniforms:Dn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Gu={r:0,b:0,g:0},Ns=new tr,Nw=new Bt;function Fw(o,e,t,i,s,a,u){const c=new mt(0);let d=a===!0?0:1,h,p,g=null,_=0,S=null;function E(P){let b=P.isScene===!0?P.background:null;return b&&b.isTexture&&(b=(P.backgroundBlurriness>0?t:e).get(b)),b}function M(P){let b=!1;const C=E(P);C===null?v(c,d):C&&C.isColor&&(v(C,1),b=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,b){const C=E(b);C&&(C.isCubeTexture||C.mapping===Tc)?(p===void 0&&(p=new Qi(new Zs(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:sa(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ns.copy(b.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(Ns)),p.material.toneMapped=yt.getTransfer(C.colorSpace)!==bt,(g!==C||_!==C.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=C,_=C.version,S=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new Qi(new Ac(2,2),new hs({name:"BackgroundMaterial",uniforms:sa(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=yt.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||S!==o.toneMapping)&&(h.material.needsUpdate=!0,g=C,_=C.version,S=o.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function v(P,b){P.getRGB(Gu,sx(o)),i.buffers.color.setClear(Gu.r,Gu.g,Gu.b,b,u)}return{getClearColor:function(){return c},setClearColor:function(P,b=1){c.set(P),d=b,v(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,v(c,d)},render:M,addToRenderList:y}}function Ow(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,u=!1;function c(A,k,ee,W,le){let ie=!1;const K=g(W,ee,k);a!==K&&(a=K,h(a.object)),ie=S(A,W,ee,le),ie&&E(A,W,ee,le),le!==null&&e.update(le,o.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,C(A,k,ee,W),le!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function d(){return o.createVertexArray()}function h(A){return o.bindVertexArray(A)}function p(A){return o.deleteVertexArray(A)}function g(A,k,ee){const W=ee.wireframe===!0;let le=i[A.id];le===void 0&&(le={},i[A.id]=le);let ie=le[k.id];ie===void 0&&(ie={},le[k.id]=ie);let K=ie[W];return K===void 0&&(K=_(d()),ie[W]=K),K}function _(A){const k=[],ee=[],W=[];for(let le=0;le<t;le++)k[le]=0,ee[le]=0,W[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:W,object:A,attributes:{},index:null}}function S(A,k,ee,W){const le=a.attributes,ie=k.attributes;let K=0;const Q=ee.getAttributes();for(const B in Q)if(Q[B].location>=0){const ue=le[B];let z=ie[B];if(z===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),ue===void 0||ue.attribute!==z||z&&ue.data!==z.data)return!0;K++}return a.attributesNum!==K||a.index!==W}function E(A,k,ee,W){const le={},ie=k.attributes;let K=0;const Q=ee.getAttributes();for(const B in Q)if(Q[B].location>=0){let ue=ie[B];ue===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor));const z={};z.attribute=ue,ue&&ue.data&&(z.data=ue.data),le[B]=z,K++}a.attributes=le,a.attributesNum=K,a.index=W}function M(){const A=a.newAttributes;for(let k=0,ee=A.length;k<ee;k++)A[k]=0}function y(A){v(A,0)}function v(A,k){const ee=a.newAttributes,W=a.enabledAttributes,le=a.attributeDivisors;ee[A]=1,W[A]===0&&(o.enableVertexAttribArray(A),W[A]=1),le[A]!==k&&(o.vertexAttribDivisor(A,k),le[A]=k)}function P(){const A=a.newAttributes,k=a.enabledAttributes;for(let ee=0,W=k.length;ee<W;ee++)k[ee]!==A[ee]&&(o.disableVertexAttribArray(ee),k[ee]=0)}function b(A,k,ee,W,le,ie,K){K===!0?o.vertexAttribIPointer(A,k,ee,le,ie):o.vertexAttribPointer(A,k,ee,W,le,ie)}function C(A,k,ee,W){M();const le=W.attributes,ie=ee.getAttributes(),K=k.defaultAttributeValues;for(const Q in ie){const B=ie[Q];if(B.location>=0){let ce=le[Q];if(ce===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const ue=ce.normalized,z=ce.itemSize,re=e.get(ce);if(re===void 0)continue;const De=re.buffer,J=re.type,de=re.bytesPerElement,Ee=J===o.INT||J===o.UNSIGNED_INT||ce.gpuType===Ep;if(ce.isInterleavedBufferAttribute){const xe=ce.data,Ae=xe.stride,Ue=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)v(B.location+Ze,xe.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,De);for(let Ze=0;Ze<B.locationSize;Ze++)b(B.location+Ze,z/B.locationSize,J,ue,Ae*de,(Ue+z/B.locationSize*Ze)*de,Ee)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)v(B.location+xe,ce.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe);o.bindBuffer(o.ARRAY_BUFFER,De);for(let xe=0;xe<B.locationSize;xe++)b(B.location+xe,z/B.locationSize,J,ue,z*de,z/B.locationSize*xe*de,Ee)}}else if(K!==void 0){const ue=K[Q];if(ue!==void 0)switch(ue.length){case 2:o.vertexAttrib2fv(B.location,ue);break;case 3:o.vertexAttrib3fv(B.location,ue);break;case 4:o.vertexAttrib4fv(B.location,ue);break;default:o.vertexAttrib1fv(B.location,ue)}}}}P()}function N(){O();for(const A in i){const k=i[A];for(const ee in k){const W=k[ee];for(const le in W)p(W[le].object),delete W[le];delete k[ee]}delete i[A]}}function U(A){if(i[A.id]===void 0)return;const k=i[A.id];for(const ee in k){const W=k[ee];for(const le in W)p(W[le].object),delete W[le];delete k[ee]}delete i[A.id]}function D(A){for(const k in i){const ee=i[k];if(ee[A.id]===void 0)continue;const W=ee[A.id];for(const le in W)p(W[le].object),delete W[le];delete ee[A.id]}}function O(){T(),u=!0,a!==s&&(a=s,h(a.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:O,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:P}}function kw(o,e,t){let i;function s(h){i=h}function a(h,p){o.drawArrays(i,h,p),t.update(p,i,1)}function u(h,p,g){g!==0&&(o.drawArraysInstanced(i,h,p,g),t.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,g);let S=0;for(let E=0;E<g;E++)S+=p[E];t.update(S,i,1)}function d(h,p,g,_){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)u(h[E],p[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(i,h,0,p,0,_,0,g);let E=0;for(let M=0;M<g;M++)E+=p[M]*_[M];t.update(E,i,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function zw(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(D){return!(D!==Oi&&i.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const O=D===hl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Cr&&i.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Mr&&!O)}function d(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:N,maxSamples:U}}function Bw(o){const e=this;let t=null,i=0,s=!1,a=!1;const u=new ks,c=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||i!==0||s;return s=_,i=g.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,v=o.get(g);if(!s||E===null||E.length===0||a&&!y)a?p(null):h();else{const P=a?0:i,b=P*4;let C=v.clippingState||null;d.value=C,C=p(E,_,b,S);for(let N=0;N!==b;++N)C[N]=t[N];v.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,S,E){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=d.value,E!==!0||y===null){const v=S+M*4,P=_.matrixWorldInverse;c.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let b=0,C=S;b!==M;++b,C+=4)u.copy(g[b]).applyMatrix4(P,c),u.normal.toArray(y,C),y[C+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function Vw(o){let e=new WeakMap;function t(u,c){return c===Th?u.mapping=ta:c===wh&&(u.mapping=na),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Th||c===wh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new Q1(d.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Hw extends ox{constructor(e=-1,t=1,i=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ho=4,t0=[.125,.215,.35,.446,.526,.582],Vs=20,Hd=new Hw,n0=new mt;let Gd=null,Wd=0,Xd=0,jd=!1;const zs=(1+Math.sqrt(5))/2,zo=1/zs,i0=[new $(-zs,zo,0),new $(zs,zo,0),new $(-zo,0,zs),new $(zo,0,zs),new $(0,zs,-zo),new $(0,zs,zo),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class r0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Gd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Wd,Xd),this._renderer.xr.enabled=jd,e.scissorTest=!1,Wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ta||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:hl,format:Oi,colorSpace:oa,depthBuffer:!1},s=s0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gw(a)),this._blurMaterial=Ww(a,e,t)}return s}_compileMaterial(e){const t=new Qi(this._lodPlanes[0],e);this._renderer.compile(t,Hd)}_sceneToCubeUV(e,t,i,s){const c=new si(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(n0),p.toneMapping=ls,p.autoClear=!1;const S=new nx({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),E=new Qi(new Zs,S);let M=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,M=!0):(S.color.copy(n0),M=!0);for(let v=0;v<6;v++){const P=v%3;P===0?(c.up.set(0,d[v],0),c.lookAt(h[v],0,0)):P===1?(c.up.set(0,0,d[v]),c.lookAt(0,h[v],0)):(c.up.set(0,d[v],0),c.lookAt(0,0,h[v]));const b=this._cubeSize;Wu(s,P*b,v>2?b:0,b,b),p.setRenderTarget(s),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ta||e.mapping===na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new Qi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;Wu(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Hd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=i0[(s-a-1)%i0.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",a),this._halfBlur(u,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Qi(this._lodPlanes[s],h),_=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Vs-1),M=a/E,y=isFinite(a)?1+Math.floor(p*M):Vs;y>Vs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vs}`);const v=[];let P=0;for(let D=0;D<Vs;++D){const O=D/M,T=Math.exp(-O*O/2);v.push(T),D===0?P+=T:D<y&&(P+=2*T)}for(let D=0;D<v.length;D++)v[D]=v[D]/P;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:b}=this;_.dTheta.value=E,_.mipInt.value=b-i;const C=this._sizeLods[s],N=3*C*(s>b-Ho?s-b+Ho:0),U=4*(this._cubeSize-C);Wu(t,N,U,3*C,2*C),d.setRenderTarget(t),d.render(g,Hd)}}function Gw(o){const e=[],t=[],i=[];let s=o;const a=o-Ho+1+t0.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>o-Ho?d=t0[u-o+Ho-1]:u===0&&(d=0),i.push(d);const h=1/(c-2),p=-h,g=1+h,_=[p,p,g,p,g,g,p,p,g,g,p,g],S=6,E=6,M=3,y=2,v=1,P=new Float32Array(M*E*S),b=new Float32Array(y*E*S),C=new Float32Array(v*E*S);for(let U=0;U<S;U++){const D=U%3*2/3-1,O=U>2?0:-1,T=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];P.set(T,M*E*U),b.set(_,y*E*U);const A=[U,U,U,U,U,U];C.set(A,v*E*U)}const N=new Bi;N.setAttribute("position",new zi(P,M)),N.setAttribute("uv",new zi(b,y)),N.setAttribute("faceIndex",new zi(C,v)),e.push(N),s>Ho&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function s0(o,e,t){const i=new Ks(o,e,t);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wu(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function Ww(o,e,t){const i=new Float32Array(Vs),s=new $(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lp(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function o0(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lp(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function a0(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Lp(){return`

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
	`}function Xw(o){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===Th||d===wh,p=d===ta||d===na;if(h||p){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new r0(o)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const S=c.image;return h&&S&&S.height>0||p&&S&&s(S)?(t===null&&(t=new r0(o)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function s(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function jw(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Za("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yw(o,e,t,i){const s={},a=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const M=_.morphAttributes[E];for(let y=0,v=M.length;y<v;y++)e.remove(M[y])}_.removeEventListener("dispose",u),delete s[_.id];const S=a.get(_);S&&(e.remove(S),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const M=S[E];for(let y=0,v=M.length;y<v;y++)e.update(M[y],o.ARRAY_BUFFER)}}function h(g){const _=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const P=S.array;M=S.version;for(let b=0,C=P.length;b<C;b+=3){const N=P[b+0],U=P[b+1],D=P[b+2];_.push(N,U,U,D,D,N)}}else if(E!==void 0){const P=E.array;M=E.version;for(let b=0,C=P.length/3-1;b<C;b+=3){const N=b+0,U=b+1,D=b+2;_.push(N,U,U,D,D,N)}}else return;const y=new(Zv(_)?rx:ix)(_,1);y.version=M;const v=a.get(g);v&&e.remove(v),a.set(g,y)}function p(g){const _=a.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function qw(o,e,t){let i;function s(_){i=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function d(_,S){o.drawElements(i,S,a,_*u),t.update(S,i,1)}function h(_,S,E){E!==0&&(o.drawElementsInstanced(i,S,a,_*u,E),t.update(S,i,E))}function p(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,a,_,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];t.update(y,i,1)}function g(_,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)h(_[v]/u,S[v],M[v]);else{y.multiDrawElementsInstancedWEBGL(i,S,0,a,_,0,M,0,E);let v=0;for(let P=0;P<E;P++)v+=S[P]*M[P];t.update(v,i,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function $w(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Kw(o,e,t){const i=new WeakMap,s=new Lt;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let _=i.get(c);if(_===void 0||_.count!==g){let A=function(){O.dispose(),i.delete(c),c.removeEventListener("dispose",A)};var S=A;_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),y===!0&&(C=3);let N=c.attributes.position.count*C,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const D=new Float32Array(N*U*4*g),O=new Jv(D,N,U,g);O.type=Mr,O.needsUpdate=!0;const T=C*4;for(let k=0;k<g;k++){const ee=v[k],W=P[k],le=b[k],ie=N*U*4*k;for(let K=0;K<ee.count;K++){const Q=K*T;E===!0&&(s.fromBufferAttribute(ee,K),D[ie+Q+0]=s.x,D[ie+Q+1]=s.y,D[ie+Q+2]=s.z,D[ie+Q+3]=0),M===!0&&(s.fromBufferAttribute(W,K),D[ie+Q+4]=s.x,D[ie+Q+5]=s.y,D[ie+Q+6]=s.z,D[ie+Q+7]=0),y===!0&&(s.fromBufferAttribute(le,K),D[ie+Q+8]=s.x,D[ie+Q+9]=s.y,D[ie+Q+10]=s.z,D[ie+Q+11]=le.itemSize===4?s.w:1)}}_={count:g,texture:O,size:new Et(N,U)},i.set(c,_),c.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function Zw(o,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,p=d.geometry,g=e.get(d,p);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function u(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}class ux extends Kn{constructor(e,t,i,s,a,u,c,d,h,p=Yo){if(p!==Yo&&p!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Yo&&(i=$s),i===void 0&&p===ra&&(i=ia),super(null,s,a,u,c,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ki,this.minFilter=d!==void 0?d:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cx=new Kn,l0=new ux(1,1),fx=new Jv,dx=new F1,hx=new ax,u0=[],c0=[],f0=new Float32Array(16),d0=new Float32Array(9),h0=new Float32Array(4);function la(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=u0[s];if(a===void 0&&(a=new Float32Array(s),u0[s]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function on(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function an(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Cc(o,e){let t=c0[e];t===void 0&&(t=new Int32Array(e),c0[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function Qw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Jw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2fv(this.addr,e),an(t,e)}}function eA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;o.uniform3fv(this.addr,e),an(t,e)}}function tA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4fv(this.addr,e),an(t,e)}}function nA(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;h0.set(i),o.uniformMatrix2fv(this.addr,!1,h0),an(t,i)}}function iA(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;d0.set(i),o.uniformMatrix3fv(this.addr,!1,d0),an(t,i)}}function rA(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;f0.set(i),o.uniformMatrix4fv(this.addr,!1,f0),an(t,i)}}function sA(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function oA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2iv(this.addr,e),an(t,e)}}function aA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;o.uniform3iv(this.addr,e),an(t,e)}}function lA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4iv(this.addr,e),an(t,e)}}function uA(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function cA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2uiv(this.addr,e),an(t,e)}}function fA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;o.uniform3uiv(this.addr,e),an(t,e)}}function dA(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4uiv(this.addr,e),an(t,e)}}function hA(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(l0.compareFunction=Kv,a=l0):a=cx,t.setTexture2D(e||a,s)}function pA(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||dx,s)}function mA(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hx,s)}function gA(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fx,s)}function _A(o){switch(o){case 5126:return Qw;case 35664:return Jw;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return aA;case 35669:case 35673:return lA;case 5125:return uA;case 36294:return cA;case 36295:return fA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}function vA(o,e){o.uniform1fv(this.addr,e)}function xA(o,e){const t=la(e,this.size,2);o.uniform2fv(this.addr,t)}function yA(o,e){const t=la(e,this.size,3);o.uniform3fv(this.addr,t)}function SA(o,e){const t=la(e,this.size,4);o.uniform4fv(this.addr,t)}function MA(o,e){const t=la(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function EA(o,e){const t=la(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function TA(o,e){const t=la(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function wA(o,e){o.uniform1iv(this.addr,e)}function AA(o,e){o.uniform2iv(this.addr,e)}function CA(o,e){o.uniform3iv(this.addr,e)}function RA(o,e){o.uniform4iv(this.addr,e)}function bA(o,e){o.uniform1uiv(this.addr,e)}function PA(o,e){o.uniform2uiv(this.addr,e)}function LA(o,e){o.uniform3uiv(this.addr,e)}function DA(o,e){o.uniform4uiv(this.addr,e)}function IA(o,e,t){const i=this.cache,s=e.length,a=Cc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||cx,a[u])}function UA(o,e,t){const i=this.cache,s=e.length,a=Cc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||dx,a[u])}function NA(o,e,t){const i=this.cache,s=e.length,a=Cc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||hx,a[u])}function FA(o,e,t){const i=this.cache,s=e.length,a=Cc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||fx,a[u])}function OA(o){switch(o){case 5126:return vA;case 35664:return xA;case 35665:return yA;case 35666:return SA;case 35674:return MA;case 35675:return EA;case 35676:return TA;case 5124:case 35670:return wA;case 35667:case 35671:return AA;case 35668:case 35672:return CA;case 35669:case 35673:return RA;case 5125:return bA;case 36294:return PA;case 36295:return LA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return FA}}class kA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_A(t.type)}}class zA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OA(t.type)}}class BA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function p0(o,e){o.seq.push(e),o.map[e.id]=e}function VA(o,e,t){const i=o.name,s=i.length;for(Yd.lastIndex=0;;){const a=Yd.exec(i),u=Yd.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){p0(t,h===void 0?new kA(c,o,e):new zA(c,o,e));break}else{let g=t.map[c];g===void 0&&(g=new BA(c),p0(t,g)),t=g}}}class lc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);VA(a,u,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function m0(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const HA=37297;let GA=0;function WA(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const g0=new ot;function XA(o){yt._getMatrix(g0,yt.workingColorSpace,o);const e=`mat3( ${g0.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _0(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+WA(o.getShaderSource(e),u)}else return s}function jA(o,e){const t=XA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YA(o,e){let t;switch(e){case u1:t="Linear";break;case c1:t="Reinhard";break;case f1:t="Cineon";break;case d1:t="ACESFilmic";break;case p1:t="AgX";break;case m1:t="Neutral";break;case h1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xu=new $;function qA(){yt.getLuminanceCoefficients(Xu);const o=Xu.x.toFixed(4),e=Xu.y.toFixed(4),t=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $A(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function KA(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZA(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function Qa(o){return o!==""}function v0(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(o){return o.replace(QA,eC)}const JA=new Map;function eC(o,e){let t=at[e];if(t===void 0){const i=JA.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tp(t)}const tC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(o){return o.replace(tC,nC)}function nC(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function S0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===HM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function rC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ta:case na:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sC(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case na:e="ENVMAP_MODE_REFRACTION";break}return e}function oC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case a1:e="ENVMAP_BLENDING_MIX";break;case l1:e="ENVMAP_BLENDING_ADD";break}return e}function aC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lC(o,e,t,i){const s=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=iC(t),h=rC(t),p=sC(t),g=oC(t),_=aC(t),S=$A(t),E=KA(a),M=s.createProgram();let y,v,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),v.length>0&&(v+=`
`)):(y=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),v=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?at.tonemapping_pars_fragment:"",t.toneMapping!==ls?YA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,jA("linearToOutputTexel",t.outputColorSpace),qA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),u=tp(u),u=v0(u,t),u=x0(u,t),c=tp(c),c=v0(c,t),c=x0(c,t),u=y0(u),c=y0(c),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=P+y+u,C=P+v+c,N=m0(s,s.VERTEX_SHADER,b),U=m0(s,s.FRAGMENT_SHADER,C);s.attachShader(M,N),s.attachShader(M,U),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(k){if(o.debug.checkShaderErrors){const ee=s.getProgramInfoLog(M).trim(),W=s.getShaderInfoLog(N).trim(),le=s.getShaderInfoLog(U).trim();let ie=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,N,U);else{const Q=_0(s,N,"vertex"),B=_0(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+Q+`
`+B)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(W===""||le==="")&&(K=!1);K&&(k.diagnostics={runnable:ie,programLog:ee,vertexShader:{log:W,prefix:y},fragmentShader:{log:le,prefix:v}})}s.deleteShader(N),s.deleteShader(U),O=new lc(s,M),T=ZA(s,M)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(M,HA)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=U,this}let uC=0;class cC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fC(e),t.set(e,i)),i}}class fC{constructor(e){this.id=uC++,this.code=e,this.usedTimes=0}}function dC(o,e,t,i,s,a,u){const c=new ex,d=new cC,h=new Set,p=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function y(T,A,k,ee,W){const le=ee.fog,ie=W.geometry,K=T.isMeshStandardMaterial?ee.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),B=Q&&Q.mapping===Tc?Q.image.height:null,ce=E[T.type];T.precision!==null&&(S=s.getMaxPrecision(T.precision),S!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const ue=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,z=ue!==void 0?ue.length:0;let re=0;ie.morphAttributes.position!==void 0&&(re=1),ie.morphAttributes.normal!==void 0&&(re=2),ie.morphAttributes.color!==void 0&&(re=3);let De,J,de,Ee;if(ce){const vt=qi[ce];De=vt.vertexShader,J=vt.fragmentShader}else De=T.vertexShader,J=T.fragmentShader,d.update(T),de=d.getVertexShaderID(T),Ee=d.getFragmentShaderID(T);const xe=o.getRenderTarget(),Ae=o.state.buffers.depth.getReversed(),Ue=W.isInstancedMesh===!0,Ze=W.isBatchedMesh===!0,Rt=!!T.map,ht=!!T.matcap,Nt=!!Q,Y=!!T.aoMap,Cn=!!T.lightMap,dt=!!T.bumpMap,ut=!!T.normalMap,qe=!!T.displacementMap,At=!!T.emissiveMap,Ye=!!T.metalnessMap,I=!!T.roughnessMap,R=T.anisotropy>0,ne=T.clearcoat>0,me=T.dispersion>0,_e=T.iridescence>0,he=T.sheen>0,He=T.transmission>0,Ce=R&&!!T.anisotropyMap,Ne=ne&&!!T.clearcoatMap,lt=ne&&!!T.clearcoatNormalMap,Se=ne&&!!T.clearcoatRoughnessMap,Oe=_e&&!!T.iridescenceMap,Qe=_e&&!!T.iridescenceThicknessMap,Je=he&&!!T.sheenColorMap,ke=he&&!!T.sheenRoughnessMap,ct=!!T.specularMap,it=!!T.specularColorMap,wt=!!T.specularIntensityMap,G=He&&!!T.transmissionMap,Re=He&&!!T.thicknessMap,fe=!!T.gradientMap,pe=!!T.alphaMap,Le=T.alphaTest>0,Pe=!!T.alphaHash,rt=!!T.extensions;let Ot=ls;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ot=o.toneMapping);const tn={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:De,fragmentShader:J,defines:T.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&W._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&W.instanceColor!==null,instancingMorph:Ue&&W.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:oa,alphaToCoverage:!!T.alphaToCoverage,map:Rt,matcap:ht,envMap:Nt,envMapMode:Nt&&Q.mapping,envMapCubeUVHeight:B,aoMap:Y,lightMap:Cn,bumpMap:dt,normalMap:ut,displacementMap:_&&qe,emissiveMap:At,normalMapObjectSpace:ut&&T.normalMapType===x1,normalMapTangentSpace:ut&&T.normalMapType===$v,metalnessMap:Ye,roughnessMap:I,anisotropy:R,anisotropyMap:Ce,clearcoat:ne,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:me,iridescence:_e,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ct,specularColorMap:it,specularIntensityMap:wt,transmission:He,transmissionMap:G,thicknessMap:Re,gradientMap:fe,opaque:T.transparent===!1&&T.blending===jo&&T.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Pe,combine:T.combine,mapUv:Rt&&M(T.map.channel),aoMapUv:Y&&M(T.aoMap.channel),lightMapUv:Cn&&M(T.lightMap.channel),bumpMapUv:dt&&M(T.bumpMap.channel),normalMapUv:ut&&M(T.normalMap.channel),displacementMapUv:qe&&M(T.displacementMap.channel),emissiveMapUv:At&&M(T.emissiveMap.channel),metalnessMapUv:Ye&&M(T.metalnessMap.channel),roughnessMapUv:I&&M(T.roughnessMap.channel),anisotropyMapUv:Ce&&M(T.anisotropyMap.channel),clearcoatMapUv:Ne&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:lt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(T.sheenRoughnessMap.channel),specularMapUv:ct&&M(T.specularMap.channel),specularColorMapUv:it&&M(T.specularColorMap.channel),specularIntensityMapUv:wt&&M(T.specularIntensityMap.channel),transmissionMapUv:G&&M(T.transmissionMap.channel),thicknessMapUv:Re&&M(T.thicknessMap.channel),alphaMapUv:pe&&M(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(ut||R),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ie.attributes.uv&&(Rt||pe),fog:!!le,useFog:T.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:W.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Rt&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===bt,decodeVideoTextureEmissive:At&&T.emissiveMap.isVideoTexture===!0&&yt.getTransfer(T.emissiveMap.colorSpace)===bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sr,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:rt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&T.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return tn.vertexUv1s=h.has(1),tn.vertexUv2s=h.has(2),tn.vertexUv3s=h.has(3),h.clear(),tn}function v(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)A.push(k),A.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(P(A,T),b(A,T),A.push(o.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function P(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function b(T,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),T.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),T.push(c.mask)}function C(T){const A=E[T.type];let k;if(A){const ee=qi[A];k=q1.clone(ee.uniforms)}else k=T.uniforms;return k}function N(T,A){let k;for(let ee=0,W=p.length;ee<W;ee++){const le=p[ee];if(le.cacheKey===A){k=le,++k.usedTimes;break}}return k===void 0&&(k=new lC(o,A,T,a),p.push(k)),k}function U(T){if(--T.usedTimes===0){const A=p.indexOf(T);p[A]=p[p.length-1],p.pop(),T.destroy()}}function D(T){d.remove(T)}function O(){d.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:N,releaseProgram:U,releaseShaderCache:D,programs:p,dispose:O}}function hC(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function i(u){o.delete(u)}function s(u,c,d){o.get(u)[c]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function pC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function M0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function E0(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function u(g,_,S,E,M,y){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:y},o[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=S,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=M,v.group=y),e++,v}function c(g,_,S,E,M,y){const v=u(g,_,S,E,M,y);S.transmission>0?i.push(v):S.transparent===!0?s.push(v):t.push(v)}function d(g,_,S,E,M,y){const v=u(g,_,S,E,M,y);S.transmission>0?i.unshift(v):S.transparent===!0?s.unshift(v):t.unshift(v)}function h(g,_){t.length>1&&t.sort(g||pC),i.length>1&&i.sort(_||M0),s.length>1&&s.sort(_||M0)}function p(){for(let g=e,_=o.length;g<_;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:d,finish:p,sort:h}}function mC(){let o=new WeakMap;function e(i,s){const a=o.get(i);let u;return a===void 0?(u=new E0,o.set(i,[u])):s>=a.length?(u=new E0,a.push(u)):u=a[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function gC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new mt};break;case"SpotLight":t={position:new $,direction:new $,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=t,t}}}function _C(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let vC=0;function xC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function yC(o){const e=new gC,t=_C(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);const s=new $,a=new Bt,u=new Bt;function c(h){let p=0,g=0,_=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let S=0,E=0,M=0,y=0,v=0,P=0,b=0,C=0,N=0,U=0,D=0;h.sort(xC);for(let T=0,A=h.length;T<A;T++){const k=h[T],ee=k.color,W=k.intensity,le=k.distance,ie=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=ee.r*W,g+=ee.g*W,_+=ee.b*W;else if(k.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(k.sh.coefficients[K],W);D++}else if(k.isDirectionalLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Q=k.shadow,B=t.get(k);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.directionalShadow[S]=B,i.directionalShadowMap[S]=ie,i.directionalShadowMatrix[S]=k.shadow.matrix,P++}i.directional[S]=K,S++}else if(k.isSpotLight){const K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(ee).multiplyScalar(W),K.distance=le,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,i.spot[M]=K;const Q=k.shadow;if(k.map&&(i.spotLightMap[N]=k.map,N++,Q.updateMatrices(k),k.castShadow&&U++),i.spotLightMatrix[M]=Q.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=ie,C++}M++}else if(k.isRectAreaLight){const K=e.get(k);K.color.copy(ee).multiplyScalar(W),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),i.rectArea[y]=K,y++}else if(k.isPointLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){const Q=k.shadow,B=t.get(k);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,i.pointShadow[E]=B,i.pointShadowMap[E]=ie,i.pointShadowMatrix[E]=k.shadow.matrix,b++}i.point[E]=K,E++}else if(k.isHemisphereLight){const K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(W),K.groundColor.copy(k.groundColor).multiplyScalar(W),i.hemi[v]=K,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=_;const O=i.hash;(O.directionalLength!==S||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==y||O.hemiLength!==v||O.numDirectionalShadows!==P||O.numPointShadows!==b||O.numSpotShadows!==C||O.numSpotMaps!==N||O.numLightProbes!==D)&&(i.directional.length=S,i.spot.length=M,i.rectArea.length=y,i.point.length=E,i.hemi.length=v,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+N-U,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=D,O.directionalLength=S,O.pointLength=E,O.spotLength=M,O.rectAreaLength=y,O.hemiLength=v,O.numDirectionalShadows=P,O.numPointShadows=b,O.numSpotShadows=C,O.numSpotMaps=N,O.numLightProbes=D,i.version=vC++)}function d(h,p){let g=0,_=0,S=0,E=0,M=0;const y=p.matrixWorldInverse;for(let v=0,P=h.length;v<P;v++){const b=h[v];if(b.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),g++}else if(b.isSpotLight){const C=i.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const C=i.rectArea[E];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),u.identity(),a.copy(b.matrixWorld),a.premultiply(y),u.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),_++}else if(b.isHemisphereLight){const C=i.hemi[M];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),M++}}}return{setup:c,setupView:d,state:i}}function T0(o){const e=new yC(o),t=[],i=[];function s(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function SC(o){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new T0(o),e.set(s,[c])):a>=u.length?(c=new T0(o),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}class MC extends Js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EC extends Js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wC=`uniform sampler2D shadow_pass;
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
}`;function AC(o,e,t){let i=new Pp;const s=new Et,a=new Et,u=new Lt,c=new MC({depthPacking:v1}),d=new EC,h={},p=t.maxTextureSize,g={[ds]:$n,[$n]:ds,[Sr]:Sr},_=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:TC,fragmentShader:wC}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Bi;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qi(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fv;let v=this.type;this.render=function(U,D,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const T=o.getRenderTarget(),A=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(as),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const W=v!==vr&&this.type===vr,le=v===vr&&this.type!==vr;for(let ie=0,K=U.length;ie<K;ie++){const Q=U[ie],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ce=B.getFrameExtents();if(s.multiply(ce),a.copy(B.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ce.x),s.x=a.x*ce.x,B.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ce.y),s.y=a.y*ce.y,B.mapSize.y=a.y)),B.map===null||W===!0||le===!0){const z=this.type!==vr?{minFilter:ki,magFilter:ki}:{};B.map!==null&&B.map.dispose(),B.map=new Ks(s.x,s.y,z),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const ue=B.getViewportCount();for(let z=0;z<ue;z++){const re=B.getViewport(z);u.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),ee.viewport(u),B.updateMatrices(Q,z),i=B.getFrustum(),C(D,O,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===vr&&P(B,O),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(T,A,k)};function P(U,D){const O=e.update(M);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ks(s.x,s.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(D,null,O,_,M,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(D,null,O,S,M,null)}function b(U,D,O,T){let A=null;const k=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)A=k;else if(A=O.isPointLight===!0?d:c,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ee=A.uuid,W=D.uuid;let le=h[ee];le===void 0&&(le={},h[ee]=le);let ie=le[W];ie===void 0&&(ie=A.clone(),le[W]=ie,D.addEventListener("dispose",N)),A=ie}if(A.visible=D.visible,A.wireframe=D.wireframe,T===vr?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:g[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ee=o.properties.get(A);ee.light=O}return A}function C(U,D,O,T,A){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&A===vr)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const W=e.update(U),le=U.material;if(Array.isArray(le)){const ie=W.groups;for(let K=0,Q=ie.length;K<Q;K++){const B=ie[K],ce=le[B.materialIndex];if(ce&&ce.visible){const ue=b(U,ce,T,A);U.onBeforeShadow(o,U,D,O,W,ue,B),o.renderBufferDirect(O,null,W,ue,U,B),U.onAfterShadow(o,U,D,O,W,ue,B)}}}else if(le.visible){const ie=b(U,le,T,A);U.onBeforeShadow(o,U,D,O,W,ie,null),o.renderBufferDirect(O,null,W,ie,U,null),U.onAfterShadow(o,U,D,O,W,ie,null)}}const ee=U.children;for(let W=0,le=ee.length;W<le;W++)C(ee[W],D,O,T,A)}function N(U){U.target.removeEventListener("dispose",N);for(const O in h){const T=h[O],A=U.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}const CC={[_h]:vh,[xh]:Mh,[yh]:Eh,[ea]:Sh,[vh]:_h,[Mh]:xh,[Eh]:yh,[Sh]:ea};function RC(o,e){function t(){let G=!1;const Re=new Lt;let fe=null;const pe=new Lt(0,0,0,0);return{setMask:function(Le){fe!==Le&&!G&&(o.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,rt,Ot,tn){tn===!0&&(Le*=Ot,Pe*=Ot,rt*=Ot),Re.set(Le,Pe,rt,Ot),pe.equals(Re)===!1&&(o.clearColor(Le,Pe,rt,Ot),pe.copy(Re))},reset:function(){G=!1,fe=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,Re=!1,fe=null,pe=null,Le=null;return{setReversed:function(Pe){if(Re!==Pe){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ot=Le;Le=null,this.setClear(Ot)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?xe(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(Pe){fe!==Pe&&!G&&(o.depthMask(Pe),fe=Pe)},setFunc:function(Pe){if(Re&&(Pe=CC[Pe]),pe!==Pe){switch(Pe){case _h:o.depthFunc(o.NEVER);break;case vh:o.depthFunc(o.ALWAYS);break;case xh:o.depthFunc(o.LESS);break;case ea:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case Sh:o.depthFunc(o.GEQUAL);break;case Mh:o.depthFunc(o.GREATER);break;case Eh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(Re&&(Pe=1-Pe),o.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,fe=null,pe=null,Le=null,Re=!1}}}function s(){let G=!1,Re=null,fe=null,pe=null,Le=null,Pe=null,rt=null,Ot=null,tn=null;return{setTest:function(vt){G||(vt?xe(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!G&&(o.stencilMask(vt),Re=vt)},setFunc:function(vt,Nn,Rn){(fe!==vt||pe!==Nn||Le!==Rn)&&(o.stencilFunc(vt,Nn,Rn),fe=vt,pe=Nn,Le=Rn)},setOp:function(vt,Nn,Rn){(Pe!==vt||rt!==Nn||Ot!==Rn)&&(o.stencilOp(vt,Nn,Rn),Pe=vt,rt=Nn,Ot=Rn)},setLocked:function(vt){G=vt},setClear:function(vt){tn!==vt&&(o.clearStencil(vt),tn=vt)},reset:function(){G=!1,Re=null,fe=null,pe=null,Le=null,Pe=null,rt=null,Ot=null,tn=null}}}const a=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let p={},g={},_=new WeakMap,S=[],E=null,M=!1,y=null,v=null,P=null,b=null,C=null,N=null,U=null,D=new mt(0,0,0),O=0,T=!1,A=null,k=null,ee=null,W=null,le=null;const ie=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=Q>=2);let ce=null,ue={};const z=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),De=new Lt().fromArray(z),J=new Lt().fromArray(re);function de(G,Re,fe,pe){const Le=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(G,Pe),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<fe;rt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(Re+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),Ee[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ee[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),xe(o.DEPTH_TEST),u.setFunc(ea),dt(!1),ut(b_),xe(o.CULL_FACE),Y(as);function xe(G){p[G]!==!0&&(o.enable(G),p[G]=!0)}function Ae(G){p[G]!==!1&&(o.disable(G),p[G]=!1)}function Ue(G,Re){return g[G]!==Re?(o.bindFramebuffer(G,Re),g[G]=Re,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Re),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(G,Re){let fe=S,pe=!1;if(G){fe=_.get(Re),fe===void 0&&(fe=[],_.set(Re,fe));const Le=G.textures;if(fe.length!==Le.length||fe[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)fe[Pe]=o.COLOR_ATTACHMENT0+Pe;fe.length=Le.length,pe=!0}}else fe[0]!==o.BACK&&(fe[0]=o.BACK,pe=!0);pe&&o.drawBuffers(fe)}function Rt(G){return E!==G?(o.useProgram(G),E=G,!0):!1}const ht={[Bs]:o.FUNC_ADD,[WM]:o.FUNC_SUBTRACT,[XM]:o.FUNC_REVERSE_SUBTRACT};ht[jM]=o.MIN,ht[YM]=o.MAX;const Nt={[qM]:o.ZERO,[$M]:o.ONE,[KM]:o.SRC_COLOR,[mh]:o.SRC_ALPHA,[n1]:o.SRC_ALPHA_SATURATE,[e1]:o.DST_COLOR,[QM]:o.DST_ALPHA,[ZM]:o.ONE_MINUS_SRC_COLOR,[gh]:o.ONE_MINUS_SRC_ALPHA,[t1]:o.ONE_MINUS_DST_COLOR,[JM]:o.ONE_MINUS_DST_ALPHA,[i1]:o.CONSTANT_COLOR,[r1]:o.ONE_MINUS_CONSTANT_COLOR,[s1]:o.CONSTANT_ALPHA,[o1]:o.ONE_MINUS_CONSTANT_ALPHA};function Y(G,Re,fe,pe,Le,Pe,rt,Ot,tn,vt){if(G===as){M===!0&&(Ae(o.BLEND),M=!1);return}if(M===!1&&(xe(o.BLEND),M=!0),G!==GM){if(G!==y||vt!==T){if((v!==Bs||C!==Bs)&&(o.blendEquation(o.FUNC_ADD),v=Bs,C=Bs),vt)switch(G){case jo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ph:o.blendFunc(o.ONE,o.ONE);break;case P_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case L_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case jo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ph:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case P_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case L_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,b=null,N=null,U=null,D.set(0,0,0),O=0,y=G,T=vt}return}Le=Le||Re,Pe=Pe||fe,rt=rt||pe,(Re!==v||Le!==C)&&(o.blendEquationSeparate(ht[Re],ht[Le]),v=Re,C=Le),(fe!==P||pe!==b||Pe!==N||rt!==U)&&(o.blendFuncSeparate(Nt[fe],Nt[pe],Nt[Pe],Nt[rt]),P=fe,b=pe,N=Pe,U=rt),(Ot.equals(D)===!1||tn!==O)&&(o.blendColor(Ot.r,Ot.g,Ot.b,tn),D.copy(Ot),O=tn),y=G,T=!1}function Cn(G,Re){G.side===Sr?Ae(o.CULL_FACE):xe(o.CULL_FACE);let fe=G.side===$n;Re&&(fe=!fe),dt(fe),G.blending===jo&&G.transparent===!1?Y(as):Y(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const pe=G.stencilWrite;c.setTest(pe),pe&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),At(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(G){A!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),A=G)}function ut(G){G!==BM?(xe(o.CULL_FACE),G!==k&&(G===b_?o.cullFace(o.BACK):G===VM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),k=G}function qe(G){G!==ee&&(K&&o.lineWidth(G),ee=G)}function At(G,Re,fe){G?(xe(o.POLYGON_OFFSET_FILL),(W!==Re||le!==fe)&&(o.polygonOffset(Re,fe),W=Re,le=fe)):Ae(o.POLYGON_OFFSET_FILL)}function Ye(G){G?xe(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function I(G){G===void 0&&(G=o.TEXTURE0+ie-1),ce!==G&&(o.activeTexture(G),ce=G)}function R(G,Re,fe){fe===void 0&&(ce===null?fe=o.TEXTURE0+ie-1:fe=ce);let pe=ue[fe];pe===void 0&&(pe={type:void 0,texture:void 0},ue[fe]=pe),(pe.type!==G||pe.texture!==Re)&&(ce!==fe&&(o.activeTexture(fe),ce=fe),o.bindTexture(G,Re||Ee[G]),pe.type=G,pe.texture=Re)}function ne(){const G=ue[ce];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){De.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),De.copy(G))}function ke(G){J.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function ct(G,Re){let fe=h.get(Re);fe===void 0&&(fe=new WeakMap,h.set(Re,fe));let pe=fe.get(G);pe===void 0&&(pe=o.getUniformBlockIndex(Re,G.name),fe.set(G,pe))}function it(G,Re){const pe=h.get(Re).get(G);d.get(Re)!==pe&&(o.uniformBlockBinding(Re,pe,G.__bindingPointIndex),d.set(Re,pe))}function wt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},ce=null,ue={},g={},_=new WeakMap,S=[],E=null,M=!1,y=null,v=null,P=null,b=null,C=null,N=null,U=null,D=new mt(0,0,0),O=0,T=!1,A=null,k=null,ee=null,W=null,le=null,De.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:xe,disable:Ae,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Rt,setBlending:Y,setMaterial:Cn,setFlipSided:dt,setCullFace:ut,setLineWidth:qe,setPolygonOffset:At,setScissorTest:Ye,activeTexture:I,bindTexture:R,unbindTexture:ne,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Se,texSubImage2D:he,texSubImage3D:He,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:Je,viewport:ke,reset:wt}}function w0(o,e,t,i){const s=bC(i);switch(t){case Hv:return o*e;case Wv:return o*e;case Xv:return o*e*2;case jv:return o*e/s.components*s.byteLength;case Ap:return o*e/s.components*s.byteLength;case Yv:return o*e*2/s.components*s.byteLength;case Cp:return o*e*2/s.components*s.byteLength;case Gv:return o*e*3/s.components*s.byteLength;case Oi:return o*e*4/s.components*s.byteLength;case Rp:return o*e*4/s.components*s.byteLength;case nc:case ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bh:case Lh:return Math.max(o,16)*Math.max(e,8)/4;case Rh:case Ph:return Math.max(o,8)*Math.max(e,8)/2;case Dh:case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Uh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case oc:case $h:case Kh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case qv:case Zh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bC(o){switch(o){case Cr:case zv:return{byteLength:1,components:1};case fl:case Bv:case hl:return{byteLength:2,components:1};case Tp:case wp:return{byteLength:2,components:4};case $s:case Ep:case Mr:return{byteLength:4,components:1};case Vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function PC(o,e,t,i,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,p=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,R){return S?new OffscreenCanvas(I,R):_c("canvas")}function M(I,R,ne){let me=1;const _e=Ye(I);if((_e.width>ne||_e.height>ne)&&(me=ne/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const he=Math.floor(me*_e.width),He=Math.floor(me*_e.height);g===void 0&&(g=E(he,He));const Ce=R?E(he,He):g;return Ce.width=he,Ce.height=He,Ce.getContext("2d").drawImage(I,0,0,he,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+He+")."),Ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function y(I){return I.generateMipmaps}function v(I){o.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(I,R,ne,me,_e=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let he=R;if(R===o.RED&&(ne===o.FLOAT&&(he=o.R32F),ne===o.HALF_FLOAT&&(he=o.R16F),ne===o.UNSIGNED_BYTE&&(he=o.R8)),R===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.R8UI),ne===o.UNSIGNED_SHORT&&(he=o.R16UI),ne===o.UNSIGNED_INT&&(he=o.R32UI),ne===o.BYTE&&(he=o.R8I),ne===o.SHORT&&(he=o.R16I),ne===o.INT&&(he=o.R32I)),R===o.RG&&(ne===o.FLOAT&&(he=o.RG32F),ne===o.HALF_FLOAT&&(he=o.RG16F),ne===o.UNSIGNED_BYTE&&(he=o.RG8)),R===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RG8UI),ne===o.UNSIGNED_SHORT&&(he=o.RG16UI),ne===o.UNSIGNED_INT&&(he=o.RG32UI),ne===o.BYTE&&(he=o.RG8I),ne===o.SHORT&&(he=o.RG16I),ne===o.INT&&(he=o.RG32I)),R===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(he=o.RGB16UI),ne===o.UNSIGNED_INT&&(he=o.RGB32UI),ne===o.BYTE&&(he=o.RGB8I),ne===o.SHORT&&(he=o.RGB16I),ne===o.INT&&(he=o.RGB32I)),R===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),ne===o.UNSIGNED_INT&&(he=o.RGBA32UI),ne===o.BYTE&&(he=o.RGBA8I),ne===o.SHORT&&(he=o.RGBA16I),ne===o.INT&&(he=o.RGBA32I)),R===o.RGB&&ne===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),R===o.RGBA){const He=_e?wc:yt.getTransfer(me);ne===o.FLOAT&&(he=o.RGBA32F),ne===o.HALF_FLOAT&&(he=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(he=He===bt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(I,R){let ne;return I?R===null||R===$s||R===ia?ne=o.DEPTH24_STENCIL8:R===Mr?ne=o.DEPTH32F_STENCIL8:R===fl&&(ne=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===$s||R===ia?ne=o.DEPTH_COMPONENT24:R===Mr?ne=o.DEPTH_COMPONENT32F:R===fl&&(ne=o.DEPTH_COMPONENT16),ne}function N(I,R){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==ki&&I.minFilter!==Zi?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function U(I){const R=I.target;R.removeEventListener("dispose",U),O(R),R.isVideoTexture&&p.delete(R)}function D(I){const R=I.target;R.removeEventListener("dispose",D),A(R)}function O(I){const R=i.get(I);if(R.__webglInit===void 0)return;const ne=I.source,me=_.get(ne);if(me){const _e=me[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(I),Object.keys(me).length===0&&_.delete(ne)}i.remove(I)}function T(I){const R=i.get(I);o.deleteTexture(R.__webglTexture);const ne=I.source,me=_.get(ne);delete me[R.__cacheKey],u.memory.textures--}function A(I){const R=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(R.__webglFramebuffer[me]))for(let _e=0;_e<R.__webglFramebuffer[me].length;_e++)o.deleteFramebuffer(R.__webglFramebuffer[me][_e]);else o.deleteFramebuffer(R.__webglFramebuffer[me]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[me])}else{if(Array.isArray(R.__webglFramebuffer))for(let me=0;me<R.__webglFramebuffer.length;me++)o.deleteFramebuffer(R.__webglFramebuffer[me]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let me=0;me<R.__webglColorRenderbuffer.length;me++)R.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[me]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ne=I.textures;for(let me=0,_e=ne.length;me<_e;me++){const he=i.get(ne[me]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),u.memory.textures--),i.remove(ne[me])}i.remove(I)}let k=0;function ee(){k=0}function W(){const I=k;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),k+=1,I}function le(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function ie(I,R){const ne=i.get(I);if(I.isVideoTexture&&qe(I),I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){const me=I.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ne,I,R);return}}t.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+R)}function K(I,R){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){J(ne,I,R);return}t.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+R)}function Q(I,R){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){J(ne,I,R);return}t.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+R)}function B(I,R){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){de(ne,I,R);return}t.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+R)}const ce={[Ah]:o.REPEAT,[Gs]:o.CLAMP_TO_EDGE,[Ch]:o.MIRRORED_REPEAT},ue={[ki]:o.NEAREST,[g1]:o.NEAREST_MIPMAP_NEAREST,[wu]:o.NEAREST_MIPMAP_LINEAR,[Zi]:o.LINEAR,[yd]:o.LINEAR_MIPMAP_NEAREST,[Ws]:o.LINEAR_MIPMAP_LINEAR},z={[y1]:o.NEVER,[A1]:o.ALWAYS,[S1]:o.LESS,[Kv]:o.LEQUAL,[M1]:o.EQUAL,[w1]:o.GEQUAL,[E1]:o.GREATER,[T1]:o.NOTEQUAL};function re(I,R){if(R.type===Mr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Zi||R.magFilter===yd||R.magFilter===wu||R.magFilter===Ws||R.minFilter===Zi||R.minFilter===yd||R.minFilter===wu||R.minFilter===Ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,ce[R.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,ce[R.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,ce[R.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,ue[R.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,ue[R.minFilter]),R.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,z[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ki||R.minFilter!==wu&&R.minFilter!==Ws||R.type===Mr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function De(I,R){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",U));const me=R.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const he=le(R);if(he!==I.__cacheKey){_e[he]===void 0&&(_e[he]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),_e[he].usedTimes++;const He=_e[I.__cacheKey];He!==void 0&&(_e[I.__cacheKey].usedTimes--,He.usedTimes===0&&T(R)),I.__cacheKey=he,I.__webglTexture=_e[he].texture}return ne}function J(I,R,ne){let me=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(me=o.TEXTURE_3D);const _e=De(I,R),he=R.source;t.bindTexture(me,I.__webglTexture,o.TEXTURE0+ne);const He=i.get(he);if(he.version!==He.__version||_e===!0){t.activeTexture(o.TEXTURE0+ne);const Ce=yt.getPrimaries(yt.workingColorSpace),Ne=R.colorSpace===ts?null:yt.getPrimaries(R.colorSpace),lt=R.colorSpace===ts||Ce===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=M(R.image,!1,s.maxTextureSize);Se=At(R,Se);const Oe=a.convert(R.format,R.colorSpace),Qe=a.convert(R.type);let Je=b(R.internalFormat,Oe,Qe,R.colorSpace,R.isVideoTexture);re(me,R);let ke;const ct=R.mipmaps,it=R.isVideoTexture!==!0,wt=He.__version===void 0||_e===!0,G=he.dataReady,Re=N(R,Se);if(R.isDepthTexture)Je=C(R.format===ra,R.type),wt&&(it?t.texStorage2D(o.TEXTURE_2D,1,Je,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,Qe,null));else if(R.isDataTexture)if(ct.length>0){it&&wt&&t.texStorage2D(o.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let fe=0,pe=ct.length;fe<pe;fe++)ke=ct[fe],it?G&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,Qe,ke.data):t.texImage2D(o.TEXTURE_2D,fe,Je,ke.width,ke.height,0,Oe,Qe,ke.data);R.generateMipmaps=!1}else it?(wt&&t.texStorage2D(o.TEXTURE_2D,Re,Je,Se.width,Se.height),G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,Qe,Se.data)):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,Qe,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){it&&wt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Je,ct[0].width,ct[0].height,Se.depth);for(let fe=0,pe=ct.length;fe<pe;fe++)if(ke=ct[fe],R.format!==Oi)if(Oe!==null)if(it){if(G)if(R.layerUpdates.size>0){const Le=w0(ke.width,ke.height,R.format,R.type);for(const Pe of R.layerUpdates){const rt=ke.data.subarray(Pe*Le/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,Pe,ke.width,ke.height,1,Oe,rt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,fe,Je,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,0,ke.width,ke.height,Se.depth,Oe,Qe,ke.data):t.texImage3D(o.TEXTURE_2D_ARRAY,fe,Je,ke.width,ke.height,Se.depth,0,Oe,Qe,ke.data)}else{it&&wt&&t.texStorage2D(o.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let fe=0,pe=ct.length;fe<pe;fe++)ke=ct[fe],R.format!==Oi?Oe!==null?it?G&&t.compressedTexSubImage2D(o.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(o.TEXTURE_2D,fe,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,Qe,ke.data):t.texImage2D(o.TEXTURE_2D,fe,Je,ke.width,ke.height,0,Oe,Qe,ke.data)}else if(R.isDataArrayTexture)if(it){if(wt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Je,Se.width,Se.height,Se.depth),G)if(R.layerUpdates.size>0){const fe=w0(Se.width,Se.height,R.format,R.type);for(const pe of R.layerUpdates){const Le=Se.data.subarray(pe*fe/Se.data.BYTES_PER_ELEMENT,(pe+1)*fe/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Oe,Qe,Le)}R.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Qe,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Oe,Qe,Se.data);else if(R.isData3DTexture)it?(wt&&t.texStorage3D(o.TEXTURE_3D,Re,Je,Se.width,Se.height,Se.depth),G&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Qe,Se.data)):t.texImage3D(o.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Oe,Qe,Se.data);else if(R.isFramebufferTexture){if(wt)if(it)t.texStorage2D(o.TEXTURE_2D,Re,Je,Se.width,Se.height);else{let fe=Se.width,pe=Se.height;for(let Le=0;Le<Re;Le++)t.texImage2D(o.TEXTURE_2D,Le,Je,fe,pe,0,Oe,Qe,null),fe>>=1,pe>>=1}}else if(ct.length>0){if(it&&wt){const fe=Ye(ct[0]);t.texStorage2D(o.TEXTURE_2D,Re,Je,fe.width,fe.height)}for(let fe=0,pe=ct.length;fe<pe;fe++)ke=ct[fe],it?G&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,Oe,Qe,ke):t.texImage2D(o.TEXTURE_2D,fe,Je,Oe,Qe,ke);R.generateMipmaps=!1}else if(it){if(wt){const fe=Ye(Se);t.texStorage2D(o.TEXTURE_2D,Re,Je,fe.width,fe.height)}G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,Qe,Se)}else t.texImage2D(o.TEXTURE_2D,0,Je,Oe,Qe,Se);y(R)&&v(me),He.__version=he.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function de(I,R,ne){if(R.image.length!==6)return;const me=De(I,R),_e=R.source;t.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+ne);const he=i.get(_e);if(_e.version!==he.__version||me===!0){t.activeTexture(o.TEXTURE0+ne);const He=yt.getPrimaries(yt.workingColorSpace),Ce=R.colorSpace===ts?null:yt.getPrimaries(R.colorSpace),Ne=R.colorSpace===ts||He===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=R.isCompressedTexture||R.image[0].isCompressedTexture,Se=R.image[0]&&R.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!lt&&!Se?Oe[pe]=M(R.image[pe],!0,s.maxCubemapSize):Oe[pe]=Se?R.image[pe].image:R.image[pe],Oe[pe]=At(R,Oe[pe]);const Qe=Oe[0],Je=a.convert(R.format,R.colorSpace),ke=a.convert(R.type),ct=b(R.internalFormat,Je,ke,R.colorSpace),it=R.isVideoTexture!==!0,wt=he.__version===void 0||me===!0,G=_e.dataReady;let Re=N(R,Qe);re(o.TEXTURE_CUBE_MAP,R);let fe;if(lt){it&&wt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Re,ct,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){fe=Oe[pe].mipmaps;for(let Le=0;Le<fe.length;Le++){const Pe=fe[Le];R.format!==Oi?Je!==null?it?G&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Je,Pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Je,ke,Pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ct,Pe.width,Pe.height,0,Je,ke,Pe.data)}}}else{if(fe=R.mipmaps,it&&wt){fe.length>0&&Re++;const pe=Ye(Oe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Re,ct,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,Je,ke,Oe[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Oe[pe].width,Oe[pe].height,0,Je,ke,Oe[pe].data);for(let Le=0;Le<fe.length;Le++){const rt=fe[Le].image[pe].image;it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,rt.width,rt.height,Je,ke,rt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ct,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,ke,Oe[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Je,ke,Oe[pe]);for(let Le=0;Le<fe.length;Le++){const Pe=fe[Le];it?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Je,ke,Pe.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ct,Je,ke,Pe.image[pe])}}}y(R)&&v(o.TEXTURE_CUBE_MAP),he.__version=_e.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function Ee(I,R,ne,me,_e,he){const He=a.convert(ne.format,ne.colorSpace),Ce=a.convert(ne.type),Ne=b(ne.internalFormat,He,Ce,ne.colorSpace),lt=i.get(R),Se=i.get(ne);if(Se.__renderTarget=R,!lt.__hasExternalTextures){const Oe=Math.max(1,R.width>>he),Qe=Math.max(1,R.height>>he);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Ne,Oe,Qe,R.depth,0,He,Ce,null):t.texImage2D(_e,he,Ne,Oe,Qe,0,He,Ce,null)}t.bindFramebuffer(o.FRAMEBUFFER,I),ut(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,_e,Se.__webglTexture,0,dt(R)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,_e,Se.__webglTexture,he),t.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(I,R,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,I),R.depthBuffer){const me=R.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=C(R.stencilBuffer,_e),He=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=dt(R);ut(R)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,he,R.width,R.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,he,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,he,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,He,o.RENDERBUFFER,I)}else{const me=R.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],He=a.convert(he.format,he.colorSpace),Ce=a.convert(he.type),Ne=b(he.internalFormat,He,Ce,he.colorSpace),lt=dt(R);ne&&ut(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,Ne,R.width,R.height):ut(R)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,lt,Ne,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ae(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(R.depthTexture);me.__renderTarget=R,(!me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ie(R.depthTexture,0);const _e=me.__webglTexture,he=dt(R);if(R.depthTexture.format===Yo)ut(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(R.depthTexture.format===ra)ut(R)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ue(I){const R=i.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const me=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),me){const _e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),R.__depthDisposeCallback=_e}R.__boundDepthTexture=me}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Ae(R.__webglFramebuffer,I)}else if(ne){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]===void 0)R.__webglDepthbuffer[me]=o.createRenderbuffer(),xe(R.__webglDepthbuffer[me],I,!1);else{const _e=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=R.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,he)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),xe(R.__webglDepthbuffer,I,!1);else{const me=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,_e)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(I,R,ne){const me=i.get(I);R!==void 0&&Ee(me.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&Ue(I)}function Rt(I){const R=I.texture,ne=i.get(I),me=i.get(R);I.addEventListener("dispose",D);const _e=I.textures,he=I.isWebGLCubeRenderTarget===!0,He=_e.length>1;if(He||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=R.version,u.memory.textures++),he){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<R.mipmaps.length;Ne++)ne.__webglFramebuffer[Ce][Ne]=o.createFramebuffer()}else ne.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)ne.__webglFramebuffer[Ce]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(He)for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const lt=i.get(_e[Ce]);lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture(),u.memory.textures++)}if(I.samples>0&&ut(I)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ne=_e[Ce];ne.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]);const lt=a.convert(Ne.format,Ne.colorSpace),Se=a.convert(Ne.type),Oe=b(Ne.internalFormat,lt,Se,Ne.colorSpace,I.isXRRenderTarget===!0),Qe=dt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,Oe,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){t.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),re(o.TEXTURE_CUBE_MAP,R);for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)Ee(ne.__webglFramebuffer[Ce][Ne],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else Ee(ne.__webglFramebuffer[Ce],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(R)&&v(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const lt=_e[Ce],Se=i.get(lt);t.bindTexture(o.TEXTURE_2D,Se.__webglTexture),re(o.TEXTURE_2D,lt),Ee(ne.__webglFramebuffer,I,lt,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,0),y(lt)&&v(o.TEXTURE_2D)}t.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),re(Ce,R),R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)Ee(ne.__webglFramebuffer[Ne],I,R,o.COLOR_ATTACHMENT0,Ce,Ne);else Ee(ne.__webglFramebuffer,I,R,o.COLOR_ATTACHMENT0,Ce,0);y(R)&&v(Ce),t.unbindTexture()}I.depthBuffer&&Ue(I)}function ht(I){const R=I.textures;for(let ne=0,me=R.length;ne<me;ne++){const _e=R[ne];if(y(_e)){const he=P(I),He=i.get(_e).__webglTexture;t.bindTexture(he,He),v(he),t.unbindTexture()}}}const Nt=[],Y=[];function Cn(I){if(I.samples>0){if(ut(I)===!1){const R=I.textures,ne=I.width,me=I.height;let _e=o.COLOR_BUFFER_BIT;const he=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,He=i.get(I),Ce=R.length>1;if(Ce)for(let Ne=0;Ne<R.length;Ne++)t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ne=0;Ne<R.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const lt=i.get(R[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,lt,0)}o.blitFramebuffer(0,0,ne,me,0,0,ne,me,_e,o.NEAREST),d===!0&&(Nt.length=0,Y.length=0,Nt.push(o.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push(he),Y.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Y)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<R.length;Ne++){t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const lt=i.get(R[Ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,lt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const R=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function dt(I){return Math.min(s.maxSamples,I.samples)}function ut(I){const R=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function qe(I){const R=u.render.frame;p.get(I)!==R&&(p.set(I,R),I.update())}function At(I,R){const ne=I.colorSpace,me=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==oa&&ne!==ts&&(yt.getTransfer(ne)===bt?(me!==Oi||_e!==Cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),R}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=ee,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ut}function LC(o,e){function t(i,s=ts){let a;const u=yt.getTransfer(s);if(i===Cr)return o.UNSIGNED_BYTE;if(i===Tp)return o.UNSIGNED_SHORT_4_4_4_4;if(i===wp)return o.UNSIGNED_SHORT_5_5_5_1;if(i===Vv)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===zv)return o.BYTE;if(i===Bv)return o.SHORT;if(i===fl)return o.UNSIGNED_SHORT;if(i===Ep)return o.INT;if(i===$s)return o.UNSIGNED_INT;if(i===Mr)return o.FLOAT;if(i===hl)return o.HALF_FLOAT;if(i===Hv)return o.ALPHA;if(i===Gv)return o.RGB;if(i===Oi)return o.RGBA;if(i===Wv)return o.LUMINANCE;if(i===Xv)return o.LUMINANCE_ALPHA;if(i===Yo)return o.DEPTH_COMPONENT;if(i===ra)return o.DEPTH_STENCIL;if(i===jv)return o.RED;if(i===Ap)return o.RED_INTEGER;if(i===Yv)return o.RG;if(i===Cp)return o.RG_INTEGER;if(i===Rp)return o.RGBA_INTEGER;if(i===nc||i===ic||i===rc||i===sc)if(u===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===nc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===nc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ic)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rh||i===bh||i===Ph||i===Lh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Rh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dh||i===Ih||i===Uh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Dh||i===Ih)return u===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Uh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nh||i===Fh||i===Oh||i===kh||i===zh||i===Bh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh||i===jh||i===Yh||i===qh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Nh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qh)return u===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oc||i===$h||i===Kh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===oc)return u===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qv||i===Zh||i===Qh||i===Jh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===oc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class DC extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ja extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IC={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,i),v=this._getHandJoint(h,M);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=p.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&_>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(IC)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ja;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const UC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Kn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hs({vertexShader:UC,fragmentShader:NC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qi(new Ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OC extends aa{constructor(e,t){super();const i=this;let s=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,_=null,S=null,E=null;const M=new FC,y=t.getContextAttributes();let v=null,P=null;const b=[],C=[],N=new Et;let U=null;const D=new si;D.viewport=new Lt;const O=new si;O.viewport=new Lt;const T=[D,O],A=new DC;let k=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=b[J];return de===void 0&&(de=new qd,b[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=b[J];return de===void 0&&(de=new qd,b[J]=de),de.getGripSpace()},this.getHand=function(J){let de=b[J];return de===void 0&&(de=new qd,b[J]=de),de.getHandSpace()};function W(J){const de=C.indexOf(J.inputSource);if(de===-1)return;const Ee=b[de];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,h||u),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function le(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<b.length;J++){const de=C[J];de!==null&&(C[J]=null,b[J].disconnect(de))}k=null,ee=null,M.reset(),e.setRenderTarget(v),S=null,_=null,g=null,s=null,P=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){c=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",le),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ks(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:Cr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?ra:Yo,Ee=y.stencil?ia:$s);const Ae={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Ae),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Ks(_.textureWidth,_.textureHeight,{format:Oi,type:Cr,depthTexture:new ux(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ie(J){for(let de=0;de<J.removed.length;de++){const Ee=J.removed[de],xe=C.indexOf(Ee);xe>=0&&(C[xe]=null,b[xe].disconnect(Ee))}for(let de=0;de<J.added.length;de++){const Ee=J.added[de];let xe=C.indexOf(Ee);if(xe===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=C.length){C.push(Ee),xe=Ue;break}else if(C[Ue]===null){C[Ue]=Ee,xe=Ue;break}if(xe===-1)break}const Ae=b[xe];Ae&&Ae.connect(Ee)}}const K=new $,Q=new $;function B(J,de,Ee){K.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(Ee.matrixWorld);const xe=K.distanceTo(Q),Ae=de.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Rt=Ae[14]/(Ae[10]+1),ht=(Ae[9]+1)/Ae[5],Nt=(Ae[9]-1)/Ae[5],Y=(Ae[8]-1)/Ae[0],Cn=(Ue[8]+1)/Ue[0],dt=Ze*Y,ut=Ze*Cn,qe=xe/(-Y+Cn),At=qe*-Y;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(At),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ye=Ze+qe,I=Rt+qe,R=dt-At,ne=ut+(xe-At),me=ht*Rt/I*Ye,_e=Nt*Rt/I*Ye;J.projectionMatrix.makePerspective(R,ne,me,_e,Ye,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let de=J.near,Ee=J.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),A.near=O.near=D.near=de,A.far=O.far=D.far=Ee,(k!==A.near||ee!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ee=A.far),D.layers.mask=J.layers.mask|2,O.layers.mask=J.layers.mask|4,A.layers.mask=D.layers.mask|O.layers.mask;const xe=J.parent,Ae=A.cameras;ce(A,xe);for(let Ue=0;Ue<Ae.length;Ue++)ce(Ae[Ue],xe);Ae.length===2?B(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),ue(J,A,xe)};function ue(J,de,Ee){Ee===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ep*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(J){d=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let z=null;function re(J,de){if(p=de.getViewerPose(h||u),E=de,p!==null){const Ee=p.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let xe=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Ze=Ee[Ue];let Rt=null;if(S!==null)Rt=S.getViewport(Ze);else{const Nt=g.getViewSubImage(_,Ze);Rt=Nt.viewport,Ue===0&&(e.setRenderTargetTextures(P,Nt.colorTexture,_.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(P))}let ht=T[Ue];ht===void 0&&(ht=new si,ht.layers.enable(Ue),ht.viewport=new Lt,T[Ue]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ue===0&&(A.matrix.copy(ht.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(ht)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ue=g.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&M.init(e,Ue,s.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const xe=C[Ee],Ae=b[Ee];xe!==null&&Ae!==void 0&&Ae.update(xe,de,h||u)}z&&z(J,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),E=null}const De=new lx;De.setAnimationLoop(re),this.setAnimationLoop=function(J){z=J},this.dispose=function(){}}}const Fs=new tr,kC=new Bt;function zC(o,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function i(y,v){v.color.getRGB(y.fogColor.value,sx(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,P,b,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(y,v):v.isMeshToonMaterial?(a(y,v),g(y,v)):v.isMeshPhongMaterial?(a(y,v),p(y,v)):v.isMeshStandardMaterial?(a(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,C)):v.isMeshMatcapMaterial?(a(y,v),E(y,v)):v.isMeshDepthMaterial?a(y,v):v.isMeshDistanceMaterial?(a(y,v),M(y,v)):v.isMeshNormalMaterial?a(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?d(y,v,P,b):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===$n&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===$n&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=e.get(v),b=P.envMap,C=P.envMapRotation;b&&(y.envMap.value=b,Fs.copy(C),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),y.envMapRotation.value.setFromMatrix4(kC.makeRotationFromEuler(Fs)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function d(y,v,P,b){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=b*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===$n&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function M(y,v){const P=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function BC(o,e,t,i){let s={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,b){const C=b.program;i.uniformBlockBinding(P,C)}function h(P,b){let C=s[P.id];C===void 0&&(E(P),C=p(P),s[P.id]=C,P.addEventListener("dispose",y));const N=b.program;i.updateUBOMapping(P,N);const U=e.render.frame;a[P.id]!==U&&(_(P),a[P.id]=U)}function p(P){const b=g();P.__bindingPointIndex=b;const C=o.createBuffer(),N=P.__size,U=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,N,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,C),C}function g(){for(let P=0;P<c;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const b=s[P.id],C=P.uniforms,N=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let U=0,D=C.length;U<D;U++){const O=Array.isArray(C[U])?C[U]:[C[U]];for(let T=0,A=O.length;T<A;T++){const k=O[T];if(S(k,U,T,N)===!0){const ee=k.__offset,W=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let ie=0;ie<W.length;ie++){const K=W[ie],Q=M(K);typeof K=="number"||typeof K=="boolean"?(k.__data[0]=K,o.bufferSubData(o.UNIFORM_BUFFER,ee+le,k.__data)):K.isMatrix3?(k.__data[0]=K.elements[0],k.__data[1]=K.elements[1],k.__data[2]=K.elements[2],k.__data[3]=0,k.__data[4]=K.elements[3],k.__data[5]=K.elements[4],k.__data[6]=K.elements[5],k.__data[7]=0,k.__data[8]=K.elements[6],k.__data[9]=K.elements[7],k.__data[10]=K.elements[8],k.__data[11]=0):(K.toArray(k.__data,le),le+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(P,b,C,N){const U=P.value,D=b+"_"+C;if(N[D]===void 0)return typeof U=="number"||typeof U=="boolean"?N[D]=U:N[D]=U.clone(),!0;{const O=N[D];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return N[D]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function E(P){const b=P.uniforms;let C=0;const N=16;for(let D=0,O=b.length;D<O;D++){const T=Array.isArray(b[D])?b[D]:[b[D]];for(let A=0,k=T.length;A<k;A++){const ee=T[A],W=Array.isArray(ee.value)?ee.value:[ee.value];for(let le=0,ie=W.length;le<ie;le++){const K=W[le],Q=M(K),B=C%N,ce=B%Q.boundary,ue=B+ce;C+=ce,ue!==0&&N-ue<Q.storage&&(C+=N-ue),ee.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=C,C+=Q.storage}}}const U=C%N;return U>0&&(C+=N-U),P.__size=C,P.__cache={},this}function M(P){const b={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(b.boundary=4,b.storage=4):P.isVector2?(b.boundary=8,b.storage=8):P.isVector3||P.isColor?(b.boundary=16,b.storage=12):P.isVector4?(b.boundary=16,b.storage=16):P.isMatrix3?(b.boundary=48,b.storage=48):P.isMatrix4?(b.boundary=64,b.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),b}function y(P){const b=P.target;b.removeEventListener("dispose",y);const C=u.indexOf(b.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function v(){for(const P in s)o.deleteBuffer(s[P]);u=[],s={},a={}}return{bind:d,update:h,dispose:v}}class VC{constructor(e={}){const{canvas:t=R1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,v=null;const P=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mi,this.toneMapping=ls,this.toneMappingExposure=1;const C=this;let N=!1,U=0,D=0,O=null,T=-1,A=null;const k=new Lt,ee=new Lt;let W=null;const le=new mt(0);let ie=0,K=t.width,Q=t.height,B=1,ce=null,ue=null;const z=new Lt(0,0,K,Q),re=new Lt(0,0,K,Q);let De=!1;const J=new Pp;let de=!1,Ee=!1;const xe=new Bt,Ae=new Bt,Ue=new $,Ze=new Lt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Nt(){return O===null?B:1}let Y=i;function Cn(L,X){return t.getContext(L,X)}try{const L={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mp}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),Y===null){const X="webgl2";if(Y=Cn(X,L),Y===null)throw Cn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let dt,ut,qe,At,Ye,I,R,ne,me,_e,he,He,Ce,Ne,lt,Se,Oe,Qe,Je,ke,ct,it,wt,G;function Re(){dt=new jw(Y),dt.init(),it=new LC(Y,dt),ut=new zw(Y,dt,e,it),qe=new RC(Y,dt),ut.reverseDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),At=new $w(Y),Ye=new hC,I=new PC(Y,dt,qe,Ye,ut,it,At),R=new Vw(C),ne=new Xw(C),me=new tE(Y),wt=new Ow(Y,me),_e=new Yw(Y,me,At,wt),he=new Zw(Y,_e,me,At),Je=new Kw(Y,ut,I),Se=new Bw(Ye),He=new dC(C,R,ne,dt,ut,wt,Se),Ce=new zC(C,Ye),Ne=new mC,lt=new SC(dt),Qe=new Fw(C,R,ne,qe,he,S,d),Oe=new AC(C,he,ut),G=new BC(Y,At,ut,qe),ke=new kw(Y,dt,At),ct=new qw(Y,dt,At),At.programs=He.programs,C.capabilities=ut,C.extensions=dt,C.properties=Ye,C.renderLists=Ne,C.shadowMap=Oe,C.state=qe,C.info=At}Re();const fe=new OC(C,Y);this.xr=fe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const L=dt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=dt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize(K,Q,!1))},this.getSize=function(L){return L.set(K,Q)},this.setSize=function(L,X,oe=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=L,Q=X,t.width=Math.floor(L*B),t.height=Math.floor(X*B),oe===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(K*B,Q*B).floor()},this.setDrawingBufferSize=function(L,X,oe){K=L,Q=X,B=oe,t.width=Math.floor(L*oe),t.height=Math.floor(X*oe),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(k)},this.getViewport=function(L){return L.copy(z)},this.setViewport=function(L,X,oe,ae){L.isVector4?z.set(L.x,L.y,L.z,L.w):z.set(L,X,oe,ae),qe.viewport(k.copy(z).multiplyScalar(B).round())},this.getScissor=function(L){return L.copy(re)},this.setScissor=function(L,X,oe,ae){L.isVector4?re.set(L.x,L.y,L.z,L.w):re.set(L,X,oe,ae),qe.scissor(ee.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(L){qe.setScissorTest(De=L)},this.setOpaqueSort=function(L){ce=L},this.setTransparentSort=function(L){ue=L},this.getClearColor=function(L){return L.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(L=!0,X=!0,oe=!0){let ae=0;if(L){let j=!1;if(O!==null){const we=O.texture.format;j=we===Rp||we===Cp||we===Ap}if(j){const we=O.texture.type,Me=we===Cr||we===$s||we===fl||we===ia||we===Tp||we===wp,Ge=Qe.getClearColor(),Be=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Me?(E[0]=et,E[1]=nt,E[2]=We,E[3]=Be,Y.clearBufferuiv(Y.COLOR,0,E)):(M[0]=et,M[1]=nt,M[2]=We,M[3]=Be,Y.clearBufferiv(Y.COLOR,0,M))}else ae|=Y.COLOR_BUFFER_BIT}X&&(ae|=Y.DEPTH_BUFFER_BIT),oe&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ne.dispose(),lt.dispose(),Ye.dispose(),R.dispose(),ne.dispose(),he.dispose(),wt.dispose(),G.dispose(),He.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",eo),fe.removeEventListener("sessionend",Rr),nr.stop()};function pe(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const L=At.autoReset,X=Oe.enabled,oe=Oe.autoUpdate,ae=Oe.needsUpdate,j=Oe.type;Re(),At.autoReset=L,Oe.enabled=X,Oe.autoUpdate=oe,Oe.needsUpdate=ae,Oe.type=j}function Pe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function rt(L){const X=L.target;X.removeEventListener("dispose",rt),Ot(X)}function Ot(L){tn(L),Ye.remove(L)}function tn(L){const X=Ye.get(L).programs;X!==void 0&&(X.forEach(function(oe){He.releaseProgram(oe)}),L.isShaderMaterial&&He.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,oe,ae,j,we){X===null&&(X=Rt);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Ge=yl(L,X,oe,ae,j);qe.setMaterial(ae,Me);let Be=oe.index,et=1;if(ae.wireframe===!0){if(Be=_e.getWireframeAttribute(oe),Be===void 0)return;et=2}const nt=oe.drawRange,We=oe.attributes.position;let gt=nt.start*et,Tt=(nt.start+nt.count)*et;we!==null&&(gt=Math.max(gt,we.start*et),Tt=Math.min(Tt,(we.start+we.count)*et)),Be!==null?(gt=Math.max(gt,0),Tt=Math.min(Tt,Be.count)):We!=null&&(gt=Math.max(gt,0),Tt=Math.min(Tt,We.count));const pt=Tt-gt;if(pt<0||pt===1/0)return;wt.setup(j,ae,Ge,oe,Be);let gn,st=ke;if(Be!==null&&(gn=me.get(Be),st=ct,st.setIndex(gn)),j.isMesh)ae.wireframe===!0?(qe.setLineWidth(ae.wireframeLinewidth*Nt()),st.setMode(Y.LINES)):st.setMode(Y.TRIANGLES);else if(j.isLine){let je=ae.linewidth;je===void 0&&(je=1),qe.setLineWidth(je*Nt()),j.isLineSegments?st.setMode(Y.LINES):j.isLineLoop?st.setMode(Y.LINE_LOOP):st.setMode(Y.LINE_STRIP)}else j.isPoints?st.setMode(Y.POINTS):j.isSprite&&st.setMode(Y.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)st.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))st.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const je=j._multiDrawStarts,Ai=j._multiDrawCounts,St=j._multiDrawCount,_n=Be?me.get(Be).bytesPerElement:1,Ci=Ye.get(ae).currentProgram.getUniforms();for(let nn=0;nn<St;nn++)Ci.setValue(Y,"_gl_DrawID",nn),st.render(je[nn]/_n,Ai[nn])}else if(j.isInstancedMesh)st.renderInstances(gt,pt,j.count);else if(oe.isInstancedBufferGeometry){const je=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ai=Math.min(oe.instanceCount,je);st.renderInstances(gt,pt,Ai)}else st.render(gt,pt)};function vt(L,X,oe){L.transparent===!0&&L.side===Sr&&L.forceSinglePass===!1?(L.side=$n,L.needsUpdate=!0,to(L,X,oe),L.side=ds,L.needsUpdate=!0,to(L,X,oe),L.side=Sr):to(L,X,oe)}this.compile=function(L,X,oe=null){oe===null&&(oe=L),v=lt.get(oe),v.init(X),b.push(v),oe.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),L!==oe&&L.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const ae=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Me=0;Me<we.length;Me++){const Ge=we[Me];vt(Ge,oe,j),ae.add(Ge)}else vt(we,oe,j),ae.add(we)}),b.pop(),v=null,ae},this.compileAsync=function(L,X,oe=null){const ae=this.compile(L,X,oe);return new Promise(j=>{function we(){if(ae.forEach(function(Me){Ye.get(Me).currentProgram.isReady()&&ae.delete(Me)}),ae.size===0){j(L);return}setTimeout(we,10)}dt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Nn=null;function Rn(L){Nn&&Nn(L)}function eo(){nr.stop()}function Rr(){nr.start()}const nr=new lx;nr.setAnimationLoop(Rn),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(L){Nn=L,fe.setAnimationLoop(L),L===null?nr.stop():nr.start()},fe.addEventListener("sessionstart",eo),fe.addEventListener("sessionend",Rr),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,X,O),v=lt.get(L,b.length),v.init(X),b.push(v),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,de=Se.init(this.clippingPlanes,Ee),y=Ne.get(L,P.length),y.init(),P.push(y),fe.enabled===!0&&fe.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&ir(we,X,-1/0,C.sortObjects)}ir(L,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ce,ue),ht=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ht&&Qe.addToRenderList(y,L),this.info.render.frame++,de===!0&&Se.beginShadows();const oe=v.state.shadowsArray;Oe.render(oe,L,X),de===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,j=y.transmissive;if(v.setupLights(),X.isArrayCamera){const we=X.cameras;if(j.length>0)for(let Me=0,Ge=we.length;Me<Ge;Me++){const Be=we[Me];gs(ae,j,L,Be)}ht&&Qe.render(L);for(let Me=0,Ge=we.length;Me<Ge;Me++){const Be=we[Me];ms(y,L,Be,Be.viewport)}}else j.length>0&&gs(ae,j,L,X),ht&&Qe.render(L),ms(y,L,X);O!==null&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(C,L,X),wt.resetDefaultState(),T=-1,A=null,b.pop(),b.length>0?(v=b[b.length-1],de===!0&&Se.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function ir(L,X,oe,ae){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||J.intersectsSprite(L)){ae&&Ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ae);const Me=he.update(L),Ge=L.material;Ge.visible&&y.push(L,Me,Ge,oe,Ze.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||J.intersectsObject(L))){const Me=he.update(L),Ge=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ze.copy(L.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ze.copy(Me.boundingSphere.center)),Ze.applyMatrix4(L.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const Be=Me.groups;for(let et=0,nt=Be.length;et<nt;et++){const We=Be[et],gt=Ge[We.materialIndex];gt&&gt.visible&&y.push(L,Me,gt,oe,Ze.z,We)}}else Ge.visible&&y.push(L,Me,Ge,oe,Ze.z,null)}}const we=L.children;for(let Me=0,Ge=we.length;Me<Ge;Me++)ir(we[Me],X,oe,ae)}function ms(L,X,oe,ae){const j=L.opaque,we=L.transmissive,Me=L.transparent;v.setupLightsView(oe),de===!0&&Se.setGlobalState(C.clippingPlanes,oe),ae&&qe.viewport(k.copy(ae)),j.length>0&&br(j,X,oe),we.length>0&&br(we,X,oe),Me.length>0&&br(Me,X,oe),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function gs(L,X,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ae.id]===void 0&&(v.state.transmissionRenderTarget[ae.id]=new Ks(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?hl:Cr,minFilter:Ws,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const we=v.state.transmissionRenderTarget[ae.id],Me=ae.viewport||k;we.setSize(Me.z,Me.w);const Ge=C.getRenderTarget();C.setRenderTarget(we),C.getClearColor(le),ie=C.getClearAlpha(),ie<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Qe.render(oe);const Be=C.toneMapping;C.toneMapping=ls;const et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),v.setupLightsView(ae),de===!0&&Se.setGlobalState(C.clippingPlanes,ae),br(L,oe,ae),I.updateMultisampleRenderTarget(we),I.updateRenderTargetMipmap(we),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,gt=X.length;We<gt;We++){const Tt=X[We],pt=Tt.object,gn=Tt.geometry,st=Tt.material,je=Tt.group;if(st.side===Sr&&pt.layers.test(ae.layers)){const Ai=st.side;st.side=$n,st.needsUpdate=!0,vl(pt,oe,ae,gn,st,je),st.side=Ai,st.needsUpdate=!0,nt=!0}}nt===!0&&(I.updateMultisampleRenderTarget(we),I.updateRenderTargetMipmap(we))}C.setRenderTarget(Ge),C.setClearColor(le,ie),et!==void 0&&(ae.viewport=et),C.toneMapping=Be}function br(L,X,oe){const ae=X.isScene===!0?X.overrideMaterial:null;for(let j=0,we=L.length;j<we;j++){const Me=L[j],Ge=Me.object,Be=Me.geometry,et=ae===null?Me.material:ae,nt=Me.group;Ge.layers.test(oe.layers)&&vl(Ge,X,oe,Be,et,nt)}}function vl(L,X,oe,ae,j,we){L.onBeforeRender(C,X,oe,ae,j,we),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(C,X,oe,ae,L,we),j.transparent===!0&&j.side===Sr&&j.forceSinglePass===!1?(j.side=$n,j.needsUpdate=!0,C.renderBufferDirect(oe,X,ae,j,L,we),j.side=ds,j.needsUpdate=!0,C.renderBufferDirect(oe,X,ae,j,L,we),j.side=Sr):C.renderBufferDirect(oe,X,ae,j,L,we),L.onAfterRender(C,X,oe,ae,j,we)}function to(L,X,oe){X.isScene!==!0&&(X=Rt);const ae=Ye.get(L),j=v.state.lights,we=v.state.shadowsArray,Me=j.state.version,Ge=He.getParameters(L,j.state,we,X,oe),Be=He.getProgramCacheKey(Ge);let et=ae.programs;ae.environment=L.isMeshStandardMaterial?X.environment:null,ae.fog=X.fog,ae.envMap=(L.isMeshStandardMaterial?ne:R).get(L.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,et===void 0&&(L.addEventListener("dispose",rt),et=new Map,ae.programs=et);let nt=et.get(Be);if(nt!==void 0){if(ae.currentProgram===nt&&ae.lightsStateVersion===Me)return Vi(L,Ge),nt}else Ge.uniforms=He.getUniforms(L),L.onBeforeCompile(Ge,C),nt=He.acquireProgram(Ge,Be),et.set(Be,nt),ae.uniforms=Ge.uniforms;const We=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=Se.uniform),Vi(L,Ge),ae.needsLights=Rc(L),ae.lightsStateVersion=Me,ae.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=nt,ae.uniformsList=null,nt}function xl(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=lc.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Vi(L,X){const oe=Ye.get(L);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function yl(L,X,oe,ae,j){X.isScene!==!0&&(X=Rt),I.resetTextureUnits();const we=X.fog,Me=ae.isMeshStandardMaterial?X.environment:null,Ge=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:oa,Be=(ae.isMeshStandardMaterial?ne:R).get(ae.envMap||Me),et=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),We=!!oe.morphAttributes.position,gt=!!oe.morphAttributes.normal,Tt=!!oe.morphAttributes.color;let pt=ls;ae.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(pt=C.toneMapping);const gn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,st=gn!==void 0?gn.length:0,je=Ye.get(ae),Ai=v.state.lights;if(de===!0&&(Ee===!0||L!==A)){const bn=L===A&&ae.id===T;Se.setState(ae,L,bn)}let St=!1;ae.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ai.state.version||je.outputColorSpace!==Ge||j.isBatchedMesh&&je.batching===!1||!j.isBatchedMesh&&je.batching===!0||j.isBatchedMesh&&je.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&je.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&je.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&je.instancingMorph===!1&&j.morphTexture!==null||je.envMap!==Be||ae.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Se.numPlanes||je.numIntersection!==Se.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==nt||je.morphTargets!==We||je.morphNormals!==gt||je.morphColors!==Tt||je.toneMapping!==pt||je.morphTargetsCount!==st)&&(St=!0):(St=!0,je.__version=ae.version);let _n=je.currentProgram;St===!0&&(_n=to(ae,X,j));let Ci=!1,nn=!1,Hi=!1;const Dt=_n.getUniforms(),di=je.uniforms;if(qe.useProgram(_n.program)&&(Ci=!0,nn=!0,Hi=!0),ae.id!==T&&(T=ae.id,nn=!0),Ci||A!==L){qe.buffers.depth.getReversed()?(xe.copy(L.projectionMatrix),P1(xe),L1(xe),Dt.setValue(Y,"projectionMatrix",xe)):Dt.setValue(Y,"projectionMatrix",L.projectionMatrix),Dt.setValue(Y,"viewMatrix",L.matrixWorldInverse);const hi=Dt.map.cameraPosition;hi!==void 0&&hi.setValue(Y,Ue.setFromMatrixPosition(L.matrixWorld)),ut.logarithmicDepthBuffer&&Dt.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Dt.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),A!==L&&(A=L,nn=!0,Hi=!0)}if(j.isSkinnedMesh){Dt.setOptional(Y,j,"bindMatrix"),Dt.setOptional(Y,j,"bindMatrixInverse");const bn=j.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Dt.setValue(Y,"boneTexture",bn.boneTexture,I))}j.isBatchedMesh&&(Dt.setOptional(Y,j,"batchingTexture"),Dt.setValue(Y,"batchingTexture",j._matricesTexture,I),Dt.setOptional(Y,j,"batchingIdTexture"),Dt.setValue(Y,"batchingIdTexture",j._indirectTexture,I),Dt.setOptional(Y,j,"batchingColorTexture"),j._colorsTexture!==null&&Dt.setValue(Y,"batchingColorTexture",j._colorsTexture,I));const rr=oe.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Je.update(j,oe,_n),(nn||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,Dt.setValue(Y,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(di.envMap.value=Be,di.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&X.environment!==null&&(di.envMapIntensity.value=X.environmentIntensity),nn&&(Dt.setValue(Y,"toneMappingExposure",C.toneMappingExposure),je.needsLights&&Sl(di,Hi),we&&ae.fog===!0&&Ce.refreshFogUniforms(di,we),Ce.refreshMaterialUniforms(di,ae,B,Q,v.state.transmissionRenderTarget[L.id]),lc.upload(Y,xl(je),di,I)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(lc.upload(Y,xl(je),di,I),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Dt.setValue(Y,"center",j.center),Dt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(Y,"normalMatrix",j.normalMatrix),Dt.setValue(Y,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const bn=ae.uniformsGroups;for(let hi=0,Fn=bn.length;hi<Fn;hi++){const Ml=bn[hi];G.update(Ml,_n),G.bind(Ml,_n)}}return _n}function Sl(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function Rc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,X,oe){Ye.get(L.texture).__webglTexture=X,Ye.get(L.depthTexture).__webglTexture=oe;const ae=Ye.get(L);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,X){const oe=Ye.get(L);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,oe=0){O=L,U=X,D=oe;let ae=!0,j=null,we=!1,Me=!1;if(L){const Be=Ye.get(L);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(Y.FRAMEBUFFER,null),ae=!1;else if(Be.__webglFramebuffer===void 0)I.setupRenderTarget(L);else if(Be.__hasExternalTextures)I.rebindTextures(L,Ye.get(L.texture).__webglTexture,Ye.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const We=L.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(L.width!==We.image.width||L.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(L)}}const et=L.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Me=!0);const nt=Ye.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?j=nt[X][oe]:j=nt[X],we=!0):L.samples>0&&I.useMultisampledRTT(L)===!1?j=Ye.get(L).__webglMultisampledFramebuffer:Array.isArray(nt)?j=nt[oe]:j=nt,k.copy(L.viewport),ee.copy(L.scissor),W=L.scissorTest}else k.copy(z).multiplyScalar(B).floor(),ee.copy(re).multiplyScalar(B).floor(),W=De;if(qe.bindFramebuffer(Y.FRAMEBUFFER,j)&&ae&&qe.drawBuffers(L,j),qe.viewport(k),qe.scissor(ee),qe.setScissorTest(W),we){const Be=Ye.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,oe)}else if(Me){const Be=Ye.get(L.texture),et=X||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Be.__webglTexture,oe||0,et)}T=-1},this.readRenderTargetPixels=function(L,X,oe,ae,j,we,Me){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){qe.bindFramebuffer(Y.FRAMEBUFFER,Ge);try{const Be=L.texture,et=Be.format,nt=Be.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-ae&&oe>=0&&oe<=L.height-j&&Y.readPixels(X,oe,ae,j,it.convert(et),it.convert(nt),we)}finally{const Be=O!==null?Ye.get(O).__webglFramebuffer:null;qe.bindFramebuffer(Y.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(L,X,oe,ae,j,we,Me){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const Be=L.texture,et=Be.format,nt=Be.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=L.width-ae&&oe>=0&&oe<=L.height-j){qe.bindFramebuffer(Y.FRAMEBUFFER,Ge);const We=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,We),Y.bufferData(Y.PIXEL_PACK_BUFFER,we.byteLength,Y.STREAM_READ),Y.readPixels(X,oe,ae,j,it.convert(et),it.convert(nt),0);const gt=O!==null?Ye.get(O).__webglFramebuffer:null;qe.bindFramebuffer(Y.FRAMEBUFFER,gt);const Tt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await b1(Y,Tt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,We),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,we),Y.deleteBuffer(We),Y.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,X=null,oe=0){L.isTexture!==!0&&(Za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,L=arguments[1]);const ae=Math.pow(2,-oe),j=Math.floor(L.image.width*ae),we=Math.floor(L.image.height*ae),Me=X!==null?X.x:0,Ge=X!==null?X.y:0;I.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,Me,Ge,j,we),qe.unbindTexture()},this.copyTextureToTexture=function(L,X,oe=null,ae=null,j=0){L.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,L=arguments[1],X=arguments[2],j=arguments[3]||0,oe=null);let we,Me,Ge,Be,et,nt,We,gt,Tt;const pt=L.isCompressedTexture?L.mipmaps[j]:L.image;oe!==null?(we=oe.max.x-oe.min.x,Me=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,Be=oe.min.x,et=oe.min.y,nt=oe.isBox3?oe.min.z:0):(we=pt.width,Me=pt.height,Ge=pt.depth||1,Be=0,et=0,nt=0),ae!==null?(We=ae.x,gt=ae.y,Tt=ae.z):(We=0,gt=0,Tt=0);const gn=it.convert(X.format),st=it.convert(X.type);let je;X.isData3DTexture?(I.setTexture3D(X,0),je=Y.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),je=Y.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),je=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment);const Ai=Y.getParameter(Y.UNPACK_ROW_LENGTH),St=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),_n=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ci=Y.getParameter(Y.UNPACK_SKIP_ROWS),nn=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,pt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,pt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Be),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,et),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,nt);const Hi=L.isDataArrayTexture||L.isData3DTexture,Dt=X.isDataArrayTexture||X.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const di=Ye.get(L),rr=Ye.get(X),bn=Ye.get(di.__renderTarget),hi=Ye.get(rr.__renderTarget);qe.bindFramebuffer(Y.READ_FRAMEBUFFER,bn.__webglFramebuffer),qe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Fn=0;Fn<Ge;Fn++)Hi&&Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ye.get(L).__webglTexture,j,nt+Fn),L.isDepthTexture?(Dt&&Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ye.get(X).__webglTexture,j,Tt+Fn),Y.blitFramebuffer(Be,et,we,Me,We,gt,we,Me,Y.DEPTH_BUFFER_BIT,Y.NEAREST)):Dt?Y.copyTexSubImage3D(je,j,We,gt,Tt+Fn,Be,et,we,Me):Y.copyTexSubImage2D(je,j,We,gt,Tt+Fn,Be,et,we,Me);qe.bindFramebuffer(Y.READ_FRAMEBUFFER,null),qe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Dt?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D(je,j,We,gt,Tt,we,Me,Ge,gn,st,pt.data):X.isCompressedArrayTexture?Y.compressedTexSubImage3D(je,j,We,gt,Tt,we,Me,Ge,gn,pt.data):Y.texSubImage3D(je,j,We,gt,Tt,we,Me,Ge,gn,st,pt):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,j,We,gt,we,Me,gn,st,pt.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,j,We,gt,pt.width,pt.height,gn,pt.data):Y.texSubImage2D(Y.TEXTURE_2D,j,We,gt,we,Me,gn,st,pt);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ai),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,St),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,_n),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ci),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,nn),j===0&&X.generateMipmaps&&Y.generateMipmap(je),qe.unbindTexture()},this.copyTextureToTexture3D=function(L,X,oe=null,ae=null,j=0){return L.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ae=arguments[1]||null,L=arguments[2],X=arguments[3],j=arguments[4]||0),Za('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,X,oe,ae,j)},this.initRenderTarget=function(L){Ye.get(L).__webglFramebuffer===void 0&&I.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),qe.unbindTexture()},this.resetState=function(){U=0,D=0,O=null,qe.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class HC extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class px extends Js{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new $,xc=new $,A0=new Bt,Ya=new bp,ju=new _l,$d=new $,C0=new $;class GC extends An{constructor(e=new Bi,t=new px){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)vc.fromBufferAttribute(t,s-1),xc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=vc.distanceTo(xc);e.setAttribute("lineDistance",new Ji(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ju.copy(i.boundingSphere),ju.applyMatrix4(s),ju.radius+=a,e.ray.intersectsSphere(ju)===!1)return;A0.copy(s).invert(),Ya.copy(e.ray).applyMatrix4(A0);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,p=i.index,_=i.attributes.position;if(p!==null){const S=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let M=S,y=E-1;M<y;M+=h){const v=p.getX(M),P=p.getX(M+1),b=Yu(this,e,Ya,d,v,P);b&&t.push(b)}if(this.isLineLoop){const M=p.getX(E-1),y=p.getX(S),v=Yu(this,e,Ya,d,M,y);v&&t.push(v)}}else{const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let M=S,y=E-1;M<y;M+=h){const v=Yu(this,e,Ya,d,M,M+1);v&&t.push(v)}if(this.isLineLoop){const M=Yu(this,e,Ya,d,E-1,S);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Yu(o,e,t,i,s,a){const u=o.geometry.attributes.position;if(vc.fromBufferAttribute(u,s),xc.fromBufferAttribute(u,a),t.distanceSqToSegment(vc,xc,$d,C0)>i)return;$d.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo($d);if(!(d<e.near||d>e.far))return{distance:d,point:C0.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const R0=new $,b0=new $;class WC extends GC{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)R0.fromBufferAttribute(t,s),b0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+R0.distanceTo(b0);e.setAttribute("lineDistance",new Ji(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mx extends Js{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const P0=new Bt,np=new bp,qu=new _l,$u=new $;class XC extends An{constructor(e=new Bi,t=new mx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qu.copy(i.boundingSphere),qu.applyMatrix4(s),qu.radius+=a,e.ray.intersectsSphere(qu)===!1)return;P0.copy(s).invert(),np.copy(e.ray).applyMatrix4(P0);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let E=_,M=S;E<M;E++){const y=h.getX(E);$u.fromBufferAttribute(g,y),L0($u,y,d,s,e,t,this)}}else{const _=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let E=_,M=S;E<M;E++)$u.fromBufferAttribute(g,E),L0($u,E,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function L0(o,e,t,i,s,a,u){const c=np.distanceSqToPoint(o);if(c<t){const d=new $;np.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}const Ku=new $,Zu=new $,Kd=new $,Qu=new Ei;class jC extends Bi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),a=Math.cos(ac*t),u=e.getIndex(),c=e.getAttribute("position"),d=u?u.count:c.count,h=[0,0,0],p=["a","b","c"],g=new Array(3),_={},S=[];for(let E=0;E<d;E+=3){u?(h[0]=u.getX(E),h[1]=u.getX(E+1),h[2]=u.getX(E+2)):(h[0]=E,h[1]=E+1,h[2]=E+2);const{a:M,b:y,c:v}=Qu;if(M.fromBufferAttribute(c,h[0]),y.fromBufferAttribute(c,h[1]),v.fromBufferAttribute(c,h[2]),Qu.getNormal(Kd),g[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,g[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,g[2]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let P=0;P<3;P++){const b=(P+1)%3,C=g[P],N=g[b],U=Qu[p[P]],D=Qu[p[b]],O=`${C}_${N}`,T=`${N}_${C}`;T in _&&_[T]?(Kd.dot(_[T].normal)<=a&&(S.push(U.x,U.y,U.z),S.push(D.x,D.y,D.z)),_[T]=null):O in _||(_[O]={index0:h[P],index1:h[b],normal:Kd.clone()})}}for(const E in _)if(_[E]){const{index0:M,index1:y}=_[E];Ku.fromBufferAttribute(c,M),Zu.fromBufferAttribute(c,y),S.push(Ku.x,Ku.y,Ku.z),S.push(Zu.x,Zu.y,Zu.z)}this.setAttribute("position",new Ji(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class YC extends Js{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$v,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qC extends YC{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return In(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gx extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zd=new Bt,D0=new $,I0=new $;class $C{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pp,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;D0.setFromMatrixPosition(e.matrixWorld),t.position.copy(D0),I0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(I0),t.updateMatrixWorld(),Zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const U0=new Bt,qa=new $,Qd=new $;class KC extends $C{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),qa.setFromMatrixPosition(e.matrixWorld),i.position.copy(qa),Qd.copy(i.position),Qd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qd),i.updateMatrixWorld(),s.makeTranslation(-qa.x,-qa.y,-qa.z),U0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(U0)}}class N0 extends gx{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new KC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ZC extends gx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class QC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=F0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=F0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function F0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);const JC=()=>{const o=Pt.useRef(null);return Pt.useEffect(()=>{if(!o.current)return;const e=o.current,t=e.clientWidth||320,i=e.clientHeight||320,s=new HC,a=new si(45,t/i,.1,1e3);a.position.z=4.8;const u=new VC({alpha:!0,antialias:!0});u.setSize(t,i),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(u.domElement);const c=new Ja;s.add(c);const d=new Zs(1.4,1.4,1.4),h=new qC({color:9599895,emissive:4798541,emissiveIntensity:.6,roughness:.1,metalness:.8,transparent:!0,opacity:.85,reflectivity:.9,clearcoat:1,clearcoatRoughness:.1}),p=new Qi(d,h);c.add(p);const g=new Zs(1.85,1.85,1.85),_=new jC(g),S=new px({color:14340316,linewidth:2,transparent:!0,opacity:.8}),E=new WC(_,S);c.add(E);const M=80,y=new Bi,v=new Float32Array(M*3);for(let K=0;K<M*3;K+=3){const Q=1.9+Math.random()*.9,B=Math.random()*Math.PI*2,ce=Math.acos(Math.random()*2-1);v[K]=Q*Math.sin(ce)*Math.cos(B),v[K+1]=Q*Math.sin(ce)*Math.sin(B),v[K+2]=Q*Math.cos(ce)}y.setAttribute("position",new zi(v,3));const P=new mx({color:11442355,size:.045,transparent:!0,opacity:.9,blending:ph}),b=new XC(y,P);c.add(b);const C=new ZC(16118774,1.2);s.add(C);const N=new N0(14194431,3,50);N.position.set(3,4,3),s.add(N);const U=new N0(6610911,2,50);U.position.set(-3,-3,-2),s.add(U);let D=0,O=0,T=0,A=0;const k=K=>{const Q=e.getBoundingClientRect(),B=K.clientX-Q.left-Q.width/2,ce=K.clientY-Q.top-Q.height/2;T=B/Q.width*2,A=ce/Q.height*2};window.addEventListener("mousemove",k);let ee,W=new QC;const le=()=>{ee=requestAnimationFrame(le);const K=W.getElapsedTime();D+=(T-D)*.05,O+=(A-O)*.05,c.rotation.y=K*.4+D*.8,c.rotation.x=Math.sin(K*.3)*.2+O*.6,c.rotation.z=Math.cos(K*.2)*.15;const Q=1+Math.sin(K*2)*.04;p.scale.set(Q,Q,Q),b.rotation.y=-K*.2,b.rotation.x=K*.1,u.render(s,a)};le();const ie=()=>{if(!e)return;const K=e.clientWidth,Q=e.clientHeight;a.aspect=K/Q,a.updateProjectionMatrix(),u.setSize(K,Q)};return window.addEventListener("resize",ie),()=>{window.removeEventListener("mousemove",k),window.removeEventListener("resize",ie),cancelAnimationFrame(ee),e.contains(u.domElement)&&e.removeChild(u.domElement),s.clear(),u.dispose()}},[]),Z.jsx("div",{ref:o,style:{width:"100%",height:"100%",minHeight:"340px",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":"Interactive 3D Skillpath Hologram Cube"})},eR=({onExploreClick:o})=>{const e=Pt.useRef(null),t=Pt.useRef(null),i=Pt.useRef(null),s=Pt.useRef(null),a=Pt.useRef(null),u=Pt.useRef(null);Pt.useEffect(()=>{const d=hh.context(()=>{hh.timeline({defaults:{ease:"power3.out"}}).from(t.current,{y:-20,opacity:0,duration:.8}).from(i.current,{y:30,opacity:0,duration:1},"-=0.5").from(s.current,{y:20,opacity:0,duration:.8},"-=0.6").from(a.current,{y:20,opacity:0,scale:.95,duration:.8},"-=0.5").from(u.current,{opacity:0,scale:.8,duration:1.2},"-=0.9")},e);return()=>d.revert()},[]);const c=()=>{if(o)o();else{const d=document.getElementById("courses-section");d&&d.scrollIntoView({behavior:"smooth"})}};return Z.jsxs("section",{ref:e,style:{minHeight:"88vh",display:"flex",alignItems:"center",position:"relative",padding:"4rem 1.5rem 2rem",maxWidth:"1280px",margin:"0 auto"},children:[Z.jsx("div",{style:{position:"absolute",top:"20%",left:"10%",width:"350px",height:"350px",background:"radial-gradient(circle, rgba(174, 152, 179, 0.18) 0%, transparent 70%)",filter:"blur(50px)",pointerEvents:"none",zIndex:0}}),Z.jsx("div",{style:{position:"absolute",bottom:"10%",right:"15%",width:"400px",height:"400px",background:"radial-gradient(circle, rgba(95, 73, 100, 0.22) 0%, transparent 70%)",filter:"blur(60px)",pointerEvents:"none",zIndex:0}}),Z.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"3rem",alignItems:"center",width:"100%",position:"relative",zIndex:1},children:[Z.jsxs("div",{children:[Z.jsxs("div",{ref:t,style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.4rem 0.9rem",borderRadius:"9999px",background:"rgba(95, 73, 100, 0.25)",border:"1px solid var(--border-glass-hover)",marginBottom:"1.5rem",backdropFilter:"blur(10px)"},children:[Z.jsx(yc,{size:16,color:"#ae98b3"}),Z.jsx("span",{style:{fontSize:"0.85rem",fontFamily:"var(--font-mono)",color:"var(--color-mountbatten-pink-200)",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Skillpath 2.0 • Autonomous Learning"})]}),Z.jsxs("h1",{ref:i,style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.5rem, 5.5vw, 4.25rem)",fontWeight:800,lineHeight:1.1,letterSpacing:"-0.02em",color:"var(--color-mountbatten-pink-50)",marginBottom:"1.25rem"},children:["Master The Skills That"," ",Z.jsx("span",{style:{background:"linear-gradient(135deg, #fafafa 0%, #dad0dc 40%, #ae98b3 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"inline-block",textShadow:"0 0 30px rgba(174, 152, 179, 0.3)"},children:"Shape Tomorrow"})]}),Z.jsx("p",{ref:s,style:{fontSize:"clamp(1.05rem, 2vw, 1.25rem)",color:"var(--color-mountbatten-pink-300)",lineHeight:1.6,maxWidth:"540px",marginBottom:"2.25rem",fontWeight:400},children:"Hyper-curated execution pathways engineered for creators, engineers, and visionaries."}),Z.jsxs("div",{ref:a,style:{display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"},children:[Z.jsxs("button",{onClick:c,className:"btn-futuristic",id:"hero-explore-btn",children:[Z.jsx("span",{children:"Explore Courses"}),Z.jsx(uS,{size:18})]}),Z.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",fontSize:"0.85rem",color:"var(--color-mountbatten-pink-400)",fontFamily:"var(--font-mono)"},children:Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem",color:"#34d399"},children:[Z.jsx(z0,{size:16}),Z.jsx("span",{children:"100% Refundable Guarantee"})]})})]})]}),Z.jsx("div",{ref:u,style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Z.jsxs("div",{style:{width:"100%",maxWidth:"440px",height:"420px",borderRadius:"24px",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[Z.jsx(JC,{}),Z.jsxs("div",{className:"glass-panel",style:{position:"absolute",bottom:"10px",left:"10px",padding:"0.75rem 1.1rem",borderRadius:"14px",display:"flex",alignItems:"center",gap:"0.6rem",fontSize:"0.85rem"},children:[Z.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"#34d399",boxShadow:"0 0 10px #34d399"}}),Z.jsxs("div",{children:[Z.jsx("div",{style:{fontWeight:600,color:"var(--color-mountbatten-pink-100)"},children:"Live API Engine"}),Z.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-mountbatten-pink-400)",fontFamily:"var(--font-mono)"},children:"Active Currency Sync"})]})]}),Z.jsxs("div",{className:"glass-panel",style:{position:"absolute",top:"15px",right:"15px",padding:"0.5rem 0.85rem",borderRadius:"12px",display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.75rem",fontFamily:"var(--font-mono)",color:"var(--color-mountbatten-pink-200)"},children:[Z.jsx(xS,{size:14,color:"#ae98b3"}),Z.jsx("span",{children:"Real-time Stream"})]})]})})]})]})},tR=({course:o,countryCode:e,onSelect:t})=>{const i=o.pricePaise/100,s=o.priceUsdCents/100,a=o.pricePaise>15e4?43:35,u=Math.round(i/(1-a/100)),c=(s/(1-a/100)).toFixed(2),d=e==="IN"?new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:i%1===0?0:2}).format(i):new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(s),h=e==="IN"?new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(u):`$${c}`;return Z.jsxs("div",{className:"glass-panel-interactive",style:{borderRadius:"18px",padding:"1.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",minHeight:"310px"},children:[Z.jsxs("div",{children:[Z.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",marginBottom:"0.85rem",flexWrap:"wrap"},children:[Z.jsxs("span",{className:"badge-tag",title:`Category: ${o.mainCategory}`,children:[Z.jsx(gS,{size:12,style:{marginRight:"4px"}}),o.mainCategory||"Skill Track"]}),o.refundable&&Z.jsxs("span",{className:"badge-refundable",title:"100% Money-Back Guarantee",children:[Z.jsx(z0,{size:13}),Z.jsx("span",{children:"Refundable"})]})]}),Z.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.25rem",fontWeight:700,color:"var(--color-mountbatten-pink-50)",marginBottom:"0.6rem",lineHeight:1.3,letterSpacing:"-0.01em"},children:o.courseName}),Z.jsx("p",{className:"line-clamp-2",style:{fontSize:"0.9rem",color:"var(--color-mountbatten-pink-300)",lineHeight:1.5,marginBottom:"1.25rem"},title:o.description,children:o.description})]}),Z.jsxs("div",{style:{borderTop:"1px solid rgba(218, 208, 220, 0.08)",paddingTop:"1rem",marginTop:"auto"},children:[Z.jsx("div",{style:{marginBottom:"0.65rem"},children:Z.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.35rem",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.35)",color:"#34d399",padding:"0.25rem 0.65rem",borderRadius:"6px",fontSize:"0.75rem",fontWeight:600,fontFamily:"var(--font-mono)"},children:[Z.jsx(yc,{size:12}),Z.jsxs("span",{children:["Discounted price after ",a,"% discount"]})]})}),Z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"0.85rem"},children:[Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.8rem",color:"var(--color-mountbatten-pink-400)",fontFamily:"var(--font-mono)"},children:[Z.jsx(fS,{size:13}),Z.jsx("span",{children:o.courseType||"Certified Track"})]}),Z.jsxs("div",{style:{textAlign:"right"},children:[Z.jsx("div",{style:{fontSize:"0.8rem",color:"var(--color-mountbatten-pink-400)",textDecoration:"line-through",fontFamily:"var(--font-mono)",lineHeight:1,marginBottom:"2px"},children:h}),Z.jsx("span",{style:{fontFamily:"var(--font-heading)",fontSize:"1.4rem",fontWeight:800,color:"var(--color-mountbatten-pink-50)",letterSpacing:"-0.02em",lineHeight:1,display:"block"},children:d})]})]}),Z.jsxs("button",{onClick:()=>t&&t(o),className:"btn-outline-glass",style:{width:"100%",justifyContent:"center",padding:"0.65rem",fontSize:"0.9rem",borderRadius:"10px"},"aria-label":`Enroll in ${o.courseName} for ${d}`,children:[Z.jsx("span",{children:"Start Learning"}),Z.jsx(cS,{size:16})]})]})]})},nR=()=>Z.jsxs("div",{className:"glass-panel",style:{borderRadius:"18px",padding:"1.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",minHeight:"310px",border:"1px solid rgba(218, 208, 220, 0.08)",background:"rgba(28, 21, 30, 0.65)",position:"relative",overflow:"hidden"},children:[Z.jsxs("div",{children:[Z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[Z.jsx("div",{className:"skeleton-shimmer",style:{width:"90px",height:"22px",borderRadius:"6px"}}),Z.jsx("div",{className:"skeleton-shimmer",style:{width:"80px",height:"22px",borderRadius:"9999px"}})]}),Z.jsx("div",{className:"skeleton-shimmer",style:{width:"85%",height:"26px",borderRadius:"8px",marginBottom:"0.85rem"}}),Z.jsx("div",{className:"skeleton-shimmer",style:{width:"100%",height:"14px",borderRadius:"4px",marginBottom:"0.45rem"}}),Z.jsx("div",{className:"skeleton-shimmer",style:{width:"70%",height:"14px",borderRadius:"4px",marginBottom:"1.5rem"}})]}),Z.jsxs("div",{style:{borderTop:"1px solid rgba(218, 208, 220, 0.08)",paddingTop:"1rem"},children:[Z.jsx("div",{className:"skeleton-shimmer",style:{width:"180px",height:"20px",borderRadius:"6px",marginBottom:"0.85rem"}}),Z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"1rem"},children:[Z.jsx("div",{className:"skeleton-shimmer",style:{width:"80px",height:"16px",borderRadius:"4px"}}),Z.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px"},children:[Z.jsx("div",{className:"skeleton-shimmer",style:{width:"50px",height:"12px",borderRadius:"3px"}}),Z.jsx("div",{className:"skeleton-shimmer",style:{width:"90px",height:"26px",borderRadius:"6px"}})]})]}),Z.jsx("div",{className:"skeleton-shimmer",style:{width:"100%",height:"40px",borderRadius:"10px"}})]})]}),iR="https://syncsphere-hiv6.onrender.com/assignment/course-data",rR="https://syncsphere-hiv6.onrender.com/assignment/country-code",sR=()=>{try{const o=Intl.DateTimeFormat().resolvedOptions().timeZone||"",e=navigator.language||"";return o.includes("Calcutta")||o.includes("Kolkata")||o.includes("Asia/Colombo")||e.toLowerCase().includes("in")?"IN":"US"}catch{return"IN"}},oR=({sectionTitle:o="Autonomous Learning Pathways",sectionSubtitle:e="Direct API-streamed masterclasses engineered to accelerate real-world execution. Smart regional pricing automatically synced with your location.",defaultCurrencyFallback:t="IN"})=>{const[i,s]=Pt.useState([]),[a,u]=Pt.useState("Syncing Geo-Location..."),[c,d]=Pt.useState(t),[h,p]=Pt.useState(!0),[g,_]=Pt.useState(null),[S,E]=Pt.useState(0),[M,y]=Pt.useState(""),[v,P]=Pt.useState("All"),[b,C]=Pt.useState("default"),N=Pt.useCallback(async()=>{var T,A;p(!0),_(null);try{const k=fetch(iR,{method:"GET"}).then(async ie=>{if(!ie.ok)throw new Error(`Course service returned HTTP ${ie.status}`);return await ie.json()}),ee=fetch(rR,{method:"GET"}).then(async ie=>{if(!ie.ok)throw new Error(`Country endpoint returned HTTP ${ie.status}`);return await ie.json()}),[W,le]=await Promise.allSettled([k,ee]);if(W.status==="fulfilled"){const ie=W.value;if(Array.isArray(ie))s(ie);else throw new Error("Invalid course data payload received from server.")}else throw new Error(((T=W.reason)==null?void 0:T.message)||"Failed to retrieve course data from server.");if(le.status==="fulfilled"&&((A=le.value)!=null&&A.country_code)){const ie=le.value.country_code;d(ie),u(ie==="IN"?"🇮🇳 India (IN)":"🇺🇸 United States (US)")}else{const ie=sR();d(ie),u(ie==="IN"?"🇮🇳 India (Asia/Kolkata)":"🇺🇸 United States (US)")}}catch(k){console.error("Fetch error:",k),_(k.message||"Unable to connect to Skillpath API. The server returned a simulated error.")}finally{p(!1)}},[]);Pt.useEffect(()=>{N()},[N]);const U=()=>{E(T=>T+1),N()},D=Pt.useMemo(()=>{const T=new Set;return i.forEach(A=>{A.mainCategory&&T.add(A.mainCategory)}),["All",...Array.from(T)]},[i]),O=Pt.useMemo(()=>{let T=[...i];if(M.trim()){const A=M.toLowerCase();T=T.filter(k=>{var ee,W;return k.courseName.toLowerCase().includes(A)||k.description.toLowerCase().includes(A)||((ee=k.mainCategory)==null?void 0:ee.toLowerCase().includes(A))||((W=k.shortCourse)==null?void 0:W.toLowerCase().includes(A))})}return v!=="All"&&(T=T.filter(A=>A.mainCategory===v)),b==="price-low"?T.sort((A,k)=>{const ee=c==="IN"?A.pricePaise:A.priceUsdCents,W=c==="IN"?k.pricePaise:k.priceUsdCents;return ee-W}):b==="price-high"?T.sort((A,k)=>{const ee=c==="IN"?A.pricePaise:A.priceUsdCents;return(c==="IN"?k.pricePaise:k.priceUsdCents)-ee}):b==="name"&&T.sort((A,k)=>A.courseName.localeCompare(k.courseName)),T},[i,M,v,b,c]);return Z.jsxs("section",{id:"courses-section",style:{padding:"4.5rem 1.5rem",maxWidth:"1280px",margin:"0 auto",position:"relative"},children:[Z.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",marginBottom:"2.75rem"},children:[Z.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",padding:"0.35rem 0.85rem",borderRadius:"9999px",background:"rgba(95, 73, 100, 0.25)",border:"1px solid var(--border-glass)",fontSize:"0.8rem",fontFamily:"var(--font-mono)",color:"var(--color-mountbatten-pink-200)",marginBottom:"1rem"},children:[Z.jsx(yc,{size:13,color:"#ae98b3"}),Z.jsx("span",{children:"LIVE CURRICULUM STREAM"})]}),Z.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.5vw, 3rem)",fontWeight:800,color:"var(--color-mountbatten-pink-50)",letterSpacing:"-0.02em",marginBottom:"0.75rem"},children:o}),Z.jsx("p",{style:{fontSize:"1.05rem",color:"var(--color-mountbatten-pink-300)",maxWidth:"650px",lineHeight:1.6,marginBottom:"1.75rem"},children:e}),Z.jsxs("div",{className:"glass-panel",style:{display:"inline-flex",alignItems:"center",gap:"1rem",padding:"0.6rem 1rem",borderRadius:"9999px",border:"1px solid rgba(174, 152, 179, 0.35)",background:"rgba(28, 21, 30, 0.85)",boxShadow:"0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 15px rgba(146, 123, 151, 0.15)",flexWrap:"wrap",justifyContent:"center"},children:[Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem",padding:"0.35rem 0.85rem",borderRadius:"9999px",background:"rgba(12, 7, 13, 0.7)",border:"1px solid rgba(218, 208, 220, 0.1)"},children:[Z.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#34d399",boxShadow:"0 0 8px #34d399",animation:"pulse 2s infinite"}}),Z.jsx("span",{style:{fontSize:"0.8rem",color:"var(--color-mountbatten-pink-300)"},children:"Location:"}),Z.jsx("strong",{style:{fontSize:"0.85rem",color:"#fafafa",fontFamily:"var(--font-heading)",letterSpacing:"0.02em"},children:a})]}),Z.jsxs("div",{style:{display:"flex",background:"rgba(12, 7, 13, 0.95)",padding:"3px",borderRadius:"9999px",border:"1px solid rgba(218, 208, 220, 0.12)"},children:[Z.jsxs("button",{onClick:()=>d("IN"),style:{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0.45rem 1rem",borderRadius:"9999px",border:"none",background:c==="IN"?"linear-gradient(135deg, #ffffff 0%, #dad0dc 50%, #ae98b3 100%)":"transparent",color:c==="IN"?"#0c070d":"var(--color-mountbatten-pink-300)",fontWeight:c==="IN"?700:500,fontSize:"0.82rem",cursor:"pointer",transition:"all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",boxShadow:c==="IN"?"0 0 12px rgba(218, 208, 220, 0.4)":"none"},title:"Switch to Indian Rupee (INR ₹) view",children:[c==="IN"&&Z.jsx(u_,{size:13,strokeWidth:3}),Z.jsx("span",{children:"🇮🇳 ₹ INR"})]}),Z.jsxs("button",{onClick:()=>d("US"),style:{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0.45rem 1rem",borderRadius:"9999px",border:"none",background:c==="US"?"linear-gradient(135deg, #ffffff 0%, #dad0dc 50%, #ae98b3 100%)":"transparent",color:c==="US"?"#0c070d":"var(--color-mountbatten-pink-300)",fontWeight:c==="US"?700:500,fontSize:"0.82rem",cursor:"pointer",transition:"all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",boxShadow:c==="US"?"0 0 12px rgba(218, 208, 220, 0.4)":"none"},title:"Switch to US Dollar (USD $) view",children:[c==="US"&&Z.jsx(u_,{size:13,strokeWidth:3}),Z.jsx("span",{children:"🇺🇸 $ USD"})]})]})]})]}),!g&&Z.jsxs("div",{className:"glass-panel",style:{borderRadius:"16px",padding:"1.25rem",marginBottom:"2.5rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[Z.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"space-between",alignItems:"center"},children:[Z.jsxs("div",{style:{position:"relative",flex:"1 1 260px",maxWidth:"450px"},children:[Z.jsx(pS,{size:18,color:"var(--color-mountbatten-pink-400)",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)"}}),Z.jsx("input",{type:"text",placeholder:"Search by keyword, topic, or system...",value:M,onChange:T=>y(T.target.value),style:{width:"100%",padding:"0.65rem 2.25rem 0.65rem 2.4rem",borderRadius:"10px",background:"rgba(12, 7, 13, 0.7)",border:"1px solid var(--border-glass)",color:"#fafafa",fontFamily:"var(--font-body)",fontSize:"0.9rem",outline:"none",transition:"border-color 0.2s"},onFocus:T=>T.target.style.borderColor="var(--color-mountbatten-pink-400)",onBlur:T=>T.target.style.borderColor="var(--border-glass)"}),M&&Z.jsx("button",{onClick:()=>y(""),style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"var(--color-mountbatten-pink-400)",cursor:"pointer"},"aria-label":"Clear search",children:Z.jsx(vS,{size:16})})]}),Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",flexWrap:"wrap"},children:[Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[Z.jsx(mS,{size:16,color:"var(--color-mountbatten-pink-400)"}),Z.jsxs("select",{value:b,onChange:T=>C(T.target.value),style:{background:"rgba(12, 7, 13, 0.7)",border:"1px solid var(--border-glass)",color:"var(--color-mountbatten-pink-200)",padding:"0.65rem 1rem",borderRadius:"10px",fontFamily:"var(--font-body)",fontSize:"0.85rem",cursor:"pointer",outline:"none"},children:[Z.jsx("option",{value:"default",children:"Default API Order"}),Z.jsx("option",{value:"price-low",children:"Price: Lowest First"}),Z.jsx("option",{value:"price-high",children:"Price: Highest First"}),Z.jsx("option",{value:"name",children:"Course Name (A-Z)"})]})]}),Z.jsxs("button",{onClick:U,disabled:h,className:"btn-outline-glass",style:{padding:"0.6rem 0.9rem",fontSize:"0.85rem"},title:"Fetch fresh real-time sample",children:[Z.jsx(c_,{size:15,style:{animation:h?"spin 1s linear infinite":"none"}}),Z.jsx("span",{children:"Sync"})]})]})]}),D.length>2&&Z.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",borderTop:"1px solid rgba(218, 208, 220, 0.08)",paddingTop:"0.85rem"},children:D.map(T=>{const A=v===T;return Z.jsx("button",{onClick:()=>P(T),style:{background:A?"linear-gradient(135deg, #dad0dc, #ae98b3)":"rgba(43, 36, 45, 0.5)",color:A?"#0c070d":"var(--color-mountbatten-pink-200)",border:A?"1px solid #fafafa":"1px solid var(--border-glass)",padding:"0.35rem 0.85rem",borderRadius:"9999px",fontSize:"0.8rem",fontWeight:A?600:400,cursor:"pointer",transition:"all 0.2s"},children:T},T)})})]}),g&&Z.jsxs("div",{className:"glass-panel",style:{borderRadius:"20px",padding:"3rem 2rem",textAlign:"center",maxWidth:"600px",margin:"0 auto",border:"1px solid rgba(239, 68, 68, 0.3)",background:"rgba(28, 21, 30, 0.85)"},children:[Z.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.5rem",border:"1px solid rgba(239, 68, 68, 0.4)"},children:Z.jsx(_S,{size:28,color:"#f87171"})}),Z.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.4rem",color:"#fafafa",marginBottom:"0.5rem"},children:"Network Stream Interrupted"}),Z.jsx("p",{style:{color:"var(--color-mountbatten-pink-300)",fontSize:"0.95rem",lineHeight:1.5,marginBottom:"1.75rem"},children:g}),Z.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem"},children:[Z.jsxs("button",{onClick:U,className:"btn-futuristic",style:{padding:"0.75rem 2rem",fontSize:"0.95rem"},children:[Z.jsx(c_,{size:16}),Z.jsx("span",{children:"Retry Request"})]}),S>0&&Z.jsxs("span",{style:{fontSize:"0.8rem",fontFamily:"var(--font-mono)",color:"var(--color-mountbatten-pink-400)"},children:["Retry attempts: ",S]})]})]}),h&&Z.jsx("div",{className:"courses-grid-layout",children:Array.from({length:6}).map((T,A)=>Z.jsx(nR,{},A))}),!h&&!g&&O.length===0&&Z.jsxs("div",{className:"glass-panel",style:{borderRadius:"20px",padding:"3.5rem 2rem",textAlign:"center",maxWidth:"550px",margin:"0 auto"},children:[Z.jsx(hS,{size:42,color:"var(--color-mountbatten-pink-400)",style:{margin:"0 auto 1rem"}}),Z.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.3rem",color:"#fafafa",marginBottom:"0.5rem"},children:"No Courses Found"}),Z.jsxs("p",{style:{color:"var(--color-mountbatten-pink-300)",fontSize:"0.9rem",marginBottom:"1.5rem"},children:["No pathways matched “",M||v,"”. Try clearing your search query or selecting another category."]}),Z.jsx("button",{onClick:()=>{y(""),P("All"),C("default")},className:"btn-outline-glass",children:Z.jsx("span",{children:"Reset Search & Filters"})})]}),!h&&!g&&O.length>0&&Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{className:"courses-grid-layout",children:O.map(T=>Z.jsx(tR,{course:T,countryCode:c},T.mangoId||T.courseCode))}),Z.jsxs("div",{style:{textAlign:"center",marginTop:"2.5rem",fontSize:"0.85rem",color:"var(--color-mountbatten-pink-400)",fontFamily:"var(--font-mono)"},children:["Showing ",O.length," live skill paths • Real-Time Pricing Engine"]})]})]})},aR=()=>Z.jsx("footer",{style:{borderTop:"1px solid rgba(218, 208, 220, 0.1)",backgroundColor:"rgba(12, 7, 13, 0.95)",padding:"3rem 1.5rem 2.5rem",marginTop:"4rem"},children:Z.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.5rem"},children:[Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[Z.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"8px",background:"linear-gradient(135deg, #dad0dc, #ae98b3)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#0c070d",fontSize:"0.9rem",fontFamily:"var(--font-heading)"},children:"S"}),Z.jsx("span",{style:{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"1.2rem",color:"var(--color-mountbatten-pink-50)",letterSpacing:"-0.02em"},children:"Skillpath"})]}),Z.jsxs("nav",{style:{display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap",justifyContent:"center"},children:[Z.jsx("a",{href:"#courses-section",style:{color:"var(--color-mountbatten-pink-300)",textDecoration:"none",fontSize:"0.9rem",transition:"color 0.2s"},onMouseEnter:o=>o.currentTarget.style.color="#fafafa",onMouseLeave:o=>o.currentTarget.style.color="var(--color-mountbatten-pink-300)",children:"Curriculum"}),Z.jsx("a",{href:"#privacy",style:{color:"var(--color-mountbatten-pink-300)",textDecoration:"none",fontSize:"0.9rem",transition:"color 0.2s"},onMouseEnter:o=>o.currentTarget.style.color="#fafafa",onMouseLeave:o=>o.currentTarget.style.color="var(--color-mountbatten-pink-300)",children:"Privacy Policy"}),Z.jsx("a",{href:"#terms",style:{color:"var(--color-mountbatten-pink-300)",textDecoration:"none",fontSize:"0.9rem",transition:"color 0.2s"},onMouseEnter:o=>o.currentTarget.style.color="#fafafa",onMouseLeave:o=>o.currentTarget.style.color="var(--color-mountbatten-pink-300)",children:"Terms of Service"})]}),Z.jsxs("p",{style:{color:"var(--color-mountbatten-pink-500)",fontSize:"0.8rem",fontFamily:"var(--font-mono)",textAlign:"center"},children:["© ",new Date().getFullYear()," Skillpath Technologies Inc. All rights reserved."]})]})}),lR=()=>Z.jsxs("div",{className:"bg-grid-pattern",style:{minHeight:"100vh",position:"relative"},children:[Z.jsx(yS,{}),Z.jsxs("main",{children:[Z.jsx(eR,{}),Z.jsx(oR,{sectionTitle:"Autonomous Learning Pathways",sectionSubtitle:"Direct API-streamed masterclasses engineered to accelerate real-world execution. Resilient pricing synced with your detected geo-locale."})]}),Z.jsx(aR,{})]});sS.createRoot(document.getElementById("root")).render(Z.jsx(Qy.StrictMode,{children:Z.jsx(lR,{})}));
