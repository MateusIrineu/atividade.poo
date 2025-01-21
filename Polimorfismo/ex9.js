/* Enunciado:
Crie uma hierarquia de classes para diferentes tipos de contas bancárias. A classe base
ContaBancaria deve ter o método calcularJuros. Crie classes derivadas como
ContaPoupanca e ContaCorrente, sobrescrevendo esse método. No final, itere por uma
lista de contas, chamando o método de forma polimórfica.*/

class ContaBancaria {
    calcularJuros() {
        throw new Error("O método 'calcularJuros' deve ser subescrito.")
    }
}

class ContaPoupanca extends ContaBancaria {
    calcularJuros() {
        console.log("Tipo de conta a ser calculada o juros: Poupança.")
    }
}

class ContaCorrente extends ContaBancaria {
    calcularJuros() {
        console.log("Tipo de conta a ser calculada o juros: Corrente.")
    }
}

const contas = [
    new ContaPoupanca(),
    new ContaCorrente()
]

contas.forEach((conta) => {
    conta.calcularJuros()
});
