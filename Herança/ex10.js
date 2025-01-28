/* crie uma classe base Funcionario com método calcularSalario. Crie classes 
derivadas Estagiario e Gerente, onde cada uma implementa lógica de cálculo do
salário de forma distina.*/

class Funcionario {
    constructor(salario = 2000) {
        this.salario = salario
    }
    calcularSalario() {
        return this.salario
    }
}

class Estagiario extends Funcionario {
    constructor(salario = 2000) {
        super(salario)
    }
    calcularSalario() {
        return this.salario * 0.5;
    }
}

class Gerente extends Funcionario {
    constructor (salario = 2000) {
        super(salario)
    }
    calcularSalario() {
        return this.salario * 2;
    }
}

const estagario = new Estagiario();
const gerente = new Gerente();

console.log(estagario.calcularSalario());
console.log(gerente.calcularSalario());
