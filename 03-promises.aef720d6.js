var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var o=i("iQIUW");o.Notify.init({distance:"20px",cssAnimationStyle:"from-top",fontSize:"18px",timeout:4e3,backOverlay:!0,clickToClose:!0});let l=e=>document.querySelector(e),r=null,u=null,a=null,s=null;function d(){l("button").toggleAttribute("disabled")}function f(e,t){const n=Math.random()>.3;return new Promise(((i,o)=>{r=setTimeout((()=>{n?i({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l(".form").addEventListener("submit",(function(e){e.preventDefault(),d(),u=Number(l('input[name="delay"]').value),a=Number(l('input[name="step"]').value),s=Number(l('input[name="amount"]').value);for(let e=1;e<=s;e+=1)f(e,u).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})).finally((()=>{e===s&&d()})),u+=a}));
//# sourceMappingURL=03-promises.aef720d6.js.map