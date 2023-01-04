const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155544466610", "119998884160"], // array dentro do objeto
};

cliente.enderecos = [{ // adicionar os colchetes fora da lista de objetos para criar uma lista de objetos
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
}];

// usando um método de arrays para inserir mais endereços
cliente.enderecos.push({
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
});

// método de arrays = filter                      //aqui passamos uma função para selecionar o que será escolhido
const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

console.log(listaApenasApartamentos)