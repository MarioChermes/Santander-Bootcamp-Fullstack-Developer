listaAlunos = 
[{nome: "Mário", nota1: 5, nota2: 10}, 
{nome: "Marcos", nota1: 9, nota2: 6},
{nome: "João", nota1: 8, nota2: 4}];

(
function aprovados (alunos, médiaFinal) {
    alunosAprovados = []

    for (let c in alunos) {

        const {nome, nota1, nota2} = alunos[c];

        if ((nota1 + nota2) / 2 >= médiaFinal) {
            alunosAprovados.push(nome)
        }
    }
    console.log(alunos, "\n", alunosAprovados)
}(listaAlunos, 7)
)