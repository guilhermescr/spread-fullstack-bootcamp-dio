const div = document.getElementById('pokemons');
const url = 'https://pokeapi.co/api/v2/pokemon/pikachu/';

fetch(url)
  .then((poke) => poke.json())
  .then(function (data) {
      console.log(data);
      let novaDiv = document.createElement('div');
      novaDiv.innerHTML = `${data.name} (${data.id}) \n ${data.forms.name}`;
      div.appendChild(novaDiv);

      /*
      return data.map(function (pokemon) {
        let novaDiv = document.createElement('div');
        novaDiv.innerHTML = `${pokemon.name} (${pokemon.id})`;
        div.appendChild(novaDiv);
      })
      */
  })
  .catch((error) => {
    console.log('Oops!' + error);
  })