let hours=0;
let minutes = 0;
let seconds = 0;
let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;
let interval;

function updateStopwatch() {
    seconds++;
    if (seconds>=60) {
      seconds = 0;
      minutes++;
    }
    if (minutes>=60) {
      minutes = 0;
      hours++;
    }
    if(hours==12){
      resetStopwatch();
    }
    displayHours = (hours<10) ? "0" + hours : hours;
    displayMinutes = (minutes < 10) ? "0" + minutes : minutes;
    displaySeconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("stopwatch").innerHTML =displayHours+":"+ displayMinutes + ":" + displaySeconds;
  }

  function startStopwatch() {
    interval = setInterval(updateStopwatch, 1000);
  }

  function stopStopwatch() {
    clearInterval(interval);
  }

  function resetStopwatch() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    hours=0;
    document.getElementById("stopwatch").innerHTML = "00:00:00";
  }