(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[993],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,l=o(n(7294)),u=n(6273),i=n(2725),s=n(3462),c=n(1018),f=n(7190),d=n(1210),p=n(8684),m={};function h(e,t,n,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(o?"%"+o:"")]=!0}}var v=l.default.forwardRef((function(e,t){var n,o=e.href,v=e.as,g=e.children,b=e.prefetch,y=e.passHref,E=e.replace,w=e.shallow,C=e.scroll,k=e.locale,S=e.onClick,j=e.onMouseEnter,T=e.onTouchStart,x=e.legacyBehavior,L=void 0===x?!0!==Boolean(!1):x,O=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!L||"string"!==typeof n&&"number"!==typeof n||(n=l.default.createElement("a",null,n));var P=!1!==b,M=l.default.useContext(s.RouterContext),R=l.default.useContext(c.AppRouterContext);R&&(M=R);var N,_=l.default.useMemo((function(){var e=r(u.resolveHref(M,o,!0),2),t=e[0],n=e[1];return{href:t,as:v?u.resolveHref(M,v):n||t}}),[M,o,v]),A=_.href,H=_.as,I=l.default.useRef(A),D=l.default.useRef(H);L&&(N=l.default.Children.only(n));var F=L?N&&"object"===typeof N&&N.ref:t,U=r(f.useIntersection({rootMargin:"200px"}),3),B=U[0],$=U[1],q=U[2],K=l.default.useCallback((function(e){D.current===H&&I.current===A||(q(),D.current=H,I.current=A),B(e),F&&("function"===typeof F?F(e):"object"===typeof F&&(F.current=e))}),[H,F,A,q,B]);l.default.useEffect((function(){var e=$&&P&&u.isLocalURL(A),t="undefined"!==typeof k?k:M&&M.locale,n=m[A+"%"+H+(t?"%"+t:"")];e&&!n&&h(M,A,H,{locale:t})}),[H,A,$,k,P,M]);var Z={ref:K,onClick:function(e){L||"function"!==typeof S||S(e),L&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(d):d()}}(e,M,A,H,E,w,C,k,Boolean(R),P)},onMouseEnter:function(e){L||"function"!==typeof j||j(e),L&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),!P&&R||u.isLocalURL(A)&&h(M,A,H,{priority:!0})},onTouchStart:function(e){L||"function"!==typeof T||T(e),L&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),!P&&R||u.isLocalURL(A)&&h(M,A,H,{priority:!0})}};if(!L||y||"a"===N.type&&!("href"in N.props)){var G="undefined"!==typeof k?k:M&&M.locale,W=M&&M.isLocaleDomain&&d.getDomainLocale(H,G,M.locales,M.domainLocales);Z.href=W||p.addBasePath(i.addLocale(H,G,M&&M.defaultLocale))}return L?l.default.cloneElement(N,Z):l.default.createElement("a",Object.assign({},O,Z),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!l,c=r(o.useState(!1),2),f=c[0],d=c[1],p=r(o.useState(null),2),m=p[0],h=p[1];o.useEffect((function(){if(l){if(s||f)return;if(m&&m.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},i.push(n),u.set(n,t),t}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),u.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(m,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[m,s,n,t,f]);var v=o.useCallback((function(){d(!1)}),[]);return[h,f,v]};var o=n(7294),a=n(9311),l="function"===typeof IntersectionObserver,u=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var l=r.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=r.default.createContext(null);t.TemplateContext=u},1664:function(e,t,n){e.exports=n(8418)},9904:function(e,t,n){"use strict";n.d(t,{r:function(){return K}});var r=n(7294),o=Object.defineProperty,a=(e,t,n)=>(((e,t,n)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){a(this,"current",this.detect()),a(this,"handoffState","pending"),a(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},u=(e,t)=>{l.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)};let i=function(e){let t=function(e){let t=(0,r.useRef)(e);return u((()=>{t.current=e}),[e]),t}(e);return r.useCallback(((...e)=>t.current(...e)),[t])};function s(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add((()=>e.removeEventListener(n,r,o)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=s();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}var c;let f=null!=(c=r.useId)?c:function(){let e=function(){let[e,t]=r.useState(l.isHandoffComplete);return e&&!1===l.isHandoffComplete&&t(!1),r.useEffect((()=>{!0!==e&&t(!0)}),[e]),r.useEffect((()=>l.handoff()),[]),e}(),[t,n]=r.useState(e?()=>l.nextId():null);return u((()=>{null===t&&n(l.nextId())}),[t]),null!=t?""+t:void 0};function d(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function p(e,t){let[n,o]=(0,r.useState)((()=>d(e)));return u((()=>{o(d(e))}),[e.type,e.as]),u((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}let m=Symbol();function h(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=i((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[m])))?void 0:n}function v(...e){return Array.from(new Set(e.flatMap((e=>"string"==typeof e?e.split(" "):[])))).filter(Boolean).join(" ")}function g(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,g),r}var b,y=((b=y||{})[b.None=0]="None",b[b.RenderStrategy=1]="RenderStrategy",b[b.Static=2]="Static",b),E=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(E||{});function w({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:a=!0,name:l,mergeRefs:u}){u=null!=u?u:k;let i=S(t,e);if(a)return C(i,n,r,l,u);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=i;if(e)return C(t,n,r,l,u)}if(1&s){let{unmount:e=!0,...t}=i;return g(e?0:1,{0:()=>null,1:()=>C({...t,hidden:!0,style:{display:"none"}},n,r,l,u)})}return C(i,n,r,l,u)}function C(e,t={},n,o,a){let{as:l=n,children:u,refName:i="ref",...s}=x(e,["unmount","static"]),c=void 0!==e.ref?{[i]:e.ref}:{},f="function"==typeof u?u(t):u;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let d={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(l===r.Fragment&&Object.keys(T(s)).length>0){if(!(0,r.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>v(null==e?void 0:e.className(...t),s.className):v(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,r.cloneElement)(f,Object.assign({},S(f.props,T(x(s,["ref"]))),d,c,{ref:a(f.ref,c.ref)},n))}return(0,r.createElement)(l,Object.assign({},x(s,["ref"]),l!==r.Fragment&&c,l!==r.Fragment&&d),f)}function k(...e){return e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function S(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function j(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function T(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function x(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}var L=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(L||{});let O=j((function(e,t){var n;let{features:r=1,...o}=e;return w({ourProps:{ref:t,"aria-hidden":2===(2&r)||(null!=(n=o["aria-hidden"])?n:void 0),hidden:4===(4&r)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4===(4&r)&&2!==(2&r)&&{display:"none"}}},theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})}));function P(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}let M=(0,r.createContext)(null);function R(){let e=(0,r.useContext)(M);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,R),e}return e}let N=j((function(e,t){let n=f(),{id:r=`headlessui-description-${n}`,...o}=e,a=R(),l=h(t);return u((()=>a.register(r)),[r,a.register]),w({ourProps:{ref:l,...a.props,id:r},theirProps:o,slot:a.slot||{},defaultTag:"p",name:a.name||"Description"})})),_=Object.assign(N,{});var A=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(A||{});let H=(0,r.createContext)(null);function I(){let e=(0,r.useContext)(H);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,I),e}return e}let D=j((function(e,t){let n=f(),{id:r=`headlessui-label-${n}`,passive:o=!1,...a}=e,l=I(),i=h(t);u((()=>l.register(r)),[r,l.register]);let s={ref:i,...l.props,id:r};return o&&("onClick"in s&&(delete s.htmlFor,delete s.onClick),"onClick"in a&&delete a.onClick),w({ourProps:s,theirProps:a,slot:l.slot||{},defaultTag:"label",name:l.name||"Label"})})),F=Object.assign(D,{}),U=(0,r.createContext)(null);U.displayName="GroupContext";let B=r.Fragment;let $=j((function(e,t){var n;let o=f(),{id:a=`headlessui-switch-${o}`,checked:l,defaultChecked:u=!1,onChange:c,disabled:d=!1,name:m,value:v,form:g,...b}=e,y=(0,r.useContext)(U),E=(0,r.useRef)(null),C=h(E,t,null===y?null:y.setSwitch),[k,S]=function(e,t,n){let[o,a]=(0,r.useState)(n),l=void 0!==e,u=(0,r.useRef)(l),s=(0,r.useRef)(!1),c=(0,r.useRef)(!1);return!l||u.current||s.current?!l&&u.current&&!c.current&&(c.current=!0,u.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,u.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:o,i((e=>(l||a(e),null==t?void 0:t(e))))]}(l,c,u),j=i((()=>null==S?void 0:S(!k))),x=i((e=>{if(P(e.currentTarget))return e.preventDefault();e.preventDefault(),j()})),M=i((e=>{e.key===A.Space?(e.preventDefault(),j()):e.key===A.Enter&&function(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type))return void t.click();null==(n=r.requestSubmit)||n.call(r)}}(e.currentTarget)})),R=i((e=>e.preventDefault())),N=(0,r.useMemo)((()=>({checked:k})),[k]),_={id:a,ref:C,role:"switch",type:p(e,E),tabIndex:-1===e.tabIndex?0:null!=(n=e.tabIndex)?n:0,"aria-checked":k,"aria-labelledby":null==y?void 0:y.labelledby,"aria-describedby":null==y?void 0:y.describedby,disabled:d,onClick:x,onKeyUp:M,onKeyPress:R},H=function(){let[e]=(0,r.useState)(s);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}();return(0,r.useEffect)((()=>{var e;let t=null==(e=E.current)?void 0:e.closest("form");t&&void 0!==u&&H.addEventListener(t,"reset",(()=>{S(u)}))}),[E,S]),r.createElement(r.Fragment,null,null!=m&&k&&r.createElement(O,{features:L.Hidden,...T({as:"input",type:"checkbox",hidden:!0,readOnly:!0,disabled:d,form:g,checked:k,name:m,value:v})}),w({ourProps:_,theirProps:b,slot:N,defaultTag:"button",name:"Switch"}))})),q=function(e){var t;let[n,o]=(0,r.useState)(null),[a,l]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=i((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(H.Provider,{value:o},e.children)}),[t])]}(),[u,s]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=i((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(M.Provider,{value:o},e.children)}),[t])]}(),c=(0,r.useMemo)((()=>({switch:n,setSwitch:o,labelledby:a,describedby:u})),[n,o,a,u]),f=e;return r.createElement(s,{name:"Switch.Description"},r.createElement(l,{name:"Switch.Label",props:{htmlFor:null==(t=c.switch)?void 0:t.id,onClick(e){n&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},r.createElement(U.Provider,{value:c},w({ourProps:{},theirProps:f,defaultTag:B,name:"Switch.Group"}))))},K=Object.assign($,{Group:q,Label:F,Description:_})},9748:function(e,t,n){"use strict";var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 10l7-7m0 0l7 7m-7-7v18"}))}));t.Z=o}}]);