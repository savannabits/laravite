import{l as c,a as l,c as P,b as p,h as f,d as g,I as h}from"./vendor.f13d75f7.js";const E="modulepreload",n={},w="/build/",s=function(o,i){return!i||i.length===0?o():Promise.all(i.map(e=>{if(e=`${w}${e}`,e in n)return;n[e]=!0;const a=e.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${u}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":E,a||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),a)return new Promise((m,_)=>{r.addEventListener("load",m),r.addEventListener("error",_)})})).then(()=>o())};window._=c;window.axios=l;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var d;const j=((d=window.document.getElementsByTagName("title")[0])==null?void 0:d.innerText)||"Laravel";P({title:t=>`${t} - ${j}`,resolve:async t=>(await{"./Pages/Dashboard.vue":()=>s(()=>import("./Dashboard.3d1966d5.js"),["assets/Dashboard.3d1966d5.js","assets/vendor.f13d75f7.js","assets/plugin-vue_export-helper.21dcd24c.js"]),"./Pages/Welcome.vue":()=>s(()=>import("./Welcome.3f94b83d.js"),["assets/Welcome.3f94b83d.js","assets/Welcome.bd4e6121.css","assets/vendor.f13d75f7.js","assets/plugin-vue_export-helper.21dcd24c.js"]),"./Pages/Auth/ConfirmPassword.vue":()=>s(()=>import("./ConfirmPassword.3de0a3de.js"),["assets/ConfirmPassword.3de0a3de.js","assets/Guest.2d160fa0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.f13d75f7.js","assets/ValidationErrors.9eaa6d9e.js"]),"./Pages/Auth/ForgotPassword.vue":()=>s(()=>import("./ForgotPassword.32c332d6.js"),["assets/ForgotPassword.32c332d6.js","assets/Guest.2d160fa0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.f13d75f7.js","assets/ValidationErrors.9eaa6d9e.js"]),"./Pages/Auth/Login.vue":()=>s(()=>import("./Login.f2cd5c7b.js"),["assets/Login.f2cd5c7b.js","assets/Guest.2d160fa0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.f13d75f7.js","assets/ValidationErrors.9eaa6d9e.js"]),"./Pages/Auth/Register.vue":()=>s(()=>import("./Register.2c73de76.js"),["assets/Register.2c73de76.js","assets/Guest.2d160fa0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.f13d75f7.js","assets/ValidationErrors.9eaa6d9e.js"]),"./Pages/Auth/ResetPassword.vue":()=>s(()=>import("./ResetPassword.e02e0f59.js"),["assets/ResetPassword.e02e0f59.js","assets/Guest.2d160fa0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.f13d75f7.js","assets/ValidationErrors.9eaa6d9e.js"]),"./Pages/Auth/VerifyEmail.vue":()=>s(()=>import("./VerifyEmail.fcb50d40.js"),["assets/VerifyEmail.fcb50d40.js","assets/Guest.2d160fa0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.f13d75f7.js"])}[`./Pages/${t}.vue`]()).default,setup({el:t,app:o,props:i,plugin:e}){return p({render:()=>f(o,i)}).use(e).mixin({methods:{route:g}}).mount(t)}});h.init({color:"rgb(34, 197, 94)"});