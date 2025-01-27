
const carro = {
    marca: "Mercedes",
    modelo: "Econômico",
    velocidade: 100
};

function acelerar() {
    carro.velocidade = carro.velocidade + 10;
    console.log(`Velocidade atual: ${carro.velocidade} km/h.`)
}

acelerar();