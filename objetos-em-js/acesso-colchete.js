//objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real ou um conjunto de informações que faz sentido quando agrupado.

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11122233345",
    email: "andre@dominio.com",
};

//podemos usar o operador colchete [] para retornar uma propriedade


console.log(`O nome do cliente é ${cliente["nome"]} e ele tem ${cliente["idade"]} anos`)

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});

