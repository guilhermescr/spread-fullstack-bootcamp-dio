function mostraIdade(nome, idade) {
  let msg = `A idade de ${nome} é ${idade}.`;
  return console.log(msg);
}

function mostraCidade(nome, cidade) {
  let msg = `A cidade de ${nome} é ${cidade}.`;
  return console.log(msg);
}

function mostraHobby(nome, hobby) {
  let msg = `O hobby de ${nome} é ${hobby}!`;
  return console.log(msg);
}

export {
  mostraIdade, mostraCidade, mostraHobby
};