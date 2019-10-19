const prompt = require("readline-sync").question;

const telefonou = prompt("Telefonou para a vítima? ");
const local = prompt("Esteve no local do crime? ");
const perto = prompt("Mora perto da vítima? ");
const devia = prompt("Devia para a vítima? ");
const trabalhou = prompt("Já trabalhou com a vítima? ");

let contador = 0;
if (telefonou === "S") contador = contador + 1;
if (local === "S") contador = contador + 1;
if (perto === "S") contador = contador + 1;
if (devia === "S") contador = contador + 1;
if (trabalhou === "S") contador = contador + 1;

if (contador === 2) {
  situacao = "suspeito";
} else if (contador === 3 || contador === 4) {
  situacao = "cúmplice";
} else if (contador === 5) {
  situacao = "assassino";
} else {
  situacao = "inocente";
}

console.log("Você é", situacao);
