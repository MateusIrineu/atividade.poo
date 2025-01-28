/*1. Implemente uma classe abstrata Veiculo com:
○ Propriedades protegidas marca e modelo.
○ Um método abstrato calcularImposto().
2. Crie duas subclasses:
○ Carro, cujo imposto é 10% do valor do carro.
○ Moto, cujo imposto é 5% do valor da moto.
3. Adicione um método mostrarInformacoes() que exiba a marca, modelo
e imposto.
4. Demonstre o polimorfismo criando uma lista com instâncias das
subclasses e iterando para exibir as informações de cada veículo.
*/

class Veiculo {
    #marca
    #modelo
    constructor(marca, modelo) {
        this.#marca = marca
        this.#modelo = modelo
        if (new.target === Veiculo) {
            throw new Error("Esta classe precisa ser instanciada.");
        }
    }

    getMarca() {
        return this.#marca
    }

    getModelo() {
        return this.#modelo
    }
    calcularImposto() {
        console.log("Método genérico para calcular imposto.");
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, imposto) {
        super(marca, modelo)
        this.imposto = imposto
    }
    calcularImposto() {
        return this.imposto * 0.10
    }
    mostrarInformacoes() {
        return `Este carro de marca ${this.getMarca()}, de modelo ${this.getModelo()}, tem o imposto de ${this.calcularImposto()}`
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, imposto) {
        super(marca, modelo)
        this.imposto = imposto
    }
    calcularImposto() {
        return this.imposto * 0.05
    }
    mostrarInformacoes() {
        return `Esta moto de marca ${this.getMarca()}, de modelo ${this.getModelo()}, tem o imposto de ${this.calcularImposto()}`
    }
}

const carro = new Carro("Hyundai", "Gol Quadrado", 90000);
const moto = new Moto("Honda", "XRE", 20000);

console.log(carro.mostrarInformacoes());
console.log(moto.mostrarInformacoes());


// USO DE GET REVISAR