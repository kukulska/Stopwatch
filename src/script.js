let currentSeconds = 0;
let currentMinutes = 0;
let currentHours = 0;
let intervalId;

function getMeasuredTime(currentSeconds) {
  let hoursCalculation = Math.floor(currentSeconds / 3600);
  let currentHours = hoursCalculation;
  let hours = document.querySelector("#hours");

  if (currentHours < 10) {
    hours.innerHTML = `0${currentHours} :`;
  } else {
    hours.innerHTML = `${currentHours} : `;
  }

  let minutesCalculation = Math.floor(
    (currentSeconds - currentHours * 3600) / 60
  );
  let currentMinutes = minutesCalculation;
  let minutes = document.querySelector("#minutes");

  if (currentMinutes < 10) {
    minutes.innerHTML = `0${currentMinutes} :`;
  } else {
    minutes.innerHTML = `${currentMinutes} :`;
  }

  let secondsCalculation =
    currentSeconds - currentHours * 3600 - currentMinutes * 60;
  let seconds = document.querySelector("#seconds");

  if (secondsCalculation < 10) {
    seconds.innerHTML = `0${secondsCalculation} `;
  } else {
    seconds.innerHTML = `${secondsCalculation} `;
  }
}

function getMeasuredSeconds() {
  currentSeconds = currentSeconds + 1;
  getMeasuredTime(currentSeconds);
}

function startTimer() {
  intervalId = setInterval(getMeasuredSeconds, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  currentSeconds = 0;
  currentMinutes = 0;
  currentHours = 0;
  let seconds = document.querySelector("#seconds");
  seconds.innerHTML = `${currentSeconds}0`;
  let minutes = document.querySelector("#minutes");
  minutes.innerHTML = `${currentMinutes}0 :`;
  let hours = document.querySelector("#hours");
  hours.innerHTML = `${currentHours}0 :`;
}

let startButton = document.querySelector("#start");
startButton.addEventListener("click", startTimer);

let stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", stopTimer);

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetTimer);
