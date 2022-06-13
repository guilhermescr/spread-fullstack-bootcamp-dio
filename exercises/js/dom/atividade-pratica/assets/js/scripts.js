let corpo = document.getElementById("body");
let titulo = document.getElementById("title");
let btn = document.getElementById("btn");
let rodape = document.getElementById("footer");
let rodapeTexto = document.getElementById("foo-txt");

function turnOff() {
  corpo.style.backgroundColor = "black";
  titulo.style.color = "white";
  rodape.style.backgroundColor = "#aEa4aC";
  rodapeTexto.style.color = "black";
}

function turnOn() {
  window.location.reload();
}

btn.addEventListener("click", turnOff);
btn.addEventListener("dblclick", turnOn);