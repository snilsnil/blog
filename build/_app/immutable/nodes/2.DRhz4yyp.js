import{a as M,n as D,b as R}from"../chunks/scheduler.GLPJa163.js";import{S as z,i as F,e as m,d as u,f as b,j as d,o as h,l as G,p as H,s as j,b as P,k as I,h as S,m as i,n as V}from"../chunks/index.D57UU_7x.js";import{e as A}from"../chunks/each.D6YF6ztN.js";import{b as q}from"../chunks/paths.BjDkVf2I.js";function B(o,e,l){const t=o.slice();return t[1]=e[l].id,t[2]=e[l].type,t[3]=e[l].title,t[4]=e[l].text,t}function C(o){let e,l,t,s,n,a=o[3]+"",f,p,w,k,_,v=o[4]+"",g,E;return{c(){e=m("div"),l=m("img"),s=j(),n=m("a"),f=P(a),w=m("br"),k=j(),_=m("p"),g=P(v),E=j(),this.h()},l(c){e=u(c,"DIV",{class:!0});var r=b(e);l=u(r,"IMG",{class:!0,src:!0,alt:!0}),s=I(r),n=u(r,"A",{href:!0,class:!0});var x=b(n);f=S(x,a),x.forEach(d),w=u(r,"BR",{}),k=I(r),_=u(r,"P",{class:!0});var y=b(_);g=S(y,v),y.forEach(d),E=I(r),r.forEach(d),this.h()},h(){h(l,"class","image svelte-3ew4sm"),R(l.src,t=q+"/icon.png")||h(l,"src",t),h(l,"alt","사진"),h(n,"href",p=q+"/"+o[2]+"/"+o[1]),h(n,"class","title svelte-3ew4sm"),h(_,"class","text svelte-3ew4sm"),h(e,"class","content_box svelte-3ew4sm")},m(c,r){G(c,e,r),i(e,l),i(e,s),i(e,n),i(n,f),i(e,w),i(e,k),i(e,_),i(_,g),i(e,E)},p(c,r){r&1&&a!==(a=c[3]+"")&&V(f,a),r&1&&p!==(p=q+"/"+c[2]+"/"+c[1])&&h(n,"href",p),r&1&&v!==(v=c[4]+"")&&V(g,v)},d(c){c&&d(e)}}}function J(o){let e,l=A(o[0].json.contant),t=[];for(let s=0;s<l.length;s+=1)t[s]=C(B(o,l,s));return{c(){e=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=u(s,"DIV",{class:!0});var n=b(e);for(let a=0;a<t.length;a+=1)t[a].l(n);n.forEach(d),this.h()},h(){h(e,"class","main svelte-3ew4sm")},m(s,n){G(s,e,n);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(s,[n]){if(n&1){l=A(s[0].json.contant);let a;for(a=0;a<l.length;a+=1){const f=B(s,l,a);t[a]?t[a].p(f,n):(t[a]=C(f),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:D,o:D,d(s){s&&d(e),H(t,s)}}}function K(o,e,l){let{data:t}=e;return o.$$set=s=>{"data"in s&&l(0,t=s.data)},[t]}class T extends z{constructor(e){super(),F(this,e,K,J,M,{data:0})}}export{T as component};
