/* (
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro
número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor
 de x.
Nome Aluno: Maria Luisa Campos
*/
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("digite um numero"));
var y = parseFloat(teclado("digite outro numero: "));
var troca = 0;
console.log("antes da troca");
console.log("variavel X: ".concat(x));
console.log("variavel Y: ".concat(y));
troca = y;
y = x;
x = troca;
console.log("depois da troca");
console.log("variavel X: ".concat(x));
console.log("variavel Y: ".concat(y));
