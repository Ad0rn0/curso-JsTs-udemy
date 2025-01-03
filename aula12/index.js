let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let varAux = ''

varAux = varC
varC = varA
varA = varB
varB = varAux

console.log(varA, varB, varC)