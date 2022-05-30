// A palavra reservada this é uma referência de contexto.
// Note: Uma função dentro de um objeto é chamada de método.

const pessoa = {
  firstName: "André",
  lastName : "Soares",
  id       : 1,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  getId: function() {
    return this.id;
  }
};

console.log(pessoa.fullName());
// "André Soares"
console.log(pessoa.getId());
// 1

// Manipulando seu valor ---------------------

// 1º Call:
const guiga = {
  nome: 'Games',
};

const animal = {
  nome: 'Murphy',
};

function getSomething() {
  return this.nome;
}
console.log("Call: " + getSomething.call(guiga));

// Apply - É possível passar parâmetros para essa função dentro de um array.
console.log("Apply: " + getSomething.apply(animal));

// 2º Call:
const myObj = {
  num1: 2,
  num2: 4,
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);
// 12

// Bind - CLona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.
const retornaNomes = function () {
  return this.nome;
};

let bruno = retornaNomes.bind({ nome: 'Bruno'});

console.log(bruno());
// Bruno