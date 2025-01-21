/*Enunciado:
Crie uma classificação de classes para representar ferramentas. Uma classe base
Ferramenta deve ter o método usar. As classes derivadas Martelo e
ChaveDeFenda devem Serrote sobrescrever o método para exibir mensagens
específicas sobre como são usadas.
Crie instâncias de cada classe, armazene-as em um array e itere chamando o método
usarem cada instância para demonstrar polimorfismo.*/

class Ferramenta {
    usar() {
        throw new Error("O método 'usar' deve ser subescrito.")
    }
}

class Martelo extends Ferramenta {
    usar() {
        console.log("O Martelo deve ser usado para martelar pregos");
    }
}

class ChaveDeFenda extends Ferramenta {
    usar() {
        console.log("A Chave de Fenda deve ser usada para roscar ou desenroscar parafuso.")
    }
}

class Serrote extends Ferramenta {
    usar() {
        console.log("O Serrote deve ser usado para serrar.")
    }
}

const ferramentas = [
    new Martelo(),
    new ChaveDeFenda(),
    new Serrote
];

ferramentas.forEach((ferramenta) => {
    ferramenta.usar()
});