// Jogo de adivinhação

// importa biblioteca de entrada de dados pelo teclado
const prompt = require('readline-sync').question

// gera um número aleatório
const numero = Math.floor(Math.random() * 100)

// começa o jogo com um palpite errado (para entrar no laço abaixo)
let palpite = -1

// número de tentantivas de adivinhar o número feitas pelo usuário
let tentativas = 0

// enquanto o usuário não acertar o número...
while (numero != palpite) {

	// pede um novo número ao usuário
	palpite = prompt('Digite um número entre 0 e 100: ')
	
	// aumenta o número de tentativas
	tentativas = tentativas + 1

	// se usuário acertou mostra mensagem de vencedor e o número de tentativas feitas
	if (numero == palpite) {
		console.log('Você acertou!!!!!')
		console.log('Você tentou ' + tentativas + ' vezes')
	}
	else {
		// se não acertou, verifica se o palpite do usuário é maior ou menor que o número correto
		if (numero > palpite) {
			console.log('O número é maior')
		}
		else {
			console.log('O numero é menor')
		}
	}
}

