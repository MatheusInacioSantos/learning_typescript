const pessoa = {
    nome: 'Matheus',
    idade: 32,
    profissao: 'Developer'
}

pessoa.idade = 21;

const inacio: {nome: string, idade: number, profissao: string} = {
    nome: 'Inacio',
    idade: 34,
    profissao: 'Administração'
}

const joao: {nome: string, idade: number, profissao: string} = {
    nome: 'João',
    idade: 45,
    profissao: 'Vendendor'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Vendedor,
    Jornalista
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const pedro: Pessoa = {
    nome: 'Pedro',
    idade: 19,
    profissao: Profissao.Vendedor
}

const Jessica: Estudante = {
    nome: 'Jessica',
    idade: 24,
    profissao: Profissao.Jornalista,
    materias: ['Portugues', 'Inglês', 'Ciencias']
}

const Thiago: Estudante = {
    nome: 'Thiago',
    idade: 24,
    materias: ['Portugues', 'Inglês', 'Ciencias']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(Thiago.materias)