/*
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: maria Luisa Campos
*/

const teclado = require (`prompt-sync`)();

let n1: number = parseFloat(teclado(`digite o primeiro numero:`));
let n2: number = parseFloat(teclado(`digite o segundo numero:`));
let n3: number = parseFloat(teclado(`digite o terceiro numero`));

let maior: number =0;
let mediano: number=0;
let menor: number=0;

if (n1>n2 && n1>n3){
    maior=n1;
    
    if (n2>n3){
        mediano=n2;
        menor=n3;
    }
    else{
        mediano=n3;
        menor=n2;
    }
}
else if(n2>n1 && n2>n3){

}

else if (n3>n1 && n3>n2){

}
else{
    console.log(`Algo deu errado!!`);

}

console.log(`ordem crescente é ${menor}; ${mediano}; ${maior}`);