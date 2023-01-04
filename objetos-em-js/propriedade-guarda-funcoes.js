//propriedades que podem guardar funções

const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155544466610", "119998884160"], // array dentro do objeto
    saldo: 200,
    efetuaPagamento: function (valor) {
       // o this vai representar o objeto atual que estamos trabalhando
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(25);