const form = document.querySelector("form");

let delay = Number(document.querySelector("input[name='delay']").value);
let step = Number(document.querySelector("input[name='step']").value);
let amount = Number(document.querySelector("input[name='amount']").value);

form.addEventListener("submit", onSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => { 
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay)
  })
  };


function onSubmit(e) {
  e.preventDefault();
for (let i = 0; i <= amount; i += 1) {
  createPromise(i, delay)
    .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  delay += step;
  }
};