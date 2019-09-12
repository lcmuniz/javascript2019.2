// Exercício: Faça um Programa que peça dois números e imprima a soma.

// Resolução:

// Importa a biblioteca readline-sync e atribui à variável prompt a 
// função question responsável por solicitar dados através do teclado 
const prompt = require('readline-sync').question

// Pede um número pro usuário e o armazena na variável entrada1
const entrada1 = prompt('Digite o primeiro número: ')

// Pede outro número pro usuário e o armazena na variável entrada2
const entrada2 = prompt('Digite o segundo número: ')

// Converte a primeira entrada do usuário em número e armazena na variável numero1 
// (quando o usuário entre com um valor pelo teclado, é sempre como texto)
const numero1 = Number(entrada1)

// Converte a segunda entrada do usuário em número e armazena na variável numero2
// (quando o usuário entre com um valor pelo teclado, é sempre como texto)
const numero2 = Number(entrada2)

// Soma os dois números e armazena a soma na variável soma
const soma = numero1 + numero2

// Mostra a soma dos números digitados
console.log('A soma dos números é ' + soma)