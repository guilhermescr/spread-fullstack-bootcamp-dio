/* Callback:
  - Função passada como um parâmetro/argumento para outra função.

  Programação assíncrona:
  - Código é executado depois que algo acontece, de modo não sequencial.
*/

/* Meu exemplo:

  const mensagem = function() {
  console.log("Essa mensagem é exibida depois de 3 segundos.");
  }

  Quero que a função mensagem seja executada depois de 3 segundos.
    setTimeout(mensagem, 3000);
  Note: 1 sec = 1000ms;

*/

// Exemplo da aula:

const calc = function(operacao, num1, num2) {
  return operacao(num1, num2);
}

const soma = function(num1, num2) {
  return num1 + num2;
}

const sub = function(num1, num2) {
  return num1 - num2;
}

const multi = function(num1, num2) {
  return num1 * num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);
const resultMultiply = calc(multi, 5, 5);

console.log(resultSoma); // 3
console.log(resultSub); // -1
console.log(resultMultiply); // 25