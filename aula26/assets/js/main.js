function calcularIMC(event) {
    event.preventDefault();
    var resultadoTrue = document.querySelector("p#resultadoTrue");
    var resultadoFalse = document.querySelector("p#resultadoFalse");
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);
    var imc = peso / (altura ** 2);

    resultadoTrue.innerHTML = "";
    resultadoTrue.style.padding = "";

    resultadoFalse.innerHTML = "";
    resultadoFalse.style.padding = "";

    if (peso === 0 || altura === 0) {
        resultadoFalse.style.padding = "10px";
        resultadoFalse.innerHTML = "Preencha os campos corretamente!";
        return;
    }
    else if (peso > 600 || peso < 10 || altura < 0 || altura > 3) {
        resultadoFalse.style.padding = "10px";
        resultadoFalse.innerHTML = "Valores inválidos!";
        return;
    }

    if (imc < 18.5) {
        resultadoTrue.style.padding = "10px";
        resultadoTrue.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Abaixo do peso)";
        return;
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        resultadoTrue.style.padding = "10px";
        resultadoTrue.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Peso normal)";
        return;
    }
    else if (imc >= 25 && imc <= 29.9) {
        resultadoTrue.style.padding = "10px";
        resultadoTrue.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Sobrepeso)";
        return;
    }
    else if (imc >= 30 && imc <= 34.9) {
        resultadoTrue.style.padding = "10px";
        resultadoTrue.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Obesidade 1)";
        return;
    }
    else if (imc >= 35 && imc <= 39.9) {
        resultadoTrue.style.padding = "10px";
        resultadoTrue.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Obesidade 2)";
        return;
    }
    else if (imc >= 40) {
        resultadoTrue.style.padding = "10px";
        resultadoTrue.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Obesidade 3)";
        return;
    }
}