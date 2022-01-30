import{B as x}from"./Backend.c2df57ca.js";import{o,v as s,D as a,J as h,f as r,s as k,w as f,x as $,r as u,g as i,B as c,E as v}from"./vendor.c6883901.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";var y={name:"Card"};const w={class:"p-card p-component"},z={key:0,class:"p-card-header"},B={class:"p-card-body"},N={key:0,class:"p-card-title"},j={key:1,class:"p-card-subtitle"},D={class:"p-card-content"},S={key:2,class:"p-card-footer"};function T(e,d,l,t,n,m){return o(),s("div",w,[e.$slots.header?(o(),s("div",z,[a(e.$slots,"header")])):h("",!0),r("div",B,[e.$slots.title?(o(),s("div",N,[a(e.$slots,"title")])):h("",!0),e.$slots.subtitle?(o(),s("div",j,[a(e.$slots,"subtitle")])):h("",!0),r("div",D,[a(e.$slots,"content")]),e.$slots.footer?(o(),s("div",S,[a(e.$slots,"footer")])):h("",!0)])])}function E(e,d){d===void 0&&(d={});var l=d.insertAt;if(!(!e||typeof document=="undefined")){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var A=`
.p-card-header img {
    width: 100%;
}
`;E(A);y.render=T;var b={name:"Divider",props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},computed:{containerClass(){return["p-divider p-component","p-divider-"+this.layout,"p-divider-"+this.type,{"p-divider-left":this.layout==="horizontal"&&(!this.align||this.align==="left")},{"p-divider-center":this.layout==="horizontal"&&this.align==="center"},{"p-divider-right":this.layout==="horizontal"&&this.align==="right"},{"p-divider-top":this.layout==="vertical"&&this.align==="top"},{"p-divider-center":this.layout==="vertical"&&(!this.align||this.align==="center")},{"p-divider-bottom":this.layout==="vertical"&&this.align==="bottom"}]}}};const V={key:0,class:"p-divider-content"};function I(e,d,l,t,n,m){return o(),s("div",{class:m.containerClass,role:"separator"},[e.$slots.default?(o(),s("div",V,[a(e.$slots,"default")])):h("",!0)],2)}function P(e,d){d===void 0&&(d={});var l=d.insertAt;if(!(!e||typeof document=="undefined")){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var F=`
.p-divider-horizontal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    position: relative;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
}
.p-divider-horizontal.p-divider-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-divider-horizontal.p-divider-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-divider-horizontal.p-divider-center {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-divider-content {
    z-index: 1;
}
.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
}
.p-divider-vertical.p-divider-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-divider-vertical.p-divider-center {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-divider-vertical.p-divider-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}
.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}
.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}
.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}
.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}
.p-divider-dotted.p-divider-horizontal:before {
    border-left-style: dotted;
}
`;P(F);b.render=I;const J={name:"Details",components:{Backend:x,Card:y,Divider:b},setup(e){return{model:k(()=>$().props.value.model)}}},L={class:"text-center"},M={class:"p-2 font-black text-2xl"},q={class:"w-full mt-4"},G=v("First Name: "),H=v("Middle Name: "),K=v("Last Name: "),O=v("Email: "),Q=v("Phone No.: ");function R(e,d,l,t,n,m){const p=u("Divider"),_=u("Card"),g=u("Backend");return o(),s(g,null,{header:f(()=>[i("div",L,[i("h4",M,"Customer Details: "+c(t.model.email),1)])]),default:f(()=>[i("div",q,[r(_,{class:"mx-auto max-w-xl"},{content:f(()=>[i("div",null,[G,i("strong",null,c(t.model.first_name),1)]),r(p),i("div",null,[H,i("strong",null,c(t.model.middle_name),1)]),r(p),i("div",null,[K,i("strong",null,c(t.model.surname),1)]),r(p),i("div",null,[O,i("strong",null,c(t.model.email),1)]),r(p),i("div",null,[Q,i("strong",null,c(t.model.phone_number),1)]),r(p)]),_:1})])]),_:1})}var Y=C(J,[["render",R]]);export{Y as default};
