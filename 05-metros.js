// Exercício: Faça um Programa que converta metros para centímetros.

// Resolução:

// Importa a biblioteca readline-sync e atribui à variável prompt a 
// função question responsável por solicitar dados através do teclado 
const prompt = require('readline-sync').question

// Pede o valor de metros  para o usuário e armazena na variável metros
const metros = prompt('Quantos metros? ')

// Converte os metros em centímetros e armazena na variável centimetros 
// Observe o uso da função Number pra converter o texto digitado pelo usuário 
// em número antes de multiplicar
const centimetros = Number(metros) * 100

// Mostra os metros e centímetros na tela
console.log(metros + ' metros = ' + centimetros + ' centímetros')