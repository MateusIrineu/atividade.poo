/*Enunciado:
Crie uma ordem de aulas para representar animais. Uma classe base Animal deve ter o
método emitirSom. As classes derivadas Cachorro e Gato devem Passaro sobrescrever
esse método para selecionar sons específicos.
Instancie objetos de cada classe, armazene-os em um array e itere chame o método
emitir Som para demonstrar polimorfismo.*/

class Animal {
    emitirSom() {
        throw new Error("O método 'emitirSom' precisa ser subescreito.");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("O Cachorro faz AU AU.");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("O Gato faz Miau.");
    }
}

class Passaro extends Animal {
    emitirSom() {
        console.log("O Pássaro faz PRU PRU.");
    }
}

const animais = [
    new Cachorro(),
    new Gato(),
    new Passaro()
];

animais.forEach((animal) => {
    animal.emitirSom();
});