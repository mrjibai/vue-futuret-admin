import{d as B,D,P as E,H as I,R as U,G as W,u as q,C as A,ab as F,l as j,c as b,z as G,r as i,o,a as u,f as r,w as s,h as _,F as d,b as S,e as y,t as f,a1 as R,g as x,i as c,n as H,j as O,s as J}from"./index-6ed7d116.js";import{i as Q}from"./IsPcMobile-9614ff5a.js";const X={class:"navTabar"},Y=B({__name:"index",setup(Z){const T=D(),{ThemeConfig:h,isMobileNav:v}=E(T),p=I(),P=U();W();const M=q(),l=A({selectedKeys:[p.fullPath],openKeys:[],preOpenKeys:["sub1"],clientWidth:0});F(()=>p.fullPath,t=>{l.selectedKeys=[p.fullPath]}),j();const g=Q(),N=b(()=>{if(g.isAndroid||g.isPhone)if(v.value){const t=document.createElement("div");t.setAttribute("class","future-mode-masking");const e=document.querySelector(".MainPage");return e==null||e.appendChild(t),t.addEventListener("click",()=>{k()}),["wangwangSide"]}else return k(),["future-mode"];else return["wangwangSide"]}),k=()=>{const t=document.querySelector(".future-mode-masking");setTimeout(()=>{var e;(e=t==null?void 0:t.parentNode)==null||e.removeChild(t)},300),v.value=!1};G(()=>{let t=p.fullPath.split("/").map(e=>{if(e&&e!=="")return"/"+e});l.openKeys=t.map(e=>e),window.addEventListener("resize",e=>{l.clientWidth=document.body.clientWidth})});const w=t=>{M.push(t)},V=b(()=>P.routesList);return(t,e)=>{const m=i("SvgIcon"),C=i("a-menu-item"),$=i("navTabar_chilren"),K=i("a-sub-menu"),z=i("a-menu"),L=i("a-layout-sider");return o(),u(d,null,[r(L,{width:"240px",collapsed:c(h).collapsed,"onUpdate:collapsed":e[2]||(e[2]=n=>c(h).collapsed=n),class:H(c(N))},{default:s(()=>[_("div",X,[r(z,{openKeys:l.openKeys,"onUpdate:openKeys":e[0]||(e[0]=n=>l.openKeys=n),style:{height:"100vh"},mode:"inline",selectedKeys:l.selectedKeys,"onUpdate:selectedKeys":e[1]||(e[1]=n=>l.selectedKeys=n)},{default:s(()=>[(o(!0),u(d,null,S(c(V),n=>(o(),u(d,{key:n.path},[n.children?R("",!0):(o(),y(C,{onClick:a=>w(n.path),key:n.path},{icon:s(()=>[r(m,{name:n.meta.icon},null,8,["name"])]),default:s(()=>[_("span",null,f(t.$t(n.meta.title)),1)]),_:2},1032,["onClick"])),n.children?(o(),y(K,{key:n.path},{icon:s(()=>[r(m,{name:n.meta.icon},null,8,["name"])]),title:s(()=>[x(f(t.$t(n.meta.title)),1)]),default:s(()=>[(o(!0),u(d,null,S(n.children,a=>(o(),u(d,{key:a.path},[a.children?(o(),y(K,{key:a.path},{icon:s(()=>[r(m,{name:a.meta.icon},null,8,["name"])]),title:s(()=>[x(f(t.$t(a.meta.title)),1)]),default:s(()=>[r($,{RouterChildren:a.children},null,8,["RouterChildren"])]),_:2},1024)):(o(),y(C,{onClick:ee=>w(a.path),key:a.path},{icon:s(()=>[r(m,{name:a.meta.icon},null,8,["name"])]),default:s(()=>[_("span",null,f(t.$t(a.meta.title)),1)]),_:2},1032,["onClick"]))],64))),128))]),_:2},1024)):R("",!0)],64))),128))]),_:1},8,["openKeys","selectedKeys"])])]),_:1},8,["collapsed","class"]),_("div",{style:O(c(h).collapsed?"width: 80px;":"width:240px"),class:"Thuans"},null,4)],64)}}});const se=J(Y,[["__scopeId","data-v-ef168649"]]);export{se as default};