import{s as R,n as P,a as F}from"../chunks/scheduler.Dw93JyHj.js";import{S as H,i as J,e as m,c as d,a as b,d as _,k as f,g as I,l as K,m as S,s as z,t as V,f as E,b as A,h as o,j as B}from"../chunks/index.CuDBO9JZ.js";import{e as C}from"../chunks/each.D6YF6ztN.js";import{b as y}from"../chunks/paths.DGEW-r1d.js";function G(r,t,a){const e=r.slice();return e[1]=t[a].id,e[2]=t[a].type,e[3]=t[a].title,e[4]=t[a].text,e}function M(r){let t,a,e,l,n,s=r[3]+"",h,v,j,k,u,p=r[4]+"",g,w;return{c(){t=m("div"),a=m("img"),l=z(),n=m("a"),h=V(s),j=m("br"),k=z(),u=m("p"),g=V(p),w=z(),this.h()},l(c){t=d(c,"DIV",{class:!0});var i=b(t);a=d(i,"IMG",{class:!0,src:!0,alt:!0}),l=E(i),n=d(i,"A",{href:!0,class:!0});var q=b(n);h=A(q,s),q.forEach(_),j=d(i,"BR",{}),k=E(i),u=d(i,"P",{class:!0});var D=b(u);g=A(D,p),D.forEach(_),w=E(i),i.forEach(_),this.h()},h(){f(a,"class","image svelte-12jzpwh"),F(a.src,e=y+"/icon.png")||f(a,"src",e),f(a,"alt","사진"),f(n,"href",v=y+"/"+r[2]+"/"+r[1]),f(n,"class","title svelte-12jzpwh"),f(u,"class","text svelte-12jzpwh"),f(t,"class","contant_box svelte-12jzpwh")},m(c,i){I(c,t,i),o(t,a),o(t,l),o(t,n),o(n,h),o(t,j),o(t,k),o(t,u),o(u,g),o(t,w)},p(c,i){i&1&&s!==(s=c[3]+"")&&B(h,s),i&1&&v!==(v=y+"/"+c[2]+"/"+c[1])&&f(n,"href",v),i&1&&p!==(p=c[4]+"")&&B(g,p)},d(c){c&&_(t)}}}function N(r){let t,a=r[2]=="test"&&M(r);return{c(){a&&a.c(),t=S()},l(e){a&&a.l(e),t=S()},m(e,l){a&&a.m(e,l),I(e,t,l)},p(e,l){e[2]=="test"?a?a.p(e,l):(a=M(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){e&&_(t),a&&a.d(e)}}}function L(r){let t,a=C(r[0].json.contant),e=[];for(let l=0;l<a.length;l+=1)e[l]=N(G(r,a,l));return{c(){t=m("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=d(l,"DIV",{class:!0});var n=b(t);for(let s=0;s<e.length;s+=1)e[s].l(n);n.forEach(_),this.h()},h(){f(t,"class","main svelte-12jzpwh")},m(l,n){I(l,t,n);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null)},p(l,[n]){if(n&1){a=C(l[0].json.contant);let s;for(s=0;s<a.length;s+=1){const h=G(l,a,s);e[s]?e[s].p(h,n):(e[s]=N(h),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=a.length}},i:P,o:P,d(l){l&&_(t),K(e,l)}}}function O(r,t,a){let{data:e}=t;return r.$$set=l=>{"data"in l&&a(0,e=l.data)},[e]}class X extends H{constructor(t){super(),J(this,t,O,L,R,{data:0})}}export{X as component};