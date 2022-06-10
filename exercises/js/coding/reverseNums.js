let x = 32243;
function reverseNums(num) {
  num = num.toString();
  let reversed = num.split("").reverse().join("");
  return reversed;
}
console.log(Number(reverseNums(x)));