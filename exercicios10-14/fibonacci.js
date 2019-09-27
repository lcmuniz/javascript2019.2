// Programa para imprimir 15 números da sequência de Fibonacci
// 1, 1, 2, 3, 5, 8, 13, ...

let anterior = 0;
let corrente = 1;
let soma = 1;

console.log(soma);
for (let i = 1; i < 15; i = i + 1) {
  console.log(soma);
  anterior = corrente;
  corrente = soma;
  soma = anterior + corrente;
}
