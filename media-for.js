const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0 // nesse caso precisa declarar a variável fora do for

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]; // o += soma dentro da array
}

let media = somaDasNotas / notas.length

console.log(media)

//.