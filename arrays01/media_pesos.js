// Cacular a média dos pesos do vetor

// vetor de pesos
const pesos = [78.5, 88.2, 90.5, 85.0, 75.5];

// a soma começa com zero
let soma = 0;

// percorre o array: i varia de 0 até o tamanho do vetor
for (let i = 0; i < pesos.length; i++) {
  // adiciona à soma o peso índice i
  soma = soma + pesos[i];
}

// calcula a média
const media = soma / pesos.length;

// mostra a média dos pesos
console.log("A média dos pesos é", media);
