import{d as i,C as b,r as t,o as h,e as v,w as o,f as e,i as y,g as c,s as g}from"./index-6ed7d116.js";import{U as x}from"./UserOutlined-57f8404a.js";const w=i({__name:"mobile",setup(C){const a=b({phone:"",authcodes:""}),m=r=>{console.log(r)};return(r,n)=>{const _=t("a-input"),s=t("a-form-item"),p=t("a-col"),u=t("a-button"),d=t("a-row"),f=t("a-form");return h(),v(f,{model:a,name:"basic","label-col":{span:8},"wrapper-col":{span:24},autocomplete:"off",onFinish:m},{default:o(()=>[e(s,{name:"phone",rules:[{required:!0,message:"请输入手机号!"}]},{default:o(()=>[e(_,{value:a.phone,"onUpdate:value":n[0]||(n[0]=l=>a.phone=l),placeholder:"请输入手机号"},{prefix:o(()=>[e(y(x),{style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])]),_:1}),e(d,null,{default:o(()=>[e(p,{span:15},{default:o(()=>[e(s,{name:"authcodes",rules:[{required:!0,message:"请输入验证码!"}]},{default:o(()=>[e(_,{value:a.authcodes,"onUpdate:value":n[1]||(n[1]=l=>a.authcodes=l),placeholder:"请输入验证码"},null,8,["value"])]),_:1})]),_:1}),e(p,{span:8,offset:1},{default:o(()=>[e(s,null,{default:o(()=>[e(u,{type:"primary",ghost:""},{default:o(()=>[c("获取短信验证码")]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{"wrapper-col":{offset:0,span:24}},{default:o(()=>[e(u,{class:"btnsumits",type:"primary","html-type":"submit"},{default:o(()=>[c("登录")]),_:1})]),_:1})]),_:1},8,["model"])}}});const q=g(w,[["__scopeId","data-v-aab6d658"]]);export{q as default};