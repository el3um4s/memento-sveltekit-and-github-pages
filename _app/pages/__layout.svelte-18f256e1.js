import{S as s,i as e,s as a,e as t,t as r,k as c,c as l,a as o,g as n,d as f,n as i,b as p,f as h,D as $,E as u,j as v,m as g,o as m,x as d,u as k,v as E,F as b,G as z,H as x,I as y}from"../chunks/vendor-baadb909.js";import{P as A}from"../chunks/PageTransition-4eb814cb.js";import{b as I}from"../chunks/paths-45dac81d.js";function j(s){let e,a,v,g,m,d,k,E,b,z,x,y,A;return{c(){e=t("header"),a=t("ul"),v=t("li"),g=t("a"),m=r("Home"),d=c(),k=t("li"),E=t("a"),b=r("Blog"),z=c(),x=t("li"),y=t("a"),A=r("About"),this.h()},l(s){e=l(s,"HEADER",{class:!0});var t=o(e);a=l(t,"UL",{class:!0});var r=o(a);v=l(r,"LI",{class:!0});var c=o(v);g=l(c,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var p=o(g);m=n(p,"Home"),p.forEach(f),c.forEach(f),d=i(r),k=l(r,"LI",{class:!0});var h=o(k);E=l(h,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var $=o(E);b=n($,"Blog"),$.forEach(f),h.forEach(f),z=i(r),x=l(r,"LI",{class:!0});var u=o(x);y=l(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var I=o(y);A=n(I,"About"),I.forEach(f),u.forEach(f),r.forEach(f),t.forEach(f),this.h()},h(){p(g,"sveltekit:prefetch",""),p(g,"href",`${I}/`),p(g,"class","svelte-1sizgp9"),p(v,"class","svelte-1sizgp9"),p(E,"sveltekit:prefetch",""),p(E,"href",`${I}/blog/`),p(E,"class","svelte-1sizgp9"),p(k,"class","svelte-1sizgp9"),p(y,"sveltekit:prefetch",""),p(y,"href",`${I}/about`),p(y,"class","svelte-1sizgp9"),p(x,"class","svelte-1sizgp9"),p(a,"class","svelte-1sizgp9"),p(e,"class","svelte-1sizgp9")},m(s,t){h(s,e,t),$(e,a),$(a,v),$(v,g),$(g,m),$(a,d),$(a,k),$(k,E),$(E,b),$(a,z),$(a,x),$(x,y),$(y,A)},p:u,i:u,o:u,d(s){s&&f(e)}}}class H extends s{constructor(s){super(),e(this,s,null,j,a,{})}}function L(s){let e;const a=s[1].default,t=b(a,s,s[2],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,r){t&&t.p&&(!e||4&r)&&z(t,a,s,s[2],e?y(a,s[2],r,null):x(s[2]),null)},i(s){e||(d(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function w(s){let e,a,r,n,p;return e=new H({}),n=new A({props:{refresh:s[0],$$slots:{default:[L]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment),a=c(),r=t("main"),v(n.$$.fragment)},l(s){g(e.$$.fragment,s),a=i(s),r=l(s,"MAIN",{});var t=o(r);g(n.$$.fragment,t),t.forEach(f)},m(s,t){m(e,s,t),h(s,a,t),h(s,r,t),m(n,r,null),p=!0},p(s,[e]){const a={};1&e&&(a.refresh=s[0]),4&e&&(a.$$scope={dirty:e,ctx:s}),n.$set(a)},i(s){p||(d(e.$$.fragment,s),d(n.$$.fragment,s),p=!0)},o(s){k(e.$$.fragment,s),k(n.$$.fragment,s),p=!1},d(s){E(e,s),s&&f(a),s&&f(r),E(n)}}}const B=async({page:s})=>({props:{key:s.path}});function D(s,e,a){let{$$slots:t={},$$scope:r}=e,{key:c}=e;return s.$$set=s=>{"key"in s&&a(0,c=s.key),"$$scope"in s&&a(2,r=s.$$scope)},[c,t,r]}export default class extends s{constructor(s){super(),e(this,s,D,w,a,{key:0})}}export{B as load};
