//let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

//const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

//console.log(nomesAtualizados)

//let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

//const nomesAtualizados = nomes.map(nome => nome.toLowerCase())

//console.log(nomesAtualizados)


//aqui eu consegui colocar tudo em minúsculo e depois colocar a primeira letra em maiúsculo
let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

let nomesAtualizados = nomes.map(nome => nome.toLowerCase())

for (let i = 0; i < nomesAtualizados.length; i++){
    nomesAtualizados[i] = nomesAtualizados[i][0].toUpperCase() + nomesAtualizados[i].substring(1)
}


console.log(nomesAtualizados)
