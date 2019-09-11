// Exercício: Faça um Programa que peça as 4 notas bimestrais e mostre a média.

// Resolução:

// Importa a biblioteca readline-sync e atribui à variável prompt a 
// função question responsável por solicitar dados através do teclado 
const prompt = require('readline-sync').question

// Pede as notas pro usuário e as armazena nas variáveis nota1, nota2, nota3 e nota4
let nota1 = prompt('Digite a primeira nota: ')
let nota2 = prompt('Digite a segunda nota: ')
let nota3 = prompt('Digite a terceira nota: ')
let nota4 = prompt('Digite a quarta nota: ')

// Converte as notas entradas pelo usuário em números e as armazena nas mesmas variáveis 
// (quando o usuário entre com um valor pelo teclado, é sempre como texto)
nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)
nota4 = Number(nota4)

// Calcula a média das notas e armazena na variável media
const media = (nota1 + nota2 + nota3 + nota4) / 4

// Mostra a média das notas
console.log('A média é ' + media)