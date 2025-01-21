/*Enunciado:
Crie uma classe base ContaBancaria com um atributo protegido _saldo e um método
verSaldo. Crie uma classe derivada ContaCorrente que implementa métodos
depositar e sacar, com validação para impedir saques maiores que o saldo.*/

// Classe base
class ContaBancaria {
    constructor(saldo = 0) {
        this._saldo = saldo; // Atributo protegido
    }

    verSaldo() {
        return `Saldo atual: R$${this._saldo.toFixed(2)}`;
    }
}

// Classe derivada
class ContaCorrente extends ContaBancaria {
    constructor(saldo = 0) {
        super(saldo); // Chama o construtor da classe base
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor) {
        if (valor > this._saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else if (valor > 0) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
}

// Teste da classe ContaCorrente
const conta = new ContaCorrente(500);

console.log(conta.verSaldo()); // Saldo atual: R$500.00

conta.depositar(200); // Depósito de R$200.00 realizado com sucesso.
console.log(conta.verSaldo()); // Saldo atual: R$700.00

conta.sacar(300); // Saque de R$300.00 realizado com sucesso.
console.log(conta.verSaldo()); // Saldo atual: R$400.00

conta.sacar(500); // Saldo insuficiente para realizar o saque.