var valor = document.querySelector("#valor-hora");

var horas = document.querySelector("#horas-projeto");

var resultado = document.querySelector('#resposta');

function calcular() {
    var valorHora = valor.valueAsNumber;
    var horasProjeto = horas.valueAsNumber;

    var calcularValorTotal = valorHora * horasProjeto;
    
    var calculadoraValorTotalDuasCasas = calcularValorTotal.toFixed(2);

    resultado.textContent = "R$ " + calculadoraValorTotalDuasCasas;
}