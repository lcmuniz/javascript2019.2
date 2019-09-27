// Programa que pede números ao usuário até que ele digite um numero negativo ou zero.
// Calcula a soma e a média dos números entrados
const prompt = require("readline-sync").question;

// Inicializa soma e quantidade
let soma = 0;
let quantidade = 0;
let num = 1;

// Enquanto número for maior que zero
while (Number(num) > 0) {
  // Pede número
  num = prompt("Digite um número (0 para sair): ");
  if (Number(num) > 0) {
    // Soma o número
    soma = soma + Number(num);
    // Incrementa a quantidade
    quantidade = quantidade + 1;
  }
}

// Se tem números, calcula a média e mostra resultados
if (quantidade > 0) {
  const media = soma / quantidade;

  console.log("A soma dos números é", soma);
  console.log("A média dos números é", media);
  console.log("A quantidade de números é", quantidade);
}
