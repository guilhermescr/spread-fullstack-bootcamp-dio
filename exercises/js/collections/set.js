/* Set
  | Sets são estruturas que armazenam apenas valores únicos. Ex: Only Numbers.
*/

// Methods (Adicionar[1], Consultar[2] e Deletar[3])
const mySet = new Set();
/* Add */
mySet.add(1);
mySet.add(5);
console.log(mySet);

/* Consultar */
mySet.has(1);
console.log(mySet);
// true

mySet.has(3);
console.log(mySet);
// false

/* Delete */
mySet.delete(5);
console.log(mySet);