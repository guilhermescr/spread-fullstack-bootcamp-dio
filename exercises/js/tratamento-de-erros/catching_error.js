function multiplyingNums(n1, n2) {
  try {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') throw Error("Only number values greater than zero are accepted here!");
    if (n1 === 0 || n2 === 0) throw Error("We don't accept empty values. Try it again!");
    let res = n1 * n2;
    if (n1 < n2) {
      let msg = `${n2} * ${n1} = ${res}`;
      return msg;
    }
    if (n1 > n2 || n1 == n2) {
      let msg = `${n1} * ${n2} = ${res}`;
      return msg;
      }
    }
    catch(e) {
    console.log("Follow the rules and try it again.");
  }
}
console.log(multiplyingNums(98, 29));