import{r,j as R}from"./jsx-runtime-BWtM72Fx.js";import{c as v,i as h,d as C,a as y,s as b,g,b as E,u as F,R as $,e as S,f as k,r as P}from"./components-Bp1wuFPT.js";import{E as H,m as O,c as j,a as B,b as D}from"./index-DqDFpSqp.js";/**
 * @remix-run/react v2.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z(d){if(!d)return null;let w=Object.entries(d),s={};for(let[a,e]of w)if(e&&e.__type==="RouteErrorResponse")s[a]=new H(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let i=window[e.__subType];if(typeof i=="function")try{let o=new i(e.message);o.stack=e.stack,s[a]=o}catch{}}if(s[a]==null){let i=new Error(e.message);i.stack=e.stack,s[a]=i}}else s[a]=e;return s}/**
 * @remix-run/react v2.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let n,t,f=!1;let c,N=new Promise(d=>{c=d}).catch(()=>{});function A(d){if(!t){if(window.__remixContext.future.v3_singleFetch){if(!n){let u=window.__remixContext.stream;h(u,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,n=C(u,window).then(l=>{window.__remixContext.state=l.value,n.value=!0}).catch(l=>{n.error=l})}if(n.error)throw n.error;if(!n.value)throw n}let i=y(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),o;if(!window.__remixContext.isSpaMode){o={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let u=O(i,window.location,window.__remixContext.basename);if(u)for(let l of u){let _=l.route.id,x=window.__remixRouteModules[_],m=window.__remixManifest.routes[_];x&&b(m,x,window.__remixContext.isSpaMode)&&(x.HydrateFallback||!m.hasLoader)?o.loaderData[_]=void 0:m&&!m.hasLoader&&(o.loaderData[_]=null)}o&&o.errors&&(o.errors=z(o.errors))}t=j({routes:i,history:B(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.v3_singleFetch===!0},hydrationData:o,mapRouteProperties:D,dataStrategy:window.__remixContext.future.v3_singleFetch?g(window.__remixManifest,window.__remixRouteModules,()=>t):void 0,patchRoutesOnNavigation:E(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),t.state.initialized&&(f=!0,t.initialize()),t.createRoutesForHMR=v,window.__remixRouter=t,c&&c(t)}let[w,s]=r.useState(void 0),[a,e]=r.useState(t.state.location);return r.useLayoutEffect(()=>{f||(f=!0,t.initialize())},[]),r.useLayoutEffect(()=>t.subscribe(i=>{i.location!==a&&e(i.location)}),[a]),F(t,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),r.createElement(r.Fragment,null,r.createElement($.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:w,isSpaMode:window.__remixContext.isSpaMode}},r.createElement(S,{location:a},r.createElement(k,{router:t,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.v3_singleFetch?r.createElement(r.Fragment,null):null)}var p,M=P;M.createRoot,p=M.hydrateRoot;r.startTransition(()=>{p(document,R.jsx(r.StrictMode,{children:R.jsx(A,{})}))});
