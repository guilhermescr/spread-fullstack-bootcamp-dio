"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let corpo = document.getElementsByTagName("body")[0];
let title = document.getElementsByTagName("h1")[0];
let div = document.createElement("div");
let calculatingNums = document.createElement("p");
corpo.style.backgroundColor = "#303030";
corpo.style.fontFamily = "Arial, sans-serif";
title.style.color = "white";
title.style.textAlign = "center";
div.style.maxHeight = "500px";
div.style.maxWidth = "500px";
div.style.height = "max-content";
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
div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "darkgreen";
});
div.addEventListener("mouseleave", () => {
    div.style.backgroundColor = "green";
});
calculatingNums.innerHTML = "LET'S DO MATH";
function sumNums() {
    let n1 = Number(prompt("Send a number"));
    let n2 = Number(prompt("Send one more number"));
    let result = n1 + n2;
    calculatingNums.innerHTML = "RESULT:<br>" + n1 + " + " + n2 + " = " + result;
}
;
div.addEventListener("click", sumNums);
corpo.appendChild(div);
div.appendChild(calculatingNums);
let y = 12;
let z = 12;
let firstName = "Guilherme";
let age = 17;
const isAdmin = true;
console.log("Antes: " + firstName);
console.log(typeof firstName);
firstName = "João";
console.log("Depois: " + firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(myNumbers.unshift(20), myNumbers.push(10), myNumbers);
let myTuple;
myTuple = [35, "Guiga", ["Karina", "Mana"]];
console.log(myTuple);
const user1 = {
    name: "Guizin",
    admin: true
};
function checkAdmin(admin) {
    if (admin) {
        return "Yes";
    }
    else {
        return "No";
    }
}
let showUsers = (user) => {
    let msg = `- User: ${user.name} \n- Admin: ${checkAdmin(user.admin)}`;
    return msg;
};
console.log(showUsers(user1));
let id = "10";
const novoId = 25;
const productId = "#55925";
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
    Size["GG"] = "Extra Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
const camiseta = {
    name: "Camiseta Moda Verão II",
    size: Size.GG
};
console.log(`Tamanho da ${camisa.name}: ${camisa.size}`);
console.log(`Tamanho da ${camiseta.name}: ${camiseta.size}`);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
function sayHelloTo(name) {
    return `Hello, ${name}!`;
}
console.log(sayHelloTo("Guilherme"));
function logger(msg) {
    console.log(msg);
}
;
logger("Testei e funcionou!!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá, ${greet} ${name}`);
        return;
    }
    console.log(`Olá, ${name}`);
}
greeting("Guiga Plays Br.", "meu amado");
function someNumeros(nums) {
    return console.log(nums.num1 + nums.num2);
}
function multipliqueNumeros(nums) {
    return console.log(nums.num1 * nums.num2);
}
const multiplyNums = {
    num1: 7,
    num2: 3
};
someNumeros({ num1: 25, num2: 25 });
multipliqueNumeros({ num1: 90, num2: 10 });
console.log(multipliqueNumeros(multiplyNums));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
function showArrayItems(arr) {
    arr.forEach((item, index) => {
        index++;
        console.log(`ITEM ${index}: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["Nome 1", "Nome 2", "Nome 3"];
showArrayItems(a1);
showArrayItems(a2);
class User {
    constructor(name, age, role, isApproved) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserAge(canShow) {
        if (canShow) {
            console.log(`A idade do usuário é ${this.age}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("ZécaTamanduá", 80, "Prefeito da Tamandulândia", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserAge(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrandWheels() {
        console.log(`A marca do carro é: ${this.brand}`);
        console.log(`${this.brand} possuí ${this.wheels} rodas!`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrandWheels();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine.toFixed(1);
    }
    showCarSettings() {
        console.log(`O ${this.brand} possuí ${this.wheels} rodas, sua engine é ${this.engine} e é considerado um super carro!`);
    }
}
const jeep = new SuperCar("Jeep", 8, 4.0);
jeep.showBrandWheels();
jeep.showCarSettings();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.floor((Math.random() * 9));
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
