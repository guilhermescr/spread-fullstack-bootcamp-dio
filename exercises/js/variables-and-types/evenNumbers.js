// meu jeito
function compareEvenNumbers() {
  let numbers = [1, 3, 4, 6, 80, 33, 23, 90];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = 0;
    }
  }
  console.log(numbers);
}

compareEvenNumbers();
console.log("-----------------------");

// jeito da pró
function substituiPares(array) {
  if (!array) return -1;
  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Você já é zero!");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituíndo ${array[i]} por 0...`);
      array[i] = 0;
    }
  }

  return array;
}

let lista = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(false));