/* (
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro 
número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor
 de x.
Nome Aluno: Maria Luisa Campos
*/


const teclado = require(`prompt-sync`)();
let x = parseFloat(teclado(`digite um numero`));
let y = parseFloat(teclado(`digite outro numero: `));

let troca =0;

console.log(`antes da troca`);
console.log(`variavel X: ${x}`);
console.log(`variavel Y: ${y}`);

troca= y;
y= x;
x= troca;

console.log(`depois da troca`);
console.log(`variavel X: ${x}`);
console.log(`variavel Y: ${y}`);

