import{S as Y,i as q,s as G,e as k,k as S,t as H,c as T,a as j,n as $,g as E,d as f,aa as J,b as _,f as P,H as m,h as V,I as W,L as z,a3 as K,l as M,x,j as I,m as B,o as L,u as A,v as C,r as Q,w as X}from"../chunks/vendor-fb14e7c9.js";import{M as pe}from"../chunks/Meta-5d653f15.js";import{H as ge}from"../chunks/HeroText-77fbc69c.js";import{D as me}from"../chunks/Details-eee37a3e.js";import"../chunks/stores-4e369268.js";function Z(i,t,r){const e=i.slice();return e[1]=t[r].id,e[2]=t[r].name,e[3]=t[r].slug,e}function ee(i){let t,r,e,a,o,s,n,h=i[2]+"",l,g,b;return{c(){t=k("li"),r=k("a"),e=k("img"),s=S(),n=k("span"),l=H(h),b=S(),this.h()},l(u){t=T(u,"LI",{class:!0});var c=j(t);r=T(c,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var p=j(r);e=T(p,"IMG",{src:!0,alt:!0,class:!0}),s=$(p),n=T(p,"SPAN",{});var w=j(n);l=E(w,h),w.forEach(f),p.forEach(f),b=$(c),c.forEach(f),this.h()},h(){J(e.src,a="common/assets/authors/"+i[1]+".jpg")||_(e,"src",a),_(e,"alt",o="headshot of "+i[2]),_(e,"class","svelte-jqla3p"),_(r,"href",g="author/"+i[3]),_(r,"sveltekit:prefetch",""),_(r,"class","svelte-jqla3p"),_(t,"class","svelte-jqla3p")},m(u,c){P(u,t,c),m(t,r),m(r,e),m(r,s),m(r,n),m(n,l),m(t,b)},p(u,c){c&1&&!J(e.src,a="common/assets/authors/"+u[1]+".jpg")&&_(e,"src",a),c&1&&o!==(o="headshot of "+u[2])&&_(e,"alt",o),c&1&&h!==(h=u[2]+"")&&V(l,h),c&1&&g!==(g="author/"+u[3])&&_(r,"href",g)},d(u){u&&f(t)}}}function we(i){let t,r=i[0],e=[];for(let a=0;a<r.length;a+=1)e[a]=ee(Z(i,r,a));return{c(){t=k("ul");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=T(a,"UL",{class:!0});var o=j(t);for(let s=0;s<e.length;s+=1)e[s].l(o);o.forEach(f),this.h()},h(){_(t,"class","svelte-jqla3p")},m(a,o){P(a,t,o);for(let s=0;s<e.length;s+=1)e[s].m(t,null)},p(a,[o]){if(o&1){r=a[0];let s;for(s=0;s<r.length;s+=1){const n=Z(a,r,s);e[s]?e[s].p(n,o):(e[s]=ee(n),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=r.length}},i:W,o:W,d(a){a&&f(t),z(e,a)}}}function ye(i,t,r){let{staff:e}=t;return e.sort((a,o)=>K(a.name,o.name)),i.$$set=a=>{"staff"in a&&r(0,e=a.staff)},[e]}class ve extends Y{constructor(t){super();q(this,t,ye,we,G,{staff:0})}}var te=[{awardText:"Interactive of the Year",awardOrg:"World Press Photo",awardUrl:"https://www.worldpressphoto.org/news/2021/contests-winners",storyHed:"George Floyd protests (Washington Post collab)",storyUrl:"https://www.washingtonpost.com/graphics/2020/national/live-stream-george-floyd-protests/",year:"2021"},{awardText:"Emmy Nominee",awardOrg:"Academy of Television Arts & Sciences",awardUrl:"https://theemmys.tv/news-42nd-nominations/",storyHed:"George Floyd protests (Washington Post collab)",storyUrl:"https://www.washingtonpost.com/graphics/2020/national/live-stream-george-floyd-protests/",year:"2021"},{awardText:"Golden Kitty",awardOrg:"Product Hunt",awardUrl:"https://www.producthunt.com/stories/announcing-the-2020-golden-kitty-award-winners",storyHed:"How Bad is Your Spotify?",storyUrl:"https://pudding.cool/2020/12/judge-my-spotify/",year:"2020"},{awardText:"Emmy Nominee",awardOrg:"Academy of Television Arts & Sciences",awardUrl:"https://theemmys.tv/wp-content/uploads/2020/08/news-41st-nominations-v01.pdf",storyHed:"We Measured Pop Music\u2019s Falsetto Obsession",storyUrl:"https://www.youtube.com/watch?v=qJT2h5uGAC0",year:"2020"},{awardText:"Silver Medal",awardOrg:"Society for News Design",awardUrl:"https://snd.org/2020-medal-winners/",storyHed:"The Pudding body of work",storyUrl:"https://pudding.cool/",year:"2020"},{awardText:"General Excellence in Online Journalism",awardOrg:"Online News Association",awardUrl:"https://awards.journalists.org/winners/2019/",storyHed:"The Pudding body of work",storyUrl:"https://pudding.cool/",year:"2019"},{awardText:"Website of the Year",awardOrg:"Data Journalism Awards, Global Editors Network",awardUrl:"https://datajournalismawards.org/2019-winners/",storyHed:"The Pudding body of work",storyUrl:"https://pudding.cool/",year:"2019"},{awardText:"World's Best Designed Finalist",awardOrg:"Society for News Design",awardUrl:"https://snd.org/snd41-best-of-digital-design-live-updates/",storyHed:"The Pudding body of work",storyUrl:"https://pudding.cool/",year:"2019"},{awardText:"Gold Medal",awardOrg:"Society for News Design",awardUrl:"https://snd.org/best-of-digital-bronze-medal-winners/",storyHed:"The Pudding body of work",storyUrl:"https://pudding.cool/",year:"2018"},{awardText:"Silver Medal",awardOrg:"Society for News Design",awardUrl:"https://www.snd.org/2019/02/2019-best-of-digital-medal-winners/",storyHed:"Information Graphics",storyUrl:"https://pudding.cool/",year:"2018"},{awardText:"Award of Excellence",awardOrg:"Society for News Design",awardUrl:"https://snd.org/snd41-best-of-digital-design-live-updates/",storyHed:"Organization Portfolio",storyUrl:"https://pudding.cool/",year:"2019"},{awardText:"Stats Excellence in Journalism",awardOrg:"Royal Statistical Society",awardUrl:"https://rss.org.uk/RSS/media/File-library/Events/Awards/RSS_Journalism_Awards_2018_Winners.pdf",storyHed:"The Words That Are \u201CMost Hip Hop\u201D",storyUrl:"https://pudding.cool/2017/09/hip-hop-words/",year:"2018"},{awardText:"Breakthroughs in Storytelling",awardOrg:"Columbia University School of the Arts' Digital Storytelling Lab",awardUrl:"http://digitaldozen.io/projects/the-structure-of-comedy/",storyHed:"The Structure of Stand-Up Comedy",storyUrl:"https://pudding.cool/2018/02/stand-up/",year:"2018"},{awardText:"Silver",awardOrg:"Information is Beautiful Awards",awardUrl:"https://www.informationisbeautifulawards.com/showcase/3222-what-1-2-million-parliamentary-speeches-can-teach-us-about-gender-representation",storyHed:"Gender Representation in Parliament",storyUrl:"https://pudding.cool/2018/07/women-in-parliament/",year:"2018"},{awardText:"Bronze",awardOrg:"Information is Beautiful Awards",awardUrl:"https://www.informationisbeautifulawards.com/showcase/3250",storyHed:"Women's Pockets are Inferior",storyUrl:"https://pudding.cool/2018/08/pockets/",year:"2018"},{awardText:"Peabody for Digital Journalism",awardOrg:"Peabody Awards",awardUrl:"http://www.peabodyawards.com/award-profile/the-pudding",storyHed:"The Pudding body of work",storyUrl:"https://pudding.cool/",year:"2017"},{awardText:"Gold",awardOrg:"Information is Beautiful Awards",awardUrl:"https://www.informationisbeautifulawards.com/showcase/1915-the-unlikely-odds-of-making-it-big",storyHed:"The Unlikely Odds of Making it Big",storyUrl:"https://pudding.cool/2017/01/making-it-big/",year:"2017"},{awardText:"Bronze",awardOrg:"Information is Beautiful Awards",awardUrl:"https://www.informationisbeautifulawards.com/showcase/1914-what-city-is-the-microbrew-capital-of-the-us",storyHed:"What City is the Microbrew Capital of the US?",storyUrl:"https://pudding.cool/2017/04/beer/",year:"2017"},{awardText:"Silver",awardOrg:"Information is Beautiful Awards",awardUrl:"https://www.informationisbeautifulawards.com/showcase/1445-the-evolution-of-music-taste",storyHed:"The Evolution of Music Taste",storyUrl:"https://pudding.cool/2017/03/music-history/",year:"2016"},{awardText:"Bronze",awardOrg:"Information is Beautiful Awards",awardUrl:"https://www.informationisbeautifulawards.com/showcase/1729-film-dialogue",storyHed:"Film Dialogue by Gender",storyUrl:"https://pudding.cool/2017/03/film-dialogue/",year:"2016"}];function ae(i,t,r){const e=i.slice();return e[0]=t[r].awardText,e[1]=t[r].awardUrl,e[2]=t[r].storyHed,e[3]=t[r].storyUrl,e[4]=t[r].year,e}function re(i){let t,r,e,a=i[0]+"",o,s,n,h,l,g=i[2]+"",b,u,c,p,w=i[4]+"",v,d;return{c(){t=k("tr"),r=k("td"),e=k("a"),o=H(a),n=S(),h=k("td"),l=k("a"),b=H(g),c=S(),p=k("td"),v=H(w),d=S(),this.h()},l(y){t=T(y,"TR",{class:!0});var U=j(t);r=T(U,"TD",{class:!0});var D=j(r);e=T(D,"A",{href:!0,rel:!0});var N=j(e);o=E(N,a),N.forEach(f),D.forEach(f),n=$(U),h=T(U,"TD",{class:!0});var O=j(h);l=T(O,"A",{href:!0,rel:!0});var F=j(l);b=E(F,g),F.forEach(f),O.forEach(f),c=$(U),p=T(U,"TD",{class:!0});var R=j(p);v=E(R,w),R.forEach(f),d=$(U),U.forEach(f),this.h()},h(){_(e,"href",s=i[1]),_(e,"rel","external"),_(r,"class","svelte-11sptjj"),_(l,"href",u=i[3]),_(l,"rel","external"),_(h,"class","svelte-11sptjj"),_(p,"class","svelte-11sptjj"),_(t,"class","svelte-11sptjj")},m(y,U){P(y,t,U),m(t,r),m(r,e),m(e,o),m(t,n),m(t,h),m(h,l),m(l,b),m(t,c),m(t,p),m(p,v),m(t,d)},p:W,d(y){y&&f(t)}}}function be(i){let t,r,e,a,o,s,n,h,l,g,b,u,c=te,p=[];for(let w=0;w<c.length;w+=1)p[w]=re(ae(i,c,w));return{c(){t=k("table"),r=k("thead"),e=k("th"),a=H("Award"),o=S(),s=k("th"),n=H("Story"),h=S(),l=k("th"),g=H("Year"),b=S(),u=k("tbody");for(let w=0;w<p.length;w+=1)p[w].c();this.h()},l(w){t=T(w,"TABLE",{class:!0});var v=j(t);r=T(v,"THEAD",{});var d=j(r);e=T(d,"TH",{class:!0});var y=j(e);a=E(y,"Award"),y.forEach(f),o=$(d),s=T(d,"TH",{class:!0});var U=j(s);n=E(U,"Story"),U.forEach(f),h=$(d),l=T(d,"TH",{class:!0});var D=j(l);g=E(D,"Year"),D.forEach(f),d.forEach(f),b=$(v),u=T(v,"TBODY",{});var N=j(u);for(let O=0;O<p.length;O+=1)p[O].l(N);N.forEach(f),v.forEach(f),this.h()},h(){_(e,"class","svelte-11sptjj"),_(s,"class","svelte-11sptjj"),_(l,"class","svelte-11sptjj"),_(t,"class","svelte-11sptjj")},m(w,v){P(w,t,v),m(t,r),m(r,e),m(e,a),m(r,o),m(r,s),m(s,n),m(r,h),m(r,l),m(l,g),m(t,b),m(t,u);for(let d=0;d<p.length;d+=1)p[d].m(u,null)},p(w,[v]){if(v&0){c=te;let d;for(d=0;d<c.length;d+=1){const y=ae(w,c,d);p[d]?p[d].p(y,v):(p[d]=re(y),p[d].c(),p[d].m(u,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=c.length}},i:W,o:W,d(w){w&&f(t),z(p,w)}}}class _e extends Y{constructor(t){super();q(this,t,null,be,G,{})}}function oe(i,t,r){const e=i.slice();return e[5]=t[r].id,e[6]=t[r].hed,e}function se(i,t,r){const e=i.slice();return e[9]=t[r].value,e}function ie(i,t,r){const e=i.slice();return e[9]=t[r].value,e}function ke(i){let t,r=i[0].title+"",e,a,o,s=i[0].dek+"";return{c(){t=k("h1"),e=H(r),a=S(),o=k("p")},l(n){t=T(n,"H1",{});var h=j(t);e=E(h,r),h.forEach(f),a=$(n),o=T(n,"P",{});var l=j(o);l.forEach(f)},m(n,h){P(n,t,h),m(t,e),P(n,a,h),P(n,o,h),o.innerHTML=s},p(n,h){h&1&&r!==(r=n[0].title+"")&&V(e,r),h&1&&s!==(s=n[0].dek+"")&&(o.innerHTML=s)},d(n){n&&f(t),n&&f(a),n&&f(o)}}}function Te(i){let t,r=i[6]+"",e;return{c(){t=k("h2"),e=H(r)},l(a){t=T(a,"H2",{});var o=j(t);e=E(o,r),o.forEach(f)},m(a,o){P(a,t,o),m(t,e)},p:W,d(a){a&&f(t)}}}function ne(i){let t,r=i[0][i[5]],e=[];for(let a=0;a<r.length;a+=1)e[a]=le(ie(i,r,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=M()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);t=M()},m(a,o){for(let s=0;s<e.length;s+=1)e[s].m(a,o);P(a,t,o)},p(a,o){if(o&3){r=a[0][a[5]];let s;for(s=0;s<r.length;s+=1){const n=ie(a,r,s);e[s]?e[s].p(n,o):(e[s]=le(n),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=r.length}},d(a){z(e,a),a&&f(t)}}}function le(i){let t,r=i[9]+"";return{c(){t=k("p")},l(e){t=T(e,"P",{});var a=j(t);a.forEach(f)},m(e,a){P(e,t,a),t.innerHTML=r},p(e,a){a&1&&r!==(r=e[9]+"")&&(t.innerHTML=r)},d(e){e&&f(t)}}}function de(i){let t,r=i[0][i[5]].text,e=[];for(let a=0;a<r.length;a+=1)e[a]=ue(se(i,r,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=M()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);t=M()},m(a,o){for(let s=0;s<e.length;s+=1)e[s].m(a,o);P(a,t,o)},p(a,o){if(o&3){r=a[0][a[5]].text;let s;for(s=0;s<r.length;s+=1){const n=se(a,r,s);e[s]?e[s].p(n,o):(e[s]=ue(n),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=r.length}},d(a){z(e,a),a&&f(t)}}}function ue(i){let t,r=i[9]+"";return{c(){t=k("p")},l(e){t=T(e,"P",{});var a=j(t);a.forEach(f)},m(e,a){P(e,t,a),t.innerHTML=r},p(e,a){a&1&&r!==(r=e[9]+"")&&(t.innerHTML=r)},d(e){e&&f(t)}}}function je(i){let t,r;return t=new _e({}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){L(t,e,a),r=!0},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){A(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function Se(i){let t,r;return t=new ve({props:{staff:i[2]}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){L(t,e,a),r=!0},p:W,i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){A(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function he(i){let t,r;return t=new me({props:{summary:i[0][i[5]].detailsSummary,text:i[0][i[5]].detailsText,list:i[0][i[5]].detailsList}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){L(t,e,a),r=!0},p(e,a){const o={};a&1&&(o.summary=e[0][e[5]].detailsSummary),a&1&&(o.text=e[0][e[5]].detailsText),a&1&&(o.list=e[0][e[5]].detailsList),t.$set(o)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){A(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function ce(i){let t,r,e=Array.isArray(i[0][i[5]]),a,o,s,n,h,l,g,b=i[6]&&Te(i),u=e&&ne(i),c=i[0][i[5]]&&i[0][i[5]].text&&de(i),p=i[5]==="awards"&&je(),w=i[5]==="team"&&Se(i),v=i[0][i[5]]&&i[0][i[5]].detailsSummary&&he(i);return{c(){t=k("section"),b&&b.c(),r=S(),u&&u.c(),a=S(),c&&c.c(),o=S(),p&&p.c(),s=S(),w&&w.c(),n=S(),v&&v.c(),h=S(),this.h()},l(d){t=T(d,"SECTION",{id:!0,class:!0});var y=j(t);b&&b.l(y),r=$(y),u&&u.l(y),a=$(y),c&&c.l(y),o=$(y),p&&p.l(y),s=$(y),w&&w.l(y),n=$(y),v&&v.l(y),h=$(y),y.forEach(f),this.h()},h(){_(t,"id",l=i[5]),_(t,"class","column-regular below")},m(d,y){P(d,t,y),b&&b.m(t,null),m(t,r),u&&u.m(t,null),m(t,a),c&&c.m(t,null),m(t,o),p&&p.m(t,null),m(t,s),w&&w.m(t,null),m(t,n),v&&v.m(t,null),m(t,h),g=!0},p(d,y){d[6]&&b.p(d,y),y&1&&(e=Array.isArray(d[0][d[5]])),e?u?u.p(d,y):(u=ne(d),u.c(),u.m(t,a)):u&&(u.d(1),u=null),d[0][d[5]]&&d[0][d[5]].text?c?c.p(d,y):(c=de(d),c.c(),c.m(t,o)):c&&(c.d(1),c=null),d[5]==="team"&&w.p(d,y),d[0][d[5]]&&d[0][d[5]].detailsSummary?v?(v.p(d,y),y&1&&x(v,1)):(v=he(d),v.c(),x(v,1),v.m(t,h)):v&&(Q(),A(v,1,1,()=>{v=null}),X())},i(d){g||(x(p),x(w),x(v),g=!0)},o(d){A(p),A(w),A(v),g=!1},d(d){d&&f(t),b&&b.d(),u&&u.d(),c&&c.d(),p&&p.d(),w&&w.d(),v&&v.d()}}}function $e(i){let t,r,e,a,o;r=new ge({props:{$$slots:{default:[ke]},$$scope:{ctx:i}}});let s=i[1],n=[];for(let l=0;l<s.length;l+=1)n[l]=ce(oe(i,s,l));const h=l=>A(n[l],1,1,()=>{n[l]=null});return{c(){t=k("section"),I(r.$$.fragment),e=S();for(let l=0;l<n.length;l+=1)n[l].c();a=M(),this.h()},l(l){t=T(l,"SECTION",{id:!0,class:!0});var g=j(t);B(r.$$.fragment,g),g.forEach(f),e=$(l);for(let b=0;b<n.length;b+=1)n[b].l(l);a=M(),this.h()},h(){_(t,"id","intro"),_(t,"class","column-wide")},m(l,g){P(l,t,g),L(r,t,null),P(l,e,g);for(let b=0;b<n.length;b+=1)n[b].m(l,g);P(l,a,g),o=!0},p(l,[g]){const b={};if(g&16385&&(b.$$scope={dirty:g,ctx:l}),r.$set(b),g&7){s=l[1];let u;for(u=0;u<s.length;u+=1){const c=oe(l,s,u);n[u]?(n[u].p(c,g),x(n[u],1)):(n[u]=ce(c),n[u].c(),x(n[u],1),n[u].m(a.parentNode,a))}for(Q(),u=s.length;u<n.length;u+=1)h(u);X()}},i(l){if(!o){x(r.$$.fragment,l);for(let g=0;g<s.length;g+=1)x(n[g]);o=!0}},o(l){A(r.$$.fragment,l),n=n.filter(Boolean);for(let g=0;g<n.length;g+=1)A(n[g]);o=!1},d(l){l&&f(t),C(r),l&&f(e),z(n,l),l&&f(a)}}}function Pe(i,t,r){let{copy:e}=t,{authors:a}=t;const{sections:o}=e,s=a.filter(h=>h.position==="Staff"),n=a.filter(h=>h.position!=="Staff"&&h.id!=="pudding");return n.sort((h,l)=>K(h.name,l.name)),e.contributors.detailsList=n.map(({slug:h,name:l})=>`<a href="/author/${h}" sveltekit:prefetch>${l}</a>`),i.$$set=h=>{"copy"in h&&r(0,e=h.copy),"authors"in h&&r(3,a=h.authors)},[e,o,s,a]}class xe extends Y{constructor(t){super();q(this,t,Pe,$e,G,{copy:0,authors:3})}}const Ue="About Us",Ae="Learn more about The Pudding.",He=[{id:"background"},{id:"etymology"},{id:"team",hed:"The Team"},{id:"contributors"},{id:"speaking"},{id:"awards",hed:"Awards"},{id:"positions",hed:"Open Positions"},{id:"contact",hed:"Get in Touch"},{id:"studio",hed:"Content Studio"}],Ee="The Pudding explains ideas debated in culture with visual essays. We\u2019re not chasing current events or clickbait. We choose topics where visuals inform <em>and</em> entertain. We\u2019ve been in the business of bringing you stories you didn\u2019t know you needed since 2017.",We={detailsSummary:"How and why The Pudding exists",detailsText:[{type:"text",value:"Visual essays are an emerging form of journalism. Some of the most complex, debated topics get lost in \u201Ctoo long; didn\u2019t read\u201D 10,000-word articles. Visual storytelling makes ideas more accessible\u2014or so goes the adage \u201Ca picture is worth a thousand words.\u201D"},{type:"text",value:"We believe in journalism that denounces false equivalence, one that can explicitly say Black Lives Matter, one that never views human rights as partisan issues, and one that believes a person's own experiences are central to strong storytelling."},{type:"text",value:"We hope to be a place that centers and amplifies voices that have long been ignored. We strive for our journalism to be one of key making, not gate keeping, and we won't shy away from stories that tackle racism, sexism, and classism head on."},{type:"text",value:"We are committed to listening, learning, making changes, and being proactive in the fight for equity, inclusion, and racial and social justice."},{type:"text",value:"We're a small group that operates as a collective rather than hierarchical team."},{type:"text",value:"Much of our work is done autonomously, with individuals choosing their essays and owning the whole story, from research to code. Each team member can do every step: research and reporting, data analysis, design, writing, and code."},{type:"text",value:"One luxury that separates us from traditional newsrooms is our approach to publishing urgency. There are no deadlines because we are not tied to news events. With breaking news, it's difficult to gamble on weird, ambitious ideas if they <em>must</em> be published. No one will take on risky, creative projects when they're staring at a deadline."},{type:"text",value:"So we experiment, <em>a lot</em>. The creative process feels more like workshopping a movie script than critiquing a bar chart. Consequently, many of our ideas are killed during production, but we wouldn\u2019t have it any other way! It means we\u2019re trying unproven, never-done-before things."},{type:"text",value:"We're also trying to advance the craft. Visual journalism is still in its infancy. We don't have an established <a  href =https://en.wikipedia.org/wiki/Pattern_language>pattern language</a> found in traditional reporting. Sometimes we'll attempt an unfamiliar visual approach\u2014not because it's guaranteed to work, but because we won\u2019t know until we try. Rarely do organizations have the liberty to take such risks, yet we're small enough to experiment in the pursuit of quality."}]},Oe={detailsSummary:"Why are you called \u201CThe Pudding?\u201D",detailsText:[{type:"text",value:"See <a rel=external href=https://www.npr.org/2012/08/24/159975466/corrections-and-comments-to-stories>etymology</a>."}]},Me={detailsSummary:"Our team\u2019s background",detailsText:"Our team\u2019s backgrounds are pretty varied. There is certainly more than one way to enter this field! Here\u2019s the short version of each of our stories:",detailsList:[{lead:"Caitlyn",description:"Started in psychology / neuroscience research\u2014ended up with a Bachelors in computer science (focus data science / journalism) and a Masters in data visualization. Worked heavily in music journalism throughout college. Spent a couple years transitioning into management as Studio Lead for Polygraph."},{lead:"Ilia",description:"Studied psychology and political science before pursuing psychological research in graduate school; took a detour into freelance journalism before finding data-driven storytelling through Columbia's Lede program."},{lead:"Jan",description:"Began journalism career covering middle school sports for the <a rel=external href=https://www.facebook.com/RCTimes/?__tn__=C-R target=_blank>local paper</a> while in high school. Studied journalism &amp; photojournalism in <a rel=external href=https://www.wku.edu/schoolofmedia/index.php target=_blank>college</a>. First job was doing <a rel=external href=http://jandiehmdesigns.com/#/newspaper-design/ target=_blank>newspaper page design</a>. Transitioned to web design and data journalism from there."},{lead:"Kevin",description:"Studied philosophy in college, then wrote about tech and culture for a bit before attending Columbia\u2019s Lede program (like Ilia) to pick up data journalism skills."},{lead:"Matt",description:"Self-taught, with a degree in business and 7 years of experience making powerpoint slides."},{lead:"Michelle",description:"Studied computer science and worked as a software engineer before discovering the world of visual, data-driven storytelling (through The Pudding!)."},{lead:"Rob",description:"Studied public relations in undergrad, and both library science and art history in grad school. Spent more than a decade doing strategic and creative work for arts, culture and media orgs."},{lead:"Russell",description:"Computer science &gt; creative coding with <a rel=external href=https://processing.org/ target=_blank>Processing</a> &gt; interactive <a rel=external href=http://hollowdocumentary.com/ target=_blank>documentary</a> &gt; making games for civic engagement and data vis &gt; data journalism!"}]},Ie={detailsSummary:"See who else we\u2019ve collaborated with"},Be={detailsSummary:"Interested in having us speak at your event?",detailsText:"We are a small team, so as much as we\u2019d love to speak everywhere and to everyone that we\u2019re invited, we just don\u2019t have the time. If you\u2019d like to invite us to your event, please send us a message at sup@pudding.cool. We are committed to creating meaningfully inclusive spaces, so we follow this <a rel=external href=https://opennews.org/projects/speaker-rider/ target=_blank>speaker rider</a> we co-developed with <a rel=external href=https://opennews.org/ target=_blank>OpenNews</a>."},Le={text:[{type:"text",value:"We do not currently have any open positions and our team will not be taking on interns for 2021. We\u2019re generally always open to hear <a rel=external href=https://pudding.cool/pitch target=_blank>freelance pitches</a>, though, so feel free to send them our way."},{type:"text",value:"If you\u2019d like to be notified the next time we are hiring, sign up for our <a rel=external href=http://eepurl.com/gF8njH target=_blank>mailing list</a>."}],detailsSummary:"What it\u2019s like to work here",detailsList:[{lead:"This is a making-it-up-as-we-go, building-the-plane-in-the-air type of organization.",description:'Look to us if you want a small, startup feel that\u2019s buzzing with possibility. This is different than other newsrooms that have hierarchies and an established "how-we-do-things," decades-old process.'},{lead:"You want to be involved in building something new.",description:"Yes, we publish essays, yet plenty of energy goes into perfecting a creative process that's still in its infancy. As part of a small team, your opinion matters a lot."},{lead:"You crave autonomy rather than taking direction.",description:"There are plenty of organizations where you can slot into a well-oiled, historically prestigious machine. You'll get an editor, a process, and story assignments. But that also comes with baggage, particularly the creeping conservatism that <a rel=external href=https://medium.com/@tonyszhou/postmortem-1b338537fabc>often accompanies success</a>. This is pretty much the opposite: what you make emerges from your own burning desires\u2014ideas gestating in the back of your head for months (or years!) that you\u2019ve never had the latitude to explore."},{lead:"You're over making noise.",description:"We want you to pick projects that don't live and die by the news cycle. You want your work to have a multi-year lifespan. The Pudding underwrites your research interests (go read all the books!) and gives you time (and financial stability) to explore them."},{lead:"Creativity is not a solitary endeavor.",description:"If you\u2019re working solo, we\u2019ll give you an editor, or design resources, or coding help. Whatever it takes to execute your vision. What matters is that we help you understand what readers will feel and keep you motivated."},{lead:"Craft matters.",description:"We are building tools that make visual storytelling easier. Yet instead of making something for everyone, our tools begin with one group of users: ourselves. Building for general consumer adoption is a noble pursuit, but there\u2019s <a target_blank href=http://snarkmarket.com/2011/7320>something special</a> that happens when a toolmaker builds something for their own creative ambitions."},{lead:"You\u2019re keen on building a following.",description:"Most of us started doing this work \u201Con the side,\u201D often on a personal blog. You may have experience wielding your own voice and the thrill of finding readers. We don\u2019t want that to be lost by \u201Cgetting hired\u201D somewhere. Each person needs to have an identity that they'd otherwise cultivate independently."},{lead:"We calibrate our salaries against interactive journalist and data visualization roles.",description:"We recognize that our skill sets are not the same as prose-based journalists, and we ensure that folks joining our mission aren\u2019t taking a paycut from the tech world."}]},Ce=[{type:"text",value:"For press enquiries,  get in touch at press@pudding.cool. For all other inquiries or comments, drop us a line at sup@pudding.cool."}],De={text:[{type:"text",value:"Interested in wielding The Pudding's power for your brand? Our team creates custom, white-labeled content via our award-winning visualization studio, <a rel=external href=http://polygraph.cool >Polygraph</a>."},{type:"text",value:"Send us an email at hi@polygraph.studio."}],detailsSummary:"The relationship between The Pudding and Polygraph",detailsText:[{type:"text",value:"You\u2019ve probably noticed we don\u2019t have any ads or subscription walls on The Pudding. However, we need to keep the lights on somehow. Enter: Polygraph."},{type:"text",value:"We run Polygraph with the purpose of sustaining our work on The Pudding. This allows The Pudding to operate in a purely journalistic space, giving us full creative autonomy on our articles. There\u2019s no brand or client or advertisement contract controlling our Pudding projects, nor are we beholden to what gets the most page clicks. We just do what we think is interesting."},{type:"text",value:"Basically, the wall between The Pudding and Polygraph is a business model embodiment of the editorial/advertising wall in journalism. The Pudding cannot exist without Polygraph, and Polygraph would have no need to exist without The Pudding."},{type:"text",value:"The only time a brand finds its way on The Pudding is through sponsored posts, like <a rel=external href=https://congress.pudding.cool/ target=_blank>this one</a> we just did about congressional tweets with Saleforce\u2019s Einstein API or <a rel=external href=https://pudding.cool/2018/11/dearabby/ target=_blank>this one</a> about Dear Abby letters with IBM Watson. Sponsorship allows us to do what we think is interesting with tools we wouldn\u2019t have access to otherwise."},{type:"text",value:"Despite being for-hire, we make sure our work at Polygraph does align with our mission at The Pudding: tell cool, public-facing stories with data and visuals, just for a purpose-aligned client rather than for\u2026 ourselves (and our moms)."},{type:"text",value:"Interested in wielding The Pudding\u2019s power for your brand? Check out the Polygraph site <a rel=external href=http://polygraph.cool target=_blank>here</a>, and send us an email at hi@polygraph.studio."}]};var fe={title:Ue,description:Ae,sections:He,dek:Ee,background:We,etymology:Oe,team:Me,contributors:Ie,speaking:Be,positions:Le,contact:Ce,studio:De};function Ne(i){let t,r,e,a;return t=new pe({props:{copy:fe}}),e=new xe({props:{copy:fe,authors:i[0]}}),{c(){I(t.$$.fragment),r=S(),I(e.$$.fragment)},l(o){B(t.$$.fragment,o),r=$(o),B(e.$$.fragment,o)},m(o,s){L(t,o,s),P(o,r,s),L(e,o,s),a=!0},p(o,[s]){const n={};s&1&&(n.authors=o[0]),e.$set(n)},i(o){a||(x(t.$$.fragment,o),x(e.$$.fragment,o),a=!0)},o(o){A(t.$$.fragment,o),A(e.$$.fragment,o),a=!1},d(o){C(t,o),o&&f(r),C(e,o)}}}async function Je({fetch:i}){const r=await i("/api/about.json");if(r.ok){const{authors:e}=await r.json();return{props:{authors:e}}}return{status:r.status,error:new Error("Could not load data")}}function ze(i,t,r){let{authors:e}=t;return i.$$set=a=>{"authors"in a&&r(0,e=a.authors)},[e]}class Ve extends Y{constructor(t){super();q(this,t,ze,Ne,G,{authors:0})}}export{Ve as default,Je as load};