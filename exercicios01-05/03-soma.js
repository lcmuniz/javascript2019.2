// Exercício: Faça um Programa que peça dois números e imprima a soma.

// Resolução:

function somar() {
  
  let numero1 = document.getElementById('numero1').value

  let numero2 = document.getElementById('numero2').value

  numero1 = Number(numero1)

  numero2 = Number(numero2)

  const soma = numero1 + numero2

  document.getElementById('soma').value = 'A soma dos números é ' + soma
}