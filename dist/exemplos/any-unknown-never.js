"use strict";
let any;
any = 3;
any = 'teste';
let stringTest = 'verificar';
stringTest = any;
let unknowValor;
unknowValor = 3;
unknowValor = 'Hello';
unknowValor = true;
let stringTest2 = 'Vai rodar';
// stringTest2 = unknowValor;
if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}
// Funçãoq ue nunca para de rodar 
function LancaError(erro, codigo) {
    throw { error: erro, code: codigo };
}
LancaError('Algo deu errado!', 503);
