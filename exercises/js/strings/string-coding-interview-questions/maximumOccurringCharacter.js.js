/* Questions in:
  https://www.java67.com/2018/04/21-string-programming-and-coding-interview-questions-answers.html
*/

/*
  1- How to find the maximum occurring character in a given String?
  
    - Write an efficient program to return the maximum occurring character in the input string, e.g., if the input string is "Java" then the function should return 'a'.

*/

let txt = "This is a huge phrase";

console.log("Question 1 ----------");
function showOccuringCharacter(str) {
  if (!str) return "Send a valid string.";

  let lastLetter = str.charAt(str.length - 1);
  let msg = `Phrase: ${str} \nLast letter: ${lastLetter}`;
  return msg;
}
console.log(showOccuringCharacter(txt));