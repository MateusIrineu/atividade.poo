/* Crie uma classe base chamada Veiculo com método info que exibe o tipo de veículo.
Em seguida, crie duas classes derivadas chamadas Carro e Moto que sobrescrevam o
método info para incluir informações específicas do veículo como modelo do ano.*/

class Veiculo {
    info() {
        console.log("Método para descrever veículo.");
    }
}

class Carro extends Veiculo {
    info() {
        console.log("Este é um veículo do tipo carro, modelo Gol, ano 2011.")
    }
}

class Moto extends Veiculo {
    info() {
        console.log("Esté é um veículo do tipo moto, modelo XRE, ano 2012.")
    }
}

const veiculos = [
    new Carro(),
    new Moto()
]

veiculos.forEach((veiculo) => {
    veiculo.info()
});
