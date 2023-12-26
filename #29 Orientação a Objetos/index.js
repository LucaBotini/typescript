
let pessoas = []

class Imovel{
    endereco
    cep
    areaM
    qtdBanheiros
    qtdQuartos
    pessoas
    valor
    constructor(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor){

        this.endereco = endereco
        this.cep = cep
        this.areaM = areaM
        this.qtdBanheiros = qtdBanheiros
        this.qtdQuartos = qtdQuartos
        this.pessoas = pessoas
        this.valor = valor
    }

}

const imovel = []
imovel.push(new Imovel('imovel1', 'cep1', 'aream', 1, 1, 100 )) 
console.log(imovel)


class Pessoa{
    nome
    cpf
    dataNascimento

    constructor(nome, cpf, dataNascimento){

        this.nome = nome
        this.cpf = cpf
        this.dataNascimento = dataNascimento
    }

}

class Casa extends Imovel{
    ComQuintal

    constructor(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor, ComQuintal){
        super(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor)
        this.ComQuintal = ComQuintal

        if(qtdBanheiros > 5){
            throw new Error('Não há disponibilidade para Kitnet com mais que 5 banheiros.')
            }

            if(ComQuintal == true){
                let resultado = valor * 0.300
                resultado += valor
                return console.log(`Valor da casa com quintal (+30%): ${resultado}`) 
            }
    }

}
const casa = new Casa('avenida', '07143-510', '200m2', 5, 2, 'pessoas', 1200, true) 
console.log(casa)


pessoas.push(new Pessoa('Luca', '556.304.898-52', '10/08/2004'))
pessoas.push(new Pessoa('Vanessa Mozi', '356.304.438-52', '26/12/2005'))
pessoas.push(new Pessoa('Edvam', '556.304.438-52', '13/09/2001'))
console.log(pessoas)

//método para remover pessoa da casa manualmente.
// let indice = pessoas.indexOf(0);

// if (indice !== -1) {
//     pessoas.splice(indice, 1);
// }

class Apartamento extends Imovel{
    andar
    valorCond


    constructor(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor, andar, valorCond){
        super(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor)
        this.andar = andar
        this.valorCond = valorCond
    
        if(valor > 0){
        let resultado = valor + valorCond
        console.log(`Valor do condominio + apartamento = ${resultado}`)
        }

        if(qtdBanheiros > 3){
            throw new Error('Não há disponibilidade para Kitnet com mais que 3 banheiros.')
        }
    }
}

let apartamento = new Apartamento('endereco', 'cep', 'areaM', 1, 2, pessoas, 800, 2, 200)
console.log(apartamento)

class Kitnet extends Imovel{
    
    constructor(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor){
        super(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor)

        if(qtdBanheiros > 2){
            throw new Error('Não há disponibilidade para Kitnet com mais que 2 banheiros.')
            }
    }
 


}




//(((((((RESTA ADICIONAR, REMOVER PESSOAS))))))) E AJUSTAR APARTAMENTO QUE NÃO MOSTRA NA CLASSE O VALOR DO APARTAMENTO.
//****************(((((((((CORREÇÃO NA CONTA DO APARTAMENTO + AMOSTRA DE CLASSE.))))))))) */