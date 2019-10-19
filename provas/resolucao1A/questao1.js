const prompt = require("readline-sync").question;

const raio = prompt("Digite o raio do círculo: ");
const pi = 3.14;
const area = pi * raio * raio;
console.log("A área do círculo de raio", raio, "é", area);
