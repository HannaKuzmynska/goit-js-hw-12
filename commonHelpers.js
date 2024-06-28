import{a as g,S as L,i as v}from"./assets/vendor-bac76ac5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const b="44418472-b0d967fab2ad788a724b3e426",q="https://pixabay.com/api/";async function f(t,o=1,a=15){const r=`${q}?key=${b}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${a}`;try{return(await g.get(r)).data}catch(e){throw console.error("Error fetching images:",e),e}}let n;function m(t){const o=document.querySelector(".gallery"),a=t.map(r=>`
    <div class="gallery-box">
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" class="img"/>
      </a>
      <div class="info">
        <div class="stats">
          <div class="info-box">
            <p class="info-header">Likes:</p>
            <p class="info-numbers">${r.likes}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Views:</p>
            <p class="info-numbers">${r.views}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Comments:</p>
            <p class="info-numbers">${r.comments}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Downloads:</p>
            <p class="info-numbers">${r.downloads}</p>
          </div>
        </div>
      </div>
    </div>
  `).join("");o.insertAdjacentHTML("beforeend",a),n?n.refresh():n=new L(".gallery a")}function S(){document.querySelector(".gallery").innerHTML="",n&&(n.destroy(),n=null)}function y(){document.querySelector("#loader").classList.remove("hidden")}function h(){document.querySelector("#loader").classList.add("hidden")}function w(){document.querySelector("#load-more").classList.remove("hidden")}function p(){document.querySelector("#load-more").classList.add("hidden")}function $(){document.querySelector("#end-message").classList.remove("hidden")}function E(){document.querySelector("#end-message").classList.add("hidden")}function i(t){v.error({title:"Error",message:t,position:"topRight"})}let l="",c=1,u=0;const P=document.querySelector("#search-form"),x=document.querySelector("#load-more");P.addEventListener("submit",async t=>{t.preventDefault(),S(),p(),E();const o=t.target.elements.query;if(l=o.value.trim(),c=1,!l){i("Please enter a search query.");return}y();try{const a=await f(l,c);u=a.totalHits,a.hits.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(m(a.hits),u>15&&w())}catch{i("Failed to fetch images. Please try again later.")}finally{h()}o.value=""});x.addEventListener("click",async()=>{c+=1,y();try{const t=await f(l,c);m(t.hits),document.querySelectorAll(".gallery-item").length>=u&&(p(),$()),I()}catch{i("Failed to fetch images. Please try again later.")}finally{h()}});function I(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
