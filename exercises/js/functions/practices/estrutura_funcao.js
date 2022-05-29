// Variables
let r = 0;

// Operators
function sumNums(a, b) {
  r = a + b;
  return r;
}

function subtracNums(a, b) {
  r = a - b;
  return r;
}

function multiplyNums(a, b) {
  r = a * b;
  return r;
}

function divideNums(a, b) {
  r = a / b;
  return r;
}

// Prints
console.log("Soma: " + sumNums(10, 25)); // 35

console.log("Subtração: " + subtracNums(10, 25)); // -15

console.log("Multiplicação: " + multiplyNums(10, 25)); // 50

console.log("Divisão: " + divideNums(10, 25)); // 0.4