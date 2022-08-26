import{_ as u}from"./Logo.218b0425.js";import{A as f,s as h}from"./api.4a23552d.js";import{N as w}from"./N-Button.3dce5523.js";import{_ as v,b as n,o as b,c as x,a as o,d as l,w as r,v as d,e as c,g as i,t as y}from"./index.3459ee34.js";const k={name:"LoginPage",components:{NButton:w,Logo:u},data(){return{form:{email:"",password:""},loading:!1}},methods:{async submit(){try{this.loading=!0;const{data:s}=await f.login(this.form);h(s.token),await this.$router.replace("/dash")}catch(s){console.error(s)}finally{this.loading=!1}}}},N={class:"LoginPage"},L={class:"cover"},B={class:"header"},P=o("h1",{class:"text-2xl text-center opacity-60"},[o("span",{class:""},"Login to"),i(" NeoBase ")],-1),V={class:"form"},C={class:"form-group"},A=o("label",{for:"email"},"Email",-1),S=["disabled"],T={class:"form-group"},j=o("label",{for:"password"},"Password",-1),D=["disabled"],E={class:"msg opacity-75"},U=i(" New here? "),H=i("Register Here");function M(s,t,R,q,e,_){const m=n("Logo"),p=n("NButton"),g=n("router-link");return b(),x("div",N,[o("div",L,[o("div",B,[l(m,{class:"logo",width:"180",height:"180"}),P]),o("div",V,[o("div",C,[A,r(o("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=a=>e.form.email=a),disabled:e.loading,name:"email",placeholder:"john@doe.com"},null,8,S),[[d,e.form.email]])]),o("div",T,[j,r(o("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=a=>e.form.password=a),disabled:e.loading,type:"password",placeholder:"secure password"},null,8,D),[[d,e.form.password]])]),l(p,{loading:e.loading,class:"primary mt-4 w-full justify-between font-bold",onClick:_.submit},{default:c(()=>[i(y(e.loading?"Signing in":"Sign in"),1)]),_:1},8,["loading","onClick"])]),o("div",E,[o("p",null,[U,l(g,{class:"text-blue-700 dark:text-primary-200 font-bold",to:"/register"},{default:c(()=>[H]),_:1})])])])])}var J=v(k,[["render",M]]);export{J as default};
