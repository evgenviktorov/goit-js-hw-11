import{a as d,S as f,i as a}from"./assets/vendor-DFCQGEf1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="50366269-4ee160a1f4b6fa516c5257acb",p="https://pixabay.com/api/";function h(n){const r=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`${p}?${r}`).then(t=>t.data.hits).catch(t=>{throw console.error("Error fetching images:",t.message),t})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(n,r){if(u(),n.length===0){a.error({title:"No results",message:`Sorry, there are no images matching your search query: ${r}. Please try again!`,position:"topRight"});return}const t=n.map(s=>`
      <a class="photo-card" href="${s.largeImageURL}">
        <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes:</b> ${s.likes}
          </p>
          <p class="info-item">
            <b>Views:</b> ${s.views}
          </p>
          <p class="info-item">
            <b>Comments:</b> ${s.comments}
          </p>
          <p class="info-item">
            <b>Downloads:</b> ${s.downloads}
          </p>
        </div>
      </a>
    `).join("");c.insertAdjacentHTML("beforeend",t),g.refresh()}function u(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form"),S=document.querySelector('input[name="search-text"]');w.addEventListener("submit",n=>{n.preventDefault();const r=S.value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}u(),b(),h(r).then(t=>{y(t,r)}).catch(t=>{a.error({title:"Error",message:`Something went wrong: ${t.message}`,position:"topRight"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
