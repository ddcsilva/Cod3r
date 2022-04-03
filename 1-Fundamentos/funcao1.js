// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // O parâmetro não informado será undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8); // Ignora os demais parâmetros
imprimirSoma(); // Os parâmetros não informado será undefined

// Função com retorno
function soma(a = 0, b = 0) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); // Parâmetro default 0 se não for informado valor
console.log(soma());
