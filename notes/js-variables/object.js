// Cria uma array
let obj = {};
// Adiciona uma key e um valor
obj.cpf = "054.275.314-75";
// console.log(obj);

// objeto.chave = "valor" -> cria uma chave e adiciona um valor a ela

// Object.keys(obj) = mostra todas as chaves do objeto obj

// Object.values(obj) = mostra todos os valores do objeto obj

let familia = {
  pai: {
    nome: "Salvador",
    idade: 60,
    profissao: "Auxiliar Administrativo"
  },

  mae: {
    nome: "Greicimar",
    idade: 54,
    profissao: "Professora"
  },

  filha: {
    nome: "Karina",
    idade: 21,
    profissao: "Técnica de Enfermagem"
  },

  filho: {
    nome: "Guilherme",
    idade: 17,
    profissao: "Estudante"
  }
}

console.log(familia.filho["nome"]);

// objeto.key = mostra o valor da chave

// objeto["chave"] -> mostra o valor da chave

// objeto["chaveNova"] = "Rock" -> cria nova chave dentro dos colchetes e adiciona um valor a chave através do sinal de igual

let variavelExistente = "valor";

// objeto.variavelExistente = "novoValor" -> cria uma chave com o nome "variavelExistente" e o valor "novoValor"

// objeto[variavelExistente] = "Carlos" -> o nome da chave será o valor da variavelExistente e o valor da chave será o que vem depois do igual

/*
  RESULTADO --
  valor: "Carlos"
*/