import{S as M,i as S,s as C,e as y,k as g,c as m,a as _,n as w,d,b,f as p,H as v,L as k,j as $,l as j,m as T,o as x,x as L,u as P,v as H,t as I,g as N,h as G,I as O}from"../chunks/vendor-fb14e7c9.js";import{M as V}from"../chunks/Meta-5d653f15.js";import{H as D}from"../chunks/HeroText-77fbc69c.js";import"../chunks/stores-4e369268.js";function W(s,e,a){const t=s.slice();return t[2]=e[a].hed,t[3]=e[a].id,t}function z(s,e,a){const t=s.slice();return t[6]=e[a],t}function Y(s,e,a){const t=s.slice();return t[6]=e[a].value,t}function J(s){let e,a=s[0].title+"",t,o,n,r=s[0].dek+"";return{c(){e=y("h1"),t=I(a),o=g(),n=y("p")},l(l){e=m(l,"H1",{});var i=_(e);t=N(i,a),i.forEach(d),o=w(l),n=m(l,"P",{});var u=_(n);u.forEach(d)},m(l,i){p(l,e,i),v(e,t),p(l,o,i),p(l,n,i),n.innerHTML=r},p(l,i){i&1&&a!==(a=l[0].title+"")&&G(t,a),i&1&&r!==(r=l[0].dek+"")&&(n.innerHTML=r)},d(l){l&&d(e),l&&d(o),l&&d(n)}}}function K(s){let e,a=s[2]+"",t;return{c(){e=y("h2"),t=I(a)},l(o){e=m(o,"H2",{});var n=_(e);t=N(n,a),n.forEach(d)},m(o,n){p(o,e,n),v(e,t)},p:O,d(o){o&&d(e)}}}function q(s){let e,a=s[6]+"";return{c(){e=y("p")},l(t){e=m(t,"P",{});var o=_(e);o.forEach(d)},m(t,o){p(t,e,o),e.innerHTML=a},p(t,o){o&1&&a!==(a=t[6]+"")&&(e.innerHTML=a)},d(t){t&&d(e)}}}function B(s){let e,a=s[0][`${s[3]}List`],t=[];for(let o=0;o<a.length;o+=1)t[o]=F(z(s,a,o));return{c(){e=y("ul");for(let o=0;o<t.length;o+=1)t[o].c()},l(o){e=m(o,"UL",{});var n=_(e);for(let r=0;r<t.length;r+=1)t[r].l(n);n.forEach(d)},m(o,n){p(o,e,n);for(let r=0;r<t.length;r+=1)t[r].m(e,null)},p(o,n){if(n&3){a=o[0][`${o[3]}List`];let r;for(r=0;r<a.length;r+=1){const l=z(o,a,r);t[r]?t[r].p(l,n):(t[r]=F(l),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=a.length}},d(o){o&&d(e),k(t,o)}}}function F(s){let e,a=s[6]+"";return{c(){e=y("li")},l(t){e=m(t,"LI",{});var o=_(e);o.forEach(d)},m(t,o){p(t,e,o),e.innerHTML=a},p(t,o){o&1&&a!==(a=t[6]+"")&&(e.innerHTML=a)},d(t){t&&d(e)}}}function U(s){let e,a,t,o,n,r=s[2]&&K(s),l=s[0][s[3]],i=[];for(let c=0;c<l.length;c+=1)i[c]=q(Y(s,l,c));let u=s[0][`${s[3]}List`]&&B(s);return{c(){e=y("section"),r&&r.c(),a=g();for(let c=0;c<i.length;c+=1)i[c].c();t=g(),u&&u.c(),o=g(),this.h()},l(c){e=m(c,"SECTION",{id:!0,class:!0});var h=_(e);r&&r.l(h),a=w(h);for(let f=0;f<i.length;f+=1)i[f].l(h);t=w(h),u&&u.l(h),o=w(h),h.forEach(d),this.h()},h(){b(e,"id",n=s[3]),b(e,"class","column-regular")},m(c,h){p(c,e,h),r&&r.m(e,null),v(e,a);for(let f=0;f<i.length;f+=1)i[f].m(e,null);v(e,t),u&&u.m(e,null),v(e,o)},p(c,h){if(c[2]&&r.p(c,h),h&3){l=c[0][c[3]];let f;for(f=0;f<l.length;f+=1){const E=Y(c,l,f);i[f]?i[f].p(E,h):(i[f]=q(E),i[f].c(),i[f].m(e,t))}for(;f<i.length;f+=1)i[f].d(1);i.length=l.length}c[0][`${c[3]}List`]?u?u.p(c,h):(u=B(c),u.c(),u.m(e,o)):u&&(u.d(1),u=null)},d(c){c&&d(e),r&&r.d(),k(i,c),u&&u.d()}}}function Q(s){let e,a,t,o,n;a=new D({props:{$$slots:{default:[J]},$$scope:{ctx:s}}});let r=s[1],l=[];for(let i=0;i<r.length;i+=1)l[i]=U(W(s,r,i));return{c(){e=y("section"),$(a.$$.fragment),t=g();for(let i=0;i<l.length;i+=1)l[i].c();o=j(),this.h()},l(i){e=m(i,"SECTION",{id:!0,class:!0});var u=_(e);T(a.$$.fragment,u),u.forEach(d),t=w(i);for(let c=0;c<l.length;c+=1)l[c].l(i);o=j(),this.h()},h(){b(e,"id","intro"),b(e,"class","column-wide")},m(i,u){p(i,e,u),x(a,e,null),p(i,t,u);for(let c=0;c<l.length;c+=1)l[c].m(i,u);p(i,o,u),n=!0},p(i,[u]){const c={};if(u&2049&&(c.$$scope={dirty:u,ctx:i}),a.$set(c),u&3){r=i[1];let h;for(h=0;h<r.length;h+=1){const f=W(i,r,h);l[h]?l[h].p(f,u):(l[h]=U(f),l[h].c(),l[h].m(o.parentNode,o))}for(;h<l.length;h+=1)l[h].d(1);l.length=r.length}},i(i){n||(L(a.$$.fragment,i),n=!0)},o(i){P(a.$$.fragment,i),n=!1},d(i){i&&d(e),H(a),i&&d(t),k(l,i),i&&d(o)}}}function R(s,e,a){let{copy:t}=e;const{sections:o}=t;return s.$$set=n=>{"copy"in n&&a(0,t=n.copy)},[t,o]}class X extends M{constructor(e){super();S(this,e,R,Q,C,{copy:0})}}const Z="Privacy Policy",ee="How The Pudding uses personal data.",te="This privacy policy will explain how The Pudding uses the anonymized personal data we collect from you when you use our website. The Pudding does not keep personally identifiable data.",oe=[{id:"what",hed:"What data do we collect?"},{id:"indirect"},{id:"use",hed:"How will we use your data?"},{id:"cookies",hed:"Cookies"},{id:"other",hed:"Privacy policies of other websites"},{id:"changes",hed:"Changes to our privacy policy"},{id:"contact",hed:"How to contact us"}],ie=[{type:"text",value:"You directly provide The Pudding with most of the data we collect. We collect data and process data when you:"}],ae=["Sign up for our <a rel=external href=https://poly-graph.us11.list-manage.com/subscribe/post>email list</a>","Voluntarily provide your input that becomes part of a story\u2019s experience (ex: <a rel=external href=https://pudding.cool/2019/02/gyllenhaal/>The Gyllenhaal Experiment</a>, <a rel=external href=https://pudding.cool/2018/04/birthday-paradox/>The Birthday Paradox Experiment</a>). This is never personally identifiable."],ne=[{type:"text",value:"The Pudding may also receive your data indirectly from the following sources:"}],re=["Your browser\u2019s cookies when you use or view our website","Third-party partners including <a rel=external href=https://www.facebook.com/policy.php>Facebook</a> and <a rel=external href=https://twitter.com/en/privacy>Twitter</a>","Spotify, for our AI music project. No spotify data is stored, and you can remove ties between your Spotify account and the project by clicking remove access for \u201CBad Music\u201D on Spotify\u2019s 3rd Party app page  <a rel=external href=https://www.spotify.com/account/apps/>here</a>.","Location information when we provide localized content (ex: <a rel=external href=https://pudding.cool/2018/10/city_3d/>Human Terrain</a>, <a rel=external href=https://pudding.cool/2017/04/beer/>What City is the Microbrew Capital of the US?</a>). Location data is no more granular than a reader\u2019s city and is not tied to any other personal information."],le=[{type:"text",value:"The Pudding collects your data so that we can personalize stories an create content for stories from reader-generated inputs."}],se=[{type:"text",value:"When you visit a website, the website logs information to the browser, creating a text file called a cookie. Cookies collect standard internet and visitor behavior information, such as whether you are logged in, what you\u2019ve placed in your shopping cart, or what preferences you have set. The Pudding may collect analytics information from you automatically through cookies or similar technology."},{type:"text",value:"For further information, visit <a rel=external href=https://www.allaboutcookies.org/>allaboutcookies.org</a>. You can set your browser not to accept cookies, and the previously linked site tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function if you remove or disable cookies."}],ce=[{type:"text",value:"The Pudding website contains links to other websites. Our privacy policy only applies to our website. If you click on a link and get directed to another website, please read their privacy policy."}],ue=[{type:"text",value:"The Pudding keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on October 1, 2021."}],he=[{type:"text",value:"If you have any questions about The Pudding\u2019s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us."},{type:"text",value:"Email us at sup@pudding.cool"}];var A={title:Z,description:ee,dek:te,sections:oe,what:ie,whatList:ae,indirect:ne,indirectList:re,use:le,cookies:se,other:ce,changes:ue,contact:he};function fe(s){let e,a,t,o;return e=new V({props:{copy:A}}),t=new X({props:{copy:A}}),{c(){$(e.$$.fragment),a=g(),$(t.$$.fragment)},l(n){T(e.$$.fragment,n),a=w(n),T(t.$$.fragment,n)},m(n,r){x(e,n,r),p(n,a,r),x(t,n,r),o=!0},p:O,i(n){o||(L(e.$$.fragment,n),L(t.$$.fragment,n),o=!0)},o(n){P(e.$$.fragment,n),P(t.$$.fragment,n),o=!1},d(n){H(e,n),n&&d(a),H(t,n)}}}class _e extends M{constructor(e){super();S(this,e,null,fe,C,{})}}export{_e as default};