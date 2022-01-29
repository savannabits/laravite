import{B as _,a as h}from"./Guest.0ec9001e.js";import{H as g,L as y,g as r,k as t,u as v,i as s,m as a,n as k,y as b,F as x,p as o,f as d,s as c}from"./vendor.9e36e781.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./ApplicationLogo.bae6ea4f.js";const L={layout:_,components:{BreezeButton:h,Head:g,Link:y},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}},w=s("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},j={class:"mt-4 flex items-center justify-between"},z=c(" Resend Verification Email "),C=c("Log Out");function E(m,i,H,N,n,e){const u=o("Head"),l=o("BreezeButton"),f=o("Link");return d(),r(x,null,[t(u,{title:"Email Verification"}),w,e.verificationLinkSent?(d(),r("div",V," A new verification link has been sent to the email address you provided during registration. ")):v("",!0),s("form",{onSubmit:i[0]||(i[0]=b((...p)=>e.submit&&e.submit(...p),["prevent"]))},[s("div",j,[t(l,{class:k({"opacity-25":n.form.processing}),disabled:n.form.processing},{default:a(()=>[z]),_:1},8,["class","disabled"]),t(f,{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:a(()=>[C]),_:1},8,["href"])])],32)],64)}var T=B(L,[["render",E]]);export{T as default};