const e=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]'),o=document.querySelector('[name="amount"]');function n(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(l){l.preventDefault();let u=Number(e.value),i=Number(t.value),r=Number(o.value);for(let e=1;e<=r;e+=1){n(e,u+i*e).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.5e1b408a.js.map
