// podemos adicionar propriedades mesmo depois do objeto ter sido criado
// se temos um objeto guardado dentro de uma variável const, podemos manipulá-lo. só não podemos reatribui alguma coisa dentro dessa vairável
// as variáveis do tipo const apenas não podem ser reatribuidas, mas podem ter seu conteúdo interno alterado.


const pessoa = {
    nome: "Luma",
    profissao: "engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa); //vai exibir o objeto inteiro

const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa