// Uma variável pode armazenar uma função.
const soma = function (a, b) {
  let r = a + b;
  return console.log(r);
}

soma(1, 2); // 3
soma(5, 4); // 9

const multiply = function (a, b) {
  return a * b;
}

// A.K.A function expression.
console.log("Multiplicação: " + multiply(9, 3)); // 27

const average = function(a, b, c, m) {
  let sum = a + b + c;
  m = sum / 3;
  return m.toFixed(1);
}

console.log("Média: " + average(9.8, 7.2, 7.7));

console.log("---------------------------");

let show = function() {
  console.log("This is a message. Get outta here!");
}
show();