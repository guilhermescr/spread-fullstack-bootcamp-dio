// Replace method (by default it's case sensitive)
let nomeCompleto = "Guilherme Santos Chaves Rocha";
/*
  Primeiro parâmetro:
    - O que eu quero tirar da string.
  Segundo parâmetro:
    - O que eu quero colocar no lugar do que vou tirar.
*/

// Sensitive Match
let nomeDaIrma = nomeCompleto.replace("Guilherme", "Karina");

// Insensitive Match
let nomeDaIrmaInsensitive = nomeCompleto.replace(/GUILHERME/i, "Karina");

// Global Match
let nomeDaIrmaGlobal = nomeCompleto.replace(/Guilherme/g, "Karina");

console.log(`- Nome da Irmã (Sensitive): ${nomeDaIrma}\n- Nome da Irmã (Insensitive): ${nomeDaIrmaInsensitive}\n- Nome da Irmã (Global): ${nomeDaIrmaGlobal}`)

// Replacing comma.
let valores = ["R$15,00\n", "R$390,00\n", "R$2,00\n", "R$78,00"];
let novosValores = [""];

console.log("\nReposicionando vírgula por ponto...");
console.log("Valores velhos:\n", ...valores);

for(valor of valores) {
  novosValores.push(valor.replace(",", "."));
}
console.log("Valores novos:");
console.log(...novosValores);
/*
  Outra forma para resolver o problema:

  for(let i = 0; i < valores.length; i++) {
    novosValores[i] = valores[i].replace(",", ".");
  }
  console.log(novosValores);
*/