/*
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg.
Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não,
 caso não diga o(s) motivo(s).
Nome:
*/
var teclado = require("prompt-sync")();
var idade = parseInt(teclado("digite sua idade: "));
var peso = parseInt(teclado("digite seu peso: "));
if (idade >= 18 && idade <= 67 && peso > 60) {
    console.log("voce pode doar sangue!!");
}
else {
    console.log("voce nao pode doar sangue pelo(s) seguinte(s) motivos: ");
    if (idade < 18) {
        console.log("voce \u00E9 menor de 18 anos");
    }
    if (idade > 67) {
        console.log("voce tem mais de 67 anos");
    }
    if (peso <= 60) {
        console.log("seu peso \u00E9 igual ou maior que 60kg");
    }
}
