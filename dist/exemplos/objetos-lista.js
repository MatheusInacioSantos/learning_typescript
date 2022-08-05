"use strict";
const pessoa = {
    nome: 'Matheus',
    idade: 32,
    profissao: 'Developer'
};
pessoa.idade = 21;
const inacio = {
    nome: 'Inacio',
    idade: 34,
    profissao: 'Administração'
};
const joao = {
    nome: 'João',
    idade: 45,
    profissao: 'Vendendor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Vendedor"] = 3] = "Vendedor";
    Profissao[Profissao["Jornalista"] = 4] = "Jornalista";
})(Profissao || (Profissao = {}));
const pedro = {
    nome: 'Pedro',
    idade: 19,
    profissao: Profissao.Vendedor
};
const Jessica = {
    nome: 'Jessica',
    idade: 24,
    profissao: Profissao.Jornalista,
    materias: ['Portugues', 'Inglês', 'Ciencias']
};
const Thiago = {
    nome: 'Thiago',
    idade: 24,
    materias: ['Portugues', 'Inglês', 'Ciencias']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Thiago.materias);
