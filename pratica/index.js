function somar() {

  const n1 = document.getElementById('numero1').value
  const n2 = document.getElementById('numero2').value

  const soma = Number(n1) + Number(n2)

  document.getElementById('soma').value = soma

}