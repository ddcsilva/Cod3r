const produto = {};
produto.nome = "Celular Ultra Mega";
produto.preco = 4998.9;
produto["Desconto Legal"] = 0.4; // Evitar atributos com espaço

console.log(produto);

const produto2 = {
    nome: "Camisa Polo",
    preco: 79.9,
    objeto: {
        blabla: 1,
        objeto: {
            blabla: 2,
        },
    },
};

console.log(produto2);
