//criando uma classe livro com as propriedades
class Livros{
titulo
autor
editora
ano
disponibilidade = true

//criando um método construtor para a classe Livro que recebe como parâmetro as informações que serão atribuídas as propriedades, com exceção de “Disponibilidade” que deve ter por padrão o valor “true” quando o objeto for criado

   constructor(titulo, autor, editora, ano){
    this.titulo = titulo
    this.autor = autor
    this.editora = editora
    this.ano = ano
   }
}
//alguns objetos da classe Livro e adicione-os em um array;
let livros = []
livros.push(new Livros("Terror do fantasma", "Leticia", "DefineLine", 2004))
livros.push(new Livros("livro 2", "autora 2", "editora 2", 2005))



class Biblioteca{
    nome 
    endereco 
    telefone 
    acervoDeLivros = []
    constructor(nome, endereco, telefone, acervo){
    this.nome = nome
    this.endereco = endereco
    this.telefone = telefone
    this.acervoDeLivros = acervo
    }



buscarLivroTitulo(titulo){
    this.acervoDeLivros.forEach(livro => {
        if(livro.titulo == titulo){
            console.log(livro)
        }
    })
}

emprestarLivro(titulo){
    let emprestado = false
    this.acervoDeLivros.forEach(livro =>{
        if(livro.titulo == titulo){
            if(livro.disponibilidade == true){
                livro.disponibilidade = false
                emprestado = true
            }
        }
    })
    if(emprestado){
        return true
    }else{
        return false
    }
}

devolucaoLivro(titulo){
livros.forEach(livro =>{
    if(livro.titulo == titulo){
            livro.disponibilidade = true
            console.log('Livro devolvido')
        }
})
if(emprestado){
    return true
}else{
    return false
}
}
}

let biblioteca = new Biblioteca('Biblioteca 1', 'Endereço 1', 'Telefone 1', livros)
biblioteca.buscarLivroTitulo = 'livro 2' 
biblioteca.emprestarLivro = 'livro 2' 
biblioteca.devolucaoLivro = 'livro 2' 

