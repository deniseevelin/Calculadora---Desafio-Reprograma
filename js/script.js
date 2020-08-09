var salario = document.querySelector("#ganho-mes");

var horas = document.querySelector("#horas-dia");

var resultado = document.querySelector('#resposta');

function calcularValorHora() {
    var valorSalario = salario.valueAsNumber;
    var valorHoras = horas.valueAsNumber;

    var horasMes = valorHoras * 22;
    
    var valorHora = valorSalario / horasMes

    var valorHoraDuasCasas = valorHora.toFixed(2);

    resultado.textContent = "R$ " + valorHoraDuasCasas;
}