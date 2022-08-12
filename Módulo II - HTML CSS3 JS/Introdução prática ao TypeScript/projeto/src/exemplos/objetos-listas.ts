const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissão: 'desenvolvedora'
}

pessoa.idade = 29;

const andré: {nome: string, idade: number, profissão: string} = {
    nome: 'Andre',
    idade: 25,
    profissão: 'pintor'
}

const paula: {nome: string, idade: number, profissão: string} = {
    nome: 'Paula',
    idade: 25,
    profissão: 'Desenvolvedora'
}

enum Profissão {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissão?: Profissão
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissão: Profissão.Desenvolvedora
}

const jéssica: Estudante = {
    nome: 'Jéssica',
    idade: 28,
    profissão: Profissão.Desenvolvedora,
    materias: ['Mátematica discreta', 'Programação']
}

const mônica: Estudante = {
    nome: 'Jéssica',
    idade: 28,
    materias: ['Mátematica discreta', 'Programação']
}

function lista(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

lista(mônica.materias);