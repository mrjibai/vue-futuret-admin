import{d as _,H as v,r as c,o as b,a as h,f as o,w as t,h as w,i as e,K as n,g as s,M as l,N as V,s as B}from"./index-6ed7d116.js";import{U as N,R}from"./useState-9fc66d8b.js";const S={class:"anniu"},O=_({name:"tagsView"}),U=_({...O,setup($){const i=v(),p="tagsView支持多标签（参数不同），单标签共用（参数不同）",d={backgroundColor:"var(--wang-bgcolor)",border:"1px solid var(--wangwang-border)",color:"var(--wang-text-color)"},{reloads:u,RSclose:f,removes:m,clears:g,fullscreen:C}=N();return(E,r)=>{const y=c("a-alert"),a=c("a-button"),x=c("a-card");return b(),h("div",null,[o(y,{message:p,type:"success",style:{margin:"10px 0"}}),o(x,{title:"tagsView操作",bordered:!1,bodyStyle:d,headStyle:d},{extra:t(()=>[]),default:t(()=>[w("div",S,[o(a,{type:"primary",onClick:e(u),icon:n(e(R))},{default:t(()=>[s(" 刷新当前页 ")]),_:1},8,["onClick","icon"]),o(a,{type:"primary",onClick:r[0]||(r[0]=k=>e(f)({path:e(i).path,children:[]})),icon:n(e(l)),ghost:""},{default:t(()=>[s(" 关闭当前页 ")]),_:1},8,["icon"]),o(a,{type:"primary",onClick:r[1]||(r[1]=k=>e(m)({path:e(i).path,children:[]})),icon:n(e(V)),ghost:""},{default:t(()=>[s(" 关闭其他 ")]),_:1},8,["icon"]),o(a,{danger:"",icon:n(e(l)),onClick:e(g)},{default:t(()=>[s(" 全部关闭 ")]),_:1},8,["icon","onClick"]),o(a,{onClick:e(C),style:{"background-color":"red",color:"#fff"},icon:n(e(l))},{default:t(()=>[s(" 当前页全屏 ")]),_:1},8,["onClick","icon"])])]),_:1})])}}});const K=B(U,[["__scopeId","data-v-46a42b14"]]);export{K as default};
