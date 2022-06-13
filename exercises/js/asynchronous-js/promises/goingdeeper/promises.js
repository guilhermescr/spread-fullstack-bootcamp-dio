let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
})

// Then => resolve
// Catch => reject
p.then((msg) => {
    console.log("Fine. " + msg);
}).catch((e) => {
    console.log(e);
})