function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: "Guilherme",
  idade: 17
};

const pessoa2 = {
  nome: "Karina",
  idade: 21
};

const animal = {
  nome: "Fiona",
  idade: 5,
  raca: "Pug"
};

console.log(calculaIdade.apply(pessoa1, [62]));