import{r as b}from"./index-23cadc71.js";import{d as M,R as Q,C as S,l as R,r as n,o as W,a as X,h as k,f as e,w as t,g as r,t as V,F as Y,s as Z}from"./index-6ed7d116.js";const ee={class:"role"},te={class:"sercarINput"},oe={class:"dialog-footer"},le=M({__name:"index",setup(ae){Q();const x=S({filterName:""}),C=()=>{v.value=!0,setTimeout(()=>{d()},1e3)},N=[{label:"系统管理",value:"admin"},{label:"权限管理",value:"common"}],c=R(!1),l=S({id:0,roleName:"",roleIdentification:"",sort:1,roleState:"",roleDescription:"",roles:[],createTime:new Date().toDateString()}),h=i=>{l.id=i.id,l.roleName=i.roleName.toString(),l.roleIdentification=i.roleIdentification,l.sort=parseInt(i.sort.toString()),l.roleState=i.roleState,l.roleDescription=i.roleDescription,l.roles=Array(i.roles),l.createTime=i.createTime,c.value=!0,m.Tips="修改角色"},m=S({RoleRouterList:[],Tips:"添加角色"}),v=R(!1),d=()=>{v.value=!1,m.RoleRouterList=b};d();const T=()=>{c.value=!1;for(const i in l)l[i]="";l.roles=[],l.sort=1},w=()=>{v.value=!0,c.value=!1,setTimeout(()=>{d()},1e3)},D=i=>{v.value=!0,setTimeout(()=>{d()},1e3)},s=S({currentPage:1,total:b.length,pageSize:10}),I=i=>{s.pageSize=i,b.slice((s.currentPage-1)*s.pageSize,s.pageSize),d()},U=i=>{s.currentPage=i,b.slice((s.currentPage-1)*s.pageSize,s.pageSize),d()},P=()=>{c.value=!0,m.Tips="新增部门"};return(i,a)=>{const g=n("a-input"),p=n("a-button"),$=n("vxe-toolbar"),u=n("vxe-column"),L=n("a-tag"),B=n("a-popconfirm"),E=n("vxe-table"),j=n("a-spin"),A=n("a-pagination"),_=n("a-form-item"),f=n("a-col"),F=n("a-input-number"),q=n("a-switch"),H=n("a-tooltip"),y=n("a-checkbox"),K=n("a-checkbox-group"),O=n("a-row"),G=n("a-form"),J=n("a-modal");return W(),X(Y,null,[k("div",ee,[e($,null,{buttons:t(()=>[k("div",te,[e(g,{modelValue:x.filterName,"onUpdate:modelValue":a[0]||(a[0]=o=>x.filterName=o),type:"search",placeholder:"请输入角色名称，搜索",onKeyup:C},null,8,["modelValue"]),e(p,{type:"primary",onClick:C},{default:t(()=>[r("查询")]),_:1}),e(p,{onClick:P},{default:t(()=>[r("新增角色")]),_:1})])]),_:1}),e(j,{spinning:v.value},{default:t(()=>[k("div",null,[e(E,{border:"none","show-header-overflow":"","show-overflow":"","row-config":{isHover:!0},data:m.RoleRouterList},{default:t(()=>[e(u,{type:"seq",title:"序号",width:"60"}),e(u,{field:"roleName",title:"角色名称"}),e(u,{field:"roleIdentification",title:"角色标识"}),e(u,{field:"sort",title:"排序"}),e(u,{field:"roleState",title:"角色状态"},{default:t(({row:o})=>[e(L,{title:o.roleState,color:"green"},{default:t(()=>[r(V(o.roleState),1)]),_:2},1032,["title"])]),_:1}),e(u,{field:"roleDescription",title:"角色描述"}),e(u,{field:"createTime",title:"创建时间"},{default:t(({row:o})=>[r(V(o.createTime),1)]),_:1}),e(u,{field:"",title:"操作",width:"220"},{default:t(({row:o})=>[e(p,{type:"link",onClick:z=>h(o)},{default:t(()=>[r("新增")]),_:2},1032,["onClick"]),e(p,{type:"link",onClick:z=>h(o)},{default:t(()=>[r("修改")]),_:2},1032,["onClick"]),e(B,{title:"你确认要删除这条数据吗 ?",onConfirm:z=>D(o),"ok-text":"确认","cancel-text":"取消"},{default:t(()=>[e(p,{type:"link"},{default:t(()=>[r("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])])]),_:1},8,["spinning"]),e(A,{"show-total":o=>`总数 ${o} 条`,onShowSizeChange:I,onChange:U,current:s.currentPage,"onUpdate:current":a[1]||(a[1]=o=>s.currentPage=o),"page-sizes":[10,20,30,40],pageSize:s.pageSize,"onUpdate:pageSize":a[2]||(a[2]=o=>s.pageSize=o),layout:"total, sizes, prev, pager, next, jumper",total:s.total,"show-size-changer":""},null,8,["show-total","current","pageSize","total"])]),e(J,{open:c.value,"onUpdate:open":a[10]||(a[10]=o=>c.value=o),title:m.Tips,afterClose:T},{footer:t(()=>[k("span",oe,[e(p,{onClick:a[9]||(a[9]=o=>c.value=!1)},{default:t(()=>[r("取消")]),_:1}),e(p,{type:"primary",onClick:w},{default:t(()=>[r(" 保存 ")]),_:1})])]),default:t(()=>[e(G,null,{default:t(()=>[e(O,{gutter:20},{default:t(()=>[e(f,{span:12,offset:0},{default:t(()=>[e(_,{label:"角色名称"},{default:t(()=>[e(g,{value:l.roleName,"onUpdate:value":a[3]||(a[3]=o=>l.roleName=o)},null,8,["value"])]),_:1})]),_:1}),e(f,{span:12,offset:0},{default:t(()=>[e(_,{label:"角色标识"},{default:t(()=>[e(g,{value:l.roleIdentification,"onUpdate:value":a[4]||(a[4]=o=>l.roleIdentification=o)},null,8,["value"])]),_:1})]),_:1}),e(f,{span:12,offset:0},{default:t(()=>[e(_,{label:"排序"},{default:t(()=>[e(F,{value:l.sort,"onUpdate:value":a[5]||(a[5]=o=>l.sort=o),min:1,max:10},null,8,["value"])]),_:1})]),_:1}),e(f,{span:12,offset:0},{default:t(()=>[e(_,{label:"角色状态"},{default:t(()=>[e(H,{title:"Switch value: "+l.roleState,placement:"top"},{default:t(()=>[e(q,{checked:l.roleState,"onUpdate:checked":a[6]||(a[6]=o=>l.roleState=o),"active-color":"#13ce66","inactive-color":"#ff4949","checked-children":"启用","un-checked-children":"关闭"},null,8,["checked"])]),_:1},8,["title"])]),_:1})]),_:1}),e(f,{span:24,offset:0},{default:t(()=>[e(_,{label:"角色描述"},{default:t(()=>[e(g,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:l.roleDescription,"onUpdate:modelValue":a[7]||(a[7]=o=>l.roleDescription=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:24,offset:0},{default:t(()=>[e(_,{label:"角色描述"},{default:t(()=>[e(K,{modelValue:l.roles,"onUpdate:modelValue":a[8]||(a[8]=o=>l.roles=o),options:N},{default:t(()=>[e(y,{label:"系统管理",value:"admin"}),e(y,{label:"权限管理",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title"])],64)}}});const se=Z(le,[["__scopeId","data-v-855b10bb"]]);export{se as default};
