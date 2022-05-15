function returnEvenValues(array) {
  let evenNums = [];
  for (let i = 0; 1 < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    }
  }
  console.log(`${array[i]} não é par!`);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);