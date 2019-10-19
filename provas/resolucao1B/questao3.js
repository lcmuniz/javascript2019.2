const prompt = require('readline-sync').question

let contador = 1
let soma = 0 
while (contador <= 5) {
  const resp = prompt('Digite um número: ')
  contador = contador + 1
  soma = soma + Number(resp)
}
const media = soma / 5
console.log('A soma dos números é ' + soma)
console.log('A média dos números é ' + media)
