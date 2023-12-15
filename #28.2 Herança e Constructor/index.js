class Funcionario {
    nome
    salario

    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }

    exibirInformacoes(){
        console.log(funcionario)
    }
}

const funcionario = new Funcionario('Luca', 1800)
funcionario.exibirInformacoes();

class Gerente extends Funcionario {
    departamento

    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento
    }

    exibirInformacoes(){
        console.log(gerente)
    }
}

const gerente = new Gerente('Vanessa', 1800, 'Financeiro')
gerente.exibirInformacoes();


class Vendedor extends Funcionario{
    percentualComissao

    constructor(nome, salario, percentualComissao){
        super(nome, salario)
        this.percentualComissao = percentualComissao
    }

    exibirInformacoes() {
        console.log(vendedor)
    }

    calcularSalario() {
        const resultado = this.salario * this.percentualComissao
        const novoSalario = this.salario + resultado
        return console.log(`Seu salário com comissão se tornou: ${novoSalario}`)
    }

}

const vendedor = new Vendedor('Jair', 1800, 0.015)
vendedor.exibirInformacoes()
vendedor.calcularSalario()