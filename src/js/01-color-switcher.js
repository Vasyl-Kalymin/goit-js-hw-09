const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
const body = document.body;
const delay = 1000;
let idInterval = null;
stoptBtn.disabled = true;

startBtn.addEventListener('click', clickStartBtn);
stoptBtn.addEventListener('click', clickStopBtn);

function clickStartBtn() {
    startBtn.disabled = true;
    stoptBtn.disabled = false;

    idInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, delay);
};

function clickStopBtn() {
    startBtn.disabled = false;
    stoptBtn.disabled = true;
    clearInterval(idInterval);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};