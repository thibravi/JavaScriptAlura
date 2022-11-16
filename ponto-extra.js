const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)

//o foreach é um método que não retorna nada, somente executa o que está dentro do bloco
//o map executa e retorna uma array atualizada