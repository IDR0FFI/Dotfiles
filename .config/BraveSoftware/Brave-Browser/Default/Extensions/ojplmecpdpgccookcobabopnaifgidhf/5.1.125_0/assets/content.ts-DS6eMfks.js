import{b as D,C as x,s as W,r as B}from"./applyThems-BXA35g4K.js";import{m as $}from"./sentry-y_Iga7PX.js";import{A as N,B as w,C as p,g as v,t as F,D as H,E as b,F as Y,G as l,H as K,I,J as q,K as V,L as G}from"./utility_all2-0mYDd1Oa.js";import"./autoCouponUI-BSRHB3pC.js";let s=document.getElementById("bh-crx-root"),g=null,i=null,c=!1,m=null,y=null,d=null,E=null,L="",h=!1,a=null;function _(){if(i){try{typeof i.$destroy=="function"?i.$destroy():typeof i.destroy=="function"&&i.destroy()}catch{}i=null}}function O(){m&&(m.disconnect(),m=null),y!==null&&(clearInterval(y),y=null),d&&(window.removeEventListener("message",d),d=null),_(),s&&s.parentNode&&(s.parentNode.removeChild(s),s=null)}function J(o=!1){const t=document.getElementById("bh-crx-root");t?t.style.display="block":c||S(o)}function A(o,t={}){if(E)try{E.postMessage({type:o,source:"buyhatke-extension",payload:t},L||"*")}catch{}}function j(){E=null,L="",B(),h=!1,q(!1),V(!1),I.set({...G,couponList:[],iframePOSList:[],iframeURLList:[]}),u()}function z(o){var n,r;const t=(n=o.data)==null?void 0:n.payload;if(!t||o.source===window)return;a&&(clearTimeout(a),a=null),E=o.source,L=o.origin,W({isActive:!0,iframeOrigin:o.origin,iframeUrl:((r=t==null?void 0:t.iframeURLList)==null?void 0:r[0])||(t==null?void 0:t.iframeUrl)||""}),I.set(t);const e=b(I);h=!!(e.showAutoCoupon||e.showAutoCouponPopup),h?J(!0):u()}function Q(o){if(o===window.location.origin)return!0;if(o.startsWith("chrome-extension://")){if(chrome.runtime&&chrome.runtime.id){const e=`chrome-extension://${chrome.runtime.id}`;return o===e}return!1}return K().some(e=>{if(o===e)return!0;const n=o.replace(/^https?:\/\/www\./,"https://"),r=e.replace(/^https?:\/\/www\./,"https://");return n===r})}function X(o){const t=p();return t.length===0?!1:t.some(e=>{try{const n=new URL(e.src||"").origin;return n===o||n.replace(/^https?:\/\/www\./,"https://")===o.replace(/^https?:\/\/www\./,"https://")}catch{return!1}})}function u(){const o=p(),t=document.getElementById("bh-crx-root");o.length>0&&!h?t&&(t.style.display="none"):t?t.style.display="block":!i&&!c&&S(h)}async function S(o=!1){if(c||i)return i;try{if(c=!0,!N())return null;if(g=await v()||await F(),!(g&&!H(g))){if(p().length>0&&!o)return null}const t=b(Y).untrustedComparisonBar||!1;if(g||t){s&&(_(),s.parentNode&&s.parentNode.removeChild(s)),s=document.createElement("div"),s.id="bh-crx-root",s.setAttribute("style","display: block !important;"),document.body.appendChild(s);const e=s.attachShadow({mode:"closed"}),n=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-400-normal.woff2"),r=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-500-normal.woff2"),C=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-600-normal.woff2"),f=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-700-normal.woff2"),P=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-400-normal.woff"),T=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-500-normal.woff"),k=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-600-normal.woff"),R=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-700-normal.woff"),M=document.createElement("style");M.textContent=`
		  @font-face {
			font-family: 'Metropolis';
			src: url(${n}) format('woff2');
			src: url(${P}) format('woff');
			font-weight: 400;
			font-display: swap;
			font-style: normal;
		  }
		  @font-face {
			font-family: 'Metropolis';
			src: url(${r}) format('woff2');
			src: url(${T}) format('woff');
			font-weight: 500;
			font-display: swap;
			font-style: normal;
		  }
		  @font-face {
			font-family: 'Metropolis';
			src: url(${C}) format('woff2');
			src: url(${k}) format('woff');
			font-weight: 600;
			font-display: swap;
			font-style: normal;
		  }
		  @font-face {
			font-family: 'Metropolis';
			src: url(${f}) format('woff2');
			src: url(${R}) format('woff');
			font-weight: 700;
			font-display: swap;
			font-style: normal;
		  }
			`,e.appendChild(M),D(e);const U=$(x,{target:e});return i=U,U}}catch{i=null}finally{c=!1}return null}const nt=S();if(N()){d=t=>{if(!t.data||t.data.source!=="buyhatke-extension")return;const{type:e}=t.data;if(t.source===window){e===l.MAIN_APPLY_CLICKED?A(l.COMMAND_APPLY_CLICKED):e===l.MAIN_PANEL_CLOSED?A(l.COMMAND_PANEL_CLOSED):e===l.MAIN_POPUP_CLOSED&&A(l.COMMAND_POPUP_CLOSED);return}if(Q(t.origin)){if(e===l.STATE_SYNC){z(t);return}if(e==="BUYHATKE_IFRAME_LOADED"){if(a&&(clearTimeout(a),a=null),!X(t.origin))return;const n=document.getElementById("bh-crx-root");n&&(n.style.display="none")}else e==="BUYHATKE_IFRAME_UNLOADED"&&(a&&(clearTimeout(a),a=null),a=setTimeout(()=>{p().length===0&&j(),a=null},100))}},window.addEventListener("message",d),m=new MutationObserver(t=>{t.forEach(e=>{e.addedNodes.forEach(n=>{if(n.nodeType===Node.ELEMENT_NODE){const r=n;r.tagName==="IFRAME"&&w(r.src||"")&&u(),r.querySelectorAll("iframe").forEach(f=>{w(f.src||"")&&u()})}}),e.removedNodes.forEach(n=>{if(n.nodeType===Node.ELEMENT_NODE){const r=n;r.tagName==="IFRAME"&&w(r.src||"")&&setTimeout(()=>{u()},50),(r.querySelectorAll?r.querySelectorAll("iframe"):[]).forEach(f=>{w(f.src||"")&&setTimeout(()=>{u()},50)})}})})}),m.observe(document.body,{childList:!0,subtree:!0});let o=0;y=window.setInterval(()=>{const e=p().length;e!==o&&(u(),o=e)},2e3),window.addEventListener("beforeunload",O),window.addEventListener("pagehide",O)}export{nt as default};
