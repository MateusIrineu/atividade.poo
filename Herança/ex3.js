/* Crie uma classe base FormaGeometrica com um método calcularArea. As classes
derivadas Retangulo e Circulo devem implementar o cálculo da área com suas
fórmulas específicas.*/

class FormaGeometrica {
    constructor() {
        calcularArea()
    }
}

class Retangulo extends FormaGeometrica {
    constructor(base, largura) {
        calcularArea(); {
            const area = base * largura
        } return area
    }
}

const retangulo = new Retangulo(2, 3);

retangulo.calcularArea();
