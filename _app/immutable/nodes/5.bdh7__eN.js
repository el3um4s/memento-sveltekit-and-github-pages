import{_ as e,i as A}from"../chunks/preload-helper.B32Rwxm5.js";import{H as j}from"../chunks/control.CYgJF_JY.js";import{i as H,h as M,l as g,g as q,F as S,b as v,o as C,a as E,v as i,j as F,$ as U,k as l,p as L,c as P,t as d,m as B,e as c,n as p,d as V,u as G}from"../chunks/disclose-version.Brd39H6e.js";import{p as J,a as K,u as N}from"../chunks/runtime.C65tfZF7.js";import{d as Q,a as W,f as X}from"../chunks/utils.FvE9RtxI.js";import{r as Y}from"../chunks/config.gC28cI-t.js";const Z=(m,t)=>{const s=m[t];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((f,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function $(m,t){throw new j(m,t)}new TextEncoder;async function tt({params:m}){try{const t=await Z(Object.assign({"../../posts/appunti-sveltekit-markdown/post.md":()=>e(()=>import("../chunks/post.BqJ_mSHQ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../../posts/auto-commit/post.md":()=>e(()=>import("../chunks/post.DIScB6LL.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"../../posts/dialoghi-moderni/post.md":()=>e(()=>import("../chunks/post.D34sk1Hd.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"../../posts/epicureismo-e-stoicismo/post.md":()=>e(()=>import("../chunks/post.jxJJdKzU.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),"../../posts/errori-vari-e-soluzioni/post.md":()=>e(()=>import("../chunks/post.D9dTG-NK.js"),__vite__mapDeps([7,1,2,3]),import.meta.url),"../../posts/etica-nell-era-digitale/post.md":()=>e(()=>import("../chunks/post.BnMNVgsS.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),"../../posts/filosofia-oggi/post.md":()=>e(()=>import("../chunks/post.BFjTTAnO.js"),__vite__mapDeps([9,1,2,3]),import.meta.url),"../../posts/filosofia-politica/post.md":()=>e(()=>import("../chunks/post.t78Bv031.js"),__vite__mapDeps([10,1,2,3]),import.meta.url),"../../posts/idee-che-cambiano-il-mondo/post.md":()=>e(()=>import("../chunks/post.DZ6K5oKM.js"),__vite__mapDeps([11,1,2,3]),import.meta.url),"../../posts/la filosofia della mente/post.md":()=>e(()=>import("../chunks/post.C1O-CSkj.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),"../../posts/la filosofia e l'arte/post.md":()=>e(()=>import("../chunks/post.CtkRDTi4.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),"../../posts/pensieri-profondi/post.md":()=>e(()=>import("../chunks/post.CZGWhFox.js"),__vite__mapDeps([14,1,2,3]),import.meta.url),"../../posts/prova-md-plugin/post.md":()=>e(()=>import("../chunks/post.FXlDOMhD.js"),__vite__mapDeps([15,1,2,3]),import.meta.url),"../../posts/ricette-della-nonna/post.md":()=>e(()=>import("../chunks/post.6ieJ-EVm.js"),__vite__mapDeps([16,1,2,3]),import.meta.url),"../../posts/test-zettlr/post.md":()=>e(()=>import("../chunks/post.BgUpdwxl.js"),__vite__mapDeps([17,1,2,3]),import.meta.url),"../../posts/tra-mito-e-realta/post.md":()=>e(()=>import("../chunks/post.D8WGClFs.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)}),`../../posts/${m.slug}/post.md`);return{content:t.default,meta:t.metadata}}catch{$(404,`Could not find ${m.slug}`)}}const ut=Object.freeze(Object.defineProperty({__proto__:null,load:tt},Symbol.toStringTag,{value:"Module"}));var et=d('<meta property="og:type" content="article"> <meta property="og:title">',!0),at=d('<span class="surface-4"> </span>'),rt=d('<img alt="" loading="lazy">'),ot=d('<img alt="" loading="lazy">'),it=d('<article><hgroup><h1> </h1> <p> </p></hgroup> <div class="tags"></div> <div class="cover-image"><!></div> <div class="prose"><!></div></article>');function nt(m,t){K(t,!1),H();var s=c(m,!0,it);M(r=>{var _=C(r,!0,et),n=E(_),o=i(i(n,!0)),a;F(()=>{U.title=`${l(t.data.meta.title)}`,a!==(a=t.data.meta.title)&&L(o,"content",a)}),P(r,_)});var f=p(s),u=p(f),y=G(p(u)),b=i(i(u,!0)),h=p(b),O=i(i(f,!0)),T=i(i(O,!0)),w=p(T),k=i(i(T,!0)),D=p(k);g(h,()=>`Published at ${l(X(t.data.meta.date))}`),g(y,()=>t.data.meta.title),q(O,()=>t.data.meta.categories,9,(r,_,n)=>{var o=c(r,!0,at),a=p(o);g(a,()=>`#${l(N(_))}`),v(r,o)},null),A(w,()=>t.data.meta.cover,r=>{var _=V(r),n=E(_);A(n,()=>Q,o=>{var a=V(o),x=E(a);W(x,()=>e(()=>import(`/src/posts/${t.data.url}/${t.data.meta.cover}`),__vite__mapDeps([]),import.meta.url),null,(I,{default:z})=>{var R=c(I,!0,rt);L(R,"src",z),v(I,R)},null),P(o,a)},o=>{var a=c(o,!0,ot);B(a,"src",()=>`${l(Y)}/raw/main/src/posts/${l(t.data.url)}/${l(t.data.meta.cover)}`),v(o,a)}),P(r,_)},null),S(D,()=>t.data.content,r=>{r(D,{})}),v(m,s),J()}export{nt as component,ut as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/post.BqJ_mSHQ.js","../chunks/disclose-version.Brd39H6e.js","../chunks/runtime.C65tfZF7.js","../chunks/mdsvex.DNalNMCX.js","../chunks/post.DIScB6LL.js","../chunks/post.D34sk1Hd.js","../chunks/post.jxJJdKzU.js","../chunks/post.D9dTG-NK.js","../chunks/post.BnMNVgsS.js","../chunks/post.BFjTTAnO.js","../chunks/post.t78Bv031.js","../chunks/post.DZ6K5oKM.js","../chunks/post.C1O-CSkj.js","../chunks/post.CtkRDTi4.js","../chunks/post.CZGWhFox.js","../chunks/post.FXlDOMhD.js","../chunks/post.6ieJ-EVm.js","../chunks/post.BgUpdwxl.js","../chunks/post.D8WGClFs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
