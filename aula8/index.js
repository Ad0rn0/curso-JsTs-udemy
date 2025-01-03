const nome = 'Thiago'
const sobrenome = 'Adorno'
const idade = 23
const peso = 84
const altura = 1.85
let imc = peso / (altura * altura) 
var anoHoje = new Date().getFullYear()
let anoNascimento = anoHoje - idade

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem ' + altura + ' de altura e seu IMC é de ' + imc.toFixed(2))
console.log(`${nome}, nasceu em ${anoNascimento}`)