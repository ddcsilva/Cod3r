let valor; // Não inicializada -> Undefined
console.log(valor);

valor = null; // Ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro ao tentar acessar qualquer função

const produto = {};
console.log(produto);
console.log(produto.preco);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // Evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco // Tirar atributo de um objeto
console.log(produto);

produto.preco = null; // Sem preço
console.log(!!produto.preco);
console.log(produto);
