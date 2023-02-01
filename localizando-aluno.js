const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

// arrow function
// includes -> booleano
//indexof -> retorna o número do índice
// o método includes (sempre vai retornar verdadeiro ou falso) pega o array e faz uma busca. Aqui ele vai na primeira array, índice 0 (que é de 2 dimensões).
// o indexof vai trazer qual o número do índice e também fazendo uma pesquisa

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]

    } else {
        return "O aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Thiago"))

//.