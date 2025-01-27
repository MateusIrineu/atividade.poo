/*Enunciado:
Crie uma classe base Produto com os atributos nome e preco. Crie duas classes
derivadas Eletronico e Vestuario, cada uma com um método adicional (garantia
para eletrônicos e tamanho para vestuário).*/

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

class Eletronico extends Produto {
    static garantia(nome, preco) {
        return (`O produto ${nome}, de preço ${preco} reais, tem garantia de 1 ano.`)
    }
}

class Vestuario extends Produto {
    static tamanho(nome, preco) {
        return (`A camisa do tipo ${nome}, de preço ${preco} reais, tem o tamanho GG.`)
    }
}

console.log(Eletronico.garantia("leite", 20));
console.log(Vestuario.tamanho("regata", 100));