// Programa que calcula as raízes de uma equação do segundo grau

// importa biblioteca de entrada de dados pelo teclado
const prompt = require('readline-sync').question

// pede coeficiente A ao usuário
const A = prompt('Digite o valor de A: ')

// testa se o coeficiente A é igual a zero (se for, mostra uma mensagem e sai do programa)
if (A == 0) {
	console.log('A é igual a 0. Não é uma equação do segundo grau.')
	return
}

// pede demais coeficientes ao usuário
const B = prompt('Digite o valor de B: ')
const C = prompt('Digite o valor de C: ')

// calcula delta
const delta = (B * B) - (4 * A * C)

// verifica se o delta é negativo (se for, mostra mensagem ao usuário e sai do programa.)
if (delta < 0) {
	console.log('Não existem raízes reais.')
	return	
}

// calcula as raízes do programa
const raiz1 = ((-B) + (delta ** 0.5)) / (2 * A)

const raiz2 = ((-B) - (delta ** 0.5)) / (2 * A)

// mostra mensagem dizendo quais são as raízes
if (raiz1 == raiz2) {
	console.log('A raiz é ' + raiz1)
}
else {
	console.log('As raízes são ' + raiz1 + ' e ' + raiz2)
}
