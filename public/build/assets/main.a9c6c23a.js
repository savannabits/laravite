import{l as c,a as l,c as f,b as P,h as p,P as E,C as g,T as v,L as h,d as j,I as A}from"./vendor.c6883901.js";const I="modulepreload",n={},L="/build/",e=function(o,i){return!i||i.length===0?o():Promise.all(i.map(r=>{if(r=`${L}${r}`,r in n)return;n[r]=!0;const a=r.endsWith(".css"),_=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${_}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":I,a||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),a)return new Promise((m,d)=>{s.addEventListener("load",m),s.addEventListener("error",d)})})).then(()=>o())};window._=c;window.axios=l;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var u;const R=((u=window.document.getElementsByTagName("title")[0])==null?void 0:u.innerText)||"Laravel";f({title:t=>`${t} - ${R}`,resolve:async t=>(await{"./Pages/Dashboard.vue":()=>e(()=>import("./Dashboard.70e8fcff.js"),["assets/Dashboard.70e8fcff.js","assets/Authenticated.eb2a0473.js","assets/vendor.c6883901.js","assets/plugin-vue_export-helper.21dcd24c.js"]),"./Pages/Welcome.vue":()=>e(()=>import("./Welcome.d6117e76.js"),["assets/Welcome.d6117e76.js","assets/Welcome.bd4e6121.css","assets/vendor.c6883901.js","assets/plugin-vue_export-helper.21dcd24c.js"]),"./Pages/Auth/ConfirmPassword.vue":()=>e(()=>import("./ConfirmPassword.dad636e2.js"),["assets/ConfirmPassword.dad636e2.js","assets/Guest.819b91ea.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.c6883901.js","assets/ValidationErrors.7ca1d0ce.js"]),"./Pages/Auth/ForgotPassword.vue":()=>e(()=>import("./ForgotPassword.a12bcdd7.js"),["assets/ForgotPassword.a12bcdd7.js","assets/Guest.819b91ea.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.c6883901.js","assets/ValidationErrors.7ca1d0ce.js"]),"./Pages/Auth/Login.vue":()=>e(()=>import("./Login.2fc783fe.js"),["assets/Login.2fc783fe.js","assets/Guest.819b91ea.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.c6883901.js","assets/ValidationErrors.7ca1d0ce.js"]),"./Pages/Auth/Profile.vue":()=>e(()=>import("./Profile.bfec323e.js"),["assets/Profile.bfec323e.js","assets/Authenticated.eb2a0473.js","assets/vendor.c6883901.js","assets/plugin-vue_export-helper.21dcd24c.js"]),"./Pages/Auth/Register.vue":()=>e(()=>import("./Register.8eff9653.js"),["assets/Register.8eff9653.js","assets/Guest.819b91ea.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.c6883901.js","assets/ValidationErrors.7ca1d0ce.js"]),"./Pages/Auth/ResetPassword.vue":()=>e(()=>import("./ResetPassword.0a594511.js"),["assets/ResetPassword.0a594511.js","assets/Guest.819b91ea.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.c6883901.js","assets/ValidationErrors.7ca1d0ce.js"]),"./Pages/Auth/VerifyEmail.vue":()=>e(()=>import("./VerifyEmail.cc6be87a.js"),["assets/VerifyEmail.cc6be87a.js","assets/Guest.819b91ea.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.c6883901.js"]),"./Pages/Backend/Index.vue":()=>e(()=>import("./Index.3e4e9d98.js"),["assets/Index.3e4e9d98.js","assets/Backend.c2df57ca.js","assets/vendor.c6883901.js","assets/plugin-vue_export-helper.21dcd24c.js"]),"./Pages/Crm/Customers/Details.vue":()=>e(()=>import("./Details.8f44f23f.js"),["assets/Details.8f44f23f.js","assets/Backend.c2df57ca.js","assets/vendor.c6883901.js","assets/plugin-vue_export-helper.21dcd24c.js"]),"./Pages/Crm/Customers/Index.vue":()=>e(()=>import("./Index.8bb9eb51.js"),["assets/Index.8bb9eb51.js","assets/Backend.c2df57ca.js","assets/vendor.c6883901.js","assets/plugin-vue_export-helper.21dcd24c.js"])}[`./Pages/${t}.vue`]()).default,setup({el:t,app:o,props:i,plugin:r}){return P({render:()=>p(o,i)}).use(r).use(E).use(g).use(v).component("router-link",h).mixin({methods:{route:j}}).mount(t)}});A.init({color:"rgb(34, 197, 94)"});