(function(){var n={3270:function(n,a,l){"use strict";var e=l(9242),s=l(3396),t=l(7139);const i={class:"container"},r={class:"total"},o=(0,s._)("span",{class:"title-mini"},"total games:",-1),u=(0,s._)("span",{class:"title-mini"},"duration:",-1),c={class:"winners"},p=(0,s._)("span",{class:"title-mini"},"wins: ",-1),_={class:"winner"},w={class:"maps"},d=(0,s._)("h2",null,"Maps",-1),m={class:"container"},g={class:"map"},f={class:"players"},h=(0,s._)("h2",null,"Players",-1),v={class:"container"},k={class:"player"},D={class:"player_main"},z=(0,s._)("span",null,"Games:",-1),y=(0,s._)("span",null,"Score:",-1),U=(0,s._)("span",null,"Kills:",-1),b=(0,s._)("span",null,"Deaths:",-1),H={class:"player_details"},L={class:"details_content"},K={class:"details"},Y=(0,s._)("span",null,"Armor total:",-1),M=(0,s._)("span",null,"Health total:",-1),P=(0,s._)("span",null,"Damage given:",-1),C=(0,s._)("span",null,"Damage taken:",-1),O=(0,s._)("span",null,"Suicides:",-1),Z=(0,s._)("span",null,"Telefrags:",-1),$={class:"powerups"},S=(0,s._)("p",{class:"subtitle"},"Powerups:",-1),j={class:"wrapper"},x={class:"powerup"},T=["src","alt"],q=(0,s._)("span",null,"Pickups:",-1),A=(0,s._)("span",null,"Time (min.):",-1),G={class:"items"},F=(0,s._)("p",{class:"subtitle"},"Items:",-1),R={class:"wrapper"},E={class:"item"},V=["src","alt"],W=(0,s._)("span",null,"Pickups:",-1),B={class:"weapons"},I=(0,s._)("p",{class:"subtitle"},"Weapons:",-1),J={class:"wrapper"},N={class:"weapon"},Q=["src","alt"],X=(0,s._)("span",null,"Hits:",-1),nn=(0,s._)("span",null,"Shots:",-1),an=(0,s._)("span",null,"Kills:",-1);function ln(n,a,l,e,ln,en){const sn=(0,s.up)("pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("header",null,[(0,s._)("div",i,[(0,s._)("section",r,[(0,s._)("div",null,[o,(0,s.Uk)(" "+(0,t.zw)(ln.gameData.total_games),1)]),(0,s._)("div",null,[u,(0,s.Uk)(" "+(0,t.zw)(ln.gameData.duration),1)])]),(0,s._)("section",c,[p,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(ln.gameData.winners,(n=>((0,s.wg)(),(0,s.iD)("div",_,(0,t.zw)(n.name)+": "+(0,t.zw)(n.wins),1)))),256))])])]),(0,s._)("main",null,[(0,s._)("section",w,[d,(0,s._)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(ln.gameData.maps,(n=>((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("h3",null,(0,t.zw)(n.name),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.winners,(n=>((0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("span",null,(0,t.zw)(n.name)+":",1),(0,s.Uk)(" "+(0,t.zw)(n.wins),1)])))),256))])))),256))])]),(0,s._)("section",f,[h,(0,s._)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(ln.playersData,(n=>((0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",null,[(0,s._)("h3",null,(0,t.zw)(n.name),1),(0,s._)("div",D,[(0,s._)("p",null,[z,(0,s.Uk)(" "+(0,t.zw)(n.games),1)]),(0,s._)("p",null,[y,(0,s.Uk)(" "+(0,t.zw)(n.score),1)]),(0,s._)("p",null,[U,(0,s.Uk)(" "+(0,t.zw)(n.kills),1)]),(0,s._)("p",null,[b,(0,s.Uk)(" "+(0,t.zw)(n.deaths),1)])]),(0,s._)("div",H,[(0,s._)("div",L,[(0,s._)("div",K,[(0,s._)("p",null,[Y,(0,s.Uk)(" "+(0,t.zw)(n.armor_total.toLocaleString().replace(/\,/g," ")),1)]),(0,s._)("p",null,[M,(0,s.Uk)(" "+(0,t.zw)(n.health_total.toLocaleString().replace(/\,/g," ")),1)]),(0,s._)("p",null,[P,(0,s.Uk)(" "+(0,t.zw)(n.damage_given.toLocaleString().replace(/\,/g," ")),1)]),(0,s._)("p",null,[C,(0,s.Uk)(" "+(0,t.zw)(n.damage_taken.toLocaleString().replace(/\,/g," ")),1)]),(0,s._)("p",null,[O,(0,s.Uk)(" "+(0,t.zw)(n.suicides),1)]),(0,s._)("p",null,[Z,(0,s.Uk)(" "+(0,t.zw)(n.score-n.kills+n.suicides),1)])]),(0,s._)("div",$,[S,(0,s._)("div",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.powerups,(n=>((0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("div",null,[(0,s._)("img",{src:`./images/items/${n.name.toLowerCase()}.png`,alt:n.name},null,8,T),(0,s._)("p",null,[q,(0,s.Uk)(" "+(0,t.zw)(n.pickups),1)]),(0,s._)("p",null,[A,(0,s.Uk)(" "+(0,t.zw)(Math.floor(n.time/6e4)),1)])])])))),256))])]),(0,s._)("div",G,[F,(0,s._)("div",R,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.items,(n=>((0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("div",null,[(0,s._)("img",{src:`./images/items/${n.name.toLowerCase()}.png`,alt:n.name},null,8,V),(0,s._)("p",null,[W,(0,s.Uk)(" "+(0,t.zw)(n.pickups),1)])])])))),256))])]),(0,s._)("div",B,[I,(0,s._)("div",J,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.weapons,(n=>((0,s.wg)(),(0,s.iD)("div",N,[(0,s._)("div",null,[(0,s._)("img",{src:`./images/items/${n.name.toLowerCase()}1.png`,alt:n.name},null,8,Q),(0,s._)("p",null,[X,(0,s.Uk)(" "+(0,t.zw)(n.hits),1)]),(0,s._)("p",null,[nn,(0,s.Uk)(" "+(0,t.zw)(n.shots),1)]),(0,s._)("p",null,[an,(0,s.Uk)(" "+(0,t.zw)(n.kills),1)])])])))),256))])])])])])])))),256))])]),(0,s.Wm)(sn)])],64)}const en=(0,s._)("h2",null,"Games",-1),sn={class:"container"},tn={class:"game"},rn={class:"game-description"},on=(0,s._)("span",null,"type: ",-1),un=(0,s._)("span",null,"duration: ",-1),cn=(0,s._)("span",null,"date: ",-1),pn={class:"game-container"},_n={class:"player"},wn={class:"player-description"},dn=(0,s._)("span",null,"score: ",-1),mn=(0,s._)("span",null,"kills: ",-1),gn=(0,s._)("span",null,"deaths: ",-1),fn=(0,s._)("span",null,"suicides: ",-1),hn=(0,s._)("span",null,"damage given: ",-1),vn=(0,s._)("span",null,"damage taken: ",-1),kn=(0,s._)("span",null,"health total: ",-1),Dn=(0,s._)("span",null,"armor total: ",-1),zn={class:"player-weapons"},yn={class:"weapon-container"},Un=["src","alt"],bn={class:"player-items"},Hn={class:"item-container"},Ln=["src","alt"],Kn={class:"player-powerups"},Yn={class:"powerup-container"},Mn=["src","alt"];function Pn(n,a,l,e,i,r){const o=(0,s.up)("spinner");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("section",{onClick:a[0]||(a[0]=(...a)=>n.test&&n.test(...a)),class:"daydata"},[en,(0,s._)("div",sn,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.dayData,(n=>((0,s.wg)(),(0,s.iD)("div",tn,[(0,s._)("h3",null,(0,t.zw)(n.map),1),(0,s._)("div",rn,[(0,s._)("p",null,[on,(0,s.Uk)((0,t.zw)(n.type),1)]),(0,s._)("p",null,[un,(0,s.Uk)((0,t.zw)(Math.floor(n.duration/60))+" min. ",1)]),(0,s._)("p",null,[cn,(0,s.Uk)((0,t.zw)(n.datetime),1)])]),(0,s._)("div",pn,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.players,(n=>((0,s.wg)(),(0,s.iD)("div",_n,[(0,s._)("h5",null,(0,t.zw)(n.name),1),(0,s._)("div",wn,[(0,s._)("p",null,[dn,(0,s.Uk)((0,t.zw)(n.score),1)]),(0,s._)("p",null,[mn,(0,s.Uk)((0,t.zw)(n.kills),1)]),(0,s._)("p",null,[gn,(0,s.Uk)((0,t.zw)(n.deaths),1)]),(0,s._)("p",null,[fn,(0,s.Uk)((0,t.zw)(n.suicides),1)]),(0,s._)("p",null,[hn,(0,s.Uk)((0,t.zw)(n.damage_given),1)]),(0,s._)("p",null,[vn,(0,s.Uk)((0,t.zw)(n.damage_taken),1)]),(0,s._)("p",null,[kn,(0,s.Uk)((0,t.zw)(n.health_total),1)]),(0,s._)("p",null,[Dn,(0,s.Uk)((0,t.zw)(n.armor_total),1)])]),(0,s._)("div",zn,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.weapons,(n=>((0,s.wg)(),(0,s.iD)("div",yn,[(0,s._)("img",{src:`/images/items/${n.name.toLowerCase()}1.png`,alt:`${n.name}.png`},null,8,Un),(0,s._)("p",null,(0,t.zw)(n.kills)+" / ",1),(0,s._)("p",null,(0,t.zw)(n.hits)+" / ",1),(0,s._)("p",null,(0,t.zw)(n.shots),1)])))),256))]),(0,s._)("div",bn,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.items,(n=>((0,s.wg)(),(0,s.iD)("div",Hn,[(0,s._)("img",{src:`/images/items/${n.name.toLowerCase()}.png`,alt:`${n.name}.png`},null,8,Ln),(0,s._)("p",null,(0,t.zw)(n.pickups),1)])))),256))]),(0,s._)("div",Kn,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.powerups,(n=>((0,s.wg)(),(0,s.iD)("div",Yn,[(0,s._)("img",{src:`/images/items/${n.name.toLowerCase()}.png`,alt:`${n.name}.png`},null,8,Mn),(0,s._)("p",null,(0,t.zw)(Math.floor(n.time/1e3))+"s ("+(0,t.zw)(n.pickups)+") ",1)])))),256))])])))),256))])])))),256))])]),(0,s.Wm)(o)],64)}l(7658);const Cn={class:"spinner-container"},On=(0,s._)("svg",{class:"spinner",viewBox:"0 0 256 256",id:"Flat",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{d:"M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25488,62.74512a11.96308,11.96308,0,0,0,8.48535-3.51465l22.627-22.62695a12.0001,12.0001,0,0,0-16.97071-16.97071l-22.62695,22.627a12,12,0,0,0,8.48535,20.48535ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.25977,48.76953a12.0001,12.0001,0,0,0-16.9707,16.9707l22.62695,22.627a12.0001,12.0001,0,0,0,16.97071-16.97071ZM128,180a12.0006,12.0006,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12.0006,12.0006,0,0,0,128,180ZM74.25977,164.76953l-22.627,22.62695a12.0001,12.0001,0,0,0,16.97071,16.97071l22.62695-22.627a12.0001,12.0001,0,0,0-16.9707-16.9707ZM76,128a12.0006,12.0006,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12.0006,12.0006,0,0,0,76,128ZM68.60352,51.63281A12.0001,12.0001,0,0,0,51.63281,68.60352l22.627,22.62695a12.0001,12.0001,0,0,0,16.9707-16.9707Z",style:{"paint-order":"stroke","fill-rule":"nonzero",fill:"rgb(118, 120, 124)"}})],-1),Zn=[On];function $n(n,a,l,e,t,i){return(0,s.wg)(),(0,s.iD)("div",Cn,Zn)}var Sn={},jn=l(89);const xn=(0,jn.Z)(Sn,[["render",$n]]);var Tn=xn,qn={data(){return{dayData:[],counterPage:1}},methods:{scrollingData(){let n=document.documentElement.getBoundingClientRect().bottom,a=100;window.screen.width<900&&(a=250),n<document.documentElement.clientHeight+a&&(this.counterPage++,this.getGameData(this.counterPage))},async getGameData(n){try{let a=await fetch(`/api/ffa/matches?page=${n}&perpage=6`),l=await a.json();for(let n of l)this.dayData.push(n);document.querySelector(".spinner").classList.add("hidden")}catch(a){console.error(a)}},debounce(n,a){let l;return function(...e){return document.querySelector(".spinner").classList.remove("hidden"),clearTimeout(l),new Promise((s=>{l=setTimeout((()=>s(n(...e))),a)}))}}},beforeMount(){this.getGameData(1)},mounted(){window.onscroll=this.debounce(this.scrollingData,300)},components:{spinner:Tn}};const An=(0,jn.Z)(qn,[["render",Pn]]);var Gn=An,Fn={name:"App",data(){return{ffaLink:"/api/ffa",playersLink:"/api/ffa/players",pageCounter:1,gameData:{},playersData:{}}},methods:{async sendRequest(n){try{let a=await fetch(n),l=await a.json();return l}catch(a){console.error(a)}},async getFfa(){this.gameData=await this.sendRequest(this.ffaLink)},async getPlayers(){this.playersData=await this.sendRequest(this.playersLink)}},beforeMount(){this.getFfa(),this.getPlayers()},components:{pagination:Gn}};const Rn=(0,jn.Z)(Fn,[["render",ln]]);var En=Rn,Vn=l(1120),Wn=l.n(Vn);(0,e.ri)(En).use(Wn()).mount("#app")},1120:function(){}},a={};function l(e){var s=a[e];if(void 0!==s)return s.exports;var t=a[e]={exports:{}};return n[e](t,t.exports,l),t.exports}l.m=n,function(){var n=[];l.O=function(a,e,s,t){if(!e){var i=1/0;for(c=0;c<n.length;c++){e=n[c][0],s=n[c][1],t=n[c][2];for(var r=!0,o=0;o<e.length;o++)(!1&t||i>=t)&&Object.keys(l.O).every((function(n){return l.O[n](e[o])}))?e.splice(o--,1):(r=!1,t<i&&(i=t));if(r){n.splice(c--,1);var u=s();void 0!==u&&(a=u)}}return a}t=t||0;for(var c=n.length;c>0&&n[c-1][2]>t;c--)n[c]=n[c-1];n[c]=[e,s,t]}}(),function(){l.n=function(n){var a=n&&n.__esModule?function(){return n["default"]}:function(){return n};return l.d(a,{a:a}),a}}(),function(){l.d=function(n,a){for(var e in a)l.o(a,e)&&!l.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:a[e]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){l.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)}}(),function(){var n={143:0};l.O.j=function(a){return 0===n[a]};var a=function(a,e){var s,t,i=e[0],r=e[1],o=e[2],u=0;if(i.some((function(a){return 0!==n[a]}))){for(s in r)l.o(r,s)&&(l.m[s]=r[s]);if(o)var c=o(l)}for(a&&a(e);u<i.length;u++)t=i[u],l.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return l.O(c)},e=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=l.O(void 0,[998],(function(){return l(3270)}));e=l.O(e)})();
//# sourceMappingURL=app.9c16f91a.js.map