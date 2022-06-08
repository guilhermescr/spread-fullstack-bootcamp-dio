// Substring
// Diferente do slice, o substring contabiliza números negativos como zero.
let nomes = "Pedro, Carlos, João, Antonieta";
console.log("Comprimento " + nomes.length);
console.log(nomes.substring(7, nomes.length/2));

// Substr
// Segundo parâmetro especifica o comprimento da parte extraída.
console.log("\nNome: " + nomes.substr(15, 4));