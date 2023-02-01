const nomes = ['ana', 'marcos', 'maria', 'mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter( (aluno, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)


//o filtro é um método que funciona na base do true / false
//.
