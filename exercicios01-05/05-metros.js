// Exercício: Faça um Programa que converta metros para centímetros.

// Resolução:

function converter() {
  const metros = document.getElementById('metros').value

  const centimetros = Number(metros) * 100

  document.getElementById('centimetros').value = metros + ' metros = ' + centimetros + ' centímetros'
}
