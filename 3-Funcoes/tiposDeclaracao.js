console.log(soma(3, 4)); // Funciona em qualquer local
// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
};
console.log(sub(3, 4)); // Só funciona após a declaração

// named function expression
const mult = function mult(x, y) {
    return x * y;
};
console.log(mult(3, 4)); // Só funciona após a declaração
