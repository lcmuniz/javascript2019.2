const prompt = require("readline-sync").question;

const altura = prompt("Qual a sua altura? ");
const sexo = prompt("Qual o seu sexo? ");

let pesoIdeal;
if (sexo === "M") {
  pesoIdeal = 72.7 * Number(altura) - 58;
} else {
  pesoIdeal = 62.1 * Number(altura) - 44.7;
}

console.log("Seu pedo ideal é", pesoIdeal);
