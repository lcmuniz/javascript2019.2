// cria um array de 100 elementos
// com a sequencia de fibonnaci
// e mostra na tela

// inicializa o array de fibonacci com os dois primeiros valores
const fib = [1, 1];

// calcula os valores do array de fibonacci
// do indice 2 até o indice 99 (centésimo elemento)
for (let i = 2; i < 100; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

// mostra na tela
console.log(fib);
