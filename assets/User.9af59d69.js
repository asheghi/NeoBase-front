import{o as n,c as i,a as d,_ as B,m as j,r as p,B as N,p as V,s as D,b as x,h as w,e as g,k as f,F as A,y as F,d as C,g as U,t as b,w as M,v as O}from"./index.3459ee34.js";import{A as E,t as I}from"./api.4a23552d.js";import{N as R}from"./N-Button.3dce5523.js";const m={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},S=d("path",{d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"},null,-1),H=[S];function T(r,c){return n(),i("svg",m,H)}m.width="24";m.height="24";m.viewBox="0 0 24 24";var L={render:T};const Z={name:"User",components:{NButton:R,DeleteIcon:L},beforeRouteUpdate(){this.fetchUser()},emits:["delete"],setup(){const r=j(),c=r.params.project,_=E.Users(c),e=p(),a=N({}),h=p(!1),u=p(!1),l=async()=>{h.value=!0;let t={};try{const s=r.params.uid,y=await _.fetchUser(s);t=y.data,e.value=y.data}catch(s){console.error(s)}finally{h.value=!1}Object.keys(t).filter(s=>!["_id","createdAt","updatedAt","createdBy"].includes(s)).forEach(s=>{a[s]=t[s]}),"role"in a||(a.role=null)},o=V(()=>Object.keys(a).find(t=>{var s;return((s=e.value)==null?void 0:s[t])!=a[t]})),v=async()=>{if(!!o.value)try{u.value=!0,await _.updateUser(e.value._id,a),await l(),I("Updated User")}catch(t){console.error(t)}finally{u.value=!1}},k=()=>{Object.keys(a).forEach(t=>{a[t]=e.value[t]})};return D(()=>{l()}),{project:c,api:_,fetchUser:l,user:e,form:a,formChanged:o,resetForm:k,fetching:h,updateUser:v,loading:u}},watch:{"$route.params.project":{handler(r,c){r&&this.$router.push({name:"auth",params:{project:r}})}}}},q={class:"User"},z={class:"card"},G={class:"header flex items-center"},J=U(" User "),K=d("span",{class:"ml-auto"},null,-1),P={key:0,class:"form"},Q=["for","textContent"],W=["id","onUpdate:modelValue","disabled"],X={class:"flex gap-2 justify-end"},Y=U(" Reset Changes "),$={key:1,class:"skeloading"};function ee(r,c,_,e,a,h){const u=x("DeleteIcon"),l=x("NButton");return n(),i("div",q,[d("div",z,[d("div",G,[J,K,e.user?(n(),w(l,{key:0,onClick:c[0]||(c[0]=o=>r.$emit("delete",e.user))},{default:g(()=>[C(u)]),_:1})):f("",!0)]),e.fetching?f("",!0):(n(),i("div",P,[(n(!0),i(A,null,F(Object.keys(e.form),o=>(n(),i("div",{key:o,class:"form-group"},[d("label",{for:o,textContent:b(o)},null,8,Q),M(d("input",{id:o,"onUpdate:modelValue":v=>e.form[o]=v,disabled:e.loading,type:"text"},null,8,W),[[O,e.form[o]]])]))),128)),d("div",X,[e.formChanged?(n(),w(l,{key:0,class:"text-gray-500",onClick:e.resetForm},{default:g(()=>[Y]),_:1},8,["onClick"])):f("",!0),C(l,{loading:e.loading,disabled:!e.formChanged,class:"primary",onClick:e.updateUser},{default:g(()=>[U(b(e.loading?"Saving":"Save"),1)]),_:1},8,["loading","disabled","onClick"])])])),e.fetching?(n(),i("div",$)):f("",!0)])])}var oe=B(Z,[["render",ee]]);export{oe as default};