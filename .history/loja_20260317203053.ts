enum Categoria{
    Eletronicos = "ELETRÔNICOS",
    Livros = "LIVROS",
    Vestuario = "VESTUÁRIO"
}

interface Produto{
    id: number
    nome: string
    preco: number
    categoria: Categoria
    estoque: number
    desconto?: number
}

interface ItemCarrinho{
    produto: Produto
    quantidade: number
}


const carrinho: ItemCarrinho[] = [] 

function adicionarAoCarrinho(produto: Produto, quantidade: number = 1){
    if(produto.estoque < 1){
        console.log("Produto fora de estoque")
        return
    }
    carrinho.push({produto, quantidade})
}

function calcularTotal(): number{
    return carrinho.reduce((total, item) =>{
        const preco = item.produto.preco - (item.produto.desconto ?? 0)
        return total + (preco * item.quantidade)
    }, 0)
}


//CRIAÇÃO OBJETOS -------------------------------------------

const produto1: Produto ={
    id: 1, 
    nome: "Monitor 4K", 
    preco: 2000, 
    categoria: Categoria.Eletronicos, 
    estoque: 5
}

const produto2: Produto ={
    id: 2, 
    nome: "Livro Clean Code", 
    preco: 100, 
    categoria: Categoria.Livros, 
    estoque: 10, 
    desconto: 15.
}

const produto3: Produto ={
    id: 3, 
    nome: "Teclado Mecânico", 
    preco: 500, 
    categoria: Categoria.Eletronicos, 
    estoque: 0
}

const testeErro: Produto ={
    id: 4,
    nome: 
}