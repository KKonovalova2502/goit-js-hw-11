import{a as p,i as c,S as m}from"./assets/vendor-DU6yh4ar.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function h(r){return p.get("https://pixabay.com/api/",{params:{key:"49328511-2c3ca610241153d1ac84b83e7",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(n=>n.data.hits.length===0?(c.info({title:"No results!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),null):n.data.hits).catch(n=>{console.error("Error:",n)})}let l=null;function g(r){l=new m(r,{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function y(){l&&l.refresh()}function b(r,o){r.innerHTML="";const i=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:u,comments:f,downloads:d})=>`<li class="gallery-item">
          <a href="${e}" class="gallery-item-link">
            <img class="gallery-item-img" src="${n}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b>${s}</p>
            <p><b>Views:</b>${u}</p>
            <p><b>Comments:</b>${f}</p>
            <p><b>Downloads:</b>${d}</p>
          </div>
        </li>`).join("");r.insertAdjacentHTML("beforeend",i)}const a={form:document.querySelector(".form"),input:document.querySelector('[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};g(".gallery a");a.form.addEventListener("submit",r=>{r.preventDefault();const o=a.input.value.trim();if(a.gallery.innerHTML="",o===""){c.error({title:"Error:",message:"Please fill in the search field before submitting!",position:"topRight"});return}a.loader.hidden=!1,h(o).then(i=>{i&&(b(a.gallery,i),y())}).catch(i=>{console.error("Error:",i)}).finally(()=>{a.loader.hidden=!0,a.form.reset()})});
//# sourceMappingURL=index.js.map
