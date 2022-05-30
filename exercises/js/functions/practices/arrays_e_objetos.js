/* Arrays
  - Técnica Spread: uma forma de lidar separadamente com elementos.
*/

function subtraction(x, y, z) {
  return x - y - z;
}

const numbers = [1, 2, 3];

console.log(subtraction(...numbers));
// [1, 2, 3] -> x = 1 | y = 2 | z = 3;

/* Rest:
  - Combina os argumentos em um array.
*/

function confereTamanho(...args) {
  console.log("___________________");
  console.log(args);
  return console.log(args.length);
}

confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 4, 5); // 3

/* Objetos
  - Object Destructuring: Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.
*/

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId({id}) {
  return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
  return `${first} ${last}`;
}

console.log(userId(user));
// 42
console.log(getFullName(user));
// John Doe