/*Enunciado:
Implemente uma hierarquia de classes para representar dispositivos eletrônicos. A
classe base Eletronico deve ter o método ligar. Crie classes derivadas como Smartphone
e Notebook, sobrescrevendo esse método. Armazene objetos dessas classes em um
array e itere chamando o método ligar*/

class Eletronico {
    ligar() {
        throw new Error("O método 'ligar' deve ser subescrito.")
    }
}

class Smartphone extends Eletronico {
    ligar() {
        console.log("O Smartphone foi ligado.")
    }
}

class Notebook extends Eletronico {
    ligar() {
        console.log("O Notebook foi ligado.")
    }
}

const eletronicos = [
    new Smartphone(),
    new Notebook()
];

eletronicos.forEach((eletronico) => {
    eletronico.ligar()
});
