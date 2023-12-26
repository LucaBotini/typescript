class Cliente{

    nome
    cpf
    dataNascimento
    
    constructor(nome, cpf, dataNascimento){

        this.nome = nome
        this.cpf = cpf
        this.dataNascimento = dataNascimento
    }
}

let cliente = []
cliente.push(new Cliente('Luca', '556.304.898-52', '10/08/2004'))
console.log(cliente)

class PassagemArea{

    assento
    primeiraClasse
    valor
    passageiro
    voo

    constructor(assento, primeiraClasse, valor, passageiro, voo){

        this.assento = assento
        this.primeiraClasse = primeiraClasse
        this.valor = valor
        this.passageiro = passageiro
        this.voo = voo
    }
}

let Areapassagem = []
Areapassagem.push(new PassagemArea('A1', true, 1500, 'Abner', 828))

class PacoteViagem extends PassagemArea{

    titular
    passagemIda
    passagemVolta
    valorTotal

    constructor(passageiro, passagemIda, passagemVolta, valorTotal){

        super('', false, 0, passageiro, 0)
        this.titular = passageiro
        this.passagemIda = passagemIda
        this.passagemVolta = passagemVolta
        this.valorTotal = valorTotal
    }
}

let pacoteDeViagem = []
pacoteDeViagem.push(new PacoteViagem(PassagemArea.passageiro, '09/08', '27/12', 10000))
console.log(pacoteDeViagem)

class Voo{

    empresa
    numero
    data
    horario
    localPartida
    localDestino

    constructor(empresa, numero, data, horario, localPartida, localDestino){

        this.empresa = empresa
        this.numero = numero
        this.data = data
        this.horario = horario
        this.localPartida = localPartida
        this.localDestino = localDestino
    }
}