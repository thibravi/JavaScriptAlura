//objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real ou um conjunto de informações que faz sentido quando agrupado.

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11122233345",
    email: "andre@dominio.com",
};

//podemos usar o operador de ponto (.) para retornar uma propriedade


console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos`)

//também podemos chamar métodos desse valor recebido. Nesse caso vamos chamar uma substring

console.log(`Os três primeiros dígitos do CPF são: ${cliente.cpf.substring(0, 3)}`)