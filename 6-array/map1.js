const numeros = [1, 2, 3, 4, 5];

// Map é um For com propósito
let resultado = numeros.map(function (elemento) {
    return elemento * 2;
});

console.log(numeros);
console.log(resultado);

const soma10 = (elemento) => elemento + 10;
const triplo = (elemento) => elemento * 3;
const paraDinheiro = (elemento) => `R$ ${parseFloat(elemento).toFixed(2).replace(".", ",")}`;

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
