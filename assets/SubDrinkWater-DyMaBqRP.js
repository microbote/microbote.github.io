import{_ as p,r as c,f as m,o as f,c as h,d as s,a as _,p as b,b as y}from"./index-B6TQFUoh.js";const n=i=>(b("data-v-41d0adb9"),i=i(),y(),i),g={class:"abody"},k=n(()=>s("h1",null,"Drink Water",-1)),S=n(()=>s("h3",null,"Goal: 2 Liters",-1)),L={class:"cup"},C=n(()=>s("small",null,"Remained",-1)),E=_('<p class="text" data-v-41d0adb9>Select how many glasses of water that you have drank</p><div class="cups" data-v-41d0adb9><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div></div>',2),B={__name:"SubDrinkWater",setup(i){const v=c(null),t=c(null),d=c(null),a=c(null);return m(()=>{a.value=document.querySelectorAll(".cup-small"),u(),a.value.forEach((l,e)=>{l.addEventListener("click",()=>o(e))});function o(l){(l===7&&a.value[l].classList.contains("full")||a.value[l].classList.contains("full")&&!a.value[l].nextElementSibling.classList.contains("full"))&&l--,a.value.forEach((e,r)=>{r<=l?e.classList.add("full"):e.classList.remove("full")}),u()}function u(){const l=document.querySelectorAll(".cup-small.full").length,e=a.value.length;l===0?(t.value.style.visibility="hidden",t.value.style.height=0):(t.value.style.visibility="visible",t.value.style.height=`${l/e*330}px`,t.value.innerText=`${l/e*100}%`),l===e?(d.value.style.visibility="hidden",d.value.style.height=0):(d.value.style.visibility="visible",v.value.innerText=`${2-250*l/1e3}L`)}}),(o,u)=>(f(),h("div",g,[k,S,s("div",L,[s("div",{class:"remained",id:"remained",ref_key:"remained",ref:d},[s("span",{id:"liters",ref_key:"liters",ref:v},null,512),C],512),s("div",{class:"percentage",id:"percentage",ref_key:"percentage",ref:t},null,512)]),E]))}},w=p(B,[["__scopeId","data-v-41d0adb9"]]);export{w as default};
