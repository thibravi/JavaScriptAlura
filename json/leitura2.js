//transforma em string e depois volta a transformar em objeto

const dados = require("./cliente.json");

console.log(dados)
console.log(typeof dados) // mostra o tipo de info. nesse caso é um objeto

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
console.log(typeof objetoCliente);