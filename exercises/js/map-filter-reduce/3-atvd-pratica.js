function filtraPares(arr) {
  return arr.filter(callbackPar);
}

function filtraImpares(arr) {
  return arr.filter(callbackImpar);
}

function callbackPar(item) {
  /* Outro jeito de descobrir se um número do array é ímpar:
  return item % 2 !== 0;
  */
  return item % 2 === 0;
}

function callbackImpar(item) {
  return item % 2 === 1;
}

const meuArray = [1, 9902, 55, 24, 78, 9, 11];

console.log(filtraPares(meuArray));
console.log(filtraImpares(meuArray));