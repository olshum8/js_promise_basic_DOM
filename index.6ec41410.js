var e=new Promise(function(e){document.querySelector(".logo").addEventListener("click",function(){e()})}),t=new Promise(function(e,t){window.setTimeout(t,3e3)});e.then(function(){var e=document.createElement("vid");e.classList.add("message"),e.textContent="Promise was resolved!",document.body.appendChild(e)}),t.catch(function(){var e=document.createElement("vid");e.classList.add("message","error-message"),e.textContent="Promise was rejected!",document.body.appendChild(e)});
//# sourceMappingURL=index.6ec41410.js.map