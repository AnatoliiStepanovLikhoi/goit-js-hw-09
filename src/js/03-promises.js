import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  distance: '20px',
  cssAnimationStyle: 'from-top',
  fontSize: '18px',
  // useFontAwesome: true,
  timeout: 4000,
  backOverlay: true,
  // plainText: false,
  clickToClose: true,
});

let getElement = selector => document.querySelector(selector)

let intervalID = null;
let delay = null;
let step = null;
let amount = null;

// console.log(getElement('.form'));
// console.log(getElement('input[name="delay"]'))
// console.log(getElement('input[name="step"]'))
// console.log(getElement('input[name="amount"]'))

getElement('.form').addEventListener('submit', onPromiseSubmit);

function toggleButtonDisabled() {
  getElement('button').toggleAttribute('disabled')
};

function onInputValues() {
  delay = Number(getElement('input[name="delay"]').value);
  step = Number(getElement('input[name="step"]').value);
  amount = Number(getElement('input[name="amount"]').value);
}

function onPromiseSubmit(event) {
  event.preventDefault();
  toggleButtonDisabled();
  onInputValues();

  // let delay = Number(getElement('input[name="delay"]').value);
  // let step = Number(getElement('input[name="step"]').value);
  // const amount = Number(getElement('input[name="amount"]').value);

  for (let index = 1; index <= amount; index += 1) {
    createPromise(index, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        // console.log("finally");
        if (index === amount) {
          toggleButtonDisabled()
          // console.log("finally");
        }
      });

    delay += step;
  };
  // console.log(delay);
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    intervalID = setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  });
};
