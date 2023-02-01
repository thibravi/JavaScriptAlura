//let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

//const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

//console.log(nomesAtualizados)

//let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

//const nomesAtualizados = nomes.map(nome => nome.toLowerCase())

//console.log(nomesAtualizados)


//aqui eu consegui colocar tudo em minúsculo e depois colocar a primeira letra em maiúsculo
//seguindo com os testes e usando o .split agora
let nomes = ["ana Julia", " Caio vinicius", " BIA silva"] //para funcionar eu precisei colocar espaço antes do segundo e terceiro nome. Ainda preciso resolver isso ainda.

let nomesAtualizados = nomes.map(nome => nome.toLowerCase())

let splitNames = nomesAtualizados.toString().split(" ")

for (let i = 0; i < splitNames.length; i++){
    splitNames[i] = splitNames[i][0].toUpperCase() + splitNames[i].substring(1)
}

let juntandoNomes = splitNames.join(" ")

console.log(juntandoNomes)

//.
