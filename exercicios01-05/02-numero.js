// Exercício: Faça um Programa que peça um número e então mostre a mensagem 
// O número informado foi [número].

function enviar() {
  const numero = document.getElementById('numero').value
  
  document.getElementById('mensagem').value ='O número informado foi '+ numero
}
