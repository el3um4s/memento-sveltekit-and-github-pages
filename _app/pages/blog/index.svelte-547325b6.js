import{_ as t}from"../../chunks/preload-helper-13c00eaa.js";import{S as e,i as s,s as a,e as r,t as l,k as o,c as n,a as h,g as c,d,n as i,b as m,f,D as _,h as p,M as u,E as g}from"../../chunks/vendor-baadb909.js";import{b as E}from"../../chunks/paths-45dac81d.js";function b(t,e,s){const a=t.slice();return a[1]=e[s].path,a[2]=e[s].metadata.title,a[3]=e[s].metadata.tags,a}function j(t,e,s){const a=t.slice();return a[6]=e[s],a}function $(t){let e,s,a,o=t[6]+"";return{c(){e=r("a"),s=l(o),this.h()},l(t){e=n(t,"A",{class:!0,href:!0});var a=h(e);s=c(a,o),a.forEach(d),this.h()},h(){m(e,"class","tag"),m(e,"href",a=`${E}/tags/${t[6]}`)},m(t,a){f(t,e,a),_(e,s)},p(t,r){1&r&&o!==(o=t[6]+"")&&p(s,o),1&r&&a!==(a=`${E}/tags/${t[6]}`)&&m(e,"href",a)},d(t){t&&d(e)}}}function A(t){let e,s,a,g,b,A,L=t[2]+"",D=t[3],I=[];for(let r=0;r<D.length;r+=1)I[r]=$(j(t,D,r));return{c(){e=r("li"),s=r("a"),a=l(L),b=o();for(let t=0;t<I.length;t+=1)I[t].c();A=o(),this.h()},l(t){e=n(t,"LI",{});var r=h(e);s=n(r,"A",{href:!0,class:!0});var l=h(s);a=c(l,L),l.forEach(d),b=i(r);for(let e=0;e<I.length;e+=1)I[e].l(r);A=i(r),r.forEach(d),this.h()},h(){m(s,"href",g=`${E}/blog/${t[1].replace(".md","")}`),m(s,"class","link-no-underline")},m(t,r){f(t,e,r),_(e,s),_(s,a),_(e,b);for(let s=0;s<I.length;s+=1)I[s].m(e,null);_(e,A)},p(t,r){if(1&r&&L!==(L=t[2]+"")&&p(a,L),1&r&&g!==(g=`${E}/blog/${t[1].replace(".md","")}`)&&m(s,"href",g),1&r){let s;for(D=t[3],s=0;s<D.length;s+=1){const a=j(t,D,s);I[s]?I[s].p(a,r):(I[s]=$(a),I[s].c(),I[s].m(e,A))}for(;s<I.length;s+=1)I[s].d(1);I.length=D.length}},d(t){t&&d(e),u(I,t)}}}function L(t){let e,s,a,m,p=t[0],E=[];for(let r=0;r<p.length;r+=1)E[r]=A(b(t,p,r));return{c(){e=r("h1"),s=l("My Blog"),a=o(),m=r("ul");for(let t=0;t<E.length;t+=1)E[t].c()},l(t){e=n(t,"H1",{});var r=h(e);s=c(r,"My Blog"),r.forEach(d),a=i(t),m=n(t,"UL",{});var l=h(m);for(let e=0;e<E.length;e+=1)E[e].l(l);l.forEach(d)},m(t,r){f(t,e,r),_(e,s),f(t,a,r),f(t,m,r);for(let e=0;e<E.length;e+=1)E[e].m(m,null)},p(t,[e]){if(1&e){let s;for(p=t[0],s=0;s<p.length;s+=1){const a=b(t,p,s);E[s]?E[s].p(a,e):(E[s]=A(a),E[s].c(),E[s].m(m,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=p.length}},i:g,o:g,d(t){t&&d(e),t&&d(a),t&&d(m),u(E,t)}}}const D={"./de-finibus.md":()=>t((()=>import("./de-finibus.md-10818655.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/de-finibus.md-10818655.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-baadb909.js","/memento-sveltekit-and-github-pages/_app/chunks/Image-617f1c6e.js"]),"./hello-world.md":()=>t((()=>import("./hello-world.md-d55792ae.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/hello-world.md-d55792ae.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-baadb909.js","/memento-sveltekit-and-github-pages/_app/chunks/Box-51ef838a.js","/memento-sveltekit-and-github-pages/_app/assets/Box-81cb4fd6.css"]),"./help-it.md":()=>t((()=>import("./help-it.md-a57bed1e.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/help-it.md-a57bed1e.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-baadb909.js"]),"./image.md":()=>t((()=>import("./image.md-b9c96274.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/image.md-b9c96274.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-baadb909.js","/memento-sveltekit-and-github-pages/_app/chunks/Image-617f1c6e.js"]),"./rackham.md":()=>t((()=>import("./rackham.md-66eb8157.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/rackham.md-66eb8157.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-baadb909.js","/memento-sveltekit-and-github-pages/_app/chunks/Image-617f1c6e.js"]),"./section-1-10-33.md":()=>t((()=>import("./section-1-10-33.md-117f0d60.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/section-1-10-33.md-117f0d60.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-baadb909.js","/memento-sveltekit-and-github-pages/_app/chunks/Image-617f1c6e.js"]),"./standard.md":()=>t((()=>import("./standard.md-55bdcdc5.js")),["/memento-sveltekit-and-github-pages/_app/pages/blog/standard.md-55bdcdc5.js","/memento-sveltekit-and-github-pages/_app/chunks/vendor-baadb909.js","/memento-sveltekit-and-github-pages/_app/chunks/Image-617f1c6e.js"])};let I=[];for(let O in D)I.push(D[O]().then((({metadata:t})=>({path:O,metadata:t}))));async function P(){return{props:{posts:await Promise.all(I)}}}function k(t,e,s){let{posts:a}=e;return t.$$set=t=>{"posts"in t&&s(0,a=t.posts)},[a]}export default class extends e{constructor(t){super(),s(this,t,k,L,a,{posts:0})}}export{P as load};
