import{_ as h,j as b,r as l,f as g,o as m,c as k,d as s,p as x,b as y}from"./index-B6TQFUoh.js";const o=c=>(x("data-v-dd6420fa"),c=c(),y(),c),S={class:"abody"},B={class:"container"},C={class:"progress-container"},E=o(()=>s("div",{class:"circle active"},"1",-1)),I=o(()=>s("div",{class:"circle"},"2",-1)),A=o(()=>s("div",{class:"circle"},"3",-1)),P=o(()=>s("div",{class:"circle"},"4",-1)),q={__name:"SubProgressSteps",setup(c){b(i=>({"86c3c38a":u.lineBorderEmpty,"482686d5":u.lineBorderFill}));const n=l(),a=l(),r=l(),t=l();let e=1;g(()=>{t.value=document.querySelectorAll(".circle")});const _=()=>{e++,e>t.value.length&&(e=t.value.length),v()},p=()=>{e--,e<1&&(e=1),v()};function v(){t.value.forEach((d,f)=>{f<e?d.classList.add("active"):d.classList.remove("active")});const i=document.querySelectorAll(".active");n.value.style.width=(i.length-1)/(t.value.length-1)*100+"%",e===1?a.value.disabled=!0:e===t.value.length?r.value.disabled=!0:(a.value.disabled=!1,r.value.disabled=!1)}const u={lineBorderFill:"#3498db",lineBorderEmpty:"#383838"};return(i,d)=>(m(),k("div",S,[s("div",B,[s("div",C,[s("div",{class:"progress",id:"progress",ref_key:"progress",ref:n},null,512),E,I,A,P]),s("button",{class:"btn",id:"prev",ref_key:"prev",ref:a,onClick:p,disabled:""},"Prev",512),s("button",{class:"btn",id:"next",ref_key:"next",ref:r,onClick:_},"Next",512)])]))}},F=h(q,[["__scopeId","data-v-dd6420fa"]]);export{F as default};
