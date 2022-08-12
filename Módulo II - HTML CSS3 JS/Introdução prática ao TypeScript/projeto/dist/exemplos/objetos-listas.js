"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissão: 'desenvolvedora'
};
pessoa.idade = 29;
const andré = {
    nome: 'Andre',
    idade: 25,
    profissão: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissão: 'Desenvolvedora'
};
var Profissão;
(function (Profissão) {
    Profissão[Profissão["Professora"] = 0] = "Professora";
    Profissão[Profissão["Atriz"] = 1] = "Atriz";
    Profissão[Profissão["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissão[Profissão["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissão || (Profissão = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissão: Profissão.Desenvolvedora
};
const jéssica = {
    nome: 'Jéssica',
    idade: 28,
    profissão: Profissão.Desenvolvedora,
    materias: ['Mátematica discreta', 'Programação']
};
const mônica = {
    nome: 'Jéssica',
    idade: 28,
    materias: ['Mátematica discreta', 'Programação']
};
function lista(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
lista(mônica.materias);
