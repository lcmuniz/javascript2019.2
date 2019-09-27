// Programa para calcular a distância entre dois pontos

const prompt = require("readline-sync").question;

// Solicita as coordenadas dos dois pontos.
console.log("Ponto A");
const x1 = prompt("X: ");
const y1 = prompt("Y: ");

console.log();
console.log("Ponto B");
const x2 = prompt("X: ");
const y2 = prompt("Y: ");

// Calcula a distância
const distancia = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;

// Mostra o resultado
console.log("A distância entre os dois pontos é", distancia);
