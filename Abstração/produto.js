
const produto = {
    nome: "Salgadinho",
    preco: 2,
    estoque: 10
};

function verificarEstoque() {
    console.log(`Ainda restam ${produto.estoque} unidades de ${produto.nome}.`)
};

verificarEstoque();
