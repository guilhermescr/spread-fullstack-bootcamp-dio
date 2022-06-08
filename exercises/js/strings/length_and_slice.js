/*
    Lógica do slice:

  .slice(start, end);
  start começa no 0 mas só conta a partir do 1.
  end não conta o número que você passou como parâmetro. Funciona mais ou menos assim:

  frutas.slice(0, 6);
  Esse método vai pegar os caracteres que começam do 1 e vão até o 5.
  Então:
  (0, 6) = extraia os caracteres a partir de (start + 1) enquanto (caracter < end);
*/

// Ppos = zero começa no "M".
// Pneg = zero começa no "a".
let frutas = "Maçã, Banana, Pera, Melancia";

console.log("Comprimento (quantidade de caracteres) da string frutas: " + frutas.length);

console.log("Maçã começa na posição 0 e termina na posição 3");

// Parâmetro positivo, a posição começa pelo início.
console.log("Fruta: " + frutas.slice(0, 4));
// Parâmetro negativo, a posição começa pelo final.
console.log("Fruta: " + frutas.slice(-14));

// Metade da string
console.log("\nInício: " + frutas.slice(0, frutas.length/2 - 2));
console.log("Meio pro Final: " + frutas.slice(frutas.length/2));