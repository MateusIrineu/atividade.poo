/*Enunciado:
Crie uma classificação de classes para representar dispositivos eletrônicos. Uma classe
base Dispositivodeve ter o método ligar. As classes derivadas Celulare
Tabletdevem Notebooksobrescrever esse método para exibir mensagens específicas
sobre como cada dispositivo está conectado.
Crie instâncias de cada classe, armazene-as em um array e utilize um loop para
demonstrar polimorfismo ao chamar o método ligar.*/

class Dispositivo {
    ligar() {
        throw new Error("O método 'ligar' deve ser subescrito.")
    }
}

class Celular extends Dispositivo {
    ligar() {
        console.log("O Celular está conectado no Wi-Fi.")
    }
}

class Tablet extends Dispositivo {
    ligar() {
        console.log("O Tablet está conectado na tomada.")
    }
}

class Notebook extends Dispositivo {
    ligar() {
        console.log("O Notebook está conectado na fonte.")
    }
}

const dispositivos = [
    new Celular(),
    new Tablet(),
    new Notebook()
]

dispositivos.forEach((dispositivo) => {
    dispositivo.ligar()
});