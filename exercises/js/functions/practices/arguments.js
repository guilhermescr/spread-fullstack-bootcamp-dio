/* Objeto "arguments"
  - Um array com todos os parâmetros passados quando a função foi invocada.
*/

// Primeiro xemplo da prof:
function findMax() {
  let max = -Infinity;

  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  
  return max;
}

console.log(findMax(1, 2, 3, 6, 90, 1));

// Segundo xemplo da prof:
function showArgs() {
  return arguments;
}
console.log(showArgs(1, 2, [2, 3, 4], "string", true));