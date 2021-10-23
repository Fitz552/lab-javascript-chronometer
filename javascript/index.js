const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  console.log(chronometer.currentTime)
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerHTML=minutes[0];
  minUniElement.innerHTML=minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerHTML=seconds[0];
  secUniElement.innerHTML=seconds[1];
}


// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.setAttribute("class", "btn stop");
  btnLeftElement.innerHTML= "STOP";
}

function setSplitBtn() {
  btnRightElement.setAttribute("class", "btn split");
  btnRightElement.innerHTML= "SPLIT";
}

function setStartBtn() {
  btnLeftElement.setAttribute("class", "btn start");
  btnLeftElement.innerHTML= "START";
}

function setResetBtn() {
  btnRightElement.setAttribute("class", "btn reset");
  btnRightElement.innerHTML= "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className.includes("start")) {   
    setStopBtn();
    setSplitBtn();
    chronometer.start();
  }
  else {
    setResetBtn();
    setStartBtn();
    console.log(chronometer.currentTime)
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});

let Id = setInterval(()=> {printTime()},1)
