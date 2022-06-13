const betterDeveloper = "Pedro";

function whoIsBetterCallback() {

  return new Promise((resolve, reject) => {

    if (betterDeveloper != "Guiga" && betterDeveloper != "Karina") {
      reject({
        name: "This is wrong,",
        message: betterDeveloper + "? Really"
      })
    } else {
      resolve({
        name: betterDeveloper,
        message: "CDFs are the best"
      })
    }

  })
}

whoIsBetterCallback()
  .then((result) => {
    console.log(result.name + "? Yeah! " + result.message);
  }).catch((err) => {
    console.log(err.name + " " + err.message);
  })

/* Modelo de Promise

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    => Resultado Positivo: ele vai pro resolve.
    resolve('Success');
  } else {
    => Resultado Falso/Sem Resultado: ele vai pro reject.
    reject('Failed');
  }
});

 => Then chama o resolve
p.then((message) => {
  console.log("You are in the then, " + message);
})
 => Catch chama o reject
.catch((e) => {
  console.log("You are in the catch, " + e);
})
*/

/* Promise
  - Uma variável vai receber um:
    => new Promise();
  - Promise deve receber uma função anônima como parâmetro.
  - A função anônima deve receber dois parâmetros:
    => Resolve e Reject.
*/

/* - Forma Síncrona:

function subNums() {
  let result = 12 - 7;

  if (result == 5) {
    successCallback(result);
  } else {
    errorCallback();
  }
}

function successCallback(number) {
  console.log(`Yeah! Number ${number}!`);
}
function errorCallback() {
  console.log("Oops! Something wrong.");
}

subNums();
*/