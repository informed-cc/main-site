import{S as x,i as $,s as P,e as y,k as g,c as m,a as _,n as w,d as p,b as A,f,H as v,K as k,t as L,l as H,g as E,h as G,I as b,j as M,m as S,o as C,x as j,u as I,v as W}from"../chunks/vendor-c3419a43.js";import{M as K}from"../chunks/Meta-ed19023c.js";import"../chunks/paths-28a87002.js";function z(s,e,a){const t=s.slice();return t[2]=e[a].hed,t[3]=e[a].id,t}function N(s,e,a){const t=s.slice();return t[6]=e[a],t}function O(s,e,a){const t=s.slice();return t[6]=e[a].value,t}function V(s){let e,a=s[2]+"",t;return{c(){e=y("h2"),t=L(a)},l(o){e=m(o,"H2",{});var r=_(e);t=E(r,a),r.forEach(p)},m(o,r){f(o,e,r),v(e,t)},p:b,d(o){o&&p(e)}}}function Y(s){let e,a=s[6]+"";return{c(){e=y("p")},l(t){e=m(t,"P",{});var o=_(e);o.forEach(p)},m(t,o){f(t,e,o),e.innerHTML=a},p(t,o){o&1&&a!==(a=t[6]+"")&&(e.innerHTML=a)},d(t){t&&p(e)}}}function q(s){let e,a=s[0][`${s[3]}List`],t=[];for(let o=0;o<a.length;o+=1)t[o]=B(N(s,a,o));return{c(){e=y("ul");for(let o=0;o<t.length;o+=1)t[o].c()},l(o){e=m(o,"UL",{});var r=_(e);for(let l=0;l<t.length;l+=1)t[l].l(r);r.forEach(p)},m(o,r){f(o,e,r);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(o,r){if(r&3){a=o[0][`${o[3]}List`];let l;for(l=0;l<a.length;l+=1){const h=N(o,a,l);t[l]?t[l].p(h,r):(t[l]=B(h),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=a.length}},d(o){o&&p(e),k(t,o)}}}function B(s){let e,a=s[6]+"";return{c(){e=y("li")},l(t){e=m(t,"LI",{});var o=_(e);o.forEach(p)},m(t,o){f(t,e,o),e.innerHTML=a},p(t,o){o&1&&a!==(a=t[6]+"")&&(e.innerHTML=a)},d(t){t&&p(e)}}}function F(s){let e,a,t,o,r,l=s[2]&&V(s),h=s[0][s[3]],n=[];for(let i=0;i<h.length;i+=1)n[i]=Y(O(s,h,i));let c=s[0][`${s[3]}List`]&&q(s);return{c(){e=y("section"),l&&l.c(),a=g();for(let i=0;i<n.length;i+=1)n[i].c();t=g(),c&&c.c(),o=g(),this.h()},l(i){e=m(i,"SECTION",{id:!0});var d=_(e);l&&l.l(d),a=w(d);for(let u=0;u<n.length;u+=1)n[u].l(d);t=w(d),c&&c.l(d),o=w(d),d.forEach(p),this.h()},h(){A(e,"id",r=s[3])},m(i,d){f(i,e,d),l&&l.m(e,null),v(e,a);for(let u=0;u<n.length;u+=1)n[u].m(e,null);v(e,t),c&&c.m(e,null),v(e,o)},p(i,d){if(i[2]&&l.p(i,d),d&3){h=i[0][i[3]];let u;for(u=0;u<h.length;u+=1){const T=O(i,h,u);n[u]?n[u].p(T,d):(n[u]=Y(T),n[u].c(),n[u].m(e,t))}for(;u<n.length;u+=1)n[u].d(1);n.length=h.length}i[0][`${i[3]}List`]?c?c.p(i,d):(c=q(i),c.c(),c.m(e,o)):c&&(c.d(1),c=null)},d(i){i&&p(e),l&&l.d(),k(n,i),c&&c.d()}}}function D(s){let e,a=s[0].title+"",t,o,r,l=s[1],h=[];for(let n=0;n<l.length;n+=1)h[n]=F(z(s,l,n));return{c(){e=y("h1"),t=L(a),o=g();for(let n=0;n<h.length;n+=1)h[n].c();r=H()},l(n){e=m(n,"H1",{});var c=_(e);t=E(c,a),c.forEach(p),o=w(n);for(let i=0;i<h.length;i+=1)h[i].l(n);r=H()},m(n,c){f(n,e,c),v(e,t),f(n,o,c);for(let i=0;i<h.length;i+=1)h[i].m(n,c);f(n,r,c)},p(n,[c]){if(c&1&&a!==(a=n[0].title+"")&&G(t,a),c&3){l=n[1];let i;for(i=0;i<l.length;i+=1){const d=z(n,l,i);h[i]?h[i].p(d,c):(h[i]=F(d),h[i].c(),h[i].m(r.parentNode,r))}for(;i<h.length;i+=1)h[i].d(1);h.length=l.length}},i:b,o:b,d(n){n&&p(e),n&&p(o),k(h,n),n&&p(r)}}}function J(s,e,a){let{copy:t}=e;const{sections:o}=t;return s.$$set=r=>{"copy"in r&&a(0,t=r.copy)},[t,o]}class Q extends x{constructor(e){super();$(this,e,J,D,P,{copy:0})}}const R="Privacy Policy",X=[{id:"intro"},{id:"what",hed:"What data do we collect?"},{id:"indirect"},{id:"use",hed:"How will we use your data?"},{id:"cookies",hed:"Cookies"},{id:"other",hed:"Privacy policies of other websites"},{id:"changes",hed:"Changes to our privacy policy"},{id:"contact",hed:"How to contact us"}],Z=[{type:"text",value:"This privacy policy will explain how The Pudding uses the anonymized personal data we collect from you when you use our website. The Pudding does not keep personally identifiable data."}],ee=[{type:"text",value:"You directly provide The Pudding with most of the data we collect. We collect data and process data when you:"}],te=["Sign up for our <a rel=external href=https://poly-graph.us11.list-manage.com/subscribe/post>email list</a>","Voluntarily provide your input that becomes part of a story\u2019s experience (ex: <a rel=external href=https://pudding.cool/2019/02/gyllenhaal/>The Gyllenhaal Experiment</a>, <a rel=external href=https://pudding.cool/2018/04/birthday-paradox/>The Birthday Paradox Experiment</a>). This is never personally identifiable."],oe=[{type:"text",value:"The Pudding may also receive your data indirectly from the following sources:"}],ie=["Your browser\u2019s cookies when you use or view our website","Third-party partners including <a rel=external href=https://www.facebook.com/policy.php>Facebook</a> and <a rel=external href=https://twitter.com/en/privacy>Twitter</a>","Spotify, for our AI music project. No spotify data is stored, and you can remove ties between your Spotify account and the project by clicking remove access for \u201CBad Music\u201D on Spotify\u2019s 3rd Party app page  <a rel=external href=https://www.spotify.com/account/apps/>here</a>.","Location information when we provide localized content (ex: <a rel=external href=https://pudding.cool/2018/10/city_3d/>Human Terrain</a>, <a rel=external href=https://pudding.cool/2017/04/beer/>What City is the Microbrew Capital of the US?</a>). Location data is no more granular than a reader\u2019s city and is not tied to any other personal information."],ae=[{type:"text",value:"The Pudding collects your data so that we can personalize stories an create content for stories from reader-generated inputs."}],ne=[{type:"text",value:"When you visit a website, the website logs information to the browser, creating a text file called a cookie. Cookies collect standard internet and visitor behavior information, such as whether you are logged in, what you\u2019ve placed in your shopping cart, or what preferences you have set. The Pudding may collect analytics information from you automatically through cookies or similar technology."},{type:"text",value:"For further information, visit <a rel=external href=https://www.allaboutcookies.org/>allaboutcookies.org</a>. You can set your browser not to accept cookies, and the previously linked site tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function if you remove or disable cookies."}],re=[{type:"text",value:"The Pudding website contains links to other websites. Our privacy policy only applies to our website. If you click on a link and get directed to another website, please read their privacy policy."}],le=[{type:"text",value:"The Pudding keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on October 1, 2021."}],se=[{type:"text",value:"If you have any questions about The Pudding\u2019s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us."},{type:"text",value:"Email us at sup@pudding.cool"}];var U={title:R,sections:X,intro:Z,what:ee,whatList:te,indirect:oe,indirectList:ie,use:ae,cookies:ne,other:re,changes:le,contact:se};function ce(s){let e,a,t,o;return e=new K({props:{copy:U}}),t=new Q({props:{copy:U}}),{c(){M(e.$$.fragment),a=g(),M(t.$$.fragment)},l(r){S(e.$$.fragment,r),a=w(r),S(t.$$.fragment,r)},m(r,l){C(e,r,l),f(r,a,l),C(t,r,l),o=!0},p:b,i(r){o||(j(e.$$.fragment,r),j(t.$$.fragment,r),o=!0)},o(r){I(e.$$.fragment,r),I(t.$$.fragment,r),o=!1},d(r){W(e,r),r&&p(a),W(t,r)}}}class pe extends x{constructor(e){super();$(this,e,null,ce,P,{})}}export{pe as default};