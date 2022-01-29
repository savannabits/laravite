import{B as _,a as h}from"./Guest.2d160fa0.js";import{H as g,L as v,t as r,q as t,D as y,x as s,v as a,C as k,G as x,F as B,s as o,k as d,B as c}from"./vendor.f13d75f7.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const L={layout:_,components:{BreezeButton:h,Head:g,Link:v},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}},w=s("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},j={class:"mt-4 flex items-center justify-between"},z=c(" Resend Verification Email "),C=c("Log Out");function E(m,i,H,N,n,e){const u=o("Head"),l=o("BreezeButton"),f=o("Link");return d(),r(B,null,[t(u,{title:"Email Verification"}),w,e.verificationLinkSent?(d(),r("div",V," A new verification link has been sent to the email address you provided during registration. ")):y("",!0),s("form",{onSubmit:i[0]||(i[0]=x((...p)=>e.submit&&e.submit(...p),["prevent"]))},[s("div",j,[t(l,{class:k({"opacity-25":n.form.processing}),disabled:n.form.processing},{default:a(()=>[z]),_:1},8,["class","disabled"]),t(f,{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:a(()=>[C]),_:1},8,["href"])])],32)],64)}var T=b(L,[["render",E]]);export{T as default};