import{S as a,i as s,s as t,e,t as i,c,a as r,g as n,d as l,f as o,D as m,h as p,k as u,n as g,b as f,E}from"./vendor-7c752bef.js";function h(a){let s,t;return{c(){s=e("figcaption"),t=i(a[3])},l(e){s=c(e,"FIGCAPTION",{});var i=r(s);t=n(i,a[3]),i.forEach(l)},m(a,e){o(a,s,e),m(s,t)},p(a,s){8&s&&p(t,a[3])},d(a){a&&l(s)}}}function P(a){let s,t,i,n,p,P,d,G=""!==a[3]&&h(a);return{c(){s=e("figure"),t=e("picture"),i=e("source"),n=u(),p=e("img"),d=u(),G&&G.c(),this.h()},l(a){s=c(a,"FIGURE",{});var e=r(s);t=c(e,"PICTURE",{});var o=r(t);i=c(o,"SOURCE",{srcset:!0,type:!0}),n=g(o),p=c(o,"IMG",{src:!0,alt:!0}),o.forEach(l),d=g(e),G&&G.l(e),e.forEach(l),this.h()},h(){f(i,"srcset",a[1]),f(i,"type","image/webp"),p.src!==(P=a[0])&&f(p,"src",P),f(p,"alt",a[2])},m(a,e){o(a,s,e),m(s,t),m(t,i),m(t,n),m(t,p),m(s,d),G&&G.m(s,null)},p(a,[t]){2&t&&f(i,"srcset",a[1]),1&t&&p.src!==(P=a[0])&&f(p,"src",P),4&t&&f(p,"alt",a[2]),""!==a[3]?G?G.p(a,t):(G=h(a),G.c(),G.m(s,null)):G&&(G.d(1),G=null)},i:E,o:E,d(a){a&&l(s),G&&G.d()}}}function d(a,s,t){let{imageJPG:e}=s,{imageWEBP:i}=s,{alt:c}=s,{caption:r=""}=s;return a.$$set=a=>{"imageJPG"in a&&t(0,e=a.imageJPG),"imageWEBP"in a&&t(1,i=a.imageWEBP),"alt"in a&&t(2,c=a.alt),"caption"in a&&t(3,r=a.caption)},[e,i,c,r]}class G extends a{constructor(a){super(),s(this,a,d,P,t,{imageJPG:0,imageWEBP:1,alt:2,caption:3})}}export{G as I};
