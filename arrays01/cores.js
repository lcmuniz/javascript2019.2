// Pede nomes de cores ao usuário e depois os imprime
// em ordem alfabética e em maiúsculas

const prompt = require("readline-sync").question;

// inicializa cores com um array vazio
cores = [];

// inicializa cor com alguma coisa para o teste do laço
// ser verdadeiro a primeira vez
cor = "x";

while (cor != "") {
  // solicita uma cor ao usuário
  const cor = prompt("Digite uma cor (nada para terminar): ");

  // se cor for vazio, sai do laço
  if (cor === "") {
    break;
  }
  // adiciona a cor (em maiuscula) no fim do array de cores
  cores.push(cor.toUpperCase());
}

// ordena as cores
cores.sort();

// mostra o array de cores
console.log(cores);
