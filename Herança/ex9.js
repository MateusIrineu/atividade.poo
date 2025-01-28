/* Crie uma classe base Conta com métodos privados simulados para manipular um saldo.
Crie uma classe derivada ContaPremium que utiliza métodos para validar depósitos e saques.*/

class Conta {
    #saldo
    constructor(saldo = 1000) {
        this.#saldo = saldo
    }

    #verSaldo() {
        console.log(`Saldo atual: ${this.#saldo}.`)
    }
    #deposito(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de ${valor} depositado com sucesso.`)
        } else {
            console.log("Valor insuficiente.")
        }
    }
    #sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente.")
        } else if (valor > 0) {
            this.#saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso.`)
        } else {
            console.log("Valor insuficiente.")
        }
    }
    verSaldoPublico() {
        this.#verSaldo();
    }
    depositoPublico(valor) {
        this.#deposito(valor);
    }
    sacarPublico(valor) {
        this.#sacar(valor);
    }
}

class ContaPremium extends Conta {
    constructor(saldo = 1000) {
        super(saldo);
    }
    verSaldoPremium() {
        this.verSaldoPublico();
    }
    depositoPremium(valor) {
        this.depositoPublico(valor);
    }
    sacarPremium(valor) {
        this.sacarPublico(valor);
    }
}

const conta = new ContaPremium();

conta.verSaldoPremium();
conta.depositoPremium(500);
conta.verSaldoPremium();
conta.sacarPremium(200);
conta.verSaldoPremium();
