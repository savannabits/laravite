import{B as _,a as B}from"./Guest.0e53741a.js";import{B as b,a as w,b as z}from"./ValidationErrors.65fac57e.js";import{H as g,e as i,f as e,z as y,E as x,g as r,w as V,D as h,J as v,F as E,r as o,o as m,C as k}from"./vendor.7be845d0.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";const C={layout:_,components:{BreezeButton:B,BreezeInput:b,BreezeLabel:w,BreezeValidationErrors:z,Head:g},props:{status:String},data(){return{form:this.$inertia.form({email:""})}},methods:{submit(){this.form.post(this.route("password.email"))}}},F=r("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),L={key:0,class:"mb-4 font-medium text-sm text-green-600"},N={class:"flex items-center justify-end mt-4"},H=k(" Email Password Reset Link ");function I(P,t,n,S,s,l){const d=o("Head"),u=o("BreezeValidationErrors"),c=o("BreezeLabel"),p=o("BreezeInput"),f=o("BreezeButton");return m(),i(E,null,[e(d,{title:"Forgot Password"}),F,n.status?(m(),i("div",L,y(n.status),1)):x("",!0),e(u,{class:"mb-4"}),r("form",{onSubmit:t[1]||(t[1]=v((...a)=>l.submit&&l.submit(...a),["prevent"]))},[r("div",null,[e(c,{for:"email",value:"Email"}),e(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.form.email,"onUpdate:modelValue":t[0]||(t[0]=a=>s.form.email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),r("div",N,[e(f,{class:h({"opacity-25":s.form.processing}),disabled:s.form.processing},{default:V(()=>[H]),_:1},8,["class","disabled"])])],32)],64)}var M=j(C,[["render",I]]);export{M as default};