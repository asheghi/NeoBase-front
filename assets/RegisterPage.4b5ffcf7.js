import{A as g,s as u}from"./api.4a23552d.js";import{_ as h}from"./Logo.218b0425.js";import{N as w}from"./N-Button.3dce5523.js";import{_ as v,b as r,o as y,c as b,a as e,d as l,w as n,v as d,e as c,g as i,t as x}from"./index.3459ee34.js";var k="/assets/logo.90ea2115.png";const N={name:"RegisterPage",components:{NButton:w,Logo:h},data(){return{logoImage:k,form:{email:"",password:""},loading:null}},mounted(){const s=this.$route.query.email;s&&(this.form.email=s),this.form.email?this.$refs.password.focus():this.$refs.email.focus()},methods:{async submit(){try{this.loading=!0;const{data:s,status:t}=await g.register(this.form);u(s.token),await this.$router.replace("/dash")}catch(s){console.error(s)}finally{this.loading=!1}}}},B={class:"LoginPage"},L={class:"cover"},P={class:"header"},R=e("h1",{class:"text-2xl text-center opacity-60"},[e("span",{class:""},"Join"),i(" NeoBase ")],-1),V={class:"form"},A={class:"form-group"},C=e("label",{for:"email"},"Email",-1),T=["disabled"],j={class:"form-group"},D=e("label",{for:"password"},"Password",-1),E=["disabled"],U={class:"msg opacity-75"},q=i(" Already registered? "),H=i("Login Here");function I(s,t,J,M,o,m){const _=r("Logo"),p=r("NButton"),f=r("router-link");return y(),b("div",B,[e("div",L,[e("div",P,[l(_,{class:"logo",width:"180",height:"180"}),R]),e("div",V,[e("div",A,[C,n(e("input",{id:"email",ref:"email","onUpdate:modelValue":t[0]||(t[0]=a=>o.form.email=a),disabled:o.loading,name:"email",placeholder:"john@doe.com"},null,8,T),[[d,o.form.email]])]),e("div",j,[D,n(e("input",{id:"password",ref:"password","onUpdate:modelValue":t[1]||(t[1]=a=>o.form.password=a),disabled:o.loading,type:"password",placeholder:"secure password"},null,8,E),[[d,o.form.password]])]),l(p,{loading:o.loading,class:"primary mt-4 w-full justify-between font-bold",onClick:m.submit},{default:c(()=>[i(x(o.loading?"Registering":"Register"),1)]),_:1},8,["loading","onClick"])]),e("div",U,[e("p",null,[q,l(f,{class:"text-blue-700 dark:text-primary-200 font-bold",to:"/login"},{default:c(()=>[H]),_:1})])])])])}var K=v(N,[["render",I]]);export{K as default};