// como exportar:
export function someNums(a, b) {
  let res1 = a + b;
  return console.log(res1);
}

// outra forma:
function subtraiaNums(a, b) {
  let res2 = a - b;
  return console.log(res2);
}

export {
  subtraiaNums
}