/* Map
  Características:
    - Uma coleção de arrays no formato [chave, valor];
    - Pode ser iterado por um loop for..of
*/

// Methods
const myMap = new Map();
myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get("apple");
// "fruit"
myMap.delete("apple");
// true

/* meu exemplo */
function arrumaJogadores(map) {
  let lista = [];
  lista.push(map);
  return lista;
}
const jogadores = new Map();

jogadores.set('Guilherme', '10');
jogadores.set('Luisinho', '9');
jogadores.set('David', '13');
jogadores.set('Estevão', '7');

console.log(`Em campo, nós temos ${jogadores.size} jogadores. Agora vamos ver os nossos jogadores! Jogador 1 => Camisa ${jogadores.get('Guilherme')}, Jogador 2 => Camisa ${jogadores.get('Luisinho')}, Jogador 3 => Camisa ${jogadores.get('David')}, Jogador 4 => Camisa ${jogadores.get('Estevão')}. Essas pessoas são as lendas que irão brilhar no jogo de hoje!`);

console.log(arrumaJogadores(...jogadores));