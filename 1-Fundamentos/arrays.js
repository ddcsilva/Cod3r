const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // Retorna undefined

valores[4] = 10;
console.log(valores);
console.log(valores.length); // Tamanho do array

valores.push({id: 3}, false, null, 'teste'); // Adiciona itens no Array
console.log(valores);

console.log(valores.pop()); // Remove o último elemento
delete valores[0]; // Remove o elemento desejado
console.log(valores);

console.log(typeof valores);