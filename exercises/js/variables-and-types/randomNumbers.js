let min = document.getElementById("n1");
let max = document.getElementById("n2");
let result = document.getElementById("randomN");
let btn = document.getElementById("generateBtn");

function getRandomNum(min, max) {
  var generatedNumber = Math.floor(Math.random() * max) + min;
  result.innerHTML = Math.floor(generatedNumber);
}