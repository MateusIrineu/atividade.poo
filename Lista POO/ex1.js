/* 
1. Crie uma classe abstrata chamada Funcionario. Ela deve possuir:
○ Propriedades protegidas (nome e salario) para representar o
nome e salário do funcionário.
○ Um método abstrato chamado calcularBonus().
2. Crie duas classes que herdam de Funcionario:
○ Gerente, cujo bônus é 20% do salário.
○ Desenvolvedor, cujo bônus é 10% do salário.
3. Adicione um método público mostrarDetalhes() que exiba o nome,
salário e bônus do funcionário.
4. Crie instâncias de ambas as classes e demonstre o uso do
polimorfismo chamando calcularBonus() para cada funcionário.*/

// Classe abstrata Funcionario
class Funcionario {
    constructor(nome, salario) {
    // Verifica se a classe é instanciada diretamente. Caso seja, lança um erro.
    if (this.constructor === Funcionario) {
    throw new Error("Classe abstrata não pode ser instanciada diretamente");
    }
    // Atribui o nome à propriedade _nome. A propriedade é protegida encapsulada).
    this._nome = nome;
    // Atribui o salário à propriedade _salario. A propriedade é rotegida (encapsulada).
    this._salario = salario;
    }
    // Método abstrato. Será implementado nas classes filhas.
    calcularBonus() {
    // Lança um erro se o método não for implementado pela classe ilha.
    throw new Error("Método abstrato deve ser implementado");
    }
    // Método público para mostrar os detalhes do funcionário.
    mostrarDetalhes() {
    // Retorna uma string com as informações do funcionário: nome, salário e bônus.
    return `Nome: ${this._nome}, Salário: ${this._salario}, Bônus:
    ${this.calcularBonus()}`;
    }
    }
    // Classe Gerente que herda de Funcionario
    class Gerente extends Funcionario {
    // Implementação do método calcularBonus para o Gerente
    calcularBonus() {
    // Calcula o bônus como 20% do salário
    return this._salario * 0.2;
    }
    }
    // Classe Desenvolvedor que herda de Funcionario
    class Desenvolvedor extends Funcionario {
    // Implementação do método calcularBonus para o Desenvolvedor
    calcularBonus() {
    // Calcula o bônus como 10% do salário
    return this._salario * 0.1;
    }
    }
    // Instanciando um Gerente com nome "Alice" e salário de 8000
    const gerente = new Gerente("Alice", 8000);
    // Instanciando um Desenvolvedor com nome "Bob" e salário de 5000
    const dev = new Desenvolvedor("Bob", 5000);
    // Exibe os detalhes do Gerente (nome, salário e bônus)
    console.log(gerente.mostrarDetalhes());
    // Exibe os detalhes do Desenvolvedor (nome, salário e bônus)
    console.log(dev.mostrarDetalhes());
    