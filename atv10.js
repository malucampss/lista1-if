/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita",
 entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno:
*/
var teclado = require("prompt-sync")();
var resp1 = teclado("telefonou para a vitima? ");
var resp2 = teclado("esteve no local? ");
var resp3 = teclado("mora perto da vitima? ");
var resp4 = teclado("devia para a vitima? ");
var resp5 = teclado("ja trabalhou com a vitima? ");
var respPositivas = 0;
if (resp1 == "sim") {
    respPositivas++;
}
if (resp2 == "sim") {
    respPositivas++;
}
if (resp3 == "sim") {
    respPositivas++;
}
if (resp4 == "sim") {
    respPositivas++;
}
if (resp5 == "sim") {
    respPositivas++;
}
if (respPositivas == 2) {
    console.log("voce \u00E9 suspeito");
}
else if (respPositivas >= 3 && respPositivas <= 4) {
    console.log("voce \u00E9 cumplice");
}
else if (respPositivas == 5) {
    console.log("voce \u00E9 o assasino");
}
else {
    console.log("voce \u00E9 inocente");
}
