const nomes = ['Ana', 'Ju', 'Leo', 'Paula']

//nesse caso só vai funcionar se o que passarmos entre parênteses, como parâmetro, for uma funtion

// aqui também aceita um segundo parâmetro, como por exemplo o índice, que é opcional
nomes.forEach(imprimeNomes)

function imprimeNomes(nome){
    console.log(nome)
}