import { Notify } from 'notiflix/build/notiflix-notify-aio';

let getElement = selector => document.querySelector(selector)

let intervalID = null;

console.log(getElement('.form'));
console.log(getElement('input [name="delay"]'))
console.log(getElement('input [name="step"]'))
console.log(getElement('input [name="amount"]'))


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
