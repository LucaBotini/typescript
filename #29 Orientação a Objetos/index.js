
let pessoas = []

class Imovel{
    endereco
    cep
    areaM
    qtdBanheiros
    qtdQuartos
    valor
    constructor(endereco, cep, areaM, qtdBanheiros, qtdQuartos, valor){

        this.endereco = endereco
        this.cep = cep
        this.areaM = areaM
        this.qtdBanheiros = qtdBanheiros
        this.qtdQuartos = qtdQuartos
        this.valor = valor

    }


    
    RemoverPessoa(valorParaRemover){
        pessoas = pessoas.filter(elemento => elemento !== valorParaRemover);
    }
    AdicionarPessoa(){

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
    }

}
const casa = new Casa('avenida', '07143-510', '200m2', 5, 2, pessoas, 1200, true) 
console.log(casa)


pessoas.push(new Pessoa('Luca', '556.304.898-52', '10/08/2004'))
pessoas.push(new Pessoa('Vanessa Mozi', '356.304.438-52', '26/12/2005'))
pessoas.push(new Pessoa('Edvam', '556.304.438-52', '13/09/2001'))
console.log(pessoas)
Imovel.RemoverPessoa(1)

class Apartamento extends Imovel{
    andar
    valorCond


    constructor(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor, andar, valorCond){
        super(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor)
        this.andar = andar
        this.valorCond = valorCond

        if(qtdBanheiros > 3){
            throw new Error('Não há disponibilidade para Kitnet com mais que 3 banheiros.')
            }
    }
    
}

class Kitnet extends Imovel{
    
    constructor(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor){
        super(endereco, cep, areaM, qtdBanheiros, qtdQuartos, pessoas, valor)

        if(qtdBanheiros > 2){
            throw new Error('Não há disponibilidade para Kitnet com mais que 2 banheiros.')
            }
    }
 


}