const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const buttonCreatePromice = document.querySelector('button[type="submit"]');

buttonCreatePromice.addEventListener('click', clickCreatePromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function clickCreatePromise(evt) {
  evt.preventDefault();
  let valueDelay = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    let promiseDelay = valueDelay + stepValue * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
