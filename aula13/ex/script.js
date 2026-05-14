const nome = prompt('Digite o seu nome completo: ');
let tamanhoNome = nome.length;

document.body.innerHTML += `Seu nome é : ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${tamanhoNome} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.at(3)} <br/>`
document.body.innerHTML += `O primeiro índice da letra a no seu nome é: ${nome.indexOf("a")} <br/>`
document.body.innerHTML += `O último índice da letra A do seu nome é: ${nome.lastIndexOf('a')} <br/>`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br/>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br/>`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br/>`
