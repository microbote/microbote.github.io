import{_ as v,r as a,f as w,o as k,c as q,d as e,p as g,b as z}from"./index-B6TQFUoh.js";const r=n=>(g("data-v-e6bbcadb"),n=n(),z(),n),Q={class:"abody"},C={class:"quiz-header"},T=r(()=>e("input",{type:"radio",name:"answer",id:"a",class:"answer"},null,-1)),M=r(()=>e("input",{type:"radio",name:"answer",id:"b",class:"answer"},null,-1)),B=r(()=>e("input",{type:"radio",name:"answer",id:"c",class:"answer"},null,-1)),H=r(()=>e("input",{type:"radio",name:"answer",id:"d",class:"answer"},null,-1)),L={__name:"SubQuizApp",setup(n){const s=[{question:"Which language runs in a web browser?",a:"Java",b:"C",c:"Python",d:"JavaScript",correct:"d"},{question:"What does CSS stand for?",a:"Central Style Sheets",b:"Cascading Style Sheets",c:"Cascading Simple Sheets",d:"Cars SUVs Sailboats",correct:"b"},{question:"What does HTML stand for?",a:"Hypertext Markup Language",b:"Hypertext Markdown Language",c:"Hyperloop Machine Language",d:"Helicopters Terminals Motorboats Lamborginis",correct:"a"},{question:"What year was JavaScript launched?",a:"1996",b:"1995",c:"1994",d:"none of the above",correct:"b"}],l=a(),i=a(),u=a(),d=a(),_=a(),b=a(),f=a(),x=a();let o=0,p=0;w(()=>{i.value=document.querySelectorAll(".answer"),h()});function h(){y();const t=s[o];u.value.innerText=t.question,d.value.innerText=t.a,_.value.innerText=t.b,b.value.innerText=t.c,f.value.innerText=t.d}function y(){i.value.forEach(t=>t.checked=!1)}function S(){let t;return i.value.forEach(c=>{c.checked&&(t=c.id)}),t}const m=()=>{const t=S();t&&(t===s[o].correct&&p++,o++,o<s.length?h():l.value.innerHTML=`
                <h2>You answered ${p}/${s.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `)};return(t,c)=>(k(),q("div",Q,[e("div",{class:"quiz-container",id:"quiz",ref_key:"quiz",ref:l},[e("div",C,[e("h2",{id:"question",ref_key:"question",ref:u},"Question text",512),e("ul",null,[e("li",null,[T,e("label",{for:"a",id:"a_text",ref_key:"a_text",ref:d},"Question",512)]),e("li",null,[M,e("label",{for:"b",id:"b_text",ref_key:"b_text",ref:_},"Question",512)]),e("li",null,[B,e("label",{for:"c",id:"c_text",ref_key:"c_text",ref:b},"Question",512)]),e("li",null,[H,e("label",{for:"d",id:"d_text",ref_key:"d_text",ref:f},"Question",512)])])]),e("button",{id:"submit",ref_key:"submitBtn",ref:x,onClick:m},"Submit",512)],512)]))}},I=v(L,[["__scopeId","data-v-e6bbcadb"]]);export{I as default};
