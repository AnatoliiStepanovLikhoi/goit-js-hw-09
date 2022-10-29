import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
      selectedDates = selectedDates[0];
    //   console.log(selectedDates);
      onInputDataCheck(selectedDates)
  },
};

let getElement = selector => document.querySelector(selector)
let selectedDates = [];
let intervalID;

console.log(selectedDates);

// console.log(getElement('#datetime-picker'));
// console.log(getElement('button[data-start]'));
// console.log(getElement('.value[data-days]'));
// console.log(getElement('.value[data-hours]'));
// console.log(getElement('.value[data-minutes]'));
// console.log(getElement('.value[data-seconds]'));

flatpickr(getElement('#datetime-picker'), options)

getElement('button[data-start]').setAttribute('disabled', true);

getElement('button[data-start]').addEventListener('click', onTimerStart)

function onInputDataCheck(date) {
    if (Date.now() > date) {
    return Notify.failure ("Please choose a date in the future")
    }

    Notify.success ("Please start the timer!")
    getElement('button[data-start]').removeAttribute('disabled');
}

function onTimerStart(event) {

}

function addLeadingZero(value) {
    padStart()
}

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

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




