/*Enunciado:
Crie uma classificação de classes para veículos. Uma classe base Veiculo deve ter o
método mover. As classes derivadas Carro e Bicicleta devem escrever o método
mover com mensagens específicas.
Instancia objetos de ambas as classes, armazena-os em um array, e itere chama o
método moverde cada objeto, mostrando o comportamento polimórfico.*/

// Classe base Veiculo
class Veiculo {
// Método genérico para mover o veículo
mover() {
throw new Error("O método 'mover' precisa ser sobrescrito!"); // Lança um erro para forçar a implementação nas classes derivadas
}
}
// Classe derivada Carro
class Carro extends Veiculo {
mover() {
// Sobrescreve o método mover para o comportamento específico de um carro
console.log("O carro está se movendo na estrada."); // Mensagem exibida ao chamar o
método
}
}
// Classe derivada Bicicleta
class Bicicleta extends Veiculo {
mover() {
// Sobrescreve o método mover para o comportamento específico de uma bicicleta
console.log("A bicicleta está sendo pedalada na ciclovia."); // Mensagem exibida ao chamar o método
}
}
// Criação de um array de veículos
const veiculos = [
new Carro(), // Instancia um objeto da classe Carro e adiciona ao array
new Bicicleta() // Instancia um objeto da classe Bicicleta e adiciona ao array
];
// Itera sobre o array de veículos e chama o método mover de cada um
veiculos.forEach((veiculo) => {
veiculo.mover(); // Chama o método mover para o veículo atual e exibe a mensagem correspondente
});
