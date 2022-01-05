import{S as U,i as A,s as C,e as c,t as $,j as f,v as R,c as u,a as i,g as G,d as s,l as v,w as T,b as J,f as t,D as d,x as D,E as O,p as N,n as F,A as K}from"../../chunks/vendor-29ca937a.js";import{I as Q}from"../../chunks/Image-94d67bdf.js";var V="/memento-sveltekit-and-github-pages/_app/assets/milano-fc3513f1.jpg",X="/memento-sveltekit-and-github-pages/_app/assets/milano-83c271a2.webp";function Y(W){let p,b,w,k,m,g,q,_,e,z=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> imageJPG<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> imageWEBP<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> alt<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> caption <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token string">"100%"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;imageWEBP&#125;<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/webp<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;width&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;imageJPG&#125;<span class="token punctuation">"</span></span> <span class="token attr-name">&#123;alt&#125;</span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;width&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>
  &#123;#if caption !== ""&#125;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">></span></span>&#123;@html caption&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">></span></span>
  &#123;/if&#125;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span></code>`,y,r,x,h,o,S=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"$lib/Image.svelte"</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MilanoJPG <span class="token keyword">from</span> <span class="token string">"$lib/assets/milano.jpg"</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MilanoWEBP <span class="token keyword">from</span> <span class="token string">"$lib/assets/milano.webp"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">imageJPG</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;MilanoJPG&#125;</span> <span class="token attr-name">imageWEBP</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;MilanoWEBP&#125;</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Milano - Piazza Gae Aulenti<span class="token punctuation">"</span></span> <span class="token attr-name">caption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Photo by Luca Bravo on Unsplash<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></code>`,P,l,E;return l=new Q({props:{imageJPG:V,imageWEBP:X,alt:"Milano - Piazza Gae Aulenti",caption:"Photo by Luca Bravo on Unsplash"}}),{c(){p=c("h3"),b=$("Source"),w=f(),k=c("p"),m=c("strong"),g=c("code"),q=$("src/lib/Image.svelte"),_=f(),e=c("pre"),y=f(),r=c("h3"),x=$("Use"),h=f(),o=c("pre"),P=f(),R(l.$$.fragment),this.h()},l(a){p=u(a,"H3",{});var n=i(p);b=G(n,"Source"),n.forEach(s),w=v(a),k=u(a,"P",{});var I=i(k);m=u(I,"STRONG",{});var M=i(m);g=u(M,"CODE",{});var B=i(g);q=G(B,"src/lib/Image.svelte"),B.forEach(s),M.forEach(s),I.forEach(s),_=v(a),e=u(a,"PRE",{class:!0});var H=i(e);H.forEach(s),y=v(a),r=u(a,"H3",{});var j=i(r);x=G(j,"Use"),j.forEach(s),h=v(a),o=u(a,"PRE",{class:!0});var L=i(o);L.forEach(s),P=v(a),T(l.$$.fragment,a),this.h()},h(){J(e,"class","language-html"),J(o,"class","language-html")},m(a,n){t(a,p,n),d(p,b),t(a,w,n),t(a,k,n),d(k,m),d(m,g),d(g,q),t(a,_,n),t(a,e,n),e.innerHTML=z,t(a,y,n),t(a,r,n),d(r,x),t(a,h,n),t(a,o,n),o.innerHTML=S,t(a,P,n),D(l,a,n),E=!0},p:O,i(a){E||(N(l.$$.fragment,a),E=!0)},o(a){F(l.$$.fragment,a),E=!1},d(a){a&&s(p),a&&s(w),a&&s(k),a&&s(_),a&&s(e),a&&s(y),a&&s(r),a&&s(h),a&&s(o),a&&s(P),K(l,a)}}}const sa={title:"Component: Image",tags:["help"]};class na extends U{constructor(p){super();A(this,p,null,Y,C,{})}}export{na as default,sa as metadata};
