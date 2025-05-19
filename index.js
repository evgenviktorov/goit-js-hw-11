import{a as m,S as p,i as a}from"./assets/vendor-DFCQGEf1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="50366269-4ee160a1f4b6fa516c5257acb",y="https://pixabay.com/api/";function v(i){const s=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return m.get(`${y}?${s}`).then(r=>r.data.hits).catch(r=>{throw console.error("Error fetching images:",r.message),r})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function S(i,s){if(f(),i.length===0){a.error({title:"No results",message:`Sorry, there are no images matching your search query: ${s}. Please try again!`,position:"topRight"});return}const r=i.map(({previewURL:n,largeImageURL:e,tags:t,comments:o,downloads:u,likes:d,views:h})=>`<li class="gallery-link"><a class="gallery-item" href="${e}">
  <img class="gallery-image" src="${n}" alt="${t}"/></a>
  <div class="info">
        <div class="info-list">
          <h4 class="info-title">Likes</h4>
          <p class="info-text">${d}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Views</h4>
          <p class="info-text">${h}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Comments</h4>
          <p class="info-text">${o}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Downloads</h4>
          <p class="info-text">${u}</p>
        </div>
      </div></li> `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function f(){l.innerHTML=""}function $(){c.classList.remove("hidden")}function b(){c.classList.add("hidden")}const w=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');w.addEventListener("submit",i=>{i.preventDefault();const s=q.value.trim();if(s===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}f(),$(),v(s).then(r=>{S(r,s)}).catch(r=>{a.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
