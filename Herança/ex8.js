/* Crie uma classe base Veiculo, uma classe intermediária Terrestre e uma classe derivada Carro. A classe Carro
deve herdar atributos e métodos de Veículo e Terrestre. */

class Veiculo {
    constructor() {}
    ligar() {
        console.log("Ligando veículo.")
    }

    desligar() {
        console.log("Desligando veículo.")
    }
}

class Terrestre extends Veiculo {
    constructor() {
        super()
    }
    andarSobRodas() {
        console.log("O veículo terrestre anda sob rodas.")
    }
}

class Carro extends Terrestre {
    constructor() {
        super()
    }
    ligar() {
        console.log("O carro está ligado.")
    }
    desligar(){
        console.log("O carro está desligado.")
    }
    andarSobRodas() {
        console.log("O carro anda sob rodas.")
    }
    fecharPorta() {
        console.log("O carro está de portas fechadas.")
    }
}

const carro = new Carro()

carro.ligar();
carro.desligar();
carro.andarSobRodas();
carro.fecharPorta();
