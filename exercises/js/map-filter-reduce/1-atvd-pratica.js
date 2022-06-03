const maca = {
  value: 2,
}

const laranja = {
  value: 3,
}

const nums = [2, 4];

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));