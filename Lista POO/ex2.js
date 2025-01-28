/* Desenvolva um sistema de pagamento:
1. Crie uma classe abstrata chamada Pagamento.
○ Propriedades protegidas valor e descricao.
○ Método abstrato calcularTaxa().
2. Crie duas classes que herdam de Pagamento:
○ CartaoCredito, com uma taxa de 5%.
○ Boleto, com uma taxa de 2%.
3. Adicione um método exibirDetalhes() para mostrar o valor final
após a taxa.
4. Crie instâncias de ambas as classes e use polimorfismo para
calcular a taxa.*/

class Pagamento {
    constructor(valor) {
        this.valor = valor
    if (new.target === Pagamento) {
        throw new Error("Esta classe não pode ser instanciada diretamente.");
    }
}
    calcularTaxa() {
        throw new Error("Método genérico para calcular taxa.");
    }
 }

class CartaoCredito extends Pagamento {
    constructor(valor) {
        super(valor)
    }
    calcularTaxa() {
        return this.valor * 0.5
    }
    exibirDetalhes() {
        return `Cartão de Crédito: Taxa sobre ${this.valor} é ${this.calcularTaxa()}`;
    }
}

class Boleto extends Pagamento {
    constructor(valor) {
        super(valor)
    }
    calcularTaxa(valor) {
        return this.valor * 0.2
    }
    exibirDetalhes() {
        return `Boleto: Taxa sobre ${this.valor} é ${this.calcularTaxa()}`;
    }
}

const cartao = new CartaoCredito(500);
const boleto = new Boleto(200);

console.log(cartao.exibirDetalhes());
console.log(boleto.exibirDetalhes());
