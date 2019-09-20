// Àrea do triângulo

// importa biblioteca de entrada de dados pelo teclado
const prompt = require('readline-sync').question

// Título
console.log()
console.log('Area do Triangulo')
console.log()

// Pede altura e base
const altura = prompt('Altura: ')
const base = prompt('Base: ')

// Converte valores digitados em números
const h = Number(altura)
const b = Number(base)

// Testa se valores digitados foram números 
if (isNaN(h) || isNaN(b)) {
	console.log('A altura ou a base sao invalidos.')
	return
}

// Calcula a área do trigânulo
const area = (b * h) / 2

// Mostra a área na tela
console.log('A área é ' + area)