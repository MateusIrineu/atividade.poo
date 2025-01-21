/*Enunciado:
Implemente uma hierarquia de classes para representar formas geométricas. Uma
classe base Forma deve conter um método calcularArea que é sobrescrito pelas
classes derivadas Circulo e Quadrado.
No final, instancie um objeto de cada classe e armazene-os em um array. Itere pelo array
chamando o método calcularAreapara cada objeto, demonstrando o uso do
polimorfismo.*/

// Classe base Forma
class Forma {
// Método genérico para calcular área
calcularArea() {
throw new Error("O método 'calcularArea' precisa ser sobrescrito!"); // Lança um erro para forçar a implementação nas classes derivadas
}
}
// Classe derivada Circulo
class Circulo extends Forma {
constructor(raio) {
super(); // Chama o construtor da classe base (Forma)
this.raio = raio; // Define a propriedade 'raio' do círculo
}
calcularArea() {
// Sobrescreve o método calcularArea para calcular a área do círculo
return Math.PI * this.raio * this.raio; // Fórmula para a área de um círculo: π * raio²
}
}
// Classe derivada Quadrado
class Quadrado extends Forma {
constructor(lado) {
super(); // Chama o construtor da classe base (Forma)
this.lado = lado; // Define a propriedade 'lado' do quadrado
}
calcularArea() {
// Sobrescreve o método calcularArea para calcular a área do quadrado
return this.lado * this.lado; // Fórmula para a área de um quadrado: lado²
}
}
// Criação de um array de formas geométricas
const formas = [
new Circulo(3), // Instancia um círculo com raio 3 e adiciona ao array
new Quadrado(4) // Instancia um quadrado com lado 4 e adiciona ao array
];
// Itera sobre o array de formas e calcula a área de cada uma
formas.forEach((forma) => {
console.log(`Área da forma: ${forma.calcularArea()}`); // Chama o método calcularArea e exibe o resultado no console
});
