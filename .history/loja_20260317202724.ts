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

const produto1: Produto ={
    ID: 1, Nome: "Monitor 4K", Preço: 2000, Categoria: 'Eletrônicos', Estoque: 5
}