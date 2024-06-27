import{a as g,S as p,i as L}from"./assets/vendor-bac76ac5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v="44418472-b0d967fab2ad788a724b3e426",b="https://pixabay.com/api/";async function u(t,o=1,s=15){const a=`${b}?key=${v}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`;try{return(await g.get(a)).data}catch(e){throw console.error("Error fetching images:",e),e}}function f(t){const o=document.querySelector(".gallery"),s=t.map(e=>`
    <div class="gallery-box">
      <a href="${e.largeImageURL}" class="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}" class="img"/>
      </a>
      <div class="info">
        <div class="stats">
          <div class="info-box">
            <p class="info-header">Likes:</p>
            <p class="info-numbers">${e.likes}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Views:</p>
            <p class="info-numbers">${e.views}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Comments:</p>
            <p class="info-numbers">${e.comments}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Downloads:</p>
            <p class="info-numbers">${e.downloads}</p>
          </div>
        </div>
      </div>
    </div>
  `).join("");o.insertAdjacentHTML("beforeend",s),new p(".gallery a").refresh()}function q(){document.querySelector(".gallery").innerHTML=""}function m(){document.querySelector("#loader").classList.remove("hidden")}function h(){document.querySelector("#loader").classList.add("hidden")}function S(){document.querySelector("#load-more").classList.remove("hidden")}function y(){document.querySelector("#load-more").classList.add("hidden")}function w(){document.querySelector("#end-message").classList.remove("hidden")}function $(){document.querySelector("#end-message").classList.add("hidden")}function n(t){L.error({title:"Error",message:t,position:"topRight"})}let i="",l=1,d=0;const x=document.querySelector("#search-form"),E=document.querySelector("#load-more");x.addEventListener("submit",async t=>{t.preventDefault(),q(),y(),$();const o=t.target.elements.query;if(i=o.value.trim(),l=1,!i){n("Please enter a search query.");return}m();try{const s=await u(i,l);d=s.totalHits,s.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):(f(s.hits),d>15&&S())}catch{n("Failed to fetch images. Please try again later.")}finally{h()}o.value=""});E.addEventListener("click",async()=>{l+=1,m();try{const t=await u(i,l);f(t.hits),document.querySelectorAll(".gallery-item").length>=d&&(y(),w()),P()}catch{n("Failed to fetch images. Please try again later.")}finally{h()}});function P(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
