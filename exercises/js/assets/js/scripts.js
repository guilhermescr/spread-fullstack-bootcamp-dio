var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var resetBtn = document.getElementById('reset');

function increment() {
  if (currentNumber < 10) {
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}

function decrement() {
  if (currentNumber > 0) {
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}

function resetCounter() {
  currentNumber = 0;
  currentNumberWrapper.innerHTML = currentNumber;
}