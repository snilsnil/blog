import{s as M,n as D,a as R}from"../chunks/scheduler.Dw93JyHj.js";import{S as z,i as F,e as m,c as u,a as b,d,k as h,g as G,l as H,s as j,t as P,f as I,b as S,h as i,j as V}from"../chunks/index.gJx79kEZ.js";import{e as A}from"../chunks/each.D6YF6ztN.js";import{b as q}from"../chunks/paths.Bn51tNmJ.js";function B(c,e,l){const t=c.slice();return t[1]=e[l].id,t[2]=e[l].type,t[3]=e[l].title,t[4]=e[l].text,t}function C(c){let e,l,t,s,r,a=c[3]+"",f,p,w,k,_,v=c[4]+"",g,E;return{c(){e=m("div"),l=m("img"),s=j(),r=m("a"),f=P(a),w=m("br"),k=j(),_=m("p"),g=P(v),E=j(),this.h()},l(o){e=u(o,"DIV",{class:!0});var n=b(e);l=u(n,"IMG",{class:!0,src:!0,alt:!0}),s=I(n),r=u(n,"A",{href:!0,class:!0});var x=b(r);f=S(x,a),x.forEach(d),w=u(n,"BR",{}),k=I(n),_=u(n,"P",{class:!0});var y=b(_);g=S(y,v),y.forEach(d),E=I(n),n.forEach(d),this.h()},h(){h(l,"class","image svelte-3ew4sm"),R(l.src,t=q+"/icon.png")||h(l,"src",t),h(l,"alt","사진"),h(r,"href",p=q+"/"+c[2]+"/"+c[1]),h(r,"class","title svelte-3ew4sm"),h(_,"class","text svelte-3ew4sm"),h(e,"class","content_box svelte-3ew4sm")},m(o,n){G(o,e,n),i(e,l),i(e,s),i(e,r),i(r,f),i(e,w),i(e,k),i(e,_),i(_,g),i(e,E)},p(o,n){n&1&&a!==(a=o[3]+"")&&V(f,a),n&1&&p!==(p=q+"/"+o[2]+"/"+o[1])&&h(r,"href",p),n&1&&v!==(v=o[4]+"")&&V(g,v)},d(o){o&&d(e)}}}function J(c){let e,l=A(c[0].json.contant),t=[];for(let s=0;s<l.length;s+=1)t[s]=C(B(c,l,s));return{c(){e=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=u(s,"DIV",{class:!0});var r=b(e);for(let a=0;a<t.length;a+=1)t[a].l(r);r.forEach(d),this.h()},h(){h(e,"class","main svelte-3ew4sm")},m(s,r){G(s,e,r);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(s,[r]){if(r&1){l=A(s[0].json.contant);let a;for(a=0;a<l.length;a+=1){const f=B(s,l,a);t[a]?t[a].p(f,r):(t[a]=C(f),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:D,o:D,d(s){s&&d(e),H(t,s)}}}function K(c,e,l){let{data:t}=e;return c.$$set=s=>{"data"in s&&l(0,t=s.data)},[t]}class T extends z{constructor(e){super(),F(this,e,K,J,M,{data:0})}}export{T as component};
