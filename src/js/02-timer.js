import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputDate = 'input#datetime-picker';
const startButton = document.querySelector('button[data-start]');
const outputDays = document.querySelector('[data-days]');
const outputHours = document.querySelector('[data-hours]');
const outputMinutes = document.querySelector('[data-minutes]');
const outputSeconds = document.querySelector('[data-seconds]');
startButton.addEventListener('click', onStartBtn)
startButton.disabled = true;
const delay = 1000;
let intervalId = null;
let selectedDate = null;
let currentDate = null;
let remainingTime = 0

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDate(selectedDates);
  },
};

flatpickr(inputDate, options);

function checkDate(selectedDates) {
    selectedDate = (selectedDates[0].getTime());
    currentDate = new Date().getTime();

    if (selectedDate > currentDate) {
        startButton.disabled = false;
        return
    }
    alert('Please choose a date in the future');
};

function onStartBtn() {
    intervalId = setInterval(() => {
        if (selectedDate - currentDate <= 1000) {
            clearInterval(intervalId);
            startButton.disabled = true;
            return
        } else {
          startButton.disabled = true;
          currentDate += 1000;
          remainingTime = Math.floor(selectedDate - currentDate);
          convertMs(remainingTime);
        }
    }, delay)
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
 }

function createMarkup({ days, hours, minutes, seconds }) {
    outputDays.textContent = days;
    outputHours.textContent = hours;
    outputMinutes.textContent = minutes;
    outputSeconds.textContent = seconds;
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  createMarkup({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
};