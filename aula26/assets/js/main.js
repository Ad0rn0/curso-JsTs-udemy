//IMC = peso (em kg) / altura^2 (em m)

function calcularIMC() {
    var resultado = document.querySelector("p#resultado");
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);
    var imc = peso / (altura ** 2);

    resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2);
}