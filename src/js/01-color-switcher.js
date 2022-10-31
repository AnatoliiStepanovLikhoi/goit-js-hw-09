let getElement = selector => document.querySelector(selector)

getElement('button[data-start]').addEventListener('click', onColorChangeStart);
getElement('button[data-stop]').addEventListener('click', onColorChangeStop);

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
    getElement('button[data-start]').setAttribute('disabled', true)
};

function onColorChangeStop(event) {
    clearInterval(intervalID);
    getElement('button[data-start]').removeAttribute('disabled')
};

