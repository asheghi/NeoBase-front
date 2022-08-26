import{H as e,o as d,c as s,f as r}from"./index.3459ee34.js";const o={class:"markdown-body"},a=r('<h3>Register</h3><p>used to register new users in your application, currently only basic authentication (email,password) is supported.</p><p>to make authenticated requests, you must add header <code class="">x-auth-token</code> with token value returned by this api or <code class="">Login</code>.</p><p><strong>POST</strong> <code class="">{baseUrl}/{project}/register</code></p><h5>Parameters</h5><table><thead><tr><th>Name</th><th>Located in</th><th>Description</th><th>Required</th><th>Schema</th></tr></thead><tbody><tr><td>email</td><td>body.email</td><td>user email.</td><td>Yes</td><td>string</td></tr><tr><td>password</td><td>body.password</td><td>user password.</td><td>Yes</td><td>string</td></tr></tbody></table><h5>Responses</h5><table><thead><tr><th>Code</th><th>Description</th><th>Schema</th></tr></thead><tbody><tr><td>200</td><td>successfully registered</td><td>{ token: string }</td></tr><tr><td>400</td><td>register failed</td><td>{ success: boolean = false }</td></tr></tbody></table>',8),c=[a],l={},u="",m=e({__name:"register",setup(i,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,h)=>(d(),s("div",o,c))}});export{m as default,u as excerpt,l as frontmatter};
