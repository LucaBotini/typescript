class Funcionario{
    nome
    salario

    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }
}

class Gerente extends Funcionario {
    departamento

    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento
    }

    exibirInformacoes(){
        console.log(`Nome: ${this.nome}, Salário: ${this.salario}, Departamento: ${this.departamento}`)
    }
}

let gerente = new Gerente('Jefferson Queiroz', 4500, 'Logistica')
// gerente.exibirInformacoes()




class Vendedor extends Funcionario{
    percentualComissao = 0.015

    constructor(nome, salario, percentualComissao){
        super(nome, salario)
        this.percentualComissao = percentualComissao
    }

    calcularSalario(){
        let resultado = this.salario * this.percentualComissao
        let novoSalario = this.salario + resultado
        return novoSalario
    }

    exibirInformacoes(){
        console.log(`Nome: ${this.nome}, Salário: ${this.salario}, Percentual Comissão: ${this.percentualComissao}, Aumento de salário para: ${this.calcularSalario()}`)
    }
}

let vendedor = new Vendedor('Jair Botini', 5000, 0.015)
// vendedor.exibirInformacoes()


class Produto{
    nomeProduto
    valor

    constructor(nomeProduto, valor){
        this.nomeProduto = nomeProduto
        this.valor = valor 
    }
}


class Venda {
    vendedor
    listaDeProdutos = []
    valorTotal

    constructor(vendedor) {
        this.vendedor = vendedor;
        this.valorTotal = 0;
    }

    AdicionarProduto(nomeProduto, valorProduto) {
        const novoProduto = new Produto(nomeProduto, valorProduto);
        this.listaDeProdutos.push(novoProduto);
        this.valorTotal += valorProduto;
    }
}

console.log(vendedor)
const venda = new Venda(vendedor);

venda.AdicionarProduto("Ryzen 5500", 600);
venda.AdicionarProduto("32GB RAM", 450);

console.log(venda.listaDeProdutos);
console.log(`Valor Total da Venda: ${venda.valorTotal}`);
