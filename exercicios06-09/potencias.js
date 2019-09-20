// Potẽncias de um número digitado pelo usuário

// importa biblioteca de entrada de dados pelo teclado
const prompt = require('readline-sync').question

// Pede o número ao usuários
const numero = prompt('Digite um número: ')

// Primeira potência é de 0
let i = 0

// enquanto potência não chegar a 10...
while (i <= 10) {
	// Imprime a potência do número elevado a i 
	console.log(numero + ' elevado a ' + i + ' é igual a ' + (numero ** i))

	// Incrementa i
	i = i + 1
}
