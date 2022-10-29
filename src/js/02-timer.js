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
      selectedDate = selectedDates[0];
      console.log(selectedDate);
      onInputDataCheck(selectedDate)
  },
};

let getElement = selector => document.querySelector(selector)
let selectedDate = [];
let intervalID;

console.log(selectedDate);

// console.log(getElement('#datetime-picker'));
// console.log(getElement('button[data-start]'));
// console.log(getElement('.value[data-days]'));
// console.log(getElement('.value[data-hours]'));
// console.log(getElement('.value[data-minutes]'));
// console.log(getElement('.value[data-seconds]'));

flatpickr(getElement('#datetime-picker'), options);

getElement('button[data-start]').setAttribute('disabled', true)

getElement('button[data-start]').addEventListener('click', onTimerStart)

function onInputDataCheck(date) {
    if (Date.now() > date) {
    return Notify.failure ("Please choose a date in the future")
    }

    Notify.success ("Please start the timer!")
    getElement('button[data-start]').removeAttribute('disabled');
}

function onTimerStart(event) {
  intervalID = setInterval(() => {
    let deltaTime = selectedDate - Date.now()

    if (deltaTime < 0) {
      return
    };

    let timeData = convertMs(deltaTime);

    onInterfaceAdd(timeData)
    
    getElement('button[data-start]').setAttribute('disabled', true)

    // console.log(timeData);
    // console.log(deltaTime);
  }, 1000)
  // console.log(intervalID);
}

function onInterfaceAdd({ days, hours, minutes, seconds }) {

  getElement('.value[data-days]').textContent = days;
  getElement('.value[data-hours]').textContent = hours;
  getElement('.value[data-minutes]').textContent = minutes;
  getElement('.value[data-seconds]').textContent = seconds;
}

function addLeadingZero(data) {
  return data.toString().padStart(2, '0');
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
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




