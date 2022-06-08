// concat() joins two or more strings:
let nome = "Guilherme";
let sobrenome = "Rocha";
let NomeCompleto = nome.concat(" ", sobrenome);
console.log(NomeCompleto);

// Com mais strings:
let charac1 = "Guiga";
let charac2 = "Gui";
let charac3 = "Guizin";
console.log(charac1.concat(", ", charac2, ", ", charac3) + "\n");

// Other ways of concatenating:
console.log("Outras formas de concatenar!\n" + charac1 + ", " + charac2 + ", " + charac3);
console.log(charac1 + ",", charac2 + ",", charac3);

// trim() - Remove espaços em branco dos lados da string:
let textoEspacado = "       TEXTO ESPAÇADO!       ";
let textoEspacadoTrim = textoEspacado.trim();
console.log("Texto Espaçado:\n" + textoEspacado);
console.log("Texto Espaçado com trim():\n" + textoEspacadoTrim);