const prompt = require("readline-sync").question;

const turno = prompt(
  "Qual turno você estuda ? (M para matutino, V para vespertino e N para noturno): "
);

let saudacao = "";
if (turno === "M") {
  saudacao = "Bom dia!";
} else if (turno == "V") {
  saudacao = "Boa tarde!";
} else {
  saudacao = "Boa noite!";
}

console.log(saudacao);
