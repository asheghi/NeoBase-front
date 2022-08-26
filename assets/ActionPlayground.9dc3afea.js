import{b as ne,p as ae,A as W,c as ce}from"./api.4a23552d.js";import{o,c as s,a as t,_ as Z,b as J,y as A,t as _,h as N,k as x,w as le,v as ie,F as O,e as H,g as F,n as V,B as X,r as q,m as re,p as M,q as ue,l as de,s as pe,d as S,u as p,i as _e}from"./index.3459ee34.js";import{J as he}from"./JsonInput.c98109fb.js";import{N as L}from"./N-Button.3dce5523.js";const B={find:{name:"find",url:"documents/:project/:collection/find",method:"post",options:{body:{type:"json",fields:{filter:{type:"json",value:""},projection:{type:"json",optional:!0,value:""},options:{type:"json",optional:!0,fields:{sort:{type:"json",value:""},skip:{type:"integer",value:""},limit:{type:"integer",value:""}}}}}}},findOne:{name:"findOne",url:"documents/:project/:collection/findOne",method:"post",options:{body:{type:"json",fields:{filter:{type:"json",value:""},projection:{type:"json",optional:!0,value:""}}}}},count:{name:"count",url:"documents/:project/:collection/count",method:"post",options:{body:{type:"json",fields:{filter:{type:"json",value:""}}}}},create:{name:"create",url:"documents/:project/:collection/create",method:"post",options:{body:{type:"json",value:""}}},updateOne:{name:"updateOne",url:"documents/:project/:collection/updateOne",method:"post",options:{body:{type:"json",fields:{filter:{type:"json",value:""},update:{type:"json",value:""}}}}},deleteOne:{name:"deleteOne",url:"documents/:project/:collection/deleteOne",method:"post",options:{body:{type:"json"}}},deleteMany:{name:"deleteMany",url:"documents/:project/:collection/deleteMany",method:"post",options:{body:{type:"json"}}},register:{name:"register",url:"auth/:project/register",method:"post",hideAuthToken:!0,options:{body:{type:"json",fields:{email:{type:"string",value:""},password:{type:"string",value:""}}}}},login:{name:"login",url:"auth/:project/login",method:"post",hideAuthToken:!0,options:{body:{type:"json",fields:{email:{type:"string",value:""},password:{type:"string",value:""}}}}},me:{name:"me",url:"auth/:project/me",method:"get",options:{}}},I={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},me=t("path",{d:"M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"},null,-1),ye=[me];function ve(i,a){return o(),s("svg",I,ye)}I.width="24";I.height="24";I.viewBox="0 0 24 24";var fe={render:ve};const P={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},ge=t("path",{d:"M11.83 9 15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8 1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22 21 20.73 3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"},null,-1),xe=[ge];function be(i,a){return o(),s("svg",P,xe)}P.width="24";P.height="24";P.viewBox="0 0 24 24";var we={render:be};const je={name:"ActionOptions",components:{JsonInput:he},props:{options:{type:Object,required:!0},showOptionals:{type:Boolean,default:!1}},emits:["@update:form"],data(){return{t_form:this.form}},methods:{onUpdate(i,a){console.log("updated",i,a)},checkOptional(i){return this.showOptionals?!0:!i.optional}}},ke={key:0,class:"row"},Oe={class:"label flex gap-1 whitespace-nowrap"},$e=["textContent"],Ce=["textContent"],Ae=["onUpdate:modelValue"];function Te(i,a,l,r,u,h){const c=J("JsonInput"),y=J("ActionOptions",!0);return o(!0),s(O,null,A(l.options,(n,k)=>(o(),s("div",{key:k,class:"option"},[!n.fields&&h.checkOptional(n)?(o(),s("div",ke,[t("div",Oe,[t("div",{class:"text",textContent:_(k)},null,8,$e),t("div",{class:"type opacity-50",textContent:_("("+n.type+")")},null,8,Ce)]),n.type==="json"?(o(),N(c,{key:0,class:"input","model-value":n.value,"onUpdate:modelValue":b=>n.value=b},null,8,["model-value","onUpdate:modelValue"])):x("",!0),n.type!=="json"?le((o(),s("input",{key:1,"onUpdate:modelValue":b=>n.value=b,class:"input",type:"text"},null,8,Ae)),[[ie,n.value]]):x("",!0)])):x("",!0),n.fields&&h.checkOptional(n)?(o(),N(y,{key:1,options:n.fields,"show-optionals":l.showOptionals},null,8,["options","show-optionals"])):x("",!0)]))),128)}var qe=Z(je,[["render",Te]]);const Y={response_body:"Response",headers:"Headers"},Me={name:"ExecutionResult",components:{NButton:L},props:{execution:{type:Object,default:()=>({})}},data(){return{tabs:Y,currentTab:Object.values(Y)[0]}}},Se={class:"ExecutionResult max-w-[1200px]"},Be={key:0,class:"loading"},Ne={class:"row"},Ee={class:"tabs"},Ve={class:"ml-auto"},Ie=t("div",{class:""},"status:",-1),Pe={class:""},Re=t("div",null,"time:",-1),De={key:0,class:"body card"},Ue={class:"px-2 overflow-x-auto"},Je={key:1,class:"card overflow-x-auto border border-gray-100 p-2"},He={class:"header-name opacity-50 font-bold"},Le={class:"header-value"};function Ze(i,a,l,r,u,h){const c=J("NButton");return o(),s("div",Se,[l.execution.loading?(o(),s("div",Be,"Loading ...")):x("",!0),!l.execution.loading&&Object.keys(l.execution).length?(o(),s(O,{key:1},[t("div",Ne,[t("div",Ee,[(o(!0),s(O,null,A(u.tabs,(y,n)=>(o(),N(c,{key:n,class:V(["tab",{primary:y===u.currentTab,secondary:y!==u.currentTab}]),onClick:k=>u.currentTab=y},{default:H(()=>[F(_(y),1)]),_:2},1032,["class","onClick"]))),128))]),t("div",Ve,[Ie,t("div",{class:V(["res-code",{"text-red-500":l.execution.status&&l.execution.status>=400}])},_(l.execution.status),3)]),t("div",Pe,[Re,t("div",null,_(l.execution.responseTime)+"ms",1)])]),u.currentTab===u.tabs.response_body?(o(),s("div",De,[t("pre",Ue,[t("code",null,_(JSON.stringify(l.execution.data,null,"	")),1)])])):x("",!0),u.currentTab===u.tabs.headers?(o(),s("div",Je,[(o(!0),s(O,null,A(l.execution.res_headers,(y,n)=>(o(),s("div",{key:n,class:"the-header flex gap-2 py-2"},[t("div",He,_(n)+":",1),t("div",Le,_(y),1)]))),128))])):x("",!0)],64)):x("",!0)])}var Fe=Z(Me,[["render",Ze]]);const R={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},ze=t("path",{d:"M8 5.14v14l11-7-11-7Z"},null,-1),Ge=[ze];function Qe(i,a){return o(),s("svg",R,Ge)}R.width="24";R.height="24";R.viewBox="0 0 24 24";var We={render:Qe};const Xe={name:"PlaygroundActionsMenu",props:{selected:{type:String,required:!1}},emits:["select"],computed:{items(){return Object.keys(B).map(i=>({name:i,...B[i]}))}},methods:{onItemSelected(i){this.$emit("select",i)}}},Ye={class:"PlaygroundActionsMenu"},Ke={class:"side-menu card items"},et=t("div",{class:"header"},"Actions",-1),tt=["onClick"];function ot(i,a,l,r,u,h){return o(),s("div",Ye,[t("div",Ke,[et,(o(!0),s(O,null,A(h.items,c=>(o(),s("button",{key:c.name,class:V(["item",{selected:l.selected===c.name}]),onClick:y=>h.onItemSelected(c.name)},_(c.name),11,tt))),128))])])}var st=Z(Xe,[["render",ot]]);const nt={class:"ActionPlayground"},at={key:0,class:"Playground"},ct={class:"card api"},lt={class:"url pl-4 flex gap-2 items-center"},it={class:"value"},rt={class:"opacity-75 p-1"},ut={class:"py-1 bg-gray-200 dark:bg-gray-600 pr-2 pl-1 -ml-2"},dt=F(" Send "),pt={class:"header flex items-center"},_t=F(" options "),ht=t("span",{class:"ml-auto"},null,-1),mt={class:"options-content px-4 pt-4"},yt={key:0,class:"collection-option grid grid-cols-8 gap-2 mb-2"},vt=t("div",{class:"label"},"collection",-1),ft=["value"],gt=t("option",{value:""},"Select a Collection",-1),xt=["value","textContent"],bt=t("div",{class:"row flex items-center justify-between py-4"},null,-1),wt={name:"ActionPlayground"},Ct=Object.assign(wt,{setup(i){const a=X(B),l=q("");Object.keys(B).forEach(e=>{a[e].hideAuthToken||(a[e].options||(a[e].options={}),a[e].options.headers={type:"json",fields:{"x-auth-token":{optional:!0,type:"string",value:l}}})});const r=re(),u=M(()=>r.params.project),h=M(()=>r.query.collection),c=M(()=>r.query.action),y=M(()=>B[c.value]);M(()=>W.Documents(u,h));const n=q(0);function k(e){if(!e)return{};let j={};return typeof e=="object"&&e&&Object.keys(e).forEach(v=>{if(!e[v])return;let f=e[v].fields;f?Object.keys(f).forEach(m=>{if(f[m].fields)j[m]=k({[m]:f[m]});else{let d=f[m].value;d.__v_isRef?j[m]=d.value:j[m]=d}}):j=e[v].value}),j}const b=X([]),K=async()=>{const e={action:c.value};b.splice(0,0,e);const{url:j,options:v,method:f}=y.value,m=j.replace(":project",u.value).replace(":collection",h.value);let d=k({body:v.body});const $=k({headers:v.headers});if(typeof d=="string"&&v.body.type==="json")try{d=JSON.parse(d)}catch(g){console.error(g)}e.loading=!0;const T=new Date().getTime();try{const{data:g,status:C,headers:w}=await ne({url:m,data:d,method:f,params:{},headers:$,skipAccountToken:!0,skipInterceptors:!0});e.responseTime=new Date().getTime()-T,e.data=g,e.status=C,e.body=d,e.res_headers=w,e.req_headers=$}catch(g){const{status:C,data:w,msg:U,headers:se}=ae(g);e.error=g.message,e.responseTime=new Date().getTime()-T,e.data=w,e.status=C,e.body=d,e.res_headers=se,e.req_headers=$,e.error_msg=U,console.error(g)}finally{e.loading=!1,b.length>3&&b.splice(2,b.length-3),n.value++}},E=q(!1),ee=()=>{E.value=!E.value};ue(()=>a,()=>{n.value=n.value+1},{deep:!0,immediate:!0});const z=de(),te=e=>{z.push({name:r.name,params:r.params,query:{...r.query,action:e}})},G=q([]),Q=q(!1),oe=async()=>{Q.value=!0;try{const{data:e}=await W.Collections(r.params.project).list();G.value=e,h.value||D(e[0].name)}catch(e){console.error(e)}finally{Q.value=!1}};pe(()=>{oe()});const D=e=>{typeof e!="string"&&(e=e.target.value),z.push({name:r.name,params:r.params,query:{...r.query,collection:e}})};return(e,j)=>{var v,f,m,d,$,T,g,C;return o(),s("div",nt,[S(st,{selected:(v=e.$route.query)==null?void 0:v.action,onSelect:te},null,8,["selected"]),p(c)?(o(),s("div",at,[t("div",ct,[t("div",lt,[t("div",{class:V(["method text-lg font-bold uppercase",(f=a[p(c)])==null?void 0:f.method])},_((m=a[p(c)])==null?void 0:m.method),3),t("div",it,[t("span",rt,_(p(ce)),1),t("span",ut,_((d=a[p(c)])==null?void 0:d.url),1)]),S(L,{class:"ml-auto flex px-4 font-bold items-center py-2 text-primary dark:text-white",disabled:!p(h)&&!p(h).length,onClick:K},{default:H(()=>[dt,S(p(We),{class:"fill-primary dark:fill-white"})]),_:1},8,["disabled"])])]),(o(),s("div",{key:p(c),class:"options card relative border border-gray-200"},[t("div",pt,[_t,ht,S(L,{class:"",onClick:ee},{default:H(()=>[(o(),N(_e(E.value?p(we):p(fe))))]),_:1})]),t("div",mt,[S(qe,{"show-optionals":E.value,options:($=a[p(c)])==null?void 0:$.options},null,8,["show-optionals","options"]),(g=(T=a[p(c)])==null?void 0:T.url)!=null&&g.includes(":collection")?(o(),s("div",yt,[vt,t("select",{value:(C=e.$route.query)==null?void 0:C.collection,onSelect:D,onChange:D},[gt,(o(!0),s(O,null,A(G.value,w=>(o(),s("option",{key:w,value:w.name,textContent:_(w.name)},null,8,xt))),128))],40,ft)])):x("",!0)])])),bt,(o(!0),s(O,null,A(b,(w,U)=>(o(),N(Fe,{key:U+n.value,execution:w},null,8,["execution"]))),128))])):x("",!0)])}}});export{Ct as default};