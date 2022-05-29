// IIFE = Immediately Invoked Function Expression/Execution.
(function() {
  console.log("You called an IIFE function!!!");
}
)();

// Com return.
(function () {
  return console.log("> anything <");
})();

// Com parâmetro.
let dobro = 98;

(function () {
  return console.log(dobro * 2); // 196
})(dobro);

// Modelo de código da aula de "Função autoinvocável e Callbacks".
(
  function() {
    let name = "Digital Innovation One & Spread Tecnology";
    return console.log(name);
  }
)();

// Função anônima atribuída à uma variável com uma função autoinvocável.
const multiply = (
  function(a, b) {
    return console.log(a + " * " + b + " = " + a*b);
  }
)(7, 8);