/*Enunciado:
Crie uma classe base Conversor com um método estático celsiusParaFahrenheit.
Crie uma classe derivada ConversorAvancado que adiciona o método estático
fahrenheitParaCelsius*/

class Conversor {
    static celsiusParaFahrenheit(celcius) {
       return fahrenheit = celcius * 1.8 + 32
    }
}

class ConversorAvancado extends Conversor {
    constructor(celcius, fahrenheit) {
        super(celcius, fahrenheit)
    }
    static fahrenheitParaCelsius() {
        return celcius = (fahrenheit - 32) / 1.8 

    }
}

console.log(Conversor.celsiusParaFahrenheit(0, 32))

console.log(ConversorAvancado.fahrenheitParaCelsius(32, 0))
