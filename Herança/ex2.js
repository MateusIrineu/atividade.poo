/* Crie uma classe base chamada Funcionario com os atributos nome e salario. Depois,
crie uma classe derivada Gerente que adiciona o atributo departamento e um método
para exibir todas as informações do gerente*/

class Funcionario {
    constructor(nome, salario) {
        this.nome = nome // propriedade 'nome' recebe o atributo 'nome';
        this.salario = salario // propriedade 'salario' recebe o atributo 'salario';
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario) // chama o constructor da classe Base
        this.departamento = departamento // propriedade 'departamento' recebe o atributo 'departamento;
    }
    infoGerente() {
        console.log(`Nome: ${this.nome}, Salário: ${this.salario}, Departamento: ${this.departamento}.`);
    }
}

// Instanciando os objetos:
const gerente = new Gerente("Irineu", 9999, "T.I");

gerente.infoGerente();