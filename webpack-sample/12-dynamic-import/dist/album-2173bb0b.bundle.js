(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.r(t);var c=n(3);n(4),n(6);t.default=()=>{const e=document.createElement("div");return e.className="album",e.innerHTML="<h2>Albums</h2>",Object(c.a)("/photos?albumId=1").then(t=>{t.forEach(t=>{const n=document.createElement("section");n.className="photo";const c=document.createElement("img");c.src=t.thumbnailUrl,n.appendChild(c);const o=document.createElement("h3");o.textContent=t.title,n.appendChild(o),e.appendChild(n)})}),e}},function(e,t,n){"use strict";t.a=e=>fetch("https://jsonplaceholder.typicode.com"+e).then(e=>e.json())},function(e,t,n){},,function(e,t,n){}]]);