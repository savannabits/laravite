import{B as w,a as B}from"./Guest.0e53741a.js";import{B as V,a as b,b as v}from"./ValidationErrors.65fac57e.js";import{H as z,L as g,e as y,f as e,g as t,w as i,D as x,J as h,F as k,r as a,o as L,C as d}from"./vendor.7be845d0.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const j={layout:w,components:{BreezeButton:B,BreezeInput:V,BreezeLabel:b,BreezeValidationErrors:v,Head:z,Link:g},data(){return{form:this.$inertia.form({name:"",email:"",password:"",password_confirmation:"",terms:!1})}},methods:{submit(){this.form.post(this.route("register"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}},C={class:"mt-4"},q={class:"mt-4"},H={class:"mt-4"},N={class:"flex items-center justify-end mt-4"},U=d(" Already registered? "),F=d(" Register ");function I(u,o,R,G,s,m){const p=a("Head"),f=a("BreezeValidationErrors"),l=a("BreezeLabel"),n=a("BreezeInput"),c=a("Link"),_=a("BreezeButton");return L(),y(k,null,[e(p,{title:"Register"}),e(f,{class:"mb-4"}),t("form",{onSubmit:o[4]||(o[4]=h((...r)=>m.submit&&m.submit(...r),["prevent"]))},[t("div",null,[e(l,{for:"name",value:"Name"}),e(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s.form.name,"onUpdate:modelValue":o[0]||(o[0]=r=>s.form.name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),t("div",C,[e(l,{for:"email",value:"Email"}),e(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.form.email,"onUpdate:modelValue":o[1]||(o[1]=r=>s.form.email=r),required:"",autocomplete:"username"},null,8,["modelValue"])]),t("div",q,[e(l,{for:"password",value:"Password"}),e(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":o[2]||(o[2]=r=>s.form.password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),t("div",H,[e(l,{for:"password_confirmation",value:"Confirm Password"}),e(n,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s.form.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s.form.password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),t("div",N,[e(c,{href:u.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[U]),_:1},8,["href"]),e(_,{class:x(["ml-4",{"opacity-25":s.form.processing}]),disabled:s.form.processing},{default:i(()=>[F]),_:1},8,["class","disabled"])])],32)],64)}var M=E(j,[["render",I]]);export{M as default};
