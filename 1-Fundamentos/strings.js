const escola = "Cod3r"

console.log(escola.charAt(4)); // Retorna a caractere no índice 4 da string
console.log(escola.charAt(5)); // Ao invés de retornar um erro, ele imprime vazio
console.log(escola.charCodeAt(3)); // Retorna o valor na tabela ASCII no índice 4 da string
console.log(escola.indexOf('3')); // Retorna o índice do caractere localizado na string

console.log(escola.substring(1)); // Começa a imprimir a string a partir do índice informado
console.log(escola.substring(0, 3)); // Inicia no índice informado e vai até o índice informado menos 1

console.log('Escola '.concat(escola).concat("!")); // Realiza a concatenação pela função
console.log('Escola ' + escola + "!"); // Realiza a concatenação pelo símbolo de soma
console.log(escola.replace(3, 'e')); // Informa o caractere a ser localizado e substitui pelo segundo parâmetro

console.log('Ana,Maria,Pedro'.split(',')); // Quebra a string a partir de um separador