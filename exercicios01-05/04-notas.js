// Exercício: Faça um Programa que peça as 4 notas bimestrais e mostre a média.

// Resolução:

function calcularMedia() {
  let nota1 = document.getElementById('nota1').value
  let nota2 = document.getElementById('nota2').value
  let nota3 = document.getElementById('nota3').value
  let nota4 = document.getElementById('nota4').value

  nota1 = Number(nota1)
  nota2 = Number(nota2)
  nota3 = Number(nota3)
  nota4 = Number(nota4)

  const media = (nota1 + nota2 + nota3 + nota4) / 4

  document.getElementById('media').value = 'A média é ' + media
}