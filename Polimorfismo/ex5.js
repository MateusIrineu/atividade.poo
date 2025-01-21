/*Enunciado:
Crie uma hierarquia de classes para representar meios de transporte. Uma classe base
Transporte deve ter o método mover. As classes derivadas Carro e Bicicleta devem
Aviao sobrescrever esse método para exibir mensagens específicas sobre como se
mover.
Crie instâncias de cada classe, armazene-as em um array e utilize um loop para chamar o
método moverem cada instância, demonstrando polimorfismo*/

class Transporte {
    mover() {
        throw new Error("O método 'mover' deve ser subescrito.");
    }
}

class Carro extends Transporte {
    mover() {
        console.log("O Carro deve andar pelas estradas.");
    }
}

class Bicicleta extends Transporte {
    mover() {
        console.log("A Bicicleta deve andar pelas ciclovias.")
    }
}

class Aviao extends Transporte {
    mover() {
        console.log("O Avião deve andar pelos céus.")
    }
}

const transportes = [
    new Carro(),
    new Bicicleta(),
    new Aviao()
]

transportes.forEach((transporte) => {
    transporte.mover()
});