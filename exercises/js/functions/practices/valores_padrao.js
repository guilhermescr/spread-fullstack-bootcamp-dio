  // Default parameters

/* Before ES2015:
function exponential1(array, num) {
  if (num === undefined) {
    num = 1;
  }

  const goAhead = "Example" + array;
  return goAhead;
}
*/

/* After ES2015:
function exponential2(array, num = 1) {
  const goAhead = "Example" + array;
  return goAhead + num;
}
exponential2([2, 4, 7]);
*/

function say(message) {
  message = typeof message !== "undefined" ? message : "Hi!";
  return console.log(message);
}
say();

/* Default value is a result of a function. */
function date(d = today()) {
  console.log(d);
}

function today() {
  return (new Date().toLocaleDateString("en-US"));
}
date();