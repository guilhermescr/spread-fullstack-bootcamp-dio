/*
  Palíndromo:
    - "Frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa."
*/

// solução 1

function verificaPalindromo(string) {
  if (!string) return "string inexistente";

  // split("") -> separa cada letra da string e transforma ela em um array.

  // reverse() -> inverte todas as letras. ex: amor = roma.

  // join("") -> junta todas as letras separadas pelo split(), concatenando-às como String.
  return string.split("").reverse().join("") === string;
}

// Se true: é um palíndromo
// Se false: não é um palíndromo
// console.log(verificaPalindromo("ana"));

// solução 2

function verificaPalindromo2(string) {
  if (!string) return "string inexistente";

  // índice começa no zero
  // length começa no um
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindromo2("abba"));