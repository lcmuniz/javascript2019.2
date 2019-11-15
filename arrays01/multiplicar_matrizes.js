function multiplicarMatrizes(A, B) {
  const aEhMatriz = Array.isArray(A) && Array.isArray(A[0]);
  const bEhMatriz = Array.isArray(B) && Array.isArray(B[0]);

  if (!aEhMatriz || !bEhMatriz) {
    return NaN;
  }

  const linA = A.length;
  const colA = A[0].length;
  const linB = B.length;
  const colB = B[0].length;

  if (colA !== linB) {
    return NaN;
  }

  // preencher com zeros
  const C = [];

  for (let i = 0; i < linA; i++) {
    const linha = [];
    for (let j = 0; j < colB; j++) {
      linha.push(0);
    }
    C.push(linha);
  }

  // multiplicar as  matrizes
  for (let i = 0; i < linA; i++) {
    for (let j = 0; j < colB; j++) {
      for (let k = 0; k < colA; k++) {
        C[i][j] = C[i][j] + A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

X = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1]
];

Y = [
  [1, 0],
  [0, 1],
  [1, 0]
];

const R = multiplicarMatrizes(X, Y);
console.log(R);
