import{b as L,C as M}from"./applyThems-BXA35g4K.js";import{m as D}from"./sentry-y_Iga7PX.js";import{M as R,g as _,t as I}from"./utility_all2-0mYDd1Oa.js";import"./autoCouponUI-BSRHB3pC.js";let t=document.getElementById("bh-crx-root"),a,o=null,s=!1,i=!1;function c(){if(o){try{typeof o.$destroy=="function"?o.$destroy():typeof o.destroy=="function"&&o.destroy()}catch{}o=null}}function r(e,f){try{if(window.parent&&window.parent!==window){if(e==="BUYHATKE_IFRAME_LOADED"&&i)return;window.parent.postMessage({type:e,source:"buyhatke-extension",url:f||window.location.href},"*"),e==="BUYHATKE_IFRAME_LOADED"&&(i=!0)}}catch{}}function T(){c(),r("BUYHATKE_IFRAME_UNLOADED"),t&&t.parentNode&&(t.parentNode.removeChild(t),t=null),i=!1}async function d(){if(s||o)return o;try{if(s=!0,!R())return null;if(a=await _()||await I(),a){t&&(c(),t.parentNode&&t.parentNode.removeChild(t)),t=document.createElement("div"),t.id="bh-crx-root",t.setAttribute("style","display: block !important;"),document.body.appendChild(t);const e=t.attachShadow({mode:"closed"}),f=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-400-normal.woff2"),w=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-500-normal.woff2"),h=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-600-normal.woff2"),y=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-700-normal.woff2"),E=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-400-normal.woff"),U=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-500-normal.woff"),A=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-600-normal.woff"),g=chrome.runtime.getURL("src/ui/assets/fonts/metropolis-latin-700-normal.woff"),l=document.createElement("style");return l.textContent=`
			  @font-face {
				font-family: 'Metropolis';
				src: url(${f}) format('woff2');
				src: url(${E}) format('woff');
				font-weight: 400;
				font-display: swap;
				font-style: normal;
			  }
			  @font-face {
				font-family: 'Metropolis';
				src: url(${w}) format('woff2');
				src: url(${U}) format('woff');
				font-weight: 500;
				font-display: swap;
				font-style: normal;
			  }
			  @font-face {
				font-family: 'Metropolis';
				src: url(${h}) format('woff2');
				src: url(${A}) format('woff');
				font-weight: 600;
				font-display: swap;
				font-style: normal;
			  }
			  @font-face {
				font-family: 'Metropolis';
				src: url(${y}) format('woff2');
				src: url(${g}) format('woff');
				font-weight: 700;
				font-display: swap;
				font-style: normal;
			  }
				`,e.appendChild(l),L(e),o=D(M,{target:e}),r("BUYHATKE_IFRAME_LOADED"),o}}catch(e){console.error("BuyHatke: Error mounting in iframe:",e),o=null}finally{s=!1}return null}let n=null;function m(){n!==null&&clearTimeout(n),n=window.setTimeout(()=>{d(),n=null},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m();const B=d();let u=!1;function p(e){u||(r(e),u=!0),T()}window.addEventListener("beforeunload",()=>{p("BUYHATKE_IFRAME_UNLOADED")});document.addEventListener("visibilitychange",()=>{document.hidden&&r("BUYHATKE_IFRAME_HIDDEN")});window.addEventListener("pagehide",()=>{p("BUYHATKE_IFRAME_UNLOADED")});export{B as default};
