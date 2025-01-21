/*Enunciado:
Implemente uma classificação de classes para representar métodos de pagamento. Uma
classe base Pagamento deve conter um método processarPagamento, que é sobrescrito
pelas classes derivadas CartaoDeCredito, Boleto e Pix.
Cada classe derivada deve exibir uma mensagem específica no método
processarPagamento. Crie instâncias de cada classe, armazene-as em um array e itere
chame o método processarPagamento para demonstrar polimorfismo.*/

class Pagamento {
    processarPagamento() {
        throw new Error("O método 'processarPagamento' precisa ser subescrito!");
    }
}

// classe derivada CartaoDeCredito
class CartaoDeCredito extends Pagamento {
    processarPagamento() {
        console.log("Método de pagamento: Cartão de crédito.");
    }
}

// classe derivada Boleto
class Boleto extends Pagamento {
    processarPagamento() {
        console.log("Método de pagamento: Boleto.");
    }
}

// classe derivada Pix
class Pix extends Pagamento {
    processarPagamento() {
        console.log("Método de pagamento: Pix.");
    }
}

const pagamentos = [
    new CartaoDeCredito(),
    new Boleto(),
    new Pix()
]

pagamentos.forEach((pagamento) => {
    pagamento.processarPagamento();
})