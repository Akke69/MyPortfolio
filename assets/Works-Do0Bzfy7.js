import{r as x,j as e}from"./vendor-DgHs0kF1.js";import{s as n}from"./styles-BMfF9tGN.js";import{S as d}from"./SectionWrapper-K1hQzLW-.js";import{p as i}from"./index-DfPb8JZA.js";const m=({index:s,name:r,description:t,tags:l,image:o,source_code_link:a})=>e.jsxs("div",{className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[e.jsx("div",{className:"relative w-full h-[230px]",children:e.jsx("img",{src:o,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"})}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-white font-bold text-[24px]",children:r}),e.jsx("p",{className:"mt-2 text-secondary text-[14px]",children:t})]}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:l.map(c=>e.jsxs("p",{className:`text-[14px] ${c.color}`,children:["#",c.name]},`${r}-${c.name}`))})]}),p=()=>{const[s,r]=x.useState(!1),t=()=>{r(!s)},l=s?i:i.slice(0,3);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{className:`${n.sectionSubText} `,children:"My work"}),e.jsx("h2",{className:`${n.sectionHeadText}`,children:"Projects."})]}),e.jsx("div",{className:"w-full flex",children:e.jsx("p",{className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects are private projects that I work on as a hobby. They showcase my skills and experience through real-world examples of my work. Each project is briefly described with a short description. These, reflect my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-7",children:l.map((o,a)=>e.jsx(m,{index:a,...o},`project-${a}`))}),i.length>3&&e.jsx("div",{className:"mt-10 flex justify-center",children:e.jsx("button",{onClick:t,className:"bg-secondary text-white px-4 py-2 rounded-md",style:{backgroundColor:"#6F03F2"},children:s?"Show Less":"Show More"})})]})},u=d(p,"Works");export{u as default};
