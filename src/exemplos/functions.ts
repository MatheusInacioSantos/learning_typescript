
// Forçar uma função a retornar um valor numérico
function somarValoresNumericos (numero1: number, numbero2: number): number {
    return numero1 + numbero2
}

console.log(somarValoresNumericos(1,3));

// Função que não retorna valor
function printValoresNumericos (numero1: number, numbero2: number): void {
    console.log(numero1 + numbero2)
}

// Criando callback para fazer tratamento dentro da function
function somandoValoresNumericosETratar (numero1: number, numero2: number, 
    callback: (numero: number) => number): number {
    
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

console.log(somandoValoresNumericosETratar(1,5, aoQuadrado));