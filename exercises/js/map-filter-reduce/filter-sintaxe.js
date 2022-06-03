// Cria novo array, não altera array original.

const frutas = ['maçã do amor', 'maçã verde', 'abacaxi', 'banana'];
let novasFrutas = frutas.filter((fruta) => fruta.includes('maçã'));
console.log(novasFrutas);
console.log(frutas);