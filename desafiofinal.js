// Array com 5 produtos da cantina
let produtos = ["Coxinha", "Pastel", "Refrigerante", "Suco", "Pão de Queijo"];

// Mostrar todos os produtos usando for
console.log("Lista inicial de produtos:");
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

// Adicionar um novo produto no final
produtos.push("Sanduíche");

// Remover o primeiro produto
produtos.shift();

// Alterar um produto usando índice
produtos[2] = "Chocolate";

// Mostrar a lista atualizada
console.log("\nLista atualizada de produtos:");
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

// Mostrar a quantidade final de produtos
console.log("\nQuantidade final de produtos:", produtos.length);

// Procurar se existe o produto "Coxinha"
if (produtos.includes("Coxinha")) {
    console.log("Produto 'Coxinha' encontrado na lista.");
} else {
    console.log("Produto 'Coxinha' não foi encontrado na lista.");
}