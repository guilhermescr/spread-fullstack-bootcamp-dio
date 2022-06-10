/* Questions in:
  https://www.java67.com/2018/04/21-string-programming-and-coding-interview-questions-answers.html
*/

/*
  2- How to remove all duplicates from a given string?

    - Write a program to remove all the duplicate characters from a given input String, like, if the given String is "Java" then the output should be "Java". The second or further occurrence of duplicates should be removed.

*/
console.log("Question 2 ----------");

function validateString(str) {
  if (typeof str !== 'string') {
    return false
  }
  return true;
}

function checkinclude(word, input) {
  if (input !== word) {
    let includedWord = input.includes(word) ? true : false;
    return includedWord;
  }
}

function avoidingDuplicates(word, input) {
  console.log("\nChecking if the sent string is valid...\n");
  console.log(`Word: ${word} \nInput: ${input}`);

  let validation = validateString(input);
  if (!validation) {
    return `${input} is not a string. Please, send a string!`;
  }

  if (input === word) {
    return input + " is correct.";
  }

  let result = checkinclude(word, input);
  if (result) {
    return "Extracted word from input: " + word;
  } else {
    return `Bang. There's a difference between ${input} and ${word}`;
  }
}

let myInput = 0;
console.log(avoidingDuplicates("JavaScript", myInput));