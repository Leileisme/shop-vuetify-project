import{Z as m,o as d,$ as _,a0 as n,a1 as r,c as t,a3 as a,a5 as s,a7 as f,a6 as V}from"./index-22931281.js";import{V as v,a as x}from"./VNavigationDrawer-ef7b46a0.js";import{b as i,V as c}from"./VList-da75059f.js";import{V as C}from"./VDivider-fe3c4459.js";const L={__name:"AdminLayout",setup(h){const o=m(),l=[{to:"/admin/products",text:"商品管理",icon:"mdi-shopping"},{to:"/admin/orders",text:"訂單管理",icon:"mdi-list-box"},{to:"/",text:"回首頁",icon:"mdi-home"}],u=d(()=>`https://source.boringavatars.com/beam/120/${o.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`);return(D,E)=>{const p=_("RouterView");return n(),r(s,null,[t(v,{permanent:""},{default:a(()=>[t(i,null,{default:a(()=>[t(c,{"prepend-avatar":u.value,title:f(o).account},null,8,["prepend-avatar","title"])]),_:1}),t(C),t(i,null,{default:a(()=>[(n(),r(s,null,V(l,e=>t(c,{key:e.to,to:e.to,title:e.text,"prepend-icon":e.icon},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),t(x,null,{default:a(()=>[t(p)]),_:1})],64)}}};export{L as default};
