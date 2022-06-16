let corpo = document.getElementsByTagName("body")[0];
let title = document.getElementsByTagName("h1")[0];
let div = document.createElement("div") as HTMLDivElement;
let calculatingNums = document.createElement("p");

// body
corpo.style.backgroundColor = "#303030";
corpo.style.fontFamily = "Arial, sans-serif";

// title
title.style.color = "white";
title.style.textAlign = "center";

// div and txt
div.style.maxHeight = "500px";
div.style.maxWidth = "500px";
div.style.height = "max-content"
div.style.width = "max-content";
div.style.margin = "0 auto";
div.style.padding = "10px";
div.style.display = "flex";
div.style.flexFlow = "row wrap";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.backgroundColor = "green";
div.style.border = "1px solid white";
div.style.cursor = "pointer";

calculatingNums.style.color = "white";
calculatingNums.style.fontFamily = "cursive";
calculatingNums.style.fontSize = "25px";

// hover
div.addEventListener("mouseenter", () => {
  div.style.backgroundColor = "darkgreen"
});
div.addEventListener("mouseleave", () => {
  div.style.backgroundColor = "green";
});

// using types
calculatingNums.innerHTML = "LET'S DO MATH";
function sumNums() {
  let n1: number = Number(prompt("Send a number"));
  let n2: number = Number(prompt("Send one more number"));
  let result = n1 + n2;
  calculatingNums.innerHTML = "RESULT:<br>" + n1 + " + " + n2 + " = " + result;
};

div.addEventListener("click", sumNums);

// append
corpo.appendChild(div);
div.appendChild(calculatingNums);

// inferencia x annotation
// inferencia =>
let y = 12;
// y = "teste";

// annotation
let z: number = 12;

// tipos básicos
let firstName: string = "Guilherme";
let age: number = 17;
const isAdmin: boolean = true;

console.log("Antes: " + firstName);
// String != string
console.log(typeof firstName);

firstName = "João";

console.log("Depois: " + firstName);

// object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);

console.log(myNumbers.unshift(20), myNumbers.push(10), myNumbers);

// tuplas
let myTuple: [number, string, string[]];

myTuple = [35, "Guiga", ["Karina", "Mana"]];

// myTuple = [true, false, true];

console.log(myTuple);

// object literals -> {prop: value}
const user1: {name: string, admin: boolean} = {
  name: "Guizin",
  admin: true
};

function checkAdmin(admin: boolean) {
  if (admin) {
    return "Yes";
  } else {
    return "No";
  }
}

let showUsers = (user: {name: string, admin: boolean}) => {
  let msg: string = `- User: ${user.name} \n- Admin: ${checkAdmin(user.admin)}`;
  return msg;
};

console.log(showUsers(user1));

/* any <= (considerada má pratica)

let a:any = 0;
a = true;
a = [];
a = "Fulano";

*/

// union type
let id: string | number = "10";

// id = true;
// id = [];

// type alias
type myIdType = number | string;
const novoId: myIdType = 25;
const productId: myIdType = "#55925";

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
  GG = "Extra Grande"
};

const camisa = {
  name: "Camisa gola V",
  size: Size.G
}

const camiseta = {
  name: "Camiseta Moda Verão II",
  size: Size.GG
}

console.log(`Tamanho da ${camisa.name}: ${camisa.size}`);
console.log(`Tamanho da ${camiseta.name}: ${camiseta.size}`);

// literal types
let teste: "autenticado" | null;

// teste = "outrovalor";
teste = "autenticado";
teste = null;

// funcoes
function sum(a: number, b: number) {
  return a + b;
}
// console.log(sum("12", true));

function sayHelloTo(name: string): string {
  return `Hello, ${name}!`;
}
console.log(sayHelloTo("Guilherme"));

function logger(msg: string): void {
  console.log(msg);
};
logger("Testei e funcionou!!");

function greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`Olá, ${greet} ${name}`);
    return;
  }
  console.log(`Olá, ${name}`);
}
greeting("Guiga Plays Br.", "meu amado");

// interfaces
interface MathFunctionParams {
  num1: number,
  num2: number
}

function someNumeros(nums: MathFunctionParams) {
  return console.log(nums.num1 + nums.num2);
}

function multipliqueNumeros(nums: MathFunctionParams) {
  return console.log(nums.num1 * nums.num2);
}

const multiplyNums:MathFunctionParams = {
  num1: 7,
  num2: 3
}

someNumeros({num1: 25, num2: 25});
multipliqueNumeros({num1: 90, num2: 10});
console.log(multipliqueNumeros(multiplyNums));

// narrowing
// checagem tipos
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);

// generics
function showArrayItems<T>(arr: T[]) {
  arr.forEach((item, index) => {
    index++
    console.log(`ITEM ${index}: ${item}`);
  })
}

const a1 = [1, 2, 3];
const a2 = ["Nome 1", "Nome 2", "Nome 3"];
showArrayItems(a1);
showArrayItems(a2);

// classes
class User {
  name
  age
  role
  isApproved

  constructor(name: string, age: number, role: string, isApproved: boolean) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }

  showUserAge(canShow: boolean): void {
    if (canShow) {
      console.log(`A idade do usuário é ${this.age}`);
      return;
    }
    console.log("Informação restrita!");
  }
}

const zeca = new User("ZécaTamanduá", 80, "Prefeito da Tamandulândia", true)
console.log(zeca);
zeca.showUserName();
zeca.showUserAge(true);

// interfaces em classes
interface IVehicle {
  brand: string
  showBrandWheels(): void
}

class Car implements IVehicle {

  brand
  wheels

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }
  
  showBrandWheels(): void {
    console.log(`A marca do carro é: ${this.brand}`);
    console.log(`${this.brand} possuí ${this.wheels} rodas!`);
  }

}
const fusca = new Car("VW", 4);
fusca.showBrandWheels();

// herança
class SuperCar extends Car {
  engine

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels)
    this.engine = engine.toFixed(1);
  }

  showCarSettings(): void {
    console.log(`O ${this.brand} possuí ${this.wheels} rodas, sua engine é ${this.engine} e é considerado um super carro!`);
  }
}

const jeep = new SuperCar("Jeep", 8, 4.0);
jeep.showBrandWheels();
jeep.showCarSettings();

// decorators

// constructor decorator
function BaseParameters() {
  return function<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      id = Math.floor((Math.random() * 9));
      createdAt = new Date();
    }
  }
}

// insert decorator
@BaseParameters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");
console.log(sam);

/*
  - O que aprendi nesse curso?
  | tipos básicos
  | tipagem de variáveis
  | inferência x annotation
  | tuplas
  | object literals
  | any, union type
  | type alias, enum
  | literal types
  | funcoes
  | interfaces
  | narrowing, checagem tipos
  | generics
  | classes
  | interfaces em classes
  | herança
  | decorators

*/