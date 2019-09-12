// Exercício: Faça um Programa que peça um número e então mostre a mensagem 
// O número informado foi [número].

// Resolução:

// Importa a biblioteca readline-sync e atribui à variável prompt a 
// função question responsável por solicitar dados através do teclado 
const prompt = require('readline-sync').question

// Pede um número pro usuário e o armazena na variável numero
const numero = prompt('Digite um número: ')

// Mostra o número digitado na tela
console.log('O número informado foi '+ numero)