"use strict";
let valorAny;
valorAny: 3;
valorAny: 'Hello';
valorAny: true;
let valorString = 'Teste';
valorString = valorAny;
let valorString2 = "blablabla";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('Ola', ', como vai');
