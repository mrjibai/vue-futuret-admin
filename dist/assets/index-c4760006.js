import{d as L,l as p,C as I,z as M,$ as W,r as k,o as l,a as s,f as g,w as y,a0 as $,i as F,a1 as T,F as m,b as S,h as t,t as i,n as A,j as D,e as O,g as B,p as U,q as H,s as P}from"./index-6ed7d116.js";import{f as G}from"./index-23cadc71.js";const J={filter_tools:{authority:{title:"权限",list:[{title:"全部",checked:!0},{title:"普通用户"},{title:"管理员"}]},layout:{title:"布局",list:[{title:"全部",checked:!0},{title:"默认"},{title:"经典"},{title:"横向"},{title:"分栏"}]},config:{title:"配置",list:[{title:"全部",checked:!0},{title:"开启 Breadcrumb"},{title:"开启 Tags-View"},{title:"固定 Header"},{title:"侧边栏 Logo"},{title:"开启折叠 NavMenu"},{title:"开启一个 NavMenu 展开"},{title:"登录用户头像"}]}}},h=v=>(U("data-v-18ccffa5"),v=v(),H(),v),K={key:0,class:"mask-box"},Q={class:"title"},R={class:"filter-tools-list"},X=["onClick"],Y={key:0,class:"collapse-more"},Z=["onClick"],ee=h(()=>t("span",null,"展开",-1)),te=h(()=>t("i",null,null,-1)),le=[ee,te],se=["onClick"],oe=h(()=>t("span",null,"收起",-1)),ae=h(()=>t("i",null,null,-1)),ne=[oe,ae],ce={class:"content"},ie={class:"img-box"},re=["src"],de={class:"contents"},_e={class:"title"},ue={class:"footer"},fe={class:"desc gray-font"},pe={class:"price-desc"},he={class:"price"},ve=h(()=>t("span",{class:"price-icon"},"￥",-1)),ke={class:"price-money"},ge={class:"sale-count gray-font"},ye={class:"filter-pager"},Ce=L({name:"Filter_element"}),we=L({...Ce,setup(v){let C=p(!1),u=p(null);const f=p(Object.values(J.filter_tools)),j=(a,o,r)=>{if(a.list.map(c=>{c.checked=!1}),o.checked=!0,u.value){clearTimeout(u.value),u.value=null;return}C.value=!0,u.value=setTimeout(()=>{C.value=!1,u.value=null},500)},N=(a,o)=>{a.collapse=o},b=p(1),q=a=>{console.log("Page: ",a)};let E=I([]),w=p(null);M(()=>{z()}),W(()=>{window.removeEventListener("resize",x)});const x=()=>{let o=w.value.querySelector(".filter-tools-list").offsetWidth;E.forEach((r,c)=>{Math.ceil(o)<=r?Object.keys(f.value).forEach((n,d)=>{d===c&&(f.value[n].isShowCollapse=!0)}):Object.keys(f.value).forEach((n,d)=>{f.value[n].isShowCollapse=!1})})},z=()=>{w.value.querySelectorAll(".filter-tools-list").forEach(r=>{let c=r.querySelectorAll(".filter-tools-item"),n=0;c.forEach(d=>{n+=d.offsetWidth}),E.push(n)}),x(),window.addEventListener("resize",x)};return(a,o)=>{const r=k("a-col"),c=k("a-row"),n=k("a-pagination"),d=k("a-card");return l(),s("div",{class:"Filter_element",ref_key:"Filter_element",ref:w},[g(d,{hoverable:""},{default:y(()=>[g($,{name:"fade"},{default:y(()=>[F(C)?(l(),s("div",K)):T("",!0)]),_:1}),(l(!0),s(m,null,S(f.value,e=>(l(),s("div",{class:"filter-tools",key:e.title},[t("div",{class:"filter-tools-flex",style:D({height:e!=null&&e.collapse?"auto":"50px"})},[t("div",Q,i(e.title),1),t("div",R,[(l(!0),s(m,null,S(e.list,(_,V)=>(l(),s("div",{class:A(["filter-tools-item",_.checked?"active-color":""]),onClick:xe=>j(e,_,V),key:_.title},i(_.title),11,X))),128)),e!=null&&e.isShowCollapse?(l(),s("div",Y,[e!=null&&e.collapse?(l(),s("div",{key:1,class:"up",onClick:_=>N(e,!(e!=null&&e.collapse))},ne,8,se)):(l(),s("div",{key:0,class:"down",onClick:_=>N(e,!(e!=null&&e.collapse))},le,8,Z))])):T("",!0)])],4)]))),128)),g(c,{gutter:20},{default:y(()=>[(l(!0),s(m,null,S(F(G),e=>(l(),O(r,{xl:6,lg:8,sm:12,sx:24,class:"content-item",key:e.title},{default:y(()=>[t("div",ce,[t("div",ie,[t("img",{src:e.img,alt:""},null,8,re)]),t("div",de,[t("div",_e,i(e.title),1),t("div",ue,[t("div",fe,[t("span",null,"评论 "+i(e.commentNum),1),t("span",null,"收藏 "+i(e.collectNum),1)]),t("div",pe,[t("div",he,[ve,t("span",ke,i(e.price),1)]),t("div",ge,[B("月销"),t("span",null,i(e.salesNum),1),B("笔")])])])])])]),_:2},1024))),128))]),_:1}),t("div",ye,[g(n,{current:b.value,"onUpdate:current":o[0]||(o[0]=e=>b.value=e),"show-quick-jumper":"",total:500,onChange:q},null,8,["current"])])]),_:1})],512)}}});const Ne=P(we,[["__scopeId","data-v-18ccffa5"]]);export{Ne as default};