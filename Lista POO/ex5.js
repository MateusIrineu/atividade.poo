/*Implemente um sistema que represente diferentes tipos de animais:
1. Crie uma classe abstrata Animal com:
○ Propriedades protegidas nome e especie.
○ Um método abstrato emitirSom().
2. Crie duas subclasses:
○ Cachorro, que emite o som "Latido".
○ Gato, que emite o som "Miau".
3. Adicione um método descricao() para mostrar o nome, espécie e som
do animal.
4. Use polimorfismo para exibir a descrição de diferentes animais*/

class Animal {
    #nome
    #especie
    constructor(nome, especie) {
        this.#nome = nome
        this.#especie = especie
        if (new.target === Animal) {
            throw new Error("A classe Produto não pode ser instanciada diretamente.");
        }
    }

    getNome() {
        return this.#nome;
    }
    getEspecie() {
        return this.#especie;
    }

    emitirSom() {
        throw new Error("Este método precisa ser usado por uma subclasse.");
    }
}

class Cachorro extends Animal {
    constructor(nome, especie) {
        super(nome, especie)
    }
    emitirSom() {
        return `O cachorro faz AU AU.`
    }
    descricao() {
        return `nome: ${this.getNome()}, espécie: ${this.getEspecie()}, som: ${this.emitirSom()}`;
    }
}

class Gato extends Animal {
    constructor(nome, especie) {
        super(nome, especie)
    }
    emitirSom() {
        return `O gato faz MIAU.`
    }
    descricao() {
        return `nome: ${this.getNome()}, espécie: ${this.getEspecie()}, som: ${this.emitirSom()}`;
    }
}

const cachorro = new Cachorro("Skol", "Vira-Lata");
const gato = new Gato("Mel", "Siamesa");

console.log(cachorro.descricao());
console.log(gato.descricao());
