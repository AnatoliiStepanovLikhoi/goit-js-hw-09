let t,e=t=>document.querySelector(t);function a(){e("body").style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}e("button[data-start]").addEventListener("click",(function(n){t=setInterval(a,1e3),e("button[data-start]").setAttribute("disabled",!0)})),e("button[data-stop]").addEventListener("click",(function(a){clearInterval(t),e("button[data-start]").removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.8804dfe0.js.map