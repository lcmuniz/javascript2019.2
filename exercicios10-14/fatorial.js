// Programa para calcular o fatorial de um número

const prompt = require("readline-sync").question;

// Pede o número ao usuário
const numero = prompt("Digite um número: ");

// Se o número é negativo, termina o programa
if (numero < 0) {
  console.log("O número deve ser maior ou igual a zero.");
  return;
}

// Calcula o fatorial

let fatorial = 1;
let i = numero;

while (i > 1) {
  fatorial = fatorial * i;
  i = i - 1;
}

// Mostra o resultado na tela
console.log("O fatorial de", numero, "é", fatorial);
