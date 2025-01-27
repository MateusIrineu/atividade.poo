/*Enunciado:
Crie uma classe base Conversor com um método estático celsiusParaFahrenheit.
Crie uma classe derivada ConversorAvancado que adiciona o método estático
fahrenheitParaCelsius*/

class Conversor {
    static celsiusParaFahrenheit(celcius) {
       return celcius * 1.8 + 32
    }
}

class ConversorAvancado extends Conversor {
    static fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) / 1.8
    }
}

console.log(Conversor.celsiusParaFahrenheit(50))

console.log(ConversorAvancado.fahrenheitParaCelsius(37))
