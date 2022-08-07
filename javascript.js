const days = document.querySelector(".days .number"),
  hours = document.querySelector(".hours .number"),
  minutes = document.querySelector(".minutes .number"),
  seconds = document.querySelector(".seconds .number");

let secondsValue = 60,
  minutesValue = 4,
  hoursValue = 1,
  daysValue = 9;

const timeFunction = setInterval(() => {

  secondsValue--;

  if (secondsValue === 0) {
    minutesValue--;
    secondsValue = 60;
  }
  if (minutesValue === 0) {
    hoursValue--;
    minutesValue = 60;
  }
  if (hoursValue === 0) {
    daysValue--;
    hoursValue = 23;
  }
  if (daysValue === 0) {
    clearInterval(timeFunction);
  }

  days.textContent = daysValue < 10 ? `0${daysValue}` : daysValue;
  hours.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
  minutes.textContent = minutesValue < 10 ? `0${minutesValue}` : minutesValue;
  seconds.textContent = secondsValue < 10 ? `0${secondsValue} ` : secondsValue;

}, 10);


