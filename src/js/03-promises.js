const form = document.querySelector("form");

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
    const {
    elements: { amount, delay, step },
  } = e.currentTarget;

  let amountValue = Number(amount.value);
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
for (let i = 0; i <= amountValue; i += 1) {
  createPromise(i, delayValue)
    .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  delayValue += stepValue;
  }
};