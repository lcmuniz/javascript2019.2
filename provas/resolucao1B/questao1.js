const prompt = require("readline-sync").question;

const valorHora = prompt("Quanto você ganha por hora? ");
const numeroHoras = prompt("Qual o número de horas trabalhadas? ");

const salario = Number(valorHora) * Number(numeroHoras);

console.log("O seu salário é", salario);
