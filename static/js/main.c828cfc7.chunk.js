(this.webpackJsonptriviaguy=this.webpackJsonptriviaguy||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),o=c(3),a=c.n(o),s=(c(12),c(13),c(0));function l(e){const t=[...e];for(let c=t.length-1;c>0;c--){const e=Math.floor(Math.random()*(c+1));[t[c],t[e]]=[t[e],t[c]]}return t}var i=e=>{const{articles:t,category:c,color:n}=e,[o,a]=Object(r.useState)(!1),[i,j]=Object(r.useState)(l(t));return Object(s.jsxs)("div",{style:{backgroundColor:n,padding:"2rem",margin:"1rem 2rem",borderRadius:"10px"},children:[Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(s.jsx)("h3",{children:c}),Object(s.jsx)("button",{onClick:()=>{(()=>{a(!0);const e=l(i);j(e),a(!1)})()},children:"refresh"})]}),Object(s.jsx)("ol",{children:i.slice(0,5).map(((e,t)=>{const r=e.title,n=r.substring(0,r.lastIndexOf("-"));return Object(s.jsx)("li",{children:Object(s.jsxs)("div",{style:{marginTop:0!==t?"30px":"0px"},children:[Object(s.jsx)("h3",{children:n}),Object(s.jsxs)("p",{children:[e.description," - ",e.source.name]})]})},"".concat(c,"-i"))}))})]})};const j=[{category:"General",color:"lightgreen"},{category:"Entertainment",color:"lightpink"},{category:"Sports",color:"lightblue"},{category:"Business",color:"lavendar"},{category:"Technology",color:"lightgray"}];var d=function(){const[e,t]=Object(r.useState)(null),[c,n]=Object(r.useState)(!0),[o,a]=Object(r.useState)(null);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h2",{children:"Caden's trivia helper v1"}),Object(s.jsx)("p",{children:"click below for recent headlines"}),Object(s.jsx)("button",{style:{marginTop:"10px"},onClick:()=>{(async()=>{await(async()=>{try{n(!0);const e="ff6c70e621e54ff19b943a356a78973d",c=await Promise.all([fetch("https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=".concat(e))]),r=await Promise.all(c.map((e=>e.json())));console.log(r);const o=r.map(((e,t)=>({articles:e.articles,category:j[t].category,color:j[t].color})));console.log(o),t(o)}catch(o){a(o)}finally{n(!1)}})()})()},children:"click me"}),o&&Object(s.jsx)("div",{children:"there was an error. try again tomorrow."}),"error"===(null===e||void 0===e?void 0:e.status)?Object(s.jsx)("div",{children:"error please try again tomorrow."}):e?e.map(((e,t)=>Object(s.jsx)(i,{articles:e.articles,category:e.category,color:e.color},t))):Object(s.jsx)(s.Fragment,{})]})};var g=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((t=>{let{getCLS:c,getFID:r,getFCP:n,getLCP:o,getTTFB:a}=t;c(e),r(e),n(e),o(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(d,{})})),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.c828cfc7.chunk.js.map