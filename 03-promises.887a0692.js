const e=document.querySelector("form");let t=Number(document.querySelector("input[name='delay']").value),o=Number(document.querySelector("input[name='step']").value),n=Number(document.querySelector("input[name='amount']").value);function u(e,t){return new Promise(((o,n)=>{const u=Math.random()>.3;setTimeout((()=>{u?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(let e=0;e<=n;e+=1)u(e,t).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),t+=o}));
//# sourceMappingURL=03-promises.887a0692.js.map
