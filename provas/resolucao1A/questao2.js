const prompt = require("readline-sync").question;

const nota1 = prompt("Digite a primeira nota: ");
const nota2 = prompt("Digite a segunda nota: ");

const media = (Number(nota1) + Number(nota2)) / 2;

let situacao = "";
if (media === 10) {
  situacao = "aprovado com distinção";
} else if (media >= 7) {
  situacao = "aprovado";
} else {
  situacao = "reprovado";
}
console.log("A média das notas é", media);
console.log("O aluno foi", situacao);
