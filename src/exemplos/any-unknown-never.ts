let any: any
any = 3
any = 'teste'

let stringTest: string = 'verificar'
stringTest = any;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'Hello';
unknowValor = true;

let stringTest2: string = 'Vai rodar'; 
// stringTest2 = unknowValor;

if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor
}

// Funçãoq ue nunca para de rodar 
function LancaError(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

LancaError('Algo deu errado!', 503)