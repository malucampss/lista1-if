/* 
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior,
 com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, 
 se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Maria Luisa Campos
*/

var teclado = require("prompt-sync")();
var num1 = parseFloat(teclado("digite o primeiro numero:"));
var num2 = parseFloat(teclado("digite o segundo numero:"));
if (num1 > num2) {
    console.log("o numero maior \u00E9".(`${num1}`, " e o numero menor \u00E9 ") (`${num2}`,"."));

}
 else if (num2 > num1){
    console.log("o numero maior \u00E9 ". (`${num2}`, " e o numero menor \u00E9") (`${num1}`, "."));
 }
 else if (num1 = num2) {
    console.log("os numeros" .(`${num1}`, " e ").(`${num2}`, " s\u00E3o iguais."));
}
