import{S as P,i as I,s as S,e as p,k as g,c as m,a as _,n as y,d,b,f,H as w,l as v,K as k,X,Y,j as $,m as T,o as L,x as H,u as E,v as W,t as N,g as j,h as Z,I as C}from"../chunks/vendor-a4d942a5.js";import{H as K,M as R}from"../chunks/HeroText-0b395c12.js";import"../chunks/stores-3bda58c4.js";function q(r,e,l){const t=r.slice();return t[2]=e[l].hed,t[3]=e[l].id,t}function A(r,e,l){const t=r.slice();return t[6]=e[l].lead,t[7]=e[l].description,t}function O(r,e,l){const t=r.slice();return t[10]=e[l].value,t}function z(r){let e,l=r[0].title+"",t,o,a,n=r[0].dek+"";return{c(){e=p("h1"),t=N(l),o=g(),a=p("p")},l(s){e=m(s,"H1",{});var i=_(e);t=j(i,l),i.forEach(d),o=y(s),a=m(s,"P",{});var c=_(a);c.forEach(d)},m(s,i){f(s,e,i),w(e,t),f(s,o,i),f(s,a,i),a.innerHTML=n},p(s,i){i&1&&l!==(l=s[0].title+"")&&Z(t,l),i&1&&n!==(n=s[0].dek+"")&&(a.innerHTML=n)},d(s){s&&d(e),s&&d(o),s&&d(a)}}}function B(r){let e,l=r[2]+"",t;return{c(){e=p("h2"),t=N(l)},l(o){e=m(o,"H2",{});var a=_(e);t=j(a,l),a.forEach(d)},m(o,a){f(o,e,a),w(e,t)},p:C,d(o){o&&d(e)}}}function x(r){let e,l=r[0][r[3]],t=[];for(let o=0;o<l.length;o+=1)t[o]=D(O(r,l,o));return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=v()},l(o){for(let a=0;a<t.length;a+=1)t[a].l(o);e=v()},m(o,a){for(let n=0;n<t.length;n+=1)t[n].m(o,a);f(o,e,a)},p(o,a){if(a&3){l=o[0][o[3]];let n;for(n=0;n<l.length;n+=1){const s=O(o,l,n);t[n]?t[n].p(s,a):(t[n]=D(s),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},d(o){k(t,o),o&&d(e)}}}function D(r){let e,l=r[10]+"";return{c(){e=p("p")},l(t){e=m(t,"P",{});var o=_(e);o.forEach(d)},m(t,o){f(t,e,o),e.innerHTML=l},p(t,o){o&1&&l!==(l=t[10]+"")&&(e.innerHTML=l)},d(t){t&&d(e)}}}function F(r){let e,l=r[0][`${r[3]}List`],t=[];for(let o=0;o<l.length;o+=1)t[o]=G(A(r,l,o));return{c(){e=p("ul");for(let o=0;o<t.length;o+=1)t[o].c()},l(o){e=m(o,"UL",{});var a=_(e);for(let n=0;n<t.length;n+=1)t[n].l(a);a.forEach(d)},m(o,a){f(o,e,a);for(let n=0;n<t.length;n+=1)t[n].m(e,null)},p(o,a){if(a&3){l=o[0][`${o[3]}List`];let n;for(n=0;n<l.length;n+=1){const s=A(o,l,n);t[n]?t[n].p(s,a):(t[n]=G(s),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},d(o){o&&d(e),k(t,o)}}}function G(r){let e,l,t=r[6]+"",o,a,n=r[7]+"";return{c(){e=p("li"),l=p("strong"),o=g(),a=new X,this.h()},l(s){e=m(s,"LI",{});var i=_(e);l=m(i,"STRONG",{});var c=_(l);c.forEach(d),o=y(i),a=Y(i),i.forEach(d),this.h()},h(){a.a=null},m(s,i){f(s,e,i),w(e,l),l.innerHTML=t,w(e,o),a.m(n,e)},p(s,i){i&1&&t!==(t=s[6]+"")&&(l.innerHTML=t),i&1&&n!==(n=s[7]+"")&&a.p(n)},d(s){s&&d(e)}}}function U(r){let e,l,t,o,a,n=r[2]&&B(r),s=r[0][r[3]]&&x(r),i=r[0][`${r[3]}List`]&&F(r);return{c(){e=p("section"),n&&n.c(),l=g(),s&&s.c(),t=g(),i&&i.c(),o=g(),this.h()},l(c){e=m(c,"SECTION",{id:!0,class:!0});var h=_(e);n&&n.l(h),l=y(h),s&&s.l(h),t=y(h),i&&i.l(h),o=y(h),h.forEach(d),this.h()},h(){b(e,"id",a=r[3]),b(e,"class","column-regular")},m(c,h){f(c,e,h),n&&n.m(e,null),w(e,l),s&&s.m(e,null),w(e,t),i&&i.m(e,null),w(e,o)},p(c,h){c[2]&&n.p(c,h),c[0][c[3]]?s?s.p(c,h):(s=x(c),s.c(),s.m(e,t)):s&&(s.d(1),s=null),c[0][`${c[3]}List`]?i?i.p(c,h):(i=F(c),i.c(),i.m(e,o)):i&&(i.d(1),i=null)},d(c){c&&d(e),n&&n.d(),s&&s.d(),i&&i.d()}}}function J(r){let e,l,t,o,a;l=new K({props:{$$slots:{default:[z]},$$scope:{ctx:r}}});let n=r[1],s=[];for(let i=0;i<n.length;i+=1)s[i]=U(q(r,n,i));return{c(){e=p("section"),$(l.$$.fragment),t=g();for(let i=0;i<s.length;i+=1)s[i].c();o=v(),this.h()},l(i){e=m(i,"SECTION",{id:!0,class:!0});var c=_(e);T(l.$$.fragment,c),c.forEach(d),t=y(i);for(let h=0;h<s.length;h+=1)s[h].l(i);o=v(),this.h()},h(){b(e,"id","intro"),b(e,"class","column-wide")},m(i,c){f(i,e,c),L(l,e,null),f(i,t,c);for(let h=0;h<s.length;h+=1)s[h].m(i,c);f(i,o,c),a=!0},p(i,[c]){const h={};if(c&8193&&(h.$$scope={dirty:c,ctx:i}),l.$set(h),c&3){n=i[1];let u;for(u=0;u<n.length;u+=1){const M=q(i,n,u);s[u]?s[u].p(M,c):(s[u]=U(M),s[u].c(),s[u].m(o.parentNode,o))}for(;u<s.length;u+=1)s[u].d(1);s.length=n.length}},i(i){a||(H(l.$$.fragment,i),a=!0)},o(i){E(l.$$.fragment,i),a=!1},d(i){i&&d(e),W(l),i&&d(t),k(s,i),i&&d(o)}}}function Q(r,e,l){let{copy:t}=e;const{sections:o}=t;return r.$$set=a=>{"copy"in a&&l(0,t=a.copy)},[t,o]}class ee extends P{constructor(e){super();I(this,e,Q,J,S,{copy:0})}}const te="Pitch a Story",oe="How to collaborate on a story with The Pudding.",ne="We are always looking to collaborate with freelancers on visual stories they are excited to tell. Each quarter, we commission a couple of essays (compensation details below), but we accept story pitches year-round.",ie=[{id:"principles",hed:"What Makes a Good Story?"},{id:"send",hed:"What to Send Us"},{id:"misc"},{id:"compensation",hed:"Compensation"},{id:"time",hed:"Time Commitment"}],ae=[{lead:"The idea is worthy of public discourse.",description:"Would people debate the premise of the idea for 20 minutes? What assumptions does it challenge?"},{lead:"There\u2019s a deeper truth",description:"What does the story reveal (even if it\u2019s buried deep in the essay)? Does the reader leave the essay feeling differently?"},{lead:"You\u2019re showing, not telling.",description:"Visuals make your argument more accessible and less complex than a thousand-word essay."}],se=[{type:"text",value:"If you have a story in mind that you're excited about that meets our criteria, send us a message at pitches@pudding.cool and tell us about it. Please include the following information:"}],le=[{lead:"Headline",description:"The hook, describes what this story is about in a few words"},{lead:"Summary",description:"The elevator pitch, a few sentences explaining the idea and why you're excited about it"},{lead:"Proof",description:"Are data available to help answer your question or tell your story? If so, have you done any analysis yet? Preliminary data analysis, storyboards, or prototypes are very helpful for us to see."},{lead:"Assistance",description:"What piece(s) might you need help with from us? While some of our freelance contributors are capable of completing a visual story from end-to-end on their own, we often collaborate with our contributors. Would you need help with data analysis, writing, design, front-end code, or some other piece needed to tell this story? No matter the division of labor, The Pudding always assigns an editor to each freelance pitch we take on, so that there is always someone to bounce ideas off of and problem solve with you."},{lead:"Links",description:"Do you have a portfolio, blog, or any other relevant work that you'd like to share with us?"}],re=[{type:"text",value:"We have a standing meeting on Mondays to review pitches and we try to provide feedback, regardless of whether or not we pursue the pitch, within a week."},{type:"text",value:"Want to know more? In this behind-the-scenes <a rel=external href=https://pudding.cool/process/pitching-gendered-descriptions/>blog post</a>, a contributor writes about the journey of turning her idea into a pitch and a published article."},{type:"text",value:"Need some inspiration? Check out our <a rel=external href=https://docs.google.com/spreadsheets/d/1neuenck0xy5piNZaaxPhPL0Wsmpe_-gqFjeXqV3MbZE/>team idea backlog</a> to find story ideas we've kicked around but haven't started yet. Feel free to take them and make them your own."}],ce=[{type:"text",value:"We pay $7,000 for end-to-end work on an essay. If we collaborate by providing some assistance in a non-editor capacity (e.g., we do the design), we will lower the compensation accordingly."}],he=[{type:"text",value:"This varies greatly from contributor to contributor. Many of the people we collaborate with are working full-time elsewhere and have limited time per week to spend on a story. At that rate, projects often take several months to complete. If a contributor has more time available per week to contribute, we do our best to help move stories along at a faster pace."}];var V={title:te,description:oe,dek:ne,sections:ie,principlesList:ae,send:se,sendList:le,misc:re,compensation:ce,time:he};function de(r){let e,l,t,o;return e=new R({props:{copy:V}}),t=new ee({props:{copy:V}}),{c(){$(e.$$.fragment),l=g(),$(t.$$.fragment)},l(a){T(e.$$.fragment,a),l=y(a),T(t.$$.fragment,a)},m(a,n){L(e,a,n),f(a,l,n),L(t,a,n),o=!0},p:C,i(a){o||(H(e.$$.fragment,a),H(t.$$.fragment,a),o=!0)},o(a){E(e.$$.fragment,a),E(t.$$.fragment,a),o=!1},d(a){W(e,a),a&&d(l),W(t,a)}}}class me extends P{constructor(e){super();I(this,e,null,de,S,{})}}export{me as default};
