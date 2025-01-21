/*Enunciado:
Crie uma classificação de classes para representar notificações. Uma classe base
Notificacaodeve ter o método enviar. As classes derivadas Email, SMSe Pushdevem
sobrescrever o método para exibir mensagens específicas sobre como cada notificação
é enviada.
Crie instâncias de cada classe, armazene-as em um array e demonstre o polimorfismo ao
chamar o método enviarem cada instância.
*/

class Notificacao {
    enviar() {
        throw new Error("O método 'enviar' deve ser subescrito.")
    }
}

class Email extends Notificacao {
    enviar() {
        console.log("Uma mensagem do tipo e-mail será enviada.")
    }
}

class Sms extends Notificacao {
    enviar() {
        console.log("Uma mensagem do tipo SMS será enviada.")
    }
}

class Push extends Notificacao {
    enviar() {
        console.log("Uma mensagem do tipo Push será enviada.")
    }
}

const notificacoes = [
    new Email(),
    new Sms(),
    new Push()
]

notificacoes.forEach((notificacao) => {
    notificacao.enviar()
});
