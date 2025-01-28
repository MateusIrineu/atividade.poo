/*Crie um sistema para gerenciar diferentes tipos de produtos:
1. Crie uma classe abstrata chamada Produto com:
○ Propriedades protegidas nome e preco.
○ Um método abstrato calcularDesconto().
2. Crie duas subclasses:
○ Eletronico, com desconto de 10% no preço.
○ Alimento, com desconto de 5% no preço.
3. Adicione um método exibirDetalhes() para mostrar o nome, preço
original e preço com desconto.
4. Demonstre o uso de herança e polimorfismo ao criar instâncias das
subclasses e exibir as informações de cada produto.*/

class Produto {
    #nome
    #preco
    constructor(nome, preco) {
        this.#nome = nome
        this.#preco = preco
        if (new.target === Produto) {
            throw new Error("A classe Produto não pode ser instanciada diretamente.");
        }
    }
    
    getNome() {
        return this.#nome;
    }
    getPreco() {
        return this.#preco;
    }

    calcularDesconto() {
        throw new Error("Este método precisa ser usado por uma subclasse.");
    }
}

class Eletronico extends Produto {
    constructor(nome, preco) {
    super(nome, preco)
    }
    calcularDesconto() {
        return this.getPreco() * 0.10
    }
    exibirDetalhes() {
        return `nome: ${this.getNome()}, preço original: ${this.getPreco()} reais e preço com desconto: ${this.calcularDesconto()} reais.`
    }
}

class Alimento extends Produto {
    constructor(nome, preco) {
        super(nome, preco)
        }
    calcularDesconto() {
        return this.getPreco() * 0.05
    }
    exibirDetalhes() {
        return `nome: ${this.getNome()}, preço original: ${this.getPreco()} reais e preço com desconto: ${this.calcularDesconto()} reais.`
    }
}

const eletronico = new Eletronico("TV", 999);
const alimento = new Alimento("Arroz", 5);

console.log(eletronico.exibirDetalhes());
console.log(alimento.exibirDetalhes());
