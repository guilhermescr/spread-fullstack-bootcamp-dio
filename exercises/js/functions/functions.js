/* função autoinvocável/imediata
IIFE - Immediately invoked function expression

const nome = (
  function() {
    let nickname = "Gui";
    return nickname;
  }
)();
console.log(nome);
*/

/* Valores padrão
  function exponencial(array, num=1) {
    let parametro = "Valor padrão ao parâmetro é adicionado";
  }
*/

/* arguments
  Um array com todos os parâmetros passados quando a função foi invocada.
*/