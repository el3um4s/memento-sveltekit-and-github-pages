import{S as s,i as e,s as a,e as t,t as r,k as c,c as l,a as o,g as n,d as f,n as h,b as $,f as i,D as p,E as u,j as m,m as v,o as d,x as g,u as k,v as E,F as b,G as x}from"../chunks/vendor-b948dab5.js";import{P as y}from"../chunks/PageTransition-0e00921c.js";import{b as A}from"../chunks/paths-45dac81d.js";function j(s){let e,a,m,v,d,g,k,E,b,x,y,j,I;return{c(){e=t("nav"),a=t("ul"),m=t("li"),v=t("a"),d=r("Home"),g=c(),k=t("li"),E=t("a"),b=r("Blog"),x=c(),y=t("li"),j=t("a"),I=r("About"),this.h()},l(s){e=l(s,"NAV",{});var t=o(e);a=l(t,"UL",{class:!0});var r=o(a);m=l(r,"LI",{class:!0});var c=o(m);v=l(c,"A",{"sveltekit:prefetch":!0,href:!0});var $=o(v);d=n($,"Home"),$.forEach(f),c.forEach(f),g=h(r),k=l(r,"LI",{class:!0});var i=o(k);E=l(i,"A",{"sveltekit:prefetch":!0,href:!0});var p=o(E);b=n(p,"Blog"),p.forEach(f),i.forEach(f),x=h(r),y=l(r,"LI",{class:!0});var u=o(y);j=l(u,"A",{"sveltekit:prefetch":!0,href:!0});var A=o(j);I=n(A,"About"),A.forEach(f),u.forEach(f),r.forEach(f),t.forEach(f),this.h()},h(){$(v,"sveltekit:prefetch",""),$(v,"href",`${A}/`),$(m,"class","svelte-53f8pm"),$(E,"sveltekit:prefetch",""),$(E,"href",`${A}/blog/`),$(k,"class","svelte-53f8pm"),$(j,"sveltekit:prefetch",""),$(j,"href",`${A}/about`),$(y,"class","svelte-53f8pm"),$(a,"class","svelte-53f8pm")},m(s,t){i(s,e,t),p(e,a),p(a,m),p(m,v),p(v,d),p(a,g),p(a,k),p(k,E),p(E,b),p(a,x),p(a,y),p(y,j),p(j,I)},p:u,i:u,o:u,d(s){s&&f(e)}}}class I extends s{constructor(s){super(),e(this,s,null,j,a,{})}}function L(s){let e;const a=s[1].default,t=b(a,s,s[2],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,r){t&&t.p&&(!e||4&r)&&x(t,a,s,s[2],e?r:-1,null,null)},i(s){e||(g(t,s),e=!0)},o(s){k(t,s),e=!1},d(s){t&&t.d(s)}}}function w(s){let e,a,r,n,u;return a=new I({}),n=new y({props:{refresh:s[0],$$slots:{default:[L]},$$scope:{ctx:s}}}),{c(){e=t("div"),m(a.$$.fragment),r=c(),m(n.$$.fragment),this.h()},l(s){e=l(s,"DIV",{class:!0});var t=o(e);v(a.$$.fragment,t),r=h(t),v(n.$$.fragment,t),t.forEach(f),this.h()},h(){$(e,"class","container svelte-zngx41")},m(s,t){i(s,e,t),d(a,e,null),p(e,r),d(n,e,null),u=!0},p(s,[e]){const a={};1&e&&(a.refresh=s[0]),4&e&&(a.$$scope={dirty:e,ctx:s}),n.$set(a)},i(s){u||(g(a.$$.fragment,s),g(n.$$.fragment,s),u=!0)},o(s){k(a.$$.fragment,s),k(n.$$.fragment,s),u=!1},d(s){s&&f(e),E(a),E(n)}}}const B=async({page:s})=>({props:{key:s.path}});function D(s,e,a){let{$$slots:t={},$$scope:r}=e,{key:c}=e;return s.$$set=s=>{"key"in s&&a(0,c=s.key),"$$scope"in s&&a(2,r=s.$$scope)},[c,t,r]}export default class extends s{constructor(s){super(),e(this,s,D,w,a,{key:0})}}export{B as load};