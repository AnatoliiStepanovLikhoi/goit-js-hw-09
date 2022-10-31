import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_green.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '350px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '10px',
  timeout: 3000,
})

const options = {
  enableTime: true,
  enableSeconds: false,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  allowInput: true,
  dateFormat: 'D, d M Y, H:i',
  // minDate: Date.now(),
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    console.log(selectedDate);
    onInputDataCheck(selectedDate);
    onTimeSet();
  },
};

let getElement = selector => document.querySelector(selector)
let selectedDate = [];
let intervalID;

flatpickr(getElement('#datetime-picker'), options);

// console.log(selectedDate);
// console.log(getElement('#datetime-picker'));
// console.log(getElement('button[data-start]'));
// console.log(getElement('button[data-stop]'));
// console.log(getElement('.value[data-days]'));
// console.log(getElement('.value[data-hours]'));
// console.log(getElement('.value[data-minutes]'));
// console.log(getElement('.value[data-seconds]'));

getElement('button[data-start]').addEventListener('click', onTimerStart)
getElement('button[data-stop]').addEventListener('click', onTimerStop)

toggleButtonsActivity()
// getElement('button[data-start]').setAttribute('disabled', true)
// getElement('button[data-stop]').setAttribute('disabled', true)

function toggleButtonsActivity() {
  getElement('button[data-start]').toggleAttribute('disabled');
  getElement('button[data-stop]').toggleAttribute('disabled');
};

function onInputDataCheck(date) {
    if (Date.now() > date) {
    return Notify.failure ("Please choose a date in the future")
  }
  // console.log(date);
  // console.log(Date.now());
    Notify.success ("Please start the timer!")
    getElement('button[data-start]').removeAttribute('disabled');
};

function onTimerStart(event) {
  intervalID = setInterval(onTimeSet, 1000);
  // getElement('button[data-stop]').removeAttribute('disabled')
  // getElement('button[data-start]').setAttribute('disabled', true)
  // console.log(intervalID);
  toggleButtonsActivity()
};

function onTimerStop() {
  clearInterval(intervalID);
  onCounterClear();
  Notify.warning('Timer has stopped');
  getElement('button[data-stop]').setAttribute('disabled', true);
  // toggleButtonsActivity()
};

function onTimeSet() {
  let deltaTime = selectedDate - Date.now()

    if (deltaTime < 0) {
      return
    };

    let timeData = convertMs(deltaTime);
    onInterfaceAdd(timeData)
    console.log(timeData);
    // console.log(deltaTime);
};

function onInterfaceAdd({ days, hours, minutes, seconds }) {
  getElement('.value[data-days]').textContent = days;
  getElement('.value[data-hours]').textContent = hours;
  getElement('.value[data-minutes]').textContent = minutes;
  getElement('.value[data-seconds]').textContent = seconds;
};

function onCounterClear() {
  getElement('.value[data-days]').textContent = "00";
  getElement('.value[data-hours]').textContent ="00";
  getElement('.value[data-minutes]').textContent = "00";
  getElement('.value[data-seconds]').textContent = "00";
};

function addLeadingZero(data) {
  return data.toString().padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




