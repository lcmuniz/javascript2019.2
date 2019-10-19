const prompt = require("readline-sync").question;

let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");
let numero3 = prompt("Digite o terceiro número: ");

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);

let menor = numero1;
let maior = numero1;

if (numero2 < menor) {
  menor = numero2;
}
if (numero3 < menor) {
  menor = numero3;
}

if (numero2 > maior) {
  maior = numero2;
}
if (numero3 > maior) {
  maior = numero3;
}

console.log("O menor número é", menor);
console.log("O maior número é", maior);
