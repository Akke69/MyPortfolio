import{r as p,j as e,m as n,T as h}from"./vendor-DgHs0kF1.js";import{s as d}from"./styles-BMfF9tGN.js";import{s as g}from"./index-DfPb8JZA.js";import{S as u,t as b,f as r}from"./SectionWrapper-K1hQzLW-.js";const f=({index:l,title:s,icon:i})=>e.jsx(h,{className:"xs:w-[250px] w-full",children:e.jsx(n.div,{variants:r("right","spring",l*.5,.75),className:"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card",children:e.jsxs("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[e.jsx("img",{src:i,alt:"web-development",className:"w-30 h-30 object-contain"}),e.jsx("h3",{className:"text-white text-[20px] font-bold text-center",children:s})]})})}),j=()=>{const[l,s]=p.useState("#6F03F2"),i=()=>{s("#f203e6"),setTimeout(()=>{s("#6F03F2")},1e3),x("LED_ON")},x=a=>{const m="wss://83.249.12.234:8080";try{const o=new WebSocket(m);o.onerror=t=>{console.error("WebSocket Error:",t)},o.onopen=()=>{console.log("WebSocket Client Connected"),o.send(a)},o.onmessage=t=>{console.log("Received:",t.data)},o.onclose=t=>{console.log("WebSocket Client Closed:",t),console.log("Code:",t.code),console.log("Reason:",t.reason),console.log("Was Clean:",t.wasClean)}}catch(o){console.error("WebSocket Connection Error:",o)}};return e.jsxs(e.Fragment,{children:[e.jsxs(n.div,{variants:b(),children:[e.jsx("p",{className:d.sectionSubText,children:"Introduction"}),e.jsx("h2",{className:d.sectionHeadText,children:"About me."})]}),e.jsx(n.p,{variants:r("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"I'm a skilled Mechanical Engineer with experience in Manufacturing, Lean Production, Materials and expertise in programming, Simulation, 3D modelling and rendering, and Electronics."}),e.jsx(n.p,{variants:r("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"I'm a quick learner and I'm constantly learning new skills to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-10",children:g.map((a,c)=>e.jsx(f,{index:c,...a},a.title))}),e.jsx("br",{}),e.jsx(n.p,{variants:r("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Press the button below to light an LED in real life, to let me know that you said hello!"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"10vh",paddingBottom:"0vh"},children:e.jsx("button",{style:{backgroundColor:l,color:"white",padding:"10px 20px",fontSize:"1em",border:"none",borderRadius:"5px",cursor:"pointer",transition:"background-color 0.3s ease"},onClick:i,children:"Say Hello!"})})]})},S=u(j,"about");export{S as default};
