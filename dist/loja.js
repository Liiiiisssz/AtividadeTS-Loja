"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Categoria;
(function (Categoria) {
    Categoria["Eletronicos"] = "ELETR\u00D4NICOS";
    Categoria["Livros"] = "LIVROS";
    Categoria["Vestuario"] = "VESTU\u00C1RIO";
})(Categoria || (Categoria = {}));
const carrinho = [];
function adicionarAoCarrinho(produto, quantidade = 1) {
    if (produto.estoque < 1) {
        console.log("Produto fora de estoque");
        return;
    }
    carrinho.push({ produto, quantidade });
}
function calcularTotal() {
    return carrinho.reduce((total, item) => {
        const preco = item.produto.preco - (item.produto.desconto ?? 0);
        return total + (preco * item.quantidade);
    }, 0);
}
//CRIAÇÃO OBJETOS -------------------------------------------
const produto1 = {
    id: 1,
    nome: "Monitor 4K",
    preco: 2000,
    categoria: Categoria.Eletronicos,
    estoque: 5
};
const produto2 = {
    id: 2,
    nome: "Livro Clean Code",
    preco: 100,
    categoria: Categoria.Livros,
    estoque: 10,
    desconto: 15.
};
const produto3 = {
    id: 3,
    nome: "Teclado Mecânico",
    preco: 500,
    categoria: Categoria.Eletronicos,
    estoque: 0
};
//const testeErro: Produto ={
//    id: 4,
//    nome: "Banana",
//    preco: 10,
//    categoria: Categoria.Alimentos
//}
//OPERAÇÕES NO CARRINHO ----------------------------------------
adicionarAoCarrinho(produto1, 1);
adicionarAoCarrinho(produto2);
adicionarAoCarrinho(produto3);
adicionarAoCarrinho(produto1, 2);
const total = calcularTotal();
console.log(total);
function finalizarCompra() {
    return `Resumo da compra: ${calcularTotal()}`;
}
const resultadoFinal = finalizarCompra();
console.log(resultadoFinal);
resultadoFinal + 10;
//# sourceMappingURL=loja.js.map