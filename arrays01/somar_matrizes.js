// funcao somarMatrizes:
// recebe como entrada duas matrizes A e B
// e retorna uma matriz que eh a soma A + B
function somarMatrizes(A, B) {

  // verifica se A e B são matrizes e retorna NaN se não forem
  const aEhMatriz = Array.isArray(A) && Array.isArray(A[0])
  const bEhMatriz = Array.isArray(B) && Array.isArray(B[0])
  if (!aEhMatriz || !bEhMatriz) {
    return NaN
  }

  // verifica se o numero de linhas e colunas das matrizes sao iguais
  // retorna NaN se nao forem
  const linA = A.length
  const colA = A[0].length
  const linB = B.length
  const colB = B[0].length
  if (linA != linB || colA != colB) {
    return NaN
  }
  
  // soma as duas matrizes
  const C = []
  for (let l = 0; l < linA; l++) {
    linha = []
    for (let c = 0; c < colA; c++) {
      const elem = A[l][c] + B[l][c]
      linha.push(elem)
    }
    C.push(linha)
  }
  //retorna a matriz C, soma de A e B
  return C
  
}

X = [
  [1,2],
  [3,4],
  [5,6]
]
Y = [
  [9,8],
  [7,6],
  [5,4]
]
Z = somarMatrizes(X, Y)
console.log(Z)