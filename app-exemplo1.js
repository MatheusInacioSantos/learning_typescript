"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function addnumeros(numero1, numero2, Mostrar, frase) {
    let result = numero1 + numero2;
    if (Mostrar) {
        console.log(frase + result);
    }
    return numero1 + numero2;
}
let Mostrar = true;
let frase = "O valor é: ";
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(addnumeros(Number(input1.value), Number(input2.value), Mostrar, frase));
        }
    });
}
