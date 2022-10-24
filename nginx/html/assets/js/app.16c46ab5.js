(function(){var t={3050:function(t,a,e){"use strict";var l=e(9242),s=e(3396);function n(t,a,e,l,n,i){const r=(0,s.up)("Header"),o=(0,s.up)("Logs"),c=(0,s.up)("Index"),u=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r,{gameData:n.gameData,state:n.state,onClick:i.changeView},null,8,["gameData","state","onClick"]),(0,s._)("main",null,["frags"===n.state?((0,s.wg)(),(0,s.j4)(o,{key:0,onClick:i.controlsHandler,state:n.state,logs:n.logs,logsPage:n.logsPage},null,8,["onClick","state","logs","logsPage"])):(0,s.kq)("",!0),"information"===n.state?((0,s.wg)(),(0,s.j4)(c,{key:1,gameData:n.gameData,playersData:n.playersData},null,8,["gameData","playersData"])):(0,s.kq)("",!0),"information"===n.state?((0,s.wg)(),(0,s.j4)(u,{key:2})):(0,s.kq)("",!0)])],64)}var i=e(7139);const r={class:"container"},o={class:"total"},c=(0,s._)("span",{class:"title-mini"},"total games:",-1),u=(0,s._)("span",{class:"title-mini"},"duration:",-1),d={class:"winners"},g=(0,s._)("span",{class:"title-mini"},"wins: ",-1),p={class:"winner"},h={class:"button"},w={class:"stateBtn"};function m(t,a,e,l,n,m){return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("div",r,[(0,s._)("section",o,[(0,s._)("div",null,[c,(0,s.Uk)(" "+(0,i.zw)(e.gameData.total_games),1)]),(0,s._)("div",null,[u,(0,s.Uk)(" "+(0,i.zw)(e.gameData.duration),1)])]),(0,s._)("section",d,[g,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.gameData.winners,(t=>((0,s.wg)(),(0,s.iD)("div",p,(0,i.zw)(t.name)+": "+(0,i.zw)(t.wins),1)))),256))]),(0,s._)("section",h,[(0,s._)("button",w,(0,i.zw)("frags"===e.state?"INFORMATION":"FRAGS"),1)])])])}var _={props:{gameData:{type:Object,required:!0},state:{type:String,required:!0}}},f=e(89);const k=(0,f.Z)(_,[["render",m]]);var v=k;const D={class:"maps"},b=(0,s._)("h2",null,"Maps",-1),y={class:"container"},z={class:"map"},L={class:"players"},C=(0,s._)("h2",null,"Players",-1),H={class:"container"},U={class:"player"},P={class:"player_main"},q=(0,s._)("span",null,"Games:",-1),S=(0,s._)("span",null,"Score:",-1),A=(0,s._)("span",null,"Kills:",-1),j=(0,s._)("span",null,"Deaths:",-1),Y={class:"player_details"},x={class:"details_content"},K={class:"details"},O=(0,s._)("span",null,"Armor total:",-1),Z=(0,s._)("span",null,"Health total:",-1),M=(0,s._)("span",null,"Damage given:",-1),E=(0,s._)("span",null,"Damage taken:",-1),$=(0,s._)("span",null,"Suicides:",-1),T=(0,s._)("span",null,"Telefrags:",-1),F={class:"powerups"},R=(0,s._)("p",{class:"subtitle"},"Powerups:",-1),G={class:"wrapper"},B={class:"powerup"},I=["src","alt"],V=(0,s._)("span",null,"Pickups:",-1),W=(0,s._)("span",null,"Time (min.):",-1),N={class:"items"},J=(0,s._)("p",{class:"subtitle"},"Items:",-1),Q={class:"wrapper"},X={class:"item"},tt=["src","alt"],at=(0,s._)("span",null,"Pickups:",-1),et={class:"weapons"},lt=(0,s._)("p",{class:"subtitle"},"Weapons:",-1),st={class:"wrapper"},nt={class:"weapon"},it=["src","alt"],rt=(0,s._)("span",null,"Hits:",-1),ot=(0,s._)("span",null,"Shots:",-1),ct=(0,s._)("span",null,"Kills:",-1);function ut(t,a,e,l,n,r){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("section",D,[b,(0,s._)("div",y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.gameData.maps,(t=>((0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("h3",null,(0,i.zw)(t.name),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.winners,(t=>((0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("span",null,(0,i.zw)(t.name)+":",1),(0,s.Uk)(" "+(0,i.zw)(t.wins),1)])))),256))])))),256))])]),(0,s._)("section",L,[C,(0,s._)("div",H,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.playersData,(t=>((0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("div",null,[(0,s._)("h3",null,(0,i.zw)(t.name),1),(0,s._)("div",P,[(0,s._)("p",null,[q,(0,s.Uk)(" "+(0,i.zw)(t.games),1)]),(0,s._)("p",null,[S,(0,s.Uk)(" "+(0,i.zw)(t.score),1)]),(0,s._)("p",null,[A,(0,s.Uk)(" "+(0,i.zw)(t.kills),1)]),(0,s._)("p",null,[j,(0,s.Uk)(" "+(0,i.zw)(t.deaths),1)])]),(0,s._)("div",Y,[(0,s._)("div",x,[(0,s._)("div",K,[(0,s._)("p",null,[O,(0,s.Uk)(" "+(0,i.zw)(t.armor_total.toLocaleString().replace(/\,/g," ")),1)]),(0,s._)("p",null,[Z,(0,s.Uk)(" "+(0,i.zw)(t.health_total.toLocaleString().replace(/\,/g," ")),1)]),(0,s._)("p",null,[M,(0,s.Uk)(" "+(0,i.zw)(t.damage_given.toLocaleString().replace(/\,/g," ")),1)]),(0,s._)("p",null,[E,(0,s.Uk)(" "+(0,i.zw)(t.damage_taken.toLocaleString().replace(/\,/g," ")),1)]),(0,s._)("p",null,[$,(0,s.Uk)(" "+(0,i.zw)(t.suicides),1)]),(0,s._)("p",null,[T,(0,s.Uk)(" "+(0,i.zw)(t.score-t.kills+t.suicides),1)])]),(0,s._)("div",F,[R,(0,s._)("div",G,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.powerups,(t=>((0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("div",null,[(0,s._)("img",{src:`./images/items/${t.name.toLowerCase()}.png`,alt:t.name},null,8,I),(0,s._)("p",null,[V,(0,s.Uk)(" "+(0,i.zw)(t.pickups),1)]),(0,s._)("p",null,[W,(0,s.Uk)(" "+(0,i.zw)(Math.floor(t.time/6e4)),1)])])])))),256))])]),(0,s._)("div",N,[J,(0,s._)("div",Q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.items,(t=>((0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("div",null,[(0,s._)("img",{src:`./images/items/${t.name.toLowerCase()}.png`,alt:t.name},null,8,tt),(0,s._)("p",null,[at,(0,s.Uk)(" "+(0,i.zw)(t.pickups),1)])])])))),256))])]),(0,s._)("div",et,[lt,(0,s._)("div",st,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.weapons,(t=>((0,s.wg)(),(0,s.iD)("div",nt,[(0,s._)("div",null,[(0,s._)("img",{src:`./images/items/${t.name.toLowerCase()}1.png`,alt:t.name},null,8,it),(0,s._)("p",null,[rt,(0,s.Uk)(" "+(0,i.zw)(t.hits),1)]),(0,s._)("p",null,[ot,(0,s.Uk)(" "+(0,i.zw)(t.shots),1)]),(0,s._)("p",null,[ct,(0,s.Uk)(" "+(0,i.zw)(t.kills),1)])])])))),256))])])])])])])))),256))])])],64)}var dt={props:{gameData:{type:Object},playersData:{type:Object}}};const gt=(0,f.Z)(dt,[["render",ut]]);var pt=gt;const ht={class:"daydata"},wt=(0,s._)("h2",null,"Games",-1),mt={class:"container"},_t={class:"game"},ft={class:"game-description"},kt=(0,s._)("span",null,"type: ",-1),vt=(0,s._)("span",null,"duration: ",-1),Dt=(0,s._)("span",null,"date: ",-1),bt={class:"game-container"},yt={class:"player"},zt={class:"player-description"},Lt=(0,s._)("span",null,"score: ",-1),Ct=(0,s._)("span",null,"kills: ",-1),Ht=(0,s._)("span",null,"deaths: ",-1),Ut=(0,s._)("span",null,"suicides: ",-1),Pt=(0,s._)("span",null,"damage given: ",-1),qt=(0,s._)("span",null,"damage taken: ",-1),St=(0,s._)("span",null,"health total: ",-1),At=(0,s._)("span",null,"armor total: ",-1),jt={class:"player-weapons"},Yt={class:"weapon-container"},xt=["src","alt"],Kt={class:"player-items"},Ot={class:"item-container"},Zt=["src","alt"],Mt={class:"player-powerups"},Et={class:"powerup-container"},$t=["src","alt"];function Tt(t,a,e,l,n,r){const o=(0,s.up)("Spinner");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("section",ht,[wt,(0,s._)("div",mt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.dayData,(t=>((0,s.wg)(),(0,s.iD)("div",_t,[(0,s._)("h3",null,(0,i.zw)(t.map),1),(0,s._)("div",ft,[(0,s._)("p",null,[kt,(0,s.Uk)((0,i.zw)(t.type),1)]),(0,s._)("p",null,[vt,(0,s.Uk)((0,i.zw)(Math.floor(t.duration/60))+" min. ",1)]),(0,s._)("p",null,[Dt,(0,s.Uk)((0,i.zw)(t.datetime),1)])]),(0,s._)("div",bt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.players,(t=>((0,s.wg)(),(0,s.iD)("div",yt,[(0,s._)("h5",null,(0,i.zw)(t.name),1),(0,s._)("div",zt,[(0,s._)("p",null,[Lt,(0,s.Uk)((0,i.zw)(t.score),1)]),(0,s._)("p",null,[Ct,(0,s.Uk)((0,i.zw)(t.kills),1)]),(0,s._)("p",null,[Ht,(0,s.Uk)((0,i.zw)(t.deaths),1)]),(0,s._)("p",null,[Ut,(0,s.Uk)((0,i.zw)(t.suicides),1)]),(0,s._)("p",null,[Pt,(0,s.Uk)((0,i.zw)(t.damage_given),1)]),(0,s._)("p",null,[qt,(0,s.Uk)((0,i.zw)(t.damage_taken),1)]),(0,s._)("p",null,[St,(0,s.Uk)((0,i.zw)(t.health_total),1)]),(0,s._)("p",null,[At,(0,s.Uk)((0,i.zw)(t.armor_total),1)])]),(0,s._)("div",jt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.weapons,(t=>((0,s.wg)(),(0,s.iD)("div",Yt,[(0,s._)("img",{src:`/images/items/${t.name.toLowerCase()}1.png`,alt:`${t.name}.png`},null,8,xt),(0,s._)("p",null,(0,i.zw)(t.kills)+" / ",1),(0,s._)("p",null,(0,i.zw)(t.hits)+" / ",1),(0,s._)("p",null,(0,i.zw)(t.shots),1)])))),256))]),(0,s._)("div",Kt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.items,(t=>((0,s.wg)(),(0,s.iD)("div",Ot,[(0,s._)("img",{src:`/images/items/${t.name.toLowerCase()}.png`,alt:`${t.name}.png`},null,8,Zt),(0,s._)("p",null,(0,i.zw)(t.pickups),1)])))),256))]),(0,s._)("div",Mt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.powerups,(t=>((0,s.wg)(),(0,s.iD)("div",Et,[(0,s._)("img",{src:`/images/items/${t.name.toLowerCase()}.png`,alt:`${t.name}.png`},null,8,$t),(0,s._)("p",null,(0,i.zw)(Math.floor(t.time/1e3))+"s ("+(0,i.zw)(t.pickups)+") ",1)])))),256))])])))),256))])])))),256))])]),(0,s.Wm)(o)],64)}e(7658);const Ft={class:"spinner-container"},Rt=(0,s._)("svg",{class:"spinner",viewBox:"0 0 256 256",id:"Flat",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{d:"M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25488,62.74512a11.96308,11.96308,0,0,0,8.48535-3.51465l22.627-22.62695a12.0001,12.0001,0,0,0-16.97071-16.97071l-22.62695,22.627a12,12,0,0,0,8.48535,20.48535ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.25977,48.76953a12.0001,12.0001,0,0,0-16.9707,16.9707l22.62695,22.627a12.0001,12.0001,0,0,0,16.97071-16.97071ZM128,180a12.0006,12.0006,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12.0006,12.0006,0,0,0,128,180ZM74.25977,164.76953l-22.627,22.62695a12.0001,12.0001,0,0,0,16.97071,16.97071l22.62695-22.627a12.0001,12.0001,0,0,0-16.9707-16.9707ZM76,128a12.0006,12.0006,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12.0006,12.0006,0,0,0,76,128ZM68.60352,51.63281A12.0001,12.0001,0,0,0,51.63281,68.60352l22.627,22.62695a12.0001,12.0001,0,0,0,16.9707-16.9707Z",style:{"paint-order":"stroke","fill-rule":"nonzero",fill:"rgb(118, 120, 124)"}})],-1),Gt=[Rt];function Bt(t,a,e,l,n,i){return(0,s.wg)(),(0,s.iD)("div",Ft,Gt)}var It={};const Vt=(0,f.Z)(It,[["render",Bt]]);var Wt=Vt,Nt={data(){return{dayData:[],counterPage:1}},methods:{scrollingData(){let t=document.documentElement.getBoundingClientRect().bottom,a=100;window.screen.width<900&&(a=250),t<document.documentElement.clientHeight+a&&(this.counterPage++,this.getGameData(this.counterPage))},async getGameData(t){try{let a=await fetch(`/api/ffa/matches?page=${t}&perpage=6`),e=await a.json();for(let t of e)this.dayData.push(t);document.querySelector(".spinner").classList.add("hidden")}catch(a){console.error(a)}},debounce(t,a){let e;return function(...l){return document.querySelector(".spinner").classList.remove("hidden"),clearTimeout(e),new Promise((s=>{e=setTimeout((()=>s(t(...l))),a)}))}}},beforeMount(){this.getGameData(1)},mounted(){window.onscroll=this.debounce(this.scrollingData,300)},beforeUnmount(){window.onscroll=null},components:{Spinner:Wt}};const Jt=(0,f.Z)(Nt,[["render",Tt]]);var Qt=Jt;const Xt={class:"logs"},ta=(0,s._)("h2",null,"FRAGS",-1),aa={class:"container"},ea={class:"tables"},la={class:"table"},sa={class:"tbox"},na=["data-id"],ia={class:"date"},ra={class:"row"},oa={class:"center"},ca={class:"row"},ua={class:"center"};function da(t,a,e,l,n,r){const o=(0,s.up)("Chart"),c=(0,s.up)("Controls");return(0,s.wg)(),(0,s.iD)("section",Xt,[ta,(0,s._)("div",aa,[(0,s._)("div",ea,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tableLogs,(t=>((0,s.wg)(),(0,s.iD)("div",la,[n.id===t.id?((0,s.wg)(),(0,s.j4)(o,{key:0,logs:e.logs,id:t.id},null,8,["logs","id"])):(0,s.kq)("",!0),(0,s._)("div",sa,[(0,s._)("table",{onClick:a[0]||(a[0]=(...t)=>r.clickHandler&&r.clickHandler(...t)),"data-id":t.id},[(0,s._)("div",ia,(0,i.zw)(t.date.replace(/[A-Z]|\.\d+/gm," ")),1),(0,s._)("tbody",null,[(0,s._)("tr",ra,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.kills,((t,a)=>((0,s.wg)(),(0,s.iD)("td",oa,(0,i.zw)(a),1)))),256))]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.kills,((t,a,e)=>((0,s.wg)(),(0,s.iD)("tr",ca,[(0,s._)("td",null,(0,i.zw)(a),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t,(t=>((0,s.wg)(),(0,s.iD)("td",ua,(0,i.zw)(t),1)))),256))])))),256))])],8,na)]),(0,s._)("div",{class:(0,i.C_)(n.id===t.id?"border":"")},null,2)])))),256))])]),"frags"===e.state?((0,s.wg)(),(0,s.j4)(c,{key:0})):(0,s.kq)("",!0)])}const ga={class:"empty",ref:"chart"},pa={class:"charts"};function ha(t,a,e,l,n,i){const r=(0,s.up)("Line");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",ga,null,512),(0,s._)("div",pa,[(0,s.Wm)(r,{"chart-data":n.chartData,"chart-options":n.options},null,8,["chart-data","chart-options"])])],64)}var wa=e(6294),ma=e(741);ma.kL.register(ma.Dx,ma.u,ma.De,ma.ZL,ma.od,ma.jn,ma.uw,ma.f$);var _a={name:"LineChart",components:{Line:wa.x1},props:{logs:{type:Array,required:!0},id:{type:String,required:!0}},data(){return{gamedata:{},datasets:[],chartData:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],datasets:[{label:"My First Dataset",data:[0,20,20,20,70,70,70,20,20,20,0],fill:!1,borderColor:"rgb(75, 192, 192)",backgroundColor:"teal",tension:.15}]},options:{scales:{xAxes:{grid:{borderColor:"#fff",tickColor:"#fff",color:"rgba(255, 255, 255, 0.07)"},ticks:{color:"rgba(255, 255, 255, 0.65)"}},yAxes:{grid:{borderColor:"#fff",tickColor:"#fff",color:"rgba(255, 255, 255, 0.07)"},ticks:{color:"rgba(255, 255, 255, 0.65)"}}}}}},methods:{sortAndAddColor(){this.datasets.sort(((t,a)=>t.data[t.data.length-1]>a.data[a.data.length-1]?-1:1));const t=["#6897bb","#ff4040","#ffff66","#ac7b06","#7b5804","#4a3502","#312302"];this.datasets.forEach(((a,e)=>{t[e]?(a.borderColor=t[e],a.backgroundColor=t[e]):(a.borderColor="#312302",a.backgroundColor="#312302")}))},parseLogData(t){this.chartData.labels=[],this.datasets=[];let a=this.logs.find((a=>a.id===t));const e=a.kills;for(let l=0;l<e.length;l++){this.chartData.labels.push(l);let t=this.datasets.find((t=>t.label===e[l].killer));t||this.datasets.push({label:e[l].killer,data:[0],tension:.1,pointRadius:1})}for(let l=0;l<e.length;l++)for(let t of this.datasets)t.label===e[l].killer?t.data.push(t.data[t.data.length-1]+1):t.data.push(t.data[t.data.length-1]);this.chartData.labels.push(this.chartData.labels.length),this.chartData.datasets=this.datasets,this.sortAndAddColor()}},watch:{id:{required:!0,handler(){this.parseLogData(this.id)}}},mounted(){this.parseLogData(this.id),this.$refs.chart.scrollIntoView({behavior:"smooth"})}};const fa=(0,f.Z)(_a,[["render",ha]]);var ka=fa;const va={class:"logs-controls"},Da=(0,s._)("button",{class:"back"},"←",-1),ba=(0,s._)("button",{class:"next"},"→",-1),ya=[Da,ba];function za(t,a,e,l,n,i){return(0,s.wg)(),(0,s.iD)("div",va,ya)}var La={};const Ca=(0,f.Z)(La,[["render",za]]);var Ha=Ca,Ua={data(){return{tableLogs:[],counterPage:1,id:""}},props:{state:{type:String,required:!0},logs:{type:Array},logsPage:{type:Number}},components:{Chart:ka,Controls:Ha},methods:{clickHandler(t){this.id!==t.currentTarget.dataset.id?this.id=t.currentTarget.dataset.id:this.id=""},parseLogData(){if(this.logs){this.tableLogs=[];for(let t of this.logs){let a=this.groupBy(t.kills,"killer"),e={},l=new Set;for(let t in a){a[t]=this.isUniq(a[t]),l.add(t);for(let e in a[t])l.add(e)}l.forEach((t=>{if(!(t in a)){let e={};l.forEach((a=>{a!==t&&(e[a]=0)})),a[t]=e,l=Array.from(l)}}));for(let t in a)l.forEach((e=>{e in a[t]||e===t||(a[t][e]=0)}));e.kills=a,e.id=t.id,e.date=t.date;for(let t in e.kills)e.kills[t]=this.sort(e.kills[t]),e.kills=this.sort(e.kills);this.tableLogs.push(e)}}},groupBy(t,a){let e=t.slice(0);return e.sort(((t,a)=>t.killer>a.killer?1:-1)).reduce((function(t,e){return(t[e[a]]=t[e[a]]||[]).push(e.victim),t}),{})},isUniq(t){return t.map((t=>({count:1,name:t}))).reduce(((t,a)=>(t[a.name]=(t[a.name]||0)+a.count,t)),{})},renderTable(){if(document.querySelectorAll("td.empty").forEach((t=>{t.remove()})),!document.querySelector("td.empty")){let t=document.querySelectorAll("table");t.forEach((t=>{let a=0;t.querySelectorAll("tr.row").forEach(((t,e,l)=>{let s=document.createElement("td");s.textContent=" ",s.classList.add("empty"),t.querySelectorAll("td").forEach(((t,n,i)=>{n===a?t.before(s):a===i.length&&e===l.length-1&&t.after(s)})),a++}))}))}},sort(t){return Object.fromEntries(Object.entries(t).sort((([t],[a])=>t<a?-1:1)))},btnDisabler(){1===this.logsPage?document.querySelector("button.back").classList.add("disabled"):document.querySelector("button.back").classList.remove("disabled")}},async beforeMount(){await this.parseLogData(),await this.renderTable()},mounted(){this.btnDisabler()},watch:{logsPage:{handler(){this.btnDisabler()}},logs:{required:!0,async handler(){await this.parseLogData(),await this.renderTable()}}}};const Pa=(0,f.Z)(Ua,[["render",da]]);var qa=Pa,Sa={name:"App",data(){return{ffaLink:"/api/ffa",playersLink:"/api/ffa/players",pageCounter:1,state:"information",gameData:{},playersData:{},logs:[],logsPage:1}},methods:{async sendRequest(t){try{let a=await fetch(t),e=await a.json();return e}catch(a){console.error(a)}},async getLogsData(t){try{let a=await fetch(`/api/ffa/logs?page=${t}&perpage=3`),e=await a.json();this.logs=e}catch(a){console.error(a)}},controlsHandler(t){t.target.classList.contains("back")&&this.logsPage>1?(--this.logsPage,this.getLogsData(this.logsPage)):t.target.classList.contains("next")&&(++this.logsPage,this.getLogsData(this.logsPage))},async getFfa(){this.gameData=await this.sendRequest(this.ffaLink)},async getPlayers(){this.playersData=await this.sendRequest(this.playersLink)},changeView(t){t.target.classList.contains("stateBtn")&&(this.state=t.target.textContent.toLowerCase())}},beforeMount(){this.getFfa(),this.getPlayers(),this.getLogsData(this.logsPage)},components:{Pagination:Qt,Logs:qa,Index:pt,Header:v}};const Aa=(0,f.Z)(Sa,[["render",n]]);var ja=Aa,Ya=e(1120),xa=e.n(Ya);(0,l.ri)(ja).use(xa()).mount("#app")},1120:function(){}},a={};function e(l){var s=a[l];if(void 0!==s)return s.exports;var n=a[l]={exports:{}};return t[l](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(a,l,s,n){if(!l){var i=1/0;for(u=0;u<t.length;u++){l=t[u][0],s=t[u][1],n=t[u][2];for(var r=!0,o=0;o<l.length;o++)(!1&n||i>=n)&&Object.keys(e.O).every((function(t){return e.O[t](l[o])}))?l.splice(o--,1):(r=!1,n<i&&(i=n));if(r){t.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[l,s,n]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,l){var s,n,i=l[0],r=l[1],o=l[2],c=0;if(i.some((function(a){return 0!==t[a]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(o)var u=o(e)}for(a&&a(l);c<i.length;c++)n=i[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},l=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=e.O(void 0,[998],(function(){return e(3050)}));l=e.O(l)})();
//# sourceMappingURL=app.16c46ab5.js.map