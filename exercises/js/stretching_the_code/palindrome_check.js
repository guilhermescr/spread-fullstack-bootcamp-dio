function palinCheck(word="") {
  if (word.length == "" || word == undefined) {
    return "|Error| Can you type a valid string, please?";
  } else {
    word = word.toUpperCase();
    let palin = word.split("").reverse().join("");
    if (word === palin) {
      return `Alright! ${word} is a palindrome!`;
    } else {
      return `Hey, ${word} is not a palindrome.`;
    }
  }
}
console.log(palinCheck("level"));