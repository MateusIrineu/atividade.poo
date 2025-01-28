/*Crie uma classe base Instrumento com o método tocar. Crie duas classes derivadas
Violao e Piano, que devem implementar o método tocar exibindo sons específicos.
*/

class Instrumento {
    tocar() {}
}

class Violao extends Instrumento {
    tocar() {
        console.log("O violão faz brombrombrom.");
    }
}

class Piano extends Instrumento {
    tocar() {
        console.log("O piano faz plimplimplim.");
    }
}

const instrumentos = [
    new Violao(),
    new Piano()
]

instrumentos.forEach((instrumento) => {
    instrumento.tocar()
});
