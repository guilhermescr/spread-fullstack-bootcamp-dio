// Syntatic sugar
class Comidas {
  constructor () {
    this.categoria = 'Pizza';
    this.type = 'Calabresa';
    this.preco = 'R$28.00';
  }

  // método propriedade de Meal
  smell(teste, dinheiro) {
    if (teste && dinheiro == this.preco) {
      return 'It was delicious and cheap.';
    } else {
      return 'So awful and pricey!';
    }
  }
}

let comida = new Comidas();
console.log(comida, "\n" + comida.smell(true, 'R$38.00'));