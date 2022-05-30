// Anonymous Function assigned to a variable.
const anonymousMSG = function() {
  let msg = "It works"
  return msg + " now!";
}
console.log(anonymousMSG());

// IIFE. Immediately Invoked Function Expression.
const iifeFunc = (
  function(a, b) {
    return console.log(a + b);
  }
)(9, 6);

/* Callback structure */
function calc(a, b, c, m) {
  return average(a, b, c, m);
}

function average(a, b, c, media) {
  let sum = a + b + c;
  m = sum / 3;
  if (m >= media) {
    return "You're a sophomore. Grade: " + m.toFixed(1);
  } else {
    return "You have to study more! Grade: " + m.toFixed(1);
  }
}
const resultAverage = calc(8.9, 9.9, 7.2, 5.4);
console.log(resultAverage);

/* More callback examples */

const msg = function(type, texto) {
  return type(texto);
}

const intro = function(texto) {
  texto = "Hello! I'm Guilherme!";
  return texto;
}

const result = msg(intro, text);

console.log(result);