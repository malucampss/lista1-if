/*
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: maria Luisa Campos
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("digite o primeiro numero:"));
var n2 = parseFloat(teclado("digite o segundo numero:"));
var n3 = parseFloat(teclado("digite o terceiro numero"));
var maior = 0;
var mediano = 0;
var menor = 0;
if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
        mediano = n2;
        menor = n3;
    }
    else {
        mediano = n3;
        menor = n2;
    }
}
else if (n2 > n1 && n2 > n3) {
}
else if (n3 > n1 && n3 > n2) {
}
else {
    console.log("Algo deu errado!!");
}
console.log("ordem crescente \u00E9 ".concat(menor, "; ").concat(mediano, "; ").concat(maior));
