let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2')as HTMLInputElement;

function addnumeros(numero1: number, numero2: number, Mostrar: boolean, frase: string) {
    let result = numero1 + numero2

    if ( Mostrar ) {
        console.log(frase + result)
    }
    return numero1 + numero2
}

let Mostrar = true;
let frase = "O valor é: ";

if (button) {
    button.addEventListener('click', () => {

        if (input1 && input2) {
            console.log(addnumeros(Number(input1.value), Number(input2.value), Mostrar, frase));
        }
    })
}