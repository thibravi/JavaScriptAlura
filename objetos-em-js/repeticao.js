const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155544466610", "119998884160"], // array dentro do objeto
};

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function'){

        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); // console.log(chave) acessa só as chaves das nossas propriedades. nomes das propriedades. console.log(cliente[chave]) acessa a info armazenada dentro da chave
    }    
}