(function(){var e={3752:function(e,n,t){"use strict";var o=t(1020),r=t(9242),a=t(3396),s=t.p+"img/github.7b98a572.svg",i=t.p+"img/linkedin.ad3f422c.svg",c=t(7139),u=t.p+"img/language.37fc5260.svg",l=t(4870);const g=(0,o.Q_)("language",{state:()=>({language:"en"}),actions:{setLanguage(e){this.language=e}}}),d={class:"flags"},p=["src","alt","onClick"];var f=(0,a.aZ)({__name:"LanguageSelector",emits:["language-selected"],setup(e,{emit:n}){const o=[{name:"fr",icon:"french.svg"},{name:"en",icon:"english.svg"},{name:"de",icon:"german.svg"}],r=(0,l.iH)(!1),s=g(),i=e=>t(9418)("./"+e),f=()=>{r.value=!r.value},v=e=>{n("language-selected",e),s.setLanguage(e)};return(e,n)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,c.C_)("language-selector "+(r.value?"panel-open":""))},[(0,a._)("img",{src:u,alt:"select language",class:"icon",onClick:f}),(0,a._)("div",d,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(o,((e,n)=>(0,a._)("img",{key:n,src:i(e.icon),alt:e.name,class:"flag",onClick:n=>v(e.name)},null,8,p))),64))])],2))}}),v=t(89);const m=(0,v.Z)(f,[["__scopeId","data-v-45bcbdb0"]]);var b=m;const h={class:"menu-bar"},_=(0,a.uE)('<div class="center" data-v-6ed6edbc><span class="name" data-v-6ed6edbc>Erwan LE FORESTIER</span><div class="links" data-v-6ed6edbc><a href="https://github.com/erwanlfrt/" target="_blank" rel="noopener noreferrer" data-v-6ed6edbc><img src="'+s+'" class="link-icon" data-v-6ed6edbc></a><a href="https://www.linkedin.com/in/erwanlfrt/" target="_blank" rel="noopener noreferrer" data-v-6ed6edbc><img src="'+i+'" class="link-icon" data-v-6ed6edbc></a></div></div>',1);var w=(0,a.aZ)({__name:"MenuBar",setup(e){return(e,n)=>((0,a.wg)(),(0,a.iD)("div",h,[_,(0,a.Wm)(b)]))}});const k=(0,v.Z)(w,[["__scopeId","data-v-6ed6edbc"]]);var y=k;const S={id:"core"};var O=(0,a.aZ)({__name:"App",setup(e){return(e,n)=>{const t=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(y),(0,a._)("div",S,[(0,a.Wm)(t)])],64)}}});const j=O;var U=j,E=t(2483);const D={class:"custom-title"};var x=(0,a.aZ)({__name:"CustomTitle",props:{title:null},setup(e){return(n,t)=>((0,a.wg)(),(0,a.iD)("h1",D,(0,c.zw)(e.title),1))}});const C=(0,v.Z)(x,[["__scopeId","data-v-0ad189a3"]]);var T=C,N=(0,a.aZ)({__name:"TechnoTag",props:{name:null,color:null},setup(e){return(n,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"techno-tag",style:(0,c.j5)({background:e.color})},(0,c.zw)(e.name),5))}});const Z=(0,v.Z)(N,[["__scopeId","data-v-7b44fd29"]]);var F=Z,P=JSON.parse('{"youtongue":{"name":"YouTongue","logo":"youtongue.svg","background":"youtongue.png","description":{"fr":"Rechercher des vidéos YouTube avec des sous-titres dans une ou plusieurs langues.","en":"Search for YouTube videos with subtitles in one or more languages.","de":"Suche nach YouTube-Videos mit Untertiteln in einer oder mehreren Sprachen."},"color":"#FF0000","url":"/youtongue","tags":[{"name":"TypeScript","color":"#0E7EAE"},{"name":"React","color":"#4B4B4B"}]},"boussole":{"name":"Boussole","logo":"boussole.svg","background":"boussole.png","description":{"fr":"Librairie JS/TS de navigation spatiale.","en":"JS/TS library for spatial navigation.","de":"JS/TS Bibliothek für räumliche Navigation."},"color":"#785e8a","url":"/boussole","tags":[{"name":"TypeScript","color":"#0E7EAE"},{"name":"Vue","color":"#67bb84"},{"name":"React","color":"#4B4B4B"},{"name":"Angular","color":"#c7402a"}]},"sweetch":{"name":"Sweetch","logo":"sweetch.svg","background":"","description":{"fr":"En développement :)","en":"Coming soon :)","de":"Demnächst verfügbar :)"},"color":"#000000","url":"/#","tags":[{"name":"Flutter","color":"#68c5ee"},{"name":"Dart","color":"#1c2834"}]}}');const z=["href"],I={class:"logo-wrapper"},L=["src","alt"],W={class:"tags"};var M=(0,a.aZ)({__name:"ProjectTile",props:{project:null},setup(e){const n=e,r=P[n.project],s=g(),{language:i}=(0,o.Jk)(s),u=(0,a.Fl)((()=>P[n.project].description[i.value]));return(e,n)=>((0,a.wg)(),(0,a.iD)("a",{class:"project-tile",href:(0,l.SU)(r).url},[(0,a._)("div",{class:"upper",style:(0,c.j5)(""!==(0,l.SU)(r).background?{"background-image":"url("+t(2843)("./"+(0,l.SU)(r).background)+")"}:"")},[(0,a._)("div",I,[(0,a._)("img",{src:t(7631)("./"+(0,l.SU)(r).logo),alt:(0,l.SU)(r).name,class:"logo"},null,8,L)])],4),(0,a._)("div",{class:"lower",style:(0,c.j5)({"border-top":"1px solid "+(0,l.SU)(r).color})},[(0,a._)("h2",null,(0,c.zw)((0,l.SU)(r).name),1),(0,a._)("span",null,(0,c.zw)((0,l.SU)(u)),1),(0,a._)("div",W,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(r).tags,((e,n)=>((0,a.wg)(),(0,a.j4)(F,{key:n,name:e.name,color:e.color},null,8,["name","color"])))),128))])],4)],8,z))}});const B=(0,v.Z)(M,[["__scopeId","data-v-482dbda4"]]);var J=B;const V={class:"projects"},Y={class:"project-list"};var A=(0,a.aZ)({__name:"ProjectsSection",setup(e){const n=["youtongue","boussole","sweetch"];return(e,t)=>((0,a.wg)(),(0,a.iD)("div",V,[(0,a.Wm)(T,{title:"My projects"}),(0,a._)("div",Y,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(n,((e,n)=>(0,a.Wm)(J,{key:n,project:e},null,8,["project"]))),64))])]))}});const H=A;var R=H,K=JSON.parse('{"en":{"beforePN":"If you want any information or if you want to contribute to one of my project, do not hesitate to contact me directly by phone at ","afterPN":". You can also contact me by email at ","afterMA":"."},"fr":{"beforePN":"Pour plus d\'informations ou si vous souhaitez contribuer à l\'un de mes projets, n\'hésitez pas à me contacter directement par téléphone au ","afterPN":" ou alors par mail à l\'adresse suivante : ","afterMA":"."},"de":{"beforePN":"Für weitere Informationen oder wenn Sie zu einem meiner Projekte beitragen möchten, kontaktieren Sie mich bitte direkt per Telefon unter ","afterPN":" oder per E-Mail an ","afterMA":"."}}');const Q=e=>((0,a.dD)("data-v-54a770d8"),e=e(),(0,a.Cn)(),e),q={class:"section"},G=Q((()=>(0,a._)("a",{href:"tel:33783613196"},"+33 7 83 61 31 96",-1))),X=Q((()=>(0,a._)("a",{href:"mailto:leforestiererwan@gmail.com"},"leforestiererwan@gmail.com",-1)));var $=(0,a.aZ)({__name:"ContactSection",setup(e){const n=g(),{language:t}=(0,o.Jk)(n),r=(0,a.Fl)((()=>K[t.value].beforePN)),s=(0,a.Fl)((()=>K[t.value].afterPN)),i=(0,a.Fl)((()=>K[t.value].afterMA));return(e,n)=>((0,a.wg)(),(0,a.iD)("div",q,[(0,a.Wm)(T,{title:"Contact"}),(0,a._)("p",null,[(0,a.Uk)((0,c.zw)((0,l.SU)(r))+" ",1),G,(0,a.Uk)(" "+(0,c.zw)((0,l.SU)(s))+" ",1),X,(0,a.Uk)(" "+(0,c.zw)((0,l.SU)(i)),1)])]))}});const ee=(0,v.Z)($,[["__scopeId","data-v-54a770d8"]]);var ne=ee,te=JSON.parse('{"en":{"text":"If you want more information about my background, check my online CV here !","button":"Open CV"},"fr":{"text":"Pour plus d\'informations sur mon expérience, n\'hésitez pas à consulter mon CV ci-dessous.","button":"Lire le CV"},"de":{"text":"Wenn Sie mehr über meinen Hintergrund erfahren möchten, lesen Sie meinen Online-Lebenslauf hier!","button":"Lebenslauf lesen"}}');const oe={class:"section"},re={class:"content"},ae={class:"button-wrapper"},se=["href"];var ie=(0,a.aZ)({__name:"CvSection",setup(e){const n=g(),{language:t}=(0,o.Jk)(n),r=(0,a.Fl)((()=>te[t.value].text)),s=(0,a.Fl)((()=>te[t.value].button));return(e,n)=>((0,a.wg)(),(0,a.iD)("div",oe,[(0,a.Wm)(T,{title:"Curriculum Vitae"}),(0,a._)("div",re,[(0,a._)("p",null,(0,c.zw)((0,l.SU)(r)),1),(0,a._)("div",ae,[(0,a._)("a",{href:"/cv/CV_"+(0,l.SU)(t)+"_Erwan_LE-FORESTIER.pdf",target:"_blank",rel:"noopener noreferrer"},(0,c.zw)((0,l.SU)(s)),9,se)])])]))}});const ce=(0,v.Z)(ie,[["__scopeId","data-v-abe32e70"]]);var ue=ce;const le={class:"home"},ge={class:"left"},de={class:"right"};var pe=(0,a.aZ)({__name:"HomeView",setup(e){return(e,n)=>((0,a.wg)(),(0,a.iD)("div",le,[(0,a._)("div",ge,[(0,a.Wm)(R)]),(0,a._)("div",de,[(0,a.Wm)(ne),(0,a.Wm)(ue)])]))}});const fe=pe;var ve=fe;const me=[{path:"/",name:"home",component:ve}],be=(0,E.p7)({history:(0,E.PO)("/"),routes:me});var he=be;const _e=(0,o.WB)();(0,r.ri)(U).use(he).use(_e).mount("#app")},9418:function(e,n,t){var o={"./english.svg":7749,"./french.svg":8163,"./german.svg":3924};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=9418},7631:function(e,n,t){var o={"./boussole.svg":5039,"./sweetch.svg":2159,"./youtongue.svg":6451};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=7631},2843:function(e,n,t){var o={"./boussole.png":2420,"./youtongue.png":1026};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=2843},7749:function(e,n,t){"use strict";e.exports=t.p+"img/english.23c052d4.svg"},8163:function(e,n,t){"use strict";e.exports=t.p+"img/french.773fe58d.svg"},3924:function(e,n,t){"use strict";e.exports=t.p+"img/german.fdb26644.svg"},5039:function(e,n,t){"use strict";e.exports=t.p+"img/boussole.2240b60c.svg"},2159:function(e,n,t){"use strict";e.exports=t.p+"img/sweetch.8c3e27ae.svg"},6451:function(e,n,t){"use strict";e.exports=t.p+"img/youtongue.2fee2366.svg"},2420:function(e,n,t){"use strict";e.exports=t.p+"img/boussole.7810c06a.png"},1026:function(e,n,t){"use strict";e.exports=t.p+"img/youtongue.8906fa34.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,s=o[0],i=o[1],c=o[2],u=0;if(s.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var l=c(t)}for(n&&n(o);u<s.length;u++)a=s[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkerwanlfrt_github_io"]=self["webpackChunkerwanlfrt_github_io"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3752)}));o=t.O(o)})();
//# sourceMappingURL=app.8130b1b4.js.map