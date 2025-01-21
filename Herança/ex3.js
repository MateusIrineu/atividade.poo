/* Crie uma classe base FormaGeometrica com um método calcularArea. As classes
derivadas Retangulo e Circulo devem implementar o cálculo da área com suas
fórmulas específicas.*/

class Forma {
 
    calcularArea() {
    throw new Error("O método 'calcularArea' precisa ser sobrescrito!"); 
    }
    }
   
    class Circulo extends Forma {
    constructor(raio) {
    super(); 
    this.raio = raio; 
    }
    calcularArea() {

    return Math.PI * this.raio * this.raio; 
    }
    }

    class Retangulo extends Forma {
    constructor(base, altura) {
    super(); // 
    this.base = base; 
    this.altura = altura;
    }
    calcularArea() {
 
    return this.base * this.altura; 
    }
    }

    const formas = [
    new Circulo(3), 
    new Retangulo(4,5) 
    ];
  
    formas.forEach((forma) => {
    console.log(`Área da forma: ${forma.calcularArea()}`); 
    });