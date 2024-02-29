import{n as se,y as it}from"./runtime.CN7zOTHr.js";import{H as te,S as pe,R as De}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function st(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function ct(e){return e.split("%25").map(decodeURI).join("%25")}function lt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ce({href:e}){return e.split("#")[0]}const ft=["href","pathname","search","toString","toJSON"];function ut(e,t,n){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(n(i),a[o](i));t();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of ft)Object.defineProperty(r,a,{get(){return t(),e[a]},enumerable:!0,configurable:!0});return r}const dt="/__data.json",ht=".html__data.json";function pt(e){return e.endsWith(".html")?e.replace(/\.html$/,ht):e.replace(/\/$/,"")+dt}function gt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function mt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const $e=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&F.delete(ge(e)),$e(e,t));const F=new Map;function _t(e,t){const n=ge(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&F.set(n,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=mt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,t)}function yt(e,t,n){if(F.size>0){const r=ge(e,n),a=F.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);F.delete(r)}}return window.fetch(t,n)}function ge(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${gt(...a)}"]`}return r}const wt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function vt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Et(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=wt.exec(c),[,h,g,d,m]=u;return t.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:t}}function bt(e){return!/^\([^)]+\)$/.test(e)}function Et(e){return e.slice(1).split("/").filter(bt)}function kt(e,t,n){const r={},a=e.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<t.length;i+=1){const c=t[i];let l=a[i-s];if(c.chained&&c.rest&&s&&(l=a.slice(i-s,i+1).filter(u=>u).join("/"),s=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const u=t[i+1],h=a[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function St({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([i,[c,l,u]])=>{const{pattern:h,params:g}=vt(i),d={id:i,exec:m=>{const f=h.exec(m);if(f)return kt(f,g,r)},errors:[1,...u||[]].map(m=>e[m]),layouts:[0,...l||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[a.has(i),e[i]]}}function Ce(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Ie(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const N=[];function At(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function me(e,t=se){let n=null;const r=new Set;function a(i){if(At(e,i)&&(e=i,n)){const c=!N.length;for(const l of r)l[1](),N.push(l,e);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(i){a(i(e))}function s(i,c=se){const l=[i,c];return r.add(l),r.size===1&&(n=t(a,o)||se),i(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:s}}var Oe;const I=((Oe=globalThis.__sveltekit_v756cx)==null?void 0:Oe.base)??"";var je;const Rt=((je=globalThis.__sveltekit_v756cx)==null?void 0:je.assets)??I,It="1709238559748",Ve="sveltekit:snapshot",Fe="sveltekit:scroll",qe="sveltekit:states",Lt="sveltekit:pageurl",D="sveltekit:history",q="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},B=location.origin;function Ge(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function _e(){return{x:pageXOffset,y:pageYOffset}}function O(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Le={...z,"":z.hover};function He(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function Me(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=He(e)}}function ue(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||ne(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(n==null?void 0:n.origin)===B&&e.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function Y(e){let t=null,n=null,r=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)r===null&&(r=O(i,"preload-code")),a===null&&(a=O(i,"preload-data")),t===null&&(t=O(i,"keepfocus")),n===null&&(n=O(i,"noscroll")),o===null&&(o=O(i,"reload")),s===null&&(s=O(i,"replacestate")),i=He(i);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[r??"off"],preload_data:Le[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(s)}}function Pe(e){const t=me(e);let n=!0;function r(){n=!0,t.update(s=>s)}function a(s){n=!1,t.set(s)}function o(s){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function Pt(){const{set:e,subscribe:t}=me(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Rt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==It;return s&&(e(!0),clearTimeout(n)),s}catch{return!1}}return{subscribe:t,check:r}}function ne(e,t){return e.origin!==B||!e.pathname.startsWith(t)}const Tt=-1,Ut=-2,xt=-3,Nt=-4,Ot=-5,jt=-6;function Dt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(o,s=!1){if(o===Tt)return;if(o===xt)return NaN;if(o===Nt)return 1/0;if(o===Ot)return-1/0;if(o===jt)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=n[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],l=t==null?void 0:t[c];if(l)return r[o]=l(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<i.length;d+=1)u.add(a(i[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<i.length;d+=2)h.set(a(i[d]),a(i[d+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=a(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let l=0;l<i.length;l+=1){const u=i[l];u!==Ut&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in i){const u=i[l];c[l]=a(u)}}return r[o]}return a(0)}const Be=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Be];const $t=new Set([...Be]);[...$t];function Ct(e){return e.filter(t=>t!=null)}const Vt="x-sveltekit-invalidated",Ft="x-sveltekit-trailing-slash";function W(e){return e instanceof te||e instanceof pe?e.status:500}function qt(e){return e instanceof pe?e.text:"Internal Error"}const x=Ce(Fe)??{},G=Ce(Ve)??{},T={url:Pe({}),page:Pe({}),navigating:me(null),updated:Pt()};function ye(e){x[e]=_e()}function Gt(e,t){let n=e+1;for(;x[n];)delete x[n],n+=1;for(n=t+1;G[n];)delete G[n],n+=1}function $(e){return location.href=e.href,new Promise(()=>{})}function Te(){}let ae,de,J,L,he,C;const Ke=[],X=[];let P=null;const ze=[],Ht=[];let j=[],w={branch:[],error:null,url:null},we=!1,Z=!1,Ue=!0,H=!1,V=!1,Ye=!1,ve=!1,be,k,A,R,Q;async function tn(e,t,n){var a,o;document.URL!==location.href&&(location.href=location.href),C=e,ae=St(e),L=document.documentElement,he=t,de=e.nodes[0],J=e.nodes[1],de(),J(),k=(a=history.state)==null?void 0:a[D],A=(o=history.state)==null?void 0:o[q],k||(k=A=Date.now(),history.replaceState({...history.state,[D]:k,[q]:A},""));const r=x[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Xt(he,n):Wt(location.href,{replaceState:!0}),Jt()}function Mt(){Ke.length=0,ve=!1}function We(e){X.some(t=>t==null?void 0:t.snapshot)&&(G[e]=X.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Je(e){var t;(t=G[e])==null||t.forEach((n,r)=>{var a,o;(o=(a=X[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function xe(){ye(k),Ie(Fe,x),We(A),Ie(Ve,G)}async function Xe(e,t,n,r){return K({type:"goto",url:Ge(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(ve=!0)}})}async function Bt(e){return P={id:e.id,promise:Qe(e).then(t=>(t.type==="loaded"&&t.state.error&&(P=null),t))},P.promise}async function fe(e){const t=ae.find(n=>n.exec(et(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n==null?void 0:n[1]()))}function Ze(e,t){var a;w=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),R=e.props.page,be=new C.root({target:t,props:{...e.props,stores:T,components:X},hydrate:!0}),Je(A);const r={from:null,to:{params:w.params,route:{id:((a=w.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(o=>o(r)),Z=!0}async function ee({url:e,params:t,branch:n,status:r,error:a,route:o,form:s}){let i="never";if(I&&(e.pathname===I||e.pathname===I+"/"))i="always";else for(const d of n)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);e.pathname=st(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:o},props:{constructors:Ct(n).map(d=>d.node.component),page:R}};s!==void 0&&(c.props.form=s);let l={},u=!R,h=0;for(let d=0;d<Math.max(n.length,w.branch.length);d+=1){const m=n[d],f=w.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||s!==void 0&&s!==R.form||u)&&(c.props.page={error:a,params:t,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:u?l:R.data}),c}async function Ee({loader:e,parent:t,url:n,params:r,route:a,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,n);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(i&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(i&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:ut(n,()=>{i&&(c.url=!0)},f=>{i&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const S=new URL(v,n);return i&&d(S.href),S.origin===n.origin&&(v=S.href.slice(n.origin.length)),Z?yt(v,S.href,_):_t(v,_)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),t()},untrack(f){i=!1;try{return f()}finally{i=!0}}};s=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,t,n,r,a,o){if(ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==w.params[s])return!0;for(const s of a.dependencies)if(Ke.some(i=>i(new URL(s))))return!0;return!1}function ke(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Kt(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),o=t.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&n.delete(r)}return n}async function Qe({id:e,invalidating:t,url:n,params:r,route:a}){if((P==null?void 0:P.id)===e)return P.promise;const{errors:o,layouts:s,leaf:i}=a,c=[...s,i];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=w.url?e!==w.url.pathname+w.url.search:!1,h=w.route?a.id!==w.route.id:!1,g=Kt(w.url,n);let d=!1;const m=c.map((p,y)=>{var U;const b=w.branch[y],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Ne(d,h,u,g,(U=b.server)==null?void 0:U.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{l=await at(n,m)}catch(p){return re({status:W(p),error:await M(p,{url:n,params:r,route:{id:a.id}}),url:n,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,y)=>{var oe;if(!p)return;const b=w.branch[y],E=f==null?void 0:f[y];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Ne(_,h,u,g,(oe=b.universal)==null?void 0:oe.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Ee({loader:p[1],url:n,params:r,route:a,parent:async()=>{var Re;const Ae={};for(let ie=0;ie<y;ie+=1)Object.assign(Ae,(Re=await v[ie])==null?void 0:Re.data);return Ae},server_data_node:ke(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(y){if(y instanceof De)return{type:"redirect",location:y.location};let b=W(y),E;if(f!=null&&f.includes(y))b=y.status??b,E=y.error;else if(y instanceof te)E=y.body;else{if(await T.updated.check())return await $(n);E=await M(y,{params:r,url:n,route:{id:a.id}})}const U=await zt(p,S,o);return U?await ee({url:n,params:r,branch:S.slice(0,U.idx).concat(U.node),status:b,error:E,route:a}):await nt(n,{id:a.id},E,b)}else S.push(void 0);return await ee({url:n,params:r,branch:S,status:200,error:null,route:a,form:t?void 0:null})}async function zt(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:e,error:t,url:n,route:r}){const a={};let o=null;if(C.server_loads[0]===0)try{const l=await at(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==B||n.pathname!==location.pathname||we)&&await $(n)}const i=await Ee({loader:de,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await J(),loader:J,universal:null,server:null,data:null};return await ee({url:n,params:a,branch:[i,c],status:e,error:t,route:null})}function Se(e,t){if(!e||ne(e,I))return;let n;try{n=C.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=et(n);for(const a of ae){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:t,route:a,params:lt(o),url:e}}}function et(e){return ct(e.slice(I.length)||"/")}function tt({url:e,type:t,intent:n,delta:r}){let a=!1;const o=ot(w,n,e,t);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return H||ze.forEach(i=>i(s)),a?null:o}async function K({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:l=Te,block:u=Te}){const h=Se(t,!1),g=tt({url:t,type:e,delta:n==null?void 0:n.delta,intent:h});if(!g){u();return}const d=k,m=A;l(),H=!0,Z&&T.navigating.set(g.navigation),Q=c;let f=h&&await Qe(h);if(!f){if(ne(t,I))return await $(t);f=await nt(t,{id:null},await M(new pe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(h==null?void 0:h.url)||t,Q!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(i>=20)f=await re({status:500,error:await M(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Xe(new URL(f.location,t).href,{},i+1,c),!1;else f.props.page.status>=400&&await T.updated.check()&&await $(t);if(Mt(),ye(d),We(m),f.props.page.url.pathname!==t.pathname&&(t.pathname=f.props.page.url.pathname),s=n?n.state:s,!n){const p=o?0:1,y={[D]:k+=p,[q]:A+=p,[qe]:s};(o?history.replaceState:history.pushState).call(history,y,"",t),o||Gt(k,A)}if(P=null,f.props.page.state=s,Z){w=f.state,f.props.page&&(f.props.page.url=t);const p=(await Promise.all(Ht.map(y=>y(g.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){j=j.filter(b=>!p.includes(b))};p.push(y),j.push(...p)}be.$set(f.props),Ye=!0}else Ze(f,he);const{activeElement:_}=document;await it();const v=n?n.scroll:a?_e():null;if(Ue){const p=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&Zt(),Ue=!0,f.props.page&&(R=f.props.page),H=!1,e==="popstate"&&Je(A),g.fulfil(void 0),j.forEach(p=>p(g.navigation)),T.navigating.set(null)}async function nt(e,t,n,r){return e.origin===B&&e.pathname===location.pathname&&!we?await re({status:r,error:n,url:e,route:t}):await $(e)}function Yt(){let e;L.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{r(s,2)},20)});function t(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",t),L.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(fe(s.target.href),n.unobserve(s.target))},{threshold:0});function r(o,s){const i=Me(o,L);if(!i)return;const{url:c,external:l,download:u}=ue(i,I);if(l||u)return;const h=Y(i);if(!h.reload)if(s<=h.preload_data){const g=Se(c,!1);g&&Bt(g)}else s<=h.preload_code&&fe(c.pathname)}function a(){n.disconnect();for(const o of L.querySelectorAll("a")){const{url:s,external:i,download:c}=ue(o,I);if(i||c)continue;const l=Y(o);l.reload||(l.preload_code===z.viewport&&n.observe(o),l.preload_code===z.eager&&fe(s.pathname))}}j.push(a),a()}function M(e,t){if(e instanceof te)return e.body;const n=W(e),r=qt(e);return C.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Wt(e,t={}){return e=Ge(e),e.origin!==B?Promise.reject(new Error("goto: invalid URL")):Xe(e,t,0)}function Jt(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(xe(),!H){const a=ot(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ze.forEach(s=>s(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xe()}),(t=navigator.connection)!=null&&t.saveData||Yt(),L.addEventListener("click",n=>{var g;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Me(n.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:s,download:i}=ue(r,I);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=Y(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){tt({url:a,type:"link"})?H=!0:n.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ce(location)){const[,d]=w.url.href.split("#");if(d===h){n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(V=!0,ye(k),e(a),!c.replace_state)return;V=!1}n.preventDefault(),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ne(s,I))return;const i=n.target,c=Y(i);if(c.reload)return;n.preventDefault(),n.stopPropagation();const l=new FormData(i),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(l).toString(),K({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[D]){const a=n.state[D];if(Q={},a===k)return;const o=x[a],s=n.state[qe]??{},i=new URL(n.state[Lt]??location.href),c=n.state[q],l=ce(location)===ce(w.url);if(c===A&&(Ye||l)){e(i),x[k]=_e(),o&&scrollTo(o.x,o.y),s!==R.state&&(R={...R,state:s},be.$set({page:R})),k=a;return}const h=a-k;await K({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{k=a,A=c},block:()=>{history.go(-h)},nav_token:Q})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[D]:++k,[q]:A},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&T.navigating.set(null)});function e(n){w.url=n,T.page.set({...R,url:n}),T.page.notify()}}async function Xt(e,{status:t=200,error:n,node_ids:r,params:a,route:o,data:s,form:i}){we=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Se(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=s[m];return f!=null&&f.uses&&(f.uses=rt(f.uses)),Ee({loader:C.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:ke(f)})}),h=await Promise.all(u),g=ae.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await ee({url:c,params:a,branch:h,status:t,error:n,form:i,route:g??null})}catch(u){if(u instanceof De){await $(new URL(u.location,location.href));return}l=await re({status:W(u),error:await M(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Ze(l,e)}async function at(e,t){var a;const n=new URL(e);n.pathname=pt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Ft,"1"),n.searchParams.append(Vt,t.map(o=>o?"1":"0").join(""));const r=await $e(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new te(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function l(g){return Dt(g,{Promise:d=>new Promise((m,f)=>{s.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=rt(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:S}=f,p=s.get(_);s.delete(_),S?p.reject(l(S)):p.fulfil(l(v))}}}})}function rt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Zt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function ot(e,t,n,r){var c,l;let a,o;const s=new Promise((u,h)=>{a=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:s},fulfil:a,reject:o}}export{tn as a,T as s};