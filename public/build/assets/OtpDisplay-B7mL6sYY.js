import{r as s,x as N,o as Z,v as ee,f as u,g as d,F as te,E as oe,i as n,n as P,a as ae,b as ne,R as se,T as re,$ as le,s as ue,e as ie,h as T,l as A,m as E,p as ce,t as C,w as pe,Z as ve,U as fe,z as j,A as q,k as M,C as de,J as B,H as G,P as J}from"./app-BsP-5XS6.js";import{S as me}from"./Spinner-CewaMSJd.js";/*! 2FAuth version 5.2.0 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const ye={__name:"TotpLooper",props:{step_count:{type:Number,default:10},period:Number,generated_at:Number,autostart:{type:Boolean,default:!0}},emits:["loop-started","loop-ended","stepped-up"],setup(k,{expose:b,emit:m}){const o=k,i=s(null),w=s(null),O=s(null),y=s(null),c=s(null),l=N(()=>i.value%o.period),r=N(()=>o.period-l.value),p=N(()=>o.period/o.step_count),S=N(()=>{let v=l.value*o.step_count/o.period;return Math.floor(v)+0}),e=m,_=(v=null)=>{g(),i.value=v??o.generated_at,e("loop-started",S.value),c.value=S.value,w.value=setTimeout(function(){g(),e("loop-ended")},r.value*1e3);let h=Math.ceil(l.value/p.value)*p.value-l.value;O.value=setTimeout(function(){h>0&&(c.value+=1,e("stepped-up",c.value)),y.value=setInterval(function(){c.value+=1,e("stepped-up",c.value)},p.value*1e3)},h*1e3)},g=()=>{clearTimeout(w.value),clearTimeout(O.value),clearInterval(y.value),c.value=i.value=null};return Z(()=>{o.autostart==!0&&_()}),ee(()=>{g()}),b({startLoop:_,clearLooper:g,props:o}),(v,h)=>(u(),d("div"))}},_e=["data-is-active"],ge={__name:"Dots",props:{stepCount:{type:Number,default:10},initialIndex:{type:Number,default:null},period:{type:Number,default:null}},setup(k,{expose:b}){const m=k,o=s(0),i=N(()=>o.value==-1);function w(y){o.value=y<m.stepCount?y+1:1}function O(){o.value=-1}return Z(()=>{isNaN(m.initialIndex)||w(m.initialIndex)}),b({turnOn:w,turnOff:O,props:m}),(y,c)=>(u(),d("ul",{class:P(["dots",{off:n(i)}])},[(u(!0),d(te,null,oe(k.stepCount,l=>(u(),d("li",{key:l,"data-is-active":l==n(o)?!0:null},null,8,_e))),128))],2))}},he=["src","alt"],we=["title"],ke={key:1,tabindex:"0",class:"otp is-size-1"},Oe={key:0,class:"mt-3"},Te={__name:"OtpDisplay",props:{otp_type:String,account:String,service:String,icon:String,secret:String,digits:Number,algorithm:String,period:null,counter:null,image:String,qrcode:null,uri:String},emits:["please-close-me","increment-hotp","validation-error"],setup(k,{expose:b,emit:m}){const o=ae(),i=ne(),w=se("2fauth"),{copy:O,copied:y}=re({legacy:!0}),c=le(),l=m,r=k,p=s(null),S=s(null),e=s({otp_type:"",account:"",service:"",icon:"",secret:"",digits:null,algorithm:"",period:null,counter:null,image:""}),_=s(""),g=s(null),v=s(!1),h=s(!1),x=s(!1),L=s(),$=s(),V=s();ue(()=>r.icon,a=>{a!=null&&(e.value.icon=a)});const Q=async a=>{if(x.value=!1,e.value.otp_type=r.otp_type,e.value.account=r.account,e.value.service=r.service,e.value.icon=r.icon,e.value.secret=r.secret,e.value.digits=r.digits,e.value.algorithm=r.algorithm,e.value.period=r.period,e.value.counter=r.counter,H(),a){p.value=a;const{data:t}=await B.get(p.value);e.value.service=t.service,e.value.account=t.account,e.value.icon=t.icon,e.value.otp_type=t.otp_type,D(t.otp_type)&&t.counter&&(e.value.counter=t.counter)}else r.uri?(S.value=r.uri,e.value.otp_type=r.uri.slice(0,15).toLowerCase()==="otpauth://totp/"?"totp":"hotp"):r.secret?!z(e.value.otp_type)&&!D(e.value.otp_type)&&i.error(new Error(G("errors.not_a_supported_otp_type"))):i.error(new Error(G("errors.cannot_create_otp_without_secret")));try{await F(),X()}catch{I()}};async function F(){H(),await W().then(a=>{let t=a.data;_.value=t.password,o.preferences.copyOtpOnDisplay&&U(t.password),z(t.otp_type)?(g.value=t.generated_at,e.value.period=t.period,v.value=!0,J().then(()=>{$.value.startLoop()})):D(t.otp_type)&&(e.value.counter=t.counter,l("increment-hotp",{nextHotpCounter:t.counter,nextUri:t.uri}))}).catch(a=>{a.response.status===422&&l("validation-error",a.response)}).finally(()=>{h.value=!1})}function H(){h.value=!0,L.value.turnOff()}function W(){return p.value?B.getOtpById(p.value):S.value?B.getOtpByUri(S.value):B.getOtpByParams(e.value)}function I(){var a;p.value=e.value.counter=g.value=null,e.value.service=e.value.account=e.value.icon=e.value.otp_type=e.value.secret="",_.value="... ...",v.value=!1,(a=$.value)==null||a.clearLooper()}function X(){J().then(()=>{var a;(a=V.value)==null||a.focus()})}function U(a,t){O(a.replace(/ /g,"")),y&&(o.preferences.kickUserAfter==-1&&(t||!1)===!0&&c.name!="importAccounts"?o.logout({kicked:!0}):o.preferences.closeOtpOnCopy&&(t||!1)===!0&&(l("please-close-me"),x.value=!1,I()),o.preferences.clearSearchOnCopy&&l("please-clear-search"),o.preferences.viewDefaultGroupOnCopy&&(o.preferences.activeGroup=o.preferences.defaultGroup==-1?o.preferences.activeGroup:o.preferences.defaultGroup),i.success({text:G("commons.copied_to_clipboard")}))}function z(a){return a==="totp"||a==="steamtotp"}function D(a){return a==="hotp"}function K(a){L.value.turnOn(a)}return b({show:Q,clearOTP:I}),(a,t)=>{const R=ie("font-awesome-icon");return u(),d("div",null,[T("figure",{class:P(["image is-64x64",{"no-icon":!n(e).icon}]),style:{display:"inline-block"}},[n(e).icon?(u(),d("img",{key:0,src:n(w).config.subdirectory+"/storage/icons/"+n(e).icon,alt:a.$t("twofaccounts.icon_to_illustrate_the_account")},null,8,he)):A("",!0)],2),E(n(fe),null,{default:ce(({mode:f})=>[T("p",{class:P(["is-size-4 has-ellipsis",f=="dark"?"has-text-grey-light":"has-text-grey"])},C(n(e).service),3),T("p",{class:P(["is-size-6 has-ellipsis",f=="dark"?"has-text-grey":"has-text-grey-light"])},C(n(e).account),3),T("p",null,[n(h)?(u(),d("span",ke,[E(me,{isVisible:n(h),type:"raw"},null,8,["isVisible"])])):(u(),d("span",{key:0,id:"otp",role:"log",ref_key:"otpSpanTag",ref:V,tabindex:"0",class:P(["otp is-size-1 is-clickable px-3",f=="dark"?"has-text-white":"has-text-grey-dark"]),onClick:t[0]||(t[0]=Y=>U(n(_),!0)),onKeyup:t[1]||(t[1]=pe(Y=>U(n(_),!0),["enter"])),title:a.$t("commons.copy_to_clipboard")},C(n(ve)(n(_),n(o).preferences.showOtpAsDot&&n(o).preferences.revealDottedOTP&&n(x))),43,we))])]),_:1}),j(E(ge,{ref_key:"dots",ref:L},null,512),[[q,z(n(e).otp_type)]]),j(T("p",null,C(a.$t("twofaccounts.forms.counter.label"))+": "+C(n(e).counter),513),[[q,D(n(e).otp_type)]]),n(o).preferences.showOtpAsDot&&n(o).preferences.revealDottedOTP?(u(),d("p",Oe,[T("button",{class:"button is-ghost has-text-grey-dark",onClick:t[2]||(t[2]=de(f=>x.value=!n(x),["stop"]))},[n(x)?(u(),M(R,{key:0,icon:["fas","eye"]})):(u(),M(R,{key:1,icon:["fas","eye-slash"]}))])])):A("",!0),n(v)?(u(),M(ye,{key:1,period:n(e).period,generated_at:n(g),autostart:!1,onLoopEnded:t[3]||(t[3]=f=>F()),onLoopStarted:t[4]||(t[4]=f=>K(f)),onSteppedUp:t[5]||(t[5]=f=>K(f)),ref_key:"totpLooper",ref:$},null,8,["period","generated_at"])):A("",!0)])}}};export{Te as _,ye as a,ge as b};