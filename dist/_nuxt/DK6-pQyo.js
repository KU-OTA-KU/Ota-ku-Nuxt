const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CgoSewcC.js","./a34zLPwc.js"])))=>i.map(i=>d[i]);
import{aG as r,d as a,_ as s,aB as p,t as _,bj as c}from"./BqcKMuPp.js";import{r as i}from"./a34zLPwc.js";const o=i("App",{web:()=>r(()=>import("./CgoSewcC.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>new e.AppWeb)}),d=a({name:"default",data(){return{progress:0}},mounted(){let e=0;o.addListener("backButton",()=>{const t=new Date().getTime();t-e<2e3?o.exitApp():(e=t,window.history.back())})}});function m(e,t,u,f,l,x){const n=c;return _(),p(n)}const k=s(d,[["render",m]]);export{k as default};