function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o,r,i,c){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(a){const r=u(n,e,o,c);t.p(r,a)}}let l,f=!1;function d(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function h(t,n){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const t=d(1,r+1,(t=>n[e[t]].claim_order),n[u].claim_order)-1;o[u]=e[t]+1;const i=t+1;e[i]=u,r=Math.max(i,r)}const i=[],c=[];let a=n.length-1;for(let u=e[r]+1;0!=u;u=o[u-1]){for(i.push(n[u-1]);a>=u;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let u=0,s=0;u<c.length;u++){for(;s<i.length&&c[u].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(c[u],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function m(t,n,e){f&&!e?h(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function _(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(){return $("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function E(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function A(t,n,e,o){return E(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):g(n)))}function k(t,n){return E(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>$(n)),!0)}function N(t){return k(t," ")}function S(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n=document.body){return Array.from(n.querySelectorAll(t))}function B(t){l=t}function C(){if(!l)throw new Error("Function called outside component initialization");return l}function O(t){C().$$.on_mount.push(t)}function q(t){C().$$.after_update.push(t)}function I(t,n){C().$$.context.set(t,n)}const M=[],T=[],z=[],F=[],L=Promise.resolve();let D=!1;function G(t){z.push(t)}let H=!1;const J=new Set;function P(){if(!H){H=!0;do{for(let t=0;t<M.length;t+=1){const n=M[t];B(n),K(n.$$)}for(B(null),M.length=0;T.length;)T.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];J.has(n)||(J.add(n),n())}z.length=0}while(M.length);for(;F.length;)F.pop()();D=!1,H=!1,J.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const Q=new Set;let R;function U(){R={r:0,c:[],p:R}}function V(){R.r||r(R.c),R=R.p}function W(t,n){t&&t.i&&(Q.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),R.c.push((()=>{Q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n){t&&t.l(n)}function et(t,n,o,c){const{fragment:a,on_mount:u,on_destroy:s,after_update:l}=t.$$;a&&a.m(n,o),c||G((()=>{const n=u.map(e).filter(i);s?s.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(G)}function ot(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){-1===t.$$.dirty[0]&&(M.push(t),D||(D=!0,L.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(n,e,i,c,a,u,s=[-1]){const d=l;B(n);const h=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:s,skip_bound:!1};let m=!1;if(h.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&rt(n,t)),e})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){f=!0;const t=w(e.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();e.intro&&W(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),f=!1,P()}B(d)}class ct{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function ut(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!at.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),at.push(t,n)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const u=[c,a];return r.push(u),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{O as A,n as B,ut as C,a as D,s as E,h as F,t as G,x as H,j as I,_ as J,ct as S,w as a,v as b,A as c,p as d,g as e,m as f,k as g,S as h,it as i,tt as j,y as k,b as l,nt as m,N as n,et as o,Y as p,Z as q,U as r,c as s,$ as t,X as u,ot as v,V as w,W as x,I as y,q as z};
