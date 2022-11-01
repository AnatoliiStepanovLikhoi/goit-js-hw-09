let getElement = selector => document.querySelector(selector)

const startRef = getElement('button[data-start]')
const stopRef = getElement('button[data-stop]')

startRef.addEventListener('click', onColorChangeStart);
stopRef.addEventListener('click', onColorChangeStop);

// console.log(getElement('button[data-stop]'));

let intervalID;

function onBackgroundChangeRandom() {
    getElement('body').style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChangeStart (event) {
    intervalID = setInterval(onBackgroundChangeRandom, 1000);
    startRef.setAttribute('disabled', true)
};

function onColorChangeStop(event) {
    clearInterval(intervalID);
    startRef.removeAttribute('disabled')
};

