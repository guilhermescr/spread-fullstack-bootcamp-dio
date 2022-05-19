// Para concatenar com o método concat, faça o seguinte:

let nome = "Mario";
let sobrenome = "Luigi";
console.log(nome.concat(sobrenome));

// quebra linha
console.log("");

// Template Literals, interpolação:

console.log(`${nome} ${sobrenome}`);

// split
let frase = "Hey! I'm a software developer.";
frase.includes("Hey");

// métodos
/*
  item.length [mostra tamanho da string]

  item.includes("") [vê se tem algum caractere dentro da string]

  item.split("") [separa cada palavra]

  item.startsWith [vê se a string começa com alguma certa letra]

  item.endsWith [vê se a string termina com alguma certa letra]

  item.replace(",", "!") [item 1 = o que vc quer remover, item 2 = o que vc quer colocar no lugar do item que vai remover]
*/

var strings = `Métodos importantes:
[- Concatenação, - Propriedade length, - Iterabilidade, - Formatação, - Index de letras]`;