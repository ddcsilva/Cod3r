const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
console.log(pilotos);

pilotos.pop(); // Remove o último elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); // Adiciona um elemento no final do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton"); // Adiciona um elemento no início do array
console.log(pilotos);

// Splice pode adicionar e/ou remover elementos

pilotos.splice(2, 0, "Bottas", "Massa"); // Adicionar
console.log(pilotos);

pilotos.splice(3, 1); // Remover
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Cria um novo Array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Cria um novo Array
console.log(algunsPilotos2);
