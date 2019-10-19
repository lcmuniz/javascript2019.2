const prompt = require("readline-sync").question;

let numero = 0;
let pares = 0;
let impares = 0;
for (let i = 1; i <= 10; i++) {
  numero = prompt("Número " + i + ": ");
  numero = Number(numero);

  if (numero % 2 === 0) {
    pares = pares + 1;
  } else {
    impares = impares + 1;
  }
}

console.log("Pares: ", pares);
console.log("Ímpares: ", impares);
