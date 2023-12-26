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
/////////////////////
let valorabsoluto = 0;
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

        if(this.primeiraClasse === true){
            valorabsoluto = this.valor * 1.5
            return valorabsoluto 
        }else{
            valorabsoluto = this.valor
        }
    }

}


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

let vooo = []
vooo.push(new Voo('América Rental', 244, '13/09', '15:58', 'Guarulhos', 'Tókio'))


class PacoteViagem{

    titular
    passagemIda
    passagemVolta
    valorTotal

    constructor(titular, passagemIda, passagemVolta, valorTotal){

        this.titular = titular
        this.passagemIda = passagemIda
        this.passagemVolta = passagemVolta
        this.valorTotal = valorTotal

    }
}

let Areapassagem = []
Areapassagem.push(new PassagemArea('A1', true, 1500, 'Abner', 828))
console.log(Areapassagem)

const passagem = Areapassagem[0];


let pacoteDeViagem = []
pacoteDeViagem.push(new PacoteViagem(passagem.passageiro, '09/08', '27/12', valorabsoluto))
console.log(pacoteDeViagem)



console.log(`Passagem em nome de ${passagem.passageiro}, no assento ${passagem.assento} do voo ${passagem.voo}, com destino para ${vooo.localDestino}!`)
