function filtraString(arr) {
  return arr.filter((item) => item.includes('é'));
}

const names = ['Maria', 'Clodoaldo', 'Mario', 'Montréal', 'Moskov', 'Ling', 'Levin', 'Ben', 'Gwen'];

console.log(filtraString(names));