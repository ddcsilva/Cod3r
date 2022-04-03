console.log(typeof Object); // Function
console.log(typeof new Object()); // Object

const Cliente = function () {};
console.log(typeof Cliente); // Funcion
console.log(typeof new Cliente()); // Object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto); // Funcion
console.log(typeof new Produto()); // Object
