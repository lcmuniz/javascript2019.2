// Programa que calcula a média e a situação de um aluno

const prompt = require("readline-sync").question;

// Pede as notas
const nota1 = prompt("Digite a nota 1: ");
const nota2 = prompt("Digite a nota 2: ");
const nota3 = prompt("Digite a nota 3: ");
const nota4 = prompt("Digite a nota 4: ");

// Calcula a média (Number converte os textos entrados pelo usuário em números)
const media =
  (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

if (media >= 7) {
  // Mostra mensagem se aprovado
  console.log("O aluno foi aprovado com média", media);
} else {
  // Se reprovado, pede nota da final e calcula nova média
  const final = prompt("Digita a nota final: ");
  const novaMedia = (media + Number(final)) / 2;

  if (novaMedia >= 7) {
    // Se aprovado, mostra mensagem
    console.log("O aluno foi aprovado em final com média", novaMedia);
  } else {
    // Se reprovado, mostra mensagem
    console.log("O aluno foi reprovado com media", novaMedia);
  }
}
