const dados = require("./cliente.json");

console.log(dados)
console.log(typeof dados) // mostra o tipo de info. nesse caso é um objeto

// require é uma função para puxar um código de outro lugar. 
//Neste curso utilizamos uma função, chamada require(), que é bem presente no Node.js . Esta função nos permitiu passar o caminho de um arquivo terminado em .json para obter o conteúdo de um arquivo do tipo JSON. Em cursos posteriores, iremos ver que essa função também pode ser utilizada para reaproveitar códigos que estão em outros arquivos, também chamados de módulos.