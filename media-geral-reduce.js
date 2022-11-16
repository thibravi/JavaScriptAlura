const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

//o reduce vai reduzir todos os valores de uma array para um único valor numérico. O reduce precisar sempre ter esses dois parâmetros, sendo o primeiro o acumulador e o segundo é o valor atual. O 0 é número onde começa
//parâmetro function              
function mediaSala(notasDaSala){           //vai acumular os valores, valores atuais. pode usar os nomes que quiser
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

//código visto em outro exercício, porém, feito tudo por extenso e agora feito com o reduce
console.log(`A média da sala de JS é: ${mediaSala(salaJs)}`)
console.log(`A média da sala de Java é: ${mediaSala(salaJava)}`)
console.log(`A média da sala de Python é: ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(media)