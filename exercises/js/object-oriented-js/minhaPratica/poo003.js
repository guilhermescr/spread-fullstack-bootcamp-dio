class Pai {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  say() {
    console.log(`${this.nome} says: Don't complain when I give you a order!`);
  }

  laugh() {
    console.log("Hahahaha!");
  }

  sneeze() {
    console.log("Atchim!");
  }
}

class Filho extends Pai {
  constructor(nome, idade, altura, cauda) {
    super(nome, idade, altura)
    this.cauda = cauda;
  }

  speak() {
    console.log(`Dad, I have a ${this.cauda} tail!`);
  }
}

const pai = new Pai("Ricardo", 32, 1.75);
const filho = new Filho("Ricardo Jr.", 12, 1.53, "red");

console.log(filho);