function getNumber() {
  const min = 
  document.getElementById("num1").value;
  const max = 
  document.getElementById("num2").value;

  let luck = Math.floor(Math.random() * Math.floor(max));

  while (luck < min) {
    luck = Math.floor(Math.random() * Math.floor(max));
  }

  document.getElementById("randomN").innerHTML = luck;
}